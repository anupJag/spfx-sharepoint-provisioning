import * as React from 'react';
import Aux from '../../../hoc/Auxilliary';
import Label from '../../UIElements/Label/label';
import inputStyle from '../../UIElements/InputText/InputText.module.scss';

const primaryOwner = (props) => {
    const primaryOwnerStyle : React.CSSProperties = {
        fontSize : "14px"
    };

    return (
        <Aux className={props.className}>
            <Label>Site Owner</Label>
            <input
                type="text"
                placeholder="Enter site Name"
                value="anupam.jagatdeo@effem.com"
                className={inputStyle.InputText}
                style={primaryOwnerStyle}                
            />
        </Aux>
    );
};

export default primaryOwner;