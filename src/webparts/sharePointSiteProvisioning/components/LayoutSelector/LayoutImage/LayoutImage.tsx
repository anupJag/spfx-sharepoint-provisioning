import * as React from 'react';
import styles from './LayoutImage.module.scss';

export interface ILayoutImageProps {
    imageURL: string;
}

const layoutImage = (props: ILayoutImageProps) => {
    
    const image : React.CSSProperties = {backgroundImage : `url('${props.imageURL}')`};
    
    return (
        <div className={styles.LayoutImage}>
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