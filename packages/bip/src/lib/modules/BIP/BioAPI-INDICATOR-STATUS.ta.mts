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
import * as $ from '@wildboar/asn1/functional';


export enum _enum_for_BioAPI_INDICATOR_STATUS {
  accept = 0,
  reject = 1,
  ready = 2,
  busy = 3,
  failure = 4,
}


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
export const BioAPI_INDICATOR_STATUS_accept: BioAPI_INDICATOR_STATUS = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary accept
 * @constant
 * @type {number}
 */
export const accept: BioAPI_INDICATOR_STATUS = BioAPI_INDICATOR_STATUS_accept; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_INDICATOR_STATUS_reject
 * @constant
 * @type {number}
 */
export const BioAPI_INDICATOR_STATUS_reject: BioAPI_INDICATOR_STATUS = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary reject
 * @constant
 * @type {number}
 */
export const reject: BioAPI_INDICATOR_STATUS = BioAPI_INDICATOR_STATUS_reject; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_INDICATOR_STATUS_ready
 * @constant
 * @type {number}
 */
export const BioAPI_INDICATOR_STATUS_ready: BioAPI_INDICATOR_STATUS = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary ready
 * @constant
 * @type {number}
 */
export const ready: BioAPI_INDICATOR_STATUS = BioAPI_INDICATOR_STATUS_ready; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_INDICATOR_STATUS_busy
 * @constant
 * @type {number}
 */
export const BioAPI_INDICATOR_STATUS_busy: BioAPI_INDICATOR_STATUS = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary busy
 * @constant
 * @type {number}
 */
export const busy: BioAPI_INDICATOR_STATUS = BioAPI_INDICATOR_STATUS_busy; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BioAPI_INDICATOR_STATUS_failure
 * @constant
 * @type {number}
 */
export const BioAPI_INDICATOR_STATUS_failure: BioAPI_INDICATOR_STATUS = 4; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary failure
 * @constant
 * @type {number}
 */
export const failure: BioAPI_INDICATOR_STATUS = BioAPI_INDICATOR_STATUS_failure; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_BioAPI_INDICATOR_STATUS = $._decodeEnumerated;




export const _encode_BioAPI_INDICATOR_STATUS = $._encodeEnumerated;


/* eslint-enable */
