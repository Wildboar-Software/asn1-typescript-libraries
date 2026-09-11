/**
 * @description
 *
 * BioAPI false-match rate. TSM `requestFMR` / `score` use this as a 32-bit
 * integer `value / (2^31-1)` ([ISO/IEC 19784-1]; X.1084 §10.1.3).
 */
export {
    type BioAPI_FMR,
    _decode_BioAPI_FMR,
    _encode_BioAPI_FMR,
} from "@wildboar/bip";
