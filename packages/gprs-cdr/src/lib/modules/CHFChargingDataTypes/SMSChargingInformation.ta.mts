/* eslint-disable */
import {
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OriginatorInfo, _decode_OriginatorInfo, _encode_OriginatorInfo } from "../CHFChargingDataTypes/OriginatorInfo.ta.mjs";
import { RecipientInfos, _decode_RecipientInfos, _encode_RecipientInfos } from "../CHFChargingDataTypes/RecipientInfos.ta.mjs";
import { SubscriberEquipmentNumber, _decode_SubscriberEquipmentNumber, _encode_SubscriberEquipmentNumber } from "../CHFChargingDataTypes/SubscriberEquipmentNumber.ta.mjs";
import { SMSChargingInformation_sMMessageType, _decode_SMSChargingInformation_sMMessageType, _encode_SMSChargingInformation_sMMessageType, _enum_for_SMSChargingInformation_sMMessageType } from "../CHFChargingDataTypes/SMSChargingInformation-sMMessageType.ta.mjs";
import { SMReplyPathRequested, _decode_SMReplyPathRequested, _encode_SMReplyPathRequested, _enum_for_SMReplyPathRequested } from "../CHFChargingDataTypes/SMReplyPathRequested.ta.mjs";
import { type SMServiceType, _decode_SMServiceType, _encode_SMServiceType } from "../CHFChargingDataTypes/SMServiceType.ta.mjs";
import { type Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../CHFChargingDataTypes/Diagnostics.ta.mjs";
import { SMSChargingInformation_sMPriority, _decode_SMSChargingInformation_sMPriority, _encode_SMSChargingInformation_sMPriority, _enum_for_SMSChargingInformation_sMPriority } from "../CHFChargingDataTypes/SMSChargingInformation-sMPriority.ta.mjs";
import { SMSChargingInformation_messageClass, _decode_SMSChargingInformation_messageClass, _encode_SMSChargingInformation_messageClass, _enum_for_SMSChargingInformation_messageClass } from "../CHFChargingDataTypes/SMSChargingInformation-messageClass.ta.mjs";
import { SMdeliveryReportRequested, _decode_SMdeliveryReportRequested, _encode_SMdeliveryReportRequested, _enum_for_SMdeliveryReportRequested } from "../CHFChargingDataTypes/SMdeliveryReportRequested.ta.mjs";


/**
 * @summary SMSChargingInformation
 * @description
 *
 * This field holds the SMS specific information described in TS 32.274 [34].
 *
 * 3GPP TS 32.298 V20.1.0 table 5.1.5.0.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSChargingInformation ::= SET {
 *    sMSNodeAddress              [0] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    originatorInfo              [1] IMPLICIT OriginatorInfo OPTIONAL,
 *    recipientInfos              [2] IMPLICIT SEQUENCE  OF
 *       RecipientInfos OPTIONAL,
 *    userEquipmentInfo           [3] IMPLICIT SubscriberEquipmentNumber OPTIONAL,
 *    userLocationInformation     [4] IMPLICIT OCTET STRING OPTIONAL,
 *    uETimeZone                  [5] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    rATType                     [6] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    sMSCAddress                 [7] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    eventtimestamp              [8] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    sMDataCodingScheme          [20] IMPLICIT INTEGER OPTIONAL,
 *    sMMessageType               [21] IMPLICIT ENUMERATED {
 *       submission          ( 0 ),
 *       deliveryReport      ( 1 ),
 *       sMServiceRequest    ( 2 ),
 *       delivery            ( 3 ),
 *       t4DeviceTrigger     ( 4 ),
 *       sMDeviceTrigger     ( 5 ) } OPTIONAL,
 *    sMReplyPathRequested        [22] IMPLICIT SMReplyPathRequested OPTIONAL,
 *    sMUserDataHeader            [23] IMPLICIT OCTET STRING OPTIONAL,
 *    sMSStatus                   [24] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    sMDischargeTime             [25] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    sMTotalNumber               [26] IMPLICIT INTEGER OPTIONAL,
 *    sMServiceType               [27] IMPLICIT SMServiceType OPTIONAL,
 *    sMSequenceNumber            [28] IMPLICIT INTEGER OPTIONAL,
 *    sMSResult                   [29] Diagnostics OPTIONAL,
 *    submissionTime              [30] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    sMPriority                  [31] IMPLICIT ENUMERATED {
 *       low         ( 0 ),
 *       normal      ( 1 ),
 *       high        ( 2 ) } OPTIONAL,
 *    messageReference            [32] IMPLICIT OCTET STRING,
 *    messageSize                 [33] IMPLICIT INTEGER OPTIONAL,
 *    messageClass                [34] IMPLICIT ENUMERATED {
 *       personal               ( 0 ),
 *       advertisement          ( 1 ),
 *       information-service    ( 2 ),
 *       auto                   ( 3 ) } OPTIONAL,
 *    sMdeliveryReportRequested   [35] IMPLICIT SMdeliveryReportRequested OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SMSChargingInformation {
    /**
     * @summary `sMSNodeAddress`.
     * @public
     * @readonly
     */
    readonly sMSNodeAddress: OCTET_STRING;
    /**
     * @summary `originatorInfo`.
     * @public
     * @readonly
     */
    readonly originatorInfo: OPTIONAL<OriginatorInfo>;
    /**
     * @summary `recipientInfos`.
     * @public
     * @readonly
     */
    readonly recipientInfos: OPTIONAL<RecipientInfos[]>;
    /**
     * @summary `userEquipmentInfo`.
     * @description
     *
     * This field contains the identification of User Equipment (UE) accessing
     * the 3GPP 5GS, i.e. PEI as specified in clause 6.4 TS 23.003 [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.18.
     *
     * @public
     * @readonly
     */
    readonly userEquipmentInfo: OPTIONAL<SubscriberEquipmentNumber>;
    /**
     * @summary `userLocationInformation`.
     * @description
     *
     * This field contains the User Location as described in TS 29.571 [249].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.15.
     *
     * @public
     * @readonly
     */
    readonly userLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `uETimeZone`.
     * @public
     * @readonly
     */
    readonly uETimeZone: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `rATType`.
     * @description
     *
     * This field contains the Radio Access Technology (RAT) type used, as
     * provided to CHF, it's based on the RatType specified in TS 29.571 [249]
     * with 3GPP RAT Type specified in TS 29.061 [216] added for backwards
     * compatibility.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.17.
     *
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `sMSCAddress`.
     * @public
     * @readonly
     */
    readonly sMSCAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `eventtimestamp`.
     * @public
     * @readonly
     */
    readonly eventtimestamp: OCTET_STRING;
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
    readonly sMMessageType: OPTIONAL<SMSChargingInformation_sMMessageType>;
    /**
     * @summary `sMReplyPathRequested`.
     * @public
     * @readonly
     */
    readonly sMReplyPathRequested: OPTIONAL<SMReplyPathRequested>;
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
     * @summary `sMTotalNumber`.
     * @public
     * @readonly
     */
    readonly sMTotalNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `sMServiceType`.
     * @public
     * @readonly
     */
    readonly sMServiceType: OPTIONAL<SMServiceType>;
    /**
     * @summary `sMSequenceNumber`.
     * @public
     * @readonly
     */
    readonly sMSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `sMSResult`.
     * @public
     * @readonly
     */
    readonly sMSResult: OPTIONAL<Diagnostics>;
    /**
     * @summary `submissionTime`.
     * @public
     * @readonly
     */
    readonly submissionTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sMPriority`.
     * @public
     * @readonly
     */
    readonly sMPriority: OPTIONAL<SMSChargingInformation_sMPriority>;
    /**
     * @summary `messageReference`.
     * @public
     * @readonly
     */
    readonly messageReference: OCTET_STRING;
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
    readonly messageClass: OPTIONAL<SMSChargingInformation_messageClass>;
    /**
     * @summary `sMdeliveryReportRequested`.
     * @public
     * @readonly
     */
    readonly sMdeliveryReportRequested: OPTIONAL<SMdeliveryReportRequested>;

    constructor (
        sMSNodeAddress: OCTET_STRING,
        originatorInfo: OPTIONAL<OriginatorInfo>,
        recipientInfos: OPTIONAL<RecipientInfos[]>,
        userEquipmentInfo: OPTIONAL<SubscriberEquipmentNumber>,
        userLocationInformation: OPTIONAL<OCTET_STRING>,
        uETimeZone: OPTIONAL<OCTET_STRING>,
        rATType: OPTIONAL<INTEGER>,
        sMSCAddress: OPTIONAL<OCTET_STRING>,
        eventtimestamp: OCTET_STRING,
        sMDataCodingScheme: OPTIONAL<INTEGER>,
        sMMessageType: OPTIONAL<SMSChargingInformation_sMMessageType>,
        sMReplyPathRequested: OPTIONAL<SMReplyPathRequested>,
        sMUserDataHeader: OPTIONAL<OCTET_STRING>,
        sMSStatus: OPTIONAL<OCTET_STRING>,
        sMDischargeTime: OPTIONAL<OCTET_STRING>,
        sMTotalNumber: OPTIONAL<INTEGER>,
        sMServiceType: OPTIONAL<SMServiceType>,
        sMSequenceNumber: OPTIONAL<INTEGER>,
        sMSResult: OPTIONAL<Diagnostics>,
        submissionTime: OPTIONAL<OCTET_STRING>,
        sMPriority: OPTIONAL<SMSChargingInformation_sMPriority>,
        messageReference: OCTET_STRING,
        messageSize?: OPTIONAL<INTEGER>,
        messageClass?: OPTIONAL<SMSChargingInformation_messageClass>,
        sMdeliveryReportRequested?: OPTIONAL<SMdeliveryReportRequested>
    ) {
        this.sMSNodeAddress = sMSNodeAddress;
        this.originatorInfo = originatorInfo;
        this.recipientInfos = recipientInfos;
        this.userEquipmentInfo = userEquipmentInfo;
        this.userLocationInformation = userLocationInformation;
        this.uETimeZone = uETimeZone;
        this.rATType = rATType;
        this.sMSCAddress = sMSCAddress;
        this.eventtimestamp = eventtimestamp;
        this.sMDataCodingScheme = sMDataCodingScheme;
        this.sMMessageType = sMMessageType;
        this.sMReplyPathRequested = sMReplyPathRequested;
        this.sMUserDataHeader = sMUserDataHeader;
        this.sMSStatus = sMSStatus;
        this.sMDischargeTime = sMDischargeTime;
        this.sMTotalNumber = sMTotalNumber;
        this.sMServiceType = sMServiceType;
        this.sMSequenceNumber = sMSequenceNumber;
        this.sMSResult = sMSResult;
        this.submissionTime = submissionTime;
        this.sMPriority = sMPriority;
        this.messageReference = messageReference;
        this.messageSize = messageSize;
        this.messageClass = messageClass;
        this.sMdeliveryReportRequested = sMdeliveryReportRequested;
    
        if ((this.sMSNodeAddress.length < 1 || this.sMSNodeAddress.length > 20)) {
            throw new ASN1SizeError("SMSChargingInformation.sMSNodeAddress violates SIZE constraint");
        }
        if (this.uETimeZone !== undefined && (this.uETimeZone.length !== 2)) {
            throw new ASN1SizeError("SMSChargingInformation.uETimeZone violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("SMSChargingInformation.rATType violates INTEGER range");
        }
        if (this.sMSCAddress !== undefined && (this.sMSCAddress.length < 1 || this.sMSCAddress.length > 20)) {
            throw new ASN1SizeError("SMSChargingInformation.sMSCAddress violates SIZE constraint");
        }
        if ((this.eventtimestamp.length !== 9)) {
            throw new ASN1SizeError("SMSChargingInformation.eventtimestamp violates SIZE constraint");
        }
        if (this.sMSStatus !== undefined && (this.sMSStatus.length !== 1)) {
            throw new ASN1SizeError("SMSChargingInformation.sMSStatus violates SIZE constraint");
        }
        if (this.sMDischargeTime !== undefined && (this.sMDischargeTime.length !== 9)) {
            throw new ASN1SizeError("SMSChargingInformation.sMDischargeTime violates SIZE constraint");
        }
        if (this.submissionTime !== undefined && (this.submissionTime.length !== 9)) {
            throw new ASN1SizeError("SMSChargingInformation.submissionTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a SMSChargingInformation
     * @description
     * 
     * This takes an `object` and converts it to a `SMSChargingInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMSChargingInformation`.
     * @returns {SMSChargingInformation}
     */
    public static _from_object (_o: { [_K in keyof (SMSChargingInformation)]: (SMSChargingInformation)[_K] }): SMSChargingInformation {
        return new SMSChargingInformation(_o.sMSNodeAddress, _o.originatorInfo, _o.recipientInfos, _o.userEquipmentInfo, _o.userLocationInformation, _o.uETimeZone, _o.rATType, _o.sMSCAddress, _o.eventtimestamp, _o.sMDataCodingScheme, _o.sMMessageType, _o.sMReplyPathRequested, _o.sMUserDataHeader, _o.sMSStatus, _o.sMDischargeTime, _o.sMTotalNumber, _o.sMServiceType, _o.sMSequenceNumber, _o.sMSResult, _o.submissionTime, _o.sMPriority, _o.messageReference, _o.messageSize, _o.messageClass, _o.sMdeliveryReportRequested);
    }

        /**
         * @summary The enum used as the type of the component `sMMessageType`
         * @public
         * @static
         */

    public static _enum_for_sMMessageType = _enum_for_SMSChargingInformation_sMMessageType;        /**
         * @summary The enum used as the type of the component `sMReplyPathRequested`
         * @public
         * @static
         */

    public static _enum_for_sMReplyPathRequested = _enum_for_SMReplyPathRequested;        /**
         * @summary The enum used as the type of the component `sMPriority`
         * @public
         * @static
         */

    public static _enum_for_sMPriority = _enum_for_SMSChargingInformation_sMPriority;        /**
         * @summary The enum used as the type of the component `messageClass`
         * @public
         * @static
         */

    public static _enum_for_messageClass = _enum_for_SMSChargingInformation_messageClass;        /**
         * @summary The enum used as the type of the component `sMdeliveryReportRequested`
         * @public
         * @static
         */

    public static _enum_for_sMdeliveryReportRequested = _enum_for_SMdeliveryReportRequested;
}

/**
 * @summary The Leading Root Component Types of SMSChargingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMSChargingInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("sMSNodeAddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("originatorInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("recipientInfos", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("userEquipmentInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("uETimeZone", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sMSCAddress", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("eventtimestamp", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("sMDataCodingScheme", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("sMMessageType", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("sMReplyPathRequested", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("sMUserDataHeader", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("sMSStatus", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("sMDischargeTime", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("sMTotalNumber", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("sMServiceType", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("sMSequenceNumber", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("sMSResult", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("submissionTime", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("sMPriority", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("messageReference", false, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("messageSize", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("messageClass", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("sMdeliveryReportRequested", true, $.hasTag(_TagClass.context, 35))
];

/**
 * @summary The Trailing Root Component Types of SMSChargingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMSChargingInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMSChargingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMSChargingInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMSChargingInformation: $.ASN1Decoder<SMSChargingInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMSChargingInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMSChargingInformation (el: _Element): SMSChargingInformation {
    if (!_cached_decoder_for_SMSChargingInformation) { _cached_decoder_for_SMSChargingInformation = function (el: _Element): SMSChargingInformation {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let sMSNodeAddress!: OCTET_STRING;
    let originatorInfo: OPTIONAL<OriginatorInfo>;
    let recipientInfos: OPTIONAL<RecipientInfos[]>;
    let userEquipmentInfo: OPTIONAL<SubscriberEquipmentNumber>;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let uETimeZone: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<INTEGER>;
    let sMSCAddress: OPTIONAL<OCTET_STRING>;
    let eventtimestamp!: OCTET_STRING;
    let sMDataCodingScheme: OPTIONAL<INTEGER>;
    let sMMessageType: OPTIONAL<SMSChargingInformation_sMMessageType>;
    let sMReplyPathRequested: OPTIONAL<SMReplyPathRequested>;
    let sMUserDataHeader: OPTIONAL<OCTET_STRING>;
    let sMSStatus: OPTIONAL<OCTET_STRING>;
    let sMDischargeTime: OPTIONAL<OCTET_STRING>;
    let sMTotalNumber: OPTIONAL<INTEGER>;
    let sMServiceType: OPTIONAL<SMServiceType>;
    let sMSequenceNumber: OPTIONAL<INTEGER>;
    let sMSResult: OPTIONAL<Diagnostics>;
    let submissionTime: OPTIONAL<OCTET_STRING>;
    let sMPriority: OPTIONAL<SMSChargingInformation_sMPriority>;
    let messageReference!: OCTET_STRING;
    let messageSize: OPTIONAL<INTEGER>;
    let messageClass: OPTIONAL<SMSChargingInformation_messageClass>;
    let sMdeliveryReportRequested: OPTIONAL<SMdeliveryReportRequested>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "sMSNodeAddress": (_el: _Element): void => { sMSNodeAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "originatorInfo": (_el: _Element): void => { originatorInfo = $._decode_implicit<OriginatorInfo>(() => _decode_OriginatorInfo)(_el); },
        "recipientInfos": (_el: _Element): void => { recipientInfos = $._decode_implicit<RecipientInfos[]>(() => $._decodeSequenceOf<RecipientInfos>(() => _decode_RecipientInfos))(_el); },
        "userEquipmentInfo": (_el: _Element): void => { userEquipmentInfo = $._decode_implicit<SubscriberEquipmentNumber>(() => _decode_SubscriberEquipmentNumber)(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "uETimeZone": (_el: _Element): void => { uETimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sMSCAddress": (_el: _Element): void => { sMSCAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "eventtimestamp": (_el: _Element): void => { eventtimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sMDataCodingScheme": (_el: _Element): void => { sMDataCodingScheme = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sMMessageType": (_el: _Element): void => { sMMessageType = $._decode_implicit<SMSChargingInformation_sMMessageType>(() => _decode_SMSChargingInformation_sMMessageType)(_el); },
        "sMReplyPathRequested": (_el: _Element): void => { sMReplyPathRequested = $._decode_implicit<SMReplyPathRequested>(() => _decode_SMReplyPathRequested)(_el); },
        "sMUserDataHeader": (_el: _Element): void => { sMUserDataHeader = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sMSStatus": (_el: _Element): void => { sMSStatus = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sMDischargeTime": (_el: _Element): void => { sMDischargeTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sMTotalNumber": (_el: _Element): void => { sMTotalNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sMServiceType": (_el: _Element): void => { sMServiceType = $._decode_implicit<SMServiceType>(() => _decode_SMServiceType)(_el); },
        "sMSequenceNumber": (_el: _Element): void => { sMSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sMSResult": (_el: _Element): void => { sMSResult = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "submissionTime": (_el: _Element): void => { submissionTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sMPriority": (_el: _Element): void => { sMPriority = $._decode_implicit<SMSChargingInformation_sMPriority>(() => _decode_SMSChargingInformation_sMPriority)(_el); },
        "messageReference": (_el: _Element): void => { messageReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "messageSize": (_el: _Element): void => { messageSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "messageClass": (_el: _Element): void => { messageClass = $._decode_implicit<SMSChargingInformation_messageClass>(() => _decode_SMSChargingInformation_messageClass)(_el); },
        "sMdeliveryReportRequested": (_el: _Element): void => { sMdeliveryReportRequested = $._decode_implicit<SMdeliveryReportRequested>(() => _decode_SMdeliveryReportRequested)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SMSChargingInformation,
        _extension_additions_list_spec_for_SMSChargingInformation,
        _root_component_type_list_2_spec_for_SMSChargingInformation,
        undefined,
    );
    return new SMSChargingInformation( /* SET_CONSTRUCTOR_CALL */
        sMSNodeAddress,
        originatorInfo,
        recipientInfos,
        userEquipmentInfo,
        userLocationInformation,
        uETimeZone,
        rATType,
        sMSCAddress,
        eventtimestamp,
        sMDataCodingScheme,
        sMMessageType,
        sMReplyPathRequested,
        sMUserDataHeader,
        sMSStatus,
        sMDischargeTime,
        sMTotalNumber,
        sMServiceType,
        sMSequenceNumber,
        sMSResult,
        submissionTime,
        sMPriority,
        messageReference,
        messageSize,
        messageClass,
        sMdeliveryReportRequested
    );
}; }
    return _cached_decoder_for_SMSChargingInformation(el);
}

let _cached_encoder_for_SMSChargingInformation: $.ASN1Encoder<SMSChargingInformation> | null = null;

/**
 * @summary Encodes a(n) SMSChargingInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSChargingInformation, encoded as an ASN.1 Element.
 */
export
function _encode_SMSChargingInformation (value: SMSChargingInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMSChargingInformation) { _cached_encoder_for_SMSChargingInformation = function (value: SMSChargingInformation, _elGetter: $.ASN1Encoder<SMSChargingInformation>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.sMSNodeAddress, $.BER));
    if (value.originatorInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_OriginatorInfo, $.BER)(value.originatorInfo, $.BER));
    }
    if (value.recipientInfos !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<RecipientInfos>(() => _encode_RecipientInfos, $.BER), $.BER)(value.recipientInfos, $.BER));
    }
    if (value.userEquipmentInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_SubscriberEquipmentNumber, $.BER)(value.userEquipmentInfo, $.BER));
    }
    if (value.userLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.userLocationInformation, $.BER));
    }
    if (value.uETimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.uETimeZone, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.sMSCAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.sMSCAddress, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.eventtimestamp, $.BER));
    if (value.sMDataCodingScheme !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeInteger, $.BER)(value.sMDataCodingScheme, $.BER));
    }
    if (value.sMMessageType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_SMSChargingInformation_sMMessageType, $.BER)(value.sMMessageType, $.BER));
    }
    if (value.sMReplyPathRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_SMReplyPathRequested, $.BER)(value.sMReplyPathRequested, $.BER));
    }
    if (value.sMUserDataHeader !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.sMUserDataHeader, $.BER));
    }
    if (value.sMSStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER)(value.sMSStatus, $.BER));
    }
    if (value.sMDischargeTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeOctetString, $.BER)(value.sMDischargeTime, $.BER));
    }
    if (value.sMTotalNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeInteger, $.BER)(value.sMTotalNumber, $.BER));
    }
    if (value.sMServiceType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => _encode_SMServiceType, $.BER)(value.sMServiceType, $.BER));
    }
    if (value.sMSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => $._encodeInteger, $.BER)(value.sMSequenceNumber, $.BER));
    }
    if (value.sMSResult !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 29, () => _encode_Diagnostics, $.BER)(value.sMSResult, $.BER));
    }
    if (value.submissionTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => $._encodeOctetString, $.BER)(value.submissionTime, $.BER));
    }
    if (value.sMPriority !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 31, () => _encode_SMSChargingInformation_sMPriority, $.BER)(value.sMPriority, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 32, () => $._encodeOctetString, $.BER)(value.messageReference, $.BER));
    if (value.messageSize !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => $._encodeInteger, $.BER)(value.messageSize, $.BER));
    }
    if (value.messageClass !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => _encode_SMSChargingInformation_messageClass, $.BER)(value.messageClass, $.BER));
    }
    if (value.sMdeliveryReportRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 35, () => _encode_SMdeliveryReportRequested, $.BER)(value.sMdeliveryReportRequested, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_SMSChargingInformation(value, elGetter);
}


/* eslint-enable */
