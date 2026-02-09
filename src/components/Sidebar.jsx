import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import Avatar from '../img/eu.jpg';

import '../styles/components/sidebar.sass';


const Sidebar = () => { 
    return (
    <aside id="sidebar">
        <img src={Avatar} alt="Igor Ranielli"/>
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="https://drive.google.com/file/d/1zBu2ZiaDM0mPckxFcs_hUCz6MpIoOdEa/view?usp=sharing" className="btn" role="button">Download Currículo</a>
    </aside>
    );
};

export default Sidebar;