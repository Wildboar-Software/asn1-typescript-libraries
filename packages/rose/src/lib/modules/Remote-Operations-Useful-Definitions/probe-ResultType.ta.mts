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

/* START_OF_SYMBOL_DEFINITION _enum_for_probe_ResultType */
export enum _enum_for_probe_ResultType {
  running = 0,
  finished = 1,
  unknown = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_probe_ResultType */

/* START_OF_SYMBOL_DEFINITION probe_ResultType */
/**
 * @summary probe_ResultType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * probe-ResultType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type probe_ResultType = _enum_for_probe_ResultType | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION probe_ResultType */

/* START_OF_SYMBOL_DEFINITION probe_ResultType_running */
/**
 * @summary probe_ResultType_running
 * @constant
 * @type {number}
 */
export const probe_ResultType_running: probe_ResultType = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION probe_ResultType_running */

/* START_OF_SYMBOL_DEFINITION running */
/**
 * @summary running
 * @constant
 * @type {number}
 */
export const running: probe_ResultType = probe_ResultType_running; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION running */

/* START_OF_SYMBOL_DEFINITION probe_ResultType_finished */
/**
 * @summary probe_ResultType_finished
 * @constant
 * @type {number}
 */
export const probe_ResultType_finished: probe_ResultType = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION probe_ResultType_finished */

/* START_OF_SYMBOL_DEFINITION finished */
/**
 * @summary finished
 * @constant
 * @type {number}
 */
export const finished: probe_ResultType = probe_ResultType_finished; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION finished */

/* START_OF_SYMBOL_DEFINITION probe_ResultType_unknown */
/**
 * @summary probe_ResultType_unknown
 * @constant
 * @type {number}
 */
export const probe_ResultType_unknown: probe_ResultType = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION probe_ResultType_unknown */

/* START_OF_SYMBOL_DEFINITION unknown */
/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export const unknown: probe_ResultType = probe_ResultType_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_probe_ResultType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_probe_ResultType */

/* START_OF_SYMBOL_DEFINITION _decode_probe_ResultType */
export const _decode_probe_ResultType = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_probe_ResultType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_probe_ResultType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_probe_ResultType */

/* START_OF_SYMBOL_DEFINITION _encode_probe_ResultType */
export const _encode_probe_ResultType = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_probe_ResultType */

/* eslint-enable */
