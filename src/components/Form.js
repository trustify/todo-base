import React from 'react';

/**
 * Class representing a Form.
 * @extends Component of React
 */
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log("This is the handleChange method.");
  }

  handleSubmit(event) {
    alert(this.state.value + ' submitted an entry.');
    console.log("This is the handleSubmit method.");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Rating:
					<select>
            ref={select => this.moodType = select}
            name="moodType">>
						<option value="Insufficent">Insuffecent</option>
            <option value="Needs Improvement">Needs Improvement</option>
            <option selected value="Doing Fine">Doing Fine</option>
            <option value="Decent">Decent</option>
            <option value="Amazing">Amazing</option>
          </select>
        </label><br />
        <label>
          Name:
					<input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;