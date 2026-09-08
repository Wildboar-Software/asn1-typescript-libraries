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
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
// export { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
import { DeviceListItems, _decode_DeviceListItems, _encode_DeviceListItems } from "../CSTA-send-message/DeviceListItems.ta.mjs";
// export { DeviceListItems, _decode_DeviceListItems, _encode_DeviceListItems } from "../CSTA-send-message/DeviceListItems.ta.mjs";
import { MessageInfo, _decode_MessageInfo, _encode_MessageInfo } from "../CSTA-device-feature-types/MessageInfo.ta.mjs";
// export { MessageInfo, _decode_MessageInfo, _encode_MessageInfo } from "../CSTA-device-feature-types/MessageInfo.ta.mjs";
import { CallCharacteristics, CallCharacteristics_acdCall /* IMPORTED_LONG_NAMED_BIT */, acdCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_lowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, lowPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_priorityCall /* IMPORTED_LONG_NAMED_BIT */, priorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_highPriorityCall /* IMPORTED_LONG_NAMED_BIT */, highPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_maintainanceCall /* IMPORTED_LONG_NAMED_BIT */, maintainanceCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_directAgent /* IMPORTED_LONG_NAMED_BIT */, directAgent /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_assistCall /* IMPORTED_LONG_NAMED_BIT */, assistCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_voiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, voiceUnitCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_privateCall /* IMPORTED_LONG_NAMED_BIT */, privateCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_personalCall /* IMPORTED_LONG_NAMED_BIT */, personalCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_sensitiveCall /* IMPORTED_LONG_NAMED_BIT */, sensitiveCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_confidentialCall /* IMPORTED_LONG_NAMED_BIT */, confidentialCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_encryptedCall /* IMPORTED_LONG_NAMED_BIT */, encryptedCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";
// export { CallCharacteristics, CallCharacteristics_acdCall /* IMPORTED_LONG_NAMED_BIT */, acdCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_lowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, lowPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_priorityCall /* IMPORTED_LONG_NAMED_BIT */, priorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_highPriorityCall /* IMPORTED_LONG_NAMED_BIT */, highPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_maintainanceCall /* IMPORTED_LONG_NAMED_BIT */, maintainanceCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_directAgent /* IMPORTED_LONG_NAMED_BIT */, directAgent /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_assistCall /* IMPORTED_LONG_NAMED_BIT */, assistCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_voiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, voiceUnitCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_privateCall /* IMPORTED_LONG_NAMED_BIT */, privateCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_personalCall /* IMPORTED_LONG_NAMED_BIT */, personalCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_sensitiveCall /* IMPORTED_LONG_NAMED_BIT */, sensitiveCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_confidentialCall /* IMPORTED_LONG_NAMED_BIT */, confidentialCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_encryptedCall /* IMPORTED_LONG_NAMED_BIT */, encryptedCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";
import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";
// export { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";
import { SubjectOfCall, _decode_SubjectOfCall, _encode_SubjectOfCall } from "../CSTA-device-feature-types/SubjectOfCall.ta.mjs";
// export { SubjectOfCall, _decode_SubjectOfCall, _encode_SubjectOfCall } from "../CSTA-device-feature-types/SubjectOfCall.ta.mjs";
import { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";
// export { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary SendMessageArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendMessageArgument ::= SEQUENCE
 * {    callingDevice             DeviceID,
 *     destinationDevices        DeviceListItems,
 *     messageInfo             MessageInfo,
 *     accountCode             [0] IMPLICIT AccountInfo             OPTIONAL,
 *     authCode             [1] IMPLICIT AuthCode                 OPTIONAL,
 *     correlatorData             [2] IMPLICIT CorrelatorData             OPTIONAL,
 *     callCharacteristics        [3] IMPLICIT CallCharacteristics        OPTIONAL,
 *     mediaCallCharacteristics    [4] IMPLICIT MediaCallCharacteristics        OPTIONAL,
 *     subjectOfCall             [5] IMPLICIT SubjectOfCall             OPTIONAL,
 *     languagePreferences        [6] IMPLICIT LanguagePreferences        OPTIONAL,
 *     extensions             CSTACommonArguments                 OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SendMessageArgument {
    constructor (
        /**
         * @summary `callingDevice`.
         * @public
         * @readonly
         */
        readonly callingDevice: DeviceID,
        /**
         * @summary `destinationDevices`.
         * @public
         * @readonly
         */
        readonly destinationDevices: DeviceListItems,
        /**
         * @summary `messageInfo`.
         * @public
         * @readonly
         */
        readonly messageInfo: MessageInfo,
        /**
         * @summary `accountCode`.
         * @public
         * @readonly
         */
        readonly accountCode: OPTIONAL<AccountInfo>,
        /**
         * @summary `authCode`.
         * @public
         * @readonly
         */
        readonly authCode: OPTIONAL<AuthCode>,
        /**
         * @summary `correlatorData`.
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `callCharacteristics`.
         * @public
         * @readonly
         */
        readonly callCharacteristics: OPTIONAL<CallCharacteristics>,
        /**
         * @summary `mediaCallCharacteristics`.
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
        /**
         * @summary `subjectOfCall`.
         * @public
         * @readonly
         */
        readonly subjectOfCall: OPTIONAL<SubjectOfCall>,
        /**
         * @summary `languagePreferences`.
         * @public
         * @readonly
         */
        readonly languagePreferences: OPTIONAL<LanguagePreferences>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SendMessageArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SendMessageArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendMessageArgument`.
     * @returns {SendMessageArgument}
     */
    public static _from_object (_o: { [_K in keyof (SendMessageArgument)]: (SendMessageArgument)[_K] }): SendMessageArgument {
        return new SendMessageArgument(_o.callingDevice, _o.destinationDevices, _o.messageInfo, _o.accountCode, _o.authCode, _o.correlatorData, _o.callCharacteristics, _o.mediaCallCharacteristics, _o.subjectOfCall, _o.languagePreferences, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SendMessageArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendMessageArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("callingDevice", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("destinationDevices", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("messageInfo", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    /* FIXME: accountCode COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: authCode COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: correlatorData COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("subjectOfCall", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SendMessageArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendMessageArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendMessageArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendMessageArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SendMessageArgument: $.ASN1Decoder<SendMessageArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendMessageArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendMessageArgument (el: _Element): SendMessageArgument {
    if (!_cached_decoder_for_SendMessageArgument) { _cached_decoder_for_SendMessageArgument = function (el: _Element): SendMessageArgument {
    let callingDevice!: DeviceID;
    let destinationDevices!: DeviceListItems;
    let messageInfo!: MessageInfo;
    let accountCode: OPTIONAL<AccountInfo>;
    let authCode: OPTIONAL<AuthCode>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let subjectOfCall: OPTIONAL<SubjectOfCall>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "callingDevice": (_el: _Element): void => { callingDevice = _decode_DeviceID(_el); },
        "destinationDevices": (_el: _Element): void => { destinationDevices = _decode_DeviceListItems(_el); },
        "messageInfo": (_el: _Element): void => { messageInfo = _decode_MessageInfo(_el); },
        "accountCode": (_el: _Element): void => { accountCode = $._decode_implicit<AccountInfo>(() => _decode_AccountInfo)(_el); },
        "authCode": (_el: _Element): void => { authCode = $._decode_implicit<AuthCode>(() => _decode_AuthCode)(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "subjectOfCall": (_el: _Element): void => { subjectOfCall = $._decode_implicit<SubjectOfCall>(() => _decode_SubjectOfCall)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendMessageArgument,
        _extension_additions_list_spec_for_SendMessageArgument,
        _root_component_type_list_2_spec_for_SendMessageArgument,
        undefined,
    );
    return new SendMessageArgument(
        callingDevice,
        destinationDevices,
        messageInfo,
        accountCode,
        authCode,
        correlatorData,
        callCharacteristics,
        mediaCallCharacteristics,
        subjectOfCall,
        languagePreferences,
        extensions
    );
}; }
    return _cached_decoder_for_SendMessageArgument(el);
}

let _cached_encoder_for_SendMessageArgument: $.ASN1Encoder<SendMessageArgument> | null = null;

/**
 * @summary Encodes a(n) SendMessageArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendMessageArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SendMessageArgument (value: SendMessageArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendMessageArgument) { _cached_encoder_for_SendMessageArgument = function (value: SendMessageArgument, elGetter: $.ASN1Encoder<SendMessageArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.callingDevice, $.BER),
            /* REQUIRED   */ _encode_DeviceListItems(value.destinationDevices, $.BER),
            /* REQUIRED   */ _encode_MessageInfo(value.messageInfo, $.BER),
            /* IF_ABSENT  */ ((value.accountCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AccountInfo, $.BER)(value.accountCode, $.BER)),
            /* IF_ABSENT  */ ((value.authCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AuthCode, $.BER)(value.authCode, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.subjectOfCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SubjectOfCall, $.BER)(value.subjectOfCall, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SendMessageArgument(value, elGetter);
}


/* eslint-enable */
