import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
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
})