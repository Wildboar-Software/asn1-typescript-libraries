/* eslint-disable */
import {
    NumericString,
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

/* START_OF_SYMBOL_DEFINITION X121Address */
/**
 * @summary X121Address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X121Address  ::=  NumericString(SIZE (1..ub-x121-address-length))
 * ```
 */
export type X121Address = NumericString; // NumericString
/* END_OF_SYMBOL_DEFINITION X121Address */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_X121Address */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_X121Address */

/* START_OF_SYMBOL_DEFINITION _decode_X121Address */
export const _decode_X121Address = $._decodeNumericString;
/* END_OF_SYMBOL_DEFINITION _decode_X121Address */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_X121Address */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_X121Address */

/* START_OF_SYMBOL_DEFINITION _encode_X121Address */
export const _encode_X121Address = $._encodeNumericString;

/* END_OF_SYMBOL_DEFINITION _encode_X121Address */

/* eslint-enable */
