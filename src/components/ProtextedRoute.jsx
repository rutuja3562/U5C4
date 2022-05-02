// /orders and /neworder are protected routes


export const ProtectedRoute = ({ children }) => {
    return <ProtectedRoute.Provider value={{}}>
    {children}</ProtectedRoute.Provider>

};
