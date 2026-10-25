/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
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
export const ControlResult: typeof _enum_for_ControlResult = _enum_for_ControlResult;


/**
 * @summary ControlResult_complete
 * @constant
 * @type {number}
 */
export const ControlResult_complete: _enum_for_ControlResult.complete =
    ControlResult.complete; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary complete
 * @constant
 * @type {number}
 */
export const complete: _enum_for_ControlResult.complete =
    ControlResult.complete; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ControlResult_alreadyInCondition
 * @constant
 * @type {number}
 */
export const ControlResult_alreadyInCondition: _enum_for_ControlResult.alreadyInCondition =
    ControlResult.alreadyInCondition; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary alreadyInCondition
 * @constant
 * @type {number}
 */
export const alreadyInCondition: _enum_for_ControlResult.alreadyInCondition =
    ControlResult.alreadyInCondition; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ControlResult_fail_InvalidControlActionType
 * @constant
 * @type {number}
 */
export const ControlResult_fail_InvalidControlActionType: _enum_for_ControlResult.fail_InvalidControlActionType =
    ControlResult.fail_InvalidControlActionType; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary fail_InvalidControlActionType
 * @constant
 * @type {number}
 */
export const fail_InvalidControlActionType: _enum_for_ControlResult.fail_InvalidControlActionType =
    ControlResult.fail_InvalidControlActionType; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ControlResult_fail_ReasonUnknown
 * @constant
 * @type {number}
 */
export const ControlResult_fail_ReasonUnknown: _enum_for_ControlResult.fail_ReasonUnknown =
    ControlResult.fail_ReasonUnknown; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary fail_ReasonUnknown
 * @constant
 * @type {number}
 */
export const fail_ReasonUnknown: _enum_for_ControlResult.fail_ReasonUnknown =
    ControlResult.fail_ReasonUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_ControlResult(el: _Element): ControlResult {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ControlResult.complete: return ControlResult.complete;
        case ControlResult.alreadyInCondition: return ControlResult.alreadyInCondition;
        case ControlResult.fail_InvalidControlActionType: return ControlResult.fail_InvalidControlActionType;
        case ControlResult.fail_ReasonUnknown: return ControlResult.fail_ReasonUnknown;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for ControlResult.',
                el,
            );
    }
}




export const _encode_ControlResult: $.ASN1Encoder<ControlResult> = $._encodeEnumerated as $.ASN1Encoder<ControlResult>;


/* eslint-enable */
