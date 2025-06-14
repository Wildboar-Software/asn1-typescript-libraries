/* eslint-disable */
import {
  OCTET_STRING,
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

/* START_OF_SYMBOL_DEFINITION NonEmptyOctetString */
/**
 * @summary NonEmptyOctetString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonEmptyOctetString  ::=  OCTET STRING(SIZE (1..four-gig))
 * ```
 */
export type NonEmptyOctetString = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION NonEmptyOctetString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NonEmptyOctetString */
let _cached_decoder_for_NonEmptyOctetString: $.ASN1Decoder<NonEmptyOctetString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NonEmptyOctetString */

/* START_OF_SYMBOL_DEFINITION _decode_NonEmptyOctetString */
/**
 * @summary Decodes an ASN.1 element into a(n) NonEmptyOctetString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonEmptyOctetString} The decoded data structure.
 */
export function _decode_NonEmptyOctetString(el: _Element) {
  if (!_cached_decoder_for_NonEmptyOctetString) {
    _cached_decoder_for_NonEmptyOctetString = $._decodeOctetString;
  }
  return _cached_decoder_for_NonEmptyOctetString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NonEmptyOctetString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NonEmptyOctetString */
let _cached_encoder_for_NonEmptyOctetString: $.ASN1Encoder<NonEmptyOctetString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NonEmptyOctetString */

/* START_OF_SYMBOL_DEFINITION _encode_NonEmptyOctetString */
/**
 * @summary Encodes a(n) NonEmptyOctetString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonEmptyOctetString, encoded as an ASN.1 Element.
 */
export function _encode_NonEmptyOctetString(
  value: NonEmptyOctetString,
  elGetter: $.ASN1Encoder<NonEmptyOctetString>
) {
  if (!_cached_encoder_for_NonEmptyOctetString) {
    _cached_encoder_for_NonEmptyOctetString = $._encodeOctetString;
  }
  return _cached_encoder_for_NonEmptyOctetString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NonEmptyOctetString */

/* eslint-enable */
