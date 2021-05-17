import boundariesOfPeriodOccurrence from "@wildboar/x500/src/lib/utils/boundariesOfPeriodOccurrence";
import {
    DayTimeBand,
    Period,
    _encode_Period_months,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/Period.ta";
import { DayTime } from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/DayTime.ta";
import { DERElement, FALSE_BIT, TRUE_BIT } from "asn1-ts";
import { NamedDay_intNamedDays_friday } from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/NamedDay-intNamedDays.ta";
import { addDays } from "date-fns";

const GENERIC_DAY_TIME_BAND = new DayTimeBand(
    new DayTime(
        12,
        34,
        56,
    ),
    new DayTime(
        15,
        13,
        11,
    ),
);

const UNRECOGNIZED_OPTION: DERElement = new DERElement();

describe("boundariesOfPeriodOccurrence()", () => {
    it("minimally works", () => {
        const p = new Period(
            undefined,
            undefined,
            undefined,
            undefined,
            [ 2016 ],
        );
        const d = new Date(2016, 6, 15, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(1);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2016);
        expect(e.getMonth()).toBe(11);
        expect(e.getDate()).toBe(31);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);

        const d2 = new Date(2017, 6, 15, 12, 34, 56);
        const s2 = boundariesOfPeriodOccurrence(p, d2);
        expect(s2).toBeNull();
    });

    it("returns the bounds of a contiguous span of years", () => {
        const p = new Period(
            undefined,
            undefined,
            undefined,
            undefined,
            [ 2015, 2016, 2017 ],
        );
        const d = new Date(2016, 6, 15, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2015);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(1);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2017);
        expect(e.getMonth()).toBe(11);
        expect(e.getDate()).toBe(31);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("returns the bounds of a contiguous span of months", () => {
        const p = new Period(
            undefined,
            undefined,
            undefined,
            {
                intMonth: [ 3, 4, 5, 6, 7, 8, 9 ],
            },
            undefined,
        );
        const d = new Date(2016, 6, 15, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(2);
        expect(s.getDate()).toBe(1);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2016);
        expect(e.getMonth()).toBe(8);
        expect(e.getDate()).toBe(30);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("returns the bounds of a contiguous span of weeks of the year", () => {
        const p = new Period(
            undefined,
            undefined,
            {
                intWeek: [ 1, 2 ],
            },
            undefined,
            [ 2016 ],
        );
        const d = new Date(2016, 0, 10, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(1);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2016);
        expect(e.getMonth()).toBe(0);
        expect(e.getDate()).toBe(15);
        expect(e.getHours()).toBe(0);
        expect(e.getMinutes()).toBe(0);
        expect(e.getSeconds()).toBe(0);
    });

    it("returns the bounds of a contiguous span of weeks of the month", () => {
        const p = new Period(
            undefined,
            undefined,
            {
                intWeek: [ 2, 3 ],
            },
            {
                intMonth: [ 4 ],
            },
            undefined,
        );
        const d = new Date(2016, 3, 18, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(3);
        expect(s.getDate()).toBe(8);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2016);
        expect(e.getMonth()).toBe(3);
        expect(e.getDate()).toBe(22);
        expect(e.getHours()).toBe(0);
        expect(e.getMinutes()).toBe(0);
        expect(e.getSeconds()).toBe(0);
    });

    it("returns the bounds of a contiguous span of days of the year", () => {
        const p = new Period(
            undefined,
            {
                intDay: [ 16, 17, 18, 19, 20 ]
            },
            undefined,
            undefined,
            [ 2016 ],
        );
        const d = new Date(2016, 0, 18, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(16);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2016);
        expect(e.getMonth()).toBe(0);
        expect(e.getDate()).toBe(20);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("returns the bounds of a contiguous span of days of the month", () => {
        const p = new Period(
            undefined,
            {
                intDay: [ 16, 17, 18, 19, 20 ]
            },
            undefined,
            {
                intMonth: [ 4 ],
            },
            undefined,
        );
        const d = new Date(2016, 3, 18, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(3);
        expect(s.getDate()).toBe(16);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2016);
        expect(e.getMonth()).toBe(3);
        expect(e.getDate()).toBe(20);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("returns the bounds of a contiguous span of days of the week", () => {
        const p = new Period(
            undefined,
            {
                intDay: [ 4, 5, 6, 7 ],
            },
            {
                allWeeks: null,
            },
            undefined,
            undefined,
        );
        const d = new Date(2021, 4, 14, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(4);
        expect(s.getDate()).toBe(12);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(4);
        expect(e.getDate()).toBe(15);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("does not return the bounds of a contiguous span of years if there is a month selected that will break the continuity", () => {
        const p = new Period(
            undefined,
            undefined,
            undefined,
            {
                intMonth: [ 6 ],
            },
            [ 2015, 2016, 2017 ],
        );
        const d = new Date(2016, 5, 15, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(5);
        expect(s.getDate()).toBe(1);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2016);
        expect(e.getMonth()).toBe(5);
        expect(e.getDate()).toBe(30);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("does not return the bounds of a contiguous span of years if there is a week selected that will break the continuity", () => {
        const p = new Period(
            undefined,
            undefined,
            {
                intWeek: [ 2 ],
            },
            undefined,
            [ 2015, 2016, 2017 ],
        );
        const d = new Date(2016, 0, 12, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(8);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2016);
        expect(e.getMonth()).toBe(0);
        expect(e.getDate()).toBe(15);
        expect(e.getHours()).toBe(0);
        expect(e.getMinutes()).toBe(0);
        expect(e.getSeconds()).toBe(0);
    });

    it("does not return the lowest of a contiguous span of years if there is a day selected that will break the continuity", () => {
        const p = new Period(
            undefined,
            {
                intDay: [ 10, 11, 12, 13, 14 ],
            },
            undefined,
            undefined,
            [ 2015, 2016 ],
        );
        const d = new Date(2016, 0, 12, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(10);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2016);
        expect(e.getMonth()).toBe(0);
        expect(e.getDate()).toBe(14);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("does not return the bounds of a contiguous span of years if there is a time of day selected that will break the continuity", () => {
        const p = new Period(
            [
                GENERIC_DAY_TIME_BAND,
            ],
            undefined,
            undefined,
            undefined,
            [ 2015, 2016 ],
        );
        const d = new Date(2016, 0, 12, 13, 37, 58);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(12);
        expect(s.getHours()).toBe(12);
        expect(s.getMinutes()).toBe(34);
        expect(s.getSeconds()).toBe(56);

        expect(e.getFullYear()).toBe(2016);
        expect(e.getMonth()).toBe(0);
        expect(e.getDate()).toBe(12);
        expect(e.getHours()).toBe(15);
        expect(e.getMinutes()).toBe(13);
        expect(e.getSeconds()).toBe(11);
    });

    it("does not return the bounds of a contiguous span of months if there is a week of the month selected that will break the continuity", () => {
        const p = new Period(
            undefined,
            undefined,
            {
                intWeek: [ 2, 3 ],
            },
            {
                intMonth: [ 5, 6, 7 ],
            },
            undefined,
        );
        const d = new Date(2016, 5, 15, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(5);
        expect(s.getDate()).toBe(8);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2016);
        expect(e.getMonth()).toBe(5);
        expect(e.getDate()).toBe(22);
        expect(e.getHours()).toBe(0);
        expect(e.getMinutes()).toBe(0);
        expect(e.getSeconds()).toBe(0);
    });

    it("does not return the bounds of a contiguous span of months if there is a day selected that will break the continuity", () => {
        const p = new Period(
            undefined,
            {
                intDay: [ 13, 14, 15, 16, 17 ],
            },
            undefined,
            {
                intMonth: [ 5, 6, 7 ],
            },
            undefined,
        );
        const d = new Date(2016, 5, 15, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(5);
        expect(s.getDate()).toBe(13);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2016);
        expect(e.getMonth()).toBe(5);
        expect(e.getDate()).toBe(17);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("does not return the bounds of a contiguous span of months if there is a time of day selected that will break the continuity", () => {
        const p = new Period(
            [
                GENERIC_DAY_TIME_BAND,
            ],
            undefined,
            undefined,
            {
                intMonth: [ 5, 6, 7 ],
            },
            undefined,
        );
        const d = new Date(2016, 5, 15, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(5);
        expect(s.getDate()).toBe(15);
        expect(s.getHours()).toBe(12);
        expect(s.getMinutes()).toBe(34);
        expect(s.getSeconds()).toBe(56);

        expect(e.getFullYear()).toBe(2016);
        expect(e.getMonth()).toBe(5);
        expect(e.getDate()).toBe(15);
        expect(e.getHours()).toBe(15);
        expect(e.getMinutes()).toBe(13);
        expect(e.getSeconds()).toBe(11);
    });

    it("does not return the bounds of a contiguous span of weeks of the month if there is a day selected that will break the continuity", () => {
        const p = new Period(
            undefined,
            {
                intDay: [ 3, 4, 5, 6, 7 ],
            },
            {
                intWeek: [ 1, 2 ],
            },
            {
                intMonth: [ 6 ],
            },
            undefined,
        );
        const d = new Date(2021, 5, 10, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(5);
        expect(s.getDate()).toBe(8);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(5);
        expect(e.getDate()).toBe(12);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("does not return the lowest of a contiguous span of weeks of the year if there is a day selected that will break the continuity", () => {
        const p = new Period(
            undefined,
            {
                intDay: [ 2, 3, 4 ],
            },
            {
                intWeek: [ 1, 2 ],
            },
            undefined,
            [ 2021 ],
        );
        const d = new Date(2021, 0, 12, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(11);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(0);
        expect(e.getDate()).toBe(13);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("does not return the bounds of a contiguous span of days of the year if there is a time of day selected that will break the continuity", () => {
        const p = new Period(
            [
                GENERIC_DAY_TIME_BAND,
            ],
            {
                intDay: [ 4, 5, 6, 7 ],
            },
            undefined,
            undefined,
            [ 2021 ],
        );
        const d = new Date(2021, 0, 6, 13, 45, 58);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(6);
        expect(s.getHours()).toBe(12);
        expect(s.getMinutes()).toBe(34);
        expect(s.getSeconds()).toBe(56);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(0);
        expect(e.getDate()).toBe(6);
        expect(e.getHours()).toBe(15);
        expect(e.getMinutes()).toBe(13);
        expect(e.getSeconds()).toBe(11);
    });

    it("does not return the bounds of a contiguous span of days of the month if there is a time of day selected that will break the continuity", () => {
        const p = new Period(
            [
                GENERIC_DAY_TIME_BAND,
            ],
            {
                intDay: [ 4, 5, 6, 7, 8 ],
            },
            undefined,
            {
                intMonth: [ 1 ],
            },
            undefined,
        );
        const d = new Date(2021, 0, 6, 13, 45, 58);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(6);
        expect(s.getHours()).toBe(12);
        expect(s.getMinutes()).toBe(34);
        expect(s.getSeconds()).toBe(56);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(0);
        expect(e.getDate()).toBe(6);
        expect(e.getHours()).toBe(15);
        expect(e.getMinutes()).toBe(13);
        expect(e.getSeconds()).toBe(11);
    });

    it("does not return the lowest of a contiguous span of days of the week if there is a time of day selected that will break the continuity", () => {
        const p = new Period(
            [
                GENERIC_DAY_TIME_BAND,
            ],
            {
                intDay: [ 2, 3, 4 ],
            },
            {
                allWeeks: null,
            },
            {
                intMonth: [ 1 ],
            },
            undefined,
        );
        const d = new Date(2021, 0, 6, 13, 45, 58);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(6);
        expect(s.getHours()).toBe(12);
        expect(s.getMinutes()).toBe(34);
        expect(s.getSeconds()).toBe(56);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(0);
        expect(e.getDate()).toBe(6);
        expect(e.getHours()).toBe(15);
        expect(e.getMinutes()).toBe(13);
        expect(e.getSeconds()).toBe(11);
    });

    it("throws when encountering an unrecognized month format", () => {
        const p = new Period(
            undefined,
            undefined,
            undefined,
            UNRECOGNIZED_OPTION,
            undefined,
        );
        const d = new Date(2021, 0, 6, 13, 45, 58);
        expect(() => boundariesOfPeriodOccurrence(p, d)).toThrow();
    });

    it("throws when encountering an unrecognized week format", () => {
        const p = new Period(
            undefined,
            undefined,
            UNRECOGNIZED_OPTION,
            undefined,
            undefined,
        );
        const d = new Date(2021, 0, 6, 13, 45, 58);
        expect(() => boundariesOfPeriodOccurrence(p, d)).toThrow();
    });

    it("throws when encountering an unrecognized day format", () => {
        const p = new Period(
            undefined,
            UNRECOGNIZED_OPTION,
            undefined,
            {
                allMonths: null,
            },
            undefined,
        );
        const d = new Date(2021, 0, 6, 13, 45, 58);
        expect(() => boundariesOfPeriodOccurrence(p, d)).toThrow();
    });

    it("throws when encountering an empty Period", () => {
        const p = new Period(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const d = new Date(2021, 0, 6, 13, 45, 58);
        expect(() => boundariesOfPeriodOccurrence(p, d)).toThrow();
    });

    it("throws when encountering a Period with days, but no coarser unit of time", () => {
        expect(() => new Period(
            undefined,
            {
                intDay: [ 1 ],
            },
            undefined,
            undefined,
            undefined,
        )).toThrow();
    });

    it("throws when encountering a Period with weeks, but no coarser unit of time", () => {
        expect(() => new Period(
            undefined,
            undefined,
            {
                intWeek: [ 1 ],
            },
            undefined,
            undefined,
        )).toThrow();
    });

    it("dayOf.*.intNamedDays works", () => {
        const p = new Period( // The second Friday of any month.
            undefined,
            {
                dayOf: {
                    second: {
                        intNamedDays: NamedDay_intNamedDays_friday,
                    },
                },
            },
            undefined,
            {
                allMonths: null,
            },
            undefined,
        );
        const d = new Date(2021, 4, 14, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(4);
        expect(s.getDate()).toBe(14);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        const nonMatch = new Date(2021, 4, 15, 12, 34, 56);
        const s2 = boundariesOfPeriodOccurrence(p, nonMatch);
        expect(s2).toBeNull();
    });

    test.concurrent.each([
        [ "first", new Date(2021, 6, 2, 12, 0, 0) ],
        [ "second", new Date(2021, 6, 9, 12, 0, 0) ],
        [ "third", new Date(2021, 6, 16, 12, 0, 0) ],
        [ "fourth", new Date(2021, 6, 23, 12, 0, 0) ],
        [ "fifth", new Date(2021, 6, 30, 12, 0, 0) ],
    ])(`dayOf.* works on the %s friday`, async (occ, day) => {
        const p = new Period(
            undefined,
            {
                dayOf: {
                    [occ]: {
                        intNamedDays: NamedDay_intNamedDays_friday,
                    },
                } as any,
            },
            undefined,
            {
                allMonths: null,
            },
            undefined,
        );
        const d = day;
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();

        const nonMatch = addDays(day, 1);
        const s2 = boundariesOfPeriodOccurrence(p, nonMatch);
        expect(s2).toBeNull();
    });

    it("dayOf[non-sense key] throws", () => { // Pretty much for test coverage...
        const p = new Period(
            undefined,
            {
                dayOf: {
                    "asdfzxclbkqrb": {
                        intNamedDays: NamedDay_intNamedDays_friday,
                    },
                } as any,
            },
            undefined,
            {
                allMonths: null,
            },
            undefined,
        );
        const d = new Date(2021, 4, 14, 12, 34, 56);
        expect(() => boundariesOfPeriodOccurrence(p, d)).toThrow();
    });

    it("dayOf.*.intNamedDays works", () => {
        const p = new Period( // The second Friday of any month.
            undefined,
            {
                dayOf: {
                    second: {
                        intNamedDays: NamedDay_intNamedDays_friday,
                    },
                },
            },
            undefined,
            {
                allMonths: null,
            },
            undefined,
        );
        const d = new Date(2021, 4, 14, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(4);
        expect(s.getDate()).toBe(14);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(4);
        expect(e.getDate()).toBe(14);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);

        const nonMatch = new Date(2021, 4, 15, 12, 34, 56);
        const s2 = boundariesOfPeriodOccurrence(p, nonMatch);
        expect(s2).toBeNull();
    });

    it("dayOf.*.bitNamedDays works", () => {
        const p = new Period( // The second Friday of any month.
            undefined,
            {
                dayOf: {
                    second: {
                        bitNamedDays: new Uint8ClampedArray([
                            FALSE_BIT,
                            FALSE_BIT,
                            FALSE_BIT,
                            TRUE_BIT, // Wednesday
                            TRUE_BIT, // Thursday
                            TRUE_BIT, // Friday
                            FALSE_BIT,
                        ]),
                    },
                },
            },
            undefined,
            {
                allMonths: null,
            },
            undefined,
        );
        const d = new Date(2021, 4, 13, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(4);
        expect(s.getDate()).toBe(12);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(4);
        expect(e.getDate()).toBe(14);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);

        const nonMatch = new Date(2021, 4, 15, 12, 34, 56);
        const s2 = boundariesOfPeriodOccurrence(p, nonMatch);
        expect(s2).toBeNull();
    });

    it("months.bitMonth works", () => {
        const p = new Period(
            undefined,
            undefined,
            undefined,
            {
                bitMonth: new Uint8ClampedArray([ TRUE_BIT, TRUE_BIT, TRUE_BIT, FALSE_BIT ]), // Jan, Feb, and Mar
            },
            [ 2016 ],
        );
        const d = new Date(2016, 1, 15, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(1);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2016);
        expect(e.getMonth()).toBe(2);
        expect(e.getDate()).toBe(31);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);

        const d2 = new Date(2016, 4, 15, 12, 34, 56);
        const s2 = boundariesOfPeriodOccurrence(p, d2);
        expect(s2).toBeNull();
    });

    it("weeks.bitWeek works", () => {
        const p = new Period(
            undefined,
            undefined,
            {
                bitWeek: new Uint8ClampedArray([ TRUE_BIT, TRUE_BIT, FALSE_BIT ]),
            },
            {
                allMonths: null,
            },
            [ 2016 ],
        );
        const d = new Date(2016, 1, 12, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(1);
        expect(s.getDate()).toBe(1);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2016);
        expect(e.getMonth()).toBe(1);
        expect(e.getDate()).toBe(15);
        expect(e.getHours()).toBe(0);
        expect(e.getMinutes()).toBe(0);
        expect(e.getSeconds()).toBe(0);

        const d2 = new Date(2016, 1, 15, 12, 34, 56);
        const s2 = boundariesOfPeriodOccurrence(p, d2);
        expect(s2).toBeNull();
    });

    it("days.bitDay works", () => {
        const p = new Period(
            undefined,
            {
                bitDay: new Uint8ClampedArray([ TRUE_BIT, TRUE_BIT, TRUE_BIT, FALSE_BIT ]), // Sunday, Monday, and Tuesday
            },
            {
                allWeeks: null,
            },
            {
                allMonths: null,
            },
            [ 2021 ],
        );
        const d = new Date(2021, 4, 17, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(4);
        expect(s.getDate()).toBe(16);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(4);
        expect(e.getDate()).toBe(18);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);

        const d2 = new Date(2021, 4, 19, 12, 34, 56);
        const s2 = boundariesOfPeriodOccurrence(p, d2);
        expect(s2).toBeNull();
    });

    it("rolls back to the beginning of a timespan that spans midnight", () => {
        const p = new Period(
            [
                new DayTimeBand( // Starts the day
                    new DayTime(
                        0,
                        0,
                        0,
                    ),
                    new DayTime(
                        16,
                        0,
                        0,
                    ),
                ),
                new DayTimeBand( // Ends the day
                    new DayTime(
                        18,
                        0,
                        0,
                    ),
                    new DayTime(
                        23,
                        59,
                        59,
                    ),
                ),
            ],
            {
                intDay: [ 16, 17 ],
            },
            undefined,
            {
                allMonths: null,
            },
            [ 2021 ],
        );
        const d = new Date(2021, 4, 17, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(4);
        expect(s.getDate()).toBe(16);
        expect(s.getHours()).toBe(18);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(4);
        expect(e.getDate()).toBe(17);
        expect(e.getHours()).toBe(16);
        expect(e.getMinutes()).toBe(0);
        expect(e.getSeconds()).toBe(0);

        const p2 = new Period(
            [
                new DayTimeBand( // Starts the day
                    undefined, // Testing defaulting
                    new DayTime(
                        16,
                        0,
                        0,
                    ),
                ),
                new DayTimeBand( // Ends the day
                    new DayTime(
                        18,
                        0,
                        0,
                    ),
                    undefined, // Testing defaulting
                ),
            ],
            {
                intDay: [ 16, 17 ],
            },
            undefined,
            {
                allMonths: null,
            },
            [ 2021 ],
        );
        const d2 = new Date(2021, 4, 17, 12, 34, 56);
        const r2 = boundariesOfPeriodOccurrence(p2, d2);
        expect(r2).not.toBeNull();
        const [ s2, e2 ] = r2;
        expect(s2.getFullYear()).toBe(2021);
        expect(s2.getMonth()).toBe(4);
        expect(s2.getDate()).toBe(16);
        expect(s2.getHours()).toBe(18);
        expect(s2.getMinutes()).toBe(0);
        expect(s2.getSeconds()).toBe(0);

        expect(e2.getFullYear()).toBe(2021);
        expect(e2.getMonth()).toBe(4);
        expect(e2.getDate()).toBe(17);
        expect(e2.getHours()).toBe(16);
        expect(e2.getMinutes()).toBe(0);
        expect(e2.getSeconds()).toBe(0);
    });

    it("rolls back to the beginning of a span of days that partially spans two years", () => {
        const p = new Period(
            undefined,
            {
                intDay: [ 1, 2, 365, 366 ],
            },
            undefined,
            undefined,
            [ 2020, 2021 ],
        );
        const d = new Date(2021, 0, 1, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2020);
        expect(s.getMonth()).toBe(11);
        expect(s.getDate()).toBe(30);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(0);
        expect(e.getDate()).toBe(2);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("rolls back to the beginning of a span of days that partially spans two months", () => {
        const p = new Period(
            undefined,
            {
                intDay: [ 1, 2, 30, 31 ],
            },
            undefined,
            {
                allMonths: null,
            },
            [ 2021 ],
        );
        const d = new Date(2021, 4, 1, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(3);
        expect(s.getDate()).toBe(30);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(4);
        expect(e.getDate()).toBe(2);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("rolls back to the beginning of a span of days that partially spans two weeks", () => {
        const p = new Period(
            undefined,
            {
                intDay: [ 1, 2, 6, 7 ],
            },
            {
                allWeeks: null,
            },
            {
                allMonths: null,
            },
            [ 2021 ],
        );
        const d = new Date(2021, 4, 16, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(4);
        expect(s.getDate()).toBe(14);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(4);
        expect(e.getDate()).toBe(17);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("rolls back to the beginning of a span of weeks that partially spans two months", () => {
        const p = new Period(
            undefined,
            undefined,
            {
                intWeek: [ 1, 2, 5 ],
            },
            {
                allMonths: null,
            },
            [ 2021 ],
        );
        const d = new Date(2021, 4, 3, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(3);
        expect(s.getDate()).toBe(23);
        /**
         * These next expectations may seem incorrect, but they are correct.
         * When you use "week 5" to subtract from the _end_ of a month, you are
         * removing seven days exactly from a time that ends with 23:59:59.
         */
        expect(s.getHours()).toBe(23);
        expect(s.getMinutes()).toBe(59);
        expect(s.getSeconds()).toBe(59);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(4);
        expect(e.getDate()).toBe(15);
        expect(e.getHours()).toBe(0);
        expect(e.getMinutes()).toBe(0);
        expect(e.getSeconds()).toBe(0);
    });

    it("rolls back to the beginning of a span of weeks that partially spans two months", () => {
        const p = new Period(
            undefined,
            undefined,
            {
                intWeek: [ 1, 2, 4, 5 ],
            },
            {
                allMonths: null,
            },
            [ 2021 ],
        );
        const d = new Date(2021, 4, 10, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(3);
        expect(s.getDate()).toBe(22);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(4);
        expect(e.getDate()).toBe(15);
        expect(e.getHours()).toBe(0);
        expect(e.getMinutes()).toBe(0);
        expect(e.getSeconds()).toBe(0);
    });

    it("rolls back to the beginning of a span of weeks that partially spans two years", () => {
        const p = new Period(
            undefined,
            undefined,
            {
                intWeek: [ 1, 53 ],
            },
            undefined,
            [ 2020, 2021 ],
        );
        const d = new Date(2021, 0, 3, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2020);
        expect(s.getMonth()).toBe(11);
        expect(s.getDate()).toBe(25);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(0);
        expect(e.getDate()).toBe(8);
        expect(e.getHours()).toBe(0);
        expect(e.getMinutes()).toBe(0);
        expect(e.getSeconds()).toBe(0);
    });

    it("rolls back to the beginning of a span of months that partially spans two years", () => {
        const p = new Period(
            undefined,
            undefined,
            undefined,
            {
                intMonth: [ 1, 2, 11, 12 ],
            },
            [ 2020, 2021 ],
        );
        const d = new Date(2021, 1, 3, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2020);
        expect(s.getMonth()).toBe(10);
        expect(s.getDate()).toBe(1);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(1);
        expect(e.getDate()).toBe(28);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("rolls back to the beginning of a span of weeks that does NOT partially span two months", () => {
        const p = new Period(
            undefined,
            undefined,
            {
                intWeek: [ 1, 2, 4, 5 ],
            },
            {
                intMonth: [ 5 ],
            },
            [ 2021 ],
        );
        const d = new Date(2021, 4, 10, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(4);
        expect(s.getDate()).toBe(1);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(4);
        expect(e.getDate()).toBe(15);
        expect(e.getHours()).toBe(0);
        expect(e.getMinutes()).toBe(0);
        expect(e.getSeconds()).toBe(0);
    });

    it("rolls back to the beginning of a span of weeks that does NOT partially "
        + "because the fifth week is disabled", () => {
        const p = new Period(
            undefined,
            undefined,
            {
                intWeek: [ 1, 2, 4 ],
            },
            {
                intMonth: [ 4, 5 ],
            },
            [ 2021 ],
        );
        const d = new Date(2021, 4, 10, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(4);
        expect(s.getDate()).toBe(1);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(4);
        expect(e.getDate()).toBe(15);
        expect(e.getHours()).toBe(0);
        expect(e.getMinutes()).toBe(0);
        expect(e.getSeconds()).toBe(0);
    });

    it("rolls back to the beginning of a span of weeks that does NOT partially span two years", () => {
        const p = new Period(
            undefined,
            undefined,
            {
                intWeek: [ 1, 2, 52, 53 ],
            },
            undefined,
            [ 2021 ],
        );
        const d = new Date(2021, 0, 10, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(1);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(0);
        expect(e.getDate()).toBe(15);
        expect(e.getHours()).toBe(0);
        expect(e.getMinutes()).toBe(0);
        expect(e.getSeconds()).toBe(0);
    });

    it("rolls back to the beginning of a span of days that does NOT partially span two years", () => {
        const p = new Period(
            undefined,
            {
                intDay: [ 1, 365, 366 ],
            },
            undefined,
            undefined,
            [ 2021 ],
        );
        const d = new Date(2021, 0, 1, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(1);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(0);
        expect(e.getDate()).toBe(1);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("rolls back to the beginning of a span of days that does NOT partially span two months", () => {
        const p = new Period(
            undefined,
            {
                intDay: [ 1, 2, 30, 31 ],
            },
            undefined,
            {
                intMonth: [ 5 ],
            },
            undefined,
        );
        const d = new Date(2021, 4, 1, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(4);
        expect(s.getDate()).toBe(1);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(4);
        expect(e.getDate()).toBe(2);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("rolls back to the beginning of a span of days that does NOT partially span two weeks", () => {
        const p = new Period(
            undefined,
            {
                intDay: [ 1, 2, 3, 6, 7 ],
            },
            {
                intWeek: [ 2 ],
            },
            {
                allMonths: null,
            },
            [ 2021 ],
        );
        const d = new Date(2021, 4, 10, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(4);
        expect(s.getDate()).toBe(7);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(4);
        expect(e.getDate()).toBe(11);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("defaults daytime start times correctly", () => {
        const p1 = new Period(
            [
                new DayTimeBand(
                    undefined,
                    new DayTime(
                        15,
                        13,
                        11,
                    ),
                ),
            ],
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const d1 = new Date(2021, 4, 10, 12, 34, 56);
        const s1 = boundariesOfPeriodOccurrence(p1, d1);
        expect(s1).not.toBeNull();

        const p2 = new Period(
            [
                new DayTimeBand(
                    undefined,
                    new DayTime(
                        18,
                        undefined,
                        undefined,
                    ),
                ),
            ],
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const d2 = new Date(2021, 4, 10, 12, 34, 56);
        const s2 = boundariesOfPeriodOccurrence(p2, d2);
        expect(s2).not.toBeNull();
    });

    it("defaults daytime end times correctly", () => {
        const p1 = new Period(
            [
                new DayTimeBand(
                    new DayTime(
                        12,
                        34,
                        56,
                    ),
                    undefined,
                ),
            ],
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const d1 = new Date(2021, 4, 10, 12, 34, 56);
        const s1 = boundariesOfPeriodOccurrence(p1, d1);
        expect(s1).not.toBeNull();

        const p2 = new Period(
            [
                new DayTimeBand(
                    new DayTime(
                        8,
                        undefined,
                        undefined,
                    ),
                    undefined,
                ),
            ],
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const d2 = new Date(2021, 4, 10, 12, 34, 56);
        const s2 = boundariesOfPeriodOccurrence(p2, d2);
        expect(s2).not.toBeNull();
    });

    test.todo("Test dayOf without months specified...");

    it("rolls forward to the end of a timespan that spans midnight", () => {
        const p = new Period(
            [
                new DayTimeBand( // Starts the day
                    new DayTime(
                        0,
                        0,
                        0,
                    ),
                    new DayTime(
                        16,
                        0,
                        0,
                    ),
                ),
                new DayTimeBand( // Ends the day
                    new DayTime(
                        18,
                        0,
                        0,
                    ),
                    new DayTime(
                        23,
                        59,
                        59,
                    ),
                ),
            ],
            {
                intDay: [ 17, 18 ],
            },
            undefined,
            {
                allMonths: null,
            },
            [ 2021 ],
        );
        const d = new Date(2021, 4, 17, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(4);
        expect(s.getDate()).toBe(17);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(4);
        expect(e.getDate()).toBe(18);
        expect(e.getHours()).toBe(16);
        expect(e.getMinutes()).toBe(0);
        expect(e.getSeconds()).toBe(0);

        const p2 = new Period(
            [
                new DayTimeBand( // Starts the day
                    undefined, // Testing defaulting
                    new DayTime(
                        16,
                        0,
                        0,
                    ),
                ),
                new DayTimeBand( // Ends the day
                    new DayTime(
                        18,
                        0,
                        0,
                    ),
                    undefined, // Testing defaulting
                ),
            ],
            {
                intDay: [ 17, 18 ],
            },
            undefined,
            {
                allMonths: null,
            },
            [ 2021 ],
        );
        const d2 = new Date(2021, 4, 17, 12, 34, 56);
        const r2 = boundariesOfPeriodOccurrence(p2, d2);
        expect(r2).not.toBeNull();
        const [ s2, e2 ] = r2;
        expect(s2.getFullYear()).toBe(2021);
        expect(s2.getMonth()).toBe(4);
        expect(s2.getDate()).toBe(17);
        expect(s2.getHours()).toBe(0);
        expect(s2.getMinutes()).toBe(0);
        expect(s2.getSeconds()).toBe(0);

        expect(e2.getFullYear()).toBe(2021);
        expect(e2.getMonth()).toBe(4);
        expect(e2.getDate()).toBe(18);
        expect(e2.getHours()).toBe(16);
        expect(e2.getMinutes()).toBe(0);
        expect(e2.getSeconds()).toBe(0);
    });

    it("carries over to the next day of the week if the next week is supported", () => {
        const p = new Period(
            undefined,
            {
                intDay: [ 1, 2, 6, 7 ],
            },
            {
                allWeeks: null,
            },
            undefined,
            undefined,
        );
        const d = new Date(2021, 4, 14, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(4);
        expect(s.getDate()).toBe(14);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(4);
        expect(e.getDate()).toBe(17);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("carries over to the next day of the month if the next month is supported", () => {
        const p = new Period(
            undefined,
            {
                intDay: [ 31, 1, 2 ],
            },
            undefined,
            {
                allMonths: null,
            },
            undefined,
        );
        const d = new Date(2016, 0, 31, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(31);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2016);
        expect(e.getMonth()).toBe(1);
        expect(e.getDate()).toBe(2);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("carries over to the next day of the year if the next year is supported", () => {
        const p = new Period(
            undefined,
            {
                intDay: [ 365, 366, 1, 2 ],
            },
            undefined,
            undefined,
            [ 2021, 2022 ],
        );
        const d = new Date(2021, 11, 31, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(11);
        expect(s.getDate()).toBe(31);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2022);
        expect(e.getMonth()).toBe(0);
        expect(e.getDate()).toBe(2);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("carries over to the next week of the month if the next month is supported", () => {
        const p = new Period(
            undefined,
            undefined,
            {
                intWeek: [ 4, 5, 1 ],
            },
            {
                allMonths: null,
            },
            undefined,
        );
        const d = new Date(2021, 0, 28, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(22);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(1);
        expect(e.getDate()).toBe(8);
        expect(e.getHours()).toBe(0);
        expect(e.getMinutes()).toBe(0);
        expect(e.getSeconds()).toBe(0);
    });

    it("carries over to the next week of the year if the next year is supported", () => {
        const p = new Period(
            undefined,
            undefined,
            {
                intWeek: [ 52, 53, 1, 2 ],
            },
            undefined,
            [ 2021, 2022 ],
        );
        const d = new Date(2021, 11, 28, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(11);
        expect(s.getDate()).toBe(24);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2022);
        expect(e.getMonth()).toBe(0);
        expect(e.getDate()).toBe(15);
        expect(e.getHours()).toBe(0);
        expect(e.getMinutes()).toBe(0);
        expect(e.getSeconds()).toBe(0);
    });

    it("carries over to the next month of the year if the next year is supported", () => {
        const p = new Period(
            undefined,
            undefined,
            undefined,
            {
                intMonth: [ 1, 2, 12 ],
            },
            [ 2021, 2022 ],
        );
        const d = new Date(2021, 11, 28, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(11);
        expect(s.getDate()).toBe(1);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2022);
        expect(e.getMonth()).toBe(2);
        expect(e.getDate()).toBe(1);
        expect(e.getHours()).toBe(0);
        expect(e.getMinutes()).toBe(0);
        expect(e.getSeconds()).toBe(0);
    });

    it("does not overflow into the next month prior to checking that the next month is allowed", () => {
        const p = new Period(
            undefined,
            {
                intDay: [ // Every day except the 30th.
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31,
                ],
            },
            undefined,
            {
                intMonth: [ 1, 2 ],
            },
            undefined,
        );
        const d = new Date(2021, 0, 31, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(31);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(1);
        expect(e.getDate()).toBe(28);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });

    it("does not overflow into the next month if the max day in the whitelist exceeds the max day of the month", () => {
        const p = new Period(
            undefined,
            {
                intDay: [
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
                ],
            },
            undefined,
            {
                intMonth: [ 2, 3 ],
            },
            undefined,
        );
        const d = new Date(2021, 1, 20, 12, 34, 56);
        const r = boundariesOfPeriodOccurrence(p, d);
        expect(r).not.toBeNull();
        const [ s, e ] = r;
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(1);
        expect(s.getDate()).toBe(18);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);

        expect(e.getFullYear()).toBe(2021);
        expect(e.getMonth()).toBe(2);
        expect(e.getDate()).toBe(10);
        expect(e.getHours()).toBe(23);
        expect(e.getMinutes()).toBe(59);
        expect(e.getSeconds()).toBe(59);
    });
});
