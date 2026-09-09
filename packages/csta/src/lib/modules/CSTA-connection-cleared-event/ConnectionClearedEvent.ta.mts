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

import { LocalConnectionState, _decode_LocalConnectionState, _encode_LocalConnectionState } from "../CSTA-connection-states/LocalConnectionState.ta.mjs";

import { ChargingInfo, _decode_ChargingInfo, _encode_ChargingInfo } from "../CSTA-charge-info/ChargingInfo.ta.mjs";

import {
    EventCause,
    _enum_for_EventCause,
    _decode_EventCause,
    _encode_EventCause
} from "../CSTA-event-causes/EventCause.ta.mjs";

import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";

import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";

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
 * @summary ConnectionClearedEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionClearedEvent ::= SEQUENCE
 * {    droppedConnection         ConnectionID,
 *     releasingDevice         SubjectDeviceID,
 *     localConnectionInfo         LocalConnectionState             OPTIONAL,
 *     correlatorData             [0] IMPLICIT CorrelatorData         OPTIONAL,
 *     userData             UserData                 OPTIONAL,
 *     chargingInfo             [1] IMPLICIT ChargingInfo         OPTIONAL,
 *     cause                 EventCause,
 *     servicesPermitted         [2] IMPLICIT ServicesPermitted         OPTIONAL,
 *     mediaCallCharacteristics     [3] IMPLICIT MediaCallCharacteristics     OPTIONAL,
 *     callCharacteristics         [4] IMPLICIT CallCharacteristics     OPTIONAL,
 *     droppedConnectionInfo         [5] IMPLICIT ConnectionInformation     OPTIONAL,
 *     callLinkageData         [6] IMPLICIT CallLinkageData         OPTIONAL,
 *     languagePreferences        [7] IMPLICIT LanguagePreferences    OPTIONAL,
 *     deviceHistory            [8] IMPLICIT DeviceHistory        OPTIONAL,
 *     locationInfo            [9] IMPLICIT LocationInfoList        OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ConnectionClearedEvent {
    constructor (
        /**
         * @summary `droppedConnection`.
         * @public
         * @readonly
         */
        readonly droppedConnection: ConnectionID,
        /**
         * @summary `releasingDevice`.
         * @public
         * @readonly
         */
        readonly releasingDevice: SubjectDeviceID,
        /**
         * @summary `localConnectionInfo`.
         * @public
         * @readonly
         */
        readonly localConnectionInfo: OPTIONAL<LocalConnectionState>,
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
         * @summary `chargingInfo`.
         * @public
         * @readonly
         */
        readonly chargingInfo: OPTIONAL<ChargingInfo>,
        /**
         * @summary `cause`.
         * @public
         * @readonly
         */
        readonly cause: EventCause,
        /**
         * @summary `servicesPermitted`.
         * @public
         * @readonly
         */
        readonly servicesPermitted: OPTIONAL<ServicesPermitted>,
        /**
         * @summary `mediaCallCharacteristics`.
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
        /**
         * @summary `callCharacteristics`.
         * @public
         * @readonly
         */
        readonly callCharacteristics: OPTIONAL<CallCharacteristics>,
        /**
         * @summary `droppedConnectionInfo`.
         * @public
         * @readonly
         */
        readonly droppedConnectionInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `callLinkageData`.
         * @public
         * @readonly
         */
        readonly callLinkageData: OPTIONAL<CallLinkageData>,
        /**
         * @summary `languagePreferences`.
         * @public
         * @readonly
         */
        readonly languagePreferences: OPTIONAL<LanguagePreferences>,
        /**
         * @summary `deviceHistory`.
         * @public
         * @readonly
         */
        readonly deviceHistory: OPTIONAL<DeviceHistory>,
        /**
         * @summary `locationInfo`.
         * @public
         * @readonly
         */
        readonly locationInfo: OPTIONAL<LocationInfoList>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ConnectionClearedEvent
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectionClearedEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectionClearedEvent`.
     * @returns {ConnectionClearedEvent}
     */
    public static _from_object (_o: { [_K in keyof (ConnectionClearedEvent)]: (ConnectionClearedEvent)[_K] }): ConnectionClearedEvent {
        return new ConnectionClearedEvent(_o.droppedConnection, _o.releasingDevice, _o.localConnectionInfo, _o.correlatorData, _o.userData, _o.chargingInfo, _o.cause, _o.servicesPermitted, _o.mediaCallCharacteristics, _o.callCharacteristics, _o.droppedConnectionInfo, _o.callLinkageData, _o.languagePreferences, _o.deviceHistory, _o.locationInfo, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `cause`
         * @public
         * @static
         */

    public static _enum_for_cause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of ConnectionClearedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectionClearedEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("droppedConnection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("releasingDevice", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("localConnectionInfo", true, $.hasTag(_TagClass.application, 14)),
        new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 0)),
        new $.ComponentSpec("userData", true, $.hasTag(_TagClass.application, 29)),
    new $.ComponentSpec("chargingInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cause", false, $.hasTag(_TagClass.universal, 10)),
        new $.ComponentSpec("servicesPermitted", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 3)),
        new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("droppedConnectionInfo", true, $.hasTag(_TagClass.context, 5)),
        new $.ComponentSpec("callLinkageData", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("deviceHistory", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("locationInfo", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of ConnectionClearedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectionClearedEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectionClearedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectionClearedEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectionClearedEvent: $.ASN1Decoder<ConnectionClearedEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionClearedEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionClearedEvent (el: _Element): ConnectionClearedEvent {
    if (!_cached_decoder_for_ConnectionClearedEvent) { _cached_decoder_for_ConnectionClearedEvent = function (el: _Element): ConnectionClearedEvent {
    let droppedConnection!: ConnectionID;
    let releasingDevice!: SubjectDeviceID;
    let localConnectionInfo: OPTIONAL<LocalConnectionState>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let userData: OPTIONAL<UserData>;
    let chargingInfo: OPTIONAL<ChargingInfo>;
    let cause!: EventCause;
    let servicesPermitted: OPTIONAL<ServicesPermitted>;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let droppedConnectionInfo: OPTIONAL<ConnectionInformation>;
    let callLinkageData: OPTIONAL<CallLinkageData>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let deviceHistory: OPTIONAL<DeviceHistory>;
    let locationInfo: OPTIONAL<LocationInfoList>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "droppedConnection": (_el: _Element): void => { droppedConnection = _decode_ConnectionID(_el); },
        "releasingDevice": (_el: _Element): void => { releasingDevice = _decode_SubjectDeviceID(_el); },
        "localConnectionInfo": (_el: _Element): void => { localConnectionInfo = _decode_LocalConnectionState(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "chargingInfo": (_el: _Element): void => { chargingInfo = $._decode_implicit<ChargingInfo>(() => _decode_ChargingInfo)(_el); },
        "cause": (_el: _Element): void => { cause = _decode_EventCause(_el); },
        "servicesPermitted": (_el: _Element): void => { servicesPermitted = $._decode_implicit<ServicesPermitted>(() => _decode_ServicesPermitted)(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "droppedConnectionInfo": (_el: _Element): void => { droppedConnectionInfo = $._decode_implicit<ConnectionInformation>(() => _decode_ConnectionInformation)(_el); },
        "callLinkageData": (_el: _Element): void => { callLinkageData = $._decode_implicit<CallLinkageData>(() => _decode_CallLinkageData)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "deviceHistory": (_el: _Element): void => { deviceHistory = $._decode_implicit<DeviceHistory>(() => _decode_DeviceHistory)(_el); },
        "locationInfo": (_el: _Element): void => { locationInfo = $._decode_implicit<LocationInfoList>(() => _decode_LocationInfoList)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConnectionClearedEvent,
        _extension_additions_list_spec_for_ConnectionClearedEvent,
        _root_component_type_list_2_spec_for_ConnectionClearedEvent,
        undefined,
    );
    return new ConnectionClearedEvent(
        droppedConnection,
        releasingDevice,
        localConnectionInfo,
        correlatorData,
        userData,
        chargingInfo,
        cause,
        servicesPermitted,
        mediaCallCharacteristics,
        callCharacteristics,
        droppedConnectionInfo,
        callLinkageData,
        languagePreferences,
        deviceHistory,
        locationInfo,
        extensions
    );
}; }
    return _cached_decoder_for_ConnectionClearedEvent(el);
}

let _cached_encoder_for_ConnectionClearedEvent: $.ASN1Encoder<ConnectionClearedEvent> | null = null;

/**
 * @summary Encodes a(n) ConnectionClearedEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionClearedEvent, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionClearedEvent (value: ConnectionClearedEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionClearedEvent) { _cached_encoder_for_ConnectionClearedEvent = function (value: ConnectionClearedEvent, elGetter: $.ASN1Encoder<ConnectionClearedEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.droppedConnection, $.BER),
            /* REQUIRED   */ _encode_SubjectDeviceID(value.releasingDevice, $.BER),
            /* IF_ABSENT  */ ((value.localConnectionInfo === undefined) ? undefined : _encode_LocalConnectionState(value.localConnectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.userData === undefined) ? undefined : _encode_UserData(value.userData, $.BER)),
            /* IF_ABSENT  */ ((value.chargingInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ChargingInfo, $.BER)(value.chargingInfo, $.BER)),
            /* REQUIRED   */ _encode_EventCause(value.cause, $.BER),
            /* IF_ABSENT  */ ((value.servicesPermitted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ServicesPermitted, $.BER)(value.servicesPermitted, $.BER)),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.droppedConnectionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ConnectionInformation, $.BER)(value.droppedConnectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_CallLinkageData, $.BER)(value.callLinkageData, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.deviceHistory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_DeviceHistory, $.BER)(value.deviceHistory, $.BER)),
            /* IF_ABSENT  */ ((value.locationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_LocationInfoList, $.BER)(value.locationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConnectionClearedEvent(value, elGetter);
}


/* eslint-enable */
