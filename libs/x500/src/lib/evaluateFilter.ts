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
    Context,
} from "./modules/InformationFramework/Context.ta";
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
import {
    ATTRIBUTE,
} from "./modules/InformationFramework/ATTRIBUTE.oca";
import type {
    EntryInformation,
} from "./modules/DirectoryAbstractService/EntryInformation.ta";
import type {
    FilterItem_substrings,
} from "./modules/DirectoryAbstractService/FilterItem-substrings.ta";
import compareUint8Arrays from "./comparators/compareUint8Arrays";
import { ASN1Element } from "asn1-ts";

// FIXME: Return `undefined` from some search queries.
// REVIEW: ITU Recommendation X.511, Section 7.8.2.{b,c,d} does not specify to consider contexts.

enum SubstringSelection {
    any_,
    initial,
    final,
}

export
type MatcherFunction = (assertion: ASN1Element, value: ASN1Element) => boolean;

export
type OrderingFunction = (assertion: ASN1Element, value: ASN1Element) => number;

export
type SubstringsFunction = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
) => boolean;

export
type ContextMatcher = (assertion: ASN1Element, value: ASN1Element) => boolean;

export
interface FilterEntryOptions {
    /**
     * The attributes that will be recognized by the filter.
     */
    recognizedAttributes: ATTRIBUTE[];

    equalityMatchingRuleMatchers: Record<string, MatcherFunction>;
    orderingMatchingRuleMatchers: Record<string, OrderingFunction>;
    substringsMatchingRuleMatchers: Record<string, SubstringsFunction>;
    contextMatchers: Record<string, ContextMatcher>;

    /**
     * Referenced in ITU Recommendation X.511, Section 7.8.2.g, this option
     * determines whether the attributes of the distinguished name may be used
     * for the matching. This only applies to `extensibleMatch`.
     */
    dnAttributes?: boolean;

    /**
     * Referenced in ITU Recommendation X.511, Section 7.8.2.g, this option
     * determines whether the filter should return UNDEFINED or throw an error
     * if none of the matching rules specified in a `FilterItem.extensibleMatch`
     * can be understood or if none are compatible with the specified attribute
     * type.
     */
    performExactly?: boolean;

    /**
     * Referenced in ITU Recommendation X.511, Section 7.8.2.h, this option
     * determines whether the filter will apply to subtypes.
     */
    noSubtypeMatch?: boolean;
}

export
function getAttributesFromEntry (entry: EntryInformation): Attribute[] {
    return entry
        .information
        .map((info): Attribute | undefined => (("attribute" in info) ? info.attribute : undefined))
        .filter((attr: Attribute | undefined): boolean => !!attr);
}

export
function evaluateContextAssertion (
    assertion: ContextAssertion,
    contextsPresent: Context[],
    options: FilterEntryOptions,
): boolean {
    const assertionType = assertion.contextType.toString();
    const relevantContexts: Context[] = contextsPresent
        .filter((cp: Context): boolean => cp.contextType.toString() === assertionType);
    if (relevantContexts.length === 0) {
        return true;
    }
    const matcher = options.contextMatchers[assertionType];
    const matchingContext: Context | undefined = relevantContexts
        .find((cp: Context): boolean => {
            for (const cpv of cp.contextValues) {
                for (const acv of assertion.contextValues) {
                    if (matcher) {
                        return matcher(acv, cpv);
                    } else if (compareUint8Arrays(cpv.deconstruct(""), acv.deconstruct(""))) {
                        return true;
                    }
                }
            }
            return false;
        });
    if (!matchingContext) {
        const fallbackContext: Context | undefined = relevantContexts.find((ctx) => ctx.fallback);
        if (fallbackContext) {
            return true;
        }
    }
    return false;
}

