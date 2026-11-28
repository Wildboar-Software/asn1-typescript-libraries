/**
 * Equality matching-rule implementations from ITU-T Rec. X.402, X.413, and X.420.
 */
export { addressCapabilitiesMatch } from "./addressCapabilitiesMatch.mjs";
export { capabilityMatch } from "./capabilityMatch.mjs";
export { circulationMemberCheckmarkMatch } from "./circulationMemberCheckmarkMatch.mjs";
export {
    circulationMemberElementsMatch,
    circulationMemberElementsMatchTyped,
} from "./circulationMemberElementsMatch.mjs";
export {
    circulationMemberMatch,
    circulationMemberMatchTyped,
} from "./circulationMemberMatch.mjs";
export { circulationMemberSingleElementMatch } from "./circulationMemberSingleElementMatch.mjs";
export {
    circulationMemberSubstringElementsMatch,
    circulationMemberSubstringElementsMatchTyped,
} from "./circulationMemberSubstringElementsMatch.mjs";
export { contentCorrelatorMatch } from "./contentCorrelatorMatch.mjs";
export { contentIdentifierMatch } from "./contentIdentifierMatch.mjs";
export { distributionCodeMatch } from "./distributionCodeMatch.mjs";
export { informationCategoryMatch } from "./informationCategoryMatch.mjs";
export { iPMIdentifierMatch } from "./iPMIdentifierMatch.mjs";
export { iPMLocationMatch } from "./iPMLocationMatch.mjs";
export { mSSingleSubstringListElementsMatch } from "./mSSingleSubstringListElementsMatch.mjs";
export { mSSingleSubstringListMatch } from "./mSSingleSubstringListMatch.mjs";
export { mSStringCaseSensitiveMatch } from "./msStringCaseSensitiveMatch.mjs";
export { mSStringListElementsMatch } from "./msStringListElementsMatch.mjs";
export { mSStringListMatch } from "./mSStringListMatch.mjs";
export { mSStringMatch } from "./mSStringMatch.mjs";
export {
    decodeMSSubstringsMatchAssertion,
    decodeMSSubstringsMatchFilterPieces,
    mSSubstringsMatch,
    mSSubstringsMatchTyped,
    normalizeMSSubstringsMatchAssertion,
} from "./mSSubstringsMatch.mjs";
export { mTSIdentifierMatch } from "./mTSIdentifierMatch.mjs";
export {
    oRAddressElementsMatch,
    orAddressIsSubset,
} from "./oRAddressElementsMatch.mjs";
export { oRAddressMatch } from "./oRAddressMatch.mjs";
export {
    oRAddressSubstringElementsMatch,
    orAddressIsSubstringSubset,
} from "./oRAddressSubstringElementsMatch.mjs";
export {
    decodeMSStringElement,
    msStringToString,
    normalizeMSString,
    orAddressesMatch,
} from "./orAddressUtilities.mjs";
export {
    oRDescriptorElementsMatch,
    oRDescriptorElementsMatchTyped,
} from "./oRDescriptorElementsMatch.mjs";
export {
    matchORDescriptors,
    oRDescriptorMatch,
    oRDescriptorMatchTyped,
} from "./oRDescriptorMatch.mjs";
export {
    matchORDescriptorSingleElement,
    oRDescriptorSingleElementMatch,
    oRDescriptorSingleElementMatchTyped,
} from "./oRDescriptorSingleElementMatch.mjs";
export {
    oRDescriptorSubstringElementsMatch,
    oRDescriptorSubstringElementsMatchTyped,
} from "./oRDescriptorSubstringElementsMatch.mjs";
export {
    oRNameElementsMatch,
    oRNameElementsMatchTyped,
} from "./oRNameElementsMatch.mjs";
export { oRNameExactMatch } from "./oRNameExactMatch.mjs";
export {
    matchORNames,
    oRNameMatch,
    oRNameMatchTyped,
} from "./oRNameMatch.mjs";
export {
    decodeORNameSingleElementAssertion,
    matchORNameSingleElement,
    normalizeORNameSingleElementAssertion,
    oRNameSingleElementMatch,
    oRNameSingleElementMatchTyped,
} from "./oRNameSingleElementMatch.mjs";
export {
    oRNameSubstringElementsMatch,
    oRNameSubstringElementsMatchTyped,
} from "./oRNameSubstringElementsMatch.mjs";
export {
    recipientSpecifierElementsMatch,
    recipientSpecifierElementsMatchTyped,
} from "./recipientSpecifierElementsMatch.mjs";
export {
    recipientSpecifierMatch,
    recipientSpecifierMatchTyped,
} from "./recipientSpecifierMatch.mjs";
export { recipientSpecifierSingleElementMatch } from "./recipientSpecifierSingleElementMatch.mjs";
export {
    recipientSpecifierSubstringElementsMatch,
    recipientSpecifierSubstringElementsMatchTyped,
} from "./recipientSpecifierSubstringElementsMatch.mjs";
export {
    redirectionOrDLExpansionElementsMatch,
    redirectionOrDLExpansionElementsMatchTyped,
} from "./redirectionOrDLExpansionElementsMatch.mjs";
export {
    redirectionOrDLExpansionMatch,
    redirectionOrDLExpansionMatchTyped,
} from "./redirectionOrDLExpansionMatch.mjs";
export {
    redirectionOrDLExpansionSingleElementMatch,
    redirectionOrDLExpansionSingleElementMatchTyped,
} from "./redirectionOrDLExpansionSingleElementMatch.mjs";
export {
    redirectionOrDLExpansionSubstringElementsMatch,
    redirectionOrDLExpansionSubstringElementsMatchTyped,
} from "./redirectionOrDLExpansionSubstringElementsMatch.mjs";
export { redirectionReasonMatch } from "./redirectionReasonMatch.mjs";
export { valueCountMatch } from "./valueCountMatch.mjs";
