import type {
    Filter,
} from "./modules/DirectoryAbstractService/Filter.ta";
import type {
    FilterItem,
} from "./modules/DirectoryAbstractService/FilterItem.ta";
import type {
    AttributeValueAssertion,
} from "./modules/InformationFramework/AttributeValueAssertion.ta";
import type {
    ContextAssertion,
} from "./modules/InformationFramework/ContextAssertion.ta";
import type {
    AttributeType,
} from "./modules/InformationFramework/AttributeType.ta";
import type {
    AttributeTypeAssertion,
} from "./modules/InformationFramework/AttributeTypeAssertion.ta";
import type {
    MatchingRuleAssertion,
} from "./modules/DirectoryAbstractService/MatchingRuleAssertion.ta";
import {
    Attribute,
} from "./modules/InformationFramework/Attribute.ta";
import type {
    EntryInformation,
} from "./modules/DirectoryAbstractService/EntryInformation.ta";
import type {
    FilterItem_substrings,
} from "./modules/DirectoryAbstractService/FilterItem-substrings.ta";
import compareElements from "./comparators/compareElements";
import type { ASN1Element, OBJECT_IDENTIFIER } from "asn1-ts";
import EqualityMatcher from "./types/EqualityMatcher";
import OrderingMatcher from "./types/OrderingMatcher";
import SubstringsMatcher from "./types/SubstringsMatcher";
import ApproxMatcher from "./types/ApproxMatcher";
import ContextMatcher from "./types/ContextMatcher";
import SubstringSelection from "./types/SubstringSelection";
import evaluateContextAssertion from "./utils/evaluateContextAssertion";
import { id_mr_nullMatch } from "./modules/SelectedAttributeTypes/id-mr-nullMatch.va";

const NULL_MATCH: string = id_mr_nullMatch.toString();

export
interface FilterEntryOptions {
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined;
    getOrderingMatcher: (attributeType: OBJECT_IDENTIFIER) => OrderingMatcher | undefined;
    getSubstringsMatcher: (attributeType: OBJECT_IDENTIFIER) => SubstringsMatcher | undefined;
    getApproximateMatcher: (attributeType: OBJECT_IDENTIFIER) => ApproxMatcher | undefined;
    getContextMatcher: (contextType: OBJECT_IDENTIFIER) => ContextMatcher | undefined;
    isMatchingRuleCompatibleWithAttributeType: (mr: OBJECT_IDENTIFIER, at: OBJECT_IDENTIFIER) => boolean;
    isAttributeSubtype: (attributeType: OBJECT_IDENTIFIER, parentType: OBJECT_IDENTIFIER) => boolean;

    /**
     * Referenced in ITU Recommendation X.511, Section 7.8.2.g, this option
     * determines whether the filter should return UNDEFINED or throw an error
     * if none of the matching rules specified in a `FilterItem.extensibleMatch`
     * can be understood or if none are compatible with the specified attribute
     * type.
     */
    performExactly?: boolean;
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
    options: FilterEntryOptions,
): boolean | undefined {
    const attributes = getAttributesFromEntry(entry);
    const results = attributes
        .filter((attr): boolean => options.isAttributeSubtype(attr.type_, ava.type_))
        .map((attr): boolean | undefined => {
            const matcher: EqualityMatcher | undefined = options.getEqualityMatcher(attr.type_);
            if (!matcher) {
                return undefined;
            }
            if (ava.assertedContexts && ("selectedContexts" in ava.assertedContexts)) {
                const selectedContexts = ava.assertedContexts.selectedContexts;
                return (
                    attr.values.some((value) => (matcher && matcher(ava.assertion, value)))
                    || (attr.valuesWithContext
                        ?.filter((vwc) => (matcher && matcher(ava.assertion, vwc.value)))
                        .some((vwc): boolean => {
                                return selectedContexts
                                    .every((sc) => evaluateContextAssertion(sc, vwc.contextList, options.getContextMatcher))
                        }) ?? false)
                );
            } else {
                return (
                    attr.values.some((a) => matcher(ava.assertion, a))
                    || (attr.valuesWithContext
                        ?.some((vwc) => matcher(ava.assertion, vwc.value)) ?? false)
                );
            }
        });
    if (results.some((result) => (result === undefined))) {
        return undefined;
    }
    return results.some((result) => (result === true));
}

