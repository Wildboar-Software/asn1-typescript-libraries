/**
 * @description
 * 
 * ASN.1 module `UmtsCS-HI2Operations`, IMPLICIT TAGS. Circuit-switched HI2
 * intercept related information. For North America, clause 5.0 recommends
 * J-STD-025-A.
 *
 * 3GPP TS 33.108, clause 5 and annex B.3a.
 * https://www.3gpp.org/DynaReport/33108.htm
 *
 * `{itu-t(0) identified-organization(4) etsi(0) securityDomain(2) lawfulIntercept(2) threeGPP(4) hi2CS(3) r17(17) version-0(0)}`
 *
 * Annex J defines UUS1 content and called/calling subaddress correlation for
 * the HI3 content link. Those structures are not types in this module. Clause
 * 5.5.14 still places subaddress information elements in the IRI when they are
 * present, and clause 5.5.15 reports UUS1, UUS2, and UUS3 on HI2.
 */
export {
    Change_Of_Target_Identity,
    _decode_Change_Of_Target_Identity,
    _encode_Change_Of_Target_Identity,
    _extension_additions_list_spec_for_Change_Of_Target_Identity,
    _root_component_type_list_1_spec_for_Change_Of_Target_Identity,
    _root_component_type_list_2_spec_for_Change_Of_Target_Identity,
} from "./Change-Of-Target-Identity.ta.mjs";

export {
    Current_Previous_Systems,
    _decode_Current_Previous_Systems,
    _encode_Current_Previous_Systems,
    _extension_additions_list_spec_for_Current_Previous_Systems,
    _root_component_type_list_1_spec_for_Current_Previous_Systems,
    _root_component_type_list_2_spec_for_Current_Previous_Systems,
} from "./Current-Previous-Systems.ta.mjs";

export {
    IRI_Parameters_callContentLinkInformation,
    _decode_IRI_Parameters_callContentLinkInformation,
    _encode_IRI_Parameters_callContentLinkInformation,
    _extension_additions_list_spec_for_IRI_Parameters_callContentLinkInformation,
    _root_component_type_list_1_spec_for_IRI_Parameters_callContentLinkInformation,
    _root_component_type_list_2_spec_for_IRI_Parameters_callContentLinkInformation,
} from "./IRI-Parameters-callContentLinkInformation.ta.mjs";

export {
    type IRI_Parameters_iRIversion,
    IRI_Parameters_iRIversion_lastVersion,
    IRI_Parameters_iRIversion_version1,
    IRI_Parameters_iRIversion_version2,
    IRI_Parameters_iRIversion_version3,
    _decode_IRI_Parameters_iRIversion,
    _encode_IRI_Parameters_iRIversion,
    _enum_for_IRI_Parameters_iRIversion,
    lastVersion,
    version1,
    version2,
    version3,
} from "./IRI-Parameters-iRIversion.ta.mjs";

export {
    type IRI_Parameters_intercepted_Call_Direct,
    IRI_Parameters_intercepted_Call_Direct_not_Available,
    IRI_Parameters_intercepted_Call_Direct_originating_Target,
    IRI_Parameters_intercepted_Call_Direct_terminating_Target,
    _decode_IRI_Parameters_intercepted_Call_Direct,
    _encode_IRI_Parameters_intercepted_Call_Direct,
    _enum_for_IRI_Parameters_intercepted_Call_Direct,
    not_Available,
    originating_Target,
    terminating_Target,
} from "./IRI-Parameters-intercepted-Call-Direct.ta.mjs";

export {
    type IRI_Parameters_nature_Of_The_intercepted_call,
    IRI_Parameters_nature_Of_The_intercepted_call_gPRS_Packet_Data,
    IRI_Parameters_nature_Of_The_intercepted_call_gSM_ISDN_PSTN_circuit_call,
    IRI_Parameters_nature_Of_The_intercepted_call_gSM_SMS_Message,
    IRI_Parameters_nature_Of_The_intercepted_call_tETRA_circuit_call,
    IRI_Parameters_nature_Of_The_intercepted_call_teTRA_Packet_Data,
    IRI_Parameters_nature_Of_The_intercepted_call_uUS4_Messages,
    _decode_IRI_Parameters_nature_Of_The_intercepted_call,
    _encode_IRI_Parameters_nature_Of_The_intercepted_call,
    _enum_for_IRI_Parameters_nature_Of_The_intercepted_call,
    gPRS_Packet_Data,
    gSM_ISDN_PSTN_circuit_call,
    gSM_SMS_Message,
    tETRA_circuit_call,
    teTRA_Packet_Data,
    uUS4_Messages,
} from "./IRI-Parameters-nature-Of-The-intercepted-call.ta.mjs";

export {
    IRI_Parameters,
    _decode_IRI_Parameters,
    _encode_IRI_Parameters,
    _extension_additions_list_spec_for_IRI_Parameters,
    _root_component_type_list_1_spec_for_IRI_Parameters,
    _root_component_type_list_2_spec_for_IRI_Parameters,
} from "./IRI-Parameters.ta.mjs";

export {
    type Requesting_Node_Type,
    Requesting_Node_Type_gMLC,
    Requesting_Node_Type_mME,
    Requesting_Node_Type_mSC,
    Requesting_Node_Type_sGSN,
    Requesting_Node_Type_sMS_Centre,
    _decode_Requesting_Node_Type,
    _encode_Requesting_Node_Type,
    _enum_for_Requesting_Node_Type,
    gMLC,
    mME,
    mSC,
    sGSN,
    sMS_Centre,
} from "./Requesting-Node-Type.ta.mjs";

export {
    type Umts_Cs_Event,
    Umts_Cs_Event_answer,
    Umts_Cs_Event_call_establishment,
    Umts_Cs_Event_cancel_Location,
    Umts_Cs_Event_hLR_Subscriber_Record_Change,
    Umts_Cs_Event_handover,
    Umts_Cs_Event_location_Information_Request,
    Umts_Cs_Event_location_update,
    Umts_Cs_Event_register_Location,
    Umts_Cs_Event_release,
    Umts_Cs_Event_sMS,
    Umts_Cs_Event_serving_System,
    Umts_Cs_Event_subscriber_Controlled_Input,
    Umts_Cs_Event_supplementary_Service,
    _decode_Umts_Cs_Event,
    _encode_Umts_Cs_Event,
    _enum_for_Umts_Cs_Event,
    answer,
    call_establishment,
    cancel_Location,
    hLR_Subscriber_Record_Change,
    handover,
    location_Information_Request,
    location_update,
    register_Location,
    release,
    sMS,
    serving_System,
    subscriber_Controlled_Input,
    supplementary_Service,
} from "./Umts-Cs-Event.ta.mjs";

export {
    type UmtsCS_IRIContent,
    _decode_UmtsCS_IRIContent,
    _encode_UmtsCS_IRIContent,
} from "./UmtsCS-IRIContent.ta.mjs";

export {
    type UmtsCS_IRISequence,
    _decode_UmtsCS_IRISequence,
    _encode_UmtsCS_IRISequence,
} from "./UmtsCS-IRISequence.ta.mjs";

export {
    type UmtsCS_IRIsContent,
    _decode_UmtsCS_IRIsContent,
    _encode_UmtsCS_IRIsContent,
} from "./UmtsCS-IRIsContent.ta.mjs";

export {
    hi2CSDomainId,
} from "./hi2CSDomainId.va.mjs";

export {
    lawfulInterceptDomainId,
} from "./lawfulInterceptDomainId.va.mjs";

export {
    threeGPPSUBDomainId,
} from "./threeGPPSUBDomainId.va.mjs";
