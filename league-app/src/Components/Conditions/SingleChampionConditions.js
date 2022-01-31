import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
    color: crimson;
`

const SingleChampionConditions = (props) => {
    return (
        <div>
            <div>
                {props.error && <StyledError>Please enter a valid champion name</StyledError>}
                {props.loading && <div>Loading...</div>}
                
            </div>
        </div>
    )
}

export default SingleChampionConditions;