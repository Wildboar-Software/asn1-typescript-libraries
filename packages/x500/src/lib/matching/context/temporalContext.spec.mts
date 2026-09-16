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
});
