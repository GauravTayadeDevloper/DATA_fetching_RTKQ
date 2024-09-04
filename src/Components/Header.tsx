import React from "react";
import "./Header.css"

const Header: React.FC = () =>
{
    return (
        <div style={HeaderStyle}>
            <h1>TYPE SCRIPTs</h1>

            </div>
    )
}

const HeaderStyle: React.CSSProperties={
      backgroundColor: '#282c34',
  padding: '10px',
  color: 'white',
  textAlign: 'center',
}
export default Header;