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
 * @summary FieldParamOffer_accessOutside
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FieldParamOffer-accessOutside ::= BIT STRING { allowed (0), notAllowed (1) }
 * ```
 */
export
type FieldParamOffer_accessOutside = BIT_STRING;

/**
 * @summary FieldParamOffer_accessOutside_allowed
 * @constant
 */
export
const FieldParamOffer_accessOutside_allowed: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary allowed
 * @constant
 */
export
const allowed: number = FieldParamOffer_accessOutside_allowed; /* SHORT_NAMED_BIT */

/**
 * @summary FieldParamOffer_accessOutside_notAllowed
 * @constant
 */
export
const FieldParamOffer_accessOutside_notAllowed: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary notAllowed
 * @constant
 */
export
const notAllowed: number = FieldParamOffer_accessOutside_notAllowed; /* SHORT_NAMED_BIT */
export const _decode_FieldParamOffer_accessOutside = $._decodeBitString;
export const _encode_FieldParamOffer_accessOutside = $._encodeBitString;


/* eslint-enable */
