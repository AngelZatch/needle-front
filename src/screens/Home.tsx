import React from 'react';
import TopBar from '../components/Topbar';

const HomeScreen: React.FC = () => {
    console.log('HELLO YOU ARE HOME');

    return (
        <>
        <TopBar />
        <div>
            <p>Hello there!</p>
            </div>
            </>
    )
}

export default HomeScreen;