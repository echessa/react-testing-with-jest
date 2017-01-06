import React from 'react';
import ReactDOM from'react-dom';
import TestUtils from 'react-addons-test-utils';

import Countdown from 'Countdown';

describe('Countdown', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Countdown/>, div);
    });

    describe('handleSetCountdownTime', () => {
        it('should set countdown time and start countdown', (done) => {
            const countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdownTime(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe(1);

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001)
        });

        it('should never set countdown time to less than zero', (done) => {
            const countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdownTime(1);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3000)
        });
    });
});
