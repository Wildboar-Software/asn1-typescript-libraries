/* eslint-disable */
import {
    type BOOLEAN,
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RecordType, _decode_RecordType, _encode_RecordType } from "../MMSChargingDataTypes/RecordType.ta.mjs";
import { MMSRSAddress, _decode_MMSRSAddress, _encode_MMSRSAddress } from "../MMSChargingDataTypes/MMSRSAddress.ta.mjs";
import { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";
import { type AccessCorrelation, _decode_AccessCorrelation, _encode_AccessCorrelation } from "../MMSChargingDataTypes/AccessCorrelation.ta.mjs";
import { MMComponentType, _decode_MMComponentType, _encode_MMComponentType } from "../MMSChargingDataTypes/MMComponentType.ta.mjs";
import { type MessageClass, _decode_MessageClass, _encode_MessageClass, _enum_for_MessageClass } from "../MMSChargingDataTypes/MessageClass.ta.mjs";
import { ChargeInformation, _decode_ChargeInformation, _encode_ChargeInformation } from "../MMSChargingDataTypes/ChargeInformation.ta.mjs";
import { type WaitTime, _decode_WaitTime, _encode_WaitTime } from "../MMSChargingDataTypes/WaitTime.ta.mjs";
import { type RequestStatusCodeType, _decode_RequestStatusCodeType, _encode_RequestStatusCodeType } from "../MMSChargingDataTypes/RequestStatusCodeType.ta.mjs";
import { type PriorityType, _decode_PriorityType, _encode_PriorityType, _enum_for_PriorityType } from "../MMSChargingDataTypes/PriorityType.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";
import { MMBoxStorageInformation, _decode_MMBoxStorageInformation, _encode_MMBoxStorageInformation } from "../MMSChargingDataTypes/MMBoxStorageInformation.ta.mjs";
import { MSCFInformation, _decode_MSCFInformation, _encode_MSCFInformation } from "../MMSChargingDataTypes/MSCFInformation.ta.mjs";


/**
 * @summary MMO1SRecord
 * @description
 *
 * Originator MM1 Submission record (O1S-CDR).
 *
 * If enabled, an Originator MM1 Submission O1S-CDR shall be produced in
 * the Originator MMS R/S for each MM submitted in an MM1_submit.REQ by an
 * originator MMS User Agent to the Originator MMS R/S if and when the
 * Originator MMS R/S responds with an MM1_submit.RES. The operator can
 * configure whether this CDR, if enabled, shall only be created for
 * MM1_submit.RES indicating acceptance of the submitted MM, or also for
 * the unsuccessful submissions.
 *
 * NOTE 1: This includes the case where the MM is a reply-MM to an original
 * MM. In this case the MMS User Agent sending the reply-MM is called the
 * originator MMS User Agent of this reply-MM and the MMS R/S receiving the
 * reply-MM in an MM1_submit.REQ is called the Originator MMS R/S for this
 * reply-MM.
 *
 * NOTE 2: The case of an MMS R/S receiving an MM1_forward.REQ is treated
 * in clause 6.1.3.
 *
 * Table 5.2.3.1.1 associates trigger C1 with this record when one MMS R/S
 * is both originator and recipient. Table 5.2.3.2.1 associates trigger O1
 * with it at a separate Originator MMS R/S.
 *
 * Produced in the Originator MMS R/S. An MM4 record is produced only when
 * that R/S is not also the Recipient MMS R/S. An MM1 record is produced
 * either way. Unless otherwise stated, parameters are copied from the
 * corresponding MM1 or MM4 message (clause 6.1.1.0).
 *
 * MMS offline charging is event based. One chargeable event produces one
 * CDR. From the 3GPP specifications that CDR is visible in the files the
 * MMS R/S sends across Bm (clause 5.2.1).
 *
 * Field categories follow the charging data configuration in TS 32.240
 * clause 5.4, which clause 6.1.0 applies to this table. M is always
 * present. C is present when the conditions stated for that field are met.
 * OM and OC are included only when the operator has provisioned them; OC
 * also requires those conditions.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMO1SRecord ::= SET {
 *    recordType                [0] IMPLICIT RecordType,
 *    originatorMmsRSAddress    [1] IMPLICIT MMSRSAddress,
 *    messageID                 [2] IMPLICIT OCTET STRING,
 *    replyChargingID           [3] IMPLICIT OCTET STRING OPTIONAL,
 *    originatorAddress         [4] IMPLICIT MMSAgentAddress,
 *    recipientAddresses        [5] IMPLICIT SET  OF
 *       MMSAgentAddress,
 *    accessCorrelation         [6] AccessCorrelation OPTIONAL,
 *    contentType               [7] IMPLICIT OCTET STRING,
 *    mmComponentType           [8] IMPLICIT MMComponentType OPTIONAL,
 *    messageSize               [9] IMPLICIT INTEGER,
 *    messageClass              [10] IMPLICIT MessageClass OPTIONAL,
 *    chargeInformation         [11] IMPLICIT ChargeInformation OPTIONAL,
 *    submissionTime            [12] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    timeOfExpiry              [13] WaitTime OPTIONAL,
 *    earliestTimeOfDelivery    [14] WaitTime OPTIONAL,
 *    durationOfTransmission    [15] IMPLICIT INTEGER OPTIONAL,
 *    requestStatusCode         [16] IMPLICIT RequestStatusCodeType OPTIONAL,
 *    deliveryReportRequested   [17] IMPLICIT BOOLEAN OPTIONAL,
 *    replyCharging             [18] IMPLICIT BOOLEAN OPTIONAL,
 *    replyDeadline             [19] WaitTime OPTIONAL,
 *    replyChargingSize         [20] IMPLICIT INTEGER OPTIONAL,
 *    priority                  [21] IMPLICIT PriorityType OPTIONAL,
 *    senderVisibility          [22] IMPLICIT BOOLEAN OPTIONAL,
 *    readReplyRequested        [23] IMPLICIT BOOLEAN OPTIONAL,
 *    statusText                [24] IMPLICIT OCTET STRING,
 *    recordTimeStamp           [25] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    localSequenceNumber       [26] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions          [27] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    mMBoxstorageInformation   [28] IMPLICIT MMBoxStorageInformation OPTIONAL,
 *    mscfInformation           [29] IMPLICIT MSCFInformation OPTIONAL,
 *    sGSNPLMNIdentifier        [30] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    rATType                   [31] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    mSTimeZone                [32] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MMO1SRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * The field identifies the type of the record, see TS 32.250 [10].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.42.
     *
     * Category M. Originator MM1 Submission record.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `originatorMmsRSAddress`.
     * @description
     *
     * Category M. IP address or domain name of Originator MMS R/S.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly originatorMmsRSAddress: MMSRSAddress;
    /**
     * @summary `messageID`.
     * @description
     *
     * This field specifies the MM Message ID of the MM as defined in TS 23.140
     * [206]. The concrete syntax of this MM Message ID is given by the body of
     * the field introduced by the string "X-Mms-Message-ID:" in the concrete
     * syntax of the message MM4_Forward. REQ. All CDRs pertaining to the same MM
     * shall employ the same value of this parameter, i.e. the value initially
     * assigned by the originator MMS Relay/Server upon submission of the MM by
     * the Originator MMS User Agent.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.20.
     *
     * Category M. The MM identification provided by the Originator MMS R/S.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly messageID: OCTET_STRING;
    /**
     * @summary `replyChargingID`.
     * @description
     *
     * This field is present in the CDR only if the MM is a reply-MM to an
     * original MM. The Reply Charging ID is the Message ID of the original MM.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.44.
     *
     * Category C. This field is present in the CDR only if the MM is a
     * reply-MM to an original MM. The Reply-Charging ID is the Message ID of
     * the original MM.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly replyChargingID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `originatorAddress`.
     * @description
     *
     * This field contains an originator MMS User Agent address. The MMS supports
     * the use of E-Mail addresses (RFC 822 [400]) or MSISDN (E.164 [308]).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.30.
     *
     * Category M. The address of the originator MMS User Agent (i.e., of the
     * MMS User Agent that has sent the MM1_submit.REQ).
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly originatorAddress: MMSAgentAddress;
    /**
     * @summary `recipientAddresses`.
     * @description
     *
     * Category M. The address(es) of the Recipient MMS User Agent(s) of the
     * MM. Multiple addresses are possible if the MM is not a reply MM.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly recipientAddresses: MMSAgentAddress[];
    /**
     * @summary `accessCorrelation`.
     * @description
     *
     * If the parameter is provided and is not an empty string, it is a unique
     * identifier delivered by the used access network domain of the originator
     * or recipient MMS User Agent. It may be used for correlation of the MMS
     * CDRs with the corresponding MSC server CDRs in CS domain or GSN CDRs in PS
     * domain. It is an empty string if the parameter is not delivered by the
     * access network.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.2.
     *
     * Category OM. A unique identifier delivered by the used access network
     * domain of the originator MMS User Agent.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly accessCorrelation: OPTIONAL<AccessCorrelation>;
    /**
     * @summary `contentType`.
     * @description
     *
     * The Content Type of the MM as defined in TS 23.140 [206].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.7.
     *
     * Category M. The content type of the MM content.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly contentType: OCTET_STRING;
    /**
     * @summary `mmComponentType`.
     * @description
     *
     * Category OM. The list of media components with volume size.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly mmComponentType: OPTIONAL<MMComponentType>;
    /**
     * @summary `messageSize`.
     * @description
     *
     * This field contains the number of octets of the MM that is calculated as
     * specified in TS 23.140 [206].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.23.
     *
     * Category M. The total size of the MM content.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly messageSize: INTEGER;
    /**
     * @summary `messageClass`.
     * @description
     *
     * A class of messages such as personal, advertisement, information service
     * etc. For more information see TS 23.140 [206].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.18.
     *
     * Category OC. The class selection such as personal, advertisement,
     * information service if specified in the MM1_submit_REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly messageClass: OPTIONAL<MessageClass>;
    /**
     * @summary `chargeInformation`.
     * @description
     *
     * This field consists of two parts, the charged party and the charge type.
     * The Charged Party is an indication on which party is expected to be
     * charged for an MM e.g. the sending, receiving, both parties or neither.
     * This indicator is only applicable to MM7 CDRs (for VASP-originated MMs).
     * It may be provided by the VASP when submitting an MM. The Charge Type
     * indicates the type of subscription (i.e. postpaid or prepaid). This
     * indicator is derived from the subscription parameters and only applicable
     * to MM1 CDRs. The Charged Parties are as follows: Both: This indicates both
     * the sending and the receiving parties are expected to be charged ('shared'
     * charging model); Neither: This indicates neither the sending nor the
     * receiving parties are expected to be charged ('free of charge' charging
     * model). The Charge types are as follows:
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.6.
     *
     * Category OM. The charged party indication and charge type.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly chargeInformation: OPTIONAL<ChargeInformation>;
    /**
     * @summary `submissionTime`.
     * @description
     *
     * The submission time field contains the time stamps relevant for the
     * submission of the MM. The time-stamp includes a minimum of date, hour,
     * minute and second.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.56.
     *
     * Category OC. The time at which the MM was submitted from the originator
     * MMS User Agent if specified in the MM1_submit_REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly submissionTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `timeOfExpiry`.
     * @description
     *
     * This field contains the desired date or the number of seconds to expiry of
     * the MM, if specified by the originator MMS User Agent.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.57.
     *
     * Category OC. The desired date of expiry or duration of time prior to
     * expiry for the MM if specified by the originator MMS User Agent.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly timeOfExpiry: OPTIONAL<WaitTime>;
    /**
     * @summary `earliestTimeOfDelivery`.
     * @description
     *
     * This field contains either the earliest time to deliver message or the
     * number of seconds to wait before delivering the message.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.10.
     *
     * Category C. This field contains either the earliest time to deliver the
     * MM or the number of seconds to wait before delivering the MM as
     * specified by the originator MMS User Agent.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly earliestTimeOfDelivery: OPTIONAL<WaitTime>;
    /**
     * @summary `durationOfTransmission`.
     * @description
     *
     * This field contains the relevant time in seconds. The Duration of
     * Transmission is the time from the beginning to the end of the MM transfer
     * between the MMS User Agent and the MMS Relay/Server; e.g. for streaming
     * purposes. Note that the CDRs purposely do not contain any information
     * about the duration of storage on the MMS Relay/Server. If such information
     * is required it can be calculated by post-processing systems from the CDR
     * timestamps. For instance, the total duration of storage on the originator
     * MMS Relay/Server could be calculated by taking the difference between the
     * 'Record Time Stamp' of the O1S-CDR and the 'Record Time Stamp' of the
     * OMD-CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.9.
     *
     * Category OM. The time used for transmission of the MM between the User
     * Agent and the MMS R/S.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly durationOfTransmission: OPTIONAL<INTEGER>;
    /**
     * @summary `requestStatusCode`.
     * @description
     *
     * The status of the MM as reflected in the corresponding MM4 message (e.g.
     * error service denied, error network problem, error unsupported message,
     * etc.). For further details see TS 23.140 [206].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.48.
     *
     * Category OM. The status code of the MM as received in the MM1_submit_REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly requestStatusCode: OPTIONAL<RequestStatusCodeType>;
    /**
     * @summary `deliveryReportRequested`.
     * @description
     *
     * This is an indication of type Boolean whether (value TRUE) or not (value
     * FALSE) the originator/forwarding MMS User Agent has requested a delivery
     * report in the MM1_submit. REQ/MM1_forward. REQ.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.8.
     *
     * Category OM. This field indicates whether a delivery report has been
     * requested by the originator MMS User Agent or not.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly deliveryReportRequested: OPTIONAL<BOOLEAN>;
    /**
     * @summary `replyCharging`.
     * @description
     *
     * This field indicates whether the originator of the MM is willing to take
     * over the charge for the sending of a reply-MM to their submitted MM from
     * the recipient(s). In this case the originator MMS Relay/Server marks the
     * MM as no charge (reply-charged). In the Originator MM1 Submission CDR
     * (O1S-CDR) this parameter indicates whether the originator MMS User Agent
     * has requested reply-charging (value TRUE) or not (value FALSE). In the
     * Recipient MM1 Notification Request record (R1NRq -CDR) it indicates
     * whether a reply to this particular original MM is free of charge (value
     * TRUE) or not (value FALSE). In the MM7 Submission CDR (7S-CDR) this
     * parameter indicates whether the originator MMS VASP has requested
     * reply-charging (value TRUE) or not (value FALSE).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.43.
     *
     * Category OC. A request for reply-charging if specified by the originator
     * MMS User Agent.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly replyCharging: OPTIONAL<BOOLEAN>;
    /**
     * @summary `replyDeadline`.
     * @description
     *
     * In the Originator MM1 Submission CDR (O1S-CDR), in case of reply-charging,
     * this field indicates the latest time of submission of replies granted to
     * the recipient(s) as specified by the originator MMS User Agent. In the
     * Recipient MM1 Notification Request CDR (R1NRq-CDR), in case of
     * reply-charging, this field indicates the latest time of submission of a
     * reply granted to the recipient as specified in the MM1_notification. REQ.
     * In the MM7 Submission CDR (7S-CDR), in case of reply-charging, this field
     * indicates the latest time of submission of replies granted to the
     * recipient(s) as specified by the originator MMS VASP.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.46.
     *
     * Category OC. In case of reply-charging the latest time of submission of
     * replies granted to the recipient(s) as specified by the originator MMS
     * User Agent.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly replyDeadline: OPTIONAL<WaitTime>;
    /**
     * @summary `replyChargingSize`.
     * @description
     *
     * In the Originator MM1 Submission CDR (O1S-CDR), in case of reply-charging,
     * this field indicates the maximum size for reply-MM(s) granted to the
     * recipient(s) as specified by the originator MMS User Agent. In the
     * Recipient MM1 Notification Request CDR (R1NRq-CDR), in case of
     * reply-charging, this field indicates the maximum size of a reply-MM
     * granted to the recipient as specified in the MM1_notification. REQ. In the
     * MM7 Submission CDR (7S-CDR), in case of reply-charging, this field
     * indicates the maximum size for reply-MM(s) granted to the recipient(s) as
     * specified by the originator MMS VASP.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.45.
     *
     * Category OC. In case of reply-charging the maximum size for reply-MM(s)
     * granted to the recipient(s) as specified by the originator MMS User
     * Agent.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly replyChargingSize: OPTIONAL<INTEGER>;
    /**
     * @summary `priority`.
     * @description
     *
     * The priority (importance) of the message, see TS 23.140 [206].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.32.
     *
     * Category OC. The priority (importance) of the message if specified by
     * the originator MMS User Agent.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly priority: OPTIONAL<PriorityType>;
    /**
     * @summary `senderVisibility`.
     * @description
     *
     * This Boolean value indicates whether the originator MMS User Agent has
     * requested her address to be hidden from the recipient (value TRUE) or not
     * (value FALSE).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.52.
     *
     * Category OM. A request to show or hide the sender's identity when the
     * message is delivered to the recipient as specified by the originator MMS
     * User Agent.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly senderVisibility: OPTIONAL<BOOLEAN>;
    /**
     * @summary `readReplyRequested`.
     * @description
     *
     * A Boolean value indicating whether the originator MMS User Agent has
     * requested a read-reply report (value TRUE) or not (value FALSE).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.35.
     *
     * Category OM. A request for read-reply report as specified in the
     * MM1_submit.REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly readReplyRequested: OPTIONAL<BOOLEAN>;
    /**
     * @summary `statusText`.
     * @description
     *
     * This field includes a more detailed technical status of the message at the
     * point in time when the CDR is generated.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.55.
     *
     * Category OC. This field includes a more detailed technical status of the
     * message at the point in time when the CDR is generated. This field is
     * only present if the MM submission is rejected.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly statusText: OCTET_STRING;
    /**
     * @summary `recordTimeStamp`.
     * @description
     *
     * This field indicates the date and time when the CDR was produced.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.41.
     *
     * Category OM. Time of generation of the CDR.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly recordTimeStamp: OCTET_STRING;
    /**
     * @summary `localSequenceNumber`.
     * @description
     *
     * This field includes a unique record number created by this node. The
     * number is allocated sequentially including all CDR types. The number is
     * unique within one node, which is identified either by field Node ID or by
     * record-dependent MMS Relay/Server. The field can be used e.g. to identify
     * missing records in post processing system.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.16.
     *
     * Category OM. Consecutive record number created by this node. The number
     * is allocated sequentially including all CDR types.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * The field enables network operators and/or manufacturers to add their own
     * extensions to the standard record definitions.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.40.
     *
     * Category OC. A set of network/manufacturer specific extensions to the
     * record. Conditioned upon the existence of an extension.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `mMBoxstorageInformation`.
     * @description
     *
     * Category OC. A set of parameters related to the MMBox management. This
     * parameter is only present if the MMBox feature is supported by the MMS
     * R/S and storage of the MM was requested by originator MMS User Agent
     * (i.e., of the MMS User Agent that has sent the MM1_submit.REQ).
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly mMBoxstorageInformation: OPTIONAL<MMBoxStorageInformation>;
    /**
     * @summary `mscfInformation`.
     * @description
     *
     * This is a grouped field comprising several the following sub-fields
     * associated with the invocation of the MSCF for advanced addressing:
     * Billing Information; Routeing address List. These field elements are
     * described in the appropriate subclause.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.29.
     *
     * Category OC. A set of parameters provided by the MSCF when interacting
     * with the MMS R/S via the MM10 interface prior to the MM1_submit.RES.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly mscfInformation: OPTIONAL<MSCFInformation>;
    /**
     * @summary `sGSNPLMNIdentifier`.
     * @description
     *
     * Category OC. If present this parameter holds the SGSN PLMN Identifier
     * (MCC and MNC) used during this record.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly sGSNPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `rATType`.
     * @description
     *
     * Category OC. The radio access technology used during this record.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `mSTimeZone`.
     * @description
     *
     * This field contains the 'Time Zone' IE provided for the MMS User Agent as
     * specified in TS 29.060 [215].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.28A.
     *
     * Category OC. This field contains the MS Time Zone the MMS User Agent is
     * currently located, if available.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly mSTimeZone: OPTIONAL<OCTET_STRING>;

    constructor (
        recordType: RecordType,
        originatorMmsRSAddress: MMSRSAddress,
        messageID: OCTET_STRING,
        replyChargingID: OPTIONAL<OCTET_STRING>,
        originatorAddress: MMSAgentAddress,
        recipientAddresses: MMSAgentAddress[],
        accessCorrelation: OPTIONAL<AccessCorrelation>,
        contentType: OCTET_STRING,
        mmComponentType: OPTIONAL<MMComponentType>,
        messageSize: INTEGER,
        messageClass: OPTIONAL<MessageClass>,
        chargeInformation: OPTIONAL<ChargeInformation>,
        submissionTime: OPTIONAL<OCTET_STRING>,
        timeOfExpiry: OPTIONAL<WaitTime>,
        earliestTimeOfDelivery: OPTIONAL<WaitTime>,
        durationOfTransmission: OPTIONAL<INTEGER>,
        requestStatusCode: OPTIONAL<RequestStatusCodeType>,
        deliveryReportRequested: OPTIONAL<BOOLEAN>,
        replyCharging: OPTIONAL<BOOLEAN>,
        replyDeadline: OPTIONAL<WaitTime>,
        replyChargingSize: OPTIONAL<INTEGER>,
        priority: OPTIONAL<PriorityType>,
        senderVisibility: OPTIONAL<BOOLEAN>,
        readReplyRequested: OPTIONAL<BOOLEAN>,
        statusText: OCTET_STRING,
        recordTimeStamp: OCTET_STRING,
        localSequenceNumber?: OPTIONAL<INTEGER>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        mMBoxstorageInformation?: OPTIONAL<MMBoxStorageInformation>,
        mscfInformation?: OPTIONAL<MSCFInformation>,
        sGSNPLMNIdentifier?: OPTIONAL<OCTET_STRING>,
        rATType?: OPTIONAL<INTEGER>,
        mSTimeZone?: OPTIONAL<OCTET_STRING>
    ) {
        this.recordType = recordType;
        this.originatorMmsRSAddress = originatorMmsRSAddress;
        this.messageID = messageID;
        this.replyChargingID = replyChargingID;
        this.originatorAddress = originatorAddress;
        this.recipientAddresses = recipientAddresses;
        this.accessCorrelation = accessCorrelation;
        this.contentType = contentType;
        this.mmComponentType = mmComponentType;
        this.messageSize = messageSize;
        this.messageClass = messageClass;
        this.chargeInformation = chargeInformation;
        this.submissionTime = submissionTime;
        this.timeOfExpiry = timeOfExpiry;
        this.earliestTimeOfDelivery = earliestTimeOfDelivery;
        this.durationOfTransmission = durationOfTransmission;
        this.requestStatusCode = requestStatusCode;
        this.deliveryReportRequested = deliveryReportRequested;
        this.replyCharging = replyCharging;
        this.replyDeadline = replyDeadline;
        this.replyChargingSize = replyChargingSize;
        this.priority = priority;
        this.senderVisibility = senderVisibility;
        this.readReplyRequested = readReplyRequested;
        this.statusText = statusText;
        this.recordTimeStamp = recordTimeStamp;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
        this.mMBoxstorageInformation = mMBoxstorageInformation;
        this.mscfInformation = mscfInformation;
        this.sGSNPLMNIdentifier = sGSNPLMNIdentifier;
        this.rATType = rATType;
        this.mSTimeZone = mSTimeZone;
    
        if (this.submissionTime !== undefined && (this.submissionTime.length !== 9)) {
            throw new ASN1SizeError("MMO1SRecord.submissionTime violates SIZE constraint");
        }
        if ((this.recordTimeStamp.length !== 9)) {
            throw new ASN1SizeError("MMO1SRecord.recordTimeStamp violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("MMO1SRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.sGSNPLMNIdentifier !== undefined && (this.sGSNPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("MMO1SRecord.sGSNPLMNIdentifier violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("MMO1SRecord.rATType violates INTEGER range");
        }
        if (this.mSTimeZone !== undefined && (this.mSTimeZone.length !== 2)) {
            throw new ASN1SizeError("MMO1SRecord.mSTimeZone violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MMO1SRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MMO1SRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMO1SRecord`.
     * @returns {MMO1SRecord}
     */
    public static _from_object (_o: { [_K in keyof (MMO1SRecord)]: (MMO1SRecord)[_K] }): MMO1SRecord {
        return new MMO1SRecord(_o.recordType, _o.originatorMmsRSAddress, _o.messageID, _o.replyChargingID, _o.originatorAddress, _o.recipientAddresses, _o.accessCorrelation, _o.contentType, _o.mmComponentType, _o.messageSize, _o.messageClass, _o.chargeInformation, _o.submissionTime, _o.timeOfExpiry, _o.earliestTimeOfDelivery, _o.durationOfTransmission, _o.requestStatusCode, _o.deliveryReportRequested, _o.replyCharging, _o.replyDeadline, _o.replyChargingSize, _o.priority, _o.senderVisibility, _o.readReplyRequested, _o.statusText, _o.recordTimeStamp, _o.localSequenceNumber, _o.recordExtensions, _o.mMBoxstorageInformation, _o.mscfInformation, _o.sGSNPLMNIdentifier, _o.rATType, _o.mSTimeZone);
    }

        /**
         * @summary The enum used as the type of the component `messageClass`
         * @public
         * @static
         */

    public static _enum_for_messageClass = _enum_for_MessageClass;        /**
         * @summary The enum used as the type of the component `priority`
         * @public
         * @static
         */

    public static _enum_for_priority = _enum_for_PriorityType;
}

