/* eslint-disable */
import {
    type GraphicString,
    type INTEGER,
    type NULL,
    type OCTET_STRING,
    type OPTIONAL,
    type UTF8String,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RecordType, _decode_RecordType, _encode_RecordType } from "../IMSChargingDataTypes/RecordType.ta.mjs";
import { Role_of_Node, _decode_Role_of_Node, _encode_Role_of_Node, _enum_for_Role_of_Node } from "../IMSChargingDataTypes/Role-of-Node.ta.mjs";
import { type NodeAddress, _decode_NodeAddress, _encode_NodeAddress } from "../IMSChargingDataTypes/NodeAddress.ta.mjs";
import { type InvolvedParty, _decode_InvolvedParty, _encode_InvolvedParty } from "../IMSChargingDataTypes/InvolvedParty.ta.mjs";
import { InterOperatorIdentifiers, _decode_InterOperatorIdentifiers, _encode_InterOperatorIdentifiers } from "../IMSChargingDataTypes/InterOperatorIdentifiers.ta.mjs";
import { CauseForRecordClosing, _decode_CauseForRecordClosing, _encode_CauseForRecordClosing, _enum_for_CauseForRecordClosing } from "../IMSChargingDataTypes/CauseForRecordClosing.ta.mjs";
import { Incomplete_CDR_Indication, _decode_Incomplete_CDR_Indication, _encode_Incomplete_CDR_Indication } from "../IMSChargingDataTypes/Incomplete-CDR-Indication.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../IMSChargingDataTypes/ManagementExtension.ta.mjs";
import { SessionPriority, _decode_SessionPriority, _encode_SessionPriority, _enum_for_SessionPriority } from "../IMSChargingDataTypes/SessionPriority.ta.mjs";
import { S_CSCF_Information, _decode_S_CSCF_Information, _encode_S_CSCF_Information } from "../IMSChargingDataTypes/S-CSCF-Information.ta.mjs";


