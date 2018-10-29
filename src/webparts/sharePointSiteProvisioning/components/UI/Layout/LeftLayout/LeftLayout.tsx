import * as React from "react";
import styles from './LeftLayout.module.scss';

export interface ILeftLayoutProps {
    LayoutText: string;
    style? : any;
}

const leftLayout = (props: ILeftLayoutProps) => {
    return (
        <div className={styles.LeftLayout} style={props.style}>
            {props.LayoutText}
        </div>
    );
};

export default leftLayout;