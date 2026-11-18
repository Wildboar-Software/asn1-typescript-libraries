import type { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import { oRNameSingleElementMatchTyped } from "./oRNameSingleElementMatch.mjs";
import matchRedirectionOrDLExpansionHistory from "./redirectionOrDLExpansionMatchCommon.mjs";

export
const redirectionOrDLExpansionSingleElementMatchTyped: TypedEquationFunction<ASN1Element>
    = matchRedirectionOrDLExpansionHistory(oRNameSingleElementMatchTyped);

export
const redirectionOrDLExpansionSingleElementMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    redirectionOrDLExpansionSingleElementMatchTyped,
);

export default redirectionOrDLExpansionSingleElementMatch;
