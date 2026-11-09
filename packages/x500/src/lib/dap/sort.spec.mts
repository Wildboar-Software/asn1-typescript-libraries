import { ObjectIdentifier, type ASN1Element } from "@wildboar/asn1";
import { DER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { EntryInformation } from "../modules/DirectoryAbstractService/EntryInformation.ta.mjs";
import { SortKey } from "../modules/DirectoryAbstractService/SortKey.ta.mjs";
import { Attribute } from "../modules/InformationFramework/Attribute.ta.mjs";
import { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { Attribute_valuesWithContext_Item } from "../modules/InformationFramework/Attribute-valuesWithContext-Item.ta.mjs";
import { Context } from "../modules/InformationFramework/Context.ta.mjs";
import type { Matcher } from "../types/matching.mjs";
import { sort } from "./sort.mjs";

const commonName = ObjectIdentifier.fromString("2.5.4.3");
const organizationName = ObjectIdentifier.fromString("2.5.4.10");
const unknownType = ObjectIdentifier.fromString("1.2.3.4");
const alphabetically: Matcher = (assertion, valueOrValues) => {
    const left = (assertion as ASN1Element).utf8String;
    const right = ("values" in valueOrValues ? valueOrValues.values[0] : valueOrValues.value).utf8String;
    return right < left;
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
        expect(sort([new SortKey(commonName)], a, b, () => alphabetically)).toBeLessThan(0);
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
