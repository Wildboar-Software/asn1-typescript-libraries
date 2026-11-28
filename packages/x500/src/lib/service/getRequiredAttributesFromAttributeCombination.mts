import type { DotDelimitedOidString } from "@wildboar/asn1";
import { type AttributeCombination } from "@wildboar/x500/ServiceAdministration";

/**
 * @summary Extract the required attribute types from a attribute combination
 * @description
 *
 * This function extracts the required attribute types from a given attribute
 * combination and adds the string-form object identifiers for those attribute
 * types to the `ret` set.
 *
 * @param combo The attribute combination from which to extract required
 *  attribute types
 * @param non_negated {Boolean} Whether the current combination is not negated
 * @param ret The set of object identifiers of attribute types that were found
 *  to be required
 * @param recursionTTL Remaining recursion depth before bailing out conservatively.
 *  Defaults to 100.
 * @returns Nothing. This function modifies `ret` by reference.
 *
 * @function
 */
export
    function getRequiredAttributesFromAttributeCombination(
        combo: AttributeCombination,
        non_negated: boolean,
        ret: Set<DotDelimitedOidString>,
        recursionTTL: number = 100,
    ): void {
    if (recursionTTL <= 0) {
        return;
    }
    if ("attribute" in combo) {
        non_negated && ret.add(combo.attribute.toString());
    } else if (("and" in combo) || ("or" in combo)) {
        const subs = ("and" in combo) ? combo.and : combo.or;
        // De Morgan's laws swap conjunction and disjunction under negation:
        //   NOT (A AND B) = (NOT A) OR  (NOT B)
        //   NOT (A OR  B) = (NOT A) AND (NOT B)
        const acts_as_and = ("and" in combo) === non_negated;
        if (acts_as_and) {
            // Required attributes are any required by any subfilter.
            for (const sub of subs) {
                getRequiredAttributesFromAttributeCombination(sub, non_negated, ret, recursionTTL - 1);
            }
            return;
        }
        if (subs.length === 0) {
            return;
        }
        if (subs.length === 1) {
            getRequiredAttributesFromAttributeCombination(subs[0], non_negated, ret, recursionTTL - 1);
            return;
        }
        // Required attributes are those that are required by all subfilters.
        const common: Set<DotDelimitedOidString> = new Set();
        getRequiredAttributesFromAttributeCombination(subs[0], non_negated, common, recursionTTL - 1);
        if (common.size === 0) {
            return;
        }
        const subret: Set<DotDelimitedOidString> = new Set();
        for (let i = 1; i < subs.length; i++) {
            subret.clear();
            getRequiredAttributesFromAttributeCombination(subs[i], non_negated, subret, recursionTTL - 1);
            for (const attr of common.values()) {
                if (!subret.has(attr)) {
                    common.delete(attr);
                }
            }
            if (common.size === 0) {
                return;
            }
        }
        // These are the attributes that were required by every subfilter.
        for (const attr of common.values()) {
            ret.add(attr);
        }
    } else if ("not" in combo) {
        getRequiredAttributesFromAttributeCombination(combo.not, !non_negated, ret, recursionTTL - 1);
    }
}
