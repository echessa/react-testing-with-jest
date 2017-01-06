import React from 'react';
import Clock from 'Clock';
import renderer from 'react-test-renderer';

describe('Clock component renders the clock correctly', () => {
  it('renders correctly', () => {
    const seconds = 63;
    const rendered = renderer.create(
      <Clock timeInSeconds={seconds}/>
    );

    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
