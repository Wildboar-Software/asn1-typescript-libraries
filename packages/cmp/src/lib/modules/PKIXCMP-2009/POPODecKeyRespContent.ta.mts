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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary POPODecKeyRespContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * POPODecKeyRespContent  ::=  SEQUENCE OF INTEGER
 * ```
 */
export type POPODecKeyRespContent = INTEGER[]; // SequenceOfType


let _cached_decoder_for_POPODecKeyRespContent: $.ASN1Decoder<POPODecKeyRespContent> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) POPODecKeyRespContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {POPODecKeyRespContent} The decoded data structure.
 */
export function _decode_POPODecKeyRespContent(el: _Element): POPODecKeyRespContent {
  if (!_cached_decoder_for_POPODecKeyRespContent) {
    _cached_decoder_for_POPODecKeyRespContent = $._decodeSequenceOf<INTEGER>(
      () => $._decodeInteger
    );
  }
  return _cached_decoder_for_POPODecKeyRespContent(el);
}


let _cached_encoder_for_POPODecKeyRespContent: $.ASN1Encoder<POPODecKeyRespContent> | null = null;


/**
 * @summary Encodes a(n) POPODecKeyRespContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The POPODecKeyRespContent, encoded as an ASN.1 Element.
 */
export function _encode_POPODecKeyRespContent(
  value: POPODecKeyRespContent,
  elGetter: $.ASN1Encoder<POPODecKeyRespContent>
): _Element {
  if (!_cached_encoder_for_POPODecKeyRespContent) {
    _cached_encoder_for_POPODecKeyRespContent = $._encodeSequenceOf<INTEGER>(
      () => $._encodeInteger,
      $.BER
    );
  }
  return _cached_encoder_for_POPODecKeyRespContent(value, elGetter);
}


/* eslint-enable */
