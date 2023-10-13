import React from 'react';

const NavBtn = ({ title, isClicked, onClick }) => {
    return (
        <div className={ isClicked ? "darkNavDiv" : ''}>
            <h4 className="NavBtns" onClick={onClick} >
                { title }
            </h4>
        </div>
    );
}

export { NavBtn };