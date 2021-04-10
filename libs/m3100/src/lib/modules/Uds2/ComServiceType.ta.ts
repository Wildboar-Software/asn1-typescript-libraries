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

/* START_OF_SYMBOL_DEFINITION _enum_for_ComServiceType */
/**
 * @summary ComServiceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ComServiceType  ::=  ENUMERATED {
 *   voice, fax, textPhone, videoPhone, publicPhoneBox, switchBoard, pager,
 *   data, e-mail, web}
 * ```@enum {number}
 */
export enum _enum_for_ComServiceType {
  voice = 0,
  fax = 1,
  textPhone = 2,
  videoPhone = 3,
  publicPhoneBox = 4,
  switchBoard = 5,
  pager = 6,
  data = 7,
  e_mail = 8,
  web = 9,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ComServiceType */

/* START_OF_SYMBOL_DEFINITION ComServiceType */
/**
 * @summary ComServiceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ComServiceType  ::=  ENUMERATED {
 *   voice, fax, textPhone, videoPhone, publicPhoneBox, switchBoard, pager,
 *   data, e-mail, web}
 * ```@enum {number}
 */
export type ComServiceType = _enum_for_ComServiceType;
/* END_OF_SYMBOL_DEFINITION ComServiceType */

/* START_OF_SYMBOL_DEFINITION ComServiceType */
/**
 * @summary ComServiceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ComServiceType  ::=  ENUMERATED {
 *   voice, fax, textPhone, videoPhone, publicPhoneBox, switchBoard, pager,
 *   data, e-mail, web}
 * ```@enum {number}
 */
export const ComServiceType = _enum_for_ComServiceType;
/* END_OF_SYMBOL_DEFINITION ComServiceType */

/* START_OF_SYMBOL_DEFINITION ComServiceType_voice */
/**
 * @summary ComServiceType_voice
 * @constant
 * @type {number}
 */
export const ComServiceType_voice: ComServiceType =
  ComServiceType.voice; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ComServiceType_voice */

/* START_OF_SYMBOL_DEFINITION voice */
/**
 * @summary voice
 * @constant
 * @type {number}
 */
export const voice: ComServiceType =
  ComServiceType.voice; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION voice */

/* START_OF_SYMBOL_DEFINITION ComServiceType_fax */
/**
 * @summary ComServiceType_fax
 * @constant
 * @type {number}
 */
export const ComServiceType_fax: ComServiceType =
  ComServiceType.fax; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ComServiceType_fax */

/* START_OF_SYMBOL_DEFINITION fax */
/**
 * @summary fax
 * @constant
 * @type {number}
 */
export const fax: ComServiceType =
  ComServiceType.fax; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION fax */

/* START_OF_SYMBOL_DEFINITION ComServiceType_textPhone */
/**
 * @summary ComServiceType_textPhone
 * @constant
 * @type {number}
 */
export const ComServiceType_textPhone: ComServiceType =
  ComServiceType.textPhone; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ComServiceType_textPhone */

/* START_OF_SYMBOL_DEFINITION textPhone */
/**
 * @summary textPhone
 * @constant
 * @type {number}
 */
export const textPhone: ComServiceType =
  ComServiceType.textPhone; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION textPhone */

/* START_OF_SYMBOL_DEFINITION ComServiceType_videoPhone */
/**
 * @summary ComServiceType_videoPhone
 * @constant
 * @type {number}
 */
export const ComServiceType_videoPhone: ComServiceType =
  ComServiceType.videoPhone; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ComServiceType_videoPhone */

/* START_OF_SYMBOL_DEFINITION videoPhone */
/**
 * @summary videoPhone
 * @constant
 * @type {number}
 */
export const videoPhone: ComServiceType =
  ComServiceType.videoPhone; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION videoPhone */

/* START_OF_SYMBOL_DEFINITION ComServiceType_publicPhoneBox */
/**
 * @summary ComServiceType_publicPhoneBox
 * @constant
 * @type {number}
 */
export const ComServiceType_publicPhoneBox: ComServiceType =
  ComServiceType.publicPhoneBox; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ComServiceType_publicPhoneBox */

/* START_OF_SYMBOL_DEFINITION publicPhoneBox */
/**
 * @summary publicPhoneBox
 * @constant
 * @type {number}
 */
export const publicPhoneBox: ComServiceType =
  ComServiceType.publicPhoneBox; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION publicPhoneBox */

/* START_OF_SYMBOL_DEFINITION ComServiceType_switchBoard */
/**
 * @summary ComServiceType_switchBoard
 * @constant
 * @type {number}
 */
export const ComServiceType_switchBoard: ComServiceType =
  ComServiceType.switchBoard; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ComServiceType_switchBoard */

/* START_OF_SYMBOL_DEFINITION switchBoard */
/**
 * @summary switchBoard
 * @constant
 * @type {number}
 */
export const switchBoard: ComServiceType =
  ComServiceType.switchBoard; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION switchBoard */

/* START_OF_SYMBOL_DEFINITION ComServiceType_pager */
/**
 * @summary ComServiceType_pager
 * @constant
 * @type {number}
 */
export const ComServiceType_pager: ComServiceType =
  ComServiceType.pager; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ComServiceType_pager */

/* START_OF_SYMBOL_DEFINITION pager */
/**
 * @summary pager
 * @constant
 * @type {number}
 */
export const pager: ComServiceType =
  ComServiceType.pager; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION pager */

/* START_OF_SYMBOL_DEFINITION ComServiceType_data */
/**
 * @summary ComServiceType_data
 * @constant
 * @type {number}
 */
export const ComServiceType_data: ComServiceType =
  ComServiceType.data; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ComServiceType_data */

/* START_OF_SYMBOL_DEFINITION data */
/**
 * @summary data
 * @constant
 * @type {number}
 */
export const data: ComServiceType =
  ComServiceType.data; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION data */

/* START_OF_SYMBOL_DEFINITION ComServiceType_e_mail */
/**
 * @summary ComServiceType_e_mail
 * @constant
 * @type {number}
 */
export const ComServiceType_e_mail: ComServiceType =
  ComServiceType.e_mail; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ComServiceType_e_mail */

/* START_OF_SYMBOL_DEFINITION e_mail */
/**
 * @summary e_mail
 * @constant
 * @type {number}
 */
export const e_mail: ComServiceType =
  ComServiceType.e_mail; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION e_mail */

/* START_OF_SYMBOL_DEFINITION ComServiceType_web */
/**
 * @summary ComServiceType_web
 * @constant
 * @type {number}
 */
export const ComServiceType_web: ComServiceType =
  ComServiceType.web; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ComServiceType_web */

/* START_OF_SYMBOL_DEFINITION web */
/**
 * @summary web
 * @constant
 * @type {number}
 */
export const web: ComServiceType =
  ComServiceType.web; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION web */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ComServiceType */
let _cached_decoder_for_ComServiceType: $.ASN1Decoder<ComServiceType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ComServiceType */

/* START_OF_SYMBOL_DEFINITION _decode_ComServiceType */
/**
 * @summary Decodes an ASN.1 element into a(n) ComServiceType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ComServiceType} The decoded data structure.
 */
export function _decode_ComServiceType(el: _Element) {
  if (!_cached_decoder_for_ComServiceType) {
    _cached_decoder_for_ComServiceType = $._decodeEnumerated;
  }
  return _cached_decoder_for_ComServiceType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ComServiceType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ComServiceType */
let _cached_encoder_for_ComServiceType: $.ASN1Encoder<ComServiceType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ComServiceType */

/* START_OF_SYMBOL_DEFINITION _encode_ComServiceType */
/**
 * @summary Encodes a(n) ComServiceType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ComServiceType, encoded as an ASN.1 Element.
 */
export function _encode_ComServiceType(
  value: ComServiceType,
  elGetter: $.ASN1Encoder<ComServiceType>
) {
  if (!_cached_encoder_for_ComServiceType) {
    _cached_encoder_for_ComServiceType = $._encodeEnumerated;
  }
  return _cached_encoder_for_ComServiceType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ComServiceType */

/* eslint-enable */
