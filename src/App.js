import { Component } from 'react';

import Section from './components/Section/Section'
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

class App extends Component {
    state = {
        good: 1,
        neutral: 1,
        bad: 2
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad
    };
    

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback()
        return total ? Math.round( (this.state.good / total) * 100)  : 0
    };

    handleFeedback = () => {
        
    };
    
    render() {
        const total = this.countTotalFeedback()
        const positiveFeedback = this.countPositiveFeedbackPercentage()
        return (
            <div className="App">
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={11111}
                        onLeaveFeedback={this.handleFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={total}
                        positivePercentage={positiveFeedback}
                    />
                </Section>
            </div>
        )
    }
};
 
export default App;