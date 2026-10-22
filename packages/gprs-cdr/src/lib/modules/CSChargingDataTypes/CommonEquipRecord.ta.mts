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
import { CommonEquipRecord_equipmentType, _decode_CommonEquipRecord_equipmentType, _encode_CommonEquipRecord_equipmentType } from "../CSChargingDataTypes/CommonEquipRecord-equipmentType.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService } from "../CSChargingDataTypes/BasicService.ta.mjs";
import { ChangeOfService, _decode_ChangeOfService, _encode_ChangeOfService } from "../CSChargingDataTypes/ChangeOfService.ta.mjs";
import { SuppServiceUsed, _decode_SuppServiceUsed, _encode_SuppServiceUsed } from "../CSChargingDataTypes/SuppServiceUsed.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { SystemType, _decode_SystemType, _encode_SystemType, _enum_for_SystemType } from "../CSChargingDataTypes/SystemType.ta.mjs";
import { Fnur, _decode_Fnur, _encode_Fnur, _enum_for_Fnur } from "../CSChargingDataTypes/Fnur.ta.mjs";


/**
 * @summary CommonEquipRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonEquipRecord ::= SET {
 *    recordType          [0] IMPLICIT RecordType,
 *    equipmentType       [1] IMPLICIT INTEGER {
 *       conferenceBridge    ( 0 )},
 *    equipmentId         [2] IMPLICIT INTEGER,
 *    servedIMSI          [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedMSISDN        [4] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    recordingEntity     [5] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    basicService        [6] BasicService OPTIONAL,
 *    changeOfService     [7] IMPLICIT SEQUENCE  OF
 *       ChangeOfService OPTIONAL,
 *    supplServicesUsed   [8] IMPLICIT SEQUENCE  OF
 *       SuppServiceUsed OPTIONAL,
 *    seizureTime         [9] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    releaseTime         [10] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    callDuration        [11] IMPLICIT INTEGER,
 *    callReference       [12] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ),
 *    sequenceNumber      [13] IMPLICIT INTEGER OPTIONAL,
 *    recordExtensions    [14] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    systemType          [15] IMPLICIT SystemType OPTIONAL,
 *    rateIndication      [16] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    fnur                [17] IMPLICIT Fnur OPTIONAL}
 * ```
 * 
 * @class
 */
