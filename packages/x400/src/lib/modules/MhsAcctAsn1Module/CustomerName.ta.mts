/* eslint-disable */
import {
    UniversalString,
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

/* START_OF_SYMBOL_DEFINITION CustomerName */
/**
 * @summary CustomerName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CustomerName  ::=  UniversalString
 * ```
 */
export type CustomerName = UniversalString; // UniversalString
/* END_OF_SYMBOL_DEFINITION CustomerName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CustomerName */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CustomerName */

/* START_OF_SYMBOL_DEFINITION _decode_CustomerName */
export const _decode_CustomerName = $._decodeUniversalString;
/* END_OF_SYMBOL_DEFINITION _decode_CustomerName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CustomerName */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CustomerName */

/* START_OF_SYMBOL_DEFINITION _encode_CustomerName */
export const _encode_CustomerName = $._encodeUniversalString;

/* END_OF_SYMBOL_DEFINITION _encode_CustomerName */

/* eslint-enable */
