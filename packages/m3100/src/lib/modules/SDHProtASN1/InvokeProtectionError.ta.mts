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

/* START_OF_SYMBOL_DEFINITION _enum_for_InvokeProtectionError */
/**
 * @summary InvokeProtectionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeProtectionError  ::=  ENUMERATED {preempted(0), failure(1), timeout(2)}
 * ```@enum {number}
 */
export enum _enum_for_InvokeProtectionError {
    preempted = 0,
    failure = 1,
    timeout = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_InvokeProtectionError */

/* START_OF_SYMBOL_DEFINITION InvokeProtectionError */
/**
 * @summary InvokeProtectionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeProtectionError  ::=  ENUMERATED {preempted(0), failure(1), timeout(2)}
 * ```@enum {number}
 */
export type InvokeProtectionError = _enum_for_InvokeProtectionError;
/* END_OF_SYMBOL_DEFINITION InvokeProtectionError */

/* START_OF_SYMBOL_DEFINITION InvokeProtectionError */
/**
 * @summary InvokeProtectionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeProtectionError  ::=  ENUMERATED {preempted(0), failure(1), timeout(2)}
 * ```@enum {number}
 */
export const InvokeProtectionError = _enum_for_InvokeProtectionError;
/* END_OF_SYMBOL_DEFINITION InvokeProtectionError */

/* START_OF_SYMBOL_DEFINITION InvokeProtectionError_preempted */
/**
 * @summary InvokeProtectionError_preempted
 * @constant
 * @type {number}
 */
export const InvokeProtectionError_preempted: InvokeProtectionError =
    InvokeProtectionError.preempted; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InvokeProtectionError_preempted */

/* START_OF_SYMBOL_DEFINITION preempted */
/**
 * @summary preempted
 * @constant
 * @type {number}
 */
export const preempted: InvokeProtectionError =
    InvokeProtectionError.preempted; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION preempted */

/* START_OF_SYMBOL_DEFINITION InvokeProtectionError_failure */
/**
 * @summary InvokeProtectionError_failure
 * @constant
 * @type {number}
 */
export const InvokeProtectionError_failure: InvokeProtectionError =
    InvokeProtectionError.failure; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InvokeProtectionError_failure */

/* START_OF_SYMBOL_DEFINITION failure */
/**
 * @summary failure
 * @constant
 * @type {number}
 */
export const failure: InvokeProtectionError =
    InvokeProtectionError.failure; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION failure */

/* START_OF_SYMBOL_DEFINITION InvokeProtectionError_timeout */
/**
 * @summary InvokeProtectionError_timeout
 * @constant
 * @type {number}
 */
export const InvokeProtectionError_timeout: InvokeProtectionError =
    InvokeProtectionError.timeout; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InvokeProtectionError_timeout */

/* START_OF_SYMBOL_DEFINITION timeout */
/**
 * @summary timeout
 * @constant
 * @type {number}
 */
export const timeout: InvokeProtectionError =
    InvokeProtectionError.timeout; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION timeout */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeProtectionError */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeProtectionError */

/* START_OF_SYMBOL_DEFINITION _decode_InvokeProtectionError */
export const _decode_InvokeProtectionError = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_InvokeProtectionError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeProtectionError */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeProtectionError */

/* START_OF_SYMBOL_DEFINITION _encode_InvokeProtectionError */
export const _encode_InvokeProtectionError = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_InvokeProtectionError */

/* eslint-enable */
