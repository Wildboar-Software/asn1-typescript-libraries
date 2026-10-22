/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { LocationAreaAndCell, _decode_LocationAreaAndCell, _encode_LocationAreaAndCell } from "../CSChargingDataTypes/LocationAreaAndCell.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService } from "../CSChargingDataTypes/BasicService.ta.mjs";
import { SSActionType, _decode_SSActionType, _encode_SSActionType, _enum_for_SSActionType } from "../CSChargingDataTypes/SSActionType.ta.mjs";
import { SSParameters, _decode_SSParameters, _encode_SSParameters } from "../CSChargingDataTypes/SSParameters.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { SystemType, _decode_SystemType, _encode_SystemType, _enum_for_SystemType } from "../CSChargingDataTypes/SystemType.ta.mjs";


/**
 * @summary SSActionRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSActionRecord ::= SET {
 *    recordType         [0] IMPLICIT RecordType,
 *    servedIMSI         [1] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedIMEI         [2] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    servedMSISDN       [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    msClassmark        [4] IMPLICIT OCTET STRING,
 *    recordingEntity    [5] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    location           [6] IMPLICIT LocationAreaAndCell OPTIONAL,
 *    basicServices      [7] IMPLICIT SET  OF
 *       BasicService OPTIONAL,
 *    supplService       [8] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    ssAction           [9] IMPLICIT SSActionType OPTIONAL,
 *    ssActionTime       [10] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    ssParameters       [11] SSParameters OPTIONAL,
 *    ssActionResult     [12] HLRIntResult OPTIONAL,
 *    callReference      [13] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ),
 *    recordExtensions   [14] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    systemType         [15] IMPLICIT SystemType OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SSActionRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `servedIMSI`.
     * @public
     * @readonly
     */
    readonly servedIMSI: OCTET_STRING;
    /**
     * @summary `servedIMEI`.
     * @public
     * @readonly
     */
    readonly servedIMEI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedMSISDN`.
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `msClassmark`.
     * @public
     * @readonly
     */
    readonly msClassmark: OCTET_STRING;
    /**
     * @summary `recordingEntity`.
     * @public
     * @readonly
     */
    readonly recordingEntity: OCTET_STRING;
    /**
     * @summary `location`.
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<LocationAreaAndCell>;
    /**
     * @summary `basicServices`.
     * @public
     * @readonly
     */
    readonly basicServices: OPTIONAL<BasicService[]>;
    /**
     * @summary `supplService`.
     * @public
     * @readonly
     */
    readonly supplService: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `ssAction`.
     * @public
     * @readonly
     */
    readonly ssAction: OPTIONAL<SSActionType>;
    /**
     * @summary `ssActionTime`.
     * @public
     * @readonly
     */
    readonly ssActionTime: OCTET_STRING;
    /**
     * @summary `ssParameters`.
     * @public
     * @readonly
     */
    readonly ssParameters: OPTIONAL<SSParameters>;
    /**
     * @summary `ssActionResult`.
     * @public
     * @readonly
     */
    readonly ssActionResult: OPTIONAL<HLRIntResult>;
    /**
     * @summary `callReference`.
     * @public
     * @readonly
     */
    readonly callReference: OCTET_STRING;
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

    constructor (
        recordType: RecordType,
        servedIMSI: OCTET_STRING,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        msClassmark: OCTET_STRING,
        recordingEntity: OCTET_STRING,
        location: OPTIONAL<LocationAreaAndCell>,
        basicServices: OPTIONAL<BasicService[]>,
        supplService: OPTIONAL<OCTET_STRING>,
        ssAction: OPTIONAL<SSActionType>,
        ssActionTime: OCTET_STRING,
        ssParameters: OPTIONAL<SSParameters>,
        ssActionResult: OPTIONAL<HLRIntResult>,
        callReference: OCTET_STRING,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        systemType: OPTIONAL<SystemType>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.servedIMEI = servedIMEI;
        this.servedMSISDN = servedMSISDN;
        this.msClassmark = msClassmark;
        this.recordingEntity = recordingEntity;
        this.location = location;
        this.basicServices = basicServices;
        this.supplService = supplService;
        this.ssAction = ssAction;
        this.ssActionTime = ssActionTime;
        this.ssParameters = ssParameters;
        this.ssActionResult = ssActionResult;
        this.callReference = callReference;
        this.recordExtensions = recordExtensions;
        this.systemType = systemType;
    
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("SSActionRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("SSActionRecord.servedIMEI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("SSActionRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("SSActionRecord.recordingEntity violates SIZE constraint");
        }
        if (this.supplService !== undefined && (this.supplService.length !== 1)) {
            throw new ASN1SizeError("SSActionRecord.supplService violates SIZE constraint");
        }
        if ((this.ssActionTime.length !== 9)) {
            throw new ASN1SizeError("SSActionRecord.ssActionTime violates SIZE constraint");
        }
        if ((this.callReference.length < 1 || this.callReference.length > 8)) {
            throw new ASN1SizeError("SSActionRecord.callReference violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a SSActionRecord
     * @description
     * 
     * This takes an `object` and converts it to a `SSActionRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SSActionRecord`.
     * @returns {SSActionRecord}
     */
    public static _from_object (_o: { [_K in keyof (SSActionRecord)]: (SSActionRecord)[_K] }): SSActionRecord {
        return new SSActionRecord(_o.recordType, _o.servedIMSI, _o.servedIMEI, _o.servedMSISDN, _o.msClassmark, _o.recordingEntity, _o.location, _o.basicServices, _o.supplService, _o.ssAction, _o.ssActionTime, _o.ssParameters, _o.ssActionResult, _o.callReference, _o.recordExtensions, _o.systemType);
    }

        /**
         * @summary The enum used as the type of the component `ssAction`
         * @public
         * @static
         */

    public static _enum_for_ssAction = _enum_for_SSActionType;        /**
         * @summary The enum used as the type of the component `systemType`
         * @public
         * @static
         */

    public static _enum_for_systemType = _enum_for_SystemType;
}

/**
 * @summary The Leading Root Component Types of SSActionRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SSActionRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("msClassmark", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("basicServices", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("supplService", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("ssAction", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("ssActionTime", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("ssParameters", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("ssActionResult", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("callReference", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("systemType", true, $.hasTag(_TagClass.context, 15))
];

/**
 * @summary The Trailing Root Component Types of SSActionRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SSActionRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SSActionRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SSActionRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SSActionRecord: $.ASN1Decoder<SSActionRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SSActionRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SSActionRecord (el: _Element): SSActionRecord {
    if (!_cached_decoder_for_SSActionRecord) { _cached_decoder_for_SSActionRecord = function (el: _Element): SSActionRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI!: OCTET_STRING;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let msClassmark!: OCTET_STRING;
    let recordingEntity!: OCTET_STRING;
    let location: OPTIONAL<LocationAreaAndCell>;
    let basicServices: OPTIONAL<BasicService[]>;
    let supplService: OPTIONAL<OCTET_STRING>;
    let ssAction: OPTIONAL<SSActionType>;
    let ssActionTime!: OCTET_STRING;
    let ssParameters: OPTIONAL<SSParameters>;
    let ssActionResult: OPTIONAL<HLRIntResult>;
    let callReference!: OCTET_STRING;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let systemType: OPTIONAL<SystemType>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "msClassmark": (_el: _Element): void => { msClassmark = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<LocationAreaAndCell>(() => _decode_LocationAreaAndCell)(_el); },
        "basicServices": (_el: _Element): void => { basicServices = $._decode_implicit<BasicService[]>(() => $._decodeSetOf<BasicService>(() => _decode_BasicService))(_el); },
        "supplService": (_el: _Element): void => { supplService = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "ssAction": (_el: _Element): void => { ssAction = $._decode_implicit<SSActionType>(() => _decode_SSActionType)(_el); },
        "ssActionTime": (_el: _Element): void => { ssActionTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "ssParameters": (_el: _Element): void => { ssParameters = $._decode_explicit<SSParameters>(() => _decode_SSParameters)(_el); },
        "ssActionResult": (_el: _Element): void => { ssActionResult = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "callReference": (_el: _Element): void => { callReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "systemType": (_el: _Element): void => { systemType = $._decode_implicit<SystemType>(() => _decode_SystemType)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SSActionRecord,
        _extension_additions_list_spec_for_SSActionRecord,
        _root_component_type_list_2_spec_for_SSActionRecord,
        undefined,
    );
    return new SSActionRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        servedIMEI,
        servedMSISDN,
        msClassmark,
        recordingEntity,
        location,
        basicServices,
        supplService,
        ssAction,
        ssActionTime,
        ssParameters,
        ssActionResult,
        callReference,
        recordExtensions,
        systemType
    );
}; }
    return _cached_decoder_for_SSActionRecord(el);
}

let _cached_encoder_for_SSActionRecord: $.ASN1Encoder<SSActionRecord> | null = null;

/**
 * @summary Encodes a(n) SSActionRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SSActionRecord, encoded as an ASN.1 Element.
 */
export
function _encode_SSActionRecord (value: SSActionRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SSActionRecord) { _cached_encoder_for_SSActionRecord = function (value: SSActionRecord, _elGetter: $.ASN1Encoder<SSActionRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.msClassmark, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.location !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_LocationAreaAndCell, $.BER)(value.location, $.BER));
    }
    if (value.basicServices !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSetOf<BasicService>(() => _encode_BasicService, $.BER), $.BER)(value.basicServices, $.BER));
    }
    if (value.supplService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.supplService, $.BER));
    }
    if (value.ssAction !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_SSActionType, $.BER)(value.ssAction, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.ssActionTime, $.BER));
    if (value.ssParameters !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 11, () => _encode_SSParameters, $.BER)(value.ssParameters, $.BER));
    }
    if (value.ssActionResult !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 12, () => _encode_HLRIntResult, $.BER)(value.ssActionResult, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.callReference, $.BER));
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.systemType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_SystemType, $.BER)(value.systemType, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_SSActionRecord(value, elGetter);
}


/* eslint-enable */
