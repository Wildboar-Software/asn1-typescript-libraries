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
import type { ContextMatcher } from "../types/matching.mjs";
import {
    id_oa_allAttributeTypes,
} from "../modules/InformationFramework/id-oa-allAttributeTypes.va.mjs";
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

const ALL_ATTRIBUTE_TYPES: string = id_oa_allAttributeTypes.toString();

/**
 * One empty context list stands for every context-less value: X.501 §8.9.2.4
 * (b) does not distinguish them, and the sibling walk stops at the first match.
 * Evaluation only reads this array.
 */
const EMPTY_CONTEXTS: Context[] = [];

type DirectContextMatchCache = Map<string, Map<ContextAssertion, boolean>>;

type GetContextMatcher = (contextType: OBJECT_IDENTIFIER) => ContextMatcher | undefined;
type DetermineAbsentMatch = (contextType: OBJECT_IDENTIFIER) => boolean;
type GetAttributeSupertypes = (attributeType: OBJECT_IDENTIFIER) => OBJECT_IDENTIFIER[];

interface ContextFilterState {
    readonly selectedContexts: Map<string, TypeAndContextAssertion[]>;
    readonly selectedAttributes: Attribute[];
    readonly preferences: Map<ContextAssertion[], number>;
    readonly directMatchCache: DirectContextMatchCache;
    readonly assertionCache: Map<string, TypeAndContextAssertion[]>;
    readonly getAttributeSupertypes: GetAttributeSupertypes;
    readonly getContextMatcher: GetContextMatcher;
    readonly determineAbsentMatch: DetermineAbsentMatch;
}

/**
 * Combine attributes of the same type. Type-only information items become
 * empty {@link Attribute}s, so this also folds them into valued attributes
 * of the same type.
 */
function mergeAttributes (attrs: Attribute[]): Attribute {
    const attrCount = attrs.length;
    if (attrCount === 1) {
        return attrs[0];
    }
    const values: ASN1Element[] = [];
    const valuesWithContext: Attribute_valuesWithContext_Item[] = [];
    for (let i = 0; i < attrCount; i++) {
        const attr = attrs[i];
        const attrValues = attr.values;
        const attrValueCount = attrValues.length;
        for (let j = 0; j < attrValueCount; j++) {
            values.push(attrValues[j]);
        }
        const contextual = attr.valuesWithContext;
        if (!contextual) {
            continue;
        }
        const contextualCount = contextual.length;
        for (let j = 0; j < contextualCount; j++) {
            valuesWithContext.push(contextual[j]);
        }
    }
    return new Attribute(
        attrs[0].type_,
        values,
        valuesWithContext.length > 0 ? valuesWithContext : undefined,
    );
}

function typeOrSupertypeSelected (
    attributeType: OBJECT_IDENTIFIER,
    supertypes: OBJECT_IDENTIFIER[],
    selected: Set<string>,
): boolean {
    if (selected.has(attributeType.toString())) {
        return true;
    }
    const supertypeCount = supertypes.length;
    for (let i = 0; i < supertypeCount; i++) {
        if (selected.has(supertypes[i].toString())) {
            return true;
        }
    }
    return false;
}

function oidSet (oids: OBJECT_IDENTIFIER[]): Set<string> {
    const selected: Set<string> = new Set();
    const count = oids.length;
    for (let i = 0; i < count; i++) {
        selected.add(oids[i].toString());
    }
    return selected;
}

function groupContextAssertions (
    items: TypeAndContextAssertion[],
): Map<string, TypeAndContextAssertion[]> {
    const result: Map<string, TypeAndContextAssertion[]> = new Map();
    const count = items.length;
    for (let i = 0; i < count; i++) {
        const item = items[i];
        const key = item.type_.toString();
        let group = result.get(key);
        if (!group) {
            group = [];
            result.set(key, group);
        }
        group.push(item);
    }
    return result;
}

/**
 * Whether any selected value of `type_` already satisfies `ca` via
 * X.501 §8.9.2.4 (a) or (b). Cached on `(type OID, ca)` so the sibling
 * walk runs once per pair.
 */
