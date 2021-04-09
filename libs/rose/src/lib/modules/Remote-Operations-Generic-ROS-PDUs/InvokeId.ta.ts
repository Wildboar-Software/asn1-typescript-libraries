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

/* START_OF_SYMBOL_DEFINITION InvokeId */
/**
 * @summary InvokeId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeId  ::=  CHOICE {present  INTEGER,
 *                      absent   NULL
 * }
 * ```
 */
export type InvokeId =
  | { present: INTEGER } /* CHOICE_ALT_ROOT */
  | { absent: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION InvokeId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeId */
let _cached_decoder_for_InvokeId: $.ASN1Decoder<InvokeId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeId */

/* START_OF_SYMBOL_DEFINITION _decode_InvokeId */
/**
 * @summary Decodes an ASN.1 element into a(n) InvokeId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeId} The decoded data structure.
 */
export function _decode_InvokeId(el: _Element) {
  if (!_cached_decoder_for_InvokeId) {
    _cached_decoder_for_InvokeId = $._decode_inextensible_choice<InvokeId>({
      'UNIVERSAL 2': ['present', $._decodeInteger],
      'UNIVERSAL 5': ['absent', $._decodeNull],
    });
  }
  return _cached_decoder_for_InvokeId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InvokeId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeId */
let _cached_encoder_for_InvokeId: $.ASN1Encoder<InvokeId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeId */

/* START_OF_SYMBOL_DEFINITION _encode_InvokeId */
/**
 * @summary Encodes a(n) InvokeId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeId, encoded as an ASN.1 Element.
 */
export function _encode_InvokeId(
  value: InvokeId,
  elGetter: $.ASN1Encoder<InvokeId>
) {
  if (!_cached_encoder_for_InvokeId) {
    _cached_encoder_for_InvokeId = $._encode_choice<InvokeId>(
      {
        present: $._encodeInteger,
        absent: $._encodeNull,
      },
      $.BER
    );
  }
  return _cached_encoder_for_InvokeId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InvokeId */

/* eslint-enable */
