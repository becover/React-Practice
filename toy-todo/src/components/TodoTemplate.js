import React from 'react';
import styled from 'styled-components';

const Template = styled.div`
  width: 500px;
  min-height: 500px;
  margin: 100px auto;
  padding: 30px;
  border-radius: 5px;
`;

const TodoTemplate = ({ children, colors, setColorCheck }) => {
  const getChecked = colors => {
    const chk = colors.filter(num => num.checked === true);
    setColorCheck(chk[0].background);
    return chk[0].background;
  };

  return (
    <Template style={{ background: getChecked(colors) }}>{children}</Template>
  );
};

export default TodoTemplate;
