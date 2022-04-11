import _c from './Intro.module.css';
import React from "react";
import { useDispatch} from 'react-redux';
import {appActions} from "../../_store/AppSlice";
import Letter from "../Letter/Letter";

const Intro = () => {
    const TOP_TEXT = 'Welcome-To';
    const BOTTOM_TEXT = 'BOXPARADE';
    const TOP_TEXT_ARRAY = TOP_TEXT.split('');
    const BOTTOM_TEXT_ARRAY = BOTTOM_TEXT.split('');
    const dispatch = useDispatch();

    setTimeout(() => {
        dispatch(appActions.hideIntroHandler());
    }, 6000);

    return <div className={_c['bxp-intro-container']}>
        <div/>
        <div>
            <h1>
                {
                    TOP_TEXT_ARRAY.map((item, index) => (
                        <Letter key={index} letter={item} index={index}/>
                    ))
                }
            </h1>
            <h2>
                {
                    BOTTOM_TEXT_ARRAY.map((item, index) => (
                        <Letter key={index} letter={item} index={BOTTOM_TEXT_ARRAY.length - index}/>
                    ))
                }
            </h2>
        </div>
    </div>
};

export default Intro;