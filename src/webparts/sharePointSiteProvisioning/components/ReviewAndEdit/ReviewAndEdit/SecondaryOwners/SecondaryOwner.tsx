import * as React from 'react';
import { NormalPeoplePicker, IBasePickerSuggestionsProps } from 'office-ui-fabric-react/lib/Pickers';
import Aux from '../../../hoc/Auxilliary';
import Label from '../../UIElements/Label/label';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
//import inputStyle from '../../UIElements/InputText/InputText.module.scss';

export interface ISecondaryOwnerProps {
    className: string;
    _onFilterChanged: (filterText: string, currentPersonas: IPersonaProps[], limitResults?: number) => any;
}

const secondaryOwner = (props: ISecondaryOwnerProps) => {
    const suggestionProps: IBasePickerSuggestionsProps = {
        suggestionsHeaderText: 'Suggested People',
        noResultsFoundText: 'No results found',
        loadingText: 'Loading'
    };

    return (
        <Aux className={props.className}>
            <Label>Secondary Owner</Label>
            <NormalPeoplePicker
                key={'normal'}
                pickerSuggestionsProps={suggestionProps}
                getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
                onResolveSuggestions={props._onFilterChanged}
            />
        </Aux>
    );
};

export default secondaryOwner;