import React from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

export function CardDiv(props){

    return(
        
        <motion.div layout className='card-container'>
            <AnimatePresence>
            {
                props.filtered.map(item => 
                <motion.div layout key={item.key} className = "card-div" animate ={{opacity: 1}} initial = {{opacity: 0}} exit={{opacity: 0}}>
                    <img className='card-image' src={item.image} alt=""/>
                    <div className='card-name'>
                        <h4>{item.name}</h4>
                    </div>
                </motion.div> )
            }
            </AnimatePresence>
        </motion.div>
    );
}

export default CardDiv;