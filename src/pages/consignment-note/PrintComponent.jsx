import React from 'react';
import ConsignmentNote from "./ConsignmentNote";
import ConsignmentNoteDriver from "./ConsignmentNoteDriver";

const PrintComponent =React.forwardRef( ({order},ref) => {
    return (
        <div ref={ref}>
            <ConsignmentNote order={order}/>
            <ConsignmentNote order={order}/>
            <ConsignmentNoteDriver order={order}/>
        </div>
    );
});

export default PrintComponent;