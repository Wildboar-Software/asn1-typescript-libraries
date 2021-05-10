import EqualityMatcher from "../../types/EqualityMatcher";
import { ASN1Element, TRUE_BIT } from "asn1-ts";
import {
    TimeSpecification,
    _decode_TimeSpecification,
} from "../../modules/SelectedAttributeTypes/TimeSpecification.ta";
import {
    TimeAssertion,
    _decode_TimeAssertion,
} from "../../modules/SelectedAttributeTypes/TimeAssertion.ta";
import type {
    Period,
} from "../../modules/SelectedAttributeTypes/Period.ta";
import type {
    DayTimeBand,
} from "../../modules/SelectedAttributeTypes/DayTimeBand.ta";
import {
    DayTime,
} from "../../modules/SelectedAttributeTypes/DayTime.ta";
import { add, sub, startOfMonth, endOfMonth, getWeekOfMonth, getWeek, subWeeks, startOfWeek, addDays, getISODay, getDay, subDays, getDayOfYear, getDaysInMonth, lastDayOfMonth } from "date-fns";
import { XDayOf } from "../../modules/SelectedAttributeTypes/XDayOf.ta";
import { NamedDay } from "../../modules/SelectedAttributeTypes/NamedDay.ta";

// TODO: Do I need to use ISO equivalent of the date-fns
// TODO: Check that the max number of days, weeks, months, etc. are not exceeded when using SET OF INTEGER.

const MIN_DATE: Date = new Date(-8640000000000000);
const MAX_DATE: Date = new Date(8640000000000000);
const ALL_WEEKS_IN_YEAR: Set<number> = new Set(Array(53).fill(0).map((_, i) => (i + 1)));
const ALL_WEEKS_IN_MONTH: Set<number> = new Set([ 1, 2, 3, 4, 5 ]);

function xor (a: boolean, b: boolean): boolean {
    return ((a && !b) || (!a && b));
}

function getOccurrenceFromXDayOf (x: XDayOf): number {
    if ("first" in x) {
        return 1;
    } else if ("second" in x) {
        return 2;
    } else if ("third" in x) {
        return 3;
    } else if ("fourth" in x) {
        return 4;
    } else if ("fifth" in x) {
        return 5;
    } else {
        throw new Error();
    }
}

function destructureXDayOf (x: XDayOf): [ number, NamedDay ] {
    if ("first" in x) {
        return [ 1, x.first ];
    } else if ("second" in x) {
        return [ 2, x.second ];
    } else if ("third" in x) {
        return [ 3, x.third ];
    } else if ("fourth" in x) {
        return [ 4, x.fourth ];
    } else if ("fifth" in x) {
        return [ 5, x.fifth ];
    } else {
        throw new Error();
    }
}

function getDaysOfWeekWhitelist (nd: NamedDay): Set<number> {
    if ("intNamedDays" in nd) {
        return new Set([ (nd.intNamedDays - 1) ]);
    } else {
        return new Set(
            nd.bitNamedDays
                .map((b: number, i: number): number => (b === TRUE_BIT) ? i : -1)
                .filter((d: number): boolean => (d > -1))
        );
    }
}

function getDayOfMonthWhitelistFromXDayOf (x: XDayOf, point: Date): Set<number> {
    const [ occurrence, nd ] = destructureXDayOf(x);
    const daysOfWeekWhitelist = getDaysOfWeekWhitelist(nd);
    const ret: Set<number> = new Set([]);
    if (occurrence === 5) {
        const lastDay = lastDayOfMonth(point);
        let i = 0;
        while (i < 7) {
            const a = subDays(lastDay, i);
            if (daysOfWeekWhitelist.has(getDay(a))) {
                ret.add(a.getUTCDate());
            }
            i++;
        }
    } else {
        const daysInMonth = getDaysInMonth(point);
        let d = (((occurrence - 1) * 7) + 1);
        let i = 0;
        while ((d < daysInMonth) && (i < 7)) {
            const a = new Date(point);
            a.setUTCDate(d);
            if (daysOfWeekWhitelist.has(getDay(a))) {
                ret.add(d);
            }
            d++;
            i++;
        }
        return ret;
    }
}

