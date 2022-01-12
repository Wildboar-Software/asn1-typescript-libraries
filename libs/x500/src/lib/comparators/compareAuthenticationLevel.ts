import type {
    AuthenticationLevel_basicLevels,
} from "../modules/BasicAccessControl/AuthenticationLevel-basicLevels.ta";
import { strict as assert } from "assert";


/**
 * @param a
 * @param b
 * @returns Returns true if a > b. False otherwise.
 */
export
function compareAuthenticationLevel (a: AuthenticationLevel_basicLevels, b: AuthenticationLevel_basicLevels): boolean {
    if (a.level < b.level) {
        return false;
    }
    if (a.level > b.level) {
        return true;
    }
    assert(a.level === b.level);
    const alq = a.localQualifier ?? 0;
    const blq = b.localQualifier ?? 0;
    if (alq > blq) {
        return true;
    }
    if (alq < blq) {
        return false;
    }
    if (a.signed && !b.signed) {
        return true;
    }
    return false;
}

export default compareAuthenticationLevel;
