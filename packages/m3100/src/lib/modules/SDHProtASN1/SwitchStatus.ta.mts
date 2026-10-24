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
 * @summary SwitchStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SwitchStatus  ::=  ENUMERATED {pending(0), completed(1), operateFailed(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_SwitchStatus {
    pending = 0,
    completed = 1,
    operateFailed = 2,
}


/**
 * @summary SwitchStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SwitchStatus  ::=  ENUMERATED {pending(0), completed(1), operateFailed(2)}
 * ```
 *
 * @enum {number}
 */
export type SwitchStatus = _enum_for_SwitchStatus;


/**
 * @summary SwitchStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SwitchStatus  ::=  ENUMERATED {pending(0), completed(1), operateFailed(2)}
 * ```
 *
 * @enum {number}
 */
export const SwitchStatus = _enum_for_SwitchStatus;


/**
 * @summary SwitchStatus_pending
 * @constant
 * @type {number}
 */
export const SwitchStatus_pending: SwitchStatus =
    SwitchStatus.pending; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary pending
 * @constant
 * @type {number}
 */
export const pending: SwitchStatus =
    SwitchStatus.pending; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SwitchStatus_completed
 * @constant
 * @type {number}
 */
export const SwitchStatus_completed: SwitchStatus =
    SwitchStatus.completed; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary completed
 * @constant
 * @type {number}
 */
export const completed: SwitchStatus =
    SwitchStatus.completed; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SwitchStatus_operateFailed
 * @constant
 * @type {number}
 */
export const SwitchStatus_operateFailed: SwitchStatus =
    SwitchStatus.operateFailed; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary operateFailed
 * @constant
 * @type {number}
 */
export const operateFailed: SwitchStatus =
    SwitchStatus.operateFailed; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_SwitchStatus(el: _Element): SwitchStatus {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case SwitchStatus.pending: return SwitchStatus.pending;
        case SwitchStatus.completed: return SwitchStatus.completed;
        case SwitchStatus.operateFailed: return SwitchStatus.operateFailed;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for SwitchStatus.',
                el,
            );
    }
}




export const _encode_SwitchStatus: $.ASN1Encoder<SwitchStatus> = $._encodeEnumerated as $.ASN1Encoder<SwitchStatus>;


/* eslint-enable */
