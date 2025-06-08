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

/* START_OF_SYMBOL_DEFINITION InvocationId */
/**
 * @summary InvocationId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvocationId  ::=  CHOICE {present  INTEGER,
 *                          absent   NULL
 * }
 * ```
 */
export type InvocationId =
  | { present: INTEGER } /* CHOICE_ALT_ROOT */
  | { absent: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION InvocationId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InvocationId */
let _cached_decoder_for_InvocationId: $.ASN1Decoder<InvocationId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InvocationId */

/* START_OF_SYMBOL_DEFINITION _decode_InvocationId */
/**
 * @summary Decodes an ASN.1 element into a(n) InvocationId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvocationId} The decoded data structure.
 */
export function _decode_InvocationId(el: _Element) {
  if (!_cached_decoder_for_InvocationId) {
    _cached_decoder_for_InvocationId = $._decode_inextensible_choice<InvocationId>(
      {
        'CONTEXT 0': ['present', $._decodeInteger],
        'CONTEXT 1': ['absent', $._decodeNull],
      }
    );
  }
  return _cached_decoder_for_InvocationId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InvocationId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InvocationId */
let _cached_encoder_for_InvocationId: $.ASN1Encoder<InvocationId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InvocationId */

/* START_OF_SYMBOL_DEFINITION _encode_InvocationId */
/**
 * @summary Encodes a(n) InvocationId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvocationId, encoded as an ASN.1 Element.
 */
export function _encode_InvocationId(
  value: InvocationId,
  elGetter: $.ASN1Encoder<InvocationId>
) {
  if (!_cached_encoder_for_InvocationId) {
    _cached_encoder_for_InvocationId = $._encode_choice<InvocationId>(
      {
        present: $._encodeInteger,
        absent: $._encodeNull,
      },
      $.BER
    );
  }
  return _cached_encoder_for_InvocationId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InvocationId */

/* eslint-enable */
