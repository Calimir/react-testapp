import React from 'react';
import Songform from '../components/songlist/SongForm';
import Songlist from '../components/songlist/Songlist';

function Songpage() {
    return (
        <div>
            <Songform />
            <Songlist />
        </div>);
}

export default Songpage;