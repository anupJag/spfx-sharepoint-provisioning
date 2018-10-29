import * as React from 'react';
import LeftLayout from '../UI/Layout/LeftLayout/LeftLayout';
import styles from './DesignPicker.module.scss';
import Navigation from '../Navigation/Navigation';


export interface IDesignPickerProps {
    isBackDisabled: boolean;
    isForwardDisabled: boolean;
    onBackClicked: () => void;
    onForwadrdClicked: () => void;
}

const designPicker = (props: IDesignPickerProps) => {
    return (
        <div className={styles.DesignPickerMain}>
            <div className={styles.LeftLayoutHolder}>
                <LeftLayout LayoutText="Pick a design you like" />
            </div>
            <div className={styles.RightLayoutHolder}>
                <div className={styles.DesignPickerSection}>
                    Desgin Picker Section
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