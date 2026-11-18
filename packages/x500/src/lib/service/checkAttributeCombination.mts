
import type { AttributeCombination } from "@wildboar/x500/ServiceAdministration";
import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { Filter } from "@wildboar/x500/DirectoryAbstractService";
import type { AttributeType } from "@wildboar/x500/InformationFramework";

// Unlike and:{}, or:{} has no subfilters. Preserve this distinction when
// combining operands so a false conjunct makes either requirement vacuous.
const NO_SUBFILTERS = Symbol("no subfilters");

function checkRequiredAttributeInFilter(
    filter: Filter,
    must_be_present: boolean,
    attribute: AttributeType,
    recursion_ttl: number,
    filter_non_negated: boolean = true,
): boolean | typeof NO_SUBFILTERS {
    if (recursion_ttl <= 0) {
        return false;
    }
    if ("item" in filter) {
        const item = filter.item;
        let type_oid: OBJECT_IDENTIFIER | undefined;
        if ("equality" in item) {
            type_oid = item.equality.type_;
        }
        else if ("substrings" in item) {
            type_oid = item.substrings.type_;
        }
        else if ("greaterOrEqual" in item) {
            type_oid = item.greaterOrEqual.type_;
        }
        else if ("lessOrEqual" in item) {
            type_oid = item.lessOrEqual.type_;
        }
        else if ("present" in item) {
            type_oid = item.present;
        }
        else if ("approximateMatch" in item) {
            type_oid = item.approximateMatch.type_;
        }
        else if ("extensibleMatch" in item) {
            type_oid = item.extensibleMatch.type_;
        }
        else if ("contextPresent" in item) {
            type_oid = item.contextPresent.type_;
        }
        const present = filter_non_negated && !!(type_oid && type_oid.isEqualTo(attribute));
        return must_be_present === present;
    } else if (("and" in filter) || ("or" in filter)) {
        // Think of the filter as an OR of AND-only terms, as in X.501 Annex Q.
        // We summarize whether those terms satisfy this one attribute requirement
        // without actually expanding the filter into that potentially huge form.
        // Despite its name, `subfilters` below contains the immediate child nodes,
        // not the fully expanded AND-only terms described by the specification.
        const subfilters = ("and" in filter) ? filter.and : filter.or;
        // Negating a filter swaps AND and OR, independently of rule negation.
        // NOT (A AND B) = (NOT A) OR (NOT B)
        // NOT (A OR B)  = (NOT A) AND (NOT B)
        // `filter_non_negated` is true under an even number of filter NOTs.
        // This expression identifies the operator AFTER pushing those NOTs down:
        //
        //   Written operator    Even NOTs (true)    Odd NOTs (false)
        //   AND                 AND                OR
        //   OR                  OR                 AND
        //
        // `must_be_present` describes the search rule, not the filter's NOTs,
        // so it must not participate in deciding this effective operator.
        const acts_as_and = ("and" in filter) === filter_non_negated;
        // Presence needs one witness in an effective AND, but one in every OR
        // branch. An exclusion must hold in every operand of either operator.
        // For example, AND(cn, OR(street, surname)) guarantees cn in both of its
        // expanded terms: the cn child alone supplies the required presence.
        // OR(cn, street) does not guarantee cn: its street alternative lacks cn.
        // Requiring cn to be absent, by contrast, forbids any contributing child
        // from introducing non-negated cn, whether we are combining with AND or OR.
        const one_child_is_sufficient = must_be_present && acts_as_and;
        // Seed the accumulator with false for an "any" check (OR reduction), or
        // true for an "all" check (AND reduction). These are their identity values.
        let matched = !one_child_is_sufficient;
        // A child that represents FALSE contributes no AND-only terms. Track
        // whether we encounter any other child, rather than just testing length.
        let has_subfilters = false;
        for (const subfilter of subfilters) {
            // Descend one level with the same rule requirement and filter polarity.
            // Only a filter NOT (handled in the next branch) flips that polarity.
            const result = checkRequiredAttributeInFilter(
                subfilter,
                must_be_present,
                attribute,
                recursion_ttl - 1,
                filter_non_negated,
            );
            // true: this child's terms satisfy the requirement.
            // false: a term violates it, or we could not prove compliance.
            // NO_SUBFILTERS: there are NO terms here, e.g. or:{} means FALSE.
            // That last case is not the same as a failed requirement check.
            if (result === NO_SUBFILTERS) {
                if (acts_as_and) {
                    // AND forms combinations of its children's terms. If one child
                    // has none, no combinations exist: A AND FALSE = FALSE.
                    // This also overrides any earlier failed requirement: no
                    // remaining term exists in which the requirement can be broken.
                    return NO_SUBFILTERS;
                }
                // A OR FALSE = A. This child adds no alternatives, so ignore it
                // without changing either the accumulator or has_subfilters.
                continue;
            }
            // A Boolean result represents a child with actual or possible terms.
            // In particular, result=false still contributes a failing alternative.
            has_subfilters = true;
            // Combine compliance results, NOT the truth values of entry matching:
            // either one child must guarantee presence, or every child must comply.
            matched = one_child_is_sufficient ? (matched || result) : (matched && result);
        }
        // An effective OR with no contributing children is FALSE: no terms.
        // An effective AND with no children is TRUE: one EMPTY term. Keep the
        // seeded result for that case (presence fails; absence succeeds).
        // The caller accepts NO_SUBFILTERS vacuously: no term can violate the rule.
        return (!acts_as_and && !has_subfilters) ? NO_SUBFILTERS : matched;
    } else if ("not" in filter) {
        return checkRequiredAttributeInFilter(
            filter.not,
            must_be_present,
            attribute,
            recursion_ttl - 1,
            !filter_non_negated,
        );
    }
    return false;
}


