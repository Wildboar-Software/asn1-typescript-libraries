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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  NonEmptyOctetString,
  _decode_NonEmptyOctetString,
  _encode_NonEmptyOctetString,
} from '../FastInfoset/NonEmptyOctetString.ta.mjs';
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

let _cached_decoder_for_URI: $.ASN1Decoder<URI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) URI
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {URI} The decoded data structure.
 */
export function _decode_URI(el: _Element): URI {
  if (!_cached_decoder_for_URI) {
    _cached_decoder_for_URI = _decode_NonEmptyOctetString;
  }
  return _cached_decoder_for_URI(el);
}

let _cached_encoder_for_URI: $.ASN1Encoder<URI> | null = null;

/**
 * @summary Encodes a(n) URI into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The URI, encoded as an ASN.1 Element.
 */
export function _encode_URI(value: URI, elGetter: $.ASN1Encoder<URI>): _Element {
  if (!_cached_encoder_for_URI) {
    _cached_encoder_for_URI = _encode_NonEmptyOctetString;
  }
  return _cached_encoder_for_URI(value, elGetter);
}


/* eslint-enable */
