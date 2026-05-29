
const PhotoDetailsPage = async ({ params }) => {
    
    const { id } = await params;
    
    
    const res = await fetch('https://pixgen-chi.vercel.app/data.json');
    const photos = await res.json();
    
     
    const photo = photos.find(p => p.id == id);
    
     
    if (!photo) {
        return <div className="p-10 text-xl font-bold">Photo not found!</div>;
    }

    
    return (
    <div>
        <h1>{photo.title}</h1>
        <p>{photo.prompt}</p>
    </div>
    );
};

export default PhotoDetailsPage;






  
 