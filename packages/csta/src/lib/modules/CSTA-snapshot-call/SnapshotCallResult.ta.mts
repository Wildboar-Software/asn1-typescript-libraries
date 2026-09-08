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
import { SnapshotCallResult_crossRefIDorSnapshotData, _decode_SnapshotCallResult_crossRefIDorSnapshotData, _encode_SnapshotCallResult_crossRefIDorSnapshotData } from "../CSTA-snapshot-call/SnapshotCallResult-crossRefIDorSnapshotData.ta.mjs";
// export { SnapshotCallResult_crossRefIDorSnapshotData, _decode_SnapshotCallResult_crossRefIDorSnapshotData, _encode_SnapshotCallResult_crossRefIDorSnapshotData } from "../CSTA-snapshot-call/SnapshotCallResult-crossRefIDorSnapshotData.ta.mjs";
import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";
// export { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";
import { CallCharacteristics, CallCharacteristics_acdCall /* IMPORTED_LONG_NAMED_BIT */, acdCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_lowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, lowPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_priorityCall /* IMPORTED_LONG_NAMED_BIT */, priorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_highPriorityCall /* IMPORTED_LONG_NAMED_BIT */, highPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_maintainanceCall /* IMPORTED_LONG_NAMED_BIT */, maintainanceCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_directAgent /* IMPORTED_LONG_NAMED_BIT */, directAgent /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_assistCall /* IMPORTED_LONG_NAMED_BIT */, assistCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_voiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, voiceUnitCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_privateCall /* IMPORTED_LONG_NAMED_BIT */, privateCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_personalCall /* IMPORTED_LONG_NAMED_BIT */, personalCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_sensitiveCall /* IMPORTED_LONG_NAMED_BIT */, sensitiveCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_confidentialCall /* IMPORTED_LONG_NAMED_BIT */, confidentialCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_encryptedCall /* IMPORTED_LONG_NAMED_BIT */, encryptedCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";
// export { CallCharacteristics, CallCharacteristics_acdCall /* IMPORTED_LONG_NAMED_BIT */, acdCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_lowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, lowPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_priorityCall /* IMPORTED_LONG_NAMED_BIT */, priorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_highPriorityCall /* IMPORTED_LONG_NAMED_BIT */, highPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_maintainanceCall /* IMPORTED_LONG_NAMED_BIT */, maintainanceCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_directAgent /* IMPORTED_LONG_NAMED_BIT */, directAgent /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_assistCall /* IMPORTED_LONG_NAMED_BIT */, assistCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_voiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, voiceUnitCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_privateCall /* IMPORTED_LONG_NAMED_BIT */, privateCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_personalCall /* IMPORTED_LONG_NAMED_BIT */, personalCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_sensitiveCall /* IMPORTED_LONG_NAMED_BIT */, sensitiveCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_confidentialCall /* IMPORTED_LONG_NAMED_BIT */, confidentialCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_encryptedCall /* IMPORTED_LONG_NAMED_BIT */, encryptedCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";
import { CallingDeviceID, _decode_CallingDeviceID, _encode_CallingDeviceID } from "../CSTA-device-identifiers/CallingDeviceID.ta.mjs";
// export { CallingDeviceID, _decode_CallingDeviceID, _encode_CallingDeviceID } from "../CSTA-device-identifiers/CallingDeviceID.ta.mjs";
import { CalledDeviceID, _decode_CalledDeviceID, _encode_CalledDeviceID } from "../CSTA-device-identifiers/CalledDeviceID.ta.mjs";
// export { CalledDeviceID, _decode_CalledDeviceID, _encode_CalledDeviceID } from "../CSTA-device-identifiers/CalledDeviceID.ta.mjs";
import { AssociatedCallingDeviceID, _decode_AssociatedCallingDeviceID, _encode_AssociatedCallingDeviceID } from "../CSTA-device-identifiers/AssociatedCallingDeviceID.ta.mjs";
// export { AssociatedCallingDeviceID, _decode_AssociatedCallingDeviceID, _encode_AssociatedCallingDeviceID } from "../CSTA-device-identifiers/AssociatedCallingDeviceID.ta.mjs";
import { AssociatedCalledDeviceID, _decode_AssociatedCalledDeviceID, _encode_AssociatedCalledDeviceID } from "../CSTA-device-identifiers/AssociatedCalledDeviceID.ta.mjs";
// export { AssociatedCalledDeviceID, _decode_AssociatedCalledDeviceID, _encode_AssociatedCalledDeviceID } from "../CSTA-device-identifiers/AssociatedCalledDeviceID.ta.mjs";
import { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";
// export { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";
import { SubjectOfCall, _decode_SubjectOfCall, _encode_SubjectOfCall } from "../CSTA-device-feature-types/SubjectOfCall.ta.mjs";
// export { SubjectOfCall, _decode_SubjectOfCall, _encode_SubjectOfCall } from "../CSTA-device-feature-types/SubjectOfCall.ta.mjs";
import { MessageInfo, _decode_MessageInfo, _encode_MessageInfo } from "../CSTA-device-feature-types/MessageInfo.ta.mjs";
// export { MessageInfo, _decode_MessageInfo, _encode_MessageInfo } from "../CSTA-device-feature-types/MessageInfo.ta.mjs";
import { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";
// export { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";
import { DeviceHistory, _decode_DeviceHistory, _encode_DeviceHistory } from "../CSTA-device-feature-types/DeviceHistory.ta.mjs";
// export { DeviceHistory, _decode_DeviceHistory, _encode_DeviceHistory } from "../CSTA-device-feature-types/DeviceHistory.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary SnapshotCallResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SnapshotCallResult ::= SEQUENCE
 * {    crossRefIDorSnapshotData CHOICE
 *     {    serviceCrossRefID     [0] IMPLICIT ServiceCrossRefID,
 *         snapshotData         SnapshotCallData },
 *     mediaCallCharacteristics     MediaCallCharacteristics         OPTIONAL,
 *     callCharacteristics         CallCharacteristics             OPTIONAL,
 *     callingDevice             CallingDeviceID             OPTIONAL,
 *     calledDevice             CalledDeviceID                 OPTIONAL,
 *     associatedCallingDeviceID     AssociatedCallingDeviceID         OPTIONAL,
 *     associatedCalledDeviceID     AssociatedCalledDeviceID         OPTIONAL,
 *     correlatorData             [1] IMPLICIT CorrelatorData         OPTIONAL,
 *     callLinkageData         [2] IMPLICIT CallLinkageData         OPTIONAL,
 *     subjectOfCall            [3] IMPLICIT    SubjectOfCall        OPTIONAL,
 *     messageInfo            [4] IMPLICIT    MessageInfo        OPTIONAL,
 *     languagePreferences        [5] IMPLICIT    LanguagePreferences    OPTIONAL,
 *     deviceHistory            [6] IMPLICIT    DeviceHistory        OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SnapshotCallResult {
    constructor (
        /**
         * @summary `crossRefIDorSnapshotData`.
         * @public
         * @readonly
         */
        readonly crossRefIDorSnapshotData: SnapshotCallResult_crossRefIDorSnapshotData,
        /**
         * @summary `mediaCallCharacteristics`.
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
        /**
         * @summary `callCharacteristics`.
         * @public
         * @readonly
         */
        readonly callCharacteristics: OPTIONAL<CallCharacteristics>,
        /**
         * @summary `callingDevice`.
         * @public
         * @readonly
         */
        readonly callingDevice: OPTIONAL<CallingDeviceID>,
        /**
         * @summary `calledDevice`.
         * @public
         * @readonly
         */
        readonly calledDevice: OPTIONAL<CalledDeviceID>,
        /**
         * @summary `associatedCallingDeviceID`.
         * @public
         * @readonly
         */
        readonly associatedCallingDeviceID: OPTIONAL<AssociatedCallingDeviceID>,
        /**
         * @summary `associatedCalledDeviceID`.
         * @public
         * @readonly
         */
        readonly associatedCalledDeviceID: OPTIONAL<AssociatedCalledDeviceID>,
        /**
         * @summary `correlatorData`.
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `callLinkageData`.
         * @public
         * @readonly
         */
        readonly callLinkageData: OPTIONAL<CallLinkageData>,
        /**
         * @summary `subjectOfCall`.
         * @public
         * @readonly
         */
        readonly subjectOfCall: OPTIONAL<SubjectOfCall>,
        /**
         * @summary `messageInfo`.
         * @public
         * @readonly
         */
        readonly messageInfo: OPTIONAL<MessageInfo>,
        /**
         * @summary `languagePreferences`.
         * @public
         * @readonly
         */
        readonly languagePreferences: OPTIONAL<LanguagePreferences>,
        /**
         * @summary `deviceHistory`.
         * @public
         * @readonly
         */
        readonly deviceHistory: OPTIONAL<DeviceHistory>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SnapshotCallResult
     * @description
     * 
     * This takes an `object` and converts it to a `SnapshotCallResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SnapshotCallResult`.
     * @returns {SnapshotCallResult}
     */
    public static _from_object (_o: { [_K in keyof (SnapshotCallResult)]: (SnapshotCallResult)[_K] }): SnapshotCallResult {
        return new SnapshotCallResult(_o.crossRefIDorSnapshotData, _o.mediaCallCharacteristics, _o.callCharacteristics, _o.callingDevice, _o.calledDevice, _o.associatedCallingDeviceID, _o.associatedCalledDeviceID, _o.correlatorData, _o.callLinkageData, _o.subjectOfCall, _o.messageInfo, _o.languagePreferences, _o.deviceHistory, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SnapshotCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SnapshotCallResult: $.ComponentSpec[] = [
    new $.ComponentSpec("crossRefIDorSnapshotData", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("callingDevice", true, $.hasTag(_TagClass.application, 1), undefined, undefined),
    new $.ComponentSpec("calledDevice", true, $.hasTag(_TagClass.application, 2), undefined, undefined),
    new $.ComponentSpec("associatedCallingDeviceID", true, $.hasTag(_TagClass.application, 5), undefined, undefined),
    new $.ComponentSpec("associatedCalledDeviceID", true, $.hasTag(_TagClass.application, 6), undefined, undefined),
    /* FIXME: correlatorData COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("callLinkageData", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("subjectOfCall", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("messageInfo", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("deviceHistory", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SnapshotCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SnapshotCallResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SnapshotCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SnapshotCallResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SnapshotCallResult: $.ASN1Decoder<SnapshotCallResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SnapshotCallResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SnapshotCallResult (el: _Element): SnapshotCallResult {
    if (!_cached_decoder_for_SnapshotCallResult) { _cached_decoder_for_SnapshotCallResult = function (el: _Element): SnapshotCallResult {
    let crossRefIDorSnapshotData!: SnapshotCallResult_crossRefIDorSnapshotData;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let callingDevice: OPTIONAL<CallingDeviceID>;
    let calledDevice: OPTIONAL<CalledDeviceID>;
    let associatedCallingDeviceID: OPTIONAL<AssociatedCallingDeviceID>;
    let associatedCalledDeviceID: OPTIONAL<AssociatedCalledDeviceID>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let callLinkageData: OPTIONAL<CallLinkageData>;
    let subjectOfCall: OPTIONAL<SubjectOfCall>;
    let messageInfo: OPTIONAL<MessageInfo>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let deviceHistory: OPTIONAL<DeviceHistory>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "crossRefIDorSnapshotData": (_el: _Element): void => { crossRefIDorSnapshotData = _decode_SnapshotCallResult_crossRefIDorSnapshotData(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = _decode_MediaCallCharacteristics(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = _decode_CallCharacteristics(_el); },
        "callingDevice": (_el: _Element): void => { callingDevice = _decode_CallingDeviceID(_el); },
        "calledDevice": (_el: _Element): void => { calledDevice = _decode_CalledDeviceID(_el); },
        "associatedCallingDeviceID": (_el: _Element): void => { associatedCallingDeviceID = _decode_AssociatedCallingDeviceID(_el); },
        "associatedCalledDeviceID": (_el: _Element): void => { associatedCalledDeviceID = _decode_AssociatedCalledDeviceID(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "callLinkageData": (_el: _Element): void => { callLinkageData = $._decode_implicit<CallLinkageData>(() => _decode_CallLinkageData)(_el); },
        "subjectOfCall": (_el: _Element): void => { subjectOfCall = $._decode_implicit<SubjectOfCall>(() => _decode_SubjectOfCall)(_el); },
        "messageInfo": (_el: _Element): void => { messageInfo = $._decode_implicit<MessageInfo>(() => _decode_MessageInfo)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "deviceHistory": (_el: _Element): void => { deviceHistory = $._decode_implicit<DeviceHistory>(() => _decode_DeviceHistory)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SnapshotCallResult,
        _extension_additions_list_spec_for_SnapshotCallResult,
        _root_component_type_list_2_spec_for_SnapshotCallResult,
        undefined,
    );
    return new SnapshotCallResult(
        crossRefIDorSnapshotData,
        mediaCallCharacteristics,
        callCharacteristics,
        callingDevice,
        calledDevice,
        associatedCallingDeviceID,
        associatedCalledDeviceID,
        correlatorData,
        callLinkageData,
        subjectOfCall,
        messageInfo,
        languagePreferences,
        deviceHistory,
        extensions
    );
}; }
    return _cached_decoder_for_SnapshotCallResult(el);
}

let _cached_encoder_for_SnapshotCallResult: $.ASN1Encoder<SnapshotCallResult> | null = null;

/**
 * @summary Encodes a(n) SnapshotCallResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SnapshotCallResult, encoded as an ASN.1 Element.
 */
export
function _encode_SnapshotCallResult (value: SnapshotCallResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SnapshotCallResult) { _cached_encoder_for_SnapshotCallResult = function (value: SnapshotCallResult, elGetter: $.ASN1Encoder<SnapshotCallResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SnapshotCallResult_crossRefIDorSnapshotData(value.crossRefIDorSnapshotData, $.BER),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : _encode_MediaCallCharacteristics(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : _encode_CallCharacteristics(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.callingDevice === undefined) ? undefined : _encode_CallingDeviceID(value.callingDevice, $.BER)),
            /* IF_ABSENT  */ ((value.calledDevice === undefined) ? undefined : _encode_CalledDeviceID(value.calledDevice, $.BER)),
            /* IF_ABSENT  */ ((value.associatedCallingDeviceID === undefined) ? undefined : _encode_AssociatedCallingDeviceID(value.associatedCallingDeviceID, $.BER)),
            /* IF_ABSENT  */ ((value.associatedCalledDeviceID === undefined) ? undefined : _encode_AssociatedCalledDeviceID(value.associatedCalledDeviceID, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CallLinkageData, $.BER)(value.callLinkageData, $.BER)),
            /* IF_ABSENT  */ ((value.subjectOfCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SubjectOfCall, $.BER)(value.subjectOfCall, $.BER)),
            /* IF_ABSENT  */ ((value.messageInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_MessageInfo, $.BER)(value.messageInfo, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.deviceHistory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_DeviceHistory, $.BER)(value.deviceHistory, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SnapshotCallResult(value, elGetter);
}


/* eslint-enable */
