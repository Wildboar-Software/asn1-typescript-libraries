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

import { CallCharacteristics, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";

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
 * @summary SingleStepTransArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SingleStepTransArgument ::= SEQUENCE
 * {    activeCall             ConnectionID,
 *     transferredTo             DeviceID,
 *     accountCode             [0] IMPLICIT AccountInfo         OPTIONAL,
 *     authCode             [1] IMPLICIT AuthCode             OPTIONAL,
 *     correlatorData             [2] IMPLICIT CorrelatorData         OPTIONAL,
 *     userData             UserData                 OPTIONAL,
 *     callCharacteristics        [3] IMPLICIT CallCharacteristics    OPTIONAL,
 *     subjectOfCall            [4] IMPLICIT SubjectOfCall        OPTIONAL,
 *     languagePreferences        [5] IMPLICIT LanguagePreferences    OPTIONAL,
 *     reason                [6] IMPLICIT EventCause            OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SingleStepTransArgument {
    constructor (
        /**
         * @summary `activeCall`.
         * @public
         * @readonly
         */
        readonly activeCall: ConnectionID,
        /**
         * @summary `transferredTo`.
         * @public
         * @readonly
         */
        readonly transferredTo: DeviceID,
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
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: OPTIONAL<EventCause>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SingleStepTransArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SingleStepTransArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SingleStepTransArgument`.
     * @returns {SingleStepTransArgument}
     */
    public static _from_object (_o: { [_K in keyof (SingleStepTransArgument)]: (SingleStepTransArgument)[_K] }): SingleStepTransArgument {
        return new SingleStepTransArgument(_o.activeCall, _o.transferredTo, _o.accountCode, _o.authCode, _o.correlatorData, _o.userData, _o.callCharacteristics, _o.subjectOfCall, _o.languagePreferences, _o.reason, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `reason`
         * @public
         * @static
         */

    public static _enum_for_reason = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of SingleStepTransArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SingleStepTransArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("activeCall", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("transferredTo", false, $.hasTag(_TagClass.context, 0)),
        new $.ComponentSpec("accountCode", true, $.hasTag(_TagClass.context, 0)),
        new $.ComponentSpec("authCode", true, $.hasTag(_TagClass.context, 1)),
        new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 2)),
        new $.ComponentSpec("userData", true, $.hasTag(_TagClass.application, 29)),
    new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("subjectOfCall", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("reason", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SingleStepTransArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SingleStepTransArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SingleStepTransArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SingleStepTransArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SingleStepTransArgument: $.ASN1Decoder<SingleStepTransArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SingleStepTransArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SingleStepTransArgument (el: _Element): SingleStepTransArgument {
    if (!_cached_decoder_for_SingleStepTransArgument) { _cached_decoder_for_SingleStepTransArgument = function (el: _Element): SingleStepTransArgument {
    let activeCall!: ConnectionID;
    let transferredTo!: DeviceID;
    let accountCode: OPTIONAL<AccountInfo>;
    let authCode: OPTIONAL<AuthCode>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let userData: OPTIONAL<UserData>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let subjectOfCall: OPTIONAL<SubjectOfCall>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let reason: OPTIONAL<EventCause>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "activeCall": (_el: _Element): void => { activeCall = _decode_ConnectionID(_el); },
        "transferredTo": (_el: _Element): void => { transferredTo = _decode_DeviceID(_el); },
        "accountCode": (_el: _Element): void => { accountCode = $._decode_implicit<AccountInfo>(() => _decode_AccountInfo)(_el); },
        "authCode": (_el: _Element): void => { authCode = $._decode_implicit<AuthCode>(() => _decode_AuthCode)(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "subjectOfCall": (_el: _Element): void => { subjectOfCall = $._decode_implicit<SubjectOfCall>(() => _decode_SubjectOfCall)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "reason": (_el: _Element): void => { reason = $._decode_implicit<EventCause>(() => _decode_EventCause)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SingleStepTransArgument,
        _extension_additions_list_spec_for_SingleStepTransArgument,
        _root_component_type_list_2_spec_for_SingleStepTransArgument,
        undefined,
    );
    return new SingleStepTransArgument(
        activeCall,
        transferredTo,
        accountCode,
        authCode,
        correlatorData,
        userData,
        callCharacteristics,
        subjectOfCall,
        languagePreferences,
        reason,
        extensions
    );
}; }
    return _cached_decoder_for_SingleStepTransArgument(el);
}

let _cached_encoder_for_SingleStepTransArgument: $.ASN1Encoder<SingleStepTransArgument> | null = null;

/**
 * @summary Encodes a(n) SingleStepTransArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SingleStepTransArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SingleStepTransArgument (value: SingleStepTransArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SingleStepTransArgument) { _cached_encoder_for_SingleStepTransArgument = function (value: SingleStepTransArgument, elGetter: $.ASN1Encoder<SingleStepTransArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.activeCall, $.BER),
            /* REQUIRED   */ _encode_DeviceID(value.transferredTo, $.BER),
            /* IF_ABSENT  */ ((value.accountCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AccountInfo, $.BER)(value.accountCode, $.BER)),
            /* IF_ABSENT  */ ((value.authCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AuthCode, $.BER)(value.authCode, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.userData === undefined) ? undefined : _encode_UserData(value.userData, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.subjectOfCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SubjectOfCall, $.BER)(value.subjectOfCall, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.reason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_EventCause, $.BER)(value.reason, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SingleStepTransArgument(value, elGetter);
}


/* eslint-enable */
