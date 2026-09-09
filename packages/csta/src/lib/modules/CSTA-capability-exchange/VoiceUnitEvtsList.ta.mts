/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { BookmarkReached, _decode_BookmarkReached, _encode_BookmarkReached } from "../CSTA-capability-exchange/BookmarkReached.ta.mjs";

import { Completed, _decode_Completed, _encode_Completed } from "../CSTA-capability-exchange/Completed.ta.mjs";

import { DtmfDetected, _decode_DtmfDetected, _encode_DtmfDetected } from "../CSTA-capability-exchange/DtmfDetected.ta.mjs";

import { Emptied, _decode_Emptied, _encode_Emptied } from "../CSTA-capability-exchange/Emptied.ta.mjs";

import { InterruptionDetected, _decode_InterruptionDetected, _encode_InterruptionDetected } from "../CSTA-capability-exchange/InterruptionDetected.ta.mjs";

import { NotRecognized, _decode_NotRecognized, _encode_NotRecognized } from "../CSTA-capability-exchange/NotRecognized.ta.mjs";

import { Play, _decode_Play, _encode_Play } from "../CSTA-capability-exchange/Play.ta.mjs";

import { Record, _decode_Record, _encode_Record } from "../CSTA-capability-exchange/Record.ta.mjs";

import { Recognized, _decode_Recognized, _encode_Recognized } from "../CSTA-capability-exchange/Recognized.ta.mjs";

import { ReviewEvent, _decode_ReviewEvent, _encode_ReviewEvent } from "../CSTA-capability-exchange/ReviewEvent.ta.mjs";

import { Started, _decode_Started, _encode_Started } from "../CSTA-capability-exchange/Started.ta.mjs";

import { SilenceTimeoutExpired, _decode_SilenceTimeoutExpired, _encode_SilenceTimeoutExpired } from "../CSTA-capability-exchange/SilenceTimeoutExpired.ta.mjs";

import { SpeechDetected, _decode_SpeechDetected, _encode_SpeechDetected } from "../CSTA-capability-exchange/SpeechDetected.ta.mjs";

import { StopEvent, _decode_StopEvent, _encode_StopEvent } from "../CSTA-capability-exchange/StopEvent.ta.mjs";

import { SuspendPlay, _decode_SuspendPlay, _encode_SuspendPlay } from "../CSTA-capability-exchange/SuspendPlay.ta.mjs";

import { SuspendRecord, _decode_SuspendRecord, _encode_SuspendRecord } from "../CSTA-capability-exchange/SuspendRecord.ta.mjs";

import { VoiceAttribChanged, _decode_VoiceAttribChanged, _encode_VoiceAttribChanged } from "../CSTA-capability-exchange/VoiceAttribChanged.ta.mjs";

import { VoiceErrorOccured, _decode_VoiceErrorOccured, _encode_VoiceErrorOccured } from "../CSTA-capability-exchange/VoiceErrorOccured.ta.mjs";



