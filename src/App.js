import {useRef, useState} from "react";
import './App.scss';

import СonsignmentNoteForm from "./pages/consignment-note/СonsignmentNoteForm";

import {useReactToPrint} from "react-to-print";
import PrintComponent from "./pages/consignment-note/PrintComponent";

function App() {

    const [order, setOrder] = useState(null)
    const [dillerName, setDillerName] = useState('')

    //to print
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: dillerName
    });

    return (
        <div className="App">
            <header className="App-header">
            </header>
            <main>
                <СonsignmentNoteForm order={order}
                                     setOrder={setOrder}
                                     handlePrint={handlePrint}
                                     setDillerName={setDillerName}/>

                {/*to print component*/}
                <div style={{display: 'none'}}>
                    {<PrintComponent order={order} ref={componentRef}/>}
                </div>
            </main>
            <footer className="footer">
                <footer className="footer__title">Created by Dostonkhuja Sheraliyev</footer>
            </footer>
        </div>
    );
}

export default App;
