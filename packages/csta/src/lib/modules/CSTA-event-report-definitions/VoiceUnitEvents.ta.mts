/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { BookmarkReachedEvent, _decode_BookmarkReachedEvent, _encode_BookmarkReachedEvent } from "../CSTA-bookmark-reached-event/BookmarkReachedEvent.ta.mjs";

import { CompletedEvent, _decode_CompletedEvent, _encode_CompletedEvent } from "../CSTA-completed-event/CompletedEvent.ta.mjs";

import { DtmfDetectedEvent, _decode_DtmfDetectedEvent, _encode_DtmfDetectedEvent } from "../CSTA-dtmf-detected-event/DtmfDetectedEvent.ta.mjs";

import { EmptiedEvent, _decode_EmptiedEvent, _encode_EmptiedEvent } from "../CSTA-emptied-event/EmptiedEvent.ta.mjs";

import { InterruptionDetectedEvent, _decode_InterruptionDetectedEvent, _encode_InterruptionDetectedEvent } from "../CSTA-interruption-detected-event/InterruptionDetectedEvent.ta.mjs";

import { NotRecognizedEvent, _decode_NotRecognizedEvent, _encode_NotRecognizedEvent } from "../CSTA-not-recognized-event/NotRecognizedEvent.ta.mjs";

import { PlayEvent, _decode_PlayEvent, _encode_PlayEvent } from "../CSTA-play-event/PlayEvent.ta.mjs";

import { RecognizedEvent, _decode_RecognizedEvent, _encode_RecognizedEvent } from "../CSTA-recognized-event/RecognizedEvent.ta.mjs";

import { RecordEvent, _decode_RecordEvent, _encode_RecordEvent } from "../CSTA-record-event/RecordEvent.ta.mjs";

import { ReviewEvent, _decode_ReviewEvent, _encode_ReviewEvent } from "../CSTA-review-event/ReviewEvent.ta.mjs";

import { SilenceTimeoutExpiredEvent, _decode_SilenceTimeoutExpiredEvent, _encode_SilenceTimeoutExpiredEvent } from "../CSTA-silence-timeout-expired-event/SilenceTimeoutExpiredEvent.ta.mjs";

import { SpeechDetectedEvent, _decode_SpeechDetectedEvent, _encode_SpeechDetectedEvent } from "../CSTA-speech-detected-event/SpeechDetectedEvent.ta.mjs";

import { StartedEvent, _decode_StartedEvent, _encode_StartedEvent } from "../CSTA-started-event/StartedEvent.ta.mjs";

import { StopEvent, _decode_StopEvent, _encode_StopEvent } from "../CSTA-stop-event/StopEvent.ta.mjs";

import { SuspendPlayEvent, _decode_SuspendPlayEvent, _encode_SuspendPlayEvent } from "../CSTA-suspend-play-event/SuspendPlayEvent.ta.mjs";

import { SuspendRecordEvent, _decode_SuspendRecordEvent, _encode_SuspendRecordEvent } from "../CSTA-suspend-record-event/SuspendRecordEvent.ta.mjs";

import { VoiceAttributesChangeEvent, _decode_VoiceAttributesChangeEvent, _encode_VoiceAttributesChangeEvent } from "../CSTA-voice-attributes-change-event/VoiceAttributesChangeEvent.ta.mjs";

import { VoiceErrorOccuredEvent, _decode_VoiceErrorOccuredEvent, _encode_VoiceErrorOccuredEvent } from "../CSTA-voice-error-occured-event/VoiceErrorOccuredEvent.ta.mjs";



