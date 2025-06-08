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
  FADU_Identity_first_last,
  FADU_Identity_first_last_first /* IMPORTED_LONG_NAMED_INTEGER */,
  first /* IMPORTED_SHORT_NAMED_INTEGER */,
  FADU_Identity_first_last_last /* IMPORTED_LONG_NAMED_INTEGER */,
  last /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_FADU_Identity_first_last,
  _encode_FADU_Identity_first_last,
} from '../ISO8571-FTAM/FADU-Identity-first-last.ta';
export {
  FADU_Identity_first_last,
  FADU_Identity_first_last_first /* IMPORTED_LONG_NAMED_INTEGER */,
  first /* IMPORTED_SHORT_NAMED_INTEGER */,
  FADU_Identity_first_last_last /* IMPORTED_LONG_NAMED_INTEGER */,
  last /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_FADU_Identity_first_last,
  _encode_FADU_Identity_first_last,
} from '../ISO8571-FTAM/FADU-Identity-first-last.ta';
import {
  FADU_Identity_relative,
  FADU_Identity_relative_previous /* IMPORTED_LONG_NAMED_INTEGER */,
  previous /* IMPORTED_SHORT_NAMED_INTEGER */,
  FADU_Identity_relative_current /* IMPORTED_LONG_NAMED_INTEGER */,
  current /* IMPORTED_SHORT_NAMED_INTEGER */,
  FADU_Identity_relative_next /* IMPORTED_LONG_NAMED_INTEGER */,
  next /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_FADU_Identity_relative,
  _encode_FADU_Identity_relative,
} from '../ISO8571-FTAM/FADU-Identity-relative.ta';
export {
  FADU_Identity_relative,
  FADU_Identity_relative_previous /* IMPORTED_LONG_NAMED_INTEGER */,
  previous /* IMPORTED_SHORT_NAMED_INTEGER */,
  FADU_Identity_relative_current /* IMPORTED_LONG_NAMED_INTEGER */,
  current /* IMPORTED_SHORT_NAMED_INTEGER */,
  FADU_Identity_relative_next /* IMPORTED_LONG_NAMED_INTEGER */,
  next /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_FADU_Identity_relative,
  _encode_FADU_Identity_relative,
} from '../ISO8571-FTAM/FADU-Identity-relative.ta';
import {
  FADU_Identity_begin_end,
  FADU_Identity_begin_end_begin /* IMPORTED_LONG_NAMED_INTEGER */,
  begin /* IMPORTED_SHORT_NAMED_INTEGER */,
  FADU_Identity_begin_end_end /* IMPORTED_LONG_NAMED_INTEGER */,
  end /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_FADU_Identity_begin_end,
  _encode_FADU_Identity_begin_end,
} from '../ISO8571-FTAM/FADU-Identity-begin-end.ta';
export {
  FADU_Identity_begin_end,
  FADU_Identity_begin_end_begin /* IMPORTED_LONG_NAMED_INTEGER */,
  begin /* IMPORTED_SHORT_NAMED_INTEGER */,
  FADU_Identity_begin_end_end /* IMPORTED_LONG_NAMED_INTEGER */,
  end /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_FADU_Identity_begin_end,
  _encode_FADU_Identity_begin_end,
} from '../ISO8571-FTAM/FADU-Identity-begin-end.ta';
import {
  Node_Name,
  _decode_Node_Name,
  _encode_Node_Name,
} from '../ISO8571-FTAM/Node-Name.ta';
export {
  Node_Name,
  _decode_Node_Name,
  _encode_Node_Name,
} from '../ISO8571-FTAM/Node-Name.ta';

/* START_OF_SYMBOL_DEFINITION FADU_Identity */
/**
 * @summary FADU_Identity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FADU-Identity  ::=  [APPLICATION 15]  CHOICE {
 *   first-last   [0] IMPLICIT INTEGER {first(0), last(1)},
 *   relative     [1] IMPLICIT INTEGER {previous(0), current(1), next(2)},
 *   begin-end    [2] IMPLICIT INTEGER {begin(0), end(1)},
 *   single-name  [3] IMPLICIT Node-Name,
 *   name-list    [4] IMPLICIT SEQUENCE OF Node-Name,
 *   fadu-number  [5] IMPLICIT INTEGER
 * }
 * ```
 */
