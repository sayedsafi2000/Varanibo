import PropTypes from 'prop-types';
const LocationSelector = ({ division, option1, option2, option3, option4, option6, option5, option7 }) => {
    return (
        <div className="division">
            <form className="max-w-sm mx-auto">
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>{division}</option>
                    <option value="US">{option1}</option>
                    <option value="DE">{option2}</option>
                    <option value="CA">{option3}</option>
                    <option value="FR">{option4}</option>
                    <option value="DE">{option5}</option>
                    <option value="DE">{option6}</option>
                    <option value="DE">{option7}</option>
                </select>
            </form>
        </div>
    );
};
LocationSelector.propTypes = {
    division:PropTypes.node,
    option1:PropTypes.node,
    option2:PropTypes.node,
    option3:PropTypes.node,
    option4:PropTypes.node,
    option6:PropTypes.node,
    option5:PropTypes.node,
    option7:PropTypes.node, 
}

export default LocationSelector;