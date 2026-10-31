import { ObjectIdentifier, type ASN1Element } from "@wildboar/asn1";
import {
    DER,
    _encodeGeneralizedTime,
    _encodeOctetString,
    _encodeUTCTime,
} from "@wildboar/asn1/functional";
import {
    AttributeTypeAndValue,
} from "../../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import generalizedTimeOrderingMatch, {
    generalizedTimeOrderingMatchTyped,
} from "./generalizedTimeOrderingMatch.mjs";
import octetStringOrderingMatch, {
    octetStringOrderingMatchTyped,
} from "./octetStringOrderingMatch.mjs";
import uTCTimeOrderingMatch, {
    uTCTimeOrderingMatchTyped,
} from "./uTCTimeOrderingMatch.mjs";

const type_ = ObjectIdentifier.fromParts([ 1, 1, 1, 1 ]);

function stored (value: ASN1Element): AttributeTypeAndValue {
    return new AttributeTypeAndValue(type_, value);
}

describe("generalizedTimeOrderingMatch", () => {
    const earlier = new Date("2020-01-01T00:00:00Z");
    const later = new Date("2020-06-01T00:00:00Z");
    it("is TRUE when the stored time is earlier", () => {
        expect(generalizedTimeOrderingMatch(
            _encodeGeneralizedTime(later, DER),
            stored(_encodeGeneralizedTime(earlier, DER)),
        )).toBe(true);
        expect(generalizedTimeOrderingMatch(
            _encodeGeneralizedTime(earlier, DER),
            stored(_encodeGeneralizedTime(later, DER)),
        )).toBe(false);
        expect(generalizedTimeOrderingMatch(
            _encodeGeneralizedTime(earlier, DER),
            stored(_encodeGeneralizedTime(earlier, DER)),
        )).toBe(false);
        expect(generalizedTimeOrderingMatchTyped(later, earlier)).toBeGreaterThan(0);
    });
});

describe("uTCTimeOrderingMatch", () => {
    const earlier = new Date("1951-01-01T00:00:00Z");
    const later = new Date("2001-01-01T00:00:00Z");
    it("is TRUE when the stored time is earlier", () => {
        expect(uTCTimeOrderingMatch(
            _encodeUTCTime(later, DER),
            stored(_encodeUTCTime(earlier, DER)),
        )).toBe(true);
        expect(uTCTimeOrderingMatch(
            _encodeUTCTime(earlier, DER),
            stored(_encodeUTCTime(later, DER)),
        )).toBe(false);
        expect(uTCTimeOrderingMatchTyped(later, earlier)).toBeGreaterThan(0);
    });
});

describe("octetStringOrderingMatch", () => {
    it("orders by the first differing bit, then by length", () => {
        expect(octetStringOrderingMatch(
            _encodeOctetString(new Uint8Array([ 1, 2, 3 ]), DER),
            stored(_encodeOctetString(new Uint8Array([ 1, 2 ]), DER)),
        )).toBe(true);
        expect(octetStringOrderingMatch(
            _encodeOctetString(new Uint8Array([ 1, 0 ]), DER),
            stored(_encodeOctetString(new Uint8Array([ 1, 2 ]), DER)),
        )).toBe(false);
        expect(octetStringOrderingMatchTyped(
            new Uint8Array([ 1, 2, 3 ]),
            new Uint8Array([ 1, 2 ]),
        )).toBeGreaterThan(0);
    });
});
