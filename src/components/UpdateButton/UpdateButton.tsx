import styled from './update-button.module.scss'
type Props = {
    text: string;
    customClass?: string;
    isDisabled?: boolean;
    onClick?: () => void;
}


export const UpdateButton = ({text,isDisabled,onClick}: Props) => {

    return (
        <button onClick={!isDisabled ?  onClick : ()=>{}} className={`${styled.updateButtonClass} ${isDisabled ? styled.updateButtonClassDisabled : ''}`}>
            {text}
        </button>
    )
}