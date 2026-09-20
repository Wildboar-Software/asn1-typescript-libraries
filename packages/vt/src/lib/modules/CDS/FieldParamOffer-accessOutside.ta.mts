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
 * Offered `access-outside-fields`. Bit = 1 is offered: `allowed`(0)
 * / `notAllowed`(1); default `"allowed"`. Restricts Terminal
 * VT-user updates outside field extents. ISO/IEC 9040:1997
 * §18.2.2, §19.5.
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
 * @description
 *
 * Offer `access-outside-fields` = `"allowed"` (default). ISO/IEC
 * 9040:1997 §18.2.2, §19.5.
 * @constant
 */
export
const FieldParamOffer_accessOutside_allowed: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary allowed
 * @description
 *
 * Offer `access-outside-fields` = `"allowed"` (default). ISO/IEC
 * 9040:1997 §18.2.2, §19.5.
 * @constant
 */
export
const allowed: number = FieldParamOffer_accessOutside_allowed; /* SHORT_NAMED_BIT */

/**
 * @summary FieldParamOffer_accessOutside_notAllowed
 * @description
 *
 * Offer `access-outside-fields` = `"not allowed"`: Terminal VT-user
 * restricted to logical operations. ISO/IEC 9040:1997 §18.2.2,
 * §19.5.
 * @constant
 */
export
const FieldParamOffer_accessOutside_notAllowed: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary notAllowed
 * @description
 *
 * Offer `access-outside-fields` = `"not allowed"`: Terminal VT-user
 * restricted to logical operations. ISO/IEC 9040:1997 §18.2.2,
 * §19.5.
 * @constant
 */
export
const notAllowed: number = FieldParamOffer_accessOutside_notAllowed; /* SHORT_NAMED_BIT */
export const _decode_FieldParamOffer_accessOutside = $._decodeBitString;
export const _encode_FieldParamOffer_accessOutside = $._encodeBitString;


/* eslint-enable */
