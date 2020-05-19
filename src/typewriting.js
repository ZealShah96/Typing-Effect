import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect';

export default class Typewriting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullText: props.displayString,
            displayText: '',
            inputText:props.displayString,
            time: 0,
            timeDelay: this.props.timeDelay != null ? this.props.timeDelay : parseInt('500')
        }
    }

    componentDidMount() {
        this.typingEffect();
    }

    typingEffect() {
        var displayText = this.state.displayText;
        if (this.state.displayText.length < this.state.fullText.length) {
            displayText = this.state.fullText.substring(0, this.state.displayText.length + 1);
        }
        this.setState({ displayText }, () => {
            setTimeout(() => { this.typingEffect() }, this.state.timeDelay)
        })
    }

    ChangeDisplayText(e) {
        debugger;
        var fullText=this.state.inputText;
        var displayText='';
        this.setState({ displayText,fullText }, () => {
           console.log("displaystring is changed!!!");
        })
        //this.setState()
    }

    ChangeNewFullText(e){
        debugger;
        var inputText=e.target.value;
        var displayText='';
        this.setState({ inputText }, () => {
           console.log("displaystring is changed!!!");
        })
    }

    render() {
        const {
            speed,
            typingDelay,
            staticText,
            text,
            className,
            cursor,
            cursorClassName,
            ...otherProps
        } = this.props;
        return (
            <React.Fragment>
                <div>
                    Enter Your Text <input placeHolder={"enter text which you want to create typing effect!!"} onChange={(e) => { this.ChangeNewFullText(e) }}/>
                    
                    <button onClick={(e) => { this.ChangeDisplayText(e) }} >Create Typing Effect of {this.state.inputText} </button>
                    <br/>
                    <span>We are displaying typing effect for below text</span>
                    <span> <b>{this.state.fullText}</b></span>
                   
                </div>
                <div {...otherProps} className={className}>
                    {this.state.displayText}
                </div>
            </React.Fragment>

        )
    }
}