/**
 * @summary The Leading Root Component Types of MMO1SRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMO1SRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("originatorMmsRSAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("replyChargingID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("originatorAddress", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("recipientAddresses", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("accessCorrelation", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("contentType", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("mmComponentType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("messageSize", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("messageClass", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("chargeInformation", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("submissionTime", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("timeOfExpiry", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("earliestTimeOfDelivery", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("durationOfTransmission", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("requestStatusCode", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("deliveryReportRequested", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("replyCharging", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("replyDeadline", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("replyChargingSize", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("senderVisibility", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("readReplyRequested", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("statusText", false, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("recordTimeStamp", false, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("mMBoxstorageInformation", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("mscfInformation", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("sGSNPLMNIdentifier", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("mSTimeZone", true, $.hasTag(_TagClass.context, 32))
];

/**
 * @summary The Trailing Root Component Types of MMO1SRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMO1SRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMO1SRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMO1SRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMO1SRecord: $.ASN1Decoder<MMO1SRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMO1SRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMO1SRecord (el: _Element): MMO1SRecord {
    if (!_cached_decoder_for_MMO1SRecord) { _cached_decoder_for_MMO1SRecord = function (el: _Element): MMO1SRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let originatorMmsRSAddress!: MMSRSAddress;
    let messageID!: OCTET_STRING;
    let replyChargingID: OPTIONAL<OCTET_STRING>;
    let originatorAddress!: MMSAgentAddress;
    let recipientAddresses!: MMSAgentAddress[];
    let accessCorrelation: OPTIONAL<AccessCorrelation>;
    let contentType!: OCTET_STRING;
    let mmComponentType: OPTIONAL<MMComponentType>;
    let messageSize!: INTEGER;
    let messageClass: OPTIONAL<MessageClass>;
    let chargeInformation: OPTIONAL<ChargeInformation>;
    let submissionTime: OPTIONAL<OCTET_STRING>;
    let timeOfExpiry: OPTIONAL<WaitTime>;
    let earliestTimeOfDelivery: OPTIONAL<WaitTime>;
    let durationOfTransmission: OPTIONAL<INTEGER>;
    let requestStatusCode: OPTIONAL<RequestStatusCodeType>;
    let deliveryReportRequested: OPTIONAL<BOOLEAN>;
    let replyCharging: OPTIONAL<BOOLEAN>;
    let replyDeadline: OPTIONAL<WaitTime>;
    let replyChargingSize: OPTIONAL<INTEGER>;
    let priority: OPTIONAL<PriorityType>;
    let senderVisibility: OPTIONAL<BOOLEAN>;
    let readReplyRequested: OPTIONAL<BOOLEAN>;
    let statusText!: OCTET_STRING;
    let recordTimeStamp!: OCTET_STRING;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let mMBoxstorageInformation: OPTIONAL<MMBoxStorageInformation>;
    let mscfInformation: OPTIONAL<MSCFInformation>;
    let sGSNPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<INTEGER>;
    let mSTimeZone: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "originatorMmsRSAddress": (_el: _Element): void => { originatorMmsRSAddress = $._decode_implicit<MMSRSAddress>(() => _decode_MMSRSAddress)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "replyChargingID": (_el: _Element): void => { replyChargingID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "originatorAddress": (_el: _Element): void => { originatorAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "recipientAddresses": (_el: _Element): void => { recipientAddresses = $._decode_implicit<MMSAgentAddress[]>(() => $._decodeSetOf<MMSAgentAddress>(() => _decode_MMSAgentAddress))(_el); },
        "accessCorrelation": (_el: _Element): void => { accessCorrelation = $._decode_explicit<AccessCorrelation>(() => _decode_AccessCorrelation)(_el); },
        "contentType": (_el: _Element): void => { contentType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mmComponentType": (_el: _Element): void => { mmComponentType = $._decode_implicit<MMComponentType>(() => _decode_MMComponentType)(_el); },
        "messageSize": (_el: _Element): void => { messageSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "messageClass": (_el: _Element): void => { messageClass = $._decode_implicit<MessageClass>(() => _decode_MessageClass)(_el); },
        "chargeInformation": (_el: _Element): void => { chargeInformation = $._decode_implicit<ChargeInformation>(() => _decode_ChargeInformation)(_el); },
        "submissionTime": (_el: _Element): void => { submissionTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "timeOfExpiry": (_el: _Element): void => { timeOfExpiry = $._decode_explicit<WaitTime>(() => _decode_WaitTime)(_el); },
        "earliestTimeOfDelivery": (_el: _Element): void => { earliestTimeOfDelivery = $._decode_explicit<WaitTime>(() => _decode_WaitTime)(_el); },
        "durationOfTransmission": (_el: _Element): void => { durationOfTransmission = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "requestStatusCode": (_el: _Element): void => { requestStatusCode = $._decode_implicit<RequestStatusCodeType>(() => _decode_RequestStatusCodeType)(_el); },
        "deliveryReportRequested": (_el: _Element): void => { deliveryReportRequested = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "replyCharging": (_el: _Element): void => { replyCharging = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "replyDeadline": (_el: _Element): void => { replyDeadline = $._decode_explicit<WaitTime>(() => _decode_WaitTime)(_el); },
        "replyChargingSize": (_el: _Element): void => { replyChargingSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<PriorityType>(() => _decode_PriorityType)(_el); },
        "senderVisibility": (_el: _Element): void => { senderVisibility = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "readReplyRequested": (_el: _Element): void => { readReplyRequested = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "statusText": (_el: _Element): void => { statusText = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordTimeStamp": (_el: _Element): void => { recordTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "mMBoxstorageInformation": (_el: _Element): void => { mMBoxstorageInformation = $._decode_implicit<MMBoxStorageInformation>(() => _decode_MMBoxStorageInformation)(_el); },
        "mscfInformation": (_el: _Element): void => { mscfInformation = $._decode_implicit<MSCFInformation>(() => _decode_MSCFInformation)(_el); },
        "sGSNPLMNIdentifier": (_el: _Element): void => { sGSNPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mSTimeZone": (_el: _Element): void => { mSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MMO1SRecord,
        _extension_additions_list_spec_for_MMO1SRecord,
        _root_component_type_list_2_spec_for_MMO1SRecord,
        undefined,
    );
    return new MMO1SRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        originatorMmsRSAddress,
        messageID,
        replyChargingID,
        originatorAddress,
        recipientAddresses,
        accessCorrelation,
        contentType,
        mmComponentType,
        messageSize,
        messageClass,
        chargeInformation,
        submissionTime,
        timeOfExpiry,
        earliestTimeOfDelivery,
        durationOfTransmission,
        requestStatusCode,
        deliveryReportRequested,
        replyCharging,
        replyDeadline,
        replyChargingSize,
        priority,
        senderVisibility,
        readReplyRequested,
        statusText,
        recordTimeStamp,
        localSequenceNumber,
        recordExtensions,
        mMBoxstorageInformation,
        mscfInformation,
        sGSNPLMNIdentifier,
        rATType,
        mSTimeZone
    );
}; }
    return _cached_decoder_for_MMO1SRecord(el);
}

let _cached_encoder_for_MMO1SRecord: $.ASN1Encoder<MMO1SRecord> | null = null;

/**
 * @summary Encodes a(n) MMO1SRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMO1SRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MMO1SRecord (value: MMO1SRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMO1SRecord) { _cached_encoder_for_MMO1SRecord = function (value: MMO1SRecord, _elGetter: $.ASN1Encoder<MMO1SRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSRSAddress, $.BER)(value.originatorMmsRSAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.messageID, $.BER));
    if (value.replyChargingID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.replyChargingID, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_MMSAgentAddress, $.BER)(value.originatorAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSetOf<MMSAgentAddress>(() => _encode_MMSAgentAddress, $.BER), $.BER)(value.recipientAddresses, $.BER));
    if (value.accessCorrelation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_AccessCorrelation, $.BER)(value.accessCorrelation, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.contentType, $.BER));
    if (value.mmComponentType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_MMComponentType, $.BER)(value.mmComponentType, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.messageSize, $.BER));
    if (value.messageClass !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_MessageClass, $.BER)(value.messageClass, $.BER));
    }
    if (value.chargeInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_ChargeInformation, $.BER)(value.chargeInformation, $.BER));
    }
    if (value.submissionTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.submissionTime, $.BER));
    }
    if (value.timeOfExpiry !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 13, () => _encode_WaitTime, $.BER)(value.timeOfExpiry, $.BER));
    }
    if (value.earliestTimeOfDelivery !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 14, () => _encode_WaitTime, $.BER)(value.earliestTimeOfDelivery, $.BER));
    }
    if (value.durationOfTransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.durationOfTransmission, $.BER));
    }
    if (value.requestStatusCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_RequestStatusCodeType, $.BER)(value.requestStatusCode, $.BER));
    }
    if (value.deliveryReportRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeBoolean, $.BER)(value.deliveryReportRequested, $.BER));
    }
    if (value.replyCharging !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeBoolean, $.BER)(value.replyCharging, $.BER));
    }
    if (value.replyDeadline !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 19, () => _encode_WaitTime, $.BER)(value.replyDeadline, $.BER));
    }
    if (value.replyChargingSize !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeInteger, $.BER)(value.replyChargingSize, $.BER));
    }
    if (value.priority !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_PriorityType, $.BER)(value.priority, $.BER));
    }
    if (value.senderVisibility !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeBoolean, $.BER)(value.senderVisibility, $.BER));
    }
    if (value.readReplyRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeBoolean, $.BER)(value.readReplyRequested, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER)(value.statusText, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 25, () => $._encodeOctetString, $.BER)(value.recordTimeStamp, $.BER));
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.mMBoxstorageInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => _encode_MMBoxStorageInformation, $.BER)(value.mMBoxstorageInformation, $.BER));
    }
    if (value.mscfInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_MSCFInformation, $.BER)(value.mscfInformation, $.BER));
    }
    if (value.sGSNPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => $._encodeOctetString, $.BER)(value.sGSNPLMNIdentifier, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 31, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.mSTimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => $._encodeOctetString, $.BER)(value.mSTimeZone, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MMO1SRecord(value, elGetter);
}


/* eslint-enable */
