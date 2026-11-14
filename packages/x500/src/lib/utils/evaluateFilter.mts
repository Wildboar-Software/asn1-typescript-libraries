import type {
    Filter,
} from "../modules/DirectoryAbstractService/Filter.ta.mjs";
import type {
    FilterItem,
} from "../modules/DirectoryAbstractService/FilterItem.ta.mjs";
import type {
    AttributeValueAssertion,
} from "../modules/InformationFramework/AttributeValueAssertion.ta.mjs";
import type {
    ContextAssertion,
} from "../modules/InformationFramework/ContextAssertion.ta.mjs";
import type {
    AttributeType,
} from "../modules/InformationFramework/AttributeType.ta.mjs";
import type {
    AttributeValue,
} from "../modules/InformationFramework/AttributeValue.ta.mjs";
import type {
    AttributeTypeAssertion,
} from "../modules/InformationFramework/AttributeTypeAssertion.ta.mjs";
import type {
    MatchingRuleAssertion,
} from "../modules/DirectoryAbstractService/MatchingRuleAssertion.ta.mjs";
import {
    Attribute,
} from "../modules/InformationFramework/Attribute.ta.mjs";
import type {
    EntryInformation,
} from "../modules/DirectoryAbstractService/EntryInformation.ta.mjs";
import type {
    FilterItem_substrings,
} from "../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type {
    FilterItem_substrings_strings_Item,
} from "../modules/DirectoryAbstractService/FilterItem-substrings-strings-Item.ta.mjs";
import {
    MATCH_FLAG_APPROXIMATE,
    MATCH_FLAG_ORDERING_GREATER,
    MATCH_FLAG_ORDERING_OR_EQUAL,
    type ContextMatcher,
    type Matcher,
} from "../types/matching.mjs";
import evaluateContextAssertion from "./evaluateContextAssertion.mjs";
import { id_mr_nullMatch } from "../modules/SelectedAttributeTypes/id-mr-nullMatch.va.mjs";
import { id_mr_approximateStringMatch } from "../modules/SelectedAttributeTypes/id-mr-approximateStringMatch.va.mjs";
import { CannotPerformExactly } from "../errors.mjs";
import type { Context } from "../modules/InformationFramework/Context.ta.mjs";
import getAttributeTypesFromFilterItem from "./getAttributeTypesFromFilterItem.mjs";
import { RequestAttribute } from "../modules/ServiceAdministration/RequestAttribute.ta.mjs";

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
    readonly getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined;

    /**
     * A function that accepts an attribute type and returns a function
     * that can perform a ordering matching on an asserted value against an
     * attribute value.
     *
     * @readonly
     * @property
     */
    readonly getOrderingMatcher: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined;

    /**
     * A function that accepts an attribute type and returns a function
     * that can perform a substrings matching on an asserted value against an
     * attribute value.
     *
     * @readonly
     * @property
     */
    readonly getSubstringsMatcher: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined;

    /**
     * A function that accepts an attribute type and returns a function
     * that can perform an approximate matching on an asserted value against an
     * attribute value. When this returns `undefined`, approximate matching
     * falls back to the equality matcher with `MATCH_FLAG_APPROXIMATE`.
     */
    readonly getApproximateMatcher: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined;

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

    /**
     * Referenced in ITU Recommendation X.501 (2019), Section 16.10.2, this is
     * an index of request attribute profiles by the string-form object
     * identifier of the attribute type. This is primarily used for its
     * `defaultValues` property, which fills in values for attribute types if
     * not present in the entry.
     *
     * @readonly
     * @property
     */
    readonly requestAttributes?: Map<string, RequestAttribute>;
}

type AnyFunction = (...args: any[]) => any;

interface MatchState {
    indeterminate: boolean;
}

// Default maximum number of filter nodes on one recursive path, including the root.
const MAX_FILTER_DEPTH = 128;

