import React from 'react'

const SomeMore = ({num}) => {
    return num && num > 0 ? <p>{`${num} more...`}</p> : null
}

export default SomeMore