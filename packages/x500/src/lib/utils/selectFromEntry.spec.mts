import { ObjectIdentifier } from "@wildboar/asn1";
import { DER, _encodeGeneralizedTime, _encodeUTF8String } from "@wildboar/asn1/functional";
import {
    EntryInformationSelection,
    _decode_EntryInformationSelection,
    _encode_EntryInformationSelection,
} from "../modules/DirectoryAbstractService/EntryInformationSelection.ta.mjs";
import {
    EntryInformationSelection_infoTypes_attributeTypesAndValues,
    EntryInformationSelection_infoTypes_attributeTypesOnly,
} from "../modules/DirectoryAbstractService/EntryInformationSelection-infoTypes.ta.mjs";
import { EntryInformation } from "../modules/DirectoryAbstractService/EntryInformation.ta.mjs";
import { Attribute } from "../modules/InformationFramework/Attribute.ta.mjs";
import { Attribute_valuesWithContext_Item } from "../modules/InformationFramework/Attribute-valuesWithContext-Item.ta.mjs";
import { Context } from "../modules/InformationFramework/Context.ta.mjs";
import type { Name } from "../modules/InformationFramework/Name.ta.mjs";
import { FamilyEntries, _encode_FamilyEntries, _decode_FamilyEntries } from "../modules/DirectoryAbstractService/FamilyEntries.ta.mjs";
import { FamilyEntry } from "../modules/DirectoryAbstractService/FamilyEntry.ta.mjs";
import { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { family_information } from "../modules/DirectoryAbstractService/family-information.oa.mjs";
import { selectFromEntry } from "./selectFromEntry.mjs";

const commonName = ObjectIdentifier.fromString("2.5.4.3");
const description = ObjectIdentifier.fromString("2.5.4.13");
const createTimestamp = ObjectIdentifier.fromString("2.5.18.1");
const languageContext = ObjectIdentifier.fromString("1.2.3.4");

// I commented this out because `family-information` is technically not allowed
// to have contexts at all, so this test ensures _forbidden_ behavior.
// Still, I think it is a good test overall, so I felt like it was worth keeping
// and skipping.
describe.skip("contextual family-information selection (M25)", () => {
    it.each([false, true])("applies types-only selection recursively, returnContexts = %s", (returnContexts) => {
        const childRDN = [new AttributeTypeAndValue(commonName, _encodeUTF8String("child", DER))];
        const nested = new FamilyEntries(ObjectIdentifier.fromString("2.5.6.6"), [new FamilyEntry(
            childRDN, [{ attribute: new Attribute(description, [_encodeUTF8String("Nested secret", DER)]) }],
        )]);
        const family = new FamilyEntries(ObjectIdentifier.fromString("2.5.6.6"), [new FamilyEntry(
            childRDN,
            [{ attribute: new Attribute(commonName, [_encodeUTF8String("Secret value", DER)]) }],
            [nested],
        )]);
        const value = _encode_FamilyEntries(family, DER);
        const original = value.toBytes();
        const contexts = [new Context(languageContext, [_encodeUTF8String("en", DER)])];
        const entry = new EntryInformation({ rdnSequence: [] }, true, [{ attribute: new Attribute(
            family_information["&id"], [value], [new Attribute_valuesWithContext_Item(value, contexts)],
        ) }]);
        const result = selectFromEntry(
            new EntryInformationSelection(undefined, EntryInformationSelection_infoTypes_attributeTypesOnly,
                undefined, undefined, returnContexts),
            entry, () => false, () => [], () => undefined, () => true,
        );
        const info = result.information![0];
        if (!("attribute" in info)) throw new Error("The family carrier must retain its values");
        const values = [...info.attribute.values, ...(info.attribute.valuesWithContext ?? []).map((item) => item.value)];
        expect(values).toHaveLength(2);
        for (const encoded of values) {
            const decoded = _decode_FamilyEntries(encoded);
            expect(decoded.familyEntries[0].information).toEqual([{ attributeType: commonName }]);
            expect(decoded.familyEntries[0].family_info![0].familyEntries[0].information)
                .toEqual([{ attributeType: description }]);
        }
        if (returnContexts) expect(info.attribute.valuesWithContext![0].contextList).toEqual(contexts);
        expect(value.toBytes()).toEqual(original);
    });
});

describe("selectFromEntry defaults (M24)", () => {
    it("returns types and values when infoTypes is omitted, without modifying the input", () => {
        const name: Name = { rdnSequence: [] };
        const value = _encodeUTF8String("Alice", DER);
        const attribute = new Attribute(commonName, [value]);
        const entry = new EntryInformation(name, false, [{ attribute }], true, true, true);
        const selection = new EntryInformationSelection();
        expect(selection.infoTypes).toBeUndefined();

        const result = selectFromEntry(selection, entry, () => false, () => [], () => undefined, () => true);
        expect(result.information).toEqual([{ attribute: new Attribute(commonName, [value]) }]);
        expect(result).not.toBe(entry);
        expect(result.name).toBe(name);
        expect(result.fromEntry).toBe(false);
        expect(result.incompleteEntry).toBe(true);
        expect(result.partialName).toBe(true);
        expect(result.derivedEntry).toBe(true);
        expect(entry.information).toEqual([{ attribute }]);
        expect(selection.infoTypes).toBeUndefined();
    });

    it("treats omitted, explicitly defaulted, and decoded selections identically", () => {
        const entry = new EntryInformation({ rdnSequence: [] }, true, [
            { attribute: new Attribute(commonName, [_encodeUTF8String("Alice", DER)]) },
        ]);
        const omitted = new EntryInformationSelection();
        const explicit = new EntryInformationSelection(undefined, EntryInformationSelection_infoTypes_attributeTypesAndValues);
        const decoded = _decode_EntryInformationSelection(_encode_EntryInformationSelection(omitted, DER));
        const select = (selection: EntryInformationSelection) => selectFromEntry(
            selection, entry, () => false, () => [], () => undefined, () => true,
        );
        expect(select(omitted)).toEqual(select(explicit));
        expect(select(omitted)).toEqual(select(decoded));
    });

    it("does not replace an explicit attributeTypesOnly value of zero with the default", () => {
        const entry = new EntryInformation({ rdnSequence: [] }, true, [
            { attribute: new Attribute(commonName, [_encodeUTF8String("Alice", DER)]) },
        ]);
        const result = selectFromEntry(
            new EntryInformationSelection(undefined, EntryInformationSelection_infoTypes_attributeTypesOnly),
            entry, () => false, () => [], () => undefined, () => true,
        );
        expect(result.information).toEqual([{ attributeType: commonName }]);
    });

    it("still applies attribute selection and excludes unrequested operational attributes", () => {
        const alice = new Attribute(commonName, [_encodeUTF8String("Alice", DER)]);
        const entry = new EntryInformation({ rdnSequence: [] }, true, [
            { attribute: alice },
            { attribute: new Attribute(description, [_encodeUTF8String("Not selected", DER)]) },
            { attribute: new Attribute(createTimestamp, [_encodeGeneralizedTime(new Date("2026-01-01T00:00:00Z"), DER)]) },
        ]);
        const result = selectFromEntry(
            new EntryInformationSelection({ select: [commonName] }),
            entry, (type) => type.isEqualTo(createTimestamp), () => [], () => undefined, () => true,
        );
        expect(result.information).toEqual([{ attribute: alice }]);
        const defaultResult = selectFromEntry(
            new EntryInformationSelection(), entry,
            (type) => type.isEqualTo(createTimestamp), () => [], () => undefined, () => true,
        );
        expect(defaultResult.information).toHaveLength(2);
    });

    it.each([false, true])("honors returnContexts = %s with omitted infoTypes", (returnContexts) => {
        const plainValue = _encodeUTF8String("Alice", DER);
        const contextualValue = _encodeUTF8String("Alicia", DER);
        const context = new Context(languageContext, [_encodeUTF8String("es", DER)]);
        const contextual = new Attribute_valuesWithContext_Item(contextualValue, [context]);
        const entry = new EntryInformation({ rdnSequence: [] }, true, [
            { attribute: new Attribute(commonName, [plainValue], [contextual]) },
        ]);
        const result = selectFromEntry(
            new EntryInformationSelection(undefined, undefined, undefined, undefined, returnContexts),
            entry, () => false, () => [], () => undefined, () => true,
        );
        expect(result.information).toEqual([{ attribute: returnContexts
            ? new Attribute(commonName, [plainValue], [contextual])
            : new Attribute(commonName, [plainValue, contextualValue]),
        }]);
    });

    it("merges values of the same attribute type, including a type-only item", () => {
        const alice = _encodeUTF8String("Alice", DER);
        const bob = _encodeUTF8String("Bob", DER);
        const entry = new EntryInformation({ rdnSequence: [] }, true, [
            { attribute: new Attribute(commonName, [alice]) },
            { attributeType: commonName },
            { attribute: new Attribute(commonName, [bob]) },
        ]);
        const result = selectFromEntry(
            new EntryInformationSelection(),
            entry,
            () => false,
            () => [],
            () => undefined,
            () => true,
        );
        expect(result.information).toEqual([{
            attribute: new Attribute(commonName, [alice, bob]),
        }]);
        expect(entry.information).toHaveLength(3);
    });
});
