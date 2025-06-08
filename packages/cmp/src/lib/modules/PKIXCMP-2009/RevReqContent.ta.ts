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
  RevDetails,
  _decode_RevDetails,
  _encode_RevDetails,
} from '../PKIXCMP-2009/RevDetails.ta';
export {
  RevDetails,
  _decode_RevDetails,
  _encode_RevDetails,
} from '../PKIXCMP-2009/RevDetails.ta';

/* START_OF_SYMBOL_DEFINITION RevReqContent */
/**
 * @summary RevReqContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevReqContent  ::=  SEQUENCE OF RevDetails
 * ```
 */
export type RevReqContent = RevDetails[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION RevReqContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RevReqContent */
let _cached_decoder_for_RevReqContent: $.ASN1Decoder<RevReqContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RevReqContent */

/* START_OF_SYMBOL_DEFINITION _decode_RevReqContent */
/**
 * @summary Decodes an ASN.1 element into a(n) RevReqContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevReqContent} The decoded data structure.
 */
export function _decode_RevReqContent(el: _Element) {
  if (!_cached_decoder_for_RevReqContent) {
    _cached_decoder_for_RevReqContent = $._decodeSequenceOf<RevDetails>(
      () => _decode_RevDetails
    );
  }
  return _cached_decoder_for_RevReqContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RevReqContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RevReqContent */
let _cached_encoder_for_RevReqContent: $.ASN1Encoder<RevReqContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RevReqContent */

/* START_OF_SYMBOL_DEFINITION _encode_RevReqContent */
/**
 * @summary Encodes a(n) RevReqContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevReqContent, encoded as an ASN.1 Element.
 */
export function _encode_RevReqContent(
  value: RevReqContent,
  elGetter: $.ASN1Encoder<RevReqContent>
) {
  if (!_cached_encoder_for_RevReqContent) {
    _cached_encoder_for_RevReqContent = $._encodeSequenceOf<RevDetails>(
      () => _encode_RevDetails,
      $.BER
    );
  }
  return _cached_encoder_for_RevReqContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RevReqContent */

/* eslint-enable */
