/**
 * @module
 * @description
 * 
 * ASN.1 module `CONFHI2Operations`, IMPLICIT TAGS. IMS conference HI2 intercept
 * related information. Content of communication is defined separately (annex
 * B.11.2).
 *
 * 3GPP TS 33.108, clause 11 and annex B.11.1.
 * https://www.3gpp.org/DynaReport/33108.htm
 *
 * `{itu-t(0) identified-organization(4) etsi(0) securityDomain(2) lawfulIntercept(2) threeGPP(4) hi2conf(10) r16(16) version-0(0)}`
 *
 * Annex N.3 is informative correlation guidance, not a requirement. Its
 * ConfCorrelation illustration uses different context tags than annex B.11.1;
 * this module is the definition that applies.
 */
export {
    type ConfCorrelation,
    _decode_ConfCorrelation,
    _encode_ConfCorrelation,
} from "./ConfCorrelation.ta.mjs";

export {
    type ConfEvent,
    ConfEvent_confEndSuccessfull,
    ConfEvent_confEndUnsuccessfull,
    ConfEvent_confPartyBearerModifySuccessfull,
    ConfEvent_confPartyBearerModifyUnsuccessfull,
    ConfEvent_confPartyJoinSuccessfull,
    ConfEvent_confPartyJoinUnsuccessfull,
    ConfEvent_confPartyLeaveSuccessfull,
    ConfEvent_confPartyLeaveUnsuccessfull,
    ConfEvent_confServCreation,
    ConfEvent_confServUpdate,
    ConfEvent_confStartSuccessfull,
    ConfEvent_confStartUnsuccessfull,
    ConfEvent_startOfInterceptionConferenceActive,
    _decode_ConfEvent,
    _encode_ConfEvent,
    _enum_for_ConfEvent,
    confEndSuccessfull,
    confEndUnsuccessfull,
    confPartyBearerModifySuccessfull,
    confPartyBearerModifyUnsuccessfull,
    confPartyJoinSuccessfull,
    confPartyJoinUnsuccessfull,
    confPartyLeaveSuccessfull,
    confPartyLeaveUnsuccessfull,
    confServCreation,
    confServUpdate,
    confStartSuccessfull,
    confStartUnsuccessfull,
    startOfInterceptionConferenceActive,
} from "./ConfEvent.ta.mjs";

export {
    type ConfEventFailureReason,
    _decode_ConfEventFailureReason,
    _encode_ConfEventFailureReason,
} from "./ConfEventFailureReason.ta.mjs";

export {
    type ConfEventInitiator,
    _decode_ConfEventInitiator,
    _encode_ConfEventInitiator,
} from "./ConfEventInitiator.ta.mjs";

export {
    type ConfIRIContent,
    _decode_ConfIRIContent,
    _encode_ConfIRIContent,
} from "./ConfIRIContent.ta.mjs";

export {
    type ConfIRISequence,
    _decode_ConfIRISequence,
    _encode_ConfIRISequence,
} from "./ConfIRISequence.ta.mjs";

export {
    type ConfIRIsContent,
    _decode_ConfIRIsContent,
    _encode_ConfIRIsContent,
} from "./ConfIRIsContent.ta.mjs";

export {
    ConfPartyInformation,
    _decode_ConfPartyInformation,
    _encode_ConfPartyInformation,
    _extension_additions_list_spec_for_ConfPartyInformation,
    _root_component_type_list_1_spec_for_ConfPartyInformation,
    _root_component_type_list_2_spec_for_ConfPartyInformation,
} from "./ConfPartyInformation.ta.mjs";

export {
    IMSIdentity,
    _decode_IMSIdentity,
    _encode_IMSIdentity,
    _extension_additions_list_spec_for_IMSIdentity,
    _root_component_type_list_1_spec_for_IMSIdentity,
    _root_component_type_list_2_spec_for_IMSIdentity,
} from "./IMSIdentity.ta.mjs";

export {
    IRI_Parameters,
    _decode_IRI_Parameters,
    _encode_IRI_Parameters,
    _extension_additions_list_spec_for_IRI_Parameters,
    _root_component_type_list_1_spec_for_IRI_Parameters,
    _root_component_type_list_2_spec_for_IRI_Parameters,
} from "./IRI-Parameters.ta.mjs";

export {
    type MediaModification,
    MediaModification_add,
    MediaModification_change,
    MediaModification_remove,
    MediaModification_unknown,
    _decode_MediaModification,
    _encode_MediaModification,
    _enum_for_MediaModification,
    add,
    change,
    remove,
    unknown,
} from "./MediaModification.ta.mjs";

export {
    PartyIdentity,
    _decode_PartyIdentity,
    _encode_PartyIdentity,
    _extension_additions_list_spec_for_PartyIdentity,
    _root_component_type_list_1_spec_for_PartyIdentity,
    _root_component_type_list_2_spec_for_PartyIdentity,
} from "./PartyIdentity.ta.mjs";

export {
    type Reason,
    _decode_Reason,
    _encode_Reason,
} from "./Reason.ta.mjs";

export {
    RecurrenceInfo,
    _decode_RecurrenceInfo,
    _encode_RecurrenceInfo,
    _extension_additions_list_spec_for_RecurrenceInfo,
    _root_component_type_list_1_spec_for_RecurrenceInfo,
    _root_component_type_list_2_spec_for_RecurrenceInfo,
} from "./RecurrenceInfo.ta.mjs";

export {
    SupportedMedia,
    _decode_SupportedMedia,
    _encode_SupportedMedia,
    _extension_additions_list_spec_for_SupportedMedia,
    _root_component_type_list_1_spec_for_SupportedMedia,
    _root_component_type_list_2_spec_for_SupportedMedia,
} from "./SupportedMedia.ta.mjs";

export {
    hi2confDomainId,
} from "./hi2confDomainId.va.mjs";

export {
    lawfulInterceptDomainId,
} from "./lawfulInterceptDomainId.va.mjs";

export {
    threeGPPSUBDomainId,
} from "./threeGPPSUBDomainId.va.mjs";
