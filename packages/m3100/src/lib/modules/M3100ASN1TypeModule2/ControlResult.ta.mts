/* eslint-disable */
import {
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

/* START_OF_SYMBOL_DEFINITION _enum_for_ControlResult */
/**
 * @summary ControlResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlResult  ::=  ENUMERATED {
 *   complete(0), alreadyInCondition(1), fail-InvalidControlActionType(2),
 *   fail-ReasonUnknown(3)}
 * ```@enum {number}
 */
export enum _enum_for_ControlResult {
    complete = 0,
    alreadyInCondition = 1,
    fail_InvalidControlActionType = 2,
    fail_ReasonUnknown = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ControlResult */

/* START_OF_SYMBOL_DEFINITION ControlResult */
/**
 * @summary ControlResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlResult  ::=  ENUMERATED {
 *   complete(0), alreadyInCondition(1), fail-InvalidControlActionType(2),
 *   fail-ReasonUnknown(3)}
 * ```@enum {number}
 */
export type ControlResult = _enum_for_ControlResult;
/* END_OF_SYMBOL_DEFINITION ControlResult */

/* START_OF_SYMBOL_DEFINITION ControlResult */
/**
 * @summary ControlResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlResult  ::=  ENUMERATED {
 *   complete(0), alreadyInCondition(1), fail-InvalidControlActionType(2),
 *   fail-ReasonUnknown(3)}
 * ```@enum {number}
 */
export const ControlResult = _enum_for_ControlResult;
/* END_OF_SYMBOL_DEFINITION ControlResult */

/* START_OF_SYMBOL_DEFINITION ControlResult_complete */
/**
 * @summary ControlResult_complete
 * @constant
 * @type {number}
 */
export const ControlResult_complete: ControlResult =
    ControlResult.complete; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlResult_complete */

/* START_OF_SYMBOL_DEFINITION complete */
/**
 * @summary complete
 * @constant
 * @type {number}
 */
export const complete: ControlResult =
    ControlResult.complete; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION complete */

/* START_OF_SYMBOL_DEFINITION ControlResult_alreadyInCondition */
/**
 * @summary ControlResult_alreadyInCondition
 * @constant
 * @type {number}
 */
export const ControlResult_alreadyInCondition: ControlResult =
    ControlResult.alreadyInCondition; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlResult_alreadyInCondition */

/* START_OF_SYMBOL_DEFINITION alreadyInCondition */
/**
 * @summary alreadyInCondition
 * @constant
 * @type {number}
 */
export const alreadyInCondition: ControlResult =
    ControlResult.alreadyInCondition; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION alreadyInCondition */

/* START_OF_SYMBOL_DEFINITION ControlResult_fail_InvalidControlActionType */
/**
 * @summary ControlResult_fail_InvalidControlActionType
 * @constant
 * @type {number}
 */
export const ControlResult_fail_InvalidControlActionType: ControlResult =
    ControlResult.fail_InvalidControlActionType; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlResult_fail_InvalidControlActionType */

/* START_OF_SYMBOL_DEFINITION fail_InvalidControlActionType */
/**
 * @summary fail_InvalidControlActionType
 * @constant
 * @type {number}
 */
export const fail_InvalidControlActionType: ControlResult =
    ControlResult.fail_InvalidControlActionType; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION fail_InvalidControlActionType */

/* START_OF_SYMBOL_DEFINITION ControlResult_fail_ReasonUnknown */
/**
 * @summary ControlResult_fail_ReasonUnknown
 * @constant
 * @type {number}
 */
export const ControlResult_fail_ReasonUnknown: ControlResult =
    ControlResult.fail_ReasonUnknown; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlResult_fail_ReasonUnknown */

/* START_OF_SYMBOL_DEFINITION fail_ReasonUnknown */
/**
 * @summary fail_ReasonUnknown
 * @constant
 * @type {number}
 */
export const fail_ReasonUnknown: ControlResult =
    ControlResult.fail_ReasonUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION fail_ReasonUnknown */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlResult */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlResult */

/* START_OF_SYMBOL_DEFINITION _decode_ControlResult */
export const _decode_ControlResult = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ControlResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlResult */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlResult */

/* START_OF_SYMBOL_DEFINITION _encode_ControlResult */
export const _encode_ControlResult = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ControlResult */

/* eslint-enable */
