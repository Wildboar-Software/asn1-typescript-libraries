// Run with `npx vitest bench --run src/lib/matching/equality/timeSpecificationMatch.bench.mts`
// from packages/x500.
import { TRUE_BIT } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { Buffer } from "node:buffer";
import { describe, expect, test } from "vitest";
import { Period, _encode_Period } from "../../modules/SelectedAttributeTypes/Period.ta.mjs";
import { TimeSpecification } from "../../modules/SelectedAttributeTypes/TimeSpecification.ta.mjs";
import { Period_days_bitDay_monday } from "../../modules/SelectedAttributeTypes/Period-days-bitDay.ta.mjs";
import { DayTimeBand } from "../../modules/SelectedAttributeTypes/DayTimeBand.ta.mjs";
import { DayTime } from "../../modules/SelectedAttributeTypes/DayTime.ta.mjs";
import { normalizePeriod } from "../../utils/normalizePeriod.mjs";
import { periodSetsEquivalent } from "../../utils/periodEquals.mjs";
import { timeSpecificationMatchTyped } from "./timeSpecificationMatch.mjs";

const BEFORE = "before: DER-encode and base64-hash each Period";
const AFTER = "after: structural Period set equality";

function bits(...indices: number[]): Uint8ClampedArray {
    const last = Math.max(-1, ...indices);
    const out = new Uint8ClampedArray(last + 1);
    for (const i of indices) {
        out[i] = TRUE_BIT;
    }
    return out;
}

/**
 * The previous SET comparison: canonicalize, DER-encode, base64, sort.
 */
function periodHashKey (period: Period): string {
    const encoding = _encode_Period(normalizePeriod(period), DER).toBytes();
    return Buffer.from(
        encoding.buffer,
        encoding.byteOffset,
        encoding.byteLength,
    ).toString("base64");
}

function hashSetsEqual (asserted: Period[], stored: Period[]): boolean {
    if (asserted.length !== stored.length) {
        return false;
    }
    const storedPeriods = stored.map(periodHashKey).sort();
    const assertedPeriods = asserted.map(periodHashKey).sort();
    for (let i = 0; i < asserted.length; i++) {
        if (assertedPeriods[i] !== storedPeriods[i]) {
            return false;
        }
    }
    return true;
}

function fatPeriod (year: number, days: Period["days"]): Period {
    return new Period(
        [
            new DayTimeBand(new DayTime(9, 0, 0), new DayTime(12, 0, 0)),
            new DayTimeBand(new DayTime(13, 0, 0), new DayTime(17, 0, 0)),
        ],
        days,
        { allWeeks: null },
        { intMonth: [ 1, 5, 9 ] },
        [ year ],
    );
}

const storedPeriods: Period[] = [];
const assertedPeriods: Period[] = [];
for (let i = 0; i < 8; i++) {
    const year = 2021 + i;
    storedPeriods.push(fatPeriod(year, { intDay: [ 2 ] }));
    // Same times; one member uses bitDay monday, SET order reversed, months shuffled.
    assertedPeriods.push(new Period(
        [
            new DayTimeBand(new DayTime(13, 0, 0), new DayTime(17, 0, 0)),
            new DayTimeBand(new DayTime(9, 0, 0), new DayTime(12, 0, 0)),
        ],
        i === 0
            ? { bitDay: bits(Period_days_bitDay_monday) }
            : { intDay: [ 2 ] },
        { allWeeks: null },
        { intMonth: [ 9, 1, 5 ] },
        [ year ],
    ));
}
assertedPeriods.reverse();

const storedSpec = new TimeSpecification({ periodic: storedPeriods });
const assertedSpec = new TimeSpecification({ periodic: assertedPeriods });

const localHash = hashSetsEqual;
const localStructural = periodSetsEquivalent;
const localTyped = timeSpecificationMatchTyped;

let sink = 0;

describe("timeSpecificationMatch period set equality", () => {
    test("8 fat Periods, shuffled SET, mixed INTEGER/BIT STRING", async ({ bench }) => {
        expect(localHash(assertedPeriods, storedPeriods)).toBe(true);
        expect(localStructural(assertedPeriods, storedPeriods)).toBe(true);
        expect(localTyped(assertedSpec, storedSpec)).toBe(true);
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink += localHash(assertedPeriods, storedPeriods) ? 1 : 0;
            }),
            bench(AFTER, () => {
                sink += localStructural(assertedPeriods, storedPeriods) ? 1 : 0;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });
});

export { sink };
