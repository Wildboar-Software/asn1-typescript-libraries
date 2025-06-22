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
  PartialAttribute,
  _decode_PartialAttribute,
  _encode_PartialAttribute,
} from '../Lightweight-Directory-Access-Protocol-V3/PartialAttribute.ta.mjs';

/**
 * @summary PartialAttributeList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PartialAttributeList  ::=  SEQUENCE OF partialAttribute PartialAttribute
 * ```
 */
export type PartialAttributeList = PartialAttribute[]; // SequenceOfType


let _cached_decoder_for_PartialAttributeList: $.ASN1Decoder<PartialAttributeList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PartialAttributeList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PartialAttributeList} The decoded data structure.
 */
export function _decode_PartialAttributeList(el: _Element) {
  if (!_cached_decoder_for_PartialAttributeList) {
    _cached_decoder_for_PartialAttributeList = $._decodeSequenceOf<PartialAttribute>(
      () => _decode_PartialAttribute
    );
  }
  return _cached_decoder_for_PartialAttributeList(el);
}


let _cached_encoder_for_PartialAttributeList: $.ASN1Encoder<PartialAttributeList> | null = null;


/**
 * @summary Encodes a(n) PartialAttributeList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartialAttributeList, encoded as an ASN.1 Element.
 */
export function _encode_PartialAttributeList(
  value: PartialAttributeList,
  elGetter: $.ASN1Encoder<PartialAttributeList>
) {
  if (!_cached_encoder_for_PartialAttributeList) {
    _cached_encoder_for_PartialAttributeList = $._encodeSequenceOf<PartialAttribute>(
      () => _encode_PartialAttribute,
      $.BER
    );
  }
  return _cached_encoder_for_PartialAttributeList(value, elGetter);
}


/* eslint-enable */
