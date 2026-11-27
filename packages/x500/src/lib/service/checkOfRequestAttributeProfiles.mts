import {
    SearchRule
} from "@wildboar/x500/ServiceAdministration";
import { SearchArgumentData } from "@wildboar/x500/DirectoryAbstractService";
import { RequestAttribute } from "@wildboar/x500/ServiceAdministration";
import { compareElements, type ContextMatcher, type Matcher } from "@wildboar/x500";
import {
    ASN1Element,
    ObjectIdentifier,
    type OBJECT_IDENTIFIER,
    type DotDelimitedOidString
} from "@wildboar/asn1";
import { id_pr_administratorImposedLimit } from "@wildboar/x500/SelectedAttributeTypes";
import { id_pr_attributeNegationViolation } from "@wildboar/x500/SelectedAttributeTypes";
import { id_pr_missingSearchContext } from "@wildboar/x500/SelectedAttributeTypes";
import { id_pr_searchContextViolation } from "@wildboar/x500/SelectedAttributeTypes";
import { id_pr_searchContextCombinationViolation } from "@wildboar/x500/SelectedAttributeTypes";
import { type Filter } from "@wildboar/x500/DirectoryAbstractService";
import { ContextProfile } from "@wildboar/x500/ServiceAdministration";
import { getRequiredAttributesFromAttributeCombination } from "./getRequiredAttributesFromAttributeCombination.mjs";
import { getRequiredContextsFromContextCombination } from "./getRequiredContextsFromContextCombination.mjs";
import { checkContextCombination } from "./checkContextCombination.mjs";
import type { FilterItem, FilterItem_substrings_strings_Item } from "@wildboar/x500/DirectoryAbstractService";
import { AttributeTypeAndValue, ContextAssertion, type CONTEXT } from "@wildboar/x500/InformationFramework";
import { type AttributeCombination, type ContextCombination } from "@wildboar/x500/ServiceAdministration";
import { type AttributeType } from "@wildboar/x500/InformationFramework";
import anyTypeMatch from "../matching/anyTypeMatch.mjs";
import { getRequestAttributeProfile } from "./getRequestAttributeProfile.mjs";

/**
 * The return type of `checkOfRequestAttributeProfileInFilter()`. The
 * fields of this object take their names from the search service problems
 * defined in
 * [ITU Recommendation X.520 (2019)](https://www.itu.int/rec/T-REC-X.520/en),
 * Section 6.16.2.
 *
 * @see {@link checkOfRequestAttributeProfileInFilter}
 */
export interface CheckRequestAttributeState {

    /**
     * The object identifier identifying the problem (if any) that is to
     * populate the `searchServiceProblem` notification attribute described in
     * [ITU Recommendation X.520 (2019)](https://www.itu.int/rec/T-REC-X.520/en),
     * Section 6.16.2.
     */
    serviceProblem?: OBJECT_IDENTIFIER,

    /**
     * Attribute types that did not assert specific values in filter items when
     * doing so was forbidden, such as when using a `contextsPresent` filter
     * item.
     */
    searchValuesRequired: AttributeType[],

    /**
     * The filter items that contain assertions of values that were not
     * permitted by the governing search rule.
     */
    invalidSearchValues: FilterItem[],

    /**
     * The attribute type that is lacking a context type that is required by
     * the governing search rule. The particular missing context types are
     * tracked in `missingSearchContexts`.
     */
    missingSearchContextAttr?: AttributeType,

    /**
     * The object identifiers of context types that were missing, yet required
     * by the governing search rule, in a filter item whose attribute type is
     * identified by `missingSearchContextAttr`.
     */
    missingSearchContexts: OBJECT_IDENTIFIER[],

    /**
     * The attribute type of a filter item that contained an invalid context
     * combination according to the governing search rule. The particular
     * combination violations are tracked in `contextComboViolations`.
     */
    contextComboViolationAttr?: AttributeType;

    /**
     * The list of context combinations that were violated for the filter item
     * whose attribute type is identified by `contextComboViolationAttr`.
     */
    contextComboViolations: ContextCombination[],

    /**
     * The attribute type of a filter item that contained context types that
     * were not permitted by the governing search rule. The particular offending
     * context types are tracked in `searchContextViolations`.
     */
    searchContextViolationsAttr?: AttributeType,

    /**
     * Context types that violated the governing search rule in a filter item
     * whose attribute type is identified by `searchContextViolationsAttr`.
     */
    searchContextViolations: OBJECT_IDENTIFIER[],

