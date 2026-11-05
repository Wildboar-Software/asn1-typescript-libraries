// Run with `npx vitest bench --run src/lib/matching/context/temporalContext.bench.mts`
// from packages/x500.
import { describe, expect, test } from "vitest";
import { evaluateTemporalContextTyped } from "./temporalContext.mjs";
import {
    TimeSpecification,
} from "../../modules/SelectedAttributeTypes/TimeSpecification.ta.mjs";
import {
    type TimeAssertion,
} from "../../modules/SelectedAttributeTypes/TimeAssertion.ta.mjs";
import { Period } from "../../modules/SelectedAttributeTypes/Period.ta.mjs";
import { DayTimeBand } from "../../modules/SelectedAttributeTypes/DayTimeBand.ta.mjs";
import { DayTime } from "../../modules/SelectedAttributeTypes/DayTime.ta.mjs";
import { TimeAssertion_between } from "../../modules/SelectedAttributeTypes/TimeAssertion-between.ta.mjs";
import { TRUE } from "@wildboar/asn1";

const BEFORE = "before: greedy second-by-second cover";
const AFTER = "after: merge occurrence intervals";

/**
 * The previous `periodsEntirelyCoverInterval`: at each `t`, take the
 * farthest covering occurrence end and hop one second.
 */
function greedyCover (
    periods: Period[],
    start: Date,
    end: Date,
): boolean {
    if (start.valueOf() > end.valueOf()) {
        return false;
    }
    let t: Date = start;
    let steps = 0;
    while (t.valueOf() <= end.valueOf()) {
        steps += 1;
        if (steps > 1000) {
            return false;
        }
        let farthest: Date | null = null;
        for (const period of periods) {
            const boundaries: [ Date, Date ] | null = period.occurrences(t).next().value ?? null;
            if (!boundaries) {
                continue;
            }
            const [ lower, upper ] = boundaries;
            if (lower > t) {
                continue;
            }
            if ((farthest === null) || (upper.valueOf() > farthest.valueOf())) {
                farthest = upper;
            }
        }
        if (farthest === null) {
            return false;
        }
        t = new Date(farthest.valueOf() + 1000);
    }
    return true;
}

function oneSecondPeriod (hour: number, minute: number, second: number): Period {
    const time = new DayTime(hour, minute, second);
    return new Period([ new DayTimeBand(time, time) ]);
}

function periodsForSeconds (count: number, hour: number, minute: number, second: number): Period[] {
    const periods: Period[] = [];
    let h = hour;
    let m = minute;
    let s = second;
    for (let i = 0; i < count; i++) {
        periods.push(oneSecondPeriod(h, m, s));
        s += 1;
        if (s === 60) {
            s = 0;
            m += 1;
            if (m === 60) {
                m = 0;
                h += 1;
            }
        }
    }
    return periods;
}

const localEvaluate = evaluateTemporalContextTyped;
const localGreedy = greedyCover;

const start = new Date(2021, 4, 10, 9, 0, 0);
const end180 = new Date(2021, 4, 10, 9, 2, 59);
const periods180 = periodsForSeconds(180, 9, 0, 0);
const spec180 = new TimeSpecification({ periodic: periods180 });
const assertion180: TimeAssertion = {
    between: new TimeAssertion_between(start, end180, TRUE),
};

let sink = 0;

describe("periodsEntirelyCoverInterval", () => {
    test("180 one-second Periods covering 3 minutes", async ({ bench }) => {
        expect(localGreedy(periods180, start, end180)).toBe(true);
        expect(localEvaluate(assertion180, spec180)).toBe(true);
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink += localGreedy(periods180, start, end180) ? 1 : 0;
            }),
            bench(AFTER, () => {
                sink += localEvaluate(assertion180, spec180) ? 1 : 0;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });
});

export { sink };
