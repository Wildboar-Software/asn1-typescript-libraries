import { TRUE_BIT } from "@wildboar/asn1";
import { Period } from "../modules/SelectedAttributeTypes/Period.ta.mjs";
import { DayTimeBand } from "../modules/SelectedAttributeTypes/DayTimeBand.ta.mjs";
import { DayTime } from "../modules/SelectedAttributeTypes/DayTime.ta.mjs";
import { Period_days_bitDay_monday } from "../modules/SelectedAttributeTypes/Period-days-bitDay.ta.mjs";
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

describe("periodsEquivalent()", () => {
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
});
