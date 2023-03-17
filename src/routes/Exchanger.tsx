import React from "react";
import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "../atoms";

function Exchanger() {
    const [minutes, setMinutes] = useRecoilState(minuteState)
    const [hours, setHours] = useRecoilState(hourSelector)
    const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
        setMinutes(+event.currentTarget.value);
    }
    const onHourChange = (event: React.FormEvent<HTMLInputElement>) => {
        setHours(+event.currentTarget.value)
    }
    console.log('exchanger')
    return (
        <div>
            <input value={minutes.toString()} onChange={onMinutesChange} type="number" placeholder="Minutes" />
            <input value={hours.toString()} onChange={onHourChange} type="number" placeholder="Hours" />
        </div>
    );
}

export default Exchanger;

