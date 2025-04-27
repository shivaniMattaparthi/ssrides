// import { useState, useEffect } from 'react';
// import { CarListData } from '@/app/utils/CarListData';
// const CarManagement = () => {
//     const [cars, setCars] = useState([]);
//     const [newCar, setNewCar] = useState({
//         name: '',
//         seat: '',
//         desc: '',
//         amount: '',
//         image: ''
//     });

//     // Load cars from localStorage on component mount
//     useEffect(() => {
//         const storedCars = localStorage.getItem('carList');
//         if (storedCars) {
//             setCars(JSON.parse(storedCars));
//         } else {
//             // Initialize with default data if nothing in localStorage
//             localStorage.setItem('carList', JSON.stringify(CarListData));
//             setCars(CarListData);
//         }
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewCar(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
        
//         const newId = cars.length > 0 ? Math.max(...cars.map(car => car.id)) + 1 : 1;
        
//         const carToAdd = {
//             id: newId,
//             ...newCar,
//             seat: parseInt(newCar.seat),
//             amount: parseFloat(newCar.amount)
//         };

//         const updatedCars = [...cars, carToAdd];
        
//         setCars(updatedCars);
//         localStorage.setItem('carList', JSON.stringify(updatedCars));
        
//         setNewCar({
//             name: '',
//             seat: '',
//             desc: '',
//             amount: '',
//             image: ''
//         });
//     };

//     return (
//         <div className="car-management">
//             <h2>Car List</h2>
            
//             <div className="car-list">
//                 {cars.map(car => (
//                     <div key={car.id} className="car-item">
//                         <h3>{car.name}</h3>
//                         <p>Seats: {car.seat}</p>
//                         <p>{car.desc}</p>
//                         <p>Amount: ${car.amount}</p>
//                         {car.image && <img src={car.image} alt={car.name} width="100" />}
//                     </div>
//                 ))}
//             </div>
            
//             <h3>Add New Car</h3>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Name:</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={newCar.name}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
                
//                 <div>
//                     <label>Seats:</label>
//                     <input
//                         type="number"
//                         name="seat"
//                         value={newCar.seat}
//                         onChange={handleInputChange}
//                         required
//                         min="1"
//                     />
//                 </div>
                
//                 <div>
//                     <label>Description:</label>
//                     <textarea
//                         name="desc"
//                         value={newCar.desc}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
                
//                 <div>
//                     <label>Amount:</label>
//                     <input
//                         type="number"
//                         name="amount"
//                         value={newCar.amount}
//                         onChange={handleInputChange}
//                         required
//                         step="0.01"
//                         min="0"
//                     />
//                 </div>
                
//                 <div>
//                     <label>Image URL:</label>
//                     <input
//                         type="text"
//                         name="image"
//                         value={newCar.image}
//                         onChange={handleInputChange}
//                     />
//                 </div>
                
//                 <button type="submit">Add Car</button>
//             </form>
//         </div>
//     );
// };

// export default CarManagement;






import { useState, useEffect } from 'react';
import { CarListData } from '@/app/utils/CarListData';

const CarManagement = () => {
    const [cars, setCars] = useState([]);
    const [newCar, setNewCar] = useState({
        name: '',
        seat: '',
        desc: '',
        amount: '',
        image: ''
    });

    // Load cars from localStorage on component mount
    useEffect(() => {
        const storedCars = localStorage.getItem('carList');
        if (storedCars) {
            setCars(JSON.parse(storedCars));
        } else {
            // Initialize with default data if nothing in localStorage
            localStorage.setItem('carList', JSON.stringify(CarListData));
            setCars(CarListData);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCar(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newId = cars.length > 0 ? Math.max(...cars.map(car => car.id)) + 1 : 1;
        
        const carToAdd = {
            id: newId,
            ...newCar,
            seat: parseInt(newCar.seat),
            amount: parseFloat(newCar.amount)
        };

        const updatedCars = [...cars, carToAdd];
        
        setCars(updatedCars);
        localStorage.setItem('carList', JSON.stringify(updatedCars));
        
        setNewCar({
            name: '',
            seat: '',
            desc: '',
            amount: '',
            image: ''
        });
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Form Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Register Your Car in SSRIDES</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 mb-2">Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={newCar.name}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block text-gray-700 mb-2">Seats:</label>
                            <input
                                type="number"
                                name="seat"
                                value={newCar.seat}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                                required
                                min="1"
                            />
                        </div>
                        
                        <div className="md:col-span-2">
                            <label className="block text-gray-700 mb-2">Description:</label>
                            <textarea
                                name="desc"
                                value={newCar.desc}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                                rows="3"
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block text-gray-700 mb-2">Amount ($):</label>
                            <input
                                type="number"
                                name="amount"
                                value={newCar.amount}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                                required
                                step="0.01"
                                min="0"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-gray-700 mb-2">Image URL:</label>
                            <input
                                type="text"
                                name="image"
                                value={newCar.image}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                            />
                        </div>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition duration-200"
                    >
                        Add Car
                    </button>
                </form>
            </div>

            {/* Car List Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Car List</h2>
                {cars.length === 0 ? (
                    <p className="text-gray-600">No cars available. Add one above.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cars.map(car => (
                            <div key={car.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition duration-200">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
                                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                                        {car.seat} seats
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-3">{car.desc}</p>
                                <p className="text-lg font-bold text-gray-900 mb-3">${car.amount.toFixed(2)}</p>
                                {car.image && (
                                    <img 
                                        src={car.image} 
                                        alt={car.name} 
                                        className="w-full h-40 object-cover rounded"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/150?text=Car+Image';
                                        }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CarManagement;