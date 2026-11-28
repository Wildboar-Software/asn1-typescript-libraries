/**
 * Substring matching-rule implementations from ITU-T Rec. X.413 clause 12.2.
 */
export {
    decodeMSSubstringsMatchAssertion,
    decodeMSSubstringsMatchFilterPieces,
    mSSubstringsMatch,
    mSSubstringsMatchTyped,
    normalizeMSSubstringsMatchAssertion,
} from "../equality/mSSubstringsMatch.mjs";
export {
    decodeMSSingleSubstringMatchAssertion,
    decodeMSSingleSubstringMatchFilterPieces,
    mSSingleSubstringMatch,
    mSSingleSubstringMatchTyped,
    normalizeMSSingleSubstringMatchAssertion,
} from "./mSSingleSubstringMatch.mjs";
