/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
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
 * @summary WantBack
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WantBack  ::=  SEQUENCE SIZE (1..MAX) OF
 *     WANT-BACK.&id ({AllWantBacks})
 * ```
 */
export type WantBack = OBJECT_IDENTIFIER[]; // SequenceOfType

let _cached_decoder_for_WantBack: $.ASN1Decoder<WantBack> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WantBack
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WantBack} The decoded data structure.
 */
export function _decode_WantBack(el: _Element) {
  if (!_cached_decoder_for_WantBack) {
    _cached_decoder_for_WantBack = $._decodeSequenceOf<OBJECT_IDENTIFIER>(
      () => $._decodeObjectIdentifier
    );
  }
  return _cached_decoder_for_WantBack(el);
}

let _cached_encoder_for_WantBack: $.ASN1Encoder<WantBack> | null = null;

/**
 * @summary Encodes a(n) WantBack into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WantBack, encoded as an ASN.1 Element.
 */
export function _encode_WantBack(
  value: WantBack,
  elGetter: $.ASN1Encoder<WantBack>
) {
  if (!_cached_encoder_for_WantBack) {
    _cached_encoder_for_WantBack = $._encodeSequenceOf<OBJECT_IDENTIFIER>(
      () => $._encodeObjectIdentifier,
      $.DER
    );
  }
  return _cached_encoder_for_WantBack(value, elGetter);
}


/* eslint-enable */
