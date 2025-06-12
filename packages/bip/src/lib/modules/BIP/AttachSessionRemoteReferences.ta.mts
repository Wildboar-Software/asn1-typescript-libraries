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
  AttachSessionRemoteReference,
  _decode_AttachSessionRemoteReference,
  _encode_AttachSessionRemoteReference,
} from '../BIP/AttachSessionRemoteReference.ta.mjs';
export {
  AttachSessionRemoteReference,
  _decode_AttachSessionRemoteReference,
  _encode_AttachSessionRemoteReference,
} from '../BIP/AttachSessionRemoteReference.ta.mjs';

/* START_OF_SYMBOL_DEFINITION AttachSessionRemoteReferences */
/**
 * @summary AttachSessionRemoteReferences
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttachSessionRemoteReferences  ::=  SET OF reference AttachSessionRemoteReference
 * ```
 */
export type AttachSessionRemoteReferences = AttachSessionRemoteReference[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AttachSessionRemoteReferences */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttachSessionRemoteReferences */
let _cached_decoder_for_AttachSessionRemoteReferences: $.ASN1Decoder<AttachSessionRemoteReferences> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttachSessionRemoteReferences */

/* START_OF_SYMBOL_DEFINITION _decode_AttachSessionRemoteReferences */
/**
 * @summary Decodes an ASN.1 element into a(n) AttachSessionRemoteReferences
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttachSessionRemoteReferences} The decoded data structure.
 */
export function _decode_AttachSessionRemoteReferences(el: _Element) {
  if (!_cached_decoder_for_AttachSessionRemoteReferences) {
    _cached_decoder_for_AttachSessionRemoteReferences = $._decodeSetOf<AttachSessionRemoteReference>(
      () => _decode_AttachSessionRemoteReference
    );
  }
  return _cached_decoder_for_AttachSessionRemoteReferences(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttachSessionRemoteReferences */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttachSessionRemoteReferences */
let _cached_encoder_for_AttachSessionRemoteReferences: $.ASN1Encoder<AttachSessionRemoteReferences> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttachSessionRemoteReferences */

/* START_OF_SYMBOL_DEFINITION _encode_AttachSessionRemoteReferences */
/**
 * @summary Encodes a(n) AttachSessionRemoteReferences into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttachSessionRemoteReferences, encoded as an ASN.1 Element.
 */
export function _encode_AttachSessionRemoteReferences(
  value: AttachSessionRemoteReferences,
  elGetter: $.ASN1Encoder<AttachSessionRemoteReferences>
) {
  if (!_cached_encoder_for_AttachSessionRemoteReferences) {
    _cached_encoder_for_AttachSessionRemoteReferences = $._encodeSetOf<AttachSessionRemoteReference>(
      () => _encode_AttachSessionRemoteReference,
      $.BER
    );
  }
  return _cached_encoder_for_AttachSessionRemoteReferences(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttachSessionRemoteReferences */

/* eslint-enable */
