/**
 * CBEFF `BiometricSubtype` (ISO/IEC 19785-3:2020 Clause 6.2), used as
 * optional `Modality.subtype` in ISO/IEC 29120-1:2022 Clause 6.4.2.3
 * (e.g. index finger code 02, Annex B.4).
 */
export {
    type BiometricSubtype,
    _decode_BiometricSubtype,
    _encode_BiometricSubtype,
} from "@wildboar/cbeff";