export
function evaluateEquality (ava: AttributeValueAssertion, entry: EntryInformation, options: FilterEntryOptions): boolean {
    const attributes = getAttributesFromEntry(entry);
    const soughtAfterOID: string = ava.type_.toString();
    return attributes
        .filter((attr): boolean => (attr.type_.toString() === soughtAfterOID))
        .some((attr): boolean => {
            const matcher: MatcherFunction | undefined = options
                .equalityMatchingRuleMatchers[attr.type_.toString()];
            if (ava.assertedContexts && ("selectedContexts" in ava.assertedContexts)) {
                return (
                    attr.values.some((value) => (matcher && matcher(ava.assertion, value)))
                    || attr.valuesWithContext
                        .filter((vwc) => (matcher && matcher(ava.assertion, vwc.value)))
                        .some((vwc): boolean => {
                            if ("selectedContexts" in ava.assertedContexts) {
                                return ava
                                    .assertedContexts
                                    .selectedContexts
                                    .every((sc) => evaluateContextAssertion(sc, vwc.contextList, options))
                            } else {
                                throw new Error();
                            }
                        })
                );
            } else {
                if (matcher) {
                    return (
                        attr.values.some((a) => matcher(ava.assertion, a))
                        || attr.valuesWithContext
                            .some((vwc) => matcher(ava.assertion, vwc.value))
                    );
                } else { // We do not know how to equate the assertion with the value.
                    return undefined;
                }
            }
        });
}

export
function evaluateOrdering (
    gte: boolean,
    ava: AttributeValueAssertion,
    entry: EntryInformation,
    options: FilterEntryOptions,
): boolean {
    const attributes = getAttributesFromEntry(entry);
    const soughtAfterOID: string = ava.type_.toString();
    return attributes
        .filter((attr): boolean => (attr.type_.toString() === soughtAfterOID))
        .some((attr): boolean => {
            const orderer: OrderingFunction | undefined = options
                .orderingMatchingRuleMatchers[attr.type_.toString()];
            const ordered = orderer
                ? gte
                    ? (assertion: ASN1Element, value: ASN1Element) => (orderer(assertion, value) >= 0)
                    : (assertion: ASN1Element, value: ASN1Element) => (orderer(assertion, value) <= 0)
                : () => undefined; // REVIEW:
            if (ava.assertedContexts && ("selectedContexts" in ava.assertedContexts)) {
                return (
                    attr.values.some((value) => ordered(ava.assertion, value))
                    || attr.valuesWithContext
                        .filter((vwc) => ordered(ava.assertion, vwc.value))
                        .some((vwc): boolean => {
                            if ("selectedContexts" in ava.assertedContexts) {
                                return ava
                                    .assertedContexts
                                    .selectedContexts
                                    .every((sc) => evaluateContextAssertion(sc, vwc.contextList, options))
                            } else {
                                throw new Error();
                            }
                        })
                );
            } else {
                if (orderer) {
                    return (
                        attr.values.some((a) => ordered(ava.assertion, a))
                        || attr.valuesWithContext
                            .some((vwc) => ordered(ava.assertion, vwc.value))
                    );
                } else { // We do not know how to order the assertion with the value.
                    return undefined;
                }
            }
        });
}