/**
 * @summary VoiceUnitEvents
 * @description
 *
 * Voice-unit event body of `cSTAEventReport` (ECMA-285 §10). Alternatives:
 * Bookmark Reached, Completed, DTMF Detected, Emptied, Interruption Detected,
 * Not Recognized, Play, Recognized, Record, Review, Started, Silence Timeout
 * Expired, Speech Detected, Stop, Suspend Play, Suspend Record, Voice
 * Attributes Change, Voice Error Occurred.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoiceUnitEvents  ::=  CHOICE
 * {    bookmarkReached            [ 7] IMPLICIT BookmarkReachedEvent,
 *     completed            [ 8] IMPLICIT CompletedEvent,
 *     dtmfDetected            [ 9] IMPLICIT DtmfDetectedEvent,
 *     emptied                [10] IMPLICIT EmptiedEvent,
 *     interruptionDetected        [11] IMPLICIT InterruptionDetectedEvent,
 *     notRecognized            [12] IMPLICIT NotRecognizedEvent,
 *     play                [ 0] IMPLICIT PlayEvent,
 *     recognized            [13] IMPLICIT RecognizedEvent,
 *     record                  [ 1] IMPLICIT RecordEvent,
 *     review                  [ 2] IMPLICIT ReviewEvent,
 *     silenceTimeoutExpired        [14] IMPLICIT SilenceTimeoutExpiredEvent,
 *     speechDetected            [15] IMPLICIT SpeechDetectedEvent,
 *     started                [16] IMPLICIT StartedEvent,
 *     stop                    [ 3] IMPLICIT StopEvent,
 *     suspendPlay              [ 4] IMPLICIT SuspendPlayEvent,
 *     suspendRecord             [ 5] IMPLICIT SuspendRecordEvent,
 *     voiceAttributesChange        [ 6] IMPLICIT VoiceAttributesChangeEvent,
 *     voiceErrorOccured        [17] IMPLICIT VoiceErrorOccuredEvent }
 * ```
 */
export
type VoiceUnitEvents =
    { bookmarkReached: BookmarkReachedEvent } /* CHOICE_ALT_ROOT */
    | { completed: CompletedEvent } /* CHOICE_ALT_ROOT */
    | { dtmfDetected: DtmfDetectedEvent } /* CHOICE_ALT_ROOT */
    | { emptied: EmptiedEvent } /* CHOICE_ALT_ROOT */
    | { interruptionDetected: InterruptionDetectedEvent } /* CHOICE_ALT_ROOT */
    | { notRecognized: NotRecognizedEvent } /* CHOICE_ALT_ROOT */
    | { play: PlayEvent } /* CHOICE_ALT_ROOT */
    | { recognized: RecognizedEvent } /* CHOICE_ALT_ROOT */
    | { record: RecordEvent } /* CHOICE_ALT_ROOT */
    | { review: ReviewEvent } /* CHOICE_ALT_ROOT */
    | { silenceTimeoutExpired: SilenceTimeoutExpiredEvent } /* CHOICE_ALT_ROOT */
    | { speechDetected: SpeechDetectedEvent } /* CHOICE_ALT_ROOT */
    | { started: StartedEvent } /* CHOICE_ALT_ROOT */
    | { stop: StopEvent } /* CHOICE_ALT_ROOT */
    | { suspendPlay: SuspendPlayEvent } /* CHOICE_ALT_ROOT */
    | { suspendRecord: SuspendRecordEvent } /* CHOICE_ALT_ROOT */
    | { voiceAttributesChange: VoiceAttributesChangeEvent } /* CHOICE_ALT_ROOT */
    | { voiceErrorOccured: VoiceErrorOccuredEvent } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_VoiceUnitEvents: $.ASN1Decoder<VoiceUnitEvents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VoiceUnitEvents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VoiceUnitEvents (el: _Element): VoiceUnitEvents {
    if (!_cached_decoder_for_VoiceUnitEvents) { _cached_decoder_for_VoiceUnitEvents = $._decode_inextensible_choice<VoiceUnitEvents>({
    "CONTEXT 7": [ "bookmarkReached", $._decode_implicit<BookmarkReachedEvent>(() => _decode_BookmarkReachedEvent) ],
    "CONTEXT 8": [ "completed", $._decode_implicit<CompletedEvent>(() => _decode_CompletedEvent) ],
    "CONTEXT 9": [ "dtmfDetected", $._decode_implicit<DtmfDetectedEvent>(() => _decode_DtmfDetectedEvent) ],
    "CONTEXT 10": [ "emptied", $._decode_implicit<EmptiedEvent>(() => _decode_EmptiedEvent) ],
    "CONTEXT 11": [ "interruptionDetected", $._decode_implicit<InterruptionDetectedEvent>(() => _decode_InterruptionDetectedEvent) ],
    "CONTEXT 12": [ "notRecognized", $._decode_implicit<NotRecognizedEvent>(() => _decode_NotRecognizedEvent) ],
    "CONTEXT 0": [ "play", $._decode_implicit<PlayEvent>(() => _decode_PlayEvent) ],
    "CONTEXT 13": [ "recognized", $._decode_implicit<RecognizedEvent>(() => _decode_RecognizedEvent) ],
    "CONTEXT 1": [ "record", $._decode_implicit<RecordEvent>(() => _decode_RecordEvent) ],
    "CONTEXT 2": [ "review", $._decode_implicit<ReviewEvent>(() => _decode_ReviewEvent) ],
    "CONTEXT 14": [ "silenceTimeoutExpired", $._decode_implicit<SilenceTimeoutExpiredEvent>(() => _decode_SilenceTimeoutExpiredEvent) ],
    "CONTEXT 15": [ "speechDetected", $._decode_implicit<SpeechDetectedEvent>(() => _decode_SpeechDetectedEvent) ],
    "CONTEXT 16": [ "started", $._decode_implicit<StartedEvent>(() => _decode_StartedEvent) ],
    "CONTEXT 3": [ "stop", $._decode_implicit<StopEvent>(() => _decode_StopEvent) ],
    "CONTEXT 4": [ "suspendPlay", $._decode_implicit<SuspendPlayEvent>(() => _decode_SuspendPlayEvent) ],
    "CONTEXT 5": [ "suspendRecord", $._decode_implicit<SuspendRecordEvent>(() => _decode_SuspendRecordEvent) ],
    "CONTEXT 6": [ "voiceAttributesChange", $._decode_implicit<VoiceAttributesChangeEvent>(() => _decode_VoiceAttributesChangeEvent) ],
    "CONTEXT 17": [ "voiceErrorOccured", $._decode_implicit<VoiceErrorOccuredEvent>(() => _decode_VoiceErrorOccuredEvent) ]
}); }
    return _cached_decoder_for_VoiceUnitEvents(el);
}

