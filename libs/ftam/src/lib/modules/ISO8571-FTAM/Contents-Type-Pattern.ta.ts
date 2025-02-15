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
import * as $ from 'asn1-ts/dist/node/functional';
import {
  Object_Identifier_Pattern,
  _decode_Object_Identifier_Pattern,
  _encode_Object_Identifier_Pattern,
} from '../ISO8571-FTAM/Object-Identifier-Pattern.ta';
export {
  Object_Identifier_Pattern,
  _decode_Object_Identifier_Pattern,
  _encode_Object_Identifier_Pattern,
} from '../ISO8571-FTAM/Object-Identifier-Pattern.ta';
import {
  Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern,
  _decode_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern,
  _encode_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern,
} from '../ISO8571-FTAM/Contents-Type-Pattern-constraint-set-abstract-Syntax-Pattern.ta';
export {
  Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern,
  _decode_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern,
  _encode_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern,
} from '../ISO8571-FTAM/Contents-Type-Pattern-constraint-set-abstract-Syntax-Pattern.ta';

/* START_OF_SYMBOL_DEFINITION Contents_Type_Pattern */
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
/* END_OF_SYMBOL_DEFINITION Contents_Type_Pattern */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Contents_Type_Pattern */
let _cached_decoder_for_Contents_Type_Pattern: $.ASN1Decoder<Contents_Type_Pattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Contents_Type_Pattern */

/* START_OF_SYMBOL_DEFINITION _decode_Contents_Type_Pattern */
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
/* END_OF_SYMBOL_DEFINITION _decode_Contents_Type_Pattern */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Contents_Type_Pattern */
let _cached_encoder_for_Contents_Type_Pattern: $.ASN1Encoder<Contents_Type_Pattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Contents_Type_Pattern */

/* START_OF_SYMBOL_DEFINITION _encode_Contents_Type_Pattern */
/**
 * @summary Encodes a(n) Contents_Type_Pattern into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_Contents_Type_Pattern */

/* eslint-enable */
