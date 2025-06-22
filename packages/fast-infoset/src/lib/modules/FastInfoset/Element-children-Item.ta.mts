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
import * as $ from '@wildboar/asn1/functional';
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


export const _decode_Element_children_Item = $._decode_inextensible_choice<Element_children_Item>(
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


export const _encode_Element_children_Item = $._encode_choice<Element_children_Item>(
  {
    element: _encode_Element,
    processing_instruction: _encode_ProcessingInstruction,
    unexpanded_entity_reference: _encode_UnexpandedEntityReference,
    character_chunk: _encode_CharacterChunk,
    comment: _encode_Comment,
  },
  $.BER
);


/* eslint-enable */
