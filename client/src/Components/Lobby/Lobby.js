import React, {Component} from "react";
import {connect} from "twilio-video";
import Room from "@/Components/Room/Room.js";

class Lobby extends Component {
    constructor(props) {
        super(props)

        this.state = {
            identity: '',
            room: null
        }

        this.inputRef = React.createRef();
        this.joinRoom = this.joinRoom.bind(this);
        this.returnToLobby = this.returnToLobby.bind(this);
        this.updateIdentity = this.updateIdentity.bind(this);
        this.removePlaceholderText = this.removePlaceholderText.bind(this);

        // this.socket = null;
    }

    // componentDidMount() {
    //     this.socket = new WebSocket("wss://ws.site.com");
    // }
    //
    // componentWillUnmount() {
    //     if (this.socket && this.socket.readyState === 1) {
    //         this.socket.close();
    //     }
    // }

    async joinRoom() {
        try {
            const response = await fetch(`http://localhost:3000/?identity=${this.state.identity}`);
            const data = await response.json();
            const room = await connect(data, {
                name: 'cool-room',
                audio: true,
                video: true
            }).catch(err => console.log(err));

            this.setState({ room: room });
        } catch(err) {
            console.log(err);
        }
    }

    returnToLobby() {
        this.setState({ room: null });
    }

    removePlaceholderText() {
        this.inputRef.current.placeholder = '';
    }

    updateIdentity(event) {
        this.setState({
            identity: event.target.value
        });
    }

    render() {
        const disabled = this.state.identity === '' ? true : false;

        return (
            <div className="app">
                {
                    this.state.room === null
                        ? <div className="lobby">
                            <input
                                value={this.state.identity}
                                onChange={this.updateIdentity}
                                ref={this.inputRef}
                                onClick={this.removePlaceholderText}
                                placeholder="What's your name?"/>
                            <button disabled={disabled} onClick={this.joinRoom}>Join Room</button>
                        </div>
                        : <Room returnToLobby={this.returnToLobby} room={this.state.room} />
                }
            </div>
        );
    }
}

export default Lobby