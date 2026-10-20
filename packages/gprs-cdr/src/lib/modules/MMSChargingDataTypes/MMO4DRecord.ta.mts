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
import { MMStatusCodeType, _decode_MMStatusCodeType, _encode_MMStatusCodeType, _enum_for_MMStatusCodeType } from "../MMSChargingDataTypes/MMStatusCodeType.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary MMO4DRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMO4DRecord ::= SET {
 *    recordType               [0] IMPLICIT RecordType,
 *    recipientMmsRSAddress    [1] IMPLICIT MMSRSAddress OPTIONAL,
 *    originatorMmsRSAddress   [2] IMPLICIT MMSRSAddress OPTIONAL,
 *    messageID                [3] IMPLICIT OCTET STRING,
 *    mms3GPPVersion           [4] IMPLICIT OCTET STRING OPTIONAL,
 *    originatorAddress        [5] IMPLICIT MMSAgentAddress OPTIONAL,
 *    recipientAddress         [6] IMPLICIT MMSAgentAddress,
 *    mmDateAndTime            [7] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    acknowledgementRequest   [8] IMPLICIT BOOLEAN,
 *    mmStatusCode             [9] IMPLICIT MMStatusCodeType,
 *    statusText               [10] IMPLICIT OCTET STRING OPTIONAL,
 *    recordTimeStamp          [11] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    localSequenceNumber      [12] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions         [13] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MMO4DRecord {
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
    readonly recipientMmsRSAddress: OPTIONAL<MMSRSAddress>;
    /**
     * @summary `originatorMmsRSAddress`.
     * @public
     * @readonly
     */
    readonly originatorMmsRSAddress: OPTIONAL<MMSRSAddress>;
    /**
     * @summary `messageID`.
     * @public
     * @readonly
     */
    readonly messageID: OCTET_STRING;
    /**
     * @summary `mms3GPPVersion`.
     * @public
     * @readonly
     */
    readonly mms3GPPVersion: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `originatorAddress`.
     * @public
     * @readonly
     */
    readonly originatorAddress: OPTIONAL<MMSAgentAddress>;
    /**
     * @summary `recipientAddress`.
     * @public
     * @readonly
     */
    readonly recipientAddress: MMSAgentAddress;
    /**
     * @summary `mmDateAndTime`.
     * @public
     * @readonly
     */
    readonly mmDateAndTime: OCTET_STRING;
    /**
     * @summary `acknowledgementRequest`.
     * @public
     * @readonly
     */
    readonly acknowledgementRequest: BOOLEAN;
    /**
     * @summary `mmStatusCode`.
     * @public
     * @readonly
     */
    readonly mmStatusCode: MMStatusCodeType;
    /**
     * @summary `statusText`.
     * @public
     * @readonly
     */
    readonly statusText: OPTIONAL<OCTET_STRING>;
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

    constructor (
        recordType: RecordType,
        recipientMmsRSAddress: OPTIONAL<MMSRSAddress>,
        originatorMmsRSAddress: OPTIONAL<MMSRSAddress>,
        messageID: OCTET_STRING,
        mms3GPPVersion: OPTIONAL<OCTET_STRING>,
        originatorAddress: OPTIONAL<MMSAgentAddress>,
        recipientAddress: MMSAgentAddress,
        mmDateAndTime: OCTET_STRING,
        acknowledgementRequest: BOOLEAN,
        mmStatusCode: MMStatusCodeType,
        statusText: OPTIONAL<OCTET_STRING>,
        recordTimeStamp: OPTIONAL<OCTET_STRING>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.recipientMmsRSAddress = recipientMmsRSAddress;
        this.originatorMmsRSAddress = originatorMmsRSAddress;
        this.messageID = messageID;
        this.mms3GPPVersion = mms3GPPVersion;
        this.originatorAddress = originatorAddress;
        this.recipientAddress = recipientAddress;
        this.mmDateAndTime = mmDateAndTime;
        this.acknowledgementRequest = acknowledgementRequest;
        this.mmStatusCode = mmStatusCode;
        this.statusText = statusText;
        this.recordTimeStamp = recordTimeStamp;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
    
        if ((this.mmDateAndTime.length !== 9)) {
            throw new ASN1SizeError("MMO4DRecord.mmDateAndTime violates SIZE constraint");
        }
        if (this.recordTimeStamp !== undefined && (this.recordTimeStamp.length !== 9)) {
            throw new ASN1SizeError("MMO4DRecord.recordTimeStamp violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && ((typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) < 0 || (typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) > 4294967295)) {
            throw new ASN1OverflowError("MMO4DRecord.localSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a MMO4DRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MMO4DRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMO4DRecord`.
     * @returns {MMO4DRecord}
     */
    public static _from_object (_o: { [_K in keyof (MMO4DRecord)]: (MMO4DRecord)[_K] }): MMO4DRecord {
        return new MMO4DRecord(_o.recordType, _o.recipientMmsRSAddress, _o.originatorMmsRSAddress, _o.messageID, _o.mms3GPPVersion, _o.originatorAddress, _o.recipientAddress, _o.mmDateAndTime, _o.acknowledgementRequest, _o.mmStatusCode, _o.statusText, _o.recordTimeStamp, _o.localSequenceNumber, _o.recordExtensions);
    }

        /**
         * @summary The enum used as the type of the component `mmStatusCode`
         * @public
         * @static
         */

    public static _enum_for_mmStatusCode = _enum_for_MMStatusCodeType;
}

/**
 * @summary The Leading Root Component Types of MMO4DRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMO4DRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recipientMmsRSAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("originatorMmsRSAddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mms3GPPVersion", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("originatorAddress", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("recipientAddress", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("mmDateAndTime", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("acknowledgementRequest", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("mmStatusCode", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("statusText", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("recordTimeStamp", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 13))
];

/**
 * @summary The Trailing Root Component Types of MMO4DRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMO4DRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMO4DRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMO4DRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMO4DRecord: $.ASN1Decoder<MMO4DRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMO4DRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMO4DRecord (el: _Element): MMO4DRecord {
    if (!_cached_decoder_for_MMO4DRecord) { _cached_decoder_for_MMO4DRecord = function (el: _Element): MMO4DRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let recipientMmsRSAddress: OPTIONAL<MMSRSAddress>;
    let originatorMmsRSAddress: OPTIONAL<MMSRSAddress>;
    let messageID!: OCTET_STRING;
    let mms3GPPVersion: OPTIONAL<OCTET_STRING>;
    let originatorAddress: OPTIONAL<MMSAgentAddress>;
    let recipientAddress!: MMSAgentAddress;
    let mmDateAndTime!: OCTET_STRING;
    let acknowledgementRequest!: BOOLEAN;
    let mmStatusCode!: MMStatusCodeType;
    let statusText: OPTIONAL<OCTET_STRING>;
    let recordTimeStamp: OPTIONAL<OCTET_STRING>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "recipientMmsRSAddress": (_el: _Element): void => { recipientMmsRSAddress = $._decode_implicit<MMSRSAddress>(() => _decode_MMSRSAddress)(_el); },
        "originatorMmsRSAddress": (_el: _Element): void => { originatorMmsRSAddress = $._decode_implicit<MMSRSAddress>(() => _decode_MMSRSAddress)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mms3GPPVersion": (_el: _Element): void => { mms3GPPVersion = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "originatorAddress": (_el: _Element): void => { originatorAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "recipientAddress": (_el: _Element): void => { recipientAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "mmDateAndTime": (_el: _Element): void => { mmDateAndTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "acknowledgementRequest": (_el: _Element): void => { acknowledgementRequest = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "mmStatusCode": (_el: _Element): void => { mmStatusCode = $._decode_implicit<MMStatusCodeType>(() => _decode_MMStatusCodeType)(_el); },
        "statusText": (_el: _Element): void => { statusText = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordTimeStamp": (_el: _Element): void => { recordTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MMO4DRecord,
        _extension_additions_list_spec_for_MMO4DRecord,
        _root_component_type_list_2_spec_for_MMO4DRecord,
        undefined,
    );
    return new MMO4DRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        recipientMmsRSAddress,
        originatorMmsRSAddress,
        messageID,
        mms3GPPVersion,
        originatorAddress,
        recipientAddress,
        mmDateAndTime,
        acknowledgementRequest,
        mmStatusCode,
        statusText,
        recordTimeStamp,
        localSequenceNumber,
        recordExtensions
    );
}; }
    return _cached_decoder_for_MMO4DRecord(el);
}

let _cached_encoder_for_MMO4DRecord: $.ASN1Encoder<MMO4DRecord> | null = null;

/**
 * @summary Encodes a(n) MMO4DRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMO4DRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MMO4DRecord (value: MMO4DRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMO4DRecord) { _cached_encoder_for_MMO4DRecord = function (value: MMO4DRecord, _elGetter: $.ASN1Encoder<MMO4DRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.recipientMmsRSAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSRSAddress, $.BER)(value.recipientMmsRSAddress, $.BER));
    }
    if (value.originatorMmsRSAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSRSAddress, $.BER)(value.originatorMmsRSAddress, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.messageID, $.BER));
    if (value.mms3GPPVersion !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.mms3GPPVersion, $.BER));
    }
    if (value.originatorAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_MMSAgentAddress, $.BER)(value.originatorAddress, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_MMSAgentAddress, $.BER)(value.recipientAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.mmDateAndTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.acknowledgementRequest, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_MMStatusCodeType, $.BER)(value.mmStatusCode, $.BER));
    if (value.statusText !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.statusText, $.BER));
    }
    if (value.recordTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.recordTimeStamp, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MMO4DRecord(value, elGetter);
}


/* eslint-enable */
