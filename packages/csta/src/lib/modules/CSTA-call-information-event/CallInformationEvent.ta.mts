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

import { ServicesPermitted, _decode_ServicesPermitted, _encode_ServicesPermitted } from "../CSTA-call-control/ServicesPermitted.ta.mjs";

import { CallQualifyingData, _decode_CallQualifyingData, _encode_CallQualifyingData } from "../CSTA-call-control/CallQualifyingData.ta.mjs";

import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";

import { CallLinkageDataList, _decode_CallLinkageDataList, _encode_CallLinkageDataList } from "../CSTA-call-control/CallLinkageDataList.ta.mjs";

import { CallCharacteristics, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";

import { SubjectOfCall, _decode_SubjectOfCall, _encode_SubjectOfCall } from "../CSTA-device-feature-types/SubjectOfCall.ta.mjs";

import { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";

import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";

import { CallingDeviceID, _decode_CallingDeviceID, _encode_CallingDeviceID } from "../CSTA-device-identifiers/CallingDeviceID.ta.mjs";

import { AccountInfo, _decode_AccountInfo, _encode_AccountInfo } from "../CSTA-device-feature-types/AccountInfo.ta.mjs";

import { AuthCode, _decode_AuthCode, _encode_AuthCode } from "../CSTA-device-feature-types/AuthCode.ta.mjs";

import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";

import { UserData, _decode_UserData, _encode_UserData } from "../CSTA-device-feature-types/UserData.ta.mjs";

/**
 * @summary CallInformationEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallInformationEvent ::= SEQUENCE
 * {    connection            ConnectionID,
 *     device                SubjectDeviceID,
 *     callingDevice            CallingDeviceID                OPTIONAL,
 *     accountInfo            [0] IMPLICIT AccountInfo        OPTIONAL,
 *     authCode            [1] IMPLICIT AuthCode            OPTIONAL,
 *     correlatorData            [2] IMPLICIT CorrelatorData        OPTIONAL,
 *     servicesPermitted        [3] IMPLICIT ServicesPermitted        OPTIONAL,
 *     userData            UserData                 OPTIONAL,
 *     callQualifyingData        [4] IMPLICIT CallQualifyingData        OPTIONAL,
 *     connectionInfo            ConnectionInformation            OPTIONAL,
 *     callLinkageDataList        [5] IMPLICIT CallLinkageDataList    OPTIONAL,
 *     callCharacteristics        [6] IMPLICIT CallCharacteristics    OPTIONAL,
 *     subjectOfCall            [7] IMPLICIT SubjectOfCall        OPTIONAL,
 *     languagePreferences        [8] IMPLICIT LanguagePreferences    OPTIONAL,
 *     deviceInfo            [9] IMPLICIT DeviceID            OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CallInformationEvent {
    constructor (
        /**
         * @summary `connection`.
         * @public
         * @readonly
         */
        readonly connection: ConnectionID,
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: SubjectDeviceID,
        /**
         * @summary `callingDevice`.
         * @public
         * @readonly
         */
        readonly callingDevice: OPTIONAL<CallingDeviceID>,
        /**
         * @summary `accountInfo`.
         * @public
         * @readonly
         */
        readonly accountInfo: OPTIONAL<AccountInfo>,
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
         * @summary `servicesPermitted`.
         * @public
         * @readonly
         */
        readonly servicesPermitted: OPTIONAL<ServicesPermitted>,
        /**
         * @summary `userData`.
         * @public
         * @readonly
         */
        readonly userData: OPTIONAL<UserData>,
        /**
         * @summary `callQualifyingData`.
         * @public
         * @readonly
         */
        readonly callQualifyingData: OPTIONAL<CallQualifyingData>,
        /**
         * @summary `connectionInfo`.
         * @public
         * @readonly
         */
        readonly connectionInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `callLinkageDataList`.
         * @public
         * @readonly
         */
        readonly callLinkageDataList: OPTIONAL<CallLinkageDataList>,
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
     * @summary Restructures an object into a CallInformationEvent
     * @description
     * 
     * This takes an `object` and converts it to a `CallInformationEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallInformationEvent`.
     * @returns {CallInformationEvent}
     */
    public static _from_object (_o: { [_K in keyof (CallInformationEvent)]: (CallInformationEvent)[_K] }): CallInformationEvent {
        return new CallInformationEvent(_o.connection, _o.device, _o.callingDevice, _o.accountInfo, _o.authCode, _o.correlatorData, _o.servicesPermitted, _o.userData, _o.callQualifyingData, _o.connectionInfo, _o.callLinkageDataList, _o.callCharacteristics, _o.subjectOfCall, _o.languagePreferences, _o.deviceInfo, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of CallInformationEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallInformationEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("connection", false, $.hasTag(_TagClass.application, 11)),
        new $.ComponentSpec("device", false, $.hasTag(_TagClass.application, 3)),
        new $.ComponentSpec("callingDevice", true, $.hasTag(_TagClass.application, 1)),
        new $.ComponentSpec("accountInfo", true, $.hasTag(_TagClass.context, 0)),
        new $.ComponentSpec("authCode", true, $.hasTag(_TagClass.context, 1)),
        new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servicesPermitted", true, $.hasTag(_TagClass.context, 3)),
        new $.ComponentSpec("userData", true, $.hasTag(_TagClass.application, 29)),
    new $.ComponentSpec("callQualifyingData", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("connectionInfo", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("callLinkageDataList", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("subjectOfCall", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("deviceInfo", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of CallInformationEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallInformationEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallInformationEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallInformationEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallInformationEvent: $.ASN1Decoder<CallInformationEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallInformationEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallInformationEvent (el: _Element): CallInformationEvent {
    if (!_cached_decoder_for_CallInformationEvent) { _cached_decoder_for_CallInformationEvent = function (el: _Element): CallInformationEvent {
    let connection!: ConnectionID;
    let device!: SubjectDeviceID;
    let callingDevice: OPTIONAL<CallingDeviceID>;
    let accountInfo: OPTIONAL<AccountInfo>;
    let authCode: OPTIONAL<AuthCode>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let servicesPermitted: OPTIONAL<ServicesPermitted>;
    let userData: OPTIONAL<UserData>;
    let callQualifyingData: OPTIONAL<CallQualifyingData>;
    let connectionInfo: OPTIONAL<ConnectionInformation>;
    let callLinkageDataList: OPTIONAL<CallLinkageDataList>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let subjectOfCall: OPTIONAL<SubjectOfCall>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let deviceInfo: OPTIONAL<DeviceID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connection": (_el: _Element): void => { connection = _decode_ConnectionID(_el); },
        "device": (_el: _Element): void => { device = _decode_SubjectDeviceID(_el); },
        "callingDevice": (_el: _Element): void => { callingDevice = _decode_CallingDeviceID(_el); },
        "accountInfo": (_el: _Element): void => { accountInfo = $._decode_implicit<AccountInfo>(() => _decode_AccountInfo)(_el); },
        "authCode": (_el: _Element): void => { authCode = $._decode_implicit<AuthCode>(() => _decode_AuthCode)(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "servicesPermitted": (_el: _Element): void => { servicesPermitted = $._decode_implicit<ServicesPermitted>(() => _decode_ServicesPermitted)(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "callQualifyingData": (_el: _Element): void => { callQualifyingData = $._decode_implicit<CallQualifyingData>(() => _decode_CallQualifyingData)(_el); },
        "connectionInfo": (_el: _Element): void => { connectionInfo = _decode_ConnectionInformation(_el); },
        "callLinkageDataList": (_el: _Element): void => { callLinkageDataList = $._decode_implicit<CallLinkageDataList>(() => _decode_CallLinkageDataList)(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "subjectOfCall": (_el: _Element): void => { subjectOfCall = $._decode_implicit<SubjectOfCall>(() => _decode_SubjectOfCall)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "deviceInfo": (_el: _Element): void => { deviceInfo = $._decode_implicit<DeviceID>(() => _decode_DeviceID)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallInformationEvent,
        _extension_additions_list_spec_for_CallInformationEvent,
        _root_component_type_list_2_spec_for_CallInformationEvent,
        undefined,
    );
    return new CallInformationEvent(
        connection,
        device,
        callingDevice,
        accountInfo,
        authCode,
        correlatorData,
        servicesPermitted,
        userData,
        callQualifyingData,
        connectionInfo,
        callLinkageDataList,
        callCharacteristics,
        subjectOfCall,
        languagePreferences,
        deviceInfo,
        extensions
    );
}; }
    return _cached_decoder_for_CallInformationEvent(el);
}

let _cached_encoder_for_CallInformationEvent: $.ASN1Encoder<CallInformationEvent> | null = null;

/**
 * @summary Encodes a(n) CallInformationEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallInformationEvent, encoded as an ASN.1 Element.
 */
export
function _encode_CallInformationEvent (value: CallInformationEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallInformationEvent) { _cached_encoder_for_CallInformationEvent = function (value: CallInformationEvent, elGetter: $.ASN1Encoder<CallInformationEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connection, $.BER),
            /* REQUIRED   */ _encode_SubjectDeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.callingDevice === undefined) ? undefined : _encode_CallingDeviceID(value.callingDevice, $.BER)),
            /* IF_ABSENT  */ ((value.accountInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AccountInfo, $.BER)(value.accountInfo, $.BER)),
            /* IF_ABSENT  */ ((value.authCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AuthCode, $.BER)(value.authCode, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.servicesPermitted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ServicesPermitted, $.BER)(value.servicesPermitted, $.BER)),
            /* IF_ABSENT  */ ((value.userData === undefined) ? undefined : _encode_UserData(value.userData, $.BER)),
            /* IF_ABSENT  */ ((value.callQualifyingData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CallQualifyingData, $.BER)(value.callQualifyingData, $.BER)),
            /* IF_ABSENT  */ ((value.connectionInfo === undefined) ? undefined : _encode_ConnectionInformation(value.connectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageDataList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CallLinkageDataList, $.BER)(value.callLinkageDataList, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.subjectOfCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_SubjectOfCall, $.BER)(value.subjectOfCall, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.deviceInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_DeviceID, $.BER)(value.deviceInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallInformationEvent(value, elGetter);
}


/* eslint-enable */
