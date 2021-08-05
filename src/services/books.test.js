import { getAuthorBooks } from './books';

const booksMock = [
  {
    id: '1',
    author: 'Alex W.',
    title: 'Book 1'
  },
  {
    id: '2',
    author: 'Mr. Alex W.',
    title: 'Book 2'
  },
  {
    id: '3',
    author: 'Anna S.',
    title: 'Book 3'
  }
];

it('testing getAuthorBooks functions with empty arr as books arg', () => {
  expect(getAuthorBooks([], 'Alex W.')).toEqual([]);
});

it('testing getAuthorBooks functions with null as books arg', () => {
  expect(getAuthorBooks(null, 'Alex W.')).toEqual([]);
});

it('testing getAuthorBooks functions with books mock', () => {
  expect(getAuthorBooks(booksMock, 'Alex W.')).toEqual([
    {
      id: '1',
      author: 'Alex W.',
      title: 'Book 1'
    },
    {
      id: '2',
      author: 'Mr. Alex W.',
      title: 'Book 2'
    }
  ]);
});

it('testing getAuthorBooks functions with books mock', () => {
  expect(getAuthorBooks(booksMock, 'Prof. Alex W.')).toEqual([
    {
      id: '1',
      author: 'Alex W.',
      title: 'Book 1'
    },
    {
      id: '2',
      author: 'Mr. Alex W.',
      title: 'Book 2'
    }
  ]);
});

it('testing getAuthorBooks functions with books mock', () => {
  expect(getAuthorBooks(booksMock, 'Sam S.')).toEqual([]);
});
