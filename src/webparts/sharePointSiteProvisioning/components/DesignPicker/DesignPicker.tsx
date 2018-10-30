import * as React from 'react';
import LeftLayout from '../UI/Layout/LeftLayout/LeftLayout';
import styles from './DesignPicker.module.scss';
import Design from './Design/Design';
import Navigation from '../Navigation/Navigation';
import { IDesign } from './Design/Design';


export interface IDesignPickerProps {
    designCollection: IDesign[];
    isBackDisabled: boolean;
    isForwardDisabled: boolean;
    onBackClicked: () => void;
    onForwadrdClicked: () => void;
    designCollectionOnClick: (event, key) => void;
}

const designPicker = (props: IDesignPickerProps) => {
    return (
        <div className={styles.DesignPickerMain}>
            <div className={styles.LeftLayoutHolder}>
                <LeftLayout LayoutText="Pick a Theme for your site" />
            </div>
            <div className={styles.RightLayoutHolder}>
                <div className={styles.DesignPickerSection}>
                    {
                        props.designCollection.map((el, index) =>
                            <Design
                                designCollection={el}
                                key={index}
                                designCollectionOnClick={props.designCollectionOnClick.bind(this, index)}
                            />
                        )
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

export default designPicker;