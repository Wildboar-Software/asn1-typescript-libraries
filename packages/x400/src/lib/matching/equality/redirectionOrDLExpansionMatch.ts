import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import type { ORAddressAndOptionalDirectoryName } from "@wildboar/x400/MTSAbstractService";
import {
    decodePreparedORNameAssertion,
    matchPreparedORNameElement,
    normalizePreparedORName,
    oRNameMatchTyped,
} from "./oRNameMatch.js";
import { matchRedirectionOrDLExpansionHistory } from "./redirectionOrDLExpansionMatchCommon.js";

export
const redirectionOrDLExpansionMatchTyped: TypedEquationFunction<ORAddressAndOptionalDirectoryName> =
    matchRedirectionOrDLExpansionHistory(oRNameMatchTyped);

export
const redirectionOrDLExpansionMatch: Matcher = createEqualityMatcher(
    decodePreparedORNameAssertion("redirectionOrDLExpansionMatch"),
    matchRedirectionOrDLExpansionHistory(matchPreparedORNameElement(0)),
    undefined,
    true,
    normalizePreparedORName,
);

export default redirectionOrDLExpansionMatch;
