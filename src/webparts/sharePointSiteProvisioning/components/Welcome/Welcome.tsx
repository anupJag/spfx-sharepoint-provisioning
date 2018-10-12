import * as React from 'react';
import * as strings from 'SharePointSiteProvisioningWebPartStrings';
import { Button, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import styles from './Welcome.module.scss';

export interface IWelcomeProps{
    createSiteButtonClick : () => void;
}

const welcome = (props : IWelcomeProps) => {
    return (
        <div className={styles.Welcome}>
            <h1 className={styles.Title}>{strings.WelcomeTitle}</h1>
            <h3 className={styles.SubTitle}>{strings.WelcomeSubTitle}</h3>
            <Button
                primary={true}
                className={styles.Button}
                onClick={props.createSiteButtonClick}
            >
                Create your site
            </Button>
        </div>
    );
};

export default welcome;