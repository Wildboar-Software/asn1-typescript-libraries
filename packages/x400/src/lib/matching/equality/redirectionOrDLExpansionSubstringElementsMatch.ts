import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import type { ORAddressAndOptionalDirectoryName } from "@wildboar/x400/MTSAbstractService";
import { decodeNonEmptyORNameAssertion } from "./oRNameMatch.js";
import { oRNameSubstringElementsMatchTyped } from "./oRNameSubstringElementsMatch.js";
import { matchRedirectionOrDLExpansionHistory } from "./redirectionOrDLExpansionMatchCommon.js";

export
const redirectionOrDLExpansionSubstringElementsMatchTyped: TypedEquationFunction<ORAddressAndOptionalDirectoryName> =
    matchRedirectionOrDLExpansionHistory(oRNameSubstringElementsMatchTyped);

export
const redirectionOrDLExpansionSubstringElementsMatch: Matcher = createEqualityMatcher(
    decodeNonEmptyORNameAssertion("redirectionOrDLExpansionSubstringElementsMatch"),
    redirectionOrDLExpansionSubstringElementsMatchTyped,
    undefined,
    true,
);

export default redirectionOrDLExpansionSubstringElementsMatch;
