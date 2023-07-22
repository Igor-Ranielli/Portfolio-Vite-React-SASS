import SocialNetworks from './SocialNetworks';

import Avatar from '../img/eu.jpg';

import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';

const Sidebar = () => { 
    return <aside id="sidebar">
        <img src={Avatar} alt="Igor Ranielli"/>
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="https://drive.google.com/uc?export=download&id=1kPUyeZYS2eZ8hHVmQgcus8C1MkViYkBh" className="btn" role="button">Download Currículo</a>
    </aside>;
};

export default Sidebar;