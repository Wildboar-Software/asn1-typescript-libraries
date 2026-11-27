import { ASN1Element, type OBJECT_IDENTIFIER, DERElement } from "@wildboar/asn1";
import { EntryInformationSelection } from "../modules/DirectoryAbstractService/EntryInformationSelection.ta.mjs";
import { EntryInformation } from "../modules/DirectoryAbstractService/EntryInformation.ta.mjs";
import type {
    TypeAndContextAssertion,
} from "../modules/DirectoryAbstractService/TypeAndContextAssertion.ta.mjs";
import type {
    ContextAssertion,
} from "../modules/InformationFramework/ContextAssertion.ta.mjs";
import type {
    Context,
} from "../modules/InformationFramework/Context.ta.mjs";
import type {
    EntryInformation_information_Item,
} from "../modules/DirectoryAbstractService/EntryInformation-information-Item.ta.mjs";
import {
    type EntryInformationSelection_infoTypes,
    EntryInformationSelection_infoTypes_attributeTypesAndValues,
    EntryInformationSelection_infoTypes_attributeTypesOnly,
} from "../modules/DirectoryAbstractService/EntryInformationSelection-infoTypes.ta.mjs";
import {
    Attribute,
} from "../modules/InformationFramework/Attribute.ta.mjs";
import {
    Attribute_valuesWithContext_Item,
} from "../modules/InformationFramework/Attribute-valuesWithContext-Item.ta.mjs";
import type { ContextMatcher, EqualityMatcher } from "../types/matching.mjs";
import {
    id_oa_allAttributeTypes,
} from "../modules/InformationFramework/id-oa-allAttributeTypes.va.mjs";
import groupByOID from "./groupByOID.mjs";
import { strict as assert } from "node:assert";
import evaluateContextAssertion from "./evaluateContextAssertion.mjs";
import {
    family_information,
} from "../modules/DirectoryAbstractService/family-information.oa.mjs";
import {
    FamilyEntries,
    _decode_FamilyEntries,
    _encode_FamilyEntries,
} from "../modules/DirectoryAbstractService/FamilyEntries.ta.mjs";
import {
    FamilyEntry,
} from "../modules/DirectoryAbstractService/FamilyEntry.ta.mjs";
import { evaluateTypeAndContextAssertion } from "./evaluateTypeAndContextAssertion.mjs";

const ALL_ATTRIBUTE_TYPES: string = id_oa_allAttributeTypes.toString();

/**
 * Combine attributes of the same type. Type-only information items become
 * empty {@link Attribute}s, so this also folds them into valued attributes
 * of the same type.
 */
function mergeAttributes (attrs: Attribute[]): Attribute {
    if (attrs.length === 1) {
        return attrs[0];
    }
    let valueCount = 0;
    let contextCount = 0;
    for (let i = 0; i < attrs.length; i++) {
        const attr = attrs[i];
        valueCount += attr.values.length;
        contextCount += attr.valuesWithContext?.length ?? 0;
    }
    const values: ASN1Element[] = new Array(valueCount);
    let valueIndex = 0;
    let valuesWithContext: Attribute_valuesWithContext_Item[] | undefined;
    let contextIndex = 0;
    if (contextCount > 0) {
        valuesWithContext = new Array(contextCount);
    }
    for (let i = 0; i < attrs.length; i++) {
        const attr = attrs[i];
        const attrValues = attr.values;
        for (let v = 0; v < attrValues.length; v++) {
            values[valueIndex++] = attrValues[v];
        }
        const attrContexts = attr.valuesWithContext;
        if (attrContexts && valuesWithContext) {
            for (let c = 0; c < attrContexts.length; c++) {
                valuesWithContext[contextIndex++] = attrContexts[c];
            }
        }
    }
    return new Attribute(
        attrs[0].type_,
        values,
        valuesWithContext,
    );
}

/**
 * Values without contexts always survive context selection (X.501 §8.9.2.4
 * (b)), so only `valuesWithContext` is filtered. An attribute that had values
 * and loses them all is dropped; a type-only empty attribute is kept.
 */