/**
 * @deprecated
 */
function addHours (date: Date, hours: number): Date {
    return new Date(date.getTime() + (hours * 60 * 60 * 1000));
}

// Credit to: https://stackoverflow.com/a/40975730/6562635
/**
 * @deprecated
 */
function daysIntoYear (date: Date) {
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}

function weeksIntoYear (date: Date): number {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = (d.getUTCDay() || 7);
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
}

function timeFallsWithinTimeOfDay (time: Date, timeOfDay: DayTimeBand, timezone: number = 0): boolean {
    const timeZoneCorrectedHourStart = ((timeOfDay.startDayTime.hour - timezone) % 24);
    const timeZoneCorrectedHourEnd = ((timeOfDay.endDayTime.hour - timezone) % 24);

    const start = new DayTime(
        (timeZoneCorrectedHourStart < 0)
            ? (24 - timeZoneCorrectedHourStart)
            : timeZoneCorrectedHourStart,
        timeOfDay.startDayTime.minute,
        timeOfDay.startDayTime.second,
    );
    const end = new DayTime(
        (timeZoneCorrectedHourEnd < 0)
            ? (24 - timeZoneCorrectedHourEnd)
            : timeZoneCorrectedHourEnd,
        timeOfDay.endDayTime.minute,
        timeOfDay.endDayTime.second,
    );

    return (
        (time.getUTCHours() <= end.hour)
        && (time.getUTCHours() >= start.hour)
        && (time.getUTCMinutes() <= end.minute)
        && (time.getUTCMinutes() >= start.minute)
        && (time.getUTCSeconds() <= end.minute)
        && (time.getUTCSeconds() >= start.minute)
    );
}

function timeFallsWithinPeriod (time: Date, period: Period, timezone: number = 0): boolean {
    if (period.timesOfDay) {
        if (!period.timesOfDay.some((tod) => timeFallsWithinTimeOfDay(time, tod, timezone))) {
            return false;
        }
    }
    if (period.days) {
        if ("intDay" in period.days) {
            if (period.weeks) {
                if (!period.days.intDay.some((day: number) => (day === (time.getUTCDay() + 1)))) {
                    return false;
                }
            } else if (period.months) {
                if (!period.days.intDay.some((day: number) => (day === (time.getUTCMonth() + 1)))) {
                    return false;
                }
            } else if (period.years) {
                if (!period.days.intDay.some((day: number) => (day === daysIntoYear(time)))) {
                    return false;
                }
            } else {
                throw new Error();
            }
        } else if ("bitDay" in period.days) {
            if (!period.days.bitDay[time.getUTCDay()]) {
                return false;
            }
        } else if ("dayOf" in period.days) {
            if ("first" in period.days.dayOf) {
                const dayOf = period.days.dayOf.first;
                // FIXME:
            } else if ("second" in period.days.dayOf) {
                const dayOf = period.days.dayOf.second;
                // FIXME:
            } else if ("third" in period.days.dayOf) {
                const dayOf = period.days.dayOf.third;
                // FIXME:
            } else if ("fourth" in period.days.dayOf) {
                const dayOf = period.days.dayOf.fourth;
                // FIXME:
            } else if ("fifth" in period.days.dayOf) {
                const dayOf = period.days.dayOf.fifth;
                // FIXME:
            } else {
                throw new Error();
            }
            return false;
        } else {
            return false; // Not understood.
        }
    }
    if (period.weeks) {
        if ("intWeek" in period.weeks) {
            if (period.months) {
                const weekIntoMonth: number = Math.floor(time.getUTCDate() / 7) + 1;
                if (!period.weeks.intWeek.some((week: number) => (week === weekIntoMonth))) {
                    return false;
                }
            } else if (period.years) {
                const weekIntoTheYear: number = weeksIntoYear(time);
                if (!period.weeks.intWeek.some((week: number) => (week === weekIntoTheYear))) {
                    return false;
                }
            }
        } else if ("bitWeek" in period.weeks) {
            const weekIntoMonth: number = Math.floor(time.getUTCDate() / 7);
            if (!period.weeks.bitWeek[weekIntoMonth]) {
                return false;
            }
        } else if (!("allWeeks" in period.weeks)) {
            return false; // Not understood.
        }
    }
    if (period.months) {
        if ("intMonth" in period.months) {
            const storedMonth = time.getUTCMonth() + 1;
            if (!period.months.intMonth.some((month: number) => (month === storedMonth))) {
                return false;
            }
        } else if ("bitMonth" in period.months) {
            const storedMonth = time.getUTCMonth();
            if (!period.months.bitMonth[storedMonth]) {
                return false;
            }
        } else if (!("allMonths" in period.months)) {
            return false; // Not understood.
        }
    }
    if (period.years) {
        const storedYear = time.getUTCFullYear();
        if (!period.years.some((year) => (year === storedYear))) {
            return false;
        }
    }
    return true;
}

