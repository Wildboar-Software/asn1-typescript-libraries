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
import { RecordType, _decode_RecordType, _encode_RecordType } from "../LCSChargingDataTypes/RecordType.ta.mjs";
import { LCSClientType, _decode_LCSClientType, _encode_LCSClientType, _enum_for_LCSClientType } from "../LCSChargingDataTypes/LCSClientType.ta.mjs";
import { LCSClientIdentity, _decode_LCSClientIdentity, _encode_LCSClientIdentity } from "../LCSChargingDataTypes/LCSClientIdentity.ta.mjs";
import { LocationType, _decode_LocationType, _encode_LocationType } from "../LCSChargingDataTypes/LocationType.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../LCSChargingDataTypes/ManagementExtension.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../LCSChargingDataTypes/IPAddress.ta.mjs";


/**
 * @summary LCSHGMTRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSHGMTRecord ::= SET {
 *    recordType               [0] IMPLICIT RecordType,
 *    recordingEntity          [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    lcsClientType            [2] IMPLICIT LCSClientType OPTIONAL,
 *    lcsClientIdentity        [3] IMPLICIT LCSClientIdentity OPTIONAL,
 *    targetIMSI               [4] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    targetMSISDN             [5] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    locationType             [6] IMPLICIT LocationType,
 *    lCSPriority              [7] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    resultCode               [8] IMPLICIT INTEGER ( 0 .. MAX ) OPTIONAL,
 *    recordTimeStamp          [9] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    localSequenceNumber      [10] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions         [11] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    requestingGMLCIdentity   [12] IPAddress OPTIONAL,
 *    visitedGMLCIdentity      [13] IPAddress OPTIONAL,
 *    servingNetworkIdentity   [14] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class LCSHGMTRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `recordingEntity`.
     * @public
     * @readonly
     */
    readonly recordingEntity: OCTET_STRING;
    /**
     * @summary `lcsClientType`.
     * @public
     * @readonly
     */
    readonly lcsClientType: OPTIONAL<LCSClientType>;
    /**
     * @summary `lcsClientIdentity`.
     * @public
     * @readonly
     */
    readonly lcsClientIdentity: OPTIONAL<LCSClientIdentity>;
    /**
     * @summary `targetIMSI`.
     * @public
     * @readonly
     */
    readonly targetIMSI: OCTET_STRING;
    /**
     * @summary `targetMSISDN`.
     * @public
     * @readonly
     */
    readonly targetMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `locationType`.
     * @public
     * @readonly
     */
    readonly locationType: LocationType;
    /**
     * @summary `lCSPriority`.
     * @public
     * @readonly
     */
    readonly lCSPriority: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `resultCode`.
     * @public
     * @readonly
     */
    readonly resultCode: OPTIONAL<INTEGER>;
    /**
     * @summary `recordTimeStamp`.
     * @public
     * @readonly
     */
    readonly recordTimeStamp: OCTET_STRING;
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
    /**
     * @summary `requestingGMLCIdentity`.
     * @public
     * @readonly
     */
    readonly requestingGMLCIdentity: OPTIONAL<IPAddress>;
    /**
     * @summary `visitedGMLCIdentity`.
     * @public
     * @readonly
     */
    readonly visitedGMLCIdentity: OPTIONAL<IPAddress>;
    /**
     * @summary `servingNetworkIdentity`.
     * @public
     * @readonly
     */
    readonly servingNetworkIdentity: OPTIONAL<OCTET_STRING>;

    constructor (
        recordType: RecordType,
        recordingEntity: OCTET_STRING,
        lcsClientType: OPTIONAL<LCSClientType>,
        lcsClientIdentity: OPTIONAL<LCSClientIdentity>,
        targetIMSI: OCTET_STRING,
        targetMSISDN: OPTIONAL<OCTET_STRING>,
        locationType: LocationType,
        lCSPriority: OPTIONAL<OCTET_STRING>,
        resultCode: OPTIONAL<INTEGER>,
        recordTimeStamp: OCTET_STRING,
        localSequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        requestingGMLCIdentity: OPTIONAL<IPAddress>,
        visitedGMLCIdentity: OPTIONAL<IPAddress>,
        servingNetworkIdentity: OPTIONAL<OCTET_STRING>
    ) {
        this.recordType = recordType;
        this.recordingEntity = recordingEntity;
        this.lcsClientType = lcsClientType;
        this.lcsClientIdentity = lcsClientIdentity;
        this.targetIMSI = targetIMSI;
        this.targetMSISDN = targetMSISDN;
        this.locationType = locationType;
        this.lCSPriority = lCSPriority;
        this.resultCode = resultCode;
        this.recordTimeStamp = recordTimeStamp;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
        this.requestingGMLCIdentity = requestingGMLCIdentity;
        this.visitedGMLCIdentity = visitedGMLCIdentity;
        this.servingNetworkIdentity = servingNetworkIdentity;
    
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("LCSHGMTRecord.recordingEntity violates SIZE constraint");
        }
        if ((this.targetIMSI.length < 3 || this.targetIMSI.length > 8)) {
            throw new ASN1SizeError("LCSHGMTRecord.targetIMSI violates SIZE constraint");
        }
        if (this.targetMSISDN !== undefined && (this.targetMSISDN.length < 1 || this.targetMSISDN.length > 9)) {
            throw new ASN1SizeError("LCSHGMTRecord.targetMSISDN violates SIZE constraint");
        }
        if (this.lCSPriority !== undefined && (this.lCSPriority.length !== 1)) {
            throw new ASN1SizeError("LCSHGMTRecord.lCSPriority violates SIZE constraint");
        }
        if (this.resultCode !== undefined && ((typeof this.resultCode === "bigint" ? Number(this.resultCode) : this.resultCode) < 0)) {
            throw new ASN1OverflowError("LCSHGMTRecord.resultCode violates INTEGER range");
        }
        if ((this.recordTimeStamp.length !== 9)) {
            throw new ASN1SizeError("LCSHGMTRecord.recordTimeStamp violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && ((typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) < 0 || (typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) > 4294967295)) {
            throw new ASN1OverflowError("LCSHGMTRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.servingNetworkIdentity !== undefined && (this.servingNetworkIdentity.length !== 3)) {
            throw new ASN1SizeError("LCSHGMTRecord.servingNetworkIdentity violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a LCSHGMTRecord
     * @description
     * 
     * This takes an `object` and converts it to a `LCSHGMTRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LCSHGMTRecord`.
     * @returns {LCSHGMTRecord}
     */
    public static _from_object (_o: { [_K in keyof (LCSHGMTRecord)]: (LCSHGMTRecord)[_K] }): LCSHGMTRecord {
        return new LCSHGMTRecord(_o.recordType, _o.recordingEntity, _o.lcsClientType, _o.lcsClientIdentity, _o.targetIMSI, _o.targetMSISDN, _o.locationType, _o.lCSPriority, _o.resultCode, _o.recordTimeStamp, _o.localSequenceNumber, _o.recordExtensions, _o.requestingGMLCIdentity, _o.visitedGMLCIdentity, _o.servingNetworkIdentity);
    }

        /**
         * @summary The enum used as the type of the component `lcsClientType`
         * @public
         * @static
         */

    public static _enum_for_lcsClientType = _enum_for_LCSClientType;
}

/**
 * @summary The Leading Root Component Types of LCSHGMTRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LCSHGMTRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lcsClientType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("lcsClientIdentity", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("targetIMSI", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("targetMSISDN", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("locationType", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("lCSPriority", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("resultCode", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("recordTimeStamp", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("requestingGMLCIdentity", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("visitedGMLCIdentity", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("servingNetworkIdentity", true, $.hasTag(_TagClass.context, 14))
];

/**
 * @summary The Trailing Root Component Types of LCSHGMTRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LCSHGMTRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LCSHGMTRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LCSHGMTRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LCSHGMTRecord: $.ASN1Decoder<LCSHGMTRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCSHGMTRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCSHGMTRecord (el: _Element): LCSHGMTRecord {
    if (!_cached_decoder_for_LCSHGMTRecord) { _cached_decoder_for_LCSHGMTRecord = function (el: _Element): LCSHGMTRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let recordingEntity!: OCTET_STRING;
    let lcsClientType: OPTIONAL<LCSClientType>;
    let lcsClientIdentity: OPTIONAL<LCSClientIdentity>;
    let targetIMSI!: OCTET_STRING;
    let targetMSISDN: OPTIONAL<OCTET_STRING>;
    let locationType!: LocationType;
    let lCSPriority: OPTIONAL<OCTET_STRING>;
    let resultCode: OPTIONAL<INTEGER>;
    let recordTimeStamp!: OCTET_STRING;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let requestingGMLCIdentity: OPTIONAL<IPAddress>;
    let visitedGMLCIdentity: OPTIONAL<IPAddress>;
    let servingNetworkIdentity: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lcsClientType": (_el: _Element): void => { lcsClientType = $._decode_implicit<LCSClientType>(() => _decode_LCSClientType)(_el); },
        "lcsClientIdentity": (_el: _Element): void => { lcsClientIdentity = $._decode_implicit<LCSClientIdentity>(() => _decode_LCSClientIdentity)(_el); },
        "targetIMSI": (_el: _Element): void => { targetIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "targetMSISDN": (_el: _Element): void => { targetMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "locationType": (_el: _Element): void => { locationType = $._decode_implicit<LocationType>(() => _decode_LocationType)(_el); },
        "lCSPriority": (_el: _Element): void => { lCSPriority = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "resultCode": (_el: _Element): void => { resultCode = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordTimeStamp": (_el: _Element): void => { recordTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "requestingGMLCIdentity": (_el: _Element): void => { requestingGMLCIdentity = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "visitedGMLCIdentity": (_el: _Element): void => { visitedGMLCIdentity = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "servingNetworkIdentity": (_el: _Element): void => { servingNetworkIdentity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_LCSHGMTRecord,
        _extension_additions_list_spec_for_LCSHGMTRecord,
        _root_component_type_list_2_spec_for_LCSHGMTRecord,
        undefined,
    );
    return new LCSHGMTRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        recordingEntity,
        lcsClientType,
        lcsClientIdentity,
        targetIMSI,
        targetMSISDN,
        locationType,
        lCSPriority,
        resultCode,
        recordTimeStamp,
        localSequenceNumber,
        recordExtensions,
        requestingGMLCIdentity,
        visitedGMLCIdentity,
        servingNetworkIdentity
    );
}; }
    return _cached_decoder_for_LCSHGMTRecord(el);
}

let _cached_encoder_for_LCSHGMTRecord: $.ASN1Encoder<LCSHGMTRecord> | null = null;

/**
 * @summary Encodes a(n) LCSHGMTRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCSHGMTRecord, encoded as an ASN.1 Element.
 */
export
function _encode_LCSHGMTRecord (value: LCSHGMTRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCSHGMTRecord) { _cached_encoder_for_LCSHGMTRecord = function (value: LCSHGMTRecord, _elGetter: $.ASN1Encoder<LCSHGMTRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.lcsClientType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_LCSClientType, $.BER)(value.lcsClientType, $.BER));
    }
    if (value.lcsClientIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_LCSClientIdentity, $.BER)(value.lcsClientIdentity, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.targetIMSI, $.BER));
    if (value.targetMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.targetMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_LocationType, $.BER)(value.locationType, $.BER));
    if (value.lCSPriority !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.lCSPriority, $.BER));
    }
    if (value.resultCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.resultCode, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.recordTimeStamp, $.BER));
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.requestingGMLCIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 12, () => _encode_IPAddress, $.BER)(value.requestingGMLCIdentity, $.BER));
    }
    if (value.visitedGMLCIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 13, () => _encode_IPAddress, $.BER)(value.visitedGMLCIdentity, $.BER));
    }
    if (value.servingNetworkIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeOctetString, $.BER)(value.servingNetworkIdentity, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_LCSHGMTRecord(value, elGetter);
}


/* eslint-enable */
