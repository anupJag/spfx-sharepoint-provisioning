import * as React from 'react';
import LeftLayout from '../UI/Layout/LeftLayout/LeftLayout';
import styles from './SiteTimeZone.module.scss';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import Navigation from '../Navigation/Navigation';

export interface ISiteTimeZone {
    timeZoneOptions: IDropdownOption[];
    timeZoneDropDownChanged: (item: IDropdownOption) => void;
    isBackDisabled: boolean;
    isForwardDisabled: boolean;
    onBackClicked: () => void;
    onForwadrdClicked: () => void;
    selectedKey: any;
}


const siteTimeZone = (props: ISiteTimeZone) => {
    return (
        <div className={styles.SiteTimeZone}>
            <div className={styles.LeftLayoutHolder}>
                <LeftLayout LayoutText="Which Time Zone would you like your site to be located?" />
            </div>
            <div className={styles.RightLayoutHolder}>
                <div className={styles.TimeZoneSelection}>
                    <Dropdown
                        placeHolder="Select a Time Zone"
                        options={props.timeZoneOptions}
                        onChanged={props.timeZoneDropDownChanged}
                        selectedKey={props.selectedKey}
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

export default siteTimeZone;