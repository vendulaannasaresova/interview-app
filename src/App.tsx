import React from 'react';
import './App.css';
import Header from "./components/layout/Header";
import Layout from "./components/layout/Layout";
import Footer from "./components/layout/Footer";
import ToDoAllContent from "./components/content/ToDoAllContent";

function App() {
    return (
        <Layout>
            <Header />
            <ToDoAllContent />
            <Footer />
        </Layout>
    );
}

export default App;
