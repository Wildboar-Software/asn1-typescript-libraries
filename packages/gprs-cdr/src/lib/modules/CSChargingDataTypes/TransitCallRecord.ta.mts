/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { TrunkGroup, _decode_TrunkGroup, _encode_TrunkGroup } from "../CSChargingDataTypes/TrunkGroup.ta.mjs";
import { IsdnBasicService, _decode_IsdnBasicService, _encode_IsdnBasicService, _enum_for_IsdnBasicService } from "../CSChargingDataTypes/IsdnBasicService.ta.mjs";
import { CauseForTerm, _decode_CauseForTerm, _encode_CauseForTerm } from "../CSChargingDataTypes/CauseForTerm.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { TransitCallRecord_lrnSoInd, _decode_TransitCallRecord_lrnSoInd, _encode_TransitCallRecord_lrnSoInd } from "../CSChargingDataTypes/TransitCallRecord-lrnSoInd.ta.mjs";
import { TransitCallRecord_lrnQuryStatus, _decode_TransitCallRecord_lrnQuryStatus, _encode_TransitCallRecord_lrnQuryStatus } from "../CSChargingDataTypes/TransitCallRecord-lrnQuryStatus.ta.mjs";
import { TransitCallRecord_jIPSoInd, _decode_TransitCallRecord_jIPSoInd, _encode_TransitCallRecord_jIPSoInd } from "../CSChargingDataTypes/TransitCallRecord-jIPSoInd.ta.mjs";
import { TransitCallRecord_jIPQuryStatus, _decode_TransitCallRecord_jIPQuryStatus, _encode_TransitCallRecord_jIPQuryStatus } from "../CSChargingDataTypes/TransitCallRecord-jIPQuryStatus.ta.mjs";


/**
 * @summary TransitCallRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransitCallRecord ::= SET {
 *    recordType         [0] IMPLICIT RecordType,
 *    recordingEntity    [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    mscIncomingTKGP    [2] TrunkGroup OPTIONAL,
 *    mscOutgoingTKGP    [3] TrunkGroup OPTIONAL,
 *    callingNumber      [4] IMPLICIT OCTET STRING OPTIONAL,
 *    calledNumber       [5] IMPLICIT OCTET STRING,
 *    isdnBasicService   [6] IMPLICIT IsdnBasicService OPTIONAL,
 *    seizureTimestamp   [7] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    answerTimestamp    [8] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    releaseTimestamp   [9] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    callDuration       [10] IMPLICIT INTEGER,
 *    dataVolume         [11] IMPLICIT INTEGER OPTIONAL,
 *    causeForTerm       [12] IMPLICIT CauseForTerm,
 *    diagnostics        [13] HLRIntResult OPTIONAL,
 *    callReference      [14] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ),
 *    sequenceNumber     [15] IMPLICIT INTEGER OPTIONAL,
 *    recordExtensions   [16] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    locationRoutNum    [17] IMPLICIT OCTET STRING ( SIZE( 5 ) ) OPTIONAL,
 *    lrnSoInd           [18] IMPLICIT INTEGER {
 *       lRN-NP-Database        ( 1 ),
 *       switchingSystemData    ( 2 ),
 *       incomingsignaling      ( 3 ),
 *       unknown                ( 9 )} OPTIONAL,
 *    lrnQuryStatus      [19] IMPLICIT INTEGER {
 *       successfulQuery         ( 1 ),
 *       noQueryResponseMsg      ( 2 ),
 *       queryProtocolErr        ( 4 ),
 *       queryResponseDataErr    ( 5 ),
 *       queryRejected           ( 6 ),
 *       queryNotPerformed       ( 9 ),
 *       queryUnsuccessful       ( 99 )} OPTIONAL,
 *    jIPPara            [20] IMPLICIT OCTET STRING ( SIZE( 5 ) ) OPTIONAL,
 *    jIPSoInd           [21] IMPLICIT INTEGER {
 *       lRN-NP-Database        ( 1 ),
 *       switchingSystemData    ( 2 ),
 *       incomingsignaling      ( 3 ),
 *       unknown                ( 9 )} OPTIONAL,
 *    jIPQuryStatus      [22] IMPLICIT INTEGER {
 *       successfulQuery         ( 1 ),
 *       noQueryResponseMsg      ( 2 ),
 *       queryProtocolErr        ( 4 ),
 *       queryResponseDataErr    ( 5 ),
 *       queryRejected           ( 6 ),
 *       queryNotPerformed       ( 9 ),
 *       queryUnsuccessful       ( 99 )} OPTIONAL}
 * ```
 * 
 * @class
 */
