/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary NetworkCapability_eventsProvided
 * @description
 *
 * Bitmap of Call Control events the reached network can provide. ECMA-269
 * Network Capabilities Changed.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkCapability-eventsProvided ::= BIT STRING {
 *     bridged (0),
 *     allCleared (1),
 *     conferenced (2),
 *     connectionCleared (3),
 *     delivered (4),
 *     digitsDialed (5),
 *     diverted (6),
 *     established (7),
 *     failed (8),
 *     held (9),
 *     networkCapabilitiesChange (10),
 *     networkReached (11),
 *     offered (12),
 *     originated (13),
 *     queued (14),
 *     retrieved (15),
 *     serviceInitiated (16),
 *     transferred (17)
 * }
 * ```
 */
export
type NetworkCapability_eventsProvided = BIT_STRING;

/**
 * @summary NetworkCapability_eventsProvided_bridged
 * @description
 *
 * Network can report the `bridged` Call Control event. ECMA-269 Network
 * Capabilities Changed.
 *
 * @constant
 */
export
const NetworkCapability_eventsProvided_bridged: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary bridged
 * @constant
 */
export
const bridged: number = NetworkCapability_eventsProvided_bridged; /* SHORT_NAMED_BIT */

/**
 * @summary NetworkCapability_eventsProvided_allCleared
 * @description
 *
 * Network can report the `allCleared` Call Control event. ECMA-269 Network
 * Capabilities Changed.
 *
 * @constant
 */
export
const NetworkCapability_eventsProvided_allCleared: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary allCleared
 * @constant
 */
export
const allCleared: number = NetworkCapability_eventsProvided_allCleared; /* SHORT_NAMED_BIT */

/**
 * @summary NetworkCapability_eventsProvided_conferenced
 * @description
 *
 * Network can report the `conferenced` Call Control event. ECMA-269 Network
 * Capabilities Changed.
 *
 * @constant
 */
export
const NetworkCapability_eventsProvided_conferenced: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary conferenced
 * @constant
 */
export
const conferenced: number = NetworkCapability_eventsProvided_conferenced; /* SHORT_NAMED_BIT */

/**
 * @summary NetworkCapability_eventsProvided_connectionCleared
 * @description
 *
 * Network can report the `connectionCleared` Call Control event. ECMA-269
 * Network Capabilities Changed.
 *
 * @constant
 */
export
const NetworkCapability_eventsProvided_connectionCleared: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary connectionCleared
 * @constant
 */
export
const connectionCleared: number = NetworkCapability_eventsProvided_connectionCleared; /* SHORT_NAMED_BIT */

/**
 * @summary NetworkCapability_eventsProvided_delivered
 * @description
 *
 * Network can report the `delivered` Call Control event. ECMA-269 Network
 * Capabilities Changed.
 *
 * @constant
 */
export
const NetworkCapability_eventsProvided_delivered: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary delivered
 * @constant
 */
export
const delivered: number = NetworkCapability_eventsProvided_delivered; /* SHORT_NAMED_BIT */

/**
 * @summary NetworkCapability_eventsProvided_digitsDialed
 * @description
 *
 * Network can report the `digitsDialed` Call Control event. ECMA-269 Network
 * Capabilities Changed.
 *
 * @constant
 */
export
const NetworkCapability_eventsProvided_digitsDialed: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary digitsDialed
 * @constant
 */
export
const digitsDialed: number = NetworkCapability_eventsProvided_digitsDialed; /* SHORT_NAMED_BIT */

/**
 * @summary NetworkCapability_eventsProvided_diverted
 * @description
 *
 * Network can report the `diverted` Call Control event. ECMA-269 Network
 * Capabilities Changed.
 *
 * @constant
 */
export
const NetworkCapability_eventsProvided_diverted: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary diverted
 * @constant
 */
export
const diverted: number = NetworkCapability_eventsProvided_diverted; /* SHORT_NAMED_BIT */

/**
 * @summary NetworkCapability_eventsProvided_established
 * @description
 *
 * Network can report the `established` Call Control event. ECMA-269 Network
 * Capabilities Changed.
 *
 * @constant
 */
export
const NetworkCapability_eventsProvided_established: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary established
 * @constant
 */
export
const established: number = NetworkCapability_eventsProvided_established; /* SHORT_NAMED_BIT */

/**
 * @summary NetworkCapability_eventsProvided_failed
 * @description
 *
 * Network can report the `failed` Call Control event. ECMA-269 Network
 * Capabilities Changed.
 *
 * @constant
 */
export
const NetworkCapability_eventsProvided_failed: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary failed
 * @constant
 */
export
const failed: number = NetworkCapability_eventsProvided_failed; /* SHORT_NAMED_BIT */

/**
 * @summary NetworkCapability_eventsProvided_held
 * @description
 *
 * Network can report the `held` Call Control event. ECMA-269 Network
 * Capabilities Changed.
 *
 * @constant
 */
export
const NetworkCapability_eventsProvided_held: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary held
 * @constant
 */
export
const held: number = NetworkCapability_eventsProvided_held; /* SHORT_NAMED_BIT */

/**
 * @summary NetworkCapability_eventsProvided_networkCapabilitiesChange
 * @description
 *
 * Network can report the `networkCapabilitiesChange` Call Control event.
 * ECMA-269 Network Capabilities Changed.
 *
 * @constant
 */
export
const NetworkCapability_eventsProvided_networkCapabilitiesChange: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary networkCapabilitiesChange
 * @constant
 */
export
const networkCapabilitiesChange: number = NetworkCapability_eventsProvided_networkCapabilitiesChange; /* SHORT_NAMED_BIT */

/**
 * @summary NetworkCapability_eventsProvided_networkReached
 * @description
 *
 * Network can report the `networkReached` Call Control event. ECMA-269 Network
 * Capabilities Changed.
 *
 * @constant
 */
export
const NetworkCapability_eventsProvided_networkReached: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary networkReached
 * @constant
 */
export
const networkReached: number = NetworkCapability_eventsProvided_networkReached; /* SHORT_NAMED_BIT */

/**
 * @summary NetworkCapability_eventsProvided_offered
 * @description
 *
 * Network can report the `offered` Call Control event. ECMA-269 Network
 * Capabilities Changed.
 *
 * @constant
 */
export
const NetworkCapability_eventsProvided_offered: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary offered
 * @constant
 */
export
const offered: number = NetworkCapability_eventsProvided_offered; /* SHORT_NAMED_BIT */

/**
 * @summary NetworkCapability_eventsProvided_originated
 * @description
 *
 * Network can report the `originated` Call Control event. ECMA-269 Network
 * Capabilities Changed.
 *
 * @constant
 */
export
const NetworkCapability_eventsProvided_originated: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary originated
 * @constant
 */
export
const originated: number = NetworkCapability_eventsProvided_originated; /* SHORT_NAMED_BIT */

/**
 * @summary NetworkCapability_eventsProvided_queued
 * @description
 *
 * Network can report the `queued` Call Control event. ECMA-269 Network
 * Capabilities Changed.
 *
 * @constant
 */
export
const NetworkCapability_eventsProvided_queued: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 */
export
const queued: number = NetworkCapability_eventsProvided_queued; /* SHORT_NAMED_BIT */

/**
 * @summary NetworkCapability_eventsProvided_retrieved
 * @description
 *
 * Network can report the `retrieved` Call Control event. ECMA-269 Network
 * Capabilities Changed.
 *
 * @constant
 */
export
const NetworkCapability_eventsProvided_retrieved: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary retrieved
 * @constant
 */
export
const retrieved: number = NetworkCapability_eventsProvided_retrieved; /* SHORT_NAMED_BIT */

/**
 * @summary NetworkCapability_eventsProvided_serviceInitiated
 * @description
 *
 * Network can report the `serviceInitiated` Call Control event. ECMA-269
 * Network Capabilities Changed.
 *
 * @constant
 */
export
const NetworkCapability_eventsProvided_serviceInitiated: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary serviceInitiated
 * @constant
 */
export
const serviceInitiated: number = NetworkCapability_eventsProvided_serviceInitiated; /* SHORT_NAMED_BIT */

/**
 * @summary NetworkCapability_eventsProvided_transferred
 * @description
 *
 * Network can report the `transferred` Call Control event. ECMA-269 Network
 * Capabilities Changed.
 *
 * @constant
 */
export
const NetworkCapability_eventsProvided_transferred: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary transferred
 * @constant
 */
export
const transferred: number = NetworkCapability_eventsProvided_transferred; /* SHORT_NAMED_BIT */

let _cached_decoder_for_NetworkCapability_eventsProvided: $.ASN1Decoder<NetworkCapability_eventsProvided> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkCapability_eventsProvided
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkCapability_eventsProvided (el: _Element): NetworkCapability_eventsProvided {
    if (!_cached_decoder_for_NetworkCapability_eventsProvided) { _cached_decoder_for_NetworkCapability_eventsProvided = $._decodeBitString; }
    return _cached_decoder_for_NetworkCapability_eventsProvided(el);
}

let _cached_encoder_for_NetworkCapability_eventsProvided: $.ASN1Encoder<NetworkCapability_eventsProvided> | null = null;

/**
 * @summary Encodes a(n) NetworkCapability_eventsProvided into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkCapability_eventsProvided, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkCapability_eventsProvided (value: NetworkCapability_eventsProvided, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkCapability_eventsProvided) { _cached_encoder_for_NetworkCapability_eventsProvided = $._encodeBitString; }
    return _cached_encoder_for_NetworkCapability_eventsProvided(value, elGetter);
}


/* eslint-enable */
