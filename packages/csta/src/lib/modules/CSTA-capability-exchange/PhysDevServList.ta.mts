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
import { ButtonPress, ButtonPress_privateData /* IMPORTED_LONG_NAMED_BIT */, ButtonPress_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, ButtonPress_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_ButtonPress, _encode_ButtonPress } from "../CSTA-capability-exchange/ButtonPress.ta.mjs";
// export { ButtonPress, ButtonPress_privateData /* IMPORTED_LONG_NAMED_BIT */, ButtonPress_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, ButtonPress_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_ButtonPress, _encode_ButtonPress } from "../CSTA-capability-exchange/ButtonPress.ta.mjs";
import { GetAuditoryApparatusInfo, GetAuditoryApparatusInfo_auditoryApparatus /* IMPORTED_LONG_NAMED_BIT */, GetAuditoryApparatusInfo_privateData /* IMPORTED_LONG_NAMED_BIT */, GetAuditoryApparatusInfo_auditoryApparatusTypeSpeakerphone /* IMPORTED_LONG_NAMED_BIT */, auditoryApparatusTypeSpeakerphone /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_auditoryApparatusTypeHandset /* IMPORTED_LONG_NAMED_BIT */, auditoryApparatusTypeHandset /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_auditoryApparatusTypeHeadset /* IMPORTED_LONG_NAMED_BIT */, auditoryApparatusTypeHeadset /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_auditoryApparatusTypeSpeakerOnlyPhone /* IMPORTED_LONG_NAMED_BIT */, auditoryApparatusTypeSpeakerOnlyPhone /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_auditoryApparatusTypeother /* IMPORTED_LONG_NAMED_BIT */, auditoryApparatusTypeother /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_speakerPresent /* IMPORTED_LONG_NAMED_BIT */, speakerPresent /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_speakerVolumeSettable /* IMPORTED_LONG_NAMED_BIT */, speakerVolumeSettable /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_speakerVolumeReadable /* IMPORTED_LONG_NAMED_BIT */, speakerVolumeReadable /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_speakerMuteSettable /* IMPORTED_LONG_NAMED_BIT */, speakerMuteSettable /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_speakerMuteReadable /* IMPORTED_LONG_NAMED_BIT */, speakerMuteReadable /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_microphonePresent /* IMPORTED_LONG_NAMED_BIT */, microphonePresent /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_microphoneGainSettable /* IMPORTED_LONG_NAMED_BIT */, microphoneGainSettable /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_microphoneGainReadable /* IMPORTED_LONG_NAMED_BIT */, microphoneGainReadable /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_microphoneMuteSettable /* IMPORTED_LONG_NAMED_BIT */, microphoneMuteSettable /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_microphoneMuteReadable /* IMPORTED_LONG_NAMED_BIT */, microphoneMuteReadable /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_hookswitchSettable /* IMPORTED_LONG_NAMED_BIT */, hookswitchSettable /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_hookswitchOnHook /* IMPORTED_LONG_NAMED_BIT */, hookswitchOnHook /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetAuditoryApparatusInfo, _encode_GetAuditoryApparatusInfo } from "../CSTA-capability-exchange/GetAuditoryApparatusInfo.ta.mjs";
// export { GetAuditoryApparatusInfo, GetAuditoryApparatusInfo_auditoryApparatus /* IMPORTED_LONG_NAMED_BIT */, GetAuditoryApparatusInfo_privateData /* IMPORTED_LONG_NAMED_BIT */, GetAuditoryApparatusInfo_auditoryApparatusTypeSpeakerphone /* IMPORTED_LONG_NAMED_BIT */, auditoryApparatusTypeSpeakerphone /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_auditoryApparatusTypeHandset /* IMPORTED_LONG_NAMED_BIT */, auditoryApparatusTypeHandset /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_auditoryApparatusTypeHeadset /* IMPORTED_LONG_NAMED_BIT */, auditoryApparatusTypeHeadset /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_auditoryApparatusTypeSpeakerOnlyPhone /* IMPORTED_LONG_NAMED_BIT */, auditoryApparatusTypeSpeakerOnlyPhone /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_auditoryApparatusTypeother /* IMPORTED_LONG_NAMED_BIT */, auditoryApparatusTypeother /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_speakerPresent /* IMPORTED_LONG_NAMED_BIT */, speakerPresent /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_speakerVolumeSettable /* IMPORTED_LONG_NAMED_BIT */, speakerVolumeSettable /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_speakerVolumeReadable /* IMPORTED_LONG_NAMED_BIT */, speakerVolumeReadable /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_speakerMuteSettable /* IMPORTED_LONG_NAMED_BIT */, speakerMuteSettable /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_speakerMuteReadable /* IMPORTED_LONG_NAMED_BIT */, speakerMuteReadable /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_microphonePresent /* IMPORTED_LONG_NAMED_BIT */, microphonePresent /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_microphoneGainSettable /* IMPORTED_LONG_NAMED_BIT */, microphoneGainSettable /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_microphoneGainReadable /* IMPORTED_LONG_NAMED_BIT */, microphoneGainReadable /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_microphoneMuteSettable /* IMPORTED_LONG_NAMED_BIT */, microphoneMuteSettable /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_microphoneMuteReadable /* IMPORTED_LONG_NAMED_BIT */, microphoneMuteReadable /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_hookswitchSettable /* IMPORTED_LONG_NAMED_BIT */, hookswitchSettable /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_hookswitchOnHook /* IMPORTED_LONG_NAMED_BIT */, hookswitchOnHook /* IMPORTED_SHORT_NAMED_BIT */, GetAuditoryApparatusInfo_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetAuditoryApparatusInfo, _encode_GetAuditoryApparatusInfo } from "../CSTA-capability-exchange/GetAuditoryApparatusInfo.ta.mjs";
import { GetButtonInformation, GetButtonInformation_button /* IMPORTED_LONG_NAMED_BIT */, button /* IMPORTED_SHORT_NAMED_BIT */, GetButtonInformation_privateData /* IMPORTED_LONG_NAMED_BIT */, GetButtonInformation_buttonLabelInAck /* IMPORTED_LONG_NAMED_BIT */, buttonLabelInAck /* IMPORTED_SHORT_NAMED_BIT */, GetButtonInformation_buttonLabelSettableInAck /* IMPORTED_LONG_NAMED_BIT */, buttonLabelSettableInAck /* IMPORTED_SHORT_NAMED_BIT */, GetButtonInformation_buttonFunctionInAck /* IMPORTED_LONG_NAMED_BIT */, buttonFunctionInAck /* IMPORTED_SHORT_NAMED_BIT */, GetButtonInformation_buttonAssociatedNumberInAck /* IMPORTED_LONG_NAMED_BIT */, buttonAssociatedNumberInAck /* IMPORTED_SHORT_NAMED_BIT */, GetButtonInformation_buttonAssociatedNumberSettableInAck /* IMPORTED_LONG_NAMED_BIT */, buttonAssociatedNumberSettableInAck /* IMPORTED_SHORT_NAMED_BIT */, GetButtonInformation_listOfLampsInAck /* IMPORTED_LONG_NAMED_BIT */, listOfLampsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetButtonInformation_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetButtonInformation, _encode_GetButtonInformation } from "../CSTA-capability-exchange/GetButtonInformation.ta.mjs";
// export { GetButtonInformation, GetButtonInformation_button /* IMPORTED_LONG_NAMED_BIT */, button /* IMPORTED_SHORT_NAMED_BIT */, GetButtonInformation_privateData /* IMPORTED_LONG_NAMED_BIT */, GetButtonInformation_buttonLabelInAck /* IMPORTED_LONG_NAMED_BIT */, buttonLabelInAck /* IMPORTED_SHORT_NAMED_BIT */, GetButtonInformation_buttonLabelSettableInAck /* IMPORTED_LONG_NAMED_BIT */, buttonLabelSettableInAck /* IMPORTED_SHORT_NAMED_BIT */, GetButtonInformation_buttonFunctionInAck /* IMPORTED_LONG_NAMED_BIT */, buttonFunctionInAck /* IMPORTED_SHORT_NAMED_BIT */, GetButtonInformation_buttonAssociatedNumberInAck /* IMPORTED_LONG_NAMED_BIT */, buttonAssociatedNumberInAck /* IMPORTED_SHORT_NAMED_BIT */, GetButtonInformation_buttonAssociatedNumberSettableInAck /* IMPORTED_LONG_NAMED_BIT */, buttonAssociatedNumberSettableInAck /* IMPORTED_SHORT_NAMED_BIT */, GetButtonInformation_listOfLampsInAck /* IMPORTED_LONG_NAMED_BIT */, listOfLampsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetButtonInformation_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetButtonInformation, _encode_GetButtonInformation } from "../CSTA-capability-exchange/GetButtonInformation.ta.mjs";
import { GetDisplay, GetDisplay_displayID /* IMPORTED_LONG_NAMED_BIT */, displayID /* IMPORTED_SHORT_NAMED_BIT */, GetDisplay_privateData /* IMPORTED_LONG_NAMED_BIT */, GetDisplay_characterSetASCII /* IMPORTED_LONG_NAMED_BIT */, characterSetASCII /* IMPORTED_SHORT_NAMED_BIT */, GetDisplay_characterSetUnicode /* IMPORTED_LONG_NAMED_BIT */, characterSetUnicode /* IMPORTED_SHORT_NAMED_BIT */, GetDisplay_characterSetProprietary /* IMPORTED_LONG_NAMED_BIT */, characterSetProprietary /* IMPORTED_SHORT_NAMED_BIT */, GetDisplay_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetDisplay, _encode_GetDisplay } from "../CSTA-capability-exchange/GetDisplay.ta.mjs";
// export { GetDisplay, GetDisplay_displayID /* IMPORTED_LONG_NAMED_BIT */, displayID /* IMPORTED_SHORT_NAMED_BIT */, GetDisplay_privateData /* IMPORTED_LONG_NAMED_BIT */, GetDisplay_characterSetASCII /* IMPORTED_LONG_NAMED_BIT */, characterSetASCII /* IMPORTED_SHORT_NAMED_BIT */, GetDisplay_characterSetUnicode /* IMPORTED_LONG_NAMED_BIT */, characterSetUnicode /* IMPORTED_SHORT_NAMED_BIT */, GetDisplay_characterSetProprietary /* IMPORTED_LONG_NAMED_BIT */, characterSetProprietary /* IMPORTED_SHORT_NAMED_BIT */, GetDisplay_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetDisplay, _encode_GetDisplay } from "../CSTA-capability-exchange/GetDisplay.ta.mjs";
import { GetHookSwitchStatus, GetHookSwitchStatus_hookSwitch /* IMPORTED_LONG_NAMED_BIT */, hookSwitch /* IMPORTED_SHORT_NAMED_BIT */, GetHookSwitchStatus_privateData /* IMPORTED_LONG_NAMED_BIT */, GetHookSwitchStatus_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetHookSwitchStatus, _encode_GetHookSwitchStatus } from "../CSTA-capability-exchange/GetHookSwitchStatus.ta.mjs";
// export { GetHookSwitchStatus, GetHookSwitchStatus_hookSwitch /* IMPORTED_LONG_NAMED_BIT */, hookSwitch /* IMPORTED_SHORT_NAMED_BIT */, GetHookSwitchStatus_privateData /* IMPORTED_LONG_NAMED_BIT */, GetHookSwitchStatus_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetHookSwitchStatus, _encode_GetHookSwitchStatus } from "../CSTA-capability-exchange/GetHookSwitchStatus.ta.mjs";
import { GetLampInfo, GetLampInfo_lamp /* IMPORTED_LONG_NAMED_BIT */, GetLampInfo_privateData /* IMPORTED_LONG_NAMED_BIT */, GetLampInfo_lampLabelInAck /* IMPORTED_LONG_NAMED_BIT */, lampLabelInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLampInfo_buttonInAck /* IMPORTED_LONG_NAMED_BIT */, GetLampInfo_lampColorInAck /* IMPORTED_LONG_NAMED_BIT */, GetLampInfo_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetLampInfo, _encode_GetLampInfo } from "../CSTA-capability-exchange/GetLampInfo.ta.mjs";
// export { GetLampInfo, GetLampInfo_lamp /* IMPORTED_LONG_NAMED_BIT */, GetLampInfo_privateData /* IMPORTED_LONG_NAMED_BIT */, GetLampInfo_lampLabelInAck /* IMPORTED_LONG_NAMED_BIT */, lampLabelInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLampInfo_buttonInAck /* IMPORTED_LONG_NAMED_BIT */, GetLampInfo_lampColorInAck /* IMPORTED_LONG_NAMED_BIT */, GetLampInfo_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetLampInfo, _encode_GetLampInfo } from "../CSTA-capability-exchange/GetLampInfo.ta.mjs";
import { GetLampMode, GetLampMode_lamp /* IMPORTED_LONG_NAMED_BIT */, GetLampMode_privateData /* IMPORTED_LONG_NAMED_BIT */, GetLampMode_lampModeInAck /* IMPORTED_LONG_NAMED_BIT */, lampModeInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLampMode_lampBrightnessNormal /* IMPORTED_LONG_NAMED_BIT */, GetLampMode_lampBrightnessDim /* IMPORTED_LONG_NAMED_BIT */, GetLampMode_lampBrightnessBright /* IMPORTED_LONG_NAMED_BIT */, GetLampMode_lampColorInAck /* IMPORTED_LONG_NAMED_BIT */, GetLampMode_buttonInAck /* IMPORTED_LONG_NAMED_BIT */, GetLampMode_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetLampMode, _encode_GetLampMode } from "../CSTA-capability-exchange/GetLampMode.ta.mjs";
// export { GetLampMode, GetLampMode_lamp /* IMPORTED_LONG_NAMED_BIT */, GetLampMode_privateData /* IMPORTED_LONG_NAMED_BIT */, GetLampMode_lampModeInAck /* IMPORTED_LONG_NAMED_BIT */, lampModeInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLampMode_lampBrightnessNormal /* IMPORTED_LONG_NAMED_BIT */, GetLampMode_lampBrightnessDim /* IMPORTED_LONG_NAMED_BIT */, GetLampMode_lampBrightnessBright /* IMPORTED_LONG_NAMED_BIT */, GetLampMode_lampColorInAck /* IMPORTED_LONG_NAMED_BIT */, GetLampMode_buttonInAck /* IMPORTED_LONG_NAMED_BIT */, GetLampMode_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetLampMode, _encode_GetLampMode } from "../CSTA-capability-exchange/GetLampMode.ta.mjs";
import { GetMessageWaitingIndicator, GetMessageWaitingIndicator_privateData /* IMPORTED_LONG_NAMED_BIT */, GetMessageWaitingIndicator_deviceForMsgInAck /* IMPORTED_LONG_NAMED_BIT */, deviceForMsgInAck /* IMPORTED_SHORT_NAMED_BIT */, GetMessageWaitingIndicator_lampIsPresentInAck /* IMPORTED_LONG_NAMED_BIT */, lampIsPresentInAck /* IMPORTED_SHORT_NAMED_BIT */, GetMessageWaitingIndicator_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetMessageWaitingIndicator, _encode_GetMessageWaitingIndicator } from "../CSTA-capability-exchange/GetMessageWaitingIndicator.ta.mjs";
// export { GetMessageWaitingIndicator, GetMessageWaitingIndicator_privateData /* IMPORTED_LONG_NAMED_BIT */, GetMessageWaitingIndicator_deviceForMsgInAck /* IMPORTED_LONG_NAMED_BIT */, deviceForMsgInAck /* IMPORTED_SHORT_NAMED_BIT */, GetMessageWaitingIndicator_lampIsPresentInAck /* IMPORTED_LONG_NAMED_BIT */, lampIsPresentInAck /* IMPORTED_SHORT_NAMED_BIT */, GetMessageWaitingIndicator_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetMessageWaitingIndicator, _encode_GetMessageWaitingIndicator } from "../CSTA-capability-exchange/GetMessageWaitingIndicator.ta.mjs";
import { GetMicrophoneGain, GetMicrophoneGain_auditoryApparatus /* IMPORTED_LONG_NAMED_BIT */, GetMicrophoneGain_privateData /* IMPORTED_LONG_NAMED_BIT */, GetMicrophoneGain_micGainAbsInAck /* IMPORTED_LONG_NAMED_BIT */, micGainAbsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetMicrophoneGain_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetMicrophoneGain, _encode_GetMicrophoneGain } from "../CSTA-capability-exchange/GetMicrophoneGain.ta.mjs";
// export { GetMicrophoneGain, GetMicrophoneGain_auditoryApparatus /* IMPORTED_LONG_NAMED_BIT */, GetMicrophoneGain_privateData /* IMPORTED_LONG_NAMED_BIT */, GetMicrophoneGain_micGainAbsInAck /* IMPORTED_LONG_NAMED_BIT */, micGainAbsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetMicrophoneGain_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetMicrophoneGain, _encode_GetMicrophoneGain } from "../CSTA-capability-exchange/GetMicrophoneGain.ta.mjs";
import { GetMicrophoneMute, GetMicrophoneMute_auditoryApparatus /* IMPORTED_LONG_NAMED_BIT */, GetMicrophoneMute_privateData /* IMPORTED_LONG_NAMED_BIT */, GetMicrophoneMute_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetMicrophoneMute, _encode_GetMicrophoneMute } from "../CSTA-capability-exchange/GetMicrophoneMute.ta.mjs";
// export { GetMicrophoneMute, GetMicrophoneMute_auditoryApparatus /* IMPORTED_LONG_NAMED_BIT */, GetMicrophoneMute_privateData /* IMPORTED_LONG_NAMED_BIT */, GetMicrophoneMute_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetMicrophoneMute, _encode_GetMicrophoneMute } from "../CSTA-capability-exchange/GetMicrophoneMute.ta.mjs";
import { GetRingerStatus, GetRingerStatus_ringer /* IMPORTED_LONG_NAMED_BIT */, ringer /* IMPORTED_SHORT_NAMED_BIT */, GetRingerStatus_privateData /* IMPORTED_LONG_NAMED_BIT */, GetRingerStatus_ringCountInAck /* IMPORTED_LONG_NAMED_BIT */, ringCountInAck /* IMPORTED_SHORT_NAMED_BIT */, GetRingerStatus_ringPatternInAck /* IMPORTED_LONG_NAMED_BIT */, ringPatternInAck /* IMPORTED_SHORT_NAMED_BIT */, GetRingerStatus_ringVolumeInAck /* IMPORTED_LONG_NAMED_BIT */, ringVolumeInAck /* IMPORTED_SHORT_NAMED_BIT */, GetRingerStatus_ringVolumeAbsInAck /* IMPORTED_LONG_NAMED_BIT */, ringVolumeAbsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetRingerStatus_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetRingerStatus, _encode_GetRingerStatus } from "../CSTA-capability-exchange/GetRingerStatus.ta.mjs";
// export { GetRingerStatus, GetRingerStatus_ringer /* IMPORTED_LONG_NAMED_BIT */, ringer /* IMPORTED_SHORT_NAMED_BIT */, GetRingerStatus_privateData /* IMPORTED_LONG_NAMED_BIT */, GetRingerStatus_ringCountInAck /* IMPORTED_LONG_NAMED_BIT */, ringCountInAck /* IMPORTED_SHORT_NAMED_BIT */, GetRingerStatus_ringPatternInAck /* IMPORTED_LONG_NAMED_BIT */, ringPatternInAck /* IMPORTED_SHORT_NAMED_BIT */, GetRingerStatus_ringVolumeInAck /* IMPORTED_LONG_NAMED_BIT */, ringVolumeInAck /* IMPORTED_SHORT_NAMED_BIT */, GetRingerStatus_ringVolumeAbsInAck /* IMPORTED_LONG_NAMED_BIT */, ringVolumeAbsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetRingerStatus_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetRingerStatus, _encode_GetRingerStatus } from "../CSTA-capability-exchange/GetRingerStatus.ta.mjs";
import { GetSpeakerMute, GetSpeakerMute_auditoryApparatus /* IMPORTED_LONG_NAMED_BIT */, GetSpeakerMute_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, GetSpeakerMute_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_GetSpeakerMute, _encode_GetSpeakerMute } from "../CSTA-capability-exchange/GetSpeakerMute.ta.mjs";
// export { GetSpeakerMute, GetSpeakerMute_auditoryApparatus /* IMPORTED_LONG_NAMED_BIT */, GetSpeakerMute_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, GetSpeakerMute_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_GetSpeakerMute, _encode_GetSpeakerMute } from "../CSTA-capability-exchange/GetSpeakerMute.ta.mjs";
import { GetSpeakerVolume, GetSpeakerVolume_auditoryApparatus /* IMPORTED_LONG_NAMED_BIT */, GetSpeakerVolume_privateData /* IMPORTED_LONG_NAMED_BIT */, GetSpeakerVolume_speakerVolAbsInAck /* IMPORTED_LONG_NAMED_BIT */, speakerVolAbsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetSpeakerVolume_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetSpeakerVolume, _encode_GetSpeakerVolume } from "../CSTA-capability-exchange/GetSpeakerVolume.ta.mjs";
// export { GetSpeakerVolume, GetSpeakerVolume_auditoryApparatus /* IMPORTED_LONG_NAMED_BIT */, GetSpeakerVolume_privateData /* IMPORTED_LONG_NAMED_BIT */, GetSpeakerVolume_speakerVolAbsInAck /* IMPORTED_LONG_NAMED_BIT */, speakerVolAbsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetSpeakerVolume_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetSpeakerVolume, _encode_GetSpeakerVolume } from "../CSTA-capability-exchange/GetSpeakerVolume.ta.mjs";
import { SetButtonInformation, SetButtonInformation_buttonLabel /* IMPORTED_LONG_NAMED_BIT */, buttonLabel /* IMPORTED_SHORT_NAMED_BIT */, SetButtonInformation_buttonAssociatedNumber /* IMPORTED_LONG_NAMED_BIT */, buttonAssociatedNumber /* IMPORTED_SHORT_NAMED_BIT */, SetButtonInformation_privateData /* IMPORTED_LONG_NAMED_BIT */, SetButtonInformation_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetButtonInformation_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetButtonInformation, _encode_SetButtonInformation } from "../CSTA-capability-exchange/SetButtonInformation.ta.mjs";
// export { SetButtonInformation, SetButtonInformation_buttonLabel /* IMPORTED_LONG_NAMED_BIT */, buttonLabel /* IMPORTED_SHORT_NAMED_BIT */, SetButtonInformation_buttonAssociatedNumber /* IMPORTED_LONG_NAMED_BIT */, buttonAssociatedNumber /* IMPORTED_SHORT_NAMED_BIT */, SetButtonInformation_privateData /* IMPORTED_LONG_NAMED_BIT */, SetButtonInformation_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetButtonInformation_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetButtonInformation, _encode_SetButtonInformation } from "../CSTA-capability-exchange/SetButtonInformation.ta.mjs";
import { SetDisplay, SetDisplay_physBaseRowNumber /* IMPORTED_LONG_NAMED_BIT */, physBaseRowNumber /* IMPORTED_SHORT_NAMED_BIT */, SetDisplay_physColumnRowNumber /* IMPORTED_LONG_NAMED_BIT */, physColumnRowNumber /* IMPORTED_SHORT_NAMED_BIT */, SetDisplay_offset /* IMPORTED_LONG_NAMED_BIT */, offset /* IMPORTED_SHORT_NAMED_BIT */, SetDisplay_privateData /* IMPORTED_LONG_NAMED_BIT */, SetDisplay_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetDisplay_supportsModifyingPosition /* IMPORTED_LONG_NAMED_BIT */, supportsModifyingPosition /* IMPORTED_SHORT_NAMED_BIT */, SetDisplay_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetDisplay, _encode_SetDisplay } from "../CSTA-capability-exchange/SetDisplay.ta.mjs";
// export { SetDisplay, SetDisplay_physBaseRowNumber /* IMPORTED_LONG_NAMED_BIT */, physBaseRowNumber /* IMPORTED_SHORT_NAMED_BIT */, SetDisplay_physColumnRowNumber /* IMPORTED_LONG_NAMED_BIT */, physColumnRowNumber /* IMPORTED_SHORT_NAMED_BIT */, SetDisplay_offset /* IMPORTED_LONG_NAMED_BIT */, offset /* IMPORTED_SHORT_NAMED_BIT */, SetDisplay_privateData /* IMPORTED_LONG_NAMED_BIT */, SetDisplay_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetDisplay_supportsModifyingPosition /* IMPORTED_LONG_NAMED_BIT */, supportsModifyingPosition /* IMPORTED_SHORT_NAMED_BIT */, SetDisplay_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetDisplay, _encode_SetDisplay } from "../CSTA-capability-exchange/SetDisplay.ta.mjs";
import { SetHookSwitchStatus, SetHookSwitchStatus_privateData /* IMPORTED_LONG_NAMED_BIT */, SetHookSwitchStatus_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetHookSwitchStatus, _encode_SetHookSwitchStatus } from "../CSTA-capability-exchange/SetHookSwitchStatus.ta.mjs";
// export { SetHookSwitchStatus, SetHookSwitchStatus_privateData /* IMPORTED_LONG_NAMED_BIT */, SetHookSwitchStatus_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetHookSwitchStatus, _encode_SetHookSwitchStatus } from "../CSTA-capability-exchange/SetHookSwitchStatus.ta.mjs";
import { SetLampMode, SetLampMode_lampModeBrokenFlutter /* IMPORTED_LONG_NAMED_BIT */, lampModeBrokenFlutter /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeFlutter /* IMPORTED_LONG_NAMED_BIT */, lampModeFlutter /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeOff /* IMPORTED_LONG_NAMED_BIT */, lampModeOff /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSteady /* IMPORTED_LONG_NAMED_BIT */, lampModeSteady /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeWink /* IMPORTED_LONG_NAMED_BIT */, lampModeWink /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeReserved /* IMPORTED_LONG_NAMED_BIT */, lampModeReserved /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf0 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf0 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf1 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf1 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf2 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf2 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf3 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf3 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf4 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf4 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf5 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf5 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf6 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf6 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf7 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf7 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf8 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf8 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf9 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf9 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf10 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf10 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf11 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf11 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf12 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf12 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf13 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf13 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf14 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf14 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf15 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf15 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf16 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf16 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf17 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf17 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf18 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf18 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf19 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf19 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf20 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf20 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf21 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf21 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf22 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf22 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf23 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf23 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf24 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf24 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf25 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf25 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf26 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf26 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf27 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf27 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf28 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf28 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf29 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf29 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf30 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf30 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf31 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf31 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf32 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf32 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf33 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf33 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf34 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf34 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf35 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf35 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf36 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf36 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf37 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf37 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf38 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf38 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf39 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf39 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf40 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf40 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf41 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf41 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf42 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf42 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf43 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf43 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf44 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf44 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf45 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf45 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf46 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf46 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf47 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf47 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf48 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf48 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf49 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf49 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf50 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf50 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf51 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf51 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf52 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf52 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf53 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf53 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf54 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf54 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf55 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf55 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf56 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf56 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf57 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf57 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf58 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf58 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf59 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf59 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf60 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf60 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf61 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf61 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf62 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf62 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf63 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf63 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf64 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf64 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf65 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf65 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf66 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf66 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf67 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf67 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf68 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf68 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf69 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf69 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf70 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf70 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf71 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf71 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf72 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf72 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf73 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf73 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf74 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf74 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf75 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf75 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf76 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf76 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf77 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf77 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf78 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf78 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf79 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf79 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf80 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf80 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf81 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf81 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf82 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf82 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf83 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf83 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf84 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf84 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf85 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf85 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf86 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf86 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf87 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf87 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf88 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf88 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf89 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf89 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf90 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf90 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf91 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf91 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf92 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf92 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf93 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf93 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf94 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf94 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampBrightnessNormal /* IMPORTED_LONG_NAMED_BIT */, SetLampMode_lampBrightnessDim /* IMPORTED_LONG_NAMED_BIT */, SetLampMode_lampBrightnessBright /* IMPORTED_LONG_NAMED_BIT */, SetLampMode_lampColorNoColor /* IMPORTED_LONG_NAMED_BIT */, lampColorNoColor /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorRed /* IMPORTED_LONG_NAMED_BIT */, lampColorRed /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorYellow /* IMPORTED_LONG_NAMED_BIT */, lampColorYellow /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorGreen /* IMPORTED_LONG_NAMED_BIT */, lampColorGreen /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorBlue /* IMPORTED_LONG_NAMED_BIT */, lampColorBlue /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorReserved /* IMPORTED_LONG_NAMED_BIT */, lampColorReserved /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf0 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf0 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf1 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf1 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf2 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf2 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf3 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf3 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf4 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf4 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf5 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf5 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf6 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf6 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf7 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf7 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf8 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf8 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf9 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf9 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf10 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf10 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf11 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf11 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf12 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf12 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf13 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf13 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf14 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf14 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf15 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf15 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf16 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf16 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf17 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf17 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf18 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf18 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf19 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf19 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf20 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf20 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf21 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf21 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf22 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf22 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf23 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf23 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf24 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf24 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf25 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf25 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf26 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf26 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf27 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf27 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf28 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf28 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf29 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf29 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf30 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf30 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf31 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf31 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf32 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf32 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf33 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf33 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf34 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf34 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf35 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf35 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf36 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf36 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf37 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf37 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf38 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf38 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf39 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf39 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf40 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf40 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf41 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf41 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf42 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf42 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf43 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf43 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf44 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf44 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf45 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf45 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf46 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf46 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf47 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf47 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf48 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf48 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf49 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf49 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf50 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf50 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf51 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf51 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf52 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf52 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf53 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf53 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf54 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf54 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf55 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf55 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf56 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf56 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf57 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf57 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf58 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf58 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf59 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf59 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf60 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf60 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf61 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf61 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf62 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf62 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf63 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf63 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf64 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf64 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf65 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf65 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf66 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf66 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf67 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf67 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf68 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf68 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf69 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf69 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf70 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf70 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf71 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf71 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf72 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf72 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf73 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf73 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf74 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf74 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf75 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf75 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf76 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf76 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf77 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf77 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf78 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf78 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf79 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf79 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf80 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf80 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf81 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf81 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf82 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf82 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf83 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf83 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf84 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf84 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf85 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf85 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf86 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf86 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf87 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf87 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf88 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf88 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf89 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf89 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf90 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf90 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf91 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf91 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf92 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf92 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf93 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf93 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf94 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf94 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_privateData /* IMPORTED_LONG_NAMED_BIT */, SetLampMode_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetLampMode_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetLampMode, _encode_SetLampMode } from "../CSTA-capability-exchange/SetLampMode.ta.mjs";
// export { SetLampMode, SetLampMode_lampModeBrokenFlutter /* IMPORTED_LONG_NAMED_BIT */, lampModeBrokenFlutter /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeFlutter /* IMPORTED_LONG_NAMED_BIT */, lampModeFlutter /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeOff /* IMPORTED_LONG_NAMED_BIT */, lampModeOff /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSteady /* IMPORTED_LONG_NAMED_BIT */, lampModeSteady /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeWink /* IMPORTED_LONG_NAMED_BIT */, lampModeWink /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeReserved /* IMPORTED_LONG_NAMED_BIT */, lampModeReserved /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf0 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf0 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf1 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf1 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf2 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf2 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf3 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf3 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf4 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf4 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf5 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf5 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf6 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf6 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf7 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf7 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf8 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf8 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf9 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf9 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf10 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf10 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf11 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf11 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf12 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf12 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf13 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf13 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf14 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf14 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf15 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf15 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf16 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf16 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf17 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf17 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf18 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf18 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf19 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf19 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf20 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf20 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf21 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf21 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf22 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf22 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf23 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf23 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf24 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf24 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf25 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf25 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf26 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf26 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf27 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf27 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf28 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf28 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf29 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf29 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf30 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf30 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf31 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf31 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf32 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf32 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf33 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf33 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf34 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf34 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf35 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf35 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf36 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf36 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf37 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf37 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf38 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf38 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf39 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf39 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf40 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf40 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf41 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf41 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf42 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf42 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf43 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf43 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf44 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf44 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf45 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf45 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf46 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf46 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf47 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf47 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf48 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf48 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf49 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf49 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf50 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf50 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf51 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf51 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf52 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf52 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf53 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf53 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf54 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf54 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf55 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf55 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf56 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf56 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf57 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf57 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf58 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf58 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf59 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf59 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf60 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf60 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf61 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf61 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf62 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf62 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf63 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf63 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf64 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf64 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf65 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf65 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf66 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf66 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf67 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf67 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf68 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf68 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf69 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf69 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf70 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf70 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf71 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf71 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf72 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf72 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf73 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf73 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf74 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf74 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf75 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf75 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf76 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf76 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf77 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf77 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf78 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf78 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf79 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf79 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf80 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf80 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf81 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf81 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf82 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf82 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf83 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf83 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf84 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf84 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf85 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf85 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf86 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf86 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf87 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf87 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf88 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf88 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf89 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf89 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf90 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf90 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf91 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf91 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf92 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf92 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf93 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf93 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampModeSf94 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf94 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampBrightnessNormal /* IMPORTED_LONG_NAMED_BIT */, SetLampMode_lampBrightnessDim /* IMPORTED_LONG_NAMED_BIT */, SetLampMode_lampBrightnessBright /* IMPORTED_LONG_NAMED_BIT */, SetLampMode_lampColorNoColor /* IMPORTED_LONG_NAMED_BIT */, lampColorNoColor /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorRed /* IMPORTED_LONG_NAMED_BIT */, lampColorRed /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorYellow /* IMPORTED_LONG_NAMED_BIT */, lampColorYellow /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorGreen /* IMPORTED_LONG_NAMED_BIT */, lampColorGreen /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorBlue /* IMPORTED_LONG_NAMED_BIT */, lampColorBlue /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorReserved /* IMPORTED_LONG_NAMED_BIT */, lampColorReserved /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf0 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf0 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf1 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf1 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf2 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf2 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf3 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf3 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf4 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf4 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf5 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf5 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf6 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf6 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf7 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf7 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf8 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf8 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf9 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf9 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf10 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf10 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf11 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf11 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf12 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf12 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf13 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf13 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf14 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf14 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf15 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf15 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf16 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf16 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf17 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf17 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf18 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf18 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf19 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf19 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf20 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf20 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf21 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf21 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf22 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf22 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf23 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf23 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf24 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf24 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf25 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf25 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf26 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf26 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf27 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf27 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf28 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf28 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf29 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf29 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf30 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf30 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf31 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf31 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf32 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf32 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf33 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf33 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf34 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf34 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf35 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf35 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf36 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf36 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf37 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf37 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf38 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf38 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf39 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf39 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf40 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf40 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf41 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf41 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf42 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf42 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf43 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf43 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf44 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf44 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf45 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf45 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf46 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf46 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf47 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf47 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf48 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf48 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf49 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf49 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf50 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf50 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf51 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf51 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf52 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf52 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf53 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf53 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf54 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf54 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf55 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf55 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf56 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf56 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf57 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf57 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf58 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf58 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf59 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf59 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf60 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf60 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf61 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf61 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf62 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf62 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf63 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf63 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf64 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf64 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf65 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf65 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf66 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf66 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf67 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf67 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf68 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf68 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf69 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf69 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf70 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf70 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf71 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf71 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf72 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf72 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf73 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf73 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf74 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf74 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf75 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf75 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf76 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf76 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf77 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf77 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf78 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf78 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf79 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf79 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf80 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf80 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf81 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf81 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf82 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf82 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf83 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf83 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf84 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf84 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf85 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf85 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf86 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf86 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf87 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf87 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf88 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf88 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf89 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf89 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf90 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf90 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf91 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf91 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf92 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf92 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf93 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf93 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_lampColorSf94 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf94 /* IMPORTED_SHORT_NAMED_BIT */, SetLampMode_privateData /* IMPORTED_LONG_NAMED_BIT */, SetLampMode_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetLampMode_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetLampMode, _encode_SetLampMode } from "../CSTA-capability-exchange/SetLampMode.ta.mjs";
import { SetMessageWaitingIndicator, SetMessageWaitingIndicator_deviceForMsg /* IMPORTED_LONG_NAMED_BIT */, deviceForMsg /* IMPORTED_SHORT_NAMED_BIT */, SetMessageWaitingIndicator_privateData /* IMPORTED_LONG_NAMED_BIT */, SetMessageWaitingIndicator_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetMessageWaitingIndicator_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetMessageWaitingIndicator, _encode_SetMessageWaitingIndicator } from "../CSTA-capability-exchange/SetMessageWaitingIndicator.ta.mjs";
// export { SetMessageWaitingIndicator, SetMessageWaitingIndicator_deviceForMsg /* IMPORTED_LONG_NAMED_BIT */, deviceForMsg /* IMPORTED_SHORT_NAMED_BIT */, SetMessageWaitingIndicator_privateData /* IMPORTED_LONG_NAMED_BIT */, SetMessageWaitingIndicator_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetMessageWaitingIndicator_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetMessageWaitingIndicator, _encode_SetMessageWaitingIndicator } from "../CSTA-capability-exchange/SetMessageWaitingIndicator.ta.mjs";
import { SetMicrophoneGain, SetMicrophoneGain_microphoneGainAbs /* IMPORTED_LONG_NAMED_BIT */, microphoneGainAbs /* IMPORTED_SHORT_NAMED_BIT */, SetMicrophoneGain_microphoneGainInc /* IMPORTED_LONG_NAMED_BIT */, microphoneGainInc /* IMPORTED_SHORT_NAMED_BIT */, SetMicrophoneGain_privateData /* IMPORTED_LONG_NAMED_BIT */, SetMicrophoneGain_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetMicrophoneGain_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetMicrophoneGain, _encode_SetMicrophoneGain } from "../CSTA-capability-exchange/SetMicrophoneGain.ta.mjs";
// export { SetMicrophoneGain, SetMicrophoneGain_microphoneGainAbs /* IMPORTED_LONG_NAMED_BIT */, microphoneGainAbs /* IMPORTED_SHORT_NAMED_BIT */, SetMicrophoneGain_microphoneGainInc /* IMPORTED_LONG_NAMED_BIT */, microphoneGainInc /* IMPORTED_SHORT_NAMED_BIT */, SetMicrophoneGain_privateData /* IMPORTED_LONG_NAMED_BIT */, SetMicrophoneGain_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetMicrophoneGain_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetMicrophoneGain, _encode_SetMicrophoneGain } from "../CSTA-capability-exchange/SetMicrophoneGain.ta.mjs";
import { SetMicrophoneMute, SetMicrophoneMute_privateData /* IMPORTED_LONG_NAMED_BIT */, SetMicrophoneMute_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetMicrophoneMute_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetMicrophoneMute, _encode_SetMicrophoneMute } from "../CSTA-capability-exchange/SetMicrophoneMute.ta.mjs";
// export { SetMicrophoneMute, SetMicrophoneMute_privateData /* IMPORTED_LONG_NAMED_BIT */, SetMicrophoneMute_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetMicrophoneMute_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetMicrophoneMute, _encode_SetMicrophoneMute } from "../CSTA-capability-exchange/SetMicrophoneMute.ta.mjs";
import { SetRingerStatus, SetRingerStatus_ringerModeRinging /* IMPORTED_LONG_NAMED_BIT */, ringerModeRinging /* IMPORTED_SHORT_NAMED_BIT */, SetRingerStatus_ringerModeNotRinging /* IMPORTED_LONG_NAMED_BIT */, ringerModeNotRinging /* IMPORTED_SHORT_NAMED_BIT */, SetRingerStatus_ringVolumeAbs /* IMPORTED_LONG_NAMED_BIT */, ringVolumeAbs /* IMPORTED_SHORT_NAMED_BIT */, SetRingerStatus_ringVolumeInc /* IMPORTED_LONG_NAMED_BIT */, ringVolumeInc /* IMPORTED_SHORT_NAMED_BIT */, SetRingerStatus_privateData /* IMPORTED_LONG_NAMED_BIT */, SetRingerStatus_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetRingerStatus_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetRingerStatus, _encode_SetRingerStatus } from "../CSTA-capability-exchange/SetRingerStatus.ta.mjs";
// export { SetRingerStatus, SetRingerStatus_ringerModeRinging /* IMPORTED_LONG_NAMED_BIT */, ringerModeRinging /* IMPORTED_SHORT_NAMED_BIT */, SetRingerStatus_ringerModeNotRinging /* IMPORTED_LONG_NAMED_BIT */, ringerModeNotRinging /* IMPORTED_SHORT_NAMED_BIT */, SetRingerStatus_ringVolumeAbs /* IMPORTED_LONG_NAMED_BIT */, ringVolumeAbs /* IMPORTED_SHORT_NAMED_BIT */, SetRingerStatus_ringVolumeInc /* IMPORTED_LONG_NAMED_BIT */, ringVolumeInc /* IMPORTED_SHORT_NAMED_BIT */, SetRingerStatus_privateData /* IMPORTED_LONG_NAMED_BIT */, SetRingerStatus_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetRingerStatus_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetRingerStatus, _encode_SetRingerStatus } from "../CSTA-capability-exchange/SetRingerStatus.ta.mjs";
import { SetSpeakerMute, SetSpeakerMute_privateData /* IMPORTED_LONG_NAMED_BIT */, SetSpeakerMute_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetSpeakerMute_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetSpeakerMute, _encode_SetSpeakerMute } from "../CSTA-capability-exchange/SetSpeakerMute.ta.mjs";
// export { SetSpeakerMute, SetSpeakerMute_privateData /* IMPORTED_LONG_NAMED_BIT */, SetSpeakerMute_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetSpeakerMute_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SetSpeakerMute, _encode_SetSpeakerMute } from "../CSTA-capability-exchange/SetSpeakerMute.ta.mjs";
import { SetSpeakerVolume, SetSpeakerVolume_speakerVolumeAbs /* IMPORTED_LONG_NAMED_BIT */, speakerVolumeAbs /* IMPORTED_SHORT_NAMED_BIT */, SetSpeakerVolume_speakerVolumeInc /* IMPORTED_LONG_NAMED_BIT */, speakerVolumeInc /* IMPORTED_SHORT_NAMED_BIT */, SetSpeakerVolume_privateData /* IMPORTED_LONG_NAMED_BIT */, SetSpeakerVolume_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetSpeakerVolume_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, SetSpeakerVolume_resettedAfterCall /* IMPORTED_LONG_NAMED_BIT */, resettedAfterCall /* IMPORTED_SHORT_NAMED_BIT */, SetSpeakerVolume_notSettableWhileActive /* IMPORTED_LONG_NAMED_BIT */, notSettableWhileActive /* IMPORTED_SHORT_NAMED_BIT */, _decode_SetSpeakerVolume, _encode_SetSpeakerVolume } from "../CSTA-capability-exchange/SetSpeakerVolume.ta.mjs";
// export { SetSpeakerVolume, SetSpeakerVolume_speakerVolumeAbs /* IMPORTED_LONG_NAMED_BIT */, speakerVolumeAbs /* IMPORTED_SHORT_NAMED_BIT */, SetSpeakerVolume_speakerVolumeInc /* IMPORTED_LONG_NAMED_BIT */, speakerVolumeInc /* IMPORTED_SHORT_NAMED_BIT */, SetSpeakerVolume_privateData /* IMPORTED_LONG_NAMED_BIT */, SetSpeakerVolume_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SetSpeakerVolume_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, SetSpeakerVolume_resettedAfterCall /* IMPORTED_LONG_NAMED_BIT */, resettedAfterCall /* IMPORTED_SHORT_NAMED_BIT */, SetSpeakerVolume_notSettableWhileActive /* IMPORTED_LONG_NAMED_BIT */, notSettableWhileActive /* IMPORTED_SHORT_NAMED_BIT */, _decode_SetSpeakerVolume, _encode_SetSpeakerVolume } from "../CSTA-capability-exchange/SetSpeakerVolume.ta.mjs";


