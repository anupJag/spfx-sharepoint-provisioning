import * as React from 'react';
import SiteNameDetails from './SiteName/SiteName';
import PrimaryOwner from './PrimaryOwner/PrimaryOwner';
import styles from './ReviewAndEdit.module.scss';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';

export interface IReviewAndEdit {
    
}

const reviewAndEdit = (props: IReviewAndEdit) => {
    return (
        <div className={styles.ReviewAndEdit}>
            <div>
                Logo will go here
            </div>
            <div className={styles.DetailsSection}>
                <div className={styles.DetailsContainer}>
                    <SiteNameDetails
                        className={styles.Details}
                    />
                </div>
                <div className={styles.DetailsContainer}>
                    <PrimaryOwner
                        className={styles.Details}
                    />
                </div>
                <div className={styles.DetailsContainer}>
                    Will add some more stuff here
                </div>
            </div>
        </div>
    );
};

export default reviewAndEdit;