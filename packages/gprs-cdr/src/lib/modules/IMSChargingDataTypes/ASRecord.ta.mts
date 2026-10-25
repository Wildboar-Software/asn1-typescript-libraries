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
import { Media_Components_List, _decode_Media_Components_List, _encode_Media_Components_List } from "../IMSChargingDataTypes/Media-Components-List.ta.mjs";
import { MessageBody, _decode_MessageBody, _encode_MessageBody } from "../IMSChargingDataTypes/MessageBody.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../IMSChargingDataTypes/ManagementExtension.ta.mjs";
import { SubscriptionID, _decode_SubscriptionID, _encode_SubscriptionID } from "../IMSChargingDataTypes/SubscriptionID.ta.mjs";
import { Early_Media_Components_List, _decode_Early_Media_Components_List, _encode_Early_Media_Components_List } from "../IMSChargingDataTypes/Early-Media-Components-List.ta.mjs";
import { SessionPriority, _decode_SessionPriority, _encode_SessionPriority, _enum_for_SessionPriority } from "../IMSChargingDataTypes/SessionPriority.ta.mjs";
import { type RealTimeTariffInformation, _decode_RealTimeTariffInformation, _encode_RealTimeTariffInformation } from "../IMSChargingDataTypes/RealTimeTariffInformation.ta.mjs";
import { NNI_Information, _decode_NNI_Information, _encode_NNI_Information } from "../IMSChargingDataTypes/NNI-Information.ta.mjs";
import { SubscriberEquipmentNumber, _decode_SubscriberEquipmentNumber, _encode_SubscriberEquipmentNumber } from "../IMSChargingDataTypes/SubscriberEquipmentNumber.ta.mjs";
import { AccessNetworkInfoChange, _decode_AccessNetworkInfoChange, _encode_AccessNetworkInfoChange } from "../IMSChargingDataTypes/AccessNetworkInfoChange.ta.mjs";
import { CalledIdentityChange, _decode_CalledIdentityChange, _encode_CalledIdentityChange } from "../IMSChargingDataTypes/CalledIdentityChange.ta.mjs";
import { ServiceSpecificInfo, _decode_ServiceSpecificInfo, _encode_ServiceSpecificInfo } from "../IMSChargingDataTypes/ServiceSpecificInfo.ta.mjs";
import { AccessTransferInformation, _decode_AccessTransferInformation, _encode_AccessTransferInformation } from "../IMSChargingDataTypes/AccessTransferInformation.ta.mjs";
import { TADIdentifier, _decode_TADIdentifier, _encode_TADIdentifier, _enum_for_TADIdentifier } from "../IMSChargingDataTypes/TADIdentifier.ta.mjs";
import { ASRecord_threeGPPPSDataOffStatus, _decode_ASRecord_threeGPPPSDataOffStatus, _encode_ASRecord_threeGPPPSDataOffStatus, _enum_for_ASRecord_threeGPPPSDataOffStatus } from "../IMSChargingDataTypes/ASRecord-threeGPPPSDataOffStatus.ta.mjs";


