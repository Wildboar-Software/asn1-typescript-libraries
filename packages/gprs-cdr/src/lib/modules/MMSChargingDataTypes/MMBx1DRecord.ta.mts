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
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../MMSChargingDataTypes/IPAddress.ta.mjs";
import { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";
import { AccessCorrelation, _decode_AccessCorrelation, _encode_AccessCorrelation } from "../MMSChargingDataTypes/AccessCorrelation.ta.mjs";
import { RequestStatusCodeType, _decode_RequestStatusCodeType, _encode_RequestStatusCodeType } from "../MMSChargingDataTypes/RequestStatusCodeType.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary MMBx1DRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMBx1DRecord ::= SET {
 *    recordType           [0] IMPLICIT RecordType,
 *    mmsRelayAddress      [1] IPAddress,
 *    managingAddress      [2] IMPLICIT MMSAgentAddress,
 *    accessCorrelation    [3] AccessCorrelation OPTIONAL,
 *    messageReference     [4] IMPLICIT OCTET STRING OPTIONAL,
 *    requestStatusCode    [5] IMPLICIT RequestStatusCodeType OPTIONAL,
 *    statusText           [6] IMPLICIT OCTET STRING OPTIONAL,
 *    sequenceNumber       [7] IMPLICIT INTEGER OPTIONAL,
 *    timeStamp            [8] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    recordExtensions     [9] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    sGSNPLMNIdentifier   [20] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    rATType              [21] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    mSTimeZone           [22] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MMBx1DRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `mmsRelayAddress`.
     * @public
     * @readonly
     */
    readonly mmsRelayAddress: IPAddress;
    /**
     * @summary `managingAddress`.
     * @public
     * @readonly
     */
    readonly managingAddress: MMSAgentAddress;
    /**
     * @summary `accessCorrelation`.
     * @public
     * @readonly
     */
    readonly accessCorrelation: OPTIONAL<AccessCorrelation>;
    /**
     * @summary `messageReference`.
     * @public
     * @readonly
     */
    readonly messageReference: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `requestStatusCode`.
     * @public
     * @readonly
     */
    readonly requestStatusCode: OPTIONAL<RequestStatusCodeType>;
    /**
     * @summary `statusText`.
     * @public
     * @readonly
     */
    readonly statusText: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sequenceNumber`.
     * @public
     * @readonly
     */
    readonly sequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `timeStamp`.
     * @public
     * @readonly
     */
    readonly timeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
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
        mmsRelayAddress: IPAddress,
        managingAddress: MMSAgentAddress,
        accessCorrelation: OPTIONAL<AccessCorrelation>,
        messageReference: OPTIONAL<OCTET_STRING>,
        requestStatusCode: OPTIONAL<RequestStatusCodeType>,
        statusText: OPTIONAL<OCTET_STRING>,
        sequenceNumber: OPTIONAL<INTEGER>,
        timeStamp: OPTIONAL<OCTET_STRING>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        sGSNPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        rATType: OPTIONAL<INTEGER>,
        mSTimeZone: OPTIONAL<OCTET_STRING>
    ) {
        this.recordType = recordType;
        this.mmsRelayAddress = mmsRelayAddress;
        this.managingAddress = managingAddress;
        this.accessCorrelation = accessCorrelation;
        this.messageReference = messageReference;
        this.requestStatusCode = requestStatusCode;
        this.statusText = statusText;
        this.sequenceNumber = sequenceNumber;
        this.timeStamp = timeStamp;
        this.recordExtensions = recordExtensions;
        this.sGSNPLMNIdentifier = sGSNPLMNIdentifier;
        this.rATType = rATType;
        this.mSTimeZone = mSTimeZone;
    
        if (this.timeStamp !== undefined && (this.timeStamp.length !== 9)) {
            throw new ASN1SizeError("MMBx1DRecord.timeStamp violates SIZE constraint");
        }
        if (this.sGSNPLMNIdentifier !== undefined && (this.sGSNPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("MMBx1DRecord.sGSNPLMNIdentifier violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("MMBx1DRecord.rATType violates INTEGER range");
        }
        if (this.mSTimeZone !== undefined && (this.mSTimeZone.length !== 2)) {
            throw new ASN1SizeError("MMBx1DRecord.mSTimeZone violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MMBx1DRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MMBx1DRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMBx1DRecord`.
     * @returns {MMBx1DRecord}
     */
    public static _from_object (_o: { [_K in keyof (MMBx1DRecord)]: (MMBx1DRecord)[_K] }): MMBx1DRecord {
        return new MMBx1DRecord(_o.recordType, _o.mmsRelayAddress, _o.managingAddress, _o.accessCorrelation, _o.messageReference, _o.requestStatusCode, _o.statusText, _o.sequenceNumber, _o.timeStamp, _o.recordExtensions, _o.sGSNPLMNIdentifier, _o.rATType, _o.mSTimeZone);
    }


}

