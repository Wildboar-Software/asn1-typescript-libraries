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
  Document_Type_Name,
  _decode_Document_Type_Name,
  _encode_Document_Type_Name,
} from '../ISO8571-FTAM/Document-Type-Name.ta.mjs';
import {
  Abstract_Syntax_Name,
  _decode_Abstract_Syntax_Name,
  _encode_Abstract_Syntax_Name,
} from '../ISO8571-FTAM/Abstract-Syntax-Name.ta.mjs';

/**
 * @summary Contents_Type_List_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Contents-Type-List-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Contents_Type_List_Item =
  | { document_type_name: Document_Type_Name } /* CHOICE_ALT_ROOT */
  | { abstract_Syntax_name: Abstract_Syntax_Name } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_Contents_Type_List_Item: $.ASN1Decoder<Contents_Type_List_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Contents_Type_List_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Contents_Type_List_Item} The decoded data structure.
 */
export function _decode_Contents_Type_List_Item(el: _Element) {
  if (!_cached_decoder_for_Contents_Type_List_Item) {
    _cached_decoder_for_Contents_Type_List_Item = $._decode_inextensible_choice<Contents_Type_List_Item>(
      {
        'APPLICATION 14': ['document_type_name', _decode_Document_Type_Name],
        'APPLICATION 0': ['abstract_Syntax_name', _decode_Abstract_Syntax_Name],
      }
    );
  }
  return _cached_decoder_for_Contents_Type_List_Item(el);
}


let _cached_encoder_for_Contents_Type_List_Item: $.ASN1Encoder<Contents_Type_List_Item> | null = null;


/**
 * @summary Encodes a(n) Contents_Type_List_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Contents_Type_List_Item, encoded as an ASN.1 Element.
 */
export function _encode_Contents_Type_List_Item(
  value: Contents_Type_List_Item,
  elGetter: $.ASN1Encoder<Contents_Type_List_Item>
) {
  if (!_cached_encoder_for_Contents_Type_List_Item) {
    _cached_encoder_for_Contents_Type_List_Item = $._encode_choice<Contents_Type_List_Item>(
      {
        document_type_name: _encode_Document_Type_Name,
        abstract_Syntax_name: _encode_Abstract_Syntax_Name,
      },
      $.BER
    );
  }
  return _cached_encoder_for_Contents_Type_List_Item(value, elGetter);
}


/* eslint-enable */
