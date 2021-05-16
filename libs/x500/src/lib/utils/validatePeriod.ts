import type {
    Period,
} from "../modules/SelectedAttributeTypes/Period.ta";
import isPositionalInt from "./isPositionalInt";

export
function validatePeriod (period: Period): boolean {
    return !(
        (
            period.days
            && ("intDay" in period.days)
            && (
                (
                    period.weeks
                    && (
                        (period.days.intDay.length > 7)
                        || !period.days.intDay.every(isPositionalInt(7))
                    )
                )
                || (
                    period.months
                    && (
                        (period.days.intDay.length > 31)
                        || !period.days.intDay.every(isPositionalInt(31))
                    )
                )
                || (
                    period.years
                    && (
                        (period.days.intDay.length > 366)
                        || !period.days.intDay.every(isPositionalInt(366))
                    )
                )
            )
        )
        || (
            period.weeks
            && ("intWeek" in period.weeks)
            && (
                (
                    period.months
                    && (
                        (period.weeks.intWeek.length > 5)
                        || !period.weeks.intWeek.every(isPositionalInt(5))
                    )
                )
                || (
                    period.years
                    && (
                        (period.weeks.intWeek.length > 53)
                        || !period.weeks.intWeek.every(isPositionalInt(53))
                    )
                )
                || (
                    !period.months
                    && !period.years
                )
            )
        )
        || (
            period.months
            && ("intMonth" in period.months)
            && (
                (period.months.intMonth.length > 12)
                || !period.months.intMonth.every(isPositionalInt(12))
            )
        ) || (
            period.days
            && !(
                period.weeks
                ?? period.months
                ?? period.years
            )
        )
    );
}

export default validatePeriod;
