import { TRUE_BIT } from "@wildboar/asn1";
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
        periods.push(new Period(undefined, { intDay: [day] }));
    }
    return periods;
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

    it("stops pairing after 100 inner-loop iterations", () => {
        // A successful pairing of n distinct members visits n(n+1)/2
        // indexes. 13 is 91 and finishes; 14 is 105 and stops.
        const thirteen = distinctDayPeriods(13);
        const fourteen = distinctDayPeriods(14);
        expect(periodSetsEquivalent(thirteen, thirteen.slice().reverse())).toBe(true);
        expect(periodSetsEquivalent(fourteen, fourteen.slice().reverse())).toBe(false);
    });

    it("allows 1000 pairing iterations when MATCH_FLAG_HIGH_WORK_BUDGET is set", () => {
        // 44 members is 990 iterations; 45 is 1035.
        const fortyFour = distinctDayPeriods(44);
        const fortyFive = distinctDayPeriods(45);
        expect(periodSetsEquivalent(
            fortyFour,
            fortyFour.slice().reverse(),
            MATCH_FLAG_HIGH_WORK_BUDGET,
        )).toBe(true);
        expect(periodSetsEquivalent(
            fortyFive,
            fortyFive.slice().reverse(),
            MATCH_FLAG_HIGH_WORK_BUDGET,
        )).toBe(false);
        expect(periodSetsEquivalent(
            fortyFour,
            fortyFour.slice().reverse(),
        )).toBe(false);
    });

    it("stops a constant-time mismatch that scans past the iteration cap", () => {
        // 11 distinct mismatches are not rejected by the n(n+1)/2
        // pre-check (66 <= 100). Constant-time scanning visits all
        // 121 pairs and stops on the 101st.
        const asserted = distinctDayPeriods(11);
        const stored: Period[] = [];
        for (let day = 21; day <= 31; day++) {
            stored.push(new Period(undefined, { intDay: [day] }));
        }
        const spy = vi.spyOn(console, "error").mockImplementation(() => {});
        try {
            expect(periodSetsEquivalent(
                asserted,
                stored,
                MATCH_FLAG_CONSTANT_TIME | MATCH_FLAG_DEBUG,
            )).toBe(false);
            expect(spy).toHaveBeenCalledTimes(1);
            expect(String(spy.mock.calls[0][0])).toContain("100");
        } finally {
            spy.mockRestore();
        }
    });

    it("logs when pairing exceeds the iteration cap and MATCH_FLAG_DEBUG is set", () => {
        const spy = vi.spyOn(console, "error").mockImplementation(() => {});
        try {
            const fourteen = distinctDayPeriods(14);
            expect(periodSetsEquivalent(
                fourteen,
                fourteen.slice().reverse(),
                MATCH_FLAG_DEBUG,
            )).toBe(false);
            expect(spy).toHaveBeenCalledTimes(1);
            expect(String(spy.mock.calls[0][0])).toContain("periodSetsEquivalent");
            expect(String(spy.mock.calls[0][0])).toContain("100");
        } finally {
            spy.mockRestore();
        }
    });
});
