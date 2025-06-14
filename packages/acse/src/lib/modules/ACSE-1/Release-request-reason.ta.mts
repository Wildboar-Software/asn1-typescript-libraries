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

/* START_OF_SYMBOL_DEFINITION Release_request_reason */
/**
 * @summary Release_request_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Release-request-reason  ::=  INTEGER {normal(0), urgent(1), user-defined(30)
 * }(0 | 1 | 30, ...)
 * ```
 */
export type Release_request_reason = INTEGER;
/* END_OF_SYMBOL_DEFINITION Release_request_reason */

/* START_OF_SYMBOL_DEFINITION Release_request_reason_normal */
/**
 * @summary Release_request_reason_normal
 * @constant
 * @type {number}
 */
export const Release_request_reason_normal: Release_request_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Release_request_reason_normal */

/* START_OF_SYMBOL_DEFINITION normal */
/**
 * @summary Release_request_reason_normal
 * @constant
 * @type {number}
 */
export const normal: Release_request_reason = Release_request_reason_normal; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION normal */

/* START_OF_SYMBOL_DEFINITION Release_request_reason_urgent */
/**
 * @summary Release_request_reason_urgent
 * @constant
 * @type {number}
 */
export const Release_request_reason_urgent: Release_request_reason = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Release_request_reason_urgent */

/* START_OF_SYMBOL_DEFINITION urgent */
/**
 * @summary Release_request_reason_urgent
 * @constant
 * @type {number}
 */
export const urgent: Release_request_reason = Release_request_reason_urgent; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION urgent */

/* START_OF_SYMBOL_DEFINITION Release_request_reason_user_defined */
/**
 * @summary Release_request_reason_user_defined
 * @constant
 * @type {number}
 */
export const Release_request_reason_user_defined: Release_request_reason = 30; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Release_request_reason_user_defined */

/* START_OF_SYMBOL_DEFINITION user_defined */
/**
 * @summary Release_request_reason_user_defined
 * @constant
 * @type {number}
 */
export const user_defined: Release_request_reason = Release_request_reason_user_defined; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION user_defined */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Release_request_reason */
let _cached_decoder_for_Release_request_reason: $.ASN1Decoder<Release_request_reason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Release_request_reason */

/* START_OF_SYMBOL_DEFINITION _decode_Release_request_reason */
/**
 * @summary Decodes an ASN.1 element into a(n) Release_request_reason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Release_request_reason} The decoded data structure.
 */
export function _decode_Release_request_reason(el: _Element) {
  if (!_cached_decoder_for_Release_request_reason) {
    _cached_decoder_for_Release_request_reason = $._decodeInteger;
  }
  return _cached_decoder_for_Release_request_reason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Release_request_reason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Release_request_reason */
let _cached_encoder_for_Release_request_reason: $.ASN1Encoder<Release_request_reason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Release_request_reason */

/* START_OF_SYMBOL_DEFINITION _encode_Release_request_reason */
/**
 * @summary Encodes a(n) Release_request_reason into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Release_request_reason, encoded as an ASN.1 Element.
 */
export function _encode_Release_request_reason(
  value: Release_request_reason,
  elGetter: $.ASN1Encoder<Release_request_reason>
) {
  if (!_cached_encoder_for_Release_request_reason) {
    _cached_encoder_for_Release_request_reason = $._encodeInteger;
  }
  return _cached_encoder_for_Release_request_reason(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Release_request_reason */

/* eslint-enable */
