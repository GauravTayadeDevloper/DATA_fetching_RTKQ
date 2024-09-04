import React from "react";

const Footer: React.FC = () => {
    return (
            
        <div style={FooterStyle}>
            <h2>REPOSITORY LIST ASSIGNMENT</h2>
        </div>
    )
};
const FooterStyle: React.CSSProperties = {
    marginTop:'5px',
      backgroundColor: '#282c34',
  padding: '10px',
  color: 'white',
  textAlign: 'center',
}
export default Footer;