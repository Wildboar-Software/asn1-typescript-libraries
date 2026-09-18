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
 * @constant
 */
export
const ParameterOffers_defaultCOtrigger_notSelected: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary notSelected
 * @constant
 */
export
const notSelected: number = ParameterOffers_defaultCOtrigger_notSelected; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_defaultCOtrigger_selected
 * @constant
 */
export
const ParameterOffers_defaultCOtrigger_selected: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary selected
 * @constant
 */
export
const selected: number = ParameterOffers_defaultCOtrigger_selected; /* SHORT_NAMED_BIT */
export const _decode_ParameterOffers_defaultCOtrigger = $._decodeBitString;
export const _encode_ParameterOffers_defaultCOtrigger = $._encodeBitString;


/* eslint-enable */
