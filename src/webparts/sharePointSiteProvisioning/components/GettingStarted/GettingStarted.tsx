import * as React from 'react';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import styles from './GettingStarted.module.scss';
import Navigation from '../Navigation/Navigation';


export interface IGettingStartedProps {
    onDropDownChange: (item: IDropdownOption) => void;
    dropDownClassState: boolean;
    isBackDisabled : boolean;
    isForwardDisabled : boolean;
    onBackClicked : () => void;
    onForwadrdClicked : () => void;
    selectedKey : any;
}


const gettingStarted = (props: IGettingStartedProps) => {
    const dropDownOptions: IDropdownOption[] = [{ key: "communication", text: "communication." }, { key: "team", text: "my team." }];

    let cssClassToBeApplied = !props.dropDownClassState ? styles.DropDownStyling : styles.DropDownStylingOnChange;

    return (
        <div className={styles.GettingStarted}>
            <div className={styles.Partition}>
                <div className={styles.PartitionIcon}>
                    <i className="ms-Icon ms-Icon--CalculatorSubtract" aria-hidden="true"></i>
                </div>
                <div className={styles.PartitionMainContainer}>
                    <div className={styles.GetStartedLogo}>
                        Let's get started
                </div>
                    <div className={styles.GettingStartedContainer}>
                        <div>I want to create a site for</div>
                        <div>
                            <Dropdown
                                options={dropDownOptions}
                                onChanged={props.onDropDownChange}
                                className={cssClassToBeApplied}
                                selectedKey={props.selectedKey}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Navigation 
                isBackDisabled={props.isBackDisabled}
                isForwardDisabled={props.isForwardDisabled}
                onBackClicked={props.onBackClicked}
                onForwadrdClicked={props.onForwadrdClicked}
            />
        </div>
    );
};

export default gettingStarted;