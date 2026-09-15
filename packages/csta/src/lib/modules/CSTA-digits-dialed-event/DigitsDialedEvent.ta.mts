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

import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

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

import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";

import { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";

import { LocationInfoList, _decode_LocationInfoList, _encode_LocationInfoList } from "../CSTA-call-control/LocationInfoList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";

import { ServicesPermitted, _decode_ServicesPermitted, _encode_ServicesPermitted } from "../CSTA-call-control/ServicesPermitted.ta.mjs";

import { CallCharacteristics, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";

import { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";

/**
 * @summary DigitsDialedEvent
 * @description
 *
 * Digits Dialled event payload (ECMA-269 §17.2.6 /
 * ECMA-285 §15.2.6) for `cSTAEventReport`. Only when a
 * monitor is on the initiating device or call (FR 1). The
 * first event includes the first digit from Make Call or
 * Consultation Call, or a null string (FR 3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DigitsDialedEvent ::= SEQUENCE
 * {     dialingConnection         ConnectionID,
 *     dialingDevice             SubjectDeviceID,
 *     dialingSequence         DeviceID,
 *     localConnectionInfo         LocalConnectionState             OPTIONAL,
 *     correlatorData             [0] IMPLICIT     CorrelatorData         OPTIONAL,
 *     cause                 EventCause,
 *     servicesPermitted         [1] IMPLICIT     ServicesPermitted     OPTIONAL,
 *     networkCallingDevice         NetworkCallingDeviceID             OPTIONAL,
 *     networkCalledDevice         NetworkCalledDeviceID             OPTIONAL,
 *     associatedCallingDevice     AssociatedCallingDeviceID         OPTIONAL,
 *     associatedCalledDevice         AssociatedCalledDeviceID         OPTIONAL,
 *     dialingConnectionInfo         [2] IMPLICIT     ConnectionInformation     OPTIONAL,
 *     callCharacteristics         [3] IMPLICIT     CallCharacteristics     OPTIONAL,
 *     callLinkageData         [4] IMPLICIT     CallLinkageData     OPTIONAL,
 *     languagePreferences        [5] IMPLICIT     LanguagePreferences    OPTIONAL,
 *     locationInfo            [6] IMPLICIT    LocationInfoList    OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DigitsDialedEvent {
    constructor (
        /**
         * @summary `dialingConnection`.
         * @description
         *
         * Mandatory. Connection at which the digits were
         * dialled.
         *
         * @public
         * @readonly
         */
        readonly dialingConnection: ConnectionID,
        /**
         * @summary `dialingDevice`.
         * @description
         *
         * Mandatory. Device at which the digits were
         * dialled.
         *
         * @public
         * @readonly
         */
        readonly dialingDevice: SubjectDeviceID,
        /**
         * @summary `dialingSequence`.
         * @description
         *
         * Mandatory. Digits actually dialled (manual or
         * CSTA). Grouping per event is switching-function
         * dependent (FR 2, FR 4).
         *
         * @public
         * @readonly
         */
        readonly dialingSequence: DeviceID,
        /**
         * @summary `localConnectionInfo`.
         * @description
         *
         * Device-type monitors only (§9.5.2, §12.2.17). For
         * the dialling device: Initiated.
         *
         * @public
         * @readonly
         */
        readonly localConnectionInfo: OPTIONAL<LocalConnectionState>,
        /**
         * @summary `correlatorData`.
         * @description
         *
         * Conditional. Present when correlator data is
         * associated with the call (§12.2.10).
         *
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `cause`.
         * @description
         *
         * Mandatory. Valid values are listed in Table
         * 17-162: Conference, Consultation, Network
         * Dialling, Normal, Transfer.
         *
         * @public
         * @readonly
         */
        readonly cause: EventCause,
        /**
         * @summary `servicesPermitted`.
         * @description
         *
         * Device-type monitors only (§9.5.2, §12.2.25).
         * Mandatory if Dynamic Feature Availability is
         * supported.
         *
         * @public
         * @readonly
         */
        readonly servicesPermitted: OPTIONAL<ServicesPermitted>,
        /**
         * @summary `networkCallingDevice`.
         * @description
         *
         * Optional. Original calling device from the
         * network, external incoming only. Does not change
         * while `associatedCallingDevice` remains.
         *
         * @public
         * @readonly
         */
        readonly networkCallingDevice: OPTIONAL<NetworkCallingDeviceID>,
        /**
         * @summary `networkCalledDevice`.
         * @description
         *
         * Optional. Original called device from the
         * network, external incoming only. Does not change
         * while `associatedCallingDevice` remains.
         *
         * @public
         * @readonly
         */
        readonly networkCalledDevice: OPTIONAL<NetworkCalledDeviceID>,
        /**
         * @summary `associatedCallingDevice`.
         * @description
         *
         * Conditional. NID of the calling device for
         * external incoming calls.
         *
         * @public
         * @readonly
         */
        readonly associatedCallingDevice: OPTIONAL<AssociatedCallingDeviceID>,
        /**
         * @summary `associatedCalledDevice`.
         * @description
         *
         * Conditional. NID or associated device for
         * external outgoing or incoming calls.
         *
         * @public
         * @readonly
         */
        readonly associatedCalledDevice: OPTIONAL<AssociatedCalledDeviceID>,
        /**
         * @summary `dialingConnectionInfo`.
         * @description
         *
         * Optional connection information. Omitted values
         * are switching-function specific (§12.2.8).
         *
         * @public
         * @readonly
         */
        readonly dialingConnectionInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `callCharacteristics`.
         * @description
         *
         * Optional high-level call characteristics
         * (§12.2.4).
         *
         * @public
         * @readonly
         */
        readonly callCharacteristics: OPTIONAL<CallCharacteristics>,
        /**
         * @summary `callLinkageData`.
         * @description
         *
         * Optional global call data and thread data
         * (§12.2.5).
         *
         * @public
         * @readonly
         */
        readonly callLinkageData: OPTIONAL<CallLinkageData>,
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
         * @summary `locationInfo`.
         * @description
         *
         * Optional location information for devices in the
         * call.
         *
         * @public
         * @readonly
         */
        readonly locationInfo: OPTIONAL<LocationInfoList>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional `CSTACommonArguments` carrying the
         * security and privateData parameters from the
         * ECMA-269 event table.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a DigitsDialedEvent
     * @description
     * 
     * This takes an `object` and converts it to a `DigitsDialedEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DigitsDialedEvent`.
     * @returns {DigitsDialedEvent}
     */
    public static _from_object (_o: { [_K in keyof (DigitsDialedEvent)]: (DigitsDialedEvent)[_K] }): DigitsDialedEvent {
        return new DigitsDialedEvent(_o.dialingConnection, _o.dialingDevice, _o.dialingSequence, _o.localConnectionInfo, _o.correlatorData, _o.cause, _o.servicesPermitted, _o.networkCallingDevice, _o.networkCalledDevice, _o.associatedCallingDevice, _o.associatedCalledDevice, _o.dialingConnectionInfo, _o.callCharacteristics, _o.callLinkageData, _o.languagePreferences, _o.locationInfo, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `cause`
         * @public
         * @static
         */

    public static _enum_for_cause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of DigitsDialedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DigitsDialedEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("dialingConnection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("dialingDevice", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("dialingSequence", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("localConnectionInfo", true, $.hasTag(_TagClass.application, 14)),
        new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cause", false, $.hasTag(_TagClass.universal, 10)),
        new $.ComponentSpec("servicesPermitted", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("networkCallingDevice", true, $.hasTag(_TagClass.application, 7)),
    new $.ComponentSpec("networkCalledDevice", true, $.hasTag(_TagClass.application, 8)),
    new $.ComponentSpec("associatedCallingDevice", true, $.hasTag(_TagClass.application, 5)),
    new $.ComponentSpec("associatedCalledDevice", true, $.hasTag(_TagClass.application, 6)),
    new $.ComponentSpec("dialingConnectionInfo", true, $.hasTag(_TagClass.context, 2)),
        new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.context, 3)),
        new $.ComponentSpec("callLinkageData", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("locationInfo", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of DigitsDialedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DigitsDialedEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DigitsDialedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DigitsDialedEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DigitsDialedEvent: $.ASN1Decoder<DigitsDialedEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DigitsDialedEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DigitsDialedEvent (el: _Element): DigitsDialedEvent {
    if (!_cached_decoder_for_DigitsDialedEvent) { _cached_decoder_for_DigitsDialedEvent = function (el: _Element): DigitsDialedEvent {
    let dialingConnection!: ConnectionID;
    let dialingDevice!: SubjectDeviceID;
    let dialingSequence!: DeviceID;
    let localConnectionInfo: OPTIONAL<LocalConnectionState>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let cause!: EventCause;
    let servicesPermitted: OPTIONAL<ServicesPermitted>;
    let networkCallingDevice: OPTIONAL<NetworkCallingDeviceID>;
    let networkCalledDevice: OPTIONAL<NetworkCalledDeviceID>;
    let associatedCallingDevice: OPTIONAL<AssociatedCallingDeviceID>;
    let associatedCalledDevice: OPTIONAL<AssociatedCalledDeviceID>;
    let dialingConnectionInfo: OPTIONAL<ConnectionInformation>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let callLinkageData: OPTIONAL<CallLinkageData>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let locationInfo: OPTIONAL<LocationInfoList>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "dialingConnection": (_el: _Element): void => { dialingConnection = _decode_ConnectionID(_el); },
        "dialingDevice": (_el: _Element): void => { dialingDevice = _decode_SubjectDeviceID(_el); },
        "dialingSequence": (_el: _Element): void => { dialingSequence = _decode_DeviceID(_el); },
        "localConnectionInfo": (_el: _Element): void => { localConnectionInfo = _decode_LocalConnectionState(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "cause": (_el: _Element): void => { cause = _decode_EventCause(_el); },
        "servicesPermitted": (_el: _Element): void => { servicesPermitted = $._decode_implicit<ServicesPermitted>(() => _decode_ServicesPermitted)(_el); },
        "networkCallingDevice": (_el: _Element): void => { networkCallingDevice = _decode_NetworkCallingDeviceID(_el); },
        "networkCalledDevice": (_el: _Element): void => { networkCalledDevice = _decode_NetworkCalledDeviceID(_el); },
        "associatedCallingDevice": (_el: _Element): void => { associatedCallingDevice = _decode_AssociatedCallingDeviceID(_el); },
        "associatedCalledDevice": (_el: _Element): void => { associatedCalledDevice = _decode_AssociatedCalledDeviceID(_el); },
        "dialingConnectionInfo": (_el: _Element): void => { dialingConnectionInfo = $._decode_implicit<ConnectionInformation>(() => _decode_ConnectionInformation)(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "callLinkageData": (_el: _Element): void => { callLinkageData = $._decode_implicit<CallLinkageData>(() => _decode_CallLinkageData)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "locationInfo": (_el: _Element): void => { locationInfo = $._decode_implicit<LocationInfoList>(() => _decode_LocationInfoList)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DigitsDialedEvent,
        _extension_additions_list_spec_for_DigitsDialedEvent,
        _root_component_type_list_2_spec_for_DigitsDialedEvent,
        undefined,
    );
    return new DigitsDialedEvent(
        dialingConnection,
        dialingDevice,
        dialingSequence,
        localConnectionInfo,
        correlatorData,
        cause,
        servicesPermitted,
        networkCallingDevice,
        networkCalledDevice,
        associatedCallingDevice,
        associatedCalledDevice,
        dialingConnectionInfo,
        callCharacteristics,
        callLinkageData,
        languagePreferences,
        locationInfo,
        extensions
    );
}; }
    return _cached_decoder_for_DigitsDialedEvent(el);
}

let _cached_encoder_for_DigitsDialedEvent: $.ASN1Encoder<DigitsDialedEvent> | null = null;

/**
 * @summary Encodes a(n) DigitsDialedEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigitsDialedEvent, encoded as an ASN.1 Element.
 */
export
function _encode_DigitsDialedEvent (value: DigitsDialedEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DigitsDialedEvent) { _cached_encoder_for_DigitsDialedEvent = function (value: DigitsDialedEvent, elGetter: $.ASN1Encoder<DigitsDialedEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.dialingConnection, $.BER),
            /* REQUIRED   */ _encode_SubjectDeviceID(value.dialingDevice, $.BER),
            /* REQUIRED   */ _encode_DeviceID(value.dialingSequence, $.BER),
            /* IF_ABSENT  */ ((value.localConnectionInfo === undefined) ? undefined : _encode_LocalConnectionState(value.localConnectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* REQUIRED   */ _encode_EventCause(value.cause, $.BER),
            /* IF_ABSENT  */ ((value.servicesPermitted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ServicesPermitted, $.BER)(value.servicesPermitted, $.BER)),
            /* IF_ABSENT  */ ((value.networkCallingDevice === undefined) ? undefined : _encode_NetworkCallingDeviceID(value.networkCallingDevice, $.BER)),
            /* IF_ABSENT  */ ((value.networkCalledDevice === undefined) ? undefined : _encode_NetworkCalledDeviceID(value.networkCalledDevice, $.BER)),
            /* IF_ABSENT  */ ((value.associatedCallingDevice === undefined) ? undefined : _encode_AssociatedCallingDeviceID(value.associatedCallingDevice, $.BER)),
            /* IF_ABSENT  */ ((value.associatedCalledDevice === undefined) ? undefined : _encode_AssociatedCalledDeviceID(value.associatedCalledDevice, $.BER)),
            /* IF_ABSENT  */ ((value.dialingConnectionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ConnectionInformation, $.BER)(value.dialingConnectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CallLinkageData, $.BER)(value.callLinkageData, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.locationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_LocationInfoList, $.BER)(value.locationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DigitsDialedEvent(value, elGetter);
}


/* eslint-enable */
