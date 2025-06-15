/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION FilterSize */
/**
 * @summary FilterSize
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FilterSize  ::=  INTEGER(0..32)
 * ```
 */
export type FilterSize = INTEGER;
/* END_OF_SYMBOL_DEFINITION FilterSize */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterSize */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterSize */

/* START_OF_SYMBOL_DEFINITION _decode_FilterSize */
export const _decode_FilterSize = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_FilterSize */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterSize */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterSize */

/* START_OF_SYMBOL_DEFINITION _encode_FilterSize */
export const _encode_FilterSize = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_FilterSize */

/* eslint-enable */
