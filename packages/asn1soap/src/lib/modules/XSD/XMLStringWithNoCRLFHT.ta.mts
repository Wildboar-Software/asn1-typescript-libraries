/* eslint-disable */
import {
  UTF8String,
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

/* START_OF_SYMBOL_DEFINITION XMLStringWithNoCRLFHT */
/**
 * @summary XMLStringWithNoCRLFHT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * XMLStringWithNoCRLFHT  ::=  UTF8String (FROM(
 * {0, 0, 0, 32} .. {0, 0, 215, 255} |
 * {0, 0, 224, 0} .. {0, 0, 255, 253} |
 * {0, 1, 0, 0} .. {0, 16, 255, 253}))
 * ```
 */
export type XMLStringWithNoCRLFHT = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION XMLStringWithNoCRLFHT */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_XMLStringWithNoCRLFHT */
let _cached_decoder_for_XMLStringWithNoCRLFHT: $.ASN1Decoder<XMLStringWithNoCRLFHT> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_XMLStringWithNoCRLFHT */

/* START_OF_SYMBOL_DEFINITION _decode_XMLStringWithNoCRLFHT */
/**
 * @summary Decodes an ASN.1 element into a(n) XMLStringWithNoCRLFHT
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {XMLStringWithNoCRLFHT} The decoded data structure.
 */
export function _decode_XMLStringWithNoCRLFHT(el: _Element) {
  if (!_cached_decoder_for_XMLStringWithNoCRLFHT) {
    _cached_decoder_for_XMLStringWithNoCRLFHT = $._decodeUTF8String;
  }
  return _cached_decoder_for_XMLStringWithNoCRLFHT(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_XMLStringWithNoCRLFHT */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_XMLStringWithNoCRLFHT */
let _cached_encoder_for_XMLStringWithNoCRLFHT: $.ASN1Encoder<XMLStringWithNoCRLFHT> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_XMLStringWithNoCRLFHT */

/* START_OF_SYMBOL_DEFINITION _encode_XMLStringWithNoCRLFHT */
/**
 * @summary Encodes a(n) XMLStringWithNoCRLFHT into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The XMLStringWithNoCRLFHT, encoded as an ASN.1 Element.
 */
export function _encode_XMLStringWithNoCRLFHT(
  value: XMLStringWithNoCRLFHT,
  elGetter: $.ASN1Encoder<XMLStringWithNoCRLFHT>
) {
  if (!_cached_encoder_for_XMLStringWithNoCRLFHT) {
    _cached_encoder_for_XMLStringWithNoCRLFHT = $._encodeUTF8String;
  }
  return _cached_encoder_for_XMLStringWithNoCRLFHT(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_XMLStringWithNoCRLFHT */

/* eslint-enable */
