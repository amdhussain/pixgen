// import Category from "@/components/Category";
// import PhotoCard from "@/components/PhotoCard";

// const AllPhotosPage = async () => {
//     const res = await fetch('https://pixgen-chi.vercel.app/data.json');
//     const photos = await res.json();
     
    
//     return (
//         <div>
//              <h1 className="text-2xl font-bold m-4">All Photos</h1>
             
//             <Category />

//              <div className="grid grid-cols-4 gap-5">
//                 {photos.map(photo => (
//                     <PhotoCard 
//                         key={photo.id} 
//                         photo={photo} 
//                     />
//                 ))}
//              </div>
//         </div>
//     );
// };

// export default AllPhotosPage;





// // app/all-photos/page.js
// export const dynamic = 'force-dynamic';

// import Category from "@/components/Category";
// import PhotoCard from "@/components/PhotoCard";

// const AllPhotosPage = async () => {
//     let photos = [];
//     try {
//         const res = await fetch('https://pixgen-chi.vercel.app/data.json', { cache: 'no-store' });
//         if (res.ok) {
//             photos = await res.json();
//         }
//     } catch (error) {
//         console.error("Photos Error:", error);
//     }
     
//     return (
//         <div className="max-w-7xl mx-auto p-4">
//             <h1 className="text-2xl font-bold m-4">All Photos</h1>
//             <Category />
//             <div className="grid grid-cols-4 gap-5">
//                 {photos.length > 0 ? (
//                     photos.map(photo => (
//                         <PhotoCard key={photo.id} photo={photo} />
//                     ))
//                 ) : (
//                     <p className="m-4 text-gray-500">No photos found.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AllPhotosPage;




 
// export const dynamic = 'force-dynamic';

// import Category from "@/components/Category";
// import PhotoCard from "@/components/PhotoCard";

// const AllPhotosPage = async () => {
    
//     const [photosRes, categoriesRes] = await Promise.all([
//         fetch('https://pixgen-chi.vercel.app/data.json', { cache: 'no-store' }),
//         fetch('https://pixgen-chi.vercel.app/category.json', { cache: 'no-store' })
//     ]);

//     const photos = await photosRes.json();
//     const categories = await categoriesRes.json();
     
//     return (
//         <div className="max-w-7xl mx-auto p-4">
//             <h1 className="text-2xl font-bold m-4">All Photos</h1>
            
            
//             <Category categories={categories} />

//             <div className="grid grid-cols-4 gap-5">
//                 {photos.map(photo => (
//                     <PhotoCard key={photo.id} photo={photo} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AllPhotosPage;




"use client";
import { useState, useEffect } from "react";
import Category from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";

const AllPhotosPage = () => {
    const [photos, setPhotos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        // ডাটা ফেচিং
        fetch('https://pixgen-chi.vercel.app/data.json')
            .then(res => res.json())
            .then(data => setPhotos(data));

        fetch('https://pixgen-chi.vercel.app/category.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    // ফিল্টার করার লজিক
    const filteredPhotos = selectedCategory === "All" 
        ? photos 
        : photos.filter(photo => photo.category === selectedCategory);

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-2xl font-bold m-4">All Photos</h1>
            
            <Category 
                categories={categories} 
                selectedCategory={selectedCategory} 
                onSelect={setSelectedCategory} 
            />

            <div className="grid grid-cols-4 gap-5 mt-5">
                {filteredPhotos.map(photo => (
                    <PhotoCard key={photo.id} photo={photo} />
                ))}
            </div>
        </div>
    );
};

export default AllPhotosPage;