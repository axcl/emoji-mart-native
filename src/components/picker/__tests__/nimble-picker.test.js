import React from 'react'
import NimblePicker from '../nimble-picker'
import NimbleEmojiIndex from '../../../utils/emoji-index/nimble-emoji-index'
import renderer from 'react-test-renderer'

import data from '../../../../data/apple'

function render(props = {}) {
  const defaultProps = {data}
  const component = renderer.create(<NimblePicker {...props} {...defaultProps} />)
  return component.getInstance()
}

test('shows 10 categories by default', () => {
  const subject = render()
  expect(subject.categories.length).toEqual(10)
})

test('will not show some categories based upon our filter', () => {
  const subject = render({emojisToShowFilter: () => false})
  expect(subject.categories.length).toEqual(2)
})

test('maintains category ids after it is filtered', () => {
  const subject = render({emojisToShowFilter: () => true})
  const categoriesWithIds = subject.categories.filter((category) => category.id)
  expect(categoriesWithIds.length).toEqual(10)
})

test('with custom emoji', () => {
  const custom = [
    {
      id: 'custom_name',
      name: 'custom_name',
      short_names: ['custom_name'],
      text: '',
      emoticons: [],
      keywords: ['custom_name'],
      image: {uri: 'https://example.com/emoji'},
      custom: true,
    },
    {
      id: 'custom_name2',
      name: 'custom_name2',
      short_names: ['custom_name2'],
      text: '',
      emoticons: [],
      keywords: ['custom_name2'],
      image: {uri: 'https://example.com/emoji'},
      custom: true,
    },
  ]
  const subject = render({
    autoFocus: true,
    custom,
  })
  subject.handleSearch(new NimbleEmojiIndex(subject.data).search('custom_', {custom}))
})
