/* eslint-disable */
import {
    BOOLEAN,
    GraphicString,
    INTEGER,
    NULL,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../SMSChargingDataTypes/RecordType.ta.mjs";
import { NodeAddress, _decode_NodeAddress, _encode_NodeAddress } from "../SMSChargingDataTypes/NodeAddress.ta.mjs";
import { RecipientInfo, _decode_RecipientInfo, _encode_RecipientInfo } from "../SMSChargingDataTypes/RecipientInfo.ta.mjs";
import { OriginatorInfo, _decode_OriginatorInfo, _encode_OriginatorInfo } from "../SMSChargingDataTypes/OriginatorInfo.ta.mjs";
import { SubscriberEquipmentNumber, _decode_SubscriberEquipmentNumber, _encode_SubscriberEquipmentNumber } from "../SMSChargingDataTypes/SubscriberEquipmentNumber.ta.mjs";
import { PriorityType, _decode_PriorityType, _encode_PriorityType, _enum_for_PriorityType } from "../SMSChargingDataTypes/PriorityType.ta.mjs";
import { MessageClass, _decode_MessageClass, _encode_MessageClass, _enum_for_MessageClass } from "../SMSChargingDataTypes/MessageClass.ta.mjs";
import { SMMessageType, _decode_SMMessageType, _encode_SMMessageType, _enum_for_SMMessageType } from "../SMSChargingDataTypes/SMMessageType.ta.mjs";
import { SMSResult, _decode_SMSResult, _encode_SMSResult } from "../SMSChargingDataTypes/SMSResult.ta.mjs";
import { PDPAddress, _decode_PDPAddress, _encode_PDPAddress } from "../SMSChargingDataTypes/PDPAddress.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../SMSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary ISMSMTRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISMSMTRecord ::= SET {
 *    recordType                  [0] IMPLICIT RecordType,
 *    sMSNodeAddress              [1] NodeAddress,
 *    recipientInfo               [2] IMPLICIT RecipientInfo OPTIONAL,
 *    originatorInfo              [3] IMPLICIT OriginatorInfo OPTIONAL,
 *    subscriberEquipmentNumber   [4] IMPLICIT SubscriberEquipmentNumber OPTIONAL,
 *    submissionTime              [5] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    eventtimestamp              [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    sMPriority                  [7] IMPLICIT PriorityType OPTIONAL,
 *    messageReference            [8] IMPLICIT OCTET STRING,
 *    sMTotalNumber               [9] IMPLICIT INTEGER OPTIONAL,
 *    sMSequenceNumber            [10] IMPLICIT INTEGER OPTIONAL,
 *    messageSize                 [11] IMPLICIT INTEGER OPTIONAL,
 *    messageClass                [12] IMPLICIT MessageClass OPTIONAL,
 *    sMdeliveryReportRequested   [13] IMPLICIT BOOLEAN OPTIONAL,
 *    sMDataCodingScheme          [14] IMPLICIT INTEGER OPTIONAL,
 *    sMMessageType               [15] IMPLICIT SMMessageType OPTIONAL,
 *    sMReplyPathRequested        [16] IMPLICIT NULL OPTIONAL,
 *    sMUserDataHeader            [17] IMPLICIT OCTET STRING OPTIONAL,
 *    sMSStatus                   [18] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    sMDischargeTime             [19] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    userLocationInfo            [20] IMPLICIT OCTET STRING OPTIONAL,
 *    rATType                     [21] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    uETimeZone                  [22] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    sMSResult                   [23] SMSResult OPTIONAL,
 *    pDPAddress                  [24] PDPAddress OPTIONAL,
 *    session-Id                  [25] IMPLICIT GraphicString OPTIONAL,
 *    numberPortabilityRouting    [26] IMPLICIT GraphicString OPTIONAL,
 *    carrierSelectRouting        [27] IMPLICIT GraphicString OPTIONAL,
 *    localSequenceNumber         [28] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions            [29] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ISMSMTRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `sMSNodeAddress`.
     * @public
     * @readonly
     */
    readonly sMSNodeAddress: NodeAddress;
    /**
     * @summary `recipientInfo`.
     * @public
     * @readonly
     */
    readonly recipientInfo: OPTIONAL<RecipientInfo>;
    /**
     * @summary `originatorInfo`.
     * @public
     * @readonly
     */
    readonly originatorInfo: OPTIONAL<OriginatorInfo>;
    /**
     * @summary `subscriberEquipmentNumber`.
     * @public
     * @readonly
     */
    readonly subscriberEquipmentNumber: OPTIONAL<SubscriberEquipmentNumber>;
    /**
     * @summary `submissionTime`.
     * @public
     * @readonly
     */
    readonly submissionTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `eventtimestamp`.
     * @public
     * @readonly
     */
    readonly eventtimestamp: OCTET_STRING;
    /**
     * @summary `sMPriority`.
     * @public
     * @readonly
     */
    readonly sMPriority: OPTIONAL<PriorityType>;
    /**
     * @summary `messageReference`.
     * @public
     * @readonly
     */
    readonly messageReference: OCTET_STRING;
    /**
     * @summary `sMTotalNumber`.
     * @public
     * @readonly
     */
    readonly sMTotalNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `sMSequenceNumber`.
     * @public
     * @readonly
     */
    readonly sMSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `messageSize`.
     * @public
     * @readonly
     */
    readonly messageSize: OPTIONAL<INTEGER>;
    /**
     * @summary `messageClass`.
     * @public
     * @readonly
     */
    readonly messageClass: OPTIONAL<MessageClass>;
    /**
     * @summary `sMdeliveryReportRequested`.
     * @public
     * @readonly
     */
    readonly sMdeliveryReportRequested: OPTIONAL<BOOLEAN>;
    /**
     * @summary `sMDataCodingScheme`.
     * @public
     * @readonly
     */
    readonly sMDataCodingScheme: OPTIONAL<INTEGER>;
    /**
     * @summary `sMMessageType`.
     * @public
     * @readonly
     */
    readonly sMMessageType: OPTIONAL<SMMessageType>;
    /**
     * @summary `sMReplyPathRequested`.
     * @public
     * @readonly
     */
    readonly sMReplyPathRequested: OPTIONAL<NULL>;
    /**
     * @summary `sMUserDataHeader`.
     * @public
     * @readonly
     */
    readonly sMUserDataHeader: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sMSStatus`.
     * @public
     * @readonly
     */
    readonly sMSStatus: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sMDischargeTime`.
     * @public
     * @readonly
     */
    readonly sMDischargeTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `userLocationInfo`.
     * @public
     * @readonly
     */
    readonly userLocationInfo: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `rATType`.
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `uETimeZone`.
     * @public
     * @readonly
     */
    readonly uETimeZone: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sMSResult`.
     * @public
     * @readonly
     */
    readonly sMSResult: OPTIONAL<SMSResult>;
    /**
     * @summary `pDPAddress`.
     * @public
     * @readonly
     */
    readonly pDPAddress: OPTIONAL<PDPAddress>;
    /**
     * @summary `session_Id`.
     * @public
     * @readonly
     */
    readonly session_Id: OPTIONAL<GraphicString>;
    /**
     * @summary `numberPortabilityRouting`.
     * @public
     * @readonly
     */
    readonly numberPortabilityRouting: OPTIONAL<GraphicString>;
    /**
     * @summary `carrierSelectRouting`.
     * @public
     * @readonly
     */
    readonly carrierSelectRouting: OPTIONAL<GraphicString>;
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

    constructor (
        recordType: RecordType,
        sMSNodeAddress: NodeAddress,
        recipientInfo: OPTIONAL<RecipientInfo>,
        originatorInfo: OPTIONAL<OriginatorInfo>,
        subscriberEquipmentNumber: OPTIONAL<SubscriberEquipmentNumber>,
        submissionTime: OPTIONAL<OCTET_STRING>,
        eventtimestamp: OCTET_STRING,
        sMPriority: OPTIONAL<PriorityType>,
        messageReference: OCTET_STRING,
        sMTotalNumber: OPTIONAL<INTEGER>,
        sMSequenceNumber: OPTIONAL<INTEGER>,
        messageSize: OPTIONAL<INTEGER>,
        messageClass: OPTIONAL<MessageClass>,
        sMdeliveryReportRequested: OPTIONAL<BOOLEAN>,
        sMDataCodingScheme: OPTIONAL<INTEGER>,
        sMMessageType: OPTIONAL<SMMessageType>,
        sMReplyPathRequested: OPTIONAL<NULL>,
        sMUserDataHeader: OPTIONAL<OCTET_STRING>,
        sMSStatus: OPTIONAL<OCTET_STRING>,
        sMDischargeTime: OPTIONAL<OCTET_STRING>,
        userLocationInfo: OPTIONAL<OCTET_STRING>,
        rATType: OPTIONAL<INTEGER>,
        uETimeZone: OPTIONAL<OCTET_STRING>,
        sMSResult: OPTIONAL<SMSResult>,
        pDPAddress: OPTIONAL<PDPAddress>,
        session_Id: OPTIONAL<GraphicString>,
        numberPortabilityRouting: OPTIONAL<GraphicString>,
        carrierSelectRouting: OPTIONAL<GraphicString>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.sMSNodeAddress = sMSNodeAddress;
        this.recipientInfo = recipientInfo;
        this.originatorInfo = originatorInfo;
        this.subscriberEquipmentNumber = subscriberEquipmentNumber;
        this.submissionTime = submissionTime;
        this.eventtimestamp = eventtimestamp;
        this.sMPriority = sMPriority;
        this.messageReference = messageReference;
        this.sMTotalNumber = sMTotalNumber;
        this.sMSequenceNumber = sMSequenceNumber;
        this.messageSize = messageSize;
        this.messageClass = messageClass;
        this.sMdeliveryReportRequested = sMdeliveryReportRequested;
        this.sMDataCodingScheme = sMDataCodingScheme;
        this.sMMessageType = sMMessageType;
        this.sMReplyPathRequested = sMReplyPathRequested;
        this.sMUserDataHeader = sMUserDataHeader;
        this.sMSStatus = sMSStatus;
        this.sMDischargeTime = sMDischargeTime;
        this.userLocationInfo = userLocationInfo;
        this.rATType = rATType;
        this.uETimeZone = uETimeZone;
        this.sMSResult = sMSResult;
        this.pDPAddress = pDPAddress;
        this.session_Id = session_Id;
        this.numberPortabilityRouting = numberPortabilityRouting;
        this.carrierSelectRouting = carrierSelectRouting;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
    
        if (this.submissionTime !== undefined && (this.submissionTime.length !== 9)) {
            throw new ASN1SizeError("ISMSMTRecord.submissionTime violates SIZE constraint");
        }
        if ((this.eventtimestamp.length !== 9)) {
            throw new ASN1SizeError("ISMSMTRecord.eventtimestamp violates SIZE constraint");
        }
        if (this.sMSStatus !== undefined && (this.sMSStatus.length !== 1)) {
            throw new ASN1SizeError("ISMSMTRecord.sMSStatus violates SIZE constraint");
        }
        if (this.sMDischargeTime !== undefined && (this.sMDischargeTime.length !== 9)) {
            throw new ASN1SizeError("ISMSMTRecord.sMDischargeTime violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("ISMSMTRecord.rATType violates INTEGER range");
        }
        if (this.uETimeZone !== undefined && (this.uETimeZone.length !== 2)) {
            throw new ASN1SizeError("ISMSMTRecord.uETimeZone violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("ISMSMTRecord.localSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a ISMSMTRecord
     * @description
     * 
     * This takes an `object` and converts it to a `ISMSMTRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ISMSMTRecord`.
     * @returns {ISMSMTRecord}
     */
    public static _from_object (_o: { [_K in keyof (ISMSMTRecord)]: (ISMSMTRecord)[_K] }): ISMSMTRecord {
        return new ISMSMTRecord(_o.recordType, _o.sMSNodeAddress, _o.recipientInfo, _o.originatorInfo, _o.subscriberEquipmentNumber, _o.submissionTime, _o.eventtimestamp, _o.sMPriority, _o.messageReference, _o.sMTotalNumber, _o.sMSequenceNumber, _o.messageSize, _o.messageClass, _o.sMdeliveryReportRequested, _o.sMDataCodingScheme, _o.sMMessageType, _o.sMReplyPathRequested, _o.sMUserDataHeader, _o.sMSStatus, _o.sMDischargeTime, _o.userLocationInfo, _o.rATType, _o.uETimeZone, _o.sMSResult, _o.pDPAddress, _o.session_Id, _o.numberPortabilityRouting, _o.carrierSelectRouting, _o.localSequenceNumber, _o.recordExtensions);
    }

        /**
         * @summary The enum used as the type of the component `sMPriority`
         * @public
         * @static
         */

    public static _enum_for_sMPriority = _enum_for_PriorityType;        /**
         * @summary The enum used as the type of the component `messageClass`
         * @public
         * @static
         */

    public static _enum_for_messageClass = _enum_for_MessageClass;        /**
         * @summary The enum used as the type of the component `sMMessageType`
         * @public
         * @static
         */

    public static _enum_for_sMMessageType = _enum_for_SMMessageType;
}

/**
 * @summary The Leading Root Component Types of ISMSMTRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ISMSMTRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sMSNodeAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("recipientInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("originatorInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("subscriberEquipmentNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("submissionTime", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("eventtimestamp", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sMPriority", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("messageReference", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("sMTotalNumber", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("sMSequenceNumber", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("messageSize", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("messageClass", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("sMdeliveryReportRequested", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("sMDataCodingScheme", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("sMMessageType", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("sMReplyPathRequested", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("sMUserDataHeader", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("sMSStatus", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("sMDischargeTime", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("userLocationInfo", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("uETimeZone", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("sMSResult", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("pDPAddress", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("session-Id", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("numberPortabilityRouting", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("carrierSelectRouting", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 29))
];

/**
 * @summary The Trailing Root Component Types of ISMSMTRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ISMSMTRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ISMSMTRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ISMSMTRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ISMSMTRecord: $.ASN1Decoder<ISMSMTRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ISMSMTRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ISMSMTRecord (el: _Element): ISMSMTRecord {
    if (!_cached_decoder_for_ISMSMTRecord) { _cached_decoder_for_ISMSMTRecord = function (el: _Element): ISMSMTRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let sMSNodeAddress!: NodeAddress;
    let recipientInfo: OPTIONAL<RecipientInfo>;
    let originatorInfo: OPTIONAL<OriginatorInfo>;
    let subscriberEquipmentNumber: OPTIONAL<SubscriberEquipmentNumber>;
    let submissionTime: OPTIONAL<OCTET_STRING>;
    let eventtimestamp!: OCTET_STRING;
    let sMPriority: OPTIONAL<PriorityType>;
    let messageReference!: OCTET_STRING;
    let sMTotalNumber: OPTIONAL<INTEGER>;
    let sMSequenceNumber: OPTIONAL<INTEGER>;
    let messageSize: OPTIONAL<INTEGER>;
    let messageClass: OPTIONAL<MessageClass>;
    let sMdeliveryReportRequested: OPTIONAL<BOOLEAN>;
    let sMDataCodingScheme: OPTIONAL<INTEGER>;
    let sMMessageType: OPTIONAL<SMMessageType>;
    let sMReplyPathRequested: OPTIONAL<NULL>;
    let sMUserDataHeader: OPTIONAL<OCTET_STRING>;
    let sMSStatus: OPTIONAL<OCTET_STRING>;
    let sMDischargeTime: OPTIONAL<OCTET_STRING>;
    let userLocationInfo: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<INTEGER>;
    let uETimeZone: OPTIONAL<OCTET_STRING>;
    let sMSResult: OPTIONAL<SMSResult>;
    let pDPAddress: OPTIONAL<PDPAddress>;
    let session_Id: OPTIONAL<GraphicString>;
    let numberPortabilityRouting: OPTIONAL<GraphicString>;
    let carrierSelectRouting: OPTIONAL<GraphicString>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "sMSNodeAddress": (_el: _Element): void => { sMSNodeAddress = $._decode_explicit<NodeAddress>(() => _decode_NodeAddress)(_el); },
        "recipientInfo": (_el: _Element): void => { recipientInfo = $._decode_implicit<RecipientInfo>(() => _decode_RecipientInfo)(_el); },
        "originatorInfo": (_el: _Element): void => { originatorInfo = $._decode_implicit<OriginatorInfo>(() => _decode_OriginatorInfo)(_el); },
        "subscriberEquipmentNumber": (_el: _Element): void => { subscriberEquipmentNumber = $._decode_implicit<SubscriberEquipmentNumber>(() => _decode_SubscriberEquipmentNumber)(_el); },
        "submissionTime": (_el: _Element): void => { submissionTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "eventtimestamp": (_el: _Element): void => { eventtimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sMPriority": (_el: _Element): void => { sMPriority = $._decode_implicit<PriorityType>(() => _decode_PriorityType)(_el); },
        "messageReference": (_el: _Element): void => { messageReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sMTotalNumber": (_el: _Element): void => { sMTotalNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sMSequenceNumber": (_el: _Element): void => { sMSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "messageSize": (_el: _Element): void => { messageSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "messageClass": (_el: _Element): void => { messageClass = $._decode_implicit<MessageClass>(() => _decode_MessageClass)(_el); },
        "sMdeliveryReportRequested": (_el: _Element): void => { sMdeliveryReportRequested = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "sMDataCodingScheme": (_el: _Element): void => { sMDataCodingScheme = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sMMessageType": (_el: _Element): void => { sMMessageType = $._decode_implicit<SMMessageType>(() => _decode_SMMessageType)(_el); },
        "sMReplyPathRequested": (_el: _Element): void => { sMReplyPathRequested = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "sMUserDataHeader": (_el: _Element): void => { sMUserDataHeader = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sMSStatus": (_el: _Element): void => { sMSStatus = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sMDischargeTime": (_el: _Element): void => { sMDischargeTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "userLocationInfo": (_el: _Element): void => { userLocationInfo = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "uETimeZone": (_el: _Element): void => { uETimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sMSResult": (_el: _Element): void => { sMSResult = $._decode_explicit<SMSResult>(() => _decode_SMSResult)(_el); },
        "pDPAddress": (_el: _Element): void => { pDPAddress = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "session-Id": (_el: _Element): void => { session_Id = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "numberPortabilityRouting": (_el: _Element): void => { numberPortabilityRouting = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "carrierSelectRouting": (_el: _Element): void => { carrierSelectRouting = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ISMSMTRecord,
        _extension_additions_list_spec_for_ISMSMTRecord,
        _root_component_type_list_2_spec_for_ISMSMTRecord,
        undefined,
    );
    return new ISMSMTRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        sMSNodeAddress,
        recipientInfo,
        originatorInfo,
        subscriberEquipmentNumber,
        submissionTime,
        eventtimestamp,
        sMPriority,
        messageReference,
        sMTotalNumber,
        sMSequenceNumber,
        messageSize,
        messageClass,
        sMdeliveryReportRequested,
        sMDataCodingScheme,
        sMMessageType,
        sMReplyPathRequested,
        sMUserDataHeader,
        sMSStatus,
        sMDischargeTime,
        userLocationInfo,
        rATType,
        uETimeZone,
        sMSResult,
        pDPAddress,
        session_Id,
        numberPortabilityRouting,
        carrierSelectRouting,
        localSequenceNumber,
        recordExtensions
    );
}; }
    return _cached_decoder_for_ISMSMTRecord(el);
}

let _cached_encoder_for_ISMSMTRecord: $.ASN1Encoder<ISMSMTRecord> | null = null;

/**
 * @summary Encodes a(n) ISMSMTRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISMSMTRecord, encoded as an ASN.1 Element.
 */
export
function _encode_ISMSMTRecord (value: ISMSMTRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ISMSMTRecord) { _cached_encoder_for_ISMSMTRecord = function (value: ISMSMTRecord, _elGetter: $.ASN1Encoder<ISMSMTRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_NodeAddress, $.BER)(value.sMSNodeAddress, $.BER));
    if (value.recipientInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_RecipientInfo, $.BER)(value.recipientInfo, $.BER));
    }
    if (value.originatorInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_OriginatorInfo, $.BER)(value.originatorInfo, $.BER));
    }
    if (value.subscriberEquipmentNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_SubscriberEquipmentNumber, $.BER)(value.subscriberEquipmentNumber, $.BER));
    }
    if (value.submissionTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.submissionTime, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.eventtimestamp, $.BER));
    if (value.sMPriority !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_PriorityType, $.BER)(value.sMPriority, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.messageReference, $.BER));
    if (value.sMTotalNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.sMTotalNumber, $.BER));
    }
    if (value.sMSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.sMSequenceNumber, $.BER));
    }
    if (value.messageSize !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.messageSize, $.BER));
    }
    if (value.messageClass !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_MessageClass, $.BER)(value.messageClass, $.BER));
    }
    if (value.sMdeliveryReportRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeBoolean, $.BER)(value.sMdeliveryReportRequested, $.BER));
    }
    if (value.sMDataCodingScheme !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.sMDataCodingScheme, $.BER));
    }
    if (value.sMMessageType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_SMMessageType, $.BER)(value.sMMessageType, $.BER));
    }
    if (value.sMReplyPathRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeNull, $.BER)(value.sMReplyPathRequested, $.BER));
    }
    if (value.sMUserDataHeader !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.sMUserDataHeader, $.BER));
    }
    if (value.sMSStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.sMSStatus, $.BER));
    }
    if (value.sMDischargeTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER)(value.sMDischargeTime, $.BER));
    }
    if (value.userLocationInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.userLocationInfo, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.uETimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeOctetString, $.BER)(value.uETimeZone, $.BER));
    }
    if (value.sMSResult !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 23, () => _encode_SMSResult, $.BER)(value.sMSResult, $.BER));
    }
    if (value.pDPAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 24, () => _encode_PDPAddress, $.BER)(value.pDPAddress, $.BER));
    }
    if (value.session_Id !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeGraphicString, $.BER)(value.session_Id, $.BER));
    }
    if (value.numberPortabilityRouting !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeGraphicString, $.BER)(value.numberPortabilityRouting, $.BER));
    }
    if (value.carrierSelectRouting !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeGraphicString, $.BER)(value.carrierSelectRouting, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_ISMSMTRecord(value, elGetter);
}


/* eslint-enable */
