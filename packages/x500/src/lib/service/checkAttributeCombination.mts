
import type { AttributeCombination } from "@wildboar/x500/ServiceAdministration";
import type { DotDelimitedOidString, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { Filter, FilterItem } from "@wildboar/x500/DirectoryAbstractService";

/**
 * Sentinel returned by {@link getFilterItemAttributeType} when a `FilterItem`
 * uses an unrecognized ASN.1 extension alternative whose attribute type cannot
 * be determined.
 */
const UNKNOWN_FILTER_ITEM = Symbol("unknown filter item");

/**
 * Sentinel key in `seenLeafKeys` representing a plain leaf `FilterItem` inside
 * an effective `OR` that adds no attribute referenced by `combo` to the current
 * conjunction term. This occurs when the item is negated (`NOT (A AND B)`),
 * has no attribute type (an `extensibleMatch` without `type_`), or asserts an
 * attribute type that does not appear anywhere in `combo`.
 *
 * All such leaves leave `activeAttrs` unchanged, so after evaluating the first
 * one, any subsequent `NO_RELEVANT_ATTR` leaves in the same `OR` are redundant.
 */
const NO_RELEVANT_ATTR = Symbol("no relevant attribute");

/**
 * Complexity limits for {@link checkAttributeCombination}.
 *
 * Search filters are typically untrusted user input, while attribute
 * combinations are administrator-supplied, so the defaults allow deeper
 * recursion in `combo` than in `filter`.
 */
export interface CheckAttributeCombinationOptions {
    /**
     * Maximum nesting depth permitted in the search filter before returning
     * `undefined`. Defaults to `10`.
     */
    maxFilterDepth?: number;
    /**
     * Maximum nesting depth permitted in the attribute combination before
     * returning `undefined`. Defaults to `100`.
     */
    maxComboDepth?: number;
    /**
     * Maximum number of expanded DNF conjunction terms evaluated before
     * returning `undefined`. Defaults to `64`.
     */
    maxTerms?: number;
    /**
     * Maximum number of filter AST node visits before returning `undefined`.
     * Defaults to `1000`.
     */
    maxFilterNodes?: number;
}

/**
 * A filter node queued for DNF traversal along with the polarity and remaining
 * depth budget inherited from its enclosing filter nodes.
 */
interface PendingFilter {
    /** The filter AST node to process. */
    filter: Filter;
    /** `true` under an even number of enclosing filter `not`s; `false` under an odd number. */
    non_negated: boolean;
    /** Remaining filter nesting depth permitted for this node and its descendants. */
    depth: number;
}

/**
 * Shared mutable resource counters bounding a single {@link checkAttributeCombination}
 * invocation against denial-of-service from complex untrusted filters.
 */
interface EvaluationBudget {
    /** Remaining DNF conjunction terms that may be evaluated against `combo`. */
    remainingTerms: number;
    /** Remaining filter AST node visits permitted across the traversal. */
    remainingNodes: number;
}

/**
 * @summary Extract the asserted attribute type OID from a `FilterItem`
 * @description
 *
 * Inspects a `FilterItem` CHOICE value and returns the `OBJECT_IDENTIFIER` of
 * the attribute type it asserts. An `extensibleMatch` without a `type_` field
 * is valid in X.500 and returns `undefined`. An unrecognized ASN.1 extension
 * alternative returns {@link UNKNOWN_FILTER_ITEM} so callers can fail closed.
 *
 * @param item The filter item to inspect
 * @returns The asserted attribute type OID, `undefined` if the item is an
 *  `extensibleMatch` with no `type_`, or {@link UNKNOWN_FILTER_ITEM} for an
 *  unrecognized extension alternative.
 *
 * @author Gemini 4 Neon
 * @function
 */
function getFilterItemAttributeType(
    item: FilterItem,
): OBJECT_IDENTIFIER | undefined | typeof UNKNOWN_FILTER_ITEM {
    if ("equality" in item) {
        return item.equality.type_;
    }
    if ("substrings" in item) {
        return item.substrings.type_;
    }
    if ("greaterOrEqual" in item) {
        return item.greaterOrEqual.type_;
    }
    if ("lessOrEqual" in item) {
        return item.lessOrEqual.type_;
    }
    if ("present" in item) {
        return item.present;
    }
    if ("approximateMatch" in item) {
        return item.approximateMatch.type_;
    }
    if ("extensibleMatch" in item) {
        return item.extensibleMatch.type_;
    }
    if ("contextPresent" in item) {
        return item.contextPresent.type_;
    }
    return UNKNOWN_FILTER_ITEM;
}

/**
 * @summary Collect all attribute OIDs referenced anywhere in an `AttributeCombination`
 * @description
 *
 * Walks `combo` recursively and inserts the dot-delimited string form of every
 * referenced attribute type OID into `out`. This allows the filter traversal to
 * ignore attributes that cannot affect the outcome of `combo` and collapse
 * irrelevant `OR` branches safely.
 *
 * @param combo The attribute combination to walk
 * @param recursion_ttl Remaining recursion depth permitted for `combo`
 * @param out Mutable set populated with referenced dot-delimited OID strings
 * @returns `true` if the entire combination was walked within `recursion_ttl`
 *  using only recognized alternatives; `false` if `recursion_ttl` was exhausted
 *  or an unrecognized extension alternative was encountered (in which case
 *  irrelevant-attribute collapsing is skipped and {@link evaluateComboPositive}
 *  handles 3-valued short-circuiting).
 *
 * @author Gemini 4 Neon
 * @function
 */
function collectRelevantAttributes(
    combo: AttributeCombination,
    recursion_ttl: number,
    out: Set<DotDelimitedOidString>,
): boolean {
    if (recursion_ttl <= 0) {
        return false;
    }
    if ("attribute" in combo) {
        out.add(combo.attribute.toString());
        return true;
    }
    if ("not" in combo) {
        return collectRelevantAttributes(combo.not, recursion_ttl - 1, out);
    }
    if ("and" in combo) {
        for (const sub of combo.and) {
            if (!collectRelevantAttributes(sub, recursion_ttl - 1, out)) {
                return false;
            }
        }
        return true;
    }
    if ("or" in combo) {
        for (const sub of combo.or) {
            if (!collectRelevantAttributes(sub, recursion_ttl - 1, out)) {
                return false;
            }
        }
        return true;
    }
    return false;
}

/**
 * @summary Evaluate an `AttributeCombination` against a single DNF conjunction term
 * @description
 *
 * Evaluates `combo` (in positive polarity; top-level negation is applied by the
 * caller) against the map of attribute types effectively present in one DNF
 * conjunction term of the search filter, using 3-valued Kleene logic so that
 * `false` short-circuits `and` and `true` short-circuits `or` even if a sibling
 * sub-combination would be `undefined`.
 *
 * @param presentAttributes Ref-counted map of dot-delimited attribute OIDs
 *  effectively present (non-negated) in the current conjunction term
 * @param combo The attribute combination node to evaluate
 * @param recursion_ttl Remaining recursion depth permitted for `combo`
 * @returns `true` if `presentAttributes` satisfies `combo`, `false` if it
 *  violates `combo`, or `undefined` if `recursion_ttl` was exhausted or an
 *  unrecognized extension alternative was encountered without short-circuiting.
 *
 * @author Gemini 4 Neon
 * @function
 */
function evaluateComboPositive(
    presentAttributes: ReadonlyMap<DotDelimitedOidString, number>,
    combo: AttributeCombination,
    recursion_ttl: number,
): boolean | undefined {
    if (recursion_ttl <= 0) {
        return undefined;
    }
    if ("attribute" in combo) {
        return (presentAttributes.get(combo.attribute.toString()) ?? 0) > 0;
    }
    if ("not" in combo) {
        const res = evaluateComboPositive(presentAttributes, combo.not, recursion_ttl - 1);
        return (res === undefined) ? undefined : !res;
    }
    if ("and" in combo) {
        let indeterminate = false;
        for (const sub of combo.and) {
            const res = evaluateComboPositive(presentAttributes, sub, recursion_ttl - 1);
            if (res === false) {
                return false;
            }
            if (res === undefined) {
                indeterminate = true;
            }
        }
        return indeterminate ? undefined : true;
    }
    if ("or" in combo) {
        let indeterminate = false;
        for (const sub of combo.or) {
            const res = evaluateComboPositive(presentAttributes, sub, recursion_ttl - 1);
            if (res === true) {
                return true;
            }
            if (res === undefined) {
                indeterminate = true;
            }
        }
        return indeterminate ? undefined : false;
    }
    return undefined;
}

/**
 * @summary Lazily stream DNF conjunction terms of a filter and check each against `combo`
 * @description
 *
 * Iteratively flattens effective `AND` nodes and pushes `not` down via De
 * Morgan's laws without rewriting the AST, deferring effective `OR` nodes onto
 * `pendingOrs` and backtracking in place over shared `activeAttrs` and
 * `pendingOrs` structures. Whenever all conjuncts for a term are resolved, the
 * complete `combo` is evaluated against `activeAttrs`.
 *
 * @param initial The next filter conjunct (with polarity and remaining depth) to process
 * @param pendingOrs Shared stack of deferred effective-`OR` conjuncts to branch
 *  on once non-branching conjuncts are resolved; restored on return
 * @param activeAttrs Shared ref-counted map of relevant attribute OIDs present
 *  in the current conjunction term; restored on return
 * @param relevantAttrs Complete set of attribute OIDs referenced by `combo`, or
 *  `undefined` if irrelevant-attribute pruning was disabled
 * @param combo The top-level attribute combination being enforced
 * @param combo_non_negated `true` if `combo` itself must hold; `false` if its
 *  negation must hold
 * @param maxComboDepth Maximum recursion depth permitted when evaluating `combo`
 * @param budget Shared mutable node and DNF-term counters bounding total work
 * @returns `true` if every DNF term generated from this state satisfies `combo`
 *  (including vacuously when 0 terms exist), `false` if a violating term is
 *  found, or `undefined` if a complexity bound or unrecognized extension
 *  alternative is encountered.
 *
 * @author Gemini 4 Neon
 * @function
 */
function checkFilterTerms(
    initial: PendingFilter,
    pendingOrs: PendingFilter[],
    activeAttrs: Map<DotDelimitedOidString, number>,
    relevantAttrs: ReadonlySet<DotDelimitedOidString> | undefined,
    combo: AttributeCombination,
    combo_non_negated: boolean,
    maxComboDepth: number,
    budget: EvaluationBudget,
): boolean | undefined {
    const work: PendingFilter[] = [initial];
    const addedOids: DotDelimitedOidString[] = [];
    const savedOrsLen = pendingOrs.length;
    let poppedOr: PendingFilter | undefined;

    try {
        while (work.length > 0) {
            if (budget.remainingNodes <= 0) {
                return undefined;
            }
            budget.remainingNodes--;

            const current = work.pop()!;
            if (current.depth <= 0) {
                return undefined;
            }

            const { filter, non_negated, depth } = current;
            if ("not" in filter) {
                work.push({
                    filter: filter.not,
                    non_negated: !non_negated,
                    depth: depth - 1,
                });
            } else if ("item" in filter) {
                const type_oid = getFilterItemAttributeType(filter.item);
                if (type_oid === UNKNOWN_FILTER_ITEM) {
                    return undefined;
                }
                if (non_negated && type_oid) {
                    const key = type_oid.toString();
                    if (!relevantAttrs || relevantAttrs.has(key)) {
                        activeAttrs.set(key, (activeAttrs.get(key) ?? 0) + 1);
                        addedOids.push(key);
                    }
                }
            } else if (("and" in filter) || ("or" in filter)) {
                const subs = ("and" in filter) ? filter.and : filter.or;
                // Push filter NOTs down via De Morgan's laws:
                //   NOT (A AND B) = (NOT A) OR  (NOT B)
                //   NOT (A OR  B) = (NOT A) AND (NOT B)
                const acts_as_and = ("and" in filter) === non_negated;
                if (acts_as_and) {
                    if (work.length + subs.length > budget.remainingNodes) {
                        return undefined;
                    }
                    // Push in reverse so children are processed left-to-right.
                    for (let i = subs.length - 1; i >= 0; i--) {
                        work.push({
                            filter: subs[i],
                            non_negated,
                            depth: depth - 1,
                        });
                    }
                } else {
                    if (subs.length === 0) {
                        // Effective empty OR is FALSE: this conjunction yields
                        // no DNF terms, so it vacuously satisfies any combo.
                        return true;
                    }
                    if (subs.length === 1) {
                        work.push({
                            filter: subs[0],
                            non_negated,
                            depth: depth - 1,
                        });
                    } else {
                        // Defer branching until all non-OR conjuncts (and any
                        // FALSE `or:{}` siblings) in this AND are processed.
                        pendingOrs.push(current);
                    }
                }
            } else {
                // Unrecognized Filter extension alternative.
                return undefined;
            }
        }

        if (pendingOrs.length === 0) {
            if (budget.remainingTerms <= 0) {
                return undefined;
            }
            budget.remainingTerms--;
            const res = evaluateComboPositive(activeAttrs, combo, maxComboDepth);
            return (res === undefined) ? undefined : (combo_non_negated ? res : !res);
        }

        poppedOr = pendingOrs.pop()!;
        if (poppedOr.depth <= 1) {
            // Every branch of this effective OR would exceed the depth limit.
            return undefined;
        }
        // `pendingOrs` holds nodes that act as an OR after pushing NOTs down:
        // either a positive `or` (`non_negated === true`) or a negated `and`
        // (`non_negated === false`), since NOT (A AND B) = (NOT A) OR (NOT B).
        // Because we do not rewrite the AST, a negated `and` still stores its
        // branches in `filter.and`, and forwarding `poppedOr.non_negated`
        // (`false`) turns each branch into its negated form.
        const orSubs = ("and" in poppedOr.filter)
            ? poppedOr.filter.and
            : ("or" in poppedOr.filter)
                ? poppedOr.filter.or
                : [];
        // Plain leaf items inside an OR that contribute the same relevant
        // attribute (or no relevant attribute at all) produce identical terms;
        // deduplicating them avoids blowup on multi-value ORs like
        // (|(cn=Alice)(cn=Bob)).
        const seenLeafKeys = new Set<DotDelimitedOidString | typeof NO_RELEVANT_ATTR>();
        for (const sub of orSubs) {
            if ("item" in sub) {
                const type_oid = getFilterItemAttributeType(sub.item);
                if (type_oid === UNKNOWN_FILTER_ITEM) {
                    return undefined;
                }
                let leafKey: DotDelimitedOidString | typeof NO_RELEVANT_ATTR = NO_RELEVANT_ATTR;
                if (poppedOr.non_negated && type_oid) {
                    const key = type_oid.toString();
                    if (!relevantAttrs || relevantAttrs.has(key)) {
                        leafKey = key;
                    }
                }
                if (seenLeafKeys.has(leafKey)) {
                    if (budget.remainingNodes <= 0) {
                        return undefined;
                    }
                    budget.remainingNodes--;
                    continue;
                }
                seenLeafKeys.add(leafKey);
            }
            const branchResult = checkFilterTerms(
                {
                    filter: sub,
                    non_negated: poppedOr.non_negated,
                    depth: poppedOr.depth - 1,
                },
                pendingOrs,
                activeAttrs,
                relevantAttrs,
                combo,
                combo_non_negated,
                maxComboDepth,
                budget,
            );
            // We are checking search-rule compliance, not entry matching: each
            // branch of a filter OR is an independent query path that can
            // return entries, so EVERY branch must satisfy `combo`. Fail (or
            // return indeterminate) as soon as any single branch does not pass.
            // (Contrast with `or` in `evaluateComboPositive`, where any one
            // matching sub-combination is sufficient.)
            if (branchResult !== true) {
                return branchResult;
            }
        }
        return true;
    } finally {
        // `activeAttrs` and `pendingOrs` are shared across recursive calls to
        // avoid copying maps and arrays on every branch. Undo every mutation
        // made by this call before returning (even on early returns) so sibling
        // OR branches see the exact state inherited from the caller.

        // 1. Decrement ref-counts for attributes added in this frame. Using a
        //    count (rather than a plain Set) ensures an attribute asserted in
        //    both an outer AND and an inner OR branch is not prematurely
        //    removed when backtracking out of the inner branch.
        for (const key of addedOids) {
            const count = (activeAttrs.get(key) ?? 0) - 1;
            if (count <= 0) {
                activeAttrs.delete(key);
            } else {
                activeAttrs.set(key, count);
            }
        }

        // 2. Restore `pendingOrs` to its exact contents on entry (`savedOrsLen`).
        //    - If this call pushed new ORs and popped one of them, pushing it
        //      back and truncating to `savedOrsLen` discards all ORs added here.
        //    - If this call pushed no ORs and popped one belonging to an
        //      enclosing caller (at index `savedOrsLen - 1`), pushing it back
        //      puts it back at `savedOrsLen - 1`, and truncating to
        //      `savedOrsLen` keeps it intact for the next sibling branch.
        if (poppedOr !== undefined) {
            pendingOrs.push(poppedOr);
        }
        pendingOrs.length = savedOrsLen;
    }
}

/**
 * @summary Check attribute combinations in a search filter
 * @description
 *
 * This function validates a search filter according to an
 * `attributeCombination` imposed by a governing search rule, thereby
 * implementing step 3 of the procedure defined in
 * [ITU Recommendation X.511 (2019)](https://www.itu.int/rec/T-REC-X.511/en),
 * Section 15.1, and
 * [ITU Recommendation X.501 (2019)](https://www.itu.int/rec/T-REC-X.501/en),
 * Section 16.5 and Annex Q.
 *
 * Conceptually, the filter is treated as a disjunction of conjunctions (DNF),
 * and the complete `combo` must be satisfied independently by each conjunction
 * term. To defend against denial-of-service on untrusted filters, evaluation is
 * bounded by `options`; if a complexity limit is reached or an unrecognized
 * extension alternative is encountered, this function returns `undefined` and
 * still records `combo` in `violations` (failing closed for callers that only
 * inspect `violations`).
 *
 * @param filter The search filter to be validated
 * @param combo The attribute combination permitted
 * @param non_negated Whether the current attribute combination is negated
 * @param violations An optional mutable array to which `combo` is pushed when
 *  the check returns `false` or `undefined`
 * @param options Optional complexity bounds for filter and combination evaluation
 * @returns `true` if the filter complies with `combo`, `false` if a violating
 *  conjunction term was found, or `undefined` if compliance could not be
 *  determined within the configured limits (or due to an unrecognized
 *  extension alternative).
 *
 * @function
 * @author Gemini 4 Neon
 */
export
    function checkAttributeCombination(
        filter: Filter,
        combo: AttributeCombination,
        non_negated: boolean,
        violations?: AttributeCombination[],
        options?: CheckAttributeCombinationOptions,
    ): boolean | undefined {
    const maxFilterDepth = options?.maxFilterDepth ?? 10;
    const maxComboDepth = options?.maxComboDepth ?? 100;
    const maxTerms = options?.maxTerms ?? 64;
    const maxFilterNodes = options?.maxFilterNodes ?? 1000;

    const relevantSet = new Set<DotDelimitedOidString>();
    const relevantAttrs = collectRelevantAttributes(combo, maxComboDepth, relevantSet)
        ? relevantSet
        : undefined;

    const result = checkFilterTerms(
        {
            filter,
            non_negated: true,
            depth: maxFilterDepth,
        },
        [],
        new Map(),
        relevantAttrs,
        combo,
        non_negated,
        maxComboDepth,
        {
            remainingTerms: maxTerms,
            remainingNodes: maxFilterNodes,
        },
    );

    if (result !== true) {
        violations?.push(combo);
    }
    return result;
}
