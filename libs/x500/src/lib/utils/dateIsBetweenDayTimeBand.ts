import {
    DayTimeBand,
} from "../modules/SelectedAttributeTypes/DayTimeBand.ta";

function score (hour: number, minute: number, second: number): number {
    return (
        (hour * 3600)
        + (minute * 60)
        + (second)
    );
}

export
function dateIsBetweenDayTimeBand (dtb: DayTimeBand, point: Date): boolean {
    const pointHours: number = point.getHours();
    const pointMinutes: number = point.getMinutes();
    const pointSeconds: number = point.getSeconds();
    const start = dtb.startDayTime;
    const end = dtb.endDayTime;
    const pointScore: number = score(pointHours, pointMinutes, pointSeconds);
    const startScore: number = score(
        start?.hour ?? DayTimeBand._default_value_for_startDayTime.hour,
        start?.minute ?? DayTimeBand._default_value_for_startDayTime.minute ?? 0,
        start?.second ?? DayTimeBand._default_value_for_startDayTime.second ?? 0,
    );
    const endScore: number = score(
        end?.hour ?? DayTimeBand._default_value_for_endDayTime.hour,
        end?.minute ?? DayTimeBand._default_value_for_endDayTime.minute ?? 59,
        end?.second ?? DayTimeBand._default_value_for_endDayTime.second ?? 59,
    );
    return ((startScore <= pointScore) && (pointScore <= endScore));
}

export default dateIsBetweenDayTimeBand;
