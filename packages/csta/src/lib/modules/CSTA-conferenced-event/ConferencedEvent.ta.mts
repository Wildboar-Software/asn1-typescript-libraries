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

import { ConnectionList, _decode_ConnectionList, _encode_ConnectionList } from "../CSTA-connection-states/ConnectionList.ta.mjs";

import { LocalConnectionState, _decode_LocalConnectionState, _encode_LocalConnectionState } from "../CSTA-connection-states/LocalConnectionState.ta.mjs";

import {
    EventCause,
    _enum_for_EventCause,
    _decode_EventCause,
    _encode_EventCause
} from "../CSTA-event-causes/EventCause.ta.mjs";

import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";

import { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";

import { DeviceHistory, _decode_DeviceHistory, _encode_DeviceHistory } from "../CSTA-device-feature-types/DeviceHistory.ta.mjs";

import { LocationInfoList, _decode_LocationInfoList, _encode_LocationInfoList } from "../CSTA-call-control/LocationInfoList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";

import { UserData, _decode_UserData, _encode_UserData } from "../CSTA-device-feature-types/UserData.ta.mjs";

import { ServicesPermitted, _decode_ServicesPermitted, _encode_ServicesPermitted } from "../CSTA-call-control/ServicesPermitted.ta.mjs";

import { CallCharacteristics, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";

import { CallLinkageDataList, _decode_CallLinkageDataList, _encode_CallLinkageDataList } from "../CSTA-call-control/CallLinkageDataList.ta.mjs";

/**
 * @summary ConferencedEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConferencedEvent ::= SEQUENCE
 * {     primaryOldCall             ConnectionID,
 *     secondaryOldCall         ConnectionID                 OPTIONAL,
 *     conferencingDevice         SubjectDeviceID,
 *     addedParty             SubjectDeviceID,
 *     conferenceConnections         ConnectionList,
 *     localConnectionInfo         LocalConnectionState             OPTIONAL,
 *     correlatorData             [1] IMPLICIT CorrelatorData         OPTIONAL,
 *     userData             UserData                 OPTIONAL,
 *     cause                 EventCause,
 *     servicesPermitted         [2] IMPLICIT ServicesPermitted         OPTIONAL,
 *     mediaCallCharacteristics     [3] IMPLICIT MediaCallCharacteristics     OPTIONAL,
 *     callCharacteristics         [4] IMPLICIT CallCharacteristics     OPTIONAL,
 *     callLinkageDataList         [6] IMPLICIT CallLinkageDataList     OPTIONAL,
 *     languagePreferences        [7] IMPLICIT LanguagePreferences    OPTIONAL,
 *     deviceHistory            [8] IMPLICIT DeviceHistory        OPTIONAL,
 *     locationInfo            [9] IMPLICIT LocationInfoList        OPTIONAL,
 *     extensions             [5] IMPLICIT CSTACommonArguments     OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ConferencedEvent {
    constructor (
        /**
         * @summary `primaryOldCall`.
         * @public
         * @readonly
         */
        readonly primaryOldCall: ConnectionID,
        /**
         * @summary `secondaryOldCall`.
         * @public
         * @readonly
         */
        readonly secondaryOldCall: OPTIONAL<ConnectionID>,
        /**
         * @summary `conferencingDevice`.
         * @public
         * @readonly
         */
        readonly conferencingDevice: SubjectDeviceID,
        /**
         * @summary `addedParty`.
         * @public
         * @readonly
         */
        readonly addedParty: SubjectDeviceID,
        /**
         * @summary `conferenceConnections`.
         * @public
         * @readonly
         */
        readonly conferenceConnections: ConnectionList,
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
         * @summary `callLinkageDataList`.
         * @public
         * @readonly
         */
        readonly callLinkageDataList: OPTIONAL<CallLinkageDataList>,
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
     * @summary Restructures an object into a ConferencedEvent
     * @description
     * 
     * This takes an `object` and converts it to a `ConferencedEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConferencedEvent`.
     * @returns {ConferencedEvent}
     */
    public static _from_object (_o: { [_K in keyof (ConferencedEvent)]: (ConferencedEvent)[_K] }): ConferencedEvent {
        return new ConferencedEvent(_o.primaryOldCall, _o.secondaryOldCall, _o.conferencingDevice, _o.addedParty, _o.conferenceConnections, _o.localConnectionInfo, _o.correlatorData, _o.userData, _o.cause, _o.servicesPermitted, _o.mediaCallCharacteristics, _o.callCharacteristics, _o.callLinkageDataList, _o.languagePreferences, _o.deviceHistory, _o.locationInfo, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `cause`
         * @public
         * @static
         */

    public static _enum_for_cause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of ConferencedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConferencedEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("primaryOldCall", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("secondaryOldCall", true, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("conferencingDevice", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("addedParty", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("conferenceConnections", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("localConnectionInfo", true, $.hasTag(_TagClass.application, 14)),
        new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 1)),
        new $.ComponentSpec("userData", true, $.hasTag(_TagClass.application, 29)),
    new $.ComponentSpec("cause", false, $.hasTag(_TagClass.universal, 10)),
        new $.ComponentSpec("servicesPermitted", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 3)),
        new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.context, 4)),
        new $.ComponentSpec("callLinkageDataList", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("deviceHistory", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("locationInfo", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ConferencedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConferencedEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConferencedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConferencedEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConferencedEvent: $.ASN1Decoder<ConferencedEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConferencedEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConferencedEvent (el: _Element): ConferencedEvent {
    if (!_cached_decoder_for_ConferencedEvent) { _cached_decoder_for_ConferencedEvent = function (el: _Element): ConferencedEvent {
    let primaryOldCall!: ConnectionID;
    let secondaryOldCall: OPTIONAL<ConnectionID>;
    let conferencingDevice!: SubjectDeviceID;
    let addedParty!: SubjectDeviceID;
    let conferenceConnections!: ConnectionList;
    let localConnectionInfo: OPTIONAL<LocalConnectionState>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let userData: OPTIONAL<UserData>;
    let cause!: EventCause;
    let servicesPermitted: OPTIONAL<ServicesPermitted>;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let callLinkageDataList: OPTIONAL<CallLinkageDataList>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let deviceHistory: OPTIONAL<DeviceHistory>;
    let locationInfo: OPTIONAL<LocationInfoList>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "primaryOldCall": (_el: _Element): void => { primaryOldCall = _decode_ConnectionID(_el); },
        "secondaryOldCall": (_el: _Element): void => { secondaryOldCall = _decode_ConnectionID(_el); },
        "conferencingDevice": (_el: _Element): void => { conferencingDevice = _decode_SubjectDeviceID(_el); },
        "addedParty": (_el: _Element): void => { addedParty = _decode_SubjectDeviceID(_el); },
        "conferenceConnections": (_el: _Element): void => { conferenceConnections = _decode_ConnectionList(_el); },
        "localConnectionInfo": (_el: _Element): void => { localConnectionInfo = _decode_LocalConnectionState(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "cause": (_el: _Element): void => { cause = _decode_EventCause(_el); },
        "servicesPermitted": (_el: _Element): void => { servicesPermitted = $._decode_implicit<ServicesPermitted>(() => _decode_ServicesPermitted)(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "callLinkageDataList": (_el: _Element): void => { callLinkageDataList = $._decode_implicit<CallLinkageDataList>(() => _decode_CallLinkageDataList)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "deviceHistory": (_el: _Element): void => { deviceHistory = $._decode_implicit<DeviceHistory>(() => _decode_DeviceHistory)(_el); },
        "locationInfo": (_el: _Element): void => { locationInfo = $._decode_implicit<LocationInfoList>(() => _decode_LocationInfoList)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<CSTACommonArguments>(() => _decode_CSTACommonArguments)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConferencedEvent,
        _extension_additions_list_spec_for_ConferencedEvent,
        _root_component_type_list_2_spec_for_ConferencedEvent,
        undefined,
    );
    return new ConferencedEvent(
        primaryOldCall,
        secondaryOldCall,
        conferencingDevice,
        addedParty,
        conferenceConnections,
        localConnectionInfo,
        correlatorData,
        userData,
        cause,
        servicesPermitted,
        mediaCallCharacteristics,
        callCharacteristics,
        callLinkageDataList,
        languagePreferences,
        deviceHistory,
        locationInfo,
        extensions
    );
}; }
    return _cached_decoder_for_ConferencedEvent(el);
}

let _cached_encoder_for_ConferencedEvent: $.ASN1Encoder<ConferencedEvent> | null = null;

/**
 * @summary Encodes a(n) ConferencedEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConferencedEvent, encoded as an ASN.1 Element.
 */
export
function _encode_ConferencedEvent (value: ConferencedEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConferencedEvent) { _cached_encoder_for_ConferencedEvent = function (value: ConferencedEvent, elGetter: $.ASN1Encoder<ConferencedEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.primaryOldCall, $.BER),
            /* IF_ABSENT  */ ((value.secondaryOldCall === undefined) ? undefined : _encode_ConnectionID(value.secondaryOldCall, $.BER)),
            /* REQUIRED   */ _encode_SubjectDeviceID(value.conferencingDevice, $.BER),
            /* REQUIRED   */ _encode_SubjectDeviceID(value.addedParty, $.BER),
            /* REQUIRED   */ _encode_ConnectionList(value.conferenceConnections, $.BER),
            /* IF_ABSENT  */ ((value.localConnectionInfo === undefined) ? undefined : _encode_LocalConnectionState(value.localConnectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.userData === undefined) ? undefined : _encode_UserData(value.userData, $.BER)),
            /* REQUIRED   */ _encode_EventCause(value.cause, $.BER),
            /* IF_ABSENT  */ ((value.servicesPermitted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ServicesPermitted, $.BER)(value.servicesPermitted, $.BER)),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageDataList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_CallLinkageDataList, $.BER)(value.callLinkageDataList, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.deviceHistory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_DeviceHistory, $.BER)(value.deviceHistory, $.BER)),
            /* IF_ABSENT  */ ((value.locationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_LocationInfoList, $.BER)(value.locationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CSTACommonArguments, $.BER)(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConferencedEvent(value, elGetter);
}


/* eslint-enable */
