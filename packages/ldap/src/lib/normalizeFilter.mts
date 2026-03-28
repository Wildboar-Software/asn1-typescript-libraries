import type { Filter } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/Filter.ta.mjs";

/**
 * @summary Normalizes a Filter (mostly) as specified in ITU Recommendation X.501 (2019), Annex Q.
 * @description
 *
 * This function deviates from the rules described in Annex Q because following
 * those rules would open up an attack vector for denial-of-service, since the
 * normalization of boolean filter according to them could result in a
 * combinatorial explosion of new filters.
 *
 * This is the particular simplification that is dangerous:
 *
 * - "and { or {x,y,z}, p, q} is the same as or { and {x,p,q}, and {y,p,q}, and {z,p,q} }"
 *
 * The number of subfilters in the inner `or` is multiplied by all the other
 * subfilters in the `and`, which themselves may also be `or` subfilters. This
 * is handled by capping the number of filters that may be produced from such a
 * transformation. If the number exceeds this cap, the filter is left unchanged,
 * which means that this function may return a filter that is not perfectly
 * normalized.
 *
 * These are also a little dangerous:
 *
 * - "not { and {x,y,z} } is the same as or { not {x}, not {y}, not {z}}" doubles
 *   the number of filters within the inner `and`, although it subtracts by one.
 * - "not { or {x,y,z} } is the same as and { not {x}, not {y}, not {z} }" does
 *   the same.
 *
 * These normalizations are fine, because they do not produce more filters:
 *
 * - "not { not {x}} is the same as x"
 * - "and { and {x,y,z}, p, q } is the same as and { x,y,z,p,q }"
 * - "or { or {x,y,z}, p, q } is the same as or { x,y,z,p,q }"
 *
 * @param filter The filter to be normalized.
 * @param recursionTTL The recursion "time-to-live" hops: this number is
 *  decremented with each function invocation. If it reaches zero, recursion
 *  stops: no normalization occurs deeper beneath this. This is to prevent stack
 *  overflows from maliciously huge filters. Defaults to 20.
 * @returns A normalized filter.
 *
 * @function
 */
export
function normalizeFilter (filter: Filter, recursionTTL: number = 20): Filter {
    if (recursionTTL <= 0) {
        return filter;
    }
    if ("not" in filter) {
        const subfilter = filter.not;
        if ("not" in subfilter) { // Double negative. "not { not {x}} is the same as x"
            return subfilter.not;
        } else if ("and" in subfilter) {
            return {
                or: subfilter.and.map((subsubfilter) => normalizeFilter({
                    not: subsubfilter,
                }, recursionTTL - 1)),
            };
        } else if ("or" in subfilter) {
            return {
                and: subfilter.or.map((subsubfilter) => normalizeFilter({
                    not: subsubfilter,
                }, recursionTTL - 1)),
            };
        } else {
            return filter;
        }
    } else if ("and" in filter) {
        if (filter.and.length === 1) {
            return normalizeFilter(filter.and[0], recursionTTL - 1);
        }
        if (filter.and.some((subfilter) => ("or" in subfilter) && (subfilter.or.length === 0))) {
            return { // One of the subfilters is always false, so this filter is always false.
                or: [],
            };
        }
        const subfilters = filter.and
            .filter((sub) => !(("and" in sub) && (sub.and.length === 0))) // Ignore and:{} subfilters.
            .map((sub) => normalizeFilter(sub, recursionTTL - 1))
            // "and { and {x,y,z}, p, q } is the same as and { x,y,z,p,q }"
            .flatMap((sub) => (("and" in sub) ? sub.and : [ sub ]))
            .map((sub) => normalizeFilter(sub, recursionTTL - 1)); // It may be necessary again.

        // This is the dangerous part here:
        // "and { or {x,y,z}, p, q} is the same as or { and {x,p,q}, and {y,p,q}, and {z,p,q} }"
        const orsubIndex = subfilters.findIndex((sf) => ("or" in sf));
        if (orsubIndex > -1 && (subfilters.length <= 10)) {
            const orsub = subfilters.splice(orsubIndex, 1)[0];
            if (!("or" in orsub)) {
                throw new Error(); // This should never happen.
            }
            const difficulty: number = subfilters.length * orsub.or.length;
            if (difficulty < 20) {
                return ({
                    or: orsub.or.map((subsub) => normalizeFilter({
                        and: [ subsub, ...subfilters ],
                    }, recursionTTL - 1)),
                });
            }
        }

        return {
            and: subfilters,
        };
    } else if ("or" in filter) {
        if (filter.or.length === 1) {
            return normalizeFilter(filter.or[0], recursionTTL - 1);
        }
        if (filter.or.some((subfilter) => ("and" in subfilter) && (subfilter.and.length === 0))) {
            return { // One of the subfilters is always true, so this filter is always true.
                and: [],
            };
        }
        return {
            or: filter.or
                .filter((sub) => !(("and" in sub) && (sub.and.length === 0))) // Filter out and:{}
                // "or { or {x,y,z}, p, q } is the same as or { x,y,z,p,q }"
                .flatMap((sub) => ("or" in sub) ? sub.or : [ sub ])
                .map((sub) => normalizeFilter(sub, recursionTTL - 1)),
        };
    } else {
        return filter;
    }
}

export default normalizeFilter;