export
class CommonEquipRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `equipmentType`.
     * @public
     * @readonly
     */
    readonly equipmentType: CommonEquipRecord_equipmentType;
    /**
     * @summary `equipmentId`.
     * @public
     * @readonly
     */
    readonly equipmentId: INTEGER;
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
     * @summary `recordingEntity`.
     * @public
     * @readonly
     */
    readonly recordingEntity: OCTET_STRING;
    /**
     * @summary `basicService`.
     * @public
     * @readonly
     */
    readonly basicService: OPTIONAL<BasicService>;
    /**
     * @summary `changeOfService`.
     * @public
     * @readonly
     */
    readonly changeOfService: OPTIONAL<ChangeOfService[]>;
    /**
     * @summary `supplServicesUsed`.
     * @public
     * @readonly
     */
    readonly supplServicesUsed: OPTIONAL<SuppServiceUsed[]>;
    /**
     * @summary `seizureTime`.
     * @public
     * @readonly
     */
    readonly seizureTime: OCTET_STRING;
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
     * @summary `systemType`.
     * @public
     * @readonly
     */
    readonly systemType: OPTIONAL<SystemType>;
    /**
     * @summary `rateIndication`.
     * @public
     * @readonly
     */
    readonly rateIndication: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `fnur`.
     * @public
     * @readonly
     */
    readonly fnur: OPTIONAL<Fnur>;

    constructor (
        recordType: RecordType,
        equipmentType: CommonEquipRecord_equipmentType,
        equipmentId: INTEGER,
        servedIMSI: OCTET_STRING,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        recordingEntity: OCTET_STRING,
        basicService: OPTIONAL<BasicService>,
        changeOfService: OPTIONAL<ChangeOfService[]>,
        supplServicesUsed: OPTIONAL<SuppServiceUsed[]>,
        seizureTime: OCTET_STRING,
        releaseTime: OPTIONAL<OCTET_STRING>,
        callDuration: INTEGER,
        callReference: OCTET_STRING,
        sequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        systemType: OPTIONAL<SystemType>,
        rateIndication: OPTIONAL<OCTET_STRING>,
        fnur: OPTIONAL<Fnur>
    ) {
        this.recordType = recordType;
        this.equipmentType = equipmentType;
        this.equipmentId = equipmentId;
        this.servedIMSI = servedIMSI;
        this.servedMSISDN = servedMSISDN;
        this.recordingEntity = recordingEntity;
        this.basicService = basicService;
        this.changeOfService = changeOfService;
        this.supplServicesUsed = supplServicesUsed;
        this.seizureTime = seizureTime;
        this.releaseTime = releaseTime;
        this.callDuration = callDuration;
        this.callReference = callReference;
        this.sequenceNumber = sequenceNumber;
        this.recordExtensions = recordExtensions;
        this.systemType = systemType;
        this.rateIndication = rateIndication;
        this.fnur = fnur;
    
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("CommonEquipRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("CommonEquipRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("CommonEquipRecord.recordingEntity violates SIZE constraint");
        }
        if ((this.seizureTime.length !== 9)) {
            throw new ASN1SizeError("CommonEquipRecord.seizureTime violates SIZE constraint");
        }
        if (this.releaseTime !== undefined && (this.releaseTime.length !== 9)) {
            throw new ASN1SizeError("CommonEquipRecord.releaseTime violates SIZE constraint");
        }
        if ((this.callReference.length < 1 || this.callReference.length > 8)) {
            throw new ASN1SizeError("CommonEquipRecord.callReference violates SIZE constraint");
        }
        if (this.rateIndication !== undefined && (this.rateIndication.length !== 1)) {
            throw new ASN1SizeError("CommonEquipRecord.rateIndication violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a CommonEquipRecord
     * @description
     * 
     * This takes an `object` and converts it to a `CommonEquipRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonEquipRecord`.
     * @returns {CommonEquipRecord}
     */
    public static _from_object (_o: { [_K in keyof (CommonEquipRecord)]: (CommonEquipRecord)[_K] }): CommonEquipRecord {
        return new CommonEquipRecord(_o.recordType, _o.equipmentType, _o.equipmentId, _o.servedIMSI, _o.servedMSISDN, _o.recordingEntity, _o.basicService, _o.changeOfService, _o.supplServicesUsed, _o.seizureTime, _o.releaseTime, _o.callDuration, _o.callReference, _o.sequenceNumber, _o.recordExtensions, _o.systemType, _o.rateIndication, _o.fnur);
    }

        /**
         * @summary The enum used as the type of the component `systemType`
         * @public
         * @static
         */

    public static _enum_for_systemType = _enum_for_SystemType;        /**
         * @summary The enum used as the type of the component `fnur`
         * @public
         * @static
         */

    public static _enum_for_fnur = _enum_for_Fnur;
}

/**
 * @summary The Leading Root Component Types of CommonEquipRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommonEquipRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("equipmentType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("equipmentId", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("basicService", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("changeOfService", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("supplServicesUsed", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("seizureTime", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("releaseTime", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("callDuration", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("callReference", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("systemType", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("rateIndication", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("fnur", true, $.hasTag(_TagClass.context, 17))
];

/**
 * @summary The Trailing Root Component Types of CommonEquipRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommonEquipRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommonEquipRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommonEquipRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommonEquipRecord: $.ASN1Decoder<CommonEquipRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonEquipRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonEquipRecord (el: _Element): CommonEquipRecord {
    if (!_cached_decoder_for_CommonEquipRecord) { _cached_decoder_for_CommonEquipRecord = function (el: _Element): CommonEquipRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let equipmentType!: CommonEquipRecord_equipmentType;
    let equipmentId!: INTEGER;
    let servedIMSI!: OCTET_STRING;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let recordingEntity!: OCTET_STRING;
    let basicService: OPTIONAL<BasicService>;
    let changeOfService: OPTIONAL<ChangeOfService[]>;
    let supplServicesUsed: OPTIONAL<SuppServiceUsed[]>;
    let seizureTime!: OCTET_STRING;
    let releaseTime: OPTIONAL<OCTET_STRING>;
    let callDuration!: INTEGER;
    let callReference!: OCTET_STRING;
    let sequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let systemType: OPTIONAL<SystemType>;
    let rateIndication: OPTIONAL<OCTET_STRING>;
    let fnur: OPTIONAL<Fnur>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "equipmentType": (_el: _Element): void => { equipmentType = $._decode_implicit<CommonEquipRecord_equipmentType>(() => _decode_CommonEquipRecord_equipmentType)(_el); },
        "equipmentId": (_el: _Element): void => { equipmentId = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "basicService": (_el: _Element): void => { basicService = $._decode_explicit<BasicService>(() => _decode_BasicService)(_el); },
        "changeOfService": (_el: _Element): void => { changeOfService = $._decode_implicit<ChangeOfService[]>(() => $._decodeSequenceOf<ChangeOfService>(() => _decode_ChangeOfService))(_el); },
        "supplServicesUsed": (_el: _Element): void => { supplServicesUsed = $._decode_implicit<SuppServiceUsed[]>(() => $._decodeSequenceOf<SuppServiceUsed>(() => _decode_SuppServiceUsed))(_el); },
        "seizureTime": (_el: _Element): void => { seizureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "releaseTime": (_el: _Element): void => { releaseTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callDuration": (_el: _Element): void => { callDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "callReference": (_el: _Element): void => { callReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "systemType": (_el: _Element): void => { systemType = $._decode_implicit<SystemType>(() => _decode_SystemType)(_el); },
        "rateIndication": (_el: _Element): void => { rateIndication = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "fnur": (_el: _Element): void => { fnur = $._decode_implicit<Fnur>(() => _decode_Fnur)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_CommonEquipRecord,
        _extension_additions_list_spec_for_CommonEquipRecord,
        _root_component_type_list_2_spec_for_CommonEquipRecord,
        undefined,
    );
    return new CommonEquipRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        equipmentType,
        equipmentId,
        servedIMSI,
        servedMSISDN,
        recordingEntity,
        basicService,
        changeOfService,
        supplServicesUsed,
        seizureTime,
        releaseTime,
        callDuration,
        callReference,
        sequenceNumber,
        recordExtensions,
        systemType,
        rateIndication,
        fnur
    );
}; }
    return _cached_decoder_for_CommonEquipRecord(el);
}

let _cached_encoder_for_CommonEquipRecord: $.ASN1Encoder<CommonEquipRecord> | null = null;

/**
 * @summary Encodes a(n) CommonEquipRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonEquipRecord, encoded as an ASN.1 Element.
 */
export
function _encode_CommonEquipRecord (value: CommonEquipRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonEquipRecord) { _cached_encoder_for_CommonEquipRecord = function (value: CommonEquipRecord, _elGetter: $.ASN1Encoder<CommonEquipRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CommonEquipRecord_equipmentType, $.BER)(value.equipmentType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.equipmentId, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.basicService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_BasicService, $.BER)(value.basicService, $.BER));
    }
    if (value.changeOfService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<ChangeOfService>(() => _encode_ChangeOfService, $.BER), $.BER)(value.changeOfService, $.BER));
    }
    if (value.supplServicesUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<SuppServiceUsed>(() => _encode_SuppServiceUsed, $.BER), $.BER)(value.supplServicesUsed, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.seizureTime, $.BER));
    if (value.releaseTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.releaseTime, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.callDuration, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.callReference, $.BER));
    if (value.sequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.systemType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_SystemType, $.BER)(value.systemType, $.BER));
    }
    if (value.rateIndication !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.rateIndication, $.BER));
    }
    if (value.fnur !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_Fnur, $.BER)(value.fnur, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_CommonEquipRecord(value, elGetter);
}


/* eslint-enable */
