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

/* START_OF_SYMBOL_DEFINITION HeaderVersion_header_minor */
/**
 * @summary HeaderVersion_header_minor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HeaderVersion-header-minor ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type HeaderVersion_header_minor = INTEGER;
/* END_OF_SYMBOL_DEFINITION HeaderVersion_header_minor */

/* START_OF_SYMBOL_DEFINITION HeaderVersion_header_minor_version0 */
/**
 * @summary HeaderVersion_header_minor_version0
 * @constant
 * @type {number}
 */
export const HeaderVersion_header_minor_version0: HeaderVersion_header_minor = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION HeaderVersion_header_minor_version0 */

/* START_OF_SYMBOL_DEFINITION version0 */
/**
 * @summary HeaderVersion_header_minor_version0
 * @constant
 * @type {number}
 */
export const version0: HeaderVersion_header_minor = HeaderVersion_header_minor_version0; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION version0 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HeaderVersion_header_minor */
let _cached_decoder_for_HeaderVersion_header_minor: $.ASN1Decoder<HeaderVersion_header_minor> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HeaderVersion_header_minor */

/* START_OF_SYMBOL_DEFINITION _decode_HeaderVersion_header_minor */
/**
 * @summary Decodes an ASN.1 element into a(n) HeaderVersion_header_minor
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HeaderVersion_header_minor} The decoded data structure.
 */
export function _decode_HeaderVersion_header_minor(el: _Element) {
  if (!_cached_decoder_for_HeaderVersion_header_minor) {
    _cached_decoder_for_HeaderVersion_header_minor = $._decodeInteger;
  }
  return _cached_decoder_for_HeaderVersion_header_minor(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HeaderVersion_header_minor */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HeaderVersion_header_minor */
let _cached_encoder_for_HeaderVersion_header_minor: $.ASN1Encoder<HeaderVersion_header_minor> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HeaderVersion_header_minor */

/* START_OF_SYMBOL_DEFINITION _encode_HeaderVersion_header_minor */
/**
 * @summary Encodes a(n) HeaderVersion_header_minor into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HeaderVersion_header_minor, encoded as an ASN.1 Element.
 */
export function _encode_HeaderVersion_header_minor(
  value: HeaderVersion_header_minor,
  elGetter: $.ASN1Encoder<HeaderVersion_header_minor>
) {
  if (!_cached_encoder_for_HeaderVersion_header_minor) {
    _cached_encoder_for_HeaderVersion_header_minor = $._encodeInteger;
  }
  return _cached_encoder_for_HeaderVersion_header_minor(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HeaderVersion_header_minor */

/* eslint-enable */
