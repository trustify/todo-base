import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log("handleChange");
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    console.log("handleSubmit");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Rating:
					<select>
            ref={select => this.petType = select}
            name="moodType">>
						<option value="grapefruit">Insuffecent</option>
            <option value="lime">Needs Improvement</option>
            <option selected value="coconut">Doing Fine</option>
            <option value="mango">Decent</option>
            <option value="mango">Amazing</option>
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