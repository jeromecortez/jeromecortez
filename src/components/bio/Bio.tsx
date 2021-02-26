import React from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import ComputerIcon from '@material-ui/icons/Computer';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import CardContent from './fragments/CardContent';

import './Bio.css';
export type CardType = 'PROFILE' | 'SKILLS' | 'CONTACT' | '';

const useStyles = makeStyles((theme) => ({
    avatarContainer: {
        width: '12em',
        height: '12em',
        backgroundColor: '#1E1E1E'
    },
    avatar: {
        width: '7em',
        height: '7em',
    },
    bigAvatar: {
        width: '9em',
        height: '9em'
    }
}));

const Bio = () => {
    const [selected, setSelected] = React.useState<CardType>('');
    const classes = useStyles();
    const Card = ({ cardSelected, name, avatar , content, onClick }: { cardSelected: boolean, name: string, avatar: JSX.Element, content: JSX.Element, onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void}) => {
        return (
            <>
                <motion.div 
                    className="bio-card" 
                    animate={{ rotateY: cardSelected ? 180 : 0, visibility: cardSelected ? 'hidden' : 'visible' }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                    }}
                    onClick={onClick}
                >
                    {avatar}
                    <h2 className="bio-title">
                        {name}
                    </h2>
                    <motion.div 
                        className="bio-card-flip" 
                        animate={{ rotateY: cardSelected ? 0 : 180,  visibility: cardSelected ? 'visible' : 'hidden' }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30
                        }}
                        onClick={onClick}
                    >
                        {content}
                    </motion.div>
                </motion.div>
            </>
        )
    }

    return (
        <div className="bio-container">
            <AnimateSharedLayout>
                <Card 
                    cardSelected={selected === 'PROFILE'} 
                    onClick={() => setSelected(selected === 'PROFILE' ? '' : 'PROFILE')} 
                    avatar={<Avatar className={classes.avatarContainer}><PersonIcon className={classes.bigAvatar} /></Avatar>}
                    content={<CardContent type="PROFILE" />}
                    name="Profile"
                />
                <Card 
                    cardSelected={selected === 'SKILLS'} 
                    onClick={() => setSelected(selected === 'SKILLS' ? '' : 'SKILLS')} 
                    avatar={<Avatar className={classes.avatarContainer} ><ComputerIcon className={classes.avatar} /></Avatar>}
                    content={<CardContent type="SKILLS" />}
                    name="Skills"
                />
                <Card 
                    cardSelected={selected === 'CONTACT'} 
                    onClick={() => setSelected(selected === 'CONTACT' ? '' : 'CONTACT')} 
                    avatar={<Avatar className={classes.avatarContainer} ><ContactMailIcon className={classes.avatar} /></Avatar>}
                    content={<CardContent type="CONTACT" />}
                    name="Contact"
                />
            </AnimateSharedLayout>
        </div>
    )
}

export default Bio;