function typeHasDirectContextMatch (
    selectedAttributes: Attribute[],
    type_: OBJECT_IDENTIFIER,
    ca: ContextAssertion,
    getContextMatcher: GetContextMatcher,
    determineAbsentMatch: DetermineAbsentMatch,
    cache: DirectContextMatchCache,
): boolean {
    const typeKey = type_.toString();
    let byAssertion = cache.get(typeKey);
    if (!byAssertion) {
        byAssertion = new Map();
        cache.set(typeKey, byAssertion);
    } else {
        const cached = byAssertion.get(ca);
        if (cached !== undefined) {
            return cached;
        }
    }
    let matched = false;
    const attributeCount = selectedAttributes.length;
    for (let i = 0; i < attributeCount; i++) {
        const attr = selectedAttributes[i];
        if (!attr.type_.isEqualTo(type_)) {
            continue;
        }
        if (
            (attr.values.length > 0)
            && evaluateContextAssertion(
                ca,
                EMPTY_CONTEXTS,
                getContextMatcher,
                determineAbsentMatch,
            )
        ) {
            matched = true;
            break;
        }
        const contextual = attr.valuesWithContext;
        if (contextual) {
            const contextualCount = contextual.length;
            for (let j = 0; j < contextualCount; j++) {
                if (evaluateContextAssertion(
                    ca,
                    contextual[j].contextList,
                    getContextMatcher,
                    determineAbsentMatch,
                )) {
                    matched = true;
                    break;
                }
            }
        }
        if (matched) {
            break;
        }
    }
    byAssertion.set(ca, matched);
    return matched;
}

function contextListHasFallback (
    contexts: Context[],
    contextType: OBJECT_IDENTIFIER,
): boolean {
    const count = contexts.length;
    for (let i = 0; i < count; i++) {
        const context = contexts[i];
        if (context.fallback && context.contextType.isEqualTo(contextType)) {
            return true;
        }
    }
    return false;
}

function preferenceHasFallback (
    preference: ContextAssertion[],
    contexts: Context[],
): boolean {
    const count = preference.length;
    for (let i = 0; i < count; i++) {
        if (contextListHasFallback(contexts, preference[i].contextType)) {
            return true;
        }
    }
    return false;
}

function appendAssertionsForType (
    assertions: TypeAndContextAssertion[],
    seen: Set<string>,
    typeKey: string,
    selectedContexts: Map<string, TypeAndContextAssertion[]>,
): void {
    if (seen.has(typeKey)) {
        return;
    }
    seen.add(typeKey);
    const found = selectedContexts.get(typeKey);
    if (!found) {
        return;
    }
    const count = found.length;
    for (let i = 0; i < count; i++) {
        assertions.push(found[i]);
    }
}

/**
 * Context assertions that apply to this attribute type, in the order
 * type, `id-oa-allAttributeTypes`, then supertypes. Built once per type:
 * the list does not depend on the value.
 */
function assertionsForAttribute (
    attr: Attribute,
    state: ContextFilterState,
): TypeAndContextAssertion[] {
    const typeKey = attr.type_.toString();
    const cached = state.assertionCache.get(typeKey);
    if (cached !== undefined) {
        return cached;
    }
    const seen: Set<string> = new Set();
    const assertions: TypeAndContextAssertion[] = [];
    appendAssertionsForType(assertions, seen, typeKey, state.selectedContexts);
    appendAssertionsForType(assertions, seen, ALL_ATTRIBUTE_TYPES, state.selectedContexts);
    const supertypes = state.getAttributeSupertypes(attr.type_);
    const supertypeCount = supertypes.length;
    for (let i = 0; i < supertypeCount; i++) {
        appendAssertionsForType(
            assertions,
            seen,
            supertypes[i].toString(),
            state.selectedContexts,
        );
    }
    state.assertionCache.set(typeKey, assertions);
    return assertions;
}

