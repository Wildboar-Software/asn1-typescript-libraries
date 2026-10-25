/* eslint-disable */
import {
    type ASN1Element as _Element,
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AccessType {
    call = 0,
    emergencyCall = 1,
    locationUpdating = 2,
    supplementaryService = 3,
    shortMessage = 4,
    gprsAttach = 5,
    routingAreaUpdating = 6,
    serviceRequest = 7,
    pdpContextActivation = 8,
    pdpContextDeactivation = 9,
    gprsDetach = 10,
}

/**
 * @summary AccessType
 * @description
 *
 * Indicates whether authentication was initiated due to a call, emergency call,
 * location updating, supplementary service, short message, GPRS attach, routing
 * area updating, service request, PDP context activation or deactivation, or
 * GPRS detach (3GPP TS 29.002 V19.1.0 clause 7.6.7.11).
 *
 * Exception handling: received values greater than 10 shall be ignored (3GPP TS
 * 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessType  ::=  ENUMERATED {
 *     call (0),
 *     emergencyCall (1),
 *     locationUpdating (2),
 *     supplementaryService (3),
 *     shortMessage (4),
 *     gprsAttach (5),
 *     routingAreaUpdating (6),
 *     serviceRequest (7),
 *     pdpContextActivation (8),
 *     pdpContextDeactivation (9),
 *     ...,
 *     gprsDetach (10)}
 * ```
 * 
 * @enum {number}
 */
export
type AccessType = _enum_for_AccessType | ENUMERATED;

/**
 * @summary AccessType_call
 * @constant
 * @type {number}
 */
export
const AccessType_call = _enum_for_AccessType.call satisfies AccessType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary call
 * @constant
 * @type {number}
 */
export
const call = AccessType_call satisfies AccessType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_emergencyCall
 * @constant
 * @type {number}
 */
export
const AccessType_emergencyCall = _enum_for_AccessType.emergencyCall satisfies AccessType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergencyCall
 * @constant
 * @type {number}
 */
export
const emergencyCall = AccessType_emergencyCall satisfies AccessType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_locationUpdating
 * @constant
 * @type {number}
 */
export
const AccessType_locationUpdating = _enum_for_AccessType.locationUpdating satisfies AccessType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationUpdating
 * @constant
 * @type {number}
 */
export
const locationUpdating = AccessType_locationUpdating satisfies AccessType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_supplementaryService
 * @constant
 * @type {number}
 */
export
const AccessType_supplementaryService = _enum_for_AccessType.supplementaryService satisfies AccessType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary supplementaryService
 * @constant
 * @type {number}
 */
export
const supplementaryService = AccessType_supplementaryService satisfies AccessType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_shortMessage
 * @constant
 * @type {number}
 */
export
const AccessType_shortMessage = _enum_for_AccessType.shortMessage satisfies AccessType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary shortMessage
 * @constant
 * @type {number}
 */
export
const shortMessage = AccessType_shortMessage satisfies AccessType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_gprsAttach
 * @constant
 * @type {number}
 */
export
const AccessType_gprsAttach = _enum_for_AccessType.gprsAttach satisfies AccessType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gprsAttach
 * @constant
 * @type {number}
 */
export
const gprsAttach = AccessType_gprsAttach satisfies AccessType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_routingAreaUpdating
 * @constant
 * @type {number}
 */
export
const AccessType_routingAreaUpdating = _enum_for_AccessType.routingAreaUpdating satisfies AccessType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary routingAreaUpdating
 * @constant
 * @type {number}
 */
export
const routingAreaUpdating = AccessType_routingAreaUpdating satisfies AccessType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_serviceRequest
 * @constant
 * @type {number}
 */
export
const AccessType_serviceRequest = _enum_for_AccessType.serviceRequest satisfies AccessType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceRequest
 * @constant
 * @type {number}
 */
export
const serviceRequest = AccessType_serviceRequest satisfies AccessType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_pdpContextActivation
 * @constant
 * @type {number}
 */
export
const AccessType_pdpContextActivation = _enum_for_AccessType.pdpContextActivation satisfies AccessType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pdpContextActivation
 * @constant
 * @type {number}
 */
export
const pdpContextActivation = AccessType_pdpContextActivation satisfies AccessType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_pdpContextDeactivation
 * @constant
 * @type {number}
 */
export
const AccessType_pdpContextDeactivation = _enum_for_AccessType.pdpContextDeactivation satisfies AccessType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pdpContextDeactivation
 * @constant
 * @type {number}
 */
export
const pdpContextDeactivation = AccessType_pdpContextDeactivation satisfies AccessType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_gprsDetach
 * @constant
 * @type {number}
 */
export
const AccessType_gprsDetach = _enum_for_AccessType.gprsDetach satisfies AccessType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gprsDetach
 * @constant
 * @type {number}
 */
export
const gprsDetach = AccessType_gprsDetach satisfies AccessType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) AccessType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AccessType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) AccessType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessType, encoded as an ASN.1 Element.
 */
export const _encode_AccessType = $._encodeEnumerated;


/* eslint-enable */
