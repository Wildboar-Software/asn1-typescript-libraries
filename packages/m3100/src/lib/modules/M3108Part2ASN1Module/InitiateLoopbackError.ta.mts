/* eslint-disable */
import {
    type ENUMERATED,
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
export const InitiateLoopbackError_unavailableLCS: _enum_for_InitiateLoopbackError.unavailableLCS = _enum_for_InitiateLoopbackError.unavailableLCS; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unavailableLCS
 * @constant
 * @type {number}
 */
export const unavailableLCS: _enum_for_InitiateLoopbackError.unavailableLCS = InitiateLoopbackError_unavailableLCS; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary InitiateLoopbackError_offDutyLCS
 * @constant
 * @type {number}
 */
export const InitiateLoopbackError_offDutyLCS: _enum_for_InitiateLoopbackError.offDutyLCS = _enum_for_InitiateLoopbackError.offDutyLCS; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary offDutyLCS
 * @constant
 * @type {number}
 */
export const offDutyLCS: _enum_for_InitiateLoopbackError.offDutyLCS = InitiateLoopbackError_offDutyLCS; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary InitiateLoopbackError_loopbackNotSupported
 * @constant
 * @type {number}
 */
export const InitiateLoopbackError_loopbackNotSupported: _enum_for_InitiateLoopbackError.loopbackNotSupported = _enum_for_InitiateLoopbackError.loopbackNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary loopbackNotSupported
 * @constant
 * @type {number}
 */
export const loopbackNotSupported: _enum_for_InitiateLoopbackError.loopbackNotSupported = InitiateLoopbackError_loopbackNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_InitiateLoopbackError: $.ASN1Decoder<number> = $._decodeEnumerated;




export const _encode_InitiateLoopbackError: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
