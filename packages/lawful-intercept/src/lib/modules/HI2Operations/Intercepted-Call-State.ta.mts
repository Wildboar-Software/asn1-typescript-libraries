/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export
enum _enum_for_Intercepted_Call_State {
    idle = 1,
    setUpInProcess = 2,
    connected = 3,
}

/**
 * @summary Intercepted_Call_State
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Intercepted-Call-State  ::=  ENUMERATED
 * {
 *     idle(1),
 *         -- When the intercept call is released, the state is IDLE and the reason is provided
 *         -- by the release-Reason-Of-Intercepted-Call parameter.
 *     setUpInProcess(2),
 *         -- The set-up of the call is in process
 *     connected(3),
 *         -- The answer has been received
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Intercepted_Call_State = _enum_for_Intercepted_Call_State | ENUMERATED;

/**
 * @summary Intercepted_Call_State_idle
 * @constant
 * @type {number}
 */
export
const Intercepted_Call_State_idle: Intercepted_Call_State = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary idle
 * @constant
 * @type {number}
 */
export
const idle: Intercepted_Call_State = Intercepted_Call_State_idle; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Intercepted_Call_State_setUpInProcess
 * @constant
 * @type {number}
 */
export
const Intercepted_Call_State_setUpInProcess: Intercepted_Call_State = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary setUpInProcess
 * @constant
 * @type {number}
 */
export
const setUpInProcess: Intercepted_Call_State = Intercepted_Call_State_setUpInProcess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Intercepted_Call_State_connected
 * @constant
 * @type {number}
 */
export
const Intercepted_Call_State_connected: Intercepted_Call_State = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connected
 * @constant
 * @type {number}
 */
export
const connected: Intercepted_Call_State = Intercepted_Call_State_connected; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_Intercepted_Call_State: $.ASN1Decoder<Intercepted_Call_State> = $._decodeEnumerated;

export const _encode_Intercepted_Call_State: $.ASN1Encoder<Intercepted_Call_State> = $._encodeEnumerated;

/* eslint-enable */
