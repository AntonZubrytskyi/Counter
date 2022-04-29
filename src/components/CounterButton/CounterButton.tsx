import { FC } from 'react'
import { ButtonContainer } from './ButtonContainer';

interface CounterButtonProps {
    data_test_id: string;
    title: string;
    handleCounter: () => void;
}

const CounterButton: FC<CounterButtonProps> = ({ data_test_id, title, handleCounter}) => {
  return (
      <ButtonContainer data-testid={data_test_id} onClick={handleCounter}>
        {title}
    </ButtonContainer>
  )
}

export default CounterButton