import { ASN1Element, DERElement, ObjectIdentifier } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import {
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_USED_FOR_NAME,
} from "@wildboar/x500";
import { Attribute, AttributeTypeAndValue } from "@wildboar/x500/InformationFramework";
import {
    _encode_MSString,
    _encode_SubstringAssertion,
    type SubstringAssertion,
} from "@wildboar/x400/MSMatchingRules";
import mSSubstringsMatch from "./mSSubstringsMatch.js";
import mSSingleSubstringMatch from "../substring/mSSingleSubstringMatch.js";

const testAttrType = ObjectIdentifier.fromString("2.6.4.3.35");

function stored(text: string): AttributeTypeAndValue {
    return new AttributeTypeAndValue(
        testAttrType,
        _encode_MSString({ general: text }, DER),
    );
}

function subAssert(items: SubstringAssertion): ASN1Element {
    return _encode_SubstringAssertion(items, DER);
}

function ms(text: string): ASN1Element {
    return _encode_MSString({ printable: text }, DER);
}

describe("mSSubstringsMatch and mSSingleSubstringMatch", () => {
    test("X.413 §12.2.3 & §12.2.4 examples", () => {
        const assertion = subAssert([
            { initial: { printable: "mes" } },
            { any_: { printable: "age" } },
            { final: { printable: "ore" } },
        ]);
        expect(mSSubstringsMatch(assertion, stored("Message Store"))).toBe(true);
        expect(mSSubstringsMatch(assertion, stored("Message Store"), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(mSSingleSubstringMatch(ms("Age"), stored("Message Store"))).toBe(true);
    });

    test("enforces non-overlapping substrings in asserted order", () => {
        const initFinalOverlap = subAssert([
            { initial: { printable: "ABA" } },
            { final: { printable: "ABA" } },
        ]);
        expect(mSSubstringsMatch(initFinalOverlap, stored("ABA"))).toBe(false);
        expect(mSSubstringsMatch(initFinalOverlap, stored("ABABA"))).toBe(false);
        expect(mSSubstringsMatch(initFinalOverlap, stored("ABAABA"))).toBe(true);

        const initAnyOverlap = subAssert([
            { initial: { printable: "ABC" } },
            { any_: { printable: "BC" } },
        ]);
        expect(mSSubstringsMatch(initAnyOverlap, stored("ABC"))).toBe(false);
        expect(mSSubstringsMatch(initAnyOverlap, stored("ABCBC"))).toBe(true);

        const anyAnyOverlap = subAssert([
            { any_: { printable: "ABC" } },
            { any_: { printable: "BC" } },
        ]);
        expect(mSSubstringsMatch(anyAnyOverlap, stored("ABC"))).toBe(false);
        expect(mSSubstringsMatch(anyAnyOverlap, stored("ABCBC"))).toBe(true);

        const anyFinalOverlap = subAssert([
            { any_: { printable: "BC" } },
            { final: { printable: "ABC" } },
        ]);
        expect(mSSubstringsMatch(anyFinalOverlap, stored("ABC"))).toBe(false);
        expect(mSSubstringsMatch(anyFinalOverlap, stored("BCABC"))).toBe(true);
    });

    test("validates anchor placement and uniqueness", () => {
        expect(() =>
            mSSubstringsMatch(
                subAssert([
                    { final: { printable: "ore" } },
                    { initial: { printable: "mes" } },
                ]),
                stored("Message Store"),
            ),
        ).toThrow();
        expect(() =>
            mSSubstringsMatch(
                subAssert([
                    { initial: { printable: "mes" } },
                    { initial: { printable: "sag" } },
                ]),
                stored("Message Store"),
            ),
        ).toThrow();
        expect(() =>
            mSSubstringsMatch(
                subAssert([
                    { final: { printable: "sto" } },
                    { final: { printable: "ore" } },
                ]),
                stored("Message Store"),
            ),
        ).toThrow();
        expect(() =>
            mSSubstringsMatch(
                subAssert([
                    { any_: { printable: "age" } },
                    { initial: { printable: "mes" } },
                ]),
                stored("Message Store"),
            ),
        ).toThrow();
    });

    test("normalizes insignificant spaces in both assertion and stored value (X.413 §12.2)", () => {
        const assertionWithExtraSpaces = subAssert([
            { initial: { printable: "  mes  " } },
            { any_: { printable: "sage    st" } },
        ]);
        expect(
            mSSubstringsMatch(assertionWithExtraSpaces, stored("  Message   Store  ")),
        ).toBe(true);

        expect(
            mSSingleSubstringMatch(ms("  message   store "), stored("Message  Store")),
        ).toBe(true);

        // Space-only piece matches only values containing a significant space
        expect(mSSingleSubstringMatch(ms("   "), stored("Dundee"))).toBe(false);
        expect(mSSingleSubstringMatch(ms("   "), stored("Message Store"))).toBe(true);
    });

    test("handles empty assertions, empty pieces, control items, unrecognized alternatives, and name flag", () => {
        // Empty SubstringAssertion or control-only assertion throws assertion error
        expect(() => mSSubstringsMatch(subAssert([]), stored("Message Store"))).toThrow();

        const dummyControl = new Attribute(testAttrType, []);
        expect(() =>
            mSSubstringsMatch([{ control: dummyControl }], stored("Message Store")),
        ).toThrow();
        expect(() =>
            mSSingleSubstringMatch([{ control: dummyControl }], stored("Message Store")),
        ).toThrow();
        // `control` alongside a real piece is ignored
        expect(
            mSSubstringsMatch(
                [{ control: dummyControl }, { initial: ms("mes") }],
                stored("Message Store"),
            ),
        ).toBe(true);

        // Empty substring piece throws assertion error
        expect(() =>
            mSSubstringsMatch(subAssert([{ any_: { printable: "" } }]), stored("Message Store")),
        ).toThrow();
        expect(() => mSSingleSubstringMatch(ms(""), stored("Message Store"))).toThrow();

        // Unrecognized FilterItem alternative throws assertion error
        const rawUnrecognized = new DERElement();
        rawUnrecognized.boolean = true;
        expect(() =>
            mSSubstringsMatch([rawUnrecognized], stored("Message Store")),
        ).toThrow();
        expect(() =>
            mSSingleSubstringMatch([rawUnrecognized], stored("Message Store")),
        ).toThrow();

        // Empty SubjectField (SIZE 0..ub) evaluates to false, not undefined
        const emptySubject = new AttributeTypeAndValue(
            testAttrType,
            _encode_MSString({ teletex: new Uint8Array(0) }, DER),
        );
        expect(mSSubstringsMatch(subAssert([{ any_: { printable: "a" } }]), emptySubject)).toBe(false);
        expect(mSSingleSubstringMatch(ms("a"), emptySubject)).toBe(false);

        // Neither rule may be used for naming
        expect(
            mSSubstringsMatch(
                subAssert([{ any_: { printable: "mes" } }]),
                stored("Message Store"),
                undefined,
                MATCH_FLAG_USED_FOR_NAME,
            ),
        ).toBeUndefined();
        expect(
            mSSingleSubstringMatch(
                ms("mes"),
                stored("Message Store"),
                undefined,
                MATCH_FLAG_USED_FOR_NAME,
            ),
        ).toBeUndefined();
    });
});
