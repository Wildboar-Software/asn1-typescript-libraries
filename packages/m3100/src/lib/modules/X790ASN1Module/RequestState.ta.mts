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
export const RequestState_requested: _enum_for_RequestState.requested = _enum_for_RequestState.requested; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary requested
 * @constant
 * @type {number}
 */
export const requested: _enum_for_RequestState.requested = RequestState_requested; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary RequestState_provided
 * @constant
 * @type {number}
 */
export const RequestState_provided: _enum_for_RequestState.provided = _enum_for_RequestState.provided; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary provided
 * @constant
 * @type {number}
 */
export const provided: _enum_for_RequestState.provided = RequestState_provided; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary RequestState_denied
 * @constant
 * @type {number}
 */
export const RequestState_denied: _enum_for_RequestState.denied = _enum_for_RequestState.denied; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary denied
 * @constant
 * @type {number}
 */
export const denied: _enum_for_RequestState.denied = RequestState_denied; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_RequestState: $.ASN1Decoder<number> = $._decodeEnumerated;




export const _encode_RequestState: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