/**
 * @summary PhysDevServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PhysDevServList ::= SEQUENCE
 * {     buttonPress             [ 0] IMPLICIT ButtonPress             OPTIONAL,
 *     getAuditoryApparatusInfo     [ 1] IMPLICIT GetAuditoryApparatusInfo         OPTIONAL,
 *     getButtonInformation         [ 2] IMPLICIT GetButtonInformation         OPTIONAL,
 *     getDisplay             [ 3] IMPLICIT GetDisplay             OPTIONAL,
 *     getHookSwitchStatus         [ 4] IMPLICIT GetHookSwitchStatus         OPTIONAL,
 *     getLampInfo             [ 5] IMPLICIT GetLampInfo             OPTIONAL,
 *     getLampMode             [ 6] IMPLICIT GetLampMode             OPTIONAL,
 *     getMessageWaitingIndicator     [ 7] IMPLICIT GetMessageWaitingIndicator     OPTIONAL,
 *     getMicrophoneGain         [ 8] IMPLICIT GetMicrophoneGain         OPTIONAL,
 *     getMicrophoneMute         [ 9] IMPLICIT GetMicrophoneMute         OPTIONAL,
 *     getRingerStatus         [10] IMPLICIT GetRingerStatus             OPTIONAL,
 *     getSpeakerMute             [11] IMPLICIT GetSpeakerMute             OPTIONAL,
 *     getSpeakerVolume         [12] IMPLICIT GetSpeakerVolume             OPTIONAL,
 *     setButtonInformation         [13] IMPLICIT SetButtonInformation         OPTIONAL,
 *     setDisplay             [14] IMPLICIT SetDisplay             OPTIONAL,
 *     setHookSwitchStatus         [15] IMPLICIT SetHookSwitchStatus         OPTIONAL,
 *     setLampMode             [16] IMPLICIT SetLampMode             OPTIONAL,
 *     setMessageWaitingIndicator     [17] IMPLICIT SetMessageWaitingIndicator     OPTIONAL,
 *     setMicrophoneGain         [18] IMPLICIT SetMicrophoneGain         OPTIONAL,
 *     setMicrophoneMute         [19] IMPLICIT SetMicrophoneMute         OPTIONAL,
 *     setRingerStatus         [20] IMPLICIT SetRingerStatus             OPTIONAL,
 *     setSpeakerMute             [21] IMPLICIT SetSpeakerMute             OPTIONAL,
 *     setSpeakerVolume         [22] IMPLICIT SetSpeakerVolume             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class PhysDevServList {
    constructor (
        /**
         * @summary `buttonPress`.
         * @public
         * @readonly
         */
        readonly buttonPress: OPTIONAL<ButtonPress>,
        /**
         * @summary `getAuditoryApparatusInfo`.
         * @public
         * @readonly
         */
        readonly getAuditoryApparatusInfo: OPTIONAL<GetAuditoryApparatusInfo>,
        /**
         * @summary `getButtonInformation`.
         * @public
         * @readonly
         */
        readonly getButtonInformation: OPTIONAL<GetButtonInformation>,
        /**
         * @summary `getDisplay`.
         * @public
         * @readonly
         */
        readonly getDisplay: OPTIONAL<GetDisplay>,
        /**
         * @summary `getHookSwitchStatus`.
         * @public
         * @readonly
         */
        readonly getHookSwitchStatus: OPTIONAL<GetHookSwitchStatus>,
        /**
         * @summary `getLampInfo`.
         * @public
         * @readonly
         */
        readonly getLampInfo: OPTIONAL<GetLampInfo>,
        /**
         * @summary `getLampMode`.
         * @public
         * @readonly
         */
        readonly getLampMode: OPTIONAL<GetLampMode>,
        /**
         * @summary `getMessageWaitingIndicator`.
         * @public
         * @readonly
         */
        readonly getMessageWaitingIndicator: OPTIONAL<GetMessageWaitingIndicator>,
        /**
         * @summary `getMicrophoneGain`.
         * @public
         * @readonly
         */
        readonly getMicrophoneGain: OPTIONAL<GetMicrophoneGain>,
        /**
         * @summary `getMicrophoneMute`.
         * @public
         * @readonly
         */
        readonly getMicrophoneMute: OPTIONAL<GetMicrophoneMute>,
        /**
         * @summary `getRingerStatus`.
         * @public
         * @readonly
         */
        readonly getRingerStatus: OPTIONAL<GetRingerStatus>,
        /**
         * @summary `getSpeakerMute`.
         * @public
         * @readonly
         */
        readonly getSpeakerMute: OPTIONAL<GetSpeakerMute>,
        /**
         * @summary `getSpeakerVolume`.
         * @public
         * @readonly
         */
        readonly getSpeakerVolume: OPTIONAL<GetSpeakerVolume>,
        /**
         * @summary `setButtonInformation`.
         * @public
         * @readonly
         */
        readonly setButtonInformation: OPTIONAL<SetButtonInformation>,
        /**
         * @summary `setDisplay`.
         * @public
         * @readonly
         */
        readonly setDisplay: OPTIONAL<SetDisplay>,
        /**
         * @summary `setHookSwitchStatus`.
         * @public
         * @readonly
         */
        readonly setHookSwitchStatus: OPTIONAL<SetHookSwitchStatus>,
        /**
         * @summary `setLampMode`.
         * @public
         * @readonly
         */
        readonly setLampMode: OPTIONAL<SetLampMode>,
        /**
         * @summary `setMessageWaitingIndicator`.
         * @public
         * @readonly
         */
        readonly setMessageWaitingIndicator: OPTIONAL<SetMessageWaitingIndicator>,
        /**
         * @summary `setMicrophoneGain`.
         * @public
         * @readonly
         */
        readonly setMicrophoneGain: OPTIONAL<SetMicrophoneGain>,
        /**
         * @summary `setMicrophoneMute`.
         * @public
         * @readonly
         */
        readonly setMicrophoneMute: OPTIONAL<SetMicrophoneMute>,
        /**
         * @summary `setRingerStatus`.
         * @public
         * @readonly
         */
        readonly setRingerStatus: OPTIONAL<SetRingerStatus>,
        /**
         * @summary `setSpeakerMute`.
         * @public
         * @readonly
         */
        readonly setSpeakerMute: OPTIONAL<SetSpeakerMute>,
        /**
         * @summary `setSpeakerVolume`.
         * @public
         * @readonly
         */
        readonly setSpeakerVolume: OPTIONAL<SetSpeakerVolume>
    ) {}

    /**
     * @summary Restructures an object into a PhysDevServList
     * @description
     * 
     * This takes an `object` and converts it to a `PhysDevServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PhysDevServList`.
     * @returns {PhysDevServList}
     */
    public static _from_object (_o: { [_K in keyof (PhysDevServList)]: (PhysDevServList)[_K] }): PhysDevServList {
        return new PhysDevServList(_o.buttonPress, _o.getAuditoryApparatusInfo, _o.getButtonInformation, _o.getDisplay, _o.getHookSwitchStatus, _o.getLampInfo, _o.getLampMode, _o.getMessageWaitingIndicator, _o.getMicrophoneGain, _o.getMicrophoneMute, _o.getRingerStatus, _o.getSpeakerMute, _o.getSpeakerVolume, _o.setButtonInformation, _o.setDisplay, _o.setHookSwitchStatus, _o.setLampMode, _o.setMessageWaitingIndicator, _o.setMicrophoneGain, _o.setMicrophoneMute, _o.setRingerStatus, _o.setSpeakerMute, _o.setSpeakerVolume);
    }


}

