import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_ORAddressAndOptionalDirectoryName } from "@wildboar/x400/MTSAbstractService";
import { oRNameElementsMatchTyped } from "./oRNameElementsMatch.js";
import { matchRedirectionOrDLExpansionHistory } from "./redirectionOrDLExpansionMatchCommon.js";

export
const redirectionOrDLExpansionElementsMatchTyped = matchRedirectionOrDLExpansionHistory(oRNameElementsMatchTyped);

export
const redirectionOrDLExpansionElementsMatch: Matcher = createEqualityMatcher(
    _decode_ORAddressAndOptionalDirectoryName,
    redirectionOrDLExpansionElementsMatchTyped,
);

export default redirectionOrDLExpansionElementsMatch;
