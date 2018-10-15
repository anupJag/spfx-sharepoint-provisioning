import * as React from 'react';
import LeftLayout from '../UI/Layout/LeftLayout/LeftLayout';
import styles from './SiteName.module.scss';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import Navigation from '../Navigation/Navigation';
import Aux from '../hoc/Auxilliary';


export interface ISiteNameProps {
    siteNameTextFieldOnBlur: (event: any) => void;
    siteName: string;
    siteNameURL: string;
    isBackDisabled: boolean;
    isForwardDisabled: boolean;
    onBackClicked: () => void;
    onForwadrdClicked: () => void;
}

const siteName = (props: ISiteNameProps) => {
    return (
        <Aux>
            <div className={styles.SiteNameMain}>
                <div className={styles.LeftLayoutHolder}>
                    <LeftLayout LayoutText="What is the name of your business or website?" />
                </div>
                <div className={styles.RightLayoutHolder}>
                    <div className={styles.TextHolder}>
                        <TextField
                            underlined={true}
                            placeholder="Give your site a name"
                            onBlur={props.siteNameTextFieldOnBlur}
                            value={props.siteName}
                        />
                    </div>
                    <div className={styles.URLHolder}>
                        <span>https://team.effem.com/sites/</span>
                        <TextField
                            underlined={true}
                            className={styles.URLField}
                            value={props.siteNameURL}
                        />
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
        </Aux>
    );
};

export default siteName;