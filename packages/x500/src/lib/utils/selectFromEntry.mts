import { ASN1Element, OBJECT_IDENTIFIER, DERElement } from "asn1-ts";
import type { EntryInformationSelection } from "../modules/DirectoryAbstractService/EntryInformationSelection.ta.mjs";
import { EntryInformation } from "../modules/DirectoryAbstractService/EntryInformation.ta.mjs";
import type {
    TypeAndContextAssertion,
} from "../modules/DirectoryAbstractService/TypeAndContextAssertion.ta.mjs";
import type {
    ContextAssertion,
} from "../modules/InformationFramework/ContextAssertion.ta.mjs";
import type {
    EntryInformation_information_Item,
} from "../modules/DirectoryAbstractService/EntryInformation-information-Item.ta.mjs";
import {
    EntryInformationSelection_infoTypes_attributeTypesAndValues,
    EntryInformationSelection_infoTypes_attributeTypesOnly,
} from "../modules/DirectoryAbstractService/EntryInformationSelection-infoTypes.ta.mjs";
import {
    Attribute,
} from "../modules/InformationFramework/Attribute.ta.mjs";
import {
    Attribute_valuesWithContext_Item,
} from "../modules/InformationFramework/Attribute-valuesWithContext-Item.ta.mjs";
import type ContextMatcher from "../types/ContextMatcher.mjs";
import {
    id_oa_allAttributeTypes,
} from "../modules/InformationFramework/id-oa-allAttributeTypes.va.mjs";
import groupByOID from "./groupByOID.mjs";
import { strict as assert } from "assert";
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
import type ATVAC from "../types/AttributeTypeValueAndContextsTuple.mjs";

