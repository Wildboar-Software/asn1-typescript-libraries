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
  Comment,
  _decode_Comment,
  _encode_Comment,
} from '../FastInfoset/Comment.ta.mjs';
import {
  DocumentTypeDeclaration,
  _decode_DocumentTypeDeclaration,
  _encode_DocumentTypeDeclaration,
} from '../FastInfoset/DocumentTypeDeclaration.ta.mjs';
/**
 * @summary Document_children_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Document-children-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Document_children_Item =
  | { element: Element } /* CHOICE_ALT_ROOT */
  | { processing_instruction: ProcessingInstruction } /* CHOICE_ALT_ROOT */
  | { comment: Comment } /* CHOICE_ALT_ROOT */
  | {
      document_type_declaration: DocumentTypeDeclaration;
    } /* CHOICE_ALT_ROOT */;


export const _decode_Document_children_Item = $._decode_inextensible_choice<Document_children_Item>(
  {
    'CONTEXT 0': ['element', _decode_Element],
    'CONTEXT 1': ['processing_instruction', _decode_ProcessingInstruction],
    'CONTEXT 2': ['comment', _decode_Comment],
    'CONTEXT 3': [
      'document_type_declaration',
      _decode_DocumentTypeDeclaration,
    ],
  }
);


export const _encode_Document_children_Item = $._encode_choice<Document_children_Item>(
  {
    element: _encode_Element,
    processing_instruction: _encode_ProcessingInstruction,
    comment: _encode_Comment,
    document_type_declaration: _encode_DocumentTypeDeclaration,
  },
  $.BER
);


/* eslint-enable */
