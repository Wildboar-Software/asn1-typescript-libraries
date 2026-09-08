/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { SnapshotCall, SnapshotCall_privateData /* IMPORTED_LONG_NAMED_BIT */, SnapshotCall_locaConnectionStateInAck /* IMPORTED_LONG_NAMED_BIT */, locaConnectionStateInAck /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCall_mediaServiceInfoListInAck /* IMPORTED_LONG_NAMED_BIT */, SnapshotCall_mediaServiceVersionInAck /* IMPORTED_LONG_NAMED_BIT */, SnapshotCall_mediaServiceInstanceInAck /* IMPORTED_LONG_NAMED_BIT */, SnapshotCall_mediaStreamID /* IMPORTED_LONG_NAMED_BIT */, SnapshotCall_connectionInformation /* IMPORTED_LONG_NAMED_BIT */, SnapshotCall_mediaCallCharacteristicsInAck /* IMPORTED_LONG_NAMED_BIT */, SnapshotCall_callCharacteristicsInAck /* IMPORTED_LONG_NAMED_BIT */, callCharacteristicsInAck /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCall_callingDeviceInAck /* IMPORTED_LONG_NAMED_BIT */, callingDeviceInAck /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCall_calledDeviceInAck /* IMPORTED_LONG_NAMED_BIT */, calledDeviceInAck /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCall_subjectOfCallInAck /* IMPORTED_LONG_NAMED_BIT */, subjectOfCallInAck /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCall_messageInfoInAck /* IMPORTED_LONG_NAMED_BIT */, messageInfoInAck /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCall_languagePreferencesInAck /* IMPORTED_LONG_NAMED_BIT */, languagePreferencesInAck /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCall_deviceHistoryInAck /* IMPORTED_LONG_NAMED_BIT */, deviceHistoryInAck /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SnapshotCall_callIDOnly /* IMPORTED_LONG_NAMED_BIT */, callIDOnly /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCall_reportsWithSnapsCallData /* IMPORTED_LONG_NAMED_BIT */, reportsWithSnapsCallData /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCall_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_SnapshotCall, _encode_SnapshotCall } from "../CSTA-capability-exchange/SnapshotCall.ta.mjs";
// export { SnapshotCall, SnapshotCall_privateData /* IMPORTED_LONG_NAMED_BIT */, SnapshotCall_locaConnectionStateInAck /* IMPORTED_LONG_NAMED_BIT */, locaConnectionStateInAck /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCall_mediaServiceInfoListInAck /* IMPORTED_LONG_NAMED_BIT */, SnapshotCall_mediaServiceVersionInAck /* IMPORTED_LONG_NAMED_BIT */, SnapshotCall_mediaServiceInstanceInAck /* IMPORTED_LONG_NAMED_BIT */, SnapshotCall_mediaStreamID /* IMPORTED_LONG_NAMED_BIT */, SnapshotCall_connectionInformation /* IMPORTED_LONG_NAMED_BIT */, SnapshotCall_mediaCallCharacteristicsInAck /* IMPORTED_LONG_NAMED_BIT */, SnapshotCall_callCharacteristicsInAck /* IMPORTED_LONG_NAMED_BIT */, callCharacteristicsInAck /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCall_callingDeviceInAck /* IMPORTED_LONG_NAMED_BIT */, callingDeviceInAck /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCall_calledDeviceInAck /* IMPORTED_LONG_NAMED_BIT */, calledDeviceInAck /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCall_subjectOfCallInAck /* IMPORTED_LONG_NAMED_BIT */, subjectOfCallInAck /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCall_messageInfoInAck /* IMPORTED_LONG_NAMED_BIT */, messageInfoInAck /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCall_languagePreferencesInAck /* IMPORTED_LONG_NAMED_BIT */, languagePreferencesInAck /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCall_deviceHistoryInAck /* IMPORTED_LONG_NAMED_BIT */, deviceHistoryInAck /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SnapshotCall_callIDOnly /* IMPORTED_LONG_NAMED_BIT */, callIDOnly /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCall_reportsWithSnapsCallData /* IMPORTED_LONG_NAMED_BIT */, reportsWithSnapsCallData /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCall_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_SnapshotCall, _encode_SnapshotCall } from "../CSTA-capability-exchange/SnapshotCall.ta.mjs";
import { SnapshotDevice, SnapshotDevice_privateData /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_localCallStateCompoundCallState /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_localCallStateSimpleCallState /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_localCallStateUnknown /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_mediaServiceInfoListInAck /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_mediaServiceVersionInAck /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_mediaServiceInstanceInAck /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_mediaStreamID /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_connectionInformation /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_mediaCallCharacteristicsInAck /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_reportsWithSnapsDeviceData /* IMPORTED_LONG_NAMED_BIT */, reportsWithSnapsDeviceData /* IMPORTED_SHORT_NAMED_BIT */, _decode_SnapshotDevice, _encode_SnapshotDevice } from "../CSTA-capability-exchange/SnapshotDevice.ta.mjs";
// export { SnapshotDevice, SnapshotDevice_privateData /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_localCallStateCompoundCallState /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_localCallStateSimpleCallState /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_localCallStateUnknown /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_mediaServiceInfoListInAck /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_mediaServiceVersionInAck /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_mediaServiceInstanceInAck /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_mediaStreamID /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_connectionInformation /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_mediaCallCharacteristicsInAck /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SnapshotDevice_reportsWithSnapsDeviceData /* IMPORTED_LONG_NAMED_BIT */, reportsWithSnapsDeviceData /* IMPORTED_SHORT_NAMED_BIT */, _decode_SnapshotDevice, _encode_SnapshotDevice } from "../CSTA-capability-exchange/SnapshotDevice.ta.mjs";
import { SnapshotCallData, SnapshotCallData_segmentID /* IMPORTED_LONG_NAMED_BIT */, SnapshotCallData_localConnectionState /* IMPORTED_LONG_NAMED_BIT */, localConnectionState /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCallData_mediaServiceInformationList /* IMPORTED_LONG_NAMED_BIT */, SnapshotCallData_mediaServiceVersion /* IMPORTED_LONG_NAMED_BIT */, SnapshotCallData_mediaServiceInstance /* IMPORTED_LONG_NAMED_BIT */, SnapshotCallData_mediaStreamID /* IMPORTED_LONG_NAMED_BIT */, SnapshotCallData_connectionInformation /* IMPORTED_LONG_NAMED_BIT */, SnapshotCallData_privateData /* IMPORTED_LONG_NAMED_BIT */, SnapshotCallData_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_SnapshotCallData, _encode_SnapshotCallData } from "../CSTA-capability-exchange/SnapshotCallData.ta.mjs";
// export { SnapshotCallData, SnapshotCallData_segmentID /* IMPORTED_LONG_NAMED_BIT */, SnapshotCallData_localConnectionState /* IMPORTED_LONG_NAMED_BIT */, localConnectionState /* IMPORTED_SHORT_NAMED_BIT */, SnapshotCallData_mediaServiceInformationList /* IMPORTED_LONG_NAMED_BIT */, SnapshotCallData_mediaServiceVersion /* IMPORTED_LONG_NAMED_BIT */, SnapshotCallData_mediaServiceInstance /* IMPORTED_LONG_NAMED_BIT */, SnapshotCallData_mediaStreamID /* IMPORTED_LONG_NAMED_BIT */, SnapshotCallData_connectionInformation /* IMPORTED_LONG_NAMED_BIT */, SnapshotCallData_privateData /* IMPORTED_LONG_NAMED_BIT */, SnapshotCallData_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_SnapshotCallData, _encode_SnapshotCallData } from "../CSTA-capability-exchange/SnapshotCallData.ta.mjs";
import { SnapshotDeviceData, SnapshotDeviceData_segmentID /* IMPORTED_LONG_NAMED_BIT */, SnapshotDeviceData_localCallStateCompoundCallState /* IMPORTED_LONG_NAMED_BIT */, SnapshotDeviceData_localCallStateSimpleCallState /* IMPORTED_LONG_NAMED_BIT */, SnapshotDeviceData_localCallStateUnknown /* IMPORTED_LONG_NAMED_BIT */, SnapshotDeviceData_mediaServiceInformationList /* IMPORTED_LONG_NAMED_BIT */, SnapshotDeviceData_mediaServiceVersion /* IMPORTED_LONG_NAMED_BIT */, SnapshotDeviceData_mediaServiceInstance /* IMPORTED_LONG_NAMED_BIT */, SnapshotDeviceData_mediaStreamID /* IMPORTED_LONG_NAMED_BIT */, SnapshotDeviceData_connectionInformation /* IMPORTED_LONG_NAMED_BIT */, SnapshotDeviceData_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, mediaCallCharacteristics /* IMPORTED_SHORT_NAMED_BIT */, SnapshotDeviceData_endpointDeviceID /* IMPORTED_LONG_NAMED_BIT */, endpointDeviceID /* IMPORTED_SHORT_NAMED_BIT */, SnapshotDeviceData_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_SnapshotDeviceData, _encode_SnapshotDeviceData } from "../CSTA-capability-exchange/SnapshotDeviceData.ta.mjs";
// export { SnapshotDeviceData, SnapshotDeviceData_segmentID /* IMPORTED_LONG_NAMED_BIT */, SnapshotDeviceData_localCallStateCompoundCallState /* IMPORTED_LONG_NAMED_BIT */, SnapshotDeviceData_localCallStateSimpleCallState /* IMPORTED_LONG_NAMED_BIT */, SnapshotDeviceData_localCallStateUnknown /* IMPORTED_LONG_NAMED_BIT */, SnapshotDeviceData_mediaServiceInformationList /* IMPORTED_LONG_NAMED_BIT */, SnapshotDeviceData_mediaServiceVersion /* IMPORTED_LONG_NAMED_BIT */, SnapshotDeviceData_mediaServiceInstance /* IMPORTED_LONG_NAMED_BIT */, SnapshotDeviceData_mediaStreamID /* IMPORTED_LONG_NAMED_BIT */, SnapshotDeviceData_connectionInformation /* IMPORTED_LONG_NAMED_BIT */, SnapshotDeviceData_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, mediaCallCharacteristics /* IMPORTED_SHORT_NAMED_BIT */, SnapshotDeviceData_endpointDeviceID /* IMPORTED_LONG_NAMED_BIT */, endpointDeviceID /* IMPORTED_SHORT_NAMED_BIT */, SnapshotDeviceData_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_SnapshotDeviceData, _encode_SnapshotDeviceData } from "../CSTA-capability-exchange/SnapshotDeviceData.ta.mjs";


