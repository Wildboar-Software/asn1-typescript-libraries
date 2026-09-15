/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { CallCharacteristics, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";

import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";

import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";

import {
    ConsultOptions,
    _enum_for_ConsultOptions,
    ConsultOptions_unrestricted /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unrestricted /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ConsultOptions,
    _encode_ConsultOptions
} from "../CSTA-call-control/ConsultOptions.ta.mjs";

import { SubjectOfCall, _decode_SubjectOfCall, _encode_SubjectOfCall } from "../CSTA-device-feature-types/SubjectOfCall.ta.mjs";

import { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



import { AccountInfo, _decode_AccountInfo, _encode_AccountInfo } from "../CSTA-device-feature-types/AccountInfo.ta.mjs";

import { AuthCode, _decode_AuthCode, _encode_AuthCode } from "../CSTA-device-feature-types/AuthCode.ta.mjs";

import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";

import { UserData, _decode_UserData, _encode_UserData } from "../CSTA-device-feature-types/UserData.ta.mjs";

/**
 * @summary ConsultationCallArgument
 * @description
 *
 * Service request for Consultation Call (ECMA-269 §17.1.10 /
 * ECMA-285 §15.1.10). Holds `existingCall` and originates toward
 * `consultedDevice`. Correlator data here applies to the secondary
 * call only (§12.2.10 FR 5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
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
         * @description
         *
         * Mandatory. Active connection at the consulting device.
         * Becomes Hold.
         *
         * @public
         * @readonly
         */
        readonly existingCall: ConnectionID,
        /**
         * @summary `consultedDevice`.
         * @description
         *
         * Mandatory. Destination of the consultation. May be a
         * null DeviceID or a Diallable Digits string ending in
         * `;` to stage dialling via Dial Digits (FR 6–7). Other
         * formats must be a complete sequence. Active features at
         * this device are honoured (FR 1).
         *
         * @public
         * @readonly
         */
        readonly consultedDevice: DeviceID,
        /**
         * @summary `connectionReservation`.
         * @description
         *
         * Optional. When TRUE, reserve the held call's
         * media-stream channel(s) for later Retrieve/Reconnect.
         *
         * @public
         * @readonly
         */
        readonly connectionReservation: OPTIONAL<BOOLEAN>,
        /**
         * @summary `accountCode`.
         * @description
         *
         * Optional account code for the consultation call
         * (§12.2.1). A null string clears it.
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
         * @summary `correlatorData`.
         * @description
         *
         * Optional correlator data for the secondary call only; it
         * does not change correlator data on the primary call
         * (§12.2.10 FR 5). A null string clears data on the
         * secondary call.
         *
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `userData`.
         * @description
         *
         * Optional user data sent with the consultation (§12.2.30).
         *
         * @public
         * @readonly
         */
        readonly userData: OPTIONAL<UserData>,
        /**
         * @summary `callCharacteristics`.
         * @description
         *
         * Optional call characteristics for the consultation
         * (§12.2.4).
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
         * switching function may adjust digital-data values and
         * return them in the result (FR 8).
         *
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
        /**
         * @summary `callingConnectionInfo`.
         * @description
         *
         * Optional connection information for the originating
         * connection of the consultation (§12.2.8).
         *
         * @public
         * @readonly
         */
        readonly callingConnectionInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `consultOptions`.
         * @description
         *
         * Default `unrestricted`. When supported, send a
         * capability-advertised value so transfer/conference
         * resources can be reserved. Conference vs Transfer
         * restricts which service may complete the consultation
         * (FR 2–5).
         *
         * @public
         * @readonly
         */
        readonly consultOptions: OPTIONAL<ConsultOptions>,
        /**
         * @summary `subjectOfCall`.
         * @description
         *
         * Optional subject or intent of the consultation call
         * (§12.2.27).
         *
         * @public
         * @readonly
         */
        readonly subjectOfCall: OPTIONAL<SubjectOfCall>,
        /**
         * @summary `languagePreferences`.
         * @description
         *
         * Optional preferred language(s) for the consultation
         * (§12.2.16).
         *
         * @public
         * @readonly
         */
        readonly languagePreferences: OPTIONAL<LanguagePreferences>,
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
    new $.ComponentSpec("existingCall", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("consultedDevice", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("connectionReservation", true, $.hasTag(_TagClass.context, 2)),
        new $.ComponentSpec("accountCode", true, $.hasTag(_TagClass.context, 3)),
        new $.ComponentSpec("authCode", true, $.hasTag(_TagClass.context, 4)),
        new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 5)),
        new $.ComponentSpec("userData", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("callingConnectionInfo", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("consultOptions", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("subjectOfCall", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
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
