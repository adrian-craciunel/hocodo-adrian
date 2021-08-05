import React from 'react';
import { shallow, mount } from 'enzyme';
import { withErrorBoundary } from './index';
import { ErrorBounderyPageContent } from '../../components/error-boundery';

let container = null;

const ComponentWithError = () => {
  throw new Error();
};

const Wrapper = withErrorBoundary(ComponentWithError);

beforeEach(() => {
  container = mount(<Wrapper />);
});

afterEach(() => {
  container.unmount();
});

it('render Error boundery in case of error in wrapped component', () => {
  expect(container.html()).toEqual(shallow(<ErrorBounderyPageContent retry={() => {}} />).html());
});
