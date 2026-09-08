/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ButtonInformationEvent, _decode_ButtonInformationEvent, _encode_ButtonInformationEvent } from "../CSTA-button-information-event/ButtonInformationEvent.ta.mjs";
// export { ButtonInformationEvent, _decode_ButtonInformationEvent, _encode_ButtonInformationEvent } from "../CSTA-button-information-event/ButtonInformationEvent.ta.mjs";
import { ButtonPressEvent, _decode_ButtonPressEvent, _encode_ButtonPressEvent } from "../CSTA-button-press-event/ButtonPressEvent.ta.mjs";
// export { ButtonPressEvent, _decode_ButtonPressEvent, _encode_ButtonPressEvent } from "../CSTA-button-press-event/ButtonPressEvent.ta.mjs";
import { DisplayUpdatedEvent, _decode_DisplayUpdatedEvent, _encode_DisplayUpdatedEvent } from "../CSTA-display-updated-event/DisplayUpdatedEvent.ta.mjs";
// export { DisplayUpdatedEvent, _decode_DisplayUpdatedEvent, _encode_DisplayUpdatedEvent } from "../CSTA-display-updated-event/DisplayUpdatedEvent.ta.mjs";
import { HookswitchEvent, _decode_HookswitchEvent, _encode_HookswitchEvent } from "../CSTA-hookswitch-event/HookswitchEvent.ta.mjs";
// export { HookswitchEvent, _decode_HookswitchEvent, _encode_HookswitchEvent } from "../CSTA-hookswitch-event/HookswitchEvent.ta.mjs";
import { LampModeEvent, _decode_LampModeEvent, _encode_LampModeEvent } from "../CSTA-lamp-mode-event/LampModeEvent.ta.mjs";
// export { LampModeEvent, _decode_LampModeEvent, _encode_LampModeEvent } from "../CSTA-lamp-mode-event/LampModeEvent.ta.mjs";
import { MessageWaitingEvent, _decode_MessageWaitingEvent, _encode_MessageWaitingEvent } from "../CSTA-message-waiting-event/MessageWaitingEvent.ta.mjs";
// export { MessageWaitingEvent, _decode_MessageWaitingEvent, _encode_MessageWaitingEvent } from "../CSTA-message-waiting-event/MessageWaitingEvent.ta.mjs";
import { MicrophoneGainEvent, _decode_MicrophoneGainEvent, _encode_MicrophoneGainEvent } from "../CSTA-microphone-gain-event/MicrophoneGainEvent.ta.mjs";
// export { MicrophoneGainEvent, _decode_MicrophoneGainEvent, _encode_MicrophoneGainEvent } from "../CSTA-microphone-gain-event/MicrophoneGainEvent.ta.mjs";
import { MicrophoneMuteEvent, _decode_MicrophoneMuteEvent, _encode_MicrophoneMuteEvent } from "../CSTA-microphone-mute-event/MicrophoneMuteEvent.ta.mjs";
// export { MicrophoneMuteEvent, _decode_MicrophoneMuteEvent, _encode_MicrophoneMuteEvent } from "../CSTA-microphone-mute-event/MicrophoneMuteEvent.ta.mjs";
import { RingerStatusEvent, _decode_RingerStatusEvent, _encode_RingerStatusEvent } from "../CSTA-ringer-status-event/RingerStatusEvent.ta.mjs";
// export { RingerStatusEvent, _decode_RingerStatusEvent, _encode_RingerStatusEvent } from "../CSTA-ringer-status-event/RingerStatusEvent.ta.mjs";
import { SpeakerMuteEvent, _decode_SpeakerMuteEvent, _encode_SpeakerMuteEvent } from "../CSTA-speaker-mute-event/SpeakerMuteEvent.ta.mjs";
// export { SpeakerMuteEvent, _decode_SpeakerMuteEvent, _encode_SpeakerMuteEvent } from "../CSTA-speaker-mute-event/SpeakerMuteEvent.ta.mjs";
import { SpeakerVolumeEvent, _decode_SpeakerVolumeEvent, _encode_SpeakerVolumeEvent } from "../CSTA-speaker-volume-event/SpeakerVolumeEvent.ta.mjs";
// export { SpeakerVolumeEvent, _decode_SpeakerVolumeEvent, _encode_SpeakerVolumeEvent } from "../CSTA-speaker-volume-event/SpeakerVolumeEvent.ta.mjs";


/**
 * @summary PhysicalDeviceFeatureEvents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PhysicalDeviceFeatureEvents  ::=  CHOICE
 * {    buttonInformation         [ 0] IMPLICIT ButtonInformationEvent,
 *     buttonPress            [ 1] IMPLICIT ButtonPressEvent,
 *     displayUpdated            [ 2] IMPLICIT DisplayUpdatedEvent,
 *     hookswitch            [ 3] IMPLICIT HookswitchEvent,
 *     lampMode            [ 4] IMPLICIT LampModeEvent,
 *     messageWaiting            [ 5] IMPLICIT MessageWaitingEvent,
 *     microphoneGain            [ 6] IMPLICIT MicrophoneGainEvent,
 *     microphoneMute            [ 7] IMPLICIT MicrophoneMuteEvent,
 *     ringerStatus            [ 8] IMPLICIT RingerStatusEvent,
 *     speakerMute            [ 9] IMPLICIT SpeakerMuteEvent,
 *     speakerVolume            [10] IMPLICIT SpeakerVolumeEvent }
 * ```
 */