/**
 * @summary ASRecord
 * @description
 *
 * SIP application server CDR (clause 6.1.3.9). The AS supports session and
 * event charging (clause 6.3.2). Acting as a B2BUA, it may keep the
 * received ICID or allocate another. If it keeps the same ICID, the
 * operator may select one charging session for both dialogs
 * (OneChargingSession, clause 5.1.7). Outgoing Session ID and the initial
 * ICID are not used for that option. The AS also records service-specific
 * data, access transfer (clause 5.1.11), 3GPP PS Data Off status, the TAD
 * identifier, an alternate charged party, and the VLR number and MSC
 * address when they arrive in a User-Data-Answer (clause 6.3.1.1).
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.1.3.9.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASRecord ::= SET {
 *    recordType                              [0] IMPLICIT RecordType,
 *    retransmission                          [1] IMPLICIT NULL OPTIONAL,
 *    sIP-Method                              [2] IMPLICIT GraphicString OPTIONAL,
 *    role-of-Node                            [3] IMPLICIT Role-of-Node OPTIONAL,
 *    nodeAddress                             [4] NodeAddress OPTIONAL,
 *    session-Id                              [5] IMPLICIT GraphicString OPTIONAL,
 *    list-Of-Calling-Party-Address           [6] IMPLICIT SEQUENCE  OF
 *       InvolvedParty OPTIONAL,
 *    called-Party-Address                    [7] InvolvedParty OPTIONAL,
 *    privateUserID                           [8] IMPLICIT GraphicString OPTIONAL,
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
 *    gGSNaddress                             [22] NodeAddress OPTIONAL,
 *    serviceReasonReturnCode                 [23] IMPLICIT UTF8String OPTIONAL,
 *    list-Of-Message-Bodies                  [24] IMPLICIT SEQUENCE  OF
 *       MessageBody OPTIONAL,
 *    recordExtensions                        [25] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    expiresInformation                      [26] IMPLICIT INTEGER OPTIONAL,
 *    event                                   [28] IMPLICIT UTF8String OPTIONAL,
 *    accessNetworkInformation                [29] IMPLICIT OCTET STRING OPTIONAL,
 *    serviceContextID                        [30] IMPLICIT UTF8String OPTIONAL,
 *    list-of-subscription-ID                 [31] IMPLICIT SEQUENCE  OF
 *       SubscriptionID OPTIONAL,
 *    list-Of-Early-SDP-Media-Components      [32] IMPLICIT SEQUENCE  OF
 *       Early-Media-Components-List OPTIONAL,
 *    iMSCommunicationServiceIdentifier       [33] IMPLICIT OCTET STRING OPTIONAL,
 *    numberPortabilityRouting                [34] IMPLICIT GraphicString OPTIONAL,
 *    carrierSelectRouting                    [35] IMPLICIT GraphicString OPTIONAL,
 *    sessionPriority                         [36] IMPLICIT SessionPriority OPTIONAL,
 *    serviceRequestTimeStampFraction         [37] IMPLICIT INTEGER ( 0 .. 999 ) OPTIONAL,
 *    serviceDeliveryStartTimeStampFraction   [38] IMPLICIT INTEGER ( 0 .. 999 ) OPTIONAL,
 *    serviceDeliveryEndTimeStampFraction     [39] IMPLICIT INTEGER ( 0 .. 999 ) OPTIONAL,
 *    list-of-Requested-Party-Address         [41] IMPLICIT SEQUENCE  OF
 *       InvolvedParty OPTIONAL,
 *    online-charging-flag                    [43] IMPLICIT NULL OPTIONAL,
 *    realTimeTariffInformation               [44] IMPLICIT SEQUENCE  OF
 *       RealTimeTariffInformation OPTIONAL,
 *    nNI-Information                         [46] IMPLICIT NNI-Information OPTIONAL,
 *    userLocationInformation                 [47] IMPLICIT OCTET STRING OPTIONAL,
 *    mSTimeZone                              [48] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    fromAddress                             [51] IMPLICIT OCTET STRING OPTIONAL,
 *    transit-IOI-Lists                       [53] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL,
 *    iMSVisitedNetworkIdentifier             [54] IMPLICIT OCTET STRING OPTIONAL,
 *    listOfReasonHeader                      [55] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL,
 *    additionalAccessNetworkInformation      [56] IMPLICIT OCTET STRING OPTIONAL,
 *    instanceId                              [57] IMPLICIT OCTET STRING OPTIONAL,
 *    subscriberEquipmentNumber               [58] IMPLICIT SubscriberEquipmentNumber OPTIONAL,
 *    list-Of-AccessNetworkInfoChange         [62] IMPLICIT SEQUENCE  OF
 *       AccessNetworkInfoChange OPTIONAL,
 *    listOfCalledIdentityChanges             [63] IMPLICIT SEQUENCE  OF
 *       CalledIdentityChange OPTIONAL,
 *    cellularNetworkInformation              [64] IMPLICIT OCTET STRING OPTIONAL,
 *    serviceSpecificInfo                     [100] IMPLICIT SEQUENCE  OF
 *       ServiceSpecificInfo OPTIONAL,
 *    requested-Party-Address                 [101] InvolvedParty OPTIONAL,
 *    list-Of-Called-Asserted-Identity        [102] IMPLICIT SEQUENCE  OF
 *       InvolvedParty OPTIONAL,
 *    alternateChargedPartyAddress            [103] IMPLICIT UTF8String OPTIONAL,
 *    outgoingSessionId                       [104] IMPLICIT GraphicString OPTIONAL,
 *    initialIMS-Charging-Identifier          [105] IMPLICIT OCTET STRING OPTIONAL,
 *    list-Of-AccessTransferInformation       [106] IMPLICIT SEQUENCE  OF
 *       AccessTransferInformation OPTIONAL,
 *    tADS-Identifier                         [109] IMPLICIT TADIdentifier OPTIONAL,
 *    vlr-Number                              [110] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    msc-Address                             [111] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    threeGPPPSDataOffStatus                 [112] IMPLICIT ENUMERATED {
 *       active      ( 0 ),
 *       inactive    ( 1 ) } OPTIONAL,
 *    fEIdentifierList                        [113] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ASRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * Identifies the type of record. The parameter is derived from the
     * Node-Functionality AVP, defined in TS 32.299 [40].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.42.
     *
     * Category M in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OM in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OM in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * When the AS acts as a B2BUA, this is the incoming dialog's Call-ID,
     * except under OneChargingSession, where it holds either dialog's
     * Call-ID from session setup (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.59.
     *
     * Category OM in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OM in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OM in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly called_Party_Address: OPTIONAL<InvolvedParty>;
    /**
     * @summary `privateUserID`.
     * @description
     *
     * Holds the used Network Access Identifier of the served party according to
     * RFC 2486 [405]. This parameter corresponds to the User-Name AVP.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.36.
     *
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly privateUserID: OPTIONAL<GraphicString>;
    /**
     * @summary `serviceRequestTimeStamp`.
     * @description
     *
     * This field contains the time stamp which indicates the time at which the
     * service was requested. This parameter corresponds to SIP Request
     * Timestamp. Present with Charging Data Request [Start] and Charging Data
     * Request [Event]. Category OM in the AS CDR (3GPP TS 32.260 V20.1.0
     * clause 6.1.3.9).
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
     * Category OM in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OM in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OM in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OM in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OM in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly list_Of_SDP_Media_Components: OPTIONAL<Media_Components_List[]>;
    /**
     * @summary `gGSNaddress`.
     * @description
     *
     * This parameter holds the control plane IP address of the GGSN, PGW, or
     * SMF that handles one or more media component(s) of a IMS session.
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly gGSNaddress: OPTIONAL<NodeAddress>;
    /**
     * @summary `serviceReasonReturnCode`.
     * @description
     *
     * Provides the returned cause code for the service request (both successful
     * and failure). This parameter corresponds to the Cause-Code AVP.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.57.
     *
     * Category OM in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly serviceReasonReturnCode: OPTIONAL<UTF8String>;
    /**
     * @summary `list_Of_Message_Bodies`.
     * @description
     *
     * This grouped field comprising several sub-fields describing the data that
     * may be conveyed end-to-end in the body of a SIP MESSAGE. Since several
     * message bodies may be exchanged via SIP-signalling, this grouped field may
     * occur several times. The List of Message Bodies contains the following
     * elements: Content Type; Content Disposition; Content Length; Originator.
     * They are described in the appropriate subclause. Message bodies with the
     * "Content-Type" field set to application/sdp and the "Content-Disposition"
     * field set to session are not included in the "Message Bodies" field.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.27.
     *
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly list_Of_Message_Bodies: OPTIONAL<MessageBody[]>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * A set of operator/manufacturer specific extensions to the record,
     * conditioned upon existence of an extension.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.39.
     *
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * content, depending on the SIP method. Category OC in the AS CDR (3GPP TS
     * 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OM in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly serviceContextID: OPTIONAL<UTF8String>;
    /**
     * @summary `list_of_subscription_ID`.
     * @description
     *
     * Holds the public user identities of the served user Category OM in the
     * AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly list_of_subscription_ID: OPTIONAL<SubscriptionID[]>;
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly list_Of_Early_SDP_Media_Components: OPTIONAL<Early_Media_Components_List[]>;
    /**
     * @summary `iMSCommunicationServiceIdentifier`.
     * @description
     *
     * This parameter holds the IMS Communication Service Identifier (ICSI) as
     * contained in the P-Asserted-Service header of a SIP request to identify an
     * IMS Communication Service as defined in TS 24.229 [210].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.20.
     *
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly iMSCommunicationServiceIdentifier: OPTIONAL<OCTET_STRING>;
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Service Request Time Stamp. Category OM in the AS CDR (3GPP TS 32.260
     * V20.1.0 clause 6.1.3.9).
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
     * Category OM in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly serviceDeliveryEndTimeStampFraction: OPTIONAL<INTEGER>;
    /**
     * @summary `list_of_Requested_Party_Address`.
     * @description
     *
     * This field is a list of Requested Party Address. This field is only
     * present if different from the Called Party Address parameter. Category
     * OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly list_of_Requested_Party_Address: OPTIONAL<InvolvedParty[]>;
    /**
     * @summary `online_charging_flag`.
     * @description
     *
     * This field indicates the Online Charging Request was sent based on the
     * provided ECF address from the SIP P-header
     * "P-Charging-Function-Addresses". The parameter corresponds to the
     * Online-Charging-Flag AVP. NOTE: No proof that online charging action has
     * been taken
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.34.
     *
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly online_charging_flag: OPTIONAL<NULL>;
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly realTimeTariffInformation: OPTIONAL<RealTimeTariffInformation[]>;
    /**
     * @summary `nNI_Information`.
     * @description
     *
     * This grouped field holds information about the NNI used for
     * interconnection and roaming on the loopback routing path. It is present
     * only if RAVEL "VPLMN routing" is applied. Category OC in the AS CDR
     * (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly nNI_Information: OPTIONAL<NNI_Information>;
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OM in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly fromAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `transit_IOI_Lists`.
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly transit_IOI_Lists: OPTIONAL<GraphicString[]>;
    /**
     * @summary `iMSVisitedNetworkIdentifier`.
     * @description
     *
     * Holds the SIP P-header "P-Visited-Network-ID". with the value according to
     * 3GPP TS 24.229 [210].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.20B.
     *
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly iMSVisitedNetworkIdentifier: OPTIONAL<OCTET_STRING>;
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly additionalAccessNetworkInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `instanceId`.
     * @description
     *
     * An Instance Id is defined as a URN generated by the device that uniquely
     * identifies a specific device amongst all other devices. The Instance Id is
     * transported in the sip.instance feature tag in the Contact header of a SIP
     * request associated with the served user.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.21Aa.
     *
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly instanceId: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `subscriberEquipmentNumber`.
     * @description
     *
     * The Subscriber Equipment Number field contains the identification of the
     * User Equipment (UE) accessing the 3GPP system.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.1.7.
     *
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly subscriberEquipmentNumber: OPTIONAL<SubscriberEquipmentNumber>;
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly list_Of_AccessNetworkInfoChange: OPTIONAL<AccessNetworkInfoChange[]>;
    /**
     * @summary `listOfCalledIdentityChanges`.
     * @description
     *
     * This field holds the set of terminating identity address changes after IMS
     * session establishment and the associated time stamp for each. These
     * addresses are obtained from the From SIP header field of a SIP UPDATE
     * request or SIP RE-INVITE request.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.23A.
     *
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly listOfCalledIdentityChanges: OPTIONAL<CalledIdentityChange[]>;
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
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly cellularNetworkInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceSpecificInfo`.
     * @description
     *
     * This grouped field holds the sub-fields "service specific data" and
     * "service specific type" if and as provided by an Application Server or
     * PCEF only for pre-defined PCC rules or TDF only for pre-defined ADC rules.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.1.4.
     *
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly serviceSpecificInfo: OPTIONAL<ServiceSpecificInfo[]>;
    /**
     * @summary `requested_Party_Address`.
     * @description
     *
     * This field holds the address of the party (Public User ID or Public
     * Service ID) to whom the SIP transaction was originally posted. The
     * Requested Party Address shall be populated with the SIP URI or Tel URI
     * (according to RFC 3261 [401] and RFC 3966 [402] respectively) contained in
     * the incoming Request-URI of the request. Requested Party Address could
     * also be populated with an URN (according to RFC5031 [407]) for an
     * emergency SIP session. This field is only present if different from the
     * Called Party Address parameter.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.43.
     *
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly requested_Party_Address: OPTIONAL<InvolvedParty>;
    /**
     * @summary `list_Of_Called_Asserted_Identity`.
     * @description
     *
     * This field holds the address or addresses (SIP URI and/or Tel URI
     * according to RFC 3261 [401] and RFC 3966 [402] respectively) of the party
     * (Public User ID or Public Service ID) of the finally asserted called
     * party. These address/addresses are obtained from the P-Asserted-Identity
     * SIP header field of the 2xx responses corresponding to a SIP request
     * either initiating a dialog or a standalone transaction. This field shall
     * be present when the P-Asserted-Identity SIP header field is available in
     * the SIP 2xx response. In case no P-Asserted-Identity is known, this list
     * shall include one item (of type SIP URI) with the value "unknown".
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.23.
     *
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly list_Of_Called_Asserted_Identity: OPTIONAL<InvolvedParty[]>;
    /**
     * @summary `alternateChargedPartyAddress`.
     * @description
     *
     * Holds the address of an alternate charged party determined by an AS at IMS
     * session initiation.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.3.
     *
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly alternateChargedPartyAddress: OPTIONAL<UTF8String>;
    /**
     * @summary `outgoingSessionId`.
     * @description
     *
     * When the AS acts as a B2BUA, the SIP Call-ID of the outgoing
     * dialog (RFC 3261). Not used for OneChargingSession (3GPP
     * TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.35A.
     *
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly outgoingSessionId: OPTIONAL<GraphicString>;
    /**
     * @summary `initialIMS_Charging_Identifier`.
     * @description
     *
     * This parameter holds the Initial IMS charging identifier (ICID) as
     * generated by the IMS node for the initial SIP session created for IMS
     * service continuity.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.21A.
     *
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly initialIMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `list_Of_AccessTransferInformation`.
     * @description
     *
     * This grouped field may occur several times in the CDR and each occurrence
     * holds information on a particular access transfer. The field is present
     * only if access transfer procedure has been performed for IMS service
     * continuity. Each element of the list represents an access transfer and may
     * include the following fields: Access Transfer Type; Inter-UE Transfer;
     * Access Network Information; Additional Access Network Information;
     * Subscriber Equipment Number; Instance Id; Related IMS Charging Identifier;
     * Related IMS Charging Identifier Generation Node; Access Transfer Time.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.21D.
     *
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly list_Of_AccessTransferInformation: OPTIONAL<AccessTransferInformation[]>;
    /**
     * @summary `tADS_Identifier`.
     * @description
     *
     * This field indicates the type of access network (CS or PS) through which
     * the session shall be terminated. Category OC in the AS CDR (3GPP TS
     * 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly tADS_Identifier: OPTIONAL<TADIdentifier>;
    /**
     * @summary `vlr_Number`.
     * @description
     *
     * This field contains the Recommendation E.164 [308] number assigned to the
     * VLR that produced the record. For further details concerning the structure
     * of VLR numbers see TS 23.003 [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.70.
     *
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly vlr_Number: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `msc_Address`.
     * @description
     *
     * This field contains the Recommendation E.164 [308] number assigned to the
     * MSC that produced the record. For further details concerning the structure
     * of MSC numbers see TS 23.003 [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.31aA.
     *
     * Category OC in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly msc_Address: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `threeGPPPSDataOffStatus`.
     * @description
     *
     * This field holds the 3GPP PS Data Off Status associated with the
     * registration, as defined in TS 23.228 [201], when available. Category OC
     * in the AS CDR (3GPP TS 32.260 V20.1.0 clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly threeGPPPSDataOffStatus: OPTIONAL<ASRecord_threeGPPPSDataOffStatus>;
    /**
     * @summary `fEIdentifierList`.
     * @description
     *
     * This parameter corresponds to FE Identifier List of the
     * P-Charging-Vector defined in TS 24.229 [204]. This element contains one
     * or more IM CN subsystem functional entity addresses and/or AS and
     * application identifiers where the IM CN subsystem functional entity does
     * create charging information for the related CDR of this IM CN subsystem
     * functional entity. Category OC in the AS CDR (3GPP TS 32.260 V20.1.0
     * clause 6.1.3.9).
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
        privateUserID?: OPTIONAL<GraphicString>,
        serviceRequestTimeStamp?: OPTIONAL<OCTET_STRING>,
        serviceDeliveryStartTimeStamp?: OPTIONAL<OCTET_STRING>,
        serviceDeliveryEndTimeStamp?: OPTIONAL<OCTET_STRING>,
        recordOpeningTime?: OPTIONAL<OCTET_STRING>,
        recordClosureTime?: OPTIONAL<OCTET_STRING>,
        interOperatorIdentifiers?: OPTIONAL<InterOperatorIdentifiers>,
        localRecordSequenceNumber?: OPTIONAL<INTEGER>,
        recordSequenceNumber?: OPTIONAL<INTEGER>,
        causeForRecordClosing?: OPTIONAL<CauseForRecordClosing>,
        incomplete_CDR_Indication?: OPTIONAL<Incomplete_CDR_Indication>,
        iMS_Charging_Identifier?: OPTIONAL<OCTET_STRING>,
        list_Of_SDP_Media_Components?: OPTIONAL<Media_Components_List[]>,
        gGSNaddress?: OPTIONAL<NodeAddress>,
        serviceReasonReturnCode?: OPTIONAL<UTF8String>,
        list_Of_Message_Bodies?: OPTIONAL<MessageBody[]>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        expiresInformation?: OPTIONAL<INTEGER>,
        event?: OPTIONAL<UTF8String>,
        accessNetworkInformation?: OPTIONAL<OCTET_STRING>,
        serviceContextID?: OPTIONAL<UTF8String>,
        list_of_subscription_ID?: OPTIONAL<SubscriptionID[]>,
        list_Of_Early_SDP_Media_Components?: OPTIONAL<Early_Media_Components_List[]>,
        iMSCommunicationServiceIdentifier?: OPTIONAL<OCTET_STRING>,
        numberPortabilityRouting?: OPTIONAL<GraphicString>,
        carrierSelectRouting?: OPTIONAL<GraphicString>,
        sessionPriority?: OPTIONAL<SessionPriority>,
        serviceRequestTimeStampFraction?: OPTIONAL<INTEGER>,
        serviceDeliveryStartTimeStampFraction?: OPTIONAL<INTEGER>,
        serviceDeliveryEndTimeStampFraction?: OPTIONAL<INTEGER>,
        list_of_Requested_Party_Address?: OPTIONAL<InvolvedParty[]>,
        online_charging_flag?: OPTIONAL<NULL>,
        realTimeTariffInformation?: OPTIONAL<RealTimeTariffInformation[]>,
        nNI_Information?: OPTIONAL<NNI_Information>,
        userLocationInformation?: OPTIONAL<OCTET_STRING>,
        mSTimeZone?: OPTIONAL<OCTET_STRING>,
        fromAddress?: OPTIONAL<OCTET_STRING>,
        transit_IOI_Lists?: OPTIONAL<GraphicString[]>,
        iMSVisitedNetworkIdentifier?: OPTIONAL<OCTET_STRING>,
        listOfReasonHeader?: OPTIONAL<GraphicString[]>,
        additionalAccessNetworkInformation?: OPTIONAL<OCTET_STRING>,
        instanceId?: OPTIONAL<OCTET_STRING>,
        subscriberEquipmentNumber?: OPTIONAL<SubscriberEquipmentNumber>,
        list_Of_AccessNetworkInfoChange?: OPTIONAL<AccessNetworkInfoChange[]>,
        listOfCalledIdentityChanges?: OPTIONAL<CalledIdentityChange[]>,
        cellularNetworkInformation?: OPTIONAL<OCTET_STRING>,
        serviceSpecificInfo?: OPTIONAL<ServiceSpecificInfo[]>,
        requested_Party_Address?: OPTIONAL<InvolvedParty>,
        list_Of_Called_Asserted_Identity?: OPTIONAL<InvolvedParty[]>,
        alternateChargedPartyAddress?: OPTIONAL<UTF8String>,
        outgoingSessionId?: OPTIONAL<GraphicString>,
        initialIMS_Charging_Identifier?: OPTIONAL<OCTET_STRING>,
        list_Of_AccessTransferInformation?: OPTIONAL<AccessTransferInformation[]>,
        tADS_Identifier?: OPTIONAL<TADIdentifier>,
        vlr_Number?: OPTIONAL<OCTET_STRING>,
        msc_Address?: OPTIONAL<OCTET_STRING>,
        threeGPPPSDataOffStatus?: OPTIONAL<ASRecord_threeGPPPSDataOffStatus>,
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
        this.privateUserID = privateUserID;
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
        this.gGSNaddress = gGSNaddress;
        this.serviceReasonReturnCode = serviceReasonReturnCode;
        this.list_Of_Message_Bodies = list_Of_Message_Bodies;
        this.recordExtensions = recordExtensions;
        this.expiresInformation = expiresInformation;
        this.event = event;
        this.accessNetworkInformation = accessNetworkInformation;
        this.serviceContextID = serviceContextID;
        this.list_of_subscription_ID = list_of_subscription_ID;
        this.list_Of_Early_SDP_Media_Components = list_Of_Early_SDP_Media_Components;
        this.iMSCommunicationServiceIdentifier = iMSCommunicationServiceIdentifier;
        this.numberPortabilityRouting = numberPortabilityRouting;
        this.carrierSelectRouting = carrierSelectRouting;
        this.sessionPriority = sessionPriority;
        this.serviceRequestTimeStampFraction = serviceRequestTimeStampFraction;
        this.serviceDeliveryStartTimeStampFraction = serviceDeliveryStartTimeStampFraction;
        this.serviceDeliveryEndTimeStampFraction = serviceDeliveryEndTimeStampFraction;
        this.list_of_Requested_Party_Address = list_of_Requested_Party_Address;
        this.online_charging_flag = online_charging_flag;
        this.realTimeTariffInformation = realTimeTariffInformation;
        this.nNI_Information = nNI_Information;
        this.userLocationInformation = userLocationInformation;
        this.mSTimeZone = mSTimeZone;
        this.fromAddress = fromAddress;
        this.transit_IOI_Lists = transit_IOI_Lists;
        this.iMSVisitedNetworkIdentifier = iMSVisitedNetworkIdentifier;
        this.listOfReasonHeader = listOfReasonHeader;
        this.additionalAccessNetworkInformation = additionalAccessNetworkInformation;
        this.instanceId = instanceId;
        this.subscriberEquipmentNumber = subscriberEquipmentNumber;
        this.list_Of_AccessNetworkInfoChange = list_Of_AccessNetworkInfoChange;
        this.listOfCalledIdentityChanges = listOfCalledIdentityChanges;
        this.cellularNetworkInformation = cellularNetworkInformation;
        this.serviceSpecificInfo = serviceSpecificInfo;
        this.requested_Party_Address = requested_Party_Address;
        this.list_Of_Called_Asserted_Identity = list_Of_Called_Asserted_Identity;
        this.alternateChargedPartyAddress = alternateChargedPartyAddress;
        this.outgoingSessionId = outgoingSessionId;
        this.initialIMS_Charging_Identifier = initialIMS_Charging_Identifier;
        this.list_Of_AccessTransferInformation = list_Of_AccessTransferInformation;
        this.tADS_Identifier = tADS_Identifier;
        this.vlr_Number = vlr_Number;
        this.msc_Address = msc_Address;
        this.threeGPPPSDataOffStatus = threeGPPPSDataOffStatus;
        this.fEIdentifierList = fEIdentifierList;
    
        if (this.serviceRequestTimeStamp !== undefined && (this.serviceRequestTimeStamp.length !== 9)) {
            throw new ASN1SizeError("ASRecord.serviceRequestTimeStamp violates SIZE constraint");
        }
        if (this.serviceDeliveryStartTimeStamp !== undefined && (this.serviceDeliveryStartTimeStamp.length !== 9)) {
            throw new ASN1SizeError("ASRecord.serviceDeliveryStartTimeStamp violates SIZE constraint");
        }
        if (this.serviceDeliveryEndTimeStamp !== undefined && (this.serviceDeliveryEndTimeStamp.length !== 9)) {
            throw new ASN1SizeError("ASRecord.serviceDeliveryEndTimeStamp violates SIZE constraint");
        }
        if (this.recordOpeningTime !== undefined && (this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("ASRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.recordClosureTime !== undefined && (this.recordClosureTime.length !== 9)) {
            throw new ASN1SizeError("ASRecord.recordClosureTime violates SIZE constraint");
        }
        if (this.localRecordSequenceNumber !== undefined && (this.localRecordSequenceNumber < 0 || this.localRecordSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("ASRecord.localRecordSequenceNumber violates INTEGER range");
        }
        if (this.serviceRequestTimeStampFraction !== undefined && (this.serviceRequestTimeStampFraction < 0 || this.serviceRequestTimeStampFraction > 999)) {
            throw new ASN1OverflowError("ASRecord.serviceRequestTimeStampFraction violates INTEGER range");
        }
        if (this.serviceDeliveryStartTimeStampFraction !== undefined && (this.serviceDeliveryStartTimeStampFraction < 0 || this.serviceDeliveryStartTimeStampFraction > 999)) {
            throw new ASN1OverflowError("ASRecord.serviceDeliveryStartTimeStampFraction violates INTEGER range");
        }
        if (this.serviceDeliveryEndTimeStampFraction !== undefined && (this.serviceDeliveryEndTimeStampFraction < 0 || this.serviceDeliveryEndTimeStampFraction > 999)) {
            throw new ASN1OverflowError("ASRecord.serviceDeliveryEndTimeStampFraction violates INTEGER range");
        }
        if (this.mSTimeZone !== undefined && (this.mSTimeZone.length !== 2)) {
            throw new ASN1SizeError("ASRecord.mSTimeZone violates SIZE constraint");
        }
        if (this.vlr_Number !== undefined && (this.vlr_Number.length < 1 || this.vlr_Number.length > 20)) {
            throw new ASN1SizeError("ASRecord.vlr_Number violates SIZE constraint");
        }
        if (this.msc_Address !== undefined && (this.msc_Address.length < 1 || this.msc_Address.length > 20)) {
            throw new ASN1SizeError("ASRecord.msc_Address violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a ASRecord
     * @description
     * 
     * This takes an `object` and converts it to a `ASRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ASRecord`.
     * @returns {ASRecord}
     */
    public static _from_object (_o: { [_K in keyof (ASRecord)]: (ASRecord)[_K] }): ASRecord {
        return new ASRecord(_o.recordType, _o.retransmission, _o.sIP_Method, _o.role_of_Node, _o.nodeAddress, _o.session_Id, _o.list_Of_Calling_Party_Address, _o.called_Party_Address, _o.privateUserID, _o.serviceRequestTimeStamp, _o.serviceDeliveryStartTimeStamp, _o.serviceDeliveryEndTimeStamp, _o.recordOpeningTime, _o.recordClosureTime, _o.interOperatorIdentifiers, _o.localRecordSequenceNumber, _o.recordSequenceNumber, _o.causeForRecordClosing, _o.incomplete_CDR_Indication, _o.iMS_Charging_Identifier, _o.list_Of_SDP_Media_Components, _o.gGSNaddress, _o.serviceReasonReturnCode, _o.list_Of_Message_Bodies, _o.recordExtensions, _o.expiresInformation, _o.event, _o.accessNetworkInformation, _o.serviceContextID, _o.list_of_subscription_ID, _o.list_Of_Early_SDP_Media_Components, _o.iMSCommunicationServiceIdentifier, _o.numberPortabilityRouting, _o.carrierSelectRouting, _o.sessionPriority, _o.serviceRequestTimeStampFraction, _o.serviceDeliveryStartTimeStampFraction, _o.serviceDeliveryEndTimeStampFraction, _o.list_of_Requested_Party_Address, _o.online_charging_flag, _o.realTimeTariffInformation, _o.nNI_Information, _o.userLocationInformation, _o.mSTimeZone, _o.fromAddress, _o.transit_IOI_Lists, _o.iMSVisitedNetworkIdentifier, _o.listOfReasonHeader, _o.additionalAccessNetworkInformation, _o.instanceId, _o.subscriberEquipmentNumber, _o.list_Of_AccessNetworkInfoChange, _o.listOfCalledIdentityChanges, _o.cellularNetworkInformation, _o.serviceSpecificInfo, _o.requested_Party_Address, _o.list_Of_Called_Asserted_Identity, _o.alternateChargedPartyAddress, _o.outgoingSessionId, _o.initialIMS_Charging_Identifier, _o.list_Of_AccessTransferInformation, _o.tADS_Identifier, _o.vlr_Number, _o.msc_Address, _o.threeGPPPSDataOffStatus, _o.fEIdentifierList);
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

    public static _enum_for_sessionPriority = _enum_for_SessionPriority;        /**
         * @summary The enum used as the type of the component `tADS_Identifier`
         * @public
         * @static
         */

    public static _enum_for_tADS_Identifier = _enum_for_TADIdentifier;        /**
         * @summary The enum used as the type of the component `threeGPPPSDataOffStatus`
         * @public
         * @static
         */

    public static _enum_for_threeGPPPSDataOffStatus = _enum_for_ASRecord_threeGPPPSDataOffStatus;
}

