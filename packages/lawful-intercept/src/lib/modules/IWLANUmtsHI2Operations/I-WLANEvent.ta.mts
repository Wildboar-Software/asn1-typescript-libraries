/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_I_WLANEvent {
    i_WLANAccessInitiation = 1,
    i_WLANAccessTermination = 2,
    i_WLANTunnelEstablishment = 3,
    i_WLANTunnelDisconnect = 4,
    startOfInterceptionCommunicationActive = 5,
    packetDataHeaderInformation = 6,
}

/**
 * @summary I_WLANEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * I-WLANEvent  ::=  ENUMERATED
 * {
 *     i-WLANAccessInitiation                     (1),
 *     i-WLANAccessTermination                    (2),
 *     i-WLANTunnelEstablishment                (3),
 *     i-WLANTunnelDisconnect                    (4),
 *     startOfInterceptionCommunicationActive    (5),
 *     ...,
 *     packetDataHeaderInformation                (6)
 * 
 * }
 * ```
 * 
 * @enum {number}
 */
export
type I_WLANEvent = _enum_for_I_WLANEvent | ENUMERATED;

/**
 * @summary I_WLANEvent_i_WLANAccessInitiation
 * @constant
 * @type {number}
 */
export
const I_WLANEvent_i_WLANAccessInitiation: I_WLANEvent = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary i_WLANAccessInitiation
 * @constant
 * @type {number}
 */
export
const i_WLANAccessInitiation: I_WLANEvent = I_WLANEvent_i_WLANAccessInitiation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary I_WLANEvent_i_WLANAccessTermination
 * @constant
 * @type {number}
 */
export
const I_WLANEvent_i_WLANAccessTermination: I_WLANEvent = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary i_WLANAccessTermination
 * @constant
 * @type {number}
 */
export
const i_WLANAccessTermination: I_WLANEvent = I_WLANEvent_i_WLANAccessTermination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary I_WLANEvent_i_WLANTunnelEstablishment
 * @constant
 * @type {number}
 */
export
const I_WLANEvent_i_WLANTunnelEstablishment: I_WLANEvent = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary i_WLANTunnelEstablishment
 * @constant
 * @type {number}
 */
export
const i_WLANTunnelEstablishment: I_WLANEvent = I_WLANEvent_i_WLANTunnelEstablishment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary I_WLANEvent_i_WLANTunnelDisconnect
 * @constant
 * @type {number}
 */
export
const I_WLANEvent_i_WLANTunnelDisconnect: I_WLANEvent = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary i_WLANTunnelDisconnect
 * @constant
 * @type {number}
 */
export
const i_WLANTunnelDisconnect: I_WLANEvent = I_WLANEvent_i_WLANTunnelDisconnect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary I_WLANEvent_startOfInterceptionCommunicationActive
 * @constant
 * @type {number}
 */
export
const I_WLANEvent_startOfInterceptionCommunicationActive: I_WLANEvent = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionCommunicationActive
 * @constant
 * @type {number}
 */
export
const startOfInterceptionCommunicationActive: I_WLANEvent = I_WLANEvent_startOfInterceptionCommunicationActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary I_WLANEvent_packetDataHeaderInformation
 * @constant
 * @type {number}
 */
export
const I_WLANEvent_packetDataHeaderInformation: I_WLANEvent = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary packetDataHeaderInformation
 * @constant
 * @type {number}
 */
export
const packetDataHeaderInformation: I_WLANEvent = I_WLANEvent_packetDataHeaderInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_I_WLANEvent: $.ASN1Decoder<I_WLANEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) I_WLANEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_I_WLANEvent (el: _Element): I_WLANEvent {
    if (!_cached_decoder_for_I_WLANEvent) { _cached_decoder_for_I_WLANEvent = $._decodeEnumerated; }
    return _cached_decoder_for_I_WLANEvent(el);
}

let _cached_encoder_for_I_WLANEvent: $.ASN1Encoder<I_WLANEvent> | null = null;

/**
 * @summary Encodes a(n) I_WLANEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The I_WLANEvent, encoded as an ASN.1 Element.
 */
export
function _encode_I_WLANEvent (value: I_WLANEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_I_WLANEvent) { _cached_encoder_for_I_WLANEvent = $._encodeEnumerated; }
    return _cached_encoder_for_I_WLANEvent(value, elGetter);
}


/* eslint-enable */
