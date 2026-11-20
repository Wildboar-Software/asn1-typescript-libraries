import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import type { ORAddressAndOptionalDirectoryName } from "@wildboar/x400/MTSAbstractService";
import { decodeNonEmptyORNameAssertion } from "./oRNameMatch.js";
import { oRNameElementsMatchTyped } from "./oRNameElementsMatch.js";
import { matchRedirectionOrDLExpansionHistory } from "./redirectionOrDLExpansionMatchCommon.js";

export
const redirectionOrDLExpansionElementsMatchTyped: TypedEquationFunction<ORAddressAndOptionalDirectoryName> =
    matchRedirectionOrDLExpansionHistory(oRNameElementsMatchTyped);

export
const redirectionOrDLExpansionElementsMatch: Matcher = createEqualityMatcher(
    decodeNonEmptyORNameAssertion("redirectionOrDLExpansionElementsMatch"),
    redirectionOrDLExpansionElementsMatchTyped,
    undefined,
    true,
);

export default redirectionOrDLExpansionElementsMatch;
