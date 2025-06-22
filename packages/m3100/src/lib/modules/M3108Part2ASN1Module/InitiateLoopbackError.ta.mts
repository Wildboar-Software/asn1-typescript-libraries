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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


export enum _enum_for_InitiateLoopbackError {
    unavailableLCS = 1,
    offDutyLCS = 2,
    loopbackNotSupported = 3,
}


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
 * ```
 *
 * @enum {number}
 */
export type InitiateLoopbackError =
    | _enum_for_InitiateLoopbackError
    | ENUMERATED;


/**
 * @summary InitiateLoopbackError_unavailableLCS
 * @constant
 * @type {number}
 */
export const InitiateLoopbackError_unavailableLCS: InitiateLoopbackError = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unavailableLCS
 * @constant
 * @type {number}
 */
export const unavailableLCS: InitiateLoopbackError = InitiateLoopbackError_unavailableLCS; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary InitiateLoopbackError_offDutyLCS
 * @constant
 * @type {number}
 */
export const InitiateLoopbackError_offDutyLCS: InitiateLoopbackError = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary offDutyLCS
 * @constant
 * @type {number}
 */
export const offDutyLCS: InitiateLoopbackError = InitiateLoopbackError_offDutyLCS; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary InitiateLoopbackError_loopbackNotSupported
 * @constant
 * @type {number}
 */
export const InitiateLoopbackError_loopbackNotSupported: InitiateLoopbackError = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary loopbackNotSupported
 * @constant
 * @type {number}
 */
export const loopbackNotSupported: InitiateLoopbackError = InitiateLoopbackError_loopbackNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_InitiateLoopbackError = $._decodeEnumerated;




export const _encode_InitiateLoopbackError = $._encodeEnumerated;


/* eslint-enable */