let _cached_encoder_for_VoiceUnitEvents: $.ASN1Encoder<VoiceUnitEvents> | null = null;

/**
 * @summary Encodes a(n) VoiceUnitEvents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VoiceUnitEvents, encoded as an ASN.1 Element.
 */
export
function _encode_VoiceUnitEvents (value: VoiceUnitEvents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VoiceUnitEvents) { _cached_encoder_for_VoiceUnitEvents = $._encode_choice<VoiceUnitEvents>({
    "bookmarkReached": $._encode_implicit(_TagClass.context, 7, () => _encode_BookmarkReachedEvent, $.BER),
    "completed": $._encode_implicit(_TagClass.context, 8, () => _encode_CompletedEvent, $.BER),
    "dtmfDetected": $._encode_implicit(_TagClass.context, 9, () => _encode_DtmfDetectedEvent, $.BER),
    "emptied": $._encode_implicit(_TagClass.context, 10, () => _encode_EmptiedEvent, $.BER),
    "interruptionDetected": $._encode_implicit(_TagClass.context, 11, () => _encode_InterruptionDetectedEvent, $.BER),
    "notRecognized": $._encode_implicit(_TagClass.context, 12, () => _encode_NotRecognizedEvent, $.BER),
    "play": $._encode_implicit(_TagClass.context, 0, () => _encode_PlayEvent, $.BER),
    "recognized": $._encode_implicit(_TagClass.context, 13, () => _encode_RecognizedEvent, $.BER),
    "record": $._encode_implicit(_TagClass.context, 1, () => _encode_RecordEvent, $.BER),
    "review": $._encode_implicit(_TagClass.context, 2, () => _encode_ReviewEvent, $.BER),
    "silenceTimeoutExpired": $._encode_implicit(_TagClass.context, 14, () => _encode_SilenceTimeoutExpiredEvent, $.BER),
    "speechDetected": $._encode_implicit(_TagClass.context, 15, () => _encode_SpeechDetectedEvent, $.BER),
    "started": $._encode_implicit(_TagClass.context, 16, () => _encode_StartedEvent, $.BER),
    "stop": $._encode_implicit(_TagClass.context, 3, () => _encode_StopEvent, $.BER),
    "suspendPlay": $._encode_implicit(_TagClass.context, 4, () => _encode_SuspendPlayEvent, $.BER),
    "suspendRecord": $._encode_implicit(_TagClass.context, 5, () => _encode_SuspendRecordEvent, $.BER),
    "voiceAttributesChange": $._encode_implicit(_TagClass.context, 6, () => _encode_VoiceAttributesChangeEvent, $.BER),
    "voiceErrorOccured": $._encode_implicit(_TagClass.context, 17, () => _encode_VoiceErrorOccuredEvent, $.BER),
}, $.BER); }
    return _cached_encoder_for_VoiceUnitEvents(value, elGetter);
}


/* eslint-enable */
