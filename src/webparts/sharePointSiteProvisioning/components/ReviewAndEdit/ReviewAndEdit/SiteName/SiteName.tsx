import * as React from 'react';
import Aux from '../../../hoc/Auxilliary';
import Label from '../../UIElements/Label/label';
import inputStyle from '../../UIElements/InputText/InputText.module.scss';

export interface ISiteName{
    siteNameValue: string;
    className: any;
    onSiteNameChange:(event: any) => void;
}

const siteName = (props : ISiteName) => {
    return (
        <Aux className={props.className}>
            <Label>NAME</Label>
            <input
                type="text"
                placeholder="Enter site Name"
                value={props.siteNameValue}
                className={inputStyle.InputText}
                onChange={props.onSiteNameChange}
            />
        </Aux>
    );
};

export default siteName;