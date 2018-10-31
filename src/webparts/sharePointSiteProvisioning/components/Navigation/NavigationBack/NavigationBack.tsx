import * as React from 'react';
import { ActionButton, IButtonProps, IButtonStyles } from 'office-ui-fabric-react/lib/Button';
import styles from './NavigationBack.module.scss';

export interface INavigationBackProps{
    isDisabled : boolean;
    onBackClicked : () => void;
}

const navigationBack = (props : INavigationBackProps) => {
    const actionButtonStyles : IButtonStyles = {
        iconHovered : {
            color : "#fff"
        },
        rootHovered : {
            color : "#fff"
        },
        icon : {
            color : "#fff",
            fontSize: "14px"
        }
    };
    
    return(
        <ActionButton 
            disabled={props.isDisabled}
            onClick={props.onBackClicked}
            iconProps={{iconName: "Back"}}
            styles={actionButtonStyles}
            className={styles.NavigationBack}
        >Back</ActionButton>
    );
};

export default navigationBack;