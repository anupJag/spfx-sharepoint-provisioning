import * as React from 'react';
import LeftLayout from '../UI/Layout/LeftLayout/LeftLayout';
import styles from './ReviewAndEdit.module.scss';
import ReviewEdit from './ReviewAndEdit/ReviewAndEdit';
import Navigation from '../Navigation/Navigation';


export interface IReviewAndEdit {
    isBackDisabled: boolean;
    isForwardDisabled: boolean;
    onBackClicked: () => void;
    onForwadrdClicked: () => void;
    handleImageChange: (event) => VoidFunction;
    imagePreviewUrl: any;
    siteNameValue: string;
    onSiteNameChange: (event: any) => void;
    siteClassificationValue: string;
    siteURLValue: string;
    timeZone: string;
}

const reviewAndEdit = (props: IReviewAndEdit) => {
    return (
        <div className={styles.ReviewAndEdit}>
            <div className={styles.LeftLayoutHolder}>
                <LeftLayout LayoutText="Review and Edit your info" />
            </div>
            <div className={styles.RightLayoutHolder}>
                <div className={styles.ReviewEditContainer}>
                    <ReviewEdit
                        handleImageChange={props.handleImageChange.bind(this)}
                        imagePreviewUrl={props.imagePreviewUrl}
                        siteNameValue={props.siteNameValue}
                        onSiteNameChange={props.onSiteNameChange.bind(this)}
                        siteClassificationValue={props.siteClassificationValue}
                        siteURLValue={props.siteURLValue}
                        timeZone={props.timeZone}
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

export default reviewAndEdit;