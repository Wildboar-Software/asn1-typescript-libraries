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

/* START_OF_SYMBOL_DEFINITION _enum_for_ControlState */
/**
 * @summary ControlState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlState  ::=  ENUMERATED {closed(0), open(1)}
 * ```@enum {number}
 */
export enum _enum_for_ControlState {
    closed = 0,
    open = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ControlState */

/* START_OF_SYMBOL_DEFINITION ControlState */
/**
 * @summary ControlState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlState  ::=  ENUMERATED {closed(0), open(1)}
 * ```@enum {number}
 */
export type ControlState = _enum_for_ControlState;
/* END_OF_SYMBOL_DEFINITION ControlState */

/* START_OF_SYMBOL_DEFINITION ControlState */
/**
 * @summary ControlState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlState  ::=  ENUMERATED {closed(0), open(1)}
 * ```@enum {number}
 */
export const ControlState = _enum_for_ControlState;
/* END_OF_SYMBOL_DEFINITION ControlState */

/* START_OF_SYMBOL_DEFINITION ControlState_closed */
/**
 * @summary ControlState_closed
 * @constant
 * @type {number}
 */
export const ControlState_closed: ControlState =
    ControlState.closed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlState_closed */

/* START_OF_SYMBOL_DEFINITION closed */
/**
 * @summary closed
 * @constant
 * @type {number}
 */
export const closed: ControlState =
    ControlState.closed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION closed */

/* START_OF_SYMBOL_DEFINITION ControlState_open */
/**
 * @summary ControlState_open
 * @constant
 * @type {number}
 */
export const ControlState_open: ControlState =
    ControlState.open; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlState_open */

/* START_OF_SYMBOL_DEFINITION open */
/**
 * @summary open
 * @constant
 * @type {number}
 */
export const open: ControlState =
    ControlState.open; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION open */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlState */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlState */

/* START_OF_SYMBOL_DEFINITION _decode_ControlState */
export const _decode_ControlState = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ControlState */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlState */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlState */

/* START_OF_SYMBOL_DEFINITION _encode_ControlState */
export const _encode_ControlState = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ControlState */

/* eslint-enable */
