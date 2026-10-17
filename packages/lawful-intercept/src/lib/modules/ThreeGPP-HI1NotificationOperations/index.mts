/**
 * @description
 * 
 * ASN.1 module `ThreeGPP-HI1NotificationOperations`, IMPLICIT TAGS. Informative
 * HI1 management notification carried on the HI2 port. Annex M is informative.
 * This module does not make that annex normative. Annex M does not describe an
 * electronic HI1 interface; it describes HI1 information sent to the LEMF
 * across HI2.
 *
 * 3GPP TS 33.108, annex M.
 * https://www.3gpp.org/DynaReport/33108.htm
 *
 * `{itu-t(0) identified-organization(4) etsi(0) securityDomain(2) lawfulIntercept(2) threeGPP(4) hi1(0) notificationOperations(1) r16(16) version-1(1)}`
 *
 * The informative annex says DF2 may deliver the notification to the LEMF as
 * soon as possible, at least once if the information is available. It
 * recommends that the LEA have no direct control of the operator's equipment.
 * Broadcast-status, alarm, and keep-alive details are for further study.
 */
export {
    Alarm_Indicator,
    _decode_Alarm_Indicator,
    _encode_Alarm_Indicator,
    _extension_additions_list_spec_for_Alarm_Indicator,
    _root_component_type_list_1_spec_for_Alarm_Indicator,
    _root_component_type_list_2_spec_for_Alarm_Indicator,
} from "./Alarm-Indicator.ta.mjs";

export {
    type BroadcastStatus,
    BroadcastStatus_succesfull,
    BroadcastStatus_unsuccesfull,
    _decode_BroadcastStatus,
    _encode_BroadcastStatus,
    _enum_for_BroadcastStatus,
    succesfull,
    unsuccesfull,
} from "./BroadcastStatus.ta.mjs";

export {
    DeliveryInformation,
    _decode_DeliveryInformation,
    _encode_DeliveryInformation,
    _extension_additions_list_spec_for_DeliveryInformation,
    _root_component_type_list_1_spec_for_DeliveryInformation,
    _root_component_type_list_2_spec_for_DeliveryInformation,
} from "./DeliveryInformation.ta.mjs";

export {
    type InterceptionType,
    InterceptionType_dataIriCc,
    InterceptionType_dataIriOnly,
    InterceptionType_voiceAndDataIriCc,
    InterceptionType_voiceAndDataIriOnly,
    InterceptionType_voiceIriCc,
    InterceptionType_voiceIriOnly,
    _decode_InterceptionType,
    _encode_InterceptionType,
    _enum_for_InterceptionType,
    dataIriCc,
    dataIriOnly,
    voiceAndDataIriCc,
    voiceAndDataIriOnly,
    voiceIriCc,
    voiceIriOnly,
} from "./InterceptionType.ta.mjs";

export {
    Notification,
    _decode_Notification,
    _encode_Notification,
    _extension_additions_list_spec_for_Notification,
    _root_component_type_list_1_spec_for_Notification,
    _root_component_type_list_2_spec_for_Notification,
} from "./Notification.ta.mjs";

export {
    Target_Information,
    _decode_Target_Information,
    _encode_Target_Information,
    _extension_additions_list_spec_for_Target_Information,
    _root_component_type_list_1_spec_for_Target_Information,
    _root_component_type_list_2_spec_for_Target_Information,
} from "./Target-Information.ta.mjs";

export {
    type TargetType,
    TargetType_e164_Format,
    TargetType_iMEI,
    TargetType_iMPI,
    TargetType_iMPU,
    TargetType_iMSI,
    TargetType_mSISDN,
    TargetType_nAI,
    TargetType_sip_URI,
    TargetType_tel_URI,
    _decode_TargetType,
    _encode_TargetType,
    _enum_for_TargetType,
    e164_Format,
    iMEI,
    iMPI,
    iMPU,
    iMSI,
    mSISDN,
    nAI,
    sip_URI,
    tel_URI,
} from "./TargetType.ta.mjs";

export {
    type ThreeGPP_HI1_Operation,
    _decode_ThreeGPP_HI1_Operation,
    _encode_ThreeGPP_HI1_Operation,
} from "./ThreeGPP-HI1-Operation.ta.mjs";

export {
    ThreeGPP_National_HI1_ASN1parameters,
    _decode_ThreeGPP_National_HI1_ASN1parameters,
    _encode_ThreeGPP_National_HI1_ASN1parameters,
    _extension_additions_list_spec_for_ThreeGPP_National_HI1_ASN1parameters,
    _root_component_type_list_1_spec_for_ThreeGPP_National_HI1_ASN1parameters,
    _root_component_type_list_2_spec_for_ThreeGPP_National_HI1_ASN1parameters,
} from "./ThreeGPP-National-HI1-ASN1parameters.ta.mjs";

export {
    lawfulInterceptDomainId,
} from "./lawfulInterceptDomainId.va.mjs";

export {
    threeGPP_hi1NotificationOperationsId,
} from "./threeGPP-hi1NotificationOperationsId.va.mjs";

export {
    threeGPP_hi1OperationId,
} from "./threeGPP-hi1OperationId.va.mjs";

export {
    threeGPPSUBDomainId,
} from "./threeGPPSUBDomainId.va.mjs";
