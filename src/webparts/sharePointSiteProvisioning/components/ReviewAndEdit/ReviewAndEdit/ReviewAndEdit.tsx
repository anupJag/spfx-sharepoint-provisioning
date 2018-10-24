import * as React from 'react';
import SiteNameDetails from './SiteName/SiteName';
import PrimaryOwner from './PrimaryOwner/PrimaryOwner';
import SecondaryOwner from './SecondaryOwners/SecondaryOwner';
import styles from './ReviewAndEdit.module.scss';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';

export interface IReviewAndEdit {
    _onFilterChanged: (filterText: string, currentPersonas: IPersonaProps[], limitResults?: number) => any;
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
                    <SecondaryOwner
                        className={styles.Details}
                        _onFilterChanged={props._onFilterChanged}
                    />
                </div>
            </div>
        </div>
    );
};

export default reviewAndEdit;