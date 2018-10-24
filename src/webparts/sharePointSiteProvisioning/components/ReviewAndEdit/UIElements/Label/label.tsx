import * as React from 'react';
import styles from './label.module.scss';

const label = (props) => <label className={styles.Label}>{props.children}</label>;

export default label;