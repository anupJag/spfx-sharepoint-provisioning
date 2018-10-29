import * as React from 'react';
import styles from './Design.module.scss';

export interface IDesign {
    DesignLabelName: string;
    DesignLabelDesc: string;
    DesignBackgroundURL: string;
    DesginTheme: string[];
}


const design = (props: IDesign) => {

    const designBackgroundURL: React.CSSProperties = { backgroundImage: `url(${props.DesignBackgroundURL})` }

    return (
        <div className={styles.container}>
            <div className={styles.holder} style={designBackgroundURL}>
                <div className={styles.labelContainer}>
                    <label>{props.DesignLabelName}</label>
                </div>
            </div>
            <div className={styles.overlay}>
                <label className={styles.text}>{props.DesignLabelDesc}</label>
            </div>
            <div className={styles.colorContainer}>
                {
                    props.DesginTheme.map(el => <div className={styles.innerColor} style={{ backgroundColor: `${el}` }}></div>)
                }
            </div>
        </div>
    );
};

export default design;