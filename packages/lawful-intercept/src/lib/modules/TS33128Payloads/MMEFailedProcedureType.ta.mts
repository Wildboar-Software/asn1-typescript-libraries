/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMEFailedProcedureType
 * @description
 * 
 * Specifies the procedure which failed at the MME.
 *
 * 3GPP TS 33.128, clause 6.3.2.2.7.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEFailedProcedureType  ::=  ENUMERATED
 * {
 *     attachReject(1),
 *     authenticationReject(2),
 *     securityModeReject(3),
 *     serviceReject(4),
 *     trackingAreaUpdateReject(5),
 *     activateDedicatedEPSBearerContextReject(6),
 *     activateDefaultEPSBearerContextReject(7),
 *     bearerResourceAllocationReject(8),
 *     bearerResourceModificationReject(9),
 *     modifyEPSBearerContectReject(10),
 *     pDNConnectivityReject(11),
 *     pDNDisconnectReject(12)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMEFailedProcedureType {
    attachReject = 1,
    authenticationReject = 2,
    securityModeReject = 3,
    serviceReject = 4,
    trackingAreaUpdateReject = 5,
    activateDedicatedEPSBearerContextReject = 6,
    activateDefaultEPSBearerContextReject = 7,
    bearerResourceAllocationReject = 8,
    bearerResourceModificationReject = 9,
    modifyEPSBearerContectReject = 10,
    pDNConnectivityReject = 11,
    pDNDisconnectReject = 12,
}

/**
 * @summary MMEFailedProcedureType
 * @description
 * 
 * Specifies the procedure which failed at the MME.
 *
 * 3GPP TS 33.128, clause 6.3.2.2.7.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEFailedProcedureType  ::=  ENUMERATED
 * {
 *     attachReject(1),
 *     authenticationReject(2),
 *     securityModeReject(3),
 *     serviceReject(4),
 *     trackingAreaUpdateReject(5),
 *     activateDedicatedEPSBearerContextReject(6),
 *     activateDefaultEPSBearerContextReject(7),
 *     bearerResourceAllocationReject(8),
 *     bearerResourceModificationReject(9),
 *     modifyEPSBearerContectReject(10),
 *     pDNConnectivityReject(11),
 *     pDNDisconnectReject(12)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMEFailedProcedureType = _enum_for_MMEFailedProcedureType;

/**
 * @summary MMEFailedProcedureType
 * @description
 * 
 * Specifies the procedure which failed at the MME.
 *
 * 3GPP TS 33.128, clause 6.3.2.2.7.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEFailedProcedureType  ::=  ENUMERATED
 * {
 *     attachReject(1),
 *     authenticationReject(2),
 *     securityModeReject(3),
 *     serviceReject(4),
 *     trackingAreaUpdateReject(5),
 *     activateDedicatedEPSBearerContextReject(6),
 *     activateDefaultEPSBearerContextReject(7),
 *     bearerResourceAllocationReject(8),
 *     bearerResourceModificationReject(9),
 *     modifyEPSBearerContectReject(10),
 *     pDNConnectivityReject(11),
 *     pDNDisconnectReject(12)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMEFailedProcedureType = _enum_for_MMEFailedProcedureType;

/**
 * @summary MMEFailedProcedureType_attachReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_attachReject = MMEFailedProcedureType.attachReject satisfies MMEFailedProcedureType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attachReject
 * @constant
 * @type {number}
 */
export
const attachReject = MMEFailedProcedureType.attachReject satisfies MMEFailedProcedureType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_authenticationReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_authenticationReject = MMEFailedProcedureType.authenticationReject satisfies MMEFailedProcedureType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authenticationReject
 * @constant
 * @type {number}
 */
export
const authenticationReject = MMEFailedProcedureType.authenticationReject satisfies MMEFailedProcedureType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_securityModeReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_securityModeReject = MMEFailedProcedureType.securityModeReject satisfies MMEFailedProcedureType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary securityModeReject
 * @constant
 * @type {number}
 */
export
const securityModeReject = MMEFailedProcedureType.securityModeReject satisfies MMEFailedProcedureType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_serviceReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_serviceReject = MMEFailedProcedureType.serviceReject satisfies MMEFailedProcedureType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceReject
 * @constant
 * @type {number}
 */
export
const serviceReject = MMEFailedProcedureType.serviceReject satisfies MMEFailedProcedureType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_trackingAreaUpdateReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_trackingAreaUpdateReject = MMEFailedProcedureType.trackingAreaUpdateReject satisfies MMEFailedProcedureType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trackingAreaUpdateReject
 * @constant
 * @type {number}
 */
export
const trackingAreaUpdateReject = MMEFailedProcedureType.trackingAreaUpdateReject satisfies MMEFailedProcedureType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_activateDedicatedEPSBearerContextReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_activateDedicatedEPSBearerContextReject = MMEFailedProcedureType.activateDedicatedEPSBearerContextReject satisfies MMEFailedProcedureType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activateDedicatedEPSBearerContextReject
 * @constant
 * @type {number}
 */
export
const activateDedicatedEPSBearerContextReject = MMEFailedProcedureType.activateDedicatedEPSBearerContextReject satisfies MMEFailedProcedureType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_activateDefaultEPSBearerContextReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_activateDefaultEPSBearerContextReject = MMEFailedProcedureType.activateDefaultEPSBearerContextReject satisfies MMEFailedProcedureType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activateDefaultEPSBearerContextReject
 * @constant
 * @type {number}
 */
export
const activateDefaultEPSBearerContextReject = MMEFailedProcedureType.activateDefaultEPSBearerContextReject satisfies MMEFailedProcedureType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_bearerResourceAllocationReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_bearerResourceAllocationReject = MMEFailedProcedureType.bearerResourceAllocationReject satisfies MMEFailedProcedureType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bearerResourceAllocationReject
 * @constant
 * @type {number}
 */
export
const bearerResourceAllocationReject = MMEFailedProcedureType.bearerResourceAllocationReject satisfies MMEFailedProcedureType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_bearerResourceModificationReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_bearerResourceModificationReject = MMEFailedProcedureType.bearerResourceModificationReject satisfies MMEFailedProcedureType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bearerResourceModificationReject
 * @constant
 * @type {number}
 */
export
const bearerResourceModificationReject = MMEFailedProcedureType.bearerResourceModificationReject satisfies MMEFailedProcedureType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_modifyEPSBearerContectReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_modifyEPSBearerContectReject = MMEFailedProcedureType.modifyEPSBearerContectReject satisfies MMEFailedProcedureType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modifyEPSBearerContectReject
 * @constant
 * @type {number}
 */
export
const modifyEPSBearerContectReject = MMEFailedProcedureType.modifyEPSBearerContectReject satisfies MMEFailedProcedureType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_pDNConnectivityReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_pDNConnectivityReject = MMEFailedProcedureType.pDNConnectivityReject satisfies MMEFailedProcedureType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDNConnectivityReject
 * @constant
 * @type {number}
 */
export
const pDNConnectivityReject = MMEFailedProcedureType.pDNConnectivityReject satisfies MMEFailedProcedureType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_pDNDisconnectReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_pDNDisconnectReject = MMEFailedProcedureType.pDNDisconnectReject satisfies MMEFailedProcedureType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDNDisconnectReject
 * @constant
 * @type {number}
 */
export
const pDNDisconnectReject = MMEFailedProcedureType.pDNDisconnectReject satisfies MMEFailedProcedureType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMEFailedProcedureType: $.ASN1Decoder<MMEFailedProcedureType> = $._decodeEnumerated;
export const _encode_MMEFailedProcedureType: $.ASN1Encoder<MMEFailedProcedureType> = $._encodeEnumerated;


/* eslint-enable */