/**
 * @summary The Leading Root Component Types of PhysDevServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PhysDevServList: $.ComponentSpec[] = [
    new $.ComponentSpec("buttonPress", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("getAuditoryApparatusInfo", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("getButtonInformation", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("getDisplay", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("getHookSwitchStatus", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("getLampInfo", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("getLampMode", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("getMessageWaitingIndicator", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("getMicrophoneGain", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("getMicrophoneMute", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("getRingerStatus", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("getSpeakerMute", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("getSpeakerVolume", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("setButtonInformation", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("setDisplay", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("setHookSwitchStatus", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("setLampMode", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("setMessageWaitingIndicator", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("setMicrophoneGain", true, $.hasTag(_TagClass.context, 18), undefined, undefined),
    new $.ComponentSpec("setMicrophoneMute", true, $.hasTag(_TagClass.context, 19), undefined, undefined),
    new $.ComponentSpec("setRingerStatus", true, $.hasTag(_TagClass.context, 20), undefined, undefined),
    new $.ComponentSpec("setSpeakerMute", true, $.hasTag(_TagClass.context, 21), undefined, undefined),
    new $.ComponentSpec("setSpeakerVolume", true, $.hasTag(_TagClass.context, 22), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of PhysDevServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PhysDevServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PhysDevServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PhysDevServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PhysDevServList: $.ASN1Decoder<PhysDevServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PhysDevServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PhysDevServList (el: _Element): PhysDevServList {
    if (!_cached_decoder_for_PhysDevServList) { _cached_decoder_for_PhysDevServList = function (el: _Element): PhysDevServList {
    let buttonPress: OPTIONAL<ButtonPress>;
    let getAuditoryApparatusInfo: OPTIONAL<GetAuditoryApparatusInfo>;
    let getButtonInformation: OPTIONAL<GetButtonInformation>;
    let getDisplay: OPTIONAL<GetDisplay>;
    let getHookSwitchStatus: OPTIONAL<GetHookSwitchStatus>;
    let getLampInfo: OPTIONAL<GetLampInfo>;
    let getLampMode: OPTIONAL<GetLampMode>;
    let getMessageWaitingIndicator: OPTIONAL<GetMessageWaitingIndicator>;
    let getMicrophoneGain: OPTIONAL<GetMicrophoneGain>;
    let getMicrophoneMute: OPTIONAL<GetMicrophoneMute>;
    let getRingerStatus: OPTIONAL<GetRingerStatus>;
    let getSpeakerMute: OPTIONAL<GetSpeakerMute>;
    let getSpeakerVolume: OPTIONAL<GetSpeakerVolume>;
    let setButtonInformation: OPTIONAL<SetButtonInformation>;
    let setDisplay: OPTIONAL<SetDisplay>;
    let setHookSwitchStatus: OPTIONAL<SetHookSwitchStatus>;
    let setLampMode: OPTIONAL<SetLampMode>;
    let setMessageWaitingIndicator: OPTIONAL<SetMessageWaitingIndicator>;
    let setMicrophoneGain: OPTIONAL<SetMicrophoneGain>;
    let setMicrophoneMute: OPTIONAL<SetMicrophoneMute>;
    let setRingerStatus: OPTIONAL<SetRingerStatus>;
    let setSpeakerMute: OPTIONAL<SetSpeakerMute>;
    let setSpeakerVolume: OPTIONAL<SetSpeakerVolume>;
    const callbacks: $.DecodingMap = {
        "buttonPress": (_el: _Element): void => { buttonPress = $._decode_implicit<ButtonPress>(() => _decode_ButtonPress)(_el); },
        "getAuditoryApparatusInfo": (_el: _Element): void => { getAuditoryApparatusInfo = $._decode_implicit<GetAuditoryApparatusInfo>(() => _decode_GetAuditoryApparatusInfo)(_el); },
        "getButtonInformation": (_el: _Element): void => { getButtonInformation = $._decode_implicit<GetButtonInformation>(() => _decode_GetButtonInformation)(_el); },
        "getDisplay": (_el: _Element): void => { getDisplay = $._decode_implicit<GetDisplay>(() => _decode_GetDisplay)(_el); },
        "getHookSwitchStatus": (_el: _Element): void => { getHookSwitchStatus = $._decode_implicit<GetHookSwitchStatus>(() => _decode_GetHookSwitchStatus)(_el); },
        "getLampInfo": (_el: _Element): void => { getLampInfo = $._decode_implicit<GetLampInfo>(() => _decode_GetLampInfo)(_el); },
        "getLampMode": (_el: _Element): void => { getLampMode = $._decode_implicit<GetLampMode>(() => _decode_GetLampMode)(_el); },
        "getMessageWaitingIndicator": (_el: _Element): void => { getMessageWaitingIndicator = $._decode_implicit<GetMessageWaitingIndicator>(() => _decode_GetMessageWaitingIndicator)(_el); },
        "getMicrophoneGain": (_el: _Element): void => { getMicrophoneGain = $._decode_implicit<GetMicrophoneGain>(() => _decode_GetMicrophoneGain)(_el); },
        "getMicrophoneMute": (_el: _Element): void => { getMicrophoneMute = $._decode_implicit<GetMicrophoneMute>(() => _decode_GetMicrophoneMute)(_el); },
        "getRingerStatus": (_el: _Element): void => { getRingerStatus = $._decode_implicit<GetRingerStatus>(() => _decode_GetRingerStatus)(_el); },
        "getSpeakerMute": (_el: _Element): void => { getSpeakerMute = $._decode_implicit<GetSpeakerMute>(() => _decode_GetSpeakerMute)(_el); },
        "getSpeakerVolume": (_el: _Element): void => { getSpeakerVolume = $._decode_implicit<GetSpeakerVolume>(() => _decode_GetSpeakerVolume)(_el); },
        "setButtonInformation": (_el: _Element): void => { setButtonInformation = $._decode_implicit<SetButtonInformation>(() => _decode_SetButtonInformation)(_el); },
        "setDisplay": (_el: _Element): void => { setDisplay = $._decode_implicit<SetDisplay>(() => _decode_SetDisplay)(_el); },
        "setHookSwitchStatus": (_el: _Element): void => { setHookSwitchStatus = $._decode_implicit<SetHookSwitchStatus>(() => _decode_SetHookSwitchStatus)(_el); },
        "setLampMode": (_el: _Element): void => { setLampMode = $._decode_implicit<SetLampMode>(() => _decode_SetLampMode)(_el); },
        "setMessageWaitingIndicator": (_el: _Element): void => { setMessageWaitingIndicator = $._decode_implicit<SetMessageWaitingIndicator>(() => _decode_SetMessageWaitingIndicator)(_el); },
        "setMicrophoneGain": (_el: _Element): void => { setMicrophoneGain = $._decode_implicit<SetMicrophoneGain>(() => _decode_SetMicrophoneGain)(_el); },
        "setMicrophoneMute": (_el: _Element): void => { setMicrophoneMute = $._decode_implicit<SetMicrophoneMute>(() => _decode_SetMicrophoneMute)(_el); },
        "setRingerStatus": (_el: _Element): void => { setRingerStatus = $._decode_implicit<SetRingerStatus>(() => _decode_SetRingerStatus)(_el); },
        "setSpeakerMute": (_el: _Element): void => { setSpeakerMute = $._decode_implicit<SetSpeakerMute>(() => _decode_SetSpeakerMute)(_el); },
        "setSpeakerVolume": (_el: _Element): void => { setSpeakerVolume = $._decode_implicit<SetSpeakerVolume>(() => _decode_SetSpeakerVolume)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PhysDevServList,
        _extension_additions_list_spec_for_PhysDevServList,
        _root_component_type_list_2_spec_for_PhysDevServList,
        undefined,
    );
    return new PhysDevServList(
        buttonPress,
        getAuditoryApparatusInfo,
        getButtonInformation,
        getDisplay,
        getHookSwitchStatus,
        getLampInfo,
        getLampMode,
        getMessageWaitingIndicator,
        getMicrophoneGain,
        getMicrophoneMute,
        getRingerStatus,
        getSpeakerMute,
        getSpeakerVolume,
        setButtonInformation,
        setDisplay,
        setHookSwitchStatus,
        setLampMode,
        setMessageWaitingIndicator,
        setMicrophoneGain,
        setMicrophoneMute,
        setRingerStatus,
        setSpeakerMute,
        setSpeakerVolume
    );
}; }
    return _cached_decoder_for_PhysDevServList(el);
}

let _cached_encoder_for_PhysDevServList: $.ASN1Encoder<PhysDevServList> | null = null;

/**
 * @summary Encodes a(n) PhysDevServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysDevServList, encoded as an ASN.1 Element.
 */