function timeFallsWithinTimeSpecification (time: Date, spec: TimeSpecification): boolean {
    const result = ((): boolean => {
        if ("absolute" in spec.time) {
            const start = addHours(spec.time.absolute.startTime, -(spec.timeZone ?? 0));
            const end = addHours(spec.time.absolute.endTime, -(spec.timeZone ?? 0));
            return (
                (time.valueOf() >= start.valueOf())
                && (time.valueOf() <= end.valueOf())
            );
        } else if ("periodic" in spec.time) {
            return spec.time.periodic.some((period) => timeFallsWithinPeriod(time, period, spec.timeZone));
        } else {
            throw new Error(); // There is no other option.
        }
    })();
    return xor(result, spec.notThisTime);
}

function timeSpecificationContains (spec: TimeSpecification, start: Date, end: Date, entirely: boolean = false): boolean {
    const result = ((): boolean => {
        if ("absolute" in spec.time) {
            const startSpec = addHours(spec.time.absolute.startTime, -(spec.timeZone ?? 0));
            const endSpec = addHours(spec.time.absolute.endTime, -(spec.timeZone ?? 0));
            if (entirely) {
                return (
                    (start.valueOf() >= startSpec.valueOf())
                    && (end.valueOf() <= endSpec.valueOf())
                );
            } else {
                return (!(
                    (start.valueOf() > endSpec.valueOf())
                    || (end.valueOf() < startSpec.valueOf())
                ));
            }
        } else if ("periodic" in spec.time) {
            return false; // FIXME:
            // return spec.time.periodic.some((period) => timeFallsWithinPeriod(time, period, spec.timeZone));
        } else {
            throw new Error(); // There is no other option.
        }
    })();
    return xor(result, spec.notThisTime);
}

