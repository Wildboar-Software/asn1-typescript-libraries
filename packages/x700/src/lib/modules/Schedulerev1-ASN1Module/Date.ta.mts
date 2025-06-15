/* eslint-disable */
import {
    VisibleString,
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

/* START_OF_SYMBOL_DEFINITION Date */
/**
 * @summary Date
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Date  ::=  VisibleString(SIZE (8))
 * ```
 */
export type Date = VisibleString; // VisibleString
/* END_OF_SYMBOL_DEFINITION Date */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Date */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Date */

/* START_OF_SYMBOL_DEFINITION _decode_Date */
export const _decode_Date = $._decodeVisibleString;
/* END_OF_SYMBOL_DEFINITION _decode_Date */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Date */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Date */

/* START_OF_SYMBOL_DEFINITION _encode_Date */
export const _encode_Date = $._encodeVisibleString;

/* END_OF_SYMBOL_DEFINITION _encode_Date */

/* eslint-enable */
