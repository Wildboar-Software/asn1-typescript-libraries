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

/* START_OF_SYMBOL_DEFINITION _enum_for_NetworkType */
/**
 * @summary NetworkType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NetworkType  ::=  ENUMERATED {pstn, isdn, gsm, umts, internet}
 * ```@enum {number}
 */
export enum _enum_for_NetworkType {
  pstn = 0,
  isdn = 1,
  gsm = 2,
  umts = 3,
  internet = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_NetworkType */

/* START_OF_SYMBOL_DEFINITION NetworkType */
/**
 * @summary NetworkType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NetworkType  ::=  ENUMERATED {pstn, isdn, gsm, umts, internet}
 * ```@enum {number}
 */
export type NetworkType = _enum_for_NetworkType;
/* END_OF_SYMBOL_DEFINITION NetworkType */

/* START_OF_SYMBOL_DEFINITION NetworkType */
/**
 * @summary NetworkType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NetworkType  ::=  ENUMERATED {pstn, isdn, gsm, umts, internet}
 * ```@enum {number}
 */
export const NetworkType = _enum_for_NetworkType;
/* END_OF_SYMBOL_DEFINITION NetworkType */

/* START_OF_SYMBOL_DEFINITION NetworkType_pstn */
/**
 * @summary NetworkType_pstn
 * @constant
 * @type {number}
 */
export const NetworkType_pstn: NetworkType =
  NetworkType.pstn; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION NetworkType_pstn */

/* START_OF_SYMBOL_DEFINITION pstn */
/**
 * @summary pstn
 * @constant
 * @type {number}
 */
export const pstn: NetworkType =
  NetworkType.pstn; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION pstn */

/* START_OF_SYMBOL_DEFINITION NetworkType_isdn */
/**
 * @summary NetworkType_isdn
 * @constant
 * @type {number}
 */
export const NetworkType_isdn: NetworkType =
  NetworkType.isdn; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION NetworkType_isdn */

/* START_OF_SYMBOL_DEFINITION isdn */
/**
 * @summary isdn
 * @constant
 * @type {number}
 */
export const isdn: NetworkType =
  NetworkType.isdn; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION isdn */

/* START_OF_SYMBOL_DEFINITION NetworkType_gsm */
/**
 * @summary NetworkType_gsm
 * @constant
 * @type {number}
 */
export const NetworkType_gsm: NetworkType =
  NetworkType.gsm; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION NetworkType_gsm */

/* START_OF_SYMBOL_DEFINITION gsm */
/**
 * @summary gsm
 * @constant
 * @type {number}
 */
export const gsm: NetworkType =
  NetworkType.gsm; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION gsm */

/* START_OF_SYMBOL_DEFINITION NetworkType_umts */
/**
 * @summary NetworkType_umts
 * @constant
 * @type {number}
 */
export const NetworkType_umts: NetworkType =
  NetworkType.umts; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION NetworkType_umts */

/* START_OF_SYMBOL_DEFINITION umts */
/**
 * @summary umts
 * @constant
 * @type {number}
 */
export const umts: NetworkType =
  NetworkType.umts; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION umts */

/* START_OF_SYMBOL_DEFINITION NetworkType_internet */
/**
 * @summary NetworkType_internet
 * @constant
 * @type {number}
 */
export const NetworkType_internet: NetworkType =
  NetworkType.internet; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION NetworkType_internet */

/* START_OF_SYMBOL_DEFINITION internet */
/**
 * @summary internet
 * @constant
 * @type {number}
 */
export const internet: NetworkType =
  NetworkType.internet; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION internet */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NetworkType */
let _cached_decoder_for_NetworkType: $.ASN1Decoder<NetworkType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NetworkType */

/* START_OF_SYMBOL_DEFINITION _decode_NetworkType */
/**
 * @summary Decodes an ASN.1 element into a(n) NetworkType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NetworkType} The decoded data structure.
 */
export function _decode_NetworkType(el: _Element) {
  if (!_cached_decoder_for_NetworkType) {
    _cached_decoder_for_NetworkType = $._decodeEnumerated;
  }
  return _cached_decoder_for_NetworkType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NetworkType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NetworkType */
let _cached_encoder_for_NetworkType: $.ASN1Encoder<NetworkType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NetworkType */

/* START_OF_SYMBOL_DEFINITION _encode_NetworkType */
/**
 * @summary Encodes a(n) NetworkType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkType, encoded as an ASN.1 Element.
 */
export function _encode_NetworkType(
  value: NetworkType,
  elGetter: $.ASN1Encoder<NetworkType>
) {
  if (!_cached_encoder_for_NetworkType) {
    _cached_encoder_for_NetworkType = $._encodeEnumerated;
  }
  return _cached_encoder_for_NetworkType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NetworkType */

/* eslint-enable */