export
class TransitCallRecord {
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
     * @summary `mscIncomingTKGP`.
     * @public
     * @readonly
     */
    readonly mscIncomingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `mscOutgoingTKGP`.
     * @public
     * @readonly
     */
    readonly mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `callingNumber`.
     * @public
     * @readonly
     */
    readonly callingNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `calledNumber`.
     * @public
     * @readonly
     */
    readonly calledNumber: OCTET_STRING;
    /**
     * @summary `isdnBasicService`.
     * @public
     * @readonly
     */
    readonly isdnBasicService: OPTIONAL<IsdnBasicService>;
    /**
     * @summary `seizureTimestamp`.
     * @public
     * @readonly
     */
    readonly seizureTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `answerTimestamp`.
     * @public
     * @readonly
     */
    readonly answerTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `releaseTimestamp`.
     * @public
     * @readonly
     */
    readonly releaseTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `callDuration`.
     * @public
     * @readonly
     */
    readonly callDuration: INTEGER;
    /**
     * @summary `dataVolume`.
     * @public
     * @readonly
     */
    readonly dataVolume: OPTIONAL<INTEGER>;
    /**
     * @summary `causeForTerm`.
     * @public
     * @readonly
     */
    readonly causeForTerm: CauseForTerm;
    /**
     * @summary `diagnostics`.
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<HLRIntResult>;
    /**
     * @summary `callReference`.
     * @public
     * @readonly
     */
    readonly callReference: OCTET_STRING;
    /**
     * @summary `sequenceNumber`.
     * @public
     * @readonly
     */
    readonly sequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `locationRoutNum`.
     * @public
     * @readonly
     */
    readonly locationRoutNum: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `lrnSoInd`.
     * @public
     * @readonly
     */
    readonly lrnSoInd: OPTIONAL<TransitCallRecord_lrnSoInd>;
    /**
     * @summary `lrnQuryStatus`.
     * @public
     * @readonly
     */
    readonly lrnQuryStatus: OPTIONAL<TransitCallRecord_lrnQuryStatus>;
    /**
     * @summary `jIPPara`.
     * @public
     * @readonly
     */
    readonly jIPPara: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `jIPSoInd`.
     * @public
     * @readonly
     */
    readonly jIPSoInd: OPTIONAL<TransitCallRecord_jIPSoInd>;
    /**
     * @summary `jIPQuryStatus`.
     * @public
     * @readonly
     */
    readonly jIPQuryStatus: OPTIONAL<TransitCallRecord_jIPQuryStatus>;

