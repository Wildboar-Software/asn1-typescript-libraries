import { DERElement, ObjectIdentifier } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DER } from "@wildboar/asn1/functional";
import { MATCH_FLAG_USED_FOR_NAME } from "@wildboar/x500";
import { AttributeTypeAndValue } from "@wildboar/x500/InformationFramework";
import { _encode_MessageGroupName } from "@wildboar/x400/MSAbstractService";
import { _encode_MSString, type MSString } from "@wildboar/x400/MSMatchingRules";
import mSStringListElementsMatch from "./msStringListElementsMatch.mjs";
import mSSingleSubstringListElementsMatch from "./mSSingleSubstringListElementsMatch.mjs";

const id_att_message_group_name = ObjectIdentifier.fromString("2.6.4.3.33");
const encodeMSStringSeq = $._encodeSequenceOf<MSString>(() => _encode_MSString, DER);

function stored(el: DERElement): AttributeTypeAndValue {
    return new AttributeTypeAndValue(id_att_message_group_name, el);
}

function assertionSeq(parts: string[]): DERElement {
    return encodeMSStringSeq(parts.map((printable) => ({ printable })), DER);
}

function groupValue(parts: string[]): DERElement {
    return _encode_MessageGroupName(parts, DER);
}

describe("mSStringListElementsMatch and mSSingleSubstringListElementsMatch", () => {
    const fullGroup = groupValue(["MS Projects", "Milestones", "Announcements"]);

    test("X.413 §12.2.7: matches leading subset and equal-length list, ignoring case and extra spaces", () => {
        expect(
            mSStringListElementsMatch(
                assertionSeq(["  ms   projects ", "milestones"]),
                stored(fullGroup),
            ),
        ).toBe(true);
        expect(
            mSStringListElementsMatch(
                assertionSeq(["ms projects", "milestones", "announcements"]),
                stored(fullGroup),
            ),
        ).toBe(true);
    });

    test("X.413 §12.2.7: returns false when presented list is longer than stored list", () => {
        expect(
            mSStringListElementsMatch(
                assertionSeq(["ms projects", "milestones", "announcements", "extra"]),
                stored(fullGroup),
            ),
        ).toBe(false);
        expect(
            mSStringListElementsMatch(
                assertionSeq(["ms projects"]),
                stored(groupValue([])),
            ),
        ).toBe(false);
    });

    test("X.413 §12.2.9: matches leading single-substring subset and rejects longer assertions", () => {
        expect(
            mSSingleSubstringListElementsMatch(
                assertionSeq(["ms", "stones"]),
                stored(fullGroup),
            ),
        ).toBe(true);
        expect(
            mSSingleSubstringListElementsMatch(
                assertionSeq(["ms", "stones", "ounce", "extra"]),
                stored(fullGroup),
            ),
        ).toBe(false);
        expect(
            mSSingleSubstringListElementsMatch(
                assertionSeq(["ms"]),
                stored(groupValue([])),
            ),
        ).toBe(false);
    });

    test("space-only substring assertion matches only elements containing a space", () => {
        expect(
            mSSingleSubstringListElementsMatch(
                assertionSeq(["   "]),
                stored(groupValue(["Dundee"])),
            ),
        ).toBe(false);
        expect(
            mSSingleSubstringListElementsMatch(
                assertionSeq(["   "]),
                stored(groupValue(["MS Projects"])),
            ),
        ).toBe(true);
    });

    test("rejects empty MSString assertions, returns undefined on non-SEQUENCE values, and refuses name matching", () => {
        const emptyStringAssertion = assertionSeq([""]);
        expect(() => mSStringListElementsMatch(emptyStringAssertion, stored(fullGroup))).toThrow();
        expect(() => mSSingleSubstringListElementsMatch(emptyStringAssertion, stored(fullGroup))).toThrow();

        const setEl = DERElement.fromSet([]);
        expect(mSStringListElementsMatch(assertionSeq(["ms"]), stored(setEl))).toBeUndefined();
        expect(mSSingleSubstringListElementsMatch(assertionSeq(["ms"]), stored(setEl))).toBeUndefined();

        expect(
            mSStringListElementsMatch(assertionSeq(["MS Projects"]), stored(fullGroup), undefined, MATCH_FLAG_USED_FOR_NAME),
        ).toBeUndefined();
        expect(
            mSSingleSubstringListElementsMatch(assertionSeq(["ms"]), stored(fullGroup), undefined, MATCH_FLAG_USED_FOR_NAME),
        ).toBeUndefined();
    });
});
