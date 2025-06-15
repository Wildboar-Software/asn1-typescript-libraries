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

/* START_OF_SYMBOL_DEFINITION _enum_for_TerminateError */
export enum _enum_for_TerminateError {
    terminationNotAllowed = 0,
    invalidSessionType = 1,
    invalidSessionId = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_TerminateError */

/* START_OF_SYMBOL_DEFINITION TerminateError */
/**
 * @summary TerminateError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateError  ::=  ENUMERATED {
 *   terminationNotAllowed,
 *   invalidSessionType,
 *   invalidSessionId,
 *   ... }
 * ```@enum {number}
 */
export type TerminateError = _enum_for_TerminateError | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION TerminateError */

/* START_OF_SYMBOL_DEFINITION TerminateError_terminationNotAllowed */
/**
 * @summary TerminateError_terminationNotAllowed
 * @constant
 * @type {number}
 */
export const TerminateError_terminationNotAllowed: TerminateError = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminateError_terminationNotAllowed */

/* START_OF_SYMBOL_DEFINITION terminationNotAllowed */
/**
 * @summary terminationNotAllowed
 * @constant
 * @type {number}
 */
export const terminationNotAllowed: TerminateError = TerminateError_terminationNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION terminationNotAllowed */

/* START_OF_SYMBOL_DEFINITION TerminateError_invalidSessionType */
/**
 * @summary TerminateError_invalidSessionType
 * @constant
 * @type {number}
 */
export const TerminateError_invalidSessionType: TerminateError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminateError_invalidSessionType */

/* START_OF_SYMBOL_DEFINITION invalidSessionType */
/**
 * @summary invalidSessionType
 * @constant
 * @type {number}
 */
export const invalidSessionType: TerminateError = TerminateError_invalidSessionType; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidSessionType */

/* START_OF_SYMBOL_DEFINITION TerminateError_invalidSessionId */
/**
 * @summary TerminateError_invalidSessionId
 * @constant
 * @type {number}
 */
export const TerminateError_invalidSessionId: TerminateError = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminateError_invalidSessionId */

/* START_OF_SYMBOL_DEFINITION invalidSessionId */
/**
 * @summary invalidSessionId
 * @constant
 * @type {number}
 */
export const invalidSessionId: TerminateError = TerminateError_invalidSessionId; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidSessionId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminateError */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminateError */

/* START_OF_SYMBOL_DEFINITION _decode_TerminateError */
export const _decode_TerminateError = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_TerminateError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminateError */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminateError */

/* START_OF_SYMBOL_DEFINITION _encode_TerminateError */
export const _encode_TerminateError = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_TerminateError */

/* eslint-enable */
