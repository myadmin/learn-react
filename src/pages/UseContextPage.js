import React, { useContext } from 'react';
import { ThemeContext } from '../Context';

const UseContextPage = () => {
  const context = useContext(ThemeContext);

  return (
    <div>
      <h3 className={context.themeColor}>UseContextPage</h3>
    </div>
  );
};

export default UseContextPage;
