import { startOfPeriod2 } from "@wildboar/x500/src/lib/utils/startOfPeriod";
import {
    Period,
    Period_months,
    _encode_Period_months,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/Period.ta";
import { DERElement } from "asn1-ts";
import { startOfYear } from "date-fns";
import { DER } from "asn1-ts/dist/node/functional";

describe("startOfPeriod()", () => {
    it("minimally works", () => {
        const p = new Period(
            undefined,
            undefined,
            undefined,
            undefined,
            [ 2016 ],
        );
        const d = new Date(2016, 6, 15, 12, 34, 56);
        const s = startOfPeriod2(p, d);
        expect(s).not.toBeNull();
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(1);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);
    });

    it("returns the lowest of a contiguous span of years", () => {
        const p = new Period(
            undefined,
            undefined,
            undefined,
            undefined,
            [ 2015, 2016 ],
        );
        const d = new Date(2016, 6, 15, 12, 34, 56);
        const s = startOfPeriod2(p, d);
        expect(s).not.toBeNull();
        expect(s.getFullYear()).toBe(2015);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(1);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);
    });

    it("returns the lowest of a contiguous span of months", () => {
        const p = new Period(
            undefined,
            undefined,
            undefined,
            {
                intMonth: [ 3, 4, 5, 6, 7 ],
            },
            undefined,
        );
        const d = new Date(2016, 6, 15, 12, 34, 56);
        const s = startOfPeriod2(p, d);
        expect(s).not.toBeNull();
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(2);
        expect(s.getDate()).toBe(1);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);
    });

    it("returns the lowest of a contiguous span of weeks of the year", () => {
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
        const s = startOfPeriod2(p, d);
        expect(s).not.toBeNull();
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(1);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);
    });

    it("returns the lowest of a contiguous span of weeks of the month", () => {
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
        const s = startOfPeriod2(p, d);
        expect(s).not.toBeNull();
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(3);
        expect(s.getDate()).toBe(8);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);
    });

    it("returns the lowest of a contiguous span of days of the year", () => {
        const p = new Period(
            undefined,
            {
                intDay: [ 16, 17, 18 ]
            },
            undefined,
            undefined,
            [ 2016 ],
        );
        const d = new Date(2016, 0, 18, 12, 34, 56);
        const s = startOfPeriod2(p, d);
        expect(s).not.toBeNull();
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(0);
        expect(s.getDate()).toBe(16);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);
    });

    it("returns the lowest of a contiguous span of days of the month", () => {
        const p = new Period(
            undefined,
            {
                intDay: [ 16, 17, 18 ]
            },
            undefined,
            {
                intMonth: [ 4 ],
            },
            undefined,
        );
        const d = new Date(2016, 3, 18, 12, 34, 56);
        const s = startOfPeriod2(p, d);
        expect(s).not.toBeNull();
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(3);
        expect(s.getDate()).toBe(16);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);
    });

    it("returns the lowest of a contiguous span of days of the week", () => {
        const p = new Period(
            undefined,
            {
                intDay: [ 4, 5, 6 ], // Wed, Thu, Fri
            },
            {
                allWeeks: null,
            },
            undefined,
            undefined,
        );
        const d = new Date(2021, 4, 14, 12, 34, 56);
        const s = startOfPeriod2(p, d);
        expect(s).not.toBeNull();
        expect(s.getFullYear()).toBe(2021);
        expect(s.getMonth()).toBe(4);
        expect(s.getDate()).toBe(12);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);
    });

    it("does not return the lowest of a contiguous span of years if there is a month selected that will break it", () => {
        const p = new Period(
            undefined,
            undefined,
            undefined,
            {
                intMonth: [ 6 ],
            },
            [ 2015, 2016 ],
        );
        const d = new Date(2016, 5, 15, 12, 34, 56);
        const s = startOfPeriod2(p, d);
        expect(s).not.toBeNull();
        expect(s.getFullYear()).toBe(2016);
        expect(s.getMonth()).toBe(5);
        expect(s.getDate()).toBe(1);
        expect(s.getHours()).toBe(0);
        expect(s.getMinutes()).toBe(0);
        expect(s.getSeconds()).toBe(0);
    });
});
