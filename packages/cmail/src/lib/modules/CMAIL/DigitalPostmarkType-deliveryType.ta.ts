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

/* START_OF_SYMBOL_DEFINITION _enum_for_DigitalPostmarkType_deliveryType */
export enum _enum_for_DigitalPostmarkType_deliveryType {
  certifiedMail = 0,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DigitalPostmarkType_deliveryType */

/* START_OF_SYMBOL_DEFINITION DigitalPostmarkType_deliveryType */
/**
 * @summary DigitalPostmarkType_deliveryType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DigitalPostmarkType-deliveryType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type DigitalPostmarkType_deliveryType =
  | _enum_for_DigitalPostmarkType_deliveryType
  | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION DigitalPostmarkType_deliveryType */

/* START_OF_SYMBOL_DEFINITION DigitalPostmarkType_deliveryType_certifiedMail */
/**
 * @summary DigitalPostmarkType_deliveryType_certifiedMail
 * @constant
 * @type {number}
 */
export const DigitalPostmarkType_deliveryType_certifiedMail: DigitalPostmarkType_deliveryType = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DigitalPostmarkType_deliveryType_certifiedMail */

/* START_OF_SYMBOL_DEFINITION certifiedMail */
/**
 * @summary certifiedMail
 * @constant
 * @type {number}
 */
export const certifiedMail: DigitalPostmarkType_deliveryType = DigitalPostmarkType_deliveryType_certifiedMail; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION certifiedMail */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DigitalPostmarkType_deliveryType */
let _cached_decoder_for_DigitalPostmarkType_deliveryType: $.ASN1Decoder<DigitalPostmarkType_deliveryType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DigitalPostmarkType_deliveryType */

/* START_OF_SYMBOL_DEFINITION _decode_DigitalPostmarkType_deliveryType */
/**
 * @summary Decodes an ASN.1 element into a(n) DigitalPostmarkType_deliveryType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DigitalPostmarkType_deliveryType} The decoded data structure.
 */
export function _decode_DigitalPostmarkType_deliveryType(el: _Element) {
  if (!_cached_decoder_for_DigitalPostmarkType_deliveryType) {
    _cached_decoder_for_DigitalPostmarkType_deliveryType = $._decodeEnumerated;
  }
  return _cached_decoder_for_DigitalPostmarkType_deliveryType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DigitalPostmarkType_deliveryType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DigitalPostmarkType_deliveryType */
let _cached_encoder_for_DigitalPostmarkType_deliveryType: $.ASN1Encoder<DigitalPostmarkType_deliveryType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DigitalPostmarkType_deliveryType */

/* START_OF_SYMBOL_DEFINITION _encode_DigitalPostmarkType_deliveryType */
/**
 * @summary Encodes a(n) DigitalPostmarkType_deliveryType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigitalPostmarkType_deliveryType, encoded as an ASN.1 Element.
 */
export function _encode_DigitalPostmarkType_deliveryType(
  value: DigitalPostmarkType_deliveryType,
  elGetter: $.ASN1Encoder<DigitalPostmarkType_deliveryType>
) {
  if (!_cached_encoder_for_DigitalPostmarkType_deliveryType) {
    _cached_encoder_for_DigitalPostmarkType_deliveryType = $._encodeEnumerated;
  }
  return _cached_encoder_for_DigitalPostmarkType_deliveryType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DigitalPostmarkType_deliveryType */

/* eslint-enable */
