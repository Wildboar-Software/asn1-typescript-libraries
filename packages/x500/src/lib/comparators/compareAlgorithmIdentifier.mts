import type {
    AlgorithmIdentifier,
} from "../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";

/**
 * @summary Compare two `AlgorithmIdentifier` values
 * @param a One value
 * @param b The other
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareAlgorithmIdentifier (a: AlgorithmIdentifier, b: AlgorithmIdentifier): boolean {
    return a.isEqualTo(b);
}

export default compareAlgorithmIdentifier;
