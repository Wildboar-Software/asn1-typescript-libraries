import {
    generalNameToKey,
    type GeneralNames,
} from "@wildboar/gn";

/**
 * @summary Compare two `GeneralNames` values as a multiset
 * @description
 *
 * Encoding order is not significant: each name on one side must pair with a
 * distinct equal name on the other. Equality of each name is that of
 * {@link generalNameToKey}.
 *
 * @param a One value
 * @param b The other
 * @returns `true` if they match; `false` otherwise
 * @function
 */
export function compareGeneralNames (
    a: GeneralNames,
    b: GeneralNames,
): boolean {
    if (a.length !== b.length) {
        return false;
    }
    const aSet: Set<string> = new Set();
    for (let i = 0; i < a.length; i++) {
        aSet.add(generalNameToKey(a[i]));
    }
    for (let i = 0; i < b.length; i++) {
        if (!aSet.delete(generalNameToKey(b[i]))) {
            return false;
        }
    }
    return true;
}

export default compareGeneralNames;
