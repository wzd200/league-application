import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
    color: crimson;
`

const SingleChampionConditions = (props) => {
    // console.log(props.responseObj.champi on)

    return (
        <div>
            <div>
                {props.error && <StyledError>Please enter a valid champion name</StyledError>}
                {props.loading && <div>Loading...</div>}
                {props.responseObj.cod === 200 ?
                <div>
                    <p><strong>{props.responseObj.name}</strong></p>
                </div>
                : null
            }
            </div>
        </div>
    )
}

export default SingleChampionConditions;