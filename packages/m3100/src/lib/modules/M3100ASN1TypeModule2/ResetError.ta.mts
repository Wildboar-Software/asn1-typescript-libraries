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


export enum _enum_for_ResetError {
    resetFail = 0,
    entityInService = 1,
}


/**
 * @summary ResetError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResetError  ::=  ENUMERATED {resetFail(0), entityInService(1), ...
 *                            }
 * ```
 * 
 * @enum {number}
 */
export type ResetError = _enum_for_ResetError | ENUMERATED;


/**
 * @summary ResetError_resetFail
 * @constant
 * @type {number}
 */
export const ResetError_resetFail: ResetError = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary resetFail
 * @constant
 * @type {number}
 */
export const resetFail: ResetError = ResetError_resetFail; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ResetError_entityInService
 * @constant
 * @type {number}
 */
export const ResetError_entityInService: ResetError = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary entityInService
 * @constant
 * @type {number}
 */
export const entityInService: ResetError = ResetError_entityInService; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ResetError = $._decodeEnumerated;




export const _encode_ResetError = $._encodeEnumerated;


/* eslint-enable */
