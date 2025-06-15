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
  Object_Identifier_Pattern,
  _decode_Object_Identifier_Pattern,
  _encode_Object_Identifier_Pattern,
} from '../ISO8571-FTAM/Object-Identifier-Pattern.ta.mjs';
import {
  Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern,
  _decode_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern,
  _encode_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern,
} from '../ISO8571-FTAM/Contents-Type-Pattern-constraint-set-abstract-Syntax-Pattern.ta.mjs';

/**
 * @summary Contents_Type_Pattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Contents-Type-Pattern  ::=  CHOICE {
 *   document-type-Pattern
 *     [0] IMPLICIT Object-Identifier-Pattern,
 *   constraint-set-abstract-Syntax-Pattern
 *     [1] IMPLICIT SEQUENCE {constraint-Set-Pattern
 *                              [2] IMPLICIT Object-Identifier-Pattern OPTIONAL,
 *                            -- Absent implies any Object Identifier is equal.
 *                            abstract-Syntax-Pattern
 *                              [3] IMPLICIT Object-Identifier-Pattern OPTIONAL
 *                            -- Absent implies any Object identifier is equal.
 *   }
 * }
 * ```
 */
export type Contents_Type_Pattern =
  | { document_type_Pattern: Object_Identifier_Pattern } /* CHOICE_ALT_ROOT */
  | {
      constraint_set_abstract_Syntax_Pattern: Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern;
    } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_Contents_Type_Pattern: $.ASN1Decoder<Contents_Type_Pattern> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Contents_Type_Pattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Contents_Type_Pattern} The decoded data structure.
 */
export function _decode_Contents_Type_Pattern(el: _Element) {
  if (!_cached_decoder_for_Contents_Type_Pattern) {
    _cached_decoder_for_Contents_Type_Pattern = $._decode_inextensible_choice<Contents_Type_Pattern>(
      {
        'CONTEXT 0': [
          'document_type_Pattern',
          $._decode_implicit<Object_Identifier_Pattern>(
            () => _decode_Object_Identifier_Pattern
          ),
        ],
        'CONTEXT 1': [
          'constraint_set_abstract_Syntax_Pattern',
          $._decode_implicit<Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern>(
            () =>
              _decode_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_Contents_Type_Pattern(el);
}


let _cached_encoder_for_Contents_Type_Pattern: $.ASN1Encoder<Contents_Type_Pattern> | null = null;


/**
 * @summary Encodes a(n) Contents_Type_Pattern into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Contents_Type_Pattern, encoded as an ASN.1 Element.
 */
export function _encode_Contents_Type_Pattern(
  value: Contents_Type_Pattern,
  elGetter: $.ASN1Encoder<Contents_Type_Pattern>
) {
  if (!_cached_encoder_for_Contents_Type_Pattern) {
    _cached_encoder_for_Contents_Type_Pattern = $._encode_choice<Contents_Type_Pattern>(
      {
        document_type_Pattern: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_Object_Identifier_Pattern,
          $.BER
        ),
        constraint_set_abstract_Syntax_Pattern: $._encode_implicit(
          _TagClass.context,
          1,
          () =>
            _encode_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Contents_Type_Pattern(value, elGetter);
}


/* eslint-enable */
