import type {
    AlgorithmIdentifier,
} from "../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import compareElements from "./compareElements.mjs";

/**
 * @summary Compare two `AlgorithmIdentifier` values
 * @param a One value
 * @param b The other
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareAlgorithmIdentifier (a: AlgorithmIdentifier, b: AlgorithmIdentifier): boolean {
    if (!a.algorithm.isEqualTo(b.algorithm)) {
        return false;
    }
    if (a.parameters === b.parameters) {
        return true;
    }
    if (a.parameters && b.parameters) {
        return compareElements(a.parameters, b.parameters);
    }
    return false;
}

export default compareAlgorithmIdentifier;
