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

import {
    EventCause,
    _enum_for_EventCause,
    _decode_EventCause,
    _encode_EventCause
} from "../CSTA-event-causes/EventCause.ta.mjs";

import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";

import { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";

import { LocationInfoList, _decode_LocationInfoList, _encode_LocationInfoList } from "../CSTA-call-control/LocationInfoList.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";

import { UserData, _decode_UserData, _encode_UserData } from "../CSTA-device-feature-types/UserData.ta.mjs";

import { CallCharacteristics, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";

import { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";

/**
 * @summary CallClearedEvent
 * @description
 *
 * Call Cleared event payload (ECMA-269 §17.2.2 / ECMA-285
 * §15.2.2) for `cSTAEventReport`. Sent only to call-type
 * monitors (FR 2). Connection Cleared events for every
 * device must precede it (FR 1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallClearedEvent ::= SEQUENCE
 * {     clearedCall             ConnectionID,
 *     correlatorData             [1] IMPLICIT CorrelatorData         OPTIONAL,
 *     userData             UserData                 OPTIONAL,
 *     cause                 EventCause,
 *     mediaCallCharacteristics     [2] IMPLICIT MediaCallCharacteristics     OPTIONAL,
 *     callCharacteristics         [3] IMPLICIT CallCharacteristics     OPTIONAL,
 *     callLinkageData         [4] IMPLICIT CallLinkageData         OPTIONAL,
 *     languagePreferences        [5] IMPLICIT LanguagePreferences    OPTIONAL,
 *     locationInfo            [6] IMPLICIT LocationInfoList        OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CallClearedEvent {
    constructor (
        /**
         * @summary `clearedCall`.
         * @description
         *
         * Mandatory. ConnectionID of the cleared call.
         * DeviceID shall be omitted (Call-ID only).
         *
         * @public
         * @readonly
         */
        readonly clearedCall: ConnectionID,
        /**
         * @summary `correlatorData`.
         * @description
         *
         * Optional current correlator data (§12.2.10). This
         * event may omit it (FR 6).
         *
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `userData`.
         * @description
         *
         * Conditional. Present when user data is sent and
         * supported (§12.2.30).
         *
         * @public
         * @readonly
         */
        readonly userData: OPTIONAL<UserData>,
        /**
         * @summary `cause`.
         * @description
         *
         * Mandatory. Same cause as the last Connection
         * Cleared for the call. Valid values are listed in
         * Table 17-154.
         *
         * @public
         * @readonly
         */
        readonly cause: EventCause,
        /**
         * @summary `mediaCallCharacteristics`.
         * @description
         *
         * Optional media class and characteristics
         * (§12.2.20).
         *
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
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
     * @summary Restructures an object into a CallClearedEvent
     * @description
     * 
     * This takes an `object` and converts it to a `CallClearedEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallClearedEvent`.
     * @returns {CallClearedEvent}
     */
    public static _from_object (_o: { [_K in keyof (CallClearedEvent)]: (CallClearedEvent)[_K] }): CallClearedEvent {
        return new CallClearedEvent(_o.clearedCall, _o.correlatorData, _o.userData, _o.cause, _o.mediaCallCharacteristics, _o.callCharacteristics, _o.callLinkageData, _o.languagePreferences, _o.locationInfo, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `cause`
         * @public
         * @static
         */

    public static _enum_for_cause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of CallClearedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallClearedEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("clearedCall", false, $.hasTag(_TagClass.application, 11)),
        new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 1)),
        new $.ComponentSpec("userData", true, $.hasTag(_TagClass.application, 29)),
    new $.ComponentSpec("cause", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 2)),
        new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.context, 3)),
        new $.ComponentSpec("callLinkageData", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("locationInfo", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of CallClearedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallClearedEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallClearedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallClearedEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallClearedEvent: $.ASN1Decoder<CallClearedEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallClearedEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallClearedEvent (el: _Element): CallClearedEvent {
    if (!_cached_decoder_for_CallClearedEvent) { _cached_decoder_for_CallClearedEvent = function (el: _Element): CallClearedEvent {
    let clearedCall!: ConnectionID;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let userData: OPTIONAL<UserData>;
    let cause!: EventCause;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let callLinkageData: OPTIONAL<CallLinkageData>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let locationInfo: OPTIONAL<LocationInfoList>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "clearedCall": (_el: _Element): void => { clearedCall = _decode_ConnectionID(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "cause": (_el: _Element): void => { cause = _decode_EventCause(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "callLinkageData": (_el: _Element): void => { callLinkageData = $._decode_implicit<CallLinkageData>(() => _decode_CallLinkageData)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "locationInfo": (_el: _Element): void => { locationInfo = $._decode_implicit<LocationInfoList>(() => _decode_LocationInfoList)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallClearedEvent,
        _extension_additions_list_spec_for_CallClearedEvent,
        _root_component_type_list_2_spec_for_CallClearedEvent,
        undefined,
    );
    return new CallClearedEvent(
        clearedCall,
        correlatorData,
        userData,
        cause,
        mediaCallCharacteristics,
        callCharacteristics,
        callLinkageData,
        languagePreferences,
        locationInfo,
        extensions
    );
}; }
    return _cached_decoder_for_CallClearedEvent(el);
}

let _cached_encoder_for_CallClearedEvent: $.ASN1Encoder<CallClearedEvent> | null = null;

/**
 * @summary Encodes a(n) CallClearedEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallClearedEvent, encoded as an ASN.1 Element.
 */
export
function _encode_CallClearedEvent (value: CallClearedEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallClearedEvent) { _cached_encoder_for_CallClearedEvent = function (value: CallClearedEvent, elGetter: $.ASN1Encoder<CallClearedEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.clearedCall, $.BER),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.userData === undefined) ? undefined : _encode_UserData(value.userData, $.BER)),
            /* REQUIRED   */ _encode_EventCause(value.cause, $.BER),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CallLinkageData, $.BER)(value.callLinkageData, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.locationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_LocationInfoList, $.BER)(value.locationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallClearedEvent(value, elGetter);
}


/* eslint-enable */
