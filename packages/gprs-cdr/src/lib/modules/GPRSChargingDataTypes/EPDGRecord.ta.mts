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
import { EnhancedDiagnostics, _decode_EnhancedDiagnostics, _encode_EnhancedDiagnostics } from "../GPRSChargingDataTypes/EnhancedDiagnostics.ta.mjs";
import { UWANUserLocationInfo, _decode_UWANUserLocationInfo, _encode_UWANUserLocationInfo } from "../GPRSChargingDataTypes/UWANUserLocationInfo.ta.mjs";


/**
 * @summary EPDGRecord
 * @description
 *
 * ePDG-CDR. IP-CAN bearer charging data collected by the ePDG (clause
 * 5.2.3.8 and table 6.1.13.1). If Charging Characteristics activate CDR
 * generation, the ePDG opens the record at IP-CAN bearer activation. List
 * of Traffic Data Volumes counts uplink and downlink volume per QoS.
 * Containers are added on QoS change, tariff time change, a change of UWAN
 * user location (for example the UE local IP address), and CDR closure
 * (table 5.2.3.8.1.1). changeCondition is omitted on a container added for
 * CDR closure, except when closure is due to the maximum number of
 * charging-condition changes. The ePDG closes the CDR when the bearer ends
 * (termination, abnormal release, or inter serving node change) or for a
 * partial-record reason (volume limit, time limit, maximum number of
 * charging-condition changes, or management intervention). If the bearer
 * remains active, the next ePDG-CDR uses an incremented sequence number.
 *
 * 3GPP TS 32.251 V19.0.0.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPDGRecord ::= SET {
 *    recordType                    [0] IMPLICIT RecordType,
 *    servedIMSI                    [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    ePDGAddressUsed               [4] GSNAddress,
 *    chargingID                    [5] IMPLICIT INTEGER ( 0 .. 4294967295 ),
 *    accessPointNameNI             [7] IMPLICIT IA5String  ( SIZE( 1 .. 63 ) ) OPTIONAL,
 *    pdpPDNType                    [8] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    servedPDPPDNAddress           [9] PDPAddress OPTIONAL,
 *    dynamicAddressFlag            [11] IMPLICIT BOOLEAN OPTIONAL,
 *    listOfTrafficVolumes          [12] IMPLICIT SEQUENCE  OF
 *       ChangeOfCharCondition OPTIONAL,
 *    recordOpeningTime             [13] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    duration                      [14] IMPLICIT INTEGER,
 *    causeForRecClosing            [15] IMPLICIT CauseForRecClosing,
 *    diagnostics                   [16] Diagnostics OPTIONAL,
 *    recordSequenceNumber          [17] IMPLICIT INTEGER OPTIONAL,
 *    nodeID                        [18] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordExtensions              [19] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    localSequenceNumber           [20] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    apnSelectionMode              [21] IMPLICIT APNSelectionMode OPTIONAL,
 *    servedMSISDN                  [22] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    chargingCharacteristics       [23] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    chChSelectionMode             [24] IMPLICIT ChChSelectionMode OPTIONAL,
 *    iMSsignalingContext           [25] IMPLICIT NULL OPTIONAL,
 *    servedIMEI                    [29] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    rATType                       [30] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    sGWChange                     [34] IMPLICIT BOOLEAN OPTIONAL,
 *    p-GWAddressUsed               [36] GSNAddress OPTIONAL,
 *    p-GWPLMNIdentifier            [37] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    startTime                     [38] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    stopTime                      [39] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    pDNConnectionChargingID       [40] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    servedPDPPDNAddressExt        [43] PDPAddress OPTIONAL,
 *    dynamicAddressFlagExt         [47] IMPLICIT BOOLEAN OPTIONAL,
 *    ePDGiPv6AddressUsed           [48] GSNAddress OPTIONAL,
 *    p-GWiPv6AddressUsed           [50] GSNAddress OPTIONAL,
 *    retransmission                [51] IMPLICIT NULL OPTIONAL,
 *    enhancedDiagnostics           [52] IMPLICIT EnhancedDiagnostics OPTIONAL,
 *    uWANUserLocationInformation   [53] IMPLICIT UWANUserLocationInfo OPTIONAL,
 *    userLocationInfoTime          [54] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    iMSIunauthenticatedFlag       [55] IMPLICIT NULL OPTIONAL}
 * ```
 * 
 * @class
 */
