import React, { Component } from 'react';
import { render } from 'react-dom';
import { Fab, FabButton, FabActions, FabAction } from 'react-fab';

import 'react-fab/dist/main.scss';

class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello World</h1>

				<Fab style={{ right: '20px', bottom: '20px' }}>
					<FabButton>
						+
  					</FabButton>
					<FabActions>
						<FabAction
							className="button button-royal"
							onClick={this.handleCreateGroup}
							tooltip="Create Group"
						>
							G
						</FabAction>
						<FabAction
							className="button button-balanced"
							onClick={this.handleCreateMemo}
							tooltip="Create Memo"
						>
							C
						</FabAction>
					</FabActions>
				</Fab>
			</div>
		);
	}
}

var mountNode = document.getElementById('app');
render(<App />, mountNode);
