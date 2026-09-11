/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary PresenceState
 * @description
 *
 * Presence state for presence services and events. Optional place, mood, and
 * namedPresenceState (on those services) give a natural-language detail.
 * ECMA-269 §12.2.24.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceState  ::=  BIT STRING
 * {     available         ( 0),
 *     away             ( 1),
 *     busy             ( 2),
 *     calling            ( 3),
 *     dnd             ( 4),
 *     meeting            ( 5),
 *     offline         ( 6),
 *     unknown            ( 7),
 *     vacation        ( 8),
 *     applicationSpec0     ( 9),
 *     applicationSpec1     (10),
 *     applicationSpec2     (11),
 *     applicationSpec3     (12),
 *     applicationSpec4     (13),
 *     applicationSpec5     (14),
 *     applicationSpec6     (15),
 *     applicationSpec7     (16),
 *     applicationSpec8     (17),
 *     applicationSpec9     (18),
 *     applicationSpec10     (19) }
 * ```
 */
export
type PresenceState = BIT_STRING;

/**
 * @summary PresenceState_available
 * @description The user is available. ECMA-269 §12.2.24.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PresenceState_available: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary available
 * @description Alias of {@link PresenceState_available}.
 * @constant
 */
export
const available: number = PresenceState_available; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceState_away
 * @description The user is temporarily away. ECMA-269 §12.2.24.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PresenceState_away: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary away
 * @description Alias of {@link PresenceState_away}.
 * @constant
 */
export
const away: number = PresenceState_away; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceState_busy
 * @description The user is busy. ECMA-269 §12.2.24.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PresenceState_busy: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary busy
 * @description Alias of {@link PresenceState_busy}.
 * @constant
 */
export
const busy: number = PresenceState_busy; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceState_calling
 * @description Occupied with a call. ECMA-269 §12.2.24.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PresenceState_calling: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary calling
 * @description Alias of {@link PresenceState_calling}.
 * @constant
 */
export
const calling: number = PresenceState_calling; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceState_dnd
 * @description
 * The user does not want to be disturbed (Do Not Disturb). ECMA-269 §12.2.24.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PresenceState_dnd: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary dnd
 * @description Alias of {@link PresenceState_dnd}.
 * @constant
 */
export
const dnd: number = PresenceState_dnd; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceState_meeting
 * @description The user is in a meeting. ECMA-269 §12.2.24.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PresenceState_meeting: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary meeting
 * @description Alias of {@link PresenceState_meeting}.
 * @constant
 */
export
const meeting: number = PresenceState_meeting; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceState_offline
 * @description The user is offline. ECMA-269 §12.2.24.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PresenceState_offline: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary offline
 * @description Alias of {@link PresenceState_offline}.
 * @constant
 */
export
const offline: number = PresenceState_offline; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceState_unknown
 * @description Unknown (default). ECMA-269 §12.2.24.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PresenceState_unknown: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary unknown
 * @description Alias of {@link PresenceState_unknown}.
 * @constant
 */
export
const unknown: number = PresenceState_unknown; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceState_vacation
 * @description The user is on leave. ECMA-269 §12.2.24.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PresenceState_vacation: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary vacation
 * @description Alias of {@link PresenceState_vacation}.
 * @constant
 */
export
const vacation: number = PresenceState_vacation; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceState_applicationSpec0
 * @description Application-specific presence state 0. ECMA-269 §12.2.24.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PresenceState_applicationSpec0: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary applicationSpec0
 * @description Alias of {@link PresenceState_applicationSpec0}.
 * @constant
 */
export
const applicationSpec0: number = PresenceState_applicationSpec0; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceState_applicationSpec1
 * @description Application-specific presence state 1. ECMA-269 §12.2.24.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PresenceState_applicationSpec1: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary applicationSpec1
 * @description Alias of {@link PresenceState_applicationSpec1}.
 * @constant
 */
export
const applicationSpec1: number = PresenceState_applicationSpec1; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceState_applicationSpec2
 * @description Application-specific presence state 2. ECMA-269 §12.2.24.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PresenceState_applicationSpec2: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary applicationSpec2
 * @description Alias of {@link PresenceState_applicationSpec2}.
 * @constant
 */
export
const applicationSpec2: number = PresenceState_applicationSpec2; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceState_applicationSpec3
 * @description Application-specific presence state 3. ECMA-269 §12.2.24.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PresenceState_applicationSpec3: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary applicationSpec3
 * @description Alias of {@link PresenceState_applicationSpec3}.
 * @constant
 */
export
const applicationSpec3: number = PresenceState_applicationSpec3; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceState_applicationSpec4
 * @description Application-specific presence state 4. ECMA-269 §12.2.24.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PresenceState_applicationSpec4: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary applicationSpec4
 * @description Alias of {@link PresenceState_applicationSpec4}.
 * @constant
 */
export
const applicationSpec4: number = PresenceState_applicationSpec4; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceState_applicationSpec5
 * @description Application-specific presence state 5. ECMA-269 §12.2.24.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PresenceState_applicationSpec5: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary applicationSpec5
 * @description Alias of {@link PresenceState_applicationSpec5}.
 * @constant
 */
export
const applicationSpec5: number = PresenceState_applicationSpec5; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceState_applicationSpec6
 * @description Application-specific presence state 6. ECMA-269 §12.2.24.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PresenceState_applicationSpec6: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary applicationSpec6
 * @description Alias of {@link PresenceState_applicationSpec6}.
 * @constant
 */
export
const applicationSpec6: number = PresenceState_applicationSpec6; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceState_applicationSpec7
 * @description Application-specific presence state 7. ECMA-269 §12.2.24.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PresenceState_applicationSpec7: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary applicationSpec7
 * @description Alias of {@link PresenceState_applicationSpec7}.
 * @constant
 */
export
const applicationSpec7: number = PresenceState_applicationSpec7; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceState_applicationSpec8
 * @description Application-specific presence state 8. ECMA-269 §12.2.24.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PresenceState_applicationSpec8: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary applicationSpec8
 * @description Alias of {@link PresenceState_applicationSpec8}.
 * @constant
 */
export
const applicationSpec8: number = PresenceState_applicationSpec8; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceState_applicationSpec9
 * @description Application-specific presence state 9. ECMA-269 §12.2.24.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PresenceState_applicationSpec9: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary applicationSpec9
 * @description Alias of {@link PresenceState_applicationSpec9}.
 * @constant
 */
export
const applicationSpec9: number = PresenceState_applicationSpec9; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceState_applicationSpec10
 * @description Application-specific presence state 10. ECMA-269 §12.2.24.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const PresenceState_applicationSpec10: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary applicationSpec10
 * @description Alias of {@link PresenceState_applicationSpec10}.
 * @constant
 */
export
const applicationSpec10: number = PresenceState_applicationSpec10; /* SHORT_NAMED_BIT */

let _cached_decoder_for_PresenceState: $.ASN1Decoder<PresenceState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresenceState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresenceState (el: _Element): PresenceState {
    if (!_cached_decoder_for_PresenceState) { _cached_decoder_for_PresenceState = $._decodeBitString; }
    return _cached_decoder_for_PresenceState(el);
}

let _cached_encoder_for_PresenceState: $.ASN1Encoder<PresenceState> | null = null;

/**
 * @summary Encodes a(n) PresenceState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresenceState, encoded as an ASN.1 Element.
 */
export
function _encode_PresenceState (value: PresenceState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresenceState) { _cached_encoder_for_PresenceState = $._encodeBitString; }
    return _cached_encoder_for_PresenceState(value, elGetter);
}


/* eslint-enable */
