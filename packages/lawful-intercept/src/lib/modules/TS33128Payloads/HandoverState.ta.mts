/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HandoverState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandoverState  ::=  ENUMERATED
 * {
 *     none(1),
 *     preparing(2),
 *     prepared(3),
 *     completed(4),
 *     cancelled(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_HandoverState {
    none = 1,
    preparing = 2,
    prepared = 3,
    completed = 4,
    cancelled = 5,
}

/**
 * @summary HandoverState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandoverState  ::=  ENUMERATED
 * {
 *     none(1),
 *     preparing(2),
 *     prepared(3),
 *     completed(4),
 *     cancelled(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type HandoverState = _enum_for_HandoverState;

/**
 * @summary HandoverState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandoverState  ::=  ENUMERATED
 * {
 *     none(1),
 *     preparing(2),
 *     prepared(3),
 *     completed(4),
 *     cancelled(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const HandoverState = _enum_for_HandoverState;

/**
 * @summary HandoverState_none
 * @constant
 * @type {number}
 */
export
const HandoverState_none: HandoverState = HandoverState.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: HandoverState = HandoverState.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverState_preparing
 * @constant
 * @type {number}
 */
export
const HandoverState_preparing: HandoverState = HandoverState.preparing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary preparing
 * @constant
 * @type {number}
 */
export
const preparing: HandoverState = HandoverState.preparing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverState_prepared
 * @constant
 * @type {number}
 */
export
const HandoverState_prepared: HandoverState = HandoverState.prepared; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary prepared
 * @constant
 * @type {number}
 */
export
const prepared: HandoverState = HandoverState.prepared; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverState_completed
 * @constant
 * @type {number}
 */
export
const HandoverState_completed: HandoverState = HandoverState.completed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary completed
 * @constant
 * @type {number}
 */
export
const completed: HandoverState = HandoverState.completed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverState_cancelled
 * @constant
 * @type {number}
 */
export
const HandoverState_cancelled: HandoverState = HandoverState.cancelled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelled
 * @constant
 * @type {number}
 */
export
const cancelled: HandoverState = HandoverState.cancelled; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_HandoverState: $.ASN1Decoder<HandoverState> = $._decodeEnumerated;

export const _encode_HandoverState: $.ASN1Encoder<HandoverState> = $._encodeEnumerated;


/* eslint-enable */
