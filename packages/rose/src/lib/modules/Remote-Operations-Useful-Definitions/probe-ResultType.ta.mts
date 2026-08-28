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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


export enum _enum_for_probe_ResultType {
  running = 0,
  finished = 1,
  unknown = 2,
}


/**
 * @summary probe_ResultType
 * @description
 *
 * Result of `probe`: whether that invocation is still running, has finished, or is unknown (never happened or forgotten) (ITU-T Rec. X.880 (1994) Amd.1 (11/95) §10.6.3). Extensible (`...`).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * probe-ResultType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type probe_ResultType = _enum_for_probe_ResultType | ENUMERATED;


/**
 * @summary probe_ResultType_running
 * @description Invocation is still being performed (Amd.1 §10.6.3).
 * @constant
 * @type {number}
 */
export const probe_ResultType_running: probe_ResultType = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary running
 * @description Invocation is still being performed (Amd.1 §10.6.3).
 * @constant
 * @type {number}
 */
export const running: probe_ResultType = probe_ResultType_running; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary probe_ResultType_finished
 * @description Performance has finished; as a side effect, any return is retransmitted unless the original operation was idempotent (Amd.1 §10.6.3, §10.6.5).
 * @constant
 * @type {number}
 */
export const probe_ResultType_finished: probe_ResultType = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary finished
 * @description Performance has finished; as a side effect, any return is retransmitted unless the original operation was idempotent (Amd.1 §10.6.3, §10.6.5).
 * @constant
 * @type {number}
 */
export const finished: probe_ResultType = probe_ResultType_finished; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary probe_ResultType_unknown
 * @description Invocation never happened or has been forgotten (Amd.1 §10.6.3 note).
 * @constant
 * @type {number}
 */
export const probe_ResultType_unknown: probe_ResultType = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unknown
 * @description Invocation never happened or has been forgotten (Amd.1 §10.6.3 note).
 * @constant
 * @type {number}
 */
export const unknown: probe_ResultType = probe_ResultType_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_probe_ResultType = $._decodeEnumerated;




export const _encode_probe_ResultType = $._encodeEnumerated;


/* eslint-enable */
