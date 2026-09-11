/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary PhysicalDeviceFeatureEvents
 * @description
 *
 * Physical device-feature events. BIT STRING advertised in ACSE
 * user-information listing which CSTA services or events this association will
 * use. ECMA-285 §8.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PhysicalDeviceFeatureEvents  ::=  BIT STRING
 * {    buttonInformation                     ( 0),
 *     buttonPress                         ( 1),
 *     displayUpdated                         ( 2),
 *     hookswitch                         ( 3),
 *     lampMode                         ( 4),
 *     messageWaiting                         ( 5),
 *     microphoneGain                         ( 6),
 *     microphoneMute                         ( 7),
 *     ringerStatus                        ( 8),
 *     speakerMute                         ( 9),
 *     speakerVolume                         (10) }
 * ```
 */
export
type PhysicalDeviceFeatureEvents = BIT_STRING;

/**
 * @summary PhysicalDeviceFeatureEvents_buttonInformation
 * @description
 * Advertises the `buttonInformation` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const PhysicalDeviceFeatureEvents_buttonInformation: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary buttonInformation
 * @description Alias of {@link PhysicalDeviceFeatureEvents_buttonInformation}.
 * @constant
 */
export
const buttonInformation: number = PhysicalDeviceFeatureEvents_buttonInformation; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeviceFeatureEvents_buttonPress
 * @description
 * Advertises the `buttonPress` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const PhysicalDeviceFeatureEvents_buttonPress: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary buttonPress
 * @description Alias of {@link PhysicalDeviceFeatureEvents_buttonPress}.
 * @constant
 */
export
const buttonPress: number = PhysicalDeviceFeatureEvents_buttonPress; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeviceFeatureEvents_displayUpdated
 * @description
 * Advertises the `displayUpdated` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const PhysicalDeviceFeatureEvents_displayUpdated: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary displayUpdated
 * @description Alias of {@link PhysicalDeviceFeatureEvents_displayUpdated}.
 * @constant
 */
export
const displayUpdated: number = PhysicalDeviceFeatureEvents_displayUpdated; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeviceFeatureEvents_hookswitch
 * @description
 * Advertises the `hookswitch` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const PhysicalDeviceFeatureEvents_hookswitch: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary hookswitch
 * @description Alias of {@link PhysicalDeviceFeatureEvents_hookswitch}.
 * @constant
 */
export
const hookswitch: number = PhysicalDeviceFeatureEvents_hookswitch; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeviceFeatureEvents_lampMode
 * @description
 * Advertises the `lampMode` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const PhysicalDeviceFeatureEvents_lampMode: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary lampMode
 * @description Alias of {@link PhysicalDeviceFeatureEvents_lampMode}.
 * @constant
 */
export
const lampMode: number = PhysicalDeviceFeatureEvents_lampMode; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeviceFeatureEvents_messageWaiting
 * @description
 * Advertises the `messageWaiting` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const PhysicalDeviceFeatureEvents_messageWaiting: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary messageWaiting
 * @description Alias of {@link PhysicalDeviceFeatureEvents_messageWaiting}.
 * @constant
 */
export
const messageWaiting: number = PhysicalDeviceFeatureEvents_messageWaiting; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeviceFeatureEvents_microphoneGain
 * @description
 * Advertises the `microphoneGain` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const PhysicalDeviceFeatureEvents_microphoneGain: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary microphoneGain
 * @description Alias of {@link PhysicalDeviceFeatureEvents_microphoneGain}.
 * @constant
 */
export
const microphoneGain: number = PhysicalDeviceFeatureEvents_microphoneGain; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeviceFeatureEvents_microphoneMute
 * @description
 * Advertises the `microphoneMute` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const PhysicalDeviceFeatureEvents_microphoneMute: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary microphoneMute
 * @description Alias of {@link PhysicalDeviceFeatureEvents_microphoneMute}.
 * @constant
 */
export
const microphoneMute: number = PhysicalDeviceFeatureEvents_microphoneMute; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeviceFeatureEvents_ringerStatus
 * @description
 * Advertises the `ringerStatus` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const PhysicalDeviceFeatureEvents_ringerStatus: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary ringerStatus
 * @description Alias of {@link PhysicalDeviceFeatureEvents_ringerStatus}.
 * @constant
 */
export
const ringerStatus: number = PhysicalDeviceFeatureEvents_ringerStatus; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeviceFeatureEvents_speakerMute
 * @description
 * Advertises the `speakerMute` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const PhysicalDeviceFeatureEvents_speakerMute: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary speakerMute
 * @description Alias of {@link PhysicalDeviceFeatureEvents_speakerMute}.
 * @constant
 */
export
const speakerMute: number = PhysicalDeviceFeatureEvents_speakerMute; /* SHORT_NAMED_BIT */

/**
 * @summary PhysicalDeviceFeatureEvents_speakerVolume
 * @description
 * Advertises the `speakerVolume` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const PhysicalDeviceFeatureEvents_speakerVolume: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary speakerVolume
 * @description Alias of {@link PhysicalDeviceFeatureEvents_speakerVolume}.
 * @constant
 */
export
const speakerVolume: number = PhysicalDeviceFeatureEvents_speakerVolume; /* SHORT_NAMED_BIT */

let _cached_decoder_for_PhysicalDeviceFeatureEvents: $.ASN1Decoder<PhysicalDeviceFeatureEvents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeviceFeatureEvents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PhysicalDeviceFeatureEvents (el: _Element): PhysicalDeviceFeatureEvents {
    if (!_cached_decoder_for_PhysicalDeviceFeatureEvents) { _cached_decoder_for_PhysicalDeviceFeatureEvents = $._decodeBitString; }
    return _cached_decoder_for_PhysicalDeviceFeatureEvents(el);
}

let _cached_encoder_for_PhysicalDeviceFeatureEvents: $.ASN1Encoder<PhysicalDeviceFeatureEvents> | null = null;

/**
 * @summary Encodes a(n) PhysicalDeviceFeatureEvents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeviceFeatureEvents, encoded as an ASN.1 Element.
 */
export
function _encode_PhysicalDeviceFeatureEvents (value: PhysicalDeviceFeatureEvents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PhysicalDeviceFeatureEvents) { _cached_encoder_for_PhysicalDeviceFeatureEvents = $._encodeBitString; }
    return _cached_encoder_for_PhysicalDeviceFeatureEvents(value, elGetter);
}


/* eslint-enable */
