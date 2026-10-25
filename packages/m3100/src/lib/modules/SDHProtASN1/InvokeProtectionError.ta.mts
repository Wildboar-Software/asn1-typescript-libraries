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
 * @summary InvokeProtectionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeProtectionError  ::=  ENUMERATED {preempted(0), failure(1), timeout(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_InvokeProtectionError {
    preempted = 0,
    failure = 1,
    timeout = 2,
}


/**
 * @summary InvokeProtectionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeProtectionError  ::=  ENUMERATED {preempted(0), failure(1), timeout(2)}
 * ```
 *
 * @enum {number}
 */
export type InvokeProtectionError = _enum_for_InvokeProtectionError;


/**
 * @summary InvokeProtectionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeProtectionError  ::=  ENUMERATED {preempted(0), failure(1), timeout(2)}
 * ```
 *
 * @enum {number}
 */
export const InvokeProtectionError: typeof _enum_for_InvokeProtectionError = _enum_for_InvokeProtectionError;


/**
 * @summary InvokeProtectionError_preempted
 * @constant
 * @type {number}
 */
export const InvokeProtectionError_preempted: _enum_for_InvokeProtectionError.preempted =
    InvokeProtectionError.preempted; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary preempted
 * @constant
 * @type {number}
 */
export const preempted: _enum_for_InvokeProtectionError.preempted =
    InvokeProtectionError.preempted; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary InvokeProtectionError_failure
 * @constant
 * @type {number}
 */
export const InvokeProtectionError_failure: _enum_for_InvokeProtectionError.failure =
    InvokeProtectionError.failure; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary failure
 * @constant
 * @type {number}
 */
export const failure: _enum_for_InvokeProtectionError.failure =
    InvokeProtectionError.failure; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary InvokeProtectionError_timeout
 * @constant
 * @type {number}
 */
export const InvokeProtectionError_timeout: _enum_for_InvokeProtectionError.timeout =
    InvokeProtectionError.timeout; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary timeout
 * @constant
 * @type {number}
 */
export const timeout: _enum_for_InvokeProtectionError.timeout =
    InvokeProtectionError.timeout; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_InvokeProtectionError(el: _Element): InvokeProtectionError {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case InvokeProtectionError.preempted: return InvokeProtectionError.preempted;
        case InvokeProtectionError.failure: return InvokeProtectionError.failure;
        case InvokeProtectionError.timeout: return InvokeProtectionError.timeout;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for InvokeProtectionError.',
                el,
            );
    }
}




export const _encode_InvokeProtectionError: $.ASN1Encoder<InvokeProtectionError> = $._encodeEnumerated as $.ASN1Encoder<InvokeProtectionError>;


/* eslint-enable */
