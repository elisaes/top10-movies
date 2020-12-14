import { render, screen } from '@testing-library/react';
import Header from "./Header";

test('renders the header title', ()=>{
    render(<Header/>);
    const title = screen.getByText(/Top 10 movies of 2020/i);
    expect(title).toBeInTheDocument();
})