/**
 * @summary The Leading Root Component Types of ASRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ASRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sIP-Method", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("role-of-Node", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("nodeAddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("session-Id", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("list-Of-Calling-Party-Address", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("called-Party-Address", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("privateUserID", true, $.hasTag(_TagClass.context, 8)),
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
    new $.ComponentSpec("gGSNaddress", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("serviceReasonReturnCode", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("list-Of-Message-Bodies", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("expiresInformation", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("event", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("accessNetworkInformation", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("serviceContextID", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("list-of-subscription-ID", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("list-Of-Early-SDP-Media-Components", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("iMSCommunicationServiceIdentifier", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("numberPortabilityRouting", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("carrierSelectRouting", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("sessionPriority", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("serviceRequestTimeStampFraction", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("serviceDeliveryStartTimeStampFraction", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("serviceDeliveryEndTimeStampFraction", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("list-of-Requested-Party-Address", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("online-charging-flag", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("realTimeTariffInformation", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("nNI-Information", true, $.hasTag(_TagClass.context, 46)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("mSTimeZone", true, $.hasTag(_TagClass.context, 48)),
    new $.ComponentSpec("fromAddress", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("transit-IOI-Lists", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("iMSVisitedNetworkIdentifier", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("listOfReasonHeader", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("additionalAccessNetworkInformation", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("instanceId", true, $.hasTag(_TagClass.context, 57)),
    new $.ComponentSpec("subscriberEquipmentNumber", true, $.hasTag(_TagClass.context, 58)),
    new $.ComponentSpec("list-Of-AccessNetworkInfoChange", true, $.hasTag(_TagClass.context, 62)),
    new $.ComponentSpec("listOfCalledIdentityChanges", true, $.hasTag(_TagClass.context, 63)),
    new $.ComponentSpec("cellularNetworkInformation", true, $.hasTag(_TagClass.context, 64)),
    new $.ComponentSpec("serviceSpecificInfo", true, $.hasTag(_TagClass.context, 100)),
    new $.ComponentSpec("requested-Party-Address", true, $.hasTag(_TagClass.context, 101)),
    new $.ComponentSpec("list-Of-Called-Asserted-Identity", true, $.hasTag(_TagClass.context, 102)),
    new $.ComponentSpec("alternateChargedPartyAddress", true, $.hasTag(_TagClass.context, 103)),
    new $.ComponentSpec("outgoingSessionId", true, $.hasTag(_TagClass.context, 104)),
    new $.ComponentSpec("initialIMS-Charging-Identifier", true, $.hasTag(_TagClass.context, 105)),
    new $.ComponentSpec("list-Of-AccessTransferInformation", true, $.hasTag(_TagClass.context, 106)),
    new $.ComponentSpec("tADS-Identifier", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("vlr-Number", true, $.hasTag(_TagClass.context, 110)),
    new $.ComponentSpec("msc-Address", true, $.hasTag(_TagClass.context, 111)),
    new $.ComponentSpec("threeGPPPSDataOffStatus", true, $.hasTag(_TagClass.context, 112)),
    new $.ComponentSpec("fEIdentifierList", true, $.hasTag(_TagClass.context, 113))
];

/**
 * @summary The Trailing Root Component Types of ASRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ASRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ASRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ASRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ASRecord: $.ASN1Decoder<ASRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ASRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ASRecord (el: _Element): ASRecord {
    if (!_cached_decoder_for_ASRecord) { _cached_decoder_for_ASRecord = function (el: _Element): ASRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let retransmission: OPTIONAL<NULL>;
    let sIP_Method: OPTIONAL<GraphicString>;
    let role_of_Node: OPTIONAL<Role_of_Node>;
    let nodeAddress: OPTIONAL<NodeAddress>;
    let session_Id: OPTIONAL<GraphicString>;
    let list_Of_Calling_Party_Address: OPTIONAL<InvolvedParty[]>;
    let called_Party_Address: OPTIONAL<InvolvedParty>;
    let privateUserID: OPTIONAL<GraphicString>;
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
    let gGSNaddress: OPTIONAL<NodeAddress>;
    let serviceReasonReturnCode: OPTIONAL<UTF8String>;
    let list_Of_Message_Bodies: OPTIONAL<MessageBody[]>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let expiresInformation: OPTIONAL<INTEGER>;
    let event: OPTIONAL<UTF8String>;
    let accessNetworkInformation: OPTIONAL<OCTET_STRING>;
    let serviceContextID: OPTIONAL<UTF8String>;
    let list_of_subscription_ID: OPTIONAL<SubscriptionID[]>;
    let list_Of_Early_SDP_Media_Components: OPTIONAL<Early_Media_Components_List[]>;
    let iMSCommunicationServiceIdentifier: OPTIONAL<OCTET_STRING>;
    let numberPortabilityRouting: OPTIONAL<GraphicString>;
    let carrierSelectRouting: OPTIONAL<GraphicString>;
    let sessionPriority: OPTIONAL<SessionPriority>;
    let serviceRequestTimeStampFraction: OPTIONAL<INTEGER>;
    let serviceDeliveryStartTimeStampFraction: OPTIONAL<INTEGER>;
    let serviceDeliveryEndTimeStampFraction: OPTIONAL<INTEGER>;
    let list_of_Requested_Party_Address: OPTIONAL<InvolvedParty[]>;
    let online_charging_flag: OPTIONAL<NULL>;
    let realTimeTariffInformation: OPTIONAL<RealTimeTariffInformation[]>;
    let nNI_Information: OPTIONAL<NNI_Information>;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let mSTimeZone: OPTIONAL<OCTET_STRING>;
    let fromAddress: OPTIONAL<OCTET_STRING>;
    let transit_IOI_Lists: OPTIONAL<GraphicString[]>;
    let iMSVisitedNetworkIdentifier: OPTIONAL<OCTET_STRING>;
    let listOfReasonHeader: OPTIONAL<GraphicString[]>;
    let additionalAccessNetworkInformation: OPTIONAL<OCTET_STRING>;
    let instanceId: OPTIONAL<OCTET_STRING>;
    let subscriberEquipmentNumber: OPTIONAL<SubscriberEquipmentNumber>;
    let list_Of_AccessNetworkInfoChange: OPTIONAL<AccessNetworkInfoChange[]>;
    let listOfCalledIdentityChanges: OPTIONAL<CalledIdentityChange[]>;
    let cellularNetworkInformation: OPTIONAL<OCTET_STRING>;
    let serviceSpecificInfo: OPTIONAL<ServiceSpecificInfo[]>;
    let requested_Party_Address: OPTIONAL<InvolvedParty>;
    let list_Of_Called_Asserted_Identity: OPTIONAL<InvolvedParty[]>;
    let alternateChargedPartyAddress: OPTIONAL<UTF8String>;
    let outgoingSessionId: OPTIONAL<GraphicString>;
    let initialIMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    let list_Of_AccessTransferInformation: OPTIONAL<AccessTransferInformation[]>;
    let tADS_Identifier: OPTIONAL<TADIdentifier>;
    let vlr_Number: OPTIONAL<OCTET_STRING>;
    let msc_Address: OPTIONAL<OCTET_STRING>;
    let threeGPPPSDataOffStatus: OPTIONAL<ASRecord_threeGPPPSDataOffStatus>;
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
        "privateUserID": (_el: _Element): void => { privateUserID = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
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
        "gGSNaddress": (_el: _Element): void => { gGSNaddress = $._decode_explicit<NodeAddress>(() => _decode_NodeAddress)(_el); },
        "serviceReasonReturnCode": (_el: _Element): void => { serviceReasonReturnCode = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "list-Of-Message-Bodies": (_el: _Element): void => { list_Of_Message_Bodies = $._decode_implicit<MessageBody[]>(() => $._decodeSequenceOf<MessageBody>(() => _decode_MessageBody))(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "expiresInformation": (_el: _Element): void => { expiresInformation = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "event": (_el: _Element): void => { event = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "accessNetworkInformation": (_el: _Element): void => { accessNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceContextID": (_el: _Element): void => { serviceContextID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "list-of-subscription-ID": (_el: _Element): void => { list_of_subscription_ID = $._decode_implicit<SubscriptionID[]>(() => $._decodeSequenceOf<SubscriptionID>(() => _decode_SubscriptionID))(_el); },
        "list-Of-Early-SDP-Media-Components": (_el: _Element): void => { list_Of_Early_SDP_Media_Components = $._decode_implicit<Early_Media_Components_List[]>(() => $._decodeSequenceOf<Early_Media_Components_List>(() => _decode_Early_Media_Components_List))(_el); },
        "iMSCommunicationServiceIdentifier": (_el: _Element): void => { iMSCommunicationServiceIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "numberPortabilityRouting": (_el: _Element): void => { numberPortabilityRouting = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "carrierSelectRouting": (_el: _Element): void => { carrierSelectRouting = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "sessionPriority": (_el: _Element): void => { sessionPriority = $._decode_implicit<SessionPriority>(() => _decode_SessionPriority)(_el); },
        "serviceRequestTimeStampFraction": (_el: _Element): void => { serviceRequestTimeStampFraction = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serviceDeliveryStartTimeStampFraction": (_el: _Element): void => { serviceDeliveryStartTimeStampFraction = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serviceDeliveryEndTimeStampFraction": (_el: _Element): void => { serviceDeliveryEndTimeStampFraction = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "list-of-Requested-Party-Address": (_el: _Element): void => { list_of_Requested_Party_Address = $._decode_implicit<InvolvedParty[]>(() => $._decodeSequenceOf<InvolvedParty>(() => _decode_InvolvedParty))(_el); },
        "online-charging-flag": (_el: _Element): void => { online_charging_flag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "realTimeTariffInformation": (_el: _Element): void => { realTimeTariffInformation = $._decode_implicit<RealTimeTariffInformation[]>(() => $._decodeSequenceOf<RealTimeTariffInformation>(() => _decode_RealTimeTariffInformation))(_el); },
        "nNI-Information": (_el: _Element): void => { nNI_Information = $._decode_implicit<NNI_Information>(() => _decode_NNI_Information)(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mSTimeZone": (_el: _Element): void => { mSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "fromAddress": (_el: _Element): void => { fromAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "transit-IOI-Lists": (_el: _Element): void => { transit_IOI_Lists = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); },
        "iMSVisitedNetworkIdentifier": (_el: _Element): void => { iMSVisitedNetworkIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "listOfReasonHeader": (_el: _Element): void => { listOfReasonHeader = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); },
        "additionalAccessNetworkInformation": (_el: _Element): void => { additionalAccessNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "instanceId": (_el: _Element): void => { instanceId = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "subscriberEquipmentNumber": (_el: _Element): void => { subscriberEquipmentNumber = $._decode_implicit<SubscriberEquipmentNumber>(() => _decode_SubscriberEquipmentNumber)(_el); },
        "list-Of-AccessNetworkInfoChange": (_el: _Element): void => { list_Of_AccessNetworkInfoChange = $._decode_implicit<AccessNetworkInfoChange[]>(() => $._decodeSequenceOf<AccessNetworkInfoChange>(() => _decode_AccessNetworkInfoChange))(_el); },
        "listOfCalledIdentityChanges": (_el: _Element): void => { listOfCalledIdentityChanges = $._decode_implicit<CalledIdentityChange[]>(() => $._decodeSequenceOf<CalledIdentityChange>(() => _decode_CalledIdentityChange))(_el); },
        "cellularNetworkInformation": (_el: _Element): void => { cellularNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceSpecificInfo": (_el: _Element): void => { serviceSpecificInfo = $._decode_implicit<ServiceSpecificInfo[]>(() => $._decodeSequenceOf<ServiceSpecificInfo>(() => _decode_ServiceSpecificInfo))(_el); },
        "requested-Party-Address": (_el: _Element): void => { requested_Party_Address = $._decode_explicit<InvolvedParty>(() => _decode_InvolvedParty)(_el); },
        "list-Of-Called-Asserted-Identity": (_el: _Element): void => { list_Of_Called_Asserted_Identity = $._decode_implicit<InvolvedParty[]>(() => $._decodeSequenceOf<InvolvedParty>(() => _decode_InvolvedParty))(_el); },
        "alternateChargedPartyAddress": (_el: _Element): void => { alternateChargedPartyAddress = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "outgoingSessionId": (_el: _Element): void => { outgoingSessionId = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "initialIMS-Charging-Identifier": (_el: _Element): void => { initialIMS_Charging_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "list-Of-AccessTransferInformation": (_el: _Element): void => { list_Of_AccessTransferInformation = $._decode_implicit<AccessTransferInformation[]>(() => $._decodeSequenceOf<AccessTransferInformation>(() => _decode_AccessTransferInformation))(_el); },
        "tADS-Identifier": (_el: _Element): void => { tADS_Identifier = $._decode_implicit<TADIdentifier>(() => _decode_TADIdentifier)(_el); },
        "vlr-Number": (_el: _Element): void => { vlr_Number = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "msc-Address": (_el: _Element): void => { msc_Address = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "threeGPPPSDataOffStatus": (_el: _Element): void => { threeGPPPSDataOffStatus = $._decode_implicit<ASRecord_threeGPPPSDataOffStatus>(() => _decode_ASRecord_threeGPPPSDataOffStatus)(_el); },
        "fEIdentifierList": (_el: _Element): void => { fEIdentifierList = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ASRecord,
        _extension_additions_list_spec_for_ASRecord,
        _root_component_type_list_2_spec_for_ASRecord,
        undefined,
    );
    return new ASRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        retransmission,
        sIP_Method,
        role_of_Node,
        nodeAddress,
        session_Id,
        list_Of_Calling_Party_Address,
        called_Party_Address,
        privateUserID,
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
        gGSNaddress,
        serviceReasonReturnCode,
        list_Of_Message_Bodies,
        recordExtensions,
        expiresInformation,
        event,
        accessNetworkInformation,
        serviceContextID,
        list_of_subscription_ID,
        list_Of_Early_SDP_Media_Components,
        iMSCommunicationServiceIdentifier,
        numberPortabilityRouting,
        carrierSelectRouting,
        sessionPriority,
        serviceRequestTimeStampFraction,
        serviceDeliveryStartTimeStampFraction,
        serviceDeliveryEndTimeStampFraction,
        list_of_Requested_Party_Address,
        online_charging_flag,
        realTimeTariffInformation,
        nNI_Information,
        userLocationInformation,
        mSTimeZone,
        fromAddress,
        transit_IOI_Lists,
        iMSVisitedNetworkIdentifier,
        listOfReasonHeader,
        additionalAccessNetworkInformation,
        instanceId,
        subscriberEquipmentNumber,
        list_Of_AccessNetworkInfoChange,
        listOfCalledIdentityChanges,
        cellularNetworkInformation,
        serviceSpecificInfo,
        requested_Party_Address,
        list_Of_Called_Asserted_Identity,
        alternateChargedPartyAddress,
        outgoingSessionId,
        initialIMS_Charging_Identifier,
        list_Of_AccessTransferInformation,
        tADS_Identifier,
        vlr_Number,
        msc_Address,
        threeGPPPSDataOffStatus,
        fEIdentifierList
    );
}; }
    return _cached_decoder_for_ASRecord(el);
}

let _cached_encoder_for_ASRecord: $.ASN1Encoder<ASRecord> | null = null;

/**
 * @summary Encodes a(n) ASRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASRecord, encoded as an ASN.1 Element.
 */