/**
 * @summary Check attribute combinations in a search filter
 * @description
 *
 * This function validates a search filter according to an
 * `attributeCombination` imposed by a governing search rule, thereby
 * implementing step 3 of the procedure defined in
 * [ITU Recommendation X.511 (2019)](https://www.itu.int/rec/T-REC-X.511/en),
 * Section 15.1. As combinations are violated, they are added to the
 * `violations` array, which the callee is expected to check once this function
 * returns.
 *
 * @param filter The search filter to be validated
 * @param combo The attribute combination permitted
 * @param non_negated Whether the current attribute combination is negated
 * @param violations A mutable array of violating combinations
 * @returns Nothing. This function modifies `violations` by reference.
 *
 * @function
 */
export
    function checkAttributeCombination(
        filter: Filter,
        combo: AttributeCombination,
        non_negated: boolean,
        violations: AttributeCombination[]
    ): void {
    if ("attribute" in combo) {
        if (checkRequiredAttributeInFilter(filter, non_negated, combo.attribute, 10) === false) {
            violations.push(combo);
            return;
        }
    } else if ("and" in combo) {
        let matched: boolean = true;
        for (const subcombo of combo.and) {
            const subviolations: AttributeCombination[] = [];
            checkAttributeCombination(filter, subcombo, non_negated, subviolations);
            if (subviolations.length > 0) {
                matched = false;
                break;
            }
        }
        if (!matched) {
            violations.push(combo);
            return;
        }
    } else if ("or" in combo) {
        let matched: boolean = false;
        for (const subcombo of combo.or) {
            const subviolations: AttributeCombination[] = [];
            checkAttributeCombination(filter, subcombo, non_negated, subviolations);
            if (subviolations.length === 0) {
                matched = true;
                break;
            }
        }
        if (!matched) {
            violations.push(combo);
            return;
        }
    } else if ("not" in combo) {
        checkAttributeCombination(filter, combo.not, !non_negated, violations);
    } else {
        violations.push(combo);
    }
}
