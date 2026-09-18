/* eslint-disable */
import {
    INTEGER,
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
 * @summary FieldParamValues_accessOutside
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FieldParamValues-accessOutside ::= INTEGER { allowed (0), notAllowed (1) }
 * ```
 */
export
type FieldParamValues_accessOutside = INTEGER;

/**
 * @summary FieldParamValues_accessOutside_allowed
 * @constant
 * @type {number}
 */
export
const FieldParamValues_accessOutside_allowed: FieldParamValues_accessOutside = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FieldParamValues_accessOutside_allowed
 * @constant
 * @type {number}
 */
export
const allowed: FieldParamValues_accessOutside = FieldParamValues_accessOutside_allowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FieldParamValues_accessOutside_notAllowed
 * @constant
 * @type {number}
 */
export
const FieldParamValues_accessOutside_notAllowed: FieldParamValues_accessOutside = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FieldParamValues_accessOutside_notAllowed
 * @constant
 * @type {number}
 */
export
const notAllowed: FieldParamValues_accessOutside = FieldParamValues_accessOutside_notAllowed; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FieldParamValues_accessOutside = $._decodeInteger;
export const _encode_FieldParamValues_accessOutside = $._encodeInteger;


/* eslint-enable */
