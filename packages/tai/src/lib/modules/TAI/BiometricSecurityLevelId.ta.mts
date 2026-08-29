/* eslint-disable */
import {
    BIT_STRING,
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
 * @summary BiometricSecurityLevelId
 * @description
 *
 * Unique identifier for a biometric security level. Can (but
 * need not) be a hash of the modality policy and biometric
 * parameter values. May be placed in the biometric extension of
 * an AC. Appendix I uses a hash of security degree plus
 * parameters as this identifier. ITU-T Rec. X.1089 (05/2008)
 * [§9.7](https://www.itu.int/rec/T-REC-X.1089-200805-I),
 * Appendix I.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricSecurityLevelId  ::=  BIT STRING
 * ```
 */
export
type BiometricSecurityLevelId = BIT_STRING;
export const _decode_BiometricSecurityLevelId = $._decodeBitString;
export const _encode_BiometricSecurityLevelId = $._encodeBitString;


/* eslint-enable */
