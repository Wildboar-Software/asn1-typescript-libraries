import { TRUE_BIT } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { Period, _encode_Period } from "../modules/SelectedAttributeTypes/Period.ta.mjs";
import { DayTimeBand } from "../modules/SelectedAttributeTypes/DayTimeBand.ta.mjs";
import { DayTime } from "../modules/SelectedAttributeTypes/DayTime.ta.mjs";
import { NamedDay_intNamedDays_monday } from "../modules/SelectedAttributeTypes/NamedDay-intNamedDays.ta.mjs";
import { NamedDay_bitNamedDays_monday, NamedDay_bitNamedDays_friday } from "../modules/SelectedAttributeTypes/NamedDay-bitNamedDays.ta.mjs";
import { Period_days_bitDay_sunday, Period_days_bitDay_monday } from "../modules/SelectedAttributeTypes/Period-days-bitDay.ta.mjs";
import {
    Period_weeks_bitWeek_week1,
    Period_weeks_bitWeek_week2,
    Period_weeks_bitWeek_week3,
    Period_weeks_bitWeek_week4,
    Period_weeks_bitWeek_week5,
} from "../modules/SelectedAttributeTypes/Period-weeks-bitWeek.ta.mjs";
import { Period_months_bitMonth_january } from "../modules/SelectedAttributeTypes/Period-months-bitMonth.ta.mjs";
import normalizePeriod from "./normalizePeriod.mjs";

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
 * @summary DER-encode a `Period` after `normalizePeriod`.
 * @param {Period} period The value to canonicalize and encode.
 * @returns {Uint8Array} DER contents of the canonical `Period`.
 * @function
 * @author Cursor Grok 4.6
 */
function der(period: Period): Uint8Array {
    return _encode_Period(normalizePeriod(period), DER).toBytes();
}

/**
 * @summary Assert two `Period` values have the same canonical DER.
 * @param {Period} a One `Period`.
 * @param {Period} b The other `Period`.
 * @function
 * @author Cursor Grok 4.6
 */
function expectSame(a: Period, b: Period): void {
    expect(der(a)).toEqual(der(b));
}

/**
 * @summary Assert two `Period` values have different canonical DER.
 * @param {Period} a One `Period`.
 * @param {Period} b The other `Period`.
 * @function
 * @author Cursor Grok 4.6
 */
function expectDifferent(a: Period, b: Period): void {
    expect(der(a)).not.toEqual(der(b));
}

