import Navigation from "components/Navigation";


import {Outlet} from "react-router-dom";


export default function _BasePage(props: any)
{
    return <div>
        <Outlet/>
        <Navigation/>
    </div>;
}