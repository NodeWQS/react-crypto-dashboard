import React from "react";

export const Container = ({ children }: React.PropsWithChildren) => {
    return (
    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
    {children}
    </div>)
}