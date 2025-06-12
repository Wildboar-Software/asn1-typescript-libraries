import type {
    AlgorithmIdentifier,
} from "../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import compareElements from "./compareElements.mjs";

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