/**
 * @summary SnapshotServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SnapshotServList ::= SEQUENCE
 * {     snapshotCall             [0] IMPLICIT SnapshotCall,
 *     snapshotDevice             [1] IMPLICIT SnapshotDevice,
 *     snapshotCallData         [2] IMPLICIT SnapshotCallData,
 *     snapshotDeviceData         [3] IMPLICIT SnapshotDeviceData }
 * ```
 * 
 * @class
 */
export
class SnapshotServList {
    constructor (
        /**
         * @summary `snapshotCall`.
         * @public
         * @readonly
         */
        readonly snapshotCall: SnapshotCall,
        /**
         * @summary `snapshotDevice`.
         * @public
         * @readonly
         */
        readonly snapshotDevice: SnapshotDevice,
        /**
         * @summary `snapshotCallData`.
         * @public
         * @readonly
         */
        readonly snapshotCallData: SnapshotCallData,
        /**
         * @summary `snapshotDeviceData`.
         * @public
         * @readonly
         */
        readonly snapshotDeviceData: SnapshotDeviceData
    ) {}

    /**
     * @summary Restructures an object into a SnapshotServList
     * @description
     * 
     * This takes an `object` and converts it to a `SnapshotServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SnapshotServList`.
     * @returns {SnapshotServList}
     */
    public static _from_object (_o: { [_K in keyof (SnapshotServList)]: (SnapshotServList)[_K] }): SnapshotServList {
        return new SnapshotServList(_o.snapshotCall, _o.snapshotDevice, _o.snapshotCallData, _o.snapshotDeviceData);
    }


}

