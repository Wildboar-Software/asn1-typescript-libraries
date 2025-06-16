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


export enum _enum_for_RequestState {
    requested = 1,
    provided = 2,
    denied = 3,
}


/**
 * @summary RequestState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestState  ::=  ENUMERATED {requested(1), provided(2), denied(3), ...
 *                              }
 * ```
 * 
 * @enum {number}
 */
export type RequestState = _enum_for_RequestState | ENUMERATED;


/**
 * @summary RequestState_requested
 * @constant
 * @type {number}
 */
export const RequestState_requested: RequestState = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary requested
 * @constant
 * @type {number}
 */
export const requested: RequestState = RequestState_requested; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary RequestState_provided
 * @constant
 * @type {number}
 */
export const RequestState_provided: RequestState = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary provided
 * @constant
 * @type {number}
 */
export const provided: RequestState = RequestState_provided; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary RequestState_denied
 * @constant
 * @type {number}
 */
export const RequestState_denied: RequestState = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary denied
 * @constant
 * @type {number}
 */
export const denied: RequestState = RequestState_denied; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_RequestState = $._decodeEnumerated;




export const _encode_RequestState = $._encodeEnumerated;


/* eslint-enable */
