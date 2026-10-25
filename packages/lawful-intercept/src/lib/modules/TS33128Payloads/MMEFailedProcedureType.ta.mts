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
const MMEFailedProcedureType: typeof _enum_for_MMEFailedProcedureType = _enum_for_MMEFailedProcedureType;

/**
 * @summary MMEFailedProcedureType_attachReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_attachReject: _enum_for_MMEFailedProcedureType.attachReject = MMEFailedProcedureType.attachReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attachReject
 * @constant
 * @type {number}
 */
export
const attachReject: _enum_for_MMEFailedProcedureType.attachReject = MMEFailedProcedureType.attachReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_authenticationReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_authenticationReject: _enum_for_MMEFailedProcedureType.authenticationReject = MMEFailedProcedureType.authenticationReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authenticationReject
 * @constant
 * @type {number}
 */
export
const authenticationReject: _enum_for_MMEFailedProcedureType.authenticationReject = MMEFailedProcedureType.authenticationReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_securityModeReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_securityModeReject: _enum_for_MMEFailedProcedureType.securityModeReject = MMEFailedProcedureType.securityModeReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary securityModeReject
 * @constant
 * @type {number}
 */
export
const securityModeReject: _enum_for_MMEFailedProcedureType.securityModeReject = MMEFailedProcedureType.securityModeReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_serviceReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_serviceReject: _enum_for_MMEFailedProcedureType.serviceReject = MMEFailedProcedureType.serviceReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceReject
 * @constant
 * @type {number}
 */
export
const serviceReject: _enum_for_MMEFailedProcedureType.serviceReject = MMEFailedProcedureType.serviceReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_trackingAreaUpdateReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_trackingAreaUpdateReject: _enum_for_MMEFailedProcedureType.trackingAreaUpdateReject = MMEFailedProcedureType.trackingAreaUpdateReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trackingAreaUpdateReject
 * @constant
 * @type {number}
 */
export
const trackingAreaUpdateReject: _enum_for_MMEFailedProcedureType.trackingAreaUpdateReject = MMEFailedProcedureType.trackingAreaUpdateReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_activateDedicatedEPSBearerContextReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_activateDedicatedEPSBearerContextReject: _enum_for_MMEFailedProcedureType.activateDedicatedEPSBearerContextReject = MMEFailedProcedureType.activateDedicatedEPSBearerContextReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activateDedicatedEPSBearerContextReject
 * @constant
 * @type {number}
 */
export
const activateDedicatedEPSBearerContextReject: _enum_for_MMEFailedProcedureType.activateDedicatedEPSBearerContextReject = MMEFailedProcedureType.activateDedicatedEPSBearerContextReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_activateDefaultEPSBearerContextReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_activateDefaultEPSBearerContextReject: _enum_for_MMEFailedProcedureType.activateDefaultEPSBearerContextReject = MMEFailedProcedureType.activateDefaultEPSBearerContextReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activateDefaultEPSBearerContextReject
 * @constant
 * @type {number}
 */
export
const activateDefaultEPSBearerContextReject: _enum_for_MMEFailedProcedureType.activateDefaultEPSBearerContextReject = MMEFailedProcedureType.activateDefaultEPSBearerContextReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_bearerResourceAllocationReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_bearerResourceAllocationReject: _enum_for_MMEFailedProcedureType.bearerResourceAllocationReject = MMEFailedProcedureType.bearerResourceAllocationReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bearerResourceAllocationReject
 * @constant
 * @type {number}
 */
export
const bearerResourceAllocationReject: _enum_for_MMEFailedProcedureType.bearerResourceAllocationReject = MMEFailedProcedureType.bearerResourceAllocationReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_bearerResourceModificationReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_bearerResourceModificationReject: _enum_for_MMEFailedProcedureType.bearerResourceModificationReject = MMEFailedProcedureType.bearerResourceModificationReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bearerResourceModificationReject
 * @constant
 * @type {number}
 */
export
const bearerResourceModificationReject: _enum_for_MMEFailedProcedureType.bearerResourceModificationReject = MMEFailedProcedureType.bearerResourceModificationReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_modifyEPSBearerContectReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_modifyEPSBearerContectReject: _enum_for_MMEFailedProcedureType.modifyEPSBearerContectReject = MMEFailedProcedureType.modifyEPSBearerContectReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modifyEPSBearerContectReject
 * @constant
 * @type {number}
 */
export
const modifyEPSBearerContectReject: _enum_for_MMEFailedProcedureType.modifyEPSBearerContectReject = MMEFailedProcedureType.modifyEPSBearerContectReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_pDNConnectivityReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_pDNConnectivityReject: _enum_for_MMEFailedProcedureType.pDNConnectivityReject = MMEFailedProcedureType.pDNConnectivityReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDNConnectivityReject
 * @constant
 * @type {number}
 */
export
const pDNConnectivityReject: _enum_for_MMEFailedProcedureType.pDNConnectivityReject = MMEFailedProcedureType.pDNConnectivityReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_pDNDisconnectReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_pDNDisconnectReject: _enum_for_MMEFailedProcedureType.pDNDisconnectReject = MMEFailedProcedureType.pDNDisconnectReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDNDisconnectReject
 * @constant
 * @type {number}
 */
export
const pDNDisconnectReject: _enum_for_MMEFailedProcedureType.pDNDisconnectReject = MMEFailedProcedureType.pDNDisconnectReject; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMEFailedProcedureType: $.ASN1Decoder<MMEFailedProcedureType> = $._decodeEnumerated;
export const _encode_MMEFailedProcedureType: $.ASN1Encoder<MMEFailedProcedureType> = $._encodeEnumerated;


/* eslint-enable */
