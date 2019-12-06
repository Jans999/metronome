import React from 'react';
import '../App.css';

class Button extends React.Component {


    state = {
        play: false,
        buttonText: "Play",
    }

    click = new Audio("./assets/metronome_click.wav");
    play = () => {
        this.click.play();
    }

    pause = () => {
        this.click.pause();
    }


    // Changes the play value of the button, starts an interval that clicks each it's called

    interval = null;

    handleButtonPress = () => {
        if (this.state.play) {
            this.setState({
                buttonText: "Play",
                play: false,
            }) 
            clearInterval(this.interval)
        } else {
            this.setState({
                buttonText: "Pause",
                play: true,
            })
            console.log(this.props.clicksPerSecond);
            this.interval = setInterval(this.play, this.props.clicksPerSecond );
        }
    }


    render() {
        return(
            <div className="button">
                <button onClick={ () => this.handleButtonPress() }> {this.state.buttonText} </button>
            </div>
        )
    }

}

export default Button;