function allAssertionsHold (
    all: ContextAssertion[],
    contexts: Context[],
    attrType: OBJECT_IDENTIFIER,
    state: ContextFilterState,
): boolean {
    const count = all.length;
    for (let i = 0; i < count; i++) {
        const ca = all[i];
        if (evaluateContextAssertion(
            ca,
            contexts,
            state.getContextMatcher,
            state.determineAbsentMatch,
        )) {
            continue;
        }
        // This value failed (a) and (b). If it has no fallback of this type,
        // it cannot match via (c).
        if (!contextListHasFallback(contexts, ca.contextType)) {
            return false;
        }
        // Fallback is denied if any sibling of the same type already matched
        // via (a)/(b).
        if (typeHasDirectContextMatch(
            state.selectedAttributes,
            attrType,
            ca,
            state.getContextMatcher,
            state.determineAbsentMatch,
            state.directMatchCache,
        )) {
            return false;
        }
    }
    return true;
}

/**
 * First pass over preference alternatives. Records the most-preferred
 * assertion index that matches some value, and does not drop the value.
 * Search stops at the assertion already chosen, which is the same window
 * as slicing the SEQUENCE to that index.
 */
function notePreference (
    preference: ContextAssertion[],
    contexts: Context[],
    state: ContextFilterState,
): void {
    const existingPreference = state.preferences.get(preference) ?? -1;
    const requestedEnd = (existingPreference > -1) ? existingPreference : preference.length;
    const limit = (requestedEnd < preference.length) ? requestedEnd : preference.length;
    let preferred = -1;
    for (let i = 0; i < limit; i++) {
        if (evaluateContextAssertion(
            preference[i],
            contexts,
            state.getContextMatcher,
            state.determineAbsentMatch,
        )) {
            preferred = i;
            break;
        }
    }
    if (
        (preferred > -1)
        && (
            (existingPreference < 0)
            || (preferred < existingPreference)
        )
    ) {
        state.preferences.set(preference, preferred);
    }
}

function valuePassesEstablishingPass (
    contexts: Context[],
    assertions: TypeAndContextAssertion[],
    attrType: OBJECT_IDENTIFIER,
    state: ContextFilterState,
): boolean {
    const count = assertions.length;
    for (let i = 0; i < count; i++) {
        const contextAssertions = assertions[i].contextAssertions;
        if ("all" in contextAssertions) {
            if (!allAssertionsHold(contextAssertions.all, contexts, attrType, state)) {
                return false;
            }
        } else if ("preference" in contextAssertions) {
            notePreference(contextAssertions.preference, contexts, state);
        } else {
            return false;
        }
    }
    return true;
}

function valuePassesPreferencePass (
    contexts: Context[],
    assertions: TypeAndContextAssertion[],
    state: ContextFilterState,
): boolean {
    const count = assertions.length;
    for (let i = 0; i < count; i++) {
        const contextAssertions = assertions[i].contextAssertions;
        if (!("preference" in contextAssertions)) {
            continue;
        }
        const preference = contextAssertions.preference;
        const prefIndex = state.preferences.get(preference);
        if (prefIndex === undefined) {
            // No value matched any preference assertion via (a)/(b).
            // Keep this value only if it is a fallback for one of them.
            if (!preferenceHasFallback(preference, contexts)) {
                return false;
            }
            continue;
        }
        assert(prefIndex > -1);
        const pref = preference[prefIndex];
        assert(pref);
        if (!evaluateContextAssertion(
            pref,
            contexts,
            state.getContextMatcher,
            state.determineAbsentMatch,
        )) {
            return false;
        }
    }
    return true;
}

/**
 * Values without contexts always survive context selection (X.501 §8.9.2.4
 * (b)), so only `valuesWithContext` is filtered. An attribute that had values
 * and loses them all is dropped; a type-only empty attribute is kept.
 *
 * `establishPreferences` is the first pass: `all` assertions filter, and
 * `preference` assertions only record the winning index. The second pass
 * applies that index.
 */
