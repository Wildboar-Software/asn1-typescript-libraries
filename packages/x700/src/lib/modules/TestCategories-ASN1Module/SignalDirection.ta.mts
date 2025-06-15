/* eslint-disable */
import {
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

/* START_OF_SYMBOL_DEFINITION _enum_for_SignalDirection */
/**
 * @summary SignalDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignalDirection  ::=  ENUMERATED {send(0), receive(1)}
 * ```@enum {number}
 */
export enum _enum_for_SignalDirection {
    send = 0,
    receive = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SignalDirection */

/* START_OF_SYMBOL_DEFINITION SignalDirection */
/**
 * @summary SignalDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignalDirection  ::=  ENUMERATED {send(0), receive(1)}
 * ```@enum {number}
 */
export type SignalDirection = _enum_for_SignalDirection;
/* END_OF_SYMBOL_DEFINITION SignalDirection */

/* START_OF_SYMBOL_DEFINITION SignalDirection */
/**
 * @summary SignalDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignalDirection  ::=  ENUMERATED {send(0), receive(1)}
 * ```@enum {number}
 */
export const SignalDirection = _enum_for_SignalDirection;
/* END_OF_SYMBOL_DEFINITION SignalDirection */

/* START_OF_SYMBOL_DEFINITION SignalDirection_send */
/**
 * @summary SignalDirection_send
 * @constant
 * @type {number}
 */
export const SignalDirection_send: SignalDirection =
    SignalDirection.send; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SignalDirection_send */

/* START_OF_SYMBOL_DEFINITION send */
/**
 * @summary send
 * @constant
 * @type {number}
 */
export const send: SignalDirection =
    SignalDirection.send; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION send */

/* START_OF_SYMBOL_DEFINITION SignalDirection_receive */
/**
 * @summary SignalDirection_receive
 * @constant
 * @type {number}
 */
export const SignalDirection_receive: SignalDirection =
    SignalDirection.receive; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SignalDirection_receive */

/* START_OF_SYMBOL_DEFINITION receive */
/**
 * @summary receive
 * @constant
 * @type {number}
 */
export const receive: SignalDirection =
    SignalDirection.receive; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION receive */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignalDirection */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignalDirection */

/* START_OF_SYMBOL_DEFINITION _decode_SignalDirection */
export const _decode_SignalDirection = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_SignalDirection */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignalDirection */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignalDirection */

/* START_OF_SYMBOL_DEFINITION _encode_SignalDirection */
export const _encode_SignalDirection = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_SignalDirection */

/* eslint-enable */
