function Categories() {

    let allCat = ['Succulents', 'Flowering Plants', 'Air Purifying Plants', 'Accessories'];

    let catRows = allCat.map( (cat, index) => 
        <li key={cat} className="py-2 px-4 bg-green-100 my-1 rounded-md hover:bg-green-200 transition-colors">
            {cat}
        </li>
    );

    return (
        <>
            <ul className="list-none space-y-2 max-w-md mx-auto">
                {catRows}
            </ul>
        </>
    );
}
export default Categories;