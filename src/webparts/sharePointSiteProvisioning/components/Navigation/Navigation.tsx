import * as React from 'react';
import Back from './NavigationBack';
import Forward from './NavigationNext';

export interface INavigationProps {
    isBackDisabled: boolean;
    isForwardDisabled: boolean;
    onBackClicked: () => void;
    onForwadrdClicked: () => void;
}

const navigation = (props: INavigationProps) => {
    return (
        <footer>
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