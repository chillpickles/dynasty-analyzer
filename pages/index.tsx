import React from 'react';
import HomePage from './HomePage.tsx';
import { TeamOwners, TeamPlayers } from './TeamQueries';

const IndexPage: React.FC = () => {
    return (
        <div>
            <HomePage/>
            <TeamOwners/>
            <TeamPlayers/>
        </div>
    )
};

export default IndexPage;