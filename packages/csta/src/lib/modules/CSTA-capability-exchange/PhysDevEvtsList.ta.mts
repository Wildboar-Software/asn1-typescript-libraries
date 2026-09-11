/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ButtonInformation, _decode_ButtonInformation, _encode_ButtonInformation } from "../CSTA-capability-exchange/ButtonInformation.ta.mjs";

import { ButtonPressEvent, _decode_ButtonPressEvent, _encode_ButtonPressEvent } from "../CSTA-capability-exchange/ButtonPressEvent.ta.mjs";

import { DisplayUpdated, _decode_DisplayUpdated, _encode_DisplayUpdated } from "../CSTA-capability-exchange/DisplayUpdated.ta.mjs";

import { Hookswitch, _decode_Hookswitch, _encode_Hookswitch } from "../CSTA-capability-exchange/Hookswitch.ta.mjs";

import { LampMode, _decode_LampMode, _encode_LampMode } from "../CSTA-capability-exchange/LampMode.ta.mjs";

import { MessageWaiting, _decode_MessageWaiting, _encode_MessageWaiting } from "../CSTA-capability-exchange/MessageWaiting.ta.mjs";

import { MicrophoneGain, _decode_MicrophoneGain, _encode_MicrophoneGain } from "../CSTA-capability-exchange/MicrophoneGain.ta.mjs";

import { MicrophoneMute, _decode_MicrophoneMute, _encode_MicrophoneMute } from "../CSTA-capability-exchange/MicrophoneMute.ta.mjs";

import { RingerStatus, _decode_RingerStatus, _encode_RingerStatus } from "../CSTA-capability-exchange/RingerStatus.ta.mjs";

import { SpeakerMute, _decode_SpeakerMute, _encode_SpeakerMute } from "../CSTA-capability-exchange/SpeakerMute.ta.mjs";

import { SpeakerVolume, _decode_SpeakerVolume, _encode_SpeakerVolume } from "../CSTA-capability-exchange/SpeakerVolume.ta.mjs";



/**
 * @summary PhysDevEvtsList
 * @description
 * Physical Device Feature events the SF supports (ECMA-269 Annex C.13, ECMA-285
 * §9.10). Omit unsupported events.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PhysDevEvtsList ::= SEQUENCE
 * {     buttonInformation         [ 0] IMPLICIT     ButtonInformation         OPTIONAL,
 *     buttonPress             [ 1] IMPLICIT     ButtonPressEvent         OPTIONAL,
 *     displayUpdated             [ 2] IMPLICIT     DisplayUpdated             OPTIONAL,
 *     hookswitch             [ 3] IMPLICIT     Hookswitch             OPTIONAL,
 *     lampMode             [ 4] IMPLICIT     LampMode             OPTIONAL,
 *     messageWaiting             [ 5] IMPLICIT     MessageWaiting             OPTIONAL,
 *     microphoneGain             [ 6] IMPLICIT     MicrophoneGain             OPTIONAL,
 *     microphoneMute             [ 7] IMPLICIT     MicrophoneMute             OPTIONAL,
 *     ringerStatus             [ 8] IMPLICIT     RingerStatus             OPTIONAL,
 *     speakerMute             [ 9] IMPLICIT     SpeakerMute             OPTIONAL,
 *     speakerVolume             [10] IMPLICIT     SpeakerVolume             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class PhysDevEvtsList {
    constructor (
        /**
         * @summary `buttonInformation`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly buttonInformation: OPTIONAL<ButtonInformation>,
        /**
         * @summary `buttonPress`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly buttonPress: OPTIONAL<ButtonPressEvent>,
        /**
         * @summary `displayUpdated`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly displayUpdated: OPTIONAL<DisplayUpdated>,
        /**
         * @summary `hookswitch`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly hookswitch: OPTIONAL<Hookswitch>,
        /**
         * @summary `lampMode`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly lampMode: OPTIONAL<LampMode>,
        /**
         * @summary `messageWaiting`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly messageWaiting: OPTIONAL<MessageWaiting>,
        /**
         * @summary `microphoneGain`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly microphoneGain: OPTIONAL<MicrophoneGain>,
        /**
         * @summary `microphoneMute`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly microphoneMute: OPTIONAL<MicrophoneMute>,
        /**
         * @summary `ringerStatus`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly ringerStatus: OPTIONAL<RingerStatus>,
        /**
         * @summary `speakerMute`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly speakerMute: OPTIONAL<SpeakerMute>,
        /**
         * @summary `speakerVolume`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly speakerVolume: OPTIONAL<SpeakerVolume>
    ) {}

    /**
     * @summary Restructures an object into a PhysDevEvtsList
     * @description
     * 
     * This takes an `object` and converts it to a `PhysDevEvtsList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PhysDevEvtsList`.
     * @returns {PhysDevEvtsList}
     */
    public static _from_object (_o: { [_K in keyof (PhysDevEvtsList)]: (PhysDevEvtsList)[_K] }): PhysDevEvtsList {
        return new PhysDevEvtsList(_o.buttonInformation, _o.buttonPress, _o.displayUpdated, _o.hookswitch, _o.lampMode, _o.messageWaiting, _o.microphoneGain, _o.microphoneMute, _o.ringerStatus, _o.speakerMute, _o.speakerVolume);
    }


}