/**
 * @summary The Leading Root Component Types of SnapshotServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SnapshotServList: $.ComponentSpec[] = [
    new $.ComponentSpec("snapshotCall", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("snapshotDevice", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("snapshotCallData", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("snapshotDeviceData", false, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SnapshotServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SnapshotServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SnapshotServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SnapshotServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SnapshotServList: $.ASN1Decoder<SnapshotServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SnapshotServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SnapshotServList (el: _Element): SnapshotServList {
    if (!_cached_decoder_for_SnapshotServList) { _cached_decoder_for_SnapshotServList = function (el: _Element): SnapshotServList {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("SnapshotServList contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "snapshotCall";
    sequence[1].name = "snapshotDevice";
    sequence[2].name = "snapshotCallData";
    sequence[3].name = "snapshotDeviceData";
    let snapshotCall!: SnapshotCall;
    let snapshotDevice!: SnapshotDevice;
    let snapshotCallData!: SnapshotCallData;
    let snapshotDeviceData!: SnapshotDeviceData;
    snapshotCall = $._decode_implicit<SnapshotCall>(() => _decode_SnapshotCall)(sequence[0]);
    snapshotDevice = $._decode_implicit<SnapshotDevice>(() => _decode_SnapshotDevice)(sequence[1]);
    snapshotCallData = $._decode_implicit<SnapshotCallData>(() => _decode_SnapshotCallData)(sequence[2]);
    snapshotDeviceData = $._decode_implicit<SnapshotDeviceData>(() => _decode_SnapshotDeviceData)(sequence[3]);
    return new SnapshotServList(
        snapshotCall,
        snapshotDevice,
        snapshotCallData,
        snapshotDeviceData,

    );
}; }
    return _cached_decoder_for_SnapshotServList(el);
}

let _cached_encoder_for_SnapshotServList: $.ASN1Encoder<SnapshotServList> | null = null;

/**
 * @summary Encodes a(n) SnapshotServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SnapshotServList, encoded as an ASN.1 Element.
 */
export
function _encode_SnapshotServList (value: SnapshotServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SnapshotServList) { _cached_encoder_for_SnapshotServList = function (value: SnapshotServList, elGetter: $.ASN1Encoder<SnapshotServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SnapshotCall, $.BER)(value.snapshotCall, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SnapshotDevice, $.BER)(value.snapshotDevice, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SnapshotCallData, $.BER)(value.snapshotCallData, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SnapshotDeviceData, $.BER)(value.snapshotDeviceData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SnapshotServList(value, elGetter);
}


/* eslint-enable */
