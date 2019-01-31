import { render, cleanup } from 'react-testing-library'
import DisplayerUntilList from './DisplayUntilList'
import ReactOuput from './components/ReactOutput'

beforeEach(cleanup)

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
