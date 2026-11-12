import { TRUE_BIT, BERElement } from "@wildboar/asn1";
import { Period } from "../modules/SelectedAttributeTypes/Period.ta.mjs";
import { DayTimeBand } from "../modules/SelectedAttributeTypes/DayTimeBand.ta.mjs";
import { DayTime } from "../modules/SelectedAttributeTypes/DayTime.ta.mjs";
import { Period_days_bitDay_monday } from "../modules/SelectedAttributeTypes/Period-days-bitDay.ta.mjs";
import {
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
    MATCH_FLAG_HIGH_WORK_BUDGET,
} from "../types/matching.mjs";
import { periodsEquivalent, periodSetsEquivalent } from "./periodEquals.mjs";

/**
 * @summary Build a named BIT STRING with `TRUE_BIT` at the given indices.
 * @param {number[]} indices Named-bit positions to set.
 * @returns {Uint8ClampedArray} A BIT STRING long enough for the last index.
 * @function
 * @author Cursor Grok 4.6
 */
function bits(...indices: number[]): Uint8ClampedArray {
    const last = Math.max(-1, ...indices);
    const out = new Uint8ClampedArray(last + 1);
    for (const i of indices) {
        out[i] = TRUE_BIT;
    }
    return out;
}

/**
 * @summary `count` periods, each a different `intDay`.
 * @param {number} count How many periods to build. `intDay` is `1..count`.
 * @returns {Period[]} Periods that stay distinct after normalization.
 * @function
 * @author Cursor Grok 4.7
 */
function distinctDayPeriods(count: number): Period[] {
    const periods: Period[] = [];
    for (let day = 1; day <= count; day++) {
        periods.push(new Period(undefined, { intDay: [day] }, undefined, undefined, [2026]));
    }
    return periods;
}

describe("periodsEquivalent()", () => {
    describe.each([0, MATCH_FLAG_CONSTANT_TIME])("weekday versus ordinal semantics (M8), flags %i", (flags) => {
        it.each<{
            context: string;
            months: Period["months"];
            years: Period["years"];
        }>([
            { context: "days of a month", months: { intMonth: [1] }, years: [2026] },
            { context: "days of a year", months: undefined, years: [2026] },
        ])("distinguishes named Mondays from ordinal day 2 among $context", ({ months, years }) => {
            const mondays = new Period(
                undefined, { bitDay: bits(Period_days_bitDay_monday) }, undefined, months, years,
            );
            const ordinalDay2 = new Period(undefined, { intDay: [2] }, undefined, months, years);
            expect(periodsEquivalent(mondays, ordinalDay2, flags)).toBe(false);
            expect(periodsEquivalent(ordinalDay2, mondays, flags)).toBe(false);
            expect(periodsEquivalent(mondays, mondays, flags)).toBe(true);
            expect(periodSetsEquivalent([mondays], [ordinalDay2], flags)).toBe(false);
        });
    });

    it("matches bitDay monday against intDay 2", () => {
        expect(periodsEquivalent(
            new Period(undefined, { bitDay: bits(Period_days_bitDay_monday) }),
            new Period(undefined, { intDay: [2] }),
        )).toBe(true);
    });

    it("matches every-Monday encodings that differ only by allWeeks", () => {
        expect(periodsEquivalent(
            new Period(undefined, { intDay: [2] }, { allWeeks: null }),
            new Period(undefined, { intDay: [2] }),
        )).toBe(true);
    });

    it("does not match days-of-week against days-of-month", () => {
        expect(periodsEquivalent(
            new Period(undefined, { intDay: [2] }),
            new Period(undefined, { intDay: [2] }, undefined, { allMonths: null }),
        )).toBe(false);
    });

    it("matches DayTimeBand SETs regardless of order", () => {
        const morning = new DayTimeBand(new DayTime(9), new DayTime(12));
        const afternoon = new DayTimeBand(new DayTime(13), new DayTime(17));
        expect(periodsEquivalent(
            new Period([ morning, afternoon ]),
            new Period([ afternoon, morning ]),
        )).toBe(true);
    });
});

