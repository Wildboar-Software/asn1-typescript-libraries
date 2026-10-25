/* eslint-disable */
import {
    type BOOLEAN,
    type IA5String,
    type INTEGER,
    type NULL,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RecordType, _decode_RecordType, _encode_RecordType } from "../GPRSChargingDataTypes/RecordType.ta.mjs";
import { type GSNAddress, _decode_GSNAddress, _encode_GSNAddress } from "../GPRSChargingDataTypes/GSNAddress.ta.mjs";
import { type PDPAddress, _decode_PDPAddress, _encode_PDPAddress } from "../GPRSChargingDataTypes/PDPAddress.ta.mjs";
import { ChangeOfCharCondition, _decode_ChangeOfCharCondition, _encode_ChangeOfCharCondition } from "../GPRSChargingDataTypes/ChangeOfCharCondition.ta.mjs";
import { type CauseForRecClosing, _decode_CauseForRecClosing, _encode_CauseForRecClosing } from "../GPRSChargingDataTypes/CauseForRecClosing.ta.mjs";
import { type Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../GPRSChargingDataTypes/Diagnostics.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../GPRSChargingDataTypes/ManagementExtension.ta.mjs";
import { APNSelectionMode, _decode_APNSelectionMode, _encode_APNSelectionMode, _enum_for_APNSelectionMode } from "../GPRSChargingDataTypes/APNSelectionMode.ta.mjs";
import { type ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../GPRSChargingDataTypes/ChChSelectionMode.ta.mjs";
import { PSFurnishChargingInformation, _decode_PSFurnishChargingInformation, _encode_PSFurnishChargingInformation } from "../GPRSChargingDataTypes/PSFurnishChargingInformation.ta.mjs";
import { ChangeOfServiceCondition, _decode_ChangeOfServiceCondition, _encode_ChangeOfServiceCondition } from "../GPRSChargingDataTypes/ChangeOfServiceCondition.ta.mjs";
import { ServingNodeType, _decode_ServingNodeType, _encode_ServingNodeType } from "../GPRSChargingDataTypes/ServingNodeType.ta.mjs";
import { SubscriptionID, _decode_SubscriptionID, _encode_SubscriptionID } from "../GPRSChargingDataTypes/SubscriptionID.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../GPRSChargingDataTypes/UserCSGInformation.ta.mjs";
import { TWANUserLocationInfo, _decode_TWANUserLocationInfo, _encode_TWANUserLocationInfo } from "../GPRSChargingDataTypes/TWANUserLocationInfo.ta.mjs";
import { CNOperatorSelectionEntity, _decode_CNOperatorSelectionEntity, _encode_CNOperatorSelectionEntity, _enum_for_CNOperatorSelectionEntity } from "../GPRSChargingDataTypes/CNOperatorSelectionEntity.ta.mjs";
import { EPCQoSInformation, _decode_EPCQoSInformation, _encode_EPCQoSInformation } from "../GPRSChargingDataTypes/EPCQoSInformation.ta.mjs";
import { PresenceReportingAreaInfo, _decode_PresenceReportingAreaInfo, _encode_PresenceReportingAreaInfo } from "../GPRSChargingDataTypes/PresenceReportingAreaInfo.ta.mjs";
import { EnhancedDiagnostics, _decode_EnhancedDiagnostics, _encode_EnhancedDiagnostics } from "../GPRSChargingDataTypes/EnhancedDiagnostics.ta.mjs";
import { NBIFOMMode, _decode_NBIFOMMode, _encode_NBIFOMMode, _enum_for_NBIFOMMode } from "../GPRSChargingDataTypes/NBIFOMMode.ta.mjs";
import { NBIFOMSupport, _decode_NBIFOMSupport, _encode_NBIFOMSupport, _enum_for_NBIFOMSupport } from "../GPRSChargingDataTypes/NBIFOMSupport.ta.mjs";
import { UWANUserLocationInfo, _decode_UWANUserLocationInfo, _encode_UWANUserLocationInfo } from "../GPRSChargingDataTypes/UWANUserLocationInfo.ta.mjs";
import { SGiPtPTunnellingMethod, _decode_SGiPtPTunnellingMethod, _encode_SGiPtPTunnellingMethod, _enum_for_SGiPtPTunnellingMethod } from "../GPRSChargingDataTypes/SGiPtPTunnellingMethod.ta.mjs";
import { ServingPLMNRateControl, _decode_ServingPLMNRateControl, _encode_ServingPLMNRateControl } from "../GPRSChargingDataTypes/ServingPLMNRateControl.ta.mjs";
import { APNRateControl, _decode_APNRateControl, _encode_APNRateControl } from "../GPRSChargingDataTypes/APNRateControl.ta.mjs";
import { MOExceptionDataCounter, _decode_MOExceptionDataCounter, _encode_MOExceptionDataCounter } from "../GPRSChargingDataTypes/MOExceptionDataCounter.ta.mjs";
import { ChargingPerIPCANSessionIndicator, _decode_ChargingPerIPCANSessionIndicator, _encode_ChargingPerIPCANSessionIndicator, _enum_for_ChargingPerIPCANSessionIndicator } from "../GPRSChargingDataTypes/ChargingPerIPCANSessionIndicator.ta.mjs";
import { type ThreeGPPPSDataOffStatus, _decode_ThreeGPPPSDataOffStatus, _encode_ThreeGPPPSDataOffStatus, _enum_for_ThreeGPPPSDataOffStatus } from "../GPRSChargingDataTypes/ThreeGPPPSDataOffStatus.ta.mjs";
import { SCSASAddress, _decode_SCSASAddress, _encode_SCSASAddress } from "../GPRSChargingDataTypes/SCSASAddress.ta.mjs";
import { RANSecondaryRATUsageReport, _decode_RANSecondaryRATUsageReport, _encode_RANSecondaryRATUsageReport } from "../GPRSChargingDataTypes/RANSecondaryRATUsageReport.ta.mjs";


/**
 * @summary PGWRecord
 * @description
 *
 * PGW-CDR. Charging data collected by the P-GW for an IP-CAN bearer, or
 * for the whole IP-CAN session when charging per IP-CAN session is active
 * (clauses 5.2.3.4 and 5.2.3.10, table 6.1.3.1). Volumes, elapsed time, or
 * events are counted per rating group, per rating group and service id,
 * or, when sponsored-connectivity reporting is active, per rating group,
 * sponsor identity, and application service provider identity. The P-GW
 * opens the record at bearer activation, or at session activation when
 * session charging is active. With PMIP the P-GW is not aware of bearers
 * and treats the session as one bearer. Online and offline charging for
 * the same bearer may run independently, or in tight interworking where
 * only the quota re-authorisation triggers armed by the OCS close the
 * service-data containers. List of Service Data containers are added on
 * IP-CAN bearer modification, tariff time change, failure handling, a
 * service-data-flow report, and CDR closure (table 5.2.3.4.1.1). When
 * session charging is active, List of Traffic Data Volumes is also
 * collected per QCI/ARP (table 5.2.3.10.2.1 and table 6.1.3.2). The P-GW
 * closes the CDR at the end of the bearer or session, or for a
 * partial-record reason (volume limit, time limit, maximum number of
 * charging-condition changes, management intervention, MS time zone
 * change, PLMN change, RAT change, MO exception data counter receipt and,
 * for session charging, a data-event limit and APN-AMBR change). The
 * container change condition is omitted on CDR closure except when closure
 * is due to the maximum number of charging-condition changes. Envelope
 * reporting adds only completed time envelopes from TS 32.299 and does not
 * use those triggers; an incomplete envelope moves to the next partial
 * record. A new serving-node address is added when the SGSN, S-GW, ePDG,
 * or TWAG changes. If the bearer or session remains active, the next
 * PGW-CDR uses an incremented sequence number.
 *
 * 3GPP TS 32.251 V19.0.0.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PGWRecord ::= SET {
 *    recordType                          [0] IMPLICIT RecordType,
 *    servedIMSI                          [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    p-GWAddress                         [4] GSNAddress,
 *    chargingID                          [5] IMPLICIT INTEGER ( 0 .. 4294967295 ),
 *    servingNodeAddress                  [6] IMPLICIT SEQUENCE  OF
 *       GSNAddress,
 *    accessPointNameNI                   [7] IMPLICIT IA5String  ( SIZE( 1 .. 63 ) ) OPTIONAL,
 *    pdpPDNType                          [8] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    servedPDPPDNAddress                 [9] PDPAddress OPTIONAL,
 *    dynamicAddressFlag                  [11] IMPLICIT BOOLEAN OPTIONAL,
 *    listOfTrafficVolumes                [12] IMPLICIT SEQUENCE  OF
 *       ChangeOfCharCondition OPTIONAL,
 *    recordOpeningTime                   [13] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    duration                            [14] IMPLICIT INTEGER,
 *    causeForRecClosing                  [15] IMPLICIT CauseForRecClosing,
 *    diagnostics                         [16] Diagnostics OPTIONAL,
 *    recordSequenceNumber                [17] IMPLICIT INTEGER OPTIONAL,
 *    nodeID                              [18] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordExtensions                    [19] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    localSequenceNumber                 [20] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    apnSelectionMode                    [21] IMPLICIT APNSelectionMode OPTIONAL,
 *    servedMSISDN                        [22] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    chargingCharacteristics             [23] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    chChSelectionMode                   [24] IMPLICIT ChChSelectionMode OPTIONAL,
 *    iMSsignalingContext                 [25] IMPLICIT NULL OPTIONAL,
 *    servingNodePLMNIdentifier           [27] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    pSFurnishChargingInformation        [28] IMPLICIT PSFurnishChargingInformation OPTIONAL,
 *    servedIMEI                          [29] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    rATType                             [30] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    mSTimeZone                          [31] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    userLocationInformation             [32] IMPLICIT OCTET STRING OPTIONAL,
 *    cAMELChargingInformation            [33] IMPLICIT OCTET STRING OPTIONAL,
 *    listOfServiceData                   [34] IMPLICIT SEQUENCE  OF
 *       ChangeOfServiceCondition OPTIONAL,
 *    servingNodeType                     [35] IMPLICIT SEQUENCE  OF
 *       ServingNodeType,
 *    servedMNNAI                         [36] IMPLICIT SubscriptionID OPTIONAL,
 *    p-GWPLMNIdentifier                  [37] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    startTime                           [38] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    stopTime                            [39] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    served3gpp2MEID                     [40] IMPLICIT OCTET STRING OPTIONAL,
 *    pDNConnectionChargingID             [41] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    iMSIunauthenticatedFlag             [42] IMPLICIT NULL OPTIONAL,
 *    userCSGInformation                  [43] IMPLICIT UserCSGInformation OPTIONAL,
 *    threeGPP2UserLocationInformation    [44] IMPLICIT OCTET STRING OPTIONAL,
 *    servedPDPPDNAddressExt              [45] PDPAddress OPTIONAL,
 *    lowPriorityIndicator                [46] IMPLICIT NULL OPTIONAL,
 *    dynamicAddressFlagExt               [47] IMPLICIT BOOLEAN OPTIONAL,
 *    servingNodeiPv6Address              [49] IMPLICIT SEQUENCE  OF
 *       GSNAddress OPTIONAL,
 *    p-GWiPv6AddressUsed                 [50] GSNAddress OPTIONAL,
 *    tWANUserLocationInformation         [51] IMPLICIT TWANUserLocationInfo OPTIONAL,
 *    retransmission                      [52] IMPLICIT NULL OPTIONAL,
 *    userLocationInfoTime                [53] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    cNOperatorSelectionEnt              [54] IMPLICIT CNOperatorSelectionEntity OPTIONAL,
 *    ePCQoSInformation                   [55] IMPLICIT EPCQoSInformation OPTIONAL,
 *    presenceReportingAreaInfo           [56] IMPLICIT PresenceReportingAreaInfo OPTIONAL,
 *    lastUserLocationInformation         [57] IMPLICIT OCTET STRING OPTIONAL,
 *    lastMSTimeZone                      [58] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    enhancedDiagnostics                 [59] IMPLICIT EnhancedDiagnostics OPTIONAL,
 *    nBIFOMMode                          [60] IMPLICIT NBIFOMMode OPTIONAL,
 *    nBIFOMSupport                       [61] IMPLICIT NBIFOMSupport OPTIONAL,
 *    uWANUserLocationInformation         [62] IMPLICIT UWANUserLocationInfo OPTIONAL,
 *    sGiPtPTunnellingMethod              [64] IMPLICIT SGiPtPTunnellingMethod OPTIONAL,
 *    uNIPDUCPOnlyFlag                    [65] IMPLICIT BOOLEAN OPTIONAL,
 *    servingPLMNRateControl              [66] IMPLICIT ServingPLMNRateControl OPTIONAL,
 *    aPNRateControl                      [67] IMPLICIT APNRateControl OPTIONAL,
 *    pDPPDNTypeExtension                 [68] IMPLICIT INTEGER OPTIONAL,
 *    mOExceptionDataCounter              [69] IMPLICIT MOExceptionDataCounter OPTIONAL,
 *    chargingPerIPCANSessionIndicator    [70] IMPLICIT ChargingPerIPCANSessionIndicator OPTIONAL,
 *    threeGPPPSDataOffStatus             [71] IMPLICIT ThreeGPPPSDataOffStatus OPTIONAL,
 *    sCSASAddress                        [72] IMPLICIT SCSASAddress OPTIONAL,
 *    listOfRANSecondaryRATUsageReports   [73] IMPLICIT SEQUENCE  OF
 *       RANSecondaryRATUsageReport OPTIONAL}
 * ```
 * 
 * @class
 */
export
class PGWRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * The field identifies the type of the record e.g. S-CDR, SGW-CDR, PGW-CDR,
     * M-CDR, S-SMO-CDR, TDF-CDR, IPE-CDR and S-SMT-CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.51.
     *
     * PGW-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `servedIMSI`.
     * @description
     *
     * This field contains the International Mobile Subscriber Identity (IMSI) of
     * the served party. The term "served" party is used to describe the mobile
     * subscriber involved in the transaction recorded e.g. the calling
     * subscriber in case of a mobile initiated PDP context. The structure of the
     * IMSI is defined in TS 23.003 [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.60.
     *
     * PGW-CDR field category C (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly servedIMSI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `p_GWAddress`.
     * @description
     *
     * These field is the serving P-GW IP Address for the Control Plane. If both
     * an IPv4 and an IPv6 address of the P-GW is available, the P-GW shall
     * include the IPv4 address in the CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.38.
     *
     * PGW-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly p_GWAddress: GSNAddress;
    /**
     * @summary `chargingID`.
     * @description
     *
     * This field is a charging identifier, which can be used together with P-GW
     * address to identify all records produced in SGSN(s), S-GW and P-GW
     * involved in a single IP-CAN bearer. Charging ID is generated by P-GW at
     * IP-CAN bearer activation and transferred to bearer requesting SGSN/S-GW.
     * At inter-SGSN/S-GW change the charging ID is transferred to the new
     * SGSN/S-GW as part of each active IP-CAN bearer. In case of PMIP-based
     * connectivity, the Charging Id is generated per PDN connection. Different
     * P-GWs allocate the charging ID independently of each other and may
     * allocate the same numbers. The CGF and/or BS may check the uniqueness of
     * each charging ID together with the P-GWs address and optionally (if still
     * ambiguous) with the record opening time stamp.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.9.
     *
     * PGW-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly chargingID: INTEGER;
    /**
     * @summary `servingNodeAddress`.
     * @description
     *
     * These fields contain one or several control plane IP addresses of SGSN,
     * MME, ePDG, HSGW, TWAG or S-GW, which have been connected during the
     * record. If both an IPv4 and an IPv6 address of the
     * SGSN/S-GW/MME/ePDG/HSGW/TWAG are available, the S-GW/P-GW/TDF shall
     * include the IPv4 address in the CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.66.
     *
     * PGW-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly servingNodeAddress: GSNAddress[];
    /**
     * @summary `accessPointNameNI`.
     * @description
     *
     * The logical name of the connected access point to the external packet
     * data network (network identifier part of APN).
     *
     * PGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly accessPointNameNI: OPTIONAL<IA5String>;
    /**
     * @summary `pdpPDNType`.
     * @description
     *
     * PDP/PDN type, i.e. IPv4, IPv6, IPv4v6 , or PDP type PPP.
     *
     * PGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly pdpPDNType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedPDPPDNAddress`.
     * @description
     *
     * IP address allocated for the PDP context PDN connection, i.e. IPv4
     * address when PDP/PDN Type is IPv4 or IPv6 prefix when PDP/PDN Type is
     * IPv6 or IPv4v6, or assigned IP address if any when PDP/PDN Type
     * extension is Non-IP. This parameter shall be present except: - when both
     * the PDP type is PPP and dynamic IP-CAN bearer address assignment is used
     * or - when PDP/PDN Type extension is Non-IP, and no IP address has been
     * assigned by the PGW for the PDN connection.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly servedPDPPDNAddress: OPTIONAL<PDPAddress>;
    /**
     * @summary `dynamicAddressFlag`.
     * @description
     *
     * This field indicates that PDN address has been dynamically allocated for
     * that particular IP-CAN bearer (PDN connection). This field is missing if
     * address is static. Dynamic address allocation might be relevant for
     * charging e.g. as one resource offered and possible owned by network
     * operator.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.13.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly dynamicAddressFlag: OPTIONAL<BOOLEAN>;
    /**
     * @summary `listOfTrafficVolumes`.
     * @description
     *
     * This list applicable in S-CDR, SGW-CDR, IPE-CDR, ePDG-CDR and TWAG-CDR,
     * includes one or more containers. This list applicable in PGW-CDR when
     * charging per IP-CAN session is active and IP-CAN bearer charging is being
     * performed for the session. In SGW-CDR, PGW-CDR, IPE-CDR, ePDG-CDR and
     * TWAG-CDR, containers are per QCI/ARP pair. This means that if QoS control
     * within one IP-CAN bearer is applicable in S-GW, P-GW, ePDG and TWAG, there
     * can be several containers open at same time one per each applied QCI/ARP
     * pair. Each container includes the following fields: In S-CDR first
     * container includes following optional fields: QoS Requested and QoS
     * Negotiated. In following containers QoS Negotiated is present if previous
     * change condition is "QoS change". In addition to the QoS Negotiated
     * parameter the QoS Requested parameter is present in following containers
     * if the change condition is "QoS change" and the QoS change was initiated
     * by the MS via a IP-CAN bearer modification procedure. Table 5.1.2.2.25.1
     * illustrates an example for S-CDR but same principles are applicable also
     * for SGW-CDR, PGW-CDR, IPE-CDR, ePDG-CDR and TWAG-CDR. There are five
     * containers (sets of volume counts) caused by one QoS change, one location
     * change, one tariff time change and one Direct Tunnel establishment (direct
     * tunnel change applicable in S-CDR only). When CDR is opened the subscriber
     * is in CGI1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.25.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly listOfTrafficVolumes: OPTIONAL<ChangeOfCharCondition[]>;
    /**
     * @summary `recordOpeningTime`.
     * @description
     *
     * This field contains the time stamp when the MS is attached to a SGSN
     * (M-CDR) or IP-CAN bearer is activated in SGSN/S-GW/P-GW (S-CDR, SGW-CDR,
     * PGW-CDR) or TDF session is established, or IP-CAN session is established
     * (IPE-CDR), or record opening time on subsequent partial records (see TS
     * 32.250 [4] for exact format). Record opening reason does not have a
     * separate field. For SGW/PGW/TDF/IPE -CDRs and M-CDR it can be derived from
     * the field "Sequence number"; i.e. either a missing field or a value one
     * (1) means activation of IP-CAN bearer (SGW/PGW-CDR) or GPRS attachment
     * (M-CDR) or TDF session establishment (TDF-CDR), or IP-CAN session
     * establishment (IPE-CDR). For the S-CDR the field "SGSN change" also needs
     * to be taken into account.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.49.
     *
     * PGW-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly recordOpeningTime: OCTET_STRING;
    /**
     * @summary `duration`.
     * @description
     *
     * This field contains the relevant duration in seconds for IP-CAN bearer
     * (S-CDR, SGW-CDR, PGW-CDR), IP-CAN session (IPE-CDR), and attachment
     * (M-CDR). In case of TDF-CDR, this field contains the relevant duration in
     * seconds for TDF session. It is the duration from Record Opening Time to
     * record closure. For partial records this is the duration of the individual
     * partial record and not the cumulative duration. It should be noted that
     * the internal time measurements may be expressed in terms of tenths of
     * seconds or even milliseconds and, as a result, the calculation of the
     * duration may result in the rounding or truncation of the measured duration
     * to a whole number of seconds. Whether or not rounding or truncation is to
     * be used is considered to be outside the scope of the present document
     * subject to the following restrictions:
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.12.
     *
     * PGW-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly duration: INTEGER;
    /**
     * @summary `causeForRecClosing`.
     * @description
     *
     * This field contains a reason for the release of the CDR. In case of Rf
     * interface is used, it is derived from Change-Condition AVP at
     * PS-information AVP level defined in TS 32.299 [40], when received. The
     * following is included: VoLTE bearer abnormal release: It corresponds to
     * "VoLTE Bearer Abnormal Release" in Change-Condition AVP. A more detailed
     * reason may be found in the diagnostics field or Enhanced Diagnostics
     * field.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.5.
     *
     * PGW-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly causeForRecClosing: CauseForRecClosing;
    /**
     * @summary `diagnostics`.
     * @description
     *
     * This field includes a more detailed technical reason for the releases of
     * the connection. The diagnostics may also be extended to include
     * manufacturer and network specific information.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.11.
     *
     * PGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<Diagnostics>;
    /**
     * @summary `recordSequenceNumber`.
     * @description
     *
     * This field contains a running sequence number employed to link the partial
     * records generated in the SGSN/SGW/PGW for a particular MM context or
     * IP-CAN bearer, or IP-CAN session, or TDF session (characterised with the
     * same Charging ID and PGW address pair). For M-CDR or S-CDR the sequence
     * number always restarts from one (1) after an inter-SGSN routing area
     * update, see field "SGSN change". The Record Sequence Number is missing if
     * the record is the only one produced in the SGSN/SGW/PGW/TDF/IP-Edge (e.g.
     * inter-SGSN routing area update can result to two M-CDR or two S-CDRs
     * without sequence number and field "SGSN change" present in the second
     * record).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.50.
     *
     * PGW-CDR field category C (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly recordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `nodeID`.
     * @description
     *
     * This field contains an optional, operator configurable, identifier string
     * for the node that had generated the CDR. The Node ID may or may not be the
     * DNS host name of the node.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.36.
     *
     * PGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly nodeID: OPTIONAL<IA5String>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * This field enables network operators and/or manufacturers to add their own
     * recommended extensions to the standard record definitions. This field
     * contains a set of "management extensions" as defined in X.721 [305]. This
     * is conditioned upon the existence of an extension.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.48.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `localSequenceNumber`.
     * @description
     *
     * This field includes a unique record number created by this node. The
     * number is allocated sequentially for each partial CDR (or whole CDR)
     * including all CDR types. The number is unique within one node, which is
     * identified either by field Node ID or by record-dependent node address
     * (SGSN address, S-/P-GW address, TDF address, IP-Edge Address, Recording
     * Entity). The field can be used e.g. to identify missing records in post
     * processing system.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.26.
     *
     * PGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `apnSelectionMode`.
     * @description
     *
     * This field indicates how the SGSN/MME selected the APN to be used. The
     * values and their meaning are as specified in TS 29.060 [215] for GTP case
     * and in TS 29.274 [223] for eGTP case.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.2.
     *
     * PGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly apnSelectionMode: OPTIONAL<APNSelectionMode>;
    /**
     * @summary `servedMSISDN`.
     * @description
     *
     * This field contains the Mobile Station (MS) ISDN number (MSISDN) of the
     * served party. The term "served" party is used to describe the mobile
     * subscriber involved in the transaction recorded. In case of
     * multi-numbering the MSISDN stored in a CDR will be the primary MSISDN of
     * the calling party. The structure of the MSISDN is defined in TS 23.003
     * [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.62.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `chargingCharacteristics`.
     * @description
     *
     * The Charging Characteristics field allows the operator to apply different
     * kind of charging methods in the CDRs. A subscriber may have Charging
     * Characteristics assigned to his subscription. These characteristics can be
     * supplied by the HLR/HSS according to the rules specified in Annex A of TS
     * 32.251 [11]. Charging Characteristics used by IP-Edge [PCEF] or TDF in
     * Convergent Fixed-Mobile Operator scenario are always configured in IP-Edge
     * [PCEF] or TDF respectively, as described in annex D of TS 32.251 [11].
     * This information can be used by the PCNs/ IP-Edge [PCEF] to activate
     * charging generation and e.g. control the closure of the CDR or the traffic
     * volume containers (see clause 5.1.2.2.25) and applied charging
     * characteristics is included in CDRs transmitted to nodes handling the CDRs
     * via the Ga reference point. It can also be used in nodes handling the CDRs
     * (e.g., the CGF or the billing system) to influence the CDR processing
     * priority and routing. These functions are accomplished by specifying the
     * charging characteristics as sets of charging profiles and the expected
     * behaviour associated with each profile. The interpretations of the
     * profiles and their associated behaviours can be different for each PLMN
     * operator and are not subject to standardisation. In the present document
     * only the charging characteristic formats and selection modes are
     * specified.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.7.
     *
     * PGW-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly chargingCharacteristics: OCTET_STRING;
    /**
     * @summary `chChSelectionMode`.
     * @description
     *
     * This field indicates the charging characteristic type that the PCNs
     * applied to the CDR. In the SGSN the allowed values are: Home default;
     * Visiting default; Roaming default; APN specific; Subscription specific. In
     * the S-GW/P-GW/TDF the allowed values are: Home default; Visiting default;
     * Roaming default; Serving node supplied. NOTE: The value 'Serving Node
     * Supplied' is used if the CC what was received from e.g. S-GW is used i.e.
     * the one what comes during bearer activation. Further details are provided
     * in TS 32.251 [11] Annex A. In the IP-Edge [PCEF] and TDF in Convergent
     * Fixed-Mobile Operator scenario, the allowed values are: Home default;
     * Visiting default; Fixed default; Further details are provided in TS 32.251
     * [11] Annex D.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.8.
     *
     * PGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    /**
     * @summary `iMSsignalingContext`.
     * @description
     *
     * Included if the IP-CAN default bearer IM-CN Subsystem Signalling Flag is
     * set, see TS 23.060 [201] is used for IMS signalling.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly iMSsignalingContext: OPTIONAL<NULL>;
    /**
     * @summary `servingNodePLMNIdentifier`.
     * @description
     *
     * This field contains the PLMN Identifier (Mobile Country Code and Mobile
     * Network Code) serving the UE. The MCC and MNC are coded as described for
     * 'Routing Area Identity' in TS 29.060 [75].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.67.
     *
     * PGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `pSFurnishChargingInformation`.
     * @description
     *
     * This field includes following information elements for IP-CAN bearer
     * (PGW-CDR), for TDF session (TDF-CDR), or for the IP-CAN session (IPE-CDR):
     * This field contains charging information sent by the OCS in the Diameter
     * Credit-Control Credit-Control-Answer messages as defined in TS 32.251
     * [11]. The data can be sent either in one Diameter Credit-Control
     * Credit-Control-Answer message or several Diameter Credit-Control
     * Credit-Control-Answer messages with append indicator. This data is
     * transferred transparently in the PS Furnish Charging Information field of
     * the relevant call records.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.45.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>;
    /**
     * @summary `servedIMEI`.
     * @description
     *
     * This field contains the International Mobile Equipment Identity (IMEI) of
     * the equipment served, if available. The term "served" equipment is used to
     * describe the ME involved in the transaction recorded e.g. the called ME in
     * the case of a network initiated PDP context. The structure of the IMEI is
     * specified in TS 23.003 [200] and the encoding defined in TS 29.274 [223].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.58.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly servedIMEI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `rATType`.
     * @description
     *
     * Holds the value of RAT Type, as provided to S-GW and P-GW, specified in TS
     * 29.061 [216] and also provided to the TDF as specified in TS 29.212 [220].
     * The field is provided by the SGSN/MME and transferred to the S-GW/P-GW
     * during the IP-CAN bearer activation/modification and transferred to the
     * TDF during the TDF session establishment/modification.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.47.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `mSTimeZone`.
     * @description
     *
     * This field contains the 'Time Zone' IE provided by the SGSN/MME and
     * transferred to the S-GW/P-GW/TDF during the IP-CAN bearer
     * activation/modification procedure as specified in TS 29.060 [215] and in
     * TS 29.212 [220].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.34.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly mSTimeZone: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `userLocationInformation`.
     * @description
     *
     * This field contains the User Location Information as described in TS
     * 29.060 [215] for GTP case (e.g. CGI, SAI, RAI), TS 29.274 [223] for eGTP
     * case (e.g. CGI, SAI, RAI TAI and ECGI) and TS 29.275 [224] for PMIP case.
     * The field is provided by the SGSN/MME and transferred to the S-GW/P-GW/TDF
     * during the IP-CAN bearer activation/modification and/or TDF session
     * establishment/modification.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.75.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly userLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cAMELChargingInformation`.
     * @description
     *
     * This field contains the CAMEL Information as defined for the PDP context
     * from the SGSN as the copy including Tag and Length from the SGSN's CDR
     * (SCDR).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.3.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly cAMELChargingInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `listOfServiceData`.
     * @description
     *
     * This list includes one or more service data containers. Depending on the
     * reporting level of PCC/ADC rules, one service data container either
     * includes charging data for one rating group or for one rating group and
     * service id combination. Each service data container may include the
     * following fields: AF-Record-Information. Charging Rule Base Name. ADC Rule
     * Base Name. Data Volume Downlink. Data Volume Uplink. Event Based Charging
     * Information. Local Sequence Number. PS Furnish Charging Information. EPC
     * Qos Information. Rating Group. Report Time. Result Code. Service Condition
     * Change. Service Identifier. Service Specific Info. Serving Node Address.
     * Time of First Usage. Time of Last Usage. Time Quota Mechanism. Time Usage.
     * user location information. 3GPP2 User Location Information. UWAN User
     * Location Information. TWAN User Location Information. Sponsor Identity.
     * Application Service Provider Identity. Presence Reporting Area Status.
     * List of Presence Reporting Area Information. User CSG Information. RAT
     * Type. Serving PLMN Rate Control. APN Rate Control. Related Change of
     * Service Condition. Traffic Steering Policy Identifier Downlink. Traffic
     * Steering Policy Identifier Uplink. VoLTE Information. Rating Group is the
     * identifier of rating group. This field is mandatory. The parameter
     * corresponds to the Charging Key as specified in TS 23.203 [203]. Charging
     * Rule Base Name is the reference to group of PCC rules predefined at the
     * PCEF.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly listOfServiceData: OPTIONAL<ChangeOfServiceCondition[]>;
    /**
     * @summary `servingNodeType`.
     * @description
     *
     * These fields contain one or several serving node types in control plane of
     * S-GW or P-GW, which have been connected during the record. The serving
     * node types listed here map to the serving node addresses listed in the
     * field "Serving node Address" in sequence. For Originated and Terminated
     * SMS CDRs, this field contains the Node Type which generates the CDRs, i.e.
     * SGSN or MME.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.68.
     *
     * PGW-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly servingNodeType: ServingNodeType[];
    /**
     * @summary `servedMNNAI`.
     * @description
     *
     * Mobile Node Identifier in NAI format (based on IMSI), if available.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly servedMNNAI: OPTIONAL<SubscriptionID>;
    /**
     * @summary `p_GWPLMNIdentifier`.
     * @description
     *
     * PLMN identifier (MCC MNC) of the P-GW.
     *
     * PGW-CDR field category Oc (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly p_GWPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `startTime`.
     * @description
     *
     * This field contains the time when the IP-CAN session starts at the
     * S-GW/P-GW/IP-Edge or TDF session starts at TDF, available in the CDR for
     * the first bearer in an IP-CAN session in case of S-GW/P-GW/IP-Edge or,
     * alternatively, available in the CDR for the TDF session start.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.72.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly startTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `stopTime`.
     * @description
     *
     * This field contains the time when the IP-CAN session is terminated at the
     * S-GW/P-GW/IP-Edge or TDF session terminated at the TDF, available in the
     * CDR for the last bearer in an IP-CAN session in case of S-GW/P-GW/IP-Edge
     * or, alternatively, available in the CDR for the TDF session stop.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.73.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly stopTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `served3gpp2MEID`.
     * @description
     *
     * MEID of the served party's terminal equipment for 3GPP2 access.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly served3gpp2MEID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `pDNConnectionChargingID`.
     * @description
     *
     * This field defines the PDN connection (IP-CAN session) Charging identifier
     * to identify different records belonging to same PDN connection. For a PDN
     * connection that is limited to use one single access at a time this field
     * includes Charging Id of first IP-CAN bearer activated. Together with P-GW
     * address this uniquely identifies the PDN connection. For application based
     * charging by the TDF: In case of GTP based connectivity, an "EPS default
     * bearer Charging Identifier" In case of PMIP based connectivity, an "unique
     * Charging Id" is assigned by the P-GW and transferred to the TDF via the
     * PCRF for the TDF session.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.40.
     *
     * PGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly pDNConnectionChargingID: OPTIONAL<INTEGER>;
    /**
     * @summary `iMSIunauthenticatedFlag`.
     * @description
     *
     * This field indicates the provided served IMSI is not authenticated
     * (emergency bearer service situation).
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly iMSIunauthenticatedFlag: OPTIONAL<NULL>;
    /**
     * @summary `userCSGInformation`.
     * @description
     *
     * This field contains the "User CSG Information" status of the user
     * accessing a CSG cell: it comprises CSG ID within the PLMN, Access mode and
     * indication on CSG membership for the user when hybrid access applies, as
     * defined in TS 29.060 [215] for GPRS case, and in TS 29.274 [223] for EPC
     * case.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.74.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly userCSGInformation: OPTIONAL<UserCSGInformation>;
    /**
     * @summary `threeGPP2UserLocationInformation`.
     * @description
     *
     * This field contains the User Location Information of the MS when the CDR
     * is opened as defined in TS 29.212 [71] for 3GPP2 access, if available.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly threeGPP2UserLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedPDPPDNAddressExt`.
     * @description
     *
     * This field holds IPv4 address of the served IMSI, if available, when
     * PDP/PDN type is IPv4v6.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly servedPDPPDNAddressExt: OPTIONAL<PDPAddress>;
    /**
     * @summary `lowPriorityIndicator`.
     * @description
     *
     * This field indicates if the PDN connection has a low priority, i.e. for
     * Machine Type Communication.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.29A.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly lowPriorityIndicator: OPTIONAL<NULL>;
    /**
     * @summary `dynamicAddressFlagExt`.
     * @description
     *
     * This field indicates that the IPv4 address has been dynamically allocated
     * for that particular IP-CAN bearer (PDN connection) of PDN type IPv4v6, and
     * the dynamic IPv6 prefix is indicated in Dynamic Address Flag. This field
     * is missing if IPv4 address is static. Dynamic address allocation might be
     * relevant for charging e.g. as one resource offered and possible owned by
     * network operator.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.13A.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    /**
     * @summary `servingNodeiPv6Address`.
     * @description
     *
     * List of SGSN/S-GW/TWAG control plane IPv6 addresses, in case of IPv4v6
     * dual stack, used during this record.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly servingNodeiPv6Address: OPTIONAL<GSNAddress[]>;
    /**
     * @summary `p_GWiPv6AddressUsed`.
     * @description
     *
     * The control plane IPv6 address, in case of IPv4v6 dual stack, of the
     * P-GW used.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly p_GWiPv6AddressUsed: OPTIONAL<GSNAddress>;
    /**
     * @summary `tWANUserLocationInformation`.
     * @description
     *
     * This field holds the UE location in a Trusted WLAN Access Network (defined
     * as TWAN Identifier in TS 29.274 [223]).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.73A.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly tWANUserLocationInformation: OPTIONAL<TWANUserLocationInfo>;
    /**
     * @summary `retransmission`.
     * @description
     *
     * This parameter, when present, indicates that information from
     * retransmitted Diameter ACRs has been used in this CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.52A.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
    /**
     * @summary `userLocationInfoTime`.
     * @description
     *
     * This field contains the time at which the UE was last known to be in the
     * location which is reported during bearer deactivation or UE detach
     * procedure.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.75A.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly userLocationInfoTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cNOperatorSelectionEnt`.
     * @description
     *
     * This field indicates whether the Serving Network identified by the
     * "Serving Node PLMN Identifier” has been selected by the UE or by the
     * network, as defined in TS 29.060 [203] for GPRS, and in TS 29.274 [210]
     * for EPC, if available.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>;
    /**
     * @summary `ePCQoSInformation`.
     * @description
     *
     * This field contains the APN-AMBR for the IP-CAN session. It is used in the
     * PGW-CDR only when charging per IP-CAN session is active.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.13B.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly ePCQoSInformation: OPTIONAL<EPCQoSInformation>;
    /**
     * @summary `presenceReportingAreaInfo`.
     * @description
     *
     * This field contains the Presence Reporting Area Information: Presence
     * Reporting Area identifier(s) and the indication on whether the UE is
     * inside or outside the Presence Reporting Area(s), as described in TS
     * 29.274 [223].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.43A.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly presenceReportingAreaInfo: OPTIONAL<PresenceReportingAreaInfo>;
    /**
     * @summary `lastUserLocationInformation`.
     * @description
     *
     * This field contains the User Location Information as described in clause
     * in 5.1.2.2.75. The field is provided by the SGSN/MME and transferred to
     * the S-GW/P-GW during the IP-CAN bearer deactivation. It is derived from
     * 3GPP-User-Location-Info AVP provided at PS-Information AVP level, both
     * defined in TS 32.299 [50], when received on Rf closure.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.18F.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly lastUserLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `lastMSTimeZone`.
     * @description
     *
     * This field contains the "Time Zone" provided by the SGSN/MME and
     * transferred to the S-GW/P-GW during the IP-CAN bearer deactivation. It is
     * derived from 3GPP-MS-TimeZone AVP provided within PS-Information AVP, both
     * defined in TS 32.299 [50], when received on Rf closure.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.18E.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly lastMSTimeZone: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `enhancedDiagnostics`.
     * @description
     *
     * This field includes a more detailed technical reason with a set of causes
     * for the release of the connection and may contain the following: RAN/NAS
     * cause from TS 29.274 [223]; NOTE: The Enhanced Diagnostics is defined to
     * allow extensions to other types of release causes in the future.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.13Aa.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>;
    /**
     * @summary `nBIFOMMode`.
     * @description
     *
     * This field indicates the NBIFOM mode selected for the PDN connection,
     * when NBIFOM is supported for the IP-CAN session. This field is only
     * present when NBIFOM is accepted.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly nBIFOMMode: OPTIONAL<NBIFOMMode>;
    /**
     * @summary `nBIFOMSupport`.
     * @description
     *
     * This field indicates that NBIFOM was requested by the UE, supported and
     * accepted by the network for the IP-CAN session or if NBIFOM is not
     * supported for the IP-CAN session.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly nBIFOMSupport: OPTIONAL<NBIFOMSupport>;
    /**
     * @summary `uWANUserLocationInformation`.
     * @description
     *
     * This field contains the UE location in an Untrusted Wireless Access
     * Network (UWAN) which includes the UE local IP address and optionally
     * either UDP source port number (if NAT is detected) or TCP source port
     * number. It may also include WLAN location information the ePDG may have
     * received from the 3GPP AAA server about the UE, as TWAN Identifier defined
     * in TS 29.274 [223].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.77.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;
    /**
     * @summary `sGiPtPTunnellingMethod`.
     * @description
     *
     * This field indicates whether SGi PtP tunnelling method is based on UDP/IP
     * or other methods for a non-IP PDN type PDN connection.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.68B.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly sGiPtPTunnellingMethod: OPTIONAL<SGiPtPTunnellingMethod>;
    /**
     * @summary `uNIPDUCPOnlyFlag`.
     * @description
     *
     * This field indicates whether this PDN connection is applied with
     * "Control Plane Only Flag" for UNI PDU transfer, i.e. transfer only using
     * Control Plane NAS PDU (Control Plane CIoT EPS optimisation).
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly uNIPDUCPOnlyFlag: OPTIONAL<BOOLEAN>;
    /**
     * @summary `servingPLMNRateControl`.
     * @description
     *
     * This field contains the Serving PLMN Rate Control as specified in TS
     * 23.401 [245], which is used during the record for the PDN connection to
     * the PGW.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.68A.
     *
     * PGW-CDR field category Oc (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>;
    /**
     * @summary `aPNRateControl`.
     * @description
     *
     * This field contains the APN Rate Control as specified in TS 23.401 [245],
     * which is used during the record for the PDN connection to the PGW.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.1A.
     *
     * PGW-CDR field category Oc (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly aPNRateControl: OPTIONAL<APNRateControl>;
    /**
     * @summary `pDPPDNTypeExtension`.
     * @description
     *
     * This field indicates Non-IP PDN type.
     *
     * PGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly pDPPDNTypeExtension: OPTIONAL<INTEGER>;
    /**
     * @summary `mOExceptionDataCounter`.
     * @description
     *
     * This field holds the MO exception data counter value with the timestamp
     * indicating the time at which the counter value increased from 0 to 1, as
     * defined in TS 29.274 [210].
     *
     * PGW-CDR field category Oc (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly mOExceptionDataCounter: OPTIONAL<MOExceptionDataCounter>;
    /**
     * @summary `chargingPerIPCANSessionIndicator`.
     * @description
     *
     * This field indicates whether charging per IP-CAN session is active. If
     * this field is not present, charging per IP-CAN session is not active.
     *
     * PGW-CDR field category Oc (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly chargingPerIPCANSessionIndicator: OPTIONAL<ChargingPerIPCANSessionIndicator>;
    /**
     * @summary `threeGPPPSDataOffStatus`.
     * @description
     *
     * This field holds the 3GPP PS Data Off Status.
     *
     * PGW-CDR field category Oc (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>;
    /**
     * @summary `sCSASAddress`.
     * @description
     *
     * This field holds the Address of SCS/AS for SGi PtP tunnelling.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly sCSASAddress: OPTIONAL<SCSASAddress>;
    /**
     * @summary `listOfRANSecondaryRATUsageReports`.
     * @description
     *
     * This list applicable in SGW-CDR and PGW-CDR, includes one or more
     * containers reported from the RAN for a secondary RAT. Each container
     * includes the following fields:
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.23A.
     *
     * PGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.3.1).
     *
     * @public
     * @readonly
     */
    readonly listOfRANSecondaryRATUsageReports: OPTIONAL<RANSecondaryRATUsageReport[]>;

    constructor (
        recordType: RecordType,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        p_GWAddress: GSNAddress,
        chargingID: INTEGER,
        servingNodeAddress: GSNAddress[],
        accessPointNameNI: OPTIONAL<IA5String>,
        pdpPDNType: OPTIONAL<OCTET_STRING>,
        servedPDPPDNAddress: OPTIONAL<PDPAddress>,
        dynamicAddressFlag: OPTIONAL<BOOLEAN>,
        listOfTrafficVolumes: OPTIONAL<ChangeOfCharCondition[]>,
        recordOpeningTime: OCTET_STRING,
        duration: INTEGER,
        causeForRecClosing: CauseForRecClosing,
        diagnostics: OPTIONAL<Diagnostics>,
        recordSequenceNumber: OPTIONAL<INTEGER>,
        nodeID: OPTIONAL<IA5String>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        apnSelectionMode: OPTIONAL<APNSelectionMode>,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        chargingCharacteristics: OCTET_STRING,
        chChSelectionMode: OPTIONAL<ChChSelectionMode>,
        iMSsignalingContext: OPTIONAL<NULL>,
        servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>,
        pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        rATType: OPTIONAL<INTEGER>,
        mSTimeZone: OPTIONAL<OCTET_STRING>,
        userLocationInformation: OPTIONAL<OCTET_STRING>,
        cAMELChargingInformation: OPTIONAL<OCTET_STRING>,
        listOfServiceData: OPTIONAL<ChangeOfServiceCondition[]>,
        servingNodeType: ServingNodeType[],
        servedMNNAI?: OPTIONAL<SubscriptionID>,
        p_GWPLMNIdentifier?: OPTIONAL<OCTET_STRING>,
        startTime?: OPTIONAL<OCTET_STRING>,
        stopTime?: OPTIONAL<OCTET_STRING>,
        served3gpp2MEID?: OPTIONAL<OCTET_STRING>,
        pDNConnectionChargingID?: OPTIONAL<INTEGER>,
        iMSIunauthenticatedFlag?: OPTIONAL<NULL>,
        userCSGInformation?: OPTIONAL<UserCSGInformation>,
        threeGPP2UserLocationInformation?: OPTIONAL<OCTET_STRING>,
        servedPDPPDNAddressExt?: OPTIONAL<PDPAddress>,
        lowPriorityIndicator?: OPTIONAL<NULL>,
        dynamicAddressFlagExt?: OPTIONAL<BOOLEAN>,
        servingNodeiPv6Address?: OPTIONAL<GSNAddress[]>,
        p_GWiPv6AddressUsed?: OPTIONAL<GSNAddress>,
        tWANUserLocationInformation?: OPTIONAL<TWANUserLocationInfo>,
        retransmission?: OPTIONAL<NULL>,
        userLocationInfoTime?: OPTIONAL<OCTET_STRING>,
        cNOperatorSelectionEnt?: OPTIONAL<CNOperatorSelectionEntity>,
        ePCQoSInformation?: OPTIONAL<EPCQoSInformation>,
        presenceReportingAreaInfo?: OPTIONAL<PresenceReportingAreaInfo>,
        lastUserLocationInformation?: OPTIONAL<OCTET_STRING>,
        lastMSTimeZone?: OPTIONAL<OCTET_STRING>,
        enhancedDiagnostics?: OPTIONAL<EnhancedDiagnostics>,
        nBIFOMMode?: OPTIONAL<NBIFOMMode>,
        nBIFOMSupport?: OPTIONAL<NBIFOMSupport>,
        uWANUserLocationInformation?: OPTIONAL<UWANUserLocationInfo>,
        sGiPtPTunnellingMethod?: OPTIONAL<SGiPtPTunnellingMethod>,
        uNIPDUCPOnlyFlag?: OPTIONAL<BOOLEAN>,
        servingPLMNRateControl?: OPTIONAL<ServingPLMNRateControl>,
        aPNRateControl?: OPTIONAL<APNRateControl>,
        pDPPDNTypeExtension?: OPTIONAL<INTEGER>,
        mOExceptionDataCounter?: OPTIONAL<MOExceptionDataCounter>,
        chargingPerIPCANSessionIndicator?: OPTIONAL<ChargingPerIPCANSessionIndicator>,
        threeGPPPSDataOffStatus?: OPTIONAL<ThreeGPPPSDataOffStatus>,
        sCSASAddress?: OPTIONAL<SCSASAddress>,
        listOfRANSecondaryRATUsageReports?: OPTIONAL<RANSecondaryRATUsageReport[]>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.p_GWAddress = p_GWAddress;
        this.chargingID = chargingID;
        this.servingNodeAddress = servingNodeAddress;
        this.accessPointNameNI = accessPointNameNI;
        this.pdpPDNType = pdpPDNType;
        this.servedPDPPDNAddress = servedPDPPDNAddress;
        this.dynamicAddressFlag = dynamicAddressFlag;
        this.listOfTrafficVolumes = listOfTrafficVolumes;
        this.recordOpeningTime = recordOpeningTime;
        this.duration = duration;
        this.causeForRecClosing = causeForRecClosing;
        this.diagnostics = diagnostics;
        this.recordSequenceNumber = recordSequenceNumber;
        this.nodeID = nodeID;
        this.recordExtensions = recordExtensions;
        this.localSequenceNumber = localSequenceNumber;
        this.apnSelectionMode = apnSelectionMode;
        this.servedMSISDN = servedMSISDN;
        this.chargingCharacteristics = chargingCharacteristics;
        this.chChSelectionMode = chChSelectionMode;
        this.iMSsignalingContext = iMSsignalingContext;
        this.servingNodePLMNIdentifier = servingNodePLMNIdentifier;
        this.pSFurnishChargingInformation = pSFurnishChargingInformation;
        this.servedIMEI = servedIMEI;
        this.rATType = rATType;
        this.mSTimeZone = mSTimeZone;
        this.userLocationInformation = userLocationInformation;
        this.cAMELChargingInformation = cAMELChargingInformation;
        this.listOfServiceData = listOfServiceData;
        this.servingNodeType = servingNodeType;
        this.servedMNNAI = servedMNNAI;
        this.p_GWPLMNIdentifier = p_GWPLMNIdentifier;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.served3gpp2MEID = served3gpp2MEID;
        this.pDNConnectionChargingID = pDNConnectionChargingID;
        this.iMSIunauthenticatedFlag = iMSIunauthenticatedFlag;
        this.userCSGInformation = userCSGInformation;
        this.threeGPP2UserLocationInformation = threeGPP2UserLocationInformation;
        this.servedPDPPDNAddressExt = servedPDPPDNAddressExt;
        this.lowPriorityIndicator = lowPriorityIndicator;
        this.dynamicAddressFlagExt = dynamicAddressFlagExt;
        this.servingNodeiPv6Address = servingNodeiPv6Address;
        this.p_GWiPv6AddressUsed = p_GWiPv6AddressUsed;
        this.tWANUserLocationInformation = tWANUserLocationInformation;
        this.retransmission = retransmission;
        this.userLocationInfoTime = userLocationInfoTime;
        this.cNOperatorSelectionEnt = cNOperatorSelectionEnt;
        this.ePCQoSInformation = ePCQoSInformation;
        this.presenceReportingAreaInfo = presenceReportingAreaInfo;
        this.lastUserLocationInformation = lastUserLocationInformation;
        this.lastMSTimeZone = lastMSTimeZone;
        this.enhancedDiagnostics = enhancedDiagnostics;
        this.nBIFOMMode = nBIFOMMode;
        this.nBIFOMSupport = nBIFOMSupport;
        this.uWANUserLocationInformation = uWANUserLocationInformation;
        this.sGiPtPTunnellingMethod = sGiPtPTunnellingMethod;
        this.uNIPDUCPOnlyFlag = uNIPDUCPOnlyFlag;
        this.servingPLMNRateControl = servingPLMNRateControl;
        this.aPNRateControl = aPNRateControl;
        this.pDPPDNTypeExtension = pDPPDNTypeExtension;
        this.mOExceptionDataCounter = mOExceptionDataCounter;
        this.chargingPerIPCANSessionIndicator = chargingPerIPCANSessionIndicator;
        this.threeGPPPSDataOffStatus = threeGPPPSDataOffStatus;
        this.sCSASAddress = sCSASAddress;
        this.listOfRANSecondaryRATUsageReports = listOfRANSecondaryRATUsageReports;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("PGWRecord.servedIMSI violates SIZE constraint");
        }
        if ((this.chargingID < 0 || this.chargingID > 4294967295)) {
            throw new ASN1OverflowError("PGWRecord.chargingID violates INTEGER range");
        }
        if (this.accessPointNameNI !== undefined && (this.accessPointNameNI.length < 1 || this.accessPointNameNI.length > 63)) {
            throw new ASN1SizeError("PGWRecord.accessPointNameNI violates SIZE constraint");
        }
        if (this.pdpPDNType !== undefined && (this.pdpPDNType.length !== 2)) {
            throw new ASN1SizeError("PGWRecord.pdpPDNType violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("PGWRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("PGWRecord.nodeID violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("PGWRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("PGWRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("PGWRecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.servingNodePLMNIdentifier !== undefined && (this.servingNodePLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PGWRecord.servingNodePLMNIdentifier violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("PGWRecord.servedIMEI violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("PGWRecord.rATType violates INTEGER range");
        }
        if (this.mSTimeZone !== undefined && (this.mSTimeZone.length !== 2)) {
            throw new ASN1SizeError("PGWRecord.mSTimeZone violates SIZE constraint");
        }
        if (this.p_GWPLMNIdentifier !== undefined && (this.p_GWPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PGWRecord.p_GWPLMNIdentifier violates SIZE constraint");
        }
        if (this.startTime !== undefined && (this.startTime.length !== 9)) {
            throw new ASN1SizeError("PGWRecord.startTime violates SIZE constraint");
        }
        if (this.stopTime !== undefined && (this.stopTime.length !== 9)) {
            throw new ASN1SizeError("PGWRecord.stopTime violates SIZE constraint");
        }
        if (this.pDNConnectionChargingID !== undefined && (this.pDNConnectionChargingID < 0 || this.pDNConnectionChargingID > 4294967295)) {
            throw new ASN1OverflowError("PGWRecord.pDNConnectionChargingID violates INTEGER range");
        }
        if (this.userLocationInfoTime !== undefined && (this.userLocationInfoTime.length !== 9)) {
            throw new ASN1SizeError("PGWRecord.userLocationInfoTime violates SIZE constraint");
        }
        if (this.lastMSTimeZone !== undefined && (this.lastMSTimeZone.length !== 2)) {
            throw new ASN1SizeError("PGWRecord.lastMSTimeZone violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a PGWRecord
     * @description
     * 
     * This takes an `object` and converts it to a `PGWRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PGWRecord`.
     * @returns {PGWRecord}
     */
    public static _from_object (_o: { [_K in keyof (PGWRecord)]: (PGWRecord)[_K] }): PGWRecord {
        return new PGWRecord(_o.recordType, _o.servedIMSI, _o.p_GWAddress, _o.chargingID, _o.servingNodeAddress, _o.accessPointNameNI, _o.pdpPDNType, _o.servedPDPPDNAddress, _o.dynamicAddressFlag, _o.listOfTrafficVolumes, _o.recordOpeningTime, _o.duration, _o.causeForRecClosing, _o.diagnostics, _o.recordSequenceNumber, _o.nodeID, _o.recordExtensions, _o.localSequenceNumber, _o.apnSelectionMode, _o.servedMSISDN, _o.chargingCharacteristics, _o.chChSelectionMode, _o.iMSsignalingContext, _o.servingNodePLMNIdentifier, _o.pSFurnishChargingInformation, _o.servedIMEI, _o.rATType, _o.mSTimeZone, _o.userLocationInformation, _o.cAMELChargingInformation, _o.listOfServiceData, _o.servingNodeType, _o.servedMNNAI, _o.p_GWPLMNIdentifier, _o.startTime, _o.stopTime, _o.served3gpp2MEID, _o.pDNConnectionChargingID, _o.iMSIunauthenticatedFlag, _o.userCSGInformation, _o.threeGPP2UserLocationInformation, _o.servedPDPPDNAddressExt, _o.lowPriorityIndicator, _o.dynamicAddressFlagExt, _o.servingNodeiPv6Address, _o.p_GWiPv6AddressUsed, _o.tWANUserLocationInformation, _o.retransmission, _o.userLocationInfoTime, _o.cNOperatorSelectionEnt, _o.ePCQoSInformation, _o.presenceReportingAreaInfo, _o.lastUserLocationInformation, _o.lastMSTimeZone, _o.enhancedDiagnostics, _o.nBIFOMMode, _o.nBIFOMSupport, _o.uWANUserLocationInformation, _o.sGiPtPTunnellingMethod, _o.uNIPDUCPOnlyFlag, _o.servingPLMNRateControl, _o.aPNRateControl, _o.pDPPDNTypeExtension, _o.mOExceptionDataCounter, _o.chargingPerIPCANSessionIndicator, _o.threeGPPPSDataOffStatus, _o.sCSASAddress, _o.listOfRANSecondaryRATUsageReports);
    }

        /**
         * @summary The enum used as the type of the component `apnSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_apnSelectionMode = _enum_for_APNSelectionMode;        /**
         * @summary The enum used as the type of the component `chChSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_chChSelectionMode = _enum_for_ChChSelectionMode;        /**
         * @summary The enum used as the type of the component `cNOperatorSelectionEnt`
         * @public
         * @static
         */

    public static _enum_for_cNOperatorSelectionEnt = _enum_for_CNOperatorSelectionEntity;        /**
         * @summary The enum used as the type of the component `nBIFOMMode`
         * @public
         * @static
         */

    public static _enum_for_nBIFOMMode = _enum_for_NBIFOMMode;        /**
         * @summary The enum used as the type of the component `nBIFOMSupport`
         * @public
         * @static
         */

    public static _enum_for_nBIFOMSupport = _enum_for_NBIFOMSupport;        /**
         * @summary The enum used as the type of the component `sGiPtPTunnellingMethod`
         * @public
         * @static
         */

    public static _enum_for_sGiPtPTunnellingMethod = _enum_for_SGiPtPTunnellingMethod;        /**
         * @summary The enum used as the type of the component `chargingPerIPCANSessionIndicator`
         * @public
         * @static
         */

    public static _enum_for_chargingPerIPCANSessionIndicator = _enum_for_ChargingPerIPCANSessionIndicator;        /**
         * @summary The enum used as the type of the component `threeGPPPSDataOffStatus`
         * @public
         * @static
         */

    public static _enum_for_threeGPPPSDataOffStatus = _enum_for_ThreeGPPPSDataOffStatus;
}

/**
 * @summary The Leading Root Component Types of PGWRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PGWRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("p-GWAddress", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("chargingID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("servingNodeAddress", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("accessPointNameNI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("pdpPDNType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("servedPDPPDNAddress", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("dynamicAddressFlag", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("listOfTrafficVolumes", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("recordOpeningTime", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("duration", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("causeForRecClosing", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("recordSequenceNumber", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("apnSelectionMode", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("chargingCharacteristics", false, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("chChSelectionMode", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("iMSsignalingContext", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("servingNodePLMNIdentifier", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("pSFurnishChargingInformation", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("mSTimeZone", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("cAMELChargingInformation", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("listOfServiceData", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("servingNodeType", false, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("servedMNNAI", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("p-GWPLMNIdentifier", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("stopTime", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("served3gpp2MEID", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("pDNConnectionChargingID", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("iMSIunauthenticatedFlag", true, $.hasTag(_TagClass.context, 42)),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("threeGPP2UserLocationInformation", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("servedPDPPDNAddressExt", true, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("lowPriorityIndicator", true, $.hasTag(_TagClass.context, 46)),
    new $.ComponentSpec("dynamicAddressFlagExt", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("servingNodeiPv6Address", true, $.hasTag(_TagClass.context, 49)),
    new $.ComponentSpec("p-GWiPv6AddressUsed", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("tWANUserLocationInformation", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("userLocationInfoTime", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("cNOperatorSelectionEnt", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("ePCQoSInformation", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("presenceReportingAreaInfo", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("lastUserLocationInformation", true, $.hasTag(_TagClass.context, 57)),
    new $.ComponentSpec("lastMSTimeZone", true, $.hasTag(_TagClass.context, 58)),
    new $.ComponentSpec("enhancedDiagnostics", true, $.hasTag(_TagClass.context, 59)),
    new $.ComponentSpec("nBIFOMMode", true, $.hasTag(_TagClass.context, 60)),
    new $.ComponentSpec("nBIFOMSupport", true, $.hasTag(_TagClass.context, 61)),
    new $.ComponentSpec("uWANUserLocationInformation", true, $.hasTag(_TagClass.context, 62)),
    new $.ComponentSpec("sGiPtPTunnellingMethod", true, $.hasTag(_TagClass.context, 64)),
    new $.ComponentSpec("uNIPDUCPOnlyFlag", true, $.hasTag(_TagClass.context, 65)),
    new $.ComponentSpec("servingPLMNRateControl", true, $.hasTag(_TagClass.context, 66)),
    new $.ComponentSpec("aPNRateControl", true, $.hasTag(_TagClass.context, 67)),
    new $.ComponentSpec("pDPPDNTypeExtension", true, $.hasTag(_TagClass.context, 68)),
    new $.ComponentSpec("mOExceptionDataCounter", true, $.hasTag(_TagClass.context, 69)),
    new $.ComponentSpec("chargingPerIPCANSessionIndicator", true, $.hasTag(_TagClass.context, 70)),
    new $.ComponentSpec("threeGPPPSDataOffStatus", true, $.hasTag(_TagClass.context, 71)),
    new $.ComponentSpec("sCSASAddress", true, $.hasTag(_TagClass.context, 72)),
    new $.ComponentSpec("listOfRANSecondaryRATUsageReports", true, $.hasTag(_TagClass.context, 73))
];

/**
 * @summary The Trailing Root Component Types of PGWRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PGWRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PGWRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PGWRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PGWRecord: $.ASN1Decoder<PGWRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PGWRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PGWRecord (el: _Element): PGWRecord {
    if (!_cached_decoder_for_PGWRecord) { _cached_decoder_for_PGWRecord = function (el: _Element): PGWRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let p_GWAddress!: GSNAddress;
    let chargingID!: INTEGER;
    let servingNodeAddress!: GSNAddress[];
    let accessPointNameNI: OPTIONAL<IA5String>;
    let pdpPDNType: OPTIONAL<OCTET_STRING>;
    let servedPDPPDNAddress: OPTIONAL<PDPAddress>;
    let dynamicAddressFlag: OPTIONAL<BOOLEAN>;
    let listOfTrafficVolumes: OPTIONAL<ChangeOfCharCondition[]>;
    let recordOpeningTime!: OCTET_STRING;
    let duration!: INTEGER;
    let causeForRecClosing!: CauseForRecClosing;
    let diagnostics: OPTIONAL<Diagnostics>;
    let recordSequenceNumber: OPTIONAL<INTEGER>;
    let nodeID: OPTIONAL<IA5String>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let apnSelectionMode: OPTIONAL<APNSelectionMode>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let chargingCharacteristics!: OCTET_STRING;
    let chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    let iMSsignalingContext: OPTIONAL<NULL>;
    let servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<INTEGER>;
    let mSTimeZone: OPTIONAL<OCTET_STRING>;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let cAMELChargingInformation: OPTIONAL<OCTET_STRING>;
    let listOfServiceData: OPTIONAL<ChangeOfServiceCondition[]>;
    let servingNodeType!: ServingNodeType[];
    let servedMNNAI: OPTIONAL<SubscriptionID>;
    let p_GWPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let startTime: OPTIONAL<OCTET_STRING>;
    let stopTime: OPTIONAL<OCTET_STRING>;
    let served3gpp2MEID: OPTIONAL<OCTET_STRING>;
    let pDNConnectionChargingID: OPTIONAL<INTEGER>;
    let iMSIunauthenticatedFlag: OPTIONAL<NULL>;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    let threeGPP2UserLocationInformation: OPTIONAL<OCTET_STRING>;
    let servedPDPPDNAddressExt: OPTIONAL<PDPAddress>;
    let lowPriorityIndicator: OPTIONAL<NULL>;
    let dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    let servingNodeiPv6Address: OPTIONAL<GSNAddress[]>;
    let p_GWiPv6AddressUsed: OPTIONAL<GSNAddress>;
    let tWANUserLocationInformation: OPTIONAL<TWANUserLocationInfo>;
    let retransmission: OPTIONAL<NULL>;
    let userLocationInfoTime: OPTIONAL<OCTET_STRING>;
    let cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>;
    let ePCQoSInformation: OPTIONAL<EPCQoSInformation>;
    let presenceReportingAreaInfo: OPTIONAL<PresenceReportingAreaInfo>;
    let lastUserLocationInformation: OPTIONAL<OCTET_STRING>;
    let lastMSTimeZone: OPTIONAL<OCTET_STRING>;
    let enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>;
    let nBIFOMMode: OPTIONAL<NBIFOMMode>;
    let nBIFOMSupport: OPTIONAL<NBIFOMSupport>;
    let uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;
    let sGiPtPTunnellingMethod: OPTIONAL<SGiPtPTunnellingMethod>;
    let uNIPDUCPOnlyFlag: OPTIONAL<BOOLEAN>;
    let servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>;
    let aPNRateControl: OPTIONAL<APNRateControl>;
    let pDPPDNTypeExtension: OPTIONAL<INTEGER>;
    let mOExceptionDataCounter: OPTIONAL<MOExceptionDataCounter>;
    let chargingPerIPCANSessionIndicator: OPTIONAL<ChargingPerIPCANSessionIndicator>;
    let threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>;
    let sCSASAddress: OPTIONAL<SCSASAddress>;
    let listOfRANSecondaryRATUsageReports: OPTIONAL<RANSecondaryRATUsageReport[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "p-GWAddress": (_el: _Element): void => { p_GWAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "chargingID": (_el: _Element): void => { chargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "servingNodeAddress": (_el: _Element): void => { servingNodeAddress = $._decode_implicit<GSNAddress[]>(() => $._decodeSequenceOf<GSNAddress>(() => _decode_GSNAddress))(_el); },
        "accessPointNameNI": (_el: _Element): void => { accessPointNameNI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "pdpPDNType": (_el: _Element): void => { pdpPDNType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedPDPPDNAddress": (_el: _Element): void => { servedPDPPDNAddress = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "dynamicAddressFlag": (_el: _Element): void => { dynamicAddressFlag = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "listOfTrafficVolumes": (_el: _Element): void => { listOfTrafficVolumes = $._decode_implicit<ChangeOfCharCondition[]>(() => $._decodeSequenceOf<ChangeOfCharCondition>(() => _decode_ChangeOfCharCondition))(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForRecClosing": (_el: _Element): void => { causeForRecClosing = $._decode_implicit<CauseForRecClosing>(() => _decode_CauseForRecClosing)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "recordSequenceNumber": (_el: _Element): void => { recordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "apnSelectionMode": (_el: _Element): void => { apnSelectionMode = $._decode_implicit<APNSelectionMode>(() => _decode_APNSelectionMode)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chargingCharacteristics": (_el: _Element): void => { chargingCharacteristics = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chChSelectionMode": (_el: _Element): void => { chChSelectionMode = $._decode_implicit<ChChSelectionMode>(() => _decode_ChChSelectionMode)(_el); },
        "iMSsignalingContext": (_el: _Element): void => { iMSsignalingContext = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "servingNodePLMNIdentifier": (_el: _Element): void => { servingNodePLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pSFurnishChargingInformation": (_el: _Element): void => { pSFurnishChargingInformation = $._decode_implicit<PSFurnishChargingInformation>(() => _decode_PSFurnishChargingInformation)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mSTimeZone": (_el: _Element): void => { mSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cAMELChargingInformation": (_el: _Element): void => { cAMELChargingInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "listOfServiceData": (_el: _Element): void => { listOfServiceData = $._decode_implicit<ChangeOfServiceCondition[]>(() => $._decodeSequenceOf<ChangeOfServiceCondition>(() => _decode_ChangeOfServiceCondition))(_el); },
        "servingNodeType": (_el: _Element): void => { servingNodeType = $._decode_implicit<ServingNodeType[]>(() => $._decodeSequenceOf<ServingNodeType>(() => _decode_ServingNodeType))(_el); },
        "servedMNNAI": (_el: _Element): void => { servedMNNAI = $._decode_implicit<SubscriptionID>(() => _decode_SubscriptionID)(_el); },
        "p-GWPLMNIdentifier": (_el: _Element): void => { p_GWPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "stopTime": (_el: _Element): void => { stopTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "served3gpp2MEID": (_el: _Element): void => { served3gpp2MEID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pDNConnectionChargingID": (_el: _Element): void => { pDNConnectionChargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "iMSIunauthenticatedFlag": (_el: _Element): void => { iMSIunauthenticatedFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); },
        "threeGPP2UserLocationInformation": (_el: _Element): void => { threeGPP2UserLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedPDPPDNAddressExt": (_el: _Element): void => { servedPDPPDNAddressExt = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "lowPriorityIndicator": (_el: _Element): void => { lowPriorityIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "dynamicAddressFlagExt": (_el: _Element): void => { dynamicAddressFlagExt = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "servingNodeiPv6Address": (_el: _Element): void => { servingNodeiPv6Address = $._decode_implicit<GSNAddress[]>(() => $._decodeSequenceOf<GSNAddress>(() => _decode_GSNAddress))(_el); },
        "p-GWiPv6AddressUsed": (_el: _Element): void => { p_GWiPv6AddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "tWANUserLocationInformation": (_el: _Element): void => { tWANUserLocationInformation = $._decode_implicit<TWANUserLocationInfo>(() => _decode_TWANUserLocationInfo)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "userLocationInfoTime": (_el: _Element): void => { userLocationInfoTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cNOperatorSelectionEnt": (_el: _Element): void => { cNOperatorSelectionEnt = $._decode_implicit<CNOperatorSelectionEntity>(() => _decode_CNOperatorSelectionEntity)(_el); },
        "ePCQoSInformation": (_el: _Element): void => { ePCQoSInformation = $._decode_implicit<EPCQoSInformation>(() => _decode_EPCQoSInformation)(_el); },
        "presenceReportingAreaInfo": (_el: _Element): void => { presenceReportingAreaInfo = $._decode_implicit<PresenceReportingAreaInfo>(() => _decode_PresenceReportingAreaInfo)(_el); },
        "lastUserLocationInformation": (_el: _Element): void => { lastUserLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lastMSTimeZone": (_el: _Element): void => { lastMSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "enhancedDiagnostics": (_el: _Element): void => { enhancedDiagnostics = $._decode_implicit<EnhancedDiagnostics>(() => _decode_EnhancedDiagnostics)(_el); },
        "nBIFOMMode": (_el: _Element): void => { nBIFOMMode = $._decode_implicit<NBIFOMMode>(() => _decode_NBIFOMMode)(_el); },
        "nBIFOMSupport": (_el: _Element): void => { nBIFOMSupport = $._decode_implicit<NBIFOMSupport>(() => _decode_NBIFOMSupport)(_el); },
        "uWANUserLocationInformation": (_el: _Element): void => { uWANUserLocationInformation = $._decode_implicit<UWANUserLocationInfo>(() => _decode_UWANUserLocationInfo)(_el); },
        "sGiPtPTunnellingMethod": (_el: _Element): void => { sGiPtPTunnellingMethod = $._decode_implicit<SGiPtPTunnellingMethod>(() => _decode_SGiPtPTunnellingMethod)(_el); },
        "uNIPDUCPOnlyFlag": (_el: _Element): void => { uNIPDUCPOnlyFlag = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "servingPLMNRateControl": (_el: _Element): void => { servingPLMNRateControl = $._decode_implicit<ServingPLMNRateControl>(() => _decode_ServingPLMNRateControl)(_el); },
        "aPNRateControl": (_el: _Element): void => { aPNRateControl = $._decode_implicit<APNRateControl>(() => _decode_APNRateControl)(_el); },
        "pDPPDNTypeExtension": (_el: _Element): void => { pDPPDNTypeExtension = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mOExceptionDataCounter": (_el: _Element): void => { mOExceptionDataCounter = $._decode_implicit<MOExceptionDataCounter>(() => _decode_MOExceptionDataCounter)(_el); },
        "chargingPerIPCANSessionIndicator": (_el: _Element): void => { chargingPerIPCANSessionIndicator = $._decode_implicit<ChargingPerIPCANSessionIndicator>(() => _decode_ChargingPerIPCANSessionIndicator)(_el); },
        "threeGPPPSDataOffStatus": (_el: _Element): void => { threeGPPPSDataOffStatus = $._decode_implicit<ThreeGPPPSDataOffStatus>(() => _decode_ThreeGPPPSDataOffStatus)(_el); },
        "sCSASAddress": (_el: _Element): void => { sCSASAddress = $._decode_implicit<SCSASAddress>(() => _decode_SCSASAddress)(_el); },
        "listOfRANSecondaryRATUsageReports": (_el: _Element): void => { listOfRANSecondaryRATUsageReports = $._decode_implicit<RANSecondaryRATUsageReport[]>(() => $._decodeSequenceOf<RANSecondaryRATUsageReport>(() => _decode_RANSecondaryRATUsageReport))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_PGWRecord,
        _extension_additions_list_spec_for_PGWRecord,
        _root_component_type_list_2_spec_for_PGWRecord,
        undefined,
    );
    return new PGWRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        p_GWAddress,
        chargingID,
        servingNodeAddress,
        accessPointNameNI,
        pdpPDNType,
        servedPDPPDNAddress,
        dynamicAddressFlag,
        listOfTrafficVolumes,
        recordOpeningTime,
        duration,
        causeForRecClosing,
        diagnostics,
        recordSequenceNumber,
        nodeID,
        recordExtensions,
        localSequenceNumber,
        apnSelectionMode,
        servedMSISDN,
        chargingCharacteristics,
        chChSelectionMode,
        iMSsignalingContext,
        servingNodePLMNIdentifier,
        pSFurnishChargingInformation,
        servedIMEI,
        rATType,
        mSTimeZone,
        userLocationInformation,
        cAMELChargingInformation,
        listOfServiceData,
        servingNodeType,
        servedMNNAI,
        p_GWPLMNIdentifier,
        startTime,
        stopTime,
        served3gpp2MEID,
        pDNConnectionChargingID,
        iMSIunauthenticatedFlag,
        userCSGInformation,
        threeGPP2UserLocationInformation,
        servedPDPPDNAddressExt,
        lowPriorityIndicator,
        dynamicAddressFlagExt,
        servingNodeiPv6Address,
        p_GWiPv6AddressUsed,
        tWANUserLocationInformation,
        retransmission,
        userLocationInfoTime,
        cNOperatorSelectionEnt,
        ePCQoSInformation,
        presenceReportingAreaInfo,
        lastUserLocationInformation,
        lastMSTimeZone,
        enhancedDiagnostics,
        nBIFOMMode,
        nBIFOMSupport,
        uWANUserLocationInformation,
        sGiPtPTunnellingMethod,
        uNIPDUCPOnlyFlag,
        servingPLMNRateControl,
        aPNRateControl,
        pDPPDNTypeExtension,
        mOExceptionDataCounter,
        chargingPerIPCANSessionIndicator,
        threeGPPPSDataOffStatus,
        sCSASAddress,
        listOfRANSecondaryRATUsageReports
    );
}; }
    return _cached_decoder_for_PGWRecord(el);
}

let _cached_encoder_for_PGWRecord: $.ASN1Encoder<PGWRecord> | null = null;

/**
 * @summary Encodes a(n) PGWRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PGWRecord, encoded as an ASN.1 Element.
 */
export
function _encode_PGWRecord (value: PGWRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PGWRecord) { _cached_encoder_for_PGWRecord = function (value: PGWRecord, _elGetter: $.ASN1Encoder<PGWRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.servedIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_GSNAddress, $.BER)(value.p_GWAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.chargingID, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<GSNAddress>(() => _encode_GSNAddress, $.BER), $.BER)(value.servingNodeAddress, $.BER));
    if (value.accessPointNameNI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeIA5String, $.BER)(value.accessPointNameNI, $.BER));
    }
    if (value.pdpPDNType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.pdpPDNType, $.BER));
    }
    if (value.servedPDPPDNAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 9, () => _encode_PDPAddress, $.BER)(value.servedPDPPDNAddress, $.BER));
    }
    if (value.dynamicAddressFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeBoolean, $.BER)(value.dynamicAddressFlag, $.BER));
    }
    if (value.listOfTrafficVolumes !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeSequenceOf<ChangeOfCharCondition>(() => _encode_ChangeOfCharCondition, $.BER), $.BER)(value.listOfTrafficVolumes, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.duration, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => _encode_CauseForRecClosing, $.BER)(value.causeForRecClosing, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 16, () => _encode_Diagnostics, $.BER)(value.diagnostics, $.BER));
    }
    if (value.recordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeInteger, $.BER)(value.recordSequenceNumber, $.BER));
    }
    if (value.nodeID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeIA5String, $.BER)(value.nodeID, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.apnSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_APNSelectionMode, $.BER)(value.apnSelectionMode, $.BER));
    }
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.chargingCharacteristics, $.BER));
    if (value.chChSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_ChChSelectionMode, $.BER)(value.chChSelectionMode, $.BER));
    }
    if (value.iMSsignalingContext !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeNull, $.BER)(value.iMSsignalingContext, $.BER));
    }
    if (value.servingNodePLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeOctetString, $.BER)(value.servingNodePLMNIdentifier, $.BER));
    }
    if (value.pSFurnishChargingInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => _encode_PSFurnishChargingInformation, $.BER)(value.pSFurnishChargingInformation, $.BER));
    }
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.mSTimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 31, () => $._encodeOctetString, $.BER)(value.mSTimeZone, $.BER));
    }
    if (value.userLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => $._encodeOctetString, $.BER)(value.userLocationInformation, $.BER));
    }
    if (value.cAMELChargingInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => $._encodeOctetString, $.BER)(value.cAMELChargingInformation, $.BER));
    }
    if (value.listOfServiceData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeSequenceOf<ChangeOfServiceCondition>(() => _encode_ChangeOfServiceCondition, $.BER), $.BER)(value.listOfServiceData, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 35, () => $._encodeSequenceOf<ServingNodeType>(() => _encode_ServingNodeType, $.BER), $.BER)(value.servingNodeType, $.BER));
    if (value.servedMNNAI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => _encode_SubscriptionID, $.BER)(value.servedMNNAI, $.BER));
    }
    if (value.p_GWPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => $._encodeOctetString, $.BER)(value.p_GWPLMNIdentifier, $.BER));
    }
    if (value.startTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => $._encodeOctetString, $.BER)(value.startTime, $.BER));
    }
    if (value.stopTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => $._encodeOctetString, $.BER)(value.stopTime, $.BER));
    }
    if (value.served3gpp2MEID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => $._encodeOctetString, $.BER)(value.served3gpp2MEID, $.BER));
    }
    if (value.pDNConnectionChargingID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 41, () => $._encodeInteger, $.BER)(value.pDNConnectionChargingID, $.BER));
    }
    if (value.iMSIunauthenticatedFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 42, () => $._encodeNull, $.BER)(value.iMSIunauthenticatedFlag, $.BER));
    }
    if (value.userCSGInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 43, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER));
    }
    if (value.threeGPP2UserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 44, () => $._encodeOctetString, $.BER)(value.threeGPP2UserLocationInformation, $.BER));
    }
    if (value.servedPDPPDNAddressExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 45, () => _encode_PDPAddress, $.BER)(value.servedPDPPDNAddressExt, $.BER));
    }
    if (value.lowPriorityIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 46, () => $._encodeNull, $.BER)(value.lowPriorityIndicator, $.BER));
    }
    if (value.dynamicAddressFlagExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeBoolean, $.BER)(value.dynamicAddressFlagExt, $.BER));
    }
    if (value.servingNodeiPv6Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 49, () => $._encodeSequenceOf<GSNAddress>(() => _encode_GSNAddress, $.BER), $.BER)(value.servingNodeiPv6Address, $.BER));
    }
    if (value.p_GWiPv6AddressUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 50, () => _encode_GSNAddress, $.BER)(value.p_GWiPv6AddressUsed, $.BER));
    }
    if (value.tWANUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 51, () => _encode_TWANUserLocationInfo, $.BER)(value.tWANUserLocationInformation, $.BER));
    }
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 52, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.userLocationInfoTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 53, () => $._encodeOctetString, $.BER)(value.userLocationInfoTime, $.BER));
    }
    if (value.cNOperatorSelectionEnt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 54, () => _encode_CNOperatorSelectionEntity, $.BER)(value.cNOperatorSelectionEnt, $.BER));
    }
    if (value.ePCQoSInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => _encode_EPCQoSInformation, $.BER)(value.ePCQoSInformation, $.BER));
    }
    if (value.presenceReportingAreaInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => _encode_PresenceReportingAreaInfo, $.BER)(value.presenceReportingAreaInfo, $.BER));
    }
    if (value.lastUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 57, () => $._encodeOctetString, $.BER)(value.lastUserLocationInformation, $.BER));
    }
    if (value.lastMSTimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 58, () => $._encodeOctetString, $.BER)(value.lastMSTimeZone, $.BER));
    }
    if (value.enhancedDiagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 59, () => _encode_EnhancedDiagnostics, $.BER)(value.enhancedDiagnostics, $.BER));
    }
    if (value.nBIFOMMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 60, () => _encode_NBIFOMMode, $.BER)(value.nBIFOMMode, $.BER));
    }
    if (value.nBIFOMSupport !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 61, () => _encode_NBIFOMSupport, $.BER)(value.nBIFOMSupport, $.BER));
    }
    if (value.uWANUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 62, () => _encode_UWANUserLocationInfo, $.BER)(value.uWANUserLocationInformation, $.BER));
    }
    if (value.sGiPtPTunnellingMethod !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 64, () => _encode_SGiPtPTunnellingMethod, $.BER)(value.sGiPtPTunnellingMethod, $.BER));
    }
    if (value.uNIPDUCPOnlyFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 65, () => $._encodeBoolean, $.BER)(value.uNIPDUCPOnlyFlag, $.BER));
    }
    if (value.servingPLMNRateControl !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 66, () => _encode_ServingPLMNRateControl, $.BER)(value.servingPLMNRateControl, $.BER));
    }
    if (value.aPNRateControl !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 67, () => _encode_APNRateControl, $.BER)(value.aPNRateControl, $.BER));
    }
    if (value.pDPPDNTypeExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 68, () => $._encodeInteger, $.BER)(value.pDPPDNTypeExtension, $.BER));
    }
    if (value.mOExceptionDataCounter !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 69, () => _encode_MOExceptionDataCounter, $.BER)(value.mOExceptionDataCounter, $.BER));
    }
    if (value.chargingPerIPCANSessionIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 70, () => _encode_ChargingPerIPCANSessionIndicator, $.BER)(value.chargingPerIPCANSessionIndicator, $.BER));
    }
    if (value.threeGPPPSDataOffStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 71, () => _encode_ThreeGPPPSDataOffStatus, $.BER)(value.threeGPPPSDataOffStatus, $.BER));
    }
    if (value.sCSASAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 72, () => _encode_SCSASAddress, $.BER)(value.sCSASAddress, $.BER));
    }
    if (value.listOfRANSecondaryRATUsageReports !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 73, () => $._encodeSequenceOf<RANSecondaryRATUsageReport>(() => _encode_RANSecondaryRATUsageReport, $.BER), $.BER)(value.listOfRANSecondaryRATUsageReports, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_PGWRecord(value, elGetter);
}


/* eslint-enable */
