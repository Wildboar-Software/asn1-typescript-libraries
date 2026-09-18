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
 * @summary ParameterOffers_rippleCapability
 * @description
 *
 * Offered `ripple-capability`. Bit = 1 is offered: `yes`(0) / `no`(1);
 * default `"no"`. Requires Ripple FU. ISO/IEC 9040:1997 §10.10,
 * §18.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-rippleCapability ::= BIT STRING { yes (0), no (1) }
 * ```
 */
export
type ParameterOffers_rippleCapability = BIT_STRING;

/**
 * @summary ParameterOffers_rippleCapability_yes
 * @description
 *
 * Offer `ripple-capability` = `"yes"`. Requires Ripple FU. ISO/IEC
 * 9040:1997 §10.10, §18.1.
 * @constant
 */
export
const ParameterOffers_rippleCapability_yes: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary yes
 * @description
 *
 * Offer `ripple-capability` = `"yes"`. Requires Ripple FU. ISO/IEC
 * 9040:1997 §10.10, §18.1.
 * @constant
 */
export
const yes: number = ParameterOffers_rippleCapability_yes; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_rippleCapability_no
 * @description
 *
 * Offer `ripple-capability` = `"no"` (default). ISO/IEC 9040:1997
 * §10.10, §18.1.
 * @constant
 */
export
const ParameterOffers_rippleCapability_no: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary no
 * @description
 *
 * Offer `ripple-capability` = `"no"` (default). ISO/IEC 9040:1997
 * §10.10, §18.1.
 * @constant
 */
export
const no: number = ParameterOffers_rippleCapability_no; /* SHORT_NAMED_BIT */
export const _decode_ParameterOffers_rippleCapability = $._decodeBitString;
export const _encode_ParameterOffers_rippleCapability = $._encodeBitString;


/* eslint-enable */