function filterAttributeContexts (
    attr: Attribute,
    establishPreferences: boolean,
    state: ContextFilterState,
): Attribute | undefined {
    const source = attr.valuesWithContext;
    if (!source?.length) {
        return attr;
    }
    const sourceCount = source.length;
    const kept: Attribute_valuesWithContext_Item[] = [];
    let assertions: TypeAndContextAssertion[] | undefined;
    for (let i = 0; i < sourceCount; i++) {
        const item = source[i];
        const contexts = item.contextList;
        if (contexts.length === 0) {
            kept.push(item);
            continue;
        }
        if (!assertions) {
            assertions = assertionsForAttribute(attr, state);
            // No assertions for this type: every contextual value survives.
            if (assertions.length === 0) {
                return attr;
            }
        }
        const keep = establishPreferences
            ? valuePassesEstablishingPass(contexts, assertions, attr.type_, state)
            : valuePassesPreferencePass(contexts, assertions, state);
        if (keep) {
            kept.push(item);
        }
    }
    if (kept.length === sourceCount) {
        return attr;
    }
    if ((attr.values.length === 0) && (kept.length === 0)) {
        return undefined;
    }
    return new Attribute(
        attr.type_,
        attr.values,
        kept.length > 0 ? kept : undefined,
    );
}

function selectAttributesByContext (
    selectedAttributes: Attribute[],
    selectedContexts: Map<string, TypeAndContextAssertion[]>,
    getAttributeSupertypes: GetAttributeSupertypes,
    getContextMatcher: GetContextMatcher,
    determineAbsentMatch: DetermineAbsentMatch,
): Attribute[] {
    const state: ContextFilterState = {
        selectedContexts,
        selectedAttributes,
        preferences: new Map(),
        directMatchCache: new Map(),
        assertionCache: new Map(),
        getAttributeSupertypes,
        getContextMatcher,
        determineAbsentMatch,
    };
    const attributeCount = selectedAttributes.length;
    const afterEstablishing: Attribute[] = [];
    for (let i = 0; i < attributeCount; i++) {
        const filtered = filterAttributeContexts(selectedAttributes[i], true, state);
        if (filtered) {
            afterEstablishing.push(filtered);
        }
    }
    const afterEstablishingCount = afterEstablishing.length;
    const selected: Attribute[] = [];
    for (let i = 0; i < afterEstablishingCount; i++) {
        const filtered = filterAttributeContexts(afterEstablishing[i], false, state);
        if (filtered) {
            selected.push(filtered);
        }
    }
    return selected;
}

function useAttributeTypesInFamilyEntries (entries: FamilyEntries): FamilyEntries {
    const sourceEntries = entries.familyEntries;
    const entryCount = sourceEntries.length;
    const familyEntries: FamilyEntry[] = [];
    for (let i = 0; i < entryCount; i++) {
        const entry = sourceEntries[i];
        const sourceInfo = entry.information;
        const infoCount = sourceInfo.length;
        const information: FamilyEntry["information"] = [];
        for (let j = 0; j < infoCount; j++) {
            const info = sourceInfo[j];
            if (!("attribute" in info)) {
                information.push(info);
            } else {
                information.push({
                    attributeType: info.attribute.type_,
                });
            }
        }
        let familyInfo: FamilyEntries[] | undefined;
        const sourceFamily = entry.family_info;
        if (sourceFamily) {
            const familyCount = sourceFamily.length;
            familyInfo = [];
            for (let j = 0; j < familyCount; j++) {
                familyInfo.push(useAttributeTypesInFamilyEntries(sourceFamily[j]));
            }
        }
        familyEntries.push(new FamilyEntry(
            entry.rdn,
            information,
            familyInfo,
            entry._unrecognizedExtensionsList,
        ));
    }
    return new FamilyEntries(
        entries.family_class,
        familyEntries,
        entries._unrecognizedExtensionsList,
    );
}

function useAttributeTypesInFamilyValue (value: ASN1Element): ASN1Element {
    return _encode_FamilyEntries(
        useAttributeTypesInFamilyEntries(_decode_FamilyEntries(value)),
        () => new DERElement(),
    );
}

