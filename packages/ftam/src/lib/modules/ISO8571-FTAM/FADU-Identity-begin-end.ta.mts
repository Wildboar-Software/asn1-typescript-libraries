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

/* START_OF_SYMBOL_DEFINITION FADU_Identity_begin_end */
/**
 * @summary FADU_Identity_begin_end
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FADU-Identity-begin-end ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type FADU_Identity_begin_end = INTEGER;
/* END_OF_SYMBOL_DEFINITION FADU_Identity_begin_end */

/* START_OF_SYMBOL_DEFINITION FADU_Identity_begin_end_begin */
/**
 * @summary FADU_Identity_begin_end_begin
 * @constant
 * @type {number}
 */
export const FADU_Identity_begin_end_begin: FADU_Identity_begin_end = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FADU_Identity_begin_end_begin */

/* START_OF_SYMBOL_DEFINITION begin */
/**
 * @summary FADU_Identity_begin_end_begin
 * @constant
 * @type {number}
 */
export const begin: FADU_Identity_begin_end = FADU_Identity_begin_end_begin; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION begin */

/* START_OF_SYMBOL_DEFINITION FADU_Identity_begin_end_end */
/**
 * @summary FADU_Identity_begin_end_end
 * @constant
 * @type {number}
 */
export const FADU_Identity_begin_end_end: FADU_Identity_begin_end = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FADU_Identity_begin_end_end */

/* START_OF_SYMBOL_DEFINITION end */
/**
 * @summary FADU_Identity_begin_end_end
 * @constant
 * @type {number}
 */
export const end: FADU_Identity_begin_end = FADU_Identity_begin_end_end; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION end */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FADU_Identity_begin_end */
let _cached_decoder_for_FADU_Identity_begin_end: $.ASN1Decoder<FADU_Identity_begin_end> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FADU_Identity_begin_end */

/* START_OF_SYMBOL_DEFINITION _decode_FADU_Identity_begin_end */
/**
 * @summary Decodes an ASN.1 element into a(n) FADU_Identity_begin_end
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FADU_Identity_begin_end} The decoded data structure.
 */
export function _decode_FADU_Identity_begin_end(el: _Element) {
  if (!_cached_decoder_for_FADU_Identity_begin_end) {
    _cached_decoder_for_FADU_Identity_begin_end = $._decodeInteger;
  }
  return _cached_decoder_for_FADU_Identity_begin_end(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FADU_Identity_begin_end */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FADU_Identity_begin_end */
let _cached_encoder_for_FADU_Identity_begin_end: $.ASN1Encoder<FADU_Identity_begin_end> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FADU_Identity_begin_end */

/* START_OF_SYMBOL_DEFINITION _encode_FADU_Identity_begin_end */
/**
 * @summary Encodes a(n) FADU_Identity_begin_end into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FADU_Identity_begin_end, encoded as an ASN.1 Element.
 */
export function _encode_FADU_Identity_begin_end(
  value: FADU_Identity_begin_end,
  elGetter: $.ASN1Encoder<FADU_Identity_begin_end>
) {
  if (!_cached_encoder_for_FADU_Identity_begin_end) {
    _cached_encoder_for_FADU_Identity_begin_end = $._encodeInteger;
  }
  return _cached_encoder_for_FADU_Identity_begin_end(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FADU_Identity_begin_end */

/* eslint-enable */
