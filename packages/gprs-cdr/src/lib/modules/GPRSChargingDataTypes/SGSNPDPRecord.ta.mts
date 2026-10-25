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
import { CAMELInformationPDP, _decode_CAMELInformationPDP, _encode_CAMELInformationPDP } from "../GPRSChargingDataTypes/CAMELInformationPDP.ta.mjs";
import { type ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../GPRSChargingDataTypes/ChChSelectionMode.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../GPRSChargingDataTypes/UserCSGInformation.ta.mjs";
import { CNOperatorSelectionEntity, _decode_CNOperatorSelectionEntity, _encode_CNOperatorSelectionEntity, _enum_for_CNOperatorSelectionEntity } from "../GPRSChargingDataTypes/CNOperatorSelectionEntity.ta.mjs";


/**
 * @summary SGSNPDPRecord
 * @description
 *
 * S-CDR. IP-CAN bearer charging data collected by the SGSN for one MS/UE
 * (clause 5.2.3.1 and table 6.1.1.1). If the Charging Characteristics
 * activate CDR generation, the SGSN opens the S-CDR at IP-CAN bearer
 * activation and counts uplink and downlink volume separately. A change of
 * charging condition (QoS change, tariff time change, user CSG information
 * change, or direct tunnel establishment or removal) adds a List of
 * Traffic Data Volumes container and starts a new count. The first
 * container holds the volume since the bearer was opened; later containers
 * hold the volume since the previous container closed. The SGSN closes the
 * S-CDR when the IP-CAN bearer ends in the SGSN (termination, SGSN change
 * including intersystem change, or any abnormal release) or for a
 * partial-record reason (data volume limit, time limit, maximum number of
 * charging-condition changes, management intervention, or intra-SGSN
 * intersystem change). If the bearer remains active, the next S-CDR
 * carries an incremented sequence number. Partial-record thresholds come
 * from the Charging Characteristics profile (annex A).
 *
 * 3GPP TS 32.251 V19.0.0.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGSNPDPRecord ::= SET {
 *    recordType                  [0] IMPLICIT RecordType,
 *    networkInitiation           [1] IMPLICIT BOOLEAN OPTIONAL,
 *    servedIMSI                  [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    servedIMEI                  [4] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    sgsnAddress                 [5] GSNAddress OPTIONAL,
 *    msNetworkCapability         [6] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ) OPTIONAL,
 *    routingArea                 [7] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    locationAreaCode            [8] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    cellIdentifier              [9] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    chargingID                  [10] IMPLICIT INTEGER ( 0 .. 4294967295 ),
 *    ggsnAddressUsed             [11] GSNAddress,
 *    accessPointNameNI           [12] IMPLICIT IA5String  ( SIZE( 1 .. 63 ) ) OPTIONAL,
 *    pdpType                     [13] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    servedPDPAddress            [14] PDPAddress OPTIONAL,
 *    listOfTrafficVolumes        [15] IMPLICIT SEQUENCE  OF
 *       ChangeOfCharCondition OPTIONAL,
 *    recordOpeningTime           [16] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    duration                    [17] IMPLICIT INTEGER,
 *    sgsnChange                  [18] IMPLICIT BOOLEAN OPTIONAL,
 *    causeForRecClosing          [19] IMPLICIT CauseForRecClosing,
 *    diagnostics                 [20] Diagnostics OPTIONAL,
 *    recordSequenceNumber        [21] IMPLICIT INTEGER OPTIONAL,
 *    nodeID                      [22] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordExtensions            [23] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    localSequenceNumber         [24] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    apnSelectionMode            [25] IMPLICIT APNSelectionMode OPTIONAL,
 *    accessPointNameOI           [26] IMPLICIT IA5String  ( SIZE( 1 .. 37 ) ) OPTIONAL,
 *    servedMSISDN                [27] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    chargingCharacteristics     [28] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    rATType                     [29] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    cAMELInformationPDP         [30] IMPLICIT CAMELInformationPDP OPTIONAL,
 *    rNCUnsentDownlinkVolume     [31] IMPLICIT INTEGER OPTIONAL,
 *    chChSelectionMode           [32] IMPLICIT ChChSelectionMode OPTIONAL,
 *    dynamicAddressFlag          [33] IMPLICIT BOOLEAN OPTIONAL,
 *    iMSIunauthenticatedFlag     [34] IMPLICIT NULL OPTIONAL,
 *    userCSGInformation          [35] IMPLICIT UserCSGInformation OPTIONAL,
 *    servedPDPPDNAddressExt      [36] PDPAddress OPTIONAL,
 *    lowPriorityIndicator        [37] IMPLICIT NULL OPTIONAL,
 *    servingNodePLMNIdentifier   [38] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    cNOperatorSelectionEnt      [39] IMPLICIT CNOperatorSelectionEntity OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SGSNPDPRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * The field identifies the type of the record e.g. S-CDR, SGW-CDR, PGW-CDR,
     * M-CDR, S-SMO-CDR, TDF-CDR, IPE-CDR and S-SMT-CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.51.
     *
     * S-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `networkInitiation`.
     * @description
     *
     * A flag that is present if this is a network initiated IP-CAN bearer.
     *
     * S-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly networkInitiation: OPTIONAL<BOOLEAN>;
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
     * S-CDR field category C (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly servedIMSI: OPTIONAL<OCTET_STRING>;
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
     * S-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly servedIMEI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sgsnAddress`.
     * @description
     *
     * These fields contain one or several IP addresses of SGSN. The IP address
     * of the SGSN can be either control plane address or user plane address. The
     * S-CDR fields contain single address of current SGSN. The M-CDR fields only
     * contain the address of the current SGSN. If both an IPv4 and an IPv6
     * address of the SGSN are available, the SGSNs shall include the IPv4
     * address in the CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.69.
     *
     * S-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly sgsnAddress: OPTIONAL<GSNAddress>;
    /**
     * @summary `msNetworkCapability`.
     * @description
     *
     * This MS Network Capability field contains the MS network capability value
     * of the MS network capability information element of the served MS on PDP
     * context activation or on GPRS attachment as defined in TS 24.008 [208].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.33.
     *
     * S-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly msNetworkCapability: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `routingArea`.
     * @description
     *
     * RAC at the time of "Record Opening Time".
     *
     * S-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly routingArea: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `locationAreaCode`.
     * @description
     *
     * LAC at the time of "Record Opening Time".
     *
     * S-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly locationAreaCode: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cellIdentifier`.
     * @description
     *
     * For GSM, the Cell Identifier is defined as the Cell Id, reference 24.008
     * [208], and for UMTS it is defined as the Service Area Code in TS 25.413
     * [212].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.6.
     *
     * S-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly cellIdentifier: OPTIONAL<OCTET_STRING>;
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
     * S-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly chargingID: INTEGER;
    /**
     * @summary `ggsnAddressUsed`.
     * @description
     *
     * This field is the current serving GGSN/P-GW IP Address for the Control
     * Plane. If both an IPv4 and an IPv6 address of the GGSN/P-GW are available,
     * the SGSN shall include the IPv4 address in the CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.16.
     *
     * S-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly ggsnAddressUsed: GSNAddress;
    /**
     * @summary `accessPointNameNI`.
     * @description
     *
     * The logical name of the connected access point to the external packet
     * data network (network identifier part of APN).
     *
     * S-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly accessPointNameNI: OPTIONAL<IA5String>;
    /**
     * @summary `pdpType`.
     * @description
     *
     * This field defines the PDP type, e.g. IP, or PPP as per TS 29.060 [215].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.41.
     *
     * S-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly pdpType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedPDPAddress`.
     * @description
     *
     * This field contains the PDP address of the served IMSI. This is a network
     * layer address i.e. of type IPv4 address or IPv6 prefix. The address for
     * each PDP type is allocated either temporarily or permanently (see "Dynamic
     * Address Flag"). This parameter shall be present except when both the PDP
     * type is PPP and dynamic PDP address assignment is used.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.63.
     *
     * S-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly servedPDPAddress: OPTIONAL<PDPAddress>;
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
     * S-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
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
     * S-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
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
     * S-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly duration: INTEGER;
    /**
     * @summary `sgsnChange`.
     * @description
     *
     * This field is present only in the S-CDR to indicate that this is the first
     * record after an inter-SGSN routing area update.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.70.
     *
     * S-CDR field category C (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly sgsnChange: OPTIONAL<BOOLEAN>;
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
     * S-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
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
     * S-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
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
     * S-CDR field category C (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
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
     * S-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
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
     * S-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
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
     * S-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
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
     * S-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly apnSelectionMode: OPTIONAL<APNSelectionMode>;
    /**
     * @summary `accessPointNameOI`.
     * @description
     *
     * The Operator Identifier part of the APN.
     *
     * S-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly accessPointNameOI: OPTIONAL<IA5String>;
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
     * S-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
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
     * S-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly chargingCharacteristics: OCTET_STRING;
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
     * S-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `cAMELInformationPDP`.
     * @description
     *
     * Set of CAMEL information related to IP-CAN bearer. For more information
     * see Description of Record Fields. This field is present if CAMEL service
     * is activated.
     *
     * S-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly cAMELInformationPDP: OPTIONAL<CAMELInformationPDP>;
    /**
     * @summary `rNCUnsentDownlinkVolume`.
     * @description
     *
     * The downlink data volume, which the RNC has not sent to MS. This field
     * is present when the RNC has provided unsent downlink volume count at RAB
     * release.
     *
     * S-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly rNCUnsentDownlinkVolume: OPTIONAL<INTEGER>;
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
     * S-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly chChSelectionMode: OPTIONAL<ChChSelectionMode>;
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
     * S-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly dynamicAddressFlag: OPTIONAL<BOOLEAN>;
    /**
     * @summary `iMSIunauthenticatedFlag`.
     * @description
     *
     * This field indicates the provided served IMSI is not authenticated
     * (emergency bearer service situation).
     *
     * S-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
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
     * S-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly userCSGInformation: OPTIONAL<UserCSGInformation>;
    /**
     * @summary `servedPDPPDNAddressExt`.
     * @description
     *
     * This field holds IPv4 address of the served IMSI, if available, when PDP
     * type is IPv4v6.
     *
     * S-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
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
     * S-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly lowPriorityIndicator: OPTIONAL<NULL>;
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
     * S-CDR field category Oc (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cNOperatorSelectionEnt`.
     * @description
     *
     * This field indicates whether the Serving Network identified by the
     * "Serving Node PLMN Identifier” has been selected by the UE or by the
     * network, as defined in TS 29.060 [203] for GPRS, and in TS 29.274 [210]
     * for EPC, if available.
     *
     * S-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.1.1).
     *
     * @public
     * @readonly
     */
    readonly cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>;

    constructor (
        recordType: RecordType,
        networkInitiation: OPTIONAL<BOOLEAN>,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        sgsnAddress: OPTIONAL<GSNAddress>,
        msNetworkCapability: OPTIONAL<OCTET_STRING>,
        routingArea: OPTIONAL<OCTET_STRING>,
        locationAreaCode: OPTIONAL<OCTET_STRING>,
        cellIdentifier: OPTIONAL<OCTET_STRING>,
        chargingID: INTEGER,
        ggsnAddressUsed: GSNAddress,
        accessPointNameNI: OPTIONAL<IA5String>,
        pdpType: OPTIONAL<OCTET_STRING>,
        servedPDPAddress: OPTIONAL<PDPAddress>,
        listOfTrafficVolumes: OPTIONAL<ChangeOfCharCondition[]>,
        recordOpeningTime: OCTET_STRING,
        duration: INTEGER,
        sgsnChange: OPTIONAL<BOOLEAN>,
        causeForRecClosing: CauseForRecClosing,
        diagnostics: OPTIONAL<Diagnostics>,
        recordSequenceNumber: OPTIONAL<INTEGER>,
        nodeID: OPTIONAL<IA5String>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        apnSelectionMode: OPTIONAL<APNSelectionMode>,
        accessPointNameOI: OPTIONAL<IA5String>,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        chargingCharacteristics: OCTET_STRING,
        rATType?: OPTIONAL<INTEGER>,
        cAMELInformationPDP?: OPTIONAL<CAMELInformationPDP>,
        rNCUnsentDownlinkVolume?: OPTIONAL<INTEGER>,
        chChSelectionMode?: OPTIONAL<ChChSelectionMode>,
        dynamicAddressFlag?: OPTIONAL<BOOLEAN>,
        iMSIunauthenticatedFlag?: OPTIONAL<NULL>,
        userCSGInformation?: OPTIONAL<UserCSGInformation>,
        servedPDPPDNAddressExt?: OPTIONAL<PDPAddress>,
        lowPriorityIndicator?: OPTIONAL<NULL>,
        servingNodePLMNIdentifier?: OPTIONAL<OCTET_STRING>,
        cNOperatorSelectionEnt?: OPTIONAL<CNOperatorSelectionEntity>
    ) {
        this.recordType = recordType;
        this.networkInitiation = networkInitiation;
        this.servedIMSI = servedIMSI;
        this.servedIMEI = servedIMEI;
        this.sgsnAddress = sgsnAddress;
        this.msNetworkCapability = msNetworkCapability;
        this.routingArea = routingArea;
        this.locationAreaCode = locationAreaCode;
        this.cellIdentifier = cellIdentifier;
        this.chargingID = chargingID;
        this.ggsnAddressUsed = ggsnAddressUsed;
        this.accessPointNameNI = accessPointNameNI;
        this.pdpType = pdpType;
        this.servedPDPAddress = servedPDPAddress;
        this.listOfTrafficVolumes = listOfTrafficVolumes;
        this.recordOpeningTime = recordOpeningTime;
        this.duration = duration;
        this.sgsnChange = sgsnChange;
        this.causeForRecClosing = causeForRecClosing;
        this.diagnostics = diagnostics;
        this.recordSequenceNumber = recordSequenceNumber;
        this.nodeID = nodeID;
        this.recordExtensions = recordExtensions;
        this.localSequenceNumber = localSequenceNumber;
        this.apnSelectionMode = apnSelectionMode;
        this.accessPointNameOI = accessPointNameOI;
        this.servedMSISDN = servedMSISDN;
        this.chargingCharacteristics = chargingCharacteristics;
        this.rATType = rATType;
        this.cAMELInformationPDP = cAMELInformationPDP;
        this.rNCUnsentDownlinkVolume = rNCUnsentDownlinkVolume;
        this.chChSelectionMode = chChSelectionMode;
        this.dynamicAddressFlag = dynamicAddressFlag;
        this.iMSIunauthenticatedFlag = iMSIunauthenticatedFlag;
        this.userCSGInformation = userCSGInformation;
        this.servedPDPPDNAddressExt = servedPDPPDNAddressExt;
        this.lowPriorityIndicator = lowPriorityIndicator;
        this.servingNodePLMNIdentifier = servingNodePLMNIdentifier;
        this.cNOperatorSelectionEnt = cNOperatorSelectionEnt;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("SGSNPDPRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("SGSNPDPRecord.servedIMEI violates SIZE constraint");
        }
        if (this.msNetworkCapability !== undefined && (this.msNetworkCapability.length < 1 || this.msNetworkCapability.length > 8)) {
            throw new ASN1SizeError("SGSNPDPRecord.msNetworkCapability violates SIZE constraint");
        }
        if (this.routingArea !== undefined && (this.routingArea.length !== 1)) {
            throw new ASN1SizeError("SGSNPDPRecord.routingArea violates SIZE constraint");
        }
        if (this.locationAreaCode !== undefined && (this.locationAreaCode.length !== 2)) {
            throw new ASN1SizeError("SGSNPDPRecord.locationAreaCode violates SIZE constraint");
        }
        if (this.cellIdentifier !== undefined && (this.cellIdentifier.length !== 2)) {
            throw new ASN1SizeError("SGSNPDPRecord.cellIdentifier violates SIZE constraint");
        }
        if ((this.chargingID < 0 || this.chargingID > 4294967295)) {
            throw new ASN1OverflowError("SGSNPDPRecord.chargingID violates INTEGER range");
        }
        if (this.accessPointNameNI !== undefined && (this.accessPointNameNI.length < 1 || this.accessPointNameNI.length > 63)) {
            throw new ASN1SizeError("SGSNPDPRecord.accessPointNameNI violates SIZE constraint");
        }
        if (this.pdpType !== undefined && (this.pdpType.length !== 2)) {
            throw new ASN1SizeError("SGSNPDPRecord.pdpType violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("SGSNPDPRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("SGSNPDPRecord.nodeID violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("SGSNPDPRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.accessPointNameOI !== undefined && (this.accessPointNameOI.length < 1 || this.accessPointNameOI.length > 37)) {
            throw new ASN1SizeError("SGSNPDPRecord.accessPointNameOI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("SGSNPDPRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("SGSNPDPRecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("SGSNPDPRecord.rATType violates INTEGER range");
        }
        if (this.servingNodePLMNIdentifier !== undefined && (this.servingNodePLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("SGSNPDPRecord.servingNodePLMNIdentifier violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a SGSNPDPRecord
     * @description
     * 
     * This takes an `object` and converts it to a `SGSNPDPRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SGSNPDPRecord`.
     * @returns {SGSNPDPRecord}
     */
    public static _from_object (_o: { [_K in keyof (SGSNPDPRecord)]: (SGSNPDPRecord)[_K] }): SGSNPDPRecord {
        return new SGSNPDPRecord(_o.recordType, _o.networkInitiation, _o.servedIMSI, _o.servedIMEI, _o.sgsnAddress, _o.msNetworkCapability, _o.routingArea, _o.locationAreaCode, _o.cellIdentifier, _o.chargingID, _o.ggsnAddressUsed, _o.accessPointNameNI, _o.pdpType, _o.servedPDPAddress, _o.listOfTrafficVolumes, _o.recordOpeningTime, _o.duration, _o.sgsnChange, _o.causeForRecClosing, _o.diagnostics, _o.recordSequenceNumber, _o.nodeID, _o.recordExtensions, _o.localSequenceNumber, _o.apnSelectionMode, _o.accessPointNameOI, _o.servedMSISDN, _o.chargingCharacteristics, _o.rATType, _o.cAMELInformationPDP, _o.rNCUnsentDownlinkVolume, _o.chChSelectionMode, _o.dynamicAddressFlag, _o.iMSIunauthenticatedFlag, _o.userCSGInformation, _o.servedPDPPDNAddressExt, _o.lowPriorityIndicator, _o.servingNodePLMNIdentifier, _o.cNOperatorSelectionEnt);
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
 * @summary The Leading Root Component Types of SGSNPDPRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SGSNPDPRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("networkInitiation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sgsnAddress", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("msNetworkCapability", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("routingArea", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("locationAreaCode", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("cellIdentifier", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("chargingID", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("ggsnAddressUsed", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("accessPointNameNI", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("pdpType", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("servedPDPAddress", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("listOfTrafficVolumes", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("recordOpeningTime", false, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("duration", false, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("sgsnChange", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("causeForRecClosing", false, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("recordSequenceNumber", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("apnSelectionMode", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("accessPointNameOI", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("chargingCharacteristics", false, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("cAMELInformationPDP", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("rNCUnsentDownlinkVolume", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("chChSelectionMode", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("dynamicAddressFlag", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("iMSIunauthenticatedFlag", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("servedPDPPDNAddressExt", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("lowPriorityIndicator", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("servingNodePLMNIdentifier", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("cNOperatorSelectionEnt", true, $.hasTag(_TagClass.context, 39))
];

/**
 * @summary The Trailing Root Component Types of SGSNPDPRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SGSNPDPRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SGSNPDPRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SGSNPDPRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SGSNPDPRecord: $.ASN1Decoder<SGSNPDPRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SGSNPDPRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SGSNPDPRecord (el: _Element): SGSNPDPRecord {
    if (!_cached_decoder_for_SGSNPDPRecord) { _cached_decoder_for_SGSNPDPRecord = function (el: _Element): SGSNPDPRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let networkInitiation: OPTIONAL<BOOLEAN>;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let sgsnAddress: OPTIONAL<GSNAddress>;
    let msNetworkCapability: OPTIONAL<OCTET_STRING>;
    let routingArea: OPTIONAL<OCTET_STRING>;
    let locationAreaCode: OPTIONAL<OCTET_STRING>;
    let cellIdentifier: OPTIONAL<OCTET_STRING>;
    let chargingID!: INTEGER;
    let ggsnAddressUsed!: GSNAddress;
    let accessPointNameNI: OPTIONAL<IA5String>;
    let pdpType: OPTIONAL<OCTET_STRING>;
    let servedPDPAddress: OPTIONAL<PDPAddress>;
    let listOfTrafficVolumes: OPTIONAL<ChangeOfCharCondition[]>;
    let recordOpeningTime!: OCTET_STRING;
    let duration!: INTEGER;
    let sgsnChange: OPTIONAL<BOOLEAN>;
    let causeForRecClosing!: CauseForRecClosing;
    let diagnostics: OPTIONAL<Diagnostics>;
    let recordSequenceNumber: OPTIONAL<INTEGER>;
    let nodeID: OPTIONAL<IA5String>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let apnSelectionMode: OPTIONAL<APNSelectionMode>;
    let accessPointNameOI: OPTIONAL<IA5String>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let chargingCharacteristics!: OCTET_STRING;
    let rATType: OPTIONAL<INTEGER>;
    let cAMELInformationPDP: OPTIONAL<CAMELInformationPDP>;
    let rNCUnsentDownlinkVolume: OPTIONAL<INTEGER>;
    let chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    let dynamicAddressFlag: OPTIONAL<BOOLEAN>;
    let iMSIunauthenticatedFlag: OPTIONAL<NULL>;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    let servedPDPPDNAddressExt: OPTIONAL<PDPAddress>;
    let lowPriorityIndicator: OPTIONAL<NULL>;
    let servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let cNOperatorSelectionEnt: OPTIONAL<CNOperatorSelectionEntity>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "networkInitiation": (_el: _Element): void => { networkInitiation = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sgsnAddress": (_el: _Element): void => { sgsnAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "msNetworkCapability": (_el: _Element): void => { msNetworkCapability = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "routingArea": (_el: _Element): void => { routingArea = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "locationAreaCode": (_el: _Element): void => { locationAreaCode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cellIdentifier": (_el: _Element): void => { cellIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chargingID": (_el: _Element): void => { chargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "ggsnAddressUsed": (_el: _Element): void => { ggsnAddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "accessPointNameNI": (_el: _Element): void => { accessPointNameNI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "pdpType": (_el: _Element): void => { pdpType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedPDPAddress": (_el: _Element): void => { servedPDPAddress = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "listOfTrafficVolumes": (_el: _Element): void => { listOfTrafficVolumes = $._decode_implicit<ChangeOfCharCondition[]>(() => $._decodeSequenceOf<ChangeOfCharCondition>(() => _decode_ChangeOfCharCondition))(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sgsnChange": (_el: _Element): void => { sgsnChange = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "causeForRecClosing": (_el: _Element): void => { causeForRecClosing = $._decode_implicit<CauseForRecClosing>(() => _decode_CauseForRecClosing)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "recordSequenceNumber": (_el: _Element): void => { recordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "apnSelectionMode": (_el: _Element): void => { apnSelectionMode = $._decode_implicit<APNSelectionMode>(() => _decode_APNSelectionMode)(_el); },
        "accessPointNameOI": (_el: _Element): void => { accessPointNameOI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chargingCharacteristics": (_el: _Element): void => { chargingCharacteristics = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "cAMELInformationPDP": (_el: _Element): void => { cAMELInformationPDP = $._decode_implicit<CAMELInformationPDP>(() => _decode_CAMELInformationPDP)(_el); },
        "rNCUnsentDownlinkVolume": (_el: _Element): void => { rNCUnsentDownlinkVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "chChSelectionMode": (_el: _Element): void => { chChSelectionMode = $._decode_implicit<ChChSelectionMode>(() => _decode_ChChSelectionMode)(_el); },
        "dynamicAddressFlag": (_el: _Element): void => { dynamicAddressFlag = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "iMSIunauthenticatedFlag": (_el: _Element): void => { iMSIunauthenticatedFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); },
        "servedPDPPDNAddressExt": (_el: _Element): void => { servedPDPPDNAddressExt = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "lowPriorityIndicator": (_el: _Element): void => { lowPriorityIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "servingNodePLMNIdentifier": (_el: _Element): void => { servingNodePLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cNOperatorSelectionEnt": (_el: _Element): void => { cNOperatorSelectionEnt = $._decode_implicit<CNOperatorSelectionEntity>(() => _decode_CNOperatorSelectionEntity)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SGSNPDPRecord,
        _extension_additions_list_spec_for_SGSNPDPRecord,
        _root_component_type_list_2_spec_for_SGSNPDPRecord,
        undefined,
    );
    return new SGSNPDPRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        networkInitiation,
        servedIMSI,
        servedIMEI,
        sgsnAddress,
        msNetworkCapability,
        routingArea,
        locationAreaCode,
        cellIdentifier,
        chargingID,
        ggsnAddressUsed,
        accessPointNameNI,
        pdpType,
        servedPDPAddress,
        listOfTrafficVolumes,
        recordOpeningTime,
        duration,
        sgsnChange,
        causeForRecClosing,
        diagnostics,
        recordSequenceNumber,
        nodeID,
        recordExtensions,
        localSequenceNumber,
        apnSelectionMode,
        accessPointNameOI,
        servedMSISDN,
        chargingCharacteristics,
        rATType,
        cAMELInformationPDP,
        rNCUnsentDownlinkVolume,
        chChSelectionMode,
        dynamicAddressFlag,
        iMSIunauthenticatedFlag,
        userCSGInformation,
        servedPDPPDNAddressExt,
        lowPriorityIndicator,
        servingNodePLMNIdentifier,
        cNOperatorSelectionEnt
    );
}; }
    return _cached_decoder_for_SGSNPDPRecord(el);
}

let _cached_encoder_for_SGSNPDPRecord: $.ASN1Encoder<SGSNPDPRecord> | null = null;

/**
 * @summary Encodes a(n) SGSNPDPRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SGSNPDPRecord, encoded as an ASN.1 Element.
 */
export
function _encode_SGSNPDPRecord (value: SGSNPDPRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SGSNPDPRecord) { _cached_encoder_for_SGSNPDPRecord = function (value: SGSNPDPRecord, _elGetter: $.ASN1Encoder<SGSNPDPRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.networkInitiation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.networkInitiation, $.BER));
    }
    if (value.servedIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    }
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.sgsnAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_GSNAddress, $.BER)(value.sgsnAddress, $.BER));
    }
    if (value.msNetworkCapability !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.msNetworkCapability, $.BER));
    }
    if (value.routingArea !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.routingArea, $.BER));
    }
    if (value.locationAreaCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.locationAreaCode, $.BER));
    }
    if (value.cellIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.cellIdentifier, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.chargingID, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 11, () => _encode_GSNAddress, $.BER)(value.ggsnAddressUsed, $.BER));
    if (value.accessPointNameNI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeIA5String, $.BER)(value.accessPointNameNI, $.BER));
    }
    if (value.pdpType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.pdpType, $.BER));
    }
    if (value.servedPDPAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 14, () => _encode_PDPAddress, $.BER)(value.servedPDPAddress, $.BER));
    }
    if (value.listOfTrafficVolumes !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeSequenceOf<ChangeOfCharCondition>(() => _encode_ChangeOfCharCondition, $.BER), $.BER)(value.listOfTrafficVolumes, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 17, () => $._encodeInteger, $.BER)(value.duration, $.BER));
    if (value.sgsnChange !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeBoolean, $.BER)(value.sgsnChange, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 19, () => _encode_CauseForRecClosing, $.BER)(value.causeForRecClosing, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 20, () => _encode_Diagnostics, $.BER)(value.diagnostics, $.BER));
    }
    if (value.recordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeInteger, $.BER)(value.recordSequenceNumber, $.BER));
    }
    if (value.nodeID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeIA5String, $.BER)(value.nodeID, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.apnSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => _encode_APNSelectionMode, $.BER)(value.apnSelectionMode, $.BER));
    }
    if (value.accessPointNameOI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeIA5String, $.BER)(value.accessPointNameOI, $.BER));
    }
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 28, () => $._encodeOctetString, $.BER)(value.chargingCharacteristics, $.BER));
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.cAMELInformationPDP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_CAMELInformationPDP, $.BER)(value.cAMELInformationPDP, $.BER));
    }
    if (value.rNCUnsentDownlinkVolume !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 31, () => $._encodeInteger, $.BER)(value.rNCUnsentDownlinkVolume, $.BER));
    }
    if (value.chChSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => _encode_ChChSelectionMode, $.BER)(value.chChSelectionMode, $.BER));
    }
    if (value.dynamicAddressFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => $._encodeBoolean, $.BER)(value.dynamicAddressFlag, $.BER));
    }
    if (value.iMSIunauthenticatedFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeNull, $.BER)(value.iMSIunauthenticatedFlag, $.BER));
    }
    if (value.userCSGInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 35, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER));
    }
    if (value.servedPDPPDNAddressExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 36, () => _encode_PDPAddress, $.BER)(value.servedPDPPDNAddressExt, $.BER));
    }
    if (value.lowPriorityIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => $._encodeNull, $.BER)(value.lowPriorityIndicator, $.BER));
    }
    if (value.servingNodePLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => $._encodeOctetString, $.BER)(value.servingNodePLMNIdentifier, $.BER));
    }
    if (value.cNOperatorSelectionEnt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => _encode_CNOperatorSelectionEntity, $.BER)(value.cNOperatorSelectionEnt, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_SGSNPDPRecord(value, elGetter);
}


/* eslint-enable */
