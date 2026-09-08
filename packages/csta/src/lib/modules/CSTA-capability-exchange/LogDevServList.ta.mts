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
import { CallControlServList, _decode_CallControlServList, _encode_CallControlServList } from "../CSTA-capability-exchange/CallControlServList.ta.mjs";
// export { CallControlServList, _decode_CallControlServList, _encode_CallControlServList } from "../CSTA-capability-exchange/CallControlServList.ta.mjs";
import { CallAssociatedServList, _decode_CallAssociatedServList, _encode_CallAssociatedServList } from "../CSTA-capability-exchange/CallAssociatedServList.ta.mjs";
// export { CallAssociatedServList, _decode_CallAssociatedServList, _encode_CallAssociatedServList } from "../CSTA-capability-exchange/CallAssociatedServList.ta.mjs";
import { LogicalServList, _decode_LogicalServList, _encode_LogicalServList } from "../CSTA-capability-exchange/LogicalServList.ta.mjs";
// export { LogicalServList, _decode_LogicalServList, _encode_LogicalServList } from "../CSTA-capability-exchange/LogicalServList.ta.mjs";
import { MediaServList, _decode_MediaServList, _encode_MediaServList } from "../CSTA-capability-exchange/MediaServList.ta.mjs";
// export { MediaServList, _decode_MediaServList, _encode_MediaServList } from "../CSTA-capability-exchange/MediaServList.ta.mjs";
import { IOServicesServList, _decode_IOServicesServList, _encode_IOServicesServList } from "../CSTA-capability-exchange/IOServicesServList.ta.mjs";
// export { IOServicesServList, _decode_IOServicesServList, _encode_IOServicesServList } from "../CSTA-capability-exchange/IOServicesServList.ta.mjs";
import { DataCollectionServList, _decode_DataCollectionServList, _encode_DataCollectionServList } from "../CSTA-capability-exchange/DataCollectionServList.ta.mjs";
// export { DataCollectionServList, _decode_DataCollectionServList, _encode_DataCollectionServList } from "../CSTA-capability-exchange/DataCollectionServList.ta.mjs";
import { VoiceUnitServList, _decode_VoiceUnitServList, _encode_VoiceUnitServList } from "../CSTA-capability-exchange/VoiceUnitServList.ta.mjs";
// export { VoiceUnitServList, _decode_VoiceUnitServList, _encode_VoiceUnitServList } from "../CSTA-capability-exchange/VoiceUnitServList.ta.mjs";
import { LocationServicesServList, _decode_LocationServicesServList, _encode_LocationServicesServList } from "../CSTA-capability-exchange/LocationServicesServList.ta.mjs";
// export { LocationServicesServList, _decode_LocationServicesServList, _encode_LocationServicesServList } from "../CSTA-capability-exchange/LocationServicesServList.ta.mjs";


/**
 * @summary LogDevServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogDevServList ::= SEQUENCE
 * {    callControlServList         [0] IMPLICIT CallControlServList         OPTIONAL,
 *     callAssociatedServList         [1] IMPLICIT CallAssociatedServList         OPTIONAL,
 *     logicalServList         [2] IMPLICIT LogicalServList             OPTIONAL,
 *     mediaServList             [3] IMPLICIT MediaServList             OPTIONAL,
 *     iOServicesServList         [4] IMPLICIT IOServicesServList         OPTIONAL,
 *     dataCollectionServList         [5] IMPLICIT DataCollectionServList         OPTIONAL,
 *     voiceUnitServList         [6] IMPLICIT VoiceUnitServList             OPTIONAL,
 *     locationServicesServList    [7] IMPLICIT LocationServicesServList        OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LogDevServList {
    constructor (
        /**
         * @summary `callControlServList`.
         * @public
         * @readonly
         */
        readonly callControlServList: OPTIONAL<CallControlServList>,
        /**
         * @summary `callAssociatedServList`.
         * @public
         * @readonly
         */
        readonly callAssociatedServList: OPTIONAL<CallAssociatedServList>,
        /**
         * @summary `logicalServList`.
         * @public
         * @readonly
         */
        readonly logicalServList: OPTIONAL<LogicalServList>,
        /**
         * @summary `mediaServList`.
         * @public
         * @readonly
         */
        readonly mediaServList: OPTIONAL<MediaServList>,
        /**
         * @summary `iOServicesServList`.
         * @public
         * @readonly
         */
        readonly iOServicesServList: OPTIONAL<IOServicesServList>,
        /**
         * @summary `dataCollectionServList`.
         * @public
         * @readonly
         */
        readonly dataCollectionServList: OPTIONAL<DataCollectionServList>,
        /**
         * @summary `voiceUnitServList`.
         * @public
         * @readonly
         */
        readonly voiceUnitServList: OPTIONAL<VoiceUnitServList>,
        /**
         * @summary `locationServicesServList`.
         * @public
         * @readonly
         */
        readonly locationServicesServList: OPTIONAL<LocationServicesServList>
    ) {}

    /**
     * @summary Restructures an object into a LogDevServList
     * @description
     * 
     * This takes an `object` and converts it to a `LogDevServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogDevServList`.
     * @returns {LogDevServList}
     */
    public static _from_object (_o: { [_K in keyof (LogDevServList)]: (LogDevServList)[_K] }): LogDevServList {
        return new LogDevServList(_o.callControlServList, _o.callAssociatedServList, _o.logicalServList, _o.mediaServList, _o.iOServicesServList, _o.dataCollectionServList, _o.voiceUnitServList, _o.locationServicesServList);
    }


}

