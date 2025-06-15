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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION CheckSum */
/**
 * @summary CheckSum
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CheckSum  ::=  BIT STRING
 * ```
 */
export type CheckSum = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION CheckSum */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CheckSum */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CheckSum */

/* START_OF_SYMBOL_DEFINITION _decode_CheckSum */
export const _decode_CheckSum = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_CheckSum */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CheckSum */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CheckSum */

/* START_OF_SYMBOL_DEFINITION _encode_CheckSum */
export const _encode_CheckSum = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_CheckSum */

/* eslint-enable */
