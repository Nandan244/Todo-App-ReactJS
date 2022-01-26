import React from "react"

function Timer(){
    const time = new Date().toLocaleTimeString();
    const [now,setTime] = React.useState(time)

    function getTime(){
        setTime(new Date().toLocaleTimeString())
    }

    setInterval(getTime,1000)

    return(
        <h1 className="Timer" onClick={getTime}><i class="fas fa-clock"></i> {now}</h1>
    );
}

export default Timer;