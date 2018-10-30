import * as React from 'react';
import styles from './LayoutImage.module.scss';

export interface ILayoutImage {
    imageURL: string;
    isSelected: boolean;
    layoutName: string;
}

export interface ILayoutImageProps {
    imageURL: ILayoutImage;
    key: any;
    onLayoutOptionClick:() => void;
}

const layoutImage = (props: ILayoutImageProps) => {

    const { imageURL } = props;

    const image: React.CSSProperties = { backgroundImage: `url('${imageURL.imageURL}')` };

    const selectedOutline : React.CSSProperties = imageURL.isSelected ? {
        outline : "2px solid blue", outlineOffset : "5px"
    } : null;

    return (
        <div className={styles.LayoutImage} key={props.key} onClick={props.onLayoutOptionClick} style={selectedOutline}>
            <div className={styles.Container}>
                <div className={styles.OuterDiv}>
                    <div className={styles.InnerDivImg} style={image}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default layoutImage;