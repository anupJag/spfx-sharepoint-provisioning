import * as React from 'react';
import { ProgressIndicator } from 'office-ui-fabric-react/lib/ProgressIndicator';
import styles from './SiteCreationStatus.module.scss';
import { Async } from 'office-ui-fabric-react/lib/Utilities';

export interface ISiteCreationStatusProps {
    statusLabel: string[];
}

export interface ISiteCreationStatusState {
    percentCompleted: number;
    percentLabel: string;
}

const INTERVAL_DELAY = 3000;
const INTERVAL_INCREMENT = 0.1;

export default class SiteCreationStatus extends React.Component<ISiteCreationStatusProps, ISiteCreationStatusState>{

    private _interval: number;
    private _async: Async;

    /**
     *Default constructor
     */
    constructor(props: ISiteCreationStatusProps) {
        super(props);
        this._async = new Async(this);
        this.state = {
            percentCompleted: 0,
            percentLabel: undefined
        };
    }

    public componentDidMount() {
        this.progressController();
    }

    private progressController(): void {
        // reset the demo
        this.setState({
            percentCompleted: 0
        });

        // update progress
        this._interval = this._async.setInterval(() => {
            let percentComplete : any = (this.state.percentCompleted + INTERVAL_INCREMENT).toFixed(1);
            percentComplete = parseFloat(percentComplete);
            let tempPercentLabel = this.props.statusLabel[Math.floor(10*this.state.percentCompleted)];

            if (percentComplete >= 1.0) {
                percentComplete = 1.0;
                this._async.clearInterval(this._interval);
            }

            this.setState({
                percentCompleted: percentComplete,
                percentLabel: tempPercentLabel
            });
        }, INTERVAL_DELAY);
    }

    public render(): React.ReactElement<ISiteCreationStatusProps> {
        return (
            <div className={styles.SiteCreationStatus}>
                <div className={styles.SiteCreationContainer}>
                    <ProgressIndicator
                        label={this.state.percentLabel}
                        percentComplete={this.state.percentCompleted}
                    />
                </div>
            </div>
        );
    }

}
