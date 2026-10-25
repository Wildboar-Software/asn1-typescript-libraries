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
import { AccessLineIdentifier, _decode_AccessLineIdentifier, _encode_AccessLineIdentifier } from "../GPRSChargingDataTypes/AccessLineIdentifier.ta.mjs";
import { FixedUserLocationInformation, _decode_FixedUserLocationInformation, _encode_FixedUserLocationInformation } from "../GPRSChargingDataTypes/FixedUserLocationInformation.ta.mjs";


/**
 * @summary TDFRecord
 * @description
 *
 * TDF-CDR. Application-based charging data collected by the TDF for one
 * TDF session (clause 5.2.3.9 and table 6.1.14.1). Volumes, elapsed time,
 * or events are counted per rating group or per rating group and service
 * id. If the Charging Characteristics profile activates CDR generation,
 * the TDF opens the record at TDF session establishment. An application
 * container opens when application traffic is detected and no matching
 * container exists, and closes when that traffic ends. Online and offline
 * charging may run independently, or in tight interworking where the OCS
 * re-authorisation triggers, carried in the Offline-Charging AVP, take
 * precedence over the TDF default configuration. List of Service Data
 * containers are added on TDF session modification, tariff time change,
 * failure handling, an application traffic report, and CDR closure (table
 * 5.2.3.9.2.1). The change condition is omitted on CDR closure except when
 * closure is due to the maximum number of charging-condition changes.
 * Envelope reporting adds only completed envelopes. The TDF closes the CDR
 * when the session ends (PCRF termination or abnormal release) or for a
 * partial-record reason (volume limit, time limit, maximum number of
 * charging-condition changes, management intervention, MS time zone
 * change, PLMN change, or RAT change). If the session remains active, the
 * next TDF-CDR uses an incremented sequence number. For the convergent
 * fixed-mobile case, annex D clause D.4.1.2.2 says clause 6.1.14 applies
 * with a set of fields not applicable to that TDF-CDR.
 *
 * 3GPP TS 32.251 V19.0.0.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TDFRecord ::= SET {
 *    recordType                         [0] IMPLICIT RecordType,
 *    servedIMSI                         [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    p-GWAddress                        [4] GSNAddress,
 *    servingNodeAddress                 [6] IMPLICIT SEQUENCE  OF
 *       GSNAddress,
 *    accessPointNameNI                  [7] IMPLICIT IA5String  ( SIZE( 1 .. 63 ) ) OPTIONAL,
 *    pdpPDNType                         [8] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    servedPDPPDNAddress                [9] PDPAddress OPTIONAL,
 *    dynamicAddressFlag                 [11] IMPLICIT BOOLEAN OPTIONAL,
 *    recordOpeningTime                  [13] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    duration                           [14] IMPLICIT INTEGER,
 *    causeForRecClosing                 [15] IMPLICIT CauseForRecClosing,
 *    diagnostics                        [16] Diagnostics OPTIONAL,
 *    recordSequenceNumber               [17] IMPLICIT INTEGER OPTIONAL,
 *    nodeID                             [18] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordExtensions                   [19] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    localSequenceNumber                [20] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    apnSelectionMode                   [21] IMPLICIT APNSelectionMode OPTIONAL,
 *    servedMSISDN                       [22] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    chargingCharacteristics            [23] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    chChSelectionMode                  [24] IMPLICIT ChChSelectionMode OPTIONAL,
 *    servingNodePLMNIdentifier          [27] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    pSFurnishChargingInformation       [28] IMPLICIT PSFurnishChargingInformation OPTIONAL,
 *    servedIMEI                         [29] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    rATType                            [30] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    mSTimeZone                         [31] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    userLocationInformation            [32] IMPLICIT OCTET STRING OPTIONAL,
 *    listOfServiceData                  [34] IMPLICIT SEQUENCE  OF
 *       ChangeOfServiceCondition OPTIONAL,
 *    servingNodeType                    [35] IMPLICIT SEQUENCE  OF
 *       ServingNodeType,
 *    servedMNNAI                        [36] IMPLICIT SubscriptionID OPTIONAL,
 *    p-GWPLMNIdentifier                 [37] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    startTime                          [38] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    stopTime                           [39] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    served3gpp2MEID                    [40] IMPLICIT OCTET STRING OPTIONAL,
 *    pDNConnectionChargingID            [41] IMPLICIT INTEGER ( 0 .. 4294967295 ),
 *    userCSGInformation                 [43] IMPLICIT UserCSGInformation OPTIONAL,
 *    threeGPP2UserLocationInformation   [44] IMPLICIT OCTET STRING OPTIONAL,
 *    servedPDPPDNAddressExt             [45] PDPAddress OPTIONAL,
 *    dynamicAddressFlagExt              [47] IMPLICIT BOOLEAN OPTIONAL,
 *    servingNodeiPv6Address             [49] IMPLICIT SEQUENCE  OF
 *       GSNAddress OPTIONAL,
 *    p-GWiPv6AddressUsed                [50] GSNAddress OPTIONAL,
 *    tWANUserLocationInformation        [51] IMPLICIT TWANUserLocationInfo OPTIONAL,
 *    retransmission                     [52] IMPLICIT NULL OPTIONAL,
 *    tDFAddress                         [53] GSNAddress,
 *    tDFiPv6AddressUsed                 [54] GSNAddress OPTIONAL,
 *    tDFPLMNIdentifier                  [55] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    servedFixedSubsID                  [56] IMPLICIT OCTET STRING OPTIONAL,
 *    accessLineIdentifier               [57] IMPLICIT AccessLineIdentifier OPTIONAL,
 *    fixedUserLocationInformation       [59] IMPLICIT FixedUserLocationInformation OPTIONAL}
 * ```
 * 
 * @class
 */
