import axios from "axios";
import { useState } from "react";

// make a home page function
function Display_logs(props) {
  return (
    <div>
        <form action="/action_page.php">
            <pre className="container">
                {props}
            </pre>
        </form>
    </div>
  );
}

export default Display_logs;