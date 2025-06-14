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

/* START_OF_SYMBOL_DEFINITION FADU_Identity_relative */
/**
 * @summary FADU_Identity_relative
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FADU-Identity-relative ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type FADU_Identity_relative = INTEGER;
/* END_OF_SYMBOL_DEFINITION FADU_Identity_relative */

/* START_OF_SYMBOL_DEFINITION FADU_Identity_relative_previous */
/**
 * @summary FADU_Identity_relative_previous
 * @constant
 * @type {number}
 */
export const FADU_Identity_relative_previous: FADU_Identity_relative = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FADU_Identity_relative_previous */

/* START_OF_SYMBOL_DEFINITION previous */
/**
 * @summary FADU_Identity_relative_previous
 * @constant
 * @type {number}
 */
export const previous: FADU_Identity_relative = FADU_Identity_relative_previous; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION previous */

/* START_OF_SYMBOL_DEFINITION FADU_Identity_relative_current */
/**
 * @summary FADU_Identity_relative_current
 * @constant
 * @type {number}
 */
export const FADU_Identity_relative_current: FADU_Identity_relative = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FADU_Identity_relative_current */

/* START_OF_SYMBOL_DEFINITION current */
/**
 * @summary FADU_Identity_relative_current
 * @constant
 * @type {number}
 */
export const current: FADU_Identity_relative = FADU_Identity_relative_current; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION current */

/* START_OF_SYMBOL_DEFINITION FADU_Identity_relative_next */
/**
 * @summary FADU_Identity_relative_next
 * @constant
 * @type {number}
 */
export const FADU_Identity_relative_next: FADU_Identity_relative = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FADU_Identity_relative_next */

/* START_OF_SYMBOL_DEFINITION next */
/**
 * @summary FADU_Identity_relative_next
 * @constant
 * @type {number}
 */
export const next: FADU_Identity_relative = FADU_Identity_relative_next; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION next */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FADU_Identity_relative */
let _cached_decoder_for_FADU_Identity_relative: $.ASN1Decoder<FADU_Identity_relative> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FADU_Identity_relative */

/* START_OF_SYMBOL_DEFINITION _decode_FADU_Identity_relative */
/**
 * @summary Decodes an ASN.1 element into a(n) FADU_Identity_relative
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FADU_Identity_relative} The decoded data structure.
 */
export function _decode_FADU_Identity_relative(el: _Element) {
  if (!_cached_decoder_for_FADU_Identity_relative) {
    _cached_decoder_for_FADU_Identity_relative = $._decodeInteger;
  }
  return _cached_decoder_for_FADU_Identity_relative(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FADU_Identity_relative */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FADU_Identity_relative */
let _cached_encoder_for_FADU_Identity_relative: $.ASN1Encoder<FADU_Identity_relative> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FADU_Identity_relative */

/* START_OF_SYMBOL_DEFINITION _encode_FADU_Identity_relative */
/**
 * @summary Encodes a(n) FADU_Identity_relative into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FADU_Identity_relative, encoded as an ASN.1 Element.
 */
export function _encode_FADU_Identity_relative(
  value: FADU_Identity_relative,
  elGetter: $.ASN1Encoder<FADU_Identity_relative>
) {
  if (!_cached_encoder_for_FADU_Identity_relative) {
    _cached_encoder_for_FADU_Identity_relative = $._encodeInteger;
  }
  return _cached_encoder_for_FADU_Identity_relative(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FADU_Identity_relative */

/* eslint-enable */
