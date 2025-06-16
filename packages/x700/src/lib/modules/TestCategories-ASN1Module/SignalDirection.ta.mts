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

/**
 * @summary SignalDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignalDirection  ::=  ENUMERATED {send(0), receive(1)}
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_SignalDirection {
    send = 0,
    receive = 1,
}

/**
 * @summary SignalDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignalDirection  ::=  ENUMERATED {send(0), receive(1)}
 * ```
 * 
 * @enum {number}
 */
export type SignalDirection = _enum_for_SignalDirection;

/**
 * @summary SignalDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignalDirection  ::=  ENUMERATED {send(0), receive(1)}
 * ```
 * 
 * @enum {number}
 */
export const SignalDirection = _enum_for_SignalDirection;

/**
 * @summary SignalDirection_send
 * @constant
 * @type {number}
 */
export const SignalDirection_send: SignalDirection =
    SignalDirection.send; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary send
 * @constant
 * @type {number}
 */
export const send: SignalDirection =
    SignalDirection.send; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignalDirection_receive
 * @constant
 * @type {number}
 */
export const SignalDirection_receive: SignalDirection =
    SignalDirection.receive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary receive
 * @constant
 * @type {number}
 */
export const receive: SignalDirection =
    SignalDirection.receive; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_SignalDirection = $._decodeEnumerated;


export const _encode_SignalDirection = $._encodeEnumerated;


/* eslint-enable */
