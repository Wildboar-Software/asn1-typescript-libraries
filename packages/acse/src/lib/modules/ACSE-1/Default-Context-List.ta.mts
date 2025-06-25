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
  Default_Context_List_Item,
  _decode_Default_Context_List_Item,
  _encode_Default_Context_List_Item,
} from '../ACSE-1/Default-Context-List-Item.ta.mjs';
/**
 * @summary Default_Context_List
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Default-Context-List  ::=
 *   SEQUENCE OF
 *     SEQUENCE {abstract-syntax-name  [0] IMPLICIT Abstract-syntax-name OPTIONAL,
 *               transfer-syntax-name  [1] IMPLICIT Transfer-syntax-name
 *     }
 * ```
 */
export type Default_Context_List = Default_Context_List_Item[]; // SequenceOfType

let _cached_decoder_for_Default_Context_List: $.ASN1Decoder<Default_Context_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Default_Context_List
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Default_Context_List} The decoded data structure.
 */
export function _decode_Default_Context_List(el: _Element): Default_Context_List {
  if (!_cached_decoder_for_Default_Context_List) {
    _cached_decoder_for_Default_Context_List = $._decodeSequenceOf<Default_Context_List_Item>(
      () => _decode_Default_Context_List_Item
    );
  }
  return _cached_decoder_for_Default_Context_List(el);
}

let _cached_encoder_for_Default_Context_List: $.ASN1Encoder<Default_Context_List> | null = null;

/**
 * @summary Encodes a(n) Default_Context_List into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Default_Context_List, encoded as an ASN.1 Element.
 */
export function _encode_Default_Context_List(
  value: Default_Context_List,
  elGetter: $.ASN1Encoder<Default_Context_List>
): _Element {
  if (!_cached_encoder_for_Default_Context_List) {
    _cached_encoder_for_Default_Context_List = $._encodeSequenceOf<Default_Context_List_Item>(
      () => _encode_Default_Context_List_Item,
      $.BER
    );
  }
  return _cached_encoder_for_Default_Context_List(value, elGetter);
}


/* eslint-enable */