export
function evaluateApprox (
    ava: AttributeValueAssertion,
    entry: EntryInformation,
    options: FilterEntryOptions,
): boolean | undefined {
    const attributes = getAttributesFromEntry(entry);
    const results = attributes
        .filter((attr): boolean => options.isAttributeSubtype(attr.type_, ava.type_))
        .map((attr): boolean | undefined => {
            const matcher: EqualityMatcher | undefined = options.getApproximateMatcher(attr.type_)
                ?? options.getEqualityMatcher(attr.type_);
            if (!matcher) {
                return undefined;
            }
            if (ava.assertedContexts && ("selectedContexts" in ava.assertedContexts)) {
                const selectedContexts = ava.assertedContexts.selectedContexts;
                return (
                    attr.values.some((value) => (matcher && matcher(ava.assertion, value)))
                    || (attr.valuesWithContext
                        ?.filter((vwc) => (matcher && matcher(ava.assertion, vwc.value)))
                        .some((vwc): boolean => {
                                return selectedContexts
                                    .every((sc) => evaluateContextAssertion(sc, vwc.contextList, options.getContextMatcher))
                        }) ?? false)
                );
            } else {
                return (
                    attr.values.some((a) => matcher(ava.assertion, a))
                    || (attr.valuesWithContext
                        ?.some((vwc) => matcher(ava.assertion, vwc.value)) ?? false)
                );
            }
        });
    if (results.some((result) => (result === undefined))) {
        return undefined;
    }
    return results.some((result) => (result === true));
}

export
function evaluateOrdering (
    gte: boolean,
    ava: AttributeValueAssertion,
    entry: EntryInformation,
    options: FilterEntryOptions,
): boolean | undefined {
    const attributes = getAttributesFromEntry(entry);
    const results = attributes
        .filter((attr): boolean => options.isAttributeSubtype(attr.type_, ava.type_))
        .map((attr): boolean | undefined => {
            const orderer: OrderingMatcher | undefined = options.getOrderingMatcher(attr.type_);
            if (!orderer) {
                return undefined;
            }
            const ordered = gte
                ? (assertion: ASN1Element, value: ASN1Element) => (orderer(assertion, value) <= 0)
                : (assertion: ASN1Element, value: ASN1Element) => (orderer(assertion, value) >= 0);
            if (ava.assertedContexts && ("selectedContexts" in ava.assertedContexts)) {
                const selectedContexts = ava.assertedContexts.selectedContexts;
                return (
                    attr.values.some((value) => ordered(ava.assertion, value))
                    || (attr.valuesWithContext
                        ?.filter((vwc) => ordered(ava.assertion, vwc.value))
                        .some((vwc): boolean => selectedContexts
                            .every((sc) => evaluateContextAssertion(sc, vwc.contextList, options.getContextMatcher))) ?? false)
                );
            } else {
                return (
                    attr.values.some((a) => ordered(ava.assertion, a))
                    || (attr.valuesWithContext
                        ?.some((vwc) => ordered(ava.assertion, vwc.value)) ?? false)
                );
            }
        });
    if (results.some((result) => (result === undefined))) {
        return undefined;
    }
    return results.some((result) => (result === true));
}

export
function evaluateSubstring (
    sub: FilterItem_substrings,
    entry: EntryInformation,
    options: FilterEntryOptions,
): boolean | undefined {
    const attributes = getAttributesFromEntry(entry);
    const matcher = options.getSubstringsMatcher(sub.type_);
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
    if (!matcher) {
        return undefined;
    }
    return attributes
        .filter((attr): boolean => options.isAttributeSubtype(attr.type_, sub.type_))
        .some((attr): boolean => (attr.values
            .some((value): boolean => (assertions
                .every(([ assertion, selection ]): boolean => (matcher!(assertion, value, selection))
    )))));
}

export
function evaluateAttributePresence (attributeType: AttributeType, entry: EntryInformation): boolean {
    const attributes = getAttributesFromEntry(entry);
    const oid = attributeType.toString();
    return attributes.some((attr: Attribute): boolean => attr.type_.toString() === oid);
}

