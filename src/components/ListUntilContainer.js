import React from 'react'

const ListUntilContainer = ({ items, rest }) => {
    return (
        <div data-testid="list-until">
            {items}
            {rest ? rest : null}
        </div>
    )
}

export default ListUntilContainer