/**
 * @summary The Leading Root Component Types of LogDevServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LogDevServList: $.ComponentSpec[] = [
    new $.ComponentSpec("callControlServList", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("callAssociatedServList", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("logicalServList", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("mediaServList", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("iOServicesServList", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("dataCollectionServList", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("voiceUnitServList", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("locationServicesServList", true, $.hasTag(_TagClass.context, 7), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of LogDevServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LogDevServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LogDevServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LogDevServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LogDevServList: $.ASN1Decoder<LogDevServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogDevServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogDevServList (el: _Element): LogDevServList {
    if (!_cached_decoder_for_LogDevServList) { _cached_decoder_for_LogDevServList = function (el: _Element): LogDevServList {
    let callControlServList: OPTIONAL<CallControlServList>;
    let callAssociatedServList: OPTIONAL<CallAssociatedServList>;
    let logicalServList: OPTIONAL<LogicalServList>;
    let mediaServList: OPTIONAL<MediaServList>;
    let iOServicesServList: OPTIONAL<IOServicesServList>;
    let dataCollectionServList: OPTIONAL<DataCollectionServList>;
    let voiceUnitServList: OPTIONAL<VoiceUnitServList>;
    let locationServicesServList: OPTIONAL<LocationServicesServList>;
    const callbacks: $.DecodingMap = {
        "callControlServList": (_el: _Element): void => { callControlServList = $._decode_implicit<CallControlServList>(() => _decode_CallControlServList)(_el); },
        "callAssociatedServList": (_el: _Element): void => { callAssociatedServList = $._decode_implicit<CallAssociatedServList>(() => _decode_CallAssociatedServList)(_el); },
        "logicalServList": (_el: _Element): void => { logicalServList = $._decode_implicit<LogicalServList>(() => _decode_LogicalServList)(_el); },
        "mediaServList": (_el: _Element): void => { mediaServList = $._decode_implicit<MediaServList>(() => _decode_MediaServList)(_el); },
        "iOServicesServList": (_el: _Element): void => { iOServicesServList = $._decode_implicit<IOServicesServList>(() => _decode_IOServicesServList)(_el); },
        "dataCollectionServList": (_el: _Element): void => { dataCollectionServList = $._decode_implicit<DataCollectionServList>(() => _decode_DataCollectionServList)(_el); },
        "voiceUnitServList": (_el: _Element): void => { voiceUnitServList = $._decode_implicit<VoiceUnitServList>(() => _decode_VoiceUnitServList)(_el); },
        "locationServicesServList": (_el: _Element): void => { locationServicesServList = $._decode_implicit<LocationServicesServList>(() => _decode_LocationServicesServList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LogDevServList,
        _extension_additions_list_spec_for_LogDevServList,
        _root_component_type_list_2_spec_for_LogDevServList,
        undefined,
    );
    return new LogDevServList(
        callControlServList,
        callAssociatedServList,
        logicalServList,
        mediaServList,
        iOServicesServList,
        dataCollectionServList,
        voiceUnitServList,
        locationServicesServList
    );
}; }
    return _cached_decoder_for_LogDevServList(el);
}

let _cached_encoder_for_LogDevServList: $.ASN1Encoder<LogDevServList> | null = null;

/**
 * @summary Encodes a(n) LogDevServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogDevServList, encoded as an ASN.1 Element.
 */
export
function _encode_LogDevServList (value: LogDevServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogDevServList) { _cached_encoder_for_LogDevServList = function (value: LogDevServList, elGetter: $.ASN1Encoder<LogDevServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.callControlServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CallControlServList, $.BER)(value.callControlServList, $.BER)),
            /* IF_ABSENT  */ ((value.callAssociatedServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallAssociatedServList, $.BER)(value.callAssociatedServList, $.BER)),
            /* IF_ABSENT  */ ((value.logicalServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_LogicalServList, $.BER)(value.logicalServList, $.BER)),
            /* IF_ABSENT  */ ((value.mediaServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MediaServList, $.BER)(value.mediaServList, $.BER)),
            /* IF_ABSENT  */ ((value.iOServicesServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_IOServicesServList, $.BER)(value.iOServicesServList, $.BER)),
            /* IF_ABSENT  */ ((value.dataCollectionServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_DataCollectionServList, $.BER)(value.dataCollectionServList, $.BER)),
            /* IF_ABSENT  */ ((value.voiceUnitServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_VoiceUnitServList, $.BER)(value.voiceUnitServList, $.BER)),
            /* IF_ABSENT  */ ((value.locationServicesServList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_LocationServicesServList, $.BER)(value.locationServicesServList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LogDevServList(value, elGetter);
}


/* eslint-enable */