/**
 * @summary VoiceUnitEvtsList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoiceUnitEvtsList ::= SEQUENCE
 * {     bookmarkReached            [ 7] IMPLICIT BookmarkReached            OPTIONAL,
 *     completed            [ 8] IMPLICIT Completed                OPTIONAL,
 *     dtmfDetected            [ 9] IMPLICIT DtmfDetected            OPTIONAL,
 *     emptied                [10] IMPLICIT Emptied                OPTIONAL,
 *     interruptionDetected        [11] IMPLICIT InterruptionDetected        OPTIONAL,
 *     notRecognized            [12] IMPLICIT NotRecognized            OPTIONAL,
 *     play                 [ 0] IMPLICIT Play                 OPTIONAL,
 *     record                 [ 1] IMPLICIT Record                 OPTIONAL,
 *     recognized            [13] IMPLICIT Recognized            OPTIONAL,
 *     review                 [ 2] IMPLICIT ReviewEvent             OPTIONAL,
 *     started                [14] IMPLICIT Started                OPTIONAL,
 *     silenceTimeoutExpired        [15] IMPLICIT SilenceTimeoutExpired        OPTIONAL,
 *     speechDetected            [16] IMPLICIT SpeechDetected            OPTIONAL,
 *     stop                 [ 3] IMPLICIT StopEvent             OPTIONAL,
 *     suspendPlay             [ 4] IMPLICIT SuspendPlay             OPTIONAL,
 *     suspendRecord             [ 5] IMPLICIT SuspendRecord             OPTIONAL,
 *     voiceAttribChanged         [ 6] IMPLICIT VoiceAttribChanged        OPTIONAL,
 *     voiceErrorOccured        [17] IMPLICIT VoiceErrorOccured            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class VoiceUnitEvtsList {
    constructor (
        /**
         * @summary `bookmarkReached`.
         * @public
         * @readonly
         */
        readonly bookmarkReached: OPTIONAL<BookmarkReached>,
        /**
         * @summary `completed`.
         * @public
         * @readonly
         */
        readonly completed: OPTIONAL<Completed>,
        /**
         * @summary `dtmfDetected`.
         * @public
         * @readonly
         */
        readonly dtmfDetected: OPTIONAL<DtmfDetected>,
        /**
         * @summary `emptied`.
         * @public
         * @readonly
         */
        readonly emptied: OPTIONAL<Emptied>,
        /**
         * @summary `interruptionDetected`.
         * @public
         * @readonly
         */
        readonly interruptionDetected: OPTIONAL<InterruptionDetected>,
        /**
         * @summary `notRecognized`.
         * @public
         * @readonly
         */
        readonly notRecognized: OPTIONAL<NotRecognized>,
        /**
         * @summary `play`.
         * @public
         * @readonly
         */
        readonly play: OPTIONAL<Play>,
        /**
         * @summary `record`.
         * @public
         * @readonly
         */
        readonly record: OPTIONAL<Record>,
        /**
         * @summary `recognized`.
         * @public
         * @readonly
         */
        readonly recognized: OPTIONAL<Recognized>,
        /**
         * @summary `review`.
         * @public
         * @readonly
         */
        readonly review: OPTIONAL<ReviewEvent>,
        /**
         * @summary `started`.
         * @public
         * @readonly
         */
        readonly started: OPTIONAL<Started>,
        /**
         * @summary `silenceTimeoutExpired`.
         * @public
         * @readonly
         */
        readonly silenceTimeoutExpired: OPTIONAL<SilenceTimeoutExpired>,
        /**
         * @summary `speechDetected`.
         * @public
         * @readonly
         */
        readonly speechDetected: OPTIONAL<SpeechDetected>,
        /**
         * @summary `stop`.
         * @public
         * @readonly
         */
        readonly stop: OPTIONAL<StopEvent>,
        /**
         * @summary `suspendPlay`.
         * @public
         * @readonly
         */
        readonly suspendPlay: OPTIONAL<SuspendPlay>,
        /**
         * @summary `suspendRecord`.
         * @public
         * @readonly
         */
        readonly suspendRecord: OPTIONAL<SuspendRecord>,
        /**
         * @summary `voiceAttribChanged`.
         * @public
         * @readonly
         */
        readonly voiceAttribChanged: OPTIONAL<VoiceAttribChanged>,
        /**
         * @summary `voiceErrorOccured`.
         * @public
         * @readonly
         */
        readonly voiceErrorOccured: OPTIONAL<VoiceErrorOccured>
    ) {}

    /**
     * @summary Restructures an object into a VoiceUnitEvtsList
     * @description
     * 
     * This takes an `object` and converts it to a `VoiceUnitEvtsList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VoiceUnitEvtsList`.
     * @returns {VoiceUnitEvtsList}
     */
    public static _from_object (_o: { [_K in keyof (VoiceUnitEvtsList)]: (VoiceUnitEvtsList)[_K] }): VoiceUnitEvtsList {
        return new VoiceUnitEvtsList(_o.bookmarkReached, _o.completed, _o.dtmfDetected, _o.emptied, _o.interruptionDetected, _o.notRecognized, _o.play, _o.record, _o.recognized, _o.review, _o.started, _o.silenceTimeoutExpired, _o.speechDetected, _o.stop, _o.suspendPlay, _o.suspendRecord, _o.voiceAttribChanged, _o.voiceErrorOccured);
    }


}

