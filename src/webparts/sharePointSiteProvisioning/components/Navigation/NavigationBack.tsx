import * as React from 'react';
import { IconButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import styles from './Navigation.module.scss';

export interface INavigationBackProps{
    isDisabled : boolean;
    onBackClicked : () => void;
}

const navigationBack = (props : INavigationBackProps) => {
    return(
        <IconButton 
            disabled={props.isDisabled}
            iconProps={{iconName : "Back"}}
            onClick={props.onBackClicked}
            className={styles.Navigation}
        />
    );
};

export default navigationBack;