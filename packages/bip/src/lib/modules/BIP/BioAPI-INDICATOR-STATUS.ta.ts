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

/* START_OF_SYMBOL_DEFINITION _enum_for_BioAPI_INDICATOR_STATUS */
export enum _enum_for_BioAPI_INDICATOR_STATUS {
  accept = 0,
  reject = 1,
  ready = 2,
  busy = 3,
  failure = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_BioAPI_INDICATOR_STATUS */

/* START_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS */
/**
 * @summary BioAPI_INDICATOR_STATUS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-INDICATOR-STATUS  ::=  ENUMERATED {
 *   accept, reject, ready, busy, failure, ...
 *   }
 * ```@enum {number}
 */
export type BioAPI_INDICATOR_STATUS =
  | _enum_for_BioAPI_INDICATOR_STATUS
  | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS */

/* START_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS_accept */
/**
 * @summary BioAPI_INDICATOR_STATUS_accept
 * @constant
 * @type {number}
 */
export const BioAPI_INDICATOR_STATUS_accept: BioAPI_INDICATOR_STATUS = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS_accept */

/* START_OF_SYMBOL_DEFINITION accept */
/**
 * @summary accept
 * @constant
 * @type {number}
 */
export const accept: BioAPI_INDICATOR_STATUS = BioAPI_INDICATOR_STATUS_accept; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION accept */

/* START_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS_reject */
/**
 * @summary BioAPI_INDICATOR_STATUS_reject
 * @constant
 * @type {number}
 */
export const BioAPI_INDICATOR_STATUS_reject: BioAPI_INDICATOR_STATUS = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS_reject */

/* START_OF_SYMBOL_DEFINITION reject */
/**
 * @summary reject
 * @constant
 * @type {number}
 */
export const reject: BioAPI_INDICATOR_STATUS = BioAPI_INDICATOR_STATUS_reject; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION reject */

/* START_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS_ready */
/**
 * @summary BioAPI_INDICATOR_STATUS_ready
 * @constant
 * @type {number}
 */
export const BioAPI_INDICATOR_STATUS_ready: BioAPI_INDICATOR_STATUS = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS_ready */

/* START_OF_SYMBOL_DEFINITION ready */
/**
 * @summary ready
 * @constant
 * @type {number}
 */
export const ready: BioAPI_INDICATOR_STATUS = BioAPI_INDICATOR_STATUS_ready; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ready */

/* START_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS_busy */
/**
 * @summary BioAPI_INDICATOR_STATUS_busy
 * @constant
 * @type {number}
 */
export const BioAPI_INDICATOR_STATUS_busy: BioAPI_INDICATOR_STATUS = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS_busy */

/* START_OF_SYMBOL_DEFINITION busy */
/**
 * @summary busy
 * @constant
 * @type {number}
 */
export const busy: BioAPI_INDICATOR_STATUS = BioAPI_INDICATOR_STATUS_busy; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION busy */

/* START_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS_failure */
/**
 * @summary BioAPI_INDICATOR_STATUS_failure
 * @constant
 * @type {number}
 */
export const BioAPI_INDICATOR_STATUS_failure: BioAPI_INDICATOR_STATUS = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS_failure */

/* START_OF_SYMBOL_DEFINITION failure */
/**
 * @summary failure
 * @constant
 * @type {number}
 */
export const failure: BioAPI_INDICATOR_STATUS = BioAPI_INDICATOR_STATUS_failure; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION failure */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_INDICATOR_STATUS */
let _cached_decoder_for_BioAPI_INDICATOR_STATUS: $.ASN1Decoder<BioAPI_INDICATOR_STATUS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_INDICATOR_STATUS */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_INDICATOR_STATUS */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_INDICATOR_STATUS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_INDICATOR_STATUS} The decoded data structure.
 */
export function _decode_BioAPI_INDICATOR_STATUS(el: _Element) {
  if (!_cached_decoder_for_BioAPI_INDICATOR_STATUS) {
    _cached_decoder_for_BioAPI_INDICATOR_STATUS = $._decodeEnumerated;
  }
  return _cached_decoder_for_BioAPI_INDICATOR_STATUS(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_INDICATOR_STATUS */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_INDICATOR_STATUS */
let _cached_encoder_for_BioAPI_INDICATOR_STATUS: $.ASN1Encoder<BioAPI_INDICATOR_STATUS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_INDICATOR_STATUS */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_INDICATOR_STATUS */
/**
 * @summary Encodes a(n) BioAPI_INDICATOR_STATUS into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_INDICATOR_STATUS, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_INDICATOR_STATUS(
  value: BioAPI_INDICATOR_STATUS,
  elGetter: $.ASN1Encoder<BioAPI_INDICATOR_STATUS>
) {
  if (!_cached_encoder_for_BioAPI_INDICATOR_STATUS) {
    _cached_encoder_for_BioAPI_INDICATOR_STATUS = $._encodeEnumerated;
  }
  return _cached_encoder_for_BioAPI_INDICATOR_STATUS(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_INDICATOR_STATUS */

/* eslint-enable */
