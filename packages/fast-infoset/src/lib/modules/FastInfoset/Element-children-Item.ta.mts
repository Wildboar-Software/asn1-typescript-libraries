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
  Element,
  _decode_Element,
  _encode_Element,
} from '../FastInfoset/Element.ta.mjs';
import {
  ProcessingInstruction,
  _decode_ProcessingInstruction,
  _encode_ProcessingInstruction,
} from '../FastInfoset/ProcessingInstruction.ta.mjs';
import {
  UnexpandedEntityReference,
  _decode_UnexpandedEntityReference,
  _encode_UnexpandedEntityReference,
} from '../FastInfoset/UnexpandedEntityReference.ta.mjs';
import {
  CharacterChunk,
  _decode_CharacterChunk,
  _encode_CharacterChunk,
} from '../FastInfoset/CharacterChunk.ta.mjs';
import {
  Comment,
  _decode_Comment,
  _encode_Comment,
} from '../FastInfoset/Comment.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Element_children_Item */
/**
 * @summary Element_children_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Element-children-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Element_children_Item =
  | { element: Element } /* CHOICE_ALT_ROOT */
  | { processing_instruction: ProcessingInstruction } /* CHOICE_ALT_ROOT */
  | {
      unexpanded_entity_reference: UnexpandedEntityReference;
    } /* CHOICE_ALT_ROOT */
  | { character_chunk: CharacterChunk } /* CHOICE_ALT_ROOT */
  | { comment: Comment } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Element_children_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Element_children_Item */
let _cached_decoder_for_Element_children_Item: $.ASN1Decoder<Element_children_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Element_children_Item */

/* START_OF_SYMBOL_DEFINITION _decode_Element_children_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) Element_children_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Element_children_Item} The decoded data structure.
 */
export function _decode_Element_children_Item(el: _Element) {
  if (!_cached_decoder_for_Element_children_Item) {
    _cached_decoder_for_Element_children_Item = $._decode_inextensible_choice<Element_children_Item>(
      {
        'CONTEXT 0': ['element', _decode_Element],
        'CONTEXT 1': ['processing_instruction', _decode_ProcessingInstruction],
        'CONTEXT 2': [
          'unexpanded_entity_reference',
          _decode_UnexpandedEntityReference,
        ],
        'CONTEXT 3': ['character_chunk', _decode_CharacterChunk],
        'CONTEXT 4': ['comment', _decode_Comment],
      }
    );
  }
  return _cached_decoder_for_Element_children_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Element_children_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Element_children_Item */
let _cached_encoder_for_Element_children_Item: $.ASN1Encoder<Element_children_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Element_children_Item */

/* START_OF_SYMBOL_DEFINITION _encode_Element_children_Item */
/**
 * @summary Encodes a(n) Element_children_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Element_children_Item, encoded as an ASN.1 Element.
 */
export function _encode_Element_children_Item(
  value: Element_children_Item,
  elGetter: $.ASN1Encoder<Element_children_Item>
) {
  if (!_cached_encoder_for_Element_children_Item) {
    _cached_encoder_for_Element_children_Item = $._encode_choice<Element_children_Item>(
      {
        element: _encode_Element,
        processing_instruction: _encode_ProcessingInstruction,
        unexpanded_entity_reference: _encode_UnexpandedEntityReference,
        character_chunk: _encode_CharacterChunk,
        comment: _encode_Comment,
      },
      $.BER
    );
  }
  return _cached_encoder_for_Element_children_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Element_children_Item */

/* eslint-enable */
