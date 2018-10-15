import * as React from 'react';
import { IconButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import styles from './Navigation.module.scss';

export interface INavigationNextProps{
    isDisabled : boolean;
    onForwadrdClicked : () => void;
}

const navigationNext = (props : INavigationNextProps) => {
    return(
        <IconButton 
            disabled={props.isDisabled}
            iconProps={{iconName : "Forward"}}
            onClick={props.onForwadrdClicked}
            className={styles.Navigation}
        />
    );
};

export default navigationNext;