// If period only has years, range should be Jan 1st - Dec 31st.
function timeRangeFromPeriodAndPoint (period: Period, point: Date): [ Date, Date ] | null {
    let currentMin: Date = MIN_DATE;
    let currentMax: Date = MAX_DATE;
    const whitelistedYears: Set<number> = new Set(period.years ?? []);

    if (period.years) {
        const sortedYears: number[] = period.years.sort();
        const year: number | undefined = sortedYears
            .find((y) => (y === point.getUTCFullYear()));
        if (!year) {
            return null; // The point is not in an acceptable year at all.
        } else {
            currentMin = new Date(year,  0,  0, 0, 0, 0);
            currentMax = new Date(year, 11, 31, 23, 59, 59);
            if (
                !period.months
                && !period.weeks
                && !period.days
                && !period.timesOfDay
            ) {
                return [ currentMin, currentMax ];
            }
        }
    }

    if (period.months) {
        if ("intMonth" in period.months) {
            const months: Set<number> = new Set(period.months.intMonth);
            const month: number = point.getUTCMonth() + 1;
            if (!months.has(month)) {
                return null;
            }
            if ( // If months are as precise as we get.
                !period.weeks
                && !period.days
                && !period.timesOfDay
            ) { // Return the contiguous span of months.
                let minMonth = new Date(point);
                let maxMonth = new Date(point);
                let x = sub(minMonth, {
                    months: 1,
                });
                while (
                    months.has(x.getUTCMonth() + 1)
                    && (currentMin.getUTCFullYear() <= x.getUTCFullYear())
                ) {
                    currentMin = x;
                    x = sub(x, {
                        months: 1,
                    });
                }
                x = maxMonth;
                while (
                    months.has(x.getUTCMonth() + 1)
                    && (currentMax.getUTCFullYear() >= x.getUTCFullYear())
                ) {
                    currentMax = x;
                    x = add(x, {
                        months: 1,
                    });
                }
                currentMin = startOfMonth(currentMin);
                currentMax = endOfMonth(currentMax);
                return [ currentMin, currentMax ];
            } else {
                // TODO: What if something spans a month?
                // TODO: I think this will require `isSecondPermittedByPeriod(period: Period, second: number): boolean`
                // Then you can check if the last X of each modular denomination of time is supported.
                currentMin.setUTCMonth(point.getUTCMonth());
                currentMax.setUTCMonth(point.getUTCMonth());
            }
        } else if ("bitMonth" in period.months) {
            // const storedMonth = point.getUTCMonth();
            // period.months.bitMonth
            // if (!period.months.bitMonth[storedMonth]) {
            //     return false;
            // }
        }
    }

    return [ currentMin, currentMax ];
}

