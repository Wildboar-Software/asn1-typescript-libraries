/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../MMSChargingDataTypes/RecordType.ta.mjs";
import { MMSRSAddress, _decode_MMSRSAddress, _encode_MMSRSAddress } from "../MMSChargingDataTypes/MMSRSAddress.ta.mjs";
import { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";
import { MMComponentType, _decode_MMComponentType, _encode_MMComponentType } from "../MMSChargingDataTypes/MMComponentType.ta.mjs";
import { MessageClass, _decode_MessageClass, _encode_MessageClass, _enum_for_MessageClass } from "../MMSChargingDataTypes/MessageClass.ta.mjs";
import { ChargeInformation, _decode_ChargeInformation, _encode_ChargeInformation } from "../MMSChargingDataTypes/ChargeInformation.ta.mjs";
import { WaitTime, _decode_WaitTime, _encode_WaitTime } from "../MMSChargingDataTypes/WaitTime.ta.mjs";
import { PriorityType, _decode_PriorityType, _encode_PriorityType, _enum_for_PriorityType } from "../MMSChargingDataTypes/PriorityType.ta.mjs";
import { RequestStatusCodeType, _decode_RequestStatusCodeType, _encode_RequestStatusCodeType } from "../MMSChargingDataTypes/RequestStatusCodeType.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";
import { MSCFInformation, _decode_MSCFInformation, _encode_MSCFInformation } from "../MMSChargingDataTypes/MSCFInformation.ta.mjs";


/**
 * @summary MM7SRecord
 * @description
 *
 * MM7 Submission record (MM7S-CDR).
 *
 * If enabled, an MM7 Submission MM7S-CDR shall be produced in the MMS R/S
 * for each MM submitted in an MM7_submit.REQ by a VASP to the MMS R/S if
 * and when the MMS R/S responds with an MM7_submit.RES. The operator can
 * configure whether this CDR, if enabled, shall only be created for
 * MM7_submit.RES indicating acceptance of the submitted MM, or also for
 * the unsuccessful submissions.
 *
 * Produced for a VASP transaction on MM7. Unless otherwise stated,
 * parameters are copied from the corresponding MM7 message (clause
 * 6.1.5.0). The VASP may supply service codes that are passed through to
 * billing, and may indicate which party is expected to be charged (clause
 * 5.1.4).
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
 * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MM7SRecord ::= SET {
 *    recordType                     [0] IMPLICIT RecordType,
 *    originatorMmsRSAddress         [1] IMPLICIT MMSRSAddress,
 *    linkedID                       [2] IMPLICIT OCTET STRING OPTIONAL,
 *    vaspID                         [3] IMPLICIT OCTET STRING,
 *    vasID                          [4] IMPLICIT OCTET STRING,
 *    messageID                      [5] IMPLICIT OCTET STRING,
 *    originatorAddress              [6] IMPLICIT MMSAgentAddress,
 *    recipientAddresses             [7] IMPLICIT SET  OF
 *       MMSAgentAddress,
 *    serviceCode                    [8] IMPLICIT OCTET STRING OPTIONAL,
 *    contentType                    [9] IMPLICIT OCTET STRING,
 *    mmComponentType                [10] IMPLICIT MMComponentType OPTIONAL,
 *    messageSize                    [11] IMPLICIT INTEGER,
 *    messageClass                   [12] IMPLICIT MessageClass OPTIONAL,
 *    chargeInformation              [13] IMPLICIT ChargeInformation OPTIONAL,
 *    submissionTime                 [14] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    timeOfExpiry                   [15] WaitTime OPTIONAL,
 *    earliestTimeOfDelivery         [16] WaitTime OPTIONAL,
 *    deliveryReportRequested        [17] IMPLICIT BOOLEAN OPTIONAL,
 *    readReplyRequested             [18] IMPLICIT BOOLEAN OPTIONAL,
 *    replyCharging                  [19] IMPLICIT BOOLEAN OPTIONAL,
 *    replyDeadline                  [20] WaitTime OPTIONAL,
 *    replyChargingSize              [21] IMPLICIT INTEGER OPTIONAL,
 *    priority                       [22] IMPLICIT PriorityType OPTIONAL,
 *    messageDistributionIndicator   [23] IMPLICIT BOOLEAN OPTIONAL,
 *    requestStatusCode              [24] IMPLICIT RequestStatusCodeType OPTIONAL,
 *    statusText                     [25] IMPLICIT OCTET STRING OPTIONAL,
 *    recordTimeStamp                [26] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    localSequenceNumber            [27] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions               [28] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    mscfInformation                [29] IMPLICIT MSCFInformation OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MM7SRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * The field identifies the type of the record, see TS 32.250 [10].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.42.
     *
     * Category M. MM7 Submission record.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
     *
     * @public
     * @readonly
     */
    readonly originatorMmsRSAddress: MMSRSAddress;
    /**
     * @summary `linkedID`.
     * @description
     *
     * This field identifies a correspondence to a previous valid message
     * delivered to the VASP.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.15.
     *
     * Category C. This field is present in the CDR only if the MM defines a
     * correspondence to a previous message that was delivered by the MMS R/S.
     * The MM identification provided by the Originator MMS R/S.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
     *
     * @public
     * @readonly
     */
    readonly linkedID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `vaspID`.
     * @description
     *
     * This field specifies the identification of the originating application as
     * defined in TS 23.140 [206].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.62.
     *
     * Category M. Identifier of the VASP for this MMS R/S.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
     *
     * @public
     * @readonly
     */
    readonly vaspID: OCTET_STRING;
    /**
     * @summary `vasID`.
     * @description
     *
     * This field specifies the identification of the VASP as defined in TS
     * 23.140 [206].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.61.
     *
     * Category M. Identifier of the originating application.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
     *
     * @public
     * @readonly
     */
    readonly vasID: OCTET_STRING;
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
     *
     * @public
     * @readonly
     */
    readonly messageID: OCTET_STRING;
    /**
     * @summary `originatorAddress`.
     * @description
     *
     * This field contains an originator MMS User Agent address. The MMS supports
     * the use of E-Mail addresses (RFC 822 [400]) or MSISDN (E.164 [308]).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.30.
     *
     * Category M. The address of the MM Originator.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
     *
     * @public
     * @readonly
     */
    readonly recipientAddresses: MMSAgentAddress[];
    /**
     * @summary `serviceCode`.
     * @description
     *
     * This field contains charging information provided by the VASP to the MMS
     * R/S for use by the billing system to properly bill the user for the
     * service being supplied. The usage of the "service code" is, in the
     * release, open to any usage envisioned by the operators, service providers
     * or MMS Relay/Server vendors. In this release only the format, but not the
     * content of the "service code" field is defined.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.53.
     *
     * Category OC. Charging related information that is used directly for
     * billing purposes.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
     *
     * @public
     * @readonly
     */
    readonly serviceCode: OPTIONAL<OCTET_STRING>;
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
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
     * information service if specified in the MM7_submit_REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
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
     * Category OM. The charged party indication and charge type e.g. the
     * sending, receiving, both parties, third party or neither.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
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
     * Category OC. The time at which the MM was submitted from the VASP if
     * specified in the MM7_submit_REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
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
     * expiry for the MM if specified by the VASP.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
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
     * MM or the number of seconds to wait before delivering the MM if
     * specified by the VASP.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
     *
     * @public
     * @readonly
     */
    readonly earliestTimeOfDelivery: OPTIONAL<WaitTime>;
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
     * requested by the VASP or not.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
     *
     * @public
     * @readonly
     */
    readonly deliveryReportRequested: OPTIONAL<BOOLEAN>;
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
     * MM7_submit.REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
     *
     * @public
     * @readonly
     */
    readonly readReplyRequested: OPTIONAL<BOOLEAN>;
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
     * Category OC. A request for reply-charging if specified by the VASP.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
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
     * replies granted to the recipient(s) as specified by the VASP.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
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
     * granted to the recipient(s) as specified by the VASP.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
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
     * the VASP.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
     *
     * @public
     * @readonly
     */
    readonly priority: OPTIONAL<PriorityType>;
    /**
     * @summary `messageDistributionIndicator`.
     * @description
     *
     * This is an indication of type Boolean whether (value TRUE) or not (value
     * FALSE) the VASP has indicated the content of the MM is intended for
     * redistribution.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.19.
     *
     * Category OC. This field is present if specified in the MM7_submit.REQ /
     * If set to "false" the VASP has indicated that content of the MM is not
     * intended for redistribution. / If set to "true" the VASP has indicated
     * that content of the MM can be redistributed.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
     *
     * @public
     * @readonly
     */
    readonly messageDistributionIndicator: OPTIONAL<BOOLEAN>;
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
     * Category OM. The status code of the associated MM7_submit_REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
     *
     * @public
     * @readonly
     */
    readonly requestStatusCode: OPTIONAL<RequestStatusCodeType>;
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
     *
     * @public
     * @readonly
     */
    readonly statusText: OPTIONAL<OCTET_STRING>;
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
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
     * with the MMS R/S via the MM10 interface prior to the MM7_submit.RES.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.1.
     *
     * @public
     * @readonly
     */
    readonly mscfInformation: OPTIONAL<MSCFInformation>;

    constructor (
        recordType: RecordType,
        originatorMmsRSAddress: MMSRSAddress,
        linkedID: OPTIONAL<OCTET_STRING>,
        vaspID: OCTET_STRING,
        vasID: OCTET_STRING,
        messageID: OCTET_STRING,
        originatorAddress: MMSAgentAddress,
        recipientAddresses: MMSAgentAddress[],
        serviceCode: OPTIONAL<OCTET_STRING>,
        contentType: OCTET_STRING,
        mmComponentType: OPTIONAL<MMComponentType>,
        messageSize: INTEGER,
        messageClass: OPTIONAL<MessageClass>,
        chargeInformation: OPTIONAL<ChargeInformation>,
        submissionTime: OPTIONAL<OCTET_STRING>,
        timeOfExpiry: OPTIONAL<WaitTime>,
        earliestTimeOfDelivery: OPTIONAL<WaitTime>,
        deliveryReportRequested: OPTIONAL<BOOLEAN>,
        readReplyRequested: OPTIONAL<BOOLEAN>,
        replyCharging: OPTIONAL<BOOLEAN>,
        replyDeadline: OPTIONAL<WaitTime>,
        replyChargingSize: OPTIONAL<INTEGER>,
        priority: OPTIONAL<PriorityType>,
        messageDistributionIndicator: OPTIONAL<BOOLEAN>,
        requestStatusCode: OPTIONAL<RequestStatusCodeType>,
        statusText: OPTIONAL<OCTET_STRING>,
        recordTimeStamp: OCTET_STRING,
        localSequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        mscfInformation: OPTIONAL<MSCFInformation>
    ) {
        this.recordType = recordType;
        this.originatorMmsRSAddress = originatorMmsRSAddress;
        this.linkedID = linkedID;
        this.vaspID = vaspID;
        this.vasID = vasID;
        this.messageID = messageID;
        this.originatorAddress = originatorAddress;
        this.recipientAddresses = recipientAddresses;
        this.serviceCode = serviceCode;
        this.contentType = contentType;
        this.mmComponentType = mmComponentType;
        this.messageSize = messageSize;
        this.messageClass = messageClass;
        this.chargeInformation = chargeInformation;
        this.submissionTime = submissionTime;
        this.timeOfExpiry = timeOfExpiry;
        this.earliestTimeOfDelivery = earliestTimeOfDelivery;
        this.deliveryReportRequested = deliveryReportRequested;
        this.readReplyRequested = readReplyRequested;
        this.replyCharging = replyCharging;
        this.replyDeadline = replyDeadline;
        this.replyChargingSize = replyChargingSize;
        this.priority = priority;
        this.messageDistributionIndicator = messageDistributionIndicator;
        this.requestStatusCode = requestStatusCode;
        this.statusText = statusText;
        this.recordTimeStamp = recordTimeStamp;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
        this.mscfInformation = mscfInformation;
    
        if (this.submissionTime !== undefined && (this.submissionTime.length !== 9)) {
            throw new ASN1SizeError("MM7SRecord.submissionTime violates SIZE constraint");
        }
        if ((this.recordTimeStamp.length !== 9)) {
            throw new ASN1SizeError("MM7SRecord.recordTimeStamp violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("MM7SRecord.localSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a MM7SRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MM7SRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MM7SRecord`.
     * @returns {MM7SRecord}
     */
    public static _from_object (_o: { [_K in keyof (MM7SRecord)]: (MM7SRecord)[_K] }): MM7SRecord {
        return new MM7SRecord(_o.recordType, _o.originatorMmsRSAddress, _o.linkedID, _o.vaspID, _o.vasID, _o.messageID, _o.originatorAddress, _o.recipientAddresses, _o.serviceCode, _o.contentType, _o.mmComponentType, _o.messageSize, _o.messageClass, _o.chargeInformation, _o.submissionTime, _o.timeOfExpiry, _o.earliestTimeOfDelivery, _o.deliveryReportRequested, _o.readReplyRequested, _o.replyCharging, _o.replyDeadline, _o.replyChargingSize, _o.priority, _o.messageDistributionIndicator, _o.requestStatusCode, _o.statusText, _o.recordTimeStamp, _o.localSequenceNumber, _o.recordExtensions, _o.mscfInformation);
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
 * @summary The Leading Root Component Types of MM7SRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MM7SRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("originatorMmsRSAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("linkedID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("vaspID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("vasID", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("originatorAddress", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("recipientAddresses", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("serviceCode", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("contentType", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("mmComponentType", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("messageSize", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("messageClass", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("chargeInformation", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("submissionTime", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("timeOfExpiry", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("earliestTimeOfDelivery", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("deliveryReportRequested", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("readReplyRequested", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("replyCharging", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("replyDeadline", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("replyChargingSize", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("messageDistributionIndicator", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("requestStatusCode", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("statusText", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("recordTimeStamp", false, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("mscfInformation", true, $.hasTag(_TagClass.context, 29))
];

/**
 * @summary The Trailing Root Component Types of MM7SRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MM7SRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MM7SRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MM7SRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MM7SRecord: $.ASN1Decoder<MM7SRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MM7SRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MM7SRecord (el: _Element): MM7SRecord {
    if (!_cached_decoder_for_MM7SRecord) { _cached_decoder_for_MM7SRecord = function (el: _Element): MM7SRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let originatorMmsRSAddress!: MMSRSAddress;
    let linkedID: OPTIONAL<OCTET_STRING>;
    let vaspID!: OCTET_STRING;
    let vasID!: OCTET_STRING;
    let messageID!: OCTET_STRING;
    let originatorAddress!: MMSAgentAddress;
    let recipientAddresses!: MMSAgentAddress[];
    let serviceCode: OPTIONAL<OCTET_STRING>;
    let contentType!: OCTET_STRING;
    let mmComponentType: OPTIONAL<MMComponentType>;
    let messageSize!: INTEGER;
    let messageClass: OPTIONAL<MessageClass>;
    let chargeInformation: OPTIONAL<ChargeInformation>;
    let submissionTime: OPTIONAL<OCTET_STRING>;
    let timeOfExpiry: OPTIONAL<WaitTime>;
    let earliestTimeOfDelivery: OPTIONAL<WaitTime>;
    let deliveryReportRequested: OPTIONAL<BOOLEAN>;
    let readReplyRequested: OPTIONAL<BOOLEAN>;
    let replyCharging: OPTIONAL<BOOLEAN>;
    let replyDeadline: OPTIONAL<WaitTime>;
    let replyChargingSize: OPTIONAL<INTEGER>;
    let priority: OPTIONAL<PriorityType>;
    let messageDistributionIndicator: OPTIONAL<BOOLEAN>;
    let requestStatusCode: OPTIONAL<RequestStatusCodeType>;
    let statusText: OPTIONAL<OCTET_STRING>;
    let recordTimeStamp!: OCTET_STRING;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let mscfInformation: OPTIONAL<MSCFInformation>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "originatorMmsRSAddress": (_el: _Element): void => { originatorMmsRSAddress = $._decode_implicit<MMSRSAddress>(() => _decode_MMSRSAddress)(_el); },
        "linkedID": (_el: _Element): void => { linkedID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "vaspID": (_el: _Element): void => { vaspID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "vasID": (_el: _Element): void => { vasID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "originatorAddress": (_el: _Element): void => { originatorAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "recipientAddresses": (_el: _Element): void => { recipientAddresses = $._decode_implicit<MMSAgentAddress[]>(() => $._decodeSetOf<MMSAgentAddress>(() => _decode_MMSAgentAddress))(_el); },
        "serviceCode": (_el: _Element): void => { serviceCode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "contentType": (_el: _Element): void => { contentType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mmComponentType": (_el: _Element): void => { mmComponentType = $._decode_implicit<MMComponentType>(() => _decode_MMComponentType)(_el); },
        "messageSize": (_el: _Element): void => { messageSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "messageClass": (_el: _Element): void => { messageClass = $._decode_implicit<MessageClass>(() => _decode_MessageClass)(_el); },
        "chargeInformation": (_el: _Element): void => { chargeInformation = $._decode_implicit<ChargeInformation>(() => _decode_ChargeInformation)(_el); },
        "submissionTime": (_el: _Element): void => { submissionTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "timeOfExpiry": (_el: _Element): void => { timeOfExpiry = $._decode_explicit<WaitTime>(() => _decode_WaitTime)(_el); },
        "earliestTimeOfDelivery": (_el: _Element): void => { earliestTimeOfDelivery = $._decode_explicit<WaitTime>(() => _decode_WaitTime)(_el); },
        "deliveryReportRequested": (_el: _Element): void => { deliveryReportRequested = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "readReplyRequested": (_el: _Element): void => { readReplyRequested = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "replyCharging": (_el: _Element): void => { replyCharging = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "replyDeadline": (_el: _Element): void => { replyDeadline = $._decode_explicit<WaitTime>(() => _decode_WaitTime)(_el); },
        "replyChargingSize": (_el: _Element): void => { replyChargingSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<PriorityType>(() => _decode_PriorityType)(_el); },
        "messageDistributionIndicator": (_el: _Element): void => { messageDistributionIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "requestStatusCode": (_el: _Element): void => { requestStatusCode = $._decode_implicit<RequestStatusCodeType>(() => _decode_RequestStatusCodeType)(_el); },
        "statusText": (_el: _Element): void => { statusText = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordTimeStamp": (_el: _Element): void => { recordTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "mscfInformation": (_el: _Element): void => { mscfInformation = $._decode_implicit<MSCFInformation>(() => _decode_MSCFInformation)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MM7SRecord,
        _extension_additions_list_spec_for_MM7SRecord,
        _root_component_type_list_2_spec_for_MM7SRecord,
        undefined,
    );
    return new MM7SRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        originatorMmsRSAddress,
        linkedID,
        vaspID,
        vasID,
        messageID,
        originatorAddress,
        recipientAddresses,
        serviceCode,
        contentType,
        mmComponentType,
        messageSize,
        messageClass,
        chargeInformation,
        submissionTime,
        timeOfExpiry,
        earliestTimeOfDelivery,
        deliveryReportRequested,
        readReplyRequested,
        replyCharging,
        replyDeadline,
        replyChargingSize,
        priority,
        messageDistributionIndicator,
        requestStatusCode,
        statusText,
        recordTimeStamp,
        localSequenceNumber,
        recordExtensions,
        mscfInformation
    );
}; }
    return _cached_decoder_for_MM7SRecord(el);
}

let _cached_encoder_for_MM7SRecord: $.ASN1Encoder<MM7SRecord> | null = null;

/**
 * @summary Encodes a(n) MM7SRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MM7SRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MM7SRecord (value: MM7SRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MM7SRecord) { _cached_encoder_for_MM7SRecord = function (value: MM7SRecord, _elGetter: $.ASN1Encoder<MM7SRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSRSAddress, $.BER)(value.originatorMmsRSAddress, $.BER));
    if (value.linkedID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.linkedID, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.vaspID, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.vasID, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.messageID, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_MMSAgentAddress, $.BER)(value.originatorAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSetOf<MMSAgentAddress>(() => _encode_MMSAgentAddress, $.BER), $.BER)(value.recipientAddresses, $.BER));
    if (value.serviceCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.serviceCode, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.contentType, $.BER));
    if (value.mmComponentType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_MMComponentType, $.BER)(value.mmComponentType, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.messageSize, $.BER));
    if (value.messageClass !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_MessageClass, $.BER)(value.messageClass, $.BER));
    }
    if (value.chargeInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_ChargeInformation, $.BER)(value.chargeInformation, $.BER));
    }
    if (value.submissionTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeOctetString, $.BER)(value.submissionTime, $.BER));
    }
    if (value.timeOfExpiry !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 15, () => _encode_WaitTime, $.BER)(value.timeOfExpiry, $.BER));
    }
    if (value.earliestTimeOfDelivery !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 16, () => _encode_WaitTime, $.BER)(value.earliestTimeOfDelivery, $.BER));
    }
    if (value.deliveryReportRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeBoolean, $.BER)(value.deliveryReportRequested, $.BER));
    }
    if (value.readReplyRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeBoolean, $.BER)(value.readReplyRequested, $.BER));
    }
    if (value.replyCharging !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeBoolean, $.BER)(value.replyCharging, $.BER));
    }
    if (value.replyDeadline !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 20, () => _encode_WaitTime, $.BER)(value.replyDeadline, $.BER));
    }
    if (value.replyChargingSize !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeInteger, $.BER)(value.replyChargingSize, $.BER));
    }
    if (value.priority !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_PriorityType, $.BER)(value.priority, $.BER));
    }
    if (value.messageDistributionIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeBoolean, $.BER)(value.messageDistributionIndicator, $.BER));
    }
    if (value.requestStatusCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_RequestStatusCodeType, $.BER)(value.requestStatusCode, $.BER));
    }
    if (value.statusText !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeOctetString, $.BER)(value.statusText, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 26, () => $._encodeOctetString, $.BER)(value.recordTimeStamp, $.BER));
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.mscfInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_MSCFInformation, $.BER)(value.mscfInformation, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MM7SRecord(value, elGetter);
}


/* eslint-enable */
