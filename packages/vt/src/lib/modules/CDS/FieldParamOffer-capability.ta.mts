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
 * @summary FieldParamOffer_capability
 * @description
 *
 * Offered `field-definition-capability`. Bit = 1 is offered:
 * `yes`(0) / `no`(1); default `"no"`. Requires Fields FU. ISO/IEC
 * 9040:1997 §10.8, §18.1, §18.2.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FieldParamOffer-capability ::= BIT STRING { yes (0), no (1) }
 * ```
 */
export
type FieldParamOffer_capability = BIT_STRING;

/**
 * @summary FieldParamOffer_capability_yes
 * @description
 *
 * Offer `field-definition-capability` = `"yes"`. ISO/IEC 9040:1997
 * §18.1, §18.2.2.
 * @constant
 */
export
const FieldParamOffer_capability_yes: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary yes
 * @description
 *
 * Offer `field-definition-capability` = `"yes"`. ISO/IEC 9040:1997
 * §18.1, §18.2.2.
 * @constant
 */
export
const yes: number = FieldParamOffer_capability_yes; /* SHORT_NAMED_BIT */

/**
 * @summary FieldParamOffer_capability_no
 * @description
 *
 * Offer `field-definition-capability` = `"no"` (default). ISO/IEC
 * 9040:1997 §18.1.
 * @constant
 */
export
const FieldParamOffer_capability_no: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary no
 * @description
 *
 * Offer `field-definition-capability` = `"no"` (default). ISO/IEC
 * 9040:1997 §18.1.
 * @constant
 */
export
const no: number = FieldParamOffer_capability_no; /* SHORT_NAMED_BIT */
export const _decode_FieldParamOffer_capability = $._decodeBitString;
export const _encode_FieldParamOffer_capability = $._encodeBitString;


/* eslint-enable */
