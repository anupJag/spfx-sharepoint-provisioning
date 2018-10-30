import * as React from 'react';
import styles from './LayoutSelector.module.scss';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { LayoutSelectorImages } from '../IProvisioningInterfaces';
import LayoutImage from './LayoutImage/LayoutImage';
import { ILayoutImage } from './LayoutImage/LayoutImage';

export interface ILayoutSelector {
    layoutImageCollection: ILayoutImage[];
    onLayoutOptionClick:(event, key) => void;
}

const layoutSelector = (props: ILayoutSelector) => {
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
                    {
                        props.layoutImageCollection.map((el: ILayoutImage, index: number) =>
                            <LayoutImage
                                imageURL={el}
                                key={index}
                                onLayoutOptionClick={props.onLayoutOptionClick.bind(this, index)}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default layoutSelector;