/**
 * @summary ICSCFRecord
 * @description
 *
 * I-CSCF CDR (clause 6.1.3.5). The I-CSCF need not remain on the
 * signalling path after the first INVITE, so successful session set-up is
 * reported with Charging Data Request [Event] rather than Start, Interim,
 * and Stop (clause 5.1.4 and clause 6.3.2). S-CSCF Information carries the
 * S-CSCF capabilities on registration or the S-CSCF address on session
 * establishment.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.5.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ICSCFRecord ::= SET {
 *    recordType                           [0] IMPLICIT RecordType,
 *    retransmission                       [1] IMPLICIT NULL OPTIONAL,
 *    sIP-Method                           [2] IMPLICIT GraphicString OPTIONAL,
 *    role-of-Node                         [3] IMPLICIT Role-of-Node OPTIONAL,
 *    nodeAddress                          [4] NodeAddress OPTIONAL,
 *    session-Id                           [5] IMPLICIT GraphicString OPTIONAL,
 *    list-Of-Calling-Party-Address        [6] IMPLICIT SEQUENCE  OF
 *       InvolvedParty OPTIONAL,
 *    called-Party-Address                 [7] InvolvedParty OPTIONAL,
 *    serviceRequestTimeStamp              [9] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    interOperatorIdentifiers             [14] IMPLICIT InterOperatorIdentifiers OPTIONAL,
 *    localRecordSequenceNumber            [15] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    causeForRecordClosing                [17] IMPLICIT CauseForRecordClosing OPTIONAL,
 *    incomplete-CDR-Indication            [18] IMPLICIT Incomplete-CDR-Indication OPTIONAL,
 *    iMS-Charging-Identifier              [19] IMPLICIT OCTET STRING OPTIONAL,
 *    serviceReasonReturnCode              [23] IMPLICIT UTF8String OPTIONAL,
 *    recordExtensions                     [25] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    expiresInformation                   [26] IMPLICIT INTEGER OPTIONAL,
 *    list-Of-Associated-URI               [27] IMPLICIT SEQUENCE  OF
 *       InvolvedParty OPTIONAL,
 *    event                                [28] IMPLICIT UTF8String OPTIONAL,
 *    accessNetworkInformation             [29] IMPLICIT OCTET STRING OPTIONAL,
 *    serviceContextID                     [30] IMPLICIT UTF8String OPTIONAL,
 *    numberPortabilityRouting             [34] IMPLICIT GraphicString OPTIONAL,
 *    carrierSelectRouting                 [35] IMPLICIT GraphicString OPTIONAL,
 *    sessionPriority                      [36] IMPLICIT SessionPriority OPTIONAL,
 *    serviceRequestTimeStampFraction      [37] IMPLICIT INTEGER ( 0 .. 999 ) OPTIONAL,
 *    transit-IOI-List                     [45] IMPLICIT GraphicString OPTIONAL,
 *    userLocationInformation              [47] IMPLICIT OCTET STRING OPTIONAL,
 *    mSTimeZone                           [48] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    fromAddress                          [51] IMPLICIT OCTET STRING OPTIONAL,
 *    iMSEmergencyIndicator                [52] IMPLICIT NULL OPTIONAL,
 *    listOfReasonHeader                   [55] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL,
 *    additionalAccessNetworkInformation   [56] IMPLICIT OCTET STRING OPTIONAL,
 *    routeHeaderTransmitted               [60] IMPLICIT OCTET STRING OPTIONAL,
 *    s-CSCF-Information                   [61] IMPLICIT S-CSCF-Information OPTIONAL,
 *    cellularNetworkInformation           [64] IMPLICIT OCTET STRING OPTIONAL,
 *    fEIdentifierList                     [65] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ICSCFRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * Identifies the type of record. The parameter is derived from the
     * Node-Functionality AVP, defined in TS 32.299 [40].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.42.
     *
     * Category M in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
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
     * Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
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
     * Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
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
     * Category OM in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
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
     * Category OM in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
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
     * Category OM in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
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
     * Category OM in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
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
     * Category OM in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
     *
     * @public
     * @readonly
     */
    readonly called_Party_Address: OPTIONAL<InvolvedParty>;
    /**
     * @summary `serviceRequestTimeStamp`.
     * @description
     *
     * This field contains the time stamp, which indicates the time at which
     * the service was requested. This parameter corresponds to SIP Request
     * Timestamp. Present with Charging Data Request [Event]. Category OM in
     * the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
     *
     * @public
     * @readonly
     */
    readonly serviceRequestTimeStamp: OPTIONAL<OCTET_STRING>;
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
     * Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
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
     * Category OM in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
     *
     * @public
     * @readonly
     */
    readonly localRecordSequenceNumber: OPTIONAL<INTEGER>;
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
     * Category OM in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
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
     * Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
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
     * Category OM in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
     *
     * @public
     * @readonly
     */
    readonly iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceReasonReturnCode`.
     * @description
     *
     * Provides the returned cause code for the service request (both successful
     * and failure). This parameter corresponds to the Cause-Code AVP.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.57.
     *
     * Category OM in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
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
     * Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
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
     * content, depending on the SIP method. Category OC in the I-CSCF CDR
     * (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
     *
     * @public
     * @readonly
     */
    readonly expiresInformation: OPTIONAL<INTEGER>;
    /**
     * @summary `list_Of_Associated_URI`.
     * @description
     *
     * The list of non-barred public user identities (SIP URIs and/or Tel URIs)
     * associated to the public user identity under registration. The list of
     * identities is obtained from the P-Associated-URI header of a SIP 200 OK
     * response to a SIP REGISTER request.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.22.
     *
     * Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
     *
     * @public
     * @readonly
     */
    readonly list_Of_Associated_URI: OPTIONAL<InvolvedParty[]>;
    /**
     * @summary `event`.
     * @description
     *
     * The Event parameter holds the content of the "Event" header defined in RFC
     * 3265 [403],
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.15.
     *
     * Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
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
     * Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
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
     * Category OM in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
     *
     * @public
     * @readonly
     */
    readonly serviceContextID: OPTIONAL<UTF8String>;
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
     * Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
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
     * Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
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
     * Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
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
     * Service Request Time Stamp. Category OM in the I-CSCF CDR (3GPP TS
     * 32.260 V20.1.0 clause 6.1.3.5).
     *
     * @public
     * @readonly
     */
    readonly serviceRequestTimeStampFraction: OPTIONAL<INTEGER>;
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
     * Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
     *
     * @public
     * @readonly
     */
    readonly transit_IOI_List: OPTIONAL<GraphicString>;
    /**
     * @summary `userLocationInformation`.
     * @description
     *
     * This field contains the User Location Information using PCC mechanisms as
     * specified in TS 23.203 [203] and TS 23.503 [246] or the location retrieval
     * via Sh interface by AS as specified in TS 29.328 [242].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.69A.
     *
     * Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
     *
     * @public
     * @readonly
     */
    readonly userLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mSTimeZone`.
     * @description
     *
     * This field contains the 'Time Zone' IE provided as part of the NetLoc
     * enhancement for an ICS user as specified in TS 23.292 [229].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.31a.
     *
     * Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
     *
     * @public
     * @readonly
     */
    readonly mSTimeZone: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `fromAddress`.
     * @description
     *
     * This field holds the information from the SIP From Header.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.16A.
     *
     * Category OM in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
     *
     * @public
     * @readonly
     */
    readonly fromAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iMSEmergencyIndicator`.
     * @description
     *
     * This field indicates the IMS session or registration is an IMS emergency
     * session or emergency registration. This field is missing if IMS
     * session/registration is not detected as an IMS emergency
     * session/registration.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.20A.
     *
     * Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
     *
     * @public
     * @readonly
     */
    readonly iMSEmergencyIndicator: OPTIONAL<NULL>;
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
     * Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
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
     * Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
     *
     * @public
     * @readonly
     */
    readonly additionalAccessNetworkInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `routeHeaderTransmitted`.
     * @description
     *
     * This field contains the information in the route header representing the
     * destination in a transmitted initial SIP INVITE and non-session SIP
     * MESSAGE request.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.45B.
     *
     * Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
     *
     * @public
     * @readonly
     */
    readonly routeHeaderTransmitted: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `s_CSCF_Information`.
     * @description
     *
     * This field contains Information related to the serving CSCF, e.g. the
     * S-CSCF capabilities upon registration event or the S-CSCF address upon the
     * session establishment event. This field is derived from the
     * Server-Capabilities AVP if present in the ACR received from the I-CSCF.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.66.
     *
     * Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
     *
     * @public
     * @readonly
     */
    readonly s_CSCF_Information: OPTIONAL<S_CSCF_Information>;
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
     * Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.5).
     *
     * @public
     * @readonly
     */
    readonly cellularNetworkInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `fEIdentifierList`.
     * @description
     *
     * This parameter corresponds to FE Identifier List of the
     * P-Charging-Vector defined in TS 24.229 [204]. This element contains one
     * or more IM CN subsystem functional entity addresses and/or AS and
     * application identifiers where the IM CN subsystem functional entity does
     * create charging information for the related CDR of this IM CN subsystem
     * functional entity. Category OC in the I-CSCF CDR (3GPP TS 32.260 V20.1.0
     * clause 6.1.3.5).
     *
     * @public
     * @readonly
     */
    readonly fEIdentifierList: OPTIONAL<GraphicString[]>;

    constructor (
        recordType: RecordType,
        retransmission?: OPTIONAL<NULL>,
        sIP_Method?: OPTIONAL<GraphicString>,
        role_of_Node?: OPTIONAL<Role_of_Node>,
        nodeAddress?: OPTIONAL<NodeAddress>,
        session_Id?: OPTIONAL<GraphicString>,
        list_Of_Calling_Party_Address?: OPTIONAL<InvolvedParty[]>,
        called_Party_Address?: OPTIONAL<InvolvedParty>,
        serviceRequestTimeStamp?: OPTIONAL<OCTET_STRING>,
        interOperatorIdentifiers?: OPTIONAL<InterOperatorIdentifiers>,
        localRecordSequenceNumber?: OPTIONAL<INTEGER>,
        causeForRecordClosing?: OPTIONAL<CauseForRecordClosing>,
        incomplete_CDR_Indication?: OPTIONAL<Incomplete_CDR_Indication>,
        iMS_Charging_Identifier?: OPTIONAL<OCTET_STRING>,
        serviceReasonReturnCode?: OPTIONAL<UTF8String>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        expiresInformation?: OPTIONAL<INTEGER>,
        list_Of_Associated_URI?: OPTIONAL<InvolvedParty[]>,
        event?: OPTIONAL<UTF8String>,
        accessNetworkInformation?: OPTIONAL<OCTET_STRING>,
        serviceContextID?: OPTIONAL<UTF8String>,
        numberPortabilityRouting?: OPTIONAL<GraphicString>,
        carrierSelectRouting?: OPTIONAL<GraphicString>,
        sessionPriority?: OPTIONAL<SessionPriority>,
        serviceRequestTimeStampFraction?: OPTIONAL<INTEGER>,
        transit_IOI_List?: OPTIONAL<GraphicString>,
        userLocationInformation?: OPTIONAL<OCTET_STRING>,
        mSTimeZone?: OPTIONAL<OCTET_STRING>,
        fromAddress?: OPTIONAL<OCTET_STRING>,
        iMSEmergencyIndicator?: OPTIONAL<NULL>,
        listOfReasonHeader?: OPTIONAL<GraphicString[]>,
        additionalAccessNetworkInformation?: OPTIONAL<OCTET_STRING>,
        routeHeaderTransmitted?: OPTIONAL<OCTET_STRING>,
        s_CSCF_Information?: OPTIONAL<S_CSCF_Information>,
        cellularNetworkInformation?: OPTIONAL<OCTET_STRING>,
        fEIdentifierList?: OPTIONAL<GraphicString[]>
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
        this.interOperatorIdentifiers = interOperatorIdentifiers;
        this.localRecordSequenceNumber = localRecordSequenceNumber;
        this.causeForRecordClosing = causeForRecordClosing;
        this.incomplete_CDR_Indication = incomplete_CDR_Indication;
        this.iMS_Charging_Identifier = iMS_Charging_Identifier;
        this.serviceReasonReturnCode = serviceReasonReturnCode;
        this.recordExtensions = recordExtensions;
        this.expiresInformation = expiresInformation;
        this.list_Of_Associated_URI = list_Of_Associated_URI;
        this.event = event;
        this.accessNetworkInformation = accessNetworkInformation;
        this.serviceContextID = serviceContextID;
        this.numberPortabilityRouting = numberPortabilityRouting;
        this.carrierSelectRouting = carrierSelectRouting;
        this.sessionPriority = sessionPriority;
        this.serviceRequestTimeStampFraction = serviceRequestTimeStampFraction;
        this.transit_IOI_List = transit_IOI_List;
        this.userLocationInformation = userLocationInformation;
        this.mSTimeZone = mSTimeZone;
        this.fromAddress = fromAddress;
        this.iMSEmergencyIndicator = iMSEmergencyIndicator;
        this.listOfReasonHeader = listOfReasonHeader;
        this.additionalAccessNetworkInformation = additionalAccessNetworkInformation;
        this.routeHeaderTransmitted = routeHeaderTransmitted;
        this.s_CSCF_Information = s_CSCF_Information;
        this.cellularNetworkInformation = cellularNetworkInformation;
        this.fEIdentifierList = fEIdentifierList;
    
        if (this.serviceRequestTimeStamp !== undefined && (this.serviceRequestTimeStamp.length !== 9)) {
            throw new ASN1SizeError("ICSCFRecord.serviceRequestTimeStamp violates SIZE constraint");
        }
        if (this.localRecordSequenceNumber !== undefined && (this.localRecordSequenceNumber < 0 || this.localRecordSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("ICSCFRecord.localRecordSequenceNumber violates INTEGER range");
        }
        if (this.serviceRequestTimeStampFraction !== undefined && (this.serviceRequestTimeStampFraction < 0 || this.serviceRequestTimeStampFraction > 999)) {
            throw new ASN1OverflowError("ICSCFRecord.serviceRequestTimeStampFraction violates INTEGER range");
        }
        if (this.mSTimeZone !== undefined && (this.mSTimeZone.length !== 2)) {
            throw new ASN1SizeError("ICSCFRecord.mSTimeZone violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a ICSCFRecord
     * @description
     * 
     * This takes an `object` and converts it to a `ICSCFRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ICSCFRecord`.
     * @returns {ICSCFRecord}
     */
    public static _from_object (_o: { [_K in keyof (ICSCFRecord)]: (ICSCFRecord)[_K] }): ICSCFRecord {
        return new ICSCFRecord(_o.recordType, _o.retransmission, _o.sIP_Method, _o.role_of_Node, _o.nodeAddress, _o.session_Id, _o.list_Of_Calling_Party_Address, _o.called_Party_Address, _o.serviceRequestTimeStamp, _o.interOperatorIdentifiers, _o.localRecordSequenceNumber, _o.causeForRecordClosing, _o.incomplete_CDR_Indication, _o.iMS_Charging_Identifier, _o.serviceReasonReturnCode, _o.recordExtensions, _o.expiresInformation, _o.list_Of_Associated_URI, _o.event, _o.accessNetworkInformation, _o.serviceContextID, _o.numberPortabilityRouting, _o.carrierSelectRouting, _o.sessionPriority, _o.serviceRequestTimeStampFraction, _o.transit_IOI_List, _o.userLocationInformation, _o.mSTimeZone, _o.fromAddress, _o.iMSEmergencyIndicator, _o.listOfReasonHeader, _o.additionalAccessNetworkInformation, _o.routeHeaderTransmitted, _o.s_CSCF_Information, _o.cellularNetworkInformation, _o.fEIdentifierList);
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
 * @summary The Leading Root Component Types of ICSCFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ICSCFRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sIP-Method", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("role-of-Node", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("nodeAddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("session-Id", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("list-Of-Calling-Party-Address", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("called-Party-Address", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("serviceRequestTimeStamp", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("interOperatorIdentifiers", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("localRecordSequenceNumber", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("causeForRecordClosing", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("incomplete-CDR-Indication", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("iMS-Charging-Identifier", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("serviceReasonReturnCode", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("expiresInformation", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("list-Of-Associated-URI", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("event", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("accessNetworkInformation", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("serviceContextID", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("numberPortabilityRouting", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("carrierSelectRouting", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("sessionPriority", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("serviceRequestTimeStampFraction", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("transit-IOI-List", true, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("mSTimeZone", true, $.hasTag(_TagClass.context, 48)),
    new $.ComponentSpec("fromAddress", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("iMSEmergencyIndicator", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("listOfReasonHeader", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("additionalAccessNetworkInformation", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("routeHeaderTransmitted", true, $.hasTag(_TagClass.context, 60)),
    new $.ComponentSpec("s-CSCF-Information", true, $.hasTag(_TagClass.context, 61)),
    new $.ComponentSpec("cellularNetworkInformation", true, $.hasTag(_TagClass.context, 64)),
    new $.ComponentSpec("fEIdentifierList", true, $.hasTag(_TagClass.context, 65))
];

/**
 * @summary The Trailing Root Component Types of ICSCFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ICSCFRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ICSCFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ICSCFRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ICSCFRecord: $.ASN1Decoder<ICSCFRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ICSCFRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ICSCFRecord (el: _Element): ICSCFRecord {
    if (!_cached_decoder_for_ICSCFRecord) { _cached_decoder_for_ICSCFRecord = function (el: _Element): ICSCFRecord {
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
    let interOperatorIdentifiers: OPTIONAL<InterOperatorIdentifiers>;
    let localRecordSequenceNumber: OPTIONAL<INTEGER>;
    let causeForRecordClosing: OPTIONAL<CauseForRecordClosing>;
    let incomplete_CDR_Indication: OPTIONAL<Incomplete_CDR_Indication>;
    let iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    let serviceReasonReturnCode: OPTIONAL<UTF8String>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let expiresInformation: OPTIONAL<INTEGER>;
    let list_Of_Associated_URI: OPTIONAL<InvolvedParty[]>;
    let event: OPTIONAL<UTF8String>;
    let accessNetworkInformation: OPTIONAL<OCTET_STRING>;
    let serviceContextID: OPTIONAL<UTF8String>;
    let numberPortabilityRouting: OPTIONAL<GraphicString>;
    let carrierSelectRouting: OPTIONAL<GraphicString>;
    let sessionPriority: OPTIONAL<SessionPriority>;
    let serviceRequestTimeStampFraction: OPTIONAL<INTEGER>;
    let transit_IOI_List: OPTIONAL<GraphicString>;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let mSTimeZone: OPTIONAL<OCTET_STRING>;
    let fromAddress: OPTIONAL<OCTET_STRING>;
    let iMSEmergencyIndicator: OPTIONAL<NULL>;
    let listOfReasonHeader: OPTIONAL<GraphicString[]>;
    let additionalAccessNetworkInformation: OPTIONAL<OCTET_STRING>;
    let routeHeaderTransmitted: OPTIONAL<OCTET_STRING>;
    let s_CSCF_Information: OPTIONAL<S_CSCF_Information>;
    let cellularNetworkInformation: OPTIONAL<OCTET_STRING>;
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
        "interOperatorIdentifiers": (_el: _Element): void => { interOperatorIdentifiers = $._decode_implicit<InterOperatorIdentifiers>(() => _decode_InterOperatorIdentifiers)(_el); },
        "localRecordSequenceNumber": (_el: _Element): void => { localRecordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForRecordClosing": (_el: _Element): void => { causeForRecordClosing = $._decode_implicit<CauseForRecordClosing>(() => _decode_CauseForRecordClosing)(_el); },
        "incomplete-CDR-Indication": (_el: _Element): void => { incomplete_CDR_Indication = $._decode_implicit<Incomplete_CDR_Indication>(() => _decode_Incomplete_CDR_Indication)(_el); },
        "iMS-Charging-Identifier": (_el: _Element): void => { iMS_Charging_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceReasonReturnCode": (_el: _Element): void => { serviceReasonReturnCode = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "expiresInformation": (_el: _Element): void => { expiresInformation = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "list-Of-Associated-URI": (_el: _Element): void => { list_Of_Associated_URI = $._decode_implicit<InvolvedParty[]>(() => $._decodeSequenceOf<InvolvedParty>(() => _decode_InvolvedParty))(_el); },
        "event": (_el: _Element): void => { event = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "accessNetworkInformation": (_el: _Element): void => { accessNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceContextID": (_el: _Element): void => { serviceContextID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "numberPortabilityRouting": (_el: _Element): void => { numberPortabilityRouting = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "carrierSelectRouting": (_el: _Element): void => { carrierSelectRouting = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "sessionPriority": (_el: _Element): void => { sessionPriority = $._decode_implicit<SessionPriority>(() => _decode_SessionPriority)(_el); },
        "serviceRequestTimeStampFraction": (_el: _Element): void => { serviceRequestTimeStampFraction = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "transit-IOI-List": (_el: _Element): void => { transit_IOI_List = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mSTimeZone": (_el: _Element): void => { mSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "fromAddress": (_el: _Element): void => { fromAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "iMSEmergencyIndicator": (_el: _Element): void => { iMSEmergencyIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "listOfReasonHeader": (_el: _Element): void => { listOfReasonHeader = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); },
        "additionalAccessNetworkInformation": (_el: _Element): void => { additionalAccessNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "routeHeaderTransmitted": (_el: _Element): void => { routeHeaderTransmitted = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "s-CSCF-Information": (_el: _Element): void => { s_CSCF_Information = $._decode_implicit<S_CSCF_Information>(() => _decode_S_CSCF_Information)(_el); },
        "cellularNetworkInformation": (_el: _Element): void => { cellularNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "fEIdentifierList": (_el: _Element): void => { fEIdentifierList = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ICSCFRecord,
        _extension_additions_list_spec_for_ICSCFRecord,
        _root_component_type_list_2_spec_for_ICSCFRecord,
        undefined,
    );
    return new ICSCFRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        retransmission,
        sIP_Method,
        role_of_Node,
        nodeAddress,
        session_Id,
        list_Of_Calling_Party_Address,
        called_Party_Address,
        serviceRequestTimeStamp,
        interOperatorIdentifiers,
        localRecordSequenceNumber,
        causeForRecordClosing,
        incomplete_CDR_Indication,
        iMS_Charging_Identifier,
        serviceReasonReturnCode,
        recordExtensions,
        expiresInformation,
        list_Of_Associated_URI,
        event,
        accessNetworkInformation,
        serviceContextID,
        numberPortabilityRouting,
        carrierSelectRouting,
        sessionPriority,
        serviceRequestTimeStampFraction,
        transit_IOI_List,
        userLocationInformation,
        mSTimeZone,
        fromAddress,
        iMSEmergencyIndicator,
        listOfReasonHeader,
        additionalAccessNetworkInformation,
        routeHeaderTransmitted,
        s_CSCF_Information,
        cellularNetworkInformation,
        fEIdentifierList
    );
}; }
    return _cached_decoder_for_ICSCFRecord(el);
}

let _cached_encoder_for_ICSCFRecord: $.ASN1Encoder<ICSCFRecord> | null = null;

/**
 * @summary Encodes a(n) ICSCFRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ICSCFRecord, encoded as an ASN.1 Element.
 */
export
function _encode_ICSCFRecord (value: ICSCFRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ICSCFRecord) { _cached_encoder_for_ICSCFRecord = function (value: ICSCFRecord, _elGetter: $.ASN1Encoder<ICSCFRecord>): _Element {
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
    if (value.interOperatorIdentifiers !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_InterOperatorIdentifiers, $.BER)(value.interOperatorIdentifiers, $.BER));
    }
    if (value.localRecordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.localRecordSequenceNumber, $.BER));
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
    if (value.serviceReasonReturnCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeUTF8String, $.BER)(value.serviceReasonReturnCode, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.expiresInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeInteger, $.BER)(value.expiresInformation, $.BER));
    }
    if (value.list_Of_Associated_URI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeSequenceOf<InvolvedParty>(() => _encode_InvolvedParty, $.BER), $.BER)(value.list_Of_Associated_URI, $.BER));
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
    if (value.transit_IOI_List !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 45, () => $._encodeGraphicString, $.BER)(value.transit_IOI_List, $.BER));
    }
    if (value.userLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeOctetString, $.BER)(value.userLocationInformation, $.BER));
    }
    if (value.mSTimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 48, () => $._encodeOctetString, $.BER)(value.mSTimeZone, $.BER));
    }
    if (value.fromAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 51, () => $._encodeOctetString, $.BER)(value.fromAddress, $.BER));
    }
    if (value.iMSEmergencyIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 52, () => $._encodeNull, $.BER)(value.iMSEmergencyIndicator, $.BER));
    }
    if (value.listOfReasonHeader !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.listOfReasonHeader, $.BER));
    }
    if (value.additionalAccessNetworkInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => $._encodeOctetString, $.BER)(value.additionalAccessNetworkInformation, $.BER));
    }
    if (value.routeHeaderTransmitted !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 60, () => $._encodeOctetString, $.BER)(value.routeHeaderTransmitted, $.BER));
    }
    if (value.s_CSCF_Information !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 61, () => _encode_S_CSCF_Information, $.BER)(value.s_CSCF_Information, $.BER));
    }
    if (value.cellularNetworkInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 64, () => $._encodeOctetString, $.BER)(value.cellularNetworkInformation, $.BER));
    }
    if (value.fEIdentifierList !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 65, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.fEIdentifierList, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_ICSCFRecord(value, elGetter);
}


/* eslint-enable */
