import type {
    Filter,
} from "../modules/DirectoryAbstractService/Filter.ta";
import type {
    FilterItem,
} from "../modules/DirectoryAbstractService/FilterItem.ta";
import type {
    AttributeValueAssertion,
} from "../modules/InformationFramework/AttributeValueAssertion.ta";
import type {
    ContextAssertion,
} from "../modules/InformationFramework/ContextAssertion.ta";
import type {
    AttributeType,
} from "../modules/InformationFramework/AttributeType.ta";
import type {
    AttributeValue,
} from "../modules/InformationFramework/AttributeValue.ta";
import type {
    AttributeTypeAssertion,
} from "../modules/InformationFramework/AttributeTypeAssertion.ta";
import type {
    MatchingRuleAssertion,
} from "../modules/DirectoryAbstractService/MatchingRuleAssertion.ta";
import {
    Attribute,
} from "../modules/InformationFramework/Attribute.ta";
import type {
    EntryInformation,
} from "../modules/DirectoryAbstractService/EntryInformation.ta";
import type {
    FilterItem_substrings,
} from "../modules/DirectoryAbstractService/FilterItem-substrings.ta";
import type { ASN1Element, OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher";
import type OrderingMatcher from "../types/OrderingMatcher";
import type SubstringsMatcher from "../types/SubstringsMatcher";
import type ApproxMatcher from "../types/ApproxMatcher";
import type ContextMatcher from "../types/ContextMatcher";
import SubstringSelection from "../types/SubstringSelection";
import evaluateContextAssertion from "../utils/evaluateContextAssertion";
import { id_mr_nullMatch } from "../modules/SelectedAttributeTypes/id-mr-nullMatch.va";
import { CannotPerformExactly } from "../errors";
import type { Context } from "@wildboar/x500/src/lib/modules/InformationFramework/Context.ta";
import getAttributeTypesFromFilterItem from "./getAttributeTypesFromFilterItem";

interface MatchedValue {
    type: AttributeType;
    value: ASN1Element;
    contexts?: Context[];
}

interface MatchedEntryInfo extends MatchedValue {
    entryIndex: number;
};

export
interface EvaluateFilterReturn {
    matched: boolean | undefined;
    matchedValues?: MatchedEntryInfo[];
    contributingEntries: Set<number>;
}

export
interface EvaluateFilterSettings {

    /**
     * A function that accepts an attribute type and returns a function
     * that can perform an equality comparison on an asserted value against an
     * attribute value.
     *
     * @readonly
     * @property
     */
    readonly getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined;

    /**
     * A function that accepts an attribute type and returns a function
     * that can perform a ordering matching on an asserted value against an
     * attribute value.
     *
     * @readonly
     * @property
     */
    readonly getOrderingMatcher: (attributeType: OBJECT_IDENTIFIER) => OrderingMatcher | undefined;

    /**
     * A function that accepts an attribute type and returns a function
     * that can perform a substrings matching on an asserted value against an
     * attribute value.
     *
     * @readonly
     * @property
     */
    readonly getSubstringsMatcher: (attributeType: OBJECT_IDENTIFIER) => SubstringsMatcher | undefined;

    /**
     * A function that accepts an attribute type and returns a function
     * that can perform an approximate matching on an asserted value against an
     * attribute value.
     */
    readonly getApproximateMatcher: (attributeType: OBJECT_IDENTIFIER) => ApproxMatcher | undefined;

    /**
     * A function that takes a context type object identifier and returns a
     * function that can perform a context matching with an asserted context
     * value and the actual context value.
     *
     * @readonly
     * @property
     */
    readonly getContextMatcher: (contextType: OBJECT_IDENTIFIER) => ContextMatcher | undefined;

    /**
     * A function that takes a context type object identifier and returns a
     * `boolean` that corresponds to the `&absentMatch` field of the context
     * type definition.
     *
     * @readonly
     * @property
     */
    readonly determineAbsentMatch: (contextType: OBJECT_IDENTIFIER) => boolean;

    /**
     * A function that takes a matching rule object identifier and an attribute
     * type object identifier and returns `true` if the attribute type is
     * compatible with the identified matching rule and `false` if it is not.
     *
     * @readonly
     * @property
     */
    readonly isMatchingRuleCompatibleWithAttributeType: (mr: OBJECT_IDENTIFIER, at: OBJECT_IDENTIFIER) => boolean;

    /**
     * A function that accepts two attribute types, one for an attribute
     * and one for a potential parent attribute type. This function returns a
     * `boolean` indicating whether the attribute type is a subtype of `parent`.
     *
     * WARNING: This MUST also return `true` if the types are equal.
     *
     * @readonly
     * @property
     */
    readonly isAttributeSubtype: (attributeType: OBJECT_IDENTIFIER, parentType: OBJECT_IDENTIFIER) => boolean;

    /**
     * A function that accepts an attribute type and returns an array of object
     * identifiers of all attribute types that are friends. If the
     * `dontMatchFriends` option is used, this should always return an empty
     * array.
     *
     * @readonly
     * @property
     */
    readonly getFriends?: (attributeType: OBJECT_IDENTIFIER) => OBJECT_IDENTIFIER[];

    /**
     * A function that accepts an attribute description and optionally an
     * attribute value. If only an attribute type is supplied, this function
     * returns a `boolean` indicating whether the user is permitted to filter
     * on that attribute type. If the attribute value is supplied as well, this
     * function returns a `boolean` indicating whether the user is permitted to
     * filter on that attribute type and value.
     *
     * @readonly
     * @property
     */
    readonly permittedToMatch: (attributeType: OBJECT_IDENTIFIER, value?: AttributeValue) => boolean;

    /**
     * Referenced in ITU Recommendation X.511, Section 7.8.2.g, this option
     * determines whether the filter should return UNDEFINED or throw an error
     * if none of the matching rules specified in a `FilterItem.extensibleMatch`
     * can be understood or if none are compatible with the specified attribute
     * type.
     *
     * @readonly
     * @property
     */
    readonly performExactly?: boolean;

    /**
     * Referenced in ITU Recommendation X.511, Section 11.2.2, this option
     * determines whether the filter should only return values that contributed
     * to a match for attribute types that contributed to the match.
     * (Unrelated attribute types or attribute types that did not match are not
     * affected by this option.)
     *
     * Within this implementation, this option matters for performance: it
     * determines whether this function bails out as soon as it finds a match
     * for a given filter item. If this option is set, every attribute type of
     * interest is evaluated so that the complete list of matched values can be
     * returned.
     *
     * @readonly
     * @property
     */
    readonly matchedValuesOnly?: boolean;

    /**
     * Referenced in ITU Recommendation X.511, Section 11.2.2, this option
     * determines whether the filter should include values from the
     * distinguished name.
     *
     * @readonly
     * @property
     */
    readonly dnAttribute?: boolean;
}

type AnyFunction = (...args: any[]) => any;

function handleErrors (matcher: AnyFunction | undefined): AnyFunction | undefined {
    if (!matcher) {
        return undefined;
    }
    return (
        assertion: ASN1Element,
        value: ASN1Element,
        ...other: any[]
    ): boolean | undefined => {
        try {
            return matcher(assertion, value, ...other);
        } catch {
            return undefined;
        }
    };
}

export
function getAttributesFromEntry (entry: EntryInformation, dnAttributes: boolean = false): Attribute[] {
    return [
        ...(entry
            .information
            ?.map((info): Attribute | undefined => (("attribute" in info) ? info.attribute : undefined))
            .filter((attr: Attribute | undefined): attr is Attribute => !!attr) ?? []),
        ...(dnAttributes
            ? entry.name.rdnSequence.flatMap((rdn) => rdn.flatMap((atav) => new Attribute(
                atav.type_,
                [
                    atav.value,
                ],
                undefined,
            )))
            : []),
    ];
}

export
function evaluateEquality (
    ava: AttributeValueAssertion,
    entry: EntryInformation,
    options: EvaluateFilterSettings,
): MatchedValue[] | undefined {
    const matcher: EqualityMatcher | undefined = handleErrors(options.getEqualityMatcher(ava.type_));
    if (!matcher) {
        return undefined;
    }
    const attributes = getAttributesFromEntry(entry, options.dnAttribute);
    const friendTypes: OBJECT_IDENTIFIER[] = [
        ava.type_,
        ...(options.getFriends?.(ava.type_) ?? []),
    ];
    const relevantAttributes = attributes
        .filter((attr): boolean => friendTypes.some((f) => options.isAttributeSubtype(attr.type_, f)));
    const matchedValues: MatchedValue[] = [];
    const selectedContexts = (ava.assertedContexts && ("selectedContexts" in ava.assertedContexts))
        ? ava.assertedContexts.selectedContexts
        : undefined;
    for (const attr of relevantAttributes) {
        if (!options.permittedToMatch(attr.type_)) {
            continue;
        }
        for (const value of attr.values) {
            if (!options.permittedToMatch(attr.type_, value)) {
                continue;
            }
            if (!matcher!(ava.assertion, value)) {
                continue;
            }
            matchedValues.push({
                type: attr.type_,
                value,
            });
            if (!options.matchedValuesOnly) {
                return matchedValues;
            }
        }
        for (const vwc of attr.valuesWithContext ?? []) {
            if (!options.permittedToMatch(attr.type_, vwc.value)) {
                continue;
            }
            if (!matcher!(ava.assertion, vwc.value)) {
                continue;
            }
            if (selectedContexts && !selectedContexts.every((sc) => evaluateContextAssertion(
                sc,
                vwc.contextList,
                options.getContextMatcher,
                options.determineAbsentMatch,
            ))) {
                continue;
            }
            matchedValues.push({
                type: attr.type_,
                value: vwc.value,
                contexts: vwc.contextList,
            });
            if (!options.matchedValuesOnly) {
                return matchedValues;
            }
        }
    }
    return matchedValues;
}

export
function evaluateApprox (
    ava: AttributeValueAssertion,
    entry: EntryInformation,
    options: EvaluateFilterSettings,
): MatchedValue[] | undefined {
    const matcher: EqualityMatcher | undefined = handleErrors(options.getApproximateMatcher(ava.type_));
    if (!matcher) {
        return undefined;
    }
    const attributes = getAttributesFromEntry(entry, options.dnAttribute);
    const friendTypes: OBJECT_IDENTIFIER[] = [
        ava.type_,
        ...(options.getFriends?.(ava.type_) ?? []),
    ];
    const relevantAttributes = attributes
        .filter((attr): boolean => friendTypes.some((f) => options.isAttributeSubtype(attr.type_, f)));
    const matchedValues: MatchedValue[] = [];
    const selectedContexts = (ava.assertedContexts && ("selectedContexts" in ava.assertedContexts))
        ? ava.assertedContexts.selectedContexts
        : undefined;
    for (const attr of relevantAttributes) {
        if (!options.permittedToMatch(attr.type_)) {
            continue;
        }
        for (const value of attr.values) {
            if (!options.permittedToMatch(attr.type_, value)) {
                continue;
            }
            if (!matcher!(ava.assertion, value)) {
                continue;
            }
            matchedValues.push({
                type: attr.type_,
                value,
            });
            if (!options.matchedValuesOnly) {
                return matchedValues;
            }
        }
        for (const vwc of attr.valuesWithContext ?? []) {
            if (!options.permittedToMatch(attr.type_, vwc.value)) {
                continue;
            }
            if (!matcher!(ava.assertion, vwc.value)) {
                continue;
            }
            if (selectedContexts && !selectedContexts.every((sc) => evaluateContextAssertion(
                sc,
                vwc.contextList,
                options.getContextMatcher,
                options.determineAbsentMatch,
            ))) {
                continue;
            }
            matchedValues.push({
                type: attr.type_,
                value: vwc.value,
                contexts: vwc.contextList,
            });
            if (!options.matchedValuesOnly) {
                return matchedValues;
            }
        }
    }
    return matchedValues;
}

export
function evaluateOrdering (
    gte: boolean,
    ava: AttributeValueAssertion,
    entry: EntryInformation,
    options: EvaluateFilterSettings,
): MatchedValue[] | undefined {
    const orderer: OrderingMatcher | undefined = handleErrors(options.getOrderingMatcher(ava.type_));
    if (!orderer) {
        return undefined;
    }
    const attributes = getAttributesFromEntry(entry, options.dnAttribute);
    const friendTypes: OBJECT_IDENTIFIER[] = [
        ava.type_,
        ...(options.getFriends?.(ava.type_) ?? []),
    ];
    const relevantAttributes = attributes
        .filter((attr): boolean => friendTypes.some((f) => options.isAttributeSubtype(attr.type_, f)));
    const matchedValues: MatchedValue[] = [];
    const selectedContexts = (ava.assertedContexts && ("selectedContexts" in ava.assertedContexts))
        ? ava.assertedContexts.selectedContexts
        : undefined;
    const ordered = gte
        ? (assertion: ASN1Element, value: ASN1Element) => (orderer(assertion, value) <= 0)
        : (assertion: ASN1Element, value: ASN1Element) => (orderer(assertion, value) >= 0);
    for (const attr of relevantAttributes) {
        if (!options.permittedToMatch(attr.type_)) {
            continue;
        }
        for (const value of attr.values) {
            if (!options.permittedToMatch(attr.type_, value)) {
                continue;
            }
            if (!ordered!(ava.assertion, value)) {
                continue;
            }
            matchedValues.push({
                type: attr.type_,
                value,
            });
            if (!options.matchedValuesOnly) {
                return matchedValues;
            }
        }
        for (const vwc of attr.valuesWithContext ?? []) {
            if (!options.permittedToMatch(attr.type_, vwc.value)) {
                continue;
            }
            if (!ordered!(ava.assertion, vwc.value)) {
                continue;
            }
            if (selectedContexts && !selectedContexts.every((sc) => evaluateContextAssertion(
                sc,
                vwc.contextList,
                options.getContextMatcher,
                options.determineAbsentMatch,
            ))) {
                continue;
            }
            matchedValues.push({
                type: attr.type_,
                value: vwc.value,
                contexts: vwc.contextList,
            });
            if (!options.matchedValuesOnly) {
                return matchedValues;
            }
        }
    }
    return matchedValues;
}

export
function evaluateSubstring (
    sub: FilterItem_substrings,
    entry: EntryInformation,
    options: EvaluateFilterSettings,
): MatchedValue[] | undefined {
    const matcher = handleErrors(options.getSubstringsMatcher(sub.type_));
    if (!matcher) {
        return undefined;
    }
    if (!options.permittedToMatch(sub.type_)) {
        return undefined;
    }
    const attributes = getAttributesFromEntry(entry, options.dnAttribute);
    const assertions: [ ASN1Element, SubstringSelection ][] = sub.strings
        .map((str) => {
            if ("initial" in str) {
                return [ str.initial, SubstringSelection.initial ];
            } else if ("any_" in str) {
                return [ str.any_, SubstringSelection.any_ ];
            } else if ("final" in str) {
                return [ str.final, SubstringSelection.final ];
            } else {
                // Control attributes will not be supported. These are way too complex.
                return undefined;
            }
        })
        .filter((a): a is [ ASN1Element, SubstringSelection ] => !!a);
    const matchedValues: MatchedValue[] = [];
    const friendTypes: OBJECT_IDENTIFIER[] = [
        sub.type_,
        ...(options.getFriends?.(sub.type_) ?? []),
    ];
    const relevantAttributes = attributes
        .filter((attr): boolean => friendTypes.some((f) => options.isAttributeSubtype(attr.type_, f)));
    for (const attr of relevantAttributes) {
        for (const value of attr.values) {
            if (assertions.every(([ assertion, selection ]) => (
                options.permittedToMatch(attr.type_, value)
                && matcher!(assertion, value, selection)
            ))) {
                matchedValues.push({
                    type: attr.type_,
                    value,
                });
                if (!options.matchedValuesOnly) {
                    return matchedValues;
                }
            }
        }
        for (const vwc of attr.valuesWithContext ?? []) {
            if (assertions.every(([ assertion, selection ]) => (
                options.permittedToMatch(attr.type_, vwc.value)
                && matcher!(assertion, vwc.value, selection)
            ))) {
                matchedValues.push({
                    type: attr.type_,
                    value: vwc.value,
                    contexts: vwc.contextList,
                });
                if (!options.matchedValuesOnly) {
                    return matchedValues;
                }
            }
        }
    }
    return matchedValues;
}

export
function evaluateAttributePresence (
    attributeType: AttributeType,
    entry: EntryInformation,
    options: EvaluateFilterSettings,
): boolean {
    const attributes = getAttributesFromEntry(entry, options.dnAttribute);
    const friendTypes: OBJECT_IDENTIFIER[] = [
        attributeType,
        ...(options.getFriends?.(attributeType) ?? []),
    ];
    const relevantAttributes = attributes
        .filter((attr): boolean => friendTypes.some((f) => options.isAttributeSubtype(attr.type_, f)));
    return relevantAttributes.some((attr: Attribute) => options.permittedToMatch(attr.type_));
}

export
function evaluateMatchingRuleAssertion (
    mra: MatchingRuleAssertion,
    entry: EntryInformation,
    options: EvaluateFilterSettings,
): MatchedValue[] | undefined {
    if (mra.type_ && !options.permittedToMatch(mra.type_)) {
        return undefined;
    }
    if (mra.matchingRule.length !== 1) {
        if (options.performExactly) {
            throw new CannotPerformExactly(
                "FFC8B875-4CE5-4FC8-B84A-2D10D9AC4AA1: CANNOT_PERFORM_EXACTLY_TOO_MANY_MATCHING_RULES: "
                + mra.matchingRule.map((mr) => mr.toString()).join(", ")
            );
        }
        return undefined; // DSA does not know how to combine rules.
    }
    const matcher = (
        options.getEqualityMatcher(mra.matchingRule[0])
        // REVIEW: How do you know if you are ordering GTE or LTE?
        // ?? options.orderingMatchingRuleMatchers[mroid]
        ?? options.getSubstringsMatcher(mra.matchingRule[0])
    );
    if (!matcher) {
        if (options.performExactly) {
            throw new CannotPerformExactly(
                "7F3567B5-59F4-407C-81C5-4AF37D58559A: CANNOT_PERFORM_EXACTLY_UNRECOGNIZED_MATCHING_RULE: "
                + mra.matchingRule[0].toString()
            );
        }
        return undefined;
    }
    /**
     * From ITU Recommendation X.511, Section 11.2.2:
     *
     * > If [dnAttribute is] set, it overrides any possible dnAttribute
     * > specification in extensibleMatch filter items.
     */
    const attributes = getAttributesFromEntry(entry, options.dnAttribute || mra.dnAttributes);
    const friendTypes: OBJECT_IDENTIFIER[] = mra.type_
        ? [
            mra.type_,
            ...(options.getFriends?.(mra.type_) ?? []),
        ]
        : [];
    /**
     * From ITU Recommendation X.511, Section 7.8.2.g:
     *
     * > If type is omitted, the match is made against all attribute types which
     * > are compatible with that matching rule.
     */
    const relevantAttributes = ((mra.type_)
        ? attributes
            .filter((attr): boolean => friendTypes.some((f) => options.isAttributeSubtype(attr.type_, f)))
        : attributes
            .filter((attr: Attribute): boolean => options.isMatchingRuleCompatibleWithAttributeType(
                mra.matchingRule[0],
                attr.type_,
            )))
            .filter((attr) => options.permittedToMatch(attr.type_));
    if (relevantAttributes.length === 0) {
        if (options.performExactly && !mra.type_ && (attributes.length > 0)) {
            // None of the attributes were compatible with the matching rule.
            throw new CannotPerformExactly(mra.matchingRule[0].toString());
        }
        return []; // There are no applicable attributes to match.
    }
    const matchedValues: MatchedValue[] = [];
    for (const attr of relevantAttributes) {
        if (!options.permittedToMatch(attr.type_)) {
            continue;
        }
        for (const value of attr.values) {
            if (!options.permittedToMatch(attr.type_, value)) {
                continue;
            }
            if (!matcher!(mra.matchValue, value)) {
                continue;
            }
            matchedValues.push({
                type: attr.type_,
                value,
            });
            if (!options.matchedValuesOnly) {
                return matchedValues;
            }
        }
        for (const vwc of attr.valuesWithContext ?? []) {
            if (!options.permittedToMatch(attr.type_, vwc.value)) {
                continue;
            }
            if (!matcher!(mra.matchValue, vwc.value)) {
                continue;
            }
            matchedValues.push({
                type: attr.type_,
                value: vwc.value,
                contexts: vwc.contextList,
            });
            if (!options.matchedValuesOnly) {
                return matchedValues;
            }
        }
    }
    return matchedValues;
}

export
function evaluateAttributeTypeAssertion (
    ata: AttributeTypeAssertion,
    entry: EntryInformation,
    options: EvaluateFilterSettings,
): boolean | undefined {
    if (!options.permittedToMatch(ata.type_)) {
        return undefined;
    }
    const attributes = getAttributesFromEntry(entry, options.dnAttribute);
    const friendTypes: OBJECT_IDENTIFIER[] = [
        ata.type_,
        ...(options.getFriends?.(ata.type_) ?? []),
    ];
    const relevantAttributes = attributes
        .filter((attr): boolean =>
            options.permittedToMatch(attr.type_)
            && friendTypes.some((f) => options.isAttributeSubtype(attr.type_, f))
        );
    if (relevantAttributes.length === 0) {
        return false;
    }
    if (!ata.assertedContexts || (ata.assertedContexts.length === 0)) {
        return true;
    }
    return relevantAttributes
        .some((attr: Attribute): boolean | undefined => attr.valuesWithContext // Check that there are some attributes...
            ?.some((vwc): boolean | undefined => ata.assertedContexts // That have some values...
                // ... for which every context assertion evaluates to TRUE.
                ?.every((ac: ContextAssertion): boolean => evaluateContextAssertion(
                    ac,
                    vwc.contextList,
                    options.getContextMatcher,
                    options.determineAbsentMatch,
                ))));
}

export
function evaluateFilterItem (
    filterItem: FilterItem,
    entry: EntryInformation,
    options: EvaluateFilterSettings,
): MatchedValue[] | boolean | undefined {
    if ("equality" in filterItem) {
        return evaluateEquality(filterItem.equality, entry, options);
    } else if ("substrings" in filterItem) {
        return evaluateSubstring(filterItem.substrings, entry, options);
    } else if ("greaterOrEqual" in filterItem) {
        return evaluateOrdering(true, filterItem.greaterOrEqual, entry, options);
    } else if ("lessOrEqual" in filterItem) {
        return evaluateOrdering(false, filterItem.lessOrEqual, entry, options);
    } else if ("present" in filterItem) {
        return evaluateAttributePresence(filterItem.present, entry, options);
    } else if ("approximateMatch" in filterItem) {
        return evaluateApprox(filterItem.approximateMatch, entry, options);
    } else if ("extensibleMatch" in filterItem) {
        if (filterItem.extensibleMatch.matchingRule[0]?.isEqualTo(id_mr_nullMatch)) {
            return true;
        }
        return evaluateMatchingRuleAssertion(filterItem.extensibleMatch, entry, options);
    } else if ("contextPresent" in filterItem) {
        return evaluateAttributeTypeAssertion(filterItem.contextPresent, entry, options);
    } else {
        return undefined;
    }
}

/**
 * @summary Implementation of X.500 filtering
 * @description
 *
 * This function filters a group of directory entries that are supposed to
 * represent a subset of the members of a compound entry, or the non-compound
 * entry alone. If multiple entries are supplied, all of their attributes are
 * treated as though they were all merged into a single "pseudo-entry" before
 * matching. In other words, this function will treat all of the entries as a
 * single entry (but still keeps them separate for the sake of tracking which
 * of them supplied matching values and hence "contributed" to the match, per
 * ITU Recommendation X.511 (2016), Section 7.13).
 *
 * This function returns `true` if the sum of all attributes of the supplied
 * entries match the filter, `false` if they do not, or `undefined` if it could
 * not be determined. It may also return an array of `MatchedValue`, each of
 * which is an attribute type, value, contexts (if present), and the index of
 * the entry from the array of supplied entries that supplied that matching
 * value. If this array is empty, it means that there was no match; an empty
 * array should be treated like a `false` result.
 *
 * Features:
 *
 * - Attribute subtyping
 * - `nullMatch`
 * - `performExactly`
 * - `matchedValuesOnly`
 * - `dnAttributes`
 * - Family contribution tracking
 *
 * Though this implementation does not explicitly include support for the
 * `dontMatchFriends` and `noSubtypesMatch` service control options, these can
 * be trivially implemented through the use of the parameters.
 * `dontMatchFriends` can be implemented by simply not including friend
 * attributes in the entry (these can be added after filtering to complete the
 * entry, if needed). `noSubtypesMatch` can be implemented by supplying an
 * `options.isAttributeSubtype()` function that only returns `true` if both
 * object identifiers are equal.
 *
 * NOTE: ITU Recommendation X.511, Section 7.8.2.{b,c,d} does not specify to consider contexts.
 *
 * @param {Filter} filter The filter against which the entry is to be evaluated.
 * @param {EntryInformation} entry The entry that is to be evaluated by the filter.
 * @param {Object} options An options object containing. Despite the name, this
 *  parameter, and most of its properties, are required.
 * @param {Set} contributingEntries The contributing entries. Do not supply this
 *  argument. Just leave this `undefined`.
 * @returns `true` if the entry matches the filter, `false` if it does not, or
 *  `undefined` if it cannot be determined whether the entry matches or not.
 *  An array of matched values may be returned, containing the values that
 *  matched and the indices of the entries from which the matches came, if this
 *  array is empty, it means there was no match.
 * @function
 */
export
function evaluateFilter (
    filter: Filter,
    family: EntryInformation[],
    options: EvaluateFilterSettings,
    contributingEntries: Set<number> = new Set(),
): EvaluateFilterReturn {
    if ("item" in filter) {
        const familyResults: MatchedEntryInfo[] = [];
        let undefinedResultFound: boolean = false;
        let matched: boolean = false;
        for (let i = 0; i < family.length; i++) {
            const member = family[i];
            const result = evaluateFilterItem(filter.item, member, options);
            if (result === false) {
                continue;
            }
            if (result === undefined) {
                undefinedResultFound = true;
                continue;
            }
            if ((result === true) || (result.length > 0)) {
                contributingEntries.add(i);
                matched = true;
            }
            if (Array.isArray(result)) {
                familyResults.push(...result.map((r) => ({
                    ...r,
                    entryIndex: i,
                })));
            }
        }
        return {
            matched: matched || (undefinedResultFound ? undefined : false),
            contributingEntries,
            matchedValues: familyResults,
        };
    } else if ("and" in filter) {
        // Array.every() returns `true` when `Array.length` is 0.
        const results = filter.and.map((subfilter) => evaluateFilter(subfilter, family, options));
        if (results.every((result) => result.matched)) {
            return {
                matched: true,
                contributingEntries: new Set([
                    ...contributingEntries.values(),
                    ...results.flatMap((r) => Array.from(r.contributingEntries.values())),
                ]),
                matchedValues: results.flatMap((r) => r.matchedValues),
            };
        } else if (results.some((result) => result.matched === false)) {
            return {
                matched: false,
                contributingEntries,
                matchedValues: [],
            };
        } else {
            return {
                matched: undefined,
                contributingEntries,
                matchedValues: [],
            };
        }
    } else if ("or" in filter) {
        const results = filter.or.map((subfilter) => evaluateFilter(subfilter, family, options));
        const undefinedResult: boolean = results.some((r) => (r.matched === undefined));
        const matchedResults = results.filter((r) => r.matched);
        if (matchedResults.length === 0) {
            return {
                matched: undefinedResult ? undefined : false,
                contributingEntries,
            };
        }
        for (const mr of matchedResults) {
            for (const contrib of mr.contributingEntries.values()) {
                contributingEntries.add(contrib);
            }
        }
        return {
            matched: true,
            contributingEntries,
            matchedValues: matchedResults.flatMap((mr) => mr.matchedValues ?? []),
        };
    } else if ("not" in filter) {
        if (
            ("item" in filter.not)
            && ("extensibleMatch" in filter.not.item)
            && (filter.not.item.extensibleMatch.matchingRule[0]?.isEqualTo(id_mr_nullMatch))
        ) {
            return {
                matched: true,
                contributingEntries,
            };
        }
        const result = evaluateFilter(filter.not, family, options, contributingEntries);
        if (result === undefined) {
            return {
                matched: undefined,
                contributingEntries,
            };
        }
        /**
         * According to ITU Recommendation X.511 (2016), Section 7.13:
         *
         * > [A family member] also contributes if it holds an attribute of a
         * > given type if a negated filter item for the same type does not
         * > match.
         *
         * That is what the following if-block does.
         */
        if (
            (result.matched === false)
            && ("item" in filter.not)
        ) {
            const negatedAttributeType = getAttributeTypesFromFilterItem(filter.not.item)[0];
            if (negatedAttributeType) {
                for (let i = 0; i < family.length; i++) {
                    const member = family[i];
                    const attributes = getAttributesFromEntry(member, options.dnAttribute);
                    for (const attr of attributes) {
                        if (attr.type_.isEqualTo(negatedAttributeType)) {
                            contributingEntries.add(i);
                            break;
                        }
                    }
                }
            }
        }
        return {
            matched: (result.matched === false),
            contributingEntries,
        };
    } else {
        return {
            matched: undefined,
            contributingEntries,
        };
    }
}

export default evaluateFilter;