function startOfPeriod (period: Period, point: Date): Date | null {
    let currentMin: Date = MIN_DATE;
    const whitelistedYears: Set<number> = new Set(period.years ?? []);

    if (period.years) {
        const year = point.getUTCFullYear();
        if (!whitelistedYears.has(year)) {
            return null; // The point is not in an acceptable year at all.
        } else {
            currentMin = new Date(year, 0, 0, 0, 0, 0);
            let y: number = year;
            while (whitelistedYears.has(--y)) {
                currentMin = new Date(y, 0, 0, 0, 0, 0);
            }
        }
    }

    if (period.months) {
        const whitelistedMonths: Set<number> = ((): Set<number> => {
            if ("intMonth" in period.months) {
                return new Set(period.months.intMonth);
            } else if ("bitMonth" in period.months) {
                return new Set(
                    period.months.bitMonth
                        .map((b, i) => ((b === TRUE_BIT) ? (i + 1) : 0))
                        .filter((v) => Boolean(v))
                );
            } else if ("allMonths" in period.months) {
                return new Set([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]);
            } else {
                throw new Error();
            }
        })();
        const month = point.getUTCMonth() + 1;
        if (!whitelistedMonths.has(month)) {
            return null;
        } else {
            currentMin = new Date(currentMin.getUTCFullYear(), (month - 1), 0, 0, 0, 0);
            let m: number = month;
            while (whitelistedYears.has(--m)) {
                currentMin = new Date(currentMin.getUTCFullYear(), (m - 1), 0, 0, 0, 0);
            }
        }
    }

    if (period.weeks) {
        const whitelistedWeeks: Set<number> = ((): Set<number> => {
            if ("intWeek" in period.weeks) {
                return new Set(period.weeks.intWeek);
            } else if ("bitWeek" in period.weeks) {
                return new Set(
                    period.weeks.bitWeek
                        .map((b, i) => ((b === TRUE_BIT) ? (i + 1) : 0))
                        .filter((v) => Boolean(v))
                );
            } else if ("allWeeks" in period.weeks) {
                if (period.months) {
                    return ALL_WEEKS_IN_MONTH;
                } else {
                    return ALL_WEEKS_IN_YEAR;
                }
            } else {
                throw new Error();
            }
        })();

        const week: number = (period.months)
            ? getWeekOfMonth(point)
            : getWeek(point);

        if (!whitelistedWeeks.has(week)) {
            return null;
        } else {
            if (period.months) {
                currentMin.setUTCDate((week - 1) * 7);
            } else {
                currentMin = addDays(currentMin, ((week - 1) * 7));
            }
            let w: number = week;
            while (whitelistedYears.has(--w)) { // This could be done more efficiently.
                currentMin = startOfWeek(subWeeks(currentMin, 1));
            }
        }
    }

    if (period.days && ("dayOf" in period.days)) {
        const dayOf = period.days.dayOf;
        const dayOfWhitelist: Set<number> = getDayOfMonthWhitelistFromXDayOf(dayOf, point);
        if (!dayOfWhitelist.has(point.getUTCDate())) {
            return null;
        } else {
            let d: number = point.getUTCDate();
            currentMin = new Date(currentMin);
            currentMin.setUTCDate(d);
            while (dayOfWhitelist.has(--d)) {
                currentMin = subDays(currentMin, 1);
            }
        }
    } else if (period.days) {
        const whitelistedDays: Set<number> = ((): Set<number> => {
            if ("intDay" in period.days) {
                return new Set(period.days.intDay);
            } else if ("bitDay" in period.days) {
                return new Set(
                    period.days.bitDay
                        .map((b, i) => ((b === TRUE_BIT) ? (i + 1) : 0))
                        .filter((v) => Boolean(v))
                );
            } else {
                throw new Error();
            }
        })();

        if (period.weeks) {
            const day: number = getISODay(point) + 1;
            if (!whitelistedDays.has(day)) {
                return null;
            } else {
                currentMin = addDays(currentMin, (day - (getDay(currentMin) + 1)));
                let d: number = day;
                while (whitelistedYears.has(--d)) {
                    currentMin = subDays(currentMin, 1);
                }
            }
        } else if (period.months) {
            const day: number = point.getUTCDate();
            if (!whitelistedDays.has(day)) {
                return null;
            } else {
                currentMin.setUTCDate(day);
                let d: number = day;
                while (whitelistedYears.has(--d)) {
                    currentMin = subDays(currentMin, 1);
                }
            }
        } else if (period.years) {
            const day: number = getDayOfYear(point);
            if (!whitelistedDays.has(day)) {
                return null;
            } else {
                currentMin = addDays(new Date(currentMin.getUTCFullYear(), 0, 1, 0, 0, 0), (day - 1));
                let d: number = day;
                while (whitelistedYears.has(--d)) {
                    currentMin = subDays(currentMin, 1);
                }
            }
        } else {
            throw new Error();
        }
    }

    if (period.timesOfDay && (period.timesOfDay.length > 0)) {
        const earliestDayTimeBand: DayTimeBand = period.timesOfDay.sort((a, b) => (
            ((a.startDayTime.hour * 3600) + (a.startDayTime.minute * 60) + (a.startDayTime.second))
            - ((b.startDayTime.hour * 3600) + (b.startDayTime.minute * 60) + (b.startDayTime.second))
        ))[0];
        currentMin = new Date(
            currentMin.getUTCFullYear(),
            currentMin.getUTCMonth(),
            currentMin.getUTCDate(),
            earliestDayTimeBand.startDayTime.hour,
            earliestDayTimeBand.startDayTime.minute,
            earliestDayTimeBand.startDayTime.second,
        );
    }

    return currentMin;
}

export
const evaluateTemporalContext: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: TimeAssertion = _decode_TimeAssertion(assertion);
    const v: TimeSpecification = _decode_TimeSpecification(value);
    if ("now" in a) {
        const now = new Date();
        return timeFallsWithinTimeSpecification(now, v);
    } else if ("at" in a) {
        return timeFallsWithinTimeSpecification(a.at, v);
    } else if ("between" in a) {
        // if (a.between.entirely) {

        // } else {
        //     return timeSpecificationFallsWithin(v, a.between.startTime, a.between.endTime);
        // }
        return false; // FIXME: This will be hard to implement...
    } else {
        return false;
    }
}

export default evaluateTemporalContext;
