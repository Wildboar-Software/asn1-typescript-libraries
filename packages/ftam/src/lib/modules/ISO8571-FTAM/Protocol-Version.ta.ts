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

/* START_OF_SYMBOL_DEFINITION Protocol_Version */
/**
 * @summary Protocol_Version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Protocol-Version  ::=  [0] IMPLICIT BIT STRING {version-1(0), version-2(1)
 * }
 * ```
 */
export type Protocol_Version = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Protocol_Version */

/* START_OF_SYMBOL_DEFINITION Protocol_Version_version_1 */
/**
 * @summary Protocol_Version_version_1
 * @constant
 */
export const Protocol_Version_version_1: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Protocol_Version_version_1 */

/* START_OF_SYMBOL_DEFINITION version_1 */
/**
 * @summary version_1
 * @constant
 */
export const version_1: number = Protocol_Version_version_1; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION version_1 */

/* START_OF_SYMBOL_DEFINITION Protocol_Version_version_2 */
/**
 * @summary Protocol_Version_version_2
 * @constant
 */
export const Protocol_Version_version_2: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Protocol_Version_version_2 */

/* START_OF_SYMBOL_DEFINITION version_2 */
/**
 * @summary version_2
 * @constant
 */
export const version_2: number = Protocol_Version_version_2; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION version_2 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Protocol_Version */
let _cached_decoder_for_Protocol_Version: $.ASN1Decoder<Protocol_Version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Protocol_Version */

/* START_OF_SYMBOL_DEFINITION _decode_Protocol_Version */
/**
 * @summary Decodes an ASN.1 element into a(n) Protocol_Version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Protocol_Version} The decoded data structure.
 */
export function _decode_Protocol_Version(el: _Element) {
  if (!_cached_decoder_for_Protocol_Version) {
    _cached_decoder_for_Protocol_Version = $._decode_implicit<Protocol_Version>(
      () => $._decodeBitString
    );
  }
  return _cached_decoder_for_Protocol_Version(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Protocol_Version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Protocol_Version */
let _cached_encoder_for_Protocol_Version: $.ASN1Encoder<Protocol_Version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Protocol_Version */

/* START_OF_SYMBOL_DEFINITION _encode_Protocol_Version */
/**
 * @summary Encodes a(n) Protocol_Version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Protocol_Version, encoded as an ASN.1 Element.
 */
export function _encode_Protocol_Version(
  value: Protocol_Version,
  elGetter: $.ASN1Encoder<Protocol_Version>
) {
  if (!_cached_encoder_for_Protocol_Version) {
    _cached_encoder_for_Protocol_Version = $._encode_implicit(
      _TagClass.context,
      0,
      () => $._encodeBitString,
      $.BER
    );
  }
  return _cached_encoder_for_Protocol_Version(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Protocol_Version */

/* eslint-enable */
