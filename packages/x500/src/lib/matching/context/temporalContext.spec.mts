import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import { TRUE, DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "@wildboar/asn1";
import {
    TimeSpecification,
    _decode_TimeSpecification,
    _encode_TimeSpecification,
} from "../../modules/SelectedAttributeTypes/TimeSpecification.ta.mjs";
import {
    TimeAssertion,
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
import evaluateTemporalContext from "./temporalContext.mjs";
import { DER } from "@wildboar/asn1/functional";
import { TimeSpecification_time_absolute } from "../../modules/SelectedAttributeTypes/TimeSpecification-time-absolute.ta.mjs";
import { TimeAssertion_between } from "../../modules/SelectedAttributeTypes/TimeAssertion-between.ta.mjs";
import { DayTimeBand } from "../../modules/SelectedAttributeTypes/DayTimeBand.ta.mjs";
import { DayTime } from "../../modules/SelectedAttributeTypes/DayTime.ta.mjs";

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
        const assertion: TimeAssertion = {
            at: new Date(2026, 0, 1, 12, 13, 14),
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
                new Date(2026, 0, 6, 12, 13, 12),
                new Date(2026, 0, 8, 12, 13, 14),
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

    it("matches a between assertion that covers a periodic occurrence without containing either endpoint", () => {
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2016, 0, 1, 12, 0, 0),
                new Date(2016, 0, 31, 12, 0, 0),
            ),
        };
        const value = new TimeSpecification(
            {
                periodic: [
                    new Period(
                        undefined,
                        undefined,
                        { intWeek: [ 2 ] },
                        undefined,
                        [ 2016 ],
                    ),
                ],
            },
        );
        expect(evaluateTemporalContext(
            _encode_TimeAssertion(assertion, DER),
            _encode_TimeSpecification(value, DER),
        )).toBe(true);
    });

    it("matches a between assertion that overlaps a daily time band only after the start", () => {
        const assertion: TimeAssertion = {
            between: new TimeAssertion_between(
                new Date(2021, 4, 10, 18, 0, 0),
                new Date(2021, 4, 11, 10, 0, 0),
            ),
        };
        const value = new TimeSpecification(
            {
                periodic: [
                    new Period(
                        [
                            new DayTimeBand(
                                new DayTime(9, 0, 0),
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
});
