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

/* START_OF_SYMBOL_DEFINITION _enum_for_Direction */
/**
 * @summary Direction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Direction  ::=  ENUMERATED {incoming(0), outgoing(1)}
 * ```@enum {number}
 */
export enum _enum_for_Direction {
    incoming = 0,
    outgoing = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Direction */

/* START_OF_SYMBOL_DEFINITION Direction */
/**
 * @summary Direction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Direction  ::=  ENUMERATED {incoming(0), outgoing(1)}
 * ```@enum {number}
 */
export type Direction = _enum_for_Direction;
/* END_OF_SYMBOL_DEFINITION Direction */

/* START_OF_SYMBOL_DEFINITION Direction */
/**
 * @summary Direction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Direction  ::=  ENUMERATED {incoming(0), outgoing(1)}
 * ```@enum {number}
 */
export const Direction = _enum_for_Direction;
/* END_OF_SYMBOL_DEFINITION Direction */

/* START_OF_SYMBOL_DEFINITION Direction_incoming */
/**
 * @summary Direction_incoming
 * @constant
 * @type {number}
 */
export const Direction_incoming: Direction =
    Direction.incoming; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Direction_incoming */

/* START_OF_SYMBOL_DEFINITION incoming */
/**
 * @summary incoming
 * @constant
 * @type {number}
 */
export const incoming: Direction =
    Direction.incoming; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION incoming */

/* START_OF_SYMBOL_DEFINITION Direction_outgoing */
/**
 * @summary Direction_outgoing
 * @constant
 * @type {number}
 */
export const Direction_outgoing: Direction =
    Direction.outgoing; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Direction_outgoing */

/* START_OF_SYMBOL_DEFINITION outgoing */
/**
 * @summary outgoing
 * @constant
 * @type {number}
 */
export const outgoing: Direction =
    Direction.outgoing; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION outgoing */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Direction */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Direction */

/* START_OF_SYMBOL_DEFINITION _decode_Direction */
export const _decode_Direction = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_Direction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Direction */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Direction */

/* START_OF_SYMBOL_DEFINITION _encode_Direction */
export const _encode_Direction = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_Direction */

/* eslint-enable */
