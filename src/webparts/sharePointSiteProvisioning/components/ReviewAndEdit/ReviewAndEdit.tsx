import * as React from 'react';
import LeftLayout from '../UI/Layout/LeftLayout/LeftLayout';
import styles from './ReviewAndEdit.module.scss';
import ReviewEdit from './ReviewAndEdit/ReviewAndEdit';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';


export interface IReviewAndEdit {
    _onFilterChanged: (filterText: string, currentPersonas: IPersonaProps[], limitResults?: number) => any;
}

const reviewAndEdit = (props: IReviewAndEdit) => {
    return (
        <div className={styles.ReviewAndEdit}>
            <div className={styles.LeftLayoutHolder}>
                <LeftLayout LayoutText="Review and Edit your info" />
            </div>
            <div className={styles.RightLayoutHolder}>
                <div className={styles.ReviewEditContainer}>
                    <ReviewEdit 
                        _onFilterChanged={props._onFilterChanged}
                    />
                </div>
            </div>
        </div>
    );
};

export default reviewAndEdit;