    /**
     * The attribute type of a filter item that contained context assertions
     * that contained a prohibited assertion value. The particular offending
     * context assertions are tracked in `searchContextValueViolations`.
     */
    searchContextValueViolationAttr?: AttributeType,

    /**
     * Context values that violated the governing search rules in a filter item
     * whose attribute type is identified by `searchContextValueViolationAttr`.
     */
    searchContextValueViolations: ContextAssertion[],

}

/**
 * Evaluates a single non-negated `FilterItem` against its applicable
 * `RequestAttribute` profile according to Steps 1-6 of ITU-T Rec. X.511 (2019),
 * Section 15.2, recording any violation into `state`.
 *
 * @internal
 */
function checkOfRequestAttributeProfileInFilterItem(
    state: CheckRequestAttributeState,
    filter: Filter,
    attr_profiles: Map<DotDelimitedOidString, RequestAttribute>,
    getAttributeParentTypes: (attributeType: AttributeType) => IterableIterator<AttributeType>,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    getContextMatcher?: (contextType: CONTEXT["&id"]) => ContextMatcher | undefined,
    getSubstringsMatcher?: (attributeType: AttributeType) => Matcher | undefined,
): void {
    if ("item" in filter) {
        let type_oid: OBJECT_IDENTIFIER | undefined;
        let asserted_value: ASN1Element | FilterItem_substrings_strings_Item[] | undefined;
        let asserted_contexts: ContextAssertion[] | undefined;
        const item = filter.item;
        if ("equality" in item) {
            type_oid = item.equality.type_;
            asserted_value = item.equality.assertion;
            if (item.equality.assertedContexts && ("selectedContexts" in item.equality.assertedContexts)) {
                asserted_contexts = item.equality.assertedContexts.selectedContexts;
            }
        }
        else if ("substrings" in item) {
            type_oid = item.substrings.type_;
            asserted_value = item.substrings.strings;
        }
        else if ("greaterOrEqual" in item) {
            type_oid = item.greaterOrEqual.type_;
            asserted_value = item.greaterOrEqual.assertion;
            if (item.greaterOrEqual.assertedContexts && ("selectedContexts" in item.greaterOrEqual.assertedContexts)) {
                asserted_contexts = item.greaterOrEqual.assertedContexts.selectedContexts;
            }
        }
        else if ("lessOrEqual" in item) {
            type_oid = item.lessOrEqual.type_;
            asserted_value = item.lessOrEqual.assertion;
            if (item.lessOrEqual.assertedContexts && ("selectedContexts" in item.lessOrEqual.assertedContexts)) {
                asserted_contexts = item.lessOrEqual.assertedContexts.selectedContexts;
            }
        }
        else if ("present" in item) {
            type_oid = item.present;
        }
        else if ("approximateMatch" in item) {
            type_oid = item.approximateMatch.type_;
            asserted_value = item.approximateMatch.assertion;
            if (item.approximateMatch.assertedContexts
                && ("selectedContexts" in item.approximateMatch.assertedContexts)) {
                asserted_contexts = item.approximateMatch.assertedContexts.selectedContexts;
            }
        }
        else if ("extensibleMatch" in item) {
            type_oid = item.extensibleMatch.type_;
            asserted_value = item.extensibleMatch.matchValue;
        }
        else if ("contextPresent" in item) {
            type_oid = item.contextPresent.type_;
            asserted_contexts = item.contextPresent.assertedContexts;
        }
        if (!type_oid) {
            return;
        }
        const profile = getRequestAttributeProfile(type_oid, attr_profiles, getAttributeParentTypes);
        if (!profile) {
            return;
        }
        // Step 1
        if ((!profile.selectedValues || (profile.selectedValues.length > 0))
            && (
                !("equality" in item)
                && !("substrings" in item)
                && !("approximateMatch" in item)
                && !("extensibleMatch" in item)
                // NOTE: This excludes other filter item types I think it should include...
            )) {
            state.searchValuesRequired.push(type_oid);
            return;
        }
        // Step 2
        if (profile.selectedValues?.length && asserted_value) {
            let matched: boolean | undefined = false;
            // Substring assertions require their own matching rule, not equality.
            const matcher = ("substrings" in item)
                ? getSubstringsMatcher?.(type_oid)
                : (getEqualityMatcher?.(type_oid) ?? anyTypeMatch);
            if (matcher) {
                for (const permitted_value of profile.selectedValues) {
                    matched = matcher(
                        asserted_value,
                        new AttributeTypeAndValue(type_oid, permitted_value),
                        getEqualityMatcher,
                    );
                    if (matched === true) {
                        break;
                    }
                }
            }
            if (!matched) {
                state.invalidSearchValues.push(item);
                return;
            }
        }
        // Step 3 is a NOOP for our purposes.
        if (profile.contexts) {
            // This is specified in 16.10.2.
            if ((profile.contexts.length === 0) && asserted_contexts && (asserted_contexts.length > 0)) {
                state.serviceProblem = id_pr_searchContextViolation;
                state.searchContextViolationsAttr = type_oid;
                state.searchContextViolations.push(...asserted_contexts.map((ac) => ac.contextType));
                return;
            }
            // Step 4
            const asserted_context_set: Map<DotDelimitedOidString, ContextAssertion> = new Map();
            for (const context of asserted_contexts ?? []) {
                asserted_context_set.set(context.contextType.toString(), context);
            }
            if (profile.contextCombination) {

                // Check for required contexts
                const required_contexts: Set<DotDelimitedOidString> = new Set();
                getRequiredContextsFromContextCombination(
                    profile.contextCombination,
                    true,
                    required_contexts
                );
                for (const mc of required_contexts.values()) {
                    if (!asserted_context_set.has(mc)) {
                        state.serviceProblem = id_pr_missingSearchContext;
                        state.missingSearchContextAttr = type_oid;
                        state.missingSearchContexts.push(ObjectIdentifier.fromString(mc));
                    }
                }
                if (state.missingSearchContexts.length > 0) {
                    return;
                }

                // Check context combinations
                checkContextCombination(asserted_context_set, profile.contextCombination, state.contextComboViolations);
                if (state.contextComboViolations.length > 0) {
                    state.contextComboViolationAttr = type_oid;
                    state.serviceProblem = id_pr_searchContextCombinationViolation;
                    return;
                }
            }
            // Step 5
            /* Note that there are three nested for loops below. Not only is this
            ugly, but it is also a potential denial-of-service attack, because the
            code below executes with O(n^2) time complexity (one of the for loops
            doesn't count towards the exponent). As a safeguard against this, we
            return an error if the number of asserted contexts is greater than 100;
            chances are that, with that many, one will violate the rules anyway.
            
            This is my fault. The directory needs too much many-to-many comparison:
            my rewrite of Meerkat DSA is going (soft) require hash implementations
            for all equality matching rules and context types. */
            const context_map: Map<DotDelimitedOidString, ContextProfile> = new Map();
            for (const context of profile.contexts) {
                context_map.set(context.contextType.toString(), context);
            }
            for (const asserted_context of asserted_contexts ?? []) {
                const key = asserted_context.contextType.toString();
                const profile = context_map.get(key);
                if (!profile) {
                    state.searchContextViolationsAttr = type_oid;
                    state.searchContextViolations.push(asserted_context.contextType);
                } else if (profile.contextValue) {
                    // Denial-of-service attack mitigation.
                    if (
                        asserted_context.contextValues
                        && (asserted_context.contextValues.length > 100)
                    ) {
                        state.searchContextViolationsAttr = type_oid;
                        state.searchContextViolations.push(asserted_context.contextType);
                        return;
                    }
                    // Step 6
                    const matcher = getContextMatcher?.(asserted_context.contextType);
                    const non_matching_assertions: ASN1Element[] = [];
                    for (const context_value of asserted_context.contextValues) {
                        let matched: boolean = false;
                        for (const permitted_value of profile.contextValue) {
                            matched = matcher
                                ? matcher(permitted_value, [ context_value ].values())
                                : compareElements(permitted_value, context_value);
                            if (matched) {
                                break;
                            }
                        }
                        if (!matched) {
                            non_matching_assertions.push(context_value);
                            state.searchContextValueViolationAttr = type_oid;
                            state.searchContextValueViolations.push(new ContextAssertion(
                                asserted_context.contextType,
                                non_matching_assertions
                            ));
                        }
                    }
                }
            }
        }
    }
}

