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
  Contents_Type_List_Item,
  _decode_Contents_Type_List_Item,
  _encode_Contents_Type_List_Item,
} from '../ISO8571-FTAM/Contents-Type-List-Item.ta.mjs';

/**
 * @summary Contents_Type_List
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Contents-Type-List  ::=
 *   [7] IMPLICIT
 *     SEQUENCE OF
 *       CHOICE {document-type-name    Document-Type-Name,
 *               abstract-Syntax-name  Abstract-Syntax-Name}
 * ```
 */
export type Contents_Type_List = Contents_Type_List_Item[]; // SequenceOfType


let _cached_decoder_for_Contents_Type_List: $.ASN1Decoder<Contents_Type_List> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Contents_Type_List
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Contents_Type_List} The decoded data structure.
 */
export function _decode_Contents_Type_List(el: _Element) {
  if (!_cached_decoder_for_Contents_Type_List) {
    _cached_decoder_for_Contents_Type_List = $._decode_implicit<Contents_Type_List>(
      () =>
        $._decodeSequenceOf<Contents_Type_List_Item>(
          () => _decode_Contents_Type_List_Item
        )
    );
  }
  return _cached_decoder_for_Contents_Type_List(el);
}


let _cached_encoder_for_Contents_Type_List: $.ASN1Encoder<Contents_Type_List> | null = null;


/**
 * @summary Encodes a(n) Contents_Type_List into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Contents_Type_List, encoded as an ASN.1 Element.
 */
export function _encode_Contents_Type_List(
  value: Contents_Type_List,
  elGetter: $.ASN1Encoder<Contents_Type_List>
) {
  if (!_cached_encoder_for_Contents_Type_List) {
    _cached_encoder_for_Contents_Type_List = $._encode_implicit(
      _TagClass.context,
      7,
      () =>
        $._encodeSequenceOf<Contents_Type_List_Item>(
          () => _encode_Contents_Type_List_Item,
          $.BER
        ),
      $.BER
    );
  }
  return _cached_encoder_for_Contents_Type_List(value, elGetter);
}


/* eslint-enable */
