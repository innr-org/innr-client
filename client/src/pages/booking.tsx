import {useEffect, useRef, useState} from 'react';
import Calendar from "react-calendar";
import cl from '@/styles/Booking.module.css'
import TimeSlot from '@/Components/TimeSlot/TimeSlot'
import Button from "@/Components/UI/button/Button";

function Booking(props) {
    const [appointment, setAppointment] = useState(null);
    const [timeslots, setTimeslots] = useState(["10:00", "11:00", "15:00"])
    const ref = useRef(null)
    useEffect(() => {
        setAppointment(new Date())
    }, [])

    return (
        <div className={cl.booking}>
            <div className={cl.container}>
                <h2>Выберите дату</h2>
                <Calendar className={cl.calendar} onChange={setAppointment} value={appointment} />
                <h2>Выберите время</h2>
                <div className={cl.timeslots}>
                    {timeslots.map((timeslot) => (
                        <TimeSlot>{timeslot}</TimeSlot>
                    ))}
                </div>
                <h2>Дополнительно</h2>
                <textarea className={cl.description} placeholder="Описание"></textarea>
                <Button className={cl.submit}>Записаться</Button>
            </div>
        </div>
    );
}

export default Booking;