function handleErrors (matcher: AnyFunction | undefined, state?: MatchState): AnyFunction | undefined {
    if (!matcher) {
        return undefined;
    }
    return (...args: any[]): any => {
        try {
            const result = matcher(...args);
            if (result === undefined || (typeof result === "number" && Number.isNaN(result))) {
                if (state) {
                    state.indeterminate = true;
                }
                return undefined;
            }
            return result;
        } catch {
            if (state) {
                state.indeterminate = true;
            }
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

const NO_CONTEXTS: readonly Context[] = [];

/**
 * Cache of whether any value of an Attribute already satisfied a
 * ContextAssertion via X.501 §8.9.2.4 (a) or (b). Keyed by object identity
 * of the Attribute and the ContextAssertion so each pair is scanned once.
 */
type DirectContextMatchCache = WeakMap<Attribute, Map<ContextAssertion, boolean | undefined>>;

/** A context evaluation error means that selection is uncertain, not FALSE. */
function contextAssertionMatches (
    ca: ContextAssertion,
    contexts: readonly Context[],
    options: EvaluateFilterSettings,
): boolean | undefined {
    try {
        return evaluateContextAssertion(
            ca,
            contexts,
            options.getContextMatcher,
            options.determineAbsentMatch,
            options.getEqualityMatcher,
        );
    } catch {
        return undefined;
    }
}

/**
 * Whether **any** value of `attribute` already satisfies `ca` via
 * X.501 §8.9.2.4 (a) or (b). Used only to decide whether fallback (c) is
 * still available. Stops at the first such value. Results are cached on
 * `(attribute, ca)` so a later value of the same attribute does not repeat
 * the sibling scan.
 */
function attributeHasDirectContextMatch (
    attribute: Attribute,
    ca: ContextAssertion,
    options: EvaluateFilterSettings,
    cache: DirectContextMatchCache,
): boolean | undefined {
    let byAssertion = cache.get(attribute);
    if (!byAssertion) {
        byAssertion = new Map();
        cache.set(attribute, byAssertion);
    } else if (byAssertion.has(ca)) {
        return byAssertion.get(ca);
    }
    let indeterminate = false;
    if (attribute.values.length > 0) {
        // With no contexts, the assertion is governed by the context type's
        // absentMatch setting; the encoded attribute values are not examined.
        const result = contextAssertionMatches(ca, NO_CONTEXTS, options);
        if (result === true) {
            byAssertion.set(ca, true);
            return true;
        }
        indeterminate = result === undefined;
    }
    for (const vwc of attribute.valuesWithContext ?? []) {
        const result = contextAssertionMatches(ca, vwc.contextList, options);
        if (result === true) {
            byAssertion.set(ca, true);
            return true;
        }
        indeterminate ||= result === undefined;
    }
    const matched = indeterminate ? undefined : false;
    byAssertion.set(ca, matched);
    return matched;
}

/**
 * Whether **one** attribute value, whose contexts are `valueContexts`,
 * satisfies every selected context assertion.
 *
 * `attribute` is the containing Attribute. It is not the subject of the
 * match; fallback (c) is defined in terms of the *other* values of that
 * same attribute, so the sibling scan needs the whole Attribute.
 * `directMatchCache` memoizes that sibling scan per `(attribute, assertion)`.
 */
function valueSatisfiesSelectedContexts (
    selectedContexts: ContextAssertion[] | undefined,
    valueContexts: readonly Context[],
    attribute: Attribute,
    options: EvaluateFilterSettings,
    directMatchCache: DirectContextMatchCache,
): boolean | undefined {
    if (!selectedContexts) {
        return true;
    }
    let indeterminate = false;
    for (let i = 0; i < selectedContexts.length; i++) {
        const ca = selectedContexts[i];
        // (a) stored context of this type matches, or (b) no context of this type.
        const directMatch = contextAssertionMatches(ca, valueContexts, options);
        if (directMatch === true) {
            continue;
        }
        // If this value has no fallback of this type, do not consult siblings.
        let hasFallback = false;
        for (let j = 0; j < valueContexts.length; j++) {
            const c = valueContexts[j];
            if (c.contextType.isEqualTo(ca.contextType) && c.fallback) {
                hasFallback = true;
                break;
            }
        }
        // X.501 §8.9.2.4 (c): fallback applies only if **none** of the
        // attribute's values already satisfied the assertion via (a) or (b).
        if (hasFallback) {
            const siblingMatch = attributeHasDirectContextMatch(attribute, ca, options, directMatchCache);
            if (siblingMatch === false) {
                continue;
            }
            if (siblingMatch === undefined) {
                indeterminate = true;
                continue;
            }
        }
        if (directMatch === false) {
            return false;
        }
        // Continue checking: a definite FALSE assertion dominates UNDEFINED.
        indeterminate = true;
    }
    return indeterminate ? undefined : true;
}

type FilterAssertion = ASN1Element | FilterItem_substrings_strings_Item[];

/** Convert matcher output without losing the contexts of stored values. */
function appendMatchedValues (
    attribute: Attribute,
    matchedValues: MatchedValue[],
): void {
    for (const value of attribute.values) {
        matchedValues.push({ type: attribute.type_, value });
    }
    for (const vwc of attribute.valuesWithContext ?? []) {
        matchedValues.push({ type: attribute.type_, value: vwc.value, contexts: vwc.contextList });
    }
}

/**
 * Select permitted values before value matching. An attribute value assertion
 * applies only to values satisfying all selected context assertions. Plain
 * values share one context check; fallback always consults the original
 * attribute, including denied and non-matching siblings.
 *
 * Context errors are kept separately: these values cannot establish TRUE,
 * but a possible value match on them can make the result UNDEFINED.
 */
function selectAttributeValues (
    attribute: Attribute,
    options: EvaluateFilterSettings,
    selectedContexts: ContextAssertion[] | undefined,
    directMatchCache: DirectContextMatchCache,
): { selected: Attribute; indeterminate?: Attribute } {
    const permitted = new Attribute(
        attribute.type_,
        attribute.values.filter((value) => options.permittedToMatch(attribute.type_, value)),
        attribute.valuesWithContext?.filter((vwc) => options.permittedToMatch(attribute.type_, vwc.value)),
    );
    if (!selectedContexts?.length || permitted.isEmpty()) {
        return { selected: permitted };
    }
    let selectedValues = permitted.values;
    let indeterminate: Attribute | undefined;
    if (permitted.values.length > 0) {
        // We still have to check this for context-less values, due to absent
        // match settings.
        const result = valueSatisfiesSelectedContexts(selectedContexts, NO_CONTEXTS, attribute, options, directMatchCache);
        if (result !== true) {
            selectedValues = [];
            if (result === undefined) {
                indeterminate = new Attribute(attribute.type_, permitted.values, []);
            }
        }
    }
    const selected = new Attribute(attribute.type_, selectedValues, []);
    for (const vwc of permitted.valuesWithContext ?? []) {
        const result = valueSatisfiesSelectedContexts(selectedContexts, vwc.contextList, attribute, options, directMatchCache);
        if (result === true) {
            selected.valuesWithContext!.push(vwc);
        } else if (result === undefined) {
            indeterminate ??= new Attribute(attribute.type_, [], []);
            indeterminate.valuesWithContext!.push(vwc);
        }
    }
    return { selected, indeterminate };
}

/**
 * Match selected values as a batch, decoding/preparing the assertion once.
 * Collect values only when requested, so normal matching can stop at TRUE.
 * `matcher` is wrapped by `handleErrors` to return UNDEFINED on errors.
 * An absent `matchedValues` array suppresses output collection, even with
 * `matchedValuesOnly`, for defaults that are never returned to the caller.
 */
function matchAttribute (
    matcher: Matcher,
    assertion: FilterAssertion,
    attribute: Attribute,
    options: EvaluateFilterSettings,
    matchedValues: MatchedValue[] | undefined,
    flags: number = 0,
    selectedContexts?: ContextAssertion[],
    directMatchCache: DirectContextMatchCache = new WeakMap(),
): boolean | undefined {
    const { selected, indeterminate } = selectAttributeValues(attribute, options, selectedContexts, directMatchCache);
    let result: boolean | undefined = false;
    // Empty/entirely denied or context-rejected attributes are FALSE. Do not
    // call a matcher whose empty-input result might instead be UNDEFINED.
    if (!selected.isEmpty()) {
        if (options.matchedValuesOnly && matchedValues) {
            const valueMatches = new Attribute(attribute.type_, [], []);
            result = matcher(assertion, selected, options.getEqualityMatcher, flags, valueMatches);
            if (result === true) {
                appendMatchedValues(valueMatches, matchedValues);
            }
        } else {
            result = matcher(assertion, selected, options.getEqualityMatcher, flags);
        }
    }
    if (result !== false || !indeterminate) {
        return result;
    }
    // No selected value matched. Uncertain context selection can only make
    // the result UNDEFINED, never TRUE; a definite value non-match stays FALSE.
    const uncertainMatch = matcher(assertion, indeterminate, options.getEqualityMatcher, flags);
    return uncertainMatch === false ? false : undefined;
}

function assertedContexts (ava: AttributeValueAssertion): ContextAssertion[] | undefined {
    return (ava.assertedContexts && ("selectedContexts" in ava.assertedContexts))
        ? ava.assertedContexts.selectedContexts
        : undefined;
}

/**
 * The ordering and approximate flags select which rule is applied. A
 * substrings item is recognized by its `strings` sequence rather than a flag.
 */
function matcherForItem (
    type_: AttributeType,
    assertion: FilterAssertion,
    options: EvaluateFilterSettings,
    flags: number,
): Matcher | undefined {
    if (Array.isArray(assertion)) {
        return options.getSubstringsMatcher(type_);
    }
    if (flags & (MATCH_FLAG_ORDERING_GREATER | MATCH_FLAG_ORDERING_OR_EQUAL)) {
        return options.getOrderingMatcher(type_);
    }
    if (flags & MATCH_FLAG_APPROXIMATE) {
        // X.511 7.8.2: an unsupported approximate rule uses the equality
        // rule, still with MATCH_FLAG_APPROXIMATE, never raw encoding equality.
        return options.getApproximateMatcher(type_) ?? options.getEqualityMatcher(type_);
    }
    return options.getEqualityMatcher(type_);
}

/**
 * Evaluate an equality, ordering, substrings, or approximate filter item.
 *
 * `flags` is what distinguishes the element assertions:
 * `lessOrEqual` sets `MATCH_FLAG_ORDERING_OR_EQUAL`, `greaterOrEqual` also
 * sets `MATCH_FLAG_ORDERING_GREATER`, and `approximateMatch` sets
 * `MATCH_FLAG_APPROXIMATE`. Equality passes no flags. A substrings item
 * passes its `strings` sequence as `assertion`.
 *
 * Substrings items have no asserted contexts. Request-attribute defaults
 * apply only when the attribute is absent, never to replace stored values
 * that fail to match.
 */
function evaluateFilterAssertion (
    type_: AttributeType,
    assertion: FilterAssertion,
    entry: EntryInformation,
    options: EvaluateFilterSettings,
    flags: number,
    selectedContexts?: ContextAssertion[],
): MatchedValue[] | boolean | undefined {
    let indeterminate = false;
    const rawMatcher = matcherForItem(type_, assertion, options, flags);
    const matcher: Matcher | undefined = handleErrors(rawMatcher);
    // X.511 7.8.2: an unavailable matching rule makes the item UNDEFINED,
    // even if the presented and stored encodings happen to be identical.
    if (!matcher) {
        return undefined;
    }
    // A substrings item names one attribute type. Denying that type is
    // UNDEFINED, so NOT cannot turn the denial into a match.
    if (Array.isArray(assertion) && !options.permittedToMatch(type_)) {
        return undefined;
    }
    const attributes = getAttributesFromEntry(entry, options.dnAttribute);
    const friendTypes: OBJECT_IDENTIFIER[] = [
        type_,
        ...(options.getFriends?.(type_) ?? []),
    ];
    const relevantAttributes = attributes
        .filter((attr): boolean => friendTypes.some((f) => options.isAttributeSubtype(attr.type_, f)));
    const matchedValues: MatchedValue[] = [];
    let matched = false;
    const substrings = Array.isArray(assertion);
    // Determine presence before value permissions and context selection:
    // an unusable stored attribute is still present and cannot use defaults.
    if ((relevantAttributes.length === 0) && options?.requestAttributes?.size) {
        const req_attrs = options.requestAttributes;
        // NOTE: This does NOT check parent types of the asserted value.
        const profiled_type: AttributeType | undefined = friendTypes
            .find((rattr) => req_attrs.has(rattr.toString()));
        // "" will never match anything. It's just to make this a one-liner.
        const profile = req_attrs.get(profiled_type?.toString() ?? "");
        if (profile?.defaultValues) {
            if (profile.defaultValues.length === 0) {
                // No matched values are returned intentionally, since these are defaults.
                return true;
            }
            // NOTE: This does not consider entryType at all, because it is undocumented entirely.
            const default_values = profile.defaultValues.flatMap((dv) => dv.values);
            const result = matchAttribute(matcher, assertion, new Attribute(profile.attributeType, default_values), options, undefined, flags);
            indeterminate ||= result === undefined;
            if (result === true) {
                // No matched values are returned intentionally, since these are defaults.
                return true;
            }
        }
    }
    const directMatchCache: DirectContextMatchCache = new WeakMap();
    for (const attr of relevantAttributes) {
        // Substrings checks permission per value. The other items also
        // require permission on the stored attribute type.
        if (!substrings && !options.permittedToMatch(attr.type_)) {
            continue;
        }
        const result = matchAttribute(matcher, assertion, attr, options, matchedValues, flags, selectedContexts, directMatchCache);
        indeterminate ||= result === undefined;
        if (result === true) {
            matched = true;
            if (!options.matchedValuesOnly) {
                return matchedValues.length > 0 ? matchedValues : true;
            }
        }
    }
    if (matched) {
        return matchedValues.length > 0 ? matchedValues : true;
    }
    return indeterminate ? undefined : [];
}

export
function evaluateEquality (
    ava: AttributeValueAssertion,
    entry: EntryInformation,
    options: EvaluateFilterSettings,
): MatchedValue[] | boolean | undefined {
    return evaluateFilterAssertion(
        ava.type_,
        ava.assertion,
        entry,
        options,
        0,
        assertedContexts(ava),
    );
}

export
function evaluateApprox (
    ava: AttributeValueAssertion,
    entry: EntryInformation,
    options: EvaluateFilterSettings,
): MatchedValue[] | boolean | undefined {
    return evaluateFilterAssertion(
        ava.type_,
        ava.assertion,
        entry,
        options,
        MATCH_FLAG_APPROXIMATE,
        assertedContexts(ava),
    );
}

export
function evaluateOrdering (
    gte: boolean,
    ava: AttributeValueAssertion,
    entry: EntryInformation,
    options: EvaluateFilterSettings,
): MatchedValue[] | boolean | undefined {
    const flags = MATCH_FLAG_ORDERING_OR_EQUAL
        | (gte ? MATCH_FLAG_ORDERING_GREATER : 0);
    return evaluateFilterAssertion(
        ava.type_,
        ava.assertion,
        entry,
        options,
        flags,
        assertedContexts(ava),
    );
}

export
function evaluateSubstring (
    sub: FilterItem_substrings,
    entry: EntryInformation,
    options: EvaluateFilterSettings,
): MatchedValue[] | boolean | undefined {
    return evaluateFilterAssertion(sub.type_, sub.strings, entry, options, 0);
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
    for (const attr of attributes) {
        if (!friendTypes.some((f) => options.isAttributeSubtype(attr.type_, f))) {
            continue;
        }
        if (options.permittedToMatch(attr.type_)) {
            return true; // The attribute matched and was permitted to match.
        }
    }
    return false;
}

export
function evaluateMatchingRuleAssertion (
    mra: MatchingRuleAssertion,
    entry: EntryInformation,
    options: EvaluateFilterSettings,
): MatchedValue[] | boolean | undefined {
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
    let indeterminate = false;
    let matcher: Matcher | undefined = (
        options.getEqualityMatcher(mra.matchingRule[0])
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
    matcher = handleErrors(matcher)!;
    const rule = mra.matchingRule[0];
    // Applicability is required even if the asserted type is absent from the
    // entry, or a friend/subtype would otherwise supply a matching value.
    if (mra.type_ && !options.isMatchingRuleCompatibleWithAttributeType(rule, mra.type_)) {
        if (options.performExactly) {
            throw new CannotPerformExactly(rule.toString());
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
    let incompatibleCandidateFound = false;
    const isCompatibleCandidate = (type: AttributeType): boolean => {
        const compatible = options.isMatchingRuleCompatibleWithAttributeType(rule, type);
        incompatibleCandidateFound ||= !compatible;
        return compatible;
    };
    // X.511 7.8.2: validate each selected attribute's actual type as well as
    // the asserted type, including friends, subtypes, and DN attributes.
    const selectedAttributes = mra.type_
        ? attributes
            .filter((attr): boolean => friendTypes.some((f) => options.isAttributeSubtype(attr.type_, f)))
        : attributes;
    const relevantAttributes = selectedAttributes.filter((attr) => (
        options.permittedToMatch(attr.type_) && isCompatibleCandidate(attr.type_)
    ));
    const matchedValues: MatchedValue[] = [];
    let matched = false;
    if (relevantAttributes.length === 0) {
        // Service-profile defaults must satisfy the same applicability check.
        // Skip an incompatible friend's profile rather than accepting its
        // values (or its unconditional, empty default-value set).
        const profile = friendTypes
            .map((type) => options.requestAttributes?.get(type.toString()))
            .find((candidate) => candidate
                && options.permittedToMatch(candidate.attributeType)
                && isCompatibleCandidate(candidate.attributeType));
        if (profile?.defaultValues) {
            if (profile.defaultValues.length === 0) {
                // No matched values are returned intentionally, since these are defaults.
                return true;
            }
            // NOTE: This does not consider entryType at all, because it is undocumented entirely.
            const default_values = profile.defaultValues.flatMap((dv) => dv.values);
            const result = matchAttribute(matcher, mra.matchValue, new Attribute(profile.attributeType, default_values), options, undefined);
            indeterminate ||= result === undefined;
            if (result === true) {
                // No matched values are returned intentionally, since these are defaults.
                return true;
            }
        }
        // I, Jonathan M. Wilbur, do not understand the following AI-generated
        // code (region with heavy comments). I am still going to let this in
        // just on the grounds that this is a rarely used code path: using
        // extensibleMatch and getting it very wrong.

        // No permitted, compatible stored attributes reached this branch.
        // !profile also rules out a permitted, compatible service profile.
        // With neither, applicability has not been established if:
        // - a selected attribute/profile was explicitly rejected as incompatible; or
        // - type_ was omitted, so no asserted type was checked up front.
        // This is different from a defined comparison that simply found no match.
        if (!profile && (incompatibleCandidateFound || !mra.type_)) {
            // performExactly rejects observed incompatibility. For an untyped
            // assertion, also retain the existing error when entry/DN attributes
            // were present but none could be used. An empty untyped search with
            // no incompatible profile has no observed use to reject.
            if (options.performExactly && (incompatibleCandidateFound || attributes.length > 0)) {
                throw new CannotPerformExactly(rule.toString());
            }
            // Return UNDEFINED, not [] (FALSE), so NOT cannot turn this lack
            // of an applicable comparison into a successful match.
            return undefined;
        }
        // A compatible explicit type or profile established applicability;
        // preserve an ordinary non-match, or an indeterminate matcher result.
        return indeterminate ? undefined : [];
    }
    for (const attr of relevantAttributes) {
        if (!options.permittedToMatch(attr.type_)) {
            continue;
        }
        const result = matchAttribute(matcher, mra.matchValue, attr, options, matchedValues);
        indeterminate ||= result === undefined;
        if (result === true) {
            matched = true;
            if (!options.matchedValuesOnly) {
                return matchedValues.length > 0 ? matchedValues : true;
            }
        }
    }
    if (matched) {
        return matchedValues.length > 0 ? matchedValues : true;
    }
    return indeterminate ? undefined : [];
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
    const state: MatchState = { indeterminate: false };
    const contextsMatch = handleErrors(valueSatisfiesSelectedContexts, state)!;
    const directMatchCache: DirectContextMatchCache = new WeakMap();
    for (const attr of relevantAttributes) {
        if (attr.values.length > 0
            && contextsMatch(ata.assertedContexts, NO_CONTEXTS, attr, options, directMatchCache)) {
            return true;
        }
        for (const vwc of attr.valuesWithContext ?? []) {
            if (contextsMatch(ata.assertedContexts, vwc.contextList, attr, options, directMatchCache)) {
                return true;
            }
        }
    }
    return state.indeterminate ? undefined : false;
}

export
function evaluateFilterItem (
    filterItem: FilterItem,
    entry: EntryInformation,
    options: EvaluateFilterSettings,
): MatchedValue[] | boolean | undefined {
    if ("equality" in filterItem) {
        if (filterItem.equality.type_.isEqualTo(id_mr_approximateStringMatch)) {
            return evaluateApprox(filterItem.equality, entry, options);
        }
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
 * Evaluation defaults to a limit of 128 nested filter nodes per branch.
 * Exhaustion evaluates to UNDEFINED, including under NOT, rather than treating
 * incomplete evaluation as FALSE. Very large custom limits may exceed the
 * JavaScript runtime's call stack.
 *
 * @param {Filter} filter The filter against which the entry is to be evaluated.
 * @param {EntryInformation[]} family The entries of the family that is to be evaluated by the filter.
 * @param {Object} options An options object containing. Despite the name, this
 *  parameter, and most of its properties, are required.
 * @param {Set} contributingEntries The contributing entries. Do not supply this
 *  argument. Just leave this `undefined`.
 * @param recursionTTL Maximum filter nodes on a recursive path, including the
 *  root. Defaults to MAX_FILTER_DEPTH (128). Non-positive or non-safe-integer
 *  budgets evaluate to UNDEFINED.
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
    recursionTTL: number = MAX_FILTER_DEPTH,
): EvaluateFilterReturn {
    if (!Number.isSafeInteger(recursionTTL)) {
        return { matched: undefined, contributingEntries, matchedValues: [] };
    }
    return evaluateFilterAtDepth(filter, family, options, contributingEntries, recursionTTL);
}

/** Evaluate one node, passing a decreasing depth budget to its children. */
function evaluateFilterAtDepth (
    filter: Filter,
    family: EntryInformation[],
    options: EvaluateFilterSettings,
    contributingEntries: Set<number>,
    remainingDepth: number,
): EvaluateFilterReturn {
    if (remainingDepth <= 0) {
        return { matched: undefined, contributingEntries, matchedValues: [] };
    }
    let subresult_undefined: boolean = false;
    if ("item" in filter) {
        const familyResults: MatchedEntryInfo[] = [];
        let undefinedResultFound: boolean = false;
        let matched: boolean = false;
        for (let i = 0; i < family.length; i++) {
            const member = family[i];
            let result: ReturnType<typeof evaluateFilterItem>;
            try {
                result = evaluateFilterItem(filter.item, member, options);
            } catch (error) {
                if (error instanceof CannotPerformExactly) {
                    throw error;
                }
                result = undefined;
            }
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
        const newContributingEntries: Set<number> = new Set();
        const matchedValues: MatchedEntryInfo[] = [];
        for (const subfilter of filter.and) {
            const result = evaluateFilterAtDepth(subfilter, family, options, new Set(), remainingDepth - 1);
            if (result.matched === false) {
                return {
                    matched: false,
                    contributingEntries,
                    matchedValues: [],
                };
            }
            if (result.matched === undefined) {
                subresult_undefined = true;
                continue;
            }
            for (const ce of result.contributingEntries.values()) {
                newContributingEntries.add(ce);
            }
            result.matchedValues && matchedValues.push(...result.matchedValues);
        }
        if (subresult_undefined) {
            return {
                matched: undefined,
                contributingEntries,
                matchedValues: [],
            };
        }
        for (const ce of contributingEntries.values()) {
            newContributingEntries.add(ce);
        }
        return {
            matched: true,
            contributingEntries: newContributingEntries,
            matchedValues,
        };
    } else if ("or" in filter) {
        const newContributingEntries: Set<number> = new Set();
        const matchedValues: MatchedEntryInfo[] = [];
        let matched: boolean = false;
        /* Unlike with and, we still have to iterate over all subfilters so that
        we can determine if other entries contribute to the match or if other
        values match. */
        for (const subfilter of filter.or) {
            const result = evaluateFilterAtDepth(subfilter, family, options, new Set(), remainingDepth - 1);
            if (result.matched === false) {
                continue;
            }
            if (result.matched === undefined) {
                subresult_undefined = true;
                continue;
            }
            matched = true;
            for (const ce of result.contributingEntries.values()) {
                newContributingEntries.add(ce);
            }
            result.matchedValues && matchedValues.push(...result.matchedValues);
        }
        if (matched) {
            for (const ce of contributingEntries.values()) {
                newContributingEntries.add(ce);
            }
            return {
                matched: true,
                contributingEntries: newContributingEntries,
                matchedValues,
            };
        }
        if (subresult_undefined) {
            return {
                matched: undefined,
                contributingEntries,
                matchedValues: [],
            };
        }
        return {
            matched: false,
            contributingEntries,
            matchedValues: [],
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
        const result = evaluateFilterAtDepth(filter.not, family, options, contributingEntries, remainingDepth - 1);
        if (result.matched === undefined) {
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
