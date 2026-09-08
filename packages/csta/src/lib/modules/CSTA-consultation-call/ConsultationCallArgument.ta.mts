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
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
// export { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
// export { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
import { CallCharacteristics, CallCharacteristics_acdCall /* IMPORTED_LONG_NAMED_BIT */, acdCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_lowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, lowPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_priorityCall /* IMPORTED_LONG_NAMED_BIT */, priorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_highPriorityCall /* IMPORTED_LONG_NAMED_BIT */, highPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_maintainanceCall /* IMPORTED_LONG_NAMED_BIT */, maintainanceCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_directAgent /* IMPORTED_LONG_NAMED_BIT */, directAgent /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_assistCall /* IMPORTED_LONG_NAMED_BIT */, assistCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_voiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, voiceUnitCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_privateCall /* IMPORTED_LONG_NAMED_BIT */, privateCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_personalCall /* IMPORTED_LONG_NAMED_BIT */, personalCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_sensitiveCall /* IMPORTED_LONG_NAMED_BIT */, sensitiveCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_confidentialCall /* IMPORTED_LONG_NAMED_BIT */, confidentialCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_encryptedCall /* IMPORTED_LONG_NAMED_BIT */, encryptedCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";
// export { CallCharacteristics, CallCharacteristics_acdCall /* IMPORTED_LONG_NAMED_BIT */, acdCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_lowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, lowPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_priorityCall /* IMPORTED_LONG_NAMED_BIT */, priorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_highPriorityCall /* IMPORTED_LONG_NAMED_BIT */, highPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_maintainanceCall /* IMPORTED_LONG_NAMED_BIT */, maintainanceCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_directAgent /* IMPORTED_LONG_NAMED_BIT */, directAgent /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_assistCall /* IMPORTED_LONG_NAMED_BIT */, assistCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_voiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, voiceUnitCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_privateCall /* IMPORTED_LONG_NAMED_BIT */, privateCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_personalCall /* IMPORTED_LONG_NAMED_BIT */, personalCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_sensitiveCall /* IMPORTED_LONG_NAMED_BIT */, sensitiveCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_confidentialCall /* IMPORTED_LONG_NAMED_BIT */, confidentialCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_encryptedCall /* IMPORTED_LONG_NAMED_BIT */, encryptedCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";
import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";
// export { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";
import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
// export { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
import { ConsultOptions, _enum_for_ConsultOptions, ConsultOptions_unrestricted /* IMPORTED_LONG_ENUMERATION_ITEM */, unrestricted /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConsultOptions_consultOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, consultOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConsultOptions_transferOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, transferOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConsultOptions_conferenceOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, conferenceOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ConsultOptions, _encode_ConsultOptions } from "../CSTA-call-control/ConsultOptions.ta.mjs";
// export { ConsultOptions, _enum_for_ConsultOptions, ConsultOptions_unrestricted /* IMPORTED_LONG_ENUMERATION_ITEM */, unrestricted /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConsultOptions_consultOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, consultOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConsultOptions_transferOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, transferOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConsultOptions_conferenceOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, conferenceOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ConsultOptions, _encode_ConsultOptions } from "../CSTA-call-control/ConsultOptions.ta.mjs";
import { SubjectOfCall, _decode_SubjectOfCall, _encode_SubjectOfCall } from "../CSTA-device-feature-types/SubjectOfCall.ta.mjs";
// export { SubjectOfCall, _decode_SubjectOfCall, _encode_SubjectOfCall } from "../CSTA-device-feature-types/SubjectOfCall.ta.mjs";
import { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";
// export { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary ConsultationCallArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConsultationCallArgument ::= SEQUENCE
 * {     existingCall             [ 0] IMPLICIT ConnectionID,
 *     consultedDevice         [ 1] DeviceID,
 *     connectionReservation         [ 2] IMPLICIT BOOLEAN                 OPTIONAL,
 *     accountCode             [ 3] IMPLICIT AccountInfo             OPTIONAL,
 *     authCode             [ 4] IMPLICIT AuthCode                 OPTIONAL,
 *     correlatorData             [ 5] IMPLICIT CorrelatorData             OPTIONAL,
 *     userData             [ 6] IMPLICIT UserData                 OPTIONAL,
 *     callCharacteristics         [ 7] IMPLICIT CallCharacteristics         OPTIONAL,
 *     mediaCallCharacteristics     [ 8] IMPLICIT MediaCallCharacteristics         OPTIONAL,
 *     callingConnectionInfo         [ 9] IMPLICIT ConnectionInformation         OPTIONAL,
 *     consultOptions             [10] IMPLICIT ConsultOptions             DEFAULT unrestricted,
 *     subjectOfCall            [11] IMPLICIT SubjectOfCall            OPTIONAL,
 *     languagePreferences        [12] IMPLICIT LanguagePreferences        OPTIONAL,
 *     extensions             CSTACommonArguments                 OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ConsultationCallArgument {
    constructor (
        /**
         * @summary `existingCall`.
         * @public
         * @readonly
         */
        readonly existingCall: ConnectionID,
        /**
         * @summary `consultedDevice`.
         * @public
         * @readonly
         */
        readonly consultedDevice: DeviceID,
        /**
         * @summary `connectionReservation`.
         * @public
         * @readonly
         */
        readonly connectionReservation: OPTIONAL<BOOLEAN>,
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
         * @summary `userData`.
         * @public
         * @readonly
         */
        readonly userData: OPTIONAL<UserData>,
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
         * @summary `callingConnectionInfo`.
         * @public
         * @readonly
         */
        readonly callingConnectionInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `consultOptions`.
         * @public
         * @readonly
         */
        readonly consultOptions: OPTIONAL<ConsultOptions>,
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
     * @summary Restructures an object into a ConsultationCallArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ConsultationCallArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConsultationCallArgument`.
     * @returns {ConsultationCallArgument}
     */
    public static _from_object (_o: { [_K in keyof (ConsultationCallArgument)]: (ConsultationCallArgument)[_K] }): ConsultationCallArgument {
        return new ConsultationCallArgument(_o.existingCall, _o.consultedDevice, _o.connectionReservation, _o.accountCode, _o.authCode, _o.correlatorData, _o.userData, _o.callCharacteristics, _o.mediaCallCharacteristics, _o.callingConnectionInfo, _o.consultOptions, _o.subjectOfCall, _o.languagePreferences, _o.extensions);
    }

    /**
     * @summary Getter that returns the default value for `consultOptions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_consultOptions () { return ConsultOptions_unrestricted; }        /**
         * @summary The enum used as the type of the component `consultOptions`
         * @public
         * @static
         */

    public static _enum_for_consultOptions = _enum_for_ConsultOptions;
}

/**
 * @summary The Leading Root Component Types of ConsultationCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConsultationCallArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("existingCall", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("consultedDevice", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("connectionReservation", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    /* FIXME: accountCode COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: authCode COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: correlatorData COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: userData COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("callingConnectionInfo", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("consultOptions", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("subjectOfCall", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ConsultationCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConsultationCallArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConsultationCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConsultationCallArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConsultationCallArgument: $.ASN1Decoder<ConsultationCallArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConsultationCallArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConsultationCallArgument (el: _Element): ConsultationCallArgument {
    if (!_cached_decoder_for_ConsultationCallArgument) { _cached_decoder_for_ConsultationCallArgument = function (el: _Element): ConsultationCallArgument {
    let existingCall!: ConnectionID;
    let consultedDevice!: DeviceID;
    let connectionReservation: OPTIONAL<BOOLEAN>;
    let accountCode: OPTIONAL<AccountInfo>;
    let authCode: OPTIONAL<AuthCode>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let userData: OPTIONAL<UserData>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let callingConnectionInfo: OPTIONAL<ConnectionInformation>;
    let consultOptions: OPTIONAL<ConsultOptions> = ConsultationCallArgument._default_value_for_consultOptions;
    let subjectOfCall: OPTIONAL<SubjectOfCall>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "existingCall": (_el: _Element): void => { existingCall = $._decode_implicit<ConnectionID>(() => _decode_ConnectionID)(_el); },
        "consultedDevice": (_el: _Element): void => { consultedDevice = $._decode_explicit<DeviceID>(() => _decode_DeviceID)(_el); },
        "connectionReservation": (_el: _Element): void => { connectionReservation = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "accountCode": (_el: _Element): void => { accountCode = $._decode_implicit<AccountInfo>(() => _decode_AccountInfo)(_el); },
        "authCode": (_el: _Element): void => { authCode = $._decode_implicit<AuthCode>(() => _decode_AuthCode)(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "userData": (_el: _Element): void => { userData = $._decode_implicit<UserData>(() => _decode_UserData)(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "callingConnectionInfo": (_el: _Element): void => { callingConnectionInfo = $._decode_implicit<ConnectionInformation>(() => _decode_ConnectionInformation)(_el); },
        "consultOptions": (_el: _Element): void => { consultOptions = $._decode_implicit<ConsultOptions>(() => _decode_ConsultOptions)(_el); },
        "subjectOfCall": (_el: _Element): void => { subjectOfCall = $._decode_implicit<SubjectOfCall>(() => _decode_SubjectOfCall)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConsultationCallArgument,
        _extension_additions_list_spec_for_ConsultationCallArgument,
        _root_component_type_list_2_spec_for_ConsultationCallArgument,
        undefined,
    );
    return new ConsultationCallArgument(
        existingCall,
        consultedDevice,
        connectionReservation,
        accountCode,
        authCode,
        correlatorData,
        userData,
        callCharacteristics,
        mediaCallCharacteristics,
        callingConnectionInfo,
        consultOptions,
        subjectOfCall,
        languagePreferences,
        extensions
    );
}; }
    return _cached_decoder_for_ConsultationCallArgument(el);
}

let _cached_encoder_for_ConsultationCallArgument: $.ASN1Encoder<ConsultationCallArgument> | null = null;

/**
 * @summary Encodes a(n) ConsultationCallArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConsultationCallArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ConsultationCallArgument (value: ConsultationCallArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConsultationCallArgument) { _cached_encoder_for_ConsultationCallArgument = function (value: ConsultationCallArgument, elGetter: $.ASN1Encoder<ConsultationCallArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ConnectionID, $.BER)(value.existingCall, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_DeviceID, $.BER)(value.consultedDevice, $.BER),
            /* IF_ABSENT  */ ((value.connectionReservation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.connectionReservation, $.BER)),
            /* IF_ABSENT  */ ((value.accountCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AccountInfo, $.BER)(value.accountCode, $.BER)),
            /* IF_ABSENT  */ ((value.authCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_AuthCode, $.BER)(value.authCode, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.userData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_UserData, $.BER)(value.userData, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.callingConnectionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_ConnectionInformation, $.BER)(value.callingConnectionInfo, $.BER)),
            /* IF_DEFAULT */ (value.consultOptions === undefined || $.deepEq(value.consultOptions, ConsultationCallArgument._default_value_for_consultOptions) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_ConsultOptions, $.BER)(value.consultOptions, $.BER)),
            /* IF_ABSENT  */ ((value.subjectOfCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_SubjectOfCall, $.BER)(value.subjectOfCall, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConsultationCallArgument(value, elGetter);
}


/* eslint-enable */