/**
 * @summary The Leading Root Component Types of VoiceUnitEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VoiceUnitEvtsList: $.ComponentSpec[] = [
    new $.ComponentSpec("bookmarkReached", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("completed", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("dtmfDetected", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("emptied", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("interruptionDetected", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("notRecognized", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("play", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("record", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("recognized", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("review", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("started", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("silenceTimeoutExpired", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("speechDetected", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("stop", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("suspendPlay", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("suspendRecord", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("voiceAttribChanged", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("voiceErrorOccured", true, $.hasTag(_TagClass.context, 17))
];

/**
 * @summary The Trailing Root Component Types of VoiceUnitEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VoiceUnitEvtsList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VoiceUnitEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VoiceUnitEvtsList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_VoiceUnitEvtsList: $.ASN1Decoder<VoiceUnitEvtsList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VoiceUnitEvtsList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VoiceUnitEvtsList (el: _Element): VoiceUnitEvtsList {
    if (!_cached_decoder_for_VoiceUnitEvtsList) { _cached_decoder_for_VoiceUnitEvtsList = function (el: _Element): VoiceUnitEvtsList {
    let bookmarkReached: OPTIONAL<BookmarkReached>;
    let completed: OPTIONAL<Completed>;
    let dtmfDetected: OPTIONAL<DtmfDetected>;
    let emptied: OPTIONAL<Emptied>;
    let interruptionDetected: OPTIONAL<InterruptionDetected>;
    let notRecognized: OPTIONAL<NotRecognized>;
    let play: OPTIONAL<Play>;
    let record: OPTIONAL<Record>;
    let recognized: OPTIONAL<Recognized>;
    let review: OPTIONAL<ReviewEvent>;
    let started: OPTIONAL<Started>;
    let silenceTimeoutExpired: OPTIONAL<SilenceTimeoutExpired>;
    let speechDetected: OPTIONAL<SpeechDetected>;
    let stop: OPTIONAL<StopEvent>;
    let suspendPlay: OPTIONAL<SuspendPlay>;
    let suspendRecord: OPTIONAL<SuspendRecord>;
    let voiceAttribChanged: OPTIONAL<VoiceAttribChanged>;
    let voiceErrorOccured: OPTIONAL<VoiceErrorOccured>;
    const callbacks: $.DecodingMap = {
        "bookmarkReached": (_el: _Element): void => { bookmarkReached = $._decode_implicit<BookmarkReached>(() => _decode_BookmarkReached)(_el); },
        "completed": (_el: _Element): void => { completed = $._decode_implicit<Completed>(() => _decode_Completed)(_el); },
        "dtmfDetected": (_el: _Element): void => { dtmfDetected = $._decode_implicit<DtmfDetected>(() => _decode_DtmfDetected)(_el); },
        "emptied": (_el: _Element): void => { emptied = $._decode_implicit<Emptied>(() => _decode_Emptied)(_el); },
        "interruptionDetected": (_el: _Element): void => { interruptionDetected = $._decode_implicit<InterruptionDetected>(() => _decode_InterruptionDetected)(_el); },
        "notRecognized": (_el: _Element): void => { notRecognized = $._decode_implicit<NotRecognized>(() => _decode_NotRecognized)(_el); },
        "play": (_el: _Element): void => { play = $._decode_implicit<Play>(() => _decode_Play)(_el); },
        "record": (_el: _Element): void => { record = $._decode_implicit<Record>(() => _decode_Record)(_el); },
        "recognized": (_el: _Element): void => { recognized = $._decode_implicit<Recognized>(() => _decode_Recognized)(_el); },
        "review": (_el: _Element): void => { review = $._decode_implicit<ReviewEvent>(() => _decode_ReviewEvent)(_el); },
        "started": (_el: _Element): void => { started = $._decode_implicit<Started>(() => _decode_Started)(_el); },
        "silenceTimeoutExpired": (_el: _Element): void => { silenceTimeoutExpired = $._decode_implicit<SilenceTimeoutExpired>(() => _decode_SilenceTimeoutExpired)(_el); },
        "speechDetected": (_el: _Element): void => { speechDetected = $._decode_implicit<SpeechDetected>(() => _decode_SpeechDetected)(_el); },
        "stop": (_el: _Element): void => { stop = $._decode_implicit<StopEvent>(() => _decode_StopEvent)(_el); },
        "suspendPlay": (_el: _Element): void => { suspendPlay = $._decode_implicit<SuspendPlay>(() => _decode_SuspendPlay)(_el); },
        "suspendRecord": (_el: _Element): void => { suspendRecord = $._decode_implicit<SuspendRecord>(() => _decode_SuspendRecord)(_el); },
        "voiceAttribChanged": (_el: _Element): void => { voiceAttribChanged = $._decode_implicit<VoiceAttribChanged>(() => _decode_VoiceAttribChanged)(_el); },
        "voiceErrorOccured": (_el: _Element): void => { voiceErrorOccured = $._decode_implicit<VoiceErrorOccured>(() => _decode_VoiceErrorOccured)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_VoiceUnitEvtsList,
        _extension_additions_list_spec_for_VoiceUnitEvtsList,
        _root_component_type_list_2_spec_for_VoiceUnitEvtsList,
        undefined,
    );
    return new VoiceUnitEvtsList(
        bookmarkReached,
        completed,
        dtmfDetected,
        emptied,
        interruptionDetected,
        notRecognized,
        play,
        record,
        recognized,
        review,
        started,
        silenceTimeoutExpired,
        speechDetected,
        stop,
        suspendPlay,
        suspendRecord,
        voiceAttribChanged,
        voiceErrorOccured
    );
}; }
    return _cached_decoder_for_VoiceUnitEvtsList(el);
}

let _cached_encoder_for_VoiceUnitEvtsList: $.ASN1Encoder<VoiceUnitEvtsList> | null = null;

/**
 * @summary Encodes a(n) VoiceUnitEvtsList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VoiceUnitEvtsList, encoded as an ASN.1 Element.
 */