export
function _encode_ASRecord (value: ASRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ASRecord) { _cached_encoder_for_ASRecord = function (value: ASRecord, _elGetter: $.ASN1Encoder<ASRecord>): _Element {
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
    if (value.privateUserID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeGraphicString, $.BER)(value.privateUserID, $.BER));
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
    if (value.gGSNaddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 22, () => _encode_NodeAddress, $.BER)(value.gGSNaddress, $.BER));
    }
    if (value.serviceReasonReturnCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeUTF8String, $.BER)(value.serviceReasonReturnCode, $.BER));
    }
    if (value.list_Of_Message_Bodies !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeSequenceOf<MessageBody>(() => _encode_MessageBody, $.BER), $.BER)(value.list_Of_Message_Bodies, $.BER));
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
    if (value.list_of_subscription_ID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 31, () => $._encodeSequenceOf<SubscriptionID>(() => _encode_SubscriptionID, $.BER), $.BER)(value.list_of_subscription_ID, $.BER));
    }
    if (value.list_Of_Early_SDP_Media_Components !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => $._encodeSequenceOf<Early_Media_Components_List>(() => _encode_Early_Media_Components_List, $.BER), $.BER)(value.list_Of_Early_SDP_Media_Components, $.BER));
    }
    if (value.iMSCommunicationServiceIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => $._encodeOctetString, $.BER)(value.iMSCommunicationServiceIdentifier, $.BER));
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
    if (value.list_of_Requested_Party_Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 41, () => $._encodeSequenceOf<InvolvedParty>(() => _encode_InvolvedParty, $.BER), $.BER)(value.list_of_Requested_Party_Address, $.BER));
    }
    if (value.online_charging_flag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 43, () => $._encodeNull, $.BER)(value.online_charging_flag, $.BER));
    }
    if (value.realTimeTariffInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 44, () => $._encodeSequenceOf<RealTimeTariffInformation>(() => _encode_RealTimeTariffInformation, $.BER), $.BER)(value.realTimeTariffInformation, $.BER));
    }
    if (value.nNI_Information !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 46, () => _encode_NNI_Information, $.BER)(value.nNI_Information, $.BER));
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
    if (value.transit_IOI_Lists !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 53, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.transit_IOI_Lists, $.BER));
    }
    if (value.iMSVisitedNetworkIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 54, () => $._encodeOctetString, $.BER)(value.iMSVisitedNetworkIdentifier, $.BER));
    }
    if (value.listOfReasonHeader !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.listOfReasonHeader, $.BER));
    }
    if (value.additionalAccessNetworkInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => $._encodeOctetString, $.BER)(value.additionalAccessNetworkInformation, $.BER));
    }
    if (value.instanceId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 57, () => $._encodeOctetString, $.BER)(value.instanceId, $.BER));
    }
    if (value.subscriberEquipmentNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 58, () => _encode_SubscriberEquipmentNumber, $.BER)(value.subscriberEquipmentNumber, $.BER));
    }
    if (value.list_Of_AccessNetworkInfoChange !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 62, () => $._encodeSequenceOf<AccessNetworkInfoChange>(() => _encode_AccessNetworkInfoChange, $.BER), $.BER)(value.list_Of_AccessNetworkInfoChange, $.BER));
    }
    if (value.listOfCalledIdentityChanges !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 63, () => $._encodeSequenceOf<CalledIdentityChange>(() => _encode_CalledIdentityChange, $.BER), $.BER)(value.listOfCalledIdentityChanges, $.BER));
    }
    if (value.cellularNetworkInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 64, () => $._encodeOctetString, $.BER)(value.cellularNetworkInformation, $.BER));
    }
    if (value.serviceSpecificInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 100, () => $._encodeSequenceOf<ServiceSpecificInfo>(() => _encode_ServiceSpecificInfo, $.BER), $.BER)(value.serviceSpecificInfo, $.BER));
    }
    if (value.requested_Party_Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 101, () => _encode_InvolvedParty, $.BER)(value.requested_Party_Address, $.BER));
    }
    if (value.list_Of_Called_Asserted_Identity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 102, () => $._encodeSequenceOf<InvolvedParty>(() => _encode_InvolvedParty, $.BER), $.BER)(value.list_Of_Called_Asserted_Identity, $.BER));
    }
    if (value.alternateChargedPartyAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 103, () => $._encodeUTF8String, $.BER)(value.alternateChargedPartyAddress, $.BER));
    }
    if (value.outgoingSessionId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 104, () => $._encodeGraphicString, $.BER)(value.outgoingSessionId, $.BER));
    }
    if (value.initialIMS_Charging_Identifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 105, () => $._encodeOctetString, $.BER)(value.initialIMS_Charging_Identifier, $.BER));
    }
    if (value.list_Of_AccessTransferInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 106, () => $._encodeSequenceOf<AccessTransferInformation>(() => _encode_AccessTransferInformation, $.BER), $.BER)(value.list_Of_AccessTransferInformation, $.BER));
    }
    if (value.tADS_Identifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 109, () => _encode_TADIdentifier, $.BER)(value.tADS_Identifier, $.BER));
    }
    if (value.vlr_Number !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 110, () => $._encodeOctetString, $.BER)(value.vlr_Number, $.BER));
    }
    if (value.msc_Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 111, () => $._encodeOctetString, $.BER)(value.msc_Address, $.BER));
    }
    if (value.threeGPPPSDataOffStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 112, () => _encode_ASRecord_threeGPPPSDataOffStatus, $.BER)(value.threeGPPPSDataOffStatus, $.BER));
    }
    if (value.fEIdentifierList !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 113, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.fEIdentifierList, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_ASRecord(value, elGetter);
}


/* eslint-enable */
