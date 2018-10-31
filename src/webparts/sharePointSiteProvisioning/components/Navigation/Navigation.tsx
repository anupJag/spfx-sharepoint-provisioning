import * as React from 'react';
import Back from './NavigationBack/NavigationBack';
import Forward from './NavigationNext/NavigationNext';
import styles from './Navigation.module.scss';

export interface INavigationProps {
    isBackDisabled: boolean;
    isForwardDisabled: boolean;
    onBackClicked: () => void;
    onForwadrdClicked: () => void;
}

const navigation = (props: INavigationProps) => {
    return (
        <footer className={styles.Navigation}>
            <Back
                isDisabled={props.isBackDisabled}
                onBackClicked={props.onBackClicked}
            />
            <Forward
                isDisabled={props.isForwardDisabled}
                onForwadrdClicked={props.onForwadrdClicked}
            />
        </footer>
    );
};

export default navigation;