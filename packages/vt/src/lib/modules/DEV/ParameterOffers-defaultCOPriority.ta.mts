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
 * @summary ParameterOffers_defaultCOPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-defaultCOPriority ::= BIT STRING { normal (0), high (1), urgent (2) }
 * ```
 */
export
type ParameterOffers_defaultCOPriority = BIT_STRING;

/**
 * @summary ParameterOffers_defaultCOPriority_normal
 * @constant
 */
export
const ParameterOffers_defaultCOPriority_normal: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary normal
 * @constant
 */
export
const normal: number = ParameterOffers_defaultCOPriority_normal; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_defaultCOPriority_high
 * @constant
 */
export
const ParameterOffers_defaultCOPriority_high: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary high
 * @constant
 */
export
const high: number = ParameterOffers_defaultCOPriority_high; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_defaultCOPriority_urgent
 * @constant
 */
export
const ParameterOffers_defaultCOPriority_urgent: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary urgent
 * @constant
 */
export
const urgent: number = ParameterOffers_defaultCOPriority_urgent; /* SHORT_NAMED_BIT */
export const _decode_ParameterOffers_defaultCOPriority = $._decodeBitString;
export const _encode_ParameterOffers_defaultCOPriority = $._encodeBitString;


/* eslint-enable */
