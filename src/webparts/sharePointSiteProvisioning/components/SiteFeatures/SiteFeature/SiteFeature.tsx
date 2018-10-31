import * as React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import styles from './SiteFeature.module.scss';

export interface ISiteFeature {
    labelName: string;
    key: any;
    isSelected: boolean;
    onCheckboxChangeEvent: (ev: React.FormEvent<HTMLElement>, isChecked: boolean) => void;
}

const siteFeature = (props: ISiteFeature) => {
    return (
        <div className={styles.SiteFeature}>
            <Checkbox
                label={props.labelName}
                key={props.key}
                checked={props.isSelected}
                onChange={props.onCheckboxChangeEvent}
            />
        </div>
    );
};

export default siteFeature;