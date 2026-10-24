/* eslint-disable */
import {
    type BOOLEAN,
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../MMSChargingDataTypes/RecordType.ta.mjs";
import { MMSRSAddress, _decode_MMSRSAddress, _encode_MMSRSAddress } from "../MMSChargingDataTypes/MMSRSAddress.ta.mjs";
import { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";
import { AccessCorrelation, _decode_AccessCorrelation, _encode_AccessCorrelation } from "../MMSChargingDataTypes/AccessCorrelation.ta.mjs";
import { MessageClass, _decode_MessageClass, _encode_MessageClass, _enum_for_MessageClass } from "../MMSChargingDataTypes/MessageClass.ta.mjs";
import { MMComponentType, _decode_MMComponentType, _encode_MMComponentType } from "../MMSChargingDataTypes/MMComponentType.ta.mjs";
import { WaitTime, _decode_WaitTime, _encode_WaitTime } from "../MMSChargingDataTypes/WaitTime.ta.mjs";
import { MMStatusCodeType, _decode_MMStatusCodeType, _encode_MMStatusCodeType, _enum_for_MMStatusCodeType } from "../MMSChargingDataTypes/MMStatusCodeType.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";
import { MSCFInformation, _decode_MSCFInformation, _encode_MSCFInformation } from "../MMSChargingDataTypes/MSCFInformation.ta.mjs";


/**
 * @summary MMR1NRqRecord
 * @description
 *
 * Recipient MM1 Notification Request record (R1NRq-CDR).
 *
 * If enabled, a Recipient MM1 Notification Request R1NRq-CDR shall be
 * produced in the Recipient MMS R/S if and when the Recipient MMS R/S
 * sends an MM1_notification.REQ to the Recipient MMS User Agent.
 *
 * Table 5.2.3.1.1 associates trigger C2 with this record in the combined
 * case. Table 5.2.3.2.2 associates trigger R2 with it at a separate
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
 * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMR1NRqRecord ::= SET {
 *    recordType                [0] IMPLICIT RecordType,
 *    recipientMmsRSAddress     [1] IMPLICIT MMSRSAddress,
 *    messageID                 [2] IMPLICIT OCTET STRING,
 *    replyChargingID           [3] IMPLICIT OCTET STRING OPTIONAL,
 *    senderAddress             [4] IMPLICIT MMSAgentAddress,
 *    recipientAddress          [5] IMPLICIT MMSAgentAddress,
 *    accessCorrelation         [6] AccessCorrelation OPTIONAL,
 *    messageClass              [7] IMPLICIT MessageClass OPTIONAL,
 *    mmComponentType           [8] IMPLICIT MMComponentType OPTIONAL,
 *    messageSize               [9] IMPLICIT INTEGER,
 *    timeOfExpiry              [10] WaitTime OPTIONAL,
 *    messageReference          [11] IMPLICIT OCTET STRING,
 *    deliveryReportRequested   [12] IMPLICIT BOOLEAN OPTIONAL,
 *    replyCharging             [13] IMPLICIT BOOLEAN OPTIONAL,
 *    replyDeadline             [14] WaitTime OPTIONAL,
 *    replyChargingSize         [15] IMPLICIT INTEGER OPTIONAL,
 *    mmStatusCode              [16] IMPLICIT MMStatusCodeType OPTIONAL,
 *    statusText                [17] IMPLICIT OCTET STRING OPTIONAL,
 *    recordTimeStamp           [18] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    localSequenceNumber       [19] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions          [20] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    mscfInformation           [21] IMPLICIT MSCFInformation OPTIONAL,
 *    vaspID                    [22] IMPLICIT OCTET STRING OPTIONAL,
 *    vasID                     [23] IMPLICIT OCTET STRING OPTIONAL,
 *    sGSNPLMNIdentifier        [24] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    rATType                   [25] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    mSTimeZone                [26] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MMR1NRqRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * The field identifies the type of the record, see TS 32.250 [10].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.42.
     *
     * Category M. Recipient MM1 Notification Request record.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
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
     * Category M. The address of the MMS User Agent as used in the
     * MM1_notification_REQ. This parameter is present in the CDR regardless of
     * address hiding.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
     *
     * @public
     * @readonly
     */
    readonly senderAddress: MMSAgentAddress;
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
     * Category M. The address of the MM recipient of the MM.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
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
     * domain of the Recipient MMS User Agent.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
     *
     * @public
     * @readonly
     */
    readonly accessCorrelation: OPTIONAL<AccessCorrelation>;
    /**
     * @summary `messageClass`.
     * @description
     *
     * A class of messages such as personal, advertisement, information service
     * etc. For more information see TS 23.140 [206].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.18.
     *
     * Category M. The class selection such as personal, advertisement,
     * information service; default = personal.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
     *
     * @public
     * @readonly
     */
    readonly messageClass: OPTIONAL<MessageClass>;
    /**
     * @summary `mmComponentType`.
     * @description
     *
     * Category OM. The list of media components with volume size.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
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
     * Category OM. The total size of the MM content.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
     *
     * @public
     * @readonly
     */
    readonly messageSize: INTEGER;
    /**
     * @summary `timeOfExpiry`.
     * @description
     *
     * This field contains the desired date or the number of seconds to expiry of
     * the MM, if specified by the originator MMS User Agent.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.57.
     *
     * Category OM. The date of expiry or duration of time prior to expiry for
     * the MM.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
     *
     * @public
     * @readonly
     */
    readonly timeOfExpiry: OPTIONAL<WaitTime>;
    /**
     * @summary `messageReference`.
     * @description
     *
     * A reference as specified in TS 23.140 [206], e.g. URI, for the MM that can
     * be used for retrieving the MM from the recipient MMS Relay/Server.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.21.
     *
     * Category M. A reference, e.g., URI, for the MM.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
     *
     * @public
     * @readonly
     */
    readonly messageReference: OCTET_STRING;
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
     * Category OM. This field indicates whether a delivery report is requested
     * or not as specified in the MM1_notification.REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
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
     * Category OC. Information that a reply to this particular original MM is
     * free of charge as specified in the MM1_notification.REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
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
     * a reply granted to the recipient as specified in the
     * MM1_notification.REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
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
     * granted to the recipient as specified in the MM1_notification.REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
     *
     * @public
     * @readonly
     */
    readonly replyChargingSize: OPTIONAL<INTEGER>;
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
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
     * with the MMS R/S via the MM10 interface prior to the
     * MM1_notification.REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
     *
     * @public
     * @readonly
     */
    readonly mscfInformation: OPTIONAL<MSCFInformation>;
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.2.2.
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
        senderAddress: MMSAgentAddress,
        recipientAddress: MMSAgentAddress,
        accessCorrelation: OPTIONAL<AccessCorrelation>,
        messageClass: OPTIONAL<MessageClass>,
        mmComponentType: OPTIONAL<MMComponentType>,
        messageSize: INTEGER,
        timeOfExpiry: OPTIONAL<WaitTime>,
        messageReference: OCTET_STRING,
        deliveryReportRequested?: OPTIONAL<BOOLEAN>,
        replyCharging?: OPTIONAL<BOOLEAN>,
        replyDeadline?: OPTIONAL<WaitTime>,
        replyChargingSize?: OPTIONAL<INTEGER>,
        mmStatusCode?: OPTIONAL<MMStatusCodeType>,
        statusText?: OPTIONAL<OCTET_STRING>,
        recordTimeStamp?: OPTIONAL<OCTET_STRING>,
        localSequenceNumber?: OPTIONAL<INTEGER>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        mscfInformation?: OPTIONAL<MSCFInformation>,
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
        this.messageClass = messageClass;
        this.mmComponentType = mmComponentType;
        this.messageSize = messageSize;
        this.timeOfExpiry = timeOfExpiry;
        this.messageReference = messageReference;
        this.deliveryReportRequested = deliveryReportRequested;
        this.replyCharging = replyCharging;
        this.replyDeadline = replyDeadline;
        this.replyChargingSize = replyChargingSize;
        this.mmStatusCode = mmStatusCode;
        this.statusText = statusText;
        this.recordTimeStamp = recordTimeStamp;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
        this.mscfInformation = mscfInformation;
        this.vaspID = vaspID;
        this.vasID = vasID;
        this.sGSNPLMNIdentifier = sGSNPLMNIdentifier;
        this.rATType = rATType;
        this.mSTimeZone = mSTimeZone;
    
        if (this.recordTimeStamp !== undefined && (this.recordTimeStamp.length !== 9)) {
            throw new ASN1SizeError("MMR1NRqRecord.recordTimeStamp violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("MMR1NRqRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.sGSNPLMNIdentifier !== undefined && (this.sGSNPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("MMR1NRqRecord.sGSNPLMNIdentifier violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("MMR1NRqRecord.rATType violates INTEGER range");
        }
        if (this.mSTimeZone !== undefined && (this.mSTimeZone.length !== 2)) {
            throw new ASN1SizeError("MMR1NRqRecord.mSTimeZone violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MMR1NRqRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MMR1NRqRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMR1NRqRecord`.
     * @returns {MMR1NRqRecord}
     */
    public static _from_object (_o: { [_K in keyof (MMR1NRqRecord)]: (MMR1NRqRecord)[_K] }): MMR1NRqRecord {
        return new MMR1NRqRecord(_o.recordType, _o.recipientMmsRSAddress, _o.messageID, _o.replyChargingID, _o.senderAddress, _o.recipientAddress, _o.accessCorrelation, _o.messageClass, _o.mmComponentType, _o.messageSize, _o.timeOfExpiry, _o.messageReference, _o.deliveryReportRequested, _o.replyCharging, _o.replyDeadline, _o.replyChargingSize, _o.mmStatusCode, _o.statusText, _o.recordTimeStamp, _o.localSequenceNumber, _o.recordExtensions, _o.mscfInformation, _o.vaspID, _o.vasID, _o.sGSNPLMNIdentifier, _o.rATType, _o.mSTimeZone);
    }

        /**
         * @summary The enum used as the type of the component `messageClass`
         * @public
         * @static
         */

    public static _enum_for_messageClass = _enum_for_MessageClass;        /**
         * @summary The enum used as the type of the component `mmStatusCode`
         * @public
         * @static
         */

    public static _enum_for_mmStatusCode = _enum_for_MMStatusCodeType;
}

/**
 * @summary The Leading Root Component Types of MMR1NRqRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMR1NRqRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recipientMmsRSAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("replyChargingID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("senderAddress", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("recipientAddress", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("accessCorrelation", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("messageClass", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("mmComponentType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("messageSize", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("timeOfExpiry", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("messageReference", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("deliveryReportRequested", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("replyCharging", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("replyDeadline", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("replyChargingSize", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("mmStatusCode", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("statusText", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("recordTimeStamp", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("mscfInformation", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("vaspID", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("vasID", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("sGSNPLMNIdentifier", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("mSTimeZone", true, $.hasTag(_TagClass.context, 26))
];

/**
 * @summary The Trailing Root Component Types of MMR1NRqRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMR1NRqRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMR1NRqRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMR1NRqRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMR1NRqRecord: $.ASN1Decoder<MMR1NRqRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMR1NRqRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMR1NRqRecord (el: _Element): MMR1NRqRecord {
    if (!_cached_decoder_for_MMR1NRqRecord) { _cached_decoder_for_MMR1NRqRecord = function (el: _Element): MMR1NRqRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let recipientMmsRSAddress!: MMSRSAddress;
    let messageID!: OCTET_STRING;
    let replyChargingID: OPTIONAL<OCTET_STRING>;
    let senderAddress!: MMSAgentAddress;
    let recipientAddress!: MMSAgentAddress;
    let accessCorrelation: OPTIONAL<AccessCorrelation>;
    let messageClass: OPTIONAL<MessageClass>;
    let mmComponentType: OPTIONAL<MMComponentType>;
    let messageSize!: INTEGER;
    let timeOfExpiry: OPTIONAL<WaitTime>;
    let messageReference!: OCTET_STRING;
    let deliveryReportRequested: OPTIONAL<BOOLEAN>;
    let replyCharging: OPTIONAL<BOOLEAN>;
    let replyDeadline: OPTIONAL<WaitTime>;
    let replyChargingSize: OPTIONAL<INTEGER>;
    let mmStatusCode: OPTIONAL<MMStatusCodeType>;
    let statusText: OPTIONAL<OCTET_STRING>;
    let recordTimeStamp: OPTIONAL<OCTET_STRING>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let mscfInformation: OPTIONAL<MSCFInformation>;
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
        "messageClass": (_el: _Element): void => { messageClass = $._decode_implicit<MessageClass>(() => _decode_MessageClass)(_el); },
        "mmComponentType": (_el: _Element): void => { mmComponentType = $._decode_implicit<MMComponentType>(() => _decode_MMComponentType)(_el); },
        "messageSize": (_el: _Element): void => { messageSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "timeOfExpiry": (_el: _Element): void => { timeOfExpiry = $._decode_explicit<WaitTime>(() => _decode_WaitTime)(_el); },
        "messageReference": (_el: _Element): void => { messageReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "deliveryReportRequested": (_el: _Element): void => { deliveryReportRequested = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "replyCharging": (_el: _Element): void => { replyCharging = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "replyDeadline": (_el: _Element): void => { replyDeadline = $._decode_explicit<WaitTime>(() => _decode_WaitTime)(_el); },
        "replyChargingSize": (_el: _Element): void => { replyChargingSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mmStatusCode": (_el: _Element): void => { mmStatusCode = $._decode_implicit<MMStatusCodeType>(() => _decode_MMStatusCodeType)(_el); },
        "statusText": (_el: _Element): void => { statusText = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordTimeStamp": (_el: _Element): void => { recordTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "mscfInformation": (_el: _Element): void => { mscfInformation = $._decode_implicit<MSCFInformation>(() => _decode_MSCFInformation)(_el); },
        "vaspID": (_el: _Element): void => { vaspID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "vasID": (_el: _Element): void => { vasID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sGSNPLMNIdentifier": (_el: _Element): void => { sGSNPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mSTimeZone": (_el: _Element): void => { mSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MMR1NRqRecord,
        _extension_additions_list_spec_for_MMR1NRqRecord,
        _root_component_type_list_2_spec_for_MMR1NRqRecord,
        undefined,
    );
    return new MMR1NRqRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        recipientMmsRSAddress,
        messageID,
        replyChargingID,
        senderAddress,
        recipientAddress,
        accessCorrelation,
        messageClass,
        mmComponentType,
        messageSize,
        timeOfExpiry,
        messageReference,
        deliveryReportRequested,
        replyCharging,
        replyDeadline,
        replyChargingSize,
        mmStatusCode,
        statusText,
        recordTimeStamp,
        localSequenceNumber,
        recordExtensions,
        mscfInformation,
        vaspID,
        vasID,
        sGSNPLMNIdentifier,
        rATType,
        mSTimeZone
    );
}; }
    return _cached_decoder_for_MMR1NRqRecord(el);
}

let _cached_encoder_for_MMR1NRqRecord: $.ASN1Encoder<MMR1NRqRecord> | null = null;

/**
 * @summary Encodes a(n) MMR1NRqRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMR1NRqRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MMR1NRqRecord (value: MMR1NRqRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMR1NRqRecord) { _cached_encoder_for_MMR1NRqRecord = function (value: MMR1NRqRecord, _elGetter: $.ASN1Encoder<MMR1NRqRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSRSAddress, $.BER)(value.recipientMmsRSAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.messageID, $.BER));
    if (value.replyChargingID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.replyChargingID, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_MMSAgentAddress, $.BER)(value.senderAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_MMSAgentAddress, $.BER)(value.recipientAddress, $.BER));
    if (value.accessCorrelation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_AccessCorrelation, $.BER)(value.accessCorrelation, $.BER));
    }
    if (value.messageClass !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_MessageClass, $.BER)(value.messageClass, $.BER));
    }
    if (value.mmComponentType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_MMComponentType, $.BER)(value.mmComponentType, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.messageSize, $.BER));
    if (value.timeOfExpiry !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_WaitTime, $.BER)(value.timeOfExpiry, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.messageReference, $.BER));
    if (value.deliveryReportRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeBoolean, $.BER)(value.deliveryReportRequested, $.BER));
    }
    if (value.replyCharging !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeBoolean, $.BER)(value.replyCharging, $.BER));
    }
    if (value.replyDeadline !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 14, () => _encode_WaitTime, $.BER)(value.replyDeadline, $.BER));
    }
    if (value.replyChargingSize !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.replyChargingSize, $.BER));
    }
    if (value.mmStatusCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_MMStatusCodeType, $.BER)(value.mmStatusCode, $.BER));
    }
    if (value.statusText !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.statusText, $.BER));
    }
    if (value.recordTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.recordTimeStamp, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.mscfInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_MSCFInformation, $.BER)(value.mscfInformation, $.BER));
    }
    if (value.vaspID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeOctetString, $.BER)(value.vaspID, $.BER));
    }
    if (value.vasID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.vasID, $.BER));
    }
    if (value.sGSNPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER)(value.sGSNPLMNIdentifier, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.mSTimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeOctetString, $.BER)(value.mSTimeZone, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MMR1NRqRecord(value, elGetter);
}


/* eslint-enable */
