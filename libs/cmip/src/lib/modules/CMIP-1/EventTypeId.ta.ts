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

/* START_OF_SYMBOL_DEFINITION EventTypeId */
/**
 * @summary EventTypeId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EventTypeId  ::=  CHOICE {
 *   globalForm  [6] IMPLICIT OBJECT IDENTIFIER,
 *   localForm   [7] IMPLICIT INTEGER
 * }
 * ```
 */
export type EventTypeId =
  | { globalForm: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
  | { localForm: INTEGER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION EventTypeId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EventTypeId */
let _cached_decoder_for_EventTypeId: $.ASN1Decoder<EventTypeId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EventTypeId */

/* START_OF_SYMBOL_DEFINITION _decode_EventTypeId */
/**
 * @summary Decodes an ASN.1 element into a(n) EventTypeId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EventTypeId} The decoded data structure.
 */
export function _decode_EventTypeId(el: _Element) {
  if (!_cached_decoder_for_EventTypeId) {
    _cached_decoder_for_EventTypeId = $._decode_inextensible_choice<EventTypeId>(
      {
        'CONTEXT 6': [
          'globalForm',
          $._decode_implicit<OBJECT_IDENTIFIER>(
            () => $._decodeObjectIdentifier
          ),
        ],
        'CONTEXT 7': [
          'localForm',
          $._decode_implicit<INTEGER>(() => $._decodeInteger),
        ],
      }
    );
  }
  return _cached_decoder_for_EventTypeId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EventTypeId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EventTypeId */
let _cached_encoder_for_EventTypeId: $.ASN1Encoder<EventTypeId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EventTypeId */

/* START_OF_SYMBOL_DEFINITION _encode_EventTypeId */
/**
 * @summary Encodes a(n) EventTypeId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventTypeId, encoded as an ASN.1 Element.
 */
export function _encode_EventTypeId(
  value: EventTypeId,
  elGetter: $.ASN1Encoder<EventTypeId>
) {
  if (!_cached_encoder_for_EventTypeId) {
    _cached_encoder_for_EventTypeId = $._encode_choice<EventTypeId>(
      {
        globalForm: $._encode_implicit(
          _TagClass.context,
          6,
          () => $._encodeObjectIdentifier,
          $.BER
        ),
        localForm: $._encode_implicit(
          _TagClass.context,
          7,
          () => $._encodeInteger,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_EventTypeId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EventTypeId */

/* eslint-enable */
