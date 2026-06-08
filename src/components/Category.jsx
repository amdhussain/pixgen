 

const category = async () => {

    const res = await fetch('https://pixgen-chi.vercel.app/category.json');
    const categories = await res.json();
    console.log(categories);
    return (
        <div>
        </div>
    );
};

export default category;