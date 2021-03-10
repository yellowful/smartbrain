import React, {useState} from 'react';
import {FormattedMessage} from 'react-intl';

const LanguageMenu = ({onSetLanguage}) => {
    const [isMenuToggled, resetToggled] = useState(false);
    return(
        isMenuToggled ?
        <div className="relative w-40 w-30-ns">
            <nav className="tr f5 code mh2 mh4-ns mt3 grow pointer" onClick={()=>resetToggled(!isMenuToggled)}>
            <FormattedMessage id='change-language' />
            </nav>
            <ul className="f5 list shadow-2 mt1 pa1 absolute right-0 mh2 mr4-ns">
                <li 
                    className="grow pointer mh1 mv3 mh2-ns" 
                    onClick={()=>{
                        onSetLanguage('en');
                        resetToggled(!isMenuToggled);
                    }}
                >
                    English
                </li>
                <li 
                    className="grow pointer mh1 mv3 mh2-ns" 
                    onClick={()=>{
                        onSetLanguage('zh');
                        resetToggled(!isMenuToggled);
                    }}
                >
                繁體中文</li>
                <li 
                    className="grow pointer  mh1 mv3 mh2-ns" 
                    onClick={()=>{
                        onSetLanguage('es');
                        resetToggled(!isMenuToggled);
                    }}
                >
                Español</li>
            </ul>
        </div>
        :
        <div>
            <nav className="f5 code mh2 mh4-ns mv3 grow pointer" onClick={()=>resetToggled(!isMenuToggled)}>
                <FormattedMessage id='current-language' />
            </nav>
        </div>
    )
}

export default LanguageMenu;