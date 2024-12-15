import {Navigate,Outlet} from 'react-router-dom'

function ProtectedRoute({isAuthenticated}){
    return (
        isAuthenticated?<Outlet/>:<Navigate to="/"/>
    );
}
export default ProtectedRoute;