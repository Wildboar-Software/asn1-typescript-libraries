/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSPDNConnectionRequestType
 * @description
 * 
 * Type of request as derived from the Request Type described in TS 24.301 [50]
 * clause 9.9.4.14 and TS 24.008 [95] clause 10.5.6.17, if available.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Type of request as derived from the Request Type described in TS 24.301 [50]
 * clause 9.9.4.14 and TS 24.008 [95] clause 10.5.6.17, if available.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Type of request as derived from the Request Type described in TS 24.301 [50]
 * clause 9.9.4.14 and TS 24.008 [95] clause 10.5.6.17, if available.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const EPSPDNConnectionRequestType: typeof _enum_for_EPSPDNConnectionRequestType = _enum_for_EPSPDNConnectionRequestType;

/**
 * @summary EPSPDNConnectionRequestType_initialRequest
 * @constant
 * @type {number}
 */
export
const EPSPDNConnectionRequestType_initialRequest: _enum_for_EPSPDNConnectionRequestType.initialRequest = EPSPDNConnectionRequestType.initialRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initialRequest
 * @constant
 * @type {number}
 */
export
const initialRequest: _enum_for_EPSPDNConnectionRequestType.initialRequest = EPSPDNConnectionRequestType.initialRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSPDNConnectionRequestType_handover
 * @constant
 * @type {number}
 */
export
const EPSPDNConnectionRequestType_handover: _enum_for_EPSPDNConnectionRequestType.handover = EPSPDNConnectionRequestType.handover; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handover
 * @constant
 * @type {number}
 */
export
const handover: _enum_for_EPSPDNConnectionRequestType.handover = EPSPDNConnectionRequestType.handover; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSPDNConnectionRequestType_rLOS
 * @constant
 * @type {number}
 */
export
const EPSPDNConnectionRequestType_rLOS: _enum_for_EPSPDNConnectionRequestType.rLOS = EPSPDNConnectionRequestType.rLOS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rLOS
 * @constant
 * @type {number}
 */
export
const rLOS: _enum_for_EPSPDNConnectionRequestType.rLOS = EPSPDNConnectionRequestType.rLOS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSPDNConnectionRequestType_emergency
 * @constant
 * @type {number}
 */
export
const EPSPDNConnectionRequestType_emergency: _enum_for_EPSPDNConnectionRequestType.emergency = EPSPDNConnectionRequestType.emergency; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergency
 * @constant
 * @type {number}
 */
export
const emergency: _enum_for_EPSPDNConnectionRequestType.emergency = EPSPDNConnectionRequestType.emergency; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSPDNConnectionRequestType_handoverOfEmergencyBearerServices
 * @constant
 * @type {number}
 */
export
const EPSPDNConnectionRequestType_handoverOfEmergencyBearerServices: _enum_for_EPSPDNConnectionRequestType.handoverOfEmergencyBearerServices = EPSPDNConnectionRequestType.handoverOfEmergencyBearerServices; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handoverOfEmergencyBearerServices
 * @constant
 * @type {number}
 */
export
const handoverOfEmergencyBearerServices: _enum_for_EPSPDNConnectionRequestType.handoverOfEmergencyBearerServices = EPSPDNConnectionRequestType.handoverOfEmergencyBearerServices; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSPDNConnectionRequestType_reserved
 * @constant
 * @type {number}
 */
export
const EPSPDNConnectionRequestType_reserved: _enum_for_EPSPDNConnectionRequestType.reserved = EPSPDNConnectionRequestType.reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @constant
 * @type {number}
 */
export
const reserved: _enum_for_EPSPDNConnectionRequestType.reserved = EPSPDNConnectionRequestType.reserved; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EPSPDNConnectionRequestType: $.ASN1Decoder<EPSPDNConnectionRequestType> = $._decodeEnumerated;
export const _encode_EPSPDNConnectionRequestType: $.ASN1Encoder<EPSPDNConnectionRequestType> = $._encodeEnumerated;


/* eslint-enable */