export
function _encode_VoiceUnitEvtsList (value: VoiceUnitEvtsList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VoiceUnitEvtsList) { _cached_encoder_for_VoiceUnitEvtsList = function (value: VoiceUnitEvtsList, elGetter: $.ASN1Encoder<VoiceUnitEvtsList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.bookmarkReached === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_BookmarkReached, $.BER)(value.bookmarkReached, $.BER)),
            /* IF_ABSENT  */ ((value.completed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_Completed, $.BER)(value.completed, $.BER)),
            /* IF_ABSENT  */ ((value.dtmfDetected === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_DtmfDetected, $.BER)(value.dtmfDetected, $.BER)),
            /* IF_ABSENT  */ ((value.emptied === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_Emptied, $.BER)(value.emptied, $.BER)),
            /* IF_ABSENT  */ ((value.interruptionDetected === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_InterruptionDetected, $.BER)(value.interruptionDetected, $.BER)),
            /* IF_ABSENT  */ ((value.notRecognized === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_NotRecognized, $.BER)(value.notRecognized, $.BER)),
            /* IF_ABSENT  */ ((value.play === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Play, $.BER)(value.play, $.BER)),
            /* IF_ABSENT  */ ((value.record === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Record, $.BER)(value.record, $.BER)),
            /* IF_ABSENT  */ ((value.recognized === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_Recognized, $.BER)(value.recognized, $.BER)),
            /* IF_ABSENT  */ ((value.review === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ReviewEvent, $.BER)(value.review, $.BER)),
            /* IF_ABSENT  */ ((value.started === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_Started, $.BER)(value.started, $.BER)),
            /* IF_ABSENT  */ ((value.silenceTimeoutExpired === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_SilenceTimeoutExpired, $.BER)(value.silenceTimeoutExpired, $.BER)),
            /* IF_ABSENT  */ ((value.speechDetected === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_SpeechDetected, $.BER)(value.speechDetected, $.BER)),
            /* IF_ABSENT  */ ((value.stop === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_StopEvent, $.BER)(value.stop, $.BER)),
            /* IF_ABSENT  */ ((value.suspendPlay === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SuspendPlay, $.BER)(value.suspendPlay, $.BER)),
            /* IF_ABSENT  */ ((value.suspendRecord === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SuspendRecord, $.BER)(value.suspendRecord, $.BER)),
            /* IF_ABSENT  */ ((value.voiceAttribChanged === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_VoiceAttribChanged, $.BER)(value.voiceAttribChanged, $.BER)),
            /* IF_ABSENT  */ ((value.voiceErrorOccured === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_VoiceErrorOccured, $.BER)(value.voiceErrorOccured, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_VoiceUnitEvtsList(value, elGetter);
}


/* eslint-enable */
