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
  AE_title,
  _decode_AE_title,
  _encode_AE_title,
} from '@wildboar/acse/src/lib/modules/ACSE-1/AE-title.ta';
import {
  BRANCH_IDENTIFIER_initiators_name_side,
  _enum_for_BRANCH_IDENTIFIER_initiators_name_side,
  BRANCH_IDENTIFIER_initiators_name_side_sender /* IMPORTED_LONG_ENUMERATION_ITEM */,
  sender /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BRANCH_IDENTIFIER_initiators_name_side_receiver /* IMPORTED_LONG_ENUMERATION_ITEM */,
  receiver /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_BRANCH_IDENTIFIER_initiators_name_side,
  _encode_BRANCH_IDENTIFIER_initiators_name_side,
} from '../CCR/BRANCH-IDENTIFIER-initiators-name-side.ta';
export {
  BRANCH_IDENTIFIER_initiators_name_side,
  _enum_for_BRANCH_IDENTIFIER_initiators_name_side,
  BRANCH_IDENTIFIER_initiators_name_side_sender /* IMPORTED_LONG_ENUMERATION_ITEM */,
  sender /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BRANCH_IDENTIFIER_initiators_name_side_receiver /* IMPORTED_LONG_ENUMERATION_ITEM */,
  receiver /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_BRANCH_IDENTIFIER_initiators_name_side,
  _encode_BRANCH_IDENTIFIER_initiators_name_side,
} from '../CCR/BRANCH-IDENTIFIER-initiators-name-side.ta';

/* START_OF_SYMBOL_DEFINITION BRANCH_IDENTIFIER_initiators_name */
/**
 * @summary BRANCH_IDENTIFIER_initiators_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BRANCH-IDENTIFIER-initiators-name ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BRANCH_IDENTIFIER_initiators_name =
  | { name: AE_title } /* CHOICE_ALT_ROOT */
  | { side: BRANCH_IDENTIFIER_initiators_name_side } /* CHOICE_ALT_ROOT */
  | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION BRANCH_IDENTIFIER_initiators_name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BRANCH_IDENTIFIER_initiators_name */
let _cached_decoder_for_BRANCH_IDENTIFIER_initiators_name: $.ASN1Decoder<BRANCH_IDENTIFIER_initiators_name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BRANCH_IDENTIFIER_initiators_name */

/* START_OF_SYMBOL_DEFINITION _decode_BRANCH_IDENTIFIER_initiators_name */
/**
 * @summary Decodes an ASN.1 element into a(n) BRANCH_IDENTIFIER_initiators_name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BRANCH_IDENTIFIER_initiators_name} The decoded data structure.
 */
export function _decode_BRANCH_IDENTIFIER_initiators_name(el: _Element) {
  if (!_cached_decoder_for_BRANCH_IDENTIFIER_initiators_name) {
    _cached_decoder_for_BRANCH_IDENTIFIER_initiators_name = $._decode_extensible_choice<BRANCH_IDENTIFIER_initiators_name>(
      {
        'CONTEXT 0': [
          'name',
          $._decode_explicit<AE_title>(() => _decode_AE_title),
        ],
        'CONTEXT 1': [
          'side',
          $._decode_implicit<BRANCH_IDENTIFIER_initiators_name_side>(
            () => _decode_BRANCH_IDENTIFIER_initiators_name_side
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_BRANCH_IDENTIFIER_initiators_name(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BRANCH_IDENTIFIER_initiators_name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BRANCH_IDENTIFIER_initiators_name */
let _cached_encoder_for_BRANCH_IDENTIFIER_initiators_name: $.ASN1Encoder<BRANCH_IDENTIFIER_initiators_name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BRANCH_IDENTIFIER_initiators_name */

/* START_OF_SYMBOL_DEFINITION _encode_BRANCH_IDENTIFIER_initiators_name */
/**
 * @summary Encodes a(n) BRANCH_IDENTIFIER_initiators_name into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BRANCH_IDENTIFIER_initiators_name, encoded as an ASN.1 Element.
 */
export function _encode_BRANCH_IDENTIFIER_initiators_name(
  value: BRANCH_IDENTIFIER_initiators_name,
  elGetter: $.ASN1Encoder<BRANCH_IDENTIFIER_initiators_name>
) {
  if (!_cached_encoder_for_BRANCH_IDENTIFIER_initiators_name) {
    _cached_encoder_for_BRANCH_IDENTIFIER_initiators_name = $._encode_choice<BRANCH_IDENTIFIER_initiators_name>(
      {
        name: $._encode_explicit(
          _TagClass.context,
          0,
          () => _encode_AE_title,
          $.BER
        ),
        side: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_BRANCH_IDENTIFIER_initiators_name_side,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_BRANCH_IDENTIFIER_initiators_name(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BRANCH_IDENTIFIER_initiators_name */

/* eslint-enable */
