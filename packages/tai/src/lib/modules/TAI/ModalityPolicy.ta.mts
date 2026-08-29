/* eslint-disable */
import {
    UniversalString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ModalityPolicy
 * @description
 *
 * Policy on biometric modality choice, capture actions (number
 * of trials, liveness checks), fusion, and related behaviour
 * for a security level. Precise values are out of scope.
 * Recommended strings where appropriate:
 * `"unimodal"`, `"unimodalWithLiveDetection"`,
 * `"multimodalWithScoreFusion"` — each should be accompanied
 * by a precise description. Appendix I ranks unimodal (lowest),
 * unimodal plus live detection, multimodal, then multimodal
 * plus live detection (highest). ITU-T Rec. X.1089 (05/2008)
 * [§9.8](https://www.itu.int/rec/T-REC-X.1089-200805-I), §9.9,
 * Appendix I.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModalityPolicy  ::=  UniversalString
 * ```
 */
export
type ModalityPolicy = UniversalString; // UniversalString
export const _decode_ModalityPolicy = $._decodeUniversalString;
export const _encode_ModalityPolicy = $._encodeUniversalString;


/* eslint-enable */
