import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import Footer from "../Footer";

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className ='page'>
                
                <Outlet />

            </div>
{/* <Footer /> */}
        </div>
        
    )
}

export default Layout;