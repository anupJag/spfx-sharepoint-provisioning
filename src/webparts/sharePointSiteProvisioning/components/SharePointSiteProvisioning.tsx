import * as React from 'react';
import styles from './SharePointSiteProvisioning.module.scss';
import { ISharePointSiteProvisioningProps } from './ISharePointSiteProvisioningProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Welcome from './Welcome/Welcome';
import GettingStarted from './GettingStarted/GettingStarted';
import * as strings from 'SharePointSiteProvisioningWebPartStrings';
import { IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

export interface ISharePointSiteProvisioningState {
  getStartedClicked: boolean;
  gettingStartedClassState: boolean;
}

export default class SharePointSiteProvisioning extends React.Component<ISharePointSiteProvisioningProps, ISharePointSiteProvisioningState> {

  /**
   *Default Constructor
   */
  constructor(props: ISharePointSiteProvisioningProps) {
    super(props);
    this.state = {
      getStartedClicked: false,
      gettingStartedClassState: false
    };
  }


  /**
   * Function to handle Welcome Page Create Site Button Click Handler
   */
  protected createSiteButtonClickHandler = (event) => {
    this.setState({
      getStartedClicked: true
    });
  }

  protected gettingStartedDropDownChangeHandler = (item : IDropdownOption) => {
    this.setState({
      gettingStartedClassState : true
    });
  }


  public render(): React.ReactElement<ISharePointSiteProvisioningProps> {
    let pageToBeRendered: JSX.Element | JSX.Element[] =
      <GettingStarted
        dropDownClassState={this.state.gettingStartedClassState}
        onDropDownChange={this.gettingStartedDropDownChangeHandler.bind(this)}
      />;

    return (
      <div className={styles.sharePointSiteProvisioning}>
        <div className={styles.container}>
          <div className={styles.row}>
            {!this.state.getStartedClicked ?
              <Welcome
                createSiteButtonClick={this.createSiteButtonClickHandler.bind(this)}
              /> :
              pageToBeRendered
            }
          </div>
        </div>
      </div>
    );
  }
}
