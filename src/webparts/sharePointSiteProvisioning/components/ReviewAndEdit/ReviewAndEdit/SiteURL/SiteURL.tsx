import * as React from 'react';
import Aux from '../../../hoc/Auxilliary';
import Label from '../../UIElements/Label/label';
import inputStyle from '../../UIElements/InputText/InputText.module.scss';

export interface ISiteURL {
    className: any;
    siteURLValue: string;
}


const siteURL = (props: ISiteURL) => {
    const siteURLStyle: React.CSSProperties = {
        fontSize: "14px"
    };

    return (
        <Aux className={props.className}>
            <Label>Site URL</Label>
            <input
                type="text"
                placeholder="Site URL Not Configured"
                value={props.siteURLValue}
                className={inputStyle.InputText}
                style={siteURLStyle}
            />
        </Aux>
    );
};

export default siteURL;