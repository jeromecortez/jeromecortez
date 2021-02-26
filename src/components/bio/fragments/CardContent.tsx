import { CardType } from '../Bio';

const CardContent = ({ type }: { type: CardType }) => {
    const renderContent = () => {
        switch (type) {
            case 'PROFILE': 
                return (
                    <div className="bio-card-content">
                        <p>
                            A person of pure curiousity with never ending thirst for new knowledge. Beware, this developer doesn't talk to strangers.
                        </p>
                        <p>
                            Searching for new technologies everyday keeps the deprecation away - some developer, probably.
                        </p>
                    </div>
                );
            case 'SKILLS': 
                return (
                    <div className="bio-card-content">
                        <p>
                            Knowledgeable with industry experience in the following field:
                        </p>
                        <ul>
                            <li>React</li>
                            <li>React Native</li>
                            <li>Typescript</li>
                            <li>PHP</li>
                            <li>Node</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                );
            default: 
                return (
                    <div style={{ fontSize: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        (╯°□°)╯︵ ┻━┻
                    </div>
                );
        }
    }
    return (
        <div className="bio-card-content-container">
            {renderContent()}
        </div>
    )
}

export default CardContent;