describe("periodSetsEquivalent()", () => {
    it("matches two SETs that list the same Periods in different order", () => {
        const monday = new Period(undefined, { intDay: [2] });
        const friday = new Period(undefined, { intDay: [6] });
        expect(periodSetsEquivalent([ monday, friday ], [ friday, monday ])).toBe(true);
        expect(periodSetsEquivalent(
            [ monday, friday ].values(),
            [ friday, monday ].values(),
        )).toBe(true);
        expect(periodSetsEquivalent([ monday ].values(), [ monday, monday ].values())).toBe(false);
    });

    it("matches a BIT STRING encoding of one member against INTEGER in the other SET", () => {
        const asserted = [
            new Period(undefined, { bitDay: bits(Period_days_bitDay_monday) }),
            new Period(undefined, { intDay: [6] }),
        ];
        const stored = [
            new Period(undefined, { intDay: [6] }),
            new Period(undefined, { intDay: [2] }),
        ];
        expect(periodSetsEquivalent(asserted, stored)).toBe(true);
    });

    it("does not match SETs of different cardinality", () => {
        const monday = new Period(undefined, { intDay: [2] });
        expect(periodSetsEquivalent([ monday ], [ monday, monday ])).toBe(false);
    });

    it("does not match SETs that differ by one Period", () => {
        const monday = new Period(undefined, { intDay: [2] });
        const friday = new Period(undefined, { intDay: [6] });
        expect(periodSetsEquivalent([ monday, friday ], [ monday, monday ])).toBe(false);
    });

    it("matches under MATCH_FLAG_CONSTANT_TIME", () => {
        const monday = new Period(undefined, { intDay: [2] });
        const friday = new Period(undefined, { intDay: [6] });
        expect(periodSetsEquivalent(
            [ monday, friday ],
            [ friday, monday ],
            MATCH_FLAG_CONSTANT_TIME,
        )).toBe(true);
        expect(periodSetsEquivalent(
            [ monday, friday ],
            [ monday, monday ],
            MATCH_FLAG_CONSTANT_TIME,
        )).toBe(false);
    });

    it.each([14, 45, 128])("compares %i valid periods without a work-budget-dependent answer (M28)", (count) => {
        const asserted = distinctDayPeriods(count);
        const stored = [...asserted].reverse();
        const original = [...asserted];
        for (const flags of [0, MATCH_FLAG_CONSTANT_TIME, MATCH_FLAG_HIGH_WORK_BUDGET,
            MATCH_FLAG_CONSTANT_TIME | MATCH_FLAG_HIGH_WORK_BUDGET | MATCH_FLAG_DEBUG]) {
            expect(periodSetsEquivalent(asserted, stored, flags)).toBe(true);
            expect(periodSetsEquivalent(asserted, [...stored.slice(1), stored[1]], flags)).toBe(false);
        }
        expect(asserted).toEqual(original);
    });

    it("canonicalizes open string extensions instead of hashing BER fragmentation (M28)", () => {
        const primitive = new BERElement();
        primitive.fromBytes(new Uint8Array([0x04, 0x02, 1, 2]));
        const constructed = new BERElement();
        constructed.fromBytes(new Uint8Array([0x24, 0x06, 0x04, 0x01, 1, 0x04, 0x01, 2]));
        const a = new Period(undefined, { intDay: [2] }, undefined, undefined, undefined, [primitive]);
        const b = new Period(undefined, { intDay: [2] }, undefined, undefined, undefined, [constructed]);
        expect(periodsEquivalent(a, b)).toBe(true);
        expect(periodSetsEquivalent([a], [b], MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        const changed = new Period(undefined, { intDay: [2] }, undefined, undefined, undefined, []);
        expect(periodSetsEquivalent([a], [changed])).toBe(false);
    });
});
