import {
    DayTimeBand,
} from "../modules/SelectedAttributeTypes/DayTimeBand.ta.mjs";

function score (hour: number, minute: number, second: number): number {
    return (
        (hour * 3600)
        + (minute * 60)
        + (second)
    );
}

/**
 * @summary Determine if a point in time occurs between a day time band
 * @param {DayTimeBand} dtb The asserted day time band
 * @param {Date} point The date representing the asserted point in time
 * @returns {Boolean} `true` if the date is between the asserted time band
 * @function
 */
export
function dateIsBetweenDayTimeBand (dtb: DayTimeBand, point: Date): boolean {
    const pointHours: number = point.getHours();
    const pointMinutes: number = point.getMinutes();
    const pointSeconds: number = point.getSeconds();
    const start = dtb.startDayTime;
    const end = dtb.endDayTime;
    const pointScore: number = score(pointHours, pointMinutes, pointSeconds);
    const startScore: number = score(
        Number(start?.hour ?? DayTimeBand._default_value_for_startDayTime.hour),
        Number(start?.minute ?? DayTimeBand._default_value_for_startDayTime.minute ?? 0),
        Number(start?.second ?? DayTimeBand._default_value_for_startDayTime.second ?? 0),
    );
    const endScore: number = score(
        Number(end?.hour ?? DayTimeBand._default_value_for_endDayTime.hour),
        Number(end?.minute ?? DayTimeBand._default_value_for_endDayTime.minute ?? 59),
        Number(end?.second ?? DayTimeBand._default_value_for_endDayTime.second ?? 59),
    );
    return ((startScore <= pointScore) && (pointScore <= endScore));
}

export default dateIsBetweenDayTimeBand;