/**
 * @summary The Leading Root Component Types of MMBx1DRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMBx1DRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mmsRelayAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("managingAddress", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("accessCorrelation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("messageReference", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("requestStatusCode", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("statusText", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("sGSNPLMNIdentifier", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("mSTimeZone", true, $.hasTag(_TagClass.context, 22))
];

/**
 * @summary The Trailing Root Component Types of MMBx1DRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMBx1DRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMBx1DRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMBx1DRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMBx1DRecord: $.ASN1Decoder<MMBx1DRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMBx1DRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMBx1DRecord (el: _Element): MMBx1DRecord {
    if (!_cached_decoder_for_MMBx1DRecord) { _cached_decoder_for_MMBx1DRecord = function (el: _Element): MMBx1DRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let mmsRelayAddress!: IPAddress;
    let managingAddress!: MMSAgentAddress;
    let accessCorrelation: OPTIONAL<AccessCorrelation>;
    let messageReference: OPTIONAL<OCTET_STRING>;
    let requestStatusCode: OPTIONAL<RequestStatusCodeType>;
    let statusText: OPTIONAL<OCTET_STRING>;
    let sequenceNumber: OPTIONAL<INTEGER>;
    let timeStamp: OPTIONAL<OCTET_STRING>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let sGSNPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<INTEGER>;
    let mSTimeZone: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "mmsRelayAddress": (_el: _Element): void => { mmsRelayAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "managingAddress": (_el: _Element): void => { managingAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "accessCorrelation": (_el: _Element): void => { accessCorrelation = $._decode_explicit<AccessCorrelation>(() => _decode_AccessCorrelation)(_el); },
        "messageReference": (_el: _Element): void => { messageReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "requestStatusCode": (_el: _Element): void => { requestStatusCode = $._decode_implicit<RequestStatusCodeType>(() => _decode_RequestStatusCodeType)(_el); },
        "statusText": (_el: _Element): void => { statusText = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "sGSNPLMNIdentifier": (_el: _Element): void => { sGSNPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mSTimeZone": (_el: _Element): void => { mSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MMBx1DRecord,
        _extension_additions_list_spec_for_MMBx1DRecord,
        _root_component_type_list_2_spec_for_MMBx1DRecord,
        undefined,
    );
    return new MMBx1DRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        mmsRelayAddress,
        managingAddress,
        accessCorrelation,
        messageReference,
        requestStatusCode,
        statusText,
        sequenceNumber,
        timeStamp,
        recordExtensions,
        sGSNPLMNIdentifier,
        rATType,
        mSTimeZone
    );
}; }
    return _cached_decoder_for_MMBx1DRecord(el);
}

let _cached_encoder_for_MMBx1DRecord: $.ASN1Encoder<MMBx1DRecord> | null = null;

/**
 * @summary Encodes a(n) MMBx1DRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMBx1DRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MMBx1DRecord (value: MMBx1DRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMBx1DRecord) { _cached_encoder_for_MMBx1DRecord = function (value: MMBx1DRecord, _elGetter: $.ASN1Encoder<MMBx1DRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER)(value.mmsRelayAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSAgentAddress, $.BER)(value.managingAddress, $.BER));
    if (value.accessCorrelation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_AccessCorrelation, $.BER)(value.accessCorrelation, $.BER));
    }
    if (value.messageReference !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.messageReference, $.BER));
    }
    if (value.requestStatusCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_RequestStatusCodeType, $.BER)(value.requestStatusCode, $.BER));
    }
    if (value.statusText !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.statusText, $.BER));
    }
    if (value.sequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER));
    }
    if (value.timeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.timeStamp, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.sGSNPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.sGSNPLMNIdentifier, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.mSTimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeOctetString, $.BER)(value.mSTimeZone, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MMBx1DRecord(value, elGetter);
}


/* eslint-enable */
