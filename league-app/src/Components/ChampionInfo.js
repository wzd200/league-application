import React, { useState } from 'react';
import SingleChampionConditions from './Conditions/SingleChampionConditions';

const ChampionInfo = () => {
    let [champion, setChampion] = useState('');
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false)

    function getChampionInfo(e) {
        var axios = require("axios").default;

        var options = {
        method: 'GET',
        url: `https://league-of-legends-champions.p.rapidapi.com/champions/en-us/${champion}`,
        headers: {
            'x-rapidapi-host': 'league-of-legends-champions.p.rapidapi.com',
            'x-rapidapi-key': '2d262fbfa4msh92c2df0d1e87162p13d87bjsn82d2e6ce542e'
        }
        };

        axios.request(options)
            .then(function (response) {
                // console.log(response.data.champion[0]);
                setResponseObj(response.data);
                setLoading(false);
            }).catch(function (error) {
                console.error(error);
                setError(true);
                setLoading(false);
            });

        e.preventDefault();

        if (champion.length === 0) {
            return setError(true);
        }
        setError(false)
        setResponseObj({})
        setLoading(true)
    }

    return (
        <div>
            <h2>League Champion Information</h2>
            <form onSubmit={getChampionInfo}>
                <input
                    type='text'
                    placeholder='Enter Champion Name'
                    maxLength='50'
                    value={champion}
                    onChange={(e) => setChampion(e.target.value)}
                />
                <label>
                    <button type="submit">Get Champion Info</button>
                </label>
            </form>
            <SingleChampionConditions 
                responseObj={responseObj}
                error={error}
                loading={loading}
            />
        </div>
    )
}

export default ChampionInfo;