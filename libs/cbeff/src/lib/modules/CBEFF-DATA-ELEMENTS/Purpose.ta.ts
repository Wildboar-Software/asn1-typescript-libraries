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

/* START_OF_SYMBOL_DEFINITION _enum_for_Purpose */
/**
 * @summary Purpose
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Purpose  ::=  ENUMERATED {
 *   no-value-available, verify, identify, enroll, enroll-verify, enroll-identify,
 *   audit}
 * ```@enum {number}
 */
export enum _enum_for_Purpose {
  no_value_available = 0,
  verify = 1,
  identify = 2,
  enroll = 3,
  enroll_verify = 4,
  enroll_identify = 5,
  audit = 6,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Purpose */

/* START_OF_SYMBOL_DEFINITION Purpose */
/**
 * @summary Purpose
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Purpose  ::=  ENUMERATED {
 *   no-value-available, verify, identify, enroll, enroll-verify, enroll-identify,
 *   audit}
 * ```@enum {number}
 */
export type Purpose = _enum_for_Purpose;
/* END_OF_SYMBOL_DEFINITION Purpose */

/* START_OF_SYMBOL_DEFINITION Purpose */
/**
 * @summary Purpose
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Purpose  ::=  ENUMERATED {
 *   no-value-available, verify, identify, enroll, enroll-verify, enroll-identify,
 *   audit}
 * ```@enum {number}
 */
export const Purpose = _enum_for_Purpose;
/* END_OF_SYMBOL_DEFINITION Purpose */

/* START_OF_SYMBOL_DEFINITION Purpose_no_value_available */
/**
 * @summary Purpose_no_value_available
 * @constant
 * @type {number}
 */
export const Purpose_no_value_available: Purpose =
  Purpose.no_value_available; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Purpose_no_value_available */

/* START_OF_SYMBOL_DEFINITION no_value_available */
/**
 * @summary no_value_available
 * @constant
 * @type {number}
 */
export const no_value_available: Purpose =
  Purpose.no_value_available; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION no_value_available */

/* START_OF_SYMBOL_DEFINITION Purpose_verify */
/**
 * @summary Purpose_verify
 * @constant
 * @type {number}
 */
export const Purpose_verify: Purpose =
  Purpose.verify; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Purpose_verify */

/* START_OF_SYMBOL_DEFINITION verify */
/**
 * @summary verify
 * @constant
 * @type {number}
 */
export const verify: Purpose =
  Purpose.verify; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION verify */

/* START_OF_SYMBOL_DEFINITION Purpose_identify */
/**
 * @summary Purpose_identify
 * @constant
 * @type {number}
 */
export const Purpose_identify: Purpose =
  Purpose.identify; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Purpose_identify */

/* START_OF_SYMBOL_DEFINITION identify */
/**
 * @summary identify
 * @constant
 * @type {number}
 */
export const identify: Purpose =
  Purpose.identify; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION identify */

/* START_OF_SYMBOL_DEFINITION Purpose_enroll */
/**
 * @summary Purpose_enroll
 * @constant
 * @type {number}
 */
export const Purpose_enroll: Purpose =
  Purpose.enroll; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Purpose_enroll */

/* START_OF_SYMBOL_DEFINITION enroll */
/**
 * @summary enroll
 * @constant
 * @type {number}
 */
export const enroll: Purpose =
  Purpose.enroll; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION enroll */

/* START_OF_SYMBOL_DEFINITION Purpose_enroll_verify */
/**
 * @summary Purpose_enroll_verify
 * @constant
 * @type {number}
 */
export const Purpose_enroll_verify: Purpose =
  Purpose.enroll_verify; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Purpose_enroll_verify */

/* START_OF_SYMBOL_DEFINITION enroll_verify */
/**
 * @summary enroll_verify
 * @constant
 * @type {number}
 */
export const enroll_verify: Purpose =
  Purpose.enroll_verify; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION enroll_verify */

/* START_OF_SYMBOL_DEFINITION Purpose_enroll_identify */
/**
 * @summary Purpose_enroll_identify
 * @constant
 * @type {number}
 */
export const Purpose_enroll_identify: Purpose =
  Purpose.enroll_identify; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Purpose_enroll_identify */

/* START_OF_SYMBOL_DEFINITION enroll_identify */
/**
 * @summary enroll_identify
 * @constant
 * @type {number}
 */
export const enroll_identify: Purpose =
  Purpose.enroll_identify; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION enroll_identify */

/* START_OF_SYMBOL_DEFINITION Purpose_audit */
/**
 * @summary Purpose_audit
 * @constant
 * @type {number}
 */
export const Purpose_audit: Purpose =
  Purpose.audit; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Purpose_audit */

/* START_OF_SYMBOL_DEFINITION audit */
/**
 * @summary audit
 * @constant
 * @type {number}
 */
export const audit: Purpose = Purpose.audit; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION audit */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Purpose */
let _cached_decoder_for_Purpose: $.ASN1Decoder<Purpose> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Purpose */

/* START_OF_SYMBOL_DEFINITION _decode_Purpose */
/**
 * @summary Decodes an ASN.1 element into a(n) Purpose
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Purpose} The decoded data structure.
 */
export function _decode_Purpose(el: _Element) {
  if (!_cached_decoder_for_Purpose) {
    _cached_decoder_for_Purpose = $._decodeEnumerated;
  }
  return _cached_decoder_for_Purpose(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Purpose */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Purpose */
let _cached_encoder_for_Purpose: $.ASN1Encoder<Purpose> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Purpose */

/* START_OF_SYMBOL_DEFINITION _encode_Purpose */
/**
 * @summary Encodes a(n) Purpose into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Purpose, encoded as an ASN.1 Element.
 */
export function _encode_Purpose(
  value: Purpose,
  elGetter: $.ASN1Encoder<Purpose>
) {
  if (!_cached_encoder_for_Purpose) {
    _cached_encoder_for_Purpose = $._encodeEnumerated;
  }
  return _cached_encoder_for_Purpose(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Purpose */

/* eslint-enable */
