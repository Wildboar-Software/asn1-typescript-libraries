/* eslint-disable */
import {
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




export function _decode_ControlState(el: _Element): ControlState {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ControlState.closed: return ControlState.closed;
        case ControlState.open: return ControlState.open;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for ControlState.',
                el,
            );
    }
}




export const _encode_ControlState: $.ASN1Encoder<ControlState> = $._encodeEnumerated as $.ASN1Encoder<ControlState>;


/* eslint-enable */
