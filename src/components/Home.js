import React from 'react';
import CardHolder from './CardHolder';

const Home = () => {
    return (
        <div>
            <section className="hero">
                <div className="container">
                    <p className="x-large">Pokébook</p>
                    <p className="large">Get to know your pokémons better!</p>
                </div>
            </section>
            <section className="content">
                <div className="container">
                    <CardHolder />
                </div>
            </section>
        </div>
    )
}

export default Home;
