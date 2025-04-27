// 'use client';

// import { useState } from 'react';
// import {
//   FaGooglePay,
//   FaPhone,
//   FaCreditCard,
//   FaWallet,
//   FaCheckCircle,
// } from "react-icons/fa"; // Use 'fa' for the icons

// export default function Payment() {
//   const [selectedMethod, setSelectedMethod] = useState('');
//   const [paymentDone, setPaymentDone] = useState(false);

//   const handlePayment = () => {
//     if (selectedMethod) {
//       setPaymentDone(true);
//     } else {
//       alert("Please select a payment method.");
//     }
//   };

//   const paymentOptions = [
//     { id: "gpay", label: "Google Pay", icon: <FaGooglePay className="text-[#4285F4]" /> },
//     { id: "phonepe", label: "PhonePe", icon: <FaPhone className="text-[#673AB7]" /> },
//     { id: "card", label: "Credit / Debit Card", icon: <FaCreditCard className="text-[#FF5722]" /> },
//     { id: "wallet", label: "Wallet", icon: <FaWallet className="text-[#009688]" /> },
//   ];

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white text-black p-6">
//       <div className="bg-white text-black rounded-2xl shadow-lg w-full max-w-md p-8 space-y-6">
//         {!paymentDone ? (
//           <>
//             <h2 className="text-3xl font-bold text-center">Choose Payment Method</h2>

//             <div className="space-y-4">
//               {paymentOptions.map(option => (
//                 <label key={option.id} className={`flex items-center gap-4 bg-gray-200 p-4 rounded-lg cursor-pointer transition
//                   ${selectedMethod === option.id ? 'ring-2 ring-[#131842] ring-offset-2' : ''}`}
//                 >
//                   <input
//                     type="radio"
//                     name="payment"
//                     value={option.id}
//                     checked={selectedMethod === option.id}
//                     onChange={() => setSelectedMethod(option.id)}
//                     className="hidden"
//                   />
//                   {option.icon}
//                   <span className="font-semibold">{option.label}</span>
//                 </label>
//               ))}
//             </div>

//             <div className="pt-4">
//               <button
//                 onClick={handlePayment}
//                 className="w-full flex items-center justify-center gap-3 bg-[#131842] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#0f1238] transition"
//               >
//                 <FaCreditCard />
//                 Proceed to Pay
//               </button>
//             </div>
//           </>
//         ) : (
//           <div className="text-center space-y-4">
//             <FaCheckCircle className="text-green-500 text-5xl mx-auto" />
//             <h2 className="text-3xl font-bold">Payment Successful 🎉</h2>
//             <p className="text-gray-800">Thank you for choosing your ride. Have a safe journey!</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// pages/payment.js


// pages/payment.js
"use client"
import { useState } from 'react';
import Head from 'next/head';
import { FaCreditCard, FaUniversity, FaCheckCircle } from 'react-icons/fa';
import { FaPaypal, FaApple, FaGoogle } from 'react-icons/fa';

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  const paymentMethods = [
    { id: 'credit', name: 'Credit Card', icon: FaCreditCard, color: 'text-gray-700' },
    { id: 'paypal', name: 'PayPal', icon: FaPaypal, color: 'text-blue-500' },
    { id: 'apple', name: 'Apple Pay', icon: FaApple, color: 'text-black' },
    { id: 'google', name: 'Google Pay', icon: FaGoogle, color: 'text-green-500' },
    { id: 'bank', name: 'Bank Transfer', icon: FaUniversity, color: 'text-gray-700' }
  ];

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Process payment logic would go here
    setTimeout(() => {
      setPaymentComplete(true);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (paymentComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Head>
          <title>Thank You</title>
        </Head>
        <div className="text-center p-8 max-w-md">
          <div className="text-green-500 text-6xl mb-4">
            <FaCheckCircle className="inline-block" />
          </div>
          <h1 className="text-3xl font-bold text-black mb-2">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">Thank you for your purchase.</p>
          <button 
            onClick={() => {
              setPaymentComplete(false);
              setSelectedMethod(null);
            }}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Return to payment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Payment</title>
      </Head>
      
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-black mb-6">Complete Your Payment</h1>
        
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-black mb-4">Select Payment Method</h2>
          <div className="grid grid-cols-2 gap-4">
            {paymentMethods.map(({ id, name, icon: Icon, color }) => (
              <button
                key={id}
                onClick={() => setSelectedMethod(id)}
                className={`p-4 border rounded-lg flex items-center justify-center transition ${selectedMethod === id ? 'border-black bg-gray-100' : 'border-gray-300 hover:border-gray-400'}`}
              >
                <Icon className={`text-2xl mr-2 ${color}`} />
                <span className="text-black">{name}</span>
              </button>
            ))}
          </div>
        </div>

        {selectedMethod === 'credit' && (
          <form onSubmit={handlePaymentSubmit}>
            <div className="mb-4">
              <label className="block text-black text-sm font-medium mb-2" htmlFor="card-number">
                Card Number
              </label>
              <input
                type="text"
                id="card-number"
                name="number"
                value={cardDetails.number}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-black text-sm font-medium mb-2" htmlFor="card-name">
                Name on Card
              </label>
              <input
                type="text"
                id="card-name"
                name="name"
                value={cardDetails.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-black text-sm font-medium mb-2" htmlFor="card-expiry">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="card-expiry"
                  name="expiry"
                  value={cardDetails.expiry}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-black text-sm font-medium mb-2" htmlFor="card-cvv">
                  CVV
                </label>
                <input
                  type="text"
                  id="card-cvv"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition"
            >
              Pay Now
            </button>
          </form>
        )}

        {selectedMethod && selectedMethod !== 'credit' && (
          <div>
            <div className="mb-6 p-4 bg-gray-100 rounded-lg flex items-center">
              {(() => {
                const { icon: Icon, color } = paymentMethods.find(m => m.id === selectedMethod);
                return <Icon className={`text-3xl mr-3 ${color}`} />;
              })()}
              <span className="text-black font-medium">
                {paymentMethods.find(m => m.id === selectedMethod).name}
              </span>
            </div>
            <button
              onClick={() => setPaymentComplete(true)}
              className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition"
            >
              Pay with {paymentMethods.find(m => m.id === selectedMethod).name}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;