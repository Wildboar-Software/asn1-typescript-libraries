import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import type { ORAddressAndOptionalDirectoryName } from "@wildboar/x400/MTSAbstractService";
import {
    decodePreparedORNameAssertion,
    MATCH_FLAG_ELEMENTS_MATCH,
    matchPreparedORNameElement,
    normalizePreparedORName,
} from "./oRNameMatch.js";
import { oRNameElementsMatchTyped } from "./oRNameElementsMatch.js";
import { matchRedirectionOrDLExpansionHistory } from "./redirectionOrDLExpansionMatchCommon.js";

export
const redirectionOrDLExpansionElementsMatchTyped: TypedEquationFunction<ORAddressAndOptionalDirectoryName> =
    matchRedirectionOrDLExpansionHistory(oRNameElementsMatchTyped);

export
const redirectionOrDLExpansionElementsMatch: Matcher = createEqualityMatcher(
    decodePreparedORNameAssertion("redirectionOrDLExpansionElementsMatch"),
    matchRedirectionOrDLExpansionHistory(matchPreparedORNameElement(MATCH_FLAG_ELEMENTS_MATCH)),
    undefined,
    true,
    normalizePreparedORName,
);

export default redirectionOrDLExpansionElementsMatch;
