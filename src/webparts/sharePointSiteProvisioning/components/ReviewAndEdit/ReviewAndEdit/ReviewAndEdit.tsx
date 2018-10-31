import * as React from 'react';
import SiteNameDetails from './SiteName/SiteName';
import SiteURL from './SiteURL/SiteURL';
import TimeZone from './TimeZone/TimeZone';
import Logo from './Logo/Logo';
import SiteClassification from './Classification/Classification';
import styles from './ReviewAndEdit.module.scss';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';

export interface IReviewAndEdit {
    imagePreviewUrl: any;
    siteNameValue: string;
    handleImageChange: (event) => void;
    onSiteNameChange:(event) => void;
    siteClassificationValue: string;
    siteURLValue: string;
    timeZone: string;
}

const reviewAndEdit = (props: IReviewAndEdit) => {
    return (
        <div className={styles.ReviewAndEdit}>
            <div className={styles.DetailsSection}>
                <div className={styles.DetailsContainer}>
                    <Logo
                        imagePreviewUrl={props.imagePreviewUrl}
                        handleImageChange={props.handleImageChange.bind(this)}
                        className={styles.Details}
                    />
                </div>
            </div>
            <div className={styles.DetailsSection}>
                <div className={styles.DetailsContainer}>
                    <SiteNameDetails
                        className={styles.Details}
                        siteNameValue={props.siteNameValue}
                        onSiteNameChange={props.onSiteNameChange.bind(this)}
                    />
                </div>
                <div className={styles.DetailsContainer}>
                    <SiteURL
                        className={styles.Details}
                        siteURLValue={props.siteURLValue}
                    />
                </div>
                <div className={styles.DetailsContainer}>
                    <TimeZone
                        className={styles.Details}
                        timeZone={props.timeZone}
                    />
                </div>
                <div className={styles.DetailsContainer}>
                    <SiteClassification
                        className={styles.Details}
                        siteClassificationValue={props.siteClassificationValue}
                    />
                </div>
            </div>
        </div>
    );
};

export default reviewAndEdit;