export
type PhysicalDeviceFeatureEvents =
    { buttonInformation: ButtonInformationEvent } /* CHOICE_ALT_ROOT */
    | { buttonPress: ButtonPressEvent } /* CHOICE_ALT_ROOT */
    | { displayUpdated: DisplayUpdatedEvent } /* CHOICE_ALT_ROOT */
    | { hookswitch: HookswitchEvent } /* CHOICE_ALT_ROOT */
    | { lampMode: LampModeEvent } /* CHOICE_ALT_ROOT */
    | { messageWaiting: MessageWaitingEvent } /* CHOICE_ALT_ROOT */
    | { microphoneGain: MicrophoneGainEvent } /* CHOICE_ALT_ROOT */
    | { microphoneMute: MicrophoneMuteEvent } /* CHOICE_ALT_ROOT */
    | { ringerStatus: RingerStatusEvent } /* CHOICE_ALT_ROOT */
    | { speakerMute: SpeakerMuteEvent } /* CHOICE_ALT_ROOT */
    | { speakerVolume: SpeakerVolumeEvent } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PhysicalDeviceFeatureEvents: $.ASN1Decoder<PhysicalDeviceFeatureEvents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeviceFeatureEvents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PhysicalDeviceFeatureEvents (el: _Element): PhysicalDeviceFeatureEvents {
    if (!_cached_decoder_for_PhysicalDeviceFeatureEvents) { _cached_decoder_for_PhysicalDeviceFeatureEvents = $._decode_inextensible_choice<PhysicalDeviceFeatureEvents>({
    "CONTEXT 0": [ "buttonInformation", $._decode_implicit<ButtonInformationEvent>(() => _decode_ButtonInformationEvent) ],
    "CONTEXT 1": [ "buttonPress", $._decode_implicit<ButtonPressEvent>(() => _decode_ButtonPressEvent) ],
    "CONTEXT 2": [ "displayUpdated", $._decode_implicit<DisplayUpdatedEvent>(() => _decode_DisplayUpdatedEvent) ],
    "CONTEXT 3": [ "hookswitch", $._decode_implicit<HookswitchEvent>(() => _decode_HookswitchEvent) ],
    "CONTEXT 4": [ "lampMode", $._decode_implicit<LampModeEvent>(() => _decode_LampModeEvent) ],
    "CONTEXT 5": [ "messageWaiting", $._decode_implicit<MessageWaitingEvent>(() => _decode_MessageWaitingEvent) ],
    "CONTEXT 6": [ "microphoneGain", $._decode_implicit<MicrophoneGainEvent>(() => _decode_MicrophoneGainEvent) ],
    "CONTEXT 7": [ "microphoneMute", $._decode_implicit<MicrophoneMuteEvent>(() => _decode_MicrophoneMuteEvent) ],
    "CONTEXT 8": [ "ringerStatus", $._decode_implicit<RingerStatusEvent>(() => _decode_RingerStatusEvent) ],
    "CONTEXT 9": [ "speakerMute", $._decode_implicit<SpeakerMuteEvent>(() => _decode_SpeakerMuteEvent) ],
    "CONTEXT 10": [ "speakerVolume", $._decode_implicit<SpeakerVolumeEvent>(() => _decode_SpeakerVolumeEvent) ]
}); }
    return _cached_decoder_for_PhysicalDeviceFeatureEvents(el);
}

let _cached_encoder_for_PhysicalDeviceFeatureEvents: $.ASN1Encoder<PhysicalDeviceFeatureEvents> | null = null;

/**
 * @summary Encodes a(n) PhysicalDeviceFeatureEvents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeviceFeatureEvents, encoded as an ASN.1 Element.
 */
export
function _encode_PhysicalDeviceFeatureEvents (value: PhysicalDeviceFeatureEvents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PhysicalDeviceFeatureEvents) { _cached_encoder_for_PhysicalDeviceFeatureEvents = $._encode_choice<PhysicalDeviceFeatureEvents>({
    "buttonInformation": $._encode_implicit(_TagClass.context, 0, () => _encode_ButtonInformationEvent, $.BER),
    "buttonPress": $._encode_implicit(_TagClass.context, 1, () => _encode_ButtonPressEvent, $.BER),
    "displayUpdated": $._encode_implicit(_TagClass.context, 2, () => _encode_DisplayUpdatedEvent, $.BER),
    "hookswitch": $._encode_implicit(_TagClass.context, 3, () => _encode_HookswitchEvent, $.BER),
    "lampMode": $._encode_implicit(_TagClass.context, 4, () => _encode_LampModeEvent, $.BER),
    "messageWaiting": $._encode_implicit(_TagClass.context, 5, () => _encode_MessageWaitingEvent, $.BER),
    "microphoneGain": $._encode_implicit(_TagClass.context, 6, () => _encode_MicrophoneGainEvent, $.BER),
    "microphoneMute": $._encode_implicit(_TagClass.context, 7, () => _encode_MicrophoneMuteEvent, $.BER),
    "ringerStatus": $._encode_implicit(_TagClass.context, 8, () => _encode_RingerStatusEvent, $.BER),
    "speakerMute": $._encode_implicit(_TagClass.context, 9, () => _encode_SpeakerMuteEvent, $.BER),
    "speakerVolume": $._encode_implicit(_TagClass.context, 10, () => _encode_SpeakerVolumeEvent, $.BER),
}, $.BER); }
    return _cached_encoder_for_PhysicalDeviceFeatureEvents(value, elGetter);
}


/* eslint-enable */
