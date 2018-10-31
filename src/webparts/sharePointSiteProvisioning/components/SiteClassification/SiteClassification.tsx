import * as React from 'react';
import LeftLayout from '../UI/Layout/LeftLayout/LeftLayout';
import styles from './SiteClassification.module.scss';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import Navigation from '../Navigation/Navigation';

export interface ISiteClassification {
    siteClassification: IDropdownOption[];
    siteClassificationDropDownChanged: (item: IDropdownOption) => void;
    isBackDisabled: boolean;
    isForwardDisabled: boolean;
    onBackClicked: () => void;
    onForwadrdClicked: () => void;
    selectedKey: any;
}


const siteClassification = (props: ISiteClassification) => {

    return (
        <div className={styles.SiteClassification}>
            <div className={styles.LeftLayoutHolder}>
                <LeftLayout LayoutText="Privacy & Security"/>
            </div>
            <div className={styles.RightLayoutHolder}>
                <div className={styles.SiteClassificationSelection}>
                    <Dropdown
                        options={props.siteClassification}
                        onChanged={props.siteClassificationDropDownChanged}
                        selectedKey={props.selectedKey}
                        placeHolder="Select your site classification"
                    />
                </div>
                <div className={styles.NavigationFooter}>
                    <Navigation
                        isBackDisabled={props.isBackDisabled}
                        isForwardDisabled={props.isForwardDisabled}
                        onBackClicked={props.onBackClicked}
                        onForwadrdClicked={props.onForwadrdClicked}
                    />
                </div>
            </div>
        </div>
    );
};

export default siteClassification;