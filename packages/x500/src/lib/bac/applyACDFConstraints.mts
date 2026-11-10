import { FALSE_BIT, TRUE_BIT, type INTEGER } from "@wildboar/asn1";
import {
    grantAdd,
    denyAdd,
    grantImport,
} from "../modules/BasicAccessControl/GrantsAndDenials.ta.mjs";
import type ACDFTupleExtended from "../types/ACDFTupleExtended.mjs";
import type ProtectedItem from "../types/ProtectedItem.mjs";
import type { EvaluateFilterSettings } from "../utils/evaluateFilter.mjs";
import evaluateContextAssertion from "../utils/evaluateContextAssertion.mjs";
import compareElements from "../comparators/compareElements.mjs";
import { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";

function countWithinLimit (count: number | undefined, limit: INTEGER): boolean {
    return typeof count === "number"
        && Number.isSafeInteger(count)
        && count >= 0
        && count <= limit;
}

/**
 * @summary Apply X.501 §§18.4.2.4 and 18.8.3 constraints before tuple precedence.
 * @description
 * 
 * This approach deviates from the specified behavior, which says:
 * 
 * > Examine all tuples that include the maxValueCount, maxImmSub, restrictedBy,
 * > or contexts. Discard all such tuples which grant access and which do not
 * > satisfy any of these constraints (18.4.2.4 a)).
 * 
 * Instead, this function just unsets the add or import bits if the
 * `maxValueCount`, `maxImmSub`, `restrictedBy`, or `contexts` constraints are
 * not satisfied. When GPT-6.1 Sol wrote this, I was concerned that this would
 * be a problematic deviation from the specification, however, in discussing
 * with it, I think it aligns with the intent of the specification. The
 * constraints named above only apply to the add and import permissions, so it
 * makes sense to just unset those bits rather than discarding the entire tuple,
 * which could contain other unrelated grants.
 * 
 * @param {ACDFTupleExtended} tuple - The ACDF tuple to apply constraints to.
 * @param {ProtectedItem} request - The request to apply constraints to.
 * @param {number[]} operations - The operations to apply constraints to.
 * @param {EvaluateFilterSettings} settings - The settings to apply constraints to.
 * @returns {ACDFTupleExtended} The ACDF tuple with constraints applied.
 * @function
 * @author OpenAI GPT-6.1 Sol with contributions by Jonathan M. Wilbur
 */
export
function applyACDFConstraints (
    tuple: ACDFTupleExtended,
    request: ProtectedItem,
    operations: number[],
    settings: EvaluateFilterSettings,
): ACDFTupleExtended {
    const items = tuple.protectedItems;
    let permissions = tuple.grantsAndDenials;
    const adds = operations.includes(grantAdd / 2);
    const imports = operations.includes(grantImport / 2);
    const removePermission = (bit: number): void => {
        if (permissions[bit] !== TRUE_BIT) {
            // The bit is already FALSE, so there is nothing to do.
            return;
        }
        if (permissions === tuple.grantsAndDenials) {
            // Make a copy to avoid mutating the original tuple.
            permissions = permissions.slice();
        }
        permissions[bit] = FALSE_BIT;
    };

    if (
        ("entry" in request)
        && request.immediateSuperiorInSameDSA !== false
        && items.maxImmSub !== undefined
        && !countWithinLimit(request.siblingsCount, items.maxImmSub)
    ) {
        if (adds) {
            removePermission(grantAdd);
        }
        if (imports) {
            removePermission(grantImport);
        }
    }

    let addGranted = (permissions[grantAdd] === TRUE_BIT);
    // Retain attribute-type count support for existing callers as well as the
    // attribute-value additions specified by X.501.
    if (adds && addGranted && (("value" in request) || ("attributeType" in request))) {
        const type = ("value" in request) ? request.value.type_ : request.attributeType;
        for (const constraint of items.maxValueCount ?? []) {
            if (
                constraint.type_.isEqualTo(type)
                && !countWithinLimit(request.valuesCount, constraint.maxCount)
            ) {
                removePermission(grantAdd);
            }
        }
    }

    addGranted = (permissions[grantAdd] === TRUE_BIT);
    if (adds && ("value" in request)) {
        // At least in Meerkat DSA, we don't always have all the entry
        // attributes available when evaluating restrictedBy. If this is not
        // passed in, we do not evaluate this. If we didn't do this, any ACI
        // item that had a restrictedBy constraint would deny every add.
        const restrictedBy = (addGranted && request.entryAttributes)
            ? (items.restrictedBy ?? [])
            : [];
        for (const restriction of restrictedBy) {
            if (!restriction.type_.isEqualTo(request.value.type_)) {
                continue;
            }
            let present = false;
            try {
                const matcher = settings.getEqualityMatcher(restriction.valuesIn);
                const matchesStored = (value: typeof request.value.value) => matcher
                    ? matcher(
                        request.value.value,
                        new AttributeTypeAndValue(request.value.type_, value),
                        settings.getEqualityMatcher,
                    ) === true
                    : compareElements(request.value.value, value);
                present = request.entryAttributes?.some((attribute) => (
                    attribute.type_.isEqualTo(restriction.valuesIn)
                    && (
                        attribute.values.some((value) => matchesStored(value))
                        || attribute.valuesWithContext?.some((vwc) => matchesStored(vwc.value))
                    )
                )) ?? false;
            } catch {
                // Unknown membership in valuesIn cannot establish an add grant.
            }
            if (!present) {
                removePermission(grantAdd);
                break;
            }
        }

        if (items.contexts) {
            let contextsMatch = false;
            try {
                contextsMatch = items.contexts.every((assertion) => evaluateContextAssertion(
                    assertion,
                    request.contexts ?? [],
                    settings.getContextMatcher,
                    settings.determineAbsentMatch,
                    settings.getEqualityMatcher,
                ));
            } catch {
                // On failure retain denials and remove grants, never vice versa.
            }
            if (contextsMatch) {
                // X.501 §18.4.2.4: satisfying contexts disables denyAdd.
                removePermission(denyAdd);
            } else {
                removePermission(grantAdd);
            }
        }
    }

    // removePermission above makes a new permissions `BIT STRING` entirely if
    // any bit is mutated. If no bits were mutated, we can just return the
    // original tuple, which contains the original permissions `BIT STRING`.
    // Otherwise, we return a new tuple with the new permissions `BIT STRING`.
    return permissions === tuple.grantsAndDenials
        ? tuple
        : tuple.withGrantsAndDenials(permissions);
}

export default applyACDFConstraints;
