import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import type { ORAddressAndOptionalDirectoryName } from "@wildboar/x400/MTSAbstractService";
import {
    decodePreparedORNameAssertion,
    MATCH_FLAG_SUBSTRING_MATCH,
    matchPreparedORNameElement,
    normalizePreparedORName,
} from "./oRNameMatch.mjs";
import { oRNameSubstringElementsMatchTyped } from "./oRNameSubstringElementsMatch.mjs";
import { matchRedirectionOrDLExpansionHistory } from "./redirectionOrDLExpansionMatchCommon.mjs";

export
const redirectionOrDLExpansionSubstringElementsMatchTyped: TypedEquationFunction<ORAddressAndOptionalDirectoryName> =
    matchRedirectionOrDLExpansionHistory(oRNameSubstringElementsMatchTyped);

export
const redirectionOrDLExpansionSubstringElementsMatch: Matcher = createEqualityMatcher(
    decodePreparedORNameAssertion("redirectionOrDLExpansionSubstringElementsMatch"),
    matchRedirectionOrDLExpansionHistory(matchPreparedORNameElement(MATCH_FLAG_SUBSTRING_MATCH)),
    undefined,
    true,
    normalizePreparedORName,
);

export default redirectionOrDLExpansionSubstringElementsMatch;