    constructor (
        recordType: RecordType,
        recordingEntity: OCTET_STRING,
        mscIncomingTKGP: OPTIONAL<TrunkGroup>,
        mscOutgoingTKGP: OPTIONAL<TrunkGroup>,
        callingNumber: OPTIONAL<OCTET_STRING>,
        calledNumber: OCTET_STRING,
        isdnBasicService: OPTIONAL<IsdnBasicService>,
        seizureTimestamp: OPTIONAL<OCTET_STRING>,
        answerTimestamp: OPTIONAL<OCTET_STRING>,
        releaseTimestamp: OPTIONAL<OCTET_STRING>,
        callDuration: INTEGER,
        dataVolume: OPTIONAL<INTEGER>,
        causeForTerm: CauseForTerm,
        diagnostics: OPTIONAL<HLRIntResult>,
        callReference: OCTET_STRING,
        sequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        locationRoutNum: OPTIONAL<OCTET_STRING>,
        lrnSoInd: OPTIONAL<TransitCallRecord_lrnSoInd>,
        lrnQuryStatus: OPTIONAL<TransitCallRecord_lrnQuryStatus>,
        jIPPara: OPTIONAL<OCTET_STRING>,
        jIPSoInd: OPTIONAL<TransitCallRecord_jIPSoInd>,
        jIPQuryStatus: OPTIONAL<TransitCallRecord_jIPQuryStatus>
    ) {
        this.recordType = recordType;
        this.recordingEntity = recordingEntity;
        this.mscIncomingTKGP = mscIncomingTKGP;
        this.mscOutgoingTKGP = mscOutgoingTKGP;
        this.callingNumber = callingNumber;
        this.calledNumber = calledNumber;
        this.isdnBasicService = isdnBasicService;
        this.seizureTimestamp = seizureTimestamp;
        this.answerTimestamp = answerTimestamp;
        this.releaseTimestamp = releaseTimestamp;
        this.callDuration = callDuration;
        this.dataVolume = dataVolume;
        this.causeForTerm = causeForTerm;
        this.diagnostics = diagnostics;
        this.callReference = callReference;
        this.sequenceNumber = sequenceNumber;
        this.recordExtensions = recordExtensions;
        this.locationRoutNum = locationRoutNum;
        this.lrnSoInd = lrnSoInd;
        this.lrnQuryStatus = lrnQuryStatus;
        this.jIPPara = jIPPara;
        this.jIPSoInd = jIPSoInd;
        this.jIPQuryStatus = jIPQuryStatus;
    
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("TransitCallRecord.recordingEntity violates SIZE constraint");
        }
        if (this.seizureTimestamp !== undefined && (this.seizureTimestamp.length !== 9)) {
            throw new ASN1SizeError("TransitCallRecord.seizureTimestamp violates SIZE constraint");
        }
        if (this.answerTimestamp !== undefined && (this.answerTimestamp.length !== 9)) {
            throw new ASN1SizeError("TransitCallRecord.answerTimestamp violates SIZE constraint");
        }
        if (this.releaseTimestamp !== undefined && (this.releaseTimestamp.length !== 9)) {
            throw new ASN1SizeError("TransitCallRecord.releaseTimestamp violates SIZE constraint");
        }
        if ((this.callReference.length < 1 || this.callReference.length > 8)) {
            throw new ASN1SizeError("TransitCallRecord.callReference violates SIZE constraint");
        }
        if (this.locationRoutNum !== undefined && (this.locationRoutNum.length !== 5)) {
            throw new ASN1SizeError("TransitCallRecord.locationRoutNum violates SIZE constraint");
        }
        if (this.jIPPara !== undefined && (this.jIPPara.length !== 5)) {
            throw new ASN1SizeError("TransitCallRecord.jIPPara violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a TransitCallRecord
     * @description
     * 
     * This takes an `object` and converts it to a `TransitCallRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TransitCallRecord`.
     * @returns {TransitCallRecord}
     */
    public static _from_object (_o: { [_K in keyof (TransitCallRecord)]: (TransitCallRecord)[_K] }): TransitCallRecord {
        return new TransitCallRecord(_o.recordType, _o.recordingEntity, _o.mscIncomingTKGP, _o.mscOutgoingTKGP, _o.callingNumber, _o.calledNumber, _o.isdnBasicService, _o.seizureTimestamp, _o.answerTimestamp, _o.releaseTimestamp, _o.callDuration, _o.dataVolume, _o.causeForTerm, _o.diagnostics, _o.callReference, _o.sequenceNumber, _o.recordExtensions, _o.locationRoutNum, _o.lrnSoInd, _o.lrnQuryStatus, _o.jIPPara, _o.jIPSoInd, _o.jIPQuryStatus);
    }

        /**
         * @summary The enum used as the type of the component `isdnBasicService`
         * @public
         * @static
         */

    public static _enum_for_isdnBasicService = _enum_for_IsdnBasicService;
}

/**
 * @summary The Leading Root Component Types of TransitCallRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TransitCallRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mscIncomingTKGP", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mscOutgoingTKGP", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callingNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("calledNumber", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("isdnBasicService", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("seizureTimestamp", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("answerTimestamp", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("releaseTimestamp", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("callDuration", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("dataVolume", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("causeForTerm", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("callReference", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("locationRoutNum", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("lrnSoInd", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("lrnQuryStatus", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("jIPPara", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("jIPSoInd", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("jIPQuryStatus", true, $.hasTag(_TagClass.context, 22))
];

/**
 * @summary The Trailing Root Component Types of TransitCallRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TransitCallRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TransitCallRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TransitCallRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TransitCallRecord: $.ASN1Decoder<TransitCallRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransitCallRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransitCallRecord (el: _Element): TransitCallRecord {
    if (!_cached_decoder_for_TransitCallRecord) { _cached_decoder_for_TransitCallRecord = function (el: _Element): TransitCallRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let recordingEntity!: OCTET_STRING;
    let mscIncomingTKGP: OPTIONAL<TrunkGroup>;
    let mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    let callingNumber: OPTIONAL<OCTET_STRING>;
    let calledNumber!: OCTET_STRING;
    let isdnBasicService: OPTIONAL<IsdnBasicService>;
    let seizureTimestamp: OPTIONAL<OCTET_STRING>;
    let answerTimestamp: OPTIONAL<OCTET_STRING>;
    let releaseTimestamp: OPTIONAL<OCTET_STRING>;
    let callDuration!: INTEGER;
    let dataVolume: OPTIONAL<INTEGER>;
    let causeForTerm!: CauseForTerm;
    let diagnostics: OPTIONAL<HLRIntResult>;
    let callReference!: OCTET_STRING;
    let sequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let locationRoutNum: OPTIONAL<OCTET_STRING>;
    let lrnSoInd: OPTIONAL<TransitCallRecord_lrnSoInd>;
    let lrnQuryStatus: OPTIONAL<TransitCallRecord_lrnQuryStatus>;
    let jIPPara: OPTIONAL<OCTET_STRING>;
    let jIPSoInd: OPTIONAL<TransitCallRecord_jIPSoInd>;
    let jIPQuryStatus: OPTIONAL<TransitCallRecord_jIPQuryStatus>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mscIncomingTKGP": (_el: _Element): void => { mscIncomingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "mscOutgoingTKGP": (_el: _Element): void => { mscOutgoingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "callingNumber": (_el: _Element): void => { callingNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "calledNumber": (_el: _Element): void => { calledNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "isdnBasicService": (_el: _Element): void => { isdnBasicService = $._decode_implicit<IsdnBasicService>(() => _decode_IsdnBasicService)(_el); },
        "seizureTimestamp": (_el: _Element): void => { seizureTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "answerTimestamp": (_el: _Element): void => { answerTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "releaseTimestamp": (_el: _Element): void => { releaseTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callDuration": (_el: _Element): void => { callDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolume": (_el: _Element): void => { dataVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForTerm": (_el: _Element): void => { causeForTerm = $._decode_implicit<CauseForTerm>(() => _decode_CauseForTerm)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "callReference": (_el: _Element): void => { callReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "locationRoutNum": (_el: _Element): void => { locationRoutNum = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lrnSoInd": (_el: _Element): void => { lrnSoInd = $._decode_implicit<TransitCallRecord_lrnSoInd>(() => _decode_TransitCallRecord_lrnSoInd)(_el); },
        "lrnQuryStatus": (_el: _Element): void => { lrnQuryStatus = $._decode_implicit<TransitCallRecord_lrnQuryStatus>(() => _decode_TransitCallRecord_lrnQuryStatus)(_el); },
        "jIPPara": (_el: _Element): void => { jIPPara = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "jIPSoInd": (_el: _Element): void => { jIPSoInd = $._decode_implicit<TransitCallRecord_jIPSoInd>(() => _decode_TransitCallRecord_jIPSoInd)(_el); },
        "jIPQuryStatus": (_el: _Element): void => { jIPQuryStatus = $._decode_implicit<TransitCallRecord_jIPQuryStatus>(() => _decode_TransitCallRecord_jIPQuryStatus)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_TransitCallRecord,
        _extension_additions_list_spec_for_TransitCallRecord,
        _root_component_type_list_2_spec_for_TransitCallRecord,
        undefined,
    );
    return new TransitCallRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        recordingEntity,
        mscIncomingTKGP,
        mscOutgoingTKGP,
        callingNumber,
        calledNumber,
        isdnBasicService,
        seizureTimestamp,
        answerTimestamp,
        releaseTimestamp,
        callDuration,
        dataVolume,
        causeForTerm,
        diagnostics,
        callReference,
        sequenceNumber,
        recordExtensions,
        locationRoutNum,
        lrnSoInd,
        lrnQuryStatus,
        jIPPara,
        jIPSoInd,
        jIPQuryStatus
    );
}; }
    return _cached_decoder_for_TransitCallRecord(el);
}

let _cached_encoder_for_TransitCallRecord: $.ASN1Encoder<TransitCallRecord> | null = null;

/**
 * @summary Encodes a(n) TransitCallRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransitCallRecord, encoded as an ASN.1 Element.
 */
export
function _encode_TransitCallRecord (value: TransitCallRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransitCallRecord) { _cached_encoder_for_TransitCallRecord = function (value: TransitCallRecord, _elGetter: $.ASN1Encoder<TransitCallRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.mscIncomingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_TrunkGroup, $.BER)(value.mscIncomingTKGP, $.BER));
    }
    if (value.mscOutgoingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_TrunkGroup, $.BER)(value.mscOutgoingTKGP, $.BER));
    }
    if (value.callingNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.callingNumber, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.calledNumber, $.BER));
    if (value.isdnBasicService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_IsdnBasicService, $.BER)(value.isdnBasicService, $.BER));
    }
    if (value.seizureTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.seizureTimestamp, $.BER));
    }
    if (value.answerTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.answerTimestamp, $.BER));
    }
    if (value.releaseTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.releaseTimestamp, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.callDuration, $.BER));
    if (value.dataVolume !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.dataVolume, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => _encode_CauseForTerm, $.BER)(value.causeForTerm, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 13, () => _encode_HLRIntResult, $.BER)(value.diagnostics, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => $._encodeOctetString, $.BER)(value.callReference, $.BER));
    if (value.sequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.locationRoutNum !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.locationRoutNum, $.BER));
    }
    if (value.lrnSoInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_TransitCallRecord_lrnSoInd, $.BER)(value.lrnSoInd, $.BER));
    }
    if (value.lrnQuryStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_TransitCallRecord_lrnQuryStatus, $.BER)(value.lrnQuryStatus, $.BER));
    }
    if (value.jIPPara !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.jIPPara, $.BER));
    }
    if (value.jIPSoInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_TransitCallRecord_jIPSoInd, $.BER)(value.jIPSoInd, $.BER));
    }
    if (value.jIPQuryStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_TransitCallRecord_jIPQuryStatus, $.BER)(value.jIPQuryStatus, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_TransitCallRecord(value, elGetter);
}


/* eslint-enable */
