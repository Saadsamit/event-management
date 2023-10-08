import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { context } from '../Mycontext';
import { Navigate, useLocation } from 'react-router-dom';

const PriveteRouer = ({children}) => {
    const {user,isLoading} = useContext(context)
    const location = useLocation()
    if(isLoading){
        return <div className='flex justify-center h-screen'><span className="loading MyGradient loading-dots loading-lg"></span></div>
    }
    if(!user?.email){
        return <Navigate state={location.pathname} to="/login"/>
    }
    return children
};
PriveteRouer.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default PriveteRouer;