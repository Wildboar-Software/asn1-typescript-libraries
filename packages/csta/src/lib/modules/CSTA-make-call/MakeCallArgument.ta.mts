/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
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

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



import { AccountInfo, _decode_AccountInfo, _encode_AccountInfo } from "../CSTA-device-feature-types/AccountInfo.ta.mjs";

import { AuthCode, _decode_AuthCode, _encode_AuthCode } from "../CSTA-device-feature-types/AuthCode.ta.mjs";

import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";

import { UserData, _decode_UserData, _encode_UserData } from "../CSTA-device-feature-types/UserData.ta.mjs";

/**
 * @summary MakeCallArgument
 * @description
 *
 * Service request for Make Call (ECMA-269 §17.1.18 / ECMA-285
 * §15.1.18). Names calling and called devices. Validation
 * failure yields a negative ack and no ConnectionIDs (FR 2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MakeCallArgument ::= SEQUENCE
 * {     callingDevice             DeviceID,
 *     calledDirectoryNumber         DeviceID,
 *     accountCode             [0] IMPLICIT AccountInfo         OPTIONAL,
 *     authCode             [1] IMPLICIT AuthCode             OPTIONAL,
 *     autoOriginate             [3] IMPLICIT AutoOriginate         DEFAULT prompt,
 *     correlatorData             [2] IMPLICIT CorrelatorData         OPTIONAL,
 *     userData             UserData                 OPTIONAL,
 *     callCharacteristics         CallCharacteristics             OPTIONAL,
 *     mediaCallCharacteristics     [4] IMPLICIT MediaCallCharacteristics     OPTIONAL,
 *     callingConnectionInfo         [5] IMPLICIT ConnectionInformation     OPTIONAL,
 *     subjectOfCall            [6] IMPLICIT SubjectOfCall        OPTIONAL,
 *     languagePreferences        [7] IMPLICIT LanguagePreferences    OPTIONAL,
 *     reason                [8] IMPLICIT EventCause            OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MakeCallArgument {
    constructor (
        /**
         * @summary `callingDevice`.
         * @description
         *
         * Mandatory. Device from which the call is originated.
         * Initial Null or Initiated (if already off-hook, FR 6).
         * May identify a group; subsequent events use the actual
         * originating device.
         *
         * @public
         * @readonly
         */
        readonly callingDevice: DeviceID,
        /**
         * @summary `calledDirectoryNumber`.
         * @description
         *
         * Mandatory. Called device. May be a null DeviceID or a
         * Diallable Digits string ending in `;` to stage dialling
         * via Dial Digits (FR 7–8). Other formats must be
         * complete. Called-device features are honoured (FR 5).
         *
         * @public
         * @readonly
         */
        readonly calledDirectoryNumber: DeviceID,
        /**
         * @summary `accountCode`.
         * @description
         *
         * Optional account code for the new call (§12.2.1).
         *
         * @public
         * @readonly
         */
        readonly accountCode: OPTIONAL<AccountInfo>,
        /**
         * @summary `authCode`.
         * @description
         *
         * Optional authorization code for this request (§12.2.3).
         *
         * @public
         * @readonly
         */
        readonly authCode: OPTIONAL<AuthCode>,
        /**
         * @summary `autoOriginate`.
         * @description
         *
         * Default `prompt`. Whether the switching function
         * prompts the calling device off-hook. `doNotPrompt` is
         * switching-function dependent if the device cannot
         * auto-answer (FR 3).
         *
         * @public
         * @readonly
         */
        readonly autoOriginate: OPTIONAL<AutoOriginate>,
        /**
         * @summary `correlatorData`.
         * @description
         *
         * Optional correlator data attached before resulting
         * state transitions (§12.2.10).
         *
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `userData`.
         * @description
         *
         * Optional user data sent with the call (§12.2.30).
         *
         * @public
         * @readonly
         */
        readonly userData: OPTIONAL<UserData>,
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
         * (FR 10).
         *
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
        /**
         * @summary `callingConnectionInfo`.
         * @description
         *
         * Optional connection information for the calling
         * connection (§12.2.8).
         *
         * @public
         * @readonly
         */
        readonly callingConnectionInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `subjectOfCall`.
         * @description
         *
         * Optional subject or intent of the call (§12.2.27).
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
     * @summary Restructures an object into a MakeCallArgument
     * @description
     * 
     * This takes an `object` and converts it to a `MakeCallArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MakeCallArgument`.
     * @returns {MakeCallArgument}
     */
    public static _from_object (_o: { [_K in keyof (MakeCallArgument)]: (MakeCallArgument)[_K] }): MakeCallArgument {
        return new MakeCallArgument(_o.callingDevice, _o.calledDirectoryNumber, _o.accountCode, _o.authCode, _o.autoOriginate, _o.correlatorData, _o.userData, _o.callCharacteristics, _o.mediaCallCharacteristics, _o.callingConnectionInfo, _o.subjectOfCall, _o.languagePreferences, _o.reason, _o.extensions);
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
 * @summary The Leading Root Component Types of MakeCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MakeCallArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("callingDevice", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("calledDirectoryNumber", false, $.hasTag(_TagClass.universal, 16)),
        new $.ComponentSpec("accountCode", true, $.hasTag(_TagClass.context, 0)),
        new $.ComponentSpec("authCode", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("autoOriginate", true, $.hasTag(_TagClass.context, 3)),
        new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 2)),
        new $.ComponentSpec("userData", true, $.hasTag(_TagClass.application, 29)),
    new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("callingConnectionInfo", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("subjectOfCall", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("reason", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of MakeCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MakeCallArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MakeCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MakeCallArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MakeCallArgument: $.ASN1Decoder<MakeCallArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MakeCallArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MakeCallArgument (el: _Element): MakeCallArgument {
    if (!_cached_decoder_for_MakeCallArgument) { _cached_decoder_for_MakeCallArgument = function (el: _Element): MakeCallArgument {
    let callingDevice!: DeviceID;
    let calledDirectoryNumber!: DeviceID;
    let accountCode: OPTIONAL<AccountInfo>;
    let authCode: OPTIONAL<AuthCode>;
    let autoOriginate: OPTIONAL<AutoOriginate> = MakeCallArgument._default_value_for_autoOriginate;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let userData: OPTIONAL<UserData>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let callingConnectionInfo: OPTIONAL<ConnectionInformation>;
    let subjectOfCall: OPTIONAL<SubjectOfCall>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let reason: OPTIONAL<EventCause>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "callingDevice": (_el: _Element): void => { callingDevice = _decode_DeviceID(_el); },
        "calledDirectoryNumber": (_el: _Element): void => { calledDirectoryNumber = _decode_DeviceID(_el); },
        "accountCode": (_el: _Element): void => { accountCode = $._decode_implicit<AccountInfo>(() => _decode_AccountInfo)(_el); },
        "authCode": (_el: _Element): void => { authCode = $._decode_implicit<AuthCode>(() => _decode_AuthCode)(_el); },
        "autoOriginate": (_el: _Element): void => { autoOriginate = $._decode_implicit<AutoOriginate>(() => _decode_AutoOriginate)(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = _decode_CallCharacteristics(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "callingConnectionInfo": (_el: _Element): void => { callingConnectionInfo = $._decode_implicit<ConnectionInformation>(() => _decode_ConnectionInformation)(_el); },
        "subjectOfCall": (_el: _Element): void => { subjectOfCall = $._decode_implicit<SubjectOfCall>(() => _decode_SubjectOfCall)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "reason": (_el: _Element): void => { reason = $._decode_implicit<EventCause>(() => _decode_EventCause)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MakeCallArgument,
        _extension_additions_list_spec_for_MakeCallArgument,
        _root_component_type_list_2_spec_for_MakeCallArgument,
        undefined,
    );
    return new MakeCallArgument(
        callingDevice,
        calledDirectoryNumber,
        accountCode,
        authCode,
        autoOriginate,
        correlatorData,
        userData,
        callCharacteristics,
        mediaCallCharacteristics,
        callingConnectionInfo,
        subjectOfCall,
        languagePreferences,
        reason,
        extensions
    );
}; }
    return _cached_decoder_for_MakeCallArgument(el);
}

let _cached_encoder_for_MakeCallArgument: $.ASN1Encoder<MakeCallArgument> | null = null;

/**
 * @summary Encodes a(n) MakeCallArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MakeCallArgument, encoded as an ASN.1 Element.
 */
export
function _encode_MakeCallArgument (value: MakeCallArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MakeCallArgument) { _cached_encoder_for_MakeCallArgument = function (value: MakeCallArgument, elGetter: $.ASN1Encoder<MakeCallArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.callingDevice, $.BER),
            /* REQUIRED   */ _encode_DeviceID(value.calledDirectoryNumber, $.BER),
            /* IF_ABSENT  */ ((value.accountCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AccountInfo, $.BER)(value.accountCode, $.BER)),
            /* IF_ABSENT  */ ((value.authCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AuthCode, $.BER)(value.authCode, $.BER)),
            /* IF_DEFAULT */ (value.autoOriginate === undefined || $.deepEq(value.autoOriginate, MakeCallArgument._default_value_for_autoOriginate) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AutoOriginate, $.BER)(value.autoOriginate, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.userData === undefined) ? undefined : _encode_UserData(value.userData, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : _encode_CallCharacteristics(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.callingConnectionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ConnectionInformation, $.BER)(value.callingConnectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.subjectOfCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_SubjectOfCall, $.BER)(value.subjectOfCall, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.reason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_EventCause, $.BER)(value.reason, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MakeCallArgument(value, elGetter);
}


/* eslint-enable */
