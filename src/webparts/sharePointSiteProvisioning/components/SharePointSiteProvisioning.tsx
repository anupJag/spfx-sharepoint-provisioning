import * as React from 'react';
import styles from './SharePointSiteProvisioning.module.scss';
import { ISharePointSiteProvisioningProps } from './ISharePointSiteProvisioningProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Welcome from './Welcome/Welcome';
import GettingStarted from './GettingStarted/GettingStarted';
import * as strings from 'SharePointSiteProvisioningWebPartStrings';
import { IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import SiteNamePage from './SiteName/SiteName';
import SiteFeatures from './SiteFeatures/SiteFeatures';

export interface ISharePointSiteProvisioningState {
  getStartedClicked: boolean;
  gettingStartedClassState: boolean;
  isBackButtonDisabled: boolean;
  isForwardButtonDisabled: boolean;
  currentPage: number;
  provisioningDetails: IProvisioningDetails;
}

export interface IProvisioningDetails {
  SiteTemplate: string;
  SiteName: string;
  SiteURL: string;
}


const FIRST_PAGE: number = 0;
const LAST_PAGE: number = 9;

export default class SharePointSiteProvisioning extends React.Component<ISharePointSiteProvisioningProps, ISharePointSiteProvisioningState> {

  /**
   *Default Constructor
   */
  constructor(props: ISharePointSiteProvisioningProps) {
    super(props);
    this.state = {
      getStartedClicked: false,
      gettingStartedClassState: false,
      isBackButtonDisabled: true,
      isForwardButtonDisabled: false,
      currentPage: 0,
      provisioningDetails: undefined
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

  /**
   * Function to get what type of site needs to be created
   */
  protected gettingStartedDropDownChangeHandler = (item: IDropdownOption) => {

    let templateSelected: string = item.key.toString();
    let tempProvisioningDetails: IProvisioningDetails = { ...this.state.provisioningDetails };

    tempProvisioningDetails["SiteTemplate"] = templateSelected;

    this.setState({
      provisioningDetails: tempProvisioningDetails,
      gettingStartedClassState: true
    });
  }

  /**
   * Function to Navigate Next Pages
   */
  protected isForwardButtonClicked = (): void => {
    let currentPageInfo: number = this.state.currentPage;
    let forwardButtonIsDisabled: boolean = this.state.isForwardButtonDisabled;
    let backButtonIsDisabled: boolean = this.state.isBackButtonDisabled;
    if (currentPageInfo <= LAST_PAGE) {
      currentPageInfo++;
    }

    if (currentPageInfo == LAST_PAGE) {
      forwardButtonIsDisabled = true;
    }
    else {
      forwardButtonIsDisabled = false;
    }

    if (currentPageInfo > FIRST_PAGE) {
      backButtonIsDisabled = false;
    }

    this.setState({
      currentPage: currentPageInfo,
      isForwardButtonDisabled: forwardButtonIsDisabled,
      isBackButtonDisabled: backButtonIsDisabled
    });
  }

  /**
   * Function to Navigate back pages
   */
  protected isBackButtonClicked = (): void => {
    let currentPageInfo: number = this.state.currentPage;
    let backButtonIsDisabled: boolean = this.state.isBackButtonDisabled;
    let forwardButtonIsDisabled: boolean = this.state.isForwardButtonDisabled;

    if (currentPageInfo > FIRST_PAGE) {
      currentPageInfo--;
    }

    if (currentPageInfo == FIRST_PAGE) {
      backButtonIsDisabled = true;
    }
    else {
      backButtonIsDisabled = false;
    }

    if (currentPageInfo < LAST_PAGE) {
      forwardButtonIsDisabled = false;
    }

    this.setState({
      currentPage: currentPageInfo,
      isBackButtonDisabled: backButtonIsDisabled,
      isForwardButtonDisabled: forwardButtonIsDisabled,
    });
  }

  protected onSiteNameEnteredHandler = (event: any): void => {
    let tempSiteName: string = escape(event.target.value);
    let tempProvisioningDetails: IProvisioningDetails = { ...this.state.provisioningDetails };
    let siteURL: string = tempSiteName.trim().split(' ').join('-');

    tempProvisioningDetails["SiteName"] = tempSiteName.trim();
    tempProvisioningDetails["SiteURL"] = siteURL.trim();

    this.setState({
      provisioningDetails: tempProvisioningDetails
    });
  }

  public render(): React.ReactElement<ISharePointSiteProvisioningProps> {
    let pageToBeRendered: JSX.Element | JSX.Element[];

    switch (this.state.currentPage) {

      case 0:
        pageToBeRendered =
          <GettingStarted
            dropDownClassState={this.state.gettingStartedClassState}
            onDropDownChange={this.gettingStartedDropDownChangeHandler.bind(this)}
            isBackDisabled={this.state.isBackButtonDisabled}
            isForwardDisabled={this.state.isForwardButtonDisabled}
            onForwadrdClicked={this.isForwardButtonClicked.bind(this)}
            onBackClicked={this.isBackButtonClicked.bind(this)}
            selectedKey={this.state.provisioningDetails ? this.state.provisioningDetails.SiteTemplate ? this.state.provisioningDetails.SiteTemplate : null : null}
          />;
        break;

      case 1:
        pageToBeRendered =
          <SiteNamePage
            isBackDisabled={this.state.isBackButtonDisabled}
            isForwardDisabled={this.state.isForwardButtonDisabled}
            onBackClicked={this.isBackButtonClicked.bind(this)}
            onForwadrdClicked={this.isForwardButtonClicked.bind(this)}
            siteNameTextFieldOnBlur={this.onSiteNameEnteredHandler.bind(this)}
            siteNameURL={this.state.provisioningDetails ? this.state.provisioningDetails.SiteURL ? this.state.provisioningDetails.SiteURL : null : null}
            siteName={this.state.provisioningDetails ? this.state.provisioningDetails.SiteName ? this.state.provisioningDetails.SiteName : null : null}
          />;
        break;

        default:
          pageToBeRendered = 
          <SiteFeatures />;
          break;

    }


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
