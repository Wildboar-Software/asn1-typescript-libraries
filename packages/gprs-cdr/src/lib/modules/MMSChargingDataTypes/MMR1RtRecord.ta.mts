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
import { AccessCorrelation, _decode_AccessCorrelation, _encode_AccessCorrelation } from "../MMSChargingDataTypes/AccessCorrelation.ta.mjs";
import { MMComponentType, _decode_MMComponentType, _encode_MMComponentType } from "../MMSChargingDataTypes/MMComponentType.ta.mjs";
import { MessageClass, _decode_MessageClass, _encode_MessageClass, _enum_for_MessageClass } from "../MMSChargingDataTypes/MessageClass.ta.mjs";
import { PriorityType, _decode_PriorityType, _encode_PriorityType, _enum_for_PriorityType } from "../MMSChargingDataTypes/PriorityType.ta.mjs";
import { MMStatusCodeType, _decode_MMStatusCodeType, _encode_MMStatusCodeType, _enum_for_MMStatusCodeType } from "../MMSChargingDataTypes/MMStatusCodeType.ta.mjs";
import { WaitTime, _decode_WaitTime, _encode_WaitTime } from "../MMSChargingDataTypes/WaitTime.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary MMR1RtRecord
 * @description
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
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `recipientMmsRSAddress`.
     * @public
     * @readonly
     */
    readonly recipientMmsRSAddress: MMSRSAddress;
    /**
     * @summary `messageID`.
     * @public
     * @readonly
     */
    readonly messageID: OCTET_STRING;
    /**
     * @summary `replyChargingID`.
     * @public
     * @readonly
     */
    readonly replyChargingID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `senderAddress`.
     * @public
     * @readonly
     */
    readonly senderAddress: OPTIONAL<MMSAgentAddress>;
    /**
     * @summary `recipientAddress`.
     * @public
     * @readonly
     */
    readonly recipientAddress: MMSAgentAddress;
    /**
     * @summary `accessCorrelation`.
     * @public
     * @readonly
     */
    readonly accessCorrelation: OPTIONAL<AccessCorrelation>;
    /**
     * @summary `contentType`.
     * @public
     * @readonly
     */
    readonly contentType: OCTET_STRING;
    /**
     * @summary `mmComponentType`.
     * @public
     * @readonly
     */
    readonly mmComponentType: OPTIONAL<MMComponentType>;
    /**
     * @summary `messageClass`.
     * @public
     * @readonly
     */
    readonly messageClass: OPTIONAL<MessageClass>;
    /**
     * @summary `submissionTime`.
     * @public
     * @readonly
     */
    readonly submissionTime: OCTET_STRING;
    /**
     * @summary `messageSize`.
     * @public
     * @readonly
     */
    readonly messageSize: OPTIONAL<INTEGER>;
    /**
     * @summary `deliveryReportRequested`.
     * @public
     * @readonly
     */
    readonly deliveryReportRequested: OPTIONAL<BOOLEAN>;
    /**
     * @summary `priority`.
     * @public
     * @readonly
     */
    readonly priority: OPTIONAL<PriorityType>;
    /**
     * @summary `readReplyRequested`.
     * @public
     * @readonly
     */
    readonly readReplyRequested: OPTIONAL<BOOLEAN>;
    /**
     * @summary `mmStatusCode`.
     * @public
     * @readonly
     */
    readonly mmStatusCode: OPTIONAL<MMStatusCodeType>;
    /**
     * @summary `statusText`.
     * @public
     * @readonly
     */
    readonly statusText: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `replyDeadline`.
     * @public
     * @readonly
     */
    readonly replyDeadline: OPTIONAL<WaitTime>;
    /**
     * @summary `replyChargingSize`.
     * @public
     * @readonly
     */
    readonly replyChargingSize: OPTIONAL<INTEGER>;
    /**
     * @summary `durationOfTransmission`.
     * @public
     * @readonly
     */
    readonly durationOfTransmission: OPTIONAL<INTEGER>;
    /**
     * @summary `timeOfExpiry`.
     * @public
     * @readonly
     */
    readonly timeOfExpiry: OPTIONAL<WaitTime>;
    /**
     * @summary `recordTimeStamp`.
     * @public
     * @readonly
     */
    readonly recordTimeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `localSequenceNumber`.
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `messageReference`.
     * @public
     * @readonly
     */
    readonly messageReference: OCTET_STRING;
    /**
     * @summary `vaspID`.
     * @public
     * @readonly
     */
    readonly vaspID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `vasID`.
     * @public
     * @readonly
     */
    readonly vasID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sGSNPLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly sGSNPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `rATType`.
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `mSTimeZone`.
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
        vaspID: OPTIONAL<OCTET_STRING>,
        vasID: OPTIONAL<OCTET_STRING>,
        sGSNPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        rATType: OPTIONAL<INTEGER>,
        mSTimeZone: OPTIONAL<OCTET_STRING>
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
