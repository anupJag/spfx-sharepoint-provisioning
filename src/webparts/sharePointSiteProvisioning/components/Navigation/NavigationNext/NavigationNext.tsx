import * as React from 'react';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import styles from './NavigationNext.module.scss';

export interface INavigationNextProps{
    isDisabled : boolean;
    onForwadrdClicked : () => void;
}

const navigationNext = (props : INavigationNextProps) => {
    return(
        <DefaultButton 
            disabled={props.isDisabled}
            primary={true}
            text="Next"
            onClick={props.onForwadrdClicked}
            className={styles.NavigationNext}
        />
    );
};

export default navigationNext;