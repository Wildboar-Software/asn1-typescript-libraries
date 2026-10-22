/* eslint-disable */
import {
    BOOLEAN,
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
import { CauseForTerm, _decode_CauseForTerm, _encode_CauseForTerm } from "../CSChargingDataTypes/CauseForTerm.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { OutGatewayRecord_lrnSoInd, _decode_OutGatewayRecord_lrnSoInd, _encode_OutGatewayRecord_lrnSoInd } from "../CSChargingDataTypes/OutGatewayRecord-lrnSoInd.ta.mjs";
import { OutGatewayRecord_lrnQuryStatus, _decode_OutGatewayRecord_lrnQuryStatus, _encode_OutGatewayRecord_lrnQuryStatus } from "../CSChargingDataTypes/OutGatewayRecord-lrnQuryStatus.ta.mjs";
import { OutGatewayRecord_jIPSoInd, _decode_OutGatewayRecord_jIPSoInd, _encode_OutGatewayRecord_jIPSoInd } from "../CSChargingDataTypes/OutGatewayRecord-jIPSoInd.ta.mjs";
import { OutGatewayRecord_jIPQuryStatus, _decode_OutGatewayRecord_jIPQuryStatus, _encode_OutGatewayRecord_jIPQuryStatus } from "../CSChargingDataTypes/OutGatewayRecord-jIPQuryStatus.ta.mjs";
import { ReasonForServiceChange, _decode_ReasonForServiceChange, _encode_ReasonForServiceChange, _enum_for_ReasonForServiceChange } from "../CSChargingDataTypes/ReasonForServiceChange.ta.mjs";


/**
 * @summary OutGatewayRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OutGatewayRecord ::= SET {
 *    recordType               [0] IMPLICIT RecordType,
 *    callingNumber            [1] IMPLICIT OCTET STRING OPTIONAL,
 *    calledNumber             [2] IMPLICIT OCTET STRING,
 *    recordingEntity          [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    mscIncomingTKGP          [4] TrunkGroup OPTIONAL,
 *    mscOutgoingTKGP          [5] TrunkGroup OPTIONAL,
 *    seizureTime              [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    answerTime               [7] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    releaseTime              [8] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    callDuration             [9] IMPLICIT INTEGER,
 *    dataVolume               [10] IMPLICIT INTEGER OPTIONAL,
 *    causeForTerm             [11] IMPLICIT CauseForTerm,
 *    diagnostics              [12] HLRIntResult OPTIONAL,
 *    callReference            [13] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ),
 *    sequenceNumber           [14] IMPLICIT INTEGER OPTIONAL,
 *    recordExtensions         [15] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    locationRoutNum          [16] IMPLICIT OCTET STRING ( SIZE( 5 ) ) OPTIONAL,
 *    lrnSoInd                 [17] IMPLICIT INTEGER {
 *       lRN-NP-Database        ( 1 ),
 *       switchingSystemData    ( 2 ),
 *       incomingsignaling      ( 3 ),
 *       unknown                ( 9 )} OPTIONAL,
 *    lrnQuryStatus            [18] IMPLICIT INTEGER {
 *       successfulQuery         ( 1 ),
 *       noQueryResponseMsg      ( 2 ),
 *       queryProtocolErr        ( 4 ),
 *       queryResponseDataErr    ( 5 ),
 *       queryRejected           ( 6 ),
 *       queryNotPerformed       ( 9 ),
 *       queryUnsuccessful       ( 99 )} OPTIONAL,
 *    jIPPara                  [19] IMPLICIT OCTET STRING ( SIZE( 5 ) ) OPTIONAL,
 *    jIPSoInd                 [20] IMPLICIT INTEGER {
 *       lRN-NP-Database        ( 1 ),
 *       switchingSystemData    ( 2 ),
 *       incomingsignaling      ( 3 ),
 *       unknown                ( 9 )} OPTIONAL,
 *    jIPQuryStatus            [21] IMPLICIT INTEGER {
 *       successfulQuery         ( 1 ),
 *       noQueryResponseMsg      ( 2 ),
 *       queryProtocolErr        ( 4 ),
 *       queryResponseDataErr    ( 5 ),
 *       queryRejected           ( 6 ),
 *       queryNotPerformed       ( 9 ),
 *       queryUnsuccessful       ( 99 )} OPTIONAL,
 *    reasonForServiceChange   [22] IMPLICIT ReasonForServiceChange OPTIONAL,
 *    serviceChangeInitiator   [23] IMPLICIT BOOLEAN OPTIONAL}
 * ```
 * 
 * @class
 */
export
class OutGatewayRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
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
     * @summary `seizureTime`.
     * @public
     * @readonly
     */
    readonly seizureTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `answerTime`.
     * @public
     * @readonly
     */
    readonly answerTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `releaseTime`.
     * @public
     * @readonly
     */
    readonly releaseTime: OPTIONAL<OCTET_STRING>;
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
    readonly lrnSoInd: OPTIONAL<OutGatewayRecord_lrnSoInd>;
    /**
     * @summary `lrnQuryStatus`.
     * @public
     * @readonly
     */
    readonly lrnQuryStatus: OPTIONAL<OutGatewayRecord_lrnQuryStatus>;
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
    readonly jIPSoInd: OPTIONAL<OutGatewayRecord_jIPSoInd>;
    /**
     * @summary `jIPQuryStatus`.
     * @public
     * @readonly
     */
    readonly jIPQuryStatus: OPTIONAL<OutGatewayRecord_jIPQuryStatus>;
    /**
     * @summary `reasonForServiceChange`.
     * @public
     * @readonly
     */
    readonly reasonForServiceChange: OPTIONAL<ReasonForServiceChange>;
    /**
     * @summary `serviceChangeInitiator`.
     * @public
     * @readonly
     */
    readonly serviceChangeInitiator: OPTIONAL<BOOLEAN>;

    constructor (
        recordType: RecordType,
        callingNumber: OPTIONAL<OCTET_STRING>,
        calledNumber: OCTET_STRING,
        recordingEntity: OCTET_STRING,
        mscIncomingTKGP: OPTIONAL<TrunkGroup>,
        mscOutgoingTKGP: OPTIONAL<TrunkGroup>,
        seizureTime: OPTIONAL<OCTET_STRING>,
        answerTime: OPTIONAL<OCTET_STRING>,
        releaseTime: OPTIONAL<OCTET_STRING>,
        callDuration: INTEGER,
        dataVolume: OPTIONAL<INTEGER>,
        causeForTerm: CauseForTerm,
        diagnostics: OPTIONAL<HLRIntResult>,
        callReference: OCTET_STRING,
        sequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        locationRoutNum: OPTIONAL<OCTET_STRING>,
        lrnSoInd: OPTIONAL<OutGatewayRecord_lrnSoInd>,
        lrnQuryStatus: OPTIONAL<OutGatewayRecord_lrnQuryStatus>,
        jIPPara: OPTIONAL<OCTET_STRING>,
        jIPSoInd: OPTIONAL<OutGatewayRecord_jIPSoInd>,
        jIPQuryStatus: OPTIONAL<OutGatewayRecord_jIPQuryStatus>,
        reasonForServiceChange: OPTIONAL<ReasonForServiceChange>,
        serviceChangeInitiator: OPTIONAL<BOOLEAN>
    ) {
        this.recordType = recordType;
        this.callingNumber = callingNumber;
        this.calledNumber = calledNumber;
        this.recordingEntity = recordingEntity;
        this.mscIncomingTKGP = mscIncomingTKGP;
        this.mscOutgoingTKGP = mscOutgoingTKGP;
        this.seizureTime = seizureTime;
        this.answerTime = answerTime;
        this.releaseTime = releaseTime;
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
        this.reasonForServiceChange = reasonForServiceChange;
        this.serviceChangeInitiator = serviceChangeInitiator;
    
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("OutGatewayRecord.recordingEntity violates SIZE constraint");
        }
        if (this.seizureTime !== undefined && (this.seizureTime.length !== 9)) {
            throw new ASN1SizeError("OutGatewayRecord.seizureTime violates SIZE constraint");
        }
        if (this.answerTime !== undefined && (this.answerTime.length !== 9)) {
            throw new ASN1SizeError("OutGatewayRecord.answerTime violates SIZE constraint");
        }
        if (this.releaseTime !== undefined && (this.releaseTime.length !== 9)) {
            throw new ASN1SizeError("OutGatewayRecord.releaseTime violates SIZE constraint");
        }
        if ((this.callReference.length < 1 || this.callReference.length > 8)) {
            throw new ASN1SizeError("OutGatewayRecord.callReference violates SIZE constraint");
        }
        if (this.locationRoutNum !== undefined && (this.locationRoutNum.length !== 5)) {
            throw new ASN1SizeError("OutGatewayRecord.locationRoutNum violates SIZE constraint");
        }
        if (this.jIPPara !== undefined && (this.jIPPara.length !== 5)) {
            throw new ASN1SizeError("OutGatewayRecord.jIPPara violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a OutGatewayRecord
     * @description
     * 
     * This takes an `object` and converts it to a `OutGatewayRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OutGatewayRecord`.
     * @returns {OutGatewayRecord}
     */
    public static _from_object (_o: { [_K in keyof (OutGatewayRecord)]: (OutGatewayRecord)[_K] }): OutGatewayRecord {
        return new OutGatewayRecord(_o.recordType, _o.callingNumber, _o.calledNumber, _o.recordingEntity, _o.mscIncomingTKGP, _o.mscOutgoingTKGP, _o.seizureTime, _o.answerTime, _o.releaseTime, _o.callDuration, _o.dataVolume, _o.causeForTerm, _o.diagnostics, _o.callReference, _o.sequenceNumber, _o.recordExtensions, _o.locationRoutNum, _o.lrnSoInd, _o.lrnQuryStatus, _o.jIPPara, _o.jIPSoInd, _o.jIPQuryStatus, _o.reasonForServiceChange, _o.serviceChangeInitiator);
    }

        /**
         * @summary The enum used as the type of the component `reasonForServiceChange`
         * @public
         * @static
         */

    public static _enum_for_reasonForServiceChange = _enum_for_ReasonForServiceChange;
}

/**
 * @summary The Leading Root Component Types of OutGatewayRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OutGatewayRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callingNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("calledNumber", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mscIncomingTKGP", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mscOutgoingTKGP", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("seizureTime", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("answerTime", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("releaseTime", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("callDuration", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("dataVolume", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("causeForTerm", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("callReference", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("locationRoutNum", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("lrnSoInd", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("lrnQuryStatus", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("jIPPara", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("jIPSoInd", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("jIPQuryStatus", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("reasonForServiceChange", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("serviceChangeInitiator", true, $.hasTag(_TagClass.context, 23))
];

/**
 * @summary The Trailing Root Component Types of OutGatewayRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OutGatewayRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OutGatewayRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OutGatewayRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OutGatewayRecord: $.ASN1Decoder<OutGatewayRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OutGatewayRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OutGatewayRecord (el: _Element): OutGatewayRecord {
    if (!_cached_decoder_for_OutGatewayRecord) { _cached_decoder_for_OutGatewayRecord = function (el: _Element): OutGatewayRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let callingNumber: OPTIONAL<OCTET_STRING>;
    let calledNumber!: OCTET_STRING;
    let recordingEntity!: OCTET_STRING;
    let mscIncomingTKGP: OPTIONAL<TrunkGroup>;
    let mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    let seizureTime: OPTIONAL<OCTET_STRING>;
    let answerTime: OPTIONAL<OCTET_STRING>;
    let releaseTime: OPTIONAL<OCTET_STRING>;
    let callDuration!: INTEGER;
    let dataVolume: OPTIONAL<INTEGER>;
    let causeForTerm!: CauseForTerm;
    let diagnostics: OPTIONAL<HLRIntResult>;
    let callReference!: OCTET_STRING;
    let sequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let locationRoutNum: OPTIONAL<OCTET_STRING>;
    let lrnSoInd: OPTIONAL<OutGatewayRecord_lrnSoInd>;
    let lrnQuryStatus: OPTIONAL<OutGatewayRecord_lrnQuryStatus>;
    let jIPPara: OPTIONAL<OCTET_STRING>;
    let jIPSoInd: OPTIONAL<OutGatewayRecord_jIPSoInd>;
    let jIPQuryStatus: OPTIONAL<OutGatewayRecord_jIPQuryStatus>;
    let reasonForServiceChange: OPTIONAL<ReasonForServiceChange>;
    let serviceChangeInitiator: OPTIONAL<BOOLEAN>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "callingNumber": (_el: _Element): void => { callingNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "calledNumber": (_el: _Element): void => { calledNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mscIncomingTKGP": (_el: _Element): void => { mscIncomingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "mscOutgoingTKGP": (_el: _Element): void => { mscOutgoingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "seizureTime": (_el: _Element): void => { seizureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "answerTime": (_el: _Element): void => { answerTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "releaseTime": (_el: _Element): void => { releaseTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callDuration": (_el: _Element): void => { callDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolume": (_el: _Element): void => { dataVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForTerm": (_el: _Element): void => { causeForTerm = $._decode_implicit<CauseForTerm>(() => _decode_CauseForTerm)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "callReference": (_el: _Element): void => { callReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "locationRoutNum": (_el: _Element): void => { locationRoutNum = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lrnSoInd": (_el: _Element): void => { lrnSoInd = $._decode_implicit<OutGatewayRecord_lrnSoInd>(() => _decode_OutGatewayRecord_lrnSoInd)(_el); },
        "lrnQuryStatus": (_el: _Element): void => { lrnQuryStatus = $._decode_implicit<OutGatewayRecord_lrnQuryStatus>(() => _decode_OutGatewayRecord_lrnQuryStatus)(_el); },
        "jIPPara": (_el: _Element): void => { jIPPara = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "jIPSoInd": (_el: _Element): void => { jIPSoInd = $._decode_implicit<OutGatewayRecord_jIPSoInd>(() => _decode_OutGatewayRecord_jIPSoInd)(_el); },
        "jIPQuryStatus": (_el: _Element): void => { jIPQuryStatus = $._decode_implicit<OutGatewayRecord_jIPQuryStatus>(() => _decode_OutGatewayRecord_jIPQuryStatus)(_el); },
        "reasonForServiceChange": (_el: _Element): void => { reasonForServiceChange = $._decode_implicit<ReasonForServiceChange>(() => _decode_ReasonForServiceChange)(_el); },
        "serviceChangeInitiator": (_el: _Element): void => { serviceChangeInitiator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OutGatewayRecord,
        _extension_additions_list_spec_for_OutGatewayRecord,
        _root_component_type_list_2_spec_for_OutGatewayRecord,
        undefined,
    );
    return new OutGatewayRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        callingNumber,
        calledNumber,
        recordingEntity,
        mscIncomingTKGP,
        mscOutgoingTKGP,
        seizureTime,
        answerTime,
        releaseTime,
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
        jIPQuryStatus,
        reasonForServiceChange,
        serviceChangeInitiator
    );
}; }
    return _cached_decoder_for_OutGatewayRecord(el);
}

let _cached_encoder_for_OutGatewayRecord: $.ASN1Encoder<OutGatewayRecord> | null = null;

/**
 * @summary Encodes a(n) OutGatewayRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OutGatewayRecord, encoded as an ASN.1 Element.
 */
export
function _encode_OutGatewayRecord (value: OutGatewayRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OutGatewayRecord) { _cached_encoder_for_OutGatewayRecord = function (value: OutGatewayRecord, _elGetter: $.ASN1Encoder<OutGatewayRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.callingNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.callingNumber, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.calledNumber, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.mscIncomingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_TrunkGroup, $.BER)(value.mscIncomingTKGP, $.BER));
    }
    if (value.mscOutgoingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_TrunkGroup, $.BER)(value.mscOutgoingTKGP, $.BER));
    }
    if (value.seizureTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.seizureTime, $.BER));
    }
    if (value.answerTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.answerTime, $.BER));
    }
    if (value.releaseTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.releaseTime, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.callDuration, $.BER));
    if (value.dataVolume !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.dataVolume, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => _encode_CauseForTerm, $.BER)(value.causeForTerm, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 12, () => _encode_HLRIntResult, $.BER)(value.diagnostics, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.callReference, $.BER));
    if (value.sequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.locationRoutNum !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.locationRoutNum, $.BER));
    }
    if (value.lrnSoInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_OutGatewayRecord_lrnSoInd, $.BER)(value.lrnSoInd, $.BER));
    }
    if (value.lrnQuryStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_OutGatewayRecord_lrnQuryStatus, $.BER)(value.lrnQuryStatus, $.BER));
    }
    if (value.jIPPara !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER)(value.jIPPara, $.BER));
    }
    if (value.jIPSoInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_OutGatewayRecord_jIPSoInd, $.BER)(value.jIPSoInd, $.BER));
    }
    if (value.jIPQuryStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_OutGatewayRecord_jIPQuryStatus, $.BER)(value.jIPQuryStatus, $.BER));
    }
    if (value.reasonForServiceChange !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_ReasonForServiceChange, $.BER)(value.reasonForServiceChange, $.BER));
    }
    if (value.serviceChangeInitiator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeBoolean, $.BER)(value.serviceChangeInitiator, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_OutGatewayRecord(value, elGetter);
}


/* eslint-enable */
