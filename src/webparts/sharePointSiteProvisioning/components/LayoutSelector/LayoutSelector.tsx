import * as React from 'react';
import styles from './LayoutSelector.module.scss';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { LayoutSelectorImages } from '../IProvisioningInterfaces';
import LayoutImage from './LayoutImage/LayoutImage';


const layoutSelector = (props) => {
    return (
        <div className={styles.LayoutSelector}>
            <div className={styles.LayoutSelectorHeader}>
                <div className={styles.Header}>
                    Pick Your Favorite Design
                </div>
                <div className={styles.SubHeader}>
                    The design will configure various options for your site
                </div>
            </div>
            <div className={styles.LayoutSelection}>
                <div className={styles.LayoutContainer}>
                    <LayoutImage imageURL={LayoutSelectorImages._Simple}/>
                    <LayoutImage imageURL={LayoutSelectorImages._Social}/>
                    <LayoutImage imageURL={LayoutSelectorImages._Traditional}/>
                </div>
            </div>
        </div>
    );
};

export default layoutSelector;