const MAX_FILTER_DEPTH = 100;

/**
 * Creates a blank `CheckRequestAttributeState` with no recorded violations.
 *
 * @returns An initialized, violation-free `CheckRequestAttributeState`
 * @function
 * @internal
 * @author Google Gemini 4 Carbon
 */
function createEmptyState(): CheckRequestAttributeState {
    return {
        searchValuesRequired: [],
        invalidSearchValues: [],
        missingSearchContexts: [],
        contextComboViolations: [],
        searchContextViolations: [],
        searchContextValueViolations: [],
    };
}

/**
 * Checks whether any profile restriction violation has been recorded on `state`.
 *
 * @param state The state produced by evaluating a filter item
 * @returns `true` if `state` contains at least one violation, or `false` if compliant
 * @function
 * @internal
 * @author Google Gemini 4 Carbon
 */
function hasViolation(state: CheckRequestAttributeState): boolean {
    return Boolean(
        state.serviceProblem
        || (state.searchValuesRequired.length > 0)
        || (state.invalidSearchValues.length > 0)
        || (state.missingSearchContexts.length > 0)
        || (state.contextComboViolations.length > 0)
        || (state.searchContextViolations.length > 0)
        || (state.searchContextValueViolations.length > 0)
    );
}

/**
 * Extracts the asserted attribute type OID from a `FilterItem`, if present.
 * Returns `undefined` for untyped `extensibleMatch` items or unrecognized
 * `CHOICE` extensions.
 *
 * @param item The filter item to inspect
 * @returns The asserted attribute type OID, or `undefined` if none is present
 * @function
 * @internal
 * @author Google Gemini 4 Carbon
 */