/**
 * @summary The Leading Root Component Types of PhysDevEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PhysDevEvtsList: $.ComponentSpec[] = [
    new $.ComponentSpec("buttonInformation", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("buttonPress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("displayUpdated", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("hookswitch", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("lampMode", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("messageWaiting", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("microphoneGain", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("microphoneMute", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("ringerStatus", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("speakerMute", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("speakerVolume", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of PhysDevEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PhysDevEvtsList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PhysDevEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PhysDevEvtsList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PhysDevEvtsList: $.ASN1Decoder<PhysDevEvtsList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PhysDevEvtsList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PhysDevEvtsList (el: _Element): PhysDevEvtsList {
    if (!_cached_decoder_for_PhysDevEvtsList) { _cached_decoder_for_PhysDevEvtsList = function (el: _Element): PhysDevEvtsList {
    let buttonInformation: OPTIONAL<ButtonInformation>;
    let buttonPress: OPTIONAL<ButtonPressEvent>;
    let displayUpdated: OPTIONAL<DisplayUpdated>;
    let hookswitch: OPTIONAL<Hookswitch>;
    let lampMode: OPTIONAL<LampMode>;
    let messageWaiting: OPTIONAL<MessageWaiting>;
    let microphoneGain: OPTIONAL<MicrophoneGain>;
    let microphoneMute: OPTIONAL<MicrophoneMute>;
    let ringerStatus: OPTIONAL<RingerStatus>;
    let speakerMute: OPTIONAL<SpeakerMute>;
    let speakerVolume: OPTIONAL<SpeakerVolume>;
    const callbacks: $.DecodingMap = {
        "buttonInformation": (_el: _Element): void => { buttonInformation = $._decode_implicit<ButtonInformation>(() => _decode_ButtonInformation)(_el); },
        "buttonPress": (_el: _Element): void => { buttonPress = $._decode_implicit<ButtonPressEvent>(() => _decode_ButtonPressEvent)(_el); },
        "displayUpdated": (_el: _Element): void => { displayUpdated = $._decode_implicit<DisplayUpdated>(() => _decode_DisplayUpdated)(_el); },
        "hookswitch": (_el: _Element): void => { hookswitch = $._decode_implicit<Hookswitch>(() => _decode_Hookswitch)(_el); },
        "lampMode": (_el: _Element): void => { lampMode = $._decode_implicit<LampMode>(() => _decode_LampMode)(_el); },
        "messageWaiting": (_el: _Element): void => { messageWaiting = $._decode_implicit<MessageWaiting>(() => _decode_MessageWaiting)(_el); },
        "microphoneGain": (_el: _Element): void => { microphoneGain = $._decode_implicit<MicrophoneGain>(() => _decode_MicrophoneGain)(_el); },
        "microphoneMute": (_el: _Element): void => { microphoneMute = $._decode_implicit<MicrophoneMute>(() => _decode_MicrophoneMute)(_el); },
        "ringerStatus": (_el: _Element): void => { ringerStatus = $._decode_implicit<RingerStatus>(() => _decode_RingerStatus)(_el); },
        "speakerMute": (_el: _Element): void => { speakerMute = $._decode_implicit<SpeakerMute>(() => _decode_SpeakerMute)(_el); },
        "speakerVolume": (_el: _Element): void => { speakerVolume = $._decode_implicit<SpeakerVolume>(() => _decode_SpeakerVolume)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PhysDevEvtsList,
        _extension_additions_list_spec_for_PhysDevEvtsList,
        _root_component_type_list_2_spec_for_PhysDevEvtsList,
        undefined,
    );
    return new PhysDevEvtsList(
        buttonInformation,
        buttonPress,
        displayUpdated,
        hookswitch,
        lampMode,
        messageWaiting,
        microphoneGain,
        microphoneMute,
        ringerStatus,
        speakerMute,
        speakerVolume
    );
}; }
    return _cached_decoder_for_PhysDevEvtsList(el);
}

let _cached_encoder_for_PhysDevEvtsList: $.ASN1Encoder<PhysDevEvtsList> | null = null;

/**
 * @summary Encodes a(n) PhysDevEvtsList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysDevEvtsList, encoded as an ASN.1 Element.
 */
export
function _encode_PhysDevEvtsList (value: PhysDevEvtsList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PhysDevEvtsList) { _cached_encoder_for_PhysDevEvtsList = function (value: PhysDevEvtsList, elGetter: $.ASN1Encoder<PhysDevEvtsList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.buttonInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ButtonInformation, $.BER)(value.buttonInformation, $.BER)),
            /* IF_ABSENT  */ ((value.buttonPress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ButtonPressEvent, $.BER)(value.buttonPress, $.BER)),
            /* IF_ABSENT  */ ((value.displayUpdated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_DisplayUpdated, $.BER)(value.displayUpdated, $.BER)),
            /* IF_ABSENT  */ ((value.hookswitch === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Hookswitch, $.BER)(value.hookswitch, $.BER)),
            /* IF_ABSENT  */ ((value.lampMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_LampMode, $.BER)(value.lampMode, $.BER)),
            /* IF_ABSENT  */ ((value.messageWaiting === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_MessageWaiting, $.BER)(value.messageWaiting, $.BER)),
            /* IF_ABSENT  */ ((value.microphoneGain === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_MicrophoneGain, $.BER)(value.microphoneGain, $.BER)),
            /* IF_ABSENT  */ ((value.microphoneMute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_MicrophoneMute, $.BER)(value.microphoneMute, $.BER)),
            /* IF_ABSENT  */ ((value.ringerStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_RingerStatus, $.BER)(value.ringerStatus, $.BER)),
            /* IF_ABSENT  */ ((value.speakerMute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_SpeakerMute, $.BER)(value.speakerMute, $.BER)),
            /* IF_ABSENT  */ ((value.speakerVolume === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_SpeakerVolume, $.BER)(value.speakerVolume, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PhysDevEvtsList(value, elGetter);
}


/* eslint-enable */
