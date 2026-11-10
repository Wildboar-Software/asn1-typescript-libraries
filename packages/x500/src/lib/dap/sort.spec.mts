import { ObjectIdentifier, type ASN1Element } from "@wildboar/asn1";
import { DER, _encodeInteger, _encodeUTF8String } from "@wildboar/asn1/functional";
import { EntryInformation } from "../modules/DirectoryAbstractService/EntryInformation.ta.mjs";
import { SortKey } from "../modules/DirectoryAbstractService/SortKey.ta.mjs";
import { Attribute } from "../modules/InformationFramework/Attribute.ta.mjs";
import { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { Attribute_valuesWithContext_Item } from "../modules/InformationFramework/Attribute-valuesWithContext-Item.ta.mjs";
import { Context } from "../modules/InformationFramework/Context.ta.mjs";
import type { TypedOrderingFunction } from "../types/matching.mjs";
import { integerOrderingMatchTyped } from "../matching/ordering/integerOrderingMatch.mjs";
import { sort } from "./sort.mjs";

const commonName = ObjectIdentifier.fromString("2.5.4.3");
const organizationName = ObjectIdentifier.fromString("2.5.4.10");
const unknownType = ObjectIdentifier.fromString("1.2.3.4");
const alphabetically: TypedOrderingFunction<ASN1Element> = (assertion, value) => {
    const left = assertion.utf8String;
    const right = (value as ASN1Element).utf8String;
    return left < right ? -1 : left > right ? 1 : 0;
};

describe("sort (M22)", () => {
    it.each([
        { missing: "an omitted information field", information: undefined },
        { missing: "an empty information list", information: [] },
        { missing: "a type without values", information: [{ attributeType: commonName }] },
        { missing: "an empty attribute", information: [{ attribute: new Attribute(commonName, []) }] },
    ])("places $missing after an entry with a sort value", ({ information }) => {
        const absent = new EntryInformation({ rdnSequence: [] }, true, information);
        const present = new EntryInformation({ rdnSequence: [] }, true, [
            { attribute: new Attribute(commonName, [_encodeUTF8String("Alice", DER)]) },
        ]);
        const orderer = vi.fn(alphabetically);
        const lookup = () => orderer;
        const keys = [new SortKey(commonName)];

        // X.511 clause 7.9: a missing sort value is greater than any present value.
        // Its absence is handled here, not passed as undefined to the matcher.
        expect(sort(keys, absent, present, lookup)).toBeGreaterThan(0);
        expect(sort(keys, present, absent, lookup)).toBeLessThan(0);
        expect(orderer).not.toHaveBeenCalled();
    });

    it("continues with the next key when both entries lack the first key", () => {
        const a = new EntryInformation({ rdnSequence: [] }, true, [
            { attribute: new Attribute(organizationName, [_encodeUTF8String("Alpha", DER)]) },
        ]);
        const b = new EntryInformation({ rdnSequence: [] }, true, [
            { attribute: new Attribute(organizationName, [_encodeUTF8String("Zulu", DER)]) },
        ]);
        expect(sort([new SortKey(commonName), new SortKey(organizationName)], a, b, () => alphabetically)).toBeLessThan(0);
    });

    it("returns equality without calling a matcher when both entries have no sort values", () => {
        const a = new EntryInformation({ rdnSequence: [] });
        const b = new EntryInformation({ rdnSequence: [] });
        const orderer = vi.fn(alphabetically);
        expect(sort([new SortKey(commonName)], a, b, () => orderer)).toBe(0);
        expect(orderer).not.toHaveBeenCalled();
    });

    it("invokes the ordering function once to compare two present values", () => {
        const a = new EntryInformation({ rdnSequence: [] }, true, [
            { attribute: new Attribute(commonName, [_encodeUTF8String("Alpha", DER)]) },
        ]);
        const b = new EntryInformation({ rdnSequence: [] }, true, [
            { attribute: new Attribute(commonName, [_encodeUTF8String("Zulu", DER)]) },
        ]);
        const orderer = vi.fn(alphabetically);
        expect(sort([new SortKey(commonName)], a, b, () => orderer)).toBeLessThan(0);
        expect(orderer).toHaveBeenCalledTimes(1);
        expect(sort([new SortKey(commonName)], b, a, () => orderer)).toBeGreaterThan(0);
        expect(orderer).toHaveBeenCalledTimes(2);
    });

    it("uses a TypedOrderingFunction numeric result without wrapping it as a Matcher", () => {
        const a = new EntryInformation({ rdnSequence: [] }, true, [
            { attribute: new Attribute(commonName, [_encodeInteger(1, DER)]) },
        ]);
        const b = new EntryInformation({ rdnSequence: [] }, true, [
            { attribute: new Attribute(commonName, [_encodeInteger(9, DER)]) },
        ]);
        const orderer = vi.fn(integerOrderingMatchTyped);
        expect(sort([new SortKey(commonName)], a, b, () => orderer)).toBeLessThan(0);
        expect(orderer).toHaveBeenCalledTimes(1);
        expect(sort([new SortKey(commonName)], a, a, () => orderer)).toBe(0);
        expect(orderer).toHaveBeenCalledTimes(2);
    });

    it("treats an undefined ordering result as equal and continues to the next key", () => {
        const a = new EntryInformation({ rdnSequence: [] }, true, [
            { attribute: new Attribute(commonName, [_encodeUTF8String("Zulu", DER)]) },
            { attribute: new Attribute(organizationName, [_encodeUTF8String("Alpha", DER)]) },
        ]);
        const b = new EntryInformation({ rdnSequence: [] }, true, [
            { attribute: new Attribute(commonName, [_encodeUTF8String("Alpha", DER)]) },
            { attribute: new Attribute(organizationName, [_encodeUTF8String("Zulu", DER)]) },
        ]);
        const lookup = (type: ObjectIdentifier) => (
            type.isEqualTo(commonName) ? () => undefined : alphabetically
        );
        expect(sort([new SortKey(commonName), new SortKey(organizationName)], a, b, lookup)).toBeLessThan(0);
    });

    it("compares each entry's own final RDN when DN depths differ", () => {
        const a = new EntryInformation({ rdnSequence: [
            [new AttributeTypeAndValue(commonName, _encodeUTF8String("Middle", DER))],
        ] });
        const b = new EntryInformation({ rdnSequence: [
            [new AttributeTypeAndValue(commonName, _encodeUTF8String("Zulu ancestor", DER))],
            [new AttributeTypeAndValue(commonName, _encodeUTF8String("Alpha leaf", DER))],
        ] });
        const keys = [new SortKey(commonName)];
        // Middle > Alpha. Comparing against B's ancestor would reverse that result.
        expect(sort(keys, a, b, () => alphabetically, true)).toBeGreaterThan(0);
        expect(sort(keys, b, a, () => alphabetically, true)).toBeLessThan(0);
    });

    it("handles a root DN with no final RDN", () => {
        const root = new EntryInformation({ rdnSequence: [] });
        const leaf = new EntryInformation({ rdnSequence: [
            [new AttributeTypeAndValue(commonName, _encodeUTF8String("Alice", DER))],
        ] });
        expect(sort([new SortKey(commonName)], root, leaf, () => alphabetically, true)).toBeGreaterThan(0);
        expect(sort([new SortKey(commonName)], root, root, () => alphabetically, true)).toBe(0);
    });

    it("still chooses the least value, including values with contexts", () => {
        const a = new EntryInformation({ rdnSequence: [] }, true, [
            { attribute: new Attribute(commonName, [_encodeUTF8String("Zulu", DER)], [
                new Attribute_valuesWithContext_Item(_encodeUTF8String("Alpha", DER), [
                    new Context(ObjectIdentifier.fromString("1.2.3.5"), [_encodeUTF8String("en", DER)]),
                ]),
            ]) },
        ]);
        const b = new EntryInformation({ rdnSequence: [] }, true, [
            { attribute: new Attribute(commonName, [_encodeUTF8String("Middle", DER)]) },
        ]);
        const orderer = vi.fn(alphabetically);
        expect(sort([new SortKey(commonName)], a, b, () => orderer)).toBeLessThan(0);
        // One compare to pick the least of A's two values, then one to order the entries.
        expect(orderer).toHaveBeenCalledTimes(2);
    });

    it("ignores an unknown ordering rule before considering missing-value ordering", () => {
        const a = new EntryInformation({ rdnSequence: [] }, true, [
            { attribute: new Attribute(commonName, [_encodeUTF8String("Alpha", DER)]) },
        ]);
        const b = new EntryInformation({ rdnSequence: [] }, true, [
            { attribute: new Attribute(unknownType, [_encodeUTF8String("Anything", DER)]) },
            { attribute: new Attribute(commonName, [_encodeUTF8String("Zulu", DER)]) },
        ]);
        const lookup = (type: ObjectIdentifier) => type.isEqualTo(commonName) ? alphabetically : undefined;
        expect(sort([new SortKey(unknownType), new SortKey(commonName)], a, b, lookup)).toBeLessThan(0);
    });
});