function getFilterItemType(item: FilterItem): OBJECT_IDENTIFIER | undefined {
    if ("equality" in item) return item.equality.type_;
    if ("substrings" in item) return item.substrings.type_;
    if ("greaterOrEqual" in item) return item.greaterOrEqual.type_;
    if ("lessOrEqual" in item) return item.lessOrEqual.type_;
    if ("present" in item) return item.present;
    if ("approximateMatch" in item) return item.approximateMatch.type_;
    if ("extensibleMatch" in item) return item.extensibleMatch.type_;
    if ("contextPresent" in item) return item.contextPresent.type_;
    return undefined;
}

// Ordered from safest/vacuous to worst for `OR` (`max` picks the worst branch):
// EMPTY (0) < COMPLIED (1) < ABSENT (2) < NEGATED (3) < FAILED (4).
const STATUS_EMPTY = 0;
const STATUS_COMPLIED = 1;
const STATUS_ABSENT = 2;
const STATUS_NEGATED = 3;
const STATUS_FAILED = 4;

type BranchStatus =
    | typeof STATUS_EMPTY
    | typeof STATUS_COMPLIED
    | typeof STATUS_ABSENT
    | typeof STATUS_NEGATED
    | typeof STATUS_FAILED;

interface BranchOutcome {
    status: BranchStatus;
    failed_state?: CheckRequestAttributeState;
}

const OUTCOME_EMPTY: BranchOutcome = { status: STATUS_EMPTY };
const OUTCOME_COMPLIED: BranchOutcome = { status: STATUS_COMPLIED };
const OUTCOME_ABSENT: BranchOutcome = { status: STATUS_ABSENT };
const OUTCOME_NEGATED: BranchOutcome = { status: STATUS_NEGATED };

/**
 * Combines two subfilter outcomes across an effective `AND`:
 * `EMPTY > COMPLIED > FAILED (right wins ties) > NEGATED > ABSENT`.
 *
 * @param left Outcome of the left conjunct
 * @param right Outcome of the right conjunct
 * @returns The combined `BranchOutcome` for the conjunction
 * @function
 * @internal
 * @author Google Gemini 4 Carbon
 */
function combineAnd(left: BranchOutcome, right: BranchOutcome): BranchOutcome {
    if ((left.status === STATUS_EMPTY) || (right.status === STATUS_EMPTY)) {
        return OUTCOME_EMPTY;
    } else if ((left.status === STATUS_COMPLIED) || (right.status === STATUS_COMPLIED)) {
        return OUTCOME_COMPLIED;
    } else if (right.status === STATUS_FAILED) {
        return right;
    } else if (left.status === STATUS_FAILED) {
        return left;
    } else if ((left.status === STATUS_NEGATED) || (right.status === STATUS_NEGATED)) {
        return OUTCOME_NEGATED;
    } else {
        return OUTCOME_ABSENT;
    }
}

/**
 * Collects every attribute type OID referenced anywhere in `combo` (whether
 * unconditionally required under `and`, or conditionally referenced under
 * `or` / `not`), so conditional attributes can be distinguished from
 * attributes not mentioned in `attributeCombination` at all.
 *
 * @param combo The attribute combination expression from the search rule
 * @param ret Output set populated with string-form attribute type OIDs
 * @param recursion_ttl Remaining nesting depth allowed
 * @function
 * @internal
 * @author Google Gemini 4 Carbon
 */
