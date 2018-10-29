import * as React from 'react';
import LeftLayout from '../UI/Layout/LeftLayout/LeftLayout';
import { ListPeoplePicker, IBasePickerSuggestionsProps, ValidationState } from 'office-ui-fabric-react/lib/Pickers';
import styles from './SecondaryOwner.module.scss';
import Navigation from '../Navigation/Navigation';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';


export interface ISecondaryOwnerProps {
    isBackDisabled: boolean;
    isForwardDisabled: boolean;
    onBackClicked: () => void;
    onForwadrdClicked: () => void;
    _onFilterChanged: (filterText: string, currentPersonas: IPersonaProps[], limitResults?: number) => any;
    _validateInput: (input: string) => ValidationState;
    peoplePickerOnChange: (items:any[]) => void;
}

const secondaryOwner = (props: ISecondaryOwnerProps) => {

    const suggestionProps: IBasePickerSuggestionsProps = {
        suggestionsHeaderText: 'Suggested People',
        noResultsFoundText: 'No results found',
        loadingText: 'Loading'
    };

    return (
        <div className={styles.SecondaryOwner}>
            <div className={styles.LeftLayoutHolder}>
                <LeftLayout LayoutText="Does your site require any additional admins?" />
            </div>
            <div className={styles.RightLayoutHolder}>
                <div className={styles.SecondaryOwnerControl}>
                    <ListPeoplePicker
                        key={'normal'}
                        pickerSuggestionsProps={suggestionProps}
                        getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
                        onResolveSuggestions={props._onFilterChanged}
                        onValidateInput={props._validateInput}
                        onChange={props.peoplePickerOnChange}
                        
                    />
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

export default secondaryOwner;