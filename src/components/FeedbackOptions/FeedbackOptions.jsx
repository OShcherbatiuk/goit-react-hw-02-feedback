import PropTypes from 'prop-types'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            <button type="button">Good</button>
            <button type="button">Neutral</button>
            <button type="button">Bad</button>
        </div>
    )
}

FeedbackOptions.propTypes = {
    // options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;