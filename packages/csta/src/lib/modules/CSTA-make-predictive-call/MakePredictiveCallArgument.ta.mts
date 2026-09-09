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

import { SignallingDetection, _decode_SignallingDetection, _encode_SignallingDetection } from "../CSTA-make-predictive-call/SignallingDetection.ta.mjs";

import { DestinationDetection, _decode_DestinationDetection, _encode_DestinationDetection } from "../CSTA-make-predictive-call/DestinationDetection.ta.mjs";

import { DefaultAction, _decode_DefaultAction, _encode_DefaultAction } from "../CSTA-make-predictive-call/DefaultAction.ta.mjs";
import { _enum_for_DetectionAction } from "../CSTA-make-predictive-call/DetectionAction.ta.mjs";

import {
    AutoOriginate,
    _enum_for_AutoOriginate,
    AutoOriginate_prompt /* IMPORTED_LONG_ENUMERATION_ITEM */,
    prompt /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AutoOriginate,
    _encode_AutoOriginate
} from "../CSTA-call-control/AutoOriginate.ta.mjs";

import { CallCharacteristics, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";

import { SubjectOfCall, _decode_SubjectOfCall, _encode_SubjectOfCall } from "../CSTA-device-feature-types/SubjectOfCall.ta.mjs";

import { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



import { AccountInfo, _decode_AccountInfo, _encode_AccountInfo } from "../CSTA-device-feature-types/AccountInfo.ta.mjs";

import { AuthCode, _decode_AuthCode, _encode_AuthCode } from "../CSTA-device-feature-types/AuthCode.ta.mjs";

import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";

import { UserData, _decode_UserData, _encode_UserData } from "../CSTA-device-feature-types/UserData.ta.mjs";

/**
 * @summary MakePredictiveCallArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MakePredictiveCallArgument ::= SEQUENCE
 * {     callingDevice             DeviceID,
 *     calledDirectoryNumber         DeviceID,
 *     signallingDetection         [ 0] IMPLICIT SignallingDetection         OPTIONAL,
 *     destinationDetection         [ 1] IMPLICIT DestinationDetection        OPTIONAL,
 *     defaultAction             [ 2] IMPLICIT DefaultAction             OPTIONAL,
 *     accountCode             [ 3] IMPLICIT AccountInfo             OPTIONAL,
 *     authCode             [ 4] IMPLICIT AuthCode                 OPTIONAL,
 *     autoOriginate             [ 5] IMPLICIT AutoOriginate             DEFAULT prompt,
 *     alertTime             [ 6] IMPLICIT INTEGER                 OPTIONAL,
 *     correlatorData             [ 7] IMPLICIT CorrelatorData             OPTIONAL,
 *     callCharacteristics         [ 8] IMPLICIT CallCharacteristics         OPTIONAL,
 *     userData             UserData                     OPTIONAL, 
 *     subjectOfCall            [ 9] IMPLICIT SubjectOfCall            OPTIONAL,
 *     languagePreferences        [10] IMPLICIT LanguagePreferences        OPTIONAL,
 *     extensions             CSTACommonArguments                 OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MakePredictiveCallArgument {
    constructor (
        /**
         * @summary `callingDevice`.
         * @public
         * @readonly
         */
        readonly callingDevice: DeviceID,
        /**
         * @summary `calledDirectoryNumber`.
         * @public
         * @readonly
         */
        readonly calledDirectoryNumber: DeviceID,
        /**
         * @summary `signallingDetection`.
         * @public
         * @readonly
         */
        readonly signallingDetection: OPTIONAL<SignallingDetection>,
        /**
         * @summary `destinationDetection`.
         * @public
         * @readonly
         */
        readonly destinationDetection: OPTIONAL<DestinationDetection>,
        /**
         * @summary `defaultAction`.
         * @public
         * @readonly
         */
        readonly defaultAction: OPTIONAL<DefaultAction>,
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
         * @summary `autoOriginate`.
         * @public
         * @readonly
         */
        readonly autoOriginate: OPTIONAL<AutoOriginate>,
        /**
         * @summary `alertTime`.
         * @public
         * @readonly
         */
        readonly alertTime: OPTIONAL<INTEGER>,
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
     * @summary Restructures an object into a MakePredictiveCallArgument
     * @description
     * 
     * This takes an `object` and converts it to a `MakePredictiveCallArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MakePredictiveCallArgument`.
     * @returns {MakePredictiveCallArgument}
     */
    public static _from_object (_o: { [_K in keyof (MakePredictiveCallArgument)]: (MakePredictiveCallArgument)[_K] }): MakePredictiveCallArgument {
        return new MakePredictiveCallArgument(_o.callingDevice, _o.calledDirectoryNumber, _o.signallingDetection, _o.destinationDetection, _o.defaultAction, _o.accountCode, _o.authCode, _o.autoOriginate, _o.alertTime, _o.correlatorData, _o.callCharacteristics, _o.userData, _o.subjectOfCall, _o.languagePreferences, _o.extensions);
    }

    /**
     * @summary Getter that returns the default value for `autoOriginate`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_autoOriginate () { return AutoOriginate_prompt; }        /**
         * @summary The enum used as the type of the component `defaultAction`
         * @public
         * @static
         */

    public static _enum_for_defaultAction = _enum_for_DetectionAction;        /**
         * @summary The enum used as the type of the component `autoOriginate`
         * @public
         * @static
         */

    public static _enum_for_autoOriginate = _enum_for_AutoOriginate;
}

/**
 * @summary The Leading Root Component Types of MakePredictiveCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MakePredictiveCallArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("callingDevice", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("calledDirectoryNumber", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("signallingDetection", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("destinationDetection", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("defaultAction", true, $.hasTag(_TagClass.context, 2)),
        new $.ComponentSpec("accountCode", true, $.hasTag(_TagClass.context, 3)),
        new $.ComponentSpec("authCode", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("autoOriginate", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("alertTime", true, $.hasTag(_TagClass.context, 6)),
        new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.context, 8)),
        new $.ComponentSpec("userData", true, $.hasTag(_TagClass.application, 29)),
    new $.ComponentSpec("subjectOfCall", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of MakePredictiveCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MakePredictiveCallArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MakePredictiveCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MakePredictiveCallArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MakePredictiveCallArgument: $.ASN1Decoder<MakePredictiveCallArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MakePredictiveCallArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MakePredictiveCallArgument (el: _Element): MakePredictiveCallArgument {
    if (!_cached_decoder_for_MakePredictiveCallArgument) { _cached_decoder_for_MakePredictiveCallArgument = function (el: _Element): MakePredictiveCallArgument {
    let callingDevice!: DeviceID;
    let calledDirectoryNumber!: DeviceID;
    let signallingDetection: OPTIONAL<SignallingDetection>;
    let destinationDetection: OPTIONAL<DestinationDetection>;
    let defaultAction: OPTIONAL<DefaultAction>;
    let accountCode: OPTIONAL<AccountInfo>;
    let authCode: OPTIONAL<AuthCode>;
    let autoOriginate: OPTIONAL<AutoOriginate> = MakePredictiveCallArgument._default_value_for_autoOriginate;
    let alertTime: OPTIONAL<INTEGER>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let userData: OPTIONAL<UserData>;
    let subjectOfCall: OPTIONAL<SubjectOfCall>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "callingDevice": (_el: _Element): void => { callingDevice = _decode_DeviceID(_el); },
        "calledDirectoryNumber": (_el: _Element): void => { calledDirectoryNumber = _decode_DeviceID(_el); },
        "signallingDetection": (_el: _Element): void => { signallingDetection = $._decode_implicit<SignallingDetection>(() => _decode_SignallingDetection)(_el); },
        "destinationDetection": (_el: _Element): void => { destinationDetection = $._decode_implicit<DestinationDetection>(() => _decode_DestinationDetection)(_el); },
        "defaultAction": (_el: _Element): void => { defaultAction = $._decode_implicit<DefaultAction>(() => _decode_DefaultAction)(_el); },
        "accountCode": (_el: _Element): void => { accountCode = $._decode_implicit<AccountInfo>(() => _decode_AccountInfo)(_el); },
        "authCode": (_el: _Element): void => { authCode = $._decode_implicit<AuthCode>(() => _decode_AuthCode)(_el); },
        "autoOriginate": (_el: _Element): void => { autoOriginate = $._decode_implicit<AutoOriginate>(() => _decode_AutoOriginate)(_el); },
        "alertTime": (_el: _Element): void => { alertTime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "subjectOfCall": (_el: _Element): void => { subjectOfCall = $._decode_implicit<SubjectOfCall>(() => _decode_SubjectOfCall)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MakePredictiveCallArgument,
        _extension_additions_list_spec_for_MakePredictiveCallArgument,
        _root_component_type_list_2_spec_for_MakePredictiveCallArgument,
        undefined,
    );
    return new MakePredictiveCallArgument(
        callingDevice,
        calledDirectoryNumber,
        signallingDetection,
        destinationDetection,
        defaultAction,
        accountCode,
        authCode,
        autoOriginate,
        alertTime,
        correlatorData,
        callCharacteristics,
        userData,
        subjectOfCall,
        languagePreferences,
        extensions
    );
}; }
    return _cached_decoder_for_MakePredictiveCallArgument(el);
}

let _cached_encoder_for_MakePredictiveCallArgument: $.ASN1Encoder<MakePredictiveCallArgument> | null = null;

/**
 * @summary Encodes a(n) MakePredictiveCallArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MakePredictiveCallArgument, encoded as an ASN.1 Element.
 */
export
function _encode_MakePredictiveCallArgument (value: MakePredictiveCallArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MakePredictiveCallArgument) { _cached_encoder_for_MakePredictiveCallArgument = function (value: MakePredictiveCallArgument, elGetter: $.ASN1Encoder<MakePredictiveCallArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.callingDevice, $.BER),
            /* REQUIRED   */ _encode_DeviceID(value.calledDirectoryNumber, $.BER),
            /* IF_ABSENT  */ ((value.signallingDetection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_SignallingDetection, $.BER)(value.signallingDetection, $.BER)),
            /* IF_ABSENT  */ ((value.destinationDetection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DestinationDetection, $.BER)(value.destinationDetection, $.BER)),
            /* IF_ABSENT  */ ((value.defaultAction === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_DefaultAction, $.BER)(value.defaultAction, $.BER)),
            /* IF_ABSENT  */ ((value.accountCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AccountInfo, $.BER)(value.accountCode, $.BER)),
            /* IF_ABSENT  */ ((value.authCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_AuthCode, $.BER)(value.authCode, $.BER)),
            /* IF_DEFAULT */ (value.autoOriginate === undefined || $.deepEq(value.autoOriginate, MakePredictiveCallArgument._default_value_for_autoOriginate) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_AutoOriginate, $.BER)(value.autoOriginate, $.BER)),
            /* IF_ABSENT  */ ((value.alertTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.alertTime, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.userData === undefined) ? undefined : _encode_UserData(value.userData, $.BER)),
            /* IF_ABSENT  */ ((value.subjectOfCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_SubjectOfCall, $.BER)(value.subjectOfCall, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MakePredictiveCallArgument(value, elGetter);
}


/* eslint-enable */
