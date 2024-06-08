import { Link, Outlet } from "react-router-dom";

const Layout =()=>{



return(<>

<div className="">
<Link to="home"> home</Link>
<Link to="INP">Insert Product</Link>
<Link to="DIS">Display</Link>
<Link to="PS">Product Summery</Link>
<Link to="SP">Search product </Link>
<Link to="UP">Update</Link>

</div>


    
<Outlet/>

</>)
}


export default Layout;
