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

/* START_OF_SYMBOL_DEFINITION BeginTime */
/**
 * @summary BeginTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BeginTime  ::=  GeneralizedTime
 * ```
 */
export type BeginTime = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION BeginTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BeginTime */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BeginTime */

/* START_OF_SYMBOL_DEFINITION _decode_BeginTime */
export const _decode_BeginTime = $._decodeGeneralizedTime;
/* END_OF_SYMBOL_DEFINITION _decode_BeginTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BeginTime */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BeginTime */

/* START_OF_SYMBOL_DEFINITION _encode_BeginTime */
export const _encode_BeginTime = $._encodeGeneralizedTime;

/* END_OF_SYMBOL_DEFINITION _encode_BeginTime */

/* eslint-enable */
