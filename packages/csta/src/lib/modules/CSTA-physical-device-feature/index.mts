/**
 * @description
 *
 * Physical-device feature types: identifiers for auditory apparatus, buttons
 * (including reserved keypad 0–11), display, hookswitch, lamp, and ringer, plus
 * lamp mode/color/brightness and speaker/microphone volume and gain. ECMA-269
 * §12.3.4–5, §12.3.12, §12.3.14, §12.3.17, §12.3.26, clause 21; ECMA-285 §9.16.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
 */
export * from "./AuditoryApparatusID.ta.mjs";
export * from "./AuditoryApparatusList-Item-auditoryApparatusType.ta.mjs";
export * from "./AuditoryApparatusList-Item-hookswitch.ta.mjs";
export {
    type AuditoryApparatusList_Item_microphone,
    AuditoryApparatusList_Item_microphone_present,
    AuditoryApparatusList_Item_microphone_gainSettable,
    gainSettable,
    AuditoryApparatusList_Item_microphone_gainReadable,
    gainReadable,
    AuditoryApparatusList_Item_microphone_muteSettable,
    AuditoryApparatusList_Item_microphone_muteReadable,
    _decode_AuditoryApparatusList_Item_microphone,
    _encode_AuditoryApparatusList_Item_microphone,
} from "./AuditoryApparatusList-Item-microphone.ta.mjs";
export {
    type AuditoryApparatusList_Item_speaker,
    AuditoryApparatusList_Item_speaker_present,
    AuditoryApparatusList_Item_speaker_volumeSettable,
    volumeSettable,
    AuditoryApparatusList_Item_speaker_volumeReadable,
    volumeReadable,
    AuditoryApparatusList_Item_speaker_muteSettable,
    AuditoryApparatusList_Item_speaker_muteReadable,
    _decode_AuditoryApparatusList_Item_speaker,
    _encode_AuditoryApparatusList_Item_speaker,
} from "./AuditoryApparatusList-Item-speaker.ta.mjs";
export * from "./AuditoryApparatusList-Item.ta.mjs";
export * from "./AuditoryApparatusList.ta.mjs";
export * from "./ButtonID.ta.mjs";
export * from "./CharacterSet.ta.mjs";
export * from "./DisplayID.ta.mjs";
export * from "./HookswitchID.ta.mjs";
export * from "./LampBrightness.ta.mjs";
export {
    type LampColor,
    LampColor_noColor,
    noColor,
    LampColor_red,
    red,
    LampColor_yellow,
    yellow,
    LampColor_green,
    green,
    LampColor_blue,
    blue,
    LampColor_unknown,
    _decode_LampColor,
    _encode_LampColor,
} from "./LampColor.ta.mjs";
export * from "./LampID.ta.mjs";
export {
    type LampMode,
    LampMode_brokenFlutter,
    brokenFlutter,
    LampMode_flutter,
    flutter,
    LampMode_off,
    off,
    LampMode_steady,
    steady,
    LampMode_wink,
    wink,
    LampMode_unknown,
    _decode_LampMode,
    _encode_LampMode,
} from "./LampMode.ta.mjs";
export * from "./MicGainAbs.ta.mjs";
export {
    _enum_for_MicGainInc,
    MicGainInc,
    MicGainInc_increment,
    MicGainInc_decrement,
    _decode_MicGainInc,
    _encode_MicGainInc,
} from "./MicGainInc.ta.mjs";
export * from "./MicrophoneGain.ta.mjs";
export * from "./RingerID.ta.mjs";
export * from "./RingMode.ta.mjs";
export * from "./VolAbs.ta.mjs";
export {
    _enum_for_VolInc,
    VolInc,
    VolInc_increment,
    VolInc_decrement,
    _decode_VolInc,
    _encode_VolInc,
} from "./VolInc.ta.mjs";
export * from "./Volume.ta.mjs";
