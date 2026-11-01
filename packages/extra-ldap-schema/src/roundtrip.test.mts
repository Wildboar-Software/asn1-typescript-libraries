import * as $ from "@wildboar/asn1/functional";
import { DayTime } from "./lib/modules/SelectedAttributeTypes/DayTime.ta.mjs";
import { DayTimeBand } from "./lib/modules/SelectedAttributeTypes/DayTimeBand.ta.mjs";
import { Period } from "./lib/modules/SelectedAttributeTypes/Period.ta.mjs";
import {
    TimeSpecification,
    _decode_TimeSpecification,
    _encode_TimeSpecification,
} from "./lib/modules/SelectedAttributeTypes/TimeSpecification.ta.mjs";

describe("TimeSpecification", () => {
    test("round-trips a periodic specification with a time zone", () => {
        const original = new TimeSpecification(
            {
                periodic: [
                    new Period(
                        [
                            new DayTimeBand(
                                new DayTime(9, 30, 0),
                                new DayTime(17, 0, 0),
                            ),
                        ],
                        { intDay: [1, 5] },
                        { allWeeks: null },
                        { intMonth: [1, 6] },
                        [2026],
                    ),
                ],
            },
            true,
            -5,
        );
        const decoded = _decode_TimeSpecification(_encode_TimeSpecification(original, $.BER));
        expect(decoded).toEqual(original);
    });
});
