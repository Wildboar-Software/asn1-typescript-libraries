import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import {
    decodeORNameSingleElementAssertion,
    normalizeORNameSingleElementAssertion,
    oRNameSingleElementMatchTyped,
} from "./oRNameSingleElementMatch.js";
import { matchRedirectionOrDLExpansionHistory } from "./redirectionOrDLExpansionMatchCommon.js";

export
const redirectionOrDLExpansionSingleElementMatchTyped: TypedEquationFunction<string> =
    matchRedirectionOrDLExpansionHistory(oRNameSingleElementMatchTyped);

export
const redirectionOrDLExpansionSingleElementMatch: Matcher = createEqualityMatcher(
    decodeORNameSingleElementAssertion,
    redirectionOrDLExpansionSingleElementMatchTyped,
    undefined,
    true,
    normalizeORNameSingleElementAssertion,
);

export default redirectionOrDLExpansionSingleElementMatch;