function collectAllCombinationAttributes(
    combo: AttributeCombination,
    ret: Set<DotDelimitedOidString>,
    recursion_ttl: number = MAX_FILTER_DEPTH,
): void {
    if (recursion_ttl <= 0) {
        return;
    }
    if ("attribute" in combo) {
        ret.add(combo.attribute.toString());
    } else if (("and" in combo) || ("or" in combo)) {
        for (const sub of ("and" in combo) ? combo.and : combo.or) {
            collectAllCombinationAttributes(sub, ret, recursion_ttl - 1);
        }
    } else if ("not" in combo) {
        collectAllCombinationAttributes(combo.not, ret, recursion_ttl - 1);
    }
}

/**
 * Scans `filter` to find every asserted attribute type that is governed by a
 * `RequestAttribute` profile in `attr_profiles` (either directly or inherited
 * from a supertype profile with `includeSubtypes: true`), populating `governed`.
 *
 * We cannot simply iterate `attr_profiles.keys()` because `evaluateAttributeInFilter`
 * groups candidates by the *asserted* attribute type: if `attr_profiles` only
 * defines `name` (`includeSubtypes: true`) and the filter asserts both `cn` and
 * `sn`, `cn` and `sn` must be evaluated as separate attributes, whereas unused
 * profiles in `attr_profiles` and unpermitted types (no matching profile) are
 * skipped.
 *
 * @param filter The filter subtree being scanned
 * @param attr_profiles Input attribute profiles indexed by their OID string
 * @param getAttributeParentTypes Yields ancestors of an asserted attribute type
 * @param resolved_cache Memoizes profile lookups (including `null` misses) by OID
 * @param governed Output map of asserted attribute OID -> governing `RequestAttribute`
 * @param recursion_ttl Remaining nesting depth allowed before failing closed
 * @returns `true` if the entire subtree stayed within `recursion_ttl`, or `false`
 *  if the depth limit was exceeded (so a deeply nested filter cannot hide
 *  assertions past the depth limit and appear to have `governed.size === 0`).
 * @function
 * @internal
 * @author Google Gemini 4 Carbon
 */
function collectGovernedAttributes(
    filter: Filter,
    attr_profiles: ReadonlyMap<DotDelimitedOidString, RequestAttribute>,
    getAttributeParentTypes: (attributeType: AttributeType) => IterableIterator<AttributeType>,
    resolved_cache: Map<DotDelimitedOidString, RequestAttribute | null>,
    governed: Map<DotDelimitedOidString, RequestAttribute>,
    recursion_ttl: number = MAX_FILTER_DEPTH,
): boolean {
    if (recursion_ttl <= 0) {
        return false;
    }
    if ("item" in filter) {
        const type_oid = getFilterItemType(filter.item);
        if (!type_oid) {
            return true;
        }
        const key = type_oid.toString();
        let profile = resolved_cache.get(key);
        if (profile === undefined) {
            profile = getRequestAttributeProfile(type_oid, attr_profiles, getAttributeParentTypes) ?? null;
            resolved_cache.set(key, profile);
        }
        if (profile && !governed.has(key)) {
            governed.set(key, profile);
        }
        return true;
    } else if (("and" in filter) || ("or" in filter)) {
        for (const sub of ("and" in filter) ? filter.and : filter.or) {
            if (!collectGovernedAttributes(sub, attr_profiles, getAttributeParentTypes, resolved_cache, governed, recursion_ttl - 1)) {
                return false;
            }
        }
        return true;
    } else if ("not" in filter) {
        return collectGovernedAttributes(filter.not, attr_profiles, getAttributeParentTypes, resolved_cache, governed, recursion_ttl - 1);
    }
    return true;
}

/**
 * Evaluates whether a single governed attribute (`attr_key`) complies with its
 * `RequestAttribute` profile across every DNF subfilter of `filter` (per ITU-T
 * Rec. X.511 (2019), Section 15.2 and X.501 Annex Q) without materializing DNF.
 *
 * `not` polarity is pushed down via `non_negated` (applying De Morgan's laws to
 * `and` / `or`). Effective `AND` nodes combine outcomes with {@link combineAnd}
 * (where one complying non-negated item satisfies the subfilter), while
 * effective `OR` nodes retain the worst branch outcome (`max` on `status`).
 *
 * @param filter The filter subtree to evaluate
 * @param non_negated `true` under an even number of enclosing `not` operators
 * @param attr_key Dot-delimited OID of the asserted attribute type being checked
 * @param attr_profiles Input attribute profiles indexed by their OID string
 * @param evaluated_items Memoized single-item evaluation failures (`null` if compliant)
 * @param getAttributeParentTypes Yields ancestors of an asserted attribute type
 * @param getEqualityMatcher Look up an equality matcher for the asserted type
 * @param getContextMatcher Look up a context matcher for a context type
 * @param getSubstringsMatcher Look up a substring matcher for the asserted type
 * @param recursion_ttl Remaining nesting depth allowed before failing closed
 * @returns The worst-case `BranchOutcome` across all subfilters of `filter`
 * @function
 * @internal
 * @author Google Gemini 4 Carbon
 */
