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
    const values: ASN1Element[] = [];
    const valuesWithContext: Attribute_valuesWithContext_Item[] = [];
    for (const attr of attrs) {
        values.push(...attr.values);
        if (attr.valuesWithContext) {
            valuesWithContext.push(...attr.valuesWithContext);
        }
    }
    return new Attribute(
        attrs[0].type_,
        values,
        valuesWithContext.length > 0 ? valuesWithContext : undefined,
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
    const source = attr.valuesWithContext;
    if (!source?.length) {
        return attr;
    }
    const valuesWithContext: Attribute_valuesWithContext_Item[] = new Array(source.length);
    let kept = 0;
    for (let i = 0; i < source.length; i++) {
        const vwc = source[i];
        if (keep(vwc.contextList)) {
            valuesWithContext[kept++] = vwc;
        }
    }
    if (kept === source.length) {
        return attr;
    }
    if ((attr.values.length === 0) && (kept === 0)) {
        return undefined;
    }
    if (kept === 0) {
        return new Attribute(
            attr.type_,
            attr.values,
        );
    }
    valuesWithContext.length = kept;
    return new Attribute(
        attr.type_,
        attr.values,
        valuesWithContext,
    );
}

/**
 * Context assertions that govern `type_`, in evaluation order: the type
 * itself, `id-oa-allAttributeTypes`, then its supertypes.
 */
function contextAssertionsForType (
    type_: OBJECT_IDENTIFIER,
    selectedContexts: Map<string, TypeAndContextAssertion[]>,
    getAttributeSupertypes: (attributeType: OBJECT_IDENTIFIER) => OBJECT_IDENTIFIER[],
): TypeAndContextAssertion[] {
    const supertypes = getAttributeSupertypes(type_);
    const seen: Set<string> = new Set();
    const keys: string[] = new Array(supertypes.length + 2);
    const typeKey = type_.toString();
    seen.add(typeKey);
    keys[0] = typeKey;
    let keyCount = 1;
    if (typeKey !== ALL_ATTRIBUTE_TYPES) {
        seen.add(ALL_ATTRIBUTE_TYPES);
        keys[keyCount++] = ALL_ATTRIBUTE_TYPES;
    }
    for (let i = 0; i < supertypes.length; i++) {
        const key = supertypes[i].toString();
        if (seen.has(key)) {
            continue;
        }
        seen.add(key);
        keys[keyCount++] = key;
    }
    let assertionCount = 0;
    for (let i = 0; i < keyCount; i++) {
        const found = selectedContexts.get(keys[i]);
        if (found) {
            assertionCount += found.length;
        }
    }
    const assertions: TypeAndContextAssertion[] = new Array(assertionCount);
    let n = 0;
    for (let i = 0; i < keyCount; i++) {
        const found = selectedContexts.get(keys[i]);
        if (!found) {
            continue;
        }
        for (let j = 0; j < found.length; j++) {
            assertions[n++] = found[j];
        }
    }
    return assertions;
}

/**
 * One context-selection pass. The assertion list for an attribute type is
 * built once, on the first contextual value, and reused for the rest.
 */
function takeFilteredAttributes (
    source: Attribute[],
    selectedContexts: Map<string, TypeAndContextAssertion[]>,
    getAttributeSupertypes: (attributeType: OBJECT_IDENTIFIER) => OBJECT_IDENTIFIER[],
    predicate: (
        attr: Attribute,
        contexts: Context[],
        applicable: TypeAndContextAssertion[],
    ) => boolean,
): Attribute[] {
    const keptAttrs: Attribute[] = new Array(source.length);
    let kept = 0;
    for (let i = 0; i < source.length; i++) {
        const attr = source[i];
        if (!attr.valuesWithContext?.length) {
            keptAttrs[kept++] = attr;
            continue;
        }
        let applicable: TypeAndContextAssertion[] | undefined;
        const filtered = filterAttribute(attr, (contexts) => {
            // A ContextAssertion is true for a particular attribute value if:
            // ...the attribute value contains no contexts of the asserted contextType
            if (contexts.length === 0) {
                return true;
            }
            let assertions = applicable;
            if (assertions === undefined) {
                assertions = contextAssertionsForType(
                    attr.type_,
                    selectedContexts,
                    getAttributeSupertypes,
                );
                applicable = assertions;
            }
            if (assertions.length === 0) {
                return true; // There are no context assertions for this attribute type.
            }
            return predicate(attr, contexts, assertions);
        });
        if (filtered) {
            keptAttrs[kept++] = filtered;
        }
    }
    keptAttrs.length = kept;
    return keptAttrs;
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
        const values: ASN1Element[] = [];
        for (const value of attr.iterValuesOmittingContexts()) {
            values.push(transform ? transform(value) : value);
        }
        return {
            attribute: new Attribute(attr.type_, values),
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

    // TODO: Pre-allocate this array.
    const selectedByType: Attribute[] = [];
    const einfo = entry.information ?? [];
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
                attr && selectedByType.push(attr);
            }
            if (extraAttributes) {
                const has = [
                    attributeType,
                    ...supertypes,
                ].some((type_) => extraAttributes.has(type_.toString()));
                if (has) {
                    const attr = Attribute.fromEntryInfoItem(info);
                    attr && selectedByType.push(attr);
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
                    attr && selectedByType.push(attr);
                }
            } else {
                const attr = Attribute.fromEntryInfoItem(info);
                attr && selectedByType.push(attr);
            }
        }
    }

    const selectedAttributes: Attribute[] = Array.from(
        groupByOID(selectedByType, (attr) => attr.type_).values(),
        mergeAttributes,
    );

    const preferences: Map<ContextAssertion[], number> = new Map();
    const directMatchCache = new Map();

    let attributesSelectedByContext = selectedAttributes;
    if (selectedContexts) {
        const contextsByType = selectedContexts;
        const afterAll = takeFilteredAttributes(
            selectedAttributes,
            contextsByType,
            getAttributeSupertypes,
            (attr, contexts, applicable) => applicable.every((taca): boolean => (
                evaluateTypeAndContextAssertion(
                    taca,
                    attr,
                    contexts,
                    selectedAttributes,
                    getEqualityMatcher,
                    getContextMatcher,
                    determineAbsentMatch,
                    preferences,
                    directMatchCache,
                ) ?? false
            )),
        );
        attributesSelectedByContext = takeFilteredAttributes(
            afterAll,
            contextsByType,
            getAttributeSupertypes,
            (attr, contexts, applicable) => applicable.every((taca): boolean => {
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
            }),
        );
    }

    // TODO: Pre-allocate this array.
    const infos: EntryInformation_information_Item[] = [];
    for (const attr of attributesSelectedByContext) {
        const info = attributeToInformationItem(attr, infoTypes, eis.returnContexts);
        if (info) {
            infos.push(info);
        }
    }

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
