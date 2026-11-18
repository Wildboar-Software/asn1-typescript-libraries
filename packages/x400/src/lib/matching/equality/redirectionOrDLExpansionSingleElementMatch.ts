import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_MSString } from "@wildboar/x400/MSMatchingRules";
import { oRNameSingleElementMatchTyped } from "./oRNameSingleElementMatch.js";
import { matchRedirectionOrDLExpansionHistory } from "./redirectionOrDLExpansionMatchCommon.js";

export
const redirectionOrDLExpansionSingleElementMatchTyped = matchRedirectionOrDLExpansionHistory(oRNameSingleElementMatchTyped);

export
const redirectionOrDLExpansionSingleElementMatch: Matcher = createEqualityMatcher(
    _decode_MSString,
    redirectionOrDLExpansionSingleElementMatchTyped,
);

export default redirectionOrDLExpansionSingleElementMatch;
