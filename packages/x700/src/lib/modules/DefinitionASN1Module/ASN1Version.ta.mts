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

/* START_OF_SYMBOL_DEFINITION ASN1Version */
/**
 * @summary ASN1Version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASN1Version  ::=  BIT STRING {v1990(0), v1994(1)}
 * ```
 */
export type ASN1Version = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION ASN1Version */

/* START_OF_SYMBOL_DEFINITION ASN1Version_v1990 */
/**
 * @summary ASN1Version_v1990
 * @constant
 */
export const ASN1Version_v1990: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ASN1Version_v1990 */

/* START_OF_SYMBOL_DEFINITION v1990 */
/**
 * @summary v1990
 * @constant
 */
export const v1990: number = ASN1Version_v1990; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION v1990 */

/* START_OF_SYMBOL_DEFINITION ASN1Version_v1994 */
/**
 * @summary ASN1Version_v1994
 * @constant
 */
export const ASN1Version_v1994: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ASN1Version_v1994 */

/* START_OF_SYMBOL_DEFINITION v1994 */
/**
 * @summary v1994
 * @constant
 */
export const v1994: number = ASN1Version_v1994; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION v1994 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ASN1Version */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ASN1Version */

/* START_OF_SYMBOL_DEFINITION _decode_ASN1Version */
export const _decode_ASN1Version = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_ASN1Version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ASN1Version */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ASN1Version */

/* START_OF_SYMBOL_DEFINITION _encode_ASN1Version */
export const _encode_ASN1Version = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_ASN1Version */

/* eslint-enable */