export type FADU_Identity =
  | { first_last: FADU_Identity_first_last } /* CHOICE_ALT_ROOT */
  | { relative: FADU_Identity_relative } /* CHOICE_ALT_ROOT */
  | { begin_end: FADU_Identity_begin_end } /* CHOICE_ALT_ROOT */
  | { single_name: Node_Name } /* CHOICE_ALT_ROOT */
  | { name_list: Node_Name[] } /* CHOICE_ALT_ROOT */
  | { fadu_number: INTEGER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION FADU_Identity */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FADU_Identity */
let _cached_decoder_for_FADU_Identity: $.ASN1Decoder<FADU_Identity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FADU_Identity */

/* START_OF_SYMBOL_DEFINITION _decode_FADU_Identity */
/**
 * @summary Decodes an ASN.1 element into a(n) FADU_Identity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FADU_Identity} The decoded data structure.
 */
export function _decode_FADU_Identity(el: _Element) {
  if (!_cached_decoder_for_FADU_Identity) {
    _cached_decoder_for_FADU_Identity = $._decode_explicit<FADU_Identity>(() =>
      $._decode_inextensible_choice<FADU_Identity>({
        'CONTEXT 0': [
          'first_last',
          $._decode_implicit<FADU_Identity_first_last>(
            () => _decode_FADU_Identity_first_last
          ),
        ],
        'CONTEXT 1': [
          'relative',
          $._decode_implicit<FADU_Identity_relative>(
            () => _decode_FADU_Identity_relative
          ),
        ],
        'CONTEXT 2': [
          'begin_end',
          $._decode_implicit<FADU_Identity_begin_end>(
            () => _decode_FADU_Identity_begin_end
          ),
        ],
        'CONTEXT 3': [
          'single_name',
          $._decode_implicit<Node_Name>(() => _decode_Node_Name),
        ],
        'CONTEXT 4': [
          'name_list',
          $._decode_implicit<Node_Name[]>(() =>
            $._decodeSequenceOf<Node_Name>(() => _decode_Node_Name)
          ),
        ],
        'CONTEXT 5': [
          'fadu_number',
          $._decode_implicit<INTEGER>(() => $._decodeInteger),
        ],
      })
    );
  }
  return _cached_decoder_for_FADU_Identity(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FADU_Identity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FADU_Identity */
let _cached_encoder_for_FADU_Identity: $.ASN1Encoder<FADU_Identity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FADU_Identity */

/* START_OF_SYMBOL_DEFINITION _encode_FADU_Identity */
/**
 * @summary Encodes a(n) FADU_Identity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FADU_Identity, encoded as an ASN.1 Element.
 */
export function _encode_FADU_Identity(
  value: FADU_Identity,
  elGetter: $.ASN1Encoder<FADU_Identity>
) {
  if (!_cached_encoder_for_FADU_Identity) {
    _cached_encoder_for_FADU_Identity = $._encode_explicit(
      _TagClass.application,
      15,
      () =>
        $._encode_choice<FADU_Identity>(
          {
            first_last: $._encode_implicit(
              _TagClass.context,
              0,
              () => _encode_FADU_Identity_first_last,
              $.BER
            ),
            relative: $._encode_implicit(
              _TagClass.context,
              1,
              () => _encode_FADU_Identity_relative,
              $.BER
            ),
            begin_end: $._encode_implicit(
              _TagClass.context,
              2,
              () => _encode_FADU_Identity_begin_end,
              $.BER
            ),
            single_name: $._encode_implicit(
              _TagClass.context,
              3,
              () => _encode_Node_Name,
              $.BER
            ),
            name_list: $._encode_implicit(
              _TagClass.context,
              4,
              () =>
                $._encodeSequenceOf<Node_Name>(() => _encode_Node_Name, $.BER),
              $.BER
            ),
            fadu_number: $._encode_implicit(
              _TagClass.context,
              5,
              () => $._encodeInteger,
              $.BER
            ),
          },
          $.BER
        ),
      $.BER
    );
  }
  return _cached_encoder_for_FADU_Identity(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FADU_Identity */

/* eslint-enable */
