import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const config_data = require('../config/config.json');

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			sentance: ''
		}

		this.api_url = 'http://' + config_data.server.host + ':' + config_data.server.port + '/';

		this.showRandomSentace = this.showRandomSentace.bind(this);
		this.getRandomSentance = this.getRandomSentance.bind(this);
		this.clickNegative = this.clickNegative.bind(this);
		this.clickPass = this.clickPass.bind(this);
		this.clickPositive = this.clickPositive.bind(this);

		this.showRandomSentace();
	}

	async showRandomSentace() {
		let response = await this.getRandomSentance();
		this.setState({ sentance: response.text, twitter_object: JSON.stringify(response) });
	}

	async getRandomSentance() {
		let response = await axios.get(this.api_url + 'random_tweet');

		return response.data;
	}

	clickPositive() {
		axios.post(this.api_url + 'rate_tweet', { positive: true, tweet: this.state.twitter_object });
		this.showRandomSentace();
	}

	clickNegative() {
		axios.post(this.api_url + 'rate_tweet', { positive: false, tweet: this.state.twitter_object });
		this.showRandomSentace();
	}

	clickPass() {
		this.showRandomSentace();
	}

	render() {
		return (
			<div className="container" style={{marginTop: '50px', marginBottom: '50px'}}>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10" style={{textAlign: 'center'}}>
						<h3>{this.state.sentance}</h3>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div style={{height: "50px"}}></div>
				<div className="row">
					<div className="col-3"></div>
					<div className="col-2 text-center">
						<button type="button" className="btn btn-danger" onClick={this.clickNegative}>Negative</button>
					</div>
					<div className="col-2 text-center">
						<button type="button" className="btn btn-secondary" onClick={this.clickPass}>Pass</button>
					</div>
					<div className="col-2 text-center">
						<button type="button" className="btn btn-success" onClick={this.clickPositive}>Positive</button>
					</div>
					<div className="col-3"></div>
				</div>
			</div>
    );
  }
}

export default App;
