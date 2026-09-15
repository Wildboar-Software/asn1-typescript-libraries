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

import {
    EventCause,
    _enum_for_EventCause,
    _decode_EventCause,
    _encode_EventCause
} from "../CSTA-event-causes/EventCause.ta.mjs";

import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";

import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";

import { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";

import { LocationInfoList, _decode_LocationInfoList, _encode_LocationInfoList } from "../CSTA-call-control/LocationInfoList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";

import { ServicesPermitted, _decode_ServicesPermitted, _encode_ServicesPermitted } from "../CSTA-call-control/ServicesPermitted.ta.mjs";

import { CallCharacteristics, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";

import { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";

/**
 * @summary HeldEvent
 * @description
 *
 * Held event payload (ECMA-269 §17.2.10 / ECMA-285 §15.2.10) for
 * `cSTAEventReport`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HeldEvent ::= SEQUENCE
 * {     heldConnection             ConnectionID,
 *     holdingDevice             SubjectDeviceID,
 *     localConnectionInfo         LocalConnectionState             OPTIONAL,
 *     correlatorData             [0] IMPLICIT CorrelatorData         OPTIONAL,
 *     cause                 EventCause,
 *     servicesPermitted         [1] IMPLICIT ServicesPermitted         OPTIONAL,
 *     mediaCallCharacteristics     [2] IMPLICIT MediaCallCharacteristics     OPTIONAL,
 *     callCharacteristics         [3] IMPLICIT CallCharacteristics     OPTIONAL,
 *     heldConnectionInfo         [4] IMPLICIT ConnectionInformation     OPTIONAL,
 *     callLinkageData         [5] IMPLICIT CallLinkageData         OPTIONAL,
 *     languagePreferences        [6] IMPLICIT LanguagePreferences    OPTIONAL,
 *     locationInfo            [7] IMPLICIT LocationInfoList        OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class HeldEvent {
    constructor (
        /**
         * @summary `heldConnection`.
         * @description
         *
         * Mandatory. Connection placed on hold.
         *
         * @public
         * @readonly
         */
        readonly heldConnection: ConnectionID,
        /**
         * @summary `holdingDevice`.
         * @description
         *
         * Mandatory. Device that held the call.
         *
         * @public
         * @readonly
         */
        readonly holdingDevice: SubjectDeviceID,
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
         * Optional current correlator data (§12.2.10). This event may omit it
         * (FR 6).
         *
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `cause`.
         * @description
         *
         * Mandatory. Table 17-170 lists Alternate, Conference, Consultation,
         * Intrude, Maintenance, Network Signal, Normal, Recall, Suspend,
         * Transfer.
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
         * @summary `heldConnectionInfo`.
         * @description
         *
         * Optional connection information. Omitted values are
         * switching-function specific (§12.2.8).
         *
         * @public
         * @readonly
         */
        readonly heldConnectionInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `callLinkageData`.
         * @description
         *
         * Optional global call data and thread data (§12.2.5).
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
     * @summary Restructures an object into a HeldEvent
     * @description
     * 
     * This takes an `object` and converts it to a `HeldEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HeldEvent`.
     * @returns {HeldEvent}
     */
    public static _from_object (_o: { [_K in keyof (HeldEvent)]: (HeldEvent)[_K] }): HeldEvent {
        return new HeldEvent(_o.heldConnection, _o.holdingDevice, _o.localConnectionInfo, _o.correlatorData, _o.cause, _o.servicesPermitted, _o.mediaCallCharacteristics, _o.callCharacteristics, _o.heldConnectionInfo, _o.callLinkageData, _o.languagePreferences, _o.locationInfo, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `cause`
         * @public
         * @static
         */

    public static _enum_for_cause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of HeldEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HeldEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("heldConnection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("holdingDevice", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("localConnectionInfo", true, $.hasTag(_TagClass.application, 14)),
        new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cause", false, $.hasTag(_TagClass.universal, 10)),
        new $.ComponentSpec("servicesPermitted", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 2)),
        new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("heldConnectionInfo", true, $.hasTag(_TagClass.context, 4)),
        new $.ComponentSpec("callLinkageData", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("locationInfo", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of HeldEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HeldEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HeldEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HeldEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HeldEvent: $.ASN1Decoder<HeldEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HeldEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HeldEvent (el: _Element): HeldEvent {
    if (!_cached_decoder_for_HeldEvent) { _cached_decoder_for_HeldEvent = function (el: _Element): HeldEvent {
    let heldConnection!: ConnectionID;
    let holdingDevice!: SubjectDeviceID;
    let localConnectionInfo: OPTIONAL<LocalConnectionState>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let cause!: EventCause;
    let servicesPermitted: OPTIONAL<ServicesPermitted>;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let heldConnectionInfo: OPTIONAL<ConnectionInformation>;
    let callLinkageData: OPTIONAL<CallLinkageData>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let locationInfo: OPTIONAL<LocationInfoList>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "heldConnection": (_el: _Element): void => { heldConnection = _decode_ConnectionID(_el); },
        "holdingDevice": (_el: _Element): void => { holdingDevice = _decode_SubjectDeviceID(_el); },
        "localConnectionInfo": (_el: _Element): void => { localConnectionInfo = _decode_LocalConnectionState(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "cause": (_el: _Element): void => { cause = _decode_EventCause(_el); },
        "servicesPermitted": (_el: _Element): void => { servicesPermitted = $._decode_implicit<ServicesPermitted>(() => _decode_ServicesPermitted)(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "heldConnectionInfo": (_el: _Element): void => { heldConnectionInfo = $._decode_implicit<ConnectionInformation>(() => _decode_ConnectionInformation)(_el); },
        "callLinkageData": (_el: _Element): void => { callLinkageData = $._decode_implicit<CallLinkageData>(() => _decode_CallLinkageData)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "locationInfo": (_el: _Element): void => { locationInfo = $._decode_implicit<LocationInfoList>(() => _decode_LocationInfoList)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_HeldEvent,
        _extension_additions_list_spec_for_HeldEvent,
        _root_component_type_list_2_spec_for_HeldEvent,
        undefined,
    );
    return new HeldEvent(
        heldConnection,
        holdingDevice,
        localConnectionInfo,
        correlatorData,
        cause,
        servicesPermitted,
        mediaCallCharacteristics,
        callCharacteristics,
        heldConnectionInfo,
        callLinkageData,
        languagePreferences,
        locationInfo,
        extensions
    );
}; }
    return _cached_decoder_for_HeldEvent(el);
}

let _cached_encoder_for_HeldEvent: $.ASN1Encoder<HeldEvent> | null = null;

/**
 * @summary Encodes a(n) HeldEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HeldEvent, encoded as an ASN.1 Element.
 */
export
function _encode_HeldEvent (value: HeldEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HeldEvent) { _cached_encoder_for_HeldEvent = function (value: HeldEvent, elGetter: $.ASN1Encoder<HeldEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.heldConnection, $.BER),
            /* REQUIRED   */ _encode_SubjectDeviceID(value.holdingDevice, $.BER),
            /* IF_ABSENT  */ ((value.localConnectionInfo === undefined) ? undefined : _encode_LocalConnectionState(value.localConnectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* REQUIRED   */ _encode_EventCause(value.cause, $.BER),
            /* IF_ABSENT  */ ((value.servicesPermitted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ServicesPermitted, $.BER)(value.servicesPermitted, $.BER)),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.heldConnectionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ConnectionInformation, $.BER)(value.heldConnectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CallLinkageData, $.BER)(value.callLinkageData, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.locationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_LocationInfoList, $.BER)(value.locationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_HeldEvent(value, elGetter);
}


/* eslint-enable */
