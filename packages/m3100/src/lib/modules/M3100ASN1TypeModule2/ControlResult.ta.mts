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
import * as $ from '@wildboar/asn1/functional';


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
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ControlResult {
    complete = 0,
    alreadyInCondition = 1,
    fail_InvalidControlActionType = 2,
    fail_ReasonUnknown = 3,
}


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
 * ```
 *
 * @enum {number}
 */
export type ControlResult = _enum_for_ControlResult;


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
 * ```
 *
 * @enum {number}
 */
export const ControlResult = _enum_for_ControlResult;


/**
 * @summary ControlResult_complete
 * @constant
 * @type {number}
 */
export const ControlResult_complete: ControlResult =
    ControlResult.complete; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary complete
 * @constant
 * @type {number}
 */
export const complete: ControlResult =
    ControlResult.complete; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ControlResult_alreadyInCondition
 * @constant
 * @type {number}
 */
export const ControlResult_alreadyInCondition: ControlResult =
    ControlResult.alreadyInCondition; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary alreadyInCondition
 * @constant
 * @type {number}
 */
export const alreadyInCondition: ControlResult =
    ControlResult.alreadyInCondition; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ControlResult_fail_InvalidControlActionType
 * @constant
 * @type {number}
 */
export const ControlResult_fail_InvalidControlActionType: ControlResult =
    ControlResult.fail_InvalidControlActionType; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary fail_InvalidControlActionType
 * @constant
 * @type {number}
 */
export const fail_InvalidControlActionType: ControlResult =
    ControlResult.fail_InvalidControlActionType; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ControlResult_fail_ReasonUnknown
 * @constant
 * @type {number}
 */
export const ControlResult_fail_ReasonUnknown: ControlResult =
    ControlResult.fail_ReasonUnknown; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary fail_ReasonUnknown
 * @constant
 * @type {number}
 */
export const fail_ReasonUnknown: ControlResult =
    ControlResult.fail_ReasonUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ControlResult = $._decodeEnumerated;




export const _encode_ControlResult = $._encodeEnumerated;


/* eslint-enable */
