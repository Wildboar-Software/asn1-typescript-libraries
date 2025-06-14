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
  Contents_Type_Attribute_document_type,
  _decode_Contents_Type_Attribute_document_type,
  _encode_Contents_Type_Attribute_document_type,
} from '../ISO8571-FTAM/Contents-Type-Attribute-document-type.ta.mjs';
import {
  Contents_Type_Attribute_constraint_set_and_abstract_Syntax,
  _decode_Contents_Type_Attribute_constraint_set_and_abstract_Syntax,
  _encode_Contents_Type_Attribute_constraint_set_and_abstract_Syntax,
} from '../ISO8571-FTAM/Contents-Type-Attribute-constraint-set-and-abstract-Syntax.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Contents_Type_Attribute */
/**
 * @summary Contents_Type_Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Contents-Type-Attribute  ::=  CHOICE {
 *   document-type
 *     [0] IMPLICIT SEQUENCE {document-type-name  Document-Type-Name,
 *                            parameter
 *                              [0]  TYPE-IDENTIFIER.&Type OPTIONAL},
 *   -- The actual types to be used for values of the Parameter field
 *   -- are defined in the named document type.
 *   constraint-set-and-abstract-Syntax
 *     [1] IMPLICIT SEQUENCE {constraint-set-name   Constraint-Set-Name,
 *                            abstract-Syntax-name  Abstract-Syntax-Name
 *   }
 * }
 * ```
 */
export type Contents_Type_Attribute =
  | {
      document_type: Contents_Type_Attribute_document_type;
    } /* CHOICE_ALT_ROOT */
  | {
      constraint_set_and_abstract_Syntax: Contents_Type_Attribute_constraint_set_and_abstract_Syntax;
    } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Contents_Type_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Contents_Type_Attribute */
let _cached_decoder_for_Contents_Type_Attribute: $.ASN1Decoder<Contents_Type_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Contents_Type_Attribute */

/* START_OF_SYMBOL_DEFINITION _decode_Contents_Type_Attribute */
/**
 * @summary Decodes an ASN.1 element into a(n) Contents_Type_Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Contents_Type_Attribute} The decoded data structure.
 */
export function _decode_Contents_Type_Attribute(el: _Element) {
  if (!_cached_decoder_for_Contents_Type_Attribute) {
    _cached_decoder_for_Contents_Type_Attribute = $._decode_inextensible_choice<Contents_Type_Attribute>(
      {
        'CONTEXT 0': [
          'document_type',
          $._decode_implicit<Contents_Type_Attribute_document_type>(
            () => _decode_Contents_Type_Attribute_document_type
          ),
        ],
        'CONTEXT 1': [
          'constraint_set_and_abstract_Syntax',
          $._decode_implicit<Contents_Type_Attribute_constraint_set_and_abstract_Syntax>(
            () =>
              _decode_Contents_Type_Attribute_constraint_set_and_abstract_Syntax
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_Contents_Type_Attribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Contents_Type_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Contents_Type_Attribute */
let _cached_encoder_for_Contents_Type_Attribute: $.ASN1Encoder<Contents_Type_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Contents_Type_Attribute */

/* START_OF_SYMBOL_DEFINITION _encode_Contents_Type_Attribute */
/**
 * @summary Encodes a(n) Contents_Type_Attribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Contents_Type_Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Contents_Type_Attribute(
  value: Contents_Type_Attribute,
  elGetter: $.ASN1Encoder<Contents_Type_Attribute>
) {
  if (!_cached_encoder_for_Contents_Type_Attribute) {
    _cached_encoder_for_Contents_Type_Attribute = $._encode_choice<Contents_Type_Attribute>(
      {
        document_type: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_Contents_Type_Attribute_document_type,
          $.BER
        ),
        constraint_set_and_abstract_Syntax: $._encode_implicit(
          _TagClass.context,
          1,
          () =>
            _encode_Contents_Type_Attribute_constraint_set_and_abstract_Syntax,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Contents_Type_Attribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Contents_Type_Attribute */

/* eslint-enable */
