import React from 'react';
import './style.css';

type AppProps = { message: string };

const App: React.SFC<AppProps> = ({ message }) => <div>{message}</div>;

export default App;
