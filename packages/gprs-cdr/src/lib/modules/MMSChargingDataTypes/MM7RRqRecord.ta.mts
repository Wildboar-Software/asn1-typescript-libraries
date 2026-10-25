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
import { type RecordType, _decode_RecordType, _encode_RecordType } from "../MMSChargingDataTypes/RecordType.ta.mjs";
import { MMSRSAddress, _decode_MMSRSAddress, _encode_MMSRSAddress } from "../MMSChargingDataTypes/MMSRSAddress.ta.mjs";
import { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";
import { MMStatusCodeType, _decode_MMStatusCodeType, _encode_MMStatusCodeType, _enum_for_MMStatusCodeType } from "../MMSChargingDataTypes/MMStatusCodeType.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary MM7RRqRecord
 * @description
 *
 * MM7 Read Reply Report Request record (MM7RRq-CDR).
 *
 * If enabled, a MM7 Read Reply Report Request MM7RRq-CDR shall be produced
 * in the MMS R/S if and when the Recipient MMS R/S sends an MM7_read
 * reply_report.REQ to the MMS VASP.
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
 * 3GPP TS 32.270 V19.0.0 clause 6.1.5.8.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MM7RRqRecord ::= SET {
 *    recordType              [0] IMPLICIT RecordType,
 *    recipientMmsRSAddress   [1] IMPLICIT MMSRSAddress OPTIONAL,
 *    messageID               [2] IMPLICIT OCTET STRING,
 *    originatorAddress       [3] IMPLICIT MMSAgentAddress OPTIONAL,
 *    recipientAddress        [4] IMPLICIT MMSAgentAddress,
 *    mmDateAndTime           [5] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    readStatus              [6] IMPLICIT MMStatusCodeType,
 *    mmStatusText            [7] IMPLICIT OCTET STRING OPTIONAL,
 *    recordTimeStamp         [8] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    localSequenceNumber     [9] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions        [10] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MM7RRqRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * The field identifies the type of the record, see TS 32.250 [10].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.42.
     *
     * Category M. MM7 Read reply report Requestrecord.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.8.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `recipientMmsRSAddress`.
     * @description
     *
     * Category OM. IP address or domain name of the Recipient MMS R/S.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.8.
     *
     * @public
     * @readonly
     */
    readonly recipientMmsRSAddress: OPTIONAL<MMSRSAddress>;
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.8.
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
     * Category OM. The address of the VAS that submitted the original MM.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.8.
     *
     * @public
     * @readonly
     */
    readonly originatorAddress: OPTIONAL<MMSAgentAddress>;
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.8.
     *
     * @public
     * @readonly
     */
    readonly recipientAddress: MMSAgentAddress;
    /**
     * @summary `mmDateAndTime`.
     * @description
     *
     * The date and time field contains the time stamp relevant for the handling
     * of the MM by the recipient MMS Relay/ Server (read, deleted without being
     * read, etc.). The time-stamp includes at a minimum: date, hour, minute and
     * second.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.26.
     *
     * Category M. Date and time the MM was handled (retrieved, expired,
     * rejected, etc.) as specified in the MM7_Read reply_report.REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.8.
     *
     * @public
     * @readonly
     */
    readonly mmDateAndTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `readStatus`.
     * @description
     *
     * See TS 23.140 [206]: Status of the MM, e.g. Read, Deleted without being
     * read.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.36.
     *
     * Category M. The status of the MM (e.g. Read, deleted without being read,
     * etc.) as sent in the MM7_read_reply_report.REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.8.
     *
     * @public
     * @readonly
     */
    readonly readStatus: MMStatusCodeType;
    /**
     * @summary `mmStatusText`.
     * @description
     *
     * Category OC. This field includes the status text as received in the
     * MM7_read reply_report.RES corresponding to the Read Status. Present only
     * if provided in the MM7_read reply_report.REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.8.
     *
     * @public
     * @readonly
     */
    readonly mmStatusText: OPTIONAL<OCTET_STRING>;
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.8.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.8.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.8.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;

    constructor (
        recordType: RecordType,
        recipientMmsRSAddress: OPTIONAL<MMSRSAddress>,
        messageID: OCTET_STRING,
        originatorAddress: OPTIONAL<MMSAgentAddress>,
        recipientAddress: MMSAgentAddress,
        mmDateAndTime: OPTIONAL<OCTET_STRING>,
        readStatus: MMStatusCodeType,
        mmStatusText?: OPTIONAL<OCTET_STRING>,
        recordTimeStamp?: OPTIONAL<OCTET_STRING>,
        localSequenceNumber?: OPTIONAL<INTEGER>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.recipientMmsRSAddress = recipientMmsRSAddress;
        this.messageID = messageID;
        this.originatorAddress = originatorAddress;
        this.recipientAddress = recipientAddress;
        this.mmDateAndTime = mmDateAndTime;
        this.readStatus = readStatus;
        this.mmStatusText = mmStatusText;
        this.recordTimeStamp = recordTimeStamp;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
    
        if (this.mmDateAndTime !== undefined && (this.mmDateAndTime.length !== 9)) {
            throw new ASN1SizeError("MM7RRqRecord.mmDateAndTime violates SIZE constraint");
        }
        if (this.recordTimeStamp !== undefined && (this.recordTimeStamp.length !== 9)) {
            throw new ASN1SizeError("MM7RRqRecord.recordTimeStamp violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("MM7RRqRecord.localSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a MM7RRqRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MM7RRqRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MM7RRqRecord`.
     * @returns {MM7RRqRecord}
     */
    public static _from_object (_o: { [_K in keyof (MM7RRqRecord)]: (MM7RRqRecord)[_K] }): MM7RRqRecord {
        return new MM7RRqRecord(_o.recordType, _o.recipientMmsRSAddress, _o.messageID, _o.originatorAddress, _o.recipientAddress, _o.mmDateAndTime, _o.readStatus, _o.mmStatusText, _o.recordTimeStamp, _o.localSequenceNumber, _o.recordExtensions);
    }

        /**
         * @summary The enum used as the type of the component `readStatus`
         * @public
         * @static
         */

    public static _enum_for_readStatus = _enum_for_MMStatusCodeType;
}

/**
 * @summary The Leading Root Component Types of MM7RRqRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MM7RRqRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recipientMmsRSAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("originatorAddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("recipientAddress", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mmDateAndTime", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("readStatus", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("mmStatusText", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("recordTimeStamp", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of MM7RRqRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MM7RRqRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MM7RRqRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MM7RRqRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MM7RRqRecord: $.ASN1Decoder<MM7RRqRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MM7RRqRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MM7RRqRecord (el: _Element): MM7RRqRecord {
    if (!_cached_decoder_for_MM7RRqRecord) { _cached_decoder_for_MM7RRqRecord = function (el: _Element): MM7RRqRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let recipientMmsRSAddress: OPTIONAL<MMSRSAddress>;
    let messageID!: OCTET_STRING;
    let originatorAddress: OPTIONAL<MMSAgentAddress>;
    let recipientAddress!: MMSAgentAddress;
    let mmDateAndTime: OPTIONAL<OCTET_STRING>;
    let readStatus!: MMStatusCodeType;
    let mmStatusText: OPTIONAL<OCTET_STRING>;
    let recordTimeStamp: OPTIONAL<OCTET_STRING>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "recipientMmsRSAddress": (_el: _Element): void => { recipientMmsRSAddress = $._decode_implicit<MMSRSAddress>(() => _decode_MMSRSAddress)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "originatorAddress": (_el: _Element): void => { originatorAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "recipientAddress": (_el: _Element): void => { recipientAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "mmDateAndTime": (_el: _Element): void => { mmDateAndTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "readStatus": (_el: _Element): void => { readStatus = $._decode_implicit<MMStatusCodeType>(() => _decode_MMStatusCodeType)(_el); },
        "mmStatusText": (_el: _Element): void => { mmStatusText = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordTimeStamp": (_el: _Element): void => { recordTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MM7RRqRecord,
        _extension_additions_list_spec_for_MM7RRqRecord,
        _root_component_type_list_2_spec_for_MM7RRqRecord,
        undefined,
    );
    return new MM7RRqRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        recipientMmsRSAddress,
        messageID,
        originatorAddress,
        recipientAddress,
        mmDateAndTime,
        readStatus,
        mmStatusText,
        recordTimeStamp,
        localSequenceNumber,
        recordExtensions
    );
}; }
    return _cached_decoder_for_MM7RRqRecord(el);
}

let _cached_encoder_for_MM7RRqRecord: $.ASN1Encoder<MM7RRqRecord> | null = null;

/**
 * @summary Encodes a(n) MM7RRqRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MM7RRqRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MM7RRqRecord (value: MM7RRqRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MM7RRqRecord) { _cached_encoder_for_MM7RRqRecord = function (value: MM7RRqRecord, _elGetter: $.ASN1Encoder<MM7RRqRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.recipientMmsRSAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSRSAddress, $.BER)(value.recipientMmsRSAddress, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.messageID, $.BER));
    if (value.originatorAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_MMSAgentAddress, $.BER)(value.originatorAddress, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_MMSAgentAddress, $.BER)(value.recipientAddress, $.BER));
    if (value.mmDateAndTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.mmDateAndTime, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_MMStatusCodeType, $.BER)(value.readStatus, $.BER));
    if (value.mmStatusText !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.mmStatusText, $.BER));
    }
    if (value.recordTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.recordTimeStamp, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MM7RRqRecord(value, elGetter);
}


/* eslint-enable */