export
function evaluateSubstring (sub: FilterItem_substrings, entry: EntryInformation, options: FilterEntryOptions): boolean {
    const attributes = getAttributesFromEntry(entry);
    const soughtAfterOID: string = sub.type_.toString();
    const matcher = options.substringsMatchingRuleMatchers[soughtAfterOID];
    const assertions: [ ASN1Element, SubstringSelection ][] = sub.strings.map((str) => {
        if ("initial" in str) {
            return [ str.initial, SubstringSelection.initial ];
        } else if ("any_" in str) {
            return [ str.any_, SubstringSelection.any_ ];
        } else if ("final" in str) {
            return [ str.final, SubstringSelection.final ];
        } else {
            // Control attributes will not be supported. These are way too complex.
            throw new Error();
        }
    });
    return attributes
        .filter((attr): boolean => (attr.type_.toString() === soughtAfterOID))
        .some((attr): boolean => (attr.values
        .some((value): boolean => (assertions
        .every(([ assertion, selection ]): boolean => (matcher && matcher(assertion, value, selection))
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
): boolean {
    if (mra.matchingRule.length !== 1) {
        return undefined; // DSA does not know how to combine rules.
    }
    const attrOid: string | undefined = mra.type_?.toString();
    const mroids: string[] = mra.matchingRule.map((mr) => mr.toString());
    const matchers = mroids.map((mroid) => (
            options.equalityMatchingRuleMatchers[mroid]
            // REVIEW: How do you know if you are ordering GTE or LTE?
            // ?? options.orderingMatchingRuleMatchers[mroid]
            ?? options.substringsMatchingRuleMatchers[mroid]
        )).filter((m) => !!m);
    /**
     * From ITU Recommendation X.511, Section 7.8.2.g:
     * "If several matching rules are given, the way in which these rules are
     * combined into a new rule is unspecified..."
     */
    if (matchers.length !== 1) {
        return undefined; // DSA does not support the one matching rule supplied.
    }
    const relevantAttributes = (mra.type_)
        ? getAttributesFromEntry(entry)
            .filter((attr: Attribute): boolean => attr.type_.toString() === attrOid)
        : getAttributesFromEntry(entry);
    if (relevantAttributes.length === 0) {
        return false; // There are no applicable attributes to match.
    }
    const matcher = matchers[0];
    return relevantAttributes.some((attr: Attribute): boolean => (
        attr.values.some((value) => matcher(mra.matchValue, value))
        || attr
            .valuesWithContext
            .map((vwc) => vwc.value)
            .some((value) => matcher(mra.matchValue, value))
    ));
}

export
function evaluateAttributeTypeAssertion (ata: AttributeTypeAssertion, entry: EntryInformation, options: FilterEntryOptions): boolean {
    const attributes = getAttributesFromEntry(entry);
    const oid = ata.type_.toString();
    const relevantAttributes = attributes.filter((attr: Attribute): boolean => attr.type_.toString() === oid);
    if (relevantAttributes.length === 0) {
        return false;
    }
    if (!ata.assertedContexts || (ata.assertedContexts.length === 0)) {
        return true;
    }
    return relevantAttributes
        .some((attr: Attribute): boolean => attr.valuesWithContext // Check that there are some attributes...
        .some((vwc): boolean => ata.assertedContexts // That have some values...
        // ... for which every context assertion evaluates to TRUE.
        .every((ac: ContextAssertion): boolean => evaluateContextAssertion(ac, vwc.contextList, options))));
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
        return evaluateOrdering(true, filterItem.lessOrEqual, entry, options);
    } else if ("present" in filterItem) {
        return evaluateAttributePresence(filterItem.present, entry);
    } else if ("approximateMatch" in filterItem) {
        return evaluateEquality(filterItem.approximateMatch, entry, options); // FIXME:
    } else if ("extensibleMatch" in filterItem) {
        return evaluateMatchingRuleAssertion(filterItem.extensibleMatch, entry, options);
    } else if ("contextPresent" in filterItem) {
        return evaluateAttributeTypeAssertion(filterItem.contextPresent, entry, options);
    } else {
        throw new Error();
    }
}

export
function filterEntry (filter: Filter, entry: EntryInformation, options: FilterEntryOptions): boolean | undefined {
    if ("item" in filter) {
        return evaluateFilterItem(filter.item, entry, options);
    } else if ("and" in filter) {
        // Array.every() returns `true` when `Array.length` is 0.
        return filter.and.every((subfilter) => filterEntry(subfilter, entry, options));
    } else if ("or" in filter) {
        return filter.or.some((subfilter) => filterEntry(subfilter, entry, options));
    } else if ("not" in filter) {
        return (filterEntry(filter.not, entry, options) === false); // undefined should be omitted.
    } else {
        throw new Error();
    }
}
