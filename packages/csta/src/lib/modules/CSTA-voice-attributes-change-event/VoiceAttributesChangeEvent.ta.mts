/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    ENUMERATED,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../CSTA-device-feature-types/ResourceID.ta.mjs";

import { Volume, _decode_Volume, _encode_Volume } from "../CSTA-physical-device-feature/Volume.ta.mjs";

import {
    VoiceAttributesChangeEvent_mode,
    _enum_for_VoiceAttributesChangeEvent_mode,
    automatic /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    single /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    multiple /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_VoiceAttributesChangeEvent_mode,
    _encode_VoiceAttributesChangeEvent_mode
} from "../CSTA-voice-attributes-change-event/VoiceAttributesChangeEvent-mode.ta.mjs";

import {
    EventCause,
    _enum_for_EventCause,
    interDigitTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    maxTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_EventCause,
    _encode_EventCause
} from "../CSTA-event-causes/EventCause.ta.mjs";

import { ServicesPermitted, _decode_ServicesPermitted, _encode_ServicesPermitted } from "../CSTA-call-control/ServicesPermitted.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



import { MessageID, _decode_MessageID, _encode_MessageID } from "../CSTA-device-feature-types/MessageID.ta.mjs";

/**
 * @summary VoiceAttributesChangeEvent
 * @description
 *
 * Indicates one or more attributes of a voice resource changed. Present fields
 * are those that changed. Reported to a computing function that has a
 * device-type or call-type monitor. This module has no ROSE OPERATION; the
 * payload is a voice-unit event alternative (ECMA-285 §24.2). (ECMA-269
 * §26.2.17, ECMA-285 §24.2.17).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoiceAttributesChangeEvent ::= SEQUENCE
 * {    connection            ConnectionID,
 *     resource            [ 4] IMPLICIT ResourceID        OPTIONAL,
 *     message                MessageID,
 *     playVolume            [ 0] Volume                OPTIONAL,
 *     recordingGain            [ 1] IMPLICIT INTEGER (0 .. 100)    OPTIONAL,
 *     speed                [ 2] IMPLICIT INTEGER             OPTIONAL,
 *     currentPosition            [ 3] IMPLICIT INTEGER            OPTIONAL,
 *     grammars            [ 5] IMPLICIT IA5String            OPTIONAL,
 *     language            [ 6] IMPLICIT IA5String            OPTIONAL,
 *     mode                [ 7] IMPLICIT ENUMERATED
 *                     {    automatic    (0),
 *                         single        (1),
 *                         multiple    (2) }        OPTIONAL,
 *     retainAudio            [ 8] IMPLICIT BOOLEAN            OPTIONAL,
 *     silenceTimeout            [ 9] IMPLICIT INTEGER            OPTIONAL,
 *     maxTimeout            [10] IMPLICIT INTEGER            OPTIONAL,
 *     babbleTimeout            [11] IMPLICIT INTEGER            OPTIONAL,
 *     endSilence            [12] IMPLICIT INTEGER            OPTIONAL,
 *     rejectionThreshold        [13] IMPLICIT INTEGER            OPTIONAL,
 *     autoInterruptible        [14] IMPLICIT BOOLEAN            OPTIONAL,
 *     innerXML            [15] IMPLICIT IA5String            OPTIONAL,
 *     interDigitTimeout        [16] IMPLICIT INTEGER            OPTIONAL,
 *     preflush            [17] IMPLICIT BOOLEAN            OPTIONAL,
 *     cause                EventCause                OPTIONAL,
 *     servicesPermitted        ServicesPermitted            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class VoiceAttributesChangeEvent {
    constructor (
        /**
         * @summary `connection`.
         * @description
         *
         * Connection whose attributes changed (ECMA-269 §26.2.17).
         *
         * @public
         * @readonly
         */
        readonly connection: ConnectionID,
        /**
         * @summary `resource`.
         * @description
         *
         * Interactive voice resource. Required when more than one interactive
         * voice resource exists on the connection.
         *
         * @public
         * @readonly
         */
        readonly resource: OPTIONAL<ResourceID>,
        /**
         * @summary `message`.
         * @description
         *
         * Related message (ECMA-269 §26.2.17).
         *
         * @public
         * @readonly
         */
        readonly message: MessageID,
        /**
         * @summary `playVolume`.
         * @description
         *
         * New play volume, if changed (ECMA-269 §26.2.17).
         *
         * @public
         * @readonly
         */
        readonly playVolume: OPTIONAL<Volume>,
        /**
         * @summary `recordingGain`.
         * @description
         *
         * New recording gain 0..100, if changed (ECMA-269 §26.2.17).
         *
         * @public
         * @readonly
         */
        readonly recordingGain: OPTIONAL<INTEGER>,
        /**
         * @summary `speed`.
         * @description
         *
         * New speed, if changed (ECMA-269 §26.2.17).
         *
         * @public
         * @readonly
         */
        readonly speed: OPTIONAL<INTEGER>,
        /**
         * @summary `currentPosition`.
         * @description
         *
         * Position, if reported (ECMA-269 §26.2.17).
         *
         * @public
         * @readonly
         */
        readonly currentPosition: OPTIONAL<INTEGER>,
        /**
         * @summary `grammars`.
         * @description
         *
         * New grammars, if changed (ECMA-269 §26.2.17).
         *
         * @public
         * @readonly
         */
        readonly grammars: OPTIONAL<IA5String>,
        /**
         * @summary `language`.
         * @description
         *
         * New language, if changed (ECMA-269 §26.2.17).
         *
         * @public
         * @readonly
         */
        readonly language: OPTIONAL<IA5String>,
        /**
         * @summary `mode`.
         * @description
         *
         * New Listener mode, if changed (ECMA-269 §26.2.17).
         *
         * @public
         * @readonly
         */
        readonly mode: OPTIONAL<VoiceAttributesChangeEvent_mode>,
        /**
         * @summary `retainAudio`.
         * @description
         *
         * New retain-audio flag, if changed (ECMA-269 §26.2.17).
         *
         * @public
         * @readonly
         */
        readonly retainAudio: OPTIONAL<BOOLEAN>,
        /**
         * @summary `silenceTimeout`.
         * @description
         *
         * New silence timeout, if changed (ECMA-269 §26.2.17).
         *
         * @public
         * @readonly
         */
        readonly silenceTimeout: OPTIONAL<INTEGER>,
        /**
         * @summary `maxTimeout`.
         * @description
         *
         * New max timeout, if changed (ECMA-269 §26.2.17).
         *
         * @public
         * @readonly
         */
        readonly maxTimeout: OPTIONAL<INTEGER>,
        /**
         * @summary `babbleTimeout`.
         * @description
         *
         * New babble timeout, if changed (ECMA-269 §26.2.17).
         *
         * @public
         * @readonly
         */
        readonly babbleTimeout: OPTIONAL<INTEGER>,
        /**
         * @summary `endSilence`.
         * @description
         *
         * New end-silence, if changed (ECMA-269 §26.2.17).
         *
         * @public
         * @readonly
         */
        readonly endSilence: OPTIONAL<INTEGER>,
        /**
         * @summary `rejectionThreshold`.
         * @description
         *
         * New rejection threshold, if changed (ECMA-269 §26.2.17).
         *
         * @public
         * @readonly
         */
        readonly rejectionThreshold: OPTIONAL<INTEGER>,
        /**
         * @summary `autoInterruptible`.
         * @description
         *
         * New auto-interruptible flag, if changed (ECMA-269 §26.2.17).
         *
         * @public
         * @readonly
         */
        readonly autoInterruptible: OPTIONAL<BOOLEAN>,
        /**
         * @summary `innerXML`.
         * @description
         *
         * New SSML, if changed (ECMA-269 §26.2.17).
         *
         * @public
         * @readonly
         */
        readonly innerXML: OPTIONAL<IA5String>,
        /**
         * @summary `interDigitTimeout`.
         * @description
         *
         * New inter-digit timeout, if changed (ECMA-269 §26.2.17).
         *
         * @public
         * @readonly
         */
        readonly interDigitTimeout: OPTIONAL<INTEGER>,
        /**
         * @summary `preflush`.
         * @description
         *
         * New preflush flag, if changed (ECMA-269 §26.2.17).
         *
         * @public
         * @readonly
         */
        readonly preflush: OPTIONAL<BOOLEAN>,
        /**
         * @summary `cause`.
         * @description
         *
         * Event cause, when the switching function supplies one.
         *
         * @public
         * @readonly
         */
        readonly cause: OPTIONAL<EventCause>,
        /**
         * @summary `servicesPermitted`.
         * @description
         *
         * Services permitted on the connection after this event.
         *
         * @public
         * @readonly
         */
        readonly servicesPermitted: OPTIONAL<ServicesPermitted>,
        /**
         * @summary `extensions`.
         * @description
         *
         * CSTACommonArguments carrying the service-table security and
         * privateData parameters.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a VoiceAttributesChangeEvent
     * @description
     * 
     * This takes an `object` and converts it to a `VoiceAttributesChangeEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VoiceAttributesChangeEvent`.
     * @returns {VoiceAttributesChangeEvent}
     */
    public static _from_object (_o: { [_K in keyof (VoiceAttributesChangeEvent)]: (VoiceAttributesChangeEvent)[_K] }): VoiceAttributesChangeEvent {
        return new VoiceAttributesChangeEvent(_o.connection, _o.resource, _o.message, _o.playVolume, _o.recordingGain, _o.speed, _o.currentPosition, _o.grammars, _o.language, _o.mode, _o.retainAudio, _o.silenceTimeout, _o.maxTimeout, _o.babbleTimeout, _o.endSilence, _o.rejectionThreshold, _o.autoInterruptible, _o.innerXML, _o.interDigitTimeout, _o.preflush, _o.cause, _o.servicesPermitted, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `mode`
         * @public
         * @static
         */

    public static _enum_for_mode = _enum_for_VoiceAttributesChangeEvent_mode;        /**
         * @summary The enum used as the type of the component `cause`
         * @public
         * @static
         */

    public static _enum_for_cause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of VoiceAttributesChangeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VoiceAttributesChangeEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("connection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("resource", true, $.hasTag(_TagClass.context, 4)),
        new $.ComponentSpec("message", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("playVolume", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recordingGain", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("speed", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("currentPosition", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("grammars", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("language", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("mode", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("retainAudio", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("silenceTimeout", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("maxTimeout", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("babbleTimeout", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("endSilence", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("rejectionThreshold", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("autoInterruptible", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("innerXML", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("interDigitTimeout", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("preflush", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("servicesPermitted", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of VoiceAttributesChangeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VoiceAttributesChangeEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VoiceAttributesChangeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VoiceAttributesChangeEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_VoiceAttributesChangeEvent: $.ASN1Decoder<VoiceAttributesChangeEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VoiceAttributesChangeEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VoiceAttributesChangeEvent (el: _Element): VoiceAttributesChangeEvent {
    if (!_cached_decoder_for_VoiceAttributesChangeEvent) { _cached_decoder_for_VoiceAttributesChangeEvent = function (el: _Element): VoiceAttributesChangeEvent {
    let connection!: ConnectionID;
    let resource: OPTIONAL<ResourceID>;
    let message!: MessageID;
    let playVolume: OPTIONAL<Volume>;
    let recordingGain: OPTIONAL<INTEGER>;
    let speed: OPTIONAL<INTEGER>;
    let currentPosition: OPTIONAL<INTEGER>;
    let grammars: OPTIONAL<IA5String>;
    let language: OPTIONAL<IA5String>;
    let mode: OPTIONAL<VoiceAttributesChangeEvent_mode>;
    let retainAudio: OPTIONAL<BOOLEAN>;
    let silenceTimeout: OPTIONAL<INTEGER>;
    let maxTimeout: OPTIONAL<INTEGER>;
    let babbleTimeout: OPTIONAL<INTEGER>;
    let endSilence: OPTIONAL<INTEGER>;
    let rejectionThreshold: OPTIONAL<INTEGER>;
    let autoInterruptible: OPTIONAL<BOOLEAN>;
    let innerXML: OPTIONAL<IA5String>;
    let interDigitTimeout: OPTIONAL<INTEGER>;
    let preflush: OPTIONAL<BOOLEAN>;
    let cause: OPTIONAL<EventCause>;
    let servicesPermitted: OPTIONAL<ServicesPermitted>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connection": (_el: _Element): void => { connection = _decode_ConnectionID(_el); },
        "resource": (_el: _Element): void => { resource = $._decode_implicit<ResourceID>(() => _decode_ResourceID)(_el); },
        "message": (_el: _Element): void => { message = _decode_MessageID(_el); },
        "playVolume": (_el: _Element): void => { playVolume = $._decode_explicit<Volume>(() => _decode_Volume)(_el); },
        "recordingGain": (_el: _Element): void => { recordingGain = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "speed": (_el: _Element): void => { speed = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "currentPosition": (_el: _Element): void => { currentPosition = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "grammars": (_el: _Element): void => { grammars = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "language": (_el: _Element): void => { language = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "mode": (_el: _Element): void => { mode = $._decode_implicit<VoiceAttributesChangeEvent_mode>(() => _decode_VoiceAttributesChangeEvent_mode)(_el); },
        "retainAudio": (_el: _Element): void => { retainAudio = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "silenceTimeout": (_el: _Element): void => { silenceTimeout = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxTimeout": (_el: _Element): void => { maxTimeout = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "babbleTimeout": (_el: _Element): void => { babbleTimeout = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "endSilence": (_el: _Element): void => { endSilence = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "rejectionThreshold": (_el: _Element): void => { rejectionThreshold = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "autoInterruptible": (_el: _Element): void => { autoInterruptible = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "innerXML": (_el: _Element): void => { innerXML = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "interDigitTimeout": (_el: _Element): void => { interDigitTimeout = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "preflush": (_el: _Element): void => { preflush = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "cause": (_el: _Element): void => { cause = _decode_EventCause(_el); },
        "servicesPermitted": (_el: _Element): void => { servicesPermitted = _decode_ServicesPermitted(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_VoiceAttributesChangeEvent,
        _extension_additions_list_spec_for_VoiceAttributesChangeEvent,
        _root_component_type_list_2_spec_for_VoiceAttributesChangeEvent,
        undefined,
    );
    return new VoiceAttributesChangeEvent(
        connection,
        resource,
        message,
        playVolume,
        recordingGain,
        speed,
        currentPosition,
        grammars,
        language,
        mode,
        retainAudio,
        silenceTimeout,
        maxTimeout,
        babbleTimeout,
        endSilence,
        rejectionThreshold,
        autoInterruptible,
        innerXML,
        interDigitTimeout,
        preflush,
        cause,
        servicesPermitted,
        extensions
    );
}; }
    return _cached_decoder_for_VoiceAttributesChangeEvent(el);
}

let _cached_encoder_for_VoiceAttributesChangeEvent: $.ASN1Encoder<VoiceAttributesChangeEvent> | null = null;

/**
 * @summary Encodes a(n) VoiceAttributesChangeEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VoiceAttributesChangeEvent, encoded as an ASN.1 Element.
 */
export
function _encode_VoiceAttributesChangeEvent (value: VoiceAttributesChangeEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VoiceAttributesChangeEvent) { _cached_encoder_for_VoiceAttributesChangeEvent = function (value: VoiceAttributesChangeEvent, elGetter: $.ASN1Encoder<VoiceAttributesChangeEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connection, $.BER),
            /* IF_ABSENT  */ ((value.resource === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ResourceID, $.BER)(value.resource, $.BER)),
            /* REQUIRED   */ _encode_MessageID(value.message, $.BER),
            /* IF_ABSENT  */ ((value.playVolume === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_Volume, $.BER)(value.playVolume, $.BER)),
            /* IF_ABSENT  */ ((value.recordingGain === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.recordingGain, $.BER)),
            /* IF_ABSENT  */ ((value.speed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.speed, $.BER)),
            /* IF_ABSENT  */ ((value.currentPosition === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.currentPosition, $.BER)),
            /* IF_ABSENT  */ ((value.grammars === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeIA5String, $.BER)(value.grammars, $.BER)),
            /* IF_ABSENT  */ ((value.language === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeIA5String, $.BER)(value.language, $.BER)),
            /* IF_ABSENT  */ ((value.mode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_VoiceAttributesChangeEvent_mode, $.BER)(value.mode, $.BER)),
            /* IF_ABSENT  */ ((value.retainAudio === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.retainAudio, $.BER)),
            /* IF_ABSENT  */ ((value.silenceTimeout === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.silenceTimeout, $.BER)),
            /* IF_ABSENT  */ ((value.maxTimeout === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.maxTimeout, $.BER)),
            /* IF_ABSENT  */ ((value.babbleTimeout === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.babbleTimeout, $.BER)),
            /* IF_ABSENT  */ ((value.endSilence === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER)(value.endSilence, $.BER)),
            /* IF_ABSENT  */ ((value.rejectionThreshold === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.rejectionThreshold, $.BER)),
            /* IF_ABSENT  */ ((value.autoInterruptible === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeBoolean, $.BER)(value.autoInterruptible, $.BER)),
            /* IF_ABSENT  */ ((value.innerXML === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => $._encodeIA5String, $.BER)(value.innerXML, $.BER)),
            /* IF_ABSENT  */ ((value.interDigitTimeout === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER)(value.interDigitTimeout, $.BER)),
            /* IF_ABSENT  */ ((value.preflush === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeBoolean, $.BER)(value.preflush, $.BER)),
            /* IF_ABSENT  */ ((value.cause === undefined) ? undefined : _encode_EventCause(value.cause, $.BER)),
            /* IF_ABSENT  */ ((value.servicesPermitted === undefined) ? undefined : _encode_ServicesPermitted(value.servicesPermitted, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_VoiceAttributesChangeEvent(value, elGetter);
}


/* eslint-enable */