function evaluateAttributeInFilter(
    filter: Filter,
    non_negated: boolean,
    attr_key: DotDelimitedOidString,
    attr_profiles: Map<DotDelimitedOidString, RequestAttribute>,
    evaluated_items: WeakMap<FilterItem, CheckRequestAttributeState | null>,
    getAttributeParentTypes: (attributeType: AttributeType) => IterableIterator<AttributeType>,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    getContextMatcher?: (contextType: CONTEXT["&id"]) => ContextMatcher | undefined,
    getSubstringsMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    recursion_ttl: number = MAX_FILTER_DEPTH,
): BranchOutcome {
    if (recursion_ttl <= 0) {
        const limit_state = createEmptyState();
        limit_state.serviceProblem = id_pr_administratorImposedLimit;
        return { status: STATUS_FAILED, failed_state: limit_state };
    }
    if ("item" in filter) {
        const type_oid = getFilterItemType(filter.item);
        if (!type_oid || (type_oid.toString() !== attr_key)) {
            return OUTCOME_ABSENT;
        }
        if (!non_negated) {
            return OUTCOME_NEGATED;
        }
        let item_failure = evaluated_items.get(filter.item);
        if (item_failure === undefined) {
            const item_state = createEmptyState();
            checkOfRequestAttributeProfileInFilterItem(
                item_state,
                filter,
                attr_profiles,
                getAttributeParentTypes,
                getEqualityMatcher,
                getContextMatcher,
                getSubstringsMatcher,
            );
            item_failure = hasViolation(item_state) ? item_state : null;
            evaluated_items.set(filter.item, item_failure);
        }
        return item_failure
            ? { status: STATUS_FAILED, failed_state: item_failure }
            : OUTCOME_COMPLIED;
    } else if ("not" in filter) {
        return evaluateAttributeInFilter(
            filter.not, !non_negated, attr_key, attr_profiles, evaluated_items,
            getAttributeParentTypes, getEqualityMatcher, getContextMatcher, getSubstringsMatcher,
            recursion_ttl - 1,
        );
    } else if (("and" in filter) || ("or" in filter)) {
        const subfilters = ("and" in filter) ? filter.and : filter.or;
        const acts_as_and = ("and" in filter) === non_negated;
        if (acts_as_and) {
            let acc: BranchOutcome = OUTCOME_ABSENT;
            for (const sub of subfilters) {
                const child = evaluateAttributeInFilter(
                    sub, non_negated, attr_key, attr_profiles, evaluated_items,
                    getAttributeParentTypes, getEqualityMatcher, getContextMatcher, getSubstringsMatcher,
                    recursion_ttl - 1,
                );
                acc = combineAnd(acc, child);
                if ((acc.status === STATUS_EMPTY) || (acc.status === STATUS_COMPLIED)) {
                    return acc;
                }
            }
            return acc;
        }
        // Effective OR: every branch must hold, so track the worst branch.
        let acc: BranchOutcome = OUTCOME_EMPTY;
        for (const sub of subfilters) {
            const child = evaluateAttributeInFilter(
                sub, non_negated, attr_key, attr_profiles, evaluated_items,
                getAttributeParentTypes, getEqualityMatcher, getContextMatcher, getSubstringsMatcher,
                recursion_ttl - 1,
            );
            if (child.status > acc.status) {
                acc = child;
                if (acc.status === STATUS_FAILED) {
                    return acc;
                }
            }
        }
        return acc;
    }
    return OUTCOME_ABSENT;
}

