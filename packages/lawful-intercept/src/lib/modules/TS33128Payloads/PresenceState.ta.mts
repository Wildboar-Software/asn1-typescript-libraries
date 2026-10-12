/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PresenceState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceState  ::=  ENUMERATED
 * {
 *     inArea(1),
 *     outOfArea(2),
 *     unknown(3),
 *     inactive(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PresenceState {
    inArea = 1,
    outOfArea = 2,
    unknown = 3,
    inactive = 4,
}

/**
 * @summary PresenceState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceState  ::=  ENUMERATED
 * {
 *     inArea(1),
 *     outOfArea(2),
 *     unknown(3),
 *     inactive(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PresenceState = _enum_for_PresenceState;

/**
 * @summary PresenceState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceState  ::=  ENUMERATED
 * {
 *     inArea(1),
 *     outOfArea(2),
 *     unknown(3),
 *     inactive(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PresenceState = _enum_for_PresenceState;

/**
 * @summary PresenceState_inArea
 * @constant
 * @type {number}
 */
export
const PresenceState_inArea: PresenceState = PresenceState.inArea; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inArea
 * @constant
 * @type {number}
 */
export
const inArea: PresenceState = PresenceState.inArea; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceState_outOfArea
 * @constant
 * @type {number}
 */
export
const PresenceState_outOfArea: PresenceState = PresenceState.outOfArea; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outOfArea
 * @constant
 * @type {number}
 */
export
const outOfArea: PresenceState = PresenceState.outOfArea; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceState_unknown
 * @constant
 * @type {number}
 */
export
const PresenceState_unknown: PresenceState = PresenceState.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: PresenceState = PresenceState.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceState_inactive
 * @constant
 * @type {number}
 */
export
const PresenceState_inactive: PresenceState = PresenceState.inactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inactive
 * @constant
 * @type {number}
 */
export
const inactive: PresenceState = PresenceState.inactive; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PresenceState: $.ASN1Decoder<PresenceState> = $._decodeEnumerated;
export const _encode_PresenceState: $.ASN1Encoder<PresenceState> = $._encodeEnumerated;


/* eslint-enable */
