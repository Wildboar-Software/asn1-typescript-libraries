import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import { TRUE, DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "@wildboar/asn1";
import {
    TimeSpecification,
    _decode_TimeSpecification,
    _encode_TimeSpecification,
} from "../../modules/SelectedAttributeTypes/TimeSpecification.ta.mjs";
import {
    type TimeAssertion,
    _encode_TimeAssertion,
} from "../../modules/SelectedAttributeTypes/TimeAssertion.ta.mjs";
import {
    Period,
} from "../../modules/SelectedAttributeTypes/Period.ta.mjs";
import {
    DayTimeBand,
} from "../../modules/SelectedAttributeTypes/DayTimeBand.ta.mjs";
import {
    DayTime,
} from "../../modules/SelectedAttributeTypes/DayTime.ta.mjs";
import { evaluateTemporalContext } from "./temporalContext.mjs";
import { MATCH_FLAG_HIGH_WORK_BUDGET } from "../../types/matching.mjs";
import { DER } from "@wildboar/asn1/functional";
import { TimeSpecification_time_absolute } from "../../modules/SelectedAttributeTypes/TimeSpecification-time-absolute.ta.mjs";
import { TimeAssertion_between } from "../../modules/SelectedAttributeTypes/TimeAssertion-between.ta.mjs";

/**
 * `count` clock times beginning at `hour:minute:second`, stepping
 * `stepSeconds` (1 = adjacent seconds, 2 = a one-second gap).
 */
function consecutiveDayTimes (
    count: number,
    hour: number,
    minute: number,
    second: number,
    stepSeconds: number,
): DayTime[] {
    const times: DayTime[] = [];
    let h: number = hour;
    let m: number = minute;
    let s: number = second;
    for (let i = 0; i < count; i++) {
        times.push(new DayTime(h, m, s));
        s += stepSeconds;
        while (s >= 60) {
            s -= 60;
            m += 1;
            if (m >= 60) {
                m -= 60;
                h += 1;
            }
        }
    }
    return times;
}

describe("evaluateTemporalContext", () => {
    it("matches an at-assertion against an absolute temporal context", () => {
        const assertion: TimeAssertion = {
            at: new Date(2026, 0, 1, 12, 13, 14),
        };
        const value = new TimeSpecification(
            {
                absolute: new TimeSpecification_time_absolute(
                    new Date(2026, 0, 1, 12, 13, 13),
                    new Date(2026, 0, 1, 12, 13, 15),
                ),
            },
        );
        let matches = evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(value, DER),
        );
        expect(matches).toBe(true);

        const negatedValue = new TimeSpecification(
            value.time,
            TRUE,
        );
        matches = evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(negatedValue, DER),
        );
        expect(matches).toBe(false);
    });

    it("matches an at-assertion against a periodic temporal context", () => {
        // 4 Jan 2026 is Sunday of the first X.520 week of 2026 (week containing the 4th).
        const assertion: TimeAssertion = {
            at: new Date(2026, 0, 4, 12, 13, 14),
        };
        const value = new TimeSpecification(
            {
                periodic: [
                    new Period(
                        undefined,
                        undefined,
                        {
                            intWeek: [1], // First week of the year
                        },
                    ),
                ],
            },
        );
        let matches = evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(value, DER),
        );
        expect(matches).toBe(true);

        const negatedValue = new TimeSpecification(
            value.time,
            TRUE,
        );
        matches = evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(negatedValue, DER),
        );
        expect(matches).toBe(false);
    });

    // I live in Florida, in the United States, which is UTC-04:00.
    // I am not sure if this test will work outside of my neighborhood.
    // Sorry if this breaks for you! Feel free to add a `.skip` in a PR if so.
    it("matches an at-assertion against an absolute temporal context with a timezone", () => {
        const assertion: TimeAssertion = {
            at: new Date(Date.UTC(2026, 0, 1, 12, 13, 14)),
        };
        const value = new TimeSpecification(
            {
                absolute: new TimeSpecification_time_absolute(
                    new Date(Date.UTC(2026, 0, 1, 13, 13, 13)),
                    new Date(Date.UTC(2026, 0, 1, 13, 13, 15)),
                ),
            },
            undefined,
            1, // I think this is the French time zone, or there about.
        );
        let matches = evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(value, DER),
        );
        expect(matches).toBe(true);

        const negatedValue = new TimeSpecification(
            value.time,
            TRUE,
            value.timeZone,
        );
        matches = evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(negatedValue, DER),
        );
        expect(matches).toBe(false);
    });

    it("matches a between assertion against an absolute temporal context", () => {
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2026, 0, 1, 12, 13, 12),
                new Date(2026, 0, 1, 12, 13, 14),
            ),
        };
        const value = new TimeSpecification(
            {
                absolute: new TimeSpecification_time_absolute(
                    new Date(2026, 0, 1, 12, 13, 13),
                    new Date(2026, 0, 1, 12, 13, 15),
                ),
            },
        );
        let matches = evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(value, DER),
        );
        // `entirely` defaults to `FALSE`, so the `between` range only has to
        // overlap with the time specification at some point.
        expect(matches).toBe(true);

        const negatedValue = new TimeSpecification(
            value.time,
            TRUE,
        );
        matches = evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(negatedValue, DER),
        );
        expect(matches).toBe(false);

        const entirelyAssertion: TimeAssertion = {
            between: new TimeAssertion_between(
                assertion.between.startTime,
                assertion.between.endTime,
                TRUE,
            ),
        };
        matches = evaluateTemporalContext(
            _encode_TimeAssertion(entirelyAssertion, DER),
            _encode_TimeSpecification(value, DER),
        );
        // `entirely` defaults to `FALSE`, so the `between` range only has to
        // overlap with the time specification at some point.
        expect(matches).toBe(false);

        const entirelyValue = new TimeSpecification(
            value.time,
            TRUE,
        );
        matches = evaluateTemporalContext(
            _encode_TimeAssertion(entirelyAssertion, DER),
            _encode_TimeSpecification(entirelyValue, DER),
        );
        expect(matches).toBe(true);
    });

    it("matches a between assertion against a periodic temporal context", () => {
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2026, 0, 5, 12, 13, 12),
                new Date(2026, 0, 11, 12, 13, 14),
            ),
        };
        const value = new TimeSpecification(
            {
                periodic: [
                    new Period(
                        undefined,
                        undefined,
                        {
                            intWeek: [1], // First week of the year
                        },
                    ),
                ],
            },
        );
        let matches = evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(value, DER),
        );
        expect(matches).toBe(true);

        const negatedValue = new TimeSpecification(
            value.time,
            TRUE,
        );
        matches = evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(negatedValue, DER),
        );
        expect(matches).toBe(false);

        const entirelyAssertion: TimeAssertion = {
            between: new TimeAssertion_between(
                assertion.between.startTime,
                assertion.between.endTime,
                TRUE,
            ),
        };
        matches = evaluateTemporalContext(
            _encode_TimeAssertion(entirelyAssertion, DER),
            _encode_TimeSpecification(value, DER),
        );
        // `entirely` defaults to `FALSE`, so the `between` range only has to
        // overlap with the time specification at some point.
        expect(matches).toBe(false);

        const entirelyValue = new TimeSpecification(
            value.time,
            TRUE,
        );
        matches = evaluateTemporalContext(
            _encode_TimeAssertion(entirelyAssertion, DER),
            _encode_TimeSpecification(entirelyValue, DER),
        );
        expect(matches).toBe(true);
    });

    // I live in Florida, in the United States, which is UTC-04:00.
    // I am not sure if this test will work outside of my neighborhood.
    // Sorry if this breaks for you! Feel free to add a `.skip` in a PR if so.
    it("matches a between assertion against an absolute temporal context with a timezone", () => {
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(Date.UTC(2026, 0, 1, 12, 13, 12)),
                new Date(Date.UTC(2026, 0, 1, 12, 13, 14)),
            ),
        };
        const value = new TimeSpecification(
            {
                absolute: new TimeSpecification_time_absolute(
                    new Date(Date.UTC(2026, 0, 1, 13, 13, 13)),
                    new Date(Date.UTC(2026, 0, 1, 13, 13, 15)),
                ),
            },
            undefined,
            1, // I think this is the French time zone, or there about.
        );
        let matches = evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(value, DER),
        );
        expect(matches).toBe(true);

        const negatedValue = new TimeSpecification(
            value.time,
            TRUE,
            value.timeZone,
        );
        matches = evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(negatedValue, DER),
        );
        expect(matches).toBe(false);

        const entirelyAssertion: TimeAssertion = {
            between: new TimeAssertion_between(
                assertion.between.startTime,
                assertion.between.endTime,
                TRUE,
            ),
        };
        matches = evaluateTemporalContext(
            _encode_TimeAssertion(entirelyAssertion, DER),
            _encode_TimeSpecification(value, DER),
        );
        // `entirely` defaults to `FALSE`, so the `between` range only has to
        // overlap with the time specification at some point.
        expect(matches).toBe(false);

        const entirelyValue = new TimeSpecification(
            value.time,
            TRUE,
        );
        matches = evaluateTemporalContext(
            _encode_TimeAssertion(entirelyAssertion, DER),
            _encode_TimeSpecification(entirelyValue, DER),
        );
        expect(matches).toBe(true);
    });

    it("matches an at-assertion after an open-ended absolute startTime", () => {
        const assertion: TimeAssertion = {
            at: new Date(2026, 0, 1, 12, 13, 14),
        };
        const value = new TimeSpecification(
            {
                absolute: new TimeSpecification_time_absolute(
                    new Date(2026, 0, 1, 12, 13, 13),
                    undefined,
                ),
            },
        );
        const matches = evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(value, DER),
        );
        expect(matches).toBe(true);

        const before: TimeAssertion = {
            at: new Date(2026, 0, 1, 12, 13, 12),
        };
        expect(evaluateTemporalContext(
            _encode_TimeAssertion(before, DER),
            _encode_TimeSpecification(value, DER),
        )).toBe(false);
    });

    it("matches an at-assertion before an open-ended absolute endTime", () => {
        const assertion: TimeAssertion = {
            at: new Date(2026, 0, 1, 12, 13, 14),
        };
        const value = new TimeSpecification(
            {
                absolute: new TimeSpecification_time_absolute(
                    undefined,
                    new Date(2026, 0, 1, 12, 13, 15),
                ),
            },
        );
        const matches = evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(value, DER),
        );
        expect(matches).toBe(true);

        const after: TimeAssertion = {
            at: new Date(2026, 0, 1, 12, 13, 16),
        };
        expect(evaluateTemporalContext(
            _encode_TimeAssertion(after, DER),
            _encode_TimeSpecification(value, DER),
        )).toBe(false);
    });

    const eveningBand = new DayTimeBand(
        new DayTime(22, 0, 0),
        DayTimeBand.END_OF_DAY,
    );
    const morningBand = new DayTimeBand(
        DayTimeBand.START_OF_DAY,
        new DayTime(6, 0, 0),
    );
    const twoBandOvernightNight = new TimeSpecification(
        {
            periodic: [
                new Period(
                    [ eveningBand, morningBand ],
                    {
                        intDay: [ 1, 2 ],
                    },
                    undefined,
                    undefined,
                    [ 2021 ],
                ),
            ],
        },
    );
    const invertedOvernightBand = new TimeSpecification(
        {
            periodic: [
                new Period(
                    [
                        new DayTimeBand(
                            new DayTime(22, 0, 0),
                            new DayTime(6, 0, 0),
                        ),
                    ],
                    {
                        intDay: [ 1, 2 ],
                    },
                    undefined,
                    undefined,
                    [ 2021 ],
                ),
            ],
        },
    );

    // Rec. ITU-T X.520 (10/2019) | ISO/IEC 9594-6:2020, clause 10.2 does
    // not say if or how overnight timebands are represented (one inverted
    // `DayTimeBand`, two same-day bands, a contiguous occurrence across
    // midnight, etc.), nor how `TimeAssertion.between` with `entirely`
    // TRUE should treat a span that crosses 00:00:00. These cases only
    // record what this matcher currently returns.
    // TODO: Report this overnight / `entirely` ambiguity to the ITU-T.
    it.skip("matches between+entirely across midnight against two same-day overnight bands", () => {
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2021, 0, 1, 23, 0, 0),
                new Date(2021, 0, 2, 1, 0, 0),
                TRUE,
            ),
        };
        expect(evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(twoBandOvernightNight, DER),
        )).toBe(true);
    });

    it.skip("matches between+entirely within the evening half of two same-day overnight bands", () => {
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2021, 0, 1, 23, 0, 0),
                new Date(2021, 0, 1, 23, 30, 0),
                TRUE,
            ),
        };
        expect(evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(twoBandOvernightNight, DER),
        )).toBe(true);
    });

    it.skip("does not match between+entirely across midnight against an inverted DayTimeBand", () => {
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2021, 0, 1, 23, 0, 0),
                new Date(2021, 0, 2, 1, 0, 0),
                TRUE,
            ),
        };
        expect(evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(invertedOvernightBand, DER),
        )).toBe(false);
    });

    it("does not match an unrecognized TimeAssertion CHOICE", () => {
        const assertion = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.integer,
            5,
        );
        const value = new TimeSpecification(
            {
                absolute: new TimeSpecification_time_absolute(
                    new Date(2026, 0, 1, 12, 13, 13),
                    new Date(2026, 0, 1, 12, 13, 15),
                ),
            },
        );
        expect(evaluateTemporalContext(
            assertion,
            _encode_TimeSpecification(value, DER),

        )).toBe(false);
    });

    it("interprets periodic timesOfDay in the specification timeZone, independent of host offset", () => {
        const assertion: TimeAssertion = {
            at: new Date(Date.UTC(2026, 0, 1, 12, 30, 0)),
        };
        const value = new TimeSpecification(
            {
                periodic: [
                    new Period(
                        [
                            new DayTimeBand(
                                new DayTime(13, 0, 0),
                                new DayTime(14, 0, 0),
                            ),
                        ],
                    ),
                ],
            },
            undefined,
            1,
        );
        expect(evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(value, DER),
        )).toBe(true);

        const utcZone = new TimeSpecification(
            value.time,
            undefined,
            0,
        );
        expect(evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(utcZone, DER),
        )).toBe(false);
    });

    it("matches between+entirely when two Periods each cover half of the assertion", () => {
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2021, 4, 1, 12, 0, 0),
                new Date(2021, 4, 4, 12, 0, 0),
                TRUE,
            ),
        };
        const value = new TimeSpecification(
            {
                periodic: [
                    new Period(
                        undefined,
                        { intDay: [ 1, 2 ] },
                        undefined,
                        { allMonths: null },
                        [ 2021 ],
                    ),
                    new Period(
                        undefined,
                        { intDay: [ 3, 4 ] },
                        undefined,
                        { allMonths: null },
                        [ 2021 ],
                    ),
                ],
            },
        );
        expect(evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(value, DER),
        )).toBe(true);
    });

    it("does not match between+entirely when the union of Periods has a hole", () => {
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2021, 4, 1, 12, 0, 0),
                new Date(2021, 4, 4, 12, 0, 0),
                TRUE,
            ),
        };
        const value = new TimeSpecification(
            {
                periodic: [
                    new Period(
                        undefined,
                        { intDay: [ 1, 2 ] },
                        undefined,
                        { allMonths: null },
                        [ 2021 ],
                    ),
                    new Period(
                        undefined,
                        { intDay: [ 4 ] },
                        undefined,
                        { allMonths: null },
                        [ 2021 ],
                    ),
                ],
            },
        );
        expect(evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(value, DER),
        )).toBe(false);
    });

    it("matches between+entirely across abutting DayTimeBands of one Period", () => {
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2021, 4, 10, 9, 0, 0),
                new Date(2021, 4, 10, 17, 0, 0),
                TRUE,
            ),
        };
        const value = new TimeSpecification(
            {
                periodic: [
                    new Period(
                        [
                            new DayTimeBand(
                                new DayTime(9, 0, 0),
                                new DayTime(12, 0, 0),
                            ),
                            new DayTimeBand(
                                new DayTime(12, 0, 0),
                                new DayTime(17, 0, 0),
                            ),
                        ],
                    ),
                ],
            },
        );
        expect(evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(value, DER),
        )).toBe(true);
    });

    it("matches between+entirely across DayTimeBands that meet at adjacent seconds", () => {
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2021, 4, 10, 9, 0, 0),
                new Date(2021, 4, 10, 17, 0, 0),
                TRUE,
            ),
        };
        const value = new TimeSpecification(
            {
                periodic: [
                    new Period(
                        [
                            new DayTimeBand(
                                new DayTime(9, 0, 0),
                                new DayTime(12, 0, 0),
                            ),
                            new DayTimeBand(
                                new DayTime(12, 0, 1),
                                new DayTime(17, 0, 0),
                            ),
                        ],
                    ),
                ],
            },
        );
        expect(evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(value, DER),
        )).toBe(true);
    });

    it("matches between+entirely across a 25-hour DST fall-back day", () => {
        // 7 Nov 2021 in America/New_York: 02:00 EDT → 01:00 EST (25 hours).
        // Two half-day bands must still cover the civil day with no hole.
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2021, 10, 7, 0, 0, 0),
                new Date(2021, 10, 7, 23, 59, 59),
                TRUE,
            ),
        };
        const value = new TimeSpecification(
            {
                periodic: [
                    new Period([
                        new DayTimeBand(new DayTime(0, 0, 0), new DayTime(12, 0, 0)),
                    ]),
                    new Period([
                        new DayTimeBand(new DayTime(12, 0, 0), new DayTime(23, 59, 59)),
                    ]),
                ],
            },
        );
        expect(evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(value, DER),
        )).toBe(true);
    });

    it("relaxes the between+entirely cover-step limit with MATCH_FLAG_HIGH_WORK_BUDGET", () => {
        // Each day is covered by two occurrences, so 600 days take more
        // than the default limit of 1000 cover steps.
        const assertion = _encode_TimeAssertion({
            between: new TimeAssertion_between(
                new Date(2021, 0, 1, 0, 0, 0),
                new Date(2021, 0, 601, 0, 0, 0),
                TRUE,
            ),
        }, DER);
        const value = _encode_TimeSpecification(new TimeSpecification(
            {
                periodic: [
                    new Period([
                        new DayTimeBand(new DayTime(0, 0, 0), new DayTime(12, 0, 0)),
                    ]),
                    new Period([
                        new DayTimeBand(new DayTime(12, 0, 0), new DayTime(23, 59, 59)),
                    ]),
                ],
            },
        ), DER);
        expect(evaluateTemporalContext(assertion, value)).toBe(false);
        expect(evaluateTemporalContext(assertion, value, MATCH_FLAG_HIGH_WORK_BUDGET)).toBe(true);
    });

    it("matches between+entirely across 180 one-second Periods without walking each second", () => {
        const periods: Period[] = [];
        let hour = 9;
        let minute = 0;
        let second = 0;
        for (let i = 0; i < 180; i++) {
            const time = new DayTime(hour, minute, second);
            periods.push(new Period([ new DayTimeBand(time, time) ]));
            second += 1;
            if (second === 60) {
                second = 0;
                minute += 1;
                if (minute === 60) {
                    minute = 0;
                    hour += 1;
                }
            }
        }
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2021, 4, 10, 9, 0, 0),
                new Date(2021, 4, 10, 9, 2, 59),
                TRUE,
            ),
        };
        expect(evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(new TimeSpecification({ periodic: periods }), DER),
        )).toBe(true);
    });

    it("matches between+entirely across abutting DayTimeBands from two Periods", () => {
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2021, 4, 10, 9, 0, 0),
                new Date(2021, 4, 10, 17, 0, 0),
                TRUE,
            ),
        };
        const value = new TimeSpecification(
            {
                periodic: [
                    new Period([
                        new DayTimeBand(
                            new DayTime(9, 0, 0),
                            new DayTime(12, 0, 0),
                        ),
                    ]),
                    new Period([
                        new DayTimeBand(
                            new DayTime(12, 0, 0),
                            new DayTime(17, 0, 0),
                        ),
                    ]),
                ],
            },
        );
        expect(evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(value, DER),
        )).toBe(true);
    });

    it("matches between+entirely across 1500 adjacent one-second bands of one Period", () => {
        // More bands than the default cover-step cap. Flattening inside
        // Period.occurrences must collapse them to one span.
        const bands = consecutiveDayTimes(1500, 9, 0, 0, 1)
            .map((time) => new DayTimeBand(time, time));
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2021, 4, 10, 9, 0, 0),
                new Date(2021, 4, 10, 9, 24, 59),
                TRUE,
            ),
        };
        expect(evaluateTemporalContext(
            assertion,
            new TimeSpecification({ periodic: [ new Period(bands) ] }),
        )).toBe(true);
    });

    it("does not match between+entirely when one-second bands leave a gap", () => {
        const bands = consecutiveDayTimes(5, 9, 0, 0, 2)
            .map((time) => new DayTimeBand(time, time));
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2021, 4, 10, 9, 0, 0),
                new Date(2021, 4, 10, 9, 0, 8),
                TRUE,
            ),
        };
        expect(evaluateTemporalContext(
            assertion,
            new TimeSpecification({ periodic: [ new Period(bands) ] }),
        )).toBe(false);
    });

    it("does not let one-second gaps ahead of a covering Period exhaust the cover budget", () => {
        // Every other second for 2500 seconds is more than the default
        // cap of yielded spans, and those spans do not cover the band.
        // The second Period does. The sweep must notice that before
        // draining the gaps.
        const gaps = consecutiveDayTimes(2500, 9, 0, 0, 2)
            .map((time) => new DayTimeBand(time, time));
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2021, 4, 10, 9, 0, 0),
                new Date(2021, 4, 10, 10, 0, 0),
                TRUE,
            ),
        };
        const value = new TimeSpecification({
            periodic: [
                new Period(gaps),
                new Period([
                    new DayTimeBand(new DayTime(9, 0, 0), new DayTime(12, 0, 0)),
                ]),
            ],
        });
        expect(evaluateTemporalContext(assertion, value)).toBe(true);
    });

    it("matches between+entirely across 900 one-second Periods under the default cover budget", () => {
        // 900 is under the cap of 1000 and over half of it, so counting
        // a finished iterator as another step would fail the match.
        const periods = consecutiveDayTimes(900, 9, 0, 0, 1)
            .map((time) => new Period([ new DayTimeBand(time, time) ]));
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2021, 4, 10, 9, 0, 0),
                new Date(2021, 4, 10, 9, 14, 59),
                TRUE,
            ),
        };
        expect(evaluateTemporalContext(
            assertion,
            new TimeSpecification({ periodic: periods }),
        )).toBe(true);
    });

    it("matches a multi-day between+entirely when a one-second Period is listed first", () => {
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2021, 0, 1, 0, 0, 0),
                new Date(2024, 5, 1, 0, 0, 0),
                TRUE,
            ),
        };
        const value = new TimeSpecification({
            periodic: [
                new Period([
                    new DayTimeBand(new DayTime(0, 0, 0), new DayTime(0, 0, 0)),
                ]),
                new Period(
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    [ 2021, 2022, 2023, 2024 ],
                ),
            ],
        });
        expect(evaluateTemporalContext(assertion, value)).toBe(true);
    });
});
