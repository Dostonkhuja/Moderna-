import React from 'react';
import moment from 'moment'
const ConsignmentNote = ({order}) => {

    return (<div>
            {order &&
                <div className='main-table' >
                    <b className='main-table__title'>
                        Накладная № A - 1 {new Date().getMonth() <= 9? "0"+new Date().getMonth()+ ' ':new Date().getMonth() + ' '}
                         - {order.dillerDocumentNumber}
                    </b>
                    <b className='main-table__date'>{moment(order.date).format('"DD" MM YYYY')} год</b>
                    <b className='main-table__from'>от кого: {' '+ order.fromWhom}</b>
                    <div className='main-table__where-diller-box'>
                        <b className='main-table__where'>куда: {order.whereAdress.toUpperCase()}</b>
                        <b className='main-table__diller'>Диллер: {order.diller.toUpperCase()}</b>
                    </div>
                    <div className='main-table__avto-number-tel-box'>
                        <b className='main-table__avto'>АВТО: {order.auto.toUpperCase() + " " + order.autoNumber.toUpperCase()} </b>
                        <b className='main-table__diller'>ТЕЛ: {order.phone}</b>
                    </div>
                    <table border="1" width="700" className='main-table__table'>
                        <thead>
                        <tr>
                            <th>Наименоваие <br/> товара</th>
                            <th>Тип</th>
                            <th>Количество <br/> (Тонн)</th>
                            <th>Количество <br/> (Мешок)</th>
                            <th>Сумма <br/> (USD)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>{order.productType.toUpperCase()}</th>
                            <th>{order.salesType.toUpperCase()}</th>
                            <th>{order.amountTons}</th>
                            <th>{order.amountBag}</th>
                            <th/>
                        </tr>
                        <tr>
                            <th colSpan='2'>Итого</th>
                            <th>{order.amountTons}</th>
                            <th>{order.amountBag}</th>
                            <th/>
                        </tr>
                        </tbody>
                    </table>
                    <div className="main-table__mil-bug-box">
                        <b>M.IL</b>
                        <b>Бухгалтер: _______________</b>
                    </div>
                    <div className="main-table__voditel-box">
                        <b>Отпустил товар:</b>
                        <b>Водитель: _______________</b>
                    </div>
                </div>
            }
        </div>
    );
};

export default ConsignmentNote;