/* eslint-disable */
import {
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
import {
  NonEmptyOctetString,
  _decode_NonEmptyOctetString,
  _encode_NonEmptyOctetString,
} from '../FastInfoset/NonEmptyOctetString.ta.mjs';
/* START_OF_SYMBOL_DEFINITION URI */
/**
 * @summary URI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * URI  ::=  NonEmptyOctetString
 * ```
 */
export type URI = NonEmptyOctetString; // DefinedType
/* END_OF_SYMBOL_DEFINITION URI */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_URI */
let _cached_decoder_for_URI: $.ASN1Decoder<URI> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_URI */

/* START_OF_SYMBOL_DEFINITION _decode_URI */
/**
 * @summary Decodes an ASN.1 element into a(n) URI
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {URI} The decoded data structure.
 */
export function _decode_URI(el: _Element) {
  if (!_cached_decoder_for_URI) {
    _cached_decoder_for_URI = _decode_NonEmptyOctetString;
  }
  return _cached_decoder_for_URI(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_URI */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_URI */
let _cached_encoder_for_URI: $.ASN1Encoder<URI> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_URI */

/* START_OF_SYMBOL_DEFINITION _encode_URI */
/**
 * @summary Encodes a(n) URI into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The URI, encoded as an ASN.1 Element.
 */
export function _encode_URI(value: URI, elGetter: $.ASN1Encoder<URI>) {
  if (!_cached_encoder_for_URI) {
    _cached_encoder_for_URI = _encode_NonEmptyOctetString;
  }
  return _cached_encoder_for_URI(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_URI */

/* eslint-enable */
