import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_ORAddressAndOptionalDirectoryName } from "@wildboar/x400/MTSAbstractService";
import { oRNameMatchTyped } from "./oRNameMatch.js";
import { matchRedirectionOrDLExpansionHistory } from "./redirectionOrDLExpansionMatchCommon.js";

export
const redirectionOrDLExpansionMatchTyped = matchRedirectionOrDLExpansionHistory(oRNameMatchTyped);

export
const redirectionOrDLExpansionMatch: Matcher = createEqualityMatcher(
    _decode_ORAddressAndOptionalDirectoryName,
    redirectionOrDLExpansionMatchTyped,
);

export default redirectionOrDLExpansionMatch;
