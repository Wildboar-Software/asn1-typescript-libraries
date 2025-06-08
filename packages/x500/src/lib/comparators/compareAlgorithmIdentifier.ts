import type {
    AlgorithmIdentifier,
} from "../modules/AuthenticationFramework/AlgorithmIdentifier.ta";
import compareElements from "./compareElements";

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