function filterAttribute (
    attr: Attribute,
    keep: (contexts: Context[]) => boolean,
): Attribute | undefined {
    if (!attr.valuesWithContext?.length) {
        return attr;
    }
    const valuesWithContext = attr.valuesWithContext
        .filter((vwc) => keep(vwc.contextList));
    if (valuesWithContext.length === attr.valuesWithContext.length) {
        return attr;
    }
    if ((attr.values.length === 0) && (valuesWithContext.length === 0)) {
        return undefined;
    }
    return new Attribute(
        attr.type_,
        attr.values,
        valuesWithContext.length > 0 ? valuesWithContext : undefined,
    );
}

function useAttributeTypesInFamilyEntries (entries: FamilyEntries): FamilyEntries {
    return new FamilyEntries(
        entries.family_class,
        entries.familyEntries.map((entry) => {
            return new FamilyEntry(
                entry.rdn,
                entry.information.map((info) => {
                    if (!("attribute" in info)) {
                        return info;
                    }
                    return {
                        attributeType: info.attribute.type_,
                    };
                }),
                entry.family_info?.map((fi) => useAttributeTypesInFamilyEntries(fi)),
                entry._unrecognizedExtensionsList,
            );
        }),
        entries._unrecognizedExtensionsList,
    );
}

function copyValues (
    attr: Attribute,
    transform: ((value: ASN1Element) => ASN1Element) | undefined,
): ASN1Element[] {
    const contextual = attr.valuesWithContext;
    const plain = attr.values;
    if (!transform && !contextual?.length) {
        // Copy so a caller can mutate the result without changing the entry.
        return plain.slice();
    }
    const values: ASN1Element[] = new Array(plain.length + (contextual?.length ?? 0));
    let count = 0;
    if (transform) {
        for (let i = 0; i < plain.length; i++) {
            values[count++] = transform(plain[i]);
        }
        if (contextual) {
            for (let i = 0; i < contextual.length; i++) {
                values[count++] = transform(contextual[i].value);
            }
        }
    } else {
        for (let i = 0; i < plain.length; i++) {
            values[count++] = plain[i];
        }
        const contexts = contextual!;
        for (let i = 0; i < contexts.length; i++) {
            values[count++] = contexts[i].value;
        }
    }
    return values;
}

function useAttributeTypesInFamilyValue (value: ASN1Element): ASN1Element {
    return _encode_FamilyEntries(
        useAttributeTypesInFamilyEntries(_decode_FamilyEntries(value)),
        () => new DERElement(),
    );
}

function attributeToInformationItem (
    attr: Attribute,
    infoTypes: EntryInformationSelection_infoTypes,
    returnContexts: boolean | undefined,
): EntryInformation_information_Item | undefined {
    const isFamily = family_information["&id"].isEqualTo(attr.type_);
    if (infoTypes === EntryInformationSelection_infoTypes_attributeTypesOnly && !isFamily) {
        return {
            attributeType: attr.type_,
        };
    }
    if (
        (infoTypes !== EntryInformationSelection_infoTypes_attributeTypesOnly)
        && (infoTypes !== EntryInformationSelection_infoTypes_attributeTypesAndValues)
    ) {
        return undefined;
    }
    /**
     * From ITU Recommendation X.511, Section 7.6:
     *
     * > If an attribute is of a type that is a carrier of other attributes,
     * > e.g., a family-information attribute, then the value(s) shall be
     * > returned independent of the setting of the infoTypes component, but
     * > the infoTypes specification shall be applied to the contained
     * > attributes.
     */
    const transform = (
        isFamily
        && (infoTypes === EntryInformationSelection_infoTypes_attributeTypesOnly)
    )
        ? useAttributeTypesInFamilyValue
        : undefined;
    if (!returnContexts) {
        return {
            attribute: new Attribute(attr.type_, copyValues(attr, transform)),
        };
    }
    if (!transform) {
        return {
            attribute: attr,
        };
    }
    return {
        attribute: new Attribute(
            attr.type_,
            attr.values.map(transform),
            attr.valuesWithContext?.map((vwc) => new Attribute_valuesWithContext_Item(
                transform(vwc.value),
                vwc.contextList,
            )),
        ),
    };
}

