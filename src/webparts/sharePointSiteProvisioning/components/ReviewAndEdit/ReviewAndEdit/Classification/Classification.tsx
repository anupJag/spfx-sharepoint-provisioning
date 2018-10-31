import * as React from 'react';
import Aux from '../../../hoc/Auxilliary';
import Label from '../../UIElements/Label/label';
import inputStyle from '../../UIElements/InputText/InputText.module.scss';

export interface ISiteClassification{
    siteClassificationValue: string;
    className: any;
}

const siteClassification = (props: ISiteClassification) => {
    
    const siteClassificationStyle : React.CSSProperties = {
        fontSize : "14px"
    };

    return(
        <Aux className={props.className}>
            <Label>Classification</Label>
            <input
                type="text"
                placeholder="Site Classification Not selected"
                value={props.siteClassificationValue}
                className={inputStyle.InputText}
                style={siteClassificationStyle}                
            />
        </Aux>
    );
};

export default siteClassification;