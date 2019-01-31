const { render, cleanup } = require('react-testing-library')

const DisplayerUntilList = require('./DisplayUntilList')
const React = require('react')

const EmptyList = () => {
  return (
    <div data-testid="empty-list">"No Items..."</div>
  )
}

const Item = ({text}) => {
  return (
    <span>{text}</span>
  )
}

const ListUntilContainer = ({items, rest}) => {
  return (
    <div data-testid="list-until">
      {items}
      {rest ? rest : null}
    </div>
  )
}

const SomeMore = ({num}) => num ? <Item text={`${num} more...`} /> : null



beforeEach(cleanup)

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

it('render no items', () => {
  const output = ReactOuput()
  const displayer = DisplayerUntilList([], {
    max: 2
  })

  const result = displayer.display(output)
  
  const { queryByTestId } = render(result)

  expect(queryByTestId("empty-list")).not.toEqual(null)
});

it('render one items', () => {
  const output = ReactOuput()
  const displayer = DisplayerUntilList([1], {
    max: 2
  })

  const result = displayer.display(output)
  
  const { queryByTestId } = render(result)

  expect(queryByTestId("list-until").children[0].innerHTML).toEqual("1")
});

it('render two items', () => {
  const output = ReactOuput()
  const displayer = DisplayerUntilList([1, 2], {
    max: 2
  })

  const result = displayer.display(output)
  
  const { queryByTestId } = render(result)
  
  expect(queryByTestId("list-until").children[0].innerHTML).toEqual("1")
  expect(queryByTestId("list-until").children[1].innerHTML).toEqual("2")
});

it('should render 2 children from list of 3 items collapsing the last two into child number 2', () => {
  const output = ReactOuput()
  const displayer = DisplayerUntilList([1, 2, 3], {
    max: 2
  })

  const result = displayer.display(output)
  
  const { queryByTestId } = render(result)

  expect(queryByTestId("list-until").children[0].innerHTML).toEqual("1")
  expect(queryByTestId("list-until").children[1].innerHTML).toEqual("2 more...")
});




it('renders without crashing', () => {

  const output = {
    show: jest.fn(),
    empty: jest.fn()
  }

  const displayer = DisplayerUntilList([], {
    max: 2
  })

  displayer.display(output)

  expect(output.empty).toBeCalled()
  expect(output.show).not.toBeCalled()
});
it('renders without crashing', () => {

  const output = {
    show: jest.fn()
  }

  const displayer = DisplayerUntilList([1], {
    max: 2
  })

  displayer.display(output)

  expect(output.show).toBeCalled()
  expect(output.show).toBeCalledWith([1], [])
});
it('renders without crashing', () => {

  const output = {
    show: jest.fn()
  }

  const displayer = DisplayerUntilList([1, 2], {
    max: 2
  })

  displayer.display(output)

  expect(output.show).toBeCalled()
  expect(output.show).toBeCalledWith([1, 2], [])
});
it('renders without crashing', () => {

  const output = {
    show: jest.fn()
  }

  const displayer = DisplayerUntilList([1, 2, 3], {
    max: 2
  })

  displayer.display(output)

  expect(output.show).toBeCalled()
  expect(output.show).toBeCalledWith([1], [2, 3])
});
it('renders without crashing', () => {

  const output = {
    show: jest.fn()
  }

  const displayer = DisplayerUntilList([1, 2, 3, 4], {
    max: 2
  })

  displayer.display(output)

  expect(output.show).toBeCalled()
  expect(output.show).toBeCalledWith([1], [2, 3, 4])
});
it('renders without crashing', () => {

  const output = {
    show: jest.fn()
  }

  const displayer = DisplayerUntilList([1, 2, 3, 4], {
    max: 3
  })

  displayer.display(output)

  expect(output.show).toBeCalled()
  expect(output.show).toBeCalledWith([1, 2], [3, 4])
});
