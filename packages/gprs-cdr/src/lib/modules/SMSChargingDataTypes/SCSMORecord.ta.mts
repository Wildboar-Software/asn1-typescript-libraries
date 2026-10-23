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
import { OriginatorInfo, _decode_OriginatorInfo, _encode_OriginatorInfo } from "../SMSChargingDataTypes/OriginatorInfo.ta.mjs";
import { RecipientInfo, _decode_RecipientInfo, _encode_RecipientInfo } from "../SMSChargingDataTypes/RecipientInfo.ta.mjs";
import { MessageClass, _decode_MessageClass, _encode_MessageClass, _enum_for_MessageClass } from "../SMSChargingDataTypes/MessageClass.ta.mjs";
import { SMMessageType, _decode_SMMessageType, _encode_SMMessageType, _enum_for_SMMessageType } from "../SMSChargingDataTypes/SMMessageType.ta.mjs";
import { SMSResult, _decode_SMSResult, _encode_SMSResult } from "../SMSChargingDataTypes/SMSResult.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../SMSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary SCSMORecord
 * @description
 *
 * SC-SMO CDR: SMS-SC record for an originated short message. The CDF creates
 * it when the SMS-SC reports reception of an SMS Submit from a UE or a third
 * party application, successful or not (clause 5.2.2.1). When the originator
 * is an application, sending that application's identity lets the CDF charge
 * the recipient UE (the termination scenario), or charge both parties.
 *
 * 3GPP TS 32.274 V19.1.0 clause 6.1.3.3, table 6.1.3.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCSMORecord ::= SET {
 *    recordType                  [0] IMPLICIT RecordType,
 *    sMSNodeAddress              [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    originatorInfo              [2] IMPLICIT OriginatorInfo OPTIONAL,
 *    recipientInfo               [3] IMPLICIT SEQUENCE  OF
 *       RecipientInfo OPTIONAL,
 *    servedIMEI                  [4] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
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
 *    userLocationInfo            [16] IMPLICIT OCTET STRING OPTIONAL,
 *    rATType                     [17] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    uETimeZone                  [18] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    sMSResult                   [19] SMSResult OPTIONAL,
 *    localSequenceNumber         [22] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions            [23] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SCSMORecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * SMS-SC SMS originated.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `sMSNodeAddress`.
     * @description
     *
     * Address, for example E.164, of the SMS-SC that sent the Charging Data
     * Request used to produce this record (SMSC Address).
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly sMSNodeAddress: OCTET_STRING;
    /**
     * @summary `originatorInfo`.
     * @description
     *
     * Originator of the short message. The IMSI, when available, is that of
     * the subscriber who sent a mobile-originated message, and the MSISDN is
     * that subscriber's primary MSISDN.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly originatorInfo: OPTIONAL<OriginatorInfo>;
    /**
     * @summary `recipientInfo`.
     * @description
     *
     * Recipients of the short message. Several occurrences are allowed when
     * several recipients share this charged event and every other charging
     * field is identical.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly recipientInfo: OPTIONAL<RecipientInfo[]>;
    /**
     * @summary `servedIMEI`.
     * @description
     *
     * IMEI or IMEISV of the UE, if available.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly servedIMEI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `eventtimestamp`.
     * @description
     *
     * When the submitted short message arrived at the SMS-SC. Bound to
     * Submission Time (table 6.4.1), which is taken from
     * TP-Service-Center-Time-Stamp (TP-SCTS) in TS 23.040. On a refund or
     * retransmission, the timestamp is that of the original submitted short
     * message (table 6.3.1.1.1).
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly eventtimestamp: OCTET_STRING;
    /**
     * @summary `messageReference`.
     * @description
     *
     * Identity of the short message in the SMS node, for the entity that
     * submitted it. This is the TP-Message-Reference (TP-MR) of TS 23.040.
     * Mandatory on this CDR.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
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
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
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
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
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
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
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
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly messageClass: OPTIONAL<MessageClass>;
    /**
     * @summary `sMdeliveryReportRequested`.
     * @description
     *
     * Whether the originator requested a delivery report, from
     * TP-Status-Report-Request (TP-SRR) in TS 23.040.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
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
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
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
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
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
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
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
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly sMUserDataHeader: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `userLocationInfo`.
     * @description
     *
     * Location of the subscriber during a mobile-originated SMS transaction,
     * if available, as 3GPP-User-Location-Info in TS 29.061. Applicable values
     * are NCGI, 5GS TAI, 5GS TAI and NCGI, NG-RAN Node ID, and 5GS TAI and
     * NG-RAN Node ID.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
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
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
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
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly uETimeZone: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sMSResult`.
     * @description
     *
     * Result of the attempted short-message submission, if unsuccessful.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly sMSResult: OPTIONAL<SMSResult>;
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
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;

    constructor (
        recordType: RecordType,
        sMSNodeAddress: OCTET_STRING,
        originatorInfo: OPTIONAL<OriginatorInfo>,
        recipientInfo: OPTIONAL<RecipientInfo[]>,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        eventtimestamp: OCTET_STRING,
        messageReference: OCTET_STRING,
        sMTotalNumber?: OPTIONAL<INTEGER>,
        sMSequenceNumber?: OPTIONAL<INTEGER>,
        messageSize?: OPTIONAL<INTEGER>,
        messageClass?: OPTIONAL<MessageClass>,
        sMdeliveryReportRequested?: OPTIONAL<BOOLEAN>,
        sMDataCodingScheme?: OPTIONAL<INTEGER>,
        sMMessageType?: OPTIONAL<SMMessageType>,
        sMReplyPathRequested?: OPTIONAL<NULL>,
        sMUserDataHeader?: OPTIONAL<OCTET_STRING>,
        userLocationInfo?: OPTIONAL<OCTET_STRING>,
        rATType?: OPTIONAL<INTEGER>,
        uETimeZone?: OPTIONAL<OCTET_STRING>,
        sMSResult?: OPTIONAL<SMSResult>,
        localSequenceNumber?: OPTIONAL<INTEGER>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.sMSNodeAddress = sMSNodeAddress;
        this.originatorInfo = originatorInfo;
        this.recipientInfo = recipientInfo;
        this.servedIMEI = servedIMEI;
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
        this.userLocationInfo = userLocationInfo;
        this.rATType = rATType;
        this.uETimeZone = uETimeZone;
        this.sMSResult = sMSResult;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
    
        if ((this.sMSNodeAddress.length < 1 || this.sMSNodeAddress.length > 20)) {
            throw new ASN1SizeError("SCSMORecord.sMSNodeAddress violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("SCSMORecord.servedIMEI violates SIZE constraint");
        }
        if ((this.eventtimestamp.length !== 9)) {
            throw new ASN1SizeError("SCSMORecord.eventtimestamp violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("SCSMORecord.rATType violates INTEGER range");
        }
        if (this.uETimeZone !== undefined && (this.uETimeZone.length !== 2)) {
            throw new ASN1SizeError("SCSMORecord.uETimeZone violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("SCSMORecord.localSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a SCSMORecord
     * @description
     * 
     * This takes an `object` and converts it to a `SCSMORecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCSMORecord`.
     * @returns {SCSMORecord}
     */
    public static _from_object (_o: { [_K in keyof (SCSMORecord)]: (SCSMORecord)[_K] }): SCSMORecord {
        return new SCSMORecord(_o.recordType, _o.sMSNodeAddress, _o.originatorInfo, _o.recipientInfo, _o.servedIMEI, _o.eventtimestamp, _o.messageReference, _o.sMTotalNumber, _o.sMSequenceNumber, _o.messageSize, _o.messageClass, _o.sMdeliveryReportRequested, _o.sMDataCodingScheme, _o.sMMessageType, _o.sMReplyPathRequested, _o.sMUserDataHeader, _o.userLocationInfo, _o.rATType, _o.uETimeZone, _o.sMSResult, _o.localSequenceNumber, _o.recordExtensions);
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
 * @summary The Leading Root Component Types of SCSMORecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCSMORecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sMSNodeAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("originatorInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("recipientInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 4)),
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
    new $.ComponentSpec("userLocationInfo", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("uETimeZone", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("sMSResult", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 23))
];

/**
 * @summary The Trailing Root Component Types of SCSMORecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCSMORecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCSMORecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCSMORecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCSMORecord: $.ASN1Decoder<SCSMORecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCSMORecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCSMORecord (el: _Element): SCSMORecord {
    if (!_cached_decoder_for_SCSMORecord) { _cached_decoder_for_SCSMORecord = function (el: _Element): SCSMORecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let sMSNodeAddress!: OCTET_STRING;
    let originatorInfo: OPTIONAL<OriginatorInfo>;
    let recipientInfo: OPTIONAL<RecipientInfo[]>;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
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
    let userLocationInfo: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<INTEGER>;
    let uETimeZone: OPTIONAL<OCTET_STRING>;
    let sMSResult: OPTIONAL<SMSResult>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "sMSNodeAddress": (_el: _Element): void => { sMSNodeAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "originatorInfo": (_el: _Element): void => { originatorInfo = $._decode_implicit<OriginatorInfo>(() => _decode_OriginatorInfo)(_el); },
        "recipientInfo": (_el: _Element): void => { recipientInfo = $._decode_implicit<RecipientInfo[]>(() => $._decodeSequenceOf<RecipientInfo>(() => _decode_RecipientInfo))(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
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
        "userLocationInfo": (_el: _Element): void => { userLocationInfo = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "uETimeZone": (_el: _Element): void => { uETimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sMSResult": (_el: _Element): void => { sMSResult = $._decode_explicit<SMSResult>(() => _decode_SMSResult)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SCSMORecord,
        _extension_additions_list_spec_for_SCSMORecord,
        _root_component_type_list_2_spec_for_SCSMORecord,
        undefined,
    );
    return new SCSMORecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        sMSNodeAddress,
        originatorInfo,
        recipientInfo,
        servedIMEI,
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
        userLocationInfo,
        rATType,
        uETimeZone,
        sMSResult,
        localSequenceNumber,
        recordExtensions
    );
}; }
    return _cached_decoder_for_SCSMORecord(el);
}

let _cached_encoder_for_SCSMORecord: $.ASN1Encoder<SCSMORecord> | null = null;

/**
 * @summary Encodes a(n) SCSMORecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCSMORecord, encoded as an ASN.1 Element.
 */
export
function _encode_SCSMORecord (value: SCSMORecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCSMORecord) { _cached_encoder_for_SCSMORecord = function (value: SCSMORecord, _elGetter: $.ASN1Encoder<SCSMORecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.sMSNodeAddress, $.BER));
    if (value.originatorInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_OriginatorInfo, $.BER)(value.originatorInfo, $.BER));
    }
    if (value.recipientInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<RecipientInfo>(() => _encode_RecipientInfo, $.BER), $.BER)(value.recipientInfo, $.BER));
    }
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
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
    if (value.userLocationInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.userLocationInfo, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.uETimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.uETimeZone, $.BER));
    }
    if (value.sMSResult !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 19, () => _encode_SMSResult, $.BER)(value.sMSResult, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_SCSMORecord(value, elGetter);
}


/* eslint-enable */
