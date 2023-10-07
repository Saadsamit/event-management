import { createContext } from "react";
import PropTypes from 'prop-types';

export const context = createContext(null)
export const Mycontext = ({children}) => {
    const contextData = {}
    return (
        <context.Provider value={contextData}>
            {children}
        </context.Provider>
    );
};

Mycontext.propTypes = {
    children: PropTypes.node.isRequired
}