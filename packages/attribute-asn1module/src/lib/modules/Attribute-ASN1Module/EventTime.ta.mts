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



/* START_OF_SYMBOL_DEFINITION EventTime */
/**
 * @summary EventTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventTime  ::=  GeneralizedTime
 * ```
 */
export
type EventTime = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION EventTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EventTime */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EventTime */

/* START_OF_SYMBOL_DEFINITION _decode_EventTime */
export const _decode_EventTime = $._decodeGeneralizedTime;
/* END_OF_SYMBOL_DEFINITION _decode_EventTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EventTime */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EventTime */

/* START_OF_SYMBOL_DEFINITION _encode_EventTime */
export const _encode_EventTime = $._encodeGeneralizedTime;

/* END_OF_SYMBOL_DEFINITION _encode_EventTime */

/* eslint-enable */
