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
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../MMSChargingDataTypes/IPAddress.ta.mjs";
import { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";
import { AccessCorrelation, _decode_AccessCorrelation, _encode_AccessCorrelation } from "../MMSChargingDataTypes/AccessCorrelation.ta.mjs";
import { AttributesList, _decode_AttributesList, _encode_AttributesList } from "../MMSChargingDataTypes/AttributesList.ta.mjs";
import { RequestStatusCodeType, _decode_RequestStatusCodeType, _encode_RequestStatusCodeType } from "../MMSChargingDataTypes/RequestStatusCodeType.ta.mjs";
import { Totals, _decode_Totals, _encode_Totals } from "../MMSChargingDataTypes/Totals.ta.mjs";
import { Quotas, _decode_Quotas, _encode_Quotas } from "../MMSChargingDataTypes/Quotas.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary MMBx1VRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMBx1VRecord ::= SET {
 *    recordType           [0] IMPLICIT RecordType,
 *    mmsRelayAddress      [1] IPAddress,
 *    managingAddress      [2] IMPLICIT MMSAgentAddress,
 *    accessCorrelation    [3] AccessCorrelation OPTIONAL,
 *    attributesList       [4] IMPLICIT AttributesList OPTIONAL,
 *    messageSelection     [5] IMPLICIT INTEGER OPTIONAL,
 *    start                [6] IMPLICIT INTEGER OPTIONAL,
 *    limit                [7] IMPLICIT INTEGER OPTIONAL,
 *    totalsRequested      [8] IMPLICIT BOOLEAN OPTIONAL,
 *    quotasRequested      [9] IMPLICIT BOOLEAN OPTIONAL,
 *    mmListing            [10] IMPLICIT AttributesList OPTIONAL,
 *    requestStatusCode    [11] IMPLICIT RequestStatusCodeType OPTIONAL,
 *    statusText           [12] IMPLICIT OCTET STRING OPTIONAL,
 *    totals               [13] IMPLICIT Totals OPTIONAL,
 *    quotas               [14] IMPLICIT Quotas OPTIONAL,
 *    sequenceNumber       [15] IMPLICIT INTEGER OPTIONAL,
 *    timeStamp            [16] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    recordExtensions     [17] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    sGSNPLMNIdentifier   [18] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    rATType              [19] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    mSTimeZone           [20] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MMBx1VRecord {
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
     * @summary `attributesList`.
     * @public
     * @readonly
     */
    readonly attributesList: OPTIONAL<AttributesList>;
    /**
     * @summary `messageSelection`.
     * @public
     * @readonly
     */
    readonly messageSelection: OPTIONAL<INTEGER>;
    /**
     * @summary `start`.
     * @public
     * @readonly
     */
    readonly start: OPTIONAL<INTEGER>;
    /**
     * @summary `limit`.
     * @public
     * @readonly
     */
    readonly limit: OPTIONAL<INTEGER>;
    /**
     * @summary `totalsRequested`.
     * @public
     * @readonly
     */
    readonly totalsRequested: OPTIONAL<BOOLEAN>;
    /**
     * @summary `quotasRequested`.
     * @public
     * @readonly
     */
    readonly quotasRequested: OPTIONAL<BOOLEAN>;
    /**
     * @summary `mmListing`.
     * @public
     * @readonly
     */
    readonly mmListing: OPTIONAL<AttributesList>;
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
     * @summary `totals`.
     * @public
     * @readonly
     */
    readonly totals: OPTIONAL<Totals>;
    /**
     * @summary `quotas`.
     * @public
     * @readonly
     */
    readonly quotas: OPTIONAL<Quotas>;
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
        attributesList: OPTIONAL<AttributesList>,
        messageSelection: OPTIONAL<INTEGER>,
        start: OPTIONAL<INTEGER>,
        limit: OPTIONAL<INTEGER>,
        totalsRequested: OPTIONAL<BOOLEAN>,
        quotasRequested: OPTIONAL<BOOLEAN>,
        mmListing: OPTIONAL<AttributesList>,
        requestStatusCode: OPTIONAL<RequestStatusCodeType>,
        statusText: OPTIONAL<OCTET_STRING>,
        totals: OPTIONAL<Totals>,
        quotas: OPTIONAL<Quotas>,
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
        this.attributesList = attributesList;
        this.messageSelection = messageSelection;
        this.start = start;
        this.limit = limit;
        this.totalsRequested = totalsRequested;
        this.quotasRequested = quotasRequested;
        this.mmListing = mmListing;
        this.requestStatusCode = requestStatusCode;
        this.statusText = statusText;
        this.totals = totals;
        this.quotas = quotas;
        this.sequenceNumber = sequenceNumber;
        this.timeStamp = timeStamp;
        this.recordExtensions = recordExtensions;
        this.sGSNPLMNIdentifier = sGSNPLMNIdentifier;
        this.rATType = rATType;
        this.mSTimeZone = mSTimeZone;
    
        if (this.timeStamp !== undefined && (this.timeStamp.length !== 9)) {
            throw new ASN1SizeError("MMBx1VRecord.timeStamp violates SIZE constraint");
        }
        if (this.sGSNPLMNIdentifier !== undefined && (this.sGSNPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("MMBx1VRecord.sGSNPLMNIdentifier violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("MMBx1VRecord.rATType violates INTEGER range");
        }
        if (this.mSTimeZone !== undefined && (this.mSTimeZone.length !== 2)) {
            throw new ASN1SizeError("MMBx1VRecord.mSTimeZone violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MMBx1VRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MMBx1VRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMBx1VRecord`.
     * @returns {MMBx1VRecord}
     */
    public static _from_object (_o: { [_K in keyof (MMBx1VRecord)]: (MMBx1VRecord)[_K] }): MMBx1VRecord {
        return new MMBx1VRecord(_o.recordType, _o.mmsRelayAddress, _o.managingAddress, _o.accessCorrelation, _o.attributesList, _o.messageSelection, _o.start, _o.limit, _o.totalsRequested, _o.quotasRequested, _o.mmListing, _o.requestStatusCode, _o.statusText, _o.totals, _o.quotas, _o.sequenceNumber, _o.timeStamp, _o.recordExtensions, _o.sGSNPLMNIdentifier, _o.rATType, _o.mSTimeZone);
    }


}

/**
 * @summary The Leading Root Component Types of MMBx1VRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMBx1VRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mmsRelayAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("managingAddress", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("accessCorrelation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("attributesList", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("messageSelection", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("start", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("limit", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("totalsRequested", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("quotasRequested", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("mmListing", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("requestStatusCode", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("statusText", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("totals", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("quotas", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("sGSNPLMNIdentifier", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("mSTimeZone", true, $.hasTag(_TagClass.context, 20))
];

/**
 * @summary The Trailing Root Component Types of MMBx1VRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMBx1VRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMBx1VRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMBx1VRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMBx1VRecord: $.ASN1Decoder<MMBx1VRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMBx1VRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMBx1VRecord (el: _Element): MMBx1VRecord {
    if (!_cached_decoder_for_MMBx1VRecord) { _cached_decoder_for_MMBx1VRecord = function (el: _Element): MMBx1VRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let mmsRelayAddress!: IPAddress;
    let managingAddress!: MMSAgentAddress;
    let accessCorrelation: OPTIONAL<AccessCorrelation>;
    let attributesList: OPTIONAL<AttributesList>;
    let messageSelection: OPTIONAL<INTEGER>;
    let start: OPTIONAL<INTEGER>;
    let limit: OPTIONAL<INTEGER>;
    let totalsRequested: OPTIONAL<BOOLEAN>;
    let quotasRequested: OPTIONAL<BOOLEAN>;
    let mmListing: OPTIONAL<AttributesList>;
    let requestStatusCode: OPTIONAL<RequestStatusCodeType>;
    let statusText: OPTIONAL<OCTET_STRING>;
    let totals: OPTIONAL<Totals>;
    let quotas: OPTIONAL<Quotas>;
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
        "attributesList": (_el: _Element): void => { attributesList = $._decode_implicit<AttributesList>(() => _decode_AttributesList)(_el); },
        "messageSelection": (_el: _Element): void => { messageSelection = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "start": (_el: _Element): void => { start = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "limit": (_el: _Element): void => { limit = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "totalsRequested": (_el: _Element): void => { totalsRequested = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "quotasRequested": (_el: _Element): void => { quotasRequested = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "mmListing": (_el: _Element): void => { mmListing = $._decode_implicit<AttributesList>(() => _decode_AttributesList)(_el); },
        "requestStatusCode": (_el: _Element): void => { requestStatusCode = $._decode_implicit<RequestStatusCodeType>(() => _decode_RequestStatusCodeType)(_el); },
        "statusText": (_el: _Element): void => { statusText = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "totals": (_el: _Element): void => { totals = $._decode_implicit<Totals>(() => _decode_Totals)(_el); },
        "quotas": (_el: _Element): void => { quotas = $._decode_implicit<Quotas>(() => _decode_Quotas)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "sGSNPLMNIdentifier": (_el: _Element): void => { sGSNPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mSTimeZone": (_el: _Element): void => { mSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MMBx1VRecord,
        _extension_additions_list_spec_for_MMBx1VRecord,
        _root_component_type_list_2_spec_for_MMBx1VRecord,
        undefined,
    );
    return new MMBx1VRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        mmsRelayAddress,
        managingAddress,
        accessCorrelation,
        attributesList,
        messageSelection,
        start,
        limit,
        totalsRequested,
        quotasRequested,
        mmListing,
        requestStatusCode,
        statusText,
        totals,
        quotas,
        sequenceNumber,
        timeStamp,
        recordExtensions,
        sGSNPLMNIdentifier,
        rATType,
        mSTimeZone
    );
}; }
    return _cached_decoder_for_MMBx1VRecord(el);
}

let _cached_encoder_for_MMBx1VRecord: $.ASN1Encoder<MMBx1VRecord> | null = null;

/**
 * @summary Encodes a(n) MMBx1VRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMBx1VRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MMBx1VRecord (value: MMBx1VRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMBx1VRecord) { _cached_encoder_for_MMBx1VRecord = function (value: MMBx1VRecord, _elGetter: $.ASN1Encoder<MMBx1VRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER)(value.mmsRelayAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSAgentAddress, $.BER)(value.managingAddress, $.BER));
    if (value.accessCorrelation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_AccessCorrelation, $.BER)(value.accessCorrelation, $.BER));
    }
    if (value.attributesList !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_AttributesList, $.BER)(value.attributesList, $.BER));
    }
    if (value.messageSelection !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.messageSelection, $.BER));
    }
    if (value.start !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.start, $.BER));
    }
    if (value.limit !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.limit, $.BER));
    }
    if (value.totalsRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.totalsRequested, $.BER));
    }
    if (value.quotasRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeBoolean, $.BER)(value.quotasRequested, $.BER));
    }
    if (value.mmListing !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_AttributesList, $.BER)(value.mmListing, $.BER));
    }
    if (value.requestStatusCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_RequestStatusCodeType, $.BER)(value.requestStatusCode, $.BER));
    }
    if (value.statusText !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.statusText, $.BER));
    }
    if (value.totals !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_Totals, $.BER)(value.totals, $.BER));
    }
    if (value.quotas !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_Quotas, $.BER)(value.quotas, $.BER));
    }
    if (value.sequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER));
    }
    if (value.timeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.timeStamp, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.sGSNPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.sGSNPLMNIdentifier, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.mSTimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.mSTimeZone, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MMBx1VRecord(value, elGetter);
}


/* eslint-enable */
