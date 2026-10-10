/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGSMRequestType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSMRequestType  ::=  ENUMERATED
 * {
 *     initialRequest(1),
 *     existingPDUSession(2),
 *     initialEmergencyRequest(3),
 *     existingEmergencyPDUSession(4),
 *     modificationRequest(5),
 *     reserved(6),
 *     mAPDURequest(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FiveGSMRequestType {
    initialRequest = 1,
    existingPDUSession = 2,
    initialEmergencyRequest = 3,
    existingEmergencyPDUSession = 4,
    modificationRequest = 5,
    reserved = 6,
    mAPDURequest = 7,
}

/**
 * @summary FiveGSMRequestType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSMRequestType  ::=  ENUMERATED
 * {
 *     initialRequest(1),
 *     existingPDUSession(2),
 *     initialEmergencyRequest(3),
 *     existingEmergencyPDUSession(4),
 *     modificationRequest(5),
 *     reserved(6),
 *     mAPDURequest(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FiveGSMRequestType = _enum_for_FiveGSMRequestType;

/**
 * @summary FiveGSMRequestType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSMRequestType  ::=  ENUMERATED
 * {
 *     initialRequest(1),
 *     existingPDUSession(2),
 *     initialEmergencyRequest(3),
 *     existingEmergencyPDUSession(4),
 *     modificationRequest(5),
 *     reserved(6),
 *     mAPDURequest(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FiveGSMRequestType = _enum_for_FiveGSMRequestType;

/**
 * @summary FiveGSMRequestType_initialRequest
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_initialRequest: FiveGSMRequestType = FiveGSMRequestType.initialRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initialRequest
 * @constant
 * @type {number}
 */
export
const initialRequest: FiveGSMRequestType = FiveGSMRequestType.initialRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSMRequestType_existingPDUSession
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_existingPDUSession: FiveGSMRequestType = FiveGSMRequestType.existingPDUSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary existingPDUSession
 * @constant
 * @type {number}
 */
export
const existingPDUSession: FiveGSMRequestType = FiveGSMRequestType.existingPDUSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSMRequestType_initialEmergencyRequest
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_initialEmergencyRequest: FiveGSMRequestType = FiveGSMRequestType.initialEmergencyRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initialEmergencyRequest
 * @constant
 * @type {number}
 */
export
const initialEmergencyRequest: FiveGSMRequestType = FiveGSMRequestType.initialEmergencyRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSMRequestType_existingEmergencyPDUSession
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_existingEmergencyPDUSession: FiveGSMRequestType = FiveGSMRequestType.existingEmergencyPDUSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary existingEmergencyPDUSession
 * @constant
 * @type {number}
 */
export
const existingEmergencyPDUSession: FiveGSMRequestType = FiveGSMRequestType.existingEmergencyPDUSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSMRequestType_modificationRequest
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_modificationRequest: FiveGSMRequestType = FiveGSMRequestType.modificationRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modificationRequest
 * @constant
 * @type {number}
 */
export
const modificationRequest: FiveGSMRequestType = FiveGSMRequestType.modificationRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSMRequestType_reserved
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_reserved: FiveGSMRequestType = FiveGSMRequestType.reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @constant
 * @type {number}
 */
export
const reserved: FiveGSMRequestType = FiveGSMRequestType.reserved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSMRequestType_mAPDURequest
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_mAPDURequest: FiveGSMRequestType = FiveGSMRequestType.mAPDURequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mAPDURequest
 * @constant
 * @type {number}
 */
export
const mAPDURequest: FiveGSMRequestType = FiveGSMRequestType.mAPDURequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGSMRequestType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FiveGSMRequestType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) FiveGSMRequestType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGSMRequestType, encoded as an ASN.1 Element.
 */
export const _encode_FiveGSMRequestType = $._encodeEnumerated;


/* eslint-enable */
