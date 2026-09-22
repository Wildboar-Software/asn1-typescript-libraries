import { FALSE_BIT, TRUE_BIT } from "@wildboar/asn1";
import {
    Period,
    DayTimeBand,
    DayTime,
    Period_days_bitDay_sunday,
    Period_days_bitDay_monday,
    Period_days_bitDay_tuesday,
    Period_days_bitDay_saturday,
    Period_weeks_bitWeek_week1,
    Period_weeks_bitWeek_week2,
    Period_months_bitMonth_january,
    Period_months_bitMonth_march,
    NamedDay_intNamedDays_sunday,
    NamedDay_intNamedDays_monday,
    NamedDay_intNamedDays_friday,
    NamedDay_bitNamedDays_monday,
    NamedDay_bitNamedDays_thursday,
    NamedDay_intNamedDays_saturday,
} from "../modules/SelectedAttributeTypes/index.mjs";
import { occurrences } from "./period.mjs";

/**
 * X.520 `Period` fields, finer to coarser: timesOfDay, days, weeks, months,
 * years. An omitted coarser field means "all of that unit" *within the next
 * present coarser unit*, except that `allMonths` / `allWeeks` are present
 * choices: they still select every month/week, but they force weeks to be
 * weeks-of-month and `intDay` to be days-of-week (when `weeks` is present)
 * or days-of-month (when `months` is present and `weeks` is not).
 *
 * `intDay` meaning:
 * - `weeks` present → day of week (Sunday = 1)
 * - else `months` present (including `allMonths`) → day of month
 * - else → day of year
 *
 * `bitDay` is always named weekdays (Sunday = 0). `dayOf` ignores `weeks`.
 * Week 1 is the Sunday–Saturday week containing the 4th; week 5 / 53 is
 * the last such week of the month / year.
 */

const START_2026 = new Date(2026, 0, 1);
const START_OF_2027 = new Date(2027, 0, 1);
const START_OF_2028 = new Date(2028, 0, 1);
const NOON = [
    new DayTimeBand(new DayTime(12, 0, 0), new DayTime(13, 0, 0)),
];
const MIN_GENERALIZED_TIME = new Date(0, 0, 1, 0, 0, 0, 0);
const MAX_GENERALIZED_TIME = new Date(9999, 11, 31, 23, 59, 59, 999);

function bits (...indices: number[]): Uint8ClampedArray {
    const last = Math.max(-1, ...indices);
    const out = new Uint8ClampedArray(last + 1);
    for (const i of indices) {
        out[i] = TRUE_BIT;
    }
    return out;
}

function fullDay (year: number, month0: number, day: number): [Date, Date] {
    return [
        new Date(year, month0, day, 0, 0, 0),
        new Date(year, month0, day, 23, 59, 59, 999),
    ];
}

function fullSpan (
    y1: number, m01: number, d1: number,
    y2: number, m02: number, d2: number,
): [Date, Date] {
    return [
        new Date(y1, m01, d1, 0, 0, 0),
        new Date(y2, m02, d2, 23, 59, 59, 999),
    ];
}

function atHours (
    year: number,
    month0: number,
    day: number,
    startHour: number,
    endHour: number,
): [Date, Date] {
    return [
        new Date(year, month0, day, startHour, 0, 0),
        new Date(year, month0, day, endHour, 0, 0),
    ];
}

function hourBandsOnDays (
    days: Date[],
    startHour: number,
    endHour: number,
): [Date, Date][] {
    return days.map((d) => atHours(
        d.getFullYear(),
        d.getMonth(),
        d.getDate(),
        startHour,
        endHour,
    ));
}

function testOccurrences (
    p: Period,
    startInstant: Date,
    endInstant: Date,
    expected: [Date, Date][],
): void {
    const occs = Array.from(occurrences(p, startInstant, endInstant));
    if (occs.length !== expected.length) {
        console.log(occs);
        console.log(expected);
    }
    expect(occs).toHaveLength(expected.length);
    for (let i = 0; i < expected.length; i++) {
        expect(occs[i]).toEqual(expected[i]);
    }
}

