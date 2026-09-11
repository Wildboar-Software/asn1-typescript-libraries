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

import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";

import { CallingDeviceID, _decode_CallingDeviceID, _encode_CallingDeviceID } from "../CSTA-device-identifiers/CallingDeviceID.ta.mjs";

import { CalledDeviceID, _decode_CalledDeviceID, _encode_CalledDeviceID } from "../CSTA-device-identifiers/CalledDeviceID.ta.mjs";

import { RedirectionDeviceID, _decode_RedirectionDeviceID, _encode_RedirectionDeviceID } from "../CSTA-device-identifiers/RedirectionDeviceID.ta.mjs";

import { LocalConnectionState, _decode_LocalConnectionState, _encode_LocalConnectionState } from "../CSTA-connection-states/LocalConnectionState.ta.mjs";

import {
    EventCause,
    _enum_for_EventCause,
    _decode_EventCause,
    _encode_EventCause
} from "../CSTA-event-causes/EventCause.ta.mjs";

import { NetworkCallingDeviceID, _decode_NetworkCallingDeviceID, _encode_NetworkCallingDeviceID } from "../CSTA-device-identifiers/NetworkCallingDeviceID.ta.mjs";

import { NetworkCalledDeviceID, _decode_NetworkCalledDeviceID, _encode_NetworkCalledDeviceID } from "../CSTA-device-identifiers/NetworkCalledDeviceID.ta.mjs";

import { AssociatedCallingDeviceID, _decode_AssociatedCallingDeviceID, _encode_AssociatedCallingDeviceID } from "../CSTA-device-identifiers/AssociatedCallingDeviceID.ta.mjs";

import { AssociatedCalledDeviceID, _decode_AssociatedCalledDeviceID, _encode_AssociatedCalledDeviceID } from "../CSTA-device-identifiers/AssociatedCalledDeviceID.ta.mjs";

import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";

import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";

import { SubjectOfCall, _decode_SubjectOfCall, _encode_SubjectOfCall } from "../CSTA-device-feature-types/SubjectOfCall.ta.mjs";

import { MessageInfo, _decode_MessageInfo, _encode_MessageInfo } from "../CSTA-device-feature-types/MessageInfo.ta.mjs";

import { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";

import { DeviceHistory, _decode_DeviceHistory, _encode_DeviceHistory } from "../CSTA-device-feature-types/DeviceHistory.ta.mjs";

import { LocationInfoList, _decode_LocationInfoList, _encode_LocationInfoList } from "../CSTA-call-control/LocationInfoList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";

import { UserData, _decode_UserData, _encode_UserData } from "../CSTA-device-feature-types/UserData.ta.mjs";

import { ServicesPermitted, _decode_ServicesPermitted, _encode_ServicesPermitted } from "../CSTA-call-control/ServicesPermitted.ta.mjs";

import { CallCharacteristics, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";

import { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";

/**
 * @summary FailedEvent
 * @description
 *
 * Failed event payload (ECMA-269 §17.2.9 / ECMA-285 §15.2.9) for
 * `cSTAEventReport`. `failedConnection` may be a complete ConnectionID or
 * Call-ID only (FR 3, §6.7.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailedEvent ::= SEQUENCE
 * {    failedConnection        ConnectionID,
 *     failingDevice            SubjectDeviceID,
 *     callingDevice            CallingDeviceID,
 *     calledDevice            CalledDeviceID,
 *     lastRedirectionDevice        RedirectionDeviceID,
 *     originatingNIDConnection    ConnectionID                OPTIONAL,
 *     localConnectionInfo        LocalConnectionState            OPTIONAL,
 *     correlatorData            [ 0] IMPLICIT CorrelatorData        OPTIONAL,
 *     userData            UserData                OPTIONAL,
 *     cause                EventCause,
 *     servicesPermitted        [ 1] IMPLICIT ServicesPermitted        OPTIONAL,
 *     networkCallingDevice        NetworkCallingDeviceID            OPTIONAL,
 *     networkCalledDevice        NetworkCalledDeviceID            OPTIONAL,
 *     associatedCallingDevice        AssociatedCallingDeviceID        OPTIONAL,
 *     associatedCalledDevice        AssociatedCalledDeviceID        OPTIONAL,
 *     mediaCallCharacteristics     [ 2] IMPLICIT MediaCallCharacteristics    OPTIONAL,
 *     callCharacteristics        [ 3] IMPLICIT CallCharacteristics    OPTIONAL,
 *     failedConnectionInfo         [ 4] IMPLICIT ConnectionInformation    OPTIONAL,
 *                                               --corrected 06/2001
 *     callLinkageData            [ 5] IMPLICIT CallLinkageData        OPTIONAL,
 *     subjectOfCall            [ 6] IMPLICIT SubjectOfCall        OPTIONAL,
 *     messageInfo            [ 7] IMPLICIT MessageInfo        OPTIONAL,
 *     languagePreferences        [ 8] IMPLICIT LanguagePreferences    OPTIONAL,
 *     deviceHistory            [ 9] IMPLICIT DeviceHistory        OPTIONAL,
 *     locationInfo            [10] IMPLICIT LocationInfoList        OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class FailedEvent {
    constructor (
        /**
         * @summary `failedConnection`.
         * @description
         *
         * Mandatory. Failed connection. May be complete or Call-ID-only
         * depending on whether the failing device's monitor receives the event
         * (FR 3).
         *
         * @public
         * @readonly
         */
        readonly failedConnection: ConnectionID,
        /**
         * @summary `failingDevice`.
         * @description
         *
         * Mandatory. Device at which the call failed.
         *
         * @public
         * @readonly
         */
        readonly failingDevice: SubjectDeviceID,
        /**
         * @summary `callingDevice`.
         * @description
         *
         * Mandatory. Calling device. May change after transfer, forwarding, or
         * conference.
         *
         * @public
         * @readonly
         */
        readonly callingDevice: CallingDeviceID,
        /**
         * @summary `calledDevice`.
         * @description
         *
         * Mandatory. Originally called device.
         *
         * @public
         * @readonly
         */
        readonly calledDevice: CalledDeviceID,
        /**
         * @summary `lastRedirectionDevice`.
         * @description
         *
         * Mandatory. Previously known redirected-from device. Used with `cause`
         * to track diverted calls when Diverted is not sent to all monitors
         * (§6.7.6).
         *
         * @public
         * @readonly
         */
        readonly lastRedirectionDevice: RedirectionDeviceID,
        /**
         * @summary `originatingNIDConnection`.
         * @description
         *
         * Optional. Originating NID connection. Omitted if more than one
         * calling device.
         *
         * @public
         * @readonly
         */
        readonly originatingNIDConnection: OPTIONAL<ConnectionID>,
        /**
         * @summary `localConnectionInfo`.
         * @description
         *
         * Device-type monitors only (§9.5.2, §12.2.17).
         *
         * @public
         * @readonly
         */
        readonly localConnectionInfo: OPTIONAL<LocalConnectionState>,
        /**
         * @summary `correlatorData`.
         * @description
         *
         * Conditional. Present when correlator data is associated with the call
         * (§12.2.10).
         *
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `userData`.
         * @description
         *
         * Conditional. Present when user data is sent and supported (§12.2.30).
         *
         * @public
         * @readonly
         */
        readonly userData: OPTIONAL<UserData>,
        /**
         * @summary `cause`.
         * @description
         *
         * Mandatory. Valid values are listed in Table 17-168.
         *
         * @public
         * @readonly
         */
        readonly cause: EventCause,
        /**
         * @summary `servicesPermitted`.
         * @description
         *
         * Device-type monitors only (§9.5.2, §12.2.25). Mandatory if Dynamic
         * Feature Availability is supported.
         *
         * @public
         * @readonly
         */
        readonly servicesPermitted: OPTIONAL<ServicesPermitted>,
        /**
         * @summary `networkCallingDevice`.
         * @description
         *
         * Optional. Original calling device from the network, external incoming
         * only. Does not change while `associatedCallingDevice` remains.
         *
         * @public
         * @readonly
         */
        readonly networkCallingDevice: OPTIONAL<NetworkCallingDeviceID>,
        /**
         * @summary `networkCalledDevice`.
         * @description
         *
         * Optional. Original called device from the network, external incoming
         * only. Does not change while `associatedCallingDevice` remains.
         *
         * @public
         * @readonly
         */
        readonly networkCalledDevice: OPTIONAL<NetworkCalledDeviceID>,
        /**
         * @summary `associatedCallingDevice`.
         * @description
         *
         * Conditional. NID of the calling device for external incoming calls.
         * Mandatory then; omitted otherwise.
         *
         * @public
         * @readonly
         */
        readonly associatedCallingDevice: OPTIONAL<AssociatedCallingDeviceID>,
        /**
         * @summary `associatedCalledDevice`.
         * @description
         *
         * Conditional. NID of the called device for external outgoing
         * (mandatory); optional for external incoming.
         *
         * @public
         * @readonly
         */
        readonly associatedCalledDevice: OPTIONAL<AssociatedCalledDeviceID>,
        /**
         * @summary `mediaCallCharacteristics`.
         * @description
         *
         * Optional media class and characteristics (§12.2.20).
         *
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
        /**
         * @summary `callCharacteristics`.
         * @description
         *
         * Optional high-level call characteristics (§12.2.4).
         *
         * @public
         * @readonly
         */
        readonly callCharacteristics: OPTIONAL<CallCharacteristics>,
        /**
         * @summary `failedConnectionInfo`.
         * @description
         *
         * Optional connection information. Omitted values are
         * switching-function specific (§12.2.8).
         *
         * @public
         * @readonly
         */
        readonly failedConnectionInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `callLinkageData`.
         * @description
         *
         * Conditional. Mandatory if call linkage is supported (§12.2.5).
         *
         * @public
         * @readonly
         */
        readonly callLinkageData: OPTIONAL<CallLinkageData>,
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
         * @summary `messageInfo`.
         * @description
         *
         * Optional message contents associated with the call.
         *
         * @public
         * @readonly
         */
        readonly messageInfo: OPTIONAL<MessageInfo>,
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
         * @summary `deviceHistory`.
         * @description
         *
         * Optional devices previously associated with the call (redirecting,
         * transferring, clearing).
         *
         * @public
         * @readonly
         */
        readonly deviceHistory: OPTIONAL<DeviceHistory>,
        /**
         * @summary `locationInfo`.
         * @description
         *
         * Optional location information for devices in the call.
         *
         * @public
         * @readonly
         */
        readonly locationInfo: OPTIONAL<LocationInfoList>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional `CSTACommonArguments` carrying the security and privateData
         * parameters from the ECMA-269 event table.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a FailedEvent
     * @description
     * 
     * This takes an `object` and converts it to a `FailedEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FailedEvent`.
     * @returns {FailedEvent}
     */
    public static _from_object (_o: { [_K in keyof (FailedEvent)]: (FailedEvent)[_K] }): FailedEvent {
        return new FailedEvent(_o.failedConnection, _o.failingDevice, _o.callingDevice, _o.calledDevice, _o.lastRedirectionDevice, _o.originatingNIDConnection, _o.localConnectionInfo, _o.correlatorData, _o.userData, _o.cause, _o.servicesPermitted, _o.networkCallingDevice, _o.networkCalledDevice, _o.associatedCallingDevice, _o.associatedCalledDevice, _o.mediaCallCharacteristics, _o.callCharacteristics, _o.failedConnectionInfo, _o.callLinkageData, _o.subjectOfCall, _o.messageInfo, _o.languagePreferences, _o.deviceHistory, _o.locationInfo, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `cause`
         * @public
         * @static
         */

    public static _enum_for_cause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of FailedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FailedEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("failedConnection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("failingDevice", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("callingDevice", false, $.hasTag(_TagClass.application, 1)),
    new $.ComponentSpec("calledDevice", false, $.hasTag(_TagClass.application, 2)),
    new $.ComponentSpec("lastRedirectionDevice", false, $.hasTag(_TagClass.application, 4)),
    new $.ComponentSpec("originatingNIDConnection", true, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("localConnectionInfo", true, $.hasTag(_TagClass.application, 14)),
        new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 0)),
        new $.ComponentSpec("userData", true, $.hasTag(_TagClass.application, 29)),
    new $.ComponentSpec("cause", false, $.hasTag(_TagClass.universal, 10)),
        new $.ComponentSpec("servicesPermitted", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("networkCallingDevice", true, $.hasTag(_TagClass.application, 7)),
    new $.ComponentSpec("networkCalledDevice", true, $.hasTag(_TagClass.application, 8)),
    new $.ComponentSpec("associatedCallingDevice", true, $.hasTag(_TagClass.application, 5)),
    new $.ComponentSpec("associatedCalledDevice", true, $.hasTag(_TagClass.application, 6)),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 2)),
        new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("failedConnectionInfo", true, $.hasTag(_TagClass.context, 4)),
        new $.ComponentSpec("callLinkageData", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("subjectOfCall", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("messageInfo", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("deviceHistory", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("locationInfo", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of FailedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FailedEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FailedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FailedEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FailedEvent: $.ASN1Decoder<FailedEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FailedEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FailedEvent (el: _Element): FailedEvent {
    if (!_cached_decoder_for_FailedEvent) { _cached_decoder_for_FailedEvent = function (el: _Element): FailedEvent {
    let failedConnection!: ConnectionID;
    let failingDevice!: SubjectDeviceID;
    let callingDevice!: CallingDeviceID;
    let calledDevice!: CalledDeviceID;
    let lastRedirectionDevice!: RedirectionDeviceID;
    let originatingNIDConnection: OPTIONAL<ConnectionID>;
    let localConnectionInfo: OPTIONAL<LocalConnectionState>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let userData: OPTIONAL<UserData>;
    let cause!: EventCause;
    let servicesPermitted: OPTIONAL<ServicesPermitted>;
    let networkCallingDevice: OPTIONAL<NetworkCallingDeviceID>;
    let networkCalledDevice: OPTIONAL<NetworkCalledDeviceID>;
    let associatedCallingDevice: OPTIONAL<AssociatedCallingDeviceID>;
    let associatedCalledDevice: OPTIONAL<AssociatedCalledDeviceID>;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let failedConnectionInfo: OPTIONAL<ConnectionInformation>;
    let callLinkageData: OPTIONAL<CallLinkageData>;
    let subjectOfCall: OPTIONAL<SubjectOfCall>;
    let messageInfo: OPTIONAL<MessageInfo>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let deviceHistory: OPTIONAL<DeviceHistory>;
    let locationInfo: OPTIONAL<LocationInfoList>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "failedConnection": (_el: _Element): void => { failedConnection = _decode_ConnectionID(_el); },
        "failingDevice": (_el: _Element): void => { failingDevice = _decode_SubjectDeviceID(_el); },
        "callingDevice": (_el: _Element): void => { callingDevice = _decode_CallingDeviceID(_el); },
        "calledDevice": (_el: _Element): void => { calledDevice = _decode_CalledDeviceID(_el); },
        "lastRedirectionDevice": (_el: _Element): void => { lastRedirectionDevice = _decode_RedirectionDeviceID(_el); },
        "originatingNIDConnection": (_el: _Element): void => { originatingNIDConnection = _decode_ConnectionID(_el); },
        "localConnectionInfo": (_el: _Element): void => { localConnectionInfo = _decode_LocalConnectionState(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "cause": (_el: _Element): void => { cause = _decode_EventCause(_el); },
        "servicesPermitted": (_el: _Element): void => { servicesPermitted = $._decode_implicit<ServicesPermitted>(() => _decode_ServicesPermitted)(_el); },
        "networkCallingDevice": (_el: _Element): void => { networkCallingDevice = _decode_NetworkCallingDeviceID(_el); },
        "networkCalledDevice": (_el: _Element): void => { networkCalledDevice = _decode_NetworkCalledDeviceID(_el); },
        "associatedCallingDevice": (_el: _Element): void => { associatedCallingDevice = _decode_AssociatedCallingDeviceID(_el); },
        "associatedCalledDevice": (_el: _Element): void => { associatedCalledDevice = _decode_AssociatedCalledDeviceID(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "failedConnectionInfo": (_el: _Element): void => { failedConnectionInfo = $._decode_implicit<ConnectionInformation>(() => _decode_ConnectionInformation)(_el); },
        "callLinkageData": (_el: _Element): void => { callLinkageData = $._decode_implicit<CallLinkageData>(() => _decode_CallLinkageData)(_el); },
        "subjectOfCall": (_el: _Element): void => { subjectOfCall = $._decode_implicit<SubjectOfCall>(() => _decode_SubjectOfCall)(_el); },
        "messageInfo": (_el: _Element): void => { messageInfo = $._decode_implicit<MessageInfo>(() => _decode_MessageInfo)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "deviceHistory": (_el: _Element): void => { deviceHistory = $._decode_implicit<DeviceHistory>(() => _decode_DeviceHistory)(_el); },
        "locationInfo": (_el: _Element): void => { locationInfo = $._decode_implicit<LocationInfoList>(() => _decode_LocationInfoList)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FailedEvent,
        _extension_additions_list_spec_for_FailedEvent,
        _root_component_type_list_2_spec_for_FailedEvent,
        undefined,
    );
    return new FailedEvent(
        failedConnection,
        failingDevice,
        callingDevice,
        calledDevice,
        lastRedirectionDevice,
        originatingNIDConnection,
        localConnectionInfo,
        correlatorData,
        userData,
        cause,
        servicesPermitted,
        networkCallingDevice,
        networkCalledDevice,
        associatedCallingDevice,
        associatedCalledDevice,
        mediaCallCharacteristics,
        callCharacteristics,
        failedConnectionInfo,
        callLinkageData,
        subjectOfCall,
        messageInfo,
        languagePreferences,
        deviceHistory,
        locationInfo,
        extensions
    );
}; }
    return _cached_decoder_for_FailedEvent(el);
}

let _cached_encoder_for_FailedEvent: $.ASN1Encoder<FailedEvent> | null = null;

/**
 * @summary Encodes a(n) FailedEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FailedEvent, encoded as an ASN.1 Element.
 */
export
function _encode_FailedEvent (value: FailedEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FailedEvent) { _cached_encoder_for_FailedEvent = function (value: FailedEvent, elGetter: $.ASN1Encoder<FailedEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.failedConnection, $.BER),
            /* REQUIRED   */ _encode_SubjectDeviceID(value.failingDevice, $.BER),
            /* REQUIRED   */ _encode_CallingDeviceID(value.callingDevice, $.BER),
            /* REQUIRED   */ _encode_CalledDeviceID(value.calledDevice, $.BER),
            /* REQUIRED   */ _encode_RedirectionDeviceID(value.lastRedirectionDevice, $.BER),
            /* IF_ABSENT  */ ((value.originatingNIDConnection === undefined) ? undefined : _encode_ConnectionID(value.originatingNIDConnection, $.BER)),
            /* IF_ABSENT  */ ((value.localConnectionInfo === undefined) ? undefined : _encode_LocalConnectionState(value.localConnectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.userData === undefined) ? undefined : _encode_UserData(value.userData, $.BER)),
            /* REQUIRED   */ _encode_EventCause(value.cause, $.BER),
            /* IF_ABSENT  */ ((value.servicesPermitted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ServicesPermitted, $.BER)(value.servicesPermitted, $.BER)),
            /* IF_ABSENT  */ ((value.networkCallingDevice === undefined) ? undefined : _encode_NetworkCallingDeviceID(value.networkCallingDevice, $.BER)),
            /* IF_ABSENT  */ ((value.networkCalledDevice === undefined) ? undefined : _encode_NetworkCalledDeviceID(value.networkCalledDevice, $.BER)),
            /* IF_ABSENT  */ ((value.associatedCallingDevice === undefined) ? undefined : _encode_AssociatedCallingDeviceID(value.associatedCallingDevice, $.BER)),
            /* IF_ABSENT  */ ((value.associatedCalledDevice === undefined) ? undefined : _encode_AssociatedCalledDeviceID(value.associatedCalledDevice, $.BER)),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.failedConnectionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ConnectionInformation, $.BER)(value.failedConnectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CallLinkageData, $.BER)(value.callLinkageData, $.BER)),
            /* IF_ABSENT  */ ((value.subjectOfCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_SubjectOfCall, $.BER)(value.subjectOfCall, $.BER)),
            /* IF_ABSENT  */ ((value.messageInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_MessageInfo, $.BER)(value.messageInfo, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.deviceHistory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_DeviceHistory, $.BER)(value.deviceHistory, $.BER)),
            /* IF_ABSENT  */ ((value.locationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_LocationInfoList, $.BER)(value.locationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FailedEvent(value, elGetter);
}


/* eslint-enable */