/**
 * @summary Select information from an entry to produce `EntryInformation`
 * @description
 *
 * This function implements most of the entry information selection algorithm
 * described in the International Telecommunication Union's (ITU) Recommendation
 * X.511 (2016), Section 7.6.
 *
 * This implementation handles (inclusively):
 *
 * - Attribute subtyping
 * - The `preference` alternative in context assertions
 * - The special attribute type, `id-oa-allAttributeTypes`
 *
 * This implementation does _not_ handle the `familyReturn` option, because this
 * is too closely tied with how entries are stored, read, and represented in
 * memory. For complete support for entry information selection, the system
 * using this function should just read this option before passing it into this
 * function and should call this function for every family member.
 *
 * This implementation might seem to not support the `noSubtypeSelection`
 * service control, but this can be trivially supported by using a
 * `getAttributeSupertypes` function that always returns an empty array. The
 * same may be said for the `dontSelectFriends` service control. This function
 * expects the final and complete entry containing all attributes that are to
 * be selected from; if friends are desired in the selected output, they should
 * be included in the `information` of the `entry` parameter; if friends are not
 * desired, they should simply be excluded.
 *
 * The returned `EntryInformation` is brand-new. The input is not modified.
 * However, some of its innermost references may still be held in common with
 * the output `EntryInformation`.
 *
 * ### ASN.1 Definitions:
 *
 * ```asn1
 * EntryInformationSelection ::= SET {
 *   attributes                     CHOICE {
 *     allUserAttributes         [0]  NULL,
 *     select                    [1]  SET OF AttributeType
 *     -- empty set implies no attributes are requested -- } DEFAULT allUserAttributes:NULL,
 *     infoTypes               [2]  INTEGER {
 *       attributeTypesOnly        (0),
 *       attributeTypesAndValues   (1)} DEFAULT attributeTypesAndValues,
 *   extraAttributes                CHOICE {
 *     allOperationalAttributes  [3]  NULL,
 *     select                    [4]  SET SIZE (1..MAX) OF AttributeType } OPTIONAL,
 *   contextSelection               ContextSelection OPTIONAL,
 *   returnContexts                 BOOLEAN DEFAULT FALSE,
 *   familyReturn                   FamilyReturn DEFAULT {memberSelect contributingEntriesOnly} }
 *
 * ContextSelection  ::=  CHOICE {
 *   allContexts       NULL,
 *   selectedContexts  SET SIZE (1..MAX) OF TypeAndContextAssertion,
 *   ... }
 *
 * TypeAndContextAssertion ::= SEQUENCE {
 *   type               AttributeType,
 *   contextAssertions  CHOICE {
 *     preference         SEQUENCE OF ContextAssertion,
 *     all                SET OF ContextAssertion,
 *     ...},
 *   ... }
 *
 * EntryInformation ::= SEQUENCE {
 *   name                  Name,
 *   fromEntry             BOOLEAN DEFAULT TRUE,
 *   information           SET SIZE (1..MAX) OF CHOICE {
 *     attributeType         AttributeType,
 *     attribute             Attribute{{SupportedAttributes}},
 *     ...} OPTIONAL,
 *   incompleteEntry  [3]  BOOLEAN DEFAULT FALSE,
 *   partialName      [4]  BOOLEAN DEFAULT FALSE,
 *   derivedEntry     [5]  BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 * @param {EntryInformationSelection} eis The entry information selection.
 * @param {EntryInformation} entry The entry whose information is to be selected.
 * @param {function} isOperationalAttribute A function that determines if an
 *  attribute type is operational, returning `true` if it is.
 * @param {function} getAttributeSupertypes A function that returns the object
 *  identifiers of the supertypes of the input attribute type.
 * @param {function} getContextMatcher A function that takes a context type
 *  object identifier and returns a function that can be used to evaluate a
 *  context value of that type against the corresponding assertion type.
 * @returns {EntryInformation} A brand new `EntryInformation` that has been
 *  filtered according to the selections imposed by `eis`.
 * @function
 */
