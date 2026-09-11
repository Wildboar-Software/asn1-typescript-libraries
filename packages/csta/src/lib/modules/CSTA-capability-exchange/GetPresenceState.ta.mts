/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetPresenceState
 * @description
 * Capability bitmap for the Get Presence State service (ECMA-269 C.14.13,
 * ECMA-285 §9.10). Presence of this entry in `LogicalServList` means the SF
 * supports that service. Each set bit is an optional parameter, enumerated
 * value, initial connection state, or miscellaneous characteristic from Annex
 * C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetPresenceState  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     fromTimeInAck                 ( 1),     -- optional parameters
 *     untilTimeInAck                 ( 2),     -- optional parameters
 *     placeInAck                 ( 3),     -- optional parameters
 *     moodInAck                 ( 4),     -- optional parameters
 *     namedPresenceStateInAck         ( 5),     -- optional parameters
 *     privateDataInAck             ( 6) }
 * ```
 */
export
type GetPresenceState = BIT_STRING;

/**
 * @summary GetPresenceState_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.14.13).
 */
export
const GetPresenceState_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetPresenceState_privateData`.
 */
export
const privateData: number = GetPresenceState_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetPresenceState_fromTimeInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `fromTime` in the acknowledgement
 * (ECMA-269 C.14.13).
 */
export
const GetPresenceState_fromTimeInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary fromTimeInAck
 * @constant
 * @description
 * Alias of `GetPresenceState_fromTimeInAck`.
 */
export
const fromTimeInAck: number = GetPresenceState_fromTimeInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPresenceState_untilTimeInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `untilTime` in the acknowledgement
 * (ECMA-269 C.14.13).
 */
export
const GetPresenceState_untilTimeInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary untilTimeInAck
 * @constant
 * @description
 * Alias of `GetPresenceState_untilTimeInAck`.
 */
export
const untilTimeInAck: number = GetPresenceState_untilTimeInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPresenceState_placeInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `place` in the acknowledgement
 * (ECMA-269 C.14.13).
 */
export
const GetPresenceState_placeInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary placeInAck
 * @constant
 * @description
 * Alias of `GetPresenceState_placeInAck`.
 */
export
const placeInAck: number = GetPresenceState_placeInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPresenceState_moodInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `mood` in the acknowledgement
 * (ECMA-269 C.14.13).
 */
export
const GetPresenceState_moodInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary moodInAck
 * @constant
 * @description
 * Alias of `GetPresenceState_moodInAck`.
 */
export
const moodInAck: number = GetPresenceState_moodInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPresenceState_namedPresenceStateInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `namedPresenceState` in the
 * acknowledgement (ECMA-269 C.14.13).
 */
export
const GetPresenceState_namedPresenceStateInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary namedPresenceStateInAck
 * @constant
 * @description
 * Alias of `GetPresenceState_namedPresenceStateInAck`.
 */
export
const namedPresenceStateInAck: number = GetPresenceState_namedPresenceStateInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPresenceState_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.14.13).
 */
export
const GetPresenceState_privateDataInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetPresenceState_privateDataInAck`.
 */
export
const privateDataInAck: number = GetPresenceState_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetPresenceState: $.ASN1Decoder<GetPresenceState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetPresenceState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetPresenceState (el: _Element): GetPresenceState {
    if (!_cached_decoder_for_GetPresenceState) { _cached_decoder_for_GetPresenceState = $._decodeBitString; }
    return _cached_decoder_for_GetPresenceState(el);
}

let _cached_encoder_for_GetPresenceState: $.ASN1Encoder<GetPresenceState> | null = null;

/**
 * @summary Encodes a(n) GetPresenceState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetPresenceState, encoded as an ASN.1 Element.
 */
export
function _encode_GetPresenceState (value: GetPresenceState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetPresenceState) { _cached_encoder_for_GetPresenceState = $._encodeBitString; }
    return _cached_encoder_for_GetPresenceState(value, elGetter);
}


/* eslint-enable */
