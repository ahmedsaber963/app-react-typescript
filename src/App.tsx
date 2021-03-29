import React from 'react';
import './styles/style.css';

interface Props {
  message?: string;
}
const App = ({ message }: Props): React.ReactElement => {
  return (
    <div>
      <img src="public/assets/blue.png" alt="blue"></img>
      {message}
    </div>
  );
};

export default App;
