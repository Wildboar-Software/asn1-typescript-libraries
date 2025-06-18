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
    return (
        (a.algorithm.isEqualTo(b.algorithm))
        && (
            (a.parameters === b.parameters)
            || (
                a.parameters
                && b.parameters
                && compareElements(a.parameters, b.parameters)
            )
        )
    );
}

export default compareAlgorithmIdentifier;
