import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import type { ORAddressAndOptionalDirectoryName } from "@wildboar/x400/MTSAbstractService";
import {
    decodeNonEmptyORNameAssertion,
    oRNameMatchTyped,
} from "./oRNameMatch.js";
import { matchRedirectionOrDLExpansionHistory } from "./redirectionOrDLExpansionMatchCommon.js";

export
const redirectionOrDLExpansionMatchTyped: TypedEquationFunction<ORAddressAndOptionalDirectoryName> =
    matchRedirectionOrDLExpansionHistory(oRNameMatchTyped);

export
const redirectionOrDLExpansionMatch: Matcher = createEqualityMatcher(
    decodeNonEmptyORNameAssertion("redirectionOrDLExpansionMatch"),
    redirectionOrDLExpansionMatchTyped,
    undefined,
    true,
);

export default redirectionOrDLExpansionMatch;