export
function _encode_PhysDevServList (value: PhysDevServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PhysDevServList) { _cached_encoder_for_PhysDevServList = function (value: PhysDevServList, elGetter: $.ASN1Encoder<PhysDevServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.buttonPress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ButtonPress, $.BER)(value.buttonPress, $.BER)),
            /* IF_ABSENT  */ ((value.getAuditoryApparatusInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_GetAuditoryApparatusInfo, $.BER)(value.getAuditoryApparatusInfo, $.BER)),
            /* IF_ABSENT  */ ((value.getButtonInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_GetButtonInformation, $.BER)(value.getButtonInformation, $.BER)),
            /* IF_ABSENT  */ ((value.getDisplay === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_GetDisplay, $.BER)(value.getDisplay, $.BER)),
            /* IF_ABSENT  */ ((value.getHookSwitchStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_GetHookSwitchStatus, $.BER)(value.getHookSwitchStatus, $.BER)),
            /* IF_ABSENT  */ ((value.getLampInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_GetLampInfo, $.BER)(value.getLampInfo, $.BER)),
            /* IF_ABSENT  */ ((value.getLampMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_GetLampMode, $.BER)(value.getLampMode, $.BER)),
            /* IF_ABSENT  */ ((value.getMessageWaitingIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_GetMessageWaitingIndicator, $.BER)(value.getMessageWaitingIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.getMicrophoneGain === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_GetMicrophoneGain, $.BER)(value.getMicrophoneGain, $.BER)),
            /* IF_ABSENT  */ ((value.getMicrophoneMute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_GetMicrophoneMute, $.BER)(value.getMicrophoneMute, $.BER)),
            /* IF_ABSENT  */ ((value.getRingerStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_GetRingerStatus, $.BER)(value.getRingerStatus, $.BER)),
            /* IF_ABSENT  */ ((value.getSpeakerMute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_GetSpeakerMute, $.BER)(value.getSpeakerMute, $.BER)),
            /* IF_ABSENT  */ ((value.getSpeakerVolume === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_GetSpeakerVolume, $.BER)(value.getSpeakerVolume, $.BER)),
            /* IF_ABSENT  */ ((value.setButtonInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_SetButtonInformation, $.BER)(value.setButtonInformation, $.BER)),
            /* IF_ABSENT  */ ((value.setDisplay === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_SetDisplay, $.BER)(value.setDisplay, $.BER)),
            /* IF_ABSENT  */ ((value.setHookSwitchStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_SetHookSwitchStatus, $.BER)(value.setHookSwitchStatus, $.BER)),
            /* IF_ABSENT  */ ((value.setLampMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_SetLampMode, $.BER)(value.setLampMode, $.BER)),
            /* IF_ABSENT  */ ((value.setMessageWaitingIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_SetMessageWaitingIndicator, $.BER)(value.setMessageWaitingIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.setMicrophoneGain === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_SetMicrophoneGain, $.BER)(value.setMicrophoneGain, $.BER)),
            /* IF_ABSENT  */ ((value.setMicrophoneMute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_SetMicrophoneMute, $.BER)(value.setMicrophoneMute, $.BER)),
            /* IF_ABSENT  */ ((value.setRingerStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_SetRingerStatus, $.BER)(value.setRingerStatus, $.BER)),
            /* IF_ABSENT  */ ((value.setSpeakerMute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_SetSpeakerMute, $.BER)(value.setSpeakerMute, $.BER)),
            /* IF_ABSENT  */ ((value.setSpeakerVolume === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_SetSpeakerVolume, $.BER)(value.setSpeakerVolume, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PhysDevServList(value, elGetter);
}


/* eslint-enable */
