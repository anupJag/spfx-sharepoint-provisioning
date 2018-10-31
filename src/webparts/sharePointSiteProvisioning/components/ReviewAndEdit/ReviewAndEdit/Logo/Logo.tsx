import * as React from 'react';
import Aux from '../../../hoc/Auxilliary';
import Label from '../../UIElements/Label/label';
import LogoInput from './LogoInput/LogoInput';


export interface ILogo{
    imagePreviewUrl: any;
    className?: any;
    handleImageChange:(event) => void;
}

const logo = (props: ILogo) => {
    return(
        <Aux className={props.className}>
            <Label>Logo</Label>
            <LogoInput 
                imagePreviewUrl={props.imagePreviewUrl}
                handleImageChange={props.handleImageChange.bind(this)}
            />
        </Aux>
    );
};

export default logo;