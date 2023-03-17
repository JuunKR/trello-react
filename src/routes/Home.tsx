import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {

    return (
        <>
            <div>
                <Link to="/exchanger" >exchanger</Link>
            </div>
            <div>
                <Link to="/dnd" >Drag&Drop</Link>

            </div>
        </>
    );
}

export default Home;

