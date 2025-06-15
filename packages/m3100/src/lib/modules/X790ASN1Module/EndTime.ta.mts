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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION EndTime */
/**
 * @summary EndTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EndTime  ::=  GeneralizedTime
 * ```
 */
export type EndTime = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION EndTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EndTime */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EndTime */

/* START_OF_SYMBOL_DEFINITION _decode_EndTime */
export const _decode_EndTime = $._decodeGeneralizedTime;
/* END_OF_SYMBOL_DEFINITION _decode_EndTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EndTime */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EndTime */

/* START_OF_SYMBOL_DEFINITION _encode_EndTime */
export const _encode_EndTime = $._encodeGeneralizedTime;

/* END_OF_SYMBOL_DEFINITION _encode_EndTime */

/* eslint-enable */
