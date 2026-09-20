import { Period } from "../modules/SelectedAttributeTypes/Period.ta.mjs";
import { DayTimeBand } from "../modules/SelectedAttributeTypes/DayTimeBand.ta.mjs";
import { DayTime } from "../modules/SelectedAttributeTypes/DayTime.ta.mjs";
import occurrencesOfPeriod, {
    MAX_GENERALIZED_TIME,
} from "./occurrencesOfPeriod.mjs";
import boundariesOfPeriodOccurrence from "./boundariesOfPeriodOccurrence.mjs";

function pairYearMonthDay (
    pair: [ Date, Date ],
): { start: number[]; end: number[] } {
    const [ s, e ] = pair;
    return {
        start: [ s.getFullYear(), s.getMonth(), s.getDate(), s.getHours(), s.getMinutes(), s.getSeconds() ],
        end: [ e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds() ],
    };
}

describe("occurrencesOfPeriod / Period.occurrences", () => {
    it("yields the containing occurrence when startInstant is inside, even if the start precedes the cursor", () => {
        const period = new Period(
            undefined,
            undefined,
            undefined,
            undefined,
            [ 2016 ],
        );
        const start = new Date(2016, 6, 15, 12, 0, 0);
        const end = new Date(2016, 8, 1, 0, 0, 0);
        const pairs = Array.from(period.occurrences(start, end));
        expect(pairs).toHaveLength(1);
        expect(pairYearMonthDay(pairs[0])).toEqual({
            start: [ 2016, 0, 1, 0, 0, 0 ],
            end: [ 2016, 11, 31, 23, 59, 59 ],
        });
        const fromPoint = boundariesOfPeriodOccurrence(period, start);
        expect(fromPoint).not.toBeNull();
        expect(pairs[0][0].valueOf()).toBe(fromPoint![0].valueOf());
        expect(pairs[0][1].valueOf()).toBe(fromPoint![1].valueOf());
        expect(pairs[0][0].valueOf()).toBeLessThan(start.valueOf());
    });

    it("yields the next occurrence when startInstant is in a gap", () => {
        const period = new Period(
            undefined,
            undefined,
            undefined,
            undefined,
            [ 2016, 2018 ],
        );
        const start = new Date(2017, 5, 15, 12, 0, 0);
        const end = new Date(2018, 11, 31, 23, 59, 59);
        const pairs = Array.from(period.occurrences(start, end));
        expect(pairs).toHaveLength(1);
        expect(pairYearMonthDay(pairs[0])).toEqual({
            start: [ 2018, 0, 1, 0, 0, 0 ],
            end: [ 2018, 11, 31, 23, 59, 59 ],
        });
    });

    it("yields successive DayTimeBands then the next day's first band", () => {
        const period = new Period(
            [
                new DayTimeBand(new DayTime(9, 0, 0), new DayTime(12, 0, 0)),
                new DayTimeBand(new DayTime(13, 0, 0), new DayTime(17, 0, 0)),
            ],
            undefined,
            undefined,
            undefined,
            [ 2021 ],
        );
        const start = new Date(2021, 4, 10, 8, 0, 0);
        const end = new Date(2021, 4, 11, 12, 0, 0);
        const pairs = Array.from(period.occurrences(start, end));
        expect(pairs).toHaveLength(3);
        expect(pairYearMonthDay(pairs[0])).toEqual({
            start: [ 2021, 4, 10, 9, 0, 0 ],
            end: [ 2021, 4, 10, 12, 0, 0 ],
        });
        expect(pairYearMonthDay(pairs[1])).toEqual({
            start: [ 2021, 4, 10, 13, 0, 0 ],
            end: [ 2021, 4, 10, 17, 0, 0 ],
        });
        expect(pairYearMonthDay(pairs[2])).toEqual({
            start: [ 2021, 4, 11, 9, 0, 0 ],
            end: [ 2021, 4, 11, 12, 0, 0 ],
        });
    });

    it("stops after the last listed year when endInstant is omitted", () => {
        const period = new Period(
            undefined,
            undefined,
            undefined,
            undefined,
            [ 2015, 2017 ],
        );
        const start = new Date(2014, 0, 1, 0, 0, 0);
        const pairs = Array.from(period.occurrences(start));
        expect(pairs).toHaveLength(2);
        expect(pairs[0][0].getFullYear()).toBe(2015);
        expect(pairs[1][0].getFullYear()).toBe(2017);
        expect(pairs[1][1].getFullYear()).toBe(2017);
    });

    it("yields adjacent-second DayTimeBands as two pairs", () => {
        const period = new Period(
            [
                new DayTimeBand(new DayTime(9, 0, 0), new DayTime(12, 0, 0)),
                new DayTimeBand(new DayTime(12, 0, 1), new DayTime(17, 0, 0)),
            ],
        );
        const start = new Date(2021, 4, 10, 9, 0, 0);
        const end = new Date(2021, 4, 10, 17, 0, 0);
        const pairs = Array.from(period.occurrences(start, end));
        expect(pairs).toHaveLength(2);
        expect(pairYearMonthDay(pairs[0])).toEqual({
            start: [ 2021, 4, 10, 9, 0, 0 ],
            end: [ 2021, 4, 10, 12, 0, 0 ],
        });
        expect(pairYearMonthDay(pairs[1])).toEqual({
            start: [ 2021, 4, 10, 12, 0, 1 ],
            end: [ 2021, 4, 10, 17, 0, 0 ],
        });
    });

    it("yields nothing when no listed year intersects the window", () => {
        const period = new Period(
            undefined,
            undefined,
            undefined,
            undefined,
            [ 2016 ],
        );
        expect(Array.from(period.occurrences(
            new Date(2017, 0, 1, 0, 0, 0),
            new Date(2018, 0, 1, 0, 0, 0),
        ))).toEqual([]);
        expect(Array.from(period.occurrences(
            new Date(2016, 0, 1, 0, 0, 0),
            new Date(2016, 11, 31, 23, 59, 59),
        )).length).toBe(1);
        const emptyYears = new Period(
            undefined,
            undefined,
            undefined,
            undefined,
            [],
        );
        expect(Array.from(emptyYears.occurrences(
            new Date(2016, 0, 1, 0, 0, 0),
            new Date(2016, 11, 31, 23, 59, 59),
        ))).toEqual([]);
    });

    it("Array.from with an explicit end is finite and does not start after endInstant", () => {
        const period = new Period(
            undefined,
            undefined,
            { intWeek: [ 2 ] },
            undefined,
            [ 2016 ],
        );
        const start = new Date(2016, 0, 1, 12, 0, 0);
        const end = new Date(2016, 0, 31, 12, 0, 0);
        const pairs = Array.from(period.occurrences(start, end));
        expect(pairs.length).toBeGreaterThan(0);
        expect(pairs.length).toBeLessThan(10);
        for (const [ occStart ] of pairs) {
            expect(occStart.valueOf()).toBeLessThanOrEqual(end.valueOf());
        }
        const last = pairs[pairs.length - 1];
        expect(last[0].valueOf()).toBeLessThanOrEqual(end.valueOf());
        expect(last[1].valueOf()).toBeGreaterThanOrEqual(start.valueOf());
    });

    it("returns an empty array when startInstant is after endInstant", () => {
        const period = new Period(
            undefined,
            undefined,
            undefined,
            undefined,
            [ 2016 ],
        );
        expect(Array.from(period.occurrences(
            new Date(2016, 6, 1, 0, 0, 0),
            new Date(2016, 0, 1, 0, 0, 0),
        ))).toEqual([]);
    });

    it("includes an occurrence that starts exactly at endInstant", () => {
        const period = new Period(
            [
                new DayTimeBand(new DayTime(9, 0, 0), new DayTime(17, 0, 0)),
            ],
            undefined,
            undefined,
            undefined,
            [ 2021 ],
        );
        const start = new Date(2021, 4, 10, 8, 0, 0);
        const end = new Date(2021, 4, 10, 9, 0, 0);
        const pairs = Array.from(period.occurrences(start, end));
        expect(pairs).toHaveLength(1);
        expect(pairs[0][0].valueOf()).toBe(end.valueOf());
        expect(pairYearMonthDay(pairs[0]).start).toEqual([ 2021, 4, 10, 9, 0, 0 ]);
    });

    it("defaults omitted endInstant to GeneralizedTime max", () => {
        const period = new Period(
            [
                new DayTimeBand(new DayTime(9, 0, 0), new DayTime(10, 0, 0)),
            ],
        );
        const start = new Date(9999, 11, 31, 8, 0, 0);
        const pairs = Array.from(period.occurrences(start));
        expect(pairs).toHaveLength(1);
        expect(pairYearMonthDay(pairs[0])).toEqual({
            start: [ 9999, 11, 31, 9, 0, 0 ],
            end: [ 9999, 11, 31, 10, 0, 0 ],
        });
        expect(MAX_GENERALIZED_TIME.getFullYear()).toBe(9999);
        expect(MAX_GENERALIZED_TIME.getMonth()).toBe(11);
        expect(MAX_GENERALIZED_TIME.getDate()).toBe(31);
        expect(MAX_GENERALIZED_TIME.getHours()).toBe(23);
        expect(MAX_GENERALIZED_TIME.getMinutes()).toBe(59);
        expect(MAX_GENERALIZED_TIME.getSeconds()).toBe(59);
    });

    it("exposes the same iterator from the free function and the Period method", () => {
        const period = new Period(
            undefined,
            undefined,
            undefined,
            undefined,
            [ 2016 ],
        );
        const start = new Date(2016, 0, 1, 0, 0, 0);
        const end = new Date(2016, 11, 31, 23, 59, 59);
        const viaMethod = Array.from(period.occurrences(start, end));
        const viaFn = Array.from(occurrencesOfPeriod(period, start, end));
        expect(viaMethod).toHaveLength(1);
        expect(viaFn).toHaveLength(1);
        expect(viaMethod[0][0].valueOf()).toBe(viaFn[0][0].valueOf());
        expect(viaMethod[0][1].valueOf()).toBe(viaFn[0][1].valueOf());
    });
});
