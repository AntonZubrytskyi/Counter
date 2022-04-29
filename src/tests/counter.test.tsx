import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { Provider } from 'react-redux';
import { store } from '../redux/store';

test("render initial value of counter", async () => {
    render(<Provider store={store}><App /></Provider>)
    const counterValue = await screen.findByTestId("counter_value")
    expect(counterValue).toHaveTextContent('0')
})
test("render value of counter when the increment clicked", async () => {
    render(<Provider store={store}><App /></Provider>)
    const increment = await screen.findByTestId("increment")
    userEvent.click(increment);
    const counterValue = await screen.findByTestId("counter_value")
    expect(counterValue).toHaveTextContent('1')

})
test("render value of counter when the decrement clicked", async () => {
    render(<Provider store={store}><App /></Provider>)
    const increment = await screen.findByTestId("decrement")
    userEvent.click(increment);
    const counterValue = await screen.findByTestId("counter_value")
    expect(counterValue).toHaveTextContent('0')

})