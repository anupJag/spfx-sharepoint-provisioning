import * as React from 'react';
import LeftLayout from '../UI/Layout/LeftLayout/LeftLayout';
import styles from './SiteFeatures.module.scss';


const siteFeatures = (props) => {
    return (
        <div className={styles.SiteFeatures}>
            <div className={styles.LeftLayoutHolder}>
                <LeftLayout LayoutText="Does your website need any of these features?" />
            </div>
            <div className={styles.RightLayoutHolder}>
                Choices Will go here
            </div>
        </div>
    );
};

export default siteFeatures;