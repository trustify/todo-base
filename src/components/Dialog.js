import React from "react";
import Modal from "react-responsive-modal";
import Form from "./Form"

const styles = { // very basic styles for modal
    fontFamily: "sans-serif",
    textAlign: "center"
};

export default class Dialog extends React.Component {

    state = {
        open: false
    };

    onOpenModal = () => {
        this.setState({
            open: true
        });
    };

    onCloseModal = () => {
        this.setState({
            open: false
        });
    };

    render() {
        const { open } = this.state;
        return ( 
            <div style={styles}>
                <button onClick={this.onOpenModal}>Open modal</button> 
                <Modal open={open} onClose={this.onCloseModal} little>
                    <h2>How are you feeling today?</h2> 
                    <p>Below is an area for leaving feedback. From the select dropdown and input, please leave your name and a review. Thank you!</p>
                    <Form />
                </Modal> 
            </div>
        );
    }
}
