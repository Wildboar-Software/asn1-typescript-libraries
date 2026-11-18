import type { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import { oRNameMatchTyped } from "./oRNameMatch.mjs";
import matchRedirectionOrDLExpansionHistory from "./redirectionOrDLExpansionMatchCommon.mjs";

export
const redirectionOrDLExpansionMatchTyped: TypedEquationFunction<ASN1Element>
    = matchRedirectionOrDLExpansionHistory(oRNameMatchTyped);

export
const redirectionOrDLExpansionMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    redirectionOrDLExpansionMatchTyped,
);

export default redirectionOrDLExpansionMatch;
