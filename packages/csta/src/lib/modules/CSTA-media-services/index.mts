/**
 * @description
 *
 * Media-service parameter types: media class of a call versus connection-level
 * flow direction and channels, media service type/instance/stream IDs, and how
 * a media access device is attached. ECMA-269 §12.2.8, §12.2.20–12.2.21,
 * §12.3.18–12.3.19, §19.1.1; ECMA-285 §9.15.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
 */
export * from "./ConnectionInformation-flowDirection.ta.mjs";
export * from "./ConnectionInformation.ta.mjs";
export {
    _enum_for_ConnectionMode,
    ConnectionMode,
    ConnectionMode_consultationConference,
    ConnectionMode_consultationConferenceHold,
    ConnectionMode_deflect,
    ConnectionMode_directedPickup,
    ConnectionMode_join,
    ConnectionMode_singleStepConference,
    ConnectionMode_singleStepConferenceHold,
    ConnectionMode_singleStepTransfer,
    ConnectionMode_transfer,
    ConnectionMode_direct,
    _decode_ConnectionMode,
    _encode_ConnectionMode,
} from "./ConnectionMode.ta.mjs";
export {
    type ConnectionModeBMap,
    ConnectionModeBMap_consultationConference,
    ConnectionModeBMap_consultationConferenceHold,
    ConnectionModeBMap_deflect,
    ConnectionModeBMap_directedPickup,
    ConnectionModeBMap_join,
    ConnectionModeBMap_singleStepConference,
    ConnectionModeBMap_singleStepConferenceHold,
    ConnectionModeBMap_singleStepTransfer,
    ConnectionModeBMap_transfer,
    ConnectionModeBMap_direct,
    _decode_ConnectionModeBMap,
    _encode_ConnectionModeBMap,
} from "./ConnectionModeBMap.ta.mjs";
export * from "./MediaCallCharacteristics-bitRate.ta.mjs";
export {
    _enum_for_MediaCallCharacteristics_switchingSubDomainCCIEType,
    MediaCallCharacteristics_switchingSubDomainCCIEType,
    MediaCallCharacteristics_switchingSubDomainCCIEType_isdn,
    isdn,
    MediaCallCharacteristics_switchingSubDomainCCIEType_atm,
    atm,
    MediaCallCharacteristics_switchingSubDomainCCIEType_isoEthernet,
    isoEthernet,
    MediaCallCharacteristics_switchingSubDomainCCIEType_rsvp,
    rsvp,
    MediaCallCharacteristics_switchingSubDomainCCIEType_other,
    MediaCallCharacteristics_switchingSubDomainCCIEType_sip,
    sip,
    _decode_MediaCallCharacteristics_switchingSubDomainCCIEType,
    _encode_MediaCallCharacteristics_switchingSubDomainCCIEType,
} from "./MediaCallCharacteristics-switchingSubDomainCCIEType.ta.mjs";
export * from "./MediaCallCharacteristics.ta.mjs";
export {
    type MediaClass,
    MediaClass_voice,
    voice,
    MediaClass_data,
    data,
    MediaClass_image,
    image,
    MediaClass_audio,
    audio,
    MediaClass_other,
    MediaClass_notKnown,
    notKnown,
    MediaClass_chat,
    chat,
    MediaClass_email,
    email,
    MediaClass_message,
    message,
    MediaClass_im,
    im,
    MediaClass_sms,
    sms,
    MediaClass_mms,
    mms,
    _decode_MediaClass,
    _encode_MediaClass,
} from "./MediaClass.ta.mjs";
export * from "./MediaServiceInstanceID.ta.mjs";
export * from "./MediaServiceType.ta.mjs";
export * from "./MediaStreamID.ta.mjs";
