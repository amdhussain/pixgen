

// const category = async () => {

//     const res = await fetch('https://pixgen-chi.vercel.app/category.json');
//     const categries = await res.json();
//     console.log(categries);
     
//     return (
//         <div>
//         </div>
//     );
// };

// export default category;




// // components/Category.js
// const Category = async () => {
//     let categories = [];
//     try {
//         const res = await fetch('https://pixgen-chi.vercel.app/category.json', { cache: 'no-store' });
//         if (res.ok) categories = await res.json();
//     } catch (error) {
//         console.error("Category Error:", error);
//     }
     
//     return (
//         <div className="flex gap-4 p-4">
//             {categories.map((cat) => (
//                 <button key={cat.id} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
//                     {cat.name}
//                 </button>
//             ))}
//         </div>
//     );
// };

// export default Category;





// // components/Category.js
// "use client";

// const Category = ({ categories }) => {
//     const handleCategoryClick = (id) => {
//         console.log("Clicked category ID:", id);
        
//     };

//     return (
//         <div className="flex gap-4 p-4">
//             {categories.map((cat) => (
//                 <button 
//                     key={cat.id} 
//                     onClick={() => handleCategoryClick(cat.id)}
//                     className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//                 >
//                     {cat.name}
//                 </button>
//             ))}
//         </div>
//     );
// };

// export default Category;




"use client";

const Category = ({ categories, selectedCategory, onSelect }) => {
    return (
        <div className="flex gap-4 p-4 flex-wrap">
            <button 
                onClick={() => onSelect("All")}
                className={`px-4 py-2 rounded-lg transition ${selectedCategory === "All" ? "bg-black text-white" : "bg-gray-200"}`}
            >
                All
            </button>
            {categories.map((cat) => (
                <button 
                    key={cat.id} 
                    onClick={() => onSelect(cat.name)}
                    className={`px-4 py-2 rounded-lg transition ${selectedCategory === cat.name ? "bg-black text-white" : "bg-blue-500 text-white hover:bg-blue-600"}`}
                >
                    {cat.name}
                </button>
            ))}
        </div>
    );
};

export default Category;