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



/* START_OF_SYMBOL_DEFINITION StartTime */
/**
 * @summary StartTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartTime  ::=  GeneralizedTime
 * ```
 */
export
type StartTime = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION StartTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StartTime */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StartTime */

/* START_OF_SYMBOL_DEFINITION _decode_StartTime */
export const _decode_StartTime = $._decodeGeneralizedTime;
/* END_OF_SYMBOL_DEFINITION _decode_StartTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StartTime */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StartTime */

/* START_OF_SYMBOL_DEFINITION _encode_StartTime */
export const _encode_StartTime = $._encodeGeneralizedTime;

/* END_OF_SYMBOL_DEFINITION _encode_StartTime */

/* eslint-enable */
