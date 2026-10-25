/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NchfChargingEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NchfChargingEvent  ::=  ENUMERATED
 * {
 *     pDUSessionChargingInformation(1),
 *     sMSChargingInformation(2),
 *     nEFChargingInformation(3),
 *     registrationChargingInformation(4),
 *     n2ConnectionChargingInformation(5),
 *     locationReportingChargingInformation(6),
 *     nSPAChargingInformation(7),
 *     nSMChargingInformation(8),
 *     mMTelChargingInformation(9),
 *     iMSChargingInformation(10),
 *     edgeInfrastructureUsageChargingInformation(11),
 *     eASDeploymentChargingInformation(12),
 *     directEdgeEnablingServiceChargingInformation(13),
 *     exposedEdgeEnablingServiceChargingInformation(14),
 *     proSeChargingInformation(15),
 *     mMSChargingInformation(16),
 *     mBSSessionChargingInformation(17),
 *     tSNChargingInformation(18),
 *     nSACFChargingInformation(19),
 *     nSSAAChargingInformation(20),
 *     rangingSLChargingInformation(21)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NchfChargingEvent {
    /**
     * @description
     *
     * Indicates the charging data holds the 5G data connectivity specific
     * information.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    pDUSessionChargingInformation = 1,
    /**
     * @description
     *
     * Indicates the charging data holds the SMS specific information.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    sMSChargingInformation = 2,
    /**
     * @description
     *
     * Indicates the charging data holds holds the Exposure Function Northbound
     * API specific information.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    nEFChargingInformation = 3,
    /**
     * @description
     *
     * Indicates the charging data holds the 5G registration specific
     * information.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    registrationChargingInformation = 4,
    /**
     * @description
     *
     * Indicates the charging data holds the 5G N2 connection specific
     * information.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    n2ConnectionChargingInformation = 5,
    /**
     * @description
     *
     * Indicates the charging data holds the 5G Location reporting specific
     * information.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    locationReportingChargingInformation = 6,
    /**
     * @description
     *
     * Indicates the charging data holds the network slice information, which is
     * reported to the CHF.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    nSPAChargingInformation = 7,
    /**
     * @description
     *
     * Indicates the charging data holds the Network Slice Management (NSM)
     * specific information.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    nSMChargingInformation = 8,
    /**
     * @description
     *
     * Indicates the charging data holds the MMTel specific information.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    mMTelChargingInformation = 9,
    /**
     * @description
     *
     * Indicates the charging data holds the IMS specific information.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    iMSChargingInformation = 10,
    /**
     * @description
     *
     * Indicates the charging data holds the edge enabling infrastructure
     * resource usage charging specific information.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    edgeInfrastructureUsageChargingInformation = 11,
    /**
     * @description
     *
     * Indicates the charging data holds the EAS deployment charging specific
     * information.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    eASDeploymentChargingInformation = 12,
    /**
     * @description
     *
     * Indicates the charging data holds the charging information the edge
     * enabling services directly provided by EES.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    directEdgeEnablingServiceChargingInformation = 13,
    /**
     * @description
     *
     * Indicates the charging data holds the charging information of the edge
     * enabling services exposed.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    exposedEdgeEnablingServiceChargingInformation = 14,
    /**
     * @description
     *
     * Indicates the charging data holds the 5G ProSe specific information.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    proSeChargingInformation = 15,
    /**
     * @description
     *
     * Indicates the charging data holds the MMS specific information.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    mMSChargingInformation = 16,
    /**
     * @description
     *
     * Indicates the charging data holds the 5G MBS specific information.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    mBSSessionChargingInformation = 17,
    /**
     * @description
     *
     * Indicates the charging data holds the TSN specific information.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    tSNChargingInformation = 18,
    /**
     * @description
     *
     * Indicates the charging data holds the Network slice admission control
     * charging specific information.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    nSACFChargingInformation = 19,
    /**
     * @description
     *
     * Indicates the charging data holds the Network slice-specific
     * authentication and authorization (NSSAA) specific information.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    nSSAAChargingInformation = 20,
    /**
     * @description
     *
     * Indicates the charging data holds the Ranging and Sidelink Positioning
     * specific information.
     *
     * 3GPP TS 33.128, clause 7.19.3.7.
     */
    rangingSLChargingInformation = 21,
}

/**
 * @summary NchfChargingEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NchfChargingEvent  ::=  ENUMERATED
 * {
 *     pDUSessionChargingInformation(1),
 *     sMSChargingInformation(2),
 *     nEFChargingInformation(3),
 *     registrationChargingInformation(4),
 *     n2ConnectionChargingInformation(5),
 *     locationReportingChargingInformation(6),
 *     nSPAChargingInformation(7),
 *     nSMChargingInformation(8),
 *     mMTelChargingInformation(9),
 *     iMSChargingInformation(10),
 *     edgeInfrastructureUsageChargingInformation(11),
 *     eASDeploymentChargingInformation(12),
 *     directEdgeEnablingServiceChargingInformation(13),
 *     exposedEdgeEnablingServiceChargingInformation(14),
 *     proSeChargingInformation(15),
 *     mMSChargingInformation(16),
 *     mBSSessionChargingInformation(17),
 *     tSNChargingInformation(18),
 *     nSACFChargingInformation(19),
 *     nSSAAChargingInformation(20),
 *     rangingSLChargingInformation(21)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NchfChargingEvent = _enum_for_NchfChargingEvent;

/**
 * @summary NchfChargingEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NchfChargingEvent  ::=  ENUMERATED
 * {
 *     pDUSessionChargingInformation(1),
 *     sMSChargingInformation(2),
 *     nEFChargingInformation(3),
 *     registrationChargingInformation(4),
 *     n2ConnectionChargingInformation(5),
 *     locationReportingChargingInformation(6),
 *     nSPAChargingInformation(7),
 *     nSMChargingInformation(8),
 *     mMTelChargingInformation(9),
 *     iMSChargingInformation(10),
 *     edgeInfrastructureUsageChargingInformation(11),
 *     eASDeploymentChargingInformation(12),
 *     directEdgeEnablingServiceChargingInformation(13),
 *     exposedEdgeEnablingServiceChargingInformation(14),
 *     proSeChargingInformation(15),
 *     mMSChargingInformation(16),
 *     mBSSessionChargingInformation(17),
 *     tSNChargingInformation(18),
 *     nSACFChargingInformation(19),
 *     nSSAAChargingInformation(20),
 *     rangingSLChargingInformation(21)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NchfChargingEvent: typeof _enum_for_NchfChargingEvent = _enum_for_NchfChargingEvent;

/**
 * @summary NchfChargingEvent_pDUSessionChargingInformation
 * @description
 *
 * Indicates the charging data holds the 5G data connectivity specific
 * information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_pDUSessionChargingInformation: _enum_for_NchfChargingEvent.pDUSessionChargingInformation = NchfChargingEvent.pDUSessionChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionChargingInformation
 * @description
 *
 * Indicates the charging data holds the 5G data connectivity specific
 * information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const pDUSessionChargingInformation: _enum_for_NchfChargingEvent.pDUSessionChargingInformation = NchfChargingEvent.pDUSessionChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_sMSChargingInformation
 * @description
 *
 * Indicates the charging data holds the SMS specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_sMSChargingInformation: _enum_for_NchfChargingEvent.sMSChargingInformation = NchfChargingEvent.sMSChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMSChargingInformation
 * @description
 *
 * Indicates the charging data holds the SMS specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const sMSChargingInformation: _enum_for_NchfChargingEvent.sMSChargingInformation = NchfChargingEvent.sMSChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_nEFChargingInformation
 * @description
 *
 * Indicates the charging data holds holds the Exposure Function Northbound API
 * specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_nEFChargingInformation: _enum_for_NchfChargingEvent.nEFChargingInformation = NchfChargingEvent.nEFChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nEFChargingInformation
 * @description
 *
 * Indicates the charging data holds holds the Exposure Function Northbound API
 * specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const nEFChargingInformation: _enum_for_NchfChargingEvent.nEFChargingInformation = NchfChargingEvent.nEFChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_registrationChargingInformation
 * @description
 *
 * Indicates the charging data holds the 5G registration specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_registrationChargingInformation: _enum_for_NchfChargingEvent.registrationChargingInformation = NchfChargingEvent.registrationChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registrationChargingInformation
 * @description
 *
 * Indicates the charging data holds the 5G registration specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const registrationChargingInformation: _enum_for_NchfChargingEvent.registrationChargingInformation = NchfChargingEvent.registrationChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_n2ConnectionChargingInformation
 * @description
 *
 * Indicates the charging data holds the 5G N2 connection specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_n2ConnectionChargingInformation: _enum_for_NchfChargingEvent.n2ConnectionChargingInformation = NchfChargingEvent.n2ConnectionChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary n2ConnectionChargingInformation
 * @description
 *
 * Indicates the charging data holds the 5G N2 connection specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const n2ConnectionChargingInformation: _enum_for_NchfChargingEvent.n2ConnectionChargingInformation = NchfChargingEvent.n2ConnectionChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_locationReportingChargingInformation
 * @description
 *
 * Indicates the charging data holds the 5G Location reporting specific
 * information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_locationReportingChargingInformation: _enum_for_NchfChargingEvent.locationReportingChargingInformation = NchfChargingEvent.locationReportingChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationReportingChargingInformation
 * @description
 *
 * Indicates the charging data holds the 5G Location reporting specific
 * information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const locationReportingChargingInformation: _enum_for_NchfChargingEvent.locationReportingChargingInformation = NchfChargingEvent.locationReportingChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_nSPAChargingInformation
 * @description
 *
 * Indicates the charging data holds the network slice information, which is
 * reported to the CHF.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_nSPAChargingInformation: _enum_for_NchfChargingEvent.nSPAChargingInformation = NchfChargingEvent.nSPAChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nSPAChargingInformation
 * @description
 *
 * Indicates the charging data holds the network slice information, which is
 * reported to the CHF.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const nSPAChargingInformation: _enum_for_NchfChargingEvent.nSPAChargingInformation = NchfChargingEvent.nSPAChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_nSMChargingInformation
 * @description
 *
 * Indicates the charging data holds the Network Slice Management (NSM) specific
 * information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_nSMChargingInformation: _enum_for_NchfChargingEvent.nSMChargingInformation = NchfChargingEvent.nSMChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nSMChargingInformation
 * @description
 *
 * Indicates the charging data holds the Network Slice Management (NSM) specific
 * information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const nSMChargingInformation: _enum_for_NchfChargingEvent.nSMChargingInformation = NchfChargingEvent.nSMChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_mMTelChargingInformation
 * @description
 *
 * Indicates the charging data holds the MMTel specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_mMTelChargingInformation: _enum_for_NchfChargingEvent.mMTelChargingInformation = NchfChargingEvent.mMTelChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mMTelChargingInformation
 * @description
 *
 * Indicates the charging data holds the MMTel specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const mMTelChargingInformation: _enum_for_NchfChargingEvent.mMTelChargingInformation = NchfChargingEvent.mMTelChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_iMSChargingInformation
 * @description
 *
 * Indicates the charging data holds the IMS specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_iMSChargingInformation: _enum_for_NchfChargingEvent.iMSChargingInformation = NchfChargingEvent.iMSChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMSChargingInformation
 * @description
 *
 * Indicates the charging data holds the IMS specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const iMSChargingInformation: _enum_for_NchfChargingEvent.iMSChargingInformation = NchfChargingEvent.iMSChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_edgeInfrastructureUsageChargingInformation
 * @description
 *
 * Indicates the charging data holds the edge enabling infrastructure resource
 * usage charging specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_edgeInfrastructureUsageChargingInformation: _enum_for_NchfChargingEvent.edgeInfrastructureUsageChargingInformation = NchfChargingEvent.edgeInfrastructureUsageChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary edgeInfrastructureUsageChargingInformation
 * @description
 *
 * Indicates the charging data holds the edge enabling infrastructure resource
 * usage charging specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const edgeInfrastructureUsageChargingInformation: _enum_for_NchfChargingEvent.edgeInfrastructureUsageChargingInformation = NchfChargingEvent.edgeInfrastructureUsageChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_eASDeploymentChargingInformation
 * @description
 *
 * Indicates the charging data holds the EAS deployment charging specific
 * information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_eASDeploymentChargingInformation: _enum_for_NchfChargingEvent.eASDeploymentChargingInformation = NchfChargingEvent.eASDeploymentChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eASDeploymentChargingInformation
 * @description
 *
 * Indicates the charging data holds the EAS deployment charging specific
 * information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const eASDeploymentChargingInformation: _enum_for_NchfChargingEvent.eASDeploymentChargingInformation = NchfChargingEvent.eASDeploymentChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_directEdgeEnablingServiceChargingInformation
 * @description
 *
 * Indicates the charging data holds the charging information the edge enabling
 * services directly provided by EES.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_directEdgeEnablingServiceChargingInformation: _enum_for_NchfChargingEvent.directEdgeEnablingServiceChargingInformation = NchfChargingEvent.directEdgeEnablingServiceChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary directEdgeEnablingServiceChargingInformation
 * @description
 *
 * Indicates the charging data holds the charging information the edge enabling
 * services directly provided by EES.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const directEdgeEnablingServiceChargingInformation: _enum_for_NchfChargingEvent.directEdgeEnablingServiceChargingInformation = NchfChargingEvent.directEdgeEnablingServiceChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_exposedEdgeEnablingServiceChargingInformation
 * @description
 *
 * Indicates the charging data holds the charging information of the edge
 * enabling services exposed.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_exposedEdgeEnablingServiceChargingInformation: _enum_for_NchfChargingEvent.exposedEdgeEnablingServiceChargingInformation = NchfChargingEvent.exposedEdgeEnablingServiceChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary exposedEdgeEnablingServiceChargingInformation
 * @description
 *
 * Indicates the charging data holds the charging information of the edge
 * enabling services exposed.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const exposedEdgeEnablingServiceChargingInformation: _enum_for_NchfChargingEvent.exposedEdgeEnablingServiceChargingInformation = NchfChargingEvent.exposedEdgeEnablingServiceChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_proSeChargingInformation
 * @description
 *
 * Indicates the charging data holds the 5G ProSe specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_proSeChargingInformation: _enum_for_NchfChargingEvent.proSeChargingInformation = NchfChargingEvent.proSeChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proSeChargingInformation
 * @description
 *
 * Indicates the charging data holds the 5G ProSe specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const proSeChargingInformation: _enum_for_NchfChargingEvent.proSeChargingInformation = NchfChargingEvent.proSeChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_mMSChargingInformation
 * @description
 *
 * Indicates the charging data holds the MMS specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_mMSChargingInformation: _enum_for_NchfChargingEvent.mMSChargingInformation = NchfChargingEvent.mMSChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mMSChargingInformation
 * @description
 *
 * Indicates the charging data holds the MMS specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const mMSChargingInformation: _enum_for_NchfChargingEvent.mMSChargingInformation = NchfChargingEvent.mMSChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_mBSSessionChargingInformation
 * @description
 *
 * Indicates the charging data holds the 5G MBS specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_mBSSessionChargingInformation: _enum_for_NchfChargingEvent.mBSSessionChargingInformation = NchfChargingEvent.mBSSessionChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mBSSessionChargingInformation
 * @description
 *
 * Indicates the charging data holds the 5G MBS specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const mBSSessionChargingInformation: _enum_for_NchfChargingEvent.mBSSessionChargingInformation = NchfChargingEvent.mBSSessionChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_tSNChargingInformation
 * @description
 *
 * Indicates the charging data holds the TSN specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_tSNChargingInformation: _enum_for_NchfChargingEvent.tSNChargingInformation = NchfChargingEvent.tSNChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tSNChargingInformation
 * @description
 *
 * Indicates the charging data holds the TSN specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const tSNChargingInformation: _enum_for_NchfChargingEvent.tSNChargingInformation = NchfChargingEvent.tSNChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_nSACFChargingInformation
 * @description
 *
 * Indicates the charging data holds the Network slice admission control
 * charging specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_nSACFChargingInformation: _enum_for_NchfChargingEvent.nSACFChargingInformation = NchfChargingEvent.nSACFChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nSACFChargingInformation
 * @description
 *
 * Indicates the charging data holds the Network slice admission control
 * charging specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const nSACFChargingInformation: _enum_for_NchfChargingEvent.nSACFChargingInformation = NchfChargingEvent.nSACFChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_nSSAAChargingInformation
 * @description
 *
 * Indicates the charging data holds the Network slice-specific authentication
 * and authorization (NSSAA) specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_nSSAAChargingInformation: _enum_for_NchfChargingEvent.nSSAAChargingInformation = NchfChargingEvent.nSSAAChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nSSAAChargingInformation
 * @description
 *
 * Indicates the charging data holds the Network slice-specific authentication
 * and authorization (NSSAA) specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const nSSAAChargingInformation: _enum_for_NchfChargingEvent.nSSAAChargingInformation = NchfChargingEvent.nSSAAChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NchfChargingEvent_rangingSLChargingInformation
 * @description
 *
 * Indicates the charging data holds the Ranging and Sidelink Positioning
 * specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const NchfChargingEvent_rangingSLChargingInformation: _enum_for_NchfChargingEvent.rangingSLChargingInformation = NchfChargingEvent.rangingSLChargingInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rangingSLChargingInformation
 * @description
 *
 * Indicates the charging data holds the Ranging and Sidelink Positioning
 * specific information.
 *
 * 3GPP TS 33.128, clause 7.19.3.7.
 *
 * @constant
 * @type {number}
 */
export
const rangingSLChargingInformation: _enum_for_NchfChargingEvent.rangingSLChargingInformation = NchfChargingEvent.rangingSLChargingInformation; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_NchfChargingEvent: $.ASN1Decoder<NchfChargingEvent> = $._decodeEnumerated;
export const _encode_NchfChargingEvent: $.ASN1Encoder<NchfChargingEvent> = $._encodeEnumerated;


/* eslint-enable */
