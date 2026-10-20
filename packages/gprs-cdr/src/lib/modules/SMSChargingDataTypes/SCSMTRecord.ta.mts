/* eslint-disable */
import {
    BOOLEAN,
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
import { RecipientInfo, _decode_RecipientInfo, _encode_RecipientInfo } from "../SMSChargingDataTypes/RecipientInfo.ta.mjs";
import { OriginatorInfo, _decode_OriginatorInfo, _encode_OriginatorInfo } from "../SMSChargingDataTypes/OriginatorInfo.ta.mjs";
import { PriorityType, _decode_PriorityType, _encode_PriorityType, _enum_for_PriorityType } from "../SMSChargingDataTypes/PriorityType.ta.mjs";
import { MessageClass, _decode_MessageClass, _encode_MessageClass, _enum_for_MessageClass } from "../SMSChargingDataTypes/MessageClass.ta.mjs";
import { SMMessageType, _decode_SMMessageType, _encode_SMMessageType, _enum_for_SMMessageType } from "../SMSChargingDataTypes/SMMessageType.ta.mjs";
import { SMSResult, _decode_SMSResult, _encode_SMSResult } from "../SMSChargingDataTypes/SMSResult.ta.mjs";
import { SMDeviceTriggerInformation, _decode_SMDeviceTriggerInformation, _encode_SMDeviceTriggerInformation } from "../SMSChargingDataTypes/SMDeviceTriggerInformation.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../SMSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary SCSMTRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCSMTRecord ::= SET {
 *    recordType                   [0] IMPLICIT RecordType,
 *    sMSNodeAddress               [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    recipientInfo                [2] IMPLICIT RecipientInfo OPTIONAL,
 *    originatorInfo               [3] IMPLICIT OriginatorInfo OPTIONAL,
 *    servedIMEI                   [4] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    submissionTime               [5] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    eventtimestamp               [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    sMPriority                   [7] IMPLICIT PriorityType OPTIONAL,
 *    messageReference             [8] IMPLICIT OCTET STRING OPTIONAL,
 *    sMTotalNumber                [9] IMPLICIT INTEGER OPTIONAL,
 *    sMSequenceNumber             [10] IMPLICIT INTEGER OPTIONAL,
 *    messageSize                  [11] IMPLICIT INTEGER OPTIONAL,
 *    messageClass                 [12] IMPLICIT MessageClass OPTIONAL,
 *    sMdeliveryReportRequested    [13] IMPLICIT BOOLEAN OPTIONAL,
 *    sMDataCodingScheme           [14] IMPLICIT INTEGER OPTIONAL,
 *    sMMessageType                [15] IMPLICIT SMMessageType OPTIONAL,
 *    sMReplyPathRequested         [16] IMPLICIT NULL OPTIONAL,
 *    sMUserDataHeader             [17] IMPLICIT OCTET STRING OPTIONAL,
 *    sMSStatus                    [18] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    sMDischargeTime              [19] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    userLocationInfo             [20] IMPLICIT OCTET STRING OPTIONAL,
 *    rATType                      [21] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    uETimeZone                   [22] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    sMSResult                    [23] SMSResult OPTIONAL,
 *    sMDeviceTriggerInformation   [25] IMPLICIT SMDeviceTriggerInformation OPTIONAL,
 *    localSequenceNumber          [26] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions             [27] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SCSMTRecord {
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
    readonly sMSNodeAddress: OCTET_STRING;
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
     * @summary `servedIMEI`.
     * @public
     * @readonly
     */
    readonly servedIMEI: OPTIONAL<OCTET_STRING>;
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
    readonly messageReference: OPTIONAL<OCTET_STRING>;
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
     * @summary `sMDeviceTriggerInformation`.
     * @public
     * @readonly
     */
    readonly sMDeviceTriggerInformation: OPTIONAL<SMDeviceTriggerInformation>;
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
        sMSNodeAddress: OCTET_STRING,
        recipientInfo: OPTIONAL<RecipientInfo>,
        originatorInfo: OPTIONAL<OriginatorInfo>,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        submissionTime: OPTIONAL<OCTET_STRING>,
        eventtimestamp: OCTET_STRING,
        sMPriority: OPTIONAL<PriorityType>,
        messageReference: OPTIONAL<OCTET_STRING>,
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
        sMDeviceTriggerInformation: OPTIONAL<SMDeviceTriggerInformation>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.sMSNodeAddress = sMSNodeAddress;
        this.recipientInfo = recipientInfo;
        this.originatorInfo = originatorInfo;
        this.servedIMEI = servedIMEI;
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
        this.sMDeviceTriggerInformation = sMDeviceTriggerInformation;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
    
        if ((this.sMSNodeAddress.length < 1 || this.sMSNodeAddress.length > 20)) {
            throw new ASN1SizeError("SCSMTRecord.sMSNodeAddress violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("SCSMTRecord.servedIMEI violates SIZE constraint");
        }
        if (this.submissionTime !== undefined && (this.submissionTime.length !== 9)) {
            throw new ASN1SizeError("SCSMTRecord.submissionTime violates SIZE constraint");
        }
        if ((this.eventtimestamp.length !== 9)) {
            throw new ASN1SizeError("SCSMTRecord.eventtimestamp violates SIZE constraint");
        }
        if (this.sMSStatus !== undefined && (this.sMSStatus.length !== 1)) {
            throw new ASN1SizeError("SCSMTRecord.sMSStatus violates SIZE constraint");
        }
        if (this.sMDischargeTime !== undefined && (this.sMDischargeTime.length !== 9)) {
            throw new ASN1SizeError("SCSMTRecord.sMDischargeTime violates SIZE constraint");
        }
        if (this.rATType !== undefined && ((typeof this.rATType === "bigint" ? Number(this.rATType) : this.rATType) < 0 || (typeof this.rATType === "bigint" ? Number(this.rATType) : this.rATType) > 255)) {
            throw new ASN1OverflowError("SCSMTRecord.rATType violates INTEGER range");
        }
        if (this.uETimeZone !== undefined && (this.uETimeZone.length !== 2)) {
            throw new ASN1SizeError("SCSMTRecord.uETimeZone violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && ((typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) < 0 || (typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) > 4294967295)) {
            throw new ASN1OverflowError("SCSMTRecord.localSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a SCSMTRecord
     * @description
     * 
     * This takes an `object` and converts it to a `SCSMTRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCSMTRecord`.
     * @returns {SCSMTRecord}
     */
    public static _from_object (_o: { [_K in keyof (SCSMTRecord)]: (SCSMTRecord)[_K] }): SCSMTRecord {
        return new SCSMTRecord(_o.recordType, _o.sMSNodeAddress, _o.recipientInfo, _o.originatorInfo, _o.servedIMEI, _o.submissionTime, _o.eventtimestamp, _o.sMPriority, _o.messageReference, _o.sMTotalNumber, _o.sMSequenceNumber, _o.messageSize, _o.messageClass, _o.sMdeliveryReportRequested, _o.sMDataCodingScheme, _o.sMMessageType, _o.sMReplyPathRequested, _o.sMUserDataHeader, _o.sMSStatus, _o.sMDischargeTime, _o.userLocationInfo, _o.rATType, _o.uETimeZone, _o.sMSResult, _o.sMDeviceTriggerInformation, _o.localSequenceNumber, _o.recordExtensions);
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
 * @summary The Leading Root Component Types of SCSMTRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCSMTRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sMSNodeAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("recipientInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("originatorInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("submissionTime", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("eventtimestamp", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sMPriority", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("messageReference", true, $.hasTag(_TagClass.context, 8)),
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
    new $.ComponentSpec("sMDeviceTriggerInformation", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 27))
];

/**
 * @summary The Trailing Root Component Types of SCSMTRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCSMTRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCSMTRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCSMTRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCSMTRecord: $.ASN1Decoder<SCSMTRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCSMTRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCSMTRecord (el: _Element): SCSMTRecord {
    if (!_cached_decoder_for_SCSMTRecord) { _cached_decoder_for_SCSMTRecord = function (el: _Element): SCSMTRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let sMSNodeAddress!: OCTET_STRING;
    let recipientInfo: OPTIONAL<RecipientInfo>;
    let originatorInfo: OPTIONAL<OriginatorInfo>;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let submissionTime: OPTIONAL<OCTET_STRING>;
    let eventtimestamp!: OCTET_STRING;
    let sMPriority: OPTIONAL<PriorityType>;
    let messageReference: OPTIONAL<OCTET_STRING>;
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
    let sMDeviceTriggerInformation: OPTIONAL<SMDeviceTriggerInformation>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "sMSNodeAddress": (_el: _Element): void => { sMSNodeAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recipientInfo": (_el: _Element): void => { recipientInfo = $._decode_implicit<RecipientInfo>(() => _decode_RecipientInfo)(_el); },
        "originatorInfo": (_el: _Element): void => { originatorInfo = $._decode_implicit<OriginatorInfo>(() => _decode_OriginatorInfo)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
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
        "sMDeviceTriggerInformation": (_el: _Element): void => { sMDeviceTriggerInformation = $._decode_implicit<SMDeviceTriggerInformation>(() => _decode_SMDeviceTriggerInformation)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SCSMTRecord,
        _extension_additions_list_spec_for_SCSMTRecord,
        _root_component_type_list_2_spec_for_SCSMTRecord,
        undefined,
    );
    return new SCSMTRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        sMSNodeAddress,
        recipientInfo,
        originatorInfo,
        servedIMEI,
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
        sMDeviceTriggerInformation,
        localSequenceNumber,
        recordExtensions
    );
}; }
    return _cached_decoder_for_SCSMTRecord(el);
}

let _cached_encoder_for_SCSMTRecord: $.ASN1Encoder<SCSMTRecord> | null = null;

/**
 * @summary Encodes a(n) SCSMTRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCSMTRecord, encoded as an ASN.1 Element.
 */
export
function _encode_SCSMTRecord (value: SCSMTRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCSMTRecord) { _cached_encoder_for_SCSMTRecord = function (value: SCSMTRecord, _elGetter: $.ASN1Encoder<SCSMTRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.sMSNodeAddress, $.BER));
    if (value.recipientInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_RecipientInfo, $.BER)(value.recipientInfo, $.BER));
    }
    if (value.originatorInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_OriginatorInfo, $.BER)(value.originatorInfo, $.BER));
    }
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.submissionTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.submissionTime, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.eventtimestamp, $.BER));
    if (value.sMPriority !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_PriorityType, $.BER)(value.sMPriority, $.BER));
    }
    if (value.messageReference !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.messageReference, $.BER));
    }
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
    if (value.sMDeviceTriggerInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => _encode_SMDeviceTriggerInformation, $.BER)(value.sMDeviceTriggerInformation, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_SCSMTRecord(value, elGetter);
}


/* eslint-enable */
