import type {
    AuthenticationLevel_basicLevels,
} from "../modules/BasicAccessControl/AuthenticationLevel-basicLevels.ta";
import { strict as assert } from "assert";


/**
 * @summary Compare two `AuthenticationLevel`s having alternative `basicLevels`
 * @description
 *
 * The way this function is expected to be used is such that `a` would be a
 * threshold authentication level required for some permission, `b` would be the
 * user's actual authentication level, and this function would return `true` if
 * the requirements for authentication were NOT met--in other words, that the
 * user's actual authentication level, `b`, did not meet or exceed the
 * threshold, `a`.
 *
 * @param a An authentication level (usually a criterion)
 * @param b An authentication level (usually a user's actual authentication level)
 * @returns Returns `true` if `a > b`. `false` otherwise.
 *
 * @function
 */
export
function compareAuthenticationLevel (
    a: AuthenticationLevel_basicLevels,
    b: AuthenticationLevel_basicLevels,
): boolean {
    if (a.level > b.level) {
        return true;
    }

    /**
     * From [ITU Recommendation X.501 (2019)](https://www.itu.int/rec/T-REC-X.501/en), Section 18.4.2.3:
     *
     * > If a localQualifier is not specified in the ACIItem , then the
     * > requestor need not have a corresponding value (if such a value is
     * > present, it is ignored).
     */
    if (
        (a.localQualifier !== undefined)
        && (a.localQualifier > b.localQualifier)
    ) {
        return true;
    }
    if (a.signed && !b.signed) {
        return true;
    }
    return false;
}

export default compareAuthenticationLevel;
