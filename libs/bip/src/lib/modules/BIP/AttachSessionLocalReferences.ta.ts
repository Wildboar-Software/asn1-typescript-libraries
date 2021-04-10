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
  AttachSessionLocalReference,
  _decode_AttachSessionLocalReference,
  _encode_AttachSessionLocalReference,
} from '../BIP/AttachSessionLocalReference.ta';
export {
  AttachSessionLocalReference,
  _decode_AttachSessionLocalReference,
  _encode_AttachSessionLocalReference,
} from '../BIP/AttachSessionLocalReference.ta';

/* START_OF_SYMBOL_DEFINITION AttachSessionLocalReferences */
/**
 * @summary AttachSessionLocalReferences
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttachSessionLocalReferences  ::=  SET OF reference AttachSessionLocalReference
 * ```
 */
export type AttachSessionLocalReferences = AttachSessionLocalReference[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AttachSessionLocalReferences */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttachSessionLocalReferences */
let _cached_decoder_for_AttachSessionLocalReferences: $.ASN1Decoder<AttachSessionLocalReferences> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttachSessionLocalReferences */

/* START_OF_SYMBOL_DEFINITION _decode_AttachSessionLocalReferences */
/**
 * @summary Decodes an ASN.1 element into a(n) AttachSessionLocalReferences
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttachSessionLocalReferences} The decoded data structure.
 */
export function _decode_AttachSessionLocalReferences(el: _Element) {
  if (!_cached_decoder_for_AttachSessionLocalReferences) {
    _cached_decoder_for_AttachSessionLocalReferences = $._decodeSetOf<AttachSessionLocalReference>(
      () => _decode_AttachSessionLocalReference
    );
  }
  return _cached_decoder_for_AttachSessionLocalReferences(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttachSessionLocalReferences */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttachSessionLocalReferences */
let _cached_encoder_for_AttachSessionLocalReferences: $.ASN1Encoder<AttachSessionLocalReferences> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttachSessionLocalReferences */

/* START_OF_SYMBOL_DEFINITION _encode_AttachSessionLocalReferences */
/**
 * @summary Encodes a(n) AttachSessionLocalReferences into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttachSessionLocalReferences, encoded as an ASN.1 Element.
 */
export function _encode_AttachSessionLocalReferences(
  value: AttachSessionLocalReferences,
  elGetter: $.ASN1Encoder<AttachSessionLocalReferences>
) {
  if (!_cached_encoder_for_AttachSessionLocalReferences) {
    _cached_encoder_for_AttachSessionLocalReferences = $._encodeSetOf<AttachSessionLocalReference>(
      () => _encode_AttachSessionLocalReference,
      $.BER
    );
  }
  return _cached_encoder_for_AttachSessionLocalReferences(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttachSessionLocalReferences */

/* eslint-enable */
