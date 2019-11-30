import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import SimpleBlog from './SimpleBlog'

test('render contents',() => {
  const blog = {
    title:'simple blog',
    author:'jacob',
    likes:10
  }
  const component =  render(
    <SimpleBlog blog={blog} />
  )
  expect(component.container).toHaveTextContent('simple blog')
  expect(component.container).toHaveTextContent('jacob')
})

test('render likes',() => {
  const blog = {
    title:'simple blog',
    author:'jacob',
    likes:10
  }
  const component =  render(
    <SimpleBlog blog={blog} />
  )
  const l = component.container.querySelector('.likes')
  expect(l).toHaveTextContent('10')

})
test('button',() => {
  const blog = {
    title:'simple blog',
    author:'jacob',
    likes:10
  }
  const mockHandler = jest.fn()
  const component =  render(
    <SimpleBlog blog={blog} onClick={mockHandler} />
  )
  const button = component.container.querySelector('button')
  fireEvent.click(button)
  fireEvent.click(button)
  const l = component.container.querySelector('.likes')
  expect(l).toHaveTextContent('12')
})
