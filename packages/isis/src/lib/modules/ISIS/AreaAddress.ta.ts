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

/* START_OF_SYMBOL_DEFINITION AreaAddress */
/**
 * @summary AreaAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AreaAddress  ::=  OCTET STRING(SIZE (1..20))
 * ```
 */
export type AreaAddress = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION AreaAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AreaAddress */
let _cached_decoder_for_AreaAddress: $.ASN1Decoder<AreaAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AreaAddress */

/* START_OF_SYMBOL_DEFINITION _decode_AreaAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) AreaAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AreaAddress} The decoded data structure.
 */
export function _decode_AreaAddress(el: _Element) {
  if (!_cached_decoder_for_AreaAddress) {
    _cached_decoder_for_AreaAddress = $._decodeOctetString;
  }
  return _cached_decoder_for_AreaAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AreaAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AreaAddress */
let _cached_encoder_for_AreaAddress: $.ASN1Encoder<AreaAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AreaAddress */

/* START_OF_SYMBOL_DEFINITION _encode_AreaAddress */
/**
 * @summary Encodes a(n) AreaAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AreaAddress, encoded as an ASN.1 Element.
 */
export function _encode_AreaAddress(
  value: AreaAddress,
  elGetter: $.ASN1Encoder<AreaAddress>
) {
  if (!_cached_encoder_for_AreaAddress) {
    _cached_encoder_for_AreaAddress = $._encodeOctetString;
  }
  return _cached_encoder_for_AreaAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AreaAddress */

/* eslint-enable */
