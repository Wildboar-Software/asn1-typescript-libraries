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

/* START_OF_SYMBOL_DEFINITION _enum_for_InitiateLoopbackError */
export enum _enum_for_InitiateLoopbackError {
    unavailableLCS = 1,
    offDutyLCS = 2,
    loopbackNotSupported = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_InitiateLoopbackError */

/* START_OF_SYMBOL_DEFINITION InitiateLoopbackError */
/**
 * @summary InitiateLoopbackError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitiateLoopbackError  ::=  ENUMERATED {
 *   unavailableLCS(1), offDutyLCS(2), loopbackNotSupported(3), ...
 *   }
 * ```@enum {number}
 */
export type InitiateLoopbackError =
    | _enum_for_InitiateLoopbackError
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION InitiateLoopbackError */

/* START_OF_SYMBOL_DEFINITION InitiateLoopbackError_unavailableLCS */
/**
 * @summary InitiateLoopbackError_unavailableLCS
 * @constant
 * @type {number}
 */
export const InitiateLoopbackError_unavailableLCS: InitiateLoopbackError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InitiateLoopbackError_unavailableLCS */

/* START_OF_SYMBOL_DEFINITION unavailableLCS */
/**
 * @summary unavailableLCS
 * @constant
 * @type {number}
 */
export const unavailableLCS: InitiateLoopbackError = InitiateLoopbackError_unavailableLCS; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unavailableLCS */

/* START_OF_SYMBOL_DEFINITION InitiateLoopbackError_offDutyLCS */
/**
 * @summary InitiateLoopbackError_offDutyLCS
 * @constant
 * @type {number}
 */
export const InitiateLoopbackError_offDutyLCS: InitiateLoopbackError = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InitiateLoopbackError_offDutyLCS */

/* START_OF_SYMBOL_DEFINITION offDutyLCS */
/**
 * @summary offDutyLCS
 * @constant
 * @type {number}
 */
export const offDutyLCS: InitiateLoopbackError = InitiateLoopbackError_offDutyLCS; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION offDutyLCS */

/* START_OF_SYMBOL_DEFINITION InitiateLoopbackError_loopbackNotSupported */
/**
 * @summary InitiateLoopbackError_loopbackNotSupported
 * @constant
 * @type {number}
 */
export const InitiateLoopbackError_loopbackNotSupported: InitiateLoopbackError = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InitiateLoopbackError_loopbackNotSupported */

/* START_OF_SYMBOL_DEFINITION loopbackNotSupported */
/**
 * @summary loopbackNotSupported
 * @constant
 * @type {number}
 */
export const loopbackNotSupported: InitiateLoopbackError = InitiateLoopbackError_loopbackNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION loopbackNotSupported */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InitiateLoopbackError */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InitiateLoopbackError */

/* START_OF_SYMBOL_DEFINITION _decode_InitiateLoopbackError */
export const _decode_InitiateLoopbackError = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_InitiateLoopbackError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InitiateLoopbackError */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InitiateLoopbackError */

/* START_OF_SYMBOL_DEFINITION _encode_InitiateLoopbackError */
export const _encode_InitiateLoopbackError = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_InitiateLoopbackError */

/* eslint-enable */
