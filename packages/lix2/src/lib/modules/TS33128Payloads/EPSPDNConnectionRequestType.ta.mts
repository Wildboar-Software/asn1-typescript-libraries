/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSPDNConnectionRequestType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSPDNConnectionRequestType  ::=  ENUMERATED
 * {
 *     initialRequest(1),
 *     handover(2),
 *     rLOS(3),
 *     emergency(4),
 *     handoverOfEmergencyBearerServices(5),
 *     reserved(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EPSPDNConnectionRequestType {
    initialRequest = 1,
    handover = 2,
    rLOS = 3,
    emergency = 4,
    handoverOfEmergencyBearerServices = 5,
    reserved = 6,
}

/**
 * @summary EPSPDNConnectionRequestType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSPDNConnectionRequestType  ::=  ENUMERATED
 * {
 *     initialRequest(1),
 *     handover(2),
 *     rLOS(3),
 *     emergency(4),
 *     handoverOfEmergencyBearerServices(5),
 *     reserved(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EPSPDNConnectionRequestType = _enum_for_EPSPDNConnectionRequestType;

/**
 * @summary EPSPDNConnectionRequestType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSPDNConnectionRequestType  ::=  ENUMERATED
 * {
 *     initialRequest(1),
 *     handover(2),
 *     rLOS(3),
 *     emergency(4),
 *     handoverOfEmergencyBearerServices(5),
 *     reserved(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EPSPDNConnectionRequestType = _enum_for_EPSPDNConnectionRequestType;

/**
 * @summary EPSPDNConnectionRequestType_initialRequest
 * @constant
 * @type {number}
 */
export
const EPSPDNConnectionRequestType_initialRequest: EPSPDNConnectionRequestType = EPSPDNConnectionRequestType.initialRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initialRequest
 * @constant
 * @type {number}
 */
export
const initialRequest: EPSPDNConnectionRequestType = EPSPDNConnectionRequestType.initialRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSPDNConnectionRequestType_handover
 * @constant
 * @type {number}
 */
export
const EPSPDNConnectionRequestType_handover: EPSPDNConnectionRequestType = EPSPDNConnectionRequestType.handover; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handover
 * @constant
 * @type {number}
 */
export
const handover: EPSPDNConnectionRequestType = EPSPDNConnectionRequestType.handover; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSPDNConnectionRequestType_rLOS
 * @constant
 * @type {number}
 */
export
const EPSPDNConnectionRequestType_rLOS: EPSPDNConnectionRequestType = EPSPDNConnectionRequestType.rLOS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rLOS
 * @constant
 * @type {number}
 */
export
const rLOS: EPSPDNConnectionRequestType = EPSPDNConnectionRequestType.rLOS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSPDNConnectionRequestType_emergency
 * @constant
 * @type {number}
 */
export
const EPSPDNConnectionRequestType_emergency: EPSPDNConnectionRequestType = EPSPDNConnectionRequestType.emergency; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergency
 * @constant
 * @type {number}
 */
export
const emergency: EPSPDNConnectionRequestType = EPSPDNConnectionRequestType.emergency; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSPDNConnectionRequestType_handoverOfEmergencyBearerServices
 * @constant
 * @type {number}
 */
export
const EPSPDNConnectionRequestType_handoverOfEmergencyBearerServices: EPSPDNConnectionRequestType = EPSPDNConnectionRequestType.handoverOfEmergencyBearerServices; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handoverOfEmergencyBearerServices
 * @constant
 * @type {number}
 */
export
const handoverOfEmergencyBearerServices: EPSPDNConnectionRequestType = EPSPDNConnectionRequestType.handoverOfEmergencyBearerServices; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSPDNConnectionRequestType_reserved
 * @constant
 * @type {number}
 */
export
const EPSPDNConnectionRequestType_reserved: EPSPDNConnectionRequestType = EPSPDNConnectionRequestType.reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @constant
 * @type {number}
 */
export
const reserved: EPSPDNConnectionRequestType = EPSPDNConnectionRequestType.reserved; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EPSPDNConnectionRequestType: $.ASN1Decoder<EPSPDNConnectionRequestType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSPDNConnectionRequestType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSPDNConnectionRequestType (el: _Element): EPSPDNConnectionRequestType {
    if (!_cached_decoder_for_EPSPDNConnectionRequestType) { _cached_decoder_for_EPSPDNConnectionRequestType = $._decodeEnumerated; }
    return _cached_decoder_for_EPSPDNConnectionRequestType(el);
}

let _cached_encoder_for_EPSPDNConnectionRequestType: $.ASN1Encoder<EPSPDNConnectionRequestType> | null = null;

/**
 * @summary Encodes a(n) EPSPDNConnectionRequestType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSPDNConnectionRequestType, encoded as an ASN.1 Element.
 */
export
function _encode_EPSPDNConnectionRequestType (value: EPSPDNConnectionRequestType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSPDNConnectionRequestType) { _cached_encoder_for_EPSPDNConnectionRequestType = $._encodeEnumerated; }
    return _cached_encoder_for_EPSPDNConnectionRequestType(value, elGetter);
}


/* eslint-enable */
