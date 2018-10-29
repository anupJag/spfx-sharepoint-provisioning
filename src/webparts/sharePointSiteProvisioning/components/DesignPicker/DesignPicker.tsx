import * as React from 'react';
import LeftLayout from '../UI/Layout/LeftLayout/LeftLayout';
import styles from './DesignPicker.module.scss';
import Design from './Design/Design';
import Navigation from '../Navigation/Navigation';
import { IDesign } from './Design/Design';


export interface IDesignPickerProps {
    isBackDisabled: boolean;
    isForwardDisabled: boolean;
    onBackClicked: () => void;
    onForwadrdClicked: () => void;
}

const designPicker = (props: IDesignPickerProps) => {
    const DesignSpecs: IDesign[] = [
        {
            DesignLabelName: "Sky High",
            DesignLabelDesc: "Cosmopolitan style with an influential, modern feel",
            DesignBackgroundURL: "https://static.parastorage.com/services/adi-web/2.156.4//images/design-panel/theme-thumbnail_sky-high.jpg",
            DesginTheme: ["rgb(0, 102, 227)", "rgb(255, 255, 255)", "rgb(0, 0, 0)"]
        },
        {
            DesignLabelName: "Evolution",
            DesignLabelDesc: "Visionary and progressive with a contemporary touch",
            DesignBackgroundURL: "https://static.parastorage.com/services/adi-web/2.156.4//images/design-panel/theme-thumbnail_evolution.jpg",
            DesginTheme: ["rgb(208, 98, 40)", "rgb(223, 143, 100)", "rgb(152, 111, 11)"]
        }
    ];
    return (
        <div className={styles.DesignPickerMain}>
            <div className={styles.LeftLayoutHolder}>
                <LeftLayout LayoutText="Pick a design you like" />
            </div>
            <div className={styles.RightLayoutHolder}>
                <div className={styles.DesignPickerSection}>
                    {
                        DesignSpecs.map(el =>
                            <Design
                                DesginTheme={el.DesginTheme}
                                DesignBackgroundURL={el.DesignBackgroundURL}
                                DesignLabelName={el.DesignLabelName}
                                DesignLabelDesc={el.DesignLabelDesc}
                            />
                        )
                    }
                </div>
                <div className={styles.NavigationFooter}>
                    <Navigation
                        isBackDisabled={props.isBackDisabled}
                        isForwardDisabled={props.isForwardDisabled}
                        onBackClicked={props.onBackClicked}
                        onForwadrdClicked={props.onForwadrdClicked}
                    />
                </div>
            </div>
        </div>
    );
};

export default designPicker;