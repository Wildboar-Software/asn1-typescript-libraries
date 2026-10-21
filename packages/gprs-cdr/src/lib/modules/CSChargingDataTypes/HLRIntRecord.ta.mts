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
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService } from "../CSChargingDataTypes/BasicService.ta.mjs";
import { RoutingNumber, _decode_RoutingNumber, _encode_RoutingNumber } from "../CSChargingDataTypes/RoutingNumber.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary HLRIntRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HLRIntRecord ::= SET {
 *    recordType            [0] IMPLICIT RecordType,
 *    servedIMSI            [1] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedMSISDN          [2] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ),
 *    recordingEntity       [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    basicService          [4] BasicService OPTIONAL,
 *    routingNumber         [5] RoutingNumber,
 *    interrogationTime     [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    numberOfForwarding    [7] IMPLICIT INTEGER ( 1 .. 5 ) OPTIONAL,
 *    interrogationResult   [8] HLRIntResult OPTIONAL,
 *    recordExtensions      [9] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * 
 * @class
 */
export
class HLRIntRecord {
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
     * @summary `servedMSISDN`.
     * @public
     * @readonly
     */
    readonly servedMSISDN: OCTET_STRING;
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
     * @summary `routingNumber`.
     * @public
     * @readonly
     */
    readonly routingNumber: RoutingNumber;
    /**
     * @summary `interrogationTime`.
     * @public
     * @readonly
     */
    readonly interrogationTime: OCTET_STRING;
    /**
     * @summary `numberOfForwarding`.
     * @public
     * @readonly
     */
    readonly numberOfForwarding: OPTIONAL<INTEGER>;
    /**
     * @summary `interrogationResult`.
     * @public
     * @readonly
     */
    readonly interrogationResult: OPTIONAL<HLRIntResult>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;

    constructor (
        recordType: RecordType,
        servedIMSI: OCTET_STRING,
        servedMSISDN: OCTET_STRING,
        recordingEntity: OCTET_STRING,
        basicService: OPTIONAL<BasicService>,
        routingNumber: RoutingNumber,
        interrogationTime: OCTET_STRING,
        numberOfForwarding: OPTIONAL<INTEGER>,
        interrogationResult: OPTIONAL<HLRIntResult>,
        recordExtensions: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.servedMSISDN = servedMSISDN;
        this.recordingEntity = recordingEntity;
        this.basicService = basicService;
        this.routingNumber = routingNumber;
        this.interrogationTime = interrogationTime;
        this.numberOfForwarding = numberOfForwarding;
        this.interrogationResult = interrogationResult;
        this.recordExtensions = recordExtensions;
    
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("HLRIntRecord.servedIMSI violates SIZE constraint");
        }
        if ((this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("HLRIntRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("HLRIntRecord.recordingEntity violates SIZE constraint");
        }
        if ((this.interrogationTime.length !== 9)) {
            throw new ASN1SizeError("HLRIntRecord.interrogationTime violates SIZE constraint");
        }
        if (this.numberOfForwarding !== undefined && (this.numberOfForwarding < 1 || this.numberOfForwarding > 5)) {
            throw new ASN1OverflowError("HLRIntRecord.numberOfForwarding violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a HLRIntRecord
     * @description
     * 
     * This takes an `object` and converts it to a `HLRIntRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HLRIntRecord`.
     * @returns {HLRIntRecord}
     */
    public static _from_object (_o: { [_K in keyof (HLRIntRecord)]: (HLRIntRecord)[_K] }): HLRIntRecord {
        return new HLRIntRecord(_o.recordType, _o.servedIMSI, _o.servedMSISDN, _o.recordingEntity, _o.basicService, _o.routingNumber, _o.interrogationTime, _o.numberOfForwarding, _o.interrogationResult, _o.recordExtensions);
    }


}

/**
 * @summary The Leading Root Component Types of HLRIntRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HLRIntRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedMSISDN", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("basicService", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("routingNumber", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("interrogationTime", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("numberOfForwarding", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("interrogationResult", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of HLRIntRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HLRIntRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HLRIntRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HLRIntRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HLRIntRecord: $.ASN1Decoder<HLRIntRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HLRIntRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HLRIntRecord (el: _Element): HLRIntRecord {
    if (!_cached_decoder_for_HLRIntRecord) { _cached_decoder_for_HLRIntRecord = function (el: _Element): HLRIntRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI!: OCTET_STRING;
    let servedMSISDN!: OCTET_STRING;
    let recordingEntity!: OCTET_STRING;
    let basicService: OPTIONAL<BasicService>;
    let routingNumber!: RoutingNumber;
    let interrogationTime!: OCTET_STRING;
    let numberOfForwarding: OPTIONAL<INTEGER>;
    let interrogationResult: OPTIONAL<HLRIntResult>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "basicService": (_el: _Element): void => { basicService = $._decode_explicit<BasicService>(() => _decode_BasicService)(_el); },
        "routingNumber": (_el: _Element): void => { routingNumber = $._decode_explicit<RoutingNumber>(() => _decode_RoutingNumber)(_el); },
        "interrogationTime": (_el: _Element): void => { interrogationTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "numberOfForwarding": (_el: _Element): void => { numberOfForwarding = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "interrogationResult": (_el: _Element): void => { interrogationResult = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_HLRIntRecord,
        _extension_additions_list_spec_for_HLRIntRecord,
        _root_component_type_list_2_spec_for_HLRIntRecord,
        undefined,
    );
    return new HLRIntRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        servedMSISDN,
        recordingEntity,
        basicService,
        routingNumber,
        interrogationTime,
        numberOfForwarding,
        interrogationResult,
        recordExtensions
    );
}; }
    return _cached_decoder_for_HLRIntRecord(el);
}

let _cached_encoder_for_HLRIntRecord: $.ASN1Encoder<HLRIntRecord> | null = null;

/**
 * @summary Encodes a(n) HLRIntRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HLRIntRecord, encoded as an ASN.1 Element.
 */
export
function _encode_HLRIntRecord (value: HLRIntRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HLRIntRecord) { _cached_encoder_for_HLRIntRecord = function (value: HLRIntRecord, _elGetter: $.ASN1Encoder<HLRIntRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.basicService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_BasicService, $.BER)(value.basicService, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 5, () => _encode_RoutingNumber, $.BER)(value.routingNumber, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.interrogationTime, $.BER));
    if (value.numberOfForwarding !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.numberOfForwarding, $.BER));
    }
    if (value.interrogationResult !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_HLRIntResult, $.BER)(value.interrogationResult, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_HLRIntRecord(value, elGetter);
}


/* eslint-enable */
