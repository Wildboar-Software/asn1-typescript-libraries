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
  Context_list_Item,
  _decode_Context_list_Item,
  _encode_Context_list_Item,
} from '../ACSE-1/Context-list-Item.ta.mjs';
/**
 * @summary Context_list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Context-list  ::=
 *   SEQUENCE OF
 *     SEQUENCE {pci                Presentation-context-identifier,
 *               abstract-syntax    Abstract-syntax-name,
 *               transfer-syntaxes  SEQUENCE OF Transfer-syntax-name}
 * ```
 */
export type Context_list = Context_list_Item[]; // SequenceOfType

let _cached_decoder_for_Context_list: $.ASN1Decoder<Context_list> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Context_list
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Context_list} The decoded data structure.
 */
export function _decode_Context_list(el: _Element): Context_list {
  if (!_cached_decoder_for_Context_list) {
    _cached_decoder_for_Context_list = $._decodeSequenceOf<Context_list_Item>(
      () => _decode_Context_list_Item
    );
  }
  return _cached_decoder_for_Context_list(el);
}

let _cached_encoder_for_Context_list: $.ASN1Encoder<Context_list> | null = null;

/**
 * @summary Encodes a(n) Context_list into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Context_list, encoded as an ASN.1 Element.
 */
export function _encode_Context_list(
  value: Context_list,
  elGetter: $.ASN1Encoder<Context_list>
): _Element {
  if (!_cached_encoder_for_Context_list) {
    _cached_encoder_for_Context_list = $._encodeSequenceOf<Context_list_Item>(
      () => _encode_Context_list_Item,
      $.BER
    );
  }
  return _cached_encoder_for_Context_list(value, elGetter);
}


/* eslint-enable */
