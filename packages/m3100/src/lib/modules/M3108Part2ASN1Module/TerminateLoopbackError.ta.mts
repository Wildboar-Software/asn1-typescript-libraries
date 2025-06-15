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

/* START_OF_SYMBOL_DEFINITION _enum_for_TerminateLoopbackError */
export enum _enum_for_TerminateLoopbackError {
    loopbackNotSet = 0,
    loopbackNotSupported = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_TerminateLoopbackError */

/* START_OF_SYMBOL_DEFINITION TerminateLoopbackError */
/**
 * @summary TerminateLoopbackError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateLoopbackError  ::=  ENUMERATED {
 *   loopbackNotSet(0), loopbackNotSupported(1), ...
 *   }
 * ```@enum {number}
 */
export type TerminateLoopbackError =
    | _enum_for_TerminateLoopbackError
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION TerminateLoopbackError */

/* START_OF_SYMBOL_DEFINITION TerminateLoopbackError_loopbackNotSet */
/**
 * @summary TerminateLoopbackError_loopbackNotSet
 * @constant
 * @type {number}
 */
export const TerminateLoopbackError_loopbackNotSet: TerminateLoopbackError = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminateLoopbackError_loopbackNotSet */

/* START_OF_SYMBOL_DEFINITION loopbackNotSet */
/**
 * @summary loopbackNotSet
 * @constant
 * @type {number}
 */
export const loopbackNotSet: TerminateLoopbackError = TerminateLoopbackError_loopbackNotSet; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION loopbackNotSet */

/* START_OF_SYMBOL_DEFINITION TerminateLoopbackError_loopbackNotSupported */
/**
 * @summary TerminateLoopbackError_loopbackNotSupported
 * @constant
 * @type {number}
 */
export const TerminateLoopbackError_loopbackNotSupported: TerminateLoopbackError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminateLoopbackError_loopbackNotSupported */

/* START_OF_SYMBOL_DEFINITION loopbackNotSupported */
/**
 * @summary loopbackNotSupported
 * @constant
 * @type {number}
 */
export const loopbackNotSupported: TerminateLoopbackError = TerminateLoopbackError_loopbackNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION loopbackNotSupported */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminateLoopbackError */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminateLoopbackError */

/* START_OF_SYMBOL_DEFINITION _decode_TerminateLoopbackError */
export const _decode_TerminateLoopbackError = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_TerminateLoopbackError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminateLoopbackError */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminateLoopbackError */

/* START_OF_SYMBOL_DEFINITION _encode_TerminateLoopbackError */
export const _encode_TerminateLoopbackError = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_TerminateLoopbackError */

/* eslint-enable */
