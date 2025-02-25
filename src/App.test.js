/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App  from './App.jsx';


test('App should render', () => {
    render(<App />);
  
    expect(screen.getByText('All Pokemon')).toBeInTheDocument();
  });