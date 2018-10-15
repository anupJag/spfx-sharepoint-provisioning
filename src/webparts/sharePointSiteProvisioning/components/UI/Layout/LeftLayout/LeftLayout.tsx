import * as React from "react";
import styles from './LeftLayout.module.scss';

export interface ILeftLayoutProps {
    LayoutText: string;
}

const leftLayout = (props: ILeftLayoutProps) => {
    return (
        <div className={styles.LeftLayout}>
            {props.LayoutText}
        </div>
    );
};

export default leftLayout;