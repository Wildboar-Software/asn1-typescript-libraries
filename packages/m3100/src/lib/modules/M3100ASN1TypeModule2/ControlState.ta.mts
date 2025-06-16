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
 * @summary ControlState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlState  ::=  ENUMERATED {closed(0), open(1)}
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_ControlState {
    closed = 0,
    open = 1,
}


/**
 * @summary ControlState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlState  ::=  ENUMERATED {closed(0), open(1)}
 * ```
 * 
 * @enum {number}
 */
export type ControlState = _enum_for_ControlState;


/**
 * @summary ControlState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlState  ::=  ENUMERATED {closed(0), open(1)}
 * ```
 * 
 * @enum {number}
 */
export const ControlState = _enum_for_ControlState;


/**
 * @summary ControlState_closed
 * @constant
 * @type {number}
 */
export const ControlState_closed: ControlState =
    ControlState.closed; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary closed
 * @constant
 * @type {number}
 */
export const closed: ControlState =
    ControlState.closed; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ControlState_open
 * @constant
 * @type {number}
 */
export const ControlState_open: ControlState =
    ControlState.open; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary open
 * @constant
 * @type {number}
 */
export const open: ControlState =
    ControlState.open; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ControlState = $._decodeEnumerated;




export const _encode_ControlState = $._encodeEnumerated;


/* eslint-enable */
