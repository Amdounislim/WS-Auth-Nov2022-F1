import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const PrivateRoute = ({ component: RouteComponent, ...defaultprops }) => {
    const isAuth = useSelector(state => state.userReducer.isAuth)

    if (!isAuth) return <Navigate to='/' />

    return (<div><RouteComponent /></div>)
}

export default PrivateRoute