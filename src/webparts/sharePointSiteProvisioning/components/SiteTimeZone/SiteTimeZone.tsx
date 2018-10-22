import * as React from 'react';
import LeftLayout from '../UI/Layout/LeftLayout/LeftLayout';
import styles from './SiteTimeZone.module.scss';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

export interface ISiteTimeZone {
    timeZoneOptions: IDropdownOption[]
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
                    />
                </div>
            </div>
        </div>
    );
};

export default siteTimeZone;