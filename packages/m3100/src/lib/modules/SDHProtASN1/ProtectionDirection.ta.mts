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
 * @summary ProtectionDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionDirection  ::=  ENUMERATED {transmit(0), receive(1), bidirectional(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ProtectionDirection {
    transmit = 0,
    receive = 1,
    bidirectional = 2,
}


/**
 * @summary ProtectionDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionDirection  ::=  ENUMERATED {transmit(0), receive(1), bidirectional(2)}
 * ```
 *
 * @enum {number}
 */
export type ProtectionDirection = _enum_for_ProtectionDirection;


/**
 * @summary ProtectionDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionDirection  ::=  ENUMERATED {transmit(0), receive(1), bidirectional(2)}
 * ```
 *
 * @enum {number}
 */
export const ProtectionDirection = _enum_for_ProtectionDirection;


/**
 * @summary ProtectionDirection_transmit
 * @constant
 * @type {number}
 */
export const ProtectionDirection_transmit: ProtectionDirection =
    ProtectionDirection.transmit; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary transmit
 * @constant
 * @type {number}
 */
export const transmit: ProtectionDirection =
    ProtectionDirection.transmit; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProtectionDirection_receive
 * @constant
 * @type {number}
 */
export const ProtectionDirection_receive: ProtectionDirection =
    ProtectionDirection.receive; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary receive
 * @constant
 * @type {number}
 */
export const receive: ProtectionDirection =
    ProtectionDirection.receive; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProtectionDirection_bidirectional
 * @constant
 * @type {number}
 */
export const ProtectionDirection_bidirectional: ProtectionDirection =
    ProtectionDirection.bidirectional; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary bidirectional
 * @constant
 * @type {number}
 */
export const bidirectional: ProtectionDirection =
    ProtectionDirection.bidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ProtectionDirection = $._decodeEnumerated;




export const _encode_ProtectionDirection = $._encodeEnumerated;


/* eslint-enable */