export
class EPDGRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * The field identifies the type of the record e.g. S-CDR, SGW-CDR, PGW-CDR,
     * M-CDR, S-SMO-CDR, TDF-CDR, IPE-CDR and S-SMT-CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.51.
     *
     * ePDG-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category C (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
     *
     * @public
     * @readonly
     */
    readonly servedIMSI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `ePDGAddressUsed`.
     * @description
     *
     * This field is the serving ePDG IP Address for the Control Plane. If both
     * an IPv4 and an IPv6 address of the ePDG is available, the ePDG shall
     * include the IPv4 address in the CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.13C.
     *
     * ePDG-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
     *
     * @public
     * @readonly
     */
    readonly ePDGAddressUsed: GSNAddress;
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
     * ePDG-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
     *
     * @public
     * @readonly
     */
    readonly chargingID: INTEGER;
    /**
     * @summary `accessPointNameNI`.
     * @description
     *
     * The logical name of the connected access point to the external packet
     * data network (network identifier part of APN).
     *
     * ePDG-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * IPv6 or IPv4v6.
     *
     * ePDG-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category C (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
     *
     * @public
     * @readonly
     */
    readonly iMSsignalingContext: OPTIONAL<NULL>;
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
     * ePDG-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
     *
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
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
     * ePDG-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
     *
     * @public
     * @readonly
     */
    readonly sGWChange: OPTIONAL<BOOLEAN>;
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
     * ePDG-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category Oc (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
     *
     * @public
     * @readonly
     */
    readonly pDNConnectionChargingID: OPTIONAL<INTEGER>;
    /**
     * @summary `servedPDPPDNAddressExt`.
     * @description
     *
     * This field holds IPv4 address of the served IMSI, if available, when PDN
     * type is IPv4v6.
     *
     * ePDG-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
     *
     * @public
     * @readonly
     */
    readonly servedPDPPDNAddressExt: OPTIONAL<PDPAddress>;
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
     * ePDG-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
     *
     * @public
     * @readonly
     */
    readonly dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    /**
     * @summary `ePDGiPv6AddressUsed`.
     * @description
     *
     * The control plane IPv6 address, in case of IPv4v6 dual stack, of the
     * ePDG.
     *
     * ePDG-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
     *
     * @public
     * @readonly
     */
    readonly ePDGiPv6AddressUsed: OPTIONAL<GSNAddress>;
    /**
     * @summary `p_GWiPv6AddressUsed`.
     * @description
     *
     * This field is the P-GW IPv6 Address, in case of IPv4v6 dual stack, for
     * the Control Plane.
     *
     * ePDG-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
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
     * ePDG-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
     *
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
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
     * ePDG-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
     *
     * @public
     * @readonly
     */
    readonly enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>;
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
     * ePDG-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
     *
     * @public
     * @readonly
     */
    readonly uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;
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
     * ePDG-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
     *
     * @public
     * @readonly
     */
    readonly userLocationInfoTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iMSIunauthenticatedFlag`.
     * @description
     *
     * This field indicates the provided served IMSI is not authenticated
     * (emergency bearer service situation).
     *
     * ePDG-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.13.1).
     *
     * @public
     * @readonly
     */
    readonly iMSIunauthenticatedFlag: OPTIONAL<NULL>;

    constructor (
        recordType: RecordType,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        ePDGAddressUsed: GSNAddress,
        chargingID: INTEGER,
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
        chChSelectionMode?: OPTIONAL<ChChSelectionMode>,
        iMSsignalingContext?: OPTIONAL<NULL>,
        servedIMEI?: OPTIONAL<OCTET_STRING>,
        rATType?: OPTIONAL<INTEGER>,
        sGWChange?: OPTIONAL<BOOLEAN>,
        p_GWAddressUsed?: OPTIONAL<GSNAddress>,
        p_GWPLMNIdentifier?: OPTIONAL<OCTET_STRING>,
        startTime?: OPTIONAL<OCTET_STRING>,
        stopTime?: OPTIONAL<OCTET_STRING>,
        pDNConnectionChargingID?: OPTIONAL<INTEGER>,
        servedPDPPDNAddressExt?: OPTIONAL<PDPAddress>,
        dynamicAddressFlagExt?: OPTIONAL<BOOLEAN>,
        ePDGiPv6AddressUsed?: OPTIONAL<GSNAddress>,
        p_GWiPv6AddressUsed?: OPTIONAL<GSNAddress>,
        retransmission?: OPTIONAL<NULL>,
        enhancedDiagnostics?: OPTIONAL<EnhancedDiagnostics>,
        uWANUserLocationInformation?: OPTIONAL<UWANUserLocationInfo>,
        userLocationInfoTime?: OPTIONAL<OCTET_STRING>,
        iMSIunauthenticatedFlag?: OPTIONAL<NULL>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.ePDGAddressUsed = ePDGAddressUsed;
        this.chargingID = chargingID;
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
        this.servedIMEI = servedIMEI;
        this.rATType = rATType;
        this.sGWChange = sGWChange;
        this.p_GWAddressUsed = p_GWAddressUsed;
        this.p_GWPLMNIdentifier = p_GWPLMNIdentifier;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.pDNConnectionChargingID = pDNConnectionChargingID;
        this.servedPDPPDNAddressExt = servedPDPPDNAddressExt;
        this.dynamicAddressFlagExt = dynamicAddressFlagExt;
        this.ePDGiPv6AddressUsed = ePDGiPv6AddressUsed;
        this.p_GWiPv6AddressUsed = p_GWiPv6AddressUsed;
        this.retransmission = retransmission;
        this.enhancedDiagnostics = enhancedDiagnostics;
        this.uWANUserLocationInformation = uWANUserLocationInformation;
        this.userLocationInfoTime = userLocationInfoTime;
        this.iMSIunauthenticatedFlag = iMSIunauthenticatedFlag;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("EPDGRecord.servedIMSI violates SIZE constraint");
        }
        if ((this.chargingID < 0 || this.chargingID > 4294967295)) {
            throw new ASN1OverflowError("EPDGRecord.chargingID violates INTEGER range");
        }
        if (this.accessPointNameNI !== undefined && (this.accessPointNameNI.length < 1 || this.accessPointNameNI.length > 63)) {
            throw new ASN1SizeError("EPDGRecord.accessPointNameNI violates SIZE constraint");
        }
        if (this.pdpPDNType !== undefined && (this.pdpPDNType.length !== 2)) {
            throw new ASN1SizeError("EPDGRecord.pdpPDNType violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("EPDGRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("EPDGRecord.nodeID violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("EPDGRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("EPDGRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("EPDGRecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("EPDGRecord.servedIMEI violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("EPDGRecord.rATType violates INTEGER range");
        }
        if (this.p_GWPLMNIdentifier !== undefined && (this.p_GWPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("EPDGRecord.p_GWPLMNIdentifier violates SIZE constraint");
        }
        if (this.startTime !== undefined && (this.startTime.length !== 9)) {
            throw new ASN1SizeError("EPDGRecord.startTime violates SIZE constraint");
        }
        if (this.stopTime !== undefined && (this.stopTime.length !== 9)) {
            throw new ASN1SizeError("EPDGRecord.stopTime violates SIZE constraint");
        }
        if (this.pDNConnectionChargingID !== undefined && (this.pDNConnectionChargingID < 0 || this.pDNConnectionChargingID > 4294967295)) {
            throw new ASN1OverflowError("EPDGRecord.pDNConnectionChargingID violates INTEGER range");
        }
        if (this.userLocationInfoTime !== undefined && (this.userLocationInfoTime.length !== 9)) {
            throw new ASN1SizeError("EPDGRecord.userLocationInfoTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a EPDGRecord
     * @description
     * 
     * This takes an `object` and converts it to a `EPDGRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPDGRecord`.
     * @returns {EPDGRecord}
     */
    public static _from_object (_o: { [_K in keyof (EPDGRecord)]: (EPDGRecord)[_K] }): EPDGRecord {
        return new EPDGRecord(_o.recordType, _o.servedIMSI, _o.ePDGAddressUsed, _o.chargingID, _o.accessPointNameNI, _o.pdpPDNType, _o.servedPDPPDNAddress, _o.dynamicAddressFlag, _o.listOfTrafficVolumes, _o.recordOpeningTime, _o.duration, _o.causeForRecClosing, _o.diagnostics, _o.recordSequenceNumber, _o.nodeID, _o.recordExtensions, _o.localSequenceNumber, _o.apnSelectionMode, _o.servedMSISDN, _o.chargingCharacteristics, _o.chChSelectionMode, _o.iMSsignalingContext, _o.servedIMEI, _o.rATType, _o.sGWChange, _o.p_GWAddressUsed, _o.p_GWPLMNIdentifier, _o.startTime, _o.stopTime, _o.pDNConnectionChargingID, _o.servedPDPPDNAddressExt, _o.dynamicAddressFlagExt, _o.ePDGiPv6AddressUsed, _o.p_GWiPv6AddressUsed, _o.retransmission, _o.enhancedDiagnostics, _o.uWANUserLocationInformation, _o.userLocationInfoTime, _o.iMSIunauthenticatedFlag);
    }

        /**
         * @summary The enum used as the type of the component `apnSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_apnSelectionMode: typeof _enum_for_APNSelectionMode = _enum_for_APNSelectionMode;        /**
         * @summary The enum used as the type of the component `chChSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_chChSelectionMode: typeof _enum_for_ChChSelectionMode = _enum_for_ChChSelectionMode;
}

/**
 * @summary The Leading Root Component Types of EPDGRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPDGRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("ePDGAddressUsed", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("chargingID", false, $.hasTag(_TagClass.context, 5)),
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
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("sGWChange", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("p-GWAddressUsed", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("p-GWPLMNIdentifier", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("stopTime", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("pDNConnectionChargingID", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("servedPDPPDNAddressExt", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("dynamicAddressFlagExt", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("ePDGiPv6AddressUsed", true, $.hasTag(_TagClass.context, 48)),
    new $.ComponentSpec("p-GWiPv6AddressUsed", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("enhancedDiagnostics", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("uWANUserLocationInformation", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("userLocationInfoTime", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("iMSIunauthenticatedFlag", true, $.hasTag(_TagClass.context, 55))
];

/**
 * @summary The Trailing Root Component Types of EPDGRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPDGRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPDGRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPDGRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPDGRecord: $.ASN1Decoder<EPDGRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPDGRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPDGRecord (el: _Element): EPDGRecord {
    if (!_cached_decoder_for_EPDGRecord) { _cached_decoder_for_EPDGRecord = function (el: _Element): EPDGRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let ePDGAddressUsed!: GSNAddress;
    let chargingID!: INTEGER;
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
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<INTEGER>;
    let sGWChange: OPTIONAL<BOOLEAN>;
    let p_GWAddressUsed: OPTIONAL<GSNAddress>;
    let p_GWPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let startTime: OPTIONAL<OCTET_STRING>;
    let stopTime: OPTIONAL<OCTET_STRING>;
    let pDNConnectionChargingID: OPTIONAL<INTEGER>;
    let servedPDPPDNAddressExt: OPTIONAL<PDPAddress>;
    let dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    let ePDGiPv6AddressUsed: OPTIONAL<GSNAddress>;
    let p_GWiPv6AddressUsed: OPTIONAL<GSNAddress>;
    let retransmission: OPTIONAL<NULL>;
    let enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>;
    let uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;
    let userLocationInfoTime: OPTIONAL<OCTET_STRING>;
    let iMSIunauthenticatedFlag: OPTIONAL<NULL>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "ePDGAddressUsed": (_el: _Element): void => { ePDGAddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "chargingID": (_el: _Element): void => { chargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
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
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sGWChange": (_el: _Element): void => { sGWChange = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "p-GWAddressUsed": (_el: _Element): void => { p_GWAddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "p-GWPLMNIdentifier": (_el: _Element): void => { p_GWPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "stopTime": (_el: _Element): void => { stopTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pDNConnectionChargingID": (_el: _Element): void => { pDNConnectionChargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "servedPDPPDNAddressExt": (_el: _Element): void => { servedPDPPDNAddressExt = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "dynamicAddressFlagExt": (_el: _Element): void => { dynamicAddressFlagExt = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "ePDGiPv6AddressUsed": (_el: _Element): void => { ePDGiPv6AddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "p-GWiPv6AddressUsed": (_el: _Element): void => { p_GWiPv6AddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "enhancedDiagnostics": (_el: _Element): void => { enhancedDiagnostics = $._decode_implicit<EnhancedDiagnostics>(() => _decode_EnhancedDiagnostics)(_el); },
        "uWANUserLocationInformation": (_el: _Element): void => { uWANUserLocationInformation = $._decode_implicit<UWANUserLocationInfo>(() => _decode_UWANUserLocationInfo)(_el); },
        "userLocationInfoTime": (_el: _Element): void => { userLocationInfoTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "iMSIunauthenticatedFlag": (_el: _Element): void => { iMSIunauthenticatedFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_EPDGRecord,
        _extension_additions_list_spec_for_EPDGRecord,
        _root_component_type_list_2_spec_for_EPDGRecord,
        undefined,
    );
    return new EPDGRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        ePDGAddressUsed,
        chargingID,
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
        servedIMEI,
        rATType,
        sGWChange,
        p_GWAddressUsed,
        p_GWPLMNIdentifier,
        startTime,
        stopTime,
        pDNConnectionChargingID,
        servedPDPPDNAddressExt,
        dynamicAddressFlagExt,
        ePDGiPv6AddressUsed,
        p_GWiPv6AddressUsed,
        retransmission,
        enhancedDiagnostics,
        uWANUserLocationInformation,
        userLocationInfoTime,
        iMSIunauthenticatedFlag
    );
}; }
    return _cached_decoder_for_EPDGRecord(el);
}

let _cached_encoder_for_EPDGRecord: $.ASN1Encoder<EPDGRecord> | null = null;

/**
 * @summary Encodes a(n) EPDGRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPDGRecord, encoded as an ASN.1 Element.
 */
export
function _encode_EPDGRecord (value: EPDGRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPDGRecord) { _cached_encoder_for_EPDGRecord = function (value: EPDGRecord, _elGetter: $.ASN1Encoder<EPDGRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.servedIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_GSNAddress, $.BER)(value.ePDGAddressUsed, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.chargingID, $.BER));
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
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.sGWChange !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeBoolean, $.BER)(value.sGWChange, $.BER));
    }
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
    if (value.servedPDPPDNAddressExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 43, () => _encode_PDPAddress, $.BER)(value.servedPDPPDNAddressExt, $.BER));
    }
    if (value.dynamicAddressFlagExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeBoolean, $.BER)(value.dynamicAddressFlagExt, $.BER));
    }
    if (value.ePDGiPv6AddressUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 48, () => _encode_GSNAddress, $.BER)(value.ePDGiPv6AddressUsed, $.BER));
    }
    if (value.p_GWiPv6AddressUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 50, () => _encode_GSNAddress, $.BER)(value.p_GWiPv6AddressUsed, $.BER));
    }
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 51, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.enhancedDiagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 52, () => _encode_EnhancedDiagnostics, $.BER)(value.enhancedDiagnostics, $.BER));
    }
    if (value.uWANUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 53, () => _encode_UWANUserLocationInfo, $.BER)(value.uWANUserLocationInformation, $.BER));
    }
    if (value.userLocationInfoTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 54, () => $._encodeOctetString, $.BER)(value.userLocationInfoTime, $.BER));
    }
    if (value.iMSIunauthenticatedFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => $._encodeNull, $.BER)(value.iMSIunauthenticatedFlag, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_EPDGRecord(value, elGetter);
}


/* eslint-enable */
