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
  ReplyWantBack,
  _decode_ReplyWantBack,
  _encode_ReplyWantBack,
} from '../SCVP-2009/ReplyWantBack.ta.mjs';
export {
  ReplyWantBack,
  _decode_ReplyWantBack,
  _encode_ReplyWantBack,
} from '../SCVP-2009/ReplyWantBack.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ReplyWantBacks */
/**
 * @summary ReplyWantBacks
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyWantBacks  ::=  SEQUENCE OF ReplyWantBack
 * ```
 */
export type ReplyWantBacks = ReplyWantBack[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ReplyWantBacks */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplyWantBacks */
let _cached_decoder_for_ReplyWantBacks: $.ASN1Decoder<ReplyWantBacks> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplyWantBacks */

/* START_OF_SYMBOL_DEFINITION _decode_ReplyWantBacks */
/**
 * @summary Decodes an ASN.1 element into a(n) ReplyWantBacks
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplyWantBacks} The decoded data structure.
 */
export function _decode_ReplyWantBacks(el: _Element) {
  if (!_cached_decoder_for_ReplyWantBacks) {
    _cached_decoder_for_ReplyWantBacks = $._decodeSequenceOf<ReplyWantBack>(
      () => _decode_ReplyWantBack
    );
  }
  return _cached_decoder_for_ReplyWantBacks(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReplyWantBacks */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplyWantBacks */
let _cached_encoder_for_ReplyWantBacks: $.ASN1Encoder<ReplyWantBacks> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplyWantBacks */

/* START_OF_SYMBOL_DEFINITION _encode_ReplyWantBacks */
/**
 * @summary Encodes a(n) ReplyWantBacks into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplyWantBacks, encoded as an ASN.1 Element.
 */
export function _encode_ReplyWantBacks(
  value: ReplyWantBacks,
  elGetter: $.ASN1Encoder<ReplyWantBacks>
) {
  if (!_cached_encoder_for_ReplyWantBacks) {
    _cached_encoder_for_ReplyWantBacks = $._encodeSequenceOf<ReplyWantBack>(
      () => _encode_ReplyWantBack,
      $.BER
    );
  }
  return _cached_encoder_for_ReplyWantBacks(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReplyWantBacks */

/* eslint-enable */
