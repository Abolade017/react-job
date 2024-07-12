import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";


const Spinner = ({ loading }) => {
    const color = '#4338ca'
    const override = {
        display: "block",
        margin: "0 auto",

    }
    return (
        <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
}

export default Spinner