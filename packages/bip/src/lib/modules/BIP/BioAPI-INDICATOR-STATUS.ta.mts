/* eslint-disable */
import {
  type ENUMERATED,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


export const _enum_for_BioAPI_INDICATOR_STATUS = {
  accept: 0,
  reject: 1,
  ready: 2,
  busy: 3,
  failure: 4,
} as const;

export type _enum_for_BioAPI_INDICATOR_STATUS = (typeof _enum_for_BioAPI_INDICATOR_STATUS)[keyof typeof _enum_for_BioAPI_INDICATOR_STATUS];


/**
 * @summary BioAPI_INDICATOR_STATUS
 * @description
 *
 * Sensor-indicator state. ASN.1 enumerators are 0-based; C
 * values are 1–5 (`accept` = C 1). Other C values are
 * unconvertible.
 *
 * ITU-T Rec. X.1083 (11/2007)
 * [§15.45](https://www.itu.int/rec/T-REC-X.1083-200711-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-INDICATOR-STATUS  ::=  ENUMERATED {
 *   accept, reject, ready, busy, failure, ...
 *   }
 * ```
 *
 * @enum {number}
 */
export type BioAPI_INDICATOR_STATUS =
  | _enum_for_BioAPI_INDICATOR_STATUS
  | ENUMERATED;


/**
 * @summary BioAPI_INDICATOR_STATUS_accept
 * @constant
 * @type {number}
 */
export const BioAPI_INDICATOR_STATUS_accept: 0 = _enum_for_BioAPI_INDICATOR_STATUS.accept; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary accept
 * @constant
 * @type {number}
 */
export const accept: 0 = BioAPI_INDICATOR_STATUS_accept; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_INDICATOR_STATUS_reject
 * @constant
 * @type {number}
 */
export const BioAPI_INDICATOR_STATUS_reject: 1 = _enum_for_BioAPI_INDICATOR_STATUS.reject; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary reject
 * @constant
 * @type {number}
 */
export const reject: 1 = BioAPI_INDICATOR_STATUS_reject; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_INDICATOR_STATUS_ready
 * @constant
 * @type {number}
 */
export const BioAPI_INDICATOR_STATUS_ready: 2 = _enum_for_BioAPI_INDICATOR_STATUS.ready; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary ready
 * @constant
 * @type {number}
 */
export const ready: 2 = BioAPI_INDICATOR_STATUS_ready; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_INDICATOR_STATUS_busy
 * @constant
 * @type {number}
 */
export const BioAPI_INDICATOR_STATUS_busy: 3 = _enum_for_BioAPI_INDICATOR_STATUS.busy; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary busy
 * @constant
 * @type {number}
 */
export const busy: 3 = BioAPI_INDICATOR_STATUS_busy; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_INDICATOR_STATUS_failure
 * @constant
 * @type {number}
 */
export const BioAPI_INDICATOR_STATUS_failure: 4 = _enum_for_BioAPI_INDICATOR_STATUS.failure; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary failure
 * @constant
 * @type {number}
 */
export const failure: 4 = BioAPI_INDICATOR_STATUS_failure; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_BioAPI_INDICATOR_STATUS: $.ASN1Decoder<BioAPI_INDICATOR_STATUS> = $._decodeEnumerated as $.ASN1Decoder<BioAPI_INDICATOR_STATUS>;




export const _encode_BioAPI_INDICATOR_STATUS: $.ASN1Encoder<BioAPI_INDICATOR_STATUS> = $._encodeEnumerated as $.ASN1Encoder<BioAPI_INDICATOR_STATUS>;


/* eslint-enable */
