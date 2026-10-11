/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CMState  ::=  ENUMERATED
 * {
 *     idle(1),
 *     connected(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CMState {
    idle = 1,
    connected = 2,
}

/**
 * @summary CMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CMState  ::=  ENUMERATED
 * {
 *     idle(1),
 *     connected(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CMState = _enum_for_CMState;

/**
 * @summary CMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CMState  ::=  ENUMERATED
 * {
 *     idle(1),
 *     connected(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CMState = _enum_for_CMState;

/**
 * @summary CMState_idle
 * @constant
 * @type {number}
 */
export
const CMState_idle: CMState = CMState.idle; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary idle
 * @constant
 * @type {number}
 */
export
const idle: CMState = CMState.idle; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CMState_connected
 * @constant
 * @type {number}
 */
export
const CMState_connected: CMState = CMState.connected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connected
 * @constant
 * @type {number}
 */
export
const connected: CMState = CMState.connected; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_CMState: $.ASN1Decoder<CMState> = $._decodeEnumerated;

export const _encode_CMState: $.ASN1Encoder<CMState> = $._encodeEnumerated;


/* eslint-enable */
