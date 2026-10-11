/* eslint-disable */
import {
    ASN1Element as _Element,
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

let _cached_decoder_for_Intercepted_Call_State: $.ASN1Decoder<Intercepted_Call_State> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Intercepted_Call_State
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Intercepted_Call_State (el: _Element): Intercepted_Call_State {
    if (!_cached_decoder_for_Intercepted_Call_State) { _cached_decoder_for_Intercepted_Call_State = $._decodeEnumerated; }
    return _cached_decoder_for_Intercepted_Call_State(el);
}

let _cached_encoder_for_Intercepted_Call_State: $.ASN1Encoder<Intercepted_Call_State> | null = null;

/**
 * @summary Encodes a(n) Intercepted_Call_State into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Intercepted_Call_State, encoded as an ASN.1 Element.
 */
export
function _encode_Intercepted_Call_State (value: Intercepted_Call_State, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Intercepted_Call_State) { _cached_encoder_for_Intercepted_Call_State = $._encodeEnumerated; }
    return _cached_encoder_for_Intercepted_Call_State(value, elGetter);
}


/* eslint-enable */
