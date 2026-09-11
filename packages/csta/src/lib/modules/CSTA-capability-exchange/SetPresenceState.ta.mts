/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetPresenceState
 * @description
 * Capability bitmap for the Set Presence State service (ECMA-269 C.14.21,
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
 * SetPresenceState  ::=  BIT STRING
 * {     fromTime                 ( 0),     -- optional parameters
 *     untilTime                 ( 1),     -- optional parameters
 *     place                     ( 2),     -- optional parameters
 *     mood                     ( 3),     -- optional parameters
 *     namedPresenceState            ( 4),     -- optional parameters
 *     privateData                 ( 5),     -- optional parameters
 *     privateDataInAck             ( 6),     -- optional parameters
 *     ackModelMultiStep             ( 7) }
 * ```
 */
export
type SetPresenceState = BIT_STRING;

/**
 * @summary SetPresenceState_fromTime
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.21).
 */
export
const SetPresenceState_fromTime: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary fromTime
 * @constant
 * @description
 * Alias of `SetPresenceState_fromTime`.
 */
export
const fromTime: number = SetPresenceState_fromTime; /* SHORT_NAMED_BIT */

/**
 * @summary SetPresenceState_untilTime
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.21).
 */
export
const SetPresenceState_untilTime: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary untilTime
 * @constant
 * @description
 * Alias of `SetPresenceState_untilTime`.
 */
export
const untilTime: number = SetPresenceState_untilTime; /* SHORT_NAMED_BIT */

/**
 * @summary SetPresenceState_place
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.21).
 */
export
const SetPresenceState_place: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary place
 * @constant
 * @description
 * Alias of `SetPresenceState_place`.
 */
export
const place: number = SetPresenceState_place; /* SHORT_NAMED_BIT */

/**
 * @summary SetPresenceState_mood
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.21).
 */
export
const SetPresenceState_mood: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary mood
 * @constant
 * @description
 * Alias of `SetPresenceState_mood`.
 */
export
const mood: number = SetPresenceState_mood; /* SHORT_NAMED_BIT */

/**
 * @summary SetPresenceState_namedPresenceState
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.14.21).
 */
export
const SetPresenceState_namedPresenceState: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary namedPresenceState
 * @constant
 * @description
 * Alias of `SetPresenceState_namedPresenceState`.
 */
export
const namedPresenceState: number = SetPresenceState_namedPresenceState; /* SHORT_NAMED_BIT */

/**
 * @summary SetPresenceState_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.14.21).
 */
export
const SetPresenceState_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SetPresenceState_privateData`.
 */
export
const privateData: number = SetPresenceState_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetPresenceState_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.14.21).
 */
export
const SetPresenceState_privateDataInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SetPresenceState_privateDataInAck`.
 */
export
const privateDataInAck: number = SetPresenceState_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetPresenceState_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.14.21).
 */
export
const SetPresenceState_ackModelMultiStep: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `SetPresenceState_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = SetPresenceState_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetPresenceState: $.ASN1Decoder<SetPresenceState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetPresenceState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetPresenceState (el: _Element): SetPresenceState {
    if (!_cached_decoder_for_SetPresenceState) { _cached_decoder_for_SetPresenceState = $._decodeBitString; }
    return _cached_decoder_for_SetPresenceState(el);
}

let _cached_encoder_for_SetPresenceState: $.ASN1Encoder<SetPresenceState> | null = null;

/**
 * @summary Encodes a(n) SetPresenceState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetPresenceState, encoded as an ASN.1 Element.
 */
export
function _encode_SetPresenceState (value: SetPresenceState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetPresenceState) { _cached_encoder_for_SetPresenceState = $._encodeBitString; }
    return _cached_encoder_for_SetPresenceState(value, elGetter);
}


/* eslint-enable */
