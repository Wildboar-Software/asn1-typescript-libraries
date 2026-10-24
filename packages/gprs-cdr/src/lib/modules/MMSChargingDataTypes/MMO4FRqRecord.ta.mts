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
import { type RecordType, _decode_RecordType, _encode_RecordType } from "../MMSChargingDataTypes/RecordType.ta.mjs";
import { MMSRSAddress, _decode_MMSRSAddress, _encode_MMSRSAddress } from "../MMSChargingDataTypes/MMSRSAddress.ta.mjs";
import { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";
import { MMComponentType, _decode_MMComponentType, _encode_MMComponentType } from "../MMSChargingDataTypes/MMComponentType.ta.mjs";
import { type MessageClass, _decode_MessageClass, _encode_MessageClass, _enum_for_MessageClass } from "../MMSChargingDataTypes/MessageClass.ta.mjs";
import { type WaitTime, _decode_WaitTime, _encode_WaitTime } from "../MMSChargingDataTypes/WaitTime.ta.mjs";
import { type PriorityType, _decode_PriorityType, _encode_PriorityType, _enum_for_PriorityType } from "../MMSChargingDataTypes/PriorityType.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary MMO4FRqRecord
 * @description
 *
 * Originator MM4 Forward Request record (O4FRq-CDR).
 *
 * If enabled, an Originator MM4 Forward Request O4FRq-CDR shall be
 * produced in the Originator MMS R/S if and when the Originator MMS R/S
 * has sent an MM4_forward.REQ to the Recipient MMS R/S, regardless of
 * whether or not an MM4_forward.RES is received from the recipient. That
 * is, the CDR is created upon completion of transmission of the
 * MM4_forward.REQ.
 *
 * The MM4_forward.REQ may be generated as a reaction to an incoming
 * MM1_forward.REQ. In this case, the Originator address field specifies
 * the address of the originator MMS User Agent of the original MM, whereas
 * the address of the forwarding MMS User Agent is contained in the
 * Forwarding address field.
 *
 * Table 5.2.3.2.1 associates trigger O2 with this record. It is produced
 * only when the Originator and Recipient MMS R/Ss are distinct.
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
 * This type does not include every category M or C parameter from the
 * table: Recipient address for routing (category M).
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMO4FRqRecord ::= SET {
 *    recordType                [0] IMPLICIT RecordType,
 *    originatorMmsRSAddress    [1] IMPLICIT MMSRSAddress,
 *    recipientMmsRSAddress     [2] IMPLICIT MMSRSAddress,
 *    messageID                 [3] IMPLICIT OCTET STRING,
 *    mms3GPPVersion            [4] IMPLICIT OCTET STRING OPTIONAL,
 *    originatorAddress         [5] IMPLICIT MMSAgentAddress,
 *    recipientAddresses        [6] IMPLICIT SET  OF
 *       MMSAgentAddress,
 *    contentType               [7] IMPLICIT OCTET STRING,
 *    mmComponentType           [8] IMPLICIT MMComponentType OPTIONAL,
 *    messageSize               [9] IMPLICIT INTEGER,
 *    messageClass              [10] IMPLICIT MessageClass OPTIONAL,
 *    submissionTime            [11] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    timeOfExpiry              [12] WaitTime OPTIONAL,
 *    deliveryReportRequested   [13] IMPLICIT BOOLEAN,
 *    priority                  [14] IMPLICIT PriorityType OPTIONAL,
 *    senderVisibility          [15] IMPLICIT BOOLEAN,
 *    readReplyRequested        [16] IMPLICIT BOOLEAN,
 *    acknowledgementRequest    [17] IMPLICIT BOOLEAN,
 *    forwardCounter            [18] IMPLICIT INTEGER OPTIONAL,
 *    forwardingAddress         [19] IMPLICIT SET  OF
 *       MMSAgentAddress OPTIONAL,
 *    recordTimeStamp           [20] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    localSequenceNumber       [21] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions          [22] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MMO4FRqRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * The field identifies the type of the record, see TS 32.250 [10].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.42.
     *
     * Category M. Originator MM4 Forward Request record.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `originatorMmsRSAddress`.
     * @description
     *
     * Category M. IP address or domain name of the Originator MMS R/S.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly originatorMmsRSAddress: MMSRSAddress;
    /**
     * @summary `recipientMmsRSAddress`.
     * @description
     *
     * Category M. IP address or domain name of the Recipient MMS R/S.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly messageID: OCTET_STRING;
    /**
     * @summary `mms3GPPVersion`.
     * @description
     *
     * Category OM. The MMS version of the Originator MMS R/S.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly mms3GPPVersion: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `originatorAddress`.
     * @description
     *
     * This field contains an originator MMS User Agent address. The MMS supports
     * the use of E-Mail addresses (RFC 822 [400]) or MSISDN (E.164 [308]).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.30.
     *
     * Category M. The address of the originator MMS User Agent of the MM. (If
     * the MM4_forward.REQ is generated as a reaction to an incoming
     * MM1_forward.REQ, this is the address of the originator MMS User Agent of
     * the original MM.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly originatorAddress: MMSAgentAddress;
    /**
     * @summary `recipientAddresses`.
     * @description
     *
     * Category M. The address(es) of the Recipient MMS User Agent(s) of the MM
     * as specified in the MM4_forward.REQ that triggered the CDR.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly recipientAddresses: MMSAgentAddress[];
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
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
     * Category C. The class of the MM (e.g., personal, advertisement,
     * information service) if specified by the Originator MMS User Agent.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
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
     * specified in the corresponding MM1_submit.REQ or MM1_forwarding.REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly submissionTime: OCTET_STRING;
    /**
     * @summary `timeOfExpiry`.
     * @description
     *
     * This field contains the desired date or the number of seconds to expiry of
     * the MM, if specified by the originator MMS User Agent.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.57.
     *
     * Category C. The desired date of expiry or duration of time prior to
     * expiry for the MM if specified by the originator MMS User Agent.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly timeOfExpiry: OPTIONAL<WaitTime>;
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
     * Category M. This field indicates whether a delivery report has been
     * requested by the originator MMS User Agent or not.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly deliveryReportRequested: BOOLEAN;
    /**
     * @summary `priority`.
     * @description
     *
     * The priority (importance) of the message, see TS 23.140 [206].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.32.
     *
     * Category C. The priority (importance) of the message if specified by the
     * originator MMS User Agent.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
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
     * Category M. A request to show or hide the sender's identity when the
     * message is delivered to the MM recipient if the Originator MMS User
     * Agent has requested her address to be hidden from the recipient.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly senderVisibility: BOOLEAN;
    /**
     * @summary `readReplyRequested`.
     * @description
     *
     * A Boolean value indicating whether the originator MMS User Agent has
     * requested a read-reply report (value TRUE) or not (value FALSE).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.35.
     *
     * Category M. A request for read-reply report if the originator MMS User
     * Agent has requested a read-reply report for the MM.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly readReplyRequested: BOOLEAN;
    /**
     * @summary `acknowledgementRequest`.
     * @description
     *
     * This Boolean value indicates whether (value TRUE) or not (value FALSE) a
     * response has been requested in a request at the MM4 reference point.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.3.
     *
     * Category M. Request for MM4_forward.RES.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly acknowledgementRequest: BOOLEAN;
    /**
     * @summary `forwardCounter`.
     * @description
     *
     * A Counter indicating the number of times the particular MM was forwarded
     * as defined in TS 23.140 [206].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.11.
     *
     * Category C. A counter indicating the number of times the particular MM
     * was forwarded.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly forwardCounter: OPTIONAL<INTEGER>;
    /**
     * @summary `forwardingAddress`.
     * @description
     *
     * This field contains a forwarding MMS User Agent address. The MMS supports
     * the use of E-Mail addresses (RFC 822 [400]), MSISDN (E.164[308]) or IP
     * addresses.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.12.
     *
     * Category C. The address(es) of the forwarding MMS User Agent(s).
     * Multiple addresses are possible. In the multiple address case this is a
     * sequential list of the address(es) of the forwarding MMS User Agents who
     * forwarded the same MM.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly forwardingAddress: OPTIONAL<MMSAgentAddress[]>;
    /**
     * @summary `recordTimeStamp`.
     * @description
     *
     * This field indicates the date and time when the CDR was produced.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.41.
     *
     * Category M. Time of generation of the CDR.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;

    constructor (
        recordType: RecordType,
        originatorMmsRSAddress: MMSRSAddress,
        recipientMmsRSAddress: MMSRSAddress,
        messageID: OCTET_STRING,
        mms3GPPVersion: OPTIONAL<OCTET_STRING>,
        originatorAddress: MMSAgentAddress,
        recipientAddresses: MMSAgentAddress[],
        contentType: OCTET_STRING,
        mmComponentType: OPTIONAL<MMComponentType>,
        messageSize: INTEGER,
        messageClass: OPTIONAL<MessageClass>,
        submissionTime: OCTET_STRING,
        timeOfExpiry: OPTIONAL<WaitTime>,
        deliveryReportRequested: BOOLEAN,
        priority: OPTIONAL<PriorityType>,
        senderVisibility: BOOLEAN,
        readReplyRequested: BOOLEAN,
        acknowledgementRequest: BOOLEAN,
        forwardCounter: OPTIONAL<INTEGER>,
        forwardingAddress: OPTIONAL<MMSAgentAddress[]>,
        recordTimeStamp: OCTET_STRING,
        localSequenceNumber?: OPTIONAL<INTEGER>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.originatorMmsRSAddress = originatorMmsRSAddress;
        this.recipientMmsRSAddress = recipientMmsRSAddress;
        this.messageID = messageID;
        this.mms3GPPVersion = mms3GPPVersion;
        this.originatorAddress = originatorAddress;
        this.recipientAddresses = recipientAddresses;
        this.contentType = contentType;
        this.mmComponentType = mmComponentType;
        this.messageSize = messageSize;
        this.messageClass = messageClass;
        this.submissionTime = submissionTime;
        this.timeOfExpiry = timeOfExpiry;
        this.deliveryReportRequested = deliveryReportRequested;
        this.priority = priority;
        this.senderVisibility = senderVisibility;
        this.readReplyRequested = readReplyRequested;
        this.acknowledgementRequest = acknowledgementRequest;
        this.forwardCounter = forwardCounter;
        this.forwardingAddress = forwardingAddress;
        this.recordTimeStamp = recordTimeStamp;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
    
        if ((this.submissionTime.length !== 9)) {
            throw new ASN1SizeError("MMO4FRqRecord.submissionTime violates SIZE constraint");
        }
        if ((this.recordTimeStamp.length !== 9)) {
            throw new ASN1SizeError("MMO4FRqRecord.recordTimeStamp violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("MMO4FRqRecord.localSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a MMO4FRqRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MMO4FRqRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMO4FRqRecord`.
     * @returns {MMO4FRqRecord}
     */
    public static _from_object (_o: { [_K in keyof (MMO4FRqRecord)]: (MMO4FRqRecord)[_K] }): MMO4FRqRecord {
        return new MMO4FRqRecord(_o.recordType, _o.originatorMmsRSAddress, _o.recipientMmsRSAddress, _o.messageID, _o.mms3GPPVersion, _o.originatorAddress, _o.recipientAddresses, _o.contentType, _o.mmComponentType, _o.messageSize, _o.messageClass, _o.submissionTime, _o.timeOfExpiry, _o.deliveryReportRequested, _o.priority, _o.senderVisibility, _o.readReplyRequested, _o.acknowledgementRequest, _o.forwardCounter, _o.forwardingAddress, _o.recordTimeStamp, _o.localSequenceNumber, _o.recordExtensions);
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
 * @summary The Leading Root Component Types of MMO4FRqRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMO4FRqRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("originatorMmsRSAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("recipientMmsRSAddress", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mms3GPPVersion", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("originatorAddress", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("recipientAddresses", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("contentType", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("mmComponentType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("messageSize", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("messageClass", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("submissionTime", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("timeOfExpiry", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("deliveryReportRequested", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("senderVisibility", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("readReplyRequested", false, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("acknowledgementRequest", false, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("forwardCounter", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("forwardingAddress", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("recordTimeStamp", false, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 22))
];

/**
 * @summary The Trailing Root Component Types of MMO4FRqRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMO4FRqRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMO4FRqRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMO4FRqRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMO4FRqRecord: $.ASN1Decoder<MMO4FRqRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMO4FRqRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMO4FRqRecord (el: _Element): MMO4FRqRecord {
    if (!_cached_decoder_for_MMO4FRqRecord) { _cached_decoder_for_MMO4FRqRecord = function (el: _Element): MMO4FRqRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let originatorMmsRSAddress!: MMSRSAddress;
    let recipientMmsRSAddress!: MMSRSAddress;
    let messageID!: OCTET_STRING;
    let mms3GPPVersion: OPTIONAL<OCTET_STRING>;
    let originatorAddress!: MMSAgentAddress;
    let recipientAddresses!: MMSAgentAddress[];
    let contentType!: OCTET_STRING;
    let mmComponentType: OPTIONAL<MMComponentType>;
    let messageSize!: INTEGER;
    let messageClass: OPTIONAL<MessageClass>;
    let submissionTime!: OCTET_STRING;
    let timeOfExpiry: OPTIONAL<WaitTime>;
    let deliveryReportRequested!: BOOLEAN;
    let priority: OPTIONAL<PriorityType>;
    let senderVisibility!: BOOLEAN;
    let readReplyRequested!: BOOLEAN;
    let acknowledgementRequest!: BOOLEAN;
    let forwardCounter: OPTIONAL<INTEGER>;
    let forwardingAddress: OPTIONAL<MMSAgentAddress[]>;
    let recordTimeStamp!: OCTET_STRING;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "originatorMmsRSAddress": (_el: _Element): void => { originatorMmsRSAddress = $._decode_implicit<MMSRSAddress>(() => _decode_MMSRSAddress)(_el); },
        "recipientMmsRSAddress": (_el: _Element): void => { recipientMmsRSAddress = $._decode_implicit<MMSRSAddress>(() => _decode_MMSRSAddress)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mms3GPPVersion": (_el: _Element): void => { mms3GPPVersion = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "originatorAddress": (_el: _Element): void => { originatorAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "recipientAddresses": (_el: _Element): void => { recipientAddresses = $._decode_implicit<MMSAgentAddress[]>(() => $._decodeSetOf<MMSAgentAddress>(() => _decode_MMSAgentAddress))(_el); },
        "contentType": (_el: _Element): void => { contentType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mmComponentType": (_el: _Element): void => { mmComponentType = $._decode_implicit<MMComponentType>(() => _decode_MMComponentType)(_el); },
        "messageSize": (_el: _Element): void => { messageSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "messageClass": (_el: _Element): void => { messageClass = $._decode_implicit<MessageClass>(() => _decode_MessageClass)(_el); },
        "submissionTime": (_el: _Element): void => { submissionTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "timeOfExpiry": (_el: _Element): void => { timeOfExpiry = $._decode_explicit<WaitTime>(() => _decode_WaitTime)(_el); },
        "deliveryReportRequested": (_el: _Element): void => { deliveryReportRequested = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<PriorityType>(() => _decode_PriorityType)(_el); },
        "senderVisibility": (_el: _Element): void => { senderVisibility = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "readReplyRequested": (_el: _Element): void => { readReplyRequested = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "acknowledgementRequest": (_el: _Element): void => { acknowledgementRequest = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "forwardCounter": (_el: _Element): void => { forwardCounter = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "forwardingAddress": (_el: _Element): void => { forwardingAddress = $._decode_implicit<MMSAgentAddress[]>(() => $._decodeSetOf<MMSAgentAddress>(() => _decode_MMSAgentAddress))(_el); },
        "recordTimeStamp": (_el: _Element): void => { recordTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MMO4FRqRecord,
        _extension_additions_list_spec_for_MMO4FRqRecord,
        _root_component_type_list_2_spec_for_MMO4FRqRecord,
        undefined,
    );
    return new MMO4FRqRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        originatorMmsRSAddress,
        recipientMmsRSAddress,
        messageID,
        mms3GPPVersion,
        originatorAddress,
        recipientAddresses,
        contentType,
        mmComponentType,
        messageSize,
        messageClass,
        submissionTime,
        timeOfExpiry,
        deliveryReportRequested,
        priority,
        senderVisibility,
        readReplyRequested,
        acknowledgementRequest,
        forwardCounter,
        forwardingAddress,
        recordTimeStamp,
        localSequenceNumber,
        recordExtensions
    );
}; }
    return _cached_decoder_for_MMO4FRqRecord(el);
}

let _cached_encoder_for_MMO4FRqRecord: $.ASN1Encoder<MMO4FRqRecord> | null = null;

/**
 * @summary Encodes a(n) MMO4FRqRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMO4FRqRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MMO4FRqRecord (value: MMO4FRqRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMO4FRqRecord) { _cached_encoder_for_MMO4FRqRecord = function (value: MMO4FRqRecord, _elGetter: $.ASN1Encoder<MMO4FRqRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSRSAddress, $.BER)(value.originatorMmsRSAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSRSAddress, $.BER)(value.recipientMmsRSAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.messageID, $.BER));
    if (value.mms3GPPVersion !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.mms3GPPVersion, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_MMSAgentAddress, $.BER)(value.originatorAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSetOf<MMSAgentAddress>(() => _encode_MMSAgentAddress, $.BER), $.BER)(value.recipientAddresses, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.contentType, $.BER));
    if (value.mmComponentType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_MMComponentType, $.BER)(value.mmComponentType, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.messageSize, $.BER));
    if (value.messageClass !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_MessageClass, $.BER)(value.messageClass, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.submissionTime, $.BER));
    if (value.timeOfExpiry !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 12, () => _encode_WaitTime, $.BER)(value.timeOfExpiry, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeBoolean, $.BER)(value.deliveryReportRequested, $.BER));
    if (value.priority !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_PriorityType, $.BER)(value.priority, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => $._encodeBoolean, $.BER)(value.senderVisibility, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => $._encodeBoolean, $.BER)(value.readReplyRequested, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 17, () => $._encodeBoolean, $.BER)(value.acknowledgementRequest, $.BER));
    if (value.forwardCounter !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeInteger, $.BER)(value.forwardCounter, $.BER));
    }
    if (value.forwardingAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeSetOf<MMSAgentAddress>(() => _encode_MMSAgentAddress, $.BER), $.BER)(value.forwardingAddress, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.recordTimeStamp, $.BER));
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MMO4FRqRecord(value, elGetter);
}


/* eslint-enable */
