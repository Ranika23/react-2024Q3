
import './header.css';
import React from 'react';



class Header extends React.Component {
    render() {
        return (
          <header className="header">
            <div className="header-container">
              <div className="header-container-search">
                <input
                  type="text"
                  className={'header-input'}
                  placeholder={'Search...'}
                />
                <button
                  className="header-search-button"
                >
                  Search
                </button>
              </div>
            </div>
          </header>
        );
}
}

export default Header;