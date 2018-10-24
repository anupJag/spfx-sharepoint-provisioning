import * as React from 'react';
import Aux from '../../../hoc/Auxilliary';
import Label from '../../UIElements/Label/label';
import inputStyle from '../../UIElements/InputText/InputText.module.scss';

const siteName = (props) => {
    return (
        <Aux className={props.className}>
            <Label>NAME</Label>
            <input
                type="text"
                placeholder="Enter site Name"
                value="Hello World"
                className={inputStyle.InputText}
            />
        </Aux>
    );
};

export default siteName;