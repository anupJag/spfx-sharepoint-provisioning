import * as React from 'react';
import LeftLayout from '../UI/Layout/LeftLayout/LeftLayout';
import styles from './SiteFeatures.module.scss';
import SiteFeature from './SiteFeature/SiteFeature';
import { IProvisioningFeature } from '../IProvisioningInterfaces';
import Navigation from '../Navigation/Navigation';
import { findIndex } from '@microsoft/sp-lodash-subset';

export interface ISiteFeatures {
    choices: IProvisioningFeature[];
    onCheckboxChangeEventHandler: (ev: React.FormEvent<HTMLElement>, isChecked: boolean, key: any) => void;
    isBackDisabled: boolean;
    isForwardDisabled: boolean;
    onBackClicked: () => void;
    onForwadrdClicked: () => void;
}

const siteFeatures = (props: ISiteFeatures) => {
    return (
        <div className={styles.SiteFeatures}>
            <div className={styles.LeftLayoutHolder}>
                <LeftLayout LayoutText="Does your site need any of these features?" />
            </div>
            <div className={styles.RightLayoutHolder}>
                <div className={styles.CheckboxHolder}>
                    {
                        props.choices && props.choices.length > 0 ?
                            props.choices.map(el => {
                                return (
                                    <SiteFeature
                                        key={el.FeatureID}
                                        labelName={el.FeatureName}
                                        onCheckboxChangeEvent={props.onCheckboxChangeEventHandler.bind(this, el.FeatureID)}
                                    />
                                );
                            })

                            : null
                    }
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

export default siteFeatures;