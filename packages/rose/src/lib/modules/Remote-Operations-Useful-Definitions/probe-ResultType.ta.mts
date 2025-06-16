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


export enum _enum_for_probe_ResultType {
  running = 0,
  finished = 1,
  unknown = 2,
}


/**
 * @summary probe_ResultType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * probe-ResultType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 *  {number}
 */
export type probe_ResultType = _enum_for_probe_ResultType | ENUMERATED;


/**
 * @summary probe_ResultType_running
 * @constant
 * @type {number}
 */
export const probe_ResultType_running: probe_ResultType = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary running
 * @constant
 * @type {number}
 */
export const running: probe_ResultType = probe_ResultType_running; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary probe_ResultType_finished
 * @constant
 * @type {number}
 */
export const probe_ResultType_finished: probe_ResultType = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary finished
 * @constant
 * @type {number}
 */
export const finished: probe_ResultType = probe_ResultType_finished; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary probe_ResultType_unknown
 * @constant
 * @type {number}
 */
export const probe_ResultType_unknown: probe_ResultType = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export const unknown: probe_ResultType = probe_ResultType_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_probe_ResultType = $._decodeEnumerated;




export const _encode_probe_ResultType = $._encodeEnumerated;

