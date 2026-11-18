import type { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import { oRNameElementsMatchTyped } from "./oRNameElementsMatch.mjs";
import matchRedirectionOrDLExpansionHistory from "./redirectionOrDLExpansionMatchCommon.mjs";

export
const redirectionOrDLExpansionElementsMatchTyped: TypedEquationFunction<ASN1Element>
    = matchRedirectionOrDLExpansionHistory(oRNameElementsMatchTyped);

export
const redirectionOrDLExpansionElementsMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    redirectionOrDLExpansionElementsMatchTyped,
);

export default redirectionOrDLExpansionElementsMatch;
