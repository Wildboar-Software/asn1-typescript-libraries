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


export enum _enum_for_TerminateLoopbackError {
    loopbackNotSet = 0,
    loopbackNotSupported = 1,
}


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
 * ```
 *
 * @enum {number}
 */
export type TerminateLoopbackError =
    | _enum_for_TerminateLoopbackError
    | ENUMERATED;


/**
 * @summary TerminateLoopbackError_loopbackNotSet
 * @constant
 * @type {number}
 */
export const TerminateLoopbackError_loopbackNotSet: TerminateLoopbackError = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary loopbackNotSet
 * @constant
 * @type {number}
 */
export const loopbackNotSet: TerminateLoopbackError = TerminateLoopbackError_loopbackNotSet; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary TerminateLoopbackError_loopbackNotSupported
 * @constant
 * @type {number}
 */
export const TerminateLoopbackError_loopbackNotSupported: TerminateLoopbackError = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary loopbackNotSupported
 * @constant
 * @type {number}
 */
export const loopbackNotSupported: TerminateLoopbackError = TerminateLoopbackError_loopbackNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_TerminateLoopbackError = $._decodeEnumerated;




export const _encode_TerminateLoopbackError = $._encodeEnumerated;


/* eslint-enable */