export
class TDFRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * The field identifies the type of the record e.g. S-CDR, SGW-CDR, PGW-CDR,
     * M-CDR, S-SMO-CDR, TDF-CDR, IPE-CDR and S-SMT-CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.51.
     *
     * TDF-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category C (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
     *
     * @public
     * @readonly
     */
    readonly p_GWAddress: GSNAddress;
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
     * TDF-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * IPv6 or IPv4v6. This parameter shall be present except when both the PDP
     * type is PPP and dynamic IP-CAN bearer address assignment is used.
     *
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
     *
     * @public
     * @readonly
     */
    readonly dynamicAddressFlag: OPTIONAL<BOOLEAN>;
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
     * TDF-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category C (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
     *
     * @public
     * @readonly
     */
    readonly chChSelectionMode: OPTIONAL<ChChSelectionMode>;
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
     * TDF-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
     *
     * @public
     * @readonly
     */
    readonly userLocationInformation: OPTIONAL<OCTET_STRING>;
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
     * TDF-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category Oc (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
     *
     * @public
     * @readonly
     */
    readonly pDNConnectionChargingID: INTEGER;
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
     *
     * @public
     * @readonly
     */
    readonly userCSGInformation: OPTIONAL<UserCSGInformation>;
    /**
     * @summary `threeGPP2UserLocationInformation`.
     * @description
     *
     * This field contains the User Location Information of the MS as defined
     * in TS 29.212 [216] for 3GPP2 access, if available.
     *
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
     *
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
    /**
     * @summary `tDFAddress`.
     * @description
     *
     * This field is the serving TDF IP Address for the Control Plane. If both an
     * IPv4 and an IPv6 addresses of the TDF are available, the TDF shall include
     * the IPv4 address in the CDR. It contains the TDF-IP-Address as described
     * in TS 29.212 [220].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.73aA.
     *
     * TDF-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
     *
     * @public
     * @readonly
     */
    readonly tDFAddress: GSNAddress;
    /**
     * @summary `tDFiPv6AddressUsed`.
     * @description
     *
     * The control plane IPv6 address, in case of IPv4v6 dual stack, of the TDF
     * used.
     *
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
     *
     * @public
     * @readonly
     */
    readonly tDFiPv6AddressUsed: OPTIONAL<GSNAddress>;
    /**
     * @summary `tDFPLMNIdentifier`.
     * @description
     *
     * PLMN identifier (MCC MNC) of the TDF.
     *
     * TDF-CDR field category Oc (3GPP TS 32.251 V19.0.0 table 6.1.14.1).
     *
     * @public
     * @readonly
     */
    readonly tDFPLMNIdentifier: OPTIONAL<OCTET_STRING>;
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
     * TDF-CDR field category C (3GPP TS 32.251 V19.0.0 table D.4.1.2.2.2).
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table D.4.1.2.2.2).
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
     * TDF-CDR field category OC (3GPP TS 32.251 V19.0.0 table D.4.1.2.2.2).
     *
     * @public
     * @readonly
     */
    readonly fixedUserLocationInformation: OPTIONAL<FixedUserLocationInformation>;

    constructor (
        recordType: RecordType,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        p_GWAddress: GSNAddress,
        servingNodeAddress: GSNAddress[],
        accessPointNameNI: OPTIONAL<IA5String>,
        pdpPDNType: OPTIONAL<OCTET_STRING>,
        servedPDPPDNAddress: OPTIONAL<PDPAddress>,
        dynamicAddressFlag: OPTIONAL<BOOLEAN>,
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
        servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>,
        pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        rATType: OPTIONAL<INTEGER>,
        mSTimeZone: OPTIONAL<OCTET_STRING>,
        userLocationInformation: OPTIONAL<OCTET_STRING>,
        listOfServiceData: OPTIONAL<ChangeOfServiceCondition[]>,
        servingNodeType: ServingNodeType[],
        servedMNNAI: OPTIONAL<SubscriptionID>,
        p_GWPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        startTime: OPTIONAL<OCTET_STRING>,
        stopTime: OPTIONAL<OCTET_STRING>,
        served3gpp2MEID: OPTIONAL<OCTET_STRING>,
        pDNConnectionChargingID: INTEGER,
        userCSGInformation: OPTIONAL<UserCSGInformation>,
        threeGPP2UserLocationInformation: OPTIONAL<OCTET_STRING>,
        servedPDPPDNAddressExt: OPTIONAL<PDPAddress>,
        dynamicAddressFlagExt: OPTIONAL<BOOLEAN>,
        servingNodeiPv6Address: OPTIONAL<GSNAddress[]>,
        p_GWiPv6AddressUsed: OPTIONAL<GSNAddress>,
        tWANUserLocationInformation: OPTIONAL<TWANUserLocationInfo>,
        retransmission: OPTIONAL<NULL>,
        tDFAddress: GSNAddress,
        tDFiPv6AddressUsed?: OPTIONAL<GSNAddress>,
        tDFPLMNIdentifier?: OPTIONAL<OCTET_STRING>,
        servedFixedSubsID?: OPTIONAL<OCTET_STRING>,
        accessLineIdentifier?: OPTIONAL<AccessLineIdentifier>,
        fixedUserLocationInformation?: OPTIONAL<FixedUserLocationInformation>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.p_GWAddress = p_GWAddress;
        this.servingNodeAddress = servingNodeAddress;
        this.accessPointNameNI = accessPointNameNI;
        this.pdpPDNType = pdpPDNType;
        this.servedPDPPDNAddress = servedPDPPDNAddress;
        this.dynamicAddressFlag = dynamicAddressFlag;
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
        this.servingNodePLMNIdentifier = servingNodePLMNIdentifier;
        this.pSFurnishChargingInformation = pSFurnishChargingInformation;
        this.servedIMEI = servedIMEI;
        this.rATType = rATType;
        this.mSTimeZone = mSTimeZone;
        this.userLocationInformation = userLocationInformation;
        this.listOfServiceData = listOfServiceData;
        this.servingNodeType = servingNodeType;
        this.servedMNNAI = servedMNNAI;
        this.p_GWPLMNIdentifier = p_GWPLMNIdentifier;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.served3gpp2MEID = served3gpp2MEID;
        this.pDNConnectionChargingID = pDNConnectionChargingID;
        this.userCSGInformation = userCSGInformation;
        this.threeGPP2UserLocationInformation = threeGPP2UserLocationInformation;
        this.servedPDPPDNAddressExt = servedPDPPDNAddressExt;
        this.dynamicAddressFlagExt = dynamicAddressFlagExt;
        this.servingNodeiPv6Address = servingNodeiPv6Address;
        this.p_GWiPv6AddressUsed = p_GWiPv6AddressUsed;
        this.tWANUserLocationInformation = tWANUserLocationInformation;
        this.retransmission = retransmission;
        this.tDFAddress = tDFAddress;
        this.tDFiPv6AddressUsed = tDFiPv6AddressUsed;
        this.tDFPLMNIdentifier = tDFPLMNIdentifier;
        this.servedFixedSubsID = servedFixedSubsID;
        this.accessLineIdentifier = accessLineIdentifier;
        this.fixedUserLocationInformation = fixedUserLocationInformation;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("TDFRecord.servedIMSI violates SIZE constraint");
        }
        if (this.accessPointNameNI !== undefined && (this.accessPointNameNI.length < 1 || this.accessPointNameNI.length > 63)) {
            throw new ASN1SizeError("TDFRecord.accessPointNameNI violates SIZE constraint");
        }
        if (this.pdpPDNType !== undefined && (this.pdpPDNType.length !== 2)) {
            throw new ASN1SizeError("TDFRecord.pdpPDNType violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("TDFRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("TDFRecord.nodeID violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("TDFRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("TDFRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("TDFRecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.servingNodePLMNIdentifier !== undefined && (this.servingNodePLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("TDFRecord.servingNodePLMNIdentifier violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("TDFRecord.servedIMEI violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("TDFRecord.rATType violates INTEGER range");
        }
        if (this.mSTimeZone !== undefined && (this.mSTimeZone.length !== 2)) {
            throw new ASN1SizeError("TDFRecord.mSTimeZone violates SIZE constraint");
        }
        if (this.p_GWPLMNIdentifier !== undefined && (this.p_GWPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("TDFRecord.p_GWPLMNIdentifier violates SIZE constraint");
        }
        if (this.startTime !== undefined && (this.startTime.length !== 9)) {
            throw new ASN1SizeError("TDFRecord.startTime violates SIZE constraint");
        }
        if (this.stopTime !== undefined && (this.stopTime.length !== 9)) {
            throw new ASN1SizeError("TDFRecord.stopTime violates SIZE constraint");
        }
        if ((this.pDNConnectionChargingID < 0 || this.pDNConnectionChargingID > 4294967295)) {
            throw new ASN1OverflowError("TDFRecord.pDNConnectionChargingID violates INTEGER range");
        }
        if (this.tDFPLMNIdentifier !== undefined && (this.tDFPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("TDFRecord.tDFPLMNIdentifier violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a TDFRecord
     * @description
     * 
     * This takes an `object` and converts it to a `TDFRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TDFRecord`.
     * @returns {TDFRecord}
     */
    public static _from_object (_o: { [_K in keyof (TDFRecord)]: (TDFRecord)[_K] }): TDFRecord {
        return new TDFRecord(_o.recordType, _o.servedIMSI, _o.p_GWAddress, _o.servingNodeAddress, _o.accessPointNameNI, _o.pdpPDNType, _o.servedPDPPDNAddress, _o.dynamicAddressFlag, _o.recordOpeningTime, _o.duration, _o.causeForRecClosing, _o.diagnostics, _o.recordSequenceNumber, _o.nodeID, _o.recordExtensions, _o.localSequenceNumber, _o.apnSelectionMode, _o.servedMSISDN, _o.chargingCharacteristics, _o.chChSelectionMode, _o.servingNodePLMNIdentifier, _o.pSFurnishChargingInformation, _o.servedIMEI, _o.rATType, _o.mSTimeZone, _o.userLocationInformation, _o.listOfServiceData, _o.servingNodeType, _o.servedMNNAI, _o.p_GWPLMNIdentifier, _o.startTime, _o.stopTime, _o.served3gpp2MEID, _o.pDNConnectionChargingID, _o.userCSGInformation, _o.threeGPP2UserLocationInformation, _o.servedPDPPDNAddressExt, _o.dynamicAddressFlagExt, _o.servingNodeiPv6Address, _o.p_GWiPv6AddressUsed, _o.tWANUserLocationInformation, _o.retransmission, _o.tDFAddress, _o.tDFiPv6AddressUsed, _o.tDFPLMNIdentifier, _o.servedFixedSubsID, _o.accessLineIdentifier, _o.fixedUserLocationInformation);
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
 * @summary The Leading Root Component Types of TDFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TDFRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("p-GWAddress", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("servingNodeAddress", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("accessPointNameNI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("pdpPDNType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("servedPDPPDNAddress", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("dynamicAddressFlag", true, $.hasTag(_TagClass.context, 11)),
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
    new $.ComponentSpec("servingNodePLMNIdentifier", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("pSFurnishChargingInformation", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("mSTimeZone", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("listOfServiceData", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("servingNodeType", false, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("servedMNNAI", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("p-GWPLMNIdentifier", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("stopTime", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("served3gpp2MEID", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("pDNConnectionChargingID", false, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("threeGPP2UserLocationInformation", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("servedPDPPDNAddressExt", true, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("dynamicAddressFlagExt", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("servingNodeiPv6Address", true, $.hasTag(_TagClass.context, 49)),
    new $.ComponentSpec("p-GWiPv6AddressUsed", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("tWANUserLocationInformation", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("tDFAddress", false, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("tDFiPv6AddressUsed", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("tDFPLMNIdentifier", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("servedFixedSubsID", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("accessLineIdentifier", true, $.hasTag(_TagClass.context, 57)),
    new $.ComponentSpec("fixedUserLocationInformation", true, $.hasTag(_TagClass.context, 59))
];

/**
 * @summary The Trailing Root Component Types of TDFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TDFRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TDFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TDFRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TDFRecord: $.ASN1Decoder<TDFRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TDFRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TDFRecord (el: _Element): TDFRecord {
    if (!_cached_decoder_for_TDFRecord) { _cached_decoder_for_TDFRecord = function (el: _Element): TDFRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let p_GWAddress!: GSNAddress;
    let servingNodeAddress!: GSNAddress[];
    let accessPointNameNI: OPTIONAL<IA5String>;
    let pdpPDNType: OPTIONAL<OCTET_STRING>;
    let servedPDPPDNAddress: OPTIONAL<PDPAddress>;
    let dynamicAddressFlag: OPTIONAL<BOOLEAN>;
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
    let servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<INTEGER>;
    let mSTimeZone: OPTIONAL<OCTET_STRING>;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let listOfServiceData: OPTIONAL<ChangeOfServiceCondition[]>;
    let servingNodeType!: ServingNodeType[];
    let servedMNNAI: OPTIONAL<SubscriptionID>;
    let p_GWPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let startTime: OPTIONAL<OCTET_STRING>;
    let stopTime: OPTIONAL<OCTET_STRING>;
    let served3gpp2MEID: OPTIONAL<OCTET_STRING>;
    let pDNConnectionChargingID!: INTEGER;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    let threeGPP2UserLocationInformation: OPTIONAL<OCTET_STRING>;
    let servedPDPPDNAddressExt: OPTIONAL<PDPAddress>;
    let dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    let servingNodeiPv6Address: OPTIONAL<GSNAddress[]>;
    let p_GWiPv6AddressUsed: OPTIONAL<GSNAddress>;
    let tWANUserLocationInformation: OPTIONAL<TWANUserLocationInfo>;
    let retransmission: OPTIONAL<NULL>;
    let tDFAddress!: GSNAddress;
    let tDFiPv6AddressUsed: OPTIONAL<GSNAddress>;
    let tDFPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let servedFixedSubsID: OPTIONAL<OCTET_STRING>;
    let accessLineIdentifier: OPTIONAL<AccessLineIdentifier>;
    let fixedUserLocationInformation: OPTIONAL<FixedUserLocationInformation>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "p-GWAddress": (_el: _Element): void => { p_GWAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "servingNodeAddress": (_el: _Element): void => { servingNodeAddress = $._decode_implicit<GSNAddress[]>(() => $._decodeSequenceOf<GSNAddress>(() => _decode_GSNAddress))(_el); },
        "accessPointNameNI": (_el: _Element): void => { accessPointNameNI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "pdpPDNType": (_el: _Element): void => { pdpPDNType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedPDPPDNAddress": (_el: _Element): void => { servedPDPPDNAddress = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "dynamicAddressFlag": (_el: _Element): void => { dynamicAddressFlag = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
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
        "servingNodePLMNIdentifier": (_el: _Element): void => { servingNodePLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pSFurnishChargingInformation": (_el: _Element): void => { pSFurnishChargingInformation = $._decode_implicit<PSFurnishChargingInformation>(() => _decode_PSFurnishChargingInformation)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mSTimeZone": (_el: _Element): void => { mSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "listOfServiceData": (_el: _Element): void => { listOfServiceData = $._decode_implicit<ChangeOfServiceCondition[]>(() => $._decodeSequenceOf<ChangeOfServiceCondition>(() => _decode_ChangeOfServiceCondition))(_el); },
        "servingNodeType": (_el: _Element): void => { servingNodeType = $._decode_implicit<ServingNodeType[]>(() => $._decodeSequenceOf<ServingNodeType>(() => _decode_ServingNodeType))(_el); },
        "servedMNNAI": (_el: _Element): void => { servedMNNAI = $._decode_implicit<SubscriptionID>(() => _decode_SubscriptionID)(_el); },
        "p-GWPLMNIdentifier": (_el: _Element): void => { p_GWPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "stopTime": (_el: _Element): void => { stopTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "served3gpp2MEID": (_el: _Element): void => { served3gpp2MEID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pDNConnectionChargingID": (_el: _Element): void => { pDNConnectionChargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); },
        "threeGPP2UserLocationInformation": (_el: _Element): void => { threeGPP2UserLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedPDPPDNAddressExt": (_el: _Element): void => { servedPDPPDNAddressExt = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "dynamicAddressFlagExt": (_el: _Element): void => { dynamicAddressFlagExt = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "servingNodeiPv6Address": (_el: _Element): void => { servingNodeiPv6Address = $._decode_implicit<GSNAddress[]>(() => $._decodeSequenceOf<GSNAddress>(() => _decode_GSNAddress))(_el); },
        "p-GWiPv6AddressUsed": (_el: _Element): void => { p_GWiPv6AddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "tWANUserLocationInformation": (_el: _Element): void => { tWANUserLocationInformation = $._decode_implicit<TWANUserLocationInfo>(() => _decode_TWANUserLocationInfo)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "tDFAddress": (_el: _Element): void => { tDFAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "tDFiPv6AddressUsed": (_el: _Element): void => { tDFiPv6AddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "tDFPLMNIdentifier": (_el: _Element): void => { tDFPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedFixedSubsID": (_el: _Element): void => { servedFixedSubsID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "accessLineIdentifier": (_el: _Element): void => { accessLineIdentifier = $._decode_implicit<AccessLineIdentifier>(() => _decode_AccessLineIdentifier)(_el); },
        "fixedUserLocationInformation": (_el: _Element): void => { fixedUserLocationInformation = $._decode_implicit<FixedUserLocationInformation>(() => _decode_FixedUserLocationInformation)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_TDFRecord,
        _extension_additions_list_spec_for_TDFRecord,
        _root_component_type_list_2_spec_for_TDFRecord,
        undefined,
    );
    return new TDFRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        p_GWAddress,
        servingNodeAddress,
        accessPointNameNI,
        pdpPDNType,
        servedPDPPDNAddress,
        dynamicAddressFlag,
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
        servingNodePLMNIdentifier,
        pSFurnishChargingInformation,
        servedIMEI,
        rATType,
        mSTimeZone,
        userLocationInformation,
        listOfServiceData,
        servingNodeType,
        servedMNNAI,
        p_GWPLMNIdentifier,
        startTime,
        stopTime,
        served3gpp2MEID,
        pDNConnectionChargingID,
        userCSGInformation,
        threeGPP2UserLocationInformation,
        servedPDPPDNAddressExt,
        dynamicAddressFlagExt,
        servingNodeiPv6Address,
        p_GWiPv6AddressUsed,
        tWANUserLocationInformation,
        retransmission,
        tDFAddress,
        tDFiPv6AddressUsed,
        tDFPLMNIdentifier,
        servedFixedSubsID,
        accessLineIdentifier,
        fixedUserLocationInformation
    );
}; }
    return _cached_decoder_for_TDFRecord(el);
}

let _cached_encoder_for_TDFRecord: $.ASN1Encoder<TDFRecord> | null = null;

/**
 * @summary Encodes a(n) TDFRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TDFRecord, encoded as an ASN.1 Element.
 */
export
function _encode_TDFRecord (value: TDFRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TDFRecord) { _cached_encoder_for_TDFRecord = function (value: TDFRecord, _elGetter: $.ASN1Encoder<TDFRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.servedIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_GSNAddress, $.BER)(value.p_GWAddress, $.BER));
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
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 41, () => $._encodeInteger, $.BER)(value.pDNConnectionChargingID, $.BER));
    if (value.userCSGInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 43, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER));
    }
    if (value.threeGPP2UserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 44, () => $._encodeOctetString, $.BER)(value.threeGPP2UserLocationInformation, $.BER));
    }
    if (value.servedPDPPDNAddressExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 45, () => _encode_PDPAddress, $.BER)(value.servedPDPPDNAddressExt, $.BER));
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
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 53, () => _encode_GSNAddress, $.BER)(value.tDFAddress, $.BER));
    if (value.tDFiPv6AddressUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 54, () => _encode_GSNAddress, $.BER)(value.tDFiPv6AddressUsed, $.BER));
    }
    if (value.tDFPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => $._encodeOctetString, $.BER)(value.tDFPLMNIdentifier, $.BER));
    }
    if (value.servedFixedSubsID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => $._encodeOctetString, $.BER)(value.servedFixedSubsID, $.BER));
    }
    if (value.accessLineIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 57, () => _encode_AccessLineIdentifier, $.BER)(value.accessLineIdentifier, $.BER));
    }
    if (value.fixedUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 59, () => _encode_FixedUserLocationInformation, $.BER)(value.fixedUserLocationInformation, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_TDFRecord(value, elGetter);
}


/* eslint-enable */
