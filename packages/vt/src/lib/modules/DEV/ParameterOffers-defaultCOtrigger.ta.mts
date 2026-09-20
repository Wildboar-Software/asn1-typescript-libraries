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
 * @summary ParameterOffers_defaultCOtrigger
 * @description
 *
 * Offered trigger values for the implicit default CO. Set bits are
 * offered. ISO/IEC 9040:1997 §23.1 table 12.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-defaultCOtrigger ::= BIT STRING { notSelected (0), selected (1) }
 * ```
 */
export
type ParameterOffers_defaultCOtrigger = BIT_STRING;

/**
 * @summary ParameterOffers_defaultCOtrigger_notSelected
 * @description
 *
 * Bit 0: offer `notSelected` (default). Same meaning as CO-trigger.
 * ISO/IEC 9040:1997 §23.1 table 12.
 *
 * @constant
 */
export
const ParameterOffers_defaultCOtrigger_notSelected: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary notSelected
 * @description
 *
 * Bit 0: offer `notSelected` (default). Same meaning as CO-trigger.
 * ISO/IEC 9040:1997 §23.1 table 12.
 *
 * @constant
 */
export
const notSelected: number = ParameterOffers_defaultCOtrigger_notSelected; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_defaultCOtrigger_selected
 * @description
 *
 * Bit 1: offer `selected`. Same meaning as CO-trigger. ISO/IEC
 * 9040:1997 §23.1 table 12.
 *
 * @constant
 */
export
const ParameterOffers_defaultCOtrigger_selected: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary selected
 * @description
 *
 * Bit 1: offer `selected`. Same meaning as CO-trigger. ISO/IEC
 * 9040:1997 §23.1 table 12.
 *
 * @constant
 */
export
const selected: number = ParameterOffers_defaultCOtrigger_selected; /* SHORT_NAMED_BIT */
export const _decode_ParameterOffers_defaultCOtrigger = $._decodeBitString;
export const _encode_ParameterOffers_defaultCOtrigger = $._encodeBitString;


/* eslint-enable */
