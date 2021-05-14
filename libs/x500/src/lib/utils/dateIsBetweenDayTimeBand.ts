import type {
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
    const startScore: number = score(start.hour, start.minute, start.second);
    const endScore: number = score(end.hour, end.minute, end.second);
    return ((startScore <= pointScore) && (pointScore <= endScore));
}

export default dateIsBetweenDayTimeBand;
