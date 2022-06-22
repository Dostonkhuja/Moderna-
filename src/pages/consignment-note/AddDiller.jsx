import React from "react";
import {useFormik} from "formik";
import {Button, Modal, TextField} from "@mui/material";
import swal from 'sweetalert';

const AddDiller = ({setOpen,open,dillersOptions}) => {

    function handleClose() {setOpen(false)}

    const formik = useFormik({
        initialValues: {
            diller: "",
        },
        onSubmit: values => {
            let dillers = JSON.parse(localStorage.getItem("dillers"));
            dillers ? dillers.push(values.diller):dillers=[values.diller];
            localStorage.setItem("dillers", JSON.stringify(dillers));
            formik.setValues(formik.initialValues);
            swal(`diller ${values.diller} qo'shildi`,'', "success");
            handleClose();
            dillersOptions.push({value:values.diller.toUpperCase(),label:values.diller.toUpperCase()});
        },
    });

    return (
        <div className="add-diller">
            <Modal
                open={open}
                onClose={handleClose}
                className={'add-diller__container'}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="add-diller__box">
                    <h3 className="add-diller__title">Yangi diller qo'shish</h3>
                    <form onSubmit={formik.handleSubmit} className="add-diller__form">
                        <TextField
                            type='text'
                            className="form__item_input"
                            label="Dillerni kiritish"
                            variant="outlined"
                            name="diller"
                            value={formik.values.diller}
                            onChange={formik.handleChange}
                            required
                        />
                        <Button variant="contained" className="form__item_button" type={'submit'}>
                            dillerni qo'shish
                        </Button>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default AddDiller;