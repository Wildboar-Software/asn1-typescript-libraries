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

/* START_OF_SYMBOL_DEFINITION _enum_for_ProtectionDirection */
/**
 * @summary ProtectionDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionDirection  ::=  ENUMERATED {transmit(0), receive(1), bidirectional(2)}
 * ```@enum {number}
 */
export enum _enum_for_ProtectionDirection {
    transmit = 0,
    receive = 1,
    bidirectional = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ProtectionDirection */

/* START_OF_SYMBOL_DEFINITION ProtectionDirection */
/**
 * @summary ProtectionDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionDirection  ::=  ENUMERATED {transmit(0), receive(1), bidirectional(2)}
 * ```@enum {number}
 */
export type ProtectionDirection = _enum_for_ProtectionDirection;
/* END_OF_SYMBOL_DEFINITION ProtectionDirection */

/* START_OF_SYMBOL_DEFINITION ProtectionDirection */
/**
 * @summary ProtectionDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionDirection  ::=  ENUMERATED {transmit(0), receive(1), bidirectional(2)}
 * ```@enum {number}
 */
export const ProtectionDirection = _enum_for_ProtectionDirection;
/* END_OF_SYMBOL_DEFINITION ProtectionDirection */

/* START_OF_SYMBOL_DEFINITION ProtectionDirection_transmit */
/**
 * @summary ProtectionDirection_transmit
 * @constant
 * @type {number}
 */
export const ProtectionDirection_transmit: ProtectionDirection =
    ProtectionDirection.transmit; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtectionDirection_transmit */

/* START_OF_SYMBOL_DEFINITION transmit */
/**
 * @summary transmit
 * @constant
 * @type {number}
 */
export const transmit: ProtectionDirection =
    ProtectionDirection.transmit; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION transmit */

/* START_OF_SYMBOL_DEFINITION ProtectionDirection_receive */
/**
 * @summary ProtectionDirection_receive
 * @constant
 * @type {number}
 */
export const ProtectionDirection_receive: ProtectionDirection =
    ProtectionDirection.receive; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtectionDirection_receive */

/* START_OF_SYMBOL_DEFINITION receive */
/**
 * @summary receive
 * @constant
 * @type {number}
 */
export const receive: ProtectionDirection =
    ProtectionDirection.receive; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION receive */

/* START_OF_SYMBOL_DEFINITION ProtectionDirection_bidirectional */
/**
 * @summary ProtectionDirection_bidirectional
 * @constant
 * @type {number}
 */
export const ProtectionDirection_bidirectional: ProtectionDirection =
    ProtectionDirection.bidirectional; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtectionDirection_bidirectional */

/* START_OF_SYMBOL_DEFINITION bidirectional */
/**
 * @summary bidirectional
 * @constant
 * @type {number}
 */
export const bidirectional: ProtectionDirection =
    ProtectionDirection.bidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bidirectional */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionDirection */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionDirection */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectionDirection */
export const _decode_ProtectionDirection = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ProtectionDirection */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionDirection */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionDirection */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectionDirection */
export const _encode_ProtectionDirection = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ProtectionDirection */

/* eslint-enable */
