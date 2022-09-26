import React from 'react';
import classes from "./Advert.module.css";

const Advert = (props) => {
    return (
        <div className={classes.advert}>
            {props.advert}
        </div>
    );
};

export default Advert;