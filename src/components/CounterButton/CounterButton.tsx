import { FC } from 'react'
import { ButtonContainer } from './ButtonContainer';

interface CounterButtonProps {
    title: string;
    handleCounter: () => void;
}

const CounterButton: FC<CounterButtonProps> = ({title, handleCounter}) => {
  return (
    <ButtonContainer onClick={handleCounter}>
        {title}
    </ButtonContainer>
  )
}

export default CounterButton