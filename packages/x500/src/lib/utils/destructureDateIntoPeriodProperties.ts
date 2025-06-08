import type {
    Period,
} from "../modules/SelectedAttributeTypes/Period.ta";
import {
    getDay,
    getDayOfYear,
} from "date-fns";

export
interface DateDestructuredIntoPeriodMembers {
    year: number,
    month: number,
    week: number,
    day: number,
}

export
function destructureDateIntoPeriodProperties (period: Period, point: Date): DateDestructuredIntoPeriodMembers {
    const year: number = point.getFullYear();
    const month: number = point.getMonth() + 1;
    const week: number = (period.months)
        ? Math.ceil(point.getDate() / 7)
        : Math.ceil(getDayOfYear(point) / 7);
    const day: number = ((): number => {
        if (period.weeks) {
            return getDay(point) + 1;
        } else if (period.months) {
            return point.getDate();
        } else {
            return getDayOfYear(point);
        }
    })();
    return {
        year,
        month,
        week,
        day,
    };
}

export default destructureDateIntoPeriodProperties;
