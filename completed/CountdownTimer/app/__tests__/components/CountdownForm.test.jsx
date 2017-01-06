import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import CountdownForm from 'CountdownForm';

describe('CountdownForm', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CountdownForm/>, div);
    });

    it('should call onSetCountdownTime if valid seconds entered', () => {
        const spy = jest.fn();
        const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdownTime={spy}/>);
        const form = TestUtils.findRenderedDOMComponentWithTag(countdownForm, 'form');

        countdownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit(form);

        expect(spy).toHaveBeenCalledWith(109);
    });

    it('should not call onSetCountdownTime if invalid seconds entered', () => {
        const spy = jest.fn();
        const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdownTime={spy}/>);
        const form = TestUtils.findRenderedDOMComponentWithTag(countdownForm, 'form');

        countdownForm.refs.seconds.value = '1H63';
        TestUtils.Simulate.submit(form);

        expect(spy).not.toHaveBeenCalled();
    });
});
