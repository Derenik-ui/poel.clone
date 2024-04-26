import React from 'react';
import Header from "../../components/layouts/header/header";
import Footer from "../../components/layouts/footer/footer";

const App = ({children}) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default App;