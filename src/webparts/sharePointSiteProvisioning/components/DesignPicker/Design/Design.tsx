import * as React from 'react';
import styles from './Design.module.scss';

export interface IDesign {
    DesignLabelName: string;
    DesignLabelDesc: string;
    DesignOnHoverBgColor: string;
    DesignBackgroundURL: string;
    DesignTheme: string[];
    DesignFontColor?: string;
    DesignValue: string;
    DesignSelected: boolean;
}

export interface IDesignProps {
    key: any;
    designCollection: IDesign;
    designCollectionOnClick:() => void;
}

const design = (props: IDesignProps) => {
    const { designCollection } = props;
    const designBackgroundURL: React.CSSProperties = { backgroundImage: `url(${designCollection.DesignBackgroundURL})` };

    const overlayOnHoverBackground: React.CSSProperties = { backgroundColor: `${designCollection.DesignOnHoverBgColor}` };

    const selectedOutline : React.CSSProperties = designCollection.DesignSelected ? {
        outline : "2px solid blue", outlineOffset : "5px"
    } : null;

    return (
        <div className={styles.container} role="button" onClick={props.designCollectionOnClick} key={props.key} style={selectedOutline}>
            <div className={styles.holder} style={designBackgroundURL}>
                <div className={styles.labelContainer}>
                    <label style={{ color: `${designCollection.DesignFontColor}` }}>{designCollection.DesignLabelName}</label>
                </div>
            </div>
            <div className={styles.overlay} style={overlayOnHoverBackground}>
                <label className={styles.text}
                    style={{ color: `${designCollection.DesignFontColor}` }}
                >{designCollection.DesignLabelDesc}</label>
            </div>
            <div className={styles.colorContainer}>
                {
                    designCollection.DesignTheme.map(el => <div className={styles.innerColor} style={{ backgroundColor: `${el}` }}></div>)
                }
            </div>
        </div>
    );
};

export default design;