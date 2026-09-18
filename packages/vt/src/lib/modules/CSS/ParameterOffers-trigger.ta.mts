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
 * @summary ParameterOffers_trigger
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-trigger ::= BIT STRING { yes (0), no (1) }
 * ```
 */
export
type ParameterOffers_trigger = BIT_STRING;

/**
 * @summary ParameterOffers_trigger_yes
 * @constant
 */
export
const ParameterOffers_trigger_yes: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary yes
 * @constant
 */
export
const yes: number = ParameterOffers_trigger_yes; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_trigger_no
 * @constant
 */
export
const ParameterOffers_trigger_no: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary no
 * @constant
 */
export
const no: number = ParameterOffers_trigger_no; /* SHORT_NAMED_BIT */
export const _decode_ParameterOffers_trigger = $._decodeBitString;
export const _encode_ParameterOffers_trigger = $._encodeBitString;


/* eslint-enable */