/**
 * @summary Validate filters based on search-rule-imposed input attribute profiles
 * @description
 *
 * This function implements the procedure defined in
 * [ITU Recommendation X.511 (2019)](https://www.itu.int/rec/T-REC-X.511/en),
 * Section 15.2. Specifically, it checks that filter items within a filter
 * comply with the applicable attribute profiles present in the governing
 * search filter. As problems are encountered, the `state` is modified by
 * reference. The callee is expected to inspect the fields of this object to
 * determine if any restrictions were violated.
 *
 * Profiles that include subtypes also constrain filter items for those subtypes.
 * The asserted subtype is retained for matching and diagnostic attribute types.
 *
 * @param state The current state of this function, which is passed recursively
 * @param filter The search filter to be checked
 * @param attr_profiles A mapping of input attribute types by their string-form
 *  attribute type object identifier
 * @param getAttributeParentTypes The attribute's ancestors, nearest first;
 *  the iterator may also include the asserted attribute type itself
 * @param getEqualityMatcher Look up an equality matcher for the asserted type
 * @param getContextMatcher Look up a context matcher for a context type
 * @param getSubstringsMatcher Look up a substring matcher for the asserted type.
 *  If unavailable, substring items cannot satisfy non-empty selectedValues.
 * @param attribute_combination Optional attribute combination from the search
 *  rule, used to check unconditional and conditional attributes first per X.511
 *  Section 15.2.
 * @returns Nothing. `state` is modified by reference.
 *
 * @function
 * @see {@link CheckRequestAttributeState}
 */
export function checkOfRequestAttributeProfileInFilter(
    state: CheckRequestAttributeState,
    filter: Filter,
    attr_profiles: Map<DotDelimitedOidString, RequestAttribute>,
    getAttributeParentTypes: (attributeType: AttributeType) => IterableIterator<AttributeType>,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    getContextMatcher?: (contextType: CONTEXT["&id"]) => ContextMatcher | undefined,
    getSubstringsMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    attribute_combination?: AttributeCombination,
): void {
    const resolved_cache: Map<DotDelimitedOidString, RequestAttribute | null> = new Map();
    const governed: Map<DotDelimitedOidString, RequestAttribute> = new Map();
    const within_depth_limit = collectGovernedAttributes(
        filter,
        attr_profiles,
        getAttributeParentTypes,
        resolved_cache,
        governed,
    );
    if (!within_depth_limit) {
        state.serviceProblem = id_pr_administratorImposedLimit;
        return;
    }
    if (governed.size === 0) {
        return;
    }

    /**
     * ITU-T Rec. X.511 (2019), Section 15.2 specifies the order in which
     * attributes are checked before stopping at the first failure:
     *   1) attributes that unconditionally have to be represented;
     *   2) attributes that conditionally have to be represented;
     *   3) the remaining attributes.
     *
     * Because the evaluation loop below returns immediately on the first
     * failing attribute, bucket-sorting `governed` into `[...tier_1, ...tier_2, ...tier_3]`
     * ensures that when multiple attributes fail in the same filter (e.g. an
     * optional attribute appears earlier in the filter than a mandatory one),
     * the higher-priority tier's diagnostic is reported first.
     */
    let ordered_attrs: DotDelimitedOidString[];
    if (attribute_combination) {
        const unconditional: Set<DotDelimitedOidString> = new Set();
        getRequiredAttributesFromAttributeCombination(attribute_combination, true, unconditional);
        const all_combo_attrs: Set<DotDelimitedOidString> = new Set();
        collectAllCombinationAttributes(attribute_combination, all_combo_attrs);

        /** Tier 1: Mandatory attributes unconditionally required by `attributeCombination` (e.g. `and: [cn]`). */
        const tier_1: DotDelimitedOidString[] = [];
        /** Tier 2: Conditional attributes referenced in `attributeCombination` (e.g. inside `or` / `not`), but not unconditionally required. */
        const tier_2: DotDelimitedOidString[] = [];
        /** Tier 3: Optional permitted attributes not referenced in `attributeCombination` at all. */
        const tier_3: DotDelimitedOidString[] = [];
        for (const [key, profile] of governed.entries()) {
            // Also check `profile.attributeType` in case `key` is a subtype
            // governed via `includeSubtypes: true` while `attributeCombination`
            // names the supertype from `inputAttributeTypes`.
            const profile_key = profile.attributeType.toString();
            if (unconditional.has(key) || unconditional.has(profile_key)) {
                tier_1.push(key);
            } else if (all_combo_attrs.has(key) || all_combo_attrs.has(profile_key)) {
                tier_2.push(key);
            } else {
                tier_3.push(key);
            }
        }
        ordered_attrs = [...tier_1, ...tier_2, ...tier_3];
    } else {
        ordered_attrs = Array.from(governed.keys());
    }

    const evaluated_items: WeakMap<FilterItem, CheckRequestAttributeState | null> = new WeakMap();
    for (const attr_key of ordered_attrs) {
        const outcome = evaluateAttributeInFilter(
            filter,
            true,
            attr_key,
            attr_profiles,
            evaluated_items,
            getAttributeParentTypes,
            getEqualityMatcher,
            getContextMatcher,
            getSubstringsMatcher,
        );
        if ((outcome.status === STATUS_FAILED) && outcome.failed_state) {
            const failed = outcome.failed_state;
            if (failed.serviceProblem) {
                state.serviceProblem = failed.serviceProblem;
            }
            state.searchValuesRequired.push(...failed.searchValuesRequired);
            state.invalidSearchValues.push(...failed.invalidSearchValues);
            if (failed.missingSearchContextAttr) {
                state.missingSearchContextAttr = failed.missingSearchContextAttr;
            }
            state.missingSearchContexts.push(...failed.missingSearchContexts);
            if (failed.contextComboViolationAttr) {
                state.contextComboViolationAttr = failed.contextComboViolationAttr;
            }
            state.contextComboViolations.push(...failed.contextComboViolations);
            if (failed.searchContextViolationsAttr) {
                state.searchContextViolationsAttr = failed.searchContextViolationsAttr;
            }
            state.searchContextViolations.push(...failed.searchContextViolations);
            if (failed.searchContextValueViolationAttr) {
                state.searchContextValueViolationAttr = failed.searchContextValueViolationAttr;
            }
            state.searchContextValueViolations.push(...failed.searchContextValueViolations);
            return;
        }
        if (outcome.status === STATUS_NEGATED) {
            state.serviceProblem = id_pr_attributeNegationViolation;
            return;
        }
    }
}

