/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { SubjectOfCall, _decode_SubjectOfCall, _encode_SubjectOfCall } from "../CSTA-device-feature-types/SubjectOfCall.ta.mjs";

import { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



import { ParticipationType, ParticipationType_active, _decode_ParticipationType, _encode_ParticipationType } from "../CSTA-device-feature-types/ParticipationType.ta.mjs";

import { AccountInfo, _decode_AccountInfo, _encode_AccountInfo } from "../CSTA-device-feature-types/AccountInfo.ta.mjs";

import { AuthCode, _decode_AuthCode, _encode_AuthCode } from "../CSTA-device-feature-types/AuthCode.ta.mjs";

import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";

import { UserData, _decode_UserData, _encode_UserData } from "../CSTA-device-feature-types/UserData.ta.mjs";

/**
 * @summary SingleStepConfArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SingleStepConfArgument ::= SEQUENCE
 * {    activeCall             ConnectionID,
 *     deviceToJoin             DeviceID,
 *     participationType         ParticipationType             DEFAULT active,
 *     accountCode             [0] IMPLICIT AccountInfo         OPTIONAL,
 *     authCode             [1] IMPLICIT AuthCode             OPTIONAL,
 *     correlatorData             [2] IMPLICIT CorrelatorData         OPTIONAL,
 *     userData             UserData                 OPTIONAL,
 *     subjectOfCall            [3] IMPLICIT SubjectOfCall        OPTIONAL,
 *     languagePreferences        [4] IMPLICIT LanguagePreferences    OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SingleStepConfArgument {
    constructor (
        /**
         * @summary `activeCall`.
         * @public
         * @readonly
         */
        readonly activeCall: ConnectionID,
        /**
         * @summary `deviceToJoin`.
         * @public
         * @readonly
         */
        readonly deviceToJoin: DeviceID,
        /**
         * @summary `participationType`.
         * @public
         * @readonly
         */
        readonly participationType: OPTIONAL<ParticipationType>,
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
     * @summary Restructures an object into a SingleStepConfArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SingleStepConfArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SingleStepConfArgument`.
     * @returns {SingleStepConfArgument}
     */
    public static _from_object (_o: { [_K in keyof (SingleStepConfArgument)]: (SingleStepConfArgument)[_K] }): SingleStepConfArgument {
        return new SingleStepConfArgument(_o.activeCall, _o.deviceToJoin, _o.participationType, _o.accountCode, _o.authCode, _o.correlatorData, _o.userData, _o.subjectOfCall, _o.languagePreferences, _o.extensions);
    }

    /**
     * @summary Getter that returns the default value for `participationType`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_participationType () { return ParticipationType_active; }
}

/**
 * @summary The Leading Root Component Types of SingleStepConfArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SingleStepConfArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("activeCall", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("deviceToJoin", false, $.hasTag(_TagClass.context, 0)),
        new $.ComponentSpec("participationType", true, $.hasTag(_TagClass.universal, 10)),
        new $.ComponentSpec("accountCode", true, $.hasTag(_TagClass.context, 0)),
        new $.ComponentSpec("authCode", true, $.hasTag(_TagClass.context, 1)),
        new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 2)),
        new $.ComponentSpec("userData", true, $.hasTag(_TagClass.application, 29)),
    new $.ComponentSpec("subjectOfCall", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SingleStepConfArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SingleStepConfArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SingleStepConfArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SingleStepConfArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SingleStepConfArgument: $.ASN1Decoder<SingleStepConfArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SingleStepConfArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SingleStepConfArgument (el: _Element): SingleStepConfArgument {
    if (!_cached_decoder_for_SingleStepConfArgument) { _cached_decoder_for_SingleStepConfArgument = function (el: _Element): SingleStepConfArgument {
    let activeCall!: ConnectionID;
    let deviceToJoin!: DeviceID;
    let participationType: OPTIONAL<ParticipationType> = SingleStepConfArgument._default_value_for_participationType;
    let accountCode: OPTIONAL<AccountInfo>;
    let authCode: OPTIONAL<AuthCode>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let userData: OPTIONAL<UserData>;
    let subjectOfCall: OPTIONAL<SubjectOfCall>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "activeCall": (_el: _Element): void => { activeCall = _decode_ConnectionID(_el); },
        "deviceToJoin": (_el: _Element): void => { deviceToJoin = _decode_DeviceID(_el); },
        "participationType": (_el: _Element): void => { participationType = _decode_ParticipationType(_el); },
        "accountCode": (_el: _Element): void => { accountCode = $._decode_implicit<AccountInfo>(() => _decode_AccountInfo)(_el); },
        "authCode": (_el: _Element): void => { authCode = $._decode_implicit<AuthCode>(() => _decode_AuthCode)(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "subjectOfCall": (_el: _Element): void => { subjectOfCall = $._decode_implicit<SubjectOfCall>(() => _decode_SubjectOfCall)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SingleStepConfArgument,
        _extension_additions_list_spec_for_SingleStepConfArgument,
        _root_component_type_list_2_spec_for_SingleStepConfArgument,
        undefined,
    );
    return new SingleStepConfArgument(
        activeCall,
        deviceToJoin,
        participationType,
        accountCode,
        authCode,
        correlatorData,
        userData,
        subjectOfCall,
        languagePreferences,
        extensions
    );
}; }
    return _cached_decoder_for_SingleStepConfArgument(el);
}

let _cached_encoder_for_SingleStepConfArgument: $.ASN1Encoder<SingleStepConfArgument> | null = null;

/**
 * @summary Encodes a(n) SingleStepConfArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SingleStepConfArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SingleStepConfArgument (value: SingleStepConfArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SingleStepConfArgument) { _cached_encoder_for_SingleStepConfArgument = function (value: SingleStepConfArgument, elGetter: $.ASN1Encoder<SingleStepConfArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.activeCall, $.BER),
            /* REQUIRED   */ _encode_DeviceID(value.deviceToJoin, $.BER),
            /* IF_DEFAULT */ (value.participationType === undefined || $.deepEq(value.participationType, SingleStepConfArgument._default_value_for_participationType) ? undefined : _encode_ParticipationType(value.participationType, $.BER)),
            /* IF_ABSENT  */ ((value.accountCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AccountInfo, $.BER)(value.accountCode, $.BER)),
            /* IF_ABSENT  */ ((value.authCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AuthCode, $.BER)(value.authCode, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.userData === undefined) ? undefined : _encode_UserData(value.userData, $.BER)),
            /* IF_ABSENT  */ ((value.subjectOfCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SubjectOfCall, $.BER)(value.subjectOfCall, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SingleStepConfArgument(value, elGetter);
}


/* eslint-enable */
