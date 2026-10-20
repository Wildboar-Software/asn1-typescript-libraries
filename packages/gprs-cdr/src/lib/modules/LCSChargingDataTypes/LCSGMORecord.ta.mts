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
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../LCSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary LCSGMORecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSGMORecord ::= SET {
 *    recordType            [0] IMPLICIT RecordType,
 *    recordingEntity       [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    lcsClientType         [2] IMPLICIT LCSClientType OPTIONAL,
 *    lcsClientIdentity     [3] IMPLICIT LCSClientIdentity OPTIONAL,
 *    servedIMSI            [4] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedMSISDN          [5] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    servingEntity         [6] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    locationEstimate      [7] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    positioningData       [8] IMPLICIT OCTET STRING ( SIZE( 1 .. 33 ) ) OPTIONAL,
 *    userError             [9] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    providerError         [10] IMPLICIT INTEGER OPTIONAL,
 *    recordTimeStamp       [11] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    localSequenceNumber   [12] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions      [13] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * 
 * @class
 */
export
class LCSGMORecord {
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
     * @summary `servedIMSI`.
     * @public
     * @readonly
     */
    readonly servedIMSI: OCTET_STRING;
    /**
     * @summary `servedMSISDN`.
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servingEntity`.
     * @public
     * @readonly
     */
    readonly servingEntity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `locationEstimate`.
     * @public
     * @readonly
     */
    readonly locationEstimate: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `positioningData`.
     * @public
     * @readonly
     */
    readonly positioningData: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `userError`.
     * @public
     * @readonly
     */
    readonly userError: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `providerError`.
     * @public
     * @readonly
     */
    readonly providerError: OPTIONAL<INTEGER>;
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

    constructor (
        recordType: RecordType,
        recordingEntity: OCTET_STRING,
        lcsClientType: OPTIONAL<LCSClientType>,
        lcsClientIdentity: OPTIONAL<LCSClientIdentity>,
        servedIMSI: OCTET_STRING,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        servingEntity: OPTIONAL<OCTET_STRING>,
        locationEstimate: OPTIONAL<OCTET_STRING>,
        positioningData: OPTIONAL<OCTET_STRING>,
        userError: OPTIONAL<OCTET_STRING>,
        providerError: OPTIONAL<INTEGER>,
        recordTimeStamp: OCTET_STRING,
        localSequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.recordingEntity = recordingEntity;
        this.lcsClientType = lcsClientType;
        this.lcsClientIdentity = lcsClientIdentity;
        this.servedIMSI = servedIMSI;
        this.servedMSISDN = servedMSISDN;
        this.servingEntity = servingEntity;
        this.locationEstimate = locationEstimate;
        this.positioningData = positioningData;
        this.userError = userError;
        this.providerError = providerError;
        this.recordTimeStamp = recordTimeStamp;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
    
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("LCSGMORecord.recordingEntity violates SIZE constraint");
        }
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("LCSGMORecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("LCSGMORecord.servedMSISDN violates SIZE constraint");
        }
        if (this.servingEntity !== undefined && (this.servingEntity.length < 1 || this.servingEntity.length > 20)) {
            throw new ASN1SizeError("LCSGMORecord.servingEntity violates SIZE constraint");
        }
        if (this.locationEstimate !== undefined && (this.locationEstimate.length < 1 || this.locationEstimate.length > 20)) {
            throw new ASN1SizeError("LCSGMORecord.locationEstimate violates SIZE constraint");
        }
        if (this.positioningData !== undefined && (this.positioningData.length < 1 || this.positioningData.length > 33)) {
            throw new ASN1SizeError("LCSGMORecord.positioningData violates SIZE constraint");
        }
        if (this.userError !== undefined && (this.userError.length !== 1)) {
            throw new ASN1SizeError("LCSGMORecord.userError violates SIZE constraint");
        }
        if ((this.recordTimeStamp.length !== 9)) {
            throw new ASN1SizeError("LCSGMORecord.recordTimeStamp violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && ((typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) < 0 || (typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) > 4294967295)) {
            throw new ASN1OverflowError("LCSGMORecord.localSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a LCSGMORecord
     * @description
     * 
     * This takes an `object` and converts it to a `LCSGMORecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LCSGMORecord`.
     * @returns {LCSGMORecord}
     */
    public static _from_object (_o: { [_K in keyof (LCSGMORecord)]: (LCSGMORecord)[_K] }): LCSGMORecord {
        return new LCSGMORecord(_o.recordType, _o.recordingEntity, _o.lcsClientType, _o.lcsClientIdentity, _o.servedIMSI, _o.servedMSISDN, _o.servingEntity, _o.locationEstimate, _o.positioningData, _o.userError, _o.providerError, _o.recordTimeStamp, _o.localSequenceNumber, _o.recordExtensions);
    }

        /**
         * @summary The enum used as the type of the component `lcsClientType`
         * @public
         * @static
         */

    public static _enum_for_lcsClientType = _enum_for_LCSClientType;
}

/**
 * @summary The Leading Root Component Types of LCSGMORecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LCSGMORecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lcsClientType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("lcsClientIdentity", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("servingEntity", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("locationEstimate", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("positioningData", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("userError", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("providerError", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("recordTimeStamp", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 13))
];

/**
 * @summary The Trailing Root Component Types of LCSGMORecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LCSGMORecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LCSGMORecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LCSGMORecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LCSGMORecord: $.ASN1Decoder<LCSGMORecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCSGMORecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCSGMORecord (el: _Element): LCSGMORecord {
    if (!_cached_decoder_for_LCSGMORecord) { _cached_decoder_for_LCSGMORecord = function (el: _Element): LCSGMORecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let recordingEntity!: OCTET_STRING;
    let lcsClientType: OPTIONAL<LCSClientType>;
    let lcsClientIdentity: OPTIONAL<LCSClientIdentity>;
    let servedIMSI!: OCTET_STRING;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let servingEntity: OPTIONAL<OCTET_STRING>;
    let locationEstimate: OPTIONAL<OCTET_STRING>;
    let positioningData: OPTIONAL<OCTET_STRING>;
    let userError: OPTIONAL<OCTET_STRING>;
    let providerError: OPTIONAL<INTEGER>;
    let recordTimeStamp!: OCTET_STRING;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lcsClientType": (_el: _Element): void => { lcsClientType = $._decode_implicit<LCSClientType>(() => _decode_LCSClientType)(_el); },
        "lcsClientIdentity": (_el: _Element): void => { lcsClientIdentity = $._decode_implicit<LCSClientIdentity>(() => _decode_LCSClientIdentity)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servingEntity": (_el: _Element): void => { servingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "locationEstimate": (_el: _Element): void => { locationEstimate = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "positioningData": (_el: _Element): void => { positioningData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "userError": (_el: _Element): void => { userError = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "providerError": (_el: _Element): void => { providerError = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordTimeStamp": (_el: _Element): void => { recordTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_LCSGMORecord,
        _extension_additions_list_spec_for_LCSGMORecord,
        _root_component_type_list_2_spec_for_LCSGMORecord,
        undefined,
    );
    return new LCSGMORecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        recordingEntity,
        lcsClientType,
        lcsClientIdentity,
        servedIMSI,
        servedMSISDN,
        servingEntity,
        locationEstimate,
        positioningData,
        userError,
        providerError,
        recordTimeStamp,
        localSequenceNumber,
        recordExtensions
    );
}; }
    return _cached_decoder_for_LCSGMORecord(el);
}

let _cached_encoder_for_LCSGMORecord: $.ASN1Encoder<LCSGMORecord> | null = null;

/**
 * @summary Encodes a(n) LCSGMORecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCSGMORecord, encoded as an ASN.1 Element.
 */
export
function _encode_LCSGMORecord (value: LCSGMORecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCSGMORecord) { _cached_encoder_for_LCSGMORecord = function (value: LCSGMORecord, _elGetter: $.ASN1Encoder<LCSGMORecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.lcsClientType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_LCSClientType, $.BER)(value.lcsClientType, $.BER));
    }
    if (value.lcsClientIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_LCSClientIdentity, $.BER)(value.lcsClientIdentity, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    if (value.servingEntity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.servingEntity, $.BER));
    }
    if (value.locationEstimate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.locationEstimate, $.BER));
    }
    if (value.positioningData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.positioningData, $.BER));
    }
    if (value.userError !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.userError, $.BER));
    }
    if (value.providerError !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.providerError, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.recordTimeStamp, $.BER));
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_LCSGMORecord(value, elGetter);
}


/* eslint-enable */