const ALL_ATTRIBUTE_TYPES: string = id_oa_allAttributeTypes.toString();

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
            );
        }),
    );
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
    isOperationalAttribute: (attributeType: OBJECT_IDENTIFIER) => boolean | undefined,
    getAttributeSupertypes: (attributeType: OBJECT_IDENTIFIER) => OBJECT_IDENTIFIER[],
    getContextMatcher: (contextType: OBJECT_IDENTIFIER) => ContextMatcher | undefined,
    determineAbsentMatch: (contextType: OBJECT_IDENTIFIER) => boolean,
): EntryInformation {
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

    const selectedAttributes: ATVAC[] = (entry.information ?? [])
        .filter((info): boolean => {
            let attributeType!: OBJECT_IDENTIFIER;
            if ("attributeType" in info) {
                attributeType = info.attributeType;
            } else if ("attribute" in info) {
                attributeType = info.attribute.type_;
            } else {
                return false;
            }
            const isOperational = isOperationalAttribute(attributeType);
            const supertypes = getAttributeSupertypes(attributeType);
            if (isOperational) {
                if (eis.extraAttributes && ("allOperationalAttributes" in eis.extraAttributes)) {
                    return true;
                }
                if (extraAttributes) {
                    return [
                        attributeType,
                        ...supertypes,
                    ].some((type_) => extraAttributes.has(type_.toString()));
                } else {
                    return false;
                }
            } else {
                if (attributes) {
                    return [
                        attributeType,
                        ...supertypes,
                    ].some((type_) => attributes.has(type_.toString()));
                } else {
                    return true;
                }
            }
        })
        .flatMap((info): ATVAC[] => {
            if ("attributeType" in info) {
                return [[ info.attributeType, undefined, [] ]];
            } else if ("attribute" in info) {
                const attr: Attribute = info.attribute;
                return [
                    ...attr.values
                        .map((value: ASN1Element): ATVAC => [ attr.type_, value, [] ]),
                    ...(attr.valuesWithContext ?? [])
                        .map((vwc: Attribute_valuesWithContext_Item): ATVAC => [ attr.type_, vwc.value, vwc.contextList ]),
                ];
            } else {
                return [];
            }
        });

    const preferences: Map<ContextAssertion[], number> = new Map();

    const attributesSelectedByContext = selectedContexts
        ? selectedAttributes
            .filter((atvac: ATVAC): boolean => {
                const [ type_, value, contexts ] = atvac;
                // A ContextAssertion is true for a particular attribute value if:
                // ...the attribute value contains no contexts of the asserted contextType
                if (!value || (contexts.length === 0)) {
                    return true;
                }
                const TYPE_OID: string = type_.toString();
                const typeAndSuperTypes: Set<string> = new Set([
                    TYPE_OID,
                    ALL_ATTRIBUTE_TYPES,
                    ...getAttributeSupertypes(type_).map((oid) => oid.toString()),
                ]);
                const typeAndContextAssertions = Array.from(typeAndSuperTypes)
                    .flatMap((oid) => selectedContexts.get(oid) ?? []);
                if (typeAndContextAssertions.length === 0) {
                    return true; // There are no context assertions for this attribute type.
                }
                return typeAndContextAssertions.every((taca): boolean => {
                    if ("all" in taca.contextAssertions) {
                        return taca.contextAssertions.all.every((ca): boolean => evaluateContextAssertion(
                            ca,
                            contexts,
                            getContextMatcher,
                            determineAbsentMatch,
                        ));
                    } else if ("preference" in taca.contextAssertions) { // This first pass only establishes the preference, but does not filter by it.
                        const existingPreference = preferences.get(taca.contextAssertions.preference) ?? -1;
                        const preferred: number = taca.contextAssertions.preference
                            // Slice so we don't repeatedly retry already superseded assertions.
                            .slice(0, ((existingPreference > -1) ? existingPreference : Infinity))
                            .findIndex((ca: ContextAssertion): boolean => evaluateContextAssertion(
                                ca,
                                contexts,
                                getContextMatcher,
                                determineAbsentMatch,
                            ));
                        if ( // To become the new preferred context assertion,
                            (preferred > -1) // ...obviously, there must be a match
                            && ( // ...but also,
                                (existingPreference < 0) // there must either be no existing preference, or
                                // ...it must also be _more_ preferred than the existing preference to supplant it.
                                || (preferred < existingPreference)
                            )
                        ) {
                            preferences.set(taca.contextAssertions.preference, preferred);
                        }
                        return true;
                    } else {
                        return false; // We do not understand any other type of context assertion.
                    }
                });
            })
            .filter((atvac: ATVAC): boolean => {
                const [ type_, value, contexts ] = atvac;
                // A ContextAssertion is true for a particular attribute value if:
                // ...the attribute value contains no contexts of the asserted contextType
                if (!value || (contexts.length === 0)) {
                    return true;
                }
                const TYPE_OID: string = type_.toString();
                const typeAndSuperTypes: Set<string> = new Set([
                    TYPE_OID,
                    ALL_ATTRIBUTE_TYPES,
                    ...getAttributeSupertypes(type_).map((oid) => oid.toString()),
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
                        return false; // There was never a match.
                    }
                    assert(prefIndex > -1);
                    const pref = taca.contextAssertions.preference[prefIndex];
                    assert(pref);
                    return evaluateContextAssertion(
                        pref,
                        contexts,
                        getContextMatcher,
                        determineAbsentMatch,
                    );
                });
            })
        : selectedAttributes;

    const protoAttributes = groupByOID(attributesSelectedByContext, (atvac) => atvac[0]);
    const infos: EntryInformation_information_Item[] = Object.values(protoAttributes)
        .map((attrs: ATVAC[]): EntryInformation_information_Item | undefined => {
            if (eis.infoTypes === EntryInformationSelection_infoTypes_attributeTypesOnly) {
                /**
                 * From ITU Recommendation X.511, Section 7.6:
                 *
                 * > If an attribute is of a type that is a carrier of other attributes, e.g., a family-information
                 * > attribute, then the value(s) shall be returned independent of the setting of the infoTypes
                 * > component, but the infoTypes specification shall be applied to the contained attributes.
                 */
                if ((family_information["&id"].isEqualTo(attrs[0][0]))) {
                    return {
                        attribute: new Attribute(
                            attrs[0][0],
                            attrs
                                .filter((attr): boolean => (eis.returnContexts ? (attr[2].length === 0) : true))
                                .map((attr: ATVAC) => {
                                    if (!attr[1]) {
                                        return attr[1];
                                    }
                                    const familyEntries = _decode_FamilyEntries(attr[1]);
                                    const newFamilyEntries = useAttributeTypesInFamilyEntries(familyEntries);
                                    return _encode_FamilyEntries(newFamilyEntries, () => new DERElement());
                                })
                                .filter((value: ASN1Element | undefined): value is ASN1Element => !!value),
                            (eis.returnContexts)
                                ? attrs
                                    .filter((attr): boolean => Boolean(attr[1]) && (attr[2].length > 0))
                                    .map((attr) => new Attribute_valuesWithContext_Item(
                                        attr[1]!,
                                        attr[2],
                                    ))
                                : undefined,
                            undefined,
                        ),
                    };
                }
                return {
                    attributeType: attrs[0][0],
                };
            } else if (eis.infoTypes === EntryInformationSelection_infoTypes_attributeTypesAndValues) {
                return {
                    attribute: new Attribute(
                        attrs[0][0],
                        attrs
                            .filter((attr): boolean => (eis.returnContexts ? (attr[2].length === 0) : true))
                            .map((attr: ATVAC) => attr[1])
                            .filter((value: ASN1Element | undefined): value is ASN1Element => !!value),
                        (eis.returnContexts)
                            ? attrs
                                .filter((attr): boolean => Boolean(attr[1]) && (attr[2].length > 0))
                                .map((attr) => new Attribute_valuesWithContext_Item(
                                    attr[1]!,
                                    attr[2],
                                ))
                            : undefined,
                        undefined,
                    ),
                }
            } else {
                return undefined;
            }
        })
        .filter((info): info is EntryInformation_information_Item => !!info);

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
