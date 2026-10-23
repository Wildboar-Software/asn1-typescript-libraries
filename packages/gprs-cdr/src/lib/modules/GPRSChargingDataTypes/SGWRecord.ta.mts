/* eslint-disable */
import {
    BOOLEAN,
    IA5String,
    INTEGER,
    NULL,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../GPRSChargingDataTypes/RecordType.ta.mjs";
import { GSNAddress, _decode_GSNAddress, _encode_GSNAddress } from "../GPRSChargingDataTypes/GSNAddress.ta.mjs";
import { PDPAddress, _decode_PDPAddress, _encode_PDPAddress } from "../GPRSChargingDataTypes/PDPAddress.ta.mjs";
import { ChangeOfCharCondition, _decode_ChangeOfCharCondition, _encode_ChangeOfCharCondition } from "../GPRSChargingDataTypes/ChangeOfCharCondition.ta.mjs";
import { CauseForRecClosing, _decode_CauseForRecClosing, _encode_CauseForRecClosing } from "../GPRSChargingDataTypes/CauseForRecClosing.ta.mjs";
import { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../GPRSChargingDataTypes/Diagnostics.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../GPRSChargingDataTypes/ManagementExtension.ta.mjs";
import { APNSelectionMode, _decode_APNSelectionMode, _encode_APNSelectionMode, _enum_for_APNSelectionMode } from "../GPRSChargingDataTypes/APNSelectionMode.ta.mjs";
import { ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../GPRSChargingDataTypes/ChChSelectionMode.ta.mjs";
import { ServingNodeType, _decode_ServingNodeType, _encode_ServingNodeType } from "../GPRSChargingDataTypes/ServingNodeType.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../GPRSChargingDataTypes/UserCSGInformation.ta.mjs";
import { CNOperatorSelectionEntity, _decode_CNOperatorSelectionEntity, _encode_CNOperatorSelectionEntity, _enum_for_CNOperatorSelectionEntity } from "../GPRSChargingDataTypes/CNOperatorSelectionEntity.ta.mjs";
import { PresenceReportingAreaInfo, _decode_PresenceReportingAreaInfo, _encode_PresenceReportingAreaInfo } from "../GPRSChargingDataTypes/PresenceReportingAreaInfo.ta.mjs";
import { EnhancedDiagnostics, _decode_EnhancedDiagnostics, _encode_EnhancedDiagnostics } from "../GPRSChargingDataTypes/EnhancedDiagnostics.ta.mjs";
import { ServingPLMNRateControl, _decode_ServingPLMNRateControl, _encode_ServingPLMNRateControl } from "../GPRSChargingDataTypes/ServingPLMNRateControl.ta.mjs";
import { MOExceptionDataCounter, _decode_MOExceptionDataCounter, _encode_MOExceptionDataCounter } from "../GPRSChargingDataTypes/MOExceptionDataCounter.ta.mjs";
import { RANSecondaryRATUsageReport, _decode_RANSecondaryRATUsageReport, _encode_RANSecondaryRATUsageReport } from "../GPRSChargingDataTypes/RANSecondaryRATUsageReport.ta.mjs";


/**
 * @summary SGWRecord
 * @description
 *
 * SGW-CDR. IP-CAN bearer charging data collected by the S-GW, with usage
 * separated per QCI/ARP pair (clause 5.2.3.3 and table 6.1.2.1). If CDR
 * generation is activated, the S-GW opens the record at IP-CAN bearer
 * activation. Each record includes at least the IP-CAN bearer specific
 * container. Container-addition triggers are QoS change, tariff time
 * change, user location change, user CSG information change, change of UE
 * presence in a Presence Reporting Area, change in the user plane to the
 * UE (S11-U versus S1-U), Serving PLMN Rate Control change, and CDR
 * closure (table 5.2.3.3.1.1). When the user enters a CSG cell or a hybrid
 * cell, the closed container carries the CSG ID, access mode, and, for
 * hybrid, the membership indication; when the user leaves, those elements
 * are omitted unless the user is entering another such cell.
 * changeCondition is omitted on a container added for CDR closure, except
 * when closure is due to the maximum number of charging-condition changes,
 * in which case the original condition is kept. A new serving-node address
 * is added when the S4-SGSN or MME changes. The S-GW closes the CDR when
 * the bearer ends (termination, inter serving node change, or abnormal
 * release) or for a partial-record reason (volume limit, time limit,
 * maximum number of charging-condition changes, management intervention,
 * MS time zone change, PLMN change, RAT change, or MO exception data
 * counter receipt). If the bearer remains active, the next SGW-CDR uses an
 * incremented sequence number.
 *
 * 3GPP TS 32.251 V19.0.0.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGWRecord ::= SET {
 *    recordType                          [0] IMPLICIT RecordType,
 *    servedIMSI                          [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    s-GWAddress                         [4] GSNAddress,
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
 *    servedIMEI                          [29] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    rATType                             [30] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    mSTimeZone                          [31] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    userLocationInformation             [32] IMPLICIT OCTET STRING OPTIONAL,
 *    sGWChange                           [34] IMPLICIT BOOLEAN OPTIONAL,
 *    servingNodeType                     [35] IMPLICIT SEQUENCE  OF
 *       ServingNodeType,
 *    p-GWAddressUsed                     [36] GSNAddress OPTIONAL,
 *    p-GWPLMNIdentifier                  [37] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    startTime                           [38] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    stopTime                            [39] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    pDNConnectionChargingID             [40] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    iMSIunauthenticatedFlag             [41] IMPLICIT NULL OPTIONAL,
 *    userCSGInformation                  [42] IMPLICIT UserCSGInformation OPTIONAL,
 *    servedPDPPDNAddressExt              [43] PDPAddress OPTIONAL,
 *    lowPriorityIndicator                [44] IMPLICIT NULL OPTIONAL,
 *    dynamicAddressFlagExt               [47] IMPLICIT BOOLEAN OPTIONAL,
 *    s-GWiPv6Address                     [48] GSNAddress OPTIONAL,
 *    servingNodeiPv6Address              [49] IMPLICIT SEQUENCE  OF
 *       GSNAddress OPTIONAL,
 *    p-GWiPv6AddressUsed                 [50] GSNAddress OPTIONAL,
 *    retransmission                      [51] IMPLICIT NULL OPTIONAL,
 *    userLocationInfoTime                [52] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    cNOperatorSelectionEnt              [53] IMPLICIT CNOperatorSelectionEntity OPTIONAL,
 *    presenceReportingAreaInfo           [54] IMPLICIT PresenceReportingAreaInfo OPTIONAL,
 *    lastUserLocationInformation         [55] IMPLICIT OCTET STRING OPTIONAL,
 *    lastMSTimeZone                      [56] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    enhancedDiagnostics                 [57] IMPLICIT EnhancedDiagnostics OPTIONAL,
 *    cPCIoTEPSOptimisationIndicator      [59] IMPLICIT BOOLEAN OPTIONAL,
 *    uNIPDUCPOnlyFlag                    [60] IMPLICIT BOOLEAN OPTIONAL,
 *    servingPLMNRateControl              [61] IMPLICIT ServingPLMNRateControl OPTIONAL,
 *    pDPPDNTypeExtension                 [62] IMPLICIT INTEGER OPTIONAL,
 *    mOExceptionDataCounter              [63] IMPLICIT MOExceptionDataCounter OPTIONAL,
 *    listOfRANSecondaryRATUsageReports   [64] IMPLICIT SEQUENCE  OF
 *       RANSecondaryRATUsageReport OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SGWRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * The field identifies the type of the record e.g. S-CDR, SGW-CDR, PGW-CDR,
     * M-CDR, S-SMO-CDR, TDF-CDR, IPE-CDR and S-SMT-CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.51.
     *
     * SGW-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category C (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly servedIMSI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `s_GWAddress`.
     * @description
     *
     * These field is the serving S-GW IP Address for the Control Plane. If both
     * an IPv4 and an IPv6 address of the S-GW is available, the S-GW shall
     * include the IPv4 address in the CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.55.
     *
     * SGW-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly s_GWAddress: GSNAddress;
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
     * SGW-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly accessPointNameNI: OPTIONAL<IA5String>;
    /**
     * @summary `pdpPDNType`.
     * @description
     *
     * This field indicates PDN type (i.e. IPv4, IPv6 or IPv4v6).
     *
     * SGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly pdpPDNType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedPDPPDNAddress`.
     * @description
     *
     * IP address allocated for the PDP context PDN connection, if available,
     * i.e. IPv4 address when PDN Type is IPv4 or IPv6 prefix when PDN Type is
     * IPv6 or IPv4v6. For non-IP PDN connection, this field is not present
     *
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category C (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    /**
     * @summary `iMSsignalingContext`.
     * @description
     *
     * Included if the IM-CN Subsystem Signalling Flag is set, see TS 23.060
     * [201] IP-CAN bearer is used for IMS signalling.
     *
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly userLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sGWChange`.
     * @description
     *
     * This field is present only in the SGW-CDR,ePDG-CDR or TWAG-CDR to indicate
     * that this is the first record after an inter serving node change (change
     * from SGW, ePDG, TWAG, HSGW).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.56.
     *
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly sGWChange: OPTIONAL<BOOLEAN>;
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
     * SGW-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly servingNodeType: ServingNodeType[];
    /**
     * @summary `p_GWAddressUsed`.
     * @description
     *
     * These field is the serving P-GW IP Address for the Control Plane. If both
     * an IPv4 and an IPv6 address of the P-GW is available, the P-GW shall
     * include the IPv4 address in the CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.38.
     *
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly p_GWAddressUsed: OPTIONAL<GSNAddress>;
    /**
     * @summary `p_GWPLMNIdentifier`.
     * @description
     *
     * PLMN identifier (MCC MNC) of the P-GW used.
     *
     * SGW-CDR field category Oc (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly stopTime: OPTIONAL<OCTET_STRING>;
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
     * SGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly userCSGInformation: OPTIONAL<UserCSGInformation>;
    /**
     * @summary `servedPDPPDNAddressExt`.
     * @description
     *
     * This field holds IPv4 address of the served IMSI, if available, when PDN
     * type is IPv4v6. For non-IP PDN connection, this field is not present.
     *
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    /**
     * @summary `s_GWiPv6Address`.
     * @description
     *
     * The control plane IPv6 address, in case of IPv4v6 dual stack, of the
     * S-GW.
     *
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly s_GWiPv6Address: OPTIONAL<GSNAddress>;
    /**
     * @summary `servingNodeiPv6Address`.
     * @description
     *
     * List of serving node control plane IPv6 addresses, in case of IPv4v6
     * dual stack, (e.g. S4-SGSN, MME, …) used during this record.
     *
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly servingNodeiPv6Address: OPTIONAL<GSNAddress[]>;
    /**
     * @summary `p_GWiPv6AddressUsed`.
     * @description
     *
     * This field is the P-GW IPv6 Address, in case of IPv4v6 dual stack, for
     * the Control Plane
     *
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly p_GWiPv6AddressUsed: OPTIONAL<GSNAddress>;
    /**
     * @summary `retransmission`.
     * @description
     *
     * This parameter, when present, indicates that information from
     * retransmitted Diameter ACRs has been used in this CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.52A.
     *
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>;
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>;
    /**
     * @summary `cPCIoTEPSOptimisationIndicator`.
     * @description
     *
     * This field indicates whether CP CIoT EPS Optimisation is used during
     * data transfer with the UE (i.e. Control Plane NAS PDU via S11-U between
     * SGW and MME) or not (i.e.User Plane via S1-U between SGW and eNB), if
     * enabled.
     *
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly cPCIoTEPSOptimisationIndicator: OPTIONAL<BOOLEAN>;
    /**
     * @summary `uNIPDUCPOnlyFlag`.
     * @description
     *
     * This field indicates whether this PDN connection is applied with
     * "Control Plane Only Flag" for UNI PDU transfer, i.e. transfer only using
     * Control Plane NAS PDU (Control Plane CIoT EPS optimisation).
     *
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category Oc (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>;
    /**
     * @summary `pDPPDNTypeExtension`.
     * @description
     *
     * This field indicates Non-IP PDN type.
     *
     * SGW-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
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
     * SGW-CDR field category Oc (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly mOExceptionDataCounter: OPTIONAL<MOExceptionDataCounter>;
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
     * SGW-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly listOfRANSecondaryRATUsageReports: OPTIONAL<RANSecondaryRATUsageReport[]>;

    constructor (
        recordType: RecordType,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        s_GWAddress: GSNAddress,
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
        servedIMEI: OPTIONAL<OCTET_STRING>,
        rATType: OPTIONAL<INTEGER>,
        mSTimeZone: OPTIONAL<OCTET_STRING>,
        userLocationInformation: OPTIONAL<OCTET_STRING>,
        sGWChange: OPTIONAL<BOOLEAN>,
        servingNodeType: ServingNodeType[],
        p_GWAddressUsed?: OPTIONAL<GSNAddress>,
        p_GWPLMNIdentifier?: OPTIONAL<OCTET_STRING>,
        startTime?: OPTIONAL<OCTET_STRING>,
        stopTime?: OPTIONAL<OCTET_STRING>,
        pDNConnectionChargingID?: OPTIONAL<INTEGER>,
        iMSIunauthenticatedFlag?: OPTIONAL<NULL>,
        userCSGInformation?: OPTIONAL<UserCSGInformation>,
        servedPDPPDNAddressExt?: OPTIONAL<PDPAddress>,
        lowPriorityIndicator?: OPTIONAL<NULL>,
        dynamicAddressFlagExt?: OPTIONAL<BOOLEAN>,
        s_GWiPv6Address?: OPTIONAL<GSNAddress>,
        servingNodeiPv6Address?: OPTIONAL<GSNAddress[]>,
        p_GWiPv6AddressUsed?: OPTIONAL<GSNAddress>,
        retransmission?: OPTIONAL<NULL>,
        userLocationInfoTime?: OPTIONAL<OCTET_STRING>,
        cNOperatorSelectionEnt?: OPTIONAL<CNOperatorSelectionEntity>,
        presenceReportingAreaInfo?: OPTIONAL<PresenceReportingAreaInfo>,
        lastUserLocationInformation?: OPTIONAL<OCTET_STRING>,
        lastMSTimeZone?: OPTIONAL<OCTET_STRING>,
        enhancedDiagnostics?: OPTIONAL<EnhancedDiagnostics>,
        cPCIoTEPSOptimisationIndicator?: OPTIONAL<BOOLEAN>,
        uNIPDUCPOnlyFlag?: OPTIONAL<BOOLEAN>,
        servingPLMNRateControl?: OPTIONAL<ServingPLMNRateControl>,
        pDPPDNTypeExtension?: OPTIONAL<INTEGER>,
        mOExceptionDataCounter?: OPTIONAL<MOExceptionDataCounter>,
        listOfRANSecondaryRATUsageReports?: OPTIONAL<RANSecondaryRATUsageReport[]>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.s_GWAddress = s_GWAddress;
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
        this.servedIMEI = servedIMEI;
        this.rATType = rATType;
        this.mSTimeZone = mSTimeZone;
        this.userLocationInformation = userLocationInformation;
        this.sGWChange = sGWChange;
        this.servingNodeType = servingNodeType;
        this.p_GWAddressUsed = p_GWAddressUsed;
        this.p_GWPLMNIdentifier = p_GWPLMNIdentifier;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.pDNConnectionChargingID = pDNConnectionChargingID;
        this.iMSIunauthenticatedFlag = iMSIunauthenticatedFlag;
        this.userCSGInformation = userCSGInformation;
        this.servedPDPPDNAddressExt = servedPDPPDNAddressExt;
        this.lowPriorityIndicator = lowPriorityIndicator;
        this.dynamicAddressFlagExt = dynamicAddressFlagExt;
        this.s_GWiPv6Address = s_GWiPv6Address;
        this.servingNodeiPv6Address = servingNodeiPv6Address;
        this.p_GWiPv6AddressUsed = p_GWiPv6AddressUsed;
        this.retransmission = retransmission;
        this.userLocationInfoTime = userLocationInfoTime;
        this.cNOperatorSelectionEnt = cNOperatorSelectionEnt;
        this.presenceReportingAreaInfo = presenceReportingAreaInfo;
        this.lastUserLocationInformation = lastUserLocationInformation;
        this.lastMSTimeZone = lastMSTimeZone;
        this.enhancedDiagnostics = enhancedDiagnostics;
        this.cPCIoTEPSOptimisationIndicator = cPCIoTEPSOptimisationIndicator;
        this.uNIPDUCPOnlyFlag = uNIPDUCPOnlyFlag;
        this.servingPLMNRateControl = servingPLMNRateControl;
        this.pDPPDNTypeExtension = pDPPDNTypeExtension;
        this.mOExceptionDataCounter = mOExceptionDataCounter;
        this.listOfRANSecondaryRATUsageReports = listOfRANSecondaryRATUsageReports;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("SGWRecord.servedIMSI violates SIZE constraint");
        }
        if ((this.chargingID < 0 || this.chargingID > 4294967295)) {
            throw new ASN1OverflowError("SGWRecord.chargingID violates INTEGER range");
        }
        if (this.accessPointNameNI !== undefined && (this.accessPointNameNI.length < 1 || this.accessPointNameNI.length > 63)) {
            throw new ASN1SizeError("SGWRecord.accessPointNameNI violates SIZE constraint");
        }
        if (this.pdpPDNType !== undefined && (this.pdpPDNType.length !== 2)) {
            throw new ASN1SizeError("SGWRecord.pdpPDNType violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("SGWRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("SGWRecord.nodeID violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("SGWRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("SGWRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("SGWRecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.servingNodePLMNIdentifier !== undefined && (this.servingNodePLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("SGWRecord.servingNodePLMNIdentifier violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("SGWRecord.servedIMEI violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("SGWRecord.rATType violates INTEGER range");
        }
        if (this.mSTimeZone !== undefined && (this.mSTimeZone.length !== 2)) {
            throw new ASN1SizeError("SGWRecord.mSTimeZone violates SIZE constraint");
        }
        if (this.p_GWPLMNIdentifier !== undefined && (this.p_GWPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("SGWRecord.p_GWPLMNIdentifier violates SIZE constraint");
        }
        if (this.startTime !== undefined && (this.startTime.length !== 9)) {
            throw new ASN1SizeError("SGWRecord.startTime violates SIZE constraint");
        }
        if (this.stopTime !== undefined && (this.stopTime.length !== 9)) {
            throw new ASN1SizeError("SGWRecord.stopTime violates SIZE constraint");
        }
        if (this.pDNConnectionChargingID !== undefined && (this.pDNConnectionChargingID < 0 || this.pDNConnectionChargingID > 4294967295)) {
            throw new ASN1OverflowError("SGWRecord.pDNConnectionChargingID violates INTEGER range");
        }
        if (this.userLocationInfoTime !== undefined && (this.userLocationInfoTime.length !== 9)) {
            throw new ASN1SizeError("SGWRecord.userLocationInfoTime violates SIZE constraint");
        }
        if (this.lastMSTimeZone !== undefined && (this.lastMSTimeZone.length !== 2)) {
            throw new ASN1SizeError("SGWRecord.lastMSTimeZone violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a SGWRecord
     * @description
     * 
     * This takes an `object` and converts it to a `SGWRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SGWRecord`.
     * @returns {SGWRecord}
     */
    public static _from_object (_o: { [_K in keyof (SGWRecord)]: (SGWRecord)[_K] }): SGWRecord {
        return new SGWRecord(_o.recordType, _o.servedIMSI, _o.s_GWAddress, _o.chargingID, _o.servingNodeAddress, _o.accessPointNameNI, _o.pdpPDNType, _o.servedPDPPDNAddress, _o.dynamicAddressFlag, _o.listOfTrafficVolumes, _o.recordOpeningTime, _o.duration, _o.causeForRecClosing, _o.diagnostics, _o.recordSequenceNumber, _o.nodeID, _o.recordExtensions, _o.localSequenceNumber, _o.apnSelectionMode, _o.servedMSISDN, _o.chargingCharacteristics, _o.chChSelectionMode, _o.iMSsignalingContext, _o.servingNodePLMNIdentifier, _o.servedIMEI, _o.rATType, _o.mSTimeZone, _o.userLocationInformation, _o.sGWChange, _o.servingNodeType, _o.p_GWAddressUsed, _o.p_GWPLMNIdentifier, _o.startTime, _o.stopTime, _o.pDNConnectionChargingID, _o.iMSIunauthenticatedFlag, _o.userCSGInformation, _o.servedPDPPDNAddressExt, _o.lowPriorityIndicator, _o.dynamicAddressFlagExt, _o.s_GWiPv6Address, _o.servingNodeiPv6Address, _o.p_GWiPv6AddressUsed, _o.retransmission, _o.userLocationInfoTime, _o.cNOperatorSelectionEnt, _o.presenceReportingAreaInfo, _o.lastUserLocationInformation, _o.lastMSTimeZone, _o.enhancedDiagnostics, _o.cPCIoTEPSOptimisationIndicator, _o.uNIPDUCPOnlyFlag, _o.servingPLMNRateControl, _o.pDPPDNTypeExtension, _o.mOExceptionDataCounter, _o.listOfRANSecondaryRATUsageReports);
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

    public static _enum_for_cNOperatorSelectionEnt = _enum_for_CNOperatorSelectionEntity;
}

/**
 * @summary The Leading Root Component Types of SGWRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SGWRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("s-GWAddress", false, $.hasTag(_TagClass.context, 4)),
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
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("mSTimeZone", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("sGWChange", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("servingNodeType", false, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("p-GWAddressUsed", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("p-GWPLMNIdentifier", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("stopTime", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("pDNConnectionChargingID", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("iMSIunauthenticatedFlag", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 42)),
    new $.ComponentSpec("servedPDPPDNAddressExt", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("lowPriorityIndicator", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("dynamicAddressFlagExt", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("s-GWiPv6Address", true, $.hasTag(_TagClass.context, 48)),
    new $.ComponentSpec("servingNodeiPv6Address", true, $.hasTag(_TagClass.context, 49)),
    new $.ComponentSpec("p-GWiPv6AddressUsed", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("userLocationInfoTime", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("cNOperatorSelectionEnt", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("presenceReportingAreaInfo", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("lastUserLocationInformation", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("lastMSTimeZone", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("enhancedDiagnostics", true, $.hasTag(_TagClass.context, 57)),
    new $.ComponentSpec("cPCIoTEPSOptimisationIndicator", true, $.hasTag(_TagClass.context, 59)),
    new $.ComponentSpec("uNIPDUCPOnlyFlag", true, $.hasTag(_TagClass.context, 60)),
    new $.ComponentSpec("servingPLMNRateControl", true, $.hasTag(_TagClass.context, 61)),
    new $.ComponentSpec("pDPPDNTypeExtension", true, $.hasTag(_TagClass.context, 62)),
    new $.ComponentSpec("mOExceptionDataCounter", true, $.hasTag(_TagClass.context, 63)),
    new $.ComponentSpec("listOfRANSecondaryRATUsageReports", true, $.hasTag(_TagClass.context, 64))
];

/**
 * @summary The Trailing Root Component Types of SGWRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SGWRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SGWRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SGWRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SGWRecord: $.ASN1Decoder<SGWRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SGWRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SGWRecord (el: _Element): SGWRecord {
    if (!_cached_decoder_for_SGWRecord) { _cached_decoder_for_SGWRecord = function (el: _Element): SGWRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let s_GWAddress!: GSNAddress;
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
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<INTEGER>;
    let mSTimeZone: OPTIONAL<OCTET_STRING>;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let sGWChange: OPTIONAL<BOOLEAN>;
    let servingNodeType!: ServingNodeType[];
    let p_GWAddressUsed: OPTIONAL<GSNAddress>;
    let p_GWPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let startTime: OPTIONAL<OCTET_STRING>;
    let stopTime: OPTIONAL<OCTET_STRING>;
    let pDNConnectionChargingID: OPTIONAL<INTEGER>;
    let iMSIunauthenticatedFlag: OPTIONAL<NULL>;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    let servedPDPPDNAddressExt: OPTIONAL<PDPAddress>;
    let lowPriorityIndicator: OPTIONAL<NULL>;
    let dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    let s_GWiPv6Address: OPTIONAL<GSNAddress>;
    let servingNodeiPv6Address: OPTIONAL<GSNAddress[]>;
    let p_GWiPv6AddressUsed: OPTIONAL<GSNAddress>;
    let retransmission: OPTIONAL<NULL>;
    let userLocationInfoTime: OPTIONAL<OCTET_STRING>;
    let cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>;
    let presenceReportingAreaInfo: OPTIONAL<PresenceReportingAreaInfo>;
    let lastUserLocationInformation: OPTIONAL<OCTET_STRING>;
    let lastMSTimeZone: OPTIONAL<OCTET_STRING>;
    let enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>;
    let cPCIoTEPSOptimisationIndicator: OPTIONAL<BOOLEAN>;
    let uNIPDUCPOnlyFlag: OPTIONAL<BOOLEAN>;
    let servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>;
    let pDPPDNTypeExtension: OPTIONAL<INTEGER>;
    let mOExceptionDataCounter: OPTIONAL<MOExceptionDataCounter>;
    let listOfRANSecondaryRATUsageReports: OPTIONAL<RANSecondaryRATUsageReport[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "s-GWAddress": (_el: _Element): void => { s_GWAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
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
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mSTimeZone": (_el: _Element): void => { mSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sGWChange": (_el: _Element): void => { sGWChange = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "servingNodeType": (_el: _Element): void => { servingNodeType = $._decode_implicit<ServingNodeType[]>(() => $._decodeSequenceOf<ServingNodeType>(() => _decode_ServingNodeType))(_el); },
        "p-GWAddressUsed": (_el: _Element): void => { p_GWAddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "p-GWPLMNIdentifier": (_el: _Element): void => { p_GWPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "stopTime": (_el: _Element): void => { stopTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pDNConnectionChargingID": (_el: _Element): void => { pDNConnectionChargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "iMSIunauthenticatedFlag": (_el: _Element): void => { iMSIunauthenticatedFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); },
        "servedPDPPDNAddressExt": (_el: _Element): void => { servedPDPPDNAddressExt = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "lowPriorityIndicator": (_el: _Element): void => { lowPriorityIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "dynamicAddressFlagExt": (_el: _Element): void => { dynamicAddressFlagExt = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "s-GWiPv6Address": (_el: _Element): void => { s_GWiPv6Address = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "servingNodeiPv6Address": (_el: _Element): void => { servingNodeiPv6Address = $._decode_implicit<GSNAddress[]>(() => $._decodeSequenceOf<GSNAddress>(() => _decode_GSNAddress))(_el); },
        "p-GWiPv6AddressUsed": (_el: _Element): void => { p_GWiPv6AddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "userLocationInfoTime": (_el: _Element): void => { userLocationInfoTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cNOperatorSelectionEnt": (_el: _Element): void => { cNOperatorSelectionEnt = $._decode_implicit<CNOperatorSelectionEntity>(() => _decode_CNOperatorSelectionEntity)(_el); },
        "presenceReportingAreaInfo": (_el: _Element): void => { presenceReportingAreaInfo = $._decode_implicit<PresenceReportingAreaInfo>(() => _decode_PresenceReportingAreaInfo)(_el); },
        "lastUserLocationInformation": (_el: _Element): void => { lastUserLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lastMSTimeZone": (_el: _Element): void => { lastMSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "enhancedDiagnostics": (_el: _Element): void => { enhancedDiagnostics = $._decode_implicit<EnhancedDiagnostics>(() => _decode_EnhancedDiagnostics)(_el); },
        "cPCIoTEPSOptimisationIndicator": (_el: _Element): void => { cPCIoTEPSOptimisationIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "uNIPDUCPOnlyFlag": (_el: _Element): void => { uNIPDUCPOnlyFlag = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "servingPLMNRateControl": (_el: _Element): void => { servingPLMNRateControl = $._decode_implicit<ServingPLMNRateControl>(() => _decode_ServingPLMNRateControl)(_el); },
        "pDPPDNTypeExtension": (_el: _Element): void => { pDPPDNTypeExtension = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mOExceptionDataCounter": (_el: _Element): void => { mOExceptionDataCounter = $._decode_implicit<MOExceptionDataCounter>(() => _decode_MOExceptionDataCounter)(_el); },
        "listOfRANSecondaryRATUsageReports": (_el: _Element): void => { listOfRANSecondaryRATUsageReports = $._decode_implicit<RANSecondaryRATUsageReport[]>(() => $._decodeSequenceOf<RANSecondaryRATUsageReport>(() => _decode_RANSecondaryRATUsageReport))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SGWRecord,
        _extension_additions_list_spec_for_SGWRecord,
        _root_component_type_list_2_spec_for_SGWRecord,
        undefined,
    );
    return new SGWRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        s_GWAddress,
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
        servedIMEI,
        rATType,
        mSTimeZone,
        userLocationInformation,
        sGWChange,
        servingNodeType,
        p_GWAddressUsed,
        p_GWPLMNIdentifier,
        startTime,
        stopTime,
        pDNConnectionChargingID,
        iMSIunauthenticatedFlag,
        userCSGInformation,
        servedPDPPDNAddressExt,
        lowPriorityIndicator,
        dynamicAddressFlagExt,
        s_GWiPv6Address,
        servingNodeiPv6Address,
        p_GWiPv6AddressUsed,
        retransmission,
        userLocationInfoTime,
        cNOperatorSelectionEnt,
        presenceReportingAreaInfo,
        lastUserLocationInformation,
        lastMSTimeZone,
        enhancedDiagnostics,
        cPCIoTEPSOptimisationIndicator,
        uNIPDUCPOnlyFlag,
        servingPLMNRateControl,
        pDPPDNTypeExtension,
        mOExceptionDataCounter,
        listOfRANSecondaryRATUsageReports
    );
}; }
    return _cached_decoder_for_SGWRecord(el);
}

let _cached_encoder_for_SGWRecord: $.ASN1Encoder<SGWRecord> | null = null;

/**
 * @summary Encodes a(n) SGWRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SGWRecord, encoded as an ASN.1 Element.
 */
export
function _encode_SGWRecord (value: SGWRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SGWRecord) { _cached_encoder_for_SGWRecord = function (value: SGWRecord, _elGetter: $.ASN1Encoder<SGWRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.servedIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_GSNAddress, $.BER)(value.s_GWAddress, $.BER));
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
    if (value.sGWChange !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeBoolean, $.BER)(value.sGWChange, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 35, () => $._encodeSequenceOf<ServingNodeType>(() => _encode_ServingNodeType, $.BER), $.BER)(value.servingNodeType, $.BER));
    if (value.p_GWAddressUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 36, () => _encode_GSNAddress, $.BER)(value.p_GWAddressUsed, $.BER));
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
    if (value.pDNConnectionChargingID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => $._encodeInteger, $.BER)(value.pDNConnectionChargingID, $.BER));
    }
    if (value.iMSIunauthenticatedFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 41, () => $._encodeNull, $.BER)(value.iMSIunauthenticatedFlag, $.BER));
    }
    if (value.userCSGInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 42, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER));
    }
    if (value.servedPDPPDNAddressExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 43, () => _encode_PDPAddress, $.BER)(value.servedPDPPDNAddressExt, $.BER));
    }
    if (value.lowPriorityIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 44, () => $._encodeNull, $.BER)(value.lowPriorityIndicator, $.BER));
    }
    if (value.dynamicAddressFlagExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeBoolean, $.BER)(value.dynamicAddressFlagExt, $.BER));
    }
    if (value.s_GWiPv6Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 48, () => _encode_GSNAddress, $.BER)(value.s_GWiPv6Address, $.BER));
    }
    if (value.servingNodeiPv6Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 49, () => $._encodeSequenceOf<GSNAddress>(() => _encode_GSNAddress, $.BER), $.BER)(value.servingNodeiPv6Address, $.BER));
    }
    if (value.p_GWiPv6AddressUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 50, () => _encode_GSNAddress, $.BER)(value.p_GWiPv6AddressUsed, $.BER));
    }
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 51, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.userLocationInfoTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 52, () => $._encodeOctetString, $.BER)(value.userLocationInfoTime, $.BER));
    }
    if (value.cNOperatorSelectionEnt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 53, () => _encode_CNOperatorSelectionEntity, $.BER)(value.cNOperatorSelectionEnt, $.BER));
    }
    if (value.presenceReportingAreaInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 54, () => _encode_PresenceReportingAreaInfo, $.BER)(value.presenceReportingAreaInfo, $.BER));
    }
    if (value.lastUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => $._encodeOctetString, $.BER)(value.lastUserLocationInformation, $.BER));
    }
    if (value.lastMSTimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => $._encodeOctetString, $.BER)(value.lastMSTimeZone, $.BER));
    }
    if (value.enhancedDiagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 57, () => _encode_EnhancedDiagnostics, $.BER)(value.enhancedDiagnostics, $.BER));
    }
    if (value.cPCIoTEPSOptimisationIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 59, () => $._encodeBoolean, $.BER)(value.cPCIoTEPSOptimisationIndicator, $.BER));
    }
    if (value.uNIPDUCPOnlyFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 60, () => $._encodeBoolean, $.BER)(value.uNIPDUCPOnlyFlag, $.BER));
    }
    if (value.servingPLMNRateControl !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 61, () => _encode_ServingPLMNRateControl, $.BER)(value.servingPLMNRateControl, $.BER));
    }
    if (value.pDPPDNTypeExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 62, () => $._encodeInteger, $.BER)(value.pDPPDNTypeExtension, $.BER));
    }
    if (value.mOExceptionDataCounter !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 63, () => _encode_MOExceptionDataCounter, $.BER)(value.mOExceptionDataCounter, $.BER));
    }
    if (value.listOfRANSecondaryRATUsageReports !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 64, () => $._encodeSequenceOf<RANSecondaryRATUsageReport>(() => _encode_RANSecondaryRATUsageReport, $.BER), $.BER)(value.listOfRANSecondaryRATUsageReports, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_SGWRecord(value, elGetter);
}


/* eslint-enable */