describe("normalizePeriod()", () => {
    it("is a no-op when applied twice", () => {
        const period = new Period(
            undefined,
            { intDay: [2, 6] },
            { allWeeks: null },
            { intMonth: [1] },
            [1996],
        );
        const once = normalizePeriod(period);
        const twice = normalizePeriod(once);
        expect(_encode_Period(once, DER).toBytes()).toEqual(
            _encode_Period(twice, DER).toBytes(),
        );
    });

    it("treats bitDay monday as intDay 2 (X.520 10.2 NOTE 3)", () => {
        expectSame(
            new Period(undefined, { bitDay: bits(Period_days_bitDay_monday) }),
            new Period(undefined, { intDay: [2] }),
        );
    });

    it("sorts and de-duplicates intDay and ignores bitDay trailing zeros", () => {
        const padded = new Uint8ClampedArray(7);
        padded[Period_days_bitDay_sunday] = TRUE_BIT;
        padded[Period_days_bitDay_monday] = TRUE_BIT;
        expectSame(
            new Period(undefined, { bitDay: padded }),
            new Period(undefined, { intDay: [2, 1, 1] }),
        );
    });

    it("reduces example b (every Monday) from allWeeks to days alone", () => {
        // X.520 10.2 example b: { days intDay:{2} }
        expectSame(
            new Period(undefined, { intDay: [2] }, { allWeeks: null }),
            new Period(undefined, { intDay: [2] }),
        );
    });

    it("keeps allWeeks when days-of-week would otherwise become days-of-month", () => {
        // days + allWeeks + January = Mondays in January, not the 2nd of January
        expectDifferent(
            new Period(
                undefined,
                { intDay: [2] },
                { allWeeks: null },
                { intMonth: [1] },
            ),
            new Period(
                undefined,
                { intDay: [2] },
                undefined,
                { intMonth: [1] },
            ),
        );
    });

    it("keeps allMonths so intDay stays days-of-month (example e)", () => {
        // X.520 10.2 example e: first day of every month
        expectDifferent(
            new Period(undefined, { intDay: [1] }, undefined, { allMonths: null }),
            new Period(undefined, { intDay: [1] }),
        );
        expectSame(
            new Period(undefined, { intDay: [1] }, undefined, { allMonths: null }),
            new Period(undefined, { intDay: [1] }, undefined, { intMonth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }),
        );
    });

    it("omits allMonths when it does not change a coarser-only period", () => {
        expectSame(
            new Period(undefined, undefined, undefined, { allMonths: null }, [1996]),
            new Period(undefined, undefined, undefined, undefined, [1996]),
        );
    });

    it("does not turn weeks 1-5 of the year into allWeeks", () => {
        // Without months, intWeek is weeks of the year (1..53), not of the month.
        expectDifferent(
            new Period(undefined, undefined, { intWeek: [1, 2, 3, 4, 5] }),
            new Period(undefined, undefined, { allWeeks: null }),
        );
        expectSame(
            new Period(undefined, undefined, { intWeek: [1, 2, 3, 4, 5] }),
            new Period(undefined, undefined, { intWeek: [5, 1, 3, 2, 4] }),
        );
    });

    it("treats intWeek 1-5 with months as allWeeks of those months", () => {
        expectSame(
            new Period(
                undefined,
                { intDay: [7] },
                { intWeek: [1, 2, 3, 4, 5] },
                { intMonth: [1] },
            ),
            new Period(
                undefined,
                { intDay: [7] },
                { allWeeks: null },
                { intMonth: [1] },
            ),
        );
    });

    it("treats bitWeek 1-5 with months as allWeeks", () => {
        expectSame(
            new Period(
                undefined,
                undefined,
                { bitWeek: bits(
                    Period_weeks_bitWeek_week1,
                    Period_weeks_bitWeek_week2,
                    Period_weeks_bitWeek_week3,
                    Period_weeks_bitWeek_week4,
                    Period_weeks_bitWeek_week5,
                ) },
                { intMonth: [8] },
            ),
            new Period(
                undefined,
                undefined,
                { allWeeks: null },
                { intMonth: [8] },
            ),
        );
    });

    it("treats bitMonth january as intMonth 1", () => {
        expectSame(
            new Period(undefined, undefined, undefined, { bitMonth: bits(Period_months_bitMonth_january) }, [1996]),
            new Period(undefined, undefined, undefined, { intMonth: [1] }, [1996]),
        );
    });

    it("keeps August 1996 distinct from all of 1996 (example d)", () => {
        expectDifferent(
            new Period(undefined, undefined, undefined, { intMonth: [8] }, [1996]),
            new Period(undefined, undefined, undefined, undefined, [1996]),
        );
    });

    it("drops weeks when dayOf is present", () => {
        const dayOf = { first: { intNamedDays: NamedDay_intNamedDays_monday } };
        expectSame(
            new Period(undefined, { dayOf }, { allWeeks: null }, { intMonth: [8] }),
            new Period(undefined, { dayOf }, undefined, { intMonth: [8] }),
        );
    });

    it("treats a single-bit named day as intNamedDays", () => {
        const bitMonday = new Uint8ClampedArray(7);
        bitMonday[NamedDay_bitNamedDays_monday] = TRUE_BIT;
        expectSame(
            new Period(undefined, { dayOf: { second: { bitNamedDays: bitMonday } } }),
            new Period(undefined, { dayOf: { second: { intNamedDays: NamedDay_intNamedDays_monday } } }),
        );
    });

    it("keeps multi-bit named days in bit form and ignores trailing zeros", () => {
        const padded = new Uint8ClampedArray(7);
        padded[NamedDay_bitNamedDays_monday] = TRUE_BIT;
        padded[NamedDay_bitNamedDays_friday] = TRUE_BIT;
        const trimmed = bits(NamedDay_bitNamedDays_monday, NamedDay_bitNamedDays_friday);
        expectSame(
            new Period(undefined, { dayOf: { third: { bitNamedDays: padded } } }),
            new Period(undefined, { dayOf: { third: { bitNamedDays: trimmed } } }),
        );
        expectDifferent(
            new Period(undefined, { dayOf: { third: { bitNamedDays: trimmed } } }),
            new Period(undefined, { dayOf: { third: { intNamedDays: NamedDay_intNamedDays_monday } } }),
        );
    });

    it("omits DayTime DEFAULT minute and second", () => {
        const withDefaults = new Period([
            new DayTimeBand(
                new DayTime(9, 0, 0),
                new DayTime(17, 0, 0),
            ),
        ]);
        const compact = new Period([
            new DayTimeBand(
                new DayTime(9),
                new DayTime(17),
            ),
        ]);
        expectSame(withDefaults, compact);
    });

    it("treats a whole-day band as omitted timesOfDay", () => {
        expectSame(
            new Period([
                new DayTimeBand(
                    DayTimeBand.START_OF_DAY,
                    DayTimeBand.END_OF_DAY,
                ),
            ]),
            new Period(),
        );
    });

    it("omits timesOfDay when any band is the whole day", () => {
        const morning = new DayTimeBand(new DayTime(9), new DayTime(12));
        const wholeDay = new DayTimeBand(
            DayTimeBand.START_OF_DAY,
            DayTimeBand.END_OF_DAY,
        );
        expectSame(
            new Period([morning, wholeDay]),
            new Period(),
        );
    });

    it("sorts timesOfDay SET members", () => {
        const morning = new DayTimeBand(new DayTime(9), new DayTime(12));
        const afternoon = new DayTimeBand(new DayTime(13), new DayTime(17));
        expectSame(
            new Period([afternoon, morning]),
            new Period([morning, afternoon]),
        );
    });

    it("de-duplicates equal timesOfDay SET members", () => {
        const morning = new DayTimeBand(new DayTime(9), new DayTime(12));
        const morningAgain = new DayTimeBand(
            new DayTime(9, 0, 0),
            new DayTime(12, 0, 0),
        );
        expectSame(
            new Period([morning, morningAgain]),
            new Period([morning]),
        );
    });

    it("sorts and de-duplicates years", () => {
        expectSame(
            new Period(undefined, undefined, undefined, undefined, [1996, 1995, 1996]),
            new Period(undefined, undefined, undefined, undefined, [1995, 1996]),
        );
    });

    it("collapses all weekdays plus allWeeks in January to January", () => {
        expectSame(
            new Period(
                undefined,
                { intDay: [1, 2, 3, 4, 5, 6, 7] },
                { allWeeks: null },
                { intMonth: [1] },
            ),
            new Period(undefined, undefined, undefined, { intMonth: [1] }),
        );
    });

    it("does not treat week 1 of the year as week 1 of every month", () => {
        expectDifferent(
            new Period(undefined, undefined, { intWeek: [1] }),
            new Period(undefined, undefined, { intWeek: [1] }, { allMonths: null }),
        );
    });

    it("does not treat days-of-year as days-of-week", () => {
        expectDifferent(
            new Period(undefined, { intDay: [2] }, undefined, undefined, [1996]),
            new Period(undefined, { intDay: [2] }, { allWeeks: null }, undefined, [1996]),
        );
    });

    it("collapses all days of all months to an omitted period", () => {
        // If `months` were dropped before collapsing days, 1..31 would
        // be read as days-of-week and would not collapse.
        const daysOfMonth = Array.from({ length: 31 }, (_, i) => i + 1);
        const monthsOfYear = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        expectSame(
            new Period(
                undefined,
                { intDay: daysOfMonth },
                undefined,
                { intMonth: monthsOfYear },
            ),
            new Period(),
        );
    });

    it("omits allMonths then allWeeks when both are redundant for days-of-week", () => {
        const normalized = normalizePeriod(new Period(
            undefined,
            { intDay: [2] },
            { allWeeks: null },
            { allMonths: null },
        ));
        expect(normalized.weeks).toBeUndefined();
        expect(normalized.months).toBeUndefined();
        expectSame(
            normalized,
            new Period(undefined, { intDay: [2] }),
        );
    });
});
