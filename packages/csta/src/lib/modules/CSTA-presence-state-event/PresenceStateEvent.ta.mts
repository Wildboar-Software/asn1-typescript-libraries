/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    OCTET_STRING,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";

import { PresenceState, _decode_PresenceState, _encode_PresenceState } from "../CSTA-device-feature-types/PresenceState.ta.mjs";

import { TimeInfo, _decode_TimeInfo, _encode_TimeInfo } from "../CSTA-security/TimeInfo.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary PresenceStateEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceStateEvent ::= SEQUENCE
 * {    device                 SubjectDeviceID,
 *     presenceState             PresenceState,
 *     fromTime            [0] IMPLICIT TimeInfo            OPTIONAL,
 *     untilTime            [1] IMPLICIT TimeInfo            OPTIONAL,
 *     place                [2] IMPLICIT OCTET STRING        OPTIONAL,
 *     mood                [3] IMPLICIT OCTET STRING        OPTIONAL,
 *     namedPresenceState         [4] IMPLICIT OCTET STRING        OPTIONAL,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class PresenceStateEvent {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: SubjectDeviceID,
        /**
         * @summary `presenceState`.
         * @public
         * @readonly
         */
        readonly presenceState: PresenceState,
        /**
         * @summary `fromTime`.
         * @public
         * @readonly
         */
        readonly fromTime: OPTIONAL<TimeInfo>,
        /**
         * @summary `untilTime`.
         * @public
         * @readonly
         */
        readonly untilTime: OPTIONAL<TimeInfo>,
        /**
         * @summary `place`.
         * @public
         * @readonly
         */
        readonly place: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `mood`.
         * @public
         * @readonly
         */
        readonly mood: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `namedPresenceState`.
         * @public
         * @readonly
         */
        readonly namedPresenceState: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a PresenceStateEvent
     * @description
     * 
     * This takes an `object` and converts it to a `PresenceStateEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PresenceStateEvent`.
     * @returns {PresenceStateEvent}
     */
    public static _from_object (_o: { [_K in keyof (PresenceStateEvent)]: (PresenceStateEvent)[_K] }): PresenceStateEvent {
        return new PresenceStateEvent(_o.device, _o.presenceState, _o.fromTime, _o.untilTime, _o.place, _o.mood, _o.namedPresenceState, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of PresenceStateEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PresenceStateEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("presenceState", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("fromTime", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("untilTime", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("place", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mood", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("namedPresenceState", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of PresenceStateEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PresenceStateEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PresenceStateEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PresenceStateEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PresenceStateEvent: $.ASN1Decoder<PresenceStateEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresenceStateEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresenceStateEvent (el: _Element): PresenceStateEvent {
    if (!_cached_decoder_for_PresenceStateEvent) { _cached_decoder_for_PresenceStateEvent = function (el: _Element): PresenceStateEvent {
    let device!: SubjectDeviceID;
    let presenceState!: PresenceState;
    let fromTime: OPTIONAL<TimeInfo>;
    let untilTime: OPTIONAL<TimeInfo>;
    let place: OPTIONAL<OCTET_STRING>;
    let mood: OPTIONAL<OCTET_STRING>;
    let namedPresenceState: OPTIONAL<OCTET_STRING>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_SubjectDeviceID(_el); },
        "presenceState": (_el: _Element): void => { presenceState = _decode_PresenceState(_el); },
        "fromTime": (_el: _Element): void => { fromTime = $._decode_implicit<TimeInfo>(() => _decode_TimeInfo)(_el); },
        "untilTime": (_el: _Element): void => { untilTime = $._decode_implicit<TimeInfo>(() => _decode_TimeInfo)(_el); },
        "place": (_el: _Element): void => { place = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mood": (_el: _Element): void => { mood = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "namedPresenceState": (_el: _Element): void => { namedPresenceState = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PresenceStateEvent,
        _extension_additions_list_spec_for_PresenceStateEvent,
        _root_component_type_list_2_spec_for_PresenceStateEvent,
        undefined,
    );
    return new PresenceStateEvent(
        device,
        presenceState,
        fromTime,
        untilTime,
        place,
        mood,
        namedPresenceState,
        extensions
    );
}; }
    return _cached_decoder_for_PresenceStateEvent(el);
}

let _cached_encoder_for_PresenceStateEvent: $.ASN1Encoder<PresenceStateEvent> | null = null;

/**
 * @summary Encodes a(n) PresenceStateEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresenceStateEvent, encoded as an ASN.1 Element.
 */
export
function _encode_PresenceStateEvent (value: PresenceStateEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresenceStateEvent) { _cached_encoder_for_PresenceStateEvent = function (value: PresenceStateEvent, elGetter: $.ASN1Encoder<PresenceStateEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.device, $.BER),
            /* REQUIRED   */ _encode_PresenceState(value.presenceState, $.BER),
            /* IF_ABSENT  */ ((value.fromTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_TimeInfo, $.BER)(value.fromTime, $.BER)),
            /* IF_ABSENT  */ ((value.untilTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_TimeInfo, $.BER)(value.untilTime, $.BER)),
            /* IF_ABSENT  */ ((value.place === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.place, $.BER)),
            /* IF_ABSENT  */ ((value.mood === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.mood, $.BER)),
            /* IF_ABSENT  */ ((value.namedPresenceState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.namedPresenceState, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PresenceStateEvent(value, elGetter);
}


/* eslint-enable */
