import * as React from 'react';
import Aux from '../../../hoc/Auxilliary';
import Label from '../../UIElements/Label/label';
import inputStyle from '../../UIElements/InputText/InputText.module.scss';


export interface ITimeZoneProps {
    timeZone: string;
    className? : any;
}


const timeZone = (props: ITimeZoneProps) => {

    const timeZoneStyle: React.CSSProperties = {
        fontSize: "14px"
    };

    return (
        <Aux className={props.className}>
            <Label>Time Zone</Label>
            <input
                type="text"
                placeholder="Enter site Name"
                value={props.timeZone}
                className={inputStyle.InputText}
                style={timeZoneStyle}
            />
        </Aux>
    );
};

export default timeZone;