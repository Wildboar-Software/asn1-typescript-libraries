/* eslint-disable */
import {
  ENUMERATED,
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


export enum _enum_for_BioAPI_GUI_RESPONSE {
  default_ = 0,
  opComplete = 1,
  opCancel = 2,
  cycleStart = 3,
  cycleRestart = 4,
  subopStart = 5,
  subopNext = 6,
  progressContinue = 7,
  progressCancel = 8,
  recapture = 9,
}


/**
 * @summary BioAPI_GUI_RESPONSE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-GUI-RESPONSE  ::=  ENUMERATED {
 *   default, opComplete, opCancel, cycleStart, cycleRestart, subopStart,
 *   subopNext, progressContinue, progressCancel, recapture, ...
 *   }
 *  {number}
 */
export type BioAPI_GUI_RESPONSE = _enum_for_BioAPI_GUI_RESPONSE | ENUMERATED;


/**
 * @summary BioAPI_GUI_RESPONSE_default_
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_RESPONSE_default_: BioAPI_GUI_RESPONSE = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary default_
 * @constant
 * @type {number}
 */
export const default_: BioAPI_GUI_RESPONSE = BioAPI_GUI_RESPONSE_default_; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_RESPONSE_opComplete
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_RESPONSE_opComplete: BioAPI_GUI_RESPONSE = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary opComplete
 * @constant
 * @type {number}
 */
export const opComplete: BioAPI_GUI_RESPONSE = BioAPI_GUI_RESPONSE_opComplete; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_RESPONSE_opCancel
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_RESPONSE_opCancel: BioAPI_GUI_RESPONSE = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary opCancel
 * @constant
 * @type {number}
 */
export const opCancel: BioAPI_GUI_RESPONSE = BioAPI_GUI_RESPONSE_opCancel; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_RESPONSE_cycleStart
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_RESPONSE_cycleStart: BioAPI_GUI_RESPONSE = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary cycleStart
 * @constant
 * @type {number}
 */
export const cycleStart: BioAPI_GUI_RESPONSE = BioAPI_GUI_RESPONSE_cycleStart; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_RESPONSE_cycleRestart
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_RESPONSE_cycleRestart: BioAPI_GUI_RESPONSE = 4; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary cycleRestart
 * @constant
 * @type {number}
 */
export const cycleRestart: BioAPI_GUI_RESPONSE = BioAPI_GUI_RESPONSE_cycleRestart; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_RESPONSE_subopStart
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_RESPONSE_subopStart: BioAPI_GUI_RESPONSE = 5; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary subopStart
 * @constant
 * @type {number}
 */
export const subopStart: BioAPI_GUI_RESPONSE = BioAPI_GUI_RESPONSE_subopStart; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_RESPONSE_subopNext
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_RESPONSE_subopNext: BioAPI_GUI_RESPONSE = 6; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary subopNext
 * @constant
 * @type {number}
 */
export const subopNext: BioAPI_GUI_RESPONSE = BioAPI_GUI_RESPONSE_subopNext; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_RESPONSE_progressContinue
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_RESPONSE_progressContinue: BioAPI_GUI_RESPONSE = 7; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary progressContinue
 * @constant
 * @type {number}
 */
export const progressContinue: BioAPI_GUI_RESPONSE = BioAPI_GUI_RESPONSE_progressContinue; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_RESPONSE_progressCancel
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_RESPONSE_progressCancel: BioAPI_GUI_RESPONSE = 8; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary progressCancel
 * @constant
 * @type {number}
 */
export const progressCancel: BioAPI_GUI_RESPONSE = BioAPI_GUI_RESPONSE_progressCancel; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_GUI_RESPONSE_recapture
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_RESPONSE_recapture: BioAPI_GUI_RESPONSE = 9; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary recapture
 * @constant
 * @type {number}
 */
export const recapture: BioAPI_GUI_RESPONSE = BioAPI_GUI_RESPONSE_recapture; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_BioAPI_GUI_RESPONSE = $._decodeEnumerated;




export const _encode_BioAPI_GUI_RESPONSE = $._encodeEnumerated;

