import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Eid");
    const holidaysByTime: Record<string, string> = {
        NewYearsDay: "AprilFools",
        AprilFools: "Eid",
        Eid: "Thanksgiving",
        Thanksgiving: "Christmas",
        Christmas: "NewYearsDay"
    };

    const holidaysByAlphabets: Record<string, string> = {
        AprilFools: "Christmas",
        Christmas: "Eid",
        Eid: "NewYearsDay",
        NewYearsDay: "Thanksgiving",
        Thanksgiving: "AprilFools"
    };

    return (
        <div>
            <Button onClick={() => setHoliday(holidaysByTime[holiday])}>
                Advance by Year
            </Button>
            <Button onClick={() => setHoliday(holidaysByAlphabets[holiday])}>
                Advance by Alphabet
            </Button>
            {holiday === "Christmas" ? (
                <div>Holiday: 🎄</div>
            ) : holiday === "Eid" ? (
                <div>Holiday: ☪️</div>
            ) : holiday === "NewYearsDay" ? (
                <div>Holiday: 🎊</div>
            ) : holiday === "Thanksgiving" ? (
                <div>Holiday: 🦃</div>
            ) : (
                <div>Holiday: 🤣</div>
            )}
        </div>
    );
}
