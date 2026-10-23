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
import { ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../GPRSChargingDataTypes/ChChSelectionMode.ta.mjs";
import { PSFurnishChargingInformation, _decode_PSFurnishChargingInformation, _encode_PSFurnishChargingInformation } from "../GPRSChargingDataTypes/PSFurnishChargingInformation.ta.mjs";
import { ChangeOfServiceCondition, _decode_ChangeOfServiceCondition, _encode_ChangeOfServiceCondition } from "../GPRSChargingDataTypes/ChangeOfServiceCondition.ta.mjs";
import { SubscriptionID, _decode_SubscriptionID, _encode_SubscriptionID } from "../GPRSChargingDataTypes/SubscriptionID.ta.mjs";
import { AccessLineIdentifier, _decode_AccessLineIdentifier, _encode_AccessLineIdentifier } from "../GPRSChargingDataTypes/AccessLineIdentifier.ta.mjs";
import { FixedUserLocationInformation, _decode_FixedUserLocationInformation, _encode_FixedUserLocationInformation } from "../GPRSChargingDataTypes/FixedUserLocationInformation.ta.mjs";


/**
 * @summary IPERecord
 * @description
 *
 * IPE-CDR. FBC IP-CAN session charging data collected by the IP-Edge
 * [PCEF] in the convergent fixed-mobile case of annex D (clause D.3.2.3.1
 * and table D.4.1.2.1.1). Annex D applies the main body except where it
 * states an exception: P-GW is read as IP-Edge [PCEF], IP-CAN bearer as
 * IP-CAN session, and PGW-CDR as IPE-CDR. The IP-Edge does not support
 * individual bearers, so requirements that refer to a bearer apply to the
 * session, and usage is also categorised per QoS. Charging covers traffic
 * from fixed devices and non-seamless WLAN offload from a 3GPP UE. A 3GPP
 * UE is identified by IMSI; a fixed device or RG is identified by the
 * subscriber id of Broadband Forum TR 134. When session charging is
 * active, List of Traffic Data Volumes counts volume per QoS and a
 * container is added when that QoS ends, on tariff time change, on a
 * per-QoS time or volume limit, and on CDR closure (table D.3.2.3.1.1.1).
 * changeCondition is omitted on CDR closure except when closure is due to
 * the maximum number of charging-condition changes. The same IPE-CDR
 * carries FBC service-data containers when both session charging and FBC
 * are active.
 *
 * 3GPP TS 32.251 V19.0.0.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPERecord ::= SET {
 *    recordType                     [0] IMPLICIT RecordType,
 *    servedIMSI                     [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    iPEdgeAddress                  [4] GSNAddress,
 *    chargingID                     [5] IMPLICIT INTEGER ( 0 .. 4294967295 ),
 *    accessPointNameNI              [7] IMPLICIT IA5String  ( SIZE( 1 .. 63 ) ) OPTIONAL,
 *    iPCANsessionType               [8] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    servedIPCANsessionAddress      [9] PDPAddress OPTIONAL,
 *    dynamicAddressFlag             [11] IMPLICIT BOOLEAN OPTIONAL,
 *    listOfTrafficVolumes           [12] IMPLICIT SEQUENCE  OF
 *       ChangeOfCharCondition OPTIONAL,
 *    recordOpeningTime              [13] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    duration                       [14] IMPLICIT INTEGER,
 *    causeForRecClosing             [15] IMPLICIT CauseForRecClosing,
 *    diagnostics                    [16] Diagnostics OPTIONAL,
 *    recordSequenceNumber           [17] IMPLICIT INTEGER OPTIONAL,
 *    nodeID                         [18] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordExtensions               [19] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    localSequenceNumber            [20] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    servedMSISDN                   [22] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    chargingCharacteristics        [23] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    chChSelectionMode              [24] IMPLICIT ChChSelectionMode OPTIONAL,
 *    pSFurnishChargingInformation   [28] IMPLICIT PSFurnishChargingInformation OPTIONAL,
 *    servedIMEI                     [29] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    listOfServiceData              [34] IMPLICIT SEQUENCE  OF
 *       ChangeOfServiceCondition OPTIONAL,
 *    servedMNNAI                    [36] IMPLICIT SubscriptionID OPTIONAL,
 *    iPEdgeOperatorIdentifier       [37] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    startTime                      [38] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    stopTime                       [39] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    servedIPCANsessionAddressExt   [45] PDPAddress OPTIONAL,
 *    dynamicAddressFlagExt          [47] IMPLICIT BOOLEAN OPTIONAL,
 *    iPEdgeiPv6AddressUsed          [50] GSNAddress OPTIONAL,
 *    retransmission                 [52] IMPLICIT NULL OPTIONAL,
 *    servedFixedSubsID              [55] IMPLICIT OCTET STRING OPTIONAL,
 *    accessLineIdentifier           [56] IMPLICIT AccessLineIdentifier OPTIONAL,
 *    fixedUserLocationInformation   [57] IMPLICIT FixedUserLocationInformation OPTIONAL}
 * ```
 * 
 * @class
 */
export
class IPERecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * The field identifies the type of the record e.g. S-CDR, SGW-CDR, PGW-CDR,
     * M-CDR, S-SMO-CDR, TDF-CDR, IPE-CDR and S-SMT-CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.51.
     *
     * IPE-CDR field category M (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
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
     * IPE-CDR field category C (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
     *
     * @public
     * @readonly
     */
    readonly servedIMSI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iPEdgeAddress`.
     * @description
     *
     * This field is the IP-Edge IP Address used for the Control Plane. If both
     * an IPv4 and an IPv6 addresses of the IP-Edge are available, the field
     * shall include the IPv4 address.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.18C.
     *
     * IPE-CDR field category M (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
     *
     * @public
     * @readonly
     */
    readonly iPEdgeAddress: GSNAddress;
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
     * IPE-CDR field category M (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
     *
     * @public
     * @readonly
     */
    readonly chargingID: INTEGER;
    /**
     * @summary `accessPointNameNI`.
     * @description
     *
     * This field holds the logical name of the connected access point to the
     * external packet data network (network identifier part of APN) reflecting
     * the "NSWO APN”, when the served user is a 3GPP UE.
     *
     * IPE-CDR field category OM (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
     *
     * @public
     * @readonly
     */
    readonly accessPointNameNI: OPTIONAL<IA5String>;
    /**
     * @summary `iPCANsessionType`.
     * @description
     *
     * IPCAN session type, i.e. IPv4, IPv6, IPv4v6 , or PDN type PPP.
     *
     * IPE-CDR field category OM (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
     *
     * @public
     * @readonly
     */
    readonly iPCANsessionType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedIPCANsessionAddress`.
     * @description
     *
     * IP address allocated for the IPCAN session, i.e. IPv4 address when IPCAN
     * session is IPv4 or IPv6 prefix when IP-CAN session is IPv6 or IPv4v6.
     *
     * IPE-CDR field category OC (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
     *
     * @public
     * @readonly
     */
    readonly servedIPCANsessionAddress: OPTIONAL<PDPAddress>;
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
     * IPE-CDR field category OC (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
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
     * IPE-CDR field category OC (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
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
     * IPE-CDR field category M (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
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
     * IPE-CDR field category M (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
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
     * IPE-CDR field category M (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
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
     * IPE-CDR field category OM (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
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
     * IPE-CDR field category C (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
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
     * IPE-CDR field category OM (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
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
     * IPE-CDR field category OC (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
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
     * IPE-CDR field category OM (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
     *
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
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
     * IPE-CDR field category Oc (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
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
     * IPE-CDR field category M (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
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
     * IPE-CDR field category OM (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
     *
     * @public
     * @readonly
     */
    readonly chChSelectionMode: OPTIONAL<ChChSelectionMode>;
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
     * IPE-CDR field category OC (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
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
     * IPE-CDR field category OC (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
     *
     * @public
     * @readonly
     */
    readonly servedIMEI: OPTIONAL<OCTET_STRING>;
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
     * IPE-CDR field category OM (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
     *
     * @public
     * @readonly
     */
    readonly listOfServiceData: OPTIONAL<ChangeOfServiceCondition[]>;
    /**
     * @summary `servedMNNAI`.
     * @description
     *
     * Mobile Node Identifier in NAI format (based on IMSI), if available.
     *
     * IPE-CDR field category OC (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
     *
     * @public
     * @readonly
     */
    readonly servedMNNAI: OPTIONAL<SubscriptionID>;
    /**
     * @summary `iPEdgeOperatorIdentifier`.
     * @description
     *
     * This field is the PMLN Identifier (Mobile Country Code and Mobile Network
     * Code) of the Convergent Fixed-Mobile Operator owning the IP-Edge located
     * in Fixed Broadband Access. The MCC and MNC are coded as described for
     * "User Location Info" in TS 29.274 [223].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.18D.
     *
     * IPE-CDR field category Oc (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
     *
     * @public
     * @readonly
     */
    readonly iPEdgeOperatorIdentifier: OPTIONAL<OCTET_STRING>;
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
     * IPE-CDR field category OC (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
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
     * IPE-CDR field category OC (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
     *
     * @public
     * @readonly
     */
    readonly stopTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedIPCANsessionAddressExt`.
     * @description
     *
     * This field holds IPv4 address of the served subscriber, if available,
     * when IP-CAN session type is IPv4v6.
     *
     * IPE-CDR field category OC (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
     *
     * @public
     * @readonly
     */
    readonly servedIPCANsessionAddressExt: OPTIONAL<PDPAddress>;
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
     * IPE-CDR field category OC (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
     *
     * @public
     * @readonly
     */
    readonly dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    /**
     * @summary `iPEdgeiPv6AddressUsed`.
     * @description
     *
     * The control plane IPv6 address, in case of IPv4v6 dual stack, of the
     * IP-Edge used.
     *
     * IPE-CDR field category OC (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
     *
     * @public
     * @readonly
     */
    readonly iPEdgeiPv6AddressUsed: OPTIONAL<GSNAddress>;
    /**
     * @summary `retransmission`.
     * @description
     *
     * This parameter, when present, indicates that information from
     * retransmitted Diameter ACRs has been used in this CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.52A.
     *
     * IPE-CDR field category OC (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
     *
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
    /**
     * @summary `servedFixedSubsID`.
     * @description
     *
     * This field contains the subscriber identity, as defined in Broadband Forum
     * TR 134 [601], used by the Fixed User (i.e. Fixed Device or RG) for
     * Subscriber IP session in fixed broadband access network.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.57A.
     *
     * IPE-CDR field category C (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
     *
     * @public
     * @readonly
     */
    readonly servedFixedSubsID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `accessLineIdentifier`.
     * @description
     *
     * This field contains the Access line id (physical and logical circuit ID)
     * serving the 3GPP UE or fixed user (i.e. Fixed device or RG). This field
     * contains the Access line id (physical and logical circuit ID): serving the
     * 3GPP UE or fixed device, behind the RG when in bridge mode or in routed
     * mode without NAT, or of the RG when in routed mode with NAT; of the access
     * point to which the UE is attached, in trusted or untrusted WLAN.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.0A.
     *
     * IPE-CDR field category OM (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
     *
     * @public
     * @readonly
     */
    readonly accessLineIdentifier: OPTIONAL<AccessLineIdentifier>;
    /**
     * @summary `fixedUserLocationInformation`.
     * @description
     *
     * This field contains the UE location in a fixed broadband access network.
     * The location of the subscriber may include Access line id (physical and
     * logical circuit ID) defined in ETSI TS 283 034 [314], SSID and BSSID of
     * the Access Point, defined in IEEE Std 802.11-2012 [408].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.15A.
     *
     * IPE-CDR field category OC (3GPP TS 32.251 V19.0.0 table D.4.1.2.1.1).
     *
     * @public
     * @readonly
     */
    readonly fixedUserLocationInformation: OPTIONAL<FixedUserLocationInformation>;

    constructor (
        recordType: RecordType,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        iPEdgeAddress: GSNAddress,
        chargingID: INTEGER,
        accessPointNameNI: OPTIONAL<IA5String>,
        iPCANsessionType: OPTIONAL<OCTET_STRING>,
        servedIPCANsessionAddress: OPTIONAL<PDPAddress>,
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
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        chargingCharacteristics: OCTET_STRING,
        chChSelectionMode: OPTIONAL<ChChSelectionMode>,
        pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        listOfServiceData: OPTIONAL<ChangeOfServiceCondition[]>,
        servedMNNAI: OPTIONAL<SubscriptionID>,
        iPEdgeOperatorIdentifier: OPTIONAL<OCTET_STRING>,
        startTime: OPTIONAL<OCTET_STRING>,
        stopTime: OPTIONAL<OCTET_STRING>,
        servedIPCANsessionAddressExt: OPTIONAL<PDPAddress>,
        dynamicAddressFlagExt: OPTIONAL<BOOLEAN>,
        iPEdgeiPv6AddressUsed: OPTIONAL<GSNAddress>,
        retransmission: OPTIONAL<NULL>,
        servedFixedSubsID: OPTIONAL<OCTET_STRING>,
        accessLineIdentifier: OPTIONAL<AccessLineIdentifier>,
        fixedUserLocationInformation: OPTIONAL<FixedUserLocationInformation>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.iPEdgeAddress = iPEdgeAddress;
        this.chargingID = chargingID;
        this.accessPointNameNI = accessPointNameNI;
        this.iPCANsessionType = iPCANsessionType;
        this.servedIPCANsessionAddress = servedIPCANsessionAddress;
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
        this.servedMSISDN = servedMSISDN;
        this.chargingCharacteristics = chargingCharacteristics;
        this.chChSelectionMode = chChSelectionMode;
        this.pSFurnishChargingInformation = pSFurnishChargingInformation;
        this.servedIMEI = servedIMEI;
        this.listOfServiceData = listOfServiceData;
        this.servedMNNAI = servedMNNAI;
        this.iPEdgeOperatorIdentifier = iPEdgeOperatorIdentifier;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.servedIPCANsessionAddressExt = servedIPCANsessionAddressExt;
        this.dynamicAddressFlagExt = dynamicAddressFlagExt;
        this.iPEdgeiPv6AddressUsed = iPEdgeiPv6AddressUsed;
        this.retransmission = retransmission;
        this.servedFixedSubsID = servedFixedSubsID;
        this.accessLineIdentifier = accessLineIdentifier;
        this.fixedUserLocationInformation = fixedUserLocationInformation;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("IPERecord.servedIMSI violates SIZE constraint");
        }
        if ((this.chargingID < 0 || this.chargingID > 4294967295)) {
            throw new ASN1OverflowError("IPERecord.chargingID violates INTEGER range");
        }
        if (this.accessPointNameNI !== undefined && (this.accessPointNameNI.length < 1 || this.accessPointNameNI.length > 63)) {
            throw new ASN1SizeError("IPERecord.accessPointNameNI violates SIZE constraint");
        }
        if (this.iPCANsessionType !== undefined && (this.iPCANsessionType.length !== 2)) {
            throw new ASN1SizeError("IPERecord.iPCANsessionType violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("IPERecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("IPERecord.nodeID violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("IPERecord.localSequenceNumber violates INTEGER range");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("IPERecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("IPERecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("IPERecord.servedIMEI violates SIZE constraint");
        }
        if (this.iPEdgeOperatorIdentifier !== undefined && (this.iPEdgeOperatorIdentifier.length !== 3)) {
            throw new ASN1SizeError("IPERecord.iPEdgeOperatorIdentifier violates SIZE constraint");
        }
        if (this.startTime !== undefined && (this.startTime.length !== 9)) {
            throw new ASN1SizeError("IPERecord.startTime violates SIZE constraint");
        }
        if (this.stopTime !== undefined && (this.stopTime.length !== 9)) {
            throw new ASN1SizeError("IPERecord.stopTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a IPERecord
     * @description
     * 
     * This takes an `object` and converts it to a `IPERecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPERecord`.
     * @returns {IPERecord}
     */
    public static _from_object (_o: { [_K in keyof (IPERecord)]: (IPERecord)[_K] }): IPERecord {
        return new IPERecord(_o.recordType, _o.servedIMSI, _o.iPEdgeAddress, _o.chargingID, _o.accessPointNameNI, _o.iPCANsessionType, _o.servedIPCANsessionAddress, _o.dynamicAddressFlag, _o.listOfTrafficVolumes, _o.recordOpeningTime, _o.duration, _o.causeForRecClosing, _o.diagnostics, _o.recordSequenceNumber, _o.nodeID, _o.recordExtensions, _o.localSequenceNumber, _o.servedMSISDN, _o.chargingCharacteristics, _o.chChSelectionMode, _o.pSFurnishChargingInformation, _o.servedIMEI, _o.listOfServiceData, _o.servedMNNAI, _o.iPEdgeOperatorIdentifier, _o.startTime, _o.stopTime, _o.servedIPCANsessionAddressExt, _o.dynamicAddressFlagExt, _o.iPEdgeiPv6AddressUsed, _o.retransmission, _o.servedFixedSubsID, _o.accessLineIdentifier, _o.fixedUserLocationInformation);
    }

        /**
         * @summary The enum used as the type of the component `chChSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_chChSelectionMode = _enum_for_ChChSelectionMode;
}

/**
 * @summary The Leading Root Component Types of IPERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPERecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iPEdgeAddress", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("chargingID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("accessPointNameNI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("iPCANsessionType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("servedIPCANsessionAddress", true, $.hasTag(_TagClass.context, 9)),
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
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("chargingCharacteristics", false, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("chChSelectionMode", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("pSFurnishChargingInformation", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("listOfServiceData", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("servedMNNAI", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("iPEdgeOperatorIdentifier", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("stopTime", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("servedIPCANsessionAddressExt", true, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("dynamicAddressFlagExt", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("iPEdgeiPv6AddressUsed", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("servedFixedSubsID", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("accessLineIdentifier", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("fixedUserLocationInformation", true, $.hasTag(_TagClass.context, 57))
];

/**
 * @summary The Trailing Root Component Types of IPERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPERecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPERecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IPERecord: $.ASN1Decoder<IPERecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPERecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPERecord (el: _Element): IPERecord {
    if (!_cached_decoder_for_IPERecord) { _cached_decoder_for_IPERecord = function (el: _Element): IPERecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let iPEdgeAddress!: GSNAddress;
    let chargingID!: INTEGER;
    let accessPointNameNI: OPTIONAL<IA5String>;
    let iPCANsessionType: OPTIONAL<OCTET_STRING>;
    let servedIPCANsessionAddress: OPTIONAL<PDPAddress>;
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
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let chargingCharacteristics!: OCTET_STRING;
    let chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    let pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let listOfServiceData: OPTIONAL<ChangeOfServiceCondition[]>;
    let servedMNNAI: OPTIONAL<SubscriptionID>;
    let iPEdgeOperatorIdentifier: OPTIONAL<OCTET_STRING>;
    let startTime: OPTIONAL<OCTET_STRING>;
    let stopTime: OPTIONAL<OCTET_STRING>;
    let servedIPCANsessionAddressExt: OPTIONAL<PDPAddress>;
    let dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    let iPEdgeiPv6AddressUsed: OPTIONAL<GSNAddress>;
    let retransmission: OPTIONAL<NULL>;
    let servedFixedSubsID: OPTIONAL<OCTET_STRING>;
    let accessLineIdentifier: OPTIONAL<AccessLineIdentifier>;
    let fixedUserLocationInformation: OPTIONAL<FixedUserLocationInformation>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "iPEdgeAddress": (_el: _Element): void => { iPEdgeAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "chargingID": (_el: _Element): void => { chargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "accessPointNameNI": (_el: _Element): void => { accessPointNameNI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "iPCANsessionType": (_el: _Element): void => { iPCANsessionType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIPCANsessionAddress": (_el: _Element): void => { servedIPCANsessionAddress = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
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
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chargingCharacteristics": (_el: _Element): void => { chargingCharacteristics = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chChSelectionMode": (_el: _Element): void => { chChSelectionMode = $._decode_implicit<ChChSelectionMode>(() => _decode_ChChSelectionMode)(_el); },
        "pSFurnishChargingInformation": (_el: _Element): void => { pSFurnishChargingInformation = $._decode_implicit<PSFurnishChargingInformation>(() => _decode_PSFurnishChargingInformation)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "listOfServiceData": (_el: _Element): void => { listOfServiceData = $._decode_implicit<ChangeOfServiceCondition[]>(() => $._decodeSequenceOf<ChangeOfServiceCondition>(() => _decode_ChangeOfServiceCondition))(_el); },
        "servedMNNAI": (_el: _Element): void => { servedMNNAI = $._decode_implicit<SubscriptionID>(() => _decode_SubscriptionID)(_el); },
        "iPEdgeOperatorIdentifier": (_el: _Element): void => { iPEdgeOperatorIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "stopTime": (_el: _Element): void => { stopTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIPCANsessionAddressExt": (_el: _Element): void => { servedIPCANsessionAddressExt = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "dynamicAddressFlagExt": (_el: _Element): void => { dynamicAddressFlagExt = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "iPEdgeiPv6AddressUsed": (_el: _Element): void => { iPEdgeiPv6AddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "servedFixedSubsID": (_el: _Element): void => { servedFixedSubsID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "accessLineIdentifier": (_el: _Element): void => { accessLineIdentifier = $._decode_implicit<AccessLineIdentifier>(() => _decode_AccessLineIdentifier)(_el); },
        "fixedUserLocationInformation": (_el: _Element): void => { fixedUserLocationInformation = $._decode_implicit<FixedUserLocationInformation>(() => _decode_FixedUserLocationInformation)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_IPERecord,
        _extension_additions_list_spec_for_IPERecord,
        _root_component_type_list_2_spec_for_IPERecord,
        undefined,
    );
    return new IPERecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        iPEdgeAddress,
        chargingID,
        accessPointNameNI,
        iPCANsessionType,
        servedIPCANsessionAddress,
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
        servedMSISDN,
        chargingCharacteristics,
        chChSelectionMode,
        pSFurnishChargingInformation,
        servedIMEI,
        listOfServiceData,
        servedMNNAI,
        iPEdgeOperatorIdentifier,
        startTime,
        stopTime,
        servedIPCANsessionAddressExt,
        dynamicAddressFlagExt,
        iPEdgeiPv6AddressUsed,
        retransmission,
        servedFixedSubsID,
        accessLineIdentifier,
        fixedUserLocationInformation
    );
}; }
    return _cached_decoder_for_IPERecord(el);
}

let _cached_encoder_for_IPERecord: $.ASN1Encoder<IPERecord> | null = null;

/**
 * @summary Encodes a(n) IPERecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPERecord, encoded as an ASN.1 Element.
 */
export
function _encode_IPERecord (value: IPERecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPERecord) { _cached_encoder_for_IPERecord = function (value: IPERecord, _elGetter: $.ASN1Encoder<IPERecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.servedIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_GSNAddress, $.BER)(value.iPEdgeAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.chargingID, $.BER));
    if (value.accessPointNameNI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeIA5String, $.BER)(value.accessPointNameNI, $.BER));
    }
    if (value.iPCANsessionType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.iPCANsessionType, $.BER));
    }
    if (value.servedIPCANsessionAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 9, () => _encode_PDPAddress, $.BER)(value.servedIPCANsessionAddress, $.BER));
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
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.chargingCharacteristics, $.BER));
    if (value.chChSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_ChChSelectionMode, $.BER)(value.chChSelectionMode, $.BER));
    }
    if (value.pSFurnishChargingInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => _encode_PSFurnishChargingInformation, $.BER)(value.pSFurnishChargingInformation, $.BER));
    }
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.listOfServiceData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeSequenceOf<ChangeOfServiceCondition>(() => _encode_ChangeOfServiceCondition, $.BER), $.BER)(value.listOfServiceData, $.BER));
    }
    if (value.servedMNNAI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => _encode_SubscriptionID, $.BER)(value.servedMNNAI, $.BER));
    }
    if (value.iPEdgeOperatorIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => $._encodeOctetString, $.BER)(value.iPEdgeOperatorIdentifier, $.BER));
    }
    if (value.startTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => $._encodeOctetString, $.BER)(value.startTime, $.BER));
    }
    if (value.stopTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => $._encodeOctetString, $.BER)(value.stopTime, $.BER));
    }
    if (value.servedIPCANsessionAddressExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 45, () => _encode_PDPAddress, $.BER)(value.servedIPCANsessionAddressExt, $.BER));
    }
    if (value.dynamicAddressFlagExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeBoolean, $.BER)(value.dynamicAddressFlagExt, $.BER));
    }
    if (value.iPEdgeiPv6AddressUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 50, () => _encode_GSNAddress, $.BER)(value.iPEdgeiPv6AddressUsed, $.BER));
    }
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 52, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.servedFixedSubsID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => $._encodeOctetString, $.BER)(value.servedFixedSubsID, $.BER));
    }
    if (value.accessLineIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => _encode_AccessLineIdentifier, $.BER)(value.accessLineIdentifier, $.BER));
    }
    if (value.fixedUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 57, () => _encode_FixedUserLocationInformation, $.BER)(value.fixedUserLocationInformation, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_IPERecord(value, elGetter);
}


/* eslint-enable */
