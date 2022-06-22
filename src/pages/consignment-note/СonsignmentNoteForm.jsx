import React, {useEffect, useState} from 'react';

import moment from 'moment'
import {useFormik} from "formik";
import AddDiller from "./AddDiller";
import NumberFormat from "react-number-format";
import {Button, TextField} from "@mui/material";
import BaseSelect from "../../components/select-required/BaseSelect";

const СonsignmentNoteForm = ({order, setOrder, handlePrint, setDillerName}) => {

    const [clickClear, setClickClear] = useState(false)
    const [open,setOpen] = useState(false)

    const dillers = JSON.parse(localStorage.getItem('dillers'))
    const [dillersOptions,setDillersOptions] = useState([{value: "test", label: "test"}])

    const salesType = [
        {value: 'M', label: "M"},
        {value: 'S', label: "S"},
    ]

    const formik = useFormik({
        initialValues: {
            diller: '',
            dillerDocumentNumber: '',
            whereAdress: '',
            auto: '',
            autoNumber: '',
            phone: '',
            salesType: 'M',
            amountTons: '',
            amountBag: '',

            date: new Date().getTime(),
            productType: 'CEMENT',
            fromWhom: 'СП ООО, MODERNA CEMENT INDUSTRIES',
        },
        onSubmit: values => {
            setDillerName(prev => prev = values.diller + " " + values.dillerDocumentNumber)
            setOrder(prevState => prevState = values)
            setClickClear(!clickClear)
        },
    });

    const onChangeInputs = (e, fieldName) => {
        formik.setFieldValue(fieldName, e.value)
    }

    const handleClear = () => {
        formik.setValues(formik.initialValues)
        setOrder(prevState => prevState = null)
        setClickClear(!clickClear)
    }

    useEffect(() => {
        order && handlePrint()
    }, [order, clickClear])

    useEffect(()=> {
        dillers && dillers.forEach(i => dillersOptions.push({value: i.toUpperCase(), label: i.toUpperCase()}))
    },[])

    return (
        <div className="note">

            <AddDiller setOpen={setOpen} open={open} dillersOptions={dillersOptions}/>

            <div className="note__container">
                <h1 className='note__title'>MODERNA zavodida yuk xati tayyorlash</h1>
                <form onSubmit={formik.handleSubmit} className="note__form note-form">
                    <div className="note-form__item">
                        <TextField
                            className="form__item_input"
                            type='date'
                            onChange={formik.handleChange}
                            value={moment(formik.values.date).format('YYYY-MM-DD')}
                            name="date"
                            required
                        />
                        <BaseSelect
                            classNamePrefix="select"
                            placeholder={'dillerni tanlang'}
                            isDisabled={false}
                            isSearchable={true}
                            name="diller"
                            options={dillersOptions}
                            value={formik.values.diller === "" ? "" : {
                                label: formik.values.diller,
                                value: formik.values.diller
                            }}
                            onChange={e => onChangeInputs(e, 'diller')}
                            required
                        />
                        <TextField
                            className="form__item_input"
                            label="buyurtma raqami"
                            variant="outlined"
                            name="dillerDocumentNumber"
                            type='number'
                            value={formik.values.dillerDocumentNumber}
                            onChange={formik.handleChange}
                            required
                        />
                    </div>
                    <div className="note-form__item">
                        <TextField
                            className="form__item_input"
                            label="yuk manzili (qayerga?)"
                            variant="outlined"
                            name="whereAdress"
                            value={formik.values.whereAdress}
                            onChange={formik.handleChange}
                            required
                        />
                        <NumberFormat
                            className="form__item_input form__item__phone"
                            placeholder={"haydovchi telefon raqami *"}
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            required
                            format="+998 (##) ###-##-##"
                            mask={"_"}
                        />

                    </div>
                    <div className="note-form__item">
                        <TextField
                            className="form__item_input"
                            label="avtomobil rusumi"
                            variant="outlined"
                            name="auto"
                            value={formik.values.auto}
                            onChange={formik.handleChange}
                            required
                        />
                        <TextField
                            className="form__item_input"
                            label="avtomobil raqami"
                            variant="outlined"
                            name="autoNumber"
                            value={formik.values.autoNumber}
                            onChange={formik.handleChange}
                            required
                        />
                    </div>
                    <div className="note-form__item">
                        <BaseSelect
                            classNamePrefix="select selecttip"
                            placeholder={'qopli yoki rasipnoy'}
                            isDisabled={false}
                            isSearchable={true}
                            name="diller"
                            options={salesType}
                            value={formik.values.salesType === "" ? "" : {
                                label: formik.values.salesType,
                                value: formik.values.salesType
                            }}
                            onChange={e => onChangeInputs(e, 'salesType')}
                            required
                        />
                        <TextField
                            className="form__item_input-tons"
                            label="yuk miqdori (tonna)"
                            variant="outlined"
                            type='number'
                            name="amountTons"
                            value={formik.values.amountTons}
                            onChange={formik.handleChange}
                            required
                        />
                        <TextField
                            className="form__item_input-bug"
                            label="yuk miqdori (qopda)"
                            variant="outlined"
                            name="amountBag"
                            type='number'
                            value={formik.values.amountBag}
                            onChange={formik.handleChange}
                            required
                        />
                    </div>

                    <div className="note-form__item">
                        <Button className="form__item_button" onClick={handleClear} variant={'contained'}>Tozalash</Button>

                        <Button className="form__item_button" type={"submit"} variant={'contained'}>chop etish</Button>

                        <Button variant="contained" className="form__item_button" onClick={()=>setOpen(true)}>
                            + yangi diller qo'shish
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default СonsignmentNoteForm;