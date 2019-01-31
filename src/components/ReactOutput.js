import React from 'react'

import ListUntilContainer from './ListUntilContainer'
import SomeMore from './SomeMore'
import Item from './Item'
import EmptyList from './EmptyList'

const ReactOuput = () => {
    return {
        show: (items, rest) => {
            return <ListUntilContainer items={
                items.map((item, index) => <Item key={index} text={item} />)
            } rest={
                <SomeMore num={rest.length} />
            } />
        },
        empty: () => <EmptyList />
    }
}

export default ReactOuput