/**
 * @summary Validate a search filter against input attribute type profiles
 * @description
 *
 * This function validates filter items within a search filter according to
 * `inputAttributeTypes` present in the governing search rule, as described by
 * the procedure defined in
 * [ITU Recommendation X.511 (2019)](https://www.itu.int/rec/T-REC-X.511/en),
 * Section 15.2.
 *
 * @param search The unsigned search argument data
 * @param rule The governing search rule
 * @param getAttributeParentTypes The attribute's ancestors, nearest first;
 *  the iterator may also include the asserted attribute type itself
 * @param getEqualityMatcher Look up an equality matcher for the asserted type
 * @param getContextMatcher Look up a context matcher for a context type
 * @param getSubstringsMatcher Look up a substring matcher for the asserted type.
 *  If unavailable, substring items cannot satisfy non-empty selectedValues.
 * @returns A tuple containing the step on which validation failed (or 0 if
 *  none) and the internal function state, in that order.
 *
 * @function
 * @see {@link CheckRequestAttributeState}
 */
export function checkOfRequestAttributeProfiles(
    search: SearchArgumentData,
    rule: SearchRule,
    getAttributeParentTypes: (attributeType: AttributeType) => IterableIterator<AttributeType>,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    getContextMatcher?: (contextType: CONTEXT["&id"]) => ContextMatcher | undefined,
    getSubstringsMatcher?: (attributeType: AttributeType) => Matcher | undefined,
): [number, CheckRequestAttributeState] {
    const state: CheckRequestAttributeState = {
        searchValuesRequired: [],
        invalidSearchValues: [],
        missingSearchContexts: [],
        contextComboViolations: [],
        searchContextViolations: [],
        searchContextValueViolations: [],
    };
    const filter = search.extendedFilter ?? search.filter;
    if (!filter) {
        return [0, state];
    }
    const permitted_attrs: Map<DotDelimitedOidString, RequestAttribute> = new Map();
    for (const attr of rule.inputAttributeTypes ?? []) {
        permitted_attrs.set(attr.attributeType.toString(), attr);
    }
    checkOfRequestAttributeProfileInFilter(
        state, filter, permitted_attrs, getAttributeParentTypes,
        getEqualityMatcher, getContextMatcher, getSubstringsMatcher,
        rule.attributeCombination,
    );
    if (state.searchValuesRequired.length > 0) {
        return [1, state];
    }
    if (state.invalidSearchValues.length > 0) {
        return [2, state];
    }
    if (state.missingSearchContexts.length > 0) {
        return [4, state];
    }
    if (state.contextComboViolations.length > 0) {
        return [4, state];
    }
    if (state.searchContextViolations.length > 0) {
        return [5, state];
    }
    if (state.searchContextValueViolations.length > 0) {
        return [6, state];
    }
    if (state.serviceProblem) {
        return [152, state];
    }
    return [0, state];
}
