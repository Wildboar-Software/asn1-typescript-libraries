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
const NchfChargingEvent = _enum_for_NchfChargingEvent;

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
const NchfChargingEvent_pDUSessionChargingInformation = NchfChargingEvent.pDUSessionChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const pDUSessionChargingInformation = NchfChargingEvent.pDUSessionChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const NchfChargingEvent_sMSChargingInformation = NchfChargingEvent.sMSChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const sMSChargingInformation = NchfChargingEvent.sMSChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const NchfChargingEvent_nEFChargingInformation = NchfChargingEvent.nEFChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const nEFChargingInformation = NchfChargingEvent.nEFChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const NchfChargingEvent_registrationChargingInformation = NchfChargingEvent.registrationChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const registrationChargingInformation = NchfChargingEvent.registrationChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const NchfChargingEvent_n2ConnectionChargingInformation = NchfChargingEvent.n2ConnectionChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const n2ConnectionChargingInformation = NchfChargingEvent.n2ConnectionChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const NchfChargingEvent_locationReportingChargingInformation = NchfChargingEvent.locationReportingChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const locationReportingChargingInformation = NchfChargingEvent.locationReportingChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const NchfChargingEvent_nSPAChargingInformation = NchfChargingEvent.nSPAChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const nSPAChargingInformation = NchfChargingEvent.nSPAChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const NchfChargingEvent_nSMChargingInformation = NchfChargingEvent.nSMChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const nSMChargingInformation = NchfChargingEvent.nSMChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const NchfChargingEvent_mMTelChargingInformation = NchfChargingEvent.mMTelChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const mMTelChargingInformation = NchfChargingEvent.mMTelChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const NchfChargingEvent_iMSChargingInformation = NchfChargingEvent.iMSChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const iMSChargingInformation = NchfChargingEvent.iMSChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const NchfChargingEvent_edgeInfrastructureUsageChargingInformation = NchfChargingEvent.edgeInfrastructureUsageChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const edgeInfrastructureUsageChargingInformation = NchfChargingEvent.edgeInfrastructureUsageChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const NchfChargingEvent_eASDeploymentChargingInformation = NchfChargingEvent.eASDeploymentChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const eASDeploymentChargingInformation = NchfChargingEvent.eASDeploymentChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const NchfChargingEvent_directEdgeEnablingServiceChargingInformation = NchfChargingEvent.directEdgeEnablingServiceChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const directEdgeEnablingServiceChargingInformation = NchfChargingEvent.directEdgeEnablingServiceChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const NchfChargingEvent_exposedEdgeEnablingServiceChargingInformation = NchfChargingEvent.exposedEdgeEnablingServiceChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const exposedEdgeEnablingServiceChargingInformation = NchfChargingEvent.exposedEdgeEnablingServiceChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const NchfChargingEvent_proSeChargingInformation = NchfChargingEvent.proSeChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const proSeChargingInformation = NchfChargingEvent.proSeChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const NchfChargingEvent_mMSChargingInformation = NchfChargingEvent.mMSChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const mMSChargingInformation = NchfChargingEvent.mMSChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const NchfChargingEvent_mBSSessionChargingInformation = NchfChargingEvent.mBSSessionChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const mBSSessionChargingInformation = NchfChargingEvent.mBSSessionChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const NchfChargingEvent_tSNChargingInformation = NchfChargingEvent.tSNChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const tSNChargingInformation = NchfChargingEvent.tSNChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const NchfChargingEvent_nSACFChargingInformation = NchfChargingEvent.nSACFChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const nSACFChargingInformation = NchfChargingEvent.nSACFChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const NchfChargingEvent_nSSAAChargingInformation = NchfChargingEvent.nSSAAChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const nSSAAChargingInformation = NchfChargingEvent.nSSAAChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const NchfChargingEvent_rangingSLChargingInformation = NchfChargingEvent.rangingSLChargingInformation satisfies NchfChargingEvent; /* LONG_NAMED_ENUMERATED_VALUE */

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
const rangingSLChargingInformation = NchfChargingEvent.rangingSLChargingInformation satisfies NchfChargingEvent; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_NchfChargingEvent: $.ASN1Decoder<NchfChargingEvent> = $._decodeEnumerated;
export const _encode_NchfChargingEvent: $.ASN1Encoder<NchfChargingEvent> = $._encodeEnumerated;


/* eslint-enable */
