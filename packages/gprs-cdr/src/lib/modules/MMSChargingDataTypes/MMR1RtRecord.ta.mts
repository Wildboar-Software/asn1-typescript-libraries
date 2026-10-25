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
import { type PriorityType, _decode_PriorityType, _encode_PriorityType, _enum_for_PriorityType } from "../MMSChargingDataTypes/PriorityType.ta.mjs";
import { MMStatusCodeType, _decode_MMStatusCodeType, _encode_MMStatusCodeType, _enum_for_MMStatusCodeType } from "../MMSChargingDataTypes/MMStatusCodeType.ta.mjs";
import { type WaitTime, _decode_WaitTime, _encode_WaitTime } from "../MMSChargingDataTypes/WaitTime.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary MMR1RtRecord
 * @description
 *
 * Recipient MM1 Retrieve record (R1Rt-CDR).
 *
 * If enabled, a Recipient MM1 Retrieve R1Rt-CDR shall be produced in the
 * Recipient MMS R/S if and when the Recipient MMS R/S has sent an
 * MM1_retrieve.RES to the Recipient MMS User Agent. That is, the CDR is
 * created upon completion of transmission of the MM1_retrieve.RES.
 *
 * Table 5.2.3.1.1 associates trigger C4 with this record in the combined
 * case. Table 5.2.3.2.2 associates trigger R4 with it at a separate
 * Recipient MMS R/S.
 *
 * Produced in the Recipient MMS R/S. An MM4 record is produced only when
 * that R/S is not also the Originator MMS R/S. An MM1 record is produced
 * either way. Unless otherwise stated, parameters are copied from the
 * corresponding MM1 or MM4 message (clause 6.1.2.0).
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
 * TS 32.270 does not describe `timeOfExpiry` on this record.
 *
 * The table's Original MM Content group is carried here as `contentType`,
 * `messageSize`, and `mmComponentType`. The table also specifies an
 * Adapted MM Content group (content type, message size, and component
 * list) when the MM is adapted before retrieval. That group is not a
 * separate set of components on this type.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMR1RtRecord ::= SET {
 *    recordType                [0] IMPLICIT RecordType,
 *    recipientMmsRSAddress     [1] IMPLICIT MMSRSAddress,
 *    messageID                 [2] IMPLICIT OCTET STRING,
 *    replyChargingID           [3] IMPLICIT OCTET STRING OPTIONAL,
 *    senderAddress             [4] IMPLICIT MMSAgentAddress OPTIONAL,
 *    recipientAddress          [5] IMPLICIT MMSAgentAddress,
 *    accessCorrelation         [6] AccessCorrelation OPTIONAL,
 *    contentType               [7] IMPLICIT OCTET STRING,
 *    mmComponentType           [8] IMPLICIT MMComponentType OPTIONAL,
 *    messageClass              [9] IMPLICIT MessageClass OPTIONAL,
 *    submissionTime            [10] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    messageSize               [11] IMPLICIT INTEGER OPTIONAL,
 *    deliveryReportRequested   [12] IMPLICIT BOOLEAN OPTIONAL,
 *    priority                  [13] IMPLICIT PriorityType OPTIONAL,
 *    readReplyRequested        [14] IMPLICIT BOOLEAN OPTIONAL,
 *    mmStatusCode              [15] IMPLICIT MMStatusCodeType OPTIONAL,
 *    statusText                [16] IMPLICIT OCTET STRING OPTIONAL,
 *    replyDeadline             [17] WaitTime OPTIONAL,
 *    replyChargingSize         [18] IMPLICIT INTEGER OPTIONAL,
 *    durationOfTransmission    [19] IMPLICIT INTEGER OPTIONAL,
 *    timeOfExpiry              [20] WaitTime OPTIONAL,
 *    recordTimeStamp           [21] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    localSequenceNumber       [22] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions          [23] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    messageReference          [24] IMPLICIT OCTET STRING,
 *    vaspID                    [25] IMPLICIT OCTET STRING OPTIONAL,
 *    vasID                     [26] IMPLICIT OCTET STRING OPTIONAL,
 *    sGSNPLMNIdentifier        [27] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    rATType                   [28] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    mSTimeZone                [29] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MMR1RtRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * The field identifies the type of the record, see TS 32.250 [10].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.42.
     *
     * Category M. Recipient MM1 Retrieve record.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `recipientMmsRSAddress`.
     * @description
     *
     * Category M. IP address or domain name of the Recipient MMS R/S.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly recipientMmsRSAddress: MMSRSAddress;
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly replyChargingID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `senderAddress`.
     * @description
     *
     * The address of the MMS User Agent as used in the
     * MM1_notification_REQ/MM1_retrieve. RES. This parameter is present in the
     * CDR even if address hiding was requested, resulting in the sender address
     * is not being included in the above messages.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.51.
     *
     * Category C. The address of the MMS User Agent as used in the
     * MM1_retrieve.RES, or the address of VASP as used in the MM7_submit.REQ.
     * This parameter is present in the CDR regardless of address hiding.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly senderAddress: OPTIONAL<MMSAgentAddress>;
    /**
     * @summary `recipientAddress`.
     * @description
     *
     * This field contains a recipient MMS User Agent address. The MMS supports
     * the use of E-Mail addresses (RFC 822 [400]), MSISDN (E.164 [308]) or
     * Service provider specific addresses (short code).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.37.
     *
     * Category M. The address of the Recipient MM User Agent of the MM.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly recipientAddress: MMSAgentAddress;
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
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
     * Category M. The content type of the MM content. Part of Original MM
     * Content.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly contentType: OCTET_STRING;
    /**
     * @summary `mmComponentType`.
     * @description
     *
     * Category OM. The list of media components with volume size. Part of
     * Original MM Content.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly mmComponentType: OPTIONAL<MMComponentType>;
    /**
     * @summary `messageClass`.
     * @description
     *
     * A class of messages such as personal, advertisement, information service
     * etc. For more information see TS 23.140 [206].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.18.
     *
     * Category OC. The class of the message (e.g., personal, advertisement,
     * information service) if specified in the MM1_retrieve.RES.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly messageClass: OPTIONAL<MessageClass>;
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
     * Category M. The time at which the MM was submitted or forwarded as
     * specified in the MM1_retrieve.RES.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly submissionTime: OCTET_STRING;
    /**
     * @summary `messageSize`.
     * @description
     *
     * This field contains the number of octets of the MM that is calculated as
     * specified in TS 23.140 [206].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.23.
     *
     * Category OM. The total size of the original MM content. Part of Original
     * MM Content.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly messageSize: OPTIONAL<INTEGER>;
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
     * Category OM. A request for delivery report as specified in the Delivery
     * Report information element in the MM1_retrieve.RES.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly deliveryReportRequested: OPTIONAL<BOOLEAN>;
    /**
     * @summary `priority`.
     * @description
     *
     * The priority (importance) of the message, see TS 23.140 [206].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.32.
     *
     * Category OC. The priority (importance) of the message if specified in
     * the MM1_retrieve.RES.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly priority: OPTIONAL<PriorityType>;
    /**
     * @summary `readReplyRequested`.
     * @description
     *
     * A Boolean value indicating whether the originator MMS User Agent has
     * requested a read-reply report (value TRUE) or not (value FALSE).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.35.
     *
     * Category OC. A request for read-reply report if specified in the Read
     * Reply information element in the MM1_retrieve.RES.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly readReplyRequested: OPTIONAL<BOOLEAN>;
    /**
     * @summary `mmStatusCode`.
     * @description
     *
     * This field contains an appropriate status value of the delivered MM (e.g.
     * retrieved, rejected, etc.).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.28.
     *
     * Category OM. The status code of the MM at the time when the CDR is
     * generated.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly mmStatusCode: OPTIONAL<MMStatusCodeType>;
    /**
     * @summary `statusText`.
     * @description
     *
     * This field includes a more detailed technical status of the message at the
     * point in time when the CDR is generated.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.55.
     *
     * Category OM. This field includes a more detailed technical status of the
     * message at the point in time when the CDR is generated.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly statusText: OPTIONAL<OCTET_STRING>;
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
     * a reply granted to the recipient as specified in the MM1_retrieve.RES.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
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
     * Category OC. In case of reply-charging the maximum size of a reply-MM
     * granted to the recipient as specified in the MM1_retrieve.RES.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly replyChargingSize: OPTIONAL<INTEGER>;
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly durationOfTransmission: OPTIONAL<INTEGER>;
    /**
     * @summary `timeOfExpiry`.
     * @description
     *
     * This field contains the desired date or the number of seconds to expiry of
     * the MM, if specified by the originator MMS User Agent.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.57.
     *
     * @public
     * @readonly
     */
    readonly timeOfExpiry: OPTIONAL<WaitTime>;
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly recordTimeStamp: OPTIONAL<OCTET_STRING>;
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `messageReference`.
     * @description
     *
     * A reference as specified in TS 23.140 [206], e.g. URI, for the MM that can
     * be used for retrieving the MM from the recipient MMS Relay/Server.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.21.
     *
     * Category M. Location of the content of the MM to be retrieved as
     * specified in the MM1_retrieve.REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly messageReference: OCTET_STRING;
    /**
     * @summary `vaspID`.
     * @description
     *
     * This field specifies the identification of the originating application as
     * defined in TS 23.140 [206].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.62.
     *
     * Category OC. This field indicates the VASP that originated the MM. Only
     * present in MM1 Retrieval and if the MM was received over an MM7
     * interface.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly vaspID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `vasID`.
     * @description
     *
     * This field specifies the identification of the VASP as defined in TS
     * 23.140 [206].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.61.
     *
     * Category OC. This field indicates the VAS that originated the MM. Only
     * present in MM1 Retrieval and if the MM was received over an MM7
     * interface.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly vasID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sGSNPLMNIdentifier`.
     * @description
     *
     * Category OC. If present this parameter holds the SGSN PLMN Identifier
     * (MCC and MNC) used during this record.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.4.
     *
     * @public
     * @readonly
     */
    readonly mSTimeZone: OPTIONAL<OCTET_STRING>;

    constructor (
        recordType: RecordType,
        recipientMmsRSAddress: MMSRSAddress,
        messageID: OCTET_STRING,
        replyChargingID: OPTIONAL<OCTET_STRING>,
        senderAddress: OPTIONAL<MMSAgentAddress>,
        recipientAddress: MMSAgentAddress,
        accessCorrelation: OPTIONAL<AccessCorrelation>,
        contentType: OCTET_STRING,
        mmComponentType: OPTIONAL<MMComponentType>,
        messageClass: OPTIONAL<MessageClass>,
        submissionTime: OCTET_STRING,
        messageSize: OPTIONAL<INTEGER>,
        deliveryReportRequested: OPTIONAL<BOOLEAN>,
        priority: OPTIONAL<PriorityType>,
        readReplyRequested: OPTIONAL<BOOLEAN>,
        mmStatusCode: OPTIONAL<MMStatusCodeType>,
        statusText: OPTIONAL<OCTET_STRING>,
        replyDeadline: OPTIONAL<WaitTime>,
        replyChargingSize: OPTIONAL<INTEGER>,
        durationOfTransmission: OPTIONAL<INTEGER>,
        timeOfExpiry: OPTIONAL<WaitTime>,
        recordTimeStamp: OPTIONAL<OCTET_STRING>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        messageReference: OCTET_STRING,
        vaspID?: OPTIONAL<OCTET_STRING>,
        vasID?: OPTIONAL<OCTET_STRING>,
        sGSNPLMNIdentifier?: OPTIONAL<OCTET_STRING>,
        rATType?: OPTIONAL<INTEGER>,
        mSTimeZone?: OPTIONAL<OCTET_STRING>
    ) {
        this.recordType = recordType;
        this.recipientMmsRSAddress = recipientMmsRSAddress;
        this.messageID = messageID;
        this.replyChargingID = replyChargingID;
        this.senderAddress = senderAddress;
        this.recipientAddress = recipientAddress;
        this.accessCorrelation = accessCorrelation;
        this.contentType = contentType;
        this.mmComponentType = mmComponentType;
        this.messageClass = messageClass;
        this.submissionTime = submissionTime;
        this.messageSize = messageSize;
        this.deliveryReportRequested = deliveryReportRequested;
        this.priority = priority;
        this.readReplyRequested = readReplyRequested;
        this.mmStatusCode = mmStatusCode;
        this.statusText = statusText;
        this.replyDeadline = replyDeadline;
        this.replyChargingSize = replyChargingSize;
        this.durationOfTransmission = durationOfTransmission;
        this.timeOfExpiry = timeOfExpiry;
        this.recordTimeStamp = recordTimeStamp;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
        this.messageReference = messageReference;
        this.vaspID = vaspID;
        this.vasID = vasID;
        this.sGSNPLMNIdentifier = sGSNPLMNIdentifier;
        this.rATType = rATType;
        this.mSTimeZone = mSTimeZone;
    
        if ((this.submissionTime.length !== 9)) {
            throw new ASN1SizeError("MMR1RtRecord.submissionTime violates SIZE constraint");
        }
        if (this.recordTimeStamp !== undefined && (this.recordTimeStamp.length !== 9)) {
            throw new ASN1SizeError("MMR1RtRecord.recordTimeStamp violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("MMR1RtRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.sGSNPLMNIdentifier !== undefined && (this.sGSNPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("MMR1RtRecord.sGSNPLMNIdentifier violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("MMR1RtRecord.rATType violates INTEGER range");
        }
        if (this.mSTimeZone !== undefined && (this.mSTimeZone.length !== 2)) {
            throw new ASN1SizeError("MMR1RtRecord.mSTimeZone violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MMR1RtRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MMR1RtRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMR1RtRecord`.
     * @returns {MMR1RtRecord}
     */
    public static _from_object (_o: { [_K in keyof (MMR1RtRecord)]: (MMR1RtRecord)[_K] }): MMR1RtRecord {
        return new MMR1RtRecord(_o.recordType, _o.recipientMmsRSAddress, _o.messageID, _o.replyChargingID, _o.senderAddress, _o.recipientAddress, _o.accessCorrelation, _o.contentType, _o.mmComponentType, _o.messageClass, _o.submissionTime, _o.messageSize, _o.deliveryReportRequested, _o.priority, _o.readReplyRequested, _o.mmStatusCode, _o.statusText, _o.replyDeadline, _o.replyChargingSize, _o.durationOfTransmission, _o.timeOfExpiry, _o.recordTimeStamp, _o.localSequenceNumber, _o.recordExtensions, _o.messageReference, _o.vaspID, _o.vasID, _o.sGSNPLMNIdentifier, _o.rATType, _o.mSTimeZone);
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

    public static _enum_for_priority = _enum_for_PriorityType;        /**
         * @summary The enum used as the type of the component `mmStatusCode`
         * @public
         * @static
         */

    public static _enum_for_mmStatusCode = _enum_for_MMStatusCodeType;
}

/**
 * @summary The Leading Root Component Types of MMR1RtRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMR1RtRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recipientMmsRSAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("replyChargingID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("senderAddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("recipientAddress", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("accessCorrelation", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("contentType", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("mmComponentType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("messageClass", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("submissionTime", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("messageSize", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("deliveryReportRequested", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("readReplyRequested", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("mmStatusCode", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("statusText", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("replyDeadline", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("replyChargingSize", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("durationOfTransmission", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("timeOfExpiry", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("recordTimeStamp", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("messageReference", false, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("vaspID", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("vasID", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("sGSNPLMNIdentifier", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("mSTimeZone", true, $.hasTag(_TagClass.context, 29))
];

/**
 * @summary The Trailing Root Component Types of MMR1RtRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMR1RtRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMR1RtRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMR1RtRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMR1RtRecord: $.ASN1Decoder<MMR1RtRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMR1RtRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMR1RtRecord (el: _Element): MMR1RtRecord {
    if (!_cached_decoder_for_MMR1RtRecord) { _cached_decoder_for_MMR1RtRecord = function (el: _Element): MMR1RtRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let recipientMmsRSAddress!: MMSRSAddress;
    let messageID!: OCTET_STRING;
    let replyChargingID: OPTIONAL<OCTET_STRING>;
    let senderAddress: OPTIONAL<MMSAgentAddress>;
    let recipientAddress!: MMSAgentAddress;
    let accessCorrelation: OPTIONAL<AccessCorrelation>;
    let contentType!: OCTET_STRING;
    let mmComponentType: OPTIONAL<MMComponentType>;
    let messageClass: OPTIONAL<MessageClass>;
    let submissionTime!: OCTET_STRING;
    let messageSize: OPTIONAL<INTEGER>;
    let deliveryReportRequested: OPTIONAL<BOOLEAN>;
    let priority: OPTIONAL<PriorityType>;
    let readReplyRequested: OPTIONAL<BOOLEAN>;
    let mmStatusCode: OPTIONAL<MMStatusCodeType>;
    let statusText: OPTIONAL<OCTET_STRING>;
    let replyDeadline: OPTIONAL<WaitTime>;
    let replyChargingSize: OPTIONAL<INTEGER>;
    let durationOfTransmission: OPTIONAL<INTEGER>;
    let timeOfExpiry: OPTIONAL<WaitTime>;
    let recordTimeStamp: OPTIONAL<OCTET_STRING>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let messageReference!: OCTET_STRING;
    let vaspID: OPTIONAL<OCTET_STRING>;
    let vasID: OPTIONAL<OCTET_STRING>;
    let sGSNPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<INTEGER>;
    let mSTimeZone: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "recipientMmsRSAddress": (_el: _Element): void => { recipientMmsRSAddress = $._decode_implicit<MMSRSAddress>(() => _decode_MMSRSAddress)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "replyChargingID": (_el: _Element): void => { replyChargingID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "senderAddress": (_el: _Element): void => { senderAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "recipientAddress": (_el: _Element): void => { recipientAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "accessCorrelation": (_el: _Element): void => { accessCorrelation = $._decode_explicit<AccessCorrelation>(() => _decode_AccessCorrelation)(_el); },
        "contentType": (_el: _Element): void => { contentType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mmComponentType": (_el: _Element): void => { mmComponentType = $._decode_implicit<MMComponentType>(() => _decode_MMComponentType)(_el); },
        "messageClass": (_el: _Element): void => { messageClass = $._decode_implicit<MessageClass>(() => _decode_MessageClass)(_el); },
        "submissionTime": (_el: _Element): void => { submissionTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "messageSize": (_el: _Element): void => { messageSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "deliveryReportRequested": (_el: _Element): void => { deliveryReportRequested = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<PriorityType>(() => _decode_PriorityType)(_el); },
        "readReplyRequested": (_el: _Element): void => { readReplyRequested = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "mmStatusCode": (_el: _Element): void => { mmStatusCode = $._decode_implicit<MMStatusCodeType>(() => _decode_MMStatusCodeType)(_el); },
        "statusText": (_el: _Element): void => { statusText = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "replyDeadline": (_el: _Element): void => { replyDeadline = $._decode_explicit<WaitTime>(() => _decode_WaitTime)(_el); },
        "replyChargingSize": (_el: _Element): void => { replyChargingSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "durationOfTransmission": (_el: _Element): void => { durationOfTransmission = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "timeOfExpiry": (_el: _Element): void => { timeOfExpiry = $._decode_explicit<WaitTime>(() => _decode_WaitTime)(_el); },
        "recordTimeStamp": (_el: _Element): void => { recordTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "messageReference": (_el: _Element): void => { messageReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "vaspID": (_el: _Element): void => { vaspID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "vasID": (_el: _Element): void => { vasID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sGSNPLMNIdentifier": (_el: _Element): void => { sGSNPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mSTimeZone": (_el: _Element): void => { mSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MMR1RtRecord,
        _extension_additions_list_spec_for_MMR1RtRecord,
        _root_component_type_list_2_spec_for_MMR1RtRecord,
        undefined,
    );
    return new MMR1RtRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        recipientMmsRSAddress,
        messageID,
        replyChargingID,
        senderAddress,
        recipientAddress,
        accessCorrelation,
        contentType,
        mmComponentType,
        messageClass,
        submissionTime,
        messageSize,
        deliveryReportRequested,
        priority,
        readReplyRequested,
        mmStatusCode,
        statusText,
        replyDeadline,
        replyChargingSize,
        durationOfTransmission,
        timeOfExpiry,
        recordTimeStamp,
        localSequenceNumber,
        recordExtensions,
        messageReference,
        vaspID,
        vasID,
        sGSNPLMNIdentifier,
        rATType,
        mSTimeZone
    );
}; }
    return _cached_decoder_for_MMR1RtRecord(el);
}

let _cached_encoder_for_MMR1RtRecord: $.ASN1Encoder<MMR1RtRecord> | null = null;

/**
 * @summary Encodes a(n) MMR1RtRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMR1RtRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MMR1RtRecord (value: MMR1RtRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMR1RtRecord) { _cached_encoder_for_MMR1RtRecord = function (value: MMR1RtRecord, _elGetter: $.ASN1Encoder<MMR1RtRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSRSAddress, $.BER)(value.recipientMmsRSAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.messageID, $.BER));
    if (value.replyChargingID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.replyChargingID, $.BER));
    }
    if (value.senderAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_MMSAgentAddress, $.BER)(value.senderAddress, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_MMSAgentAddress, $.BER)(value.recipientAddress, $.BER));
    if (value.accessCorrelation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_AccessCorrelation, $.BER)(value.accessCorrelation, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.contentType, $.BER));
    if (value.mmComponentType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_MMComponentType, $.BER)(value.mmComponentType, $.BER));
    }
    if (value.messageClass !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_MessageClass, $.BER)(value.messageClass, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.submissionTime, $.BER));
    if (value.messageSize !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.messageSize, $.BER));
    }
    if (value.deliveryReportRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeBoolean, $.BER)(value.deliveryReportRequested, $.BER));
    }
    if (value.priority !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_PriorityType, $.BER)(value.priority, $.BER));
    }
    if (value.readReplyRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeBoolean, $.BER)(value.readReplyRequested, $.BER));
    }
    if (value.mmStatusCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_MMStatusCodeType, $.BER)(value.mmStatusCode, $.BER));
    }
    if (value.statusText !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.statusText, $.BER));
    }
    if (value.replyDeadline !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 17, () => _encode_WaitTime, $.BER)(value.replyDeadline, $.BER));
    }
    if (value.replyChargingSize !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeInteger, $.BER)(value.replyChargingSize, $.BER));
    }
    if (value.durationOfTransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeInteger, $.BER)(value.durationOfTransmission, $.BER));
    }
    if (value.timeOfExpiry !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 20, () => _encode_WaitTime, $.BER)(value.timeOfExpiry, $.BER));
    }
    if (value.recordTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeOctetString, $.BER)(value.recordTimeStamp, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER)(value.messageReference, $.BER));
    if (value.vaspID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeOctetString, $.BER)(value.vaspID, $.BER));
    }
    if (value.vasID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeOctetString, $.BER)(value.vasID, $.BER));
    }
    if (value.sGSNPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeOctetString, $.BER)(value.sGSNPLMNIdentifier, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.mSTimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.mSTimeZone, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MMR1RtRecord(value, elGetter);
}


/* eslint-enable */
