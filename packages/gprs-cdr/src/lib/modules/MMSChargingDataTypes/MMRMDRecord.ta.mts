/* eslint-disable */
import {
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
import { MMStatusCodeType, _decode_MMStatusCodeType, _encode_MMStatusCodeType, _enum_for_MMStatusCodeType } from "../MMSChargingDataTypes/MMStatusCodeType.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary MMRMDRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMRMDRecord ::= SET {
 *    recordType               [0] IMPLICIT RecordType,
 *    originatorMmsRSAddress   [1] IMPLICIT MMSRSAddress,
 *    recipientMmsRSAddress    [2] IMPLICIT MMSRSAddress OPTIONAL,
 *    messageID                [3] IMPLICIT OCTET STRING,
 *    messageSize              [4] IMPLICIT INTEGER,
 *    mmStatusCode             [5] IMPLICIT MMStatusCodeType OPTIONAL,
 *    statusText               [6] IMPLICIT OCTET STRING OPTIONAL,
 *    recordTimeStamp          [7] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    localSequenceNumber      [8] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions         [9] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MMRMDRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `originatorMmsRSAddress`.
     * @public
     * @readonly
     */
    readonly originatorMmsRSAddress: MMSRSAddress;
    /**
     * @summary `recipientMmsRSAddress`.
     * @public
     * @readonly
     */
    readonly recipientMmsRSAddress: OPTIONAL<MMSRSAddress>;
    /**
     * @summary `messageID`.
     * @public
     * @readonly
     */
    readonly messageID: OCTET_STRING;
    /**
     * @summary `messageSize`.
     * @public
     * @readonly
     */
    readonly messageSize: INTEGER;
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
        originatorMmsRSAddress: MMSRSAddress,
        recipientMmsRSAddress: OPTIONAL<MMSRSAddress>,
        messageID: OCTET_STRING,
        messageSize: INTEGER,
        mmStatusCode: OPTIONAL<MMStatusCodeType>,
        statusText: OPTIONAL<OCTET_STRING>,
        recordTimeStamp: OPTIONAL<OCTET_STRING>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.originatorMmsRSAddress = originatorMmsRSAddress;
        this.recipientMmsRSAddress = recipientMmsRSAddress;
        this.messageID = messageID;
        this.messageSize = messageSize;
        this.mmStatusCode = mmStatusCode;
        this.statusText = statusText;
        this.recordTimeStamp = recordTimeStamp;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
    
        if (this.recordTimeStamp !== undefined && (this.recordTimeStamp.length !== 9)) {
            throw new ASN1SizeError("MMRMDRecord.recordTimeStamp violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && ((typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) < 0 || (typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) > 4294967295)) {
            throw new ASN1OverflowError("MMRMDRecord.localSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a MMRMDRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MMRMDRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMRMDRecord`.
     * @returns {MMRMDRecord}
     */
    public static _from_object (_o: { [_K in keyof (MMRMDRecord)]: (MMRMDRecord)[_K] }): MMRMDRecord {
        return new MMRMDRecord(_o.recordType, _o.originatorMmsRSAddress, _o.recipientMmsRSAddress, _o.messageID, _o.messageSize, _o.mmStatusCode, _o.statusText, _o.recordTimeStamp, _o.localSequenceNumber, _o.recordExtensions);
    }

        /**
         * @summary The enum used as the type of the component `mmStatusCode`
         * @public
         * @static
         */

    public static _enum_for_mmStatusCode = _enum_for_MMStatusCodeType;
}

/**
 * @summary The Leading Root Component Types of MMRMDRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMRMDRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("originatorMmsRSAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("recipientMmsRSAddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("messageSize", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mmStatusCode", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("statusText", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("recordTimeStamp", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of MMRMDRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMRMDRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMRMDRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMRMDRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMRMDRecord: $.ASN1Decoder<MMRMDRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMRMDRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMRMDRecord (el: _Element): MMRMDRecord {
    if (!_cached_decoder_for_MMRMDRecord) { _cached_decoder_for_MMRMDRecord = function (el: _Element): MMRMDRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let originatorMmsRSAddress!: MMSRSAddress;
    let recipientMmsRSAddress: OPTIONAL<MMSRSAddress>;
    let messageID!: OCTET_STRING;
    let messageSize!: INTEGER;
    let mmStatusCode: OPTIONAL<MMStatusCodeType>;
    let statusText: OPTIONAL<OCTET_STRING>;
    let recordTimeStamp: OPTIONAL<OCTET_STRING>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "originatorMmsRSAddress": (_el: _Element): void => { originatorMmsRSAddress = $._decode_implicit<MMSRSAddress>(() => _decode_MMSRSAddress)(_el); },
        "recipientMmsRSAddress": (_el: _Element): void => { recipientMmsRSAddress = $._decode_implicit<MMSRSAddress>(() => _decode_MMSRSAddress)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "messageSize": (_el: _Element): void => { messageSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mmStatusCode": (_el: _Element): void => { mmStatusCode = $._decode_implicit<MMStatusCodeType>(() => _decode_MMStatusCodeType)(_el); },
        "statusText": (_el: _Element): void => { statusText = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordTimeStamp": (_el: _Element): void => { recordTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MMRMDRecord,
        _extension_additions_list_spec_for_MMRMDRecord,
        _root_component_type_list_2_spec_for_MMRMDRecord,
        undefined,
    );
    return new MMRMDRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        originatorMmsRSAddress,
        recipientMmsRSAddress,
        messageID,
        messageSize,
        mmStatusCode,
        statusText,
        recordTimeStamp,
        localSequenceNumber,
        recordExtensions
    );
}; }
    return _cached_decoder_for_MMRMDRecord(el);
}

let _cached_encoder_for_MMRMDRecord: $.ASN1Encoder<MMRMDRecord> | null = null;

/**
 * @summary Encodes a(n) MMRMDRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMRMDRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MMRMDRecord (value: MMRMDRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMRMDRecord) { _cached_encoder_for_MMRMDRecord = function (value: MMRMDRecord, _elGetter: $.ASN1Encoder<MMRMDRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSRSAddress, $.BER)(value.originatorMmsRSAddress, $.BER));
    if (value.recipientMmsRSAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSRSAddress, $.BER)(value.recipientMmsRSAddress, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.messageID, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.messageSize, $.BER));
    if (value.mmStatusCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_MMStatusCodeType, $.BER)(value.mmStatusCode, $.BER));
    }
    if (value.statusText !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.statusText, $.BER));
    }
    if (value.recordTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.recordTimeStamp, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MMRMDRecord(value, elGetter);
}


/* eslint-enable */
