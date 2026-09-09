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

import { CallQualifyingData, _decode_CallQualifyingData, _encode_CallQualifyingData } from "../CSTA-call-control/CallQualifyingData.ta.mjs";

import { SubjectOfCall, _decode_SubjectOfCall, _encode_SubjectOfCall } from "../CSTA-device-feature-types/SubjectOfCall.ta.mjs";

import { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";

import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



import { AccountInfo, _decode_AccountInfo, _encode_AccountInfo } from "../CSTA-device-feature-types/AccountInfo.ta.mjs";

import { AuthCode, _decode_AuthCode, _encode_AuthCode } from "../CSTA-device-feature-types/AuthCode.ta.mjs";

import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";

import { CallCharacteristics, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";

/**
 * @summary AssociateDataArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssociateDataArgument ::= SEQUENCE
 * {    existingCall            ConnectionID,
 *     accountCode            [0] IMPLICIT AccountInfo        OPTIONAL,
 *     authCode            [1] IMPLICIT AuthCode            OPTIONAL,
 *     correlatorData            [2] IMPLICIT CorrelatorData        OPTIONAL,
 *     callQualifyingData        [3] IMPLICIT CallQualifyingData        OPTIONAL,
 *     callCharacteristics        [4] IMPLICIT CallCharacteristics    OPTIONAL,
 *     subjectOfCall            [5] IMPLICIT SubjectOfCall        OPTIONAL,
 *     languagePreferences        [6] IMPLICIT LanguagePreferences    OPTIONAL,
 *     deviceInfo            [7] IMPLICIT DeviceID            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AssociateDataArgument {
    constructor (
        /**
         * @summary `existingCall`.
         * @public
         * @readonly
         */
        readonly existingCall: ConnectionID,
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
         * @summary `callQualifyingData`.
         * @public
         * @readonly
         */
        readonly callQualifyingData: OPTIONAL<CallQualifyingData>,
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
         * @summary `deviceInfo`.
         * @public
         * @readonly
         */
        readonly deviceInfo: OPTIONAL<DeviceID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a AssociateDataArgument
     * @description
     * 
     * This takes an `object` and converts it to a `AssociateDataArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AssociateDataArgument`.
     * @returns {AssociateDataArgument}
     */
    public static _from_object (_o: { [_K in keyof (AssociateDataArgument)]: (AssociateDataArgument)[_K] }): AssociateDataArgument {
        return new AssociateDataArgument(_o.existingCall, _o.accountCode, _o.authCode, _o.correlatorData, _o.callQualifyingData, _o.callCharacteristics, _o.subjectOfCall, _o.languagePreferences, _o.deviceInfo, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of AssociateDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AssociateDataArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("existingCall", false, $.hasTag(_TagClass.application, 11)),
        new $.ComponentSpec("accountCode", true, $.hasTag(_TagClass.context, 0)),
        new $.ComponentSpec("authCode", true, $.hasTag(_TagClass.context, 1)),
        new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callQualifyingData", true, $.hasTag(_TagClass.context, 3)),
        new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("subjectOfCall", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("deviceInfo", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of AssociateDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AssociateDataArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AssociateDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AssociateDataArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AssociateDataArgument: $.ASN1Decoder<AssociateDataArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssociateDataArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AssociateDataArgument (el: _Element): AssociateDataArgument {
    if (!_cached_decoder_for_AssociateDataArgument) { _cached_decoder_for_AssociateDataArgument = function (el: _Element): AssociateDataArgument {
    let existingCall!: ConnectionID;
    let accountCode: OPTIONAL<AccountInfo>;
    let authCode: OPTIONAL<AuthCode>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let callQualifyingData: OPTIONAL<CallQualifyingData>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let subjectOfCall: OPTIONAL<SubjectOfCall>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let deviceInfo: OPTIONAL<DeviceID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "existingCall": (_el: _Element): void => { existingCall = _decode_ConnectionID(_el); },
        "accountCode": (_el: _Element): void => { accountCode = $._decode_implicit<AccountInfo>(() => _decode_AccountInfo)(_el); },
        "authCode": (_el: _Element): void => { authCode = $._decode_implicit<AuthCode>(() => _decode_AuthCode)(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "callQualifyingData": (_el: _Element): void => { callQualifyingData = $._decode_implicit<CallQualifyingData>(() => _decode_CallQualifyingData)(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "subjectOfCall": (_el: _Element): void => { subjectOfCall = $._decode_implicit<SubjectOfCall>(() => _decode_SubjectOfCall)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "deviceInfo": (_el: _Element): void => { deviceInfo = $._decode_implicit<DeviceID>(() => _decode_DeviceID)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AssociateDataArgument,
        _extension_additions_list_spec_for_AssociateDataArgument,
        _root_component_type_list_2_spec_for_AssociateDataArgument,
        undefined,
    );
    return new AssociateDataArgument(
        existingCall,
        accountCode,
        authCode,
        correlatorData,
        callQualifyingData,
        callCharacteristics,
        subjectOfCall,
        languagePreferences,
        deviceInfo,
        extensions
    );
}; }
    return _cached_decoder_for_AssociateDataArgument(el);
}

let _cached_encoder_for_AssociateDataArgument: $.ASN1Encoder<AssociateDataArgument> | null = null;

/**
 * @summary Encodes a(n) AssociateDataArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociateDataArgument, encoded as an ASN.1 Element.
 */
export
function _encode_AssociateDataArgument (value: AssociateDataArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AssociateDataArgument) { _cached_encoder_for_AssociateDataArgument = function (value: AssociateDataArgument, elGetter: $.ASN1Encoder<AssociateDataArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.existingCall, $.BER),
            /* IF_ABSENT  */ ((value.accountCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AccountInfo, $.BER)(value.accountCode, $.BER)),
            /* IF_ABSENT  */ ((value.authCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AuthCode, $.BER)(value.authCode, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.callQualifyingData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CallQualifyingData, $.BER)(value.callQualifyingData, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.subjectOfCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SubjectOfCall, $.BER)(value.subjectOfCall, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.deviceInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_DeviceID, $.BER)(value.deviceInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AssociateDataArgument(value, elGetter);
}


/* eslint-enable */
