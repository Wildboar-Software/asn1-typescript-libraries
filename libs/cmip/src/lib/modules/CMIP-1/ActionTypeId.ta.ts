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

/* START_OF_SYMBOL_DEFINITION ActionTypeId */
/**
 * @summary ActionTypeId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionTypeId  ::=  CHOICE {
 *   globalForm  [2] IMPLICIT OBJECT IDENTIFIER,
 *   localForm   [3] IMPLICIT INTEGER
 * }
 * ```
 */
export type ActionTypeId =
  | { globalForm: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
  | { localForm: INTEGER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ActionTypeId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionTypeId */
let _cached_decoder_for_ActionTypeId: $.ASN1Decoder<ActionTypeId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionTypeId */

/* START_OF_SYMBOL_DEFINITION _decode_ActionTypeId */
/**
 * @summary Decodes an ASN.1 element into a(n) ActionTypeId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionTypeId} The decoded data structure.
 */
export function _decode_ActionTypeId(el: _Element) {
  if (!_cached_decoder_for_ActionTypeId) {
    _cached_decoder_for_ActionTypeId = $._decode_inextensible_choice<ActionTypeId>(
      {
        'CONTEXT 2': [
          'globalForm',
          $._decode_implicit<OBJECT_IDENTIFIER>(
            () => $._decodeObjectIdentifier
          ),
        ],
        'CONTEXT 3': [
          'localForm',
          $._decode_implicit<INTEGER>(() => $._decodeInteger),
        ],
      }
    );
  }
  return _cached_decoder_for_ActionTypeId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActionTypeId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionTypeId */
let _cached_encoder_for_ActionTypeId: $.ASN1Encoder<ActionTypeId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionTypeId */

/* START_OF_SYMBOL_DEFINITION _encode_ActionTypeId */
/**
 * @summary Encodes a(n) ActionTypeId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionTypeId, encoded as an ASN.1 Element.
 */
export function _encode_ActionTypeId(
  value: ActionTypeId,
  elGetter: $.ASN1Encoder<ActionTypeId>
) {
  if (!_cached_encoder_for_ActionTypeId) {
    _cached_encoder_for_ActionTypeId = $._encode_choice<ActionTypeId>(
      {
        globalForm: $._encode_implicit(
          _TagClass.context,
          2,
          () => $._encodeObjectIdentifier,
          $.BER
        ),
        localForm: $._encode_implicit(
          _TagClass.context,
          3,
          () => $._encodeInteger,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_ActionTypeId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActionTypeId */

/* eslint-enable */
