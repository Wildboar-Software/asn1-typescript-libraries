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

/* START_OF_SYMBOL_DEFINITION OctetString */
/**
 * @summary OctetString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OctetString  ::=  OCTET STRING
 * ```
 */
export type OctetString = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION OctetString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OctetString */
let _cached_decoder_for_OctetString: $.ASN1Decoder<OctetString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OctetString */

/* START_OF_SYMBOL_DEFINITION _decode_OctetString */
/**
 * @summary Decodes an ASN.1 element into a(n) OctetString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OctetString} The decoded data structure.
 */
export function _decode_OctetString(el: _Element) {
  if (!_cached_decoder_for_OctetString) {
    _cached_decoder_for_OctetString = $._decodeOctetString;
  }
  return _cached_decoder_for_OctetString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OctetString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OctetString */
let _cached_encoder_for_OctetString: $.ASN1Encoder<OctetString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OctetString */

/* START_OF_SYMBOL_DEFINITION _encode_OctetString */
/**
 * @summary Encodes a(n) OctetString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OctetString, encoded as an ASN.1 Element.
 */
export function _encode_OctetString(
  value: OctetString,
  elGetter: $.ASN1Encoder<OctetString>
) {
  if (!_cached_encoder_for_OctetString) {
    _cached_encoder_for_OctetString = $._encodeOctetString;
  }
  return _cached_encoder_for_OctetString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OctetString */

/* eslint-enable */
