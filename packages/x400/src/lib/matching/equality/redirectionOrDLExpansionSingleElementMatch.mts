import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import {
    decodeORNameSingleElementAssertion,
    normalizeORNameSingleElementAssertion,
    oRNameSingleElementMatchTyped,
} from "./oRNameSingleElementMatch.mjs";
import { matchRedirectionOrDLExpansionHistory } from "./redirectionOrDLExpansionMatchCommon.mjs";

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
