import type { DotDelimitedOidString } from "@wildboar/asn1";
import type { ContextCombination } from "@wildboar/x500/ServiceAdministration";

/**
 * @summary Extract the required context types from a context combination
 * @description
 *
 * This function extracts the required context types from a given context
 * combination and adds the string-form object identifiers for those context
 * types to the `ret` set.
 *
 * @param combo The context combination from which to extract required contexts
 * @param non_negated {Boolean} Whether the current combination is not negated
 * @param ret The set of object identifiers of context types that were found
 *  to be required
 * @param recursionTTL Remaining recursion depth before bailing out conservatively.
 *  Defaults to 100.
 * @returns Nothing. This function modifies `ret` by reference.
 *
 * @function
 */
export
    function getRequiredContextsFromContextCombination(
        combo: ContextCombination,
        non_negated: boolean,
        ret: Set<DotDelimitedOidString>,
        recursionTTL: number = 100,
    ): void {
    if (recursionTTL <= 0) {
        return;
    }
    if ("context" in combo) {
        non_negated && ret.add(combo.context.toString());
    } else if (("and" in combo) || ("or" in combo)) {
        const subs = ("and" in combo) ? combo.and : combo.or;
        // De Morgan's laws swap conjunction and disjunction under negation:
        //   NOT (A AND B) = (NOT A) OR  (NOT B)
        //   NOT (A OR  B) = (NOT A) AND (NOT B)
        const acts_as_and = ("and" in combo) === non_negated;
        if (acts_as_and) {
            // Required attributes are any required by any subfilter.
            for (const sub of subs) {
                getRequiredContextsFromContextCombination(sub, non_negated, ret, recursionTTL - 1);
            }
            return;
        }
        if (subs.length > 100) {
            // This is a heuristic to prevent denial-of-service, because the
            // algorithm below has bad time complexity, and it sounds like
            // there is no efficient way to do this.
            return;
        }
        // Required attributes are those that are required by all subfilters.
        const subrets: Set<DotDelimitedOidString>[] = [];
        for (const sub of subs) {
            const subret: Set<DotDelimitedOidString> = new Set();
            getRequiredContextsFromContextCombination(sub, non_negated, subret, recursionTTL - 1);
            subrets.push(subret);
        }
        if (subrets.length === 0) {
            return;
        }
        subrets.sort((a, b) => a.size - b.size);
        const [smallest, ...rest] = subrets;

        outer:
        for (const value of smallest.values()) {
            for (const set of rest) {
                if (!set.has(value)) {
                    continue outer;
                }
            }
            ret.add(value);
        }
    } else if ("not" in combo) {
        getRequiredContextsFromContextCombination(combo.not, !non_negated, ret, recursionTTL - 1);
    }
}
