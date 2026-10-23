/* eslint-disable */
import {
    GraphicString,
    INTEGER,
    NULL,
    OCTET_STRING,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../IMSChargingDataTypes/RecordType.ta.mjs";
import { Role_of_Node, _decode_Role_of_Node, _encode_Role_of_Node, _enum_for_Role_of_Node } from "../IMSChargingDataTypes/Role-of-Node.ta.mjs";
import { NodeAddress, _decode_NodeAddress, _encode_NodeAddress } from "../IMSChargingDataTypes/NodeAddress.ta.mjs";
import { InvolvedParty, _decode_InvolvedParty, _encode_InvolvedParty } from "../IMSChargingDataTypes/InvolvedParty.ta.mjs";
import { InterOperatorIdentifiers, _decode_InterOperatorIdentifiers, _encode_InterOperatorIdentifiers } from "../IMSChargingDataTypes/InterOperatorIdentifiers.ta.mjs";
import { CauseForRecordClosing, _decode_CauseForRecordClosing, _encode_CauseForRecordClosing, _enum_for_CauseForRecordClosing } from "../IMSChargingDataTypes/CauseForRecordClosing.ta.mjs";
import { Incomplete_CDR_Indication, _decode_Incomplete_CDR_Indication, _encode_Incomplete_CDR_Indication } from "../IMSChargingDataTypes/Incomplete-CDR-Indication.ta.mjs";
import { Media_Components_List, _decode_Media_Components_List, _encode_Media_Components_List } from "../IMSChargingDataTypes/Media-Components-List.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../IMSChargingDataTypes/ManagementExtension.ta.mjs";
import { Early_Media_Components_List, _decode_Early_Media_Components_List, _encode_Early_Media_Components_List } from "../IMSChargingDataTypes/Early-Media-Components-List.ta.mjs";
import { SessionPriority, _decode_SessionPriority, _encode_SessionPriority, _enum_for_SessionPriority } from "../IMSChargingDataTypes/SessionPriority.ta.mjs";
import { RealTimeTariffInformation, _decode_RealTimeTariffInformation, _encode_RealTimeTariffInformation } from "../IMSChargingDataTypes/RealTimeTariffInformation.ta.mjs";
import { AccessNetworkInfoChange, _decode_AccessNetworkInfoChange, _encode_AccessNetworkInfoChange } from "../IMSChargingDataTypes/AccessNetworkInfoChange.ta.mjs";
import { TrunkGroupID, _decode_TrunkGroupID, _encode_TrunkGroupID } from "../IMSChargingDataTypes/TrunkGroupID.ta.mjs";
import { TransmissionMedium, _decode_TransmissionMedium, _encode_TransmissionMedium } from "../IMSChargingDataTypes/TransmissionMedium.ta.mjs";
import { ISUPCause, _decode_ISUPCause, _encode_ISUPCause } from "../IMSChargingDataTypes/ISUPCause.ta.mjs";


/**
 * @summary MGCFRecord
 * @description
 *
 * MGCF CDR (clause 6.1.3.7). The MGCF supports session and event charging
 * (clause 6.3.2). It records the PSTN leg (trunk group and bearer service)
 * and, when the session is released via ISUP, the ISUP cause. The MGCF may
 * also record real-time tariff information (clause 5.1.5).
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.7.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MGCFRecord ::= SET {
 *    recordType                              [0] IMPLICIT RecordType,
 *    retransmission                          [1] IMPLICIT NULL OPTIONAL,
 *    sIP-Method                              [2] IMPLICIT GraphicString OPTIONAL,
 *    role-of-Node                            [3] IMPLICIT Role-of-Node OPTIONAL,
 *    nodeAddress                             [4] NodeAddress OPTIONAL,
 *    session-Id                              [5] IMPLICIT GraphicString OPTIONAL,
 *    list-Of-Calling-Party-Address           [6] IMPLICIT SEQUENCE  OF
 *       InvolvedParty OPTIONAL,
 *    called-Party-Address                    [7] InvolvedParty OPTIONAL,
 *    serviceRequestTimeStamp                 [9] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    serviceDeliveryStartTimeStamp           [10] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    serviceDeliveryEndTimeStamp             [11] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    recordOpeningTime                       [12] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    recordClosureTime                       [13] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    interOperatorIdentifiers                [14] IMPLICIT InterOperatorIdentifiers OPTIONAL,
 *    localRecordSequenceNumber               [15] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordSequenceNumber                    [16] IMPLICIT INTEGER OPTIONAL,
 *    causeForRecordClosing                   [17] IMPLICIT CauseForRecordClosing OPTIONAL,
 *    incomplete-CDR-Indication               [18] IMPLICIT Incomplete-CDR-Indication OPTIONAL,
 *    iMS-Charging-Identifier                 [19] IMPLICIT OCTET STRING OPTIONAL,
 *    list-Of-SDP-Media-Components            [21] IMPLICIT SEQUENCE  OF
 *       Media-Components-List OPTIONAL,
 *    serviceReasonReturnCode                 [23] IMPLICIT UTF8String OPTIONAL,
 *    recordExtensions                        [25] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    expiresInformation                      [26] IMPLICIT INTEGER OPTIONAL,
 *    event                                   [28] IMPLICIT UTF8String OPTIONAL,
 *    accessNetworkInformation                [29] IMPLICIT OCTET STRING OPTIONAL,
 *    serviceContextID                        [30] IMPLICIT UTF8String OPTIONAL,
 *    list-Of-Early-SDP-Media-Components      [32] IMPLICIT SEQUENCE  OF
 *       Early-Media-Components-List OPTIONAL,
 *    numberPortabilityRouting                [34] IMPLICIT GraphicString OPTIONAL,
 *    carrierSelectRouting                    [35] IMPLICIT GraphicString OPTIONAL,
 *    sessionPriority                         [36] IMPLICIT SessionPriority OPTIONAL,
 *    serviceRequestTimeStampFraction         [37] IMPLICIT INTEGER ( 0 .. 999 ) OPTIONAL,
 *    serviceDeliveryStartTimeStampFraction   [38] IMPLICIT INTEGER ( 0 .. 999 ) OPTIONAL,
 *    serviceDeliveryEndTimeStampFraction     [39] IMPLICIT INTEGER ( 0 .. 999 ) OPTIONAL,
 *    realTimeTariffInformation               [44] IMPLICIT SEQUENCE  OF
 *       RealTimeTariffInformation OPTIONAL,
 *    transit-IOI-List                        [45] IMPLICIT GraphicString OPTIONAL,
 *    fromAddress                             [51] IMPLICIT OCTET STRING OPTIONAL,
 *    listOfReasonHeader                      [55] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL,
 *    additionalAccessNetworkInformation      [56] IMPLICIT OCTET STRING OPTIONAL,
 *    list-Of-AccessNetworkInfoChange         [62] IMPLICIT SEQUENCE  OF
 *       AccessNetworkInfoChange OPTIONAL,
 *    cellularNetworkInformation              [64] IMPLICIT OCTET STRING OPTIONAL,
 *    trunkGroupID                            [80] TrunkGroupID OPTIONAL,
 *    bearerService                           [81] IMPLICIT TransmissionMedium OPTIONAL,
 *    iSUPCause                               [82] IMPLICIT ISUPCause OPTIONAL,
 *    fEIdentifierList                        [83] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MGCFRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * Identifies the type of record. The parameter is derived from the
     * Node-Functionality AVP, defined in TS 32.299 [40].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.42.
     *
     * Category M in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `retransmission`.
     * @description
     *
     * This parameter, when present, indicates that information from
     * retransmitted Diameter ACRs has been used in this CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.44.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
    /**
     * @summary `sIP_Method`.
     * @description
     *
     * Specifies the SIP-method for which the CDR is generated. Only available in
     * session unrelated cases.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.61.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly sIP_Method: OPTIONAL<GraphicString>;
    /**
     * @summary `role_of_Node`.
     * @description
     *
     * The field indicates whether the IMS node (except MRFC) is serving the
     * Originating or the Terminating party. The role can be: Originating (IMS
     * node serving the calling party); Terminating (IMS node serving the called
     * party).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.45.
     *
     * Category OM in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly role_of_Node: OPTIONAL<Role_of_Node>;
    /**
     * @summary `nodeAddress`.
     * @description
     *
     * This item holds the address of the node providing the information for the
     * CDR. This may either be the IP address or the FQDN of the IMS node
     * generating the accounting data. This parameter corresponds to the
     * Origin-Host AVP.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.32.
     *
     * Category OM in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly nodeAddress: OPTIONAL<NodeAddress>;
    /**
     * @summary `session_Id`.
     * @description
     *
     * The Session identification. For a SIP session the Session-ID contains the
     * SIP CALL ID as defined in the Session Initiation Protocol RFC 3261 [401].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.59.
     *
     * Category OM in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly session_Id: OPTIONAL<GraphicString>;
    /**
     * @summary `list_Of_Calling_Party_Address`.
     * @description
     *
     * The address or addresses (Public User ID or Public Service ID) of the
     * party requesting a service or initiating a session. This field may hold
     * the SIP URI (according to RFC 3261 [401]), the Tel URI (according to RFC
     * 3966 402]) or both the SIP URI and the Tel URI of the calling party. The
     * address is obtained from the P-Asserted-Identity header of a non-REGISTER
     * SIP request, either initiating a dialog or a standalone transaction.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.24.
     *
     * Category OM in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly list_Of_Calling_Party_Address: OPTIONAL<InvolvedParty[]>;
    /**
     * @summary `called_Party_Address`.
     * @description
     *
     * In the context of an end-to-end SIP transaction (except for SIP REGISTER
     * and SIP SUBSCRIBE transactions) this field holds the address of the party
     * (Public User ID or Public Service ID) to whom the SIP transaction is
     * posted. The Called Party Address shall be populated with the SIP URI
     * (according to RFC3261 [401]) or Tel URI (according to RFC3966 [402])
     * contained in the outgoing Request-URI of the request (e.g. after ENUM
     * query or after AS interaction). Called Party Address could also be
     * populated with an URN (according to RFC5031 [407]) for an emergency SIP
     * session. For a registration procedure this field holds the party (Public
     * User ID) to be registered. In this case, the Called Party Address field is
     * obtained from the "To" SIP header of the SIP request. For a subscription
     * procedure this field holds the address of the resource for which the
     * originator wants to receive notifications of change of states. In this
     * case, the Called Party Address field is obtained from the outgoing
     * Request-URI of the SIP request.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.9.
     *
     * Category OM in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly called_Party_Address: OPTIONAL<InvolvedParty>;
    /**
     * @summary `serviceRequestTimeStamp`.
     * @description
     *
     * This field contains the time stamp which indicates the time at which the
     * service was requested. This parameter corresponds to SIP Request
     * Timestamp. Present with Charging Data Request [Start] and Charging Data
     * Request [Event]. Category OM in the MGCF CDR (3GPP TS 32.260 V20.1.0
     * clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly serviceRequestTimeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceDeliveryStartTimeStamp`.
     * @description
     *
     * Time of successful session set-up, of a session-unrelated
     * delivery, or of an unsuccessful session or session-unrelated
     * request. It corresponds to the SIP response timestamp. On a
     * partial CDR it is left unchanged (3GPP TS 32.260 V20.1.0
     * clause 6.1.3).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.55.
     *
     * Category OM in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly serviceDeliveryStartTimeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceDeliveryEndTimeStamp`.
     * @description
     *
     * This field records the time at which the service delivery was terminated.
     * It is Present only in SIP session related case. The content of this field
     * corresponds to the SIP-Request-Timestamp AVP of a received ACR[Stop]
     * message indicating a session termination.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.54.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly serviceDeliveryEndTimeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordOpeningTime`.
     * @description
     *
     * A time stamp reflecting the time the CCF opened this record. Present only
     * in SIP session related case.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.40.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly recordOpeningTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordClosureTime`.
     * @description
     *
     * A Time stamp reflecting the time the CCF closed the record.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.38.
     *
     * Category OM in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly recordClosureTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `interOperatorIdentifiers`.
     * @description
     *
     * This list holds the identification of the pair of originating network and
     * terminating network if exchanged via SIP signalling, as recorded in the
     * Inter Operator Identifier (IOI) AVP as described in TS 32.299 [50]. It may
     * occur several times in one CDR. For further information on the IOI
     * exchange via SIP signalling please refer to TS 24.229 [210].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.26.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly interOperatorIdentifiers: OPTIONAL<InterOperatorIdentifiers>;
    /**
     * @summary `localRecordSequenceNumber`.
     * @description
     *
     * This field includes a unique record number created by this node. The
     * number is allocated sequentially for each partial CDR (or whole CDR)
     * including all CDR types. The number is unique within the CCF. The field
     * can be used e.g. to identify missing records in post processing system.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.29.
     *
     * Category OM in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly localRecordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordSequenceNumber`.
     * @description
     *
     * This field contains a running sequence number employed to link the partial
     * records generated by the CCF for a particular session (characterised with
     * the same Charging ID and GGSN address pair). The Record Sequence Number is
     * not present if the record is the only one produced in the CCF for a
     * session. The Record Sequence Number starts from one (1).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.41.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly recordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `causeForRecordClosing`.
     * @description
     *
     * This field contains a reason for the release of the CDR including the
     * following: normal release: end of session; partial record generation: time
     * (duration) limit, maximum number of changes in charging conditions (e.g.
     * maximum number in 'List of Message Bodies' exceeded) or service change
     * (e.g. change in media components, Access Transfer); abnormal termination;
     * management intervention (request due to O&M reasons); CCF initiated record
     * closure. A more detailed reason may be found in the Service Reason Return
     * Code field.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.11.
     *
     * Category OM in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly causeForRecordClosing: OPTIONAL<CauseForRecordClosing>;
    /**
     * @summary `incomplete_CDR_Indication`.
     * @description
     *
     * This field provides additional diagnostics when the CCF detects missing
     * ACRs.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.21.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly incomplete_CDR_Indication: OPTIONAL<Incomplete_CDR_Indication>;
    /**
     * @summary `iMS_Charging_Identifier`.
     * @description
     *
     * This parameter holds the IMS charging identifier (ICID) as generated by
     * the IMS node for the SIP session/transaction. The value of the ICID
     * parameter is identical with the 'icid-value' parameter defined in TS
     * 24.229 [210]. The 'icid-value' is a mandatory part of the
     * P-Charging-Vector and coded as a text-based UTF-8 charset (as are all SIP
     * messages). For further information regarding the composition and usage of
     * the P-Charging-Vector refer to TS 32.260 [20], TS 24.229 [210] and RFC
     * 7315 [404]. The ICID value is globally unique across all 3GPP IMS networks
     * for a time period of at least one month, implying that neither the node
     * that generated this ICID nor any other IMS node reuse this value before
     * the uniqueness period expires. The one month minimum uniqueness period
     * counts from the time of release of the ICID, i.e. the ICID value no longer
     * being used. This can be achieved by using node specific information, e.g.
     * high-granularity time information and/or topology/location information.
     * The exact method how to achieve the uniqueness requirement is an
     * implementation issue. At each SIP session unrelated method, both initial
     * and subsequent (e.g., REGISTER, NOTIFY, MESSAGE etc.), a new, session
     * unrelated ICID is generated at the first IMS network element that
     * processes the method.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.19.
     *
     * Category OM in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `list_Of_SDP_Media_Components`.
     * @description
     *
     * This is a grouped field which may occur several times in one CDR and the
     * content should be filled as described in TS 32.260 [20] clause 5.1.3. The
     * field is present only in a SIP session related case. The List of SDP Media
     * Components contains the following elements: SIP Request Timestamp; SIP
     * Response Timestamp; SDP Media Components; Media Initiator flag; SDP
     * Session Description. Media Initiator Party. The Media Initiator Party is
     * only used for PoC charging. These field elements are described in the
     * appropriate subclause.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.28.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly list_Of_SDP_Media_Components: OPTIONAL<Media_Components_List[]>;
    /**
     * @summary `serviceReasonReturnCode`.
     * @description
     *
     * Provides the returned cause code for the service request (both successful
     * and failure). This parameter corresponds to the Cause-Code AVP.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.57.
     *
     * Category OM in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly serviceReasonReturnCode: OPTIONAL<UTF8String>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * A set of operator/manufacturer specific extensions to the record,
     * conditioned upon existence of an extension.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.39.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `expiresInformation`.
     * @description
     *
     * This field indicates the validity time of either the SIP message or its
     * content, depending on the SIP method. Category OC in the MGCF CDR (3GPP
     * TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly expiresInformation: OPTIONAL<INTEGER>;
    /**
     * @summary `event`.
     * @description
     *
     * The Event parameter holds the content of the "Event" header defined in RFC
     * 3265 [403],
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.15.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly event: OPTIONAL<UTF8String>;
    /**
     * @summary `accessNetworkInformation`.
     * @description
     *
     * Holds the content of one of the SIP P-header "P-Access-Network-Info". In
     * SIP, as per RFC 7315 [404], the content of the "P-Access-Network-Info"
     * header is known as the access-net-spec. When multiple access-net-spec
     * values are transported in a single P-Access-Network-Info header in
     * comma-separated format, then only one access-net-spec value is included.
     * For access types and access classes associated to 3GPP accesses: For GERAN
     * access, the cgi-3gpp field contains the CGI; For UTRAN access, the
     * utran-cell-id-3gpp field contains the LAI and CI, and the utran-sai-3gpp
     * field contains the SAI; For E-UTRAN access, the utran-cell-id-3gpp field
     * contains the TAI and ECGI; For NR access, the utran-cell-id-3gpp field
     * contains the TAI and NCI. The SIP "P-Access-Network-Info" header syntax is
     * specified in TS 24.229 [210] clause 7.2A.4. For access types and access
     * classes associated to trusted WLAN access: the i-wlan-node-id field
     * contains the BSSID, and when available, the operator-specific-GI field
     * contains the Geographical Identifier. For access types and access classes
     * associated to untrusted WLAN access, the i-wlan-node-id field contains the
     * BSSID, and UE local IP address, ePDG IP Address, and TCP source port, UDP
     * source port are contained in corresponding dedicated fields.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.2.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly accessNetworkInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceContextID`.
     * @description
     *
     * This field contains the Service Context Id from Diameter Accounting, if
     * Diameter Accounting was used and the field included. It identifies the
     * service, sub-system or domain and release that the CDR is applicable to.
     * The contents are described in TS 32.299 [50].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.1.2.
     *
     * Category OM in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly serviceContextID: OPTIONAL<UTF8String>;
    /**
     * @summary `list_Of_Early_SDP_Media_Components`.
     * @description
     *
     * This is a grouped field which may occur several times in one CDR. This
     * field describes session, media parameters and timestamps related to media
     * components set to active according to SDP signalling exchanged during a
     * SIP session establishment and before the final successful or unsuccessful
     * SIP ANSWER to the initial SIP INVITE message is received. Once a media
     * component has been set to active, subsequent status changes shall also be
     * registered. This field applies only to SIP session related cases, but it
     * may be present both in event CDRs (unsuccessful session establishment) and
     * session CDRs (successful session establishment). The List of Early SDP
     * Media Components contains the following elements: SDP Offer Timestamp; SDP
     * Answer Timestamp; SDP Media Components; Media Initiator flag; SDP Session
     * Description. These fields are described in the appropriate subclause.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.25.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly list_Of_Early_SDP_Media_Components: OPTIONAL<Early_Media_Components_List[]>;
    /**
     * @summary `numberPortabilityRouting`.
     * @description
     *
     * This item holds information on number portability routing, received by
     * S-CSCF during ENUM/DNS processes. The parameter corresponds to the
     * NumberPortabilityRoutingInformation AVP.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.33.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly numberPortabilityRouting: OPTIONAL<GraphicString>;
    /**
     * @summary `carrierSelectRouting`.
     * @description
     *
     * This item holds information on carrier select routing, received by S-CSCF
     * during ENUM/DNS processes. The parameter corresponds to the
     * CarrierSelectRoutingInformation AVP.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.10.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly carrierSelectRouting: OPTIONAL<GraphicString>;
    /**
     * @summary `sessionPriority`.
     * @description
     *
     * This field contains the priority level of the session. The value of the
     * parameter is derived from Resource-Priority header field and the rules for
     * the translation depend on operator policy described in TS 24.229[210].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.60.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly sessionPriority: OPTIONAL<SessionPriority>;
    /**
     * @summary `serviceRequestTimeStampFraction`.
     * @description
     *
     * This parameter contains the milliseconds fraction in relation to the
     * Service Request Time Stamp. Category OM in the MGCF CDR (3GPP TS 32.260
     * V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly serviceRequestTimeStampFraction: OPTIONAL<INTEGER>;
    /**
     * @summary `serviceDeliveryStartTimeStampFraction`.
     * @description
     *
     * This parameter contains the milliseconds fraction in relation to Service
     * Delivery Start Time Stamp.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.55A.
     *
     * Category OM in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly serviceDeliveryStartTimeStampFraction: OPTIONAL<INTEGER>;
    /**
     * @summary `serviceDeliveryEndTimeStampFraction`.
     * @description
     *
     * This parameter contains the milliseconds fraction in relation to Service
     * Delivery End Time Stamp.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.54A.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly serviceDeliveryEndTimeStampFraction: OPTIONAL<INTEGER>;
    /**
     * @summary `realTimeTariffInformation`.
     * @description
     *
     * This is a field containing the real time tariff information that may be
     * exchanged in the SIP transaction, encoded in a XML body as described in
     * the TS 29.658 [225]. The RTTI information may be captured in the charging
     * information and it is operator configurable as whether it is used in its
     * original XML format or mapped on a detailed structure of parameters. The
     * RTTI information XML schema in XML format is given in the TS 29.658 [225].
     * The Tariff Information structure of parameters is provided in the TS
     * 32.280 [40]. The Real Time Tariff Information contains one of the
     * following elements: Tariff XML; Tariff Information. These field elements
     * are described in the appropriate subclause.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.37.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly realTimeTariffInformation: OPTIONAL<RealTimeTariffInformation[]>;
    /**
     * @summary `transit_IOI_List`.
     * @description
     *
     * This parameter holds the Transit-IOI List of the P-Charging-Vector header,
     * as recorded in the Transit-IOI-List AVP as defined in TS 32.299 [50].
     * Multiple occurrences of this field, shall be in chronological order, i.e.
     * the value in the SIP request is listed first. If only a value for the SIP
     * response is available, the Transit IOI List for the SIP request shall be
     * included with the value "unknown". For further information on the Transit
     * IOI exchange via SIP signalling please refer to TS 24.229 [210].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.68B.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly transit_IOI_List: OPTIONAL<GraphicString>;
    /**
     * @summary `fromAddress`.
     * @description
     *
     * This field holds the information from the SIP From Header.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.16A.
     *
     * Category OM in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly fromAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `listOfReasonHeader`.
     * @description
     *
     * This parameter contains the content of the Reason-header in the SIP BYE
     * and SIP CANCEL, and may contain multiple entries if there are multiple
     * Reason-headers within a SIP BYE or SIP CANCEL
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.28A.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly listOfReasonHeader: OPTIONAL<GraphicString[]>;
    /**
     * @summary `additionalAccessNetworkInformation`.
     * @description
     *
     * Holds the content of an additional SIP P-header "P-Access-Network-Info"
     * when it is available. In SIP, as per RFC 7315 [404], the content of the
     * "P-Access-Network-Info" header is known as the access-net-spec. When
     * multiple access-net-spec values are transported in a single
     * P-Access-Network-Info header in comma-separated format, then only one
     * access-net-spec value is included.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.2A.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly additionalAccessNetworkInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `list_Of_AccessNetworkInfoChange`.
     * @description
     *
     * This group field may occur several times in the CDR and each occurrence
     * holds information on subsequent changes in one or two SIP P-header(s)
     * "P-Access-Network-Info" together with the time the location was acquired.
     * Each element of the list may include the following fields: Access Network
     * Information; Additional Access Network Information; Access ChangeTime.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.21Ca.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly list_Of_AccessNetworkInfoChange: OPTIONAL<AccessNetworkInfoChange[]>;
    /**
     * @summary `cellularNetworkInformation`.
     * @description
     *
     * Holds the content of one SIP header "Cellular-Network-Info". As per TS
     * 24.229 [210], a User Agent (UA) supporting one or more cellular radio
     * access technology (e.g. E-UTRAN) but using a non-cellular IP-CAN to access
     * the IM CN subsystem can use this header field to relay information to its
     * service provider about the radio cell identity of the cellular radio
     * access network on which the UE most recently camped.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.11A.
     *
     * Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly cellularNetworkInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `trunkGroupID`.
     * @description
     *
     * Contains the outgoing trunk group ID for an outgoing session/call or the
     * incoming trunk group ID for an incoming session/call.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.69.
     *
     * Category OM in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly trunkGroupID: OPTIONAL<TrunkGroupID>;
    /**
     * @summary `bearerService`.
     * @description
     *
     * Holds the used bearer service for the PSTN leg.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.8.
     *
     * Category OM in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly bearerService: OPTIONAL<TransmissionMedium>;
    /**
     * @summary `iSUPCause`.
     * @description
     *
     * When session is released via ISUP, this IE indicates the reason the call
     * was released. Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0 clause
     * 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly iSUPCause: OPTIONAL<ISUPCause>;
    /**
     * @summary `fEIdentifierList`.
     * @description
     *
     * This parameter corresponds to FE Identifier List of the
     * P-Charging-Vector defined in TS 24.229 [204]. This element contains one
     * or more IM CN subsystem functional entity addresses and/or AS and
     * application identifiers where the IM CN subsystem functional entity does
     * create charging information for the related CDR of this IM CN subsystem
     * functional entity. Category OC in the MGCF CDR (3GPP TS 32.260 V20.1.0
     * clause 6.1.3.7).
     *
     * @public
     * @readonly
     */
    readonly fEIdentifierList: OPTIONAL<GraphicString[]>;

    constructor (
        recordType: RecordType,
        retransmission: OPTIONAL<NULL>,
        sIP_Method: OPTIONAL<GraphicString>,
        role_of_Node: OPTIONAL<Role_of_Node>,
        nodeAddress: OPTIONAL<NodeAddress>,
        session_Id: OPTIONAL<GraphicString>,
        list_Of_Calling_Party_Address: OPTIONAL<InvolvedParty[]>,
        called_Party_Address: OPTIONAL<InvolvedParty>,
        serviceRequestTimeStamp: OPTIONAL<OCTET_STRING>,
        serviceDeliveryStartTimeStamp: OPTIONAL<OCTET_STRING>,
        serviceDeliveryEndTimeStamp: OPTIONAL<OCTET_STRING>,
        recordOpeningTime: OPTIONAL<OCTET_STRING>,
        recordClosureTime: OPTIONAL<OCTET_STRING>,
        interOperatorIdentifiers: OPTIONAL<InterOperatorIdentifiers>,
        localRecordSequenceNumber: OPTIONAL<INTEGER>,
        recordSequenceNumber: OPTIONAL<INTEGER>,
        causeForRecordClosing: OPTIONAL<CauseForRecordClosing>,
        incomplete_CDR_Indication: OPTIONAL<Incomplete_CDR_Indication>,
        iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>,
        list_Of_SDP_Media_Components: OPTIONAL<Media_Components_List[]>,
        serviceReasonReturnCode: OPTIONAL<UTF8String>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        expiresInformation: OPTIONAL<INTEGER>,
        event: OPTIONAL<UTF8String>,
        accessNetworkInformation: OPTIONAL<OCTET_STRING>,
        serviceContextID: OPTIONAL<UTF8String>,
        list_Of_Early_SDP_Media_Components: OPTIONAL<Early_Media_Components_List[]>,
        numberPortabilityRouting: OPTIONAL<GraphicString>,
        carrierSelectRouting: OPTIONAL<GraphicString>,
        sessionPriority: OPTIONAL<SessionPriority>,
        serviceRequestTimeStampFraction: OPTIONAL<INTEGER>,
        serviceDeliveryStartTimeStampFraction: OPTIONAL<INTEGER>,
        serviceDeliveryEndTimeStampFraction: OPTIONAL<INTEGER>,
        realTimeTariffInformation: OPTIONAL<RealTimeTariffInformation[]>,
        transit_IOI_List: OPTIONAL<GraphicString>,
        fromAddress: OPTIONAL<OCTET_STRING>,
        listOfReasonHeader: OPTIONAL<GraphicString[]>,
        additionalAccessNetworkInformation: OPTIONAL<OCTET_STRING>,
        list_Of_AccessNetworkInfoChange: OPTIONAL<AccessNetworkInfoChange[]>,
        cellularNetworkInformation: OPTIONAL<OCTET_STRING>,
        trunkGroupID: OPTIONAL<TrunkGroupID>,
        bearerService: OPTIONAL<TransmissionMedium>,
        iSUPCause: OPTIONAL<ISUPCause>,
        fEIdentifierList: OPTIONAL<GraphicString[]>
    ) {
        this.recordType = recordType;
        this.retransmission = retransmission;
        this.sIP_Method = sIP_Method;
        this.role_of_Node = role_of_Node;
        this.nodeAddress = nodeAddress;
        this.session_Id = session_Id;
        this.list_Of_Calling_Party_Address = list_Of_Calling_Party_Address;
        this.called_Party_Address = called_Party_Address;
        this.serviceRequestTimeStamp = serviceRequestTimeStamp;
        this.serviceDeliveryStartTimeStamp = serviceDeliveryStartTimeStamp;
        this.serviceDeliveryEndTimeStamp = serviceDeliveryEndTimeStamp;
        this.recordOpeningTime = recordOpeningTime;
        this.recordClosureTime = recordClosureTime;
        this.interOperatorIdentifiers = interOperatorIdentifiers;
        this.localRecordSequenceNumber = localRecordSequenceNumber;
        this.recordSequenceNumber = recordSequenceNumber;
        this.causeForRecordClosing = causeForRecordClosing;
        this.incomplete_CDR_Indication = incomplete_CDR_Indication;
        this.iMS_Charging_Identifier = iMS_Charging_Identifier;
        this.list_Of_SDP_Media_Components = list_Of_SDP_Media_Components;
        this.serviceReasonReturnCode = serviceReasonReturnCode;
        this.recordExtensions = recordExtensions;
        this.expiresInformation = expiresInformation;
        this.event = event;
        this.accessNetworkInformation = accessNetworkInformation;
        this.serviceContextID = serviceContextID;
        this.list_Of_Early_SDP_Media_Components = list_Of_Early_SDP_Media_Components;
        this.numberPortabilityRouting = numberPortabilityRouting;
        this.carrierSelectRouting = carrierSelectRouting;
        this.sessionPriority = sessionPriority;
        this.serviceRequestTimeStampFraction = serviceRequestTimeStampFraction;
        this.serviceDeliveryStartTimeStampFraction = serviceDeliveryStartTimeStampFraction;
        this.serviceDeliveryEndTimeStampFraction = serviceDeliveryEndTimeStampFraction;
        this.realTimeTariffInformation = realTimeTariffInformation;
        this.transit_IOI_List = transit_IOI_List;
        this.fromAddress = fromAddress;
        this.listOfReasonHeader = listOfReasonHeader;
        this.additionalAccessNetworkInformation = additionalAccessNetworkInformation;
        this.list_Of_AccessNetworkInfoChange = list_Of_AccessNetworkInfoChange;
        this.cellularNetworkInformation = cellularNetworkInformation;
        this.trunkGroupID = trunkGroupID;
        this.bearerService = bearerService;
        this.iSUPCause = iSUPCause;
        this.fEIdentifierList = fEIdentifierList;
    
        if (this.serviceRequestTimeStamp !== undefined && (this.serviceRequestTimeStamp.length !== 9)) {
            throw new ASN1SizeError("MGCFRecord.serviceRequestTimeStamp violates SIZE constraint");
        }
        if (this.serviceDeliveryStartTimeStamp !== undefined && (this.serviceDeliveryStartTimeStamp.length !== 9)) {
            throw new ASN1SizeError("MGCFRecord.serviceDeliveryStartTimeStamp violates SIZE constraint");
        }
        if (this.serviceDeliveryEndTimeStamp !== undefined && (this.serviceDeliveryEndTimeStamp.length !== 9)) {
            throw new ASN1SizeError("MGCFRecord.serviceDeliveryEndTimeStamp violates SIZE constraint");
        }
        if (this.recordOpeningTime !== undefined && (this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("MGCFRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.recordClosureTime !== undefined && (this.recordClosureTime.length !== 9)) {
            throw new ASN1SizeError("MGCFRecord.recordClosureTime violates SIZE constraint");
        }
        if (this.localRecordSequenceNumber !== undefined && (this.localRecordSequenceNumber < 0 || this.localRecordSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("MGCFRecord.localRecordSequenceNumber violates INTEGER range");
        }
        if (this.serviceRequestTimeStampFraction !== undefined && (this.serviceRequestTimeStampFraction < 0 || this.serviceRequestTimeStampFraction > 999)) {
            throw new ASN1OverflowError("MGCFRecord.serviceRequestTimeStampFraction violates INTEGER range");
        }
        if (this.serviceDeliveryStartTimeStampFraction !== undefined && (this.serviceDeliveryStartTimeStampFraction < 0 || this.serviceDeliveryStartTimeStampFraction > 999)) {
            throw new ASN1OverflowError("MGCFRecord.serviceDeliveryStartTimeStampFraction violates INTEGER range");
        }
        if (this.serviceDeliveryEndTimeStampFraction !== undefined && (this.serviceDeliveryEndTimeStampFraction < 0 || this.serviceDeliveryEndTimeStampFraction > 999)) {
            throw new ASN1OverflowError("MGCFRecord.serviceDeliveryEndTimeStampFraction violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a MGCFRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MGCFRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MGCFRecord`.
     * @returns {MGCFRecord}
     */
    public static _from_object (_o: { [_K in keyof (MGCFRecord)]: (MGCFRecord)[_K] }): MGCFRecord {
        return new MGCFRecord(_o.recordType, _o.retransmission, _o.sIP_Method, _o.role_of_Node, _o.nodeAddress, _o.session_Id, _o.list_Of_Calling_Party_Address, _o.called_Party_Address, _o.serviceRequestTimeStamp, _o.serviceDeliveryStartTimeStamp, _o.serviceDeliveryEndTimeStamp, _o.recordOpeningTime, _o.recordClosureTime, _o.interOperatorIdentifiers, _o.localRecordSequenceNumber, _o.recordSequenceNumber, _o.causeForRecordClosing, _o.incomplete_CDR_Indication, _o.iMS_Charging_Identifier, _o.list_Of_SDP_Media_Components, _o.serviceReasonReturnCode, _o.recordExtensions, _o.expiresInformation, _o.event, _o.accessNetworkInformation, _o.serviceContextID, _o.list_Of_Early_SDP_Media_Components, _o.numberPortabilityRouting, _o.carrierSelectRouting, _o.sessionPriority, _o.serviceRequestTimeStampFraction, _o.serviceDeliveryStartTimeStampFraction, _o.serviceDeliveryEndTimeStampFraction, _o.realTimeTariffInformation, _o.transit_IOI_List, _o.fromAddress, _o.listOfReasonHeader, _o.additionalAccessNetworkInformation, _o.list_Of_AccessNetworkInfoChange, _o.cellularNetworkInformation, _o.trunkGroupID, _o.bearerService, _o.iSUPCause, _o.fEIdentifierList);
    }

        /**
         * @summary The enum used as the type of the component `role_of_Node`
         * @public
         * @static
         */

    public static _enum_for_role_of_Node = _enum_for_Role_of_Node;        /**
         * @summary The enum used as the type of the component `causeForRecordClosing`
         * @public
         * @static
         */

    public static _enum_for_causeForRecordClosing = _enum_for_CauseForRecordClosing;        /**
         * @summary The enum used as the type of the component `sessionPriority`
         * @public
         * @static
         */

    public static _enum_for_sessionPriority = _enum_for_SessionPriority;
}

/**
 * @summary The Leading Root Component Types of MGCFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MGCFRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sIP-Method", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("role-of-Node", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("nodeAddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("session-Id", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("list-Of-Calling-Party-Address", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("called-Party-Address", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("serviceRequestTimeStamp", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("serviceDeliveryStartTimeStamp", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("serviceDeliveryEndTimeStamp", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("recordOpeningTime", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("recordClosureTime", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("interOperatorIdentifiers", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("localRecordSequenceNumber", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("recordSequenceNumber", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("causeForRecordClosing", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("incomplete-CDR-Indication", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("iMS-Charging-Identifier", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("list-Of-SDP-Media-Components", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("serviceReasonReturnCode", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("expiresInformation", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("event", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("accessNetworkInformation", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("serviceContextID", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("list-Of-Early-SDP-Media-Components", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("numberPortabilityRouting", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("carrierSelectRouting", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("sessionPriority", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("serviceRequestTimeStampFraction", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("serviceDeliveryStartTimeStampFraction", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("serviceDeliveryEndTimeStampFraction", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("realTimeTariffInformation", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("transit-IOI-List", true, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("fromAddress", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("listOfReasonHeader", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("additionalAccessNetworkInformation", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("list-Of-AccessNetworkInfoChange", true, $.hasTag(_TagClass.context, 62)),
    new $.ComponentSpec("cellularNetworkInformation", true, $.hasTag(_TagClass.context, 64)),
    new $.ComponentSpec("trunkGroupID", true, $.hasTag(_TagClass.context, 80)),
    new $.ComponentSpec("bearerService", true, $.hasTag(_TagClass.context, 81)),
    new $.ComponentSpec("iSUPCause", true, $.hasTag(_TagClass.context, 82)),
    new $.ComponentSpec("fEIdentifierList", true, $.hasTag(_TagClass.context, 83))
];

/**
 * @summary The Trailing Root Component Types of MGCFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MGCFRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MGCFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MGCFRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MGCFRecord: $.ASN1Decoder<MGCFRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MGCFRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MGCFRecord (el: _Element): MGCFRecord {
    if (!_cached_decoder_for_MGCFRecord) { _cached_decoder_for_MGCFRecord = function (el: _Element): MGCFRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let retransmission: OPTIONAL<NULL>;
    let sIP_Method: OPTIONAL<GraphicString>;
    let role_of_Node: OPTIONAL<Role_of_Node>;
    let nodeAddress: OPTIONAL<NodeAddress>;
    let session_Id: OPTIONAL<GraphicString>;
    let list_Of_Calling_Party_Address: OPTIONAL<InvolvedParty[]>;
    let called_Party_Address: OPTIONAL<InvolvedParty>;
    let serviceRequestTimeStamp: OPTIONAL<OCTET_STRING>;
    let serviceDeliveryStartTimeStamp: OPTIONAL<OCTET_STRING>;
    let serviceDeliveryEndTimeStamp: OPTIONAL<OCTET_STRING>;
    let recordOpeningTime: OPTIONAL<OCTET_STRING>;
    let recordClosureTime: OPTIONAL<OCTET_STRING>;
    let interOperatorIdentifiers: OPTIONAL<InterOperatorIdentifiers>;
    let localRecordSequenceNumber: OPTIONAL<INTEGER>;
    let recordSequenceNumber: OPTIONAL<INTEGER>;
    let causeForRecordClosing: OPTIONAL<CauseForRecordClosing>;
    let incomplete_CDR_Indication: OPTIONAL<Incomplete_CDR_Indication>;
    let iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    let list_Of_SDP_Media_Components: OPTIONAL<Media_Components_List[]>;
    let serviceReasonReturnCode: OPTIONAL<UTF8String>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let expiresInformation: OPTIONAL<INTEGER>;
    let event: OPTIONAL<UTF8String>;
    let accessNetworkInformation: OPTIONAL<OCTET_STRING>;
    let serviceContextID: OPTIONAL<UTF8String>;
    let list_Of_Early_SDP_Media_Components: OPTIONAL<Early_Media_Components_List[]>;
    let numberPortabilityRouting: OPTIONAL<GraphicString>;
    let carrierSelectRouting: OPTIONAL<GraphicString>;
    let sessionPriority: OPTIONAL<SessionPriority>;
    let serviceRequestTimeStampFraction: OPTIONAL<INTEGER>;
    let serviceDeliveryStartTimeStampFraction: OPTIONAL<INTEGER>;
    let serviceDeliveryEndTimeStampFraction: OPTIONAL<INTEGER>;
    let realTimeTariffInformation: OPTIONAL<RealTimeTariffInformation[]>;
    let transit_IOI_List: OPTIONAL<GraphicString>;
    let fromAddress: OPTIONAL<OCTET_STRING>;
    let listOfReasonHeader: OPTIONAL<GraphicString[]>;
    let additionalAccessNetworkInformation: OPTIONAL<OCTET_STRING>;
    let list_Of_AccessNetworkInfoChange: OPTIONAL<AccessNetworkInfoChange[]>;
    let cellularNetworkInformation: OPTIONAL<OCTET_STRING>;
    let trunkGroupID: OPTIONAL<TrunkGroupID>;
    let bearerService: OPTIONAL<TransmissionMedium>;
    let iSUPCause: OPTIONAL<ISUPCause>;
    let fEIdentifierList: OPTIONAL<GraphicString[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "sIP-Method": (_el: _Element): void => { sIP_Method = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "role-of-Node": (_el: _Element): void => { role_of_Node = $._decode_implicit<Role_of_Node>(() => _decode_Role_of_Node)(_el); },
        "nodeAddress": (_el: _Element): void => { nodeAddress = $._decode_explicit<NodeAddress>(() => _decode_NodeAddress)(_el); },
        "session-Id": (_el: _Element): void => { session_Id = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "list-Of-Calling-Party-Address": (_el: _Element): void => { list_Of_Calling_Party_Address = $._decode_implicit<InvolvedParty[]>(() => $._decodeSequenceOf<InvolvedParty>(() => _decode_InvolvedParty))(_el); },
        "called-Party-Address": (_el: _Element): void => { called_Party_Address = $._decode_explicit<InvolvedParty>(() => _decode_InvolvedParty)(_el); },
        "serviceRequestTimeStamp": (_el: _Element): void => { serviceRequestTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceDeliveryStartTimeStamp": (_el: _Element): void => { serviceDeliveryStartTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceDeliveryEndTimeStamp": (_el: _Element): void => { serviceDeliveryEndTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordClosureTime": (_el: _Element): void => { recordClosureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "interOperatorIdentifiers": (_el: _Element): void => { interOperatorIdentifiers = $._decode_implicit<InterOperatorIdentifiers>(() => _decode_InterOperatorIdentifiers)(_el); },
        "localRecordSequenceNumber": (_el: _Element): void => { localRecordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordSequenceNumber": (_el: _Element): void => { recordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForRecordClosing": (_el: _Element): void => { causeForRecordClosing = $._decode_implicit<CauseForRecordClosing>(() => _decode_CauseForRecordClosing)(_el); },
        "incomplete-CDR-Indication": (_el: _Element): void => { incomplete_CDR_Indication = $._decode_implicit<Incomplete_CDR_Indication>(() => _decode_Incomplete_CDR_Indication)(_el); },
        "iMS-Charging-Identifier": (_el: _Element): void => { iMS_Charging_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "list-Of-SDP-Media-Components": (_el: _Element): void => { list_Of_SDP_Media_Components = $._decode_implicit<Media_Components_List[]>(() => $._decodeSequenceOf<Media_Components_List>(() => _decode_Media_Components_List))(_el); },
        "serviceReasonReturnCode": (_el: _Element): void => { serviceReasonReturnCode = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "expiresInformation": (_el: _Element): void => { expiresInformation = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "event": (_el: _Element): void => { event = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "accessNetworkInformation": (_el: _Element): void => { accessNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceContextID": (_el: _Element): void => { serviceContextID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "list-Of-Early-SDP-Media-Components": (_el: _Element): void => { list_Of_Early_SDP_Media_Components = $._decode_implicit<Early_Media_Components_List[]>(() => $._decodeSequenceOf<Early_Media_Components_List>(() => _decode_Early_Media_Components_List))(_el); },
        "numberPortabilityRouting": (_el: _Element): void => { numberPortabilityRouting = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "carrierSelectRouting": (_el: _Element): void => { carrierSelectRouting = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "sessionPriority": (_el: _Element): void => { sessionPriority = $._decode_implicit<SessionPriority>(() => _decode_SessionPriority)(_el); },
        "serviceRequestTimeStampFraction": (_el: _Element): void => { serviceRequestTimeStampFraction = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serviceDeliveryStartTimeStampFraction": (_el: _Element): void => { serviceDeliveryStartTimeStampFraction = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serviceDeliveryEndTimeStampFraction": (_el: _Element): void => { serviceDeliveryEndTimeStampFraction = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "realTimeTariffInformation": (_el: _Element): void => { realTimeTariffInformation = $._decode_implicit<RealTimeTariffInformation[]>(() => $._decodeSequenceOf<RealTimeTariffInformation>(() => _decode_RealTimeTariffInformation))(_el); },
        "transit-IOI-List": (_el: _Element): void => { transit_IOI_List = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "fromAddress": (_el: _Element): void => { fromAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "listOfReasonHeader": (_el: _Element): void => { listOfReasonHeader = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); },
        "additionalAccessNetworkInformation": (_el: _Element): void => { additionalAccessNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "list-Of-AccessNetworkInfoChange": (_el: _Element): void => { list_Of_AccessNetworkInfoChange = $._decode_implicit<AccessNetworkInfoChange[]>(() => $._decodeSequenceOf<AccessNetworkInfoChange>(() => _decode_AccessNetworkInfoChange))(_el); },
        "cellularNetworkInformation": (_el: _Element): void => { cellularNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "trunkGroupID": (_el: _Element): void => { trunkGroupID = $._decode_explicit<TrunkGroupID>(() => _decode_TrunkGroupID)(_el); },
        "bearerService": (_el: _Element): void => { bearerService = $._decode_implicit<TransmissionMedium>(() => _decode_TransmissionMedium)(_el); },
        "iSUPCause": (_el: _Element): void => { iSUPCause = $._decode_implicit<ISUPCause>(() => _decode_ISUPCause)(_el); },
        "fEIdentifierList": (_el: _Element): void => { fEIdentifierList = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MGCFRecord,
        _extension_additions_list_spec_for_MGCFRecord,
        _root_component_type_list_2_spec_for_MGCFRecord,
        undefined,
    );
    return new MGCFRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        retransmission,
        sIP_Method,
        role_of_Node,
        nodeAddress,
        session_Id,
        list_Of_Calling_Party_Address,
        called_Party_Address,
        serviceRequestTimeStamp,
        serviceDeliveryStartTimeStamp,
        serviceDeliveryEndTimeStamp,
        recordOpeningTime,
        recordClosureTime,
        interOperatorIdentifiers,
        localRecordSequenceNumber,
        recordSequenceNumber,
        causeForRecordClosing,
        incomplete_CDR_Indication,
        iMS_Charging_Identifier,
        list_Of_SDP_Media_Components,
        serviceReasonReturnCode,
        recordExtensions,
        expiresInformation,
        event,
        accessNetworkInformation,
        serviceContextID,
        list_Of_Early_SDP_Media_Components,
        numberPortabilityRouting,
        carrierSelectRouting,
        sessionPriority,
        serviceRequestTimeStampFraction,
        serviceDeliveryStartTimeStampFraction,
        serviceDeliveryEndTimeStampFraction,
        realTimeTariffInformation,
        transit_IOI_List,
        fromAddress,
        listOfReasonHeader,
        additionalAccessNetworkInformation,
        list_Of_AccessNetworkInfoChange,
        cellularNetworkInformation,
        trunkGroupID,
        bearerService,
        iSUPCause,
        fEIdentifierList
    );
}; }
    return _cached_decoder_for_MGCFRecord(el);
}

let _cached_encoder_for_MGCFRecord: $.ASN1Encoder<MGCFRecord> | null = null;

/**
 * @summary Encodes a(n) MGCFRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MGCFRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MGCFRecord (value: MGCFRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MGCFRecord) { _cached_encoder_for_MGCFRecord = function (value: MGCFRecord, _elGetter: $.ASN1Encoder<MGCFRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.sIP_Method !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeGraphicString, $.BER)(value.sIP_Method, $.BER));
    }
    if (value.role_of_Node !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Role_of_Node, $.BER)(value.role_of_Node, $.BER));
    }
    if (value.nodeAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_NodeAddress, $.BER)(value.nodeAddress, $.BER));
    }
    if (value.session_Id !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeGraphicString, $.BER)(value.session_Id, $.BER));
    }
    if (value.list_Of_Calling_Party_Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<InvolvedParty>(() => _encode_InvolvedParty, $.BER), $.BER)(value.list_Of_Calling_Party_Address, $.BER));
    }
    if (value.called_Party_Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_InvolvedParty, $.BER)(value.called_Party_Address, $.BER));
    }
    if (value.serviceRequestTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.serviceRequestTimeStamp, $.BER));
    }
    if (value.serviceDeliveryStartTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.serviceDeliveryStartTimeStamp, $.BER));
    }
    if (value.serviceDeliveryEndTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.serviceDeliveryEndTimeStamp, $.BER));
    }
    if (value.recordOpeningTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    }
    if (value.recordClosureTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.recordClosureTime, $.BER));
    }
    if (value.interOperatorIdentifiers !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_InterOperatorIdentifiers, $.BER)(value.interOperatorIdentifiers, $.BER));
    }
    if (value.localRecordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.localRecordSequenceNumber, $.BER));
    }
    if (value.recordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER)(value.recordSequenceNumber, $.BER));
    }
    if (value.causeForRecordClosing !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_CauseForRecordClosing, $.BER)(value.causeForRecordClosing, $.BER));
    }
    if (value.incomplete_CDR_Indication !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_Incomplete_CDR_Indication, $.BER)(value.incomplete_CDR_Indication, $.BER));
    }
    if (value.iMS_Charging_Identifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER)(value.iMS_Charging_Identifier, $.BER));
    }
    if (value.list_Of_SDP_Media_Components !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeSequenceOf<Media_Components_List>(() => _encode_Media_Components_List, $.BER), $.BER)(value.list_Of_SDP_Media_Components, $.BER));
    }
    if (value.serviceReasonReturnCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeUTF8String, $.BER)(value.serviceReasonReturnCode, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.expiresInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeInteger, $.BER)(value.expiresInformation, $.BER));
    }
    if (value.event !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => $._encodeUTF8String, $.BER)(value.event, $.BER));
    }
    if (value.accessNetworkInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.accessNetworkInformation, $.BER));
    }
    if (value.serviceContextID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => $._encodeUTF8String, $.BER)(value.serviceContextID, $.BER));
    }
    if (value.list_Of_Early_SDP_Media_Components !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => $._encodeSequenceOf<Early_Media_Components_List>(() => _encode_Early_Media_Components_List, $.BER), $.BER)(value.list_Of_Early_SDP_Media_Components, $.BER));
    }
    if (value.numberPortabilityRouting !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeGraphicString, $.BER)(value.numberPortabilityRouting, $.BER));
    }
    if (value.carrierSelectRouting !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 35, () => $._encodeGraphicString, $.BER)(value.carrierSelectRouting, $.BER));
    }
    if (value.sessionPriority !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => _encode_SessionPriority, $.BER)(value.sessionPriority, $.BER));
    }
    if (value.serviceRequestTimeStampFraction !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => $._encodeInteger, $.BER)(value.serviceRequestTimeStampFraction, $.BER));
    }
    if (value.serviceDeliveryStartTimeStampFraction !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => $._encodeInteger, $.BER)(value.serviceDeliveryStartTimeStampFraction, $.BER));
    }
    if (value.serviceDeliveryEndTimeStampFraction !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => $._encodeInteger, $.BER)(value.serviceDeliveryEndTimeStampFraction, $.BER));
    }
    if (value.realTimeTariffInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 44, () => $._encodeSequenceOf<RealTimeTariffInformation>(() => _encode_RealTimeTariffInformation, $.BER), $.BER)(value.realTimeTariffInformation, $.BER));
    }
    if (value.transit_IOI_List !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 45, () => $._encodeGraphicString, $.BER)(value.transit_IOI_List, $.BER));
    }
    if (value.fromAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 51, () => $._encodeOctetString, $.BER)(value.fromAddress, $.BER));
    }
    if (value.listOfReasonHeader !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.listOfReasonHeader, $.BER));
    }
    if (value.additionalAccessNetworkInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => $._encodeOctetString, $.BER)(value.additionalAccessNetworkInformation, $.BER));
    }
    if (value.list_Of_AccessNetworkInfoChange !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 62, () => $._encodeSequenceOf<AccessNetworkInfoChange>(() => _encode_AccessNetworkInfoChange, $.BER), $.BER)(value.list_Of_AccessNetworkInfoChange, $.BER));
    }
    if (value.cellularNetworkInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 64, () => $._encodeOctetString, $.BER)(value.cellularNetworkInformation, $.BER));
    }
    if (value.trunkGroupID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 80, () => _encode_TrunkGroupID, $.BER)(value.trunkGroupID, $.BER));
    }
    if (value.bearerService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 81, () => _encode_TransmissionMedium, $.BER)(value.bearerService, $.BER));
    }
    if (value.iSUPCause !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 82, () => _encode_ISUPCause, $.BER)(value.iSUPCause, $.BER));
    }
    if (value.fEIdentifierList !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 83, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.fEIdentifierList, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MGCFRecord(value, elGetter);
}


/* eslint-enable */
