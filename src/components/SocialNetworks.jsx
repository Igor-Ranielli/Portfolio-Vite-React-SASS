import { FaLinkedinIn, FaGithub, FaFacebook} from 'react-icons/fa';

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/igor-siqueira-4a18aa183/"},
    { name: "github", icon: <FaGithub />, link: "https://github.com/Igor-Ranielli" },
    { name: "facebook", icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=100009641652672" },
];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
        {socialNetworks.map((network) => (
                <a href={network.link} className="social-btn" id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    );
};

export default SocialNetworks;