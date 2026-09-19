/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RMState  ::=  ENUMERATED
 * {
 *     registered(1),
 *     deregistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RMState {
    registered = 1,
    deregistered = 2,
}

/**
 * @summary RMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RMState  ::=  ENUMERATED
 * {
 *     registered(1),
 *     deregistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RMState = _enum_for_RMState;

/**
 * @summary RMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RMState  ::=  ENUMERATED
 * {
 *     registered(1),
 *     deregistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RMState = _enum_for_RMState;

/**
 * @summary RMState_registered
 * @constant
 * @type {number}
 */
export
const RMState_registered: RMState = RMState.registered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registered
 * @constant
 * @type {number}
 */
export
const registered: RMState = RMState.registered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RMState_deregistered
 * @constant
 * @type {number}
 */
export
const RMState_deregistered: RMState = RMState.deregistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deregistered
 * @constant
 * @type {number}
 */
export
const deregistered: RMState = RMState.deregistered; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RMState: $.ASN1Decoder<RMState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RMState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RMState (el: _Element): RMState {
    if (!_cached_decoder_for_RMState) { _cached_decoder_for_RMState = $._decodeEnumerated; }
    return _cached_decoder_for_RMState(el);
}

let _cached_encoder_for_RMState: $.ASN1Encoder<RMState> | null = null;

/**
 * @summary Encodes a(n) RMState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RMState, encoded as an ASN.1 Element.
 */
export
function _encode_RMState (value: RMState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RMState) { _cached_encoder_for_RMState = $._encodeEnumerated; }
    return _cached_encoder_for_RMState(value, elGetter);
}


/* eslint-enable */
