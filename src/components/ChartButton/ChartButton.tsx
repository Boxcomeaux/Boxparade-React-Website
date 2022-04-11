import React, {Fragment, useEffect, useState} from "react";
import _c from './ChartButton.module.css';
const ChartButton: React.FC<{ title: string, index: number, sendIndex: (index: number) => void, typeIndex: number, activeIndex: number}> = (props) => {

    const [active,setActive] = useState(false);

    const chartToggleHandler = (event: React.MouseEvent) => {
        setActive(true);
        props.sendIndex(props.index);
    }

    useEffect(() => {
        if(props.activeIndex !== props.index){
            setActive(false);
        }else{
            setActive(true);
        }
    }, [props.activeIndex, props.index]);

    return (
        <Fragment>
            <button onClick={chartToggleHandler} type="button" className={active ? _c.active : ''}>
                {(props.index === 0 && props.typeIndex === 0) && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-8 -8 40 40">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.93 9H13V4.07c3.61.45 6.48 3.32 6.93 6.93zM4 12c0-4.07 3.06-7.44 7-7.93v15.86c-3.94-.49-7-3.86-7-7.93zm9 7.93V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93z"/>
                </svg>}
                {(props.index === 1 && props.typeIndex === 0) && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-8 -8 40 40"><path d="M14.82 11h7.13c-.47-4.72-4.23-8.48-8.95-8.95v7.13c.85.31 1.51.97 1.82 1.82zM15 4.58C17 5.4 18.6 7 19.42 9h-3.43c-.28-.37-.62-.71-.99-.99V4.58zM2 12c0 5.19 3.95 9.45 9 9.95v-7.13C9.84 14.4 9 13.3 9 12c0-1.3.84-2.4 2-2.82V2.05c-5.05.5-9 4.76-9 9.95zm7-7.42v3.44c-1.23.92-2 2.39-2 3.98 0 1.59.77 3.06 2 3.99v3.44C6.04 18.24 4 15.35 4 12c0-3.35 2.04-6.24 5-7.42zm4 10.24v7.13c4.72-.47 8.48-4.23 8.95-8.95h-7.13c-.31.85-.97 1.51-1.82 1.82zm2 1.17c.37-.28.71-.61.99-.99h3.43C18.6 17 17 18.6 15 19.42v-3.43z"/></svg>}
                {(props.index === 2 && props.typeIndex === 0) && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-8 -8 40 40"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.93 9H13V4.07c3.61.45 6.48 3.32 6.93 6.93zM4 12c0-4.07 3.06-7.44 7-7.93v15.86c-3.94-.49-7-3.86-7-7.93zm9 7.93V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93z"/><text stroke="#000" fill="none" fontFamily="'Poppins', sans-serif" fontSize="12" strokeWidth="1.1px" y="2" x="16">3D</text></svg>}
                {(props.index === 3 && props.typeIndex === 0) && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-8 -8 40 40"><path d="M14.82 11h7.13c-.47-4.72-4.23-8.48-8.95-8.95v7.13c.85.31 1.51.97 1.82 1.82zM15 4.58C17 5.4 18.6 7 19.42 9h-3.43c-.28-.37-.62-.71-.99-.99V4.58zM2 12c0 5.19 3.95 9.45 9 9.95v-7.13C9.84 14.4 9 13.3 9 12c0-1.3.84-2.4 2-2.82V2.05c-5.05.5-9 4.76-9 9.95zm7-7.42v3.44c-1.23.92-2 2.39-2 3.98 0 1.59.77 3.06 2 3.99v3.44C6.04 18.24 4 15.35 4 12c0-3.35 2.04-6.24 5-7.42zm4 10.24v7.13c4.72-.47 8.48-4.23 8.95-8.95h-7.13c-.31.85-.97 1.51-1.82 1.82zm2 1.17c.37-.28.71-.61.99-.99h3.43C18.6 17 17 18.6 15 19.42v-3.43z"/><text stroke="#000" fill="none" fontFamily="'Poppins', sans-serif" fontSize="12" strokeWidth="1.1px" y="2" x="16">3D</text></svg>}
                {(props.index === 0 && props.typeIndex === 1) && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-8 -8 40 40"><path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/></svg>}
                {(props.index === 1 && props.typeIndex === 1) && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-8 -8 40 40"><rect fill="none" height="24" width="24"/><g><path d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"/></g></svg>}
                {(props.index === 2 && props.typeIndex === 1) && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-8 -8 40 40"><path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/><text stroke="#000" fill="none" fontFamily="'Poppins', sans-serif" fontSize="12" strokeWidth="1.1px" y="2" x="16">3D</text></svg>}
                {(props.index === 3 && props.typeIndex === 1) && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-8 -8 40 40"><rect fill="none" height="24" width="24"/><g><path d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"/></g><text stroke="#000" fill="none" fontFamily="'Poppins', sans-serif" fontSize="12" strokeWidth="1.1px" y="2" x="16">3D</text></svg>}
                {(props.index === 4 && props.typeIndex === 1) && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-8 -8 40 40"><g><rect fill="none" height="24" width="24"/></g><g><path d="M6,10h3v10H6V10z M6,5h3v4H6V5z M16,16h3v4h-3V16z M16,13h3v2h-3V13z M11,13h3v7h-3V13z M11,9h3v3h-3V9z"/></g></svg>}
                {(props.index === 0 && props.typeIndex === 2) && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-8 -8 40 40"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99l1.5 1.5z"/></svg>}
                {(props.index === 1 && props.typeIndex === 2) && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-8 -8 40 40"><rect fill="none" height="24" width="24"/><path d="M2,19.99l7.5-7.51l4,4l7.09-7.97L22,9.92l-8.5,9.56l-4-4l-6,6.01L2,19.99z M3.5,15.49l6-6.01l4,4L22,3.92l-1.41-1.41 l-7.09,7.97l-4-4L2,13.99L3.5,15.49z"/></svg>}
                {(props.index === 0 && props.typeIndex === 3) && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-8 -8 40 40"><rect fill="none" height="24" width="24"/><path d="M17,7l-5-4l-5,7L3,7v13h18V7H17z"/></svg>}
                {(props.index === 1 && props.typeIndex === 3) && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-8 -8 40 40"><rect fill="none" height="24" width="24"/><path d="M17,7l-5-4l-5,7L3,7v13h18V7H17z M19,16.95l-7-5.45L8,17l-3-2.4V11l2.44,1.83l4.96-6.95L16.3,9H19V16.95z"/></svg>}
            </button>
        </Fragment>
    )
};

export default ChartButton;