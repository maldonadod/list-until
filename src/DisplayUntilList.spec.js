import DisplayerUntilList from './DisplayUntilList'

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
