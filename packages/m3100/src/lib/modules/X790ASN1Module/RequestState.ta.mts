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

/* START_OF_SYMBOL_DEFINITION _enum_for_RequestState */
export enum _enum_for_RequestState {
    requested = 1,
    provided = 2,
    denied = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_RequestState */

/* START_OF_SYMBOL_DEFINITION RequestState */
/**
 * @summary RequestState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestState  ::=  ENUMERATED {requested(1), provided(2), denied(3), ...
 *                              }
 * ```@enum {number}
 */
export type RequestState = _enum_for_RequestState | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION RequestState */

/* START_OF_SYMBOL_DEFINITION RequestState_requested */
/**
 * @summary RequestState_requested
 * @constant
 * @type {number}
 */
export const RequestState_requested: RequestState = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestState_requested */

/* START_OF_SYMBOL_DEFINITION requested */
/**
 * @summary requested
 * @constant
 * @type {number}
 */
export const requested: RequestState = RequestState_requested; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION requested */

/* START_OF_SYMBOL_DEFINITION RequestState_provided */
/**
 * @summary RequestState_provided
 * @constant
 * @type {number}
 */
export const RequestState_provided: RequestState = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestState_provided */

/* START_OF_SYMBOL_DEFINITION provided */
/**
 * @summary provided
 * @constant
 * @type {number}
 */
export const provided: RequestState = RequestState_provided; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION provided */

/* START_OF_SYMBOL_DEFINITION RequestState_denied */
/**
 * @summary RequestState_denied
 * @constant
 * @type {number}
 */
export const RequestState_denied: RequestState = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestState_denied */

/* START_OF_SYMBOL_DEFINITION denied */
/**
 * @summary denied
 * @constant
 * @type {number}
 */
export const denied: RequestState = RequestState_denied; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION denied */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestState */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestState */

/* START_OF_SYMBOL_DEFINITION _decode_RequestState */
export const _decode_RequestState = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_RequestState */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestState */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestState */

/* START_OF_SYMBOL_DEFINITION _encode_RequestState */
export const _encode_RequestState = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_RequestState */

/* eslint-enable */
