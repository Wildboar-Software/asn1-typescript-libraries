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
export const InvokeProtectionError = _enum_for_InvokeProtectionError;


/**
 * @summary InvokeProtectionError_preempted
 * @constant
 * @type {number}
 */
export const InvokeProtectionError_preempted =
    InvokeProtectionError.preempted satisfies InvokeProtectionError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary preempted
 * @constant
 * @type {number}
 */
export const preempted =
    InvokeProtectionError.preempted satisfies InvokeProtectionError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary InvokeProtectionError_failure
 * @constant
 * @type {number}
 */
export const InvokeProtectionError_failure =
    InvokeProtectionError.failure satisfies InvokeProtectionError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary failure
 * @constant
 * @type {number}
 */
export const failure =
    InvokeProtectionError.failure satisfies InvokeProtectionError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary InvokeProtectionError_timeout
 * @constant
 * @type {number}
 */
export const InvokeProtectionError_timeout =
    InvokeProtectionError.timeout satisfies InvokeProtectionError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary timeout
 * @constant
 * @type {number}
 */
export const timeout =
    InvokeProtectionError.timeout satisfies InvokeProtectionError; /* SHORT_NAMED_ENUMERATED_VALUE */




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
