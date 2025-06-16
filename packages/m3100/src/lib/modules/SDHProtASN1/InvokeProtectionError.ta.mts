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
export const InvokeProtectionError_preempted: InvokeProtectionError =
    InvokeProtectionError.preempted; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary preempted
 * @constant
 * @type {number}
 */
export const preempted: InvokeProtectionError =
    InvokeProtectionError.preempted; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary InvokeProtectionError_failure
 * @constant
 * @type {number}
 */
export const InvokeProtectionError_failure: InvokeProtectionError =
    InvokeProtectionError.failure; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary failure
 * @constant
 * @type {number}
 */
export const failure: InvokeProtectionError =
    InvokeProtectionError.failure; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary InvokeProtectionError_timeout
 * @constant
 * @type {number}
 */
export const InvokeProtectionError_timeout: InvokeProtectionError =
    InvokeProtectionError.timeout; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary timeout
 * @constant
 * @type {number}
 */
export const timeout: InvokeProtectionError =
    InvokeProtectionError.timeout; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_InvokeProtectionError = $._decodeEnumerated;




export const _encode_InvokeProtectionError = $._encodeEnumerated;


/* eslint-enable */
