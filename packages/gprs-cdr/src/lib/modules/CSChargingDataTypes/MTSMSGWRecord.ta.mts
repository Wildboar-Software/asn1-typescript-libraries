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
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary MTSMSGWRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MTSMSGWRecord ::= SET {
 *    recordType         [0] IMPLICIT RecordType,
 *    serviceCentre      [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    servedIMSI         [2] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedMSISDN       [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    recordingEntity    [4] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    eventTime          [5] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    smsResult          [6] HLRIntResult OPTIONAL,
 *    recordExtensions   [7] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MTSMSGWRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `serviceCentre`.
     * @public
     * @readonly
     */
    readonly serviceCentre: OCTET_STRING;
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
     * @summary `eventTime`.
     * @public
     * @readonly
     */
    readonly eventTime: OCTET_STRING;
    /**
     * @summary `smsResult`.
     * @public
     * @readonly
     */
    readonly smsResult: OPTIONAL<HLRIntResult>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;

    constructor (
        recordType: RecordType,
        serviceCentre: OCTET_STRING,
        servedIMSI: OCTET_STRING,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        recordingEntity: OCTET_STRING,
        eventTime: OCTET_STRING,
        smsResult: OPTIONAL<HLRIntResult>,
        recordExtensions: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.serviceCentre = serviceCentre;
        this.servedIMSI = servedIMSI;
        this.servedMSISDN = servedMSISDN;
        this.recordingEntity = recordingEntity;
        this.eventTime = eventTime;
        this.smsResult = smsResult;
        this.recordExtensions = recordExtensions;
    
        if ((this.serviceCentre.length < 1 || this.serviceCentre.length > 20)) {
            throw new ASN1SizeError("MTSMSGWRecord.serviceCentre violates SIZE constraint");
        }
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("MTSMSGWRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("MTSMSGWRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("MTSMSGWRecord.recordingEntity violates SIZE constraint");
        }
        if ((this.eventTime.length !== 9)) {
            throw new ASN1SizeError("MTSMSGWRecord.eventTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MTSMSGWRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MTSMSGWRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MTSMSGWRecord`.
     * @returns {MTSMSGWRecord}
     */
    public static _from_object (_o: { [_K in keyof (MTSMSGWRecord)]: (MTSMSGWRecord)[_K] }): MTSMSGWRecord {
        return new MTSMSGWRecord(_o.recordType, _o.serviceCentre, _o.servedIMSI, _o.servedMSISDN, _o.recordingEntity, _o.eventTime, _o.smsResult, _o.recordExtensions);
    }


}

/**
 * @summary The Leading Root Component Types of MTSMSGWRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MTSMSGWRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serviceCentre", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("eventTime", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("smsResult", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of MTSMSGWRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MTSMSGWRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MTSMSGWRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MTSMSGWRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MTSMSGWRecord: $.ASN1Decoder<MTSMSGWRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MTSMSGWRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MTSMSGWRecord (el: _Element): MTSMSGWRecord {
    if (!_cached_decoder_for_MTSMSGWRecord) { _cached_decoder_for_MTSMSGWRecord = function (el: _Element): MTSMSGWRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let serviceCentre!: OCTET_STRING;
    let servedIMSI!: OCTET_STRING;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let recordingEntity!: OCTET_STRING;
    let eventTime!: OCTET_STRING;
    let smsResult: OPTIONAL<HLRIntResult>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "serviceCentre": (_el: _Element): void => { serviceCentre = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "eventTime": (_el: _Element): void => { eventTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "smsResult": (_el: _Element): void => { smsResult = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MTSMSGWRecord,
        _extension_additions_list_spec_for_MTSMSGWRecord,
        _root_component_type_list_2_spec_for_MTSMSGWRecord,
        undefined,
    );
    return new MTSMSGWRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        serviceCentre,
        servedIMSI,
        servedMSISDN,
        recordingEntity,
        eventTime,
        smsResult,
        recordExtensions
    );
}; }
    return _cached_decoder_for_MTSMSGWRecord(el);
}

let _cached_encoder_for_MTSMSGWRecord: $.ASN1Encoder<MTSMSGWRecord> | null = null;

/**
 * @summary Encodes a(n) MTSMSGWRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTSMSGWRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MTSMSGWRecord (value: MTSMSGWRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MTSMSGWRecord) { _cached_encoder_for_MTSMSGWRecord = function (value: MTSMSGWRecord, _elGetter: $.ASN1Encoder<MTSMSGWRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.serviceCentre, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.eventTime, $.BER));
    if (value.smsResult !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_HLRIntResult, $.BER)(value.smsResult, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MTSMSGWRecord(value, elGetter);
}


/* eslint-enable */
