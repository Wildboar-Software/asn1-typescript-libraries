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
 * @constant
 */
export
const ParameterOffers_rippleCapability_yes: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary yes
 * @constant
 */
export
const yes: number = ParameterOffers_rippleCapability_yes; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_rippleCapability_no
 * @constant
 */
export
const ParameterOffers_rippleCapability_no: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary no
 * @constant
 */
export
const no: number = ParameterOffers_rippleCapability_no; /* SHORT_NAMED_BIT */
export const _decode_ParameterOffers_rippleCapability = $._decodeBitString;
export const _encode_ParameterOffers_rippleCapability = $._encodeBitString;


/* eslint-enable */
