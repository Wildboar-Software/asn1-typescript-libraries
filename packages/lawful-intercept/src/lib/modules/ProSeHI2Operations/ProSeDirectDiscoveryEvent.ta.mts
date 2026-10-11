/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ProSeDirectDiscoveryEvent {
    proseDiscoveryRequest = 1,
    proseMatchReport = 2,
}

/**
 * @summary ProSeDirectDiscoveryEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeDirectDiscoveryEvent  ::=  ENUMERATED
 * {
 *     proseDiscoveryRequest               (1),
 *     proseMatchReport                (2),
 * 
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ProSeDirectDiscoveryEvent = _enum_for_ProSeDirectDiscoveryEvent | ENUMERATED;

/**
 * @summary ProSeDirectDiscoveryEvent_proseDiscoveryRequest
 * @constant
 * @type {number}
 */
export
const ProSeDirectDiscoveryEvent_proseDiscoveryRequest: ProSeDirectDiscoveryEvent = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proseDiscoveryRequest
 * @constant
 * @type {number}
 */
export
const proseDiscoveryRequest: ProSeDirectDiscoveryEvent = ProSeDirectDiscoveryEvent_proseDiscoveryRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeDirectDiscoveryEvent_proseMatchReport
 * @constant
 * @type {number}
 */
export
const ProSeDirectDiscoveryEvent_proseMatchReport: ProSeDirectDiscoveryEvent = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proseMatchReport
 * @constant
 * @type {number}
 */
export
const proseMatchReport: ProSeDirectDiscoveryEvent = ProSeDirectDiscoveryEvent_proseMatchReport; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ProSeDirectDiscoveryEvent: $.ASN1Decoder<ProSeDirectDiscoveryEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProSeDirectDiscoveryEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProSeDirectDiscoveryEvent (el: _Element): ProSeDirectDiscoveryEvent {
    if (!_cached_decoder_for_ProSeDirectDiscoveryEvent) { _cached_decoder_for_ProSeDirectDiscoveryEvent = $._decodeEnumerated; }
    return _cached_decoder_for_ProSeDirectDiscoveryEvent(el);
}

let _cached_encoder_for_ProSeDirectDiscoveryEvent: $.ASN1Encoder<ProSeDirectDiscoveryEvent> | null = null;

/**
 * @summary Encodes a(n) ProSeDirectDiscoveryEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProSeDirectDiscoveryEvent, encoded as an ASN.1 Element.
 */
export
function _encode_ProSeDirectDiscoveryEvent (value: ProSeDirectDiscoveryEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProSeDirectDiscoveryEvent) { _cached_encoder_for_ProSeDirectDiscoveryEvent = $._encodeEnumerated; }
    return _cached_encoder_for_ProSeDirectDiscoveryEvent(value, elGetter);
}


/* eslint-enable */
