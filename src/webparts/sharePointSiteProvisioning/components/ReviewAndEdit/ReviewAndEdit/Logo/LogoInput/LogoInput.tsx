import * as React from 'react';
import styles from './LogoInput.module.scss';

export interface ILogoInput {
    imagePreviewUrl: any;
    handleImageChange:(event) => void;
}

const logoInput = (props : ILogoInput) => {

    let { imagePreviewUrl } = props;
    let imagePreview = null;
    if (imagePreviewUrl) {
        imagePreview = (<img src={imagePreviewUrl} className={styles.ImgClass} />);
    } else {
        imagePreview = (<div className={styles.PreviewText}></div>);
    }

    return (
        <div className={styles.PreviewComponent}>
            <div className={styles.ImgPreview}>
                {imagePreview}
            </div>
            <div className={styles.FileInputHandler}>
                <div className={styles.FileInputContainer}>
                    <label>+
                        <input className={styles.FileInput}
                            type="file"
                            onChange={props.handleImageChange} />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default logoInput;