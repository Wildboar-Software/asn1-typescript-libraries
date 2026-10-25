/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HandoverState
 * @description
 * 
 * Indicates whether the PDU Session Modification being reported was due to a
 * handover. Shall be present if this IE is in the SMContextUpdatedData or sent
 * by the SMF (see TS 29.502 [16] clause 6.1.6.2.3).
 *
 * 3GPP TS 33.128, clause 6.2.3.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Indicates whether the PDU Session Modification being reported was due to a
 * handover. Shall be present if this IE is in the SMContextUpdatedData or sent
 * by the SMF (see TS 29.502 [16] clause 6.1.6.2.3).
 *
 * 3GPP TS 33.128, clause 6.2.3.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Indicates whether the PDU Session Modification being reported was due to a
 * handover. Shall be present if this IE is in the SMContextUpdatedData or sent
 * by the SMF (see TS 29.502 [16] clause 6.1.6.2.3).
 *
 * 3GPP TS 33.128, clause 6.2.3.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const HandoverState: typeof _enum_for_HandoverState = _enum_for_HandoverState;

/**
 * @summary HandoverState_none
 * @constant
 * @type {number}
 */
export
const HandoverState_none: _enum_for_HandoverState.none = HandoverState.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: _enum_for_HandoverState.none = HandoverState.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverState_preparing
 * @constant
 * @type {number}
 */
export
const HandoverState_preparing: _enum_for_HandoverState.preparing = HandoverState.preparing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary preparing
 * @constant
 * @type {number}
 */
export
const preparing: _enum_for_HandoverState.preparing = HandoverState.preparing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverState_prepared
 * @constant
 * @type {number}
 */
export
const HandoverState_prepared: _enum_for_HandoverState.prepared = HandoverState.prepared; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary prepared
 * @constant
 * @type {number}
 */
export
const prepared: _enum_for_HandoverState.prepared = HandoverState.prepared; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverState_completed
 * @constant
 * @type {number}
 */
export
const HandoverState_completed: _enum_for_HandoverState.completed = HandoverState.completed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary completed
 * @constant
 * @type {number}
 */
export
const completed: _enum_for_HandoverState.completed = HandoverState.completed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HandoverState_cancelled
 * @constant
 * @type {number}
 */
export
const HandoverState_cancelled: _enum_for_HandoverState.cancelled = HandoverState.cancelled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelled
 * @constant
 * @type {number}
 */
export
const cancelled: _enum_for_HandoverState.cancelled = HandoverState.cancelled; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_HandoverState: $.ASN1Decoder<HandoverState> = $._decodeEnumerated;
export const _encode_HandoverState: $.ASN1Encoder<HandoverState> = $._encodeEnumerated;


/* eslint-enable */