export
function evaluateMatchingRuleAssertion (
    mra: MatchingRuleAssertion,
    entry: EntryInformation,
    options: FilterEntryOptions,
): boolean | undefined {
    if (mra.matchingRule.length !== 1) {
        if (options.performExactly) {
            throw new Error(
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
            throw new Error(
                "7F3567B5-59F4-407C-81C5-4AF37D58559A: CANNOT_PERFORM_EXACTLY_UNRECOGNIZED_MATCHING_RULE: "
                + mra.matchingRule[0].toString()
            );
        }
        return undefined;
    }
    const attributes = getAttributesFromEntry(entry, mra.dnAttributes);
    /**
     * From ITU Recommendation X.511, Section 7.8.2.g:
     *
     * > If type is omitted, the match is made against all attribute types which
     * > are compatible with that matching rule.
     */
    const relevantAttributes = (mra.type_)
        ? attributes
            .filter((attr): boolean => options.isAttributeSubtype(attr.type_, mra.type_!))
        : attributes
            .filter((attr: Attribute): boolean => options.isMatchingRuleCompatibleWithAttributeType(
                mra.matchingRule[0],
                attr.type_,
            ));
    if (relevantAttributes.length === 0) {
        if (options.performExactly && !mra.type_ && (attributes.length > 0)) {
            // None of the attributes were compatible with the matching rule.
            throw new Error(
                "BAEB4660-3432-48FE-85EE-6625A6DCC41B: CANNOT_PERFORM_EXACTLY_NO_ATTRIBUTES_COMPATIBLE: "
                + mra.matchingRule[0].toString()
            );
        }
        return false; // There are no applicable attributes to match.
    }
    return relevantAttributes.some((attr: Attribute): boolean => (
        attr.values.some((value) => matcher!(mra.matchValue, value))
        || (attr
            .valuesWithContext
            ?.map((vwc) => vwc.value)
            .some((value) => matcher!(mra.matchValue, value)) ?? false)
    ));
}

export
function evaluateAttributeTypeAssertion (
    ata: AttributeTypeAssertion,
    entry: EntryInformation,
    options: FilterEntryOptions,
): boolean {
    const attributes = getAttributesFromEntry(entry);
    const relevantAttributes = attributes
        .filter((attr): boolean => options.isAttributeSubtype(attr.type_, ata.type_));
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
                ?.every((ac: ContextAssertion): boolean => evaluateContextAssertion(ac, vwc.contextList, options.getContextMatcher))));
}

export
function evaluateFilterItem (filterItem: FilterItem, entry: EntryInformation, options: FilterEntryOptions): boolean | undefined {
    if ("equality" in filterItem) {
        return evaluateEquality(filterItem.equality, entry, options);
    } else if ("substrings" in filterItem) {
        return evaluateSubstring(filterItem.substrings, entry, options);
    } else if ("greaterOrEqual" in filterItem) {
        return evaluateOrdering(true, filterItem.greaterOrEqual, entry, options);
    } else if ("lessOrEqual" in filterItem) {
        return evaluateOrdering(false, filterItem.lessOrEqual, entry, options);
    } else if ("present" in filterItem) {
        return evaluateAttributePresence(filterItem.present, entry);
    } else if ("approximateMatch" in filterItem) {
        return evaluateApprox(filterItem.approximateMatch, entry, options);
    } else if ("extensibleMatch" in filterItem) {
        const MR = filterItem.extensibleMatch.matchingRule[0]?.toString();
        if (MR === NULL_MATCH) {
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
 * This function filters a single directory entry using a `Filter`, and returns
 * `true` if it matches, `false` if it does not, or `undefined` if whether it
 * matches could not be determined.
 *
 * Features:
 *
 * - Attribute subtyping
 * - `nullMatch`
 * - `performExactly`
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
 * @returns `true` if the entry matches the filter, `false` if it does not, or
 *  `undefined` if it cannot be determined whether the entry matches or not
 * @function
 */
export
function evaluateFilter (filter: Filter, entry: EntryInformation, options: FilterEntryOptions): boolean | undefined {
    if ("item" in filter) {
        return evaluateFilterItem(filter.item, entry, options);
    } else if ("and" in filter) {
        // Array.every() returns `true` when `Array.length` is 0.
        const results = filter.and.map((subfilter) => evaluateFilter(subfilter, entry, options));
        if (results.every((result) => (result === true))) {
            return true;
        } else if (results.some((result) => (result === false))) {
            return false;
        } else {
            return undefined;
        }
    } else if ("or" in filter) {
        const results = filter.or.map((subfilter) => evaluateFilter(subfilter, entry, options));
        if ((results.length === 0) || results.every((result) => (result === false))) {
            return false;
        } else if (results.some((result) => (result === true))) {
            return true;
        } else {
            return undefined;
        }
    } else if ("not" in filter) {
        if (
            ("item" in filter.not)
            && ("extensibleMatch" in filter.not.item)
            && (filter.not.item.extensibleMatch.matchingRule[0]?.toString() === NULL_MATCH)
        ) {
            return true;
        }
        const result = evaluateFilter(filter.not, entry, options);
        if (result === undefined) {
            return undefined;
        }
        return (result === false); // undefined should be omitted.
    } else {
        return undefined;
    }
}

export default evaluateFilter;