export
function selectFromEntry (
    eis: EntryInformationSelection,
    entry: EntryInformation,
    getEqualityMatcher: (contextType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
    getContextMatcher: (contextType: OBJECT_IDENTIFIER) => ContextMatcher | undefined,
    isOperationalAttribute: (attributeType: OBJECT_IDENTIFIER) => boolean | undefined,
    getAttributeSupertypes: (attributeType: OBJECT_IDENTIFIER) => OBJECT_IDENTIFIER[],
    determineAbsentMatch: (contextType: OBJECT_IDENTIFIER) => boolean,
): EntryInformation {
    // Constructed selections may omit ASN.1 DEFAULT fields that the decoder fills.
    const infoTypes = eis.infoTypes ?? EntryInformationSelection._default_value_for_infoTypes;
    const attributes: Set<string> | undefined = (eis.attributes && ("select" in eis.attributes))
        ? new Set(eis.attributes.select.map((attr) => attr.toString()))
        : undefined;
    const extraAttributes: Set<string> | undefined = (eis.extraAttributes && ("select" in eis.extraAttributes))
        ? new Set(eis.extraAttributes.select.map((attr) => attr.toString()))
        : undefined;
    const selectedContexts: Map<string, TypeAndContextAssertion[]> | undefined = (
        eis.contextSelection
        && ("selectedContexts" in eis.contextSelection)
    )
        ? groupByOID(eis.contextSelection.selectedContexts, (sc) => sc.type_)
        : undefined;

    const einfo = entry.information ?? [];
    const selectedByType: Attribute[] = new Array(einfo.length);
    let selectedByTypeCount = 0;
    for (let i = 0; i < einfo.length; i++) {
        const info = einfo[i];
        let attributeType!: OBJECT_IDENTIFIER;
        if ("attributeType" in info) {
            attributeType = info.attributeType;
        } else if ("attribute" in info) {
            attributeType = info.attribute.type_;
        } else {
            continue;
        }
        const isOperational = isOperationalAttribute(attributeType);
        const supertypes = getAttributeSupertypes(attributeType);
        if (isOperational) {
            if (
                eis.extraAttributes
                && ("allOperationalAttributes" in eis.extraAttributes)
            ) {
                const attr = Attribute.fromEntryInfoItem(info);
                if (attr) {
                    selectedByType[selectedByTypeCount++] = attr;
                }
            }
            if (extraAttributes) {
                const has = [
                    attributeType,
                    ...supertypes,
                ].some((type_) => extraAttributes.has(type_.toString()));
                if (has) {
                    const attr = Attribute.fromEntryInfoItem(info);
                    if (attr) {
                        selectedByType[selectedByTypeCount++] = attr;
                    }
                }
            } else {
                continue;
            }
        } else {
            if (attributes) {
                const has = [
                    attributeType,
                    ...supertypes,
                ].some((type_) => attributes.has(type_.toString()));
                if (has) {
                    const attr = Attribute.fromEntryInfoItem(info);
                    if (attr) {
                        selectedByType[selectedByTypeCount++] = attr;
                    }
                }
            } else {
                const attr = Attribute.fromEntryInfoItem(info);
                if (attr) {
                    selectedByType[selectedByTypeCount++] = attr;
                }
            }
        }
    }
    selectedByType.length = selectedByTypeCount;

    const selectedAttributes: Attribute[] = Array.from(
        groupByOID(selectedByType, (attr) => attr.type_).values(),
        (group) => group.length === 1 ? group[0] : mergeAttributes(group),
    );

    const preferences: Map<ContextAssertion[], number> = new Map();
    const directMatchCache = new Map();

    let attributesSelectedByContext = selectedAttributes;
    if (selectedContexts) {
        const afterAll: Attribute[] = new Array(selectedAttributes.length);
        let afterAllCount = 0;
        for (let i = 0; i < selectedAttributes.length; i++) {
            const attr = selectedAttributes[i];
            const filtered = filterAttribute(attr, (contexts: Context[]): boolean => {
                // A ContextAssertion is true for a particular attribute value if:
                // ...the attribute value contains no contexts of the asserted contextType
                if (contexts.length === 0) {
                    return true;
                }
                const TYPE_OID: string = attr.type_.toString();
                const typeAndSuperTypes: Set<string> = new Set([
                    TYPE_OID,
                    ALL_ATTRIBUTE_TYPES,
                    ...getAttributeSupertypes(attr.type_).map((oid) => oid.toString()),
                ]);
                const typeAndContextAssertions = Array.from(typeAndSuperTypes)
                    .flatMap((oid) => selectedContexts.get(oid) ?? []);
                if (typeAndContextAssertions.length === 0) {
                    return true; // There are no context assertions for this attribute type.
                }
                return typeAndContextAssertions.every((taca): boolean => evaluateTypeAndContextAssertion(
                    taca,
                    attr,
                    contexts,
                    selectedAttributes,
                    getEqualityMatcher,
                    getContextMatcher,
                    determineAbsentMatch,
                    preferences,
                    directMatchCache,
                ) ?? false);
            });
            if (filtered) {
                afterAll[afterAllCount++] = filtered;
            }
        }
        afterAll.length = afterAllCount;
        const afterPreference: Attribute[] = new Array(afterAllCount);
        let afterPreferenceCount = 0;
        for (let i = 0; i < afterAllCount; i++) {
            const attr = afterAll[i];
            const filtered = filterAttribute(attr, (contexts: Context[]): boolean => {
                // A ContextAssertion is true for a particular attribute value if:
                // ...the attribute value contains no contexts of the asserted contextType
                if (contexts.length === 0) {
                    return true;
                }
                const TYPE_OID: string = attr.type_.toString();
                const typeAndSuperTypes: Set<string> = new Set([
                    TYPE_OID,
                    ALL_ATTRIBUTE_TYPES,
                    ...getAttributeSupertypes(attr.type_).map((oid) => oid.toString()),
                ]);
                const typeAndContextAssertions = Array.from(typeAndSuperTypes)
                    .flatMap((oid) => selectedContexts.get(oid) ?? []);
                if (typeAndContextAssertions.length === 0) {
                    return true; // There are no context assertions for this attribute type.
                }
                return typeAndContextAssertions.every((taca): boolean => {
                    if (!("preference" in taca.contextAssertions)) {
                        return true; // We already filtered by this.
                    }
                    const prefIndex = preferences.get(taca.contextAssertions.preference);
                    if (prefIndex === undefined) {
                        // No value matched any preference assertion via (a)/(b).
                        // Keep this value only if it is a fallback for one of them.
                        return taca.contextAssertions.preference.some((pref) => contexts.some((c) => (
                            c.contextType.isEqualTo(pref.contextType)
                            && c.fallback
                        )));
                    }
                    assert(prefIndex > -1);
                    const pref = taca.contextAssertions.preference[prefIndex];
                    assert(pref);
                    return !!evaluateContextAssertion(
                        pref,
                        contexts,
                        getContextMatcher,
                        determineAbsentMatch,
                    );
                });
            });
            if (filtered) {
                afterPreference[afterPreferenceCount++] = filtered;
            }
        }
        afterPreference.length = afterPreferenceCount;
        attributesSelectedByContext = afterPreference;
    }

    const infos: EntryInformation_information_Item[] = new Array(attributesSelectedByContext.length);
    let infoCount = 0;
    for (let i = 0; i < attributesSelectedByContext.length; i++) {
        const info = attributeToInformationItem(
            attributesSelectedByContext[i],
            infoTypes,
            eis.returnContexts,
        );
        if (info) {
            infos[infoCount++] = info;
        }
    }
    infos.length = infoCount;

    return new EntryInformation(
        entry.name,
        entry.fromEntry,
        infos,
        entry.incompleteEntry,
        entry.partialName,
        entry.derivedEntry,
        entry._unrecognizedExtensionsList,
    );
}

export default selectFromEntry;
