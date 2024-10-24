import Contact from "../Pages/Contact/Contact";
import Product from "../Pages/Products/Product";
import Tendy from "../Pages/Trendy/Tendy";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";

const Routing =[{
    path : '/',
    element : <Tendy />
},
{
    path : '/search/:id',
    element : <CategoryProducts />
},
{
    path : '/Product',
    element : <Product />
},
{
    path : '/Contact',
    element : <Contact />
}
]

export default Routing