describe("occurrences", () => {
    test("all fields except weeks", () => {
        const p = new Period(
            [
                new DayTimeBand(
                    new DayTime(12, 0, 0),
                    new DayTime(13, 0, 0),
                ),
            ],
            {
                intDay: [15, 16],
            },
            undefined,
            {
                intMonth: [2, 3],
            },
            [2017, 2018],
        );
        testOccurrences(p, new Date(2016, 0, 1), new Date(2019, 0, 1), [
            [new Date(2017, 1, 15, 12, 0, 0), new Date(2017, 1, 15, 13, 0, 0)],
            [new Date(2017, 1, 16, 12, 0, 0), new Date(2017, 1, 16, 13, 0, 0)],
            [new Date(2017, 2, 15, 12, 0, 0), new Date(2017, 2, 15, 13, 0, 0)],
            [new Date(2017, 2, 16, 12, 0, 0), new Date(2017, 2, 16, 13, 0, 0)],
            [new Date(2018, 1, 15, 12, 0, 0), new Date(2018, 1, 15, 13, 0, 0)],
            [new Date(2018, 1, 16, 12, 0, 0), new Date(2018, 1, 16, 13, 0, 0)],
            [new Date(2018, 2, 15, 12, 0, 0), new Date(2018, 2, 15, 13, 0, 0)],
            [new Date(2018, 2, 16, 12, 0, 0), new Date(2018, 2, 16, 13, 0, 0)],
        ]);
    });

    test("year, months, and days", () => {
        const p = new Period(
            undefined,
            {
                intDay: [15, 17],
            },
            undefined,
            {
                intMonth: [2, 3],
            },
            [2017, 2018],
        );
        testOccurrences(p, new Date(2016, 0, 1), new Date(2019, 0, 1), [
            [new Date(2017, 1, 15, 0, 0, 0), new Date(2017, 1, 15, 23, 59, 59, 999)],
            [new Date(2017, 1, 17, 0, 0, 0), new Date(2017, 1, 17, 23, 59, 59, 999)],
            [new Date(2017, 2, 15, 0, 0, 0), new Date(2017, 2, 15, 23, 59, 59, 999)],
            [new Date(2017, 2, 17, 0, 0, 0), new Date(2017, 2, 17, 23, 59, 59, 999)],
            [new Date(2018, 1, 15, 0, 0, 0), new Date(2018, 1, 15, 23, 59, 59, 999)],
            [new Date(2018, 1, 17, 0, 0, 0), new Date(2018, 1, 17, 23, 59, 59, 999)],
            [new Date(2018, 2, 15, 0, 0, 0), new Date(2018, 2, 15, 23, 59, 59, 999)],
            [new Date(2018, 2, 17, 0, 0, 0), new Date(2018, 2, 17, 23, 59, 59, 999)],
        ]);
    });

    test("years and months", () => {
        const p = new Period(
            undefined,
            undefined,
            undefined,
            {
                intMonth: [2, 4],
            },
            [2017, 2018],
        );
        testOccurrences(p, new Date(2016, 0, 1), new Date(2019, 0, 1), [
            [new Date(2017, 1, 1, 0, 0, 0), new Date(2017, 1, 28, 23, 59, 59, 999)],
            [new Date(2017, 3, 1, 0, 0, 0), new Date(2017, 3, 30, 23, 59, 59, 999)],
            [new Date(2018, 1, 1, 0, 0, 0), new Date(2018, 1, 28, 23, 59, 59, 999)],
            [new Date(2018, 3, 1, 0, 0, 0), new Date(2018, 3, 30, 23, 59, 59, 999)],
        ]);
    });

    test("years alone", () => {
        const p = new Period(
            undefined,
            undefined,
            undefined,
            undefined,
            [2017, 2018, 2019, 2022],
        );
        testOccurrences(p, new Date(2016, 0, 1), new Date(2023, 0, 1), [
            [new Date(2017, 0, 1, 0, 0, 0), new Date(2019, 11, 31, 23, 59, 59, 999)],
            [new Date(2022, 0, 1, 0, 0, 0), new Date(2022, 11, 31, 23, 59, 59, 999)],
        ]);
    });

    test("months alone", () => {
        const p = new Period(
            undefined,
            undefined,
            undefined,
            {
                intMonth: [2, 3, 9],
            },
            undefined,
        );
        testOccurrences(p, new Date(2016, 0, 1), new Date(2018, 0, 1), [
            [new Date(2016, 1, 1, 0, 0, 0), new Date(2016, 2, 31, 23, 59, 59, 999)],
            [new Date(2016, 8, 1, 0, 0, 0), new Date(2016, 8, 30, 23, 59, 59, 999)],
            [new Date(2017, 1, 1, 0, 0, 0), new Date(2017, 2, 31, 23, 59, 59, 999)],
            [new Date(2017, 8, 1, 0, 0, 0), new Date(2017, 8, 30, 23, 59, 59, 999)],
        ]);
    });

    test("weeks of month", () => {
        const p = new Period(
            undefined,
            undefined,
            {
                intWeek: [1, 2],
            },
            {
                intMonth: [10, 11],
            },
            undefined,
        );
        testOccurrences(p, new Date(2026, 0, 1), new Date(2028, 0, 1), [
            [new Date(2026,  9, 4, 0, 0, 0), new Date(2026,  9, 17, 23, 59, 59, 999)],
            [new Date(2026, 10, 1, 0, 0, 0), new Date(2026, 10, 14, 23, 59, 59, 999)],
            [new Date(2027,  9, 3, 0, 0, 0), new Date(2027,  9, 16, 23, 59, 59, 999)],
            [new Date(2027, 9, 31, 0, 0, 0), new Date(2027, 10, 13, 23, 59, 59, 999)],
        ]);
    });

    test("weeks of year", () => {
        const p = new Period(
            undefined,
            undefined,
            {
                intWeek: [1, 2],
            },
            undefined,
            [2027],
        );
        testOccurrences(p, new Date(2027, 0, 1), new Date(2027, 11, 1), [
            [new Date(2027, 0, 3, 0, 0, 0), new Date(2027, 0, 16, 23, 59, 59, 999)],
        ]);
    });

    test("bitDay of week", () => {
        const p = new Period(
            undefined,
            {
                bitDay: new Uint8ClampedArray([TRUE_BIT, FALSE_BIT, TRUE_BIT]),
            },
            {
                allWeeks: null,
            },
            undefined,
            [2027],
        );
        testOccurrences(p, new Date(2027, 2, 1), new Date(2027, 2, 31), [
            fullDay(2027, 2, 2), // Tuesday
            fullDay(2027, 2, 7), // Sunday
            fullDay(2027, 2, 9), // Tuesday
            fullDay(2027, 2, 14), // Sunday
            fullDay(2027, 2, 16), // Tuesday
            fullDay(2027, 2, 21), // Sunday
            fullDay(2027, 2, 23), // Tuesday
            fullDay(2027, 2, 28), // Sunday
            fullDay(2027, 2, 30), // Tuesday
        ]);
    });

    test("bitDay of month", () => {
        const p = new Period(
            undefined,
            {
                bitDay: new Uint8ClampedArray([TRUE_BIT, FALSE_BIT, TRUE_BIT]),
            },
            undefined,
            {
                allMonths: null,
            },
            [2027],
        );
        testOccurrences(p, new Date(2027, 2, 1), new Date(2027, 2, 31), [
            fullDay(2027, 2, 2), // Tuesday
            fullDay(2027, 2, 7), // Sunday
            fullDay(2027, 2, 9), // Tuesday
            fullDay(2027, 2, 14), // Sunday
            fullDay(2027, 2, 16), // Tuesday
            fullDay(2027, 2, 21), // Sunday
            fullDay(2027, 2, 23), // Tuesday
            fullDay(2027, 2, 28), // Sunday
            fullDay(2027, 2, 30), // Tuesday
        ]);
    });

    test("bitDay of year", () => {
        const p = new Period(
            undefined,
            {
                bitDay: new Uint8ClampedArray([TRUE_BIT, FALSE_BIT, TRUE_BIT]),
            },
            undefined,
            undefined,
            [2027],
        );
        testOccurrences(p, new Date(2027, 2, 1), new Date(2027, 2, 31), [
            fullDay(2027, 2, 2), // Tuesday
            fullDay(2027, 2, 7), // Sunday
            fullDay(2027, 2, 9), // Tuesday
            fullDay(2027, 2, 14), // Sunday
            fullDay(2027, 2, 16), // Tuesday
            fullDay(2027, 2, 21), // Sunday
            fullDay(2027, 2, 23), // Tuesday
            fullDay(2027, 2, 28), // Sunday
            fullDay(2027, 2, 30), // Tuesday
        ]);
    });

    test("intDay of year", () => {
        const p = new Period(
            undefined,
            {
                intDay: [15]
            },
            undefined,
            undefined,
            [2027],
        );
        testOccurrences(p, new Date(2027, 0, 1), new Date(2027, 11, 31), [
            fullDay(2027, 0, 15),
        ]);
    });

    test("bitWeek of month", () => {
        const p = new Period(
            undefined,
            undefined,
            {
                bitWeek: new Uint8ClampedArray([TRUE_BIT, FALSE_BIT, TRUE_BIT]),
            },
            {
                // February
                bitMonth: new Uint8ClampedArray([FALSE_BIT, TRUE_BIT]),
            },
            [2027],
        );
        testOccurrences(p, new Date(2027, 1, 1), new Date(2027, 1, 28), [
            [ new Date(2027, 0, 31, 0, 0, 0), new Date(2027, 1, 6, 23, 59, 59, 999) ],
            [ new Date(2027, 1, 14, 0, 0, 0), new Date(2027, 1, 20, 23, 59, 59, 999) ],
        ]);
    });

    /* It seems that bitWeek _should_ be assumed to apply to months, but the
    specification does not say that. This implementation lets bitWeek be used
    to index into weeks of the year if the months component is absent. */
    test("bitWeek of year", () => {
        const p = new Period(
            undefined,
            undefined,
            {
                bitWeek: new Uint8ClampedArray([TRUE_BIT, FALSE_BIT, TRUE_BIT]),
            },
            undefined,
            [2027],
        );
        testOccurrences(p, new Date(2027, 0, 1), new Date(2027, 2, 31), [
            [ new Date(2027, 0,  3, 0, 0, 0), new Date(2027, 0,  9, 23, 59, 59, 999) ],
            [ new Date(2027, 0, 17, 0, 0, 0), new Date(2027, 0, 23, 23, 59, 59, 999) ],
        ]);
    });

    test("dayOf using bitNamedDays", () => {
        const p = new Period(
            undefined,
            {
                dayOf: {
                    fourth: {
                        // Fourth Monday and Wednesday
                        bitNamedDays: new Uint8ClampedArray([FALSE_BIT, TRUE_BIT, FALSE_BIT, TRUE_BIT]),
                    },
                },
            },
            undefined,
            undefined,
            [2027],
        );
        testOccurrences(p, new Date(2027, 0, 1), new Date(2027, 1, 28), [
            fullDay(2027, 0, 25), // Fourth Monday of January
            fullDay(2027, 0, 27), // Fourth Wednesday of January
            fullDay(2027, 1, 22), // Fourth Monday of February
            fullDay(2027, 1, 24), // Fourth Wednesday of February
        ]);
    });

    test("dayOf using intNamedDays", () => {
        const p = new Period(
            undefined,
            {
                dayOf: {
                    fourth: {
                        intNamedDays: NamedDay_intNamedDays_saturday,
                    },
                },
            },
            undefined,
            undefined,
            [2027],
        );
        testOccurrences(p, new Date(2027, 0, 1), new Date(2027, 1, 28), [
            fullDay(2027, 0, 23), // Fourth Saturday of January
            fullDay(2027, 1, 27), // Fourth Saturday of February
        ]);
    });

    test("dayOf plus timesOfDay", () => {
        const p = new Period(
            [
                new DayTimeBand(
                    new DayTime(12, 0, 0),
                    new DayTime(14, 0, 0),
                ),
                new DayTimeBand(
                    new DayTime(16, 0, 0),
                    new DayTime(18, 0, 0),
                ),
            ],
            {
                dayOf: {
                    fourth: {
                        intNamedDays: NamedDay_intNamedDays_saturday,
                    },
                },
            },
            undefined,
            undefined,
            [2027],
        );
        testOccurrences(p, new Date(2027, 0, 1), new Date(2027, 1, 28), [
            [ new Date(2027, 0, 23, 12, 0, 0), new Date(2027, 0, 23, 14, 0, 0) ], // Fourth Saturday of January
            [ new Date(2027, 0, 23, 16, 0, 0), new Date(2027, 0, 23, 18, 0, 0) ], // Fourth Saturday of January
            [ new Date(2027, 1, 27, 12, 0, 0), new Date(2027, 1, 27, 14, 0, 0) ], // Fourth Saturday of February
            [ new Date(2027, 1, 27, 16, 0, 0), new Date(2027, 1, 27, 18, 0, 0) ], // Fourth Saturday of February
        ]);
    });

    test("last week of month (no finer units)", () => {
        const p = new Period(
            undefined,
            undefined,
            {
                bitWeek: new Uint8ClampedArray([FALSE_BIT, FALSE_BIT, FALSE_BIT, FALSE_BIT, TRUE_BIT]),
            },
            {
                allMonths: null,
            },
            [2027],
        );
        testOccurrences(p, new Date(2027, 0, 1), new Date(2027, 1, 28), [
            [ new Date(2027, 0, 24, 0, 0, 0), new Date(2027, 0, 30, 23, 59, 59, 999) ],
            [ new Date(2027, 1, 21, 0, 0, 0), new Date(2027, 1, 27, 23, 59, 59, 999) ],
        ]);
    });

    test("last week of year (no finer units)", () => {
        const p = new Period(
            undefined,
            undefined,
            {
                intWeek: [53],
            },
            undefined,
            [2026, 2027],
        );
        testOccurrences(p, new Date(2026, 11, 1), new Date(2027, 0, 28), [
            [ new Date(2026, 11, 27, 0, 0, 0), new Date(2027, 0, 2, 23, 59, 59, 999) ],
        ]);
    });

    test("maximally complex example: leap years, odd months, last week, last dayOf, timesOfDay", () => {
        const p = new Period(
            [
                new DayTimeBand(
                    new DayTime(12, 0, 0),
                    new DayTime(14, 0, 0),
                ),
                new DayTimeBand(
                    new DayTime(16, 0, 0),
                    new DayTime(18, 0, 0),
                ),
            ],
            {
                dayOf: {
                    fifth: {
                        bitNamedDays: new Uint8ClampedArray([
                            TRUE_BIT, // Sunday
                            FALSE_BIT,
                            FALSE_BIT,
                            FALSE_BIT,
                            FALSE_BIT,
                            FALSE_BIT,
                            TRUE_BIT, // Saturday
                        ]),
                    },
                },
            },
            {
                intWeek: [5],
            },
            {
                intMonth: [1, 11],
            },
            [2024],
        );
        testOccurrences(p, new Date(2024, 0, 1), new Date(2028, 11, 31), [
            [ new Date(2024,  0, 27, 12, 0, 0), new Date(2024,  0, 27, 14, 0, 0) ],
            [ new Date(2024,  0, 27, 16, 0, 0), new Date(2024,  0, 27, 18, 0, 0) ],
            [ new Date(2024,  0, 28, 12, 0, 0), new Date(2024,  0, 28, 14, 0, 0) ],
            [ new Date(2024,  0, 28, 16, 0, 0), new Date(2024,  0, 28, 18, 0, 0) ],
            [ new Date(2024, 10, 24, 12, 0, 0), new Date(2024, 10, 24, 14, 0, 0) ],
            [ new Date(2024, 10, 24, 16, 0, 0), new Date(2024, 10, 24, 18, 0, 0) ],
            [ new Date(2024, 10, 30, 12, 0, 0), new Date(2024, 10, 30, 14, 0, 0) ],
            [ new Date(2024, 10, 30, 16, 0, 0), new Date(2024, 10, 30, 18, 0, 0) ],
        ]);
    });
    // TODO: contiguous timespan tests

    describe("optional field combinations (timesOfDay, days, weeks, months, years)", () => {
        // When weeks is present, intDay is Sunday = 1. Otherwise intDay 15 is
        // the 15th of the month (if months) or day 15 of the year (if not).
        const daysDow = { intDay: [ 1 ] };
        const daysDomOrDoy = { intDay: [ 15 ] };
        const weeks1 = { intWeek: [ 1 ] };
        const feb = { intMonth: [ 2 ] };
        const y2026 = [ 2026 ];

        test("no fields (empty Period is all time)", () => {
            testOccurrences(
                new Period(),
                START_2026,
                START_OF_2028,
                [ [ MIN_GENERALIZED_TIME, MAX_GENERALIZED_TIME ] ],
            );
        });

        test("years only", () => {
            testOccurrences(
                new Period(undefined, undefined, undefined, undefined, y2026),
                START_2026,
                START_OF_2028,
                [ fullSpan(2026, 0, 1, 2026, 11, 31) ],
            );
        });

        test("months only", () => {
            testOccurrences(
                new Period(undefined, undefined, undefined, feb),
                START_2026,
                START_OF_2028,
                [
                    fullSpan(2026, 1, 1, 2026, 1, 28),
                    fullSpan(2027, 1, 1, 2027, 1, 28),
                ],
            );
        });

        test("years + months", () => {
            testOccurrences(
                new Period(undefined, undefined, undefined, feb, y2026),
                START_2026,
                START_OF_2028,
                [ fullSpan(2026, 1, 1, 2026, 1, 28) ],
            );
        });

        test("days only (days of the year)", () => {
            testOccurrences(
                new Period(undefined, daysDomOrDoy),
                START_2026,
                START_OF_2028,
                [ fullDay(2026, 0, 15), fullDay(2027, 0, 15) ],
            );
        });

        test("years + days (days of the year)", () => {
            testOccurrences(
                new Period(undefined, daysDomOrDoy, undefined, undefined, y2026),
                START_2026,
                START_OF_2028,
                [ fullDay(2026, 0, 15) ],
            );
        });

        test("months + days (days of the month)", () => {
            testOccurrences(
                new Period(undefined, daysDomOrDoy, undefined, feb),
                START_2026,
                START_OF_2028,
                [ fullDay(2026, 1, 15), fullDay(2027, 1, 15) ],
            );
        });

        test("years + months + days", () => {
            testOccurrences(
                new Period(undefined, daysDomOrDoy, undefined, feb, y2026),
                START_2026,
                START_OF_2028,
                [ fullDay(2026, 1, 15) ],
            );
        });

        test("days + weeks (days of week, weeks of the year)", () => {
            // Sunday of week 1 of 2026 is 4 January; of 2027 is 3 January.
            testOccurrences(
                new Period(undefined, daysDow, weeks1),
                START_2026,
                START_OF_2028,
                [ fullDay(2026, 0, 4), fullDay(2027, 0, 3) ],
            );
        });

        test("years + days + weeks", () => {
            testOccurrences(
                new Period(undefined, daysDow, weeks1, undefined, y2026),
                START_2026,
                START_OF_2028,
                [ fullDay(2026, 0, 4) ],
            );
        });

        test("days + weeks + months (days of week, weeks of the month)", () => {
            // Week 1 of February 2026 is 1–7 Feb (Sunday the 1st). Week 1 of
            // February 2027 contains 4 Feb and starts on Sunday 31 Jan.
            testOccurrences(
                new Period(undefined, daysDow, weeks1, feb),
                START_2026,
                START_OF_2028,
                [ fullDay(2026, 1, 1), fullDay(2027, 0, 31) ],
            );
        });

        test("years + days + weeks + months", () => {
            testOccurrences(
                new Period(undefined, daysDow, weeks1, feb, y2026),
                START_2026,
                START_OF_2028,
                [ fullDay(2026, 1, 1) ],
            );
        });

        test("timesOfDay + days", () => {
            testOccurrences(
                new Period(NOON, daysDomOrDoy),
                START_2026,
                START_OF_2028,
                [ atHours(2026, 0, 15, 12, 13), atHours(2027, 0, 15, 12, 13) ],
            );
        });

        test("timesOfDay + years + days", () => {
            testOccurrences(
                new Period(NOON, daysDomOrDoy, undefined, undefined, y2026),
                START_2026,
                START_OF_2028,
                [ atHours(2026, 0, 15, 12, 13) ],
            );
        });

        test("timesOfDay + months + days", () => {
            testOccurrences(
                new Period(NOON, daysDomOrDoy, undefined, feb),
                START_2026,
                START_OF_2028,
                [ atHours(2026, 1, 15, 12, 13), atHours(2027, 1, 15, 12, 13) ],
            );
        });

        test("timesOfDay + years + months + days", () => {
            testOccurrences(
                new Period(NOON, daysDomOrDoy, undefined, feb, y2026),
                START_2026,
                START_OF_2028,
                [ atHours(2026, 1, 15, 12, 13) ],
            );
        });

        test("timesOfDay + days + weeks", () => {
            testOccurrences(
                new Period(NOON, daysDow, weeks1),
                START_2026,
                START_OF_2028,
                [ atHours(2026, 0, 4, 12, 13), atHours(2027, 0, 3, 12, 13) ],
            );
        });

        test("timesOfDay + years + days + weeks", () => {
            testOccurrences(
                new Period(NOON, daysDow, weeks1, undefined, y2026),
                START_2026,
                START_OF_2028,
                [ atHours(2026, 0, 4, 12, 13) ],
            );
        });

        test("timesOfDay + days + weeks + months", () => {
            testOccurrences(
                new Period(NOON, daysDow, weeks1, feb),
                START_2026,
                START_OF_2028,
                [ atHours(2026, 1, 1, 12, 13), atHours(2027, 0, 31, 12, 13) ],
            );
        });

        test("timesOfDay + days + weeks + months + years (all five fields)", () => {
            testOccurrences(
                new Period(NOON, daysDow, weeks1, feb, y2026),
                START_2026,
                START_OF_2028,
                [ atHours(2026, 1, 1, 12, 13) ],
            );
        });
    });

    describe("named bits", () => {
        test("bitMonth selects January and March and skips an unset February", () => {
            const p = new Period(
                undefined,
                undefined,
                undefined,
                {
                    bitMonth: bits(
                        Period_months_bitMonth_january,
                        Period_months_bitMonth_march,
                    ),
                },
                [ 2026 ],
            );
            testOccurrences(p, START_2026, START_OF_2028, [
                fullSpan(2026, 0, 1, 2026, 0, 31),
                fullSpan(2026, 2, 1, 2026, 2, 31),
            ]);
        });

        test("bitWeek week1 and week2 of February merge into one span", () => {
            const p = new Period(
                undefined,
                undefined,
                {
                    bitWeek: bits(
                        Period_weeks_bitWeek_week1,
                        Period_weeks_bitWeek_week2,
                    ),
                },
                { intMonth: [ 2 ] },
                [ 2026 ],
            );
            testOccurrences(p, START_2026, START_OF_2028, [
                fullSpan(2026, 1, 1, 2026, 1, 14),
            ]);
        });

        test("bitDay Sunday and Tuesday in February are weekdays, not day-of-month 1 and 3", () => {
            const p = new Period(
                undefined,
                {
                    bitDay: bits(
                        Period_days_bitDay_sunday,
                        Period_days_bitDay_tuesday,
                    ),
                },
                undefined,
                { intMonth: [ 2 ] },
                [ 2026 ],
            );
            testOccurrences(p, START_2026, START_OF_2028, [
                fullDay(2026, 1, 1),
                fullDay(2026, 1, 3),
                fullDay(2026, 1, 8),
                fullDay(2026, 1, 10),
                fullDay(2026, 1, 15),
                fullDay(2026, 1, 17),
                fullDay(2026, 1, 22),
                fullDay(2026, 1, 24),
            ]);
        });

        test("bitDay Monday inside week 1 of February is only that Monday", () => {
            const p = new Period(
                undefined,
                { bitDay: bits(Period_days_bitDay_monday) },
                { intWeek: [ 1 ] },
                { intMonth: [ 2 ] },
                [ 2026 ],
            );
            testOccurrences(p, START_2026, START_OF_2028, [
                fullDay(2026, 1, 2),
            ]);
        });

        test("bitDay Saturday of week 1 of the year is 10 January 2026", () => {
            const p = new Period(
                undefined,
                { bitDay: bits(Period_days_bitDay_saturday) },
                { intWeek: [ 1 ] },
                undefined,
                [ 2026 ],
            );
            testOccurrences(p, START_2026, START_OF_2028, [
                fullDay(2026, 0, 10),
            ]);
        });

        test("bitDay Monday with no months or weeks lists Mondays of the year", () => {
            const p = new Period(
                undefined,
                { bitDay: bits(Period_days_bitDay_monday) },
                undefined,
                undefined,
                [ 2026 ],
            );
            testOccurrences(
                p,
                START_2026,
                new Date(2026, 0, 20),
                [
                    fullDay(2026, 0, 5),
                    fullDay(2026, 0, 12),
                    fullDay(2026, 0, 19),
                ],
            );
        });
    });

    describe("allMonths and allWeeks", () => {
        test("allMonths with intDay 15 is the 15th of every month, not day 15 of the year", () => {
            const p = new Period(
                undefined,
                { intDay: [ 15 ] },
                undefined,
                { allMonths: null },
                [ 2026 ],
            );
            testOccurrences(
                p,
                START_2026,
                START_OF_2028,
                Array.from({ length: 12 }, (_, m) => fullDay(2026, m, 15)),
            );
        });

        test("omitted months with intDay 15 and years is day 15 of the year only", () => {
            const p = new Period(
                undefined,
                { intDay: [ 15 ] },
                undefined,
                undefined,
                [ 2026 ],
            );
            testOccurrences(p, START_2026, START_OF_2028, [
                fullDay(2026, 0, 15),
            ]);
        });

        test("allWeeks with intDay Monday in February is every Monday of the month", () => {
            const p = new Period(
                undefined,
                { intDay: [ 2 ] },
                { allWeeks: null },
                { intMonth: [ 2 ] },
                [ 2026 ],
            );
            testOccurrences(p, START_2026, START_OF_2028, [
                fullDay(2026, 1, 2),
                fullDay(2026, 1, 9),
                fullDay(2026, 1, 16),
                fullDay(2026, 1, 23),
            ]);
        });

        test("omitted weeks with intDay 2 in February is the 2nd of the month, not Monday", () => {
            const p = new Period(
                undefined,
                { intDay: [ 2 ] },
                undefined,
                { intMonth: [ 2 ] },
                [ 2026 ],
            );
            testOccurrences(p, START_2026, START_OF_2028, [
                fullDay(2026, 1, 2),
            ]);
        });
    });

    describe("dayOf", () => {
        // May 2026 Sundays: 3, 10, 17, 24, 31.
        const may2026 = { intMonth: [ 5 ] };
        const y2026 = [ 2026 ];

        test("first Sunday of May 2026", () => {
            testOccurrences(
                new Period(
                    undefined,
                    { dayOf: { first: { intNamedDays: NamedDay_intNamedDays_sunday } } },
                    undefined,
                    may2026,
                    y2026,
                ),
                START_2026,
                START_OF_2028,
                [ fullDay(2026, 4, 3) ],
            );
        });

        test("second Sunday of May 2026", () => {
            testOccurrences(
                new Period(
                    undefined,
                    { dayOf: { second: { intNamedDays: NamedDay_intNamedDays_sunday } } },
                    undefined,
                    may2026,
                    y2026,
                ),
                START_2026,
                START_OF_2028,
                [ fullDay(2026, 4, 10) ],
            );
        });

        test("third Sunday of May 2026", () => {
            testOccurrences(
                new Period(
                    undefined,
                    { dayOf: { third: { intNamedDays: NamedDay_intNamedDays_sunday } } },
                    undefined,
                    may2026,
                    y2026,
                ),
                START_2026,
                START_OF_2028,
                [ fullDay(2026, 4, 17) ],
            );
        });

        test("fourth Sunday of May 2026", () => {
            testOccurrences(
                new Period(
                    undefined,
                    { dayOf: { fourth: { intNamedDays: NamedDay_intNamedDays_sunday } } },
                    undefined,
                    may2026,
                    y2026,
                ),
                START_2026,
                START_OF_2028,
                [ fullDay(2026, 4, 24) ],
            );
        });

        test("fifth Sunday of May 2026 is the last Sunday", () => {
            testOccurrences(
                new Period(
                    undefined,
                    { dayOf: { fifth: { intNamedDays: NamedDay_intNamedDays_sunday } } },
                    undefined,
                    may2026,
                    y2026,
                ),
                START_2026,
                START_OF_2028,
                [ fullDay(2026, 4, 31) ],
            );
        });

        test("fifth Monday of February 2026 is the last Monday (there is no fifth)", () => {
            testOccurrences(
                new Period(
                    undefined,
                    { dayOf: { fifth: { intNamedDays: NamedDay_intNamedDays_monday } } },
                    undefined,
                    { intMonth: [ 2 ] },
                    y2026,
                ),
                START_2026,
                START_OF_2028,
                [ fullDay(2026, 1, 23) ],
            );
        });

        test("bitNamedDays second Monday and Thursday of January 2026", () => {
            testOccurrences(
                new Period(
                    undefined,
                    {
                        dayOf: {
                            second: {
                                bitNamedDays: bits(
                                    NamedDay_bitNamedDays_monday,
                                    NamedDay_bitNamedDays_thursday,
                                ),
                            },
                        },
                    },
                    undefined,
                    { intMonth: [ 1 ] },
                    y2026,
                ),
                START_2026,
                START_OF_2028,
                [
                    fullDay(2026, 0, 8),
                    fullDay(2026, 0, 12),
                ],
            );
        });

        test("dayOf ignores weeks when both are present", () => {
            testOccurrences(
                new Period(
                    undefined,
                    { dayOf: { first: { intNamedDays: NamedDay_intNamedDays_monday } } },
                    { intWeek: [ 3 ] },
                    { intMonth: [ 2 ] },
                    y2026,
                ),
                START_2026,
                START_OF_2028,
                [ fullDay(2026, 1, 2) ],
            );
        });

        test("dayOf without months is that named day of every month", () => {
            testOccurrences(
                new Period(
                    undefined,
                    { dayOf: { first: { intNamedDays: NamedDay_intNamedDays_monday } } },
                    undefined,
                    undefined,
                    y2026,
                ),
                START_2026,
                START_OF_2028,
                [
                    fullDay(2026, 0, 5),
                    fullDay(2026, 1, 2),
                    fullDay(2026, 2, 2),
                    fullDay(2026, 3, 6),
                    fullDay(2026, 4, 4),
                    fullDay(2026, 5, 1),
                    fullDay(2026, 6, 6),
                    fullDay(2026, 7, 3),
                    fullDay(2026, 8, 7),
                    fullDay(2026, 9, 5),
                    fullDay(2026, 10, 2),
                    fullDay(2026, 11, 7),
                ],
            );
        });

        test("dayOf with timesOfDay applies the band to that named day", () => {
            testOccurrences(
                new Period(
                    NOON,
                    { dayOf: { third: { intNamedDays: NamedDay_intNamedDays_friday } } },
                    undefined,
                    { intMonth: [ 3 ] },
                    y2026,
                ),
                START_2026,
                START_OF_2028,
                [ atHours(2026, 2, 20, 12, 13) ],
            );
        });

        test("empty bitNamedDays matches no days", () => {
            testOccurrences(
                new Period(
                    undefined,
                    { dayOf: { first: { bitNamedDays: bits() } } },
                    undefined,
                    { intMonth: [ 2 ] },
                    y2026,
                ),
                START_2026,
                START_OF_2028,
                [],
            );
        });
    });

    describe("calendar and time-band edges", () => {

        test("week 1 of January 2021 starts on 3 January, not 1 January", () => {
            testOccurrences(
                new Period(
                    undefined,
                    undefined,
                    { intWeek: [ 1 ] },
                    { intMonth: [ 1 ] },
                    [ 2021 ],
                ),
                new Date(2021, 0, 1),
                new Date(2022, 0, 1),
                [ fullSpan(2021, 0, 3, 2021, 0, 9) ],
            );
        });

        test("consecutive intWeeks of a month merge", () => {
            testOccurrences(
                new Period(
                    undefined,
                    undefined,
                    { intWeek: [ 2, 1 ] },
                    { intMonth: [ 2 ] },
                    [ 2026 ],
                ),
                START_2026,
                START_OF_2028,
                [ fullSpan(2026, 1, 1, 2026, 1, 14) ],
            );
        });

        test("day 32 of the year is 1 February, and day 60 of a non-leap year is 1 March", () => {
            testOccurrences(
                new Period(
                    undefined,
                    { intDay: [ 32, 60 ] },
                    undefined,
                    undefined,
                    [ 2026 ],
                ),
                START_2026,
                START_OF_2028,
                [ fullDay(2026, 1, 1), fullDay(2026, 2, 1) ],
            );
        });

        test("day 60 and day 366 of leap year 2024 are 29 February and 31 December", () => {
            testOccurrences(
                new Period(
                    undefined,
                    { intDay: [ 60, 366 ] },
                    undefined,
                    undefined,
                    [ 2024 ],
                ),
                new Date(2024, 0, 1),
                new Date(2025, 0, 1),
                [ fullDay(2024, 1, 29), fullDay(2024, 11, 31) ],
                // [ fullDay(2024, 1, 29) ],
            );
        });

        test("duplicate and out-of-range days of the year are skipped", () => {
            testOccurrences(
                new Period(undefined, { intDay: [ 15, 15, 0, 400 ] }),
                START_2026,
                START_OF_2027,
                [ fullDay(2026, 0, 15) ],
            );
        });

        test("duplicate and unordered years are sorted, deduped, and merged when consecutive", () => {
            testOccurrences(
                new Period(
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    [ 2019, 2017, 2017, 2018 ],
                ),
                new Date(2016, 0, 1),
                new Date(2020, 0, 1),
                [ fullSpan(2017, 0, 1, 2019, 11, 31) ],
            );
        });

        test("years before the startInstant year are skipped", () => {
            testOccurrences(
                new Period(
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    [ 2025, 2026 ],
                ),
                START_2026,
                START_OF_2028,
                [ fullSpan(2026, 0, 1, 2026, 11, 31) ],
            );
        });

        test("an occurrence that starts after endInstant is not yielded", () => {
            testOccurrences(
                new Period(
                    undefined,
                    { intDay: [ 15 ] },
                    undefined,
                    { intMonth: [ 2 ] },
                    [ 2026, 2027 ],
                ),
                START_2026,
                new Date(2026, 6, 1),
                [ fullDay(2026, 1, 15) ],
            );
        });

        test("an occurrence that starts exactly at endInstant is still yielded", () => {
            testOccurrences(
                new Period(
                    undefined,
                    { intDay: [ 15 ] },
                    undefined,
                    { intMonth: [ 2 ] },
                    [ 2026 ],
                ),
                START_2026,
                new Date(2026, 1, 15, 0, 0, 0),
                [ fullDay(2026, 1, 15) ],
            );
        });

        test("consecutive full days merge; gapped days do not", () => {
            testOccurrences(
                new Period(
                    undefined,
                    { intDay: [ 14, 15, 17 ] },
                    undefined,
                    { intMonth: [ 2 ] },
                    [ 2026 ],
                ),
                START_2026,
                START_OF_2028,
                [
                    fullSpan(2026, 1, 14, 2026, 1, 15),
                    fullDay(2026, 1, 17),
                ],
            );
        });

        test("noon bands on consecutive days do not merge across the night gap", () => {
            testOccurrences(
                new Period(
                    NOON,
                    { intDay: [ 15, 16 ] },
                    undefined,
                    { intMonth: [ 2 ] },
                    [ 2026 ],
                ),
                START_2026,
                START_OF_2028,
                [
                    atHours(2026, 1, 15, 12, 13),
                    atHours(2026, 1, 16, 12, 13),
                ],
            );
        });

        test("default DayTimeBand is midnight to 23:59:59", () => {
            testOccurrences(
                new Period(
                    [ new DayTimeBand() ],
                    { intDay: [ 15 ] },
                    undefined,
                    { intMonth: [ 2 ] },
                    [ 2026 ],
                ),
                START_2026,
                START_OF_2028,
                [[
                    new Date(2026, 1, 15, 0, 0, 0),
                    new Date(2026, 1, 15, 23, 59, 59),
                ]],
            );
        });

        test("omitted startDayTime defaults to 00:00:00 and omitted endDayTime to 23:59:59", () => {
            testOccurrences(
                new Period(
                    [
                        new DayTimeBand(undefined, new DayTime(12)),
                        new DayTimeBand(new DayTime(18), undefined),
                    ],
                    { intDay: [ 15 ] },
                    undefined,
                    { intMonth: [ 2 ] },
                    [ 2026 ],
                ),
                START_2026,
                START_OF_2028,
                [
                    [
                        new Date(2026, 1, 15, 0, 0, 0),
                        new Date(2026, 1, 15, 12, 0, 0),
                    ],
                    [
                        new Date(2026, 1, 15, 18, 0, 0),
                        new Date(2026, 1, 15, 23, 59, 59),
                    ],
                ],
            );
        });

        test("minutes and seconds on a DayTimeBand are applied", () => {
            testOccurrences(
                new Period(
                    [ new DayTimeBand(
                        new DayTime(12, 30, 45),
                        new DayTime(13, 1, 2),
                    ) ],
                    { intDay: [ 15 ] },
                    undefined,
                    { intMonth: [ 2 ] },
                    [ 2026 ],
                ),
                START_2026,
                START_OF_2028,
                [[
                    new Date(2026, 1, 15, 12, 30, 45),
                    new Date(2026, 1, 15, 13, 1, 2),
                ]],
            );
        });

        test("inverted DayTimeBand (start after end) matches nothing", () => {
            testOccurrences(
                new Period(
                    [ new DayTimeBand(new DayTime(13), new DayTime(12)) ],
                    { intDay: [ 15 ] },
                    undefined,
                    { intMonth: [ 2 ] },
                    [ 2026 ],
                ),
                START_2026,
                START_OF_2028,
                [],
            );
        });

        test("adjacent DayTimeBands are flattened into one span", () => {
            testOccurrences(
                new Period(
                    [
                        new DayTimeBand(new DayTime(10), new DayTime(11)),
                        new DayTimeBand(new DayTime(11), new DayTime(12)),
                    ],
                    { intDay: [ 15 ] },
                    undefined,
                    { intMonth: [ 2 ] },
                    [ 2026 ],
                ),
                START_2026,
                START_OF_2028,
                [ atHours(2026, 1, 15, 10, 12) ],
            );
        });

        test("intDay 1 and 7 with weeks are Sunday and Saturday of that week", () => {
            testOccurrences(
                new Period(
                    undefined,
                    { intDay: [ 7, 1 ] },
                    { intWeek: [ 1 ] },
                    { intMonth: [ 2 ] },
                    [ 2026 ],
                ),
                START_2026,
                START_OF_2028,
                [ fullDay(2026, 1, 1), fullDay(2026, 1, 7) ],
            );
        });

        test("day 31 is omitted in February", () => {
            testOccurrences(
                new Period(
                    undefined,
                    { intDay: [ 28, 31 ] },
                    undefined,
                    { intMonth: [ 2 ] },
                    [ 2026 ],
                ),
                START_2026,
                START_OF_2028,
                [ fullDay(2026, 1, 28) ],
            );
        });

        test("default endInstant is the GeneralizedTime maximum, so a bounded year still finishes", () => {
            const occs = Array.from(occurrences(
                new Period(
                    undefined,
                    { intDay: [ 1 ] },
                    undefined,
                    { intMonth: [ 1 ] },
                    [ 2026 ],
                ),
                START_2026,
            ));
            expect(occs).toEqual([ fullDay(2026, 0, 1) ]);
        });
    });
});
