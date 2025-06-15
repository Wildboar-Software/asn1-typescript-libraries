/* eslint-disable */
import {
    GeneralizedTime,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION LoggingTime */
/**
 * @summary LoggingTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LoggingTime  ::=  GeneralizedTime
 * ```
 */
export
type LoggingTime = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION LoggingTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LoggingTime */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LoggingTime */

/* START_OF_SYMBOL_DEFINITION _decode_LoggingTime */
export const _decode_LoggingTime = $._decodeGeneralizedTime;
/* END_OF_SYMBOL_DEFINITION _decode_LoggingTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LoggingTime */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LoggingTime */

/* START_OF_SYMBOL_DEFINITION _encode_LoggingTime */
export const _encode_LoggingTime = $._encodeGeneralizedTime;

/* END_OF_SYMBOL_DEFINITION _encode_LoggingTime */

/* eslint-enable */
