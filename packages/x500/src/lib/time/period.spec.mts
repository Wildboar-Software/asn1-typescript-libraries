import {
    Period,
    DayTimeBand,
    DayTime,
} from "../modules/SelectedAttributeTypes/index.mjs";
import { occurrences } from "./period.mjs";

function testOccurrences(p: Period, startInstant: Date, endInstant: Date, expected: [Date, Date][]) {
    const occs = Array.from(occurrences(p, startInstant, endInstant));
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
});
