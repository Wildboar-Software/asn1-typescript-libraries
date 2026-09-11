/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import {
    AutoOriginate,
    _enum_for_AutoOriginate,
    AutoOriginate_prompt /* IMPORTED_LONG_ENUMERATION_ITEM */,
    prompt /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AutoOriginate,
    _encode_AutoOriginate
} from "../CSTA-call-control/AutoOriginate.ta.mjs";

import { CallCharacteristics, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";

import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";

import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";

import { SubjectOfCall, _decode_SubjectOfCall, _encode_SubjectOfCall } from "../CSTA-device-feature-types/SubjectOfCall.ta.mjs";

import { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";

import {
    EventCause,
    _enum_for_EventCause,
    _decode_EventCause,
    _encode_EventCause
} from "../CSTA-event-causes/EventCause.ta.mjs";

import { TimeInfo, _decode_TimeInfo, _encode_TimeInfo } from "../CSTA-security/TimeInfo.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



import { AccountInfo, _decode_AccountInfo, _encode_AccountInfo } from "../CSTA-device-feature-types/AccountInfo.ta.mjs";

import { AuthCode, _decode_AuthCode, _encode_AuthCode } from "../CSTA-device-feature-types/AuthCode.ta.mjs";

import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";

/**
 * @summary MakeConnectionArgument
 * @description
 *
 * Service request for Make Connection (ECMA-269 §17.1.19 /
 * ECMA-285 §15.1.19). Names the initiating device and optional
 * resource hints (`maxDevices`, `startTime`, `duration`).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MakeConnectionArgument ::= SEQUENCE
 * {     initiatingDevice         DeviceID,
 *     accountCode             [ 0] IMPLICIT AccountInfo             OPTIONAL,
 *     authCode             [ 1] IMPLICIT AuthCode                 OPTIONAL,
 *     autoOriginate             [ 2] IMPLICIT AutoOriginate             DEFAULT prompt,
 *     correlatorData             [ 3] IMPLICIT CorrelatorData             OPTIONAL,
 *     callCharacteristics         [ 4] IMPLICIT CallCharacteristics         OPTIONAL,
 *     mediaCallCharacteristics     [ 5] IMPLICIT MediaCallCharacteristics         OPTIONAL,
 *     connectionInfo            [ 6] IMPLICIT ConnectionInformation        OPTIONAL,
 *     subjectOfCall            [ 7] IMPLICIT SubjectOfCall            OPTIONAL,
 *     languagePreferences        [ 8] IMPLICIT LanguagePreferences        OPTIONAL,
 *     reason                [ 9] IMPLICIT EventCause            OPTIONAL,
 *     maxDevices            [10] IMPLICIT INTEGER                OPTIONAL,
 *     startTime            [11] IMPLICIT TimeInfo                OPTIONAL,
 *     duration            [12] IMPLICIT INTEGER                OPTIONAL,
 *     extensions             CSTACommonArguments                 OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MakeConnectionArgument {
    constructor (
        /**
         * @summary `initiatingDevice`.
         * @description
         *
         * Mandatory. Device (or group) that originates the
         * connection. May name a group; later events use the
         * actual device, and Originated reports this value as
         * `originatingDevice` (FR 10).
         *
         * @public
         * @readonly
         */
        readonly initiatingDevice: DeviceID,
        /**
         * @summary `accountCode`.
         * @description
         *
         * Optional account code (§12.2.1).
         *
         * @public
         * @readonly
         */
        readonly accountCode: OPTIONAL<AccountInfo>,
        /**
         * @summary `authCode`.
         * @description
         *
         * Optional authorization code (§12.2.3).
         *
         * @public
         * @readonly
         */
        readonly authCode: OPTIONAL<AuthCode>,
        /**
         * @summary `autoOriginate`.
         * @description
         *
         * Default `prompt`. `doNotPrompt` is switching-function
         * dependent if the device cannot auto-answer (FR 4).
         *
         * @public
         * @readonly
         */
        readonly autoOriginate: OPTIONAL<AutoOriginate>,
        /**
         * @summary `correlatorData`.
         * @description
         *
         * Optional correlator data attached before resulting state
         * transitions (§12.2.10).
         *
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `callCharacteristics`.
         * @description
         *
         * Optional call characteristics (§12.2.4).
         *
         * @public
         * @readonly
         */
        readonly callCharacteristics: OPTIONAL<CallCharacteristics>,
        /**
         * @summary `mediaCallCharacteristics`.
         * @description
         *
         * Optional media class/characteristics (§12.2.20). The
         * switching function may adjust digital-data values
         * (FR 8).
         *
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
        /**
         * @summary `connectionInfo`.
         * @description
         *
         * Optional connection information (channels, flow)
         * (§12.2.8).
         *
         * @public
         * @readonly
         */
        readonly connectionInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `subjectOfCall`.
         * @description
         *
         * Optional subject or intent (§12.2.27).
         *
         * @public
         * @readonly
         */
        readonly subjectOfCall: OPTIONAL<SubjectOfCall>,
        /**
         * @summary `languagePreferences`.
         * @description
         *
         * Optional preferred language(s) (§12.2.16).
         *
         * @public
         * @readonly
         */
        readonly languagePreferences: OPTIONAL<LanguagePreferences>,
        /**
         * @summary `reason`.
         * @description
         *
         * Optional `EventCause` for underlying signalling
         * (§12.2.15).
         *
         * @public
         * @readonly
         */
        readonly reason: OPTIONAL<EventCause>,
        /**
         * @summary `maxDevices`.
         * @description
         *
         * Optional hint for future resource allocation. Unsupported
         * values cause a negative response (FR 3, FR 5).
         *
         * @public
         * @readonly
         */
        readonly maxDevices: OPTIONAL<INTEGER>,
        /**
         * @summary `startTime`.
         * @description
         *
         * Optional planned start. Unsupported values cause a
         * negative response (FR 3).
         *
         * @public
         * @readonly
         */
        readonly startTime: OPTIONAL<TimeInfo>,
        /**
         * @summary `duration`.
         * @description
         *
         * Optional planned duration. The switching function may
         * still clear the connection earlier (FR 5).
         *
         * @public
         * @readonly
         */
        readonly duration: OPTIONAL<INTEGER>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional `CSTACommonArguments` carrying the security and
         * privateData parameters from the ECMA-269 service table.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a MakeConnectionArgument
     * @description
     * 
     * This takes an `object` and converts it to a `MakeConnectionArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MakeConnectionArgument`.
     * @returns {MakeConnectionArgument}
     */
    public static _from_object (_o: { [_K in keyof (MakeConnectionArgument)]: (MakeConnectionArgument)[_K] }): MakeConnectionArgument {
        return new MakeConnectionArgument(_o.initiatingDevice, _o.accountCode, _o.authCode, _o.autoOriginate, _o.correlatorData, _o.callCharacteristics, _o.mediaCallCharacteristics, _o.connectionInfo, _o.subjectOfCall, _o.languagePreferences, _o.reason, _o.maxDevices, _o.startTime, _o.duration, _o.extensions);
    }

    /**
     * @summary Getter that returns the default value for `autoOriginate`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_autoOriginate () { return AutoOriginate_prompt; }        /**
         * @summary The enum used as the type of the component `autoOriginate`
         * @public
         * @static
         */

    public static _enum_for_autoOriginate = _enum_for_AutoOriginate;        /**
         * @summary The enum used as the type of the component `reason`
         * @public
         * @static
         */

    public static _enum_for_reason = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of MakeConnectionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MakeConnectionArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("initiatingDevice", false, $.hasTag(_TagClass.universal, 16)),
        new $.ComponentSpec("accountCode", true, $.hasTag(_TagClass.context, 0)),
        new $.ComponentSpec("authCode", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("autoOriginate", true, $.hasTag(_TagClass.context, 2)),
        new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("connectionInfo", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("subjectOfCall", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("reason", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("maxDevices", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("duration", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of MakeConnectionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MakeConnectionArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MakeConnectionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MakeConnectionArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MakeConnectionArgument: $.ASN1Decoder<MakeConnectionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MakeConnectionArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MakeConnectionArgument (el: _Element): MakeConnectionArgument {
    if (!_cached_decoder_for_MakeConnectionArgument) { _cached_decoder_for_MakeConnectionArgument = function (el: _Element): MakeConnectionArgument {
    let initiatingDevice!: DeviceID;
    let accountCode: OPTIONAL<AccountInfo>;
    let authCode: OPTIONAL<AuthCode>;
    let autoOriginate: OPTIONAL<AutoOriginate> = MakeConnectionArgument._default_value_for_autoOriginate;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let connectionInfo: OPTIONAL<ConnectionInformation>;
    let subjectOfCall: OPTIONAL<SubjectOfCall>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let reason: OPTIONAL<EventCause>;
    let maxDevices: OPTIONAL<INTEGER>;
    let startTime: OPTIONAL<TimeInfo>;
    let duration: OPTIONAL<INTEGER>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "initiatingDevice": (_el: _Element): void => { initiatingDevice = _decode_DeviceID(_el); },
        "accountCode": (_el: _Element): void => { accountCode = $._decode_implicit<AccountInfo>(() => _decode_AccountInfo)(_el); },
        "authCode": (_el: _Element): void => { authCode = $._decode_implicit<AuthCode>(() => _decode_AuthCode)(_el); },
        "autoOriginate": (_el: _Element): void => { autoOriginate = $._decode_implicit<AutoOriginate>(() => _decode_AutoOriginate)(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "connectionInfo": (_el: _Element): void => { connectionInfo = $._decode_implicit<ConnectionInformation>(() => _decode_ConnectionInformation)(_el); },
        "subjectOfCall": (_el: _Element): void => { subjectOfCall = $._decode_implicit<SubjectOfCall>(() => _decode_SubjectOfCall)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "reason": (_el: _Element): void => { reason = $._decode_implicit<EventCause>(() => _decode_EventCause)(_el); },
        "maxDevices": (_el: _Element): void => { maxDevices = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<TimeInfo>(() => _decode_TimeInfo)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MakeConnectionArgument,
        _extension_additions_list_spec_for_MakeConnectionArgument,
        _root_component_type_list_2_spec_for_MakeConnectionArgument,
        undefined,
    );
    return new MakeConnectionArgument(
        initiatingDevice,
        accountCode,
        authCode,
        autoOriginate,
        correlatorData,
        callCharacteristics,
        mediaCallCharacteristics,
        connectionInfo,
        subjectOfCall,
        languagePreferences,
        reason,
        maxDevices,
        startTime,
        duration,
        extensions
    );
}; }
    return _cached_decoder_for_MakeConnectionArgument(el);
}

let _cached_encoder_for_MakeConnectionArgument: $.ASN1Encoder<MakeConnectionArgument> | null = null;

/**
 * @summary Encodes a(n) MakeConnectionArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MakeConnectionArgument, encoded as an ASN.1 Element.
 */
export
function _encode_MakeConnectionArgument (value: MakeConnectionArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MakeConnectionArgument) { _cached_encoder_for_MakeConnectionArgument = function (value: MakeConnectionArgument, elGetter: $.ASN1Encoder<MakeConnectionArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.initiatingDevice, $.BER),
            /* IF_ABSENT  */ ((value.accountCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AccountInfo, $.BER)(value.accountCode, $.BER)),
            /* IF_ABSENT  */ ((value.authCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AuthCode, $.BER)(value.authCode, $.BER)),
            /* IF_DEFAULT */ (value.autoOriginate === undefined || $.deepEq(value.autoOriginate, MakeConnectionArgument._default_value_for_autoOriginate) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AutoOriginate, $.BER)(value.autoOriginate, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.connectionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ConnectionInformation, $.BER)(value.connectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.subjectOfCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_SubjectOfCall, $.BER)(value.subjectOfCall, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.reason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_EventCause, $.BER)(value.reason, $.BER)),
            /* IF_ABSENT  */ ((value.maxDevices === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.maxDevices, $.BER)),
            /* IF_ABSENT  */ ((value.startTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_TimeInfo, $.BER)(value.startTime, $.BER)),
            /* IF_ABSENT  */ ((value.duration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER)(value.duration, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MakeConnectionArgument(value, elGetter);
}


/* eslint-enable */
