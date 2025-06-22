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
