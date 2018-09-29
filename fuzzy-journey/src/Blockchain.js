import React, { Component } from 'react';
import Block from './Block';
import blockchain from './blockchainData';

class Blockchain extends Component {
    constructor() {
        super();

        this.state = { blockchain };
    }

    render() {
        const { blockchain } = this.state;

        return (
            <React.Fragment>
                <div className="inner-container flex column">
                    <div className="header-box">
                        <h1>Simple JS Blockchain</h1>
                    </div>

                    {blockchain.map(block => (
                        <React.Fragment key={block.index}>
                            <Block
                                index={block.index}
                                timestamp={block.timestamp}
                                data={block.data}
                                prevHash={block.prevHash}
                                thisHash={block.thisHash}
                            />

                            <i className="material-icons">keyboard_arrow_down</i>
                        </React.Fragment>
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default Blockchain;
