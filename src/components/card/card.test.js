import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Card } from './index';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders card with and without content', () => {
  act(() => {
    render(<Card />, container);
  });
  expect(container.querySelector('.card-top-content img')).not.toBeInTheDocument();
  expect(container.querySelector('.card-body .card-title')).not.toBeInTheDocument();
  expect(container.querySelector('.card-body .card-link')).not.toBeInTheDocument();
  expect(container.querySelector('.card-body .card-content')).not.toBeInTheDocument();

  act(() => {
    render(<Card title="Book 1" onMoreClick={() => {}} body="Some book text" />, container);
  });

  expect(container.querySelector('.card-body .card-title').textContent).toBe('Book 1');
  expect(container.querySelector('.card-body .card-link')).toBeInTheDocument();
  expect(container.querySelector('.card-body .card-content').textContent).toBe('Some book text');
});

it('check ability to click on card link', () => {
  const onLinkClickFunc = jest.fn();

  act(() => {
    render(<Card onMoreClick={onLinkClickFunc} />, container);
  });

  const cardLink = container.querySelector('.card .card-link span');

  act(() => {
    cardLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(onLinkClickFunc).toHaveBeenCalledTimes(1);

  act(() => {
    for (let i = 0; i < 5; i++) {
      cardLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
  });
  expect(onLinkClickFunc).toHaveBeenCalledTimes(6);
});
