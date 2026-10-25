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


export const _enum_for_BioAPI_GUI_RESPONSE = {
  default_: 0,
  opComplete: 1,
  opCancel: 2,
  cycleStart: 3,
  cycleRestart: 4,
  subopStart: 5,
  subopNext: 6,
  progressContinue: 7,
  progressCancel: 8,
  recapture: 9,
} as const;

export type _enum_for_BioAPI_GUI_RESPONSE = (typeof _enum_for_BioAPI_GUI_RESPONSE)[keyof typeof _enum_for_BioAPI_GUI_RESPONSE];


/**
 * @summary BioAPI_GUI_RESPONSE
 * @description
 *
 * Application response to a GUI event. C values 0–9 map to the
 * ASN.1 enumerators in order. `progressCancel` is C
 * `BioAPI_GUI_RESPONSE_PROGRESS_ABORT` (8), not a distinct
 * “cancel” code. Other C values are unconvertible.
 *
 * ITU-T Rec. X.1083 (11/2007)
 * [§15.40](https://www.itu.int/rec/T-REC-X.1083-200711-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-GUI-RESPONSE  ::=  ENUMERATED {
 *   default, opComplete, opCancel, cycleStart, cycleRestart, subopStart,
 *   subopNext, progressContinue, progressCancel, recapture, ...
 *   }
 * ```
 *
 * @enum {number}
 */
export type BioAPI_GUI_RESPONSE = _enum_for_BioAPI_GUI_RESPONSE | ENUMERATED;


/**
 * @summary BioAPI_GUI_RESPONSE_default_
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_RESPONSE_default_: 0 = _enum_for_BioAPI_GUI_RESPONSE.default_; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary default_
 * @constant
 * @type {number}
 */
export const default_: 0 = BioAPI_GUI_RESPONSE_default_; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_RESPONSE_opComplete
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_RESPONSE_opComplete: 1 = _enum_for_BioAPI_GUI_RESPONSE.opComplete; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary opComplete
 * @constant
 * @type {number}
 */
export const opComplete: 1 = BioAPI_GUI_RESPONSE_opComplete; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_RESPONSE_opCancel
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_RESPONSE_opCancel: 2 = _enum_for_BioAPI_GUI_RESPONSE.opCancel; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary opCancel
 * @constant
 * @type {number}
 */
export const opCancel: 2 = BioAPI_GUI_RESPONSE_opCancel; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_RESPONSE_cycleStart
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_RESPONSE_cycleStart: 3 = _enum_for_BioAPI_GUI_RESPONSE.cycleStart; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary cycleStart
 * @constant
 * @type {number}
 */
export const cycleStart: 3 = BioAPI_GUI_RESPONSE_cycleStart; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_RESPONSE_cycleRestart
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_RESPONSE_cycleRestart: 4 = _enum_for_BioAPI_GUI_RESPONSE.cycleRestart; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary cycleRestart
 * @constant
 * @type {number}
 */
export const cycleRestart: 4 = BioAPI_GUI_RESPONSE_cycleRestart; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_RESPONSE_subopStart
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_RESPONSE_subopStart: 5 = _enum_for_BioAPI_GUI_RESPONSE.subopStart; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary subopStart
 * @constant
 * @type {number}
 */
export const subopStart: 5 = BioAPI_GUI_RESPONSE_subopStart; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_RESPONSE_subopNext
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_RESPONSE_subopNext: 6 = _enum_for_BioAPI_GUI_RESPONSE.subopNext; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary subopNext
 * @constant
 * @type {number}
 */
export const subopNext: 6 = BioAPI_GUI_RESPONSE_subopNext; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_RESPONSE_progressContinue
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_RESPONSE_progressContinue: 7 = _enum_for_BioAPI_GUI_RESPONSE.progressContinue; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary progressContinue
 * @constant
 * @type {number}
 */
export const progressContinue: 7 = BioAPI_GUI_RESPONSE_progressContinue; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_RESPONSE_progressCancel
 * @description
 *
 * C `BioAPI_GUI_RESPONSE_PROGRESS_ABORT` (8).
 *
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_RESPONSE_progressCancel: 8 = _enum_for_BioAPI_GUI_RESPONSE.progressCancel; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary progressCancel
 * @description
 *
 * C `BioAPI_GUI_RESPONSE_PROGRESS_ABORT` (8).
 *
 * @constant
 * @type {number}
 */
export const progressCancel: 8 = BioAPI_GUI_RESPONSE_progressCancel; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_RESPONSE_recapture
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_RESPONSE_recapture: 9 = _enum_for_BioAPI_GUI_RESPONSE.recapture; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary recapture
 * @constant
 * @type {number}
 */
export const recapture: 9 = BioAPI_GUI_RESPONSE_recapture; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_BioAPI_GUI_RESPONSE: $.ASN1Decoder<BioAPI_GUI_RESPONSE> = $._decodeEnumerated as $.ASN1Decoder<BioAPI_GUI_RESPONSE>;




export const _encode_BioAPI_GUI_RESPONSE: $.ASN1Encoder<BioAPI_GUI_RESPONSE> = $._encodeEnumerated as $.ASN1Encoder<BioAPI_GUI_RESPONSE>;


/* eslint-enable */
