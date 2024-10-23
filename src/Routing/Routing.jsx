import Contact from "../Pages/Contact/Contact";
import Product from "../Pages/Products/Product";
import Tendy from "../Pages/Trendy/Tendy";

const Routing =[{
    path : '/',
    element : <Tendy />
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