function appendValues (
    destination: ASN1Element[],
    values: ASN1Element[],
    transform: ((value: ASN1Element) => ASN1Element) | undefined,
): void {
    const count = values.length;
    if (transform) {
        for (let i = 0; i < count; i++) {
            destination.push(transform(values[i]));
        }
    } else {
        for (let i = 0; i < count; i++) {
            destination.push(values[i]);
        }
    }
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
        appendValues(values, attr.values, transform);
        const contextual = attr.valuesWithContext;
        if (contextual) {
            const contextualCount = contextual.length;
            if (transform) {
                for (let i = 0; i < contextualCount; i++) {
                    values.push(transform(contextual[i].value));
                }
            } else {
                for (let i = 0; i < contextualCount; i++) {
                    values.push(contextual[i].value);
                }
            }
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
    const values: ASN1Element[] = [];
    appendValues(values, attr.values, transform);
    const sourceContextual = attr.valuesWithContext;
    let valuesWithContext: Attribute_valuesWithContext_Item[] | undefined;
    if (sourceContextual) {
        const contextualCount = sourceContextual.length;
        valuesWithContext = [];
        for (let i = 0; i < contextualCount; i++) {
            const item = sourceContextual[i];
            valuesWithContext.push(new Attribute_valuesWithContext_Item(
                transform(item.value),
                item.contextList,
            ));
        }
    }
    return {
        attribute: new Attribute(
            attr.type_,
            values,
            valuesWithContext,
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
    isOperationalAttribute: (attributeType: OBJECT_IDENTIFIER) => boolean | undefined,
    getAttributeSupertypes: GetAttributeSupertypes,
    getContextMatcher: GetContextMatcher,
    determineAbsentMatch: DetermineAbsentMatch,
): EntryInformation {
    // Constructed selections may omit ASN.1 DEFAULT fields that the decoder fills.
    const infoTypes = eis.infoTypes ?? EntryInformationSelection._default_value_for_infoTypes;
    const attributes: Set<string> | undefined = (eis.attributes && ("select" in eis.attributes))
        ? oidSet(eis.attributes.select)
        : undefined;
    const extraAttributes: Set<string> | undefined = (eis.extraAttributes && ("select" in eis.extraAttributes))
        ? oidSet(eis.extraAttributes.select)
        : undefined;
    const selectedContexts: Map<string, TypeAndContextAssertion[]> | undefined = (
        eis.contextSelection
        && ("selectedContexts" in eis.contextSelection)
    )
        ? groupContextAssertions(eis.contextSelection.selectedContexts)
        : undefined;

    const information = entry.information;
    const groups: Map<string, Attribute[]> = new Map();
    if (information) {
        const informationCount = information.length;
        for (let i = 0; i < informationCount; i++) {
            const info = information[i];
            let attributeType: OBJECT_IDENTIFIER;
            if ("attributeType" in info) {
                attributeType = info.attributeType;
            } else if ("attribute" in info) {
                attributeType = info.attribute.type_;
            } else {
                continue;
            }
            const isOperational = isOperationalAttribute(attributeType);
            const supertypes = getAttributeSupertypes(attributeType);
            let selected: boolean;
            if (isOperational) {
                if (eis.extraAttributes && ("allOperationalAttributes" in eis.extraAttributes)) {
                    selected = true;
                } else if (extraAttributes) {
                    selected = typeOrSupertypeSelected(attributeType, supertypes, extraAttributes);
                } else {
                    selected = false;
                }
            } else if (attributes) {
                selected = typeOrSupertypeSelected(attributeType, supertypes, attributes);
            } else {
                selected = true;
            }
            if (!selected) {
                continue;
            }
            const attr = Attribute.fromEntryInfoItem(info);
            if (!attr) {
                continue;
            }
            const typeKey = attr.type_.toString();
            let group = groups.get(typeKey);
            if (!group) {
                group = [];
                groups.set(typeKey, group);
            }
            group.push(attr);
        }
    }

    const selectedAttributes: Attribute[] = [];
    for (const group of groups.values()) {
        selectedAttributes.push(mergeAttributes(group));
    }

    const attributesSelectedByContext = selectedContexts
        ? selectAttributesByContext(
            selectedAttributes,
            selectedContexts,
            getAttributeSupertypes,
            getContextMatcher,
            determineAbsentMatch,
        )
        : selectedAttributes;

    const contextCount = attributesSelectedByContext.length;
    const infos: EntryInformation_information_Item[] = [];
    for (let i = 0; i < contextCount; i++) {
        const info = attributeToInformationItem(
            attributesSelectedByContext[i],
            infoTypes,
            eis.returnContexts,
        );
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
