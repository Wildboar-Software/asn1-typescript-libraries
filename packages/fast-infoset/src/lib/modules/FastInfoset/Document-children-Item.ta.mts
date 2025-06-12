/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
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
export {
  Element,
  _decode_Element,
  _encode_Element,
} from '../FastInfoset/Element.ta.mjs';
import {
  ProcessingInstruction,
  _decode_ProcessingInstruction,
  _encode_ProcessingInstruction,
} from '../FastInfoset/ProcessingInstruction.ta.mjs';
export {
  ProcessingInstruction,
  _decode_ProcessingInstruction,
  _encode_ProcessingInstruction,
} from '../FastInfoset/ProcessingInstruction.ta.mjs';
import {
  Comment,
  _decode_Comment,
  _encode_Comment,
} from '../FastInfoset/Comment.ta.mjs';
export {
  Comment,
  _decode_Comment,
  _encode_Comment,
} from '../FastInfoset/Comment.ta.mjs';
import {
  DocumentTypeDeclaration,
  _decode_DocumentTypeDeclaration,
  _encode_DocumentTypeDeclaration,
} from '../FastInfoset/DocumentTypeDeclaration.ta.mjs';
export {
  DocumentTypeDeclaration,
  _decode_DocumentTypeDeclaration,
  _encode_DocumentTypeDeclaration,
} from '../FastInfoset/DocumentTypeDeclaration.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Document_children_Item */
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
/* END_OF_SYMBOL_DEFINITION Document_children_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Document_children_Item */
let _cached_decoder_for_Document_children_Item: $.ASN1Decoder<Document_children_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Document_children_Item */

/* START_OF_SYMBOL_DEFINITION _decode_Document_children_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) Document_children_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Document_children_Item} The decoded data structure.
 */
export function _decode_Document_children_Item(el: _Element) {
  if (!_cached_decoder_for_Document_children_Item) {
    _cached_decoder_for_Document_children_Item = $._decode_inextensible_choice<Document_children_Item>(
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
  }
  return _cached_decoder_for_Document_children_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Document_children_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Document_children_Item */
let _cached_encoder_for_Document_children_Item: $.ASN1Encoder<Document_children_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Document_children_Item */

/* START_OF_SYMBOL_DEFINITION _encode_Document_children_Item */
/**
 * @summary Encodes a(n) Document_children_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Document_children_Item, encoded as an ASN.1 Element.
 */
export function _encode_Document_children_Item(
  value: Document_children_Item,
  elGetter: $.ASN1Encoder<Document_children_Item>
) {
  if (!_cached_encoder_for_Document_children_Item) {
    _cached_encoder_for_Document_children_Item = $._encode_choice<Document_children_Item>(
      {
        element: _encode_Element,
        processing_instruction: _encode_ProcessingInstruction,
        comment: _encode_Comment,
        document_type_declaration: _encode_DocumentTypeDeclaration,
      },
      $.BER
    );
  }
  return _cached_encoder_for_Document_children_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Document_children_Item */

/* eslint-enable */
