import {
    AlgorithmIdentifier,
} from "../modules/AuthenticationFramework/AlgorithmIdentifier.ta";
import compareElements from "./compareElements";

export
function compareAlgorithmIdentifier (a: AlgorithmIdentifier, b: AlgorithmIdentifier): boolean {
    return (
        (a.algorithm.toString() === b.algorithm.toString())
        && (
            (a.parameters === b.parameters)
            || compareElements(a.parameters, b.parameters)
        )
    );
}

export default compareAlgorithmIdentifier;
