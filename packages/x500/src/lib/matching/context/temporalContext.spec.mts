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
import { MATCH_FLAG_CONSTANT_TIME, MATCH_FLAG_HIGH_WORK_BUDGET } from "../../types/matching.mjs";
import { DER } from "@wildboar/asn1/functional";
import { TimeSpecification_time_absolute } from "../../modules/SelectedAttributeTypes/TimeSpecification-time-absolute.ta.mjs";
import { TimeAssertion_between } from "../../modules/SelectedAttributeTypes/TimeAssertion-between.ta.mjs";

describe("evaluateTemporalContext", () => {
    describe("intervals against complemented stored time sets (H5)", () => {
        const at = (hour: number): Date => new Date(2026, 0, 1, hour);
        const storedTimes: TimeSpecification["time"][] = [
            { absolute: new TimeSpecification_time_absolute(at(9), at(17)) },
            { periodic: [new Period([new DayTimeBand(new DayTime(9), new DayTime(17))], undefined, undefined, undefined, [2026])] },
        ];

        // overlap = whether the assertion is expected to overlap with the stored time
        // covered = whether the assertion is expected to be fully covered by the stored time
        // complementOverlap = whether the assertion is expected to overlap with the complement of the stored time
        // complementCovered = whether the assertion is expected to be fully covered by the complement of the stored time
        it.each([
            [6, 8, false, false, true, true], // entirely before the stored timespan
            [10, 11, true, true, false, false], // entirely inside
            [8, 10, true, false, true, false], // partially inside and outside
            [8, 18, true, false, true, false], // encompassing the entire stored timespan
            [18, 20, false, false, true, true], // entirely after the stored timespan
            [8, 9, true, false, true, false], // touching the start of the stored timespan
            [9, 17, true, true, false, false], // touching the end of the stored timespan
        ] as const)("evaluates %i:00–%i:00 by set overlap and containment", (start, end, overlap, covered, complementOverlap, complementCovered) => {
            for (const time of storedTimes) {
                for (const flags of [0, MATCH_FLAG_CONSTANT_TIME]) {
                    const innerTestCases = [
                        [false, false, overlap], // this time, not entirely
                        [false, true, covered], // this time, entirely
                        [true, false, complementOverlap], // not this time, not entirely
                        [true, true, complementCovered], // not this time, entirely
                    ] as const;
                    for (const [notThisTime, entirely, expected] of innerTestCases) {
                        const assertion: TimeAssertion = { between: new TimeAssertion_between(at(start), at(end), entirely) };
                        expect(evaluateTemporalContext(assertion, new TimeSpecification(time, notThisTime), flags)).toBe(expected);
                    }
                }
            }
        });

        it("uses the complement of the entire periodic union, including gaps", () => {
            const spec = new TimeSpecification({ periodic: [
                new Period([new DayTimeBand(new DayTime(9), new DayTime(10))]),
                new Period([new DayTimeBand(new DayTime(12), new DayTime(13))]),
            ] }, true); // NOTE: notThisTime.

            // Does not match because hour 12 touches one of the day time bands, so it fails the `entirely` requirement.
            expect(evaluateTemporalContext({ between: new TimeAssertion_between(at(11), at(12), true) }, spec)).toBe(false);

            // Matches the space between 10 and 12.
            expect(evaluateTemporalContext({ between: new TimeAssertion_between(at(10), at(13)) }, spec)).toBe(true);

            // Overlaps with both forbidden time bands, so it fails the `entirely` requirement.
            expect(evaluateTemporalContext({ between: new TimeAssertion_between(at(9), at(13), true) }, spec)).toBe(false);

            // 11 is not within either forbidden time band, so it matches, even `entirely`.
            expect(evaluateTemporalContext({ between: new TimeAssertion_between(at(11), at(11), true) }, spec)).toBe(true);
        });

        it("does not turn invalid intervals into matches by negation", () => {
            for (const time of storedTimes) {
                for (const entirely of [false, true]) {
                    expect(evaluateTemporalContext({ between: new TimeAssertion_between(at(17), at(9), entirely) }, new TimeSpecification(time, true))).toBe(false);
                    expect(evaluateTemporalContext({ between: new TimeAssertion_between(new Date(NaN), at(9), entirely) }, new TimeSpecification(time, true))).toBe(false);
                }
                expect(evaluateTemporalContext({ at: new Date(NaN) }, new TimeSpecification(time, true))).toBe(false);
            }
        });

        it("enforces time-of-day limits throughout an explicitly specified year (H6)", () => {
            const spec = new TimeSpecification(storedTimes[1]);
            expect(evaluateTemporalContext({ at: at(8) }, spec)).toBe(false);
            expect(evaluateTemporalContext({ at: at(9) }, spec)).toBe(true);
            expect(evaluateTemporalContext({ at: at(17) }, spec)).toBe(true);
            expect(evaluateTemporalContext({ at: at(18) }, spec)).toBe(false);
            expect(evaluateTemporalContext({ at: new Date(2027, 0, 1, 12) }, spec)).toBe(false);
        });

        it("does not negate exhausted coverage work into a complement overlap", () => {
            const base = at(0).valueOf();
            const instant = (second: number): Date => new Date(base + second * 1000);
            const period = new Period();
            period.occurrences = function* (): IterableIterator<[Date, Date]> {
                for (let second = 0; second < 1001; second++) {
                    yield [instant(second), instant(second)];
                }
            };
            const assertion: TimeAssertion = { between: new TimeAssertion_between(instant(0), instant(1002)) };
            const spec = new TimeSpecification({ periodic: [period] }, true);
            expect(evaluateTemporalContext(assertion, spec)).toBe(false);
            expect(evaluateTemporalContext(assertion, spec, MATCH_FLAG_HIGH_WORK_BUDGET)).toBe(true);
        });
    });

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
        // The assertion also overlaps the complement before the stored band.
        expect(matches).toBe(true);

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
        expect(matches).toBe(false);
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
        // Matches because the asserted time also covers the Sunday that belongs
        // to the next week. The assertion overlaps both the stored time and
        // its complement.
        expect(matches).toBe(true);

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
        // As stated above, the assertion overlaps both the stored time and
        // its complement, meaning that it fails `entirely` within neither, so
        // it fails to match if `entirely` is TRUE.
        expect(matches).toBe(false);
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
        expect(matches).toBe(true);

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
            value.timeZone,
        );
        matches = evaluateTemporalContext(
            _encode_TimeAssertion(entirelyAssertion, DER),
            _encode_TimeSpecification(entirelyValue, DER),
        );
        expect(matches).toBe(false);
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
        const negatedValue = _decode_TimeSpecification(value);
        const negated = new TimeSpecification(negatedValue.time, TRUE);
        // Running out of work is not evidence of a hole, even under negation.
        expect(evaluateTemporalContext(assertion, negated)).toBe(false);
        expect(evaluateTemporalContext(assertion, negated, MATCH_FLAG_HIGH_WORK_BUDGET)).toBe(false);
    });

    it("merges many interleaved streams without restarting or rescanning them", () => {
        const count = 128;
        const base = new Date(2026, 0, 1).valueOf();
        const instant = (second: number) => new Date(base + second * 1000);
        let starts = 0;
        let yielded = 0;
        const periods = Array.from({ length: count }, (_, i) => {
            const period = new Period();
            period.occurrences = function* (start: Date) {
                starts++;
                for (const offset of [i * 2, (count + i) * 2]) {
                    const span: [Date, Date] = [instant(offset), instant(offset + 1)];
                    if (span[1] >= start) {
                        yielded++;
                        yield span;
                    }
                }
            };
            return period;
        }).reverse();
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(instant(0), instant(count * 4 - 1), TRUE),
        };
        expect(evaluateTemporalContext(assertion, new TimeSpecification({ periodic: periods }))).toBe(true);
        expect(starts).toBe(count);
        expect(yielded).toBe(count * 2);
    });

    it("handles a full-day recurrence without eagerly coalescing all future days", () => {
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2026, 0, 1, 0, 0, 0),
                new Date(2026, 0, 1, 23, 59, 59),
                TRUE,
            ),
        };
        const value = new TimeSpecification({ periodic: [new Period([new DayTimeBand()])] });
        expect(evaluateTemporalContext(assertion, value)).toBe(true);
    });

    it("does not skip the second after a calendar occurrence ending in .999", () => {
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2026, 0, 1, 12),
                new Date(2026, 0, 2),
                TRUE,
            ),
        };
        const value = new TimeSpecification({
            periodic: [new Period(undefined, { intDay: [1] }, undefined, undefined, [2026])],
        });
        expect(evaluateTemporalContext(assertion, value)).toBe(false);
    });

    it("does not lose coverage when an overlapping occurrence has an earlier end", () => {
        const value = new TimeSpecification({ periodic: [
            new Period([new DayTimeBand(new DayTime(9), new DayTime(15))]),
            new Period([new DayTimeBand(new DayTime(10), new DayTime(11))]),
            new Period([new DayTimeBand(new DayTime(15, 0, 1), new DayTime(17))]),
        ] });
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(new Date(2026, 0, 1, 9), new Date(2026, 0, 1, 17), TRUE),
        };
        expect(evaluateTemporalContext(assertion, value)).toBe(true);
    });

    it("agrees with a second-by-second oracle for small unions", () => {
        let seed = 2026;
        for (let trial = 0; trial < 128; trial++) {
            const masks = Array.from({ length: 4 }, () => {
                seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
                return seed >>> 24;
            });
            if (trial % 2 === 0) {
                // Include positive cases, not just randomly occurring holes.
                masks[3] |= (~(masks[0] | masks[1] | masks[2])) & 255;
            }
            const periods = masks.map((mask) => new Period(
                Array.from({ length: 8 }, (_, second) => second)
                    .filter((second) => mask & (1 << second))
                    .map((second) => new DayTimeBand(new DayTime(12, 0, second), new DayTime(12, 0, second))),
            ));
            const assertion: TimeAssertion = {
                between: new TimeAssertion_between(
                    new Date(2026, 0, 1, 12, 0, 0),
                    new Date(2026, 0, 1, 12, 0, 7),
                    TRUE,
                ),
            };
            const expected = Array.from({ length: 8 }, (_, second) => second)
                .every((second) => masks.some((mask) => mask & (1 << second)));
            const value = new TimeSpecification({ periodic: periods });
            expect(evaluateTemporalContext(assertion, value), `trial ${trial}`).toBe(expected);
        }
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
});
