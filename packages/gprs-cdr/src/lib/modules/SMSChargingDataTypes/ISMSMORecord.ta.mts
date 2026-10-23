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
import { OriginatorInfo, _decode_OriginatorInfo, _encode_OriginatorInfo } from "../SMSChargingDataTypes/OriginatorInfo.ta.mjs";
import { RecipientInfo, _decode_RecipientInfo, _encode_RecipientInfo } from "../SMSChargingDataTypes/RecipientInfo.ta.mjs";
import { SubscriberEquipmentNumber, _decode_SubscriberEquipmentNumber, _encode_SubscriberEquipmentNumber } from "../SMSChargingDataTypes/SubscriberEquipmentNumber.ta.mjs";
import { MessageClass, _decode_MessageClass, _encode_MessageClass, _enum_for_MessageClass } from "../SMSChargingDataTypes/MessageClass.ta.mjs";
import { SMMessageType, _decode_SMMessageType, _encode_SMMessageType, _enum_for_SMMessageType } from "../SMSChargingDataTypes/SMMessageType.ta.mjs";
import { SMSResult, _decode_SMSResult, _encode_SMSResult } from "../SMSChargingDataTypes/SMSResult.ta.mjs";
import { PDPAddress, _decode_PDPAddress, _encode_PDPAddress } from "../SMSChargingDataTypes/PDPAddress.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../SMSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary ISMSMORecord
 * @description
 *
 * ISM-SMO CDR: IP-SM-GW record for an originated short message. Subfields that
 * table 6.1.3.7.1 does not describe itself are those of the SC-SMO CDR.
 * Offline flows for the IP-SM-GW are the SMS-node flows of clause 5.2.2. For
 * IMS interworking the IP-SM-GW may split one SIP MESSAGE into one or more
 * short messages (clause 5.3.2.8).
 *
 * 3GPP TS 32.274 V19.1.0 clause 6.1.3.7, table 6.1.3.7.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISMSMORecord ::= SET {
 *    recordType                  [0] IMPLICIT RecordType,
 *    sMSNodeAddress              [1] NodeAddress,
 *    originatorInfo              [2] IMPLICIT OriginatorInfo OPTIONAL,
 *    recipientInfo               [3] IMPLICIT SEQUENCE  OF
 *       RecipientInfo OPTIONAL,
 *    subscriberEquipmentNumber   [4] IMPLICIT SubscriberEquipmentNumber OPTIONAL,
 *    eventtimestamp              [5] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    messageReference            [6] IMPLICIT OCTET STRING,
 *    sMTotalNumber               [7] IMPLICIT INTEGER OPTIONAL,
 *    sMSequenceNumber            [8] IMPLICIT INTEGER OPTIONAL,
 *    messageSize                 [9] IMPLICIT INTEGER OPTIONAL,
 *    messageClass                [10] IMPLICIT MessageClass OPTIONAL,
 *    sMdeliveryReportRequested   [11] IMPLICIT BOOLEAN OPTIONAL,
 *    sMDataCodingScheme          [12] IMPLICIT INTEGER OPTIONAL,
 *    sMMessageType               [13] IMPLICIT SMMessageType OPTIONAL,
 *    sMReplyPathRequested        [14] IMPLICIT NULL OPTIONAL,
 *    sMUserDataHeader            [15] IMPLICIT OCTET STRING OPTIONAL,
 *    sMSResult                   [16] SMSResult OPTIONAL,
 *    userLocationInfo            [17] IMPLICIT OCTET STRING OPTIONAL,
 *    rATType                     [18] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    uETimeZone                  [19] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    pDPAddress                  [20] PDPAddress OPTIONAL,
 *    session-Id                  [21] IMPLICIT GraphicString OPTIONAL,
 *    numberPortabilityRouting    [22] IMPLICIT GraphicString OPTIONAL,
 *    carrierSelectRouting        [23] IMPLICIT GraphicString OPTIONAL,
 *    localSequenceNumber         [24] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions            [25] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ISMSMORecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * IP-SM-GW SMS originated.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `sMSNodeAddress`.
     * @description
     *
     * Address of the IP-SM-GW that sent the Charging Data Request used to
     * produce this record. An IP address or a domain name.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly sMSNodeAddress: NodeAddress;
    /**
     * @summary `originatorInfo`.
     * @description
     *
     * Originator of the short message. Subfields are those of the SC-SMO CDR
     * (table 6.1.3.3.1).
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly originatorInfo: OPTIONAL<OriginatorInfo>;
    /**
     * @summary `recipientInfo`.
     * @description
     *
     * Recipients of the short message. Subfields are those of the SC-SMO CDR
     * (table 6.1.3.3.1). Several occurrences are allowed on the same
     * conditions as that CDR.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly recipientInfo: OPTIONAL<RecipientInfo[]>;
    /**
     * @summary `subscriberEquipmentNumber`.
     * @description
     *
     * Identification of the terminal. In the service information this is User
     * Equipment Info, with IMEI or IMEISV given as examples (table 6.3.1.1.1).
     * TS 32.274 does not define the equipment-number type codes.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly subscriberEquipmentNumber: OPTIONAL<SubscriberEquipmentNumber>;
    /**
     * @summary `eventtimestamp`.
     * @description
     *
     * When the submitted short message arrived at the SMS node. Described by
     * reference to table 6.1.3.3.1.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly eventtimestamp: OCTET_STRING;
    /**
     * @summary `messageReference`.
     * @description
     *
     * TP-Message-Reference (TP-MR) of TS 23.040. Described by reference to
     * table 6.1.3.3.1, where it is mandatory.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly messageReference: OCTET_STRING;
    /**
     * @summary `sMTotalNumber`.
     * @description
     *
     * Total number of short messages when this one belongs to a concatenated
     * short message. Present only in that case. Maps to Number of Messages
     * Sent, which may instead be the number of SMSs an IMS application sent.
     *
     * Clause 5.1.2 requires concatenated-message information so the charging
     * system can apply the right model. That system may have to be stateful.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly sMTotalNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `sMSequenceNumber`.
     * @description
     *
     * Sequence number of this short message inside a concatenated short
     * message. Present only in that case.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly sMSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `messageSize`.
     * @description
     *
     * Length of the user-data part of the short message: TP-User-Data-Length
     * (TP-UDL) in TS 23.040.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly messageSize: OPTIONAL<INTEGER>;
    /**
     * @summary `messageClass`.
     * @description
     *
     * Message class, used as defined in TS 32.270. Which value is selected for
     * a transaction is implementation dependent. TS 32.274 does not define the
     * enumerated values.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly messageClass: OPTIONAL<MessageClass>;
    /**
     * @summary `sMdeliveryReportRequested`.
     * @description
     *
     * Whether the originator requested a delivery report, from TP-SRR.
     * Described by reference to table 6.1.3.3.1.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly sMdeliveryReportRequested: OPTIONAL<BOOLEAN>;
    /**
     * @summary `sMDataCodingScheme`.
     * @description
     *
     * Data coding scheme used within the short message, taken from the TP-DCS
     * header.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly sMDataCodingScheme: OPTIONAL<INTEGER>;
    /**
     * @summary `sMMessageType`.
     * @description
     *
     * The message that triggered generation of this charging information.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly sMMessageType: OPTIONAL<SMMessageType>;
    /**
     * @summary `sMReplyPathRequested`.
     * @description
     *
     * Indication that a reply to the original short message shall follow the
     * same path, as identified by the TP-Reply-Path (TP-RP) flag.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly sMReplyPathRequested: OPTIONAL<NULL>;
    /**
     * @summary `sMUserDataHeader`.
     * @description
     *
     * User-data header extracted from the user data of the short message.
     * TP-UDH is specified in TS 23.040.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly sMUserDataHeader: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sMSResult`.
     * @description
     *
     * Result of the attempted short-message submission, if unsuccessful.
     * Described by reference to table 6.1.3.3.1.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly sMSResult: OPTIONAL<SMSResult>;
    /**
     * @summary `userLocationInfo`.
     * @description
     *
     * Location of the subscriber during a mobile-originated SMS transaction,
     * if available, as 3GPP-User-Location-Info in TS 29.061. Applicable values
     * are NCGI, 5GS TAI, 5GS TAI and NCGI, NG-RAN Node ID, and 5GS TAI and
     * NG-RAN Node ID.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly userLocationInfo: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `rATType`.
     * @description
     *
     * Radio access technology used for a mobile-originated SMS transaction, if
     * available. In the service information this is 3GPP-RAT-Type of TS
     * 29.061, and the value NG-RAN applies (table 6.3.1.1.1).
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `uETimeZone`.
     * @description
     *
     * Offset between universal time and local time, in steps of 15 minutes, of
     * where the UE currently resides. Included for a mobile-originated
     * message, if available.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly uETimeZone: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `pDPAddress`.
     * @description
     *
     * IP address used by the subscriber for the SMS transaction. Included when
     * the SMS node is the IP-SM-GW (table 6.3.1.1.1).
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly pDPAddress: OPTIONAL<PDPAddress>;
    /**
     * @summary `session_Id`.
     * @description
     *
     * Session identifier. For a SIP session this is the SIP Call ID.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly session_Id: OPTIONAL<GraphicString>;
    /**
     * @summary `numberPortabilityRouting`.
     * @description
     *
     * Number-portability information after the DNS/ENUM request from the
     * S-CSCF in the originator user's home network.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly numberPortabilityRouting: OPTIONAL<GraphicString>;
    /**
     * @summary `carrierSelectRouting`.
     * @description
     *
     * Carrier-select information after the DNS/ENUM request from the S-CSCF in
     * the originator user's home network.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly carrierSelectRouting: OPTIONAL<GraphicString>;
    /**
     * @summary `localSequenceNumber`.
     * @description
     *
     * TS 32.274 V19.1.0 clause 6.1.3 does not list this field. TS 32.298
     * clause 5.1.4.6.2 describes it as a unique record number created by this
     * node. The number is allocated sequentially across CDR types, is unique
     * within the CDF, and can be used to detect missing records.
     *
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * Network- or manufacturer-specific extensions to the record, when
     * available.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.7.1.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;

    constructor (
        recordType: RecordType,
        sMSNodeAddress: NodeAddress,
        originatorInfo: OPTIONAL<OriginatorInfo>,
        recipientInfo: OPTIONAL<RecipientInfo[]>,
        subscriberEquipmentNumber: OPTIONAL<SubscriberEquipmentNumber>,
        eventtimestamp: OCTET_STRING,
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
        sMSResult: OPTIONAL<SMSResult>,
        userLocationInfo: OPTIONAL<OCTET_STRING>,
        rATType: OPTIONAL<INTEGER>,
        uETimeZone: OPTIONAL<OCTET_STRING>,
        pDPAddress: OPTIONAL<PDPAddress>,
        session_Id: OPTIONAL<GraphicString>,
        numberPortabilityRouting: OPTIONAL<GraphicString>,
        carrierSelectRouting: OPTIONAL<GraphicString>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.sMSNodeAddress = sMSNodeAddress;
        this.originatorInfo = originatorInfo;
        this.recipientInfo = recipientInfo;
        this.subscriberEquipmentNumber = subscriberEquipmentNumber;
        this.eventtimestamp = eventtimestamp;
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
        this.sMSResult = sMSResult;
        this.userLocationInfo = userLocationInfo;
        this.rATType = rATType;
        this.uETimeZone = uETimeZone;
        this.pDPAddress = pDPAddress;
        this.session_Id = session_Id;
        this.numberPortabilityRouting = numberPortabilityRouting;
        this.carrierSelectRouting = carrierSelectRouting;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
    
        if ((this.eventtimestamp.length !== 9)) {
            throw new ASN1SizeError("ISMSMORecord.eventtimestamp violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("ISMSMORecord.rATType violates INTEGER range");
        }
        if (this.uETimeZone !== undefined && (this.uETimeZone.length !== 2)) {
            throw new ASN1SizeError("ISMSMORecord.uETimeZone violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("ISMSMORecord.localSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a ISMSMORecord
     * @description
     * 
     * This takes an `object` and converts it to a `ISMSMORecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ISMSMORecord`.
     * @returns {ISMSMORecord}
     */
    public static _from_object (_o: { [_K in keyof (ISMSMORecord)]: (ISMSMORecord)[_K] }): ISMSMORecord {
        return new ISMSMORecord(_o.recordType, _o.sMSNodeAddress, _o.originatorInfo, _o.recipientInfo, _o.subscriberEquipmentNumber, _o.eventtimestamp, _o.messageReference, _o.sMTotalNumber, _o.sMSequenceNumber, _o.messageSize, _o.messageClass, _o.sMdeliveryReportRequested, _o.sMDataCodingScheme, _o.sMMessageType, _o.sMReplyPathRequested, _o.sMUserDataHeader, _o.sMSResult, _o.userLocationInfo, _o.rATType, _o.uETimeZone, _o.pDPAddress, _o.session_Id, _o.numberPortabilityRouting, _o.carrierSelectRouting, _o.localSequenceNumber, _o.recordExtensions);
    }

        /**
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
 * @summary The Leading Root Component Types of ISMSMORecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ISMSMORecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sMSNodeAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("originatorInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("recipientInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("subscriberEquipmentNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("eventtimestamp", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("messageReference", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sMTotalNumber", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sMSequenceNumber", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("messageSize", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("messageClass", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("sMdeliveryReportRequested", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("sMDataCodingScheme", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("sMMessageType", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("sMReplyPathRequested", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("sMUserDataHeader", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("sMSResult", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("userLocationInfo", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("uETimeZone", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("pDPAddress", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("session-Id", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("numberPortabilityRouting", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("carrierSelectRouting", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 25))
];

/**
 * @summary The Trailing Root Component Types of ISMSMORecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ISMSMORecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ISMSMORecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ISMSMORecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ISMSMORecord: $.ASN1Decoder<ISMSMORecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ISMSMORecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ISMSMORecord (el: _Element): ISMSMORecord {
    if (!_cached_decoder_for_ISMSMORecord) { _cached_decoder_for_ISMSMORecord = function (el: _Element): ISMSMORecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let sMSNodeAddress!: NodeAddress;
    let originatorInfo: OPTIONAL<OriginatorInfo>;
    let recipientInfo: OPTIONAL<RecipientInfo[]>;
    let subscriberEquipmentNumber: OPTIONAL<SubscriberEquipmentNumber>;
    let eventtimestamp!: OCTET_STRING;
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
    let sMSResult: OPTIONAL<SMSResult>;
    let userLocationInfo: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<INTEGER>;
    let uETimeZone: OPTIONAL<OCTET_STRING>;
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
        "originatorInfo": (_el: _Element): void => { originatorInfo = $._decode_implicit<OriginatorInfo>(() => _decode_OriginatorInfo)(_el); },
        "recipientInfo": (_el: _Element): void => { recipientInfo = $._decode_implicit<RecipientInfo[]>(() => $._decodeSequenceOf<RecipientInfo>(() => _decode_RecipientInfo))(_el); },
        "subscriberEquipmentNumber": (_el: _Element): void => { subscriberEquipmentNumber = $._decode_implicit<SubscriberEquipmentNumber>(() => _decode_SubscriberEquipmentNumber)(_el); },
        "eventtimestamp": (_el: _Element): void => { eventtimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
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
        "sMSResult": (_el: _Element): void => { sMSResult = $._decode_explicit<SMSResult>(() => _decode_SMSResult)(_el); },
        "userLocationInfo": (_el: _Element): void => { userLocationInfo = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "uETimeZone": (_el: _Element): void => { uETimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pDPAddress": (_el: _Element): void => { pDPAddress = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "session-Id": (_el: _Element): void => { session_Id = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "numberPortabilityRouting": (_el: _Element): void => { numberPortabilityRouting = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "carrierSelectRouting": (_el: _Element): void => { carrierSelectRouting = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ISMSMORecord,
        _extension_additions_list_spec_for_ISMSMORecord,
        _root_component_type_list_2_spec_for_ISMSMORecord,
        undefined,
    );
    return new ISMSMORecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        sMSNodeAddress,
        originatorInfo,
        recipientInfo,
        subscriberEquipmentNumber,
        eventtimestamp,
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
        sMSResult,
        userLocationInfo,
        rATType,
        uETimeZone,
        pDPAddress,
        session_Id,
        numberPortabilityRouting,
        carrierSelectRouting,
        localSequenceNumber,
        recordExtensions
    );
}; }
    return _cached_decoder_for_ISMSMORecord(el);
}

let _cached_encoder_for_ISMSMORecord: $.ASN1Encoder<ISMSMORecord> | null = null;

/**
 * @summary Encodes a(n) ISMSMORecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISMSMORecord, encoded as an ASN.1 Element.
 */
export
function _encode_ISMSMORecord (value: ISMSMORecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ISMSMORecord) { _cached_encoder_for_ISMSMORecord = function (value: ISMSMORecord, _elGetter: $.ASN1Encoder<ISMSMORecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_NodeAddress, $.BER)(value.sMSNodeAddress, $.BER));
    if (value.originatorInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_OriginatorInfo, $.BER)(value.originatorInfo, $.BER));
    }
    if (value.recipientInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<RecipientInfo>(() => _encode_RecipientInfo, $.BER), $.BER)(value.recipientInfo, $.BER));
    }
    if (value.subscriberEquipmentNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_SubscriberEquipmentNumber, $.BER)(value.subscriberEquipmentNumber, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.eventtimestamp, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.messageReference, $.BER));
    if (value.sMTotalNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.sMTotalNumber, $.BER));
    }
    if (value.sMSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.sMSequenceNumber, $.BER));
    }
    if (value.messageSize !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.messageSize, $.BER));
    }
    if (value.messageClass !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_MessageClass, $.BER)(value.messageClass, $.BER));
    }
    if (value.sMdeliveryReportRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeBoolean, $.BER)(value.sMdeliveryReportRequested, $.BER));
    }
    if (value.sMDataCodingScheme !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER)(value.sMDataCodingScheme, $.BER));
    }
    if (value.sMMessageType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_SMMessageType, $.BER)(value.sMMessageType, $.BER));
    }
    if (value.sMReplyPathRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeNull, $.BER)(value.sMReplyPathRequested, $.BER));
    }
    if (value.sMUserDataHeader !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeOctetString, $.BER)(value.sMUserDataHeader, $.BER));
    }
    if (value.sMSResult !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 16, () => _encode_SMSResult, $.BER)(value.sMSResult, $.BER));
    }
    if (value.userLocationInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.userLocationInfo, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.uETimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER)(value.uETimeZone, $.BER));
    }
    if (value.pDPAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 20, () => _encode_PDPAddress, $.BER)(value.pDPAddress, $.BER));
    }
    if (value.session_Id !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeGraphicString, $.BER)(value.session_Id, $.BER));
    }
    if (value.numberPortabilityRouting !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeGraphicString, $.BER)(value.numberPortabilityRouting, $.BER));
    }
    if (value.carrierSelectRouting !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeGraphicString, $.BER)(value.carrierSelectRouting, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_ISMSMORecord(value, elGetter);
}


/* eslint-enable */
