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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TeleserviceList, _decode_TeleserviceList, _encode_TeleserviceList } from "../MAP-MS-DataTypes/TeleserviceList.ta.mjs";
// export { TeleserviceList, _decode_TeleserviceList, _encode_TeleserviceList } from "../MAP-MS-DataTypes/TeleserviceList.ta.mjs";
import { BearerServiceList, _decode_BearerServiceList, _encode_BearerServiceList } from "../MAP-MS-DataTypes/BearerServiceList.ta.mjs";
// export { BearerServiceList, _decode_BearerServiceList, _encode_BearerServiceList } from "../MAP-MS-DataTypes/BearerServiceList.ta.mjs";
import { SS_List, _decode_SS_List, _encode_SS_List } from "../MAP-SS-DataTypes/SS-List.ta.mjs";
// export { SS_List, _decode_SS_List, _encode_SS_List } from "../MAP-SS-DataTypes/SS-List.ta.mjs";
import { ODB_GeneralData, ODB_GeneralData_allOG_CallsBarred /* IMPORTED_LONG_NAMED_BIT */, allOG_CallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_internationalOGCallsBarred /* IMPORTED_LONG_NAMED_BIT */, internationalOGCallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_internationalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_LONG_NAMED_BIT */, internationalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_interzonalOGCallsBarred /* IMPORTED_LONG_NAMED_BIT */, interzonalOGCallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_interzonalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_LONG_NAMED_BIT */, interzonalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_interzonalOGCallsAndInternationalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_LONG_NAMED_BIT */, interzonalOGCallsAndInternationalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_premiumRateInformationOGCallsBarred /* IMPORTED_LONG_NAMED_BIT */, premiumRateInformationOGCallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_premiumRateEntertainementOGCallsBarred /* IMPORTED_LONG_NAMED_BIT */, premiumRateEntertainementOGCallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_ss_AccessBarred /* IMPORTED_LONG_NAMED_BIT */, ss_AccessBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_allECT_Barred /* IMPORTED_LONG_NAMED_BIT */, allECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_chargeableECT_Barred /* IMPORTED_LONG_NAMED_BIT */, chargeableECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_internationalECT_Barred /* IMPORTED_LONG_NAMED_BIT */, internationalECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_interzonalECT_Barred /* IMPORTED_LONG_NAMED_BIT */, interzonalECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_doublyChargeableECT_Barred /* IMPORTED_LONG_NAMED_BIT */, doublyChargeableECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_multipleECT_Barred /* IMPORTED_LONG_NAMED_BIT */, multipleECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_allPacketOrientedServicesBarred /* IMPORTED_LONG_NAMED_BIT */, allPacketOrientedServicesBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamerAccessToHPLMN_AP_Barred /* IMPORTED_LONG_NAMED_BIT */, roamerAccessToHPLMN_AP_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamerAccessToVPLMN_AP_Barred /* IMPORTED_LONG_NAMED_BIT */, roamerAccessToVPLMN_AP_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamingOutsidePLMNOG_CallsBarred /* IMPORTED_LONG_NAMED_BIT */, roamingOutsidePLMNOG_CallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_allIC_CallsBarred /* IMPORTED_LONG_NAMED_BIT */, allIC_CallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamingOutsidePLMNIC_CallsBarred /* IMPORTED_LONG_NAMED_BIT */, roamingOutsidePLMNIC_CallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamingOutsidePLMNICountryIC_CallsBarred /* IMPORTED_LONG_NAMED_BIT */, roamingOutsidePLMNICountryIC_CallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamingOutsidePLMN_Barred /* IMPORTED_LONG_NAMED_BIT */, roamingOutsidePLMN_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamingOutsidePLMN_CountryBarred /* IMPORTED_LONG_NAMED_BIT */, roamingOutsidePLMN_CountryBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_registrationAllCF_Barred /* IMPORTED_LONG_NAMED_BIT */, registrationAllCF_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_registrationCFNotToHPLMN_Barred /* IMPORTED_LONG_NAMED_BIT */, registrationCFNotToHPLMN_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_registrationInterzonalCF_Barred /* IMPORTED_LONG_NAMED_BIT */, registrationInterzonalCF_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_registrationInterzonalCFNotToHPLMN_Barred /* IMPORTED_LONG_NAMED_BIT */, registrationInterzonalCFNotToHPLMN_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_registrationInternationalCF_Barred /* IMPORTED_LONG_NAMED_BIT */, registrationInternationalCF_Barred /* IMPORTED_SHORT_NAMED_BIT */, _decode_ODB_GeneralData, _encode_ODB_GeneralData } from "../MAP-MS-DataTypes/ODB-GeneralData.ta.mjs";
// export { ODB_GeneralData, ODB_GeneralData_allOG_CallsBarred /* IMPORTED_LONG_NAMED_BIT */, allOG_CallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_internationalOGCallsBarred /* IMPORTED_LONG_NAMED_BIT */, internationalOGCallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_internationalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_LONG_NAMED_BIT */, internationalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_interzonalOGCallsBarred /* IMPORTED_LONG_NAMED_BIT */, interzonalOGCallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_interzonalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_LONG_NAMED_BIT */, interzonalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_interzonalOGCallsAndInternationalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_LONG_NAMED_BIT */, interzonalOGCallsAndInternationalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_premiumRateInformationOGCallsBarred /* IMPORTED_LONG_NAMED_BIT */, premiumRateInformationOGCallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_premiumRateEntertainementOGCallsBarred /* IMPORTED_LONG_NAMED_BIT */, premiumRateEntertainementOGCallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_ss_AccessBarred /* IMPORTED_LONG_NAMED_BIT */, ss_AccessBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_allECT_Barred /* IMPORTED_LONG_NAMED_BIT */, allECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_chargeableECT_Barred /* IMPORTED_LONG_NAMED_BIT */, chargeableECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_internationalECT_Barred /* IMPORTED_LONG_NAMED_BIT */, internationalECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_interzonalECT_Barred /* IMPORTED_LONG_NAMED_BIT */, interzonalECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_doublyChargeableECT_Barred /* IMPORTED_LONG_NAMED_BIT */, doublyChargeableECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_multipleECT_Barred /* IMPORTED_LONG_NAMED_BIT */, multipleECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_allPacketOrientedServicesBarred /* IMPORTED_LONG_NAMED_BIT */, allPacketOrientedServicesBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamerAccessToHPLMN_AP_Barred /* IMPORTED_LONG_NAMED_BIT */, roamerAccessToHPLMN_AP_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamerAccessToVPLMN_AP_Barred /* IMPORTED_LONG_NAMED_BIT */, roamerAccessToVPLMN_AP_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamingOutsidePLMNOG_CallsBarred /* IMPORTED_LONG_NAMED_BIT */, roamingOutsidePLMNOG_CallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_allIC_CallsBarred /* IMPORTED_LONG_NAMED_BIT */, allIC_CallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamingOutsidePLMNIC_CallsBarred /* IMPORTED_LONG_NAMED_BIT */, roamingOutsidePLMNIC_CallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamingOutsidePLMNICountryIC_CallsBarred /* IMPORTED_LONG_NAMED_BIT */, roamingOutsidePLMNICountryIC_CallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamingOutsidePLMN_Barred /* IMPORTED_LONG_NAMED_BIT */, roamingOutsidePLMN_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamingOutsidePLMN_CountryBarred /* IMPORTED_LONG_NAMED_BIT */, roamingOutsidePLMN_CountryBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_registrationAllCF_Barred /* IMPORTED_LONG_NAMED_BIT */, registrationAllCF_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_registrationCFNotToHPLMN_Barred /* IMPORTED_LONG_NAMED_BIT */, registrationCFNotToHPLMN_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_registrationInterzonalCF_Barred /* IMPORTED_LONG_NAMED_BIT */, registrationInterzonalCF_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_registrationInterzonalCFNotToHPLMN_Barred /* IMPORTED_LONG_NAMED_BIT */, registrationInterzonalCFNotToHPLMN_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_registrationInternationalCF_Barred /* IMPORTED_LONG_NAMED_BIT */, registrationInternationalCF_Barred /* IMPORTED_SHORT_NAMED_BIT */, _decode_ODB_GeneralData, _encode_ODB_GeneralData } from "../MAP-MS-DataTypes/ODB-GeneralData.ta.mjs";
import { RegionalSubscriptionResponse, _enum_for_RegionalSubscriptionResponse, RegionalSubscriptionResponse_networkNode_AreaRestricted /* IMPORTED_LONG_ENUMERATION_ITEM */, networkNode_AreaRestricted /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegionalSubscriptionResponse_tooManyZoneCodes /* IMPORTED_LONG_ENUMERATION_ITEM */, tooManyZoneCodes /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegionalSubscriptionResponse_zoneCodesConflict /* IMPORTED_LONG_ENUMERATION_ITEM */, zoneCodesConflict /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegionalSubscriptionResponse_regionalSubscNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, regionalSubscNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RegionalSubscriptionResponse, _encode_RegionalSubscriptionResponse } from "../MAP-MS-DataTypes/RegionalSubscriptionResponse.ta.mjs";
// export { RegionalSubscriptionResponse, _enum_for_RegionalSubscriptionResponse, RegionalSubscriptionResponse_networkNode_AreaRestricted /* IMPORTED_LONG_ENUMERATION_ITEM */, networkNode_AreaRestricted /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegionalSubscriptionResponse_tooManyZoneCodes /* IMPORTED_LONG_ENUMERATION_ITEM */, tooManyZoneCodes /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegionalSubscriptionResponse_zoneCodesConflict /* IMPORTED_LONG_ENUMERATION_ITEM */, zoneCodesConflict /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegionalSubscriptionResponse_regionalSubscNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, regionalSubscNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RegionalSubscriptionResponse, _encode_RegionalSubscriptionResponse } from "../MAP-MS-DataTypes/RegionalSubscriptionResponse.ta.mjs";
import { SupportedCamelPhases, SupportedCamelPhases_phase1 /* IMPORTED_LONG_NAMED_BIT */, phase1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase2 /* IMPORTED_LONG_NAMED_BIT */, phase2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase3 /* IMPORTED_LONG_NAMED_BIT */, phase3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase4 /* IMPORTED_LONG_NAMED_BIT */, phase4 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedCamelPhases, _encode_SupportedCamelPhases } from "../MAP-MS-DataTypes/SupportedCamelPhases.ta.mjs";
// export { SupportedCamelPhases, SupportedCamelPhases_phase1 /* IMPORTED_LONG_NAMED_BIT */, phase1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase2 /* IMPORTED_LONG_NAMED_BIT */, phase2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase3 /* IMPORTED_LONG_NAMED_BIT */, phase3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase4 /* IMPORTED_LONG_NAMED_BIT */, phase4 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedCamelPhases, _encode_SupportedCamelPhases } from "../MAP-MS-DataTypes/SupportedCamelPhases.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { OfferedCamel4CSIs, OfferedCamel4CSIs_o_csi /* IMPORTED_LONG_NAMED_BIT */, o_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_d_csi /* IMPORTED_LONG_NAMED_BIT */, d_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_vt_csi /* IMPORTED_LONG_NAMED_BIT */, vt_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_t_csi /* IMPORTED_LONG_NAMED_BIT */, t_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mt_sms_csi /* IMPORTED_LONG_NAMED_BIT */, mt_sms_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mg_csi /* IMPORTED_LONG_NAMED_BIT */, mg_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_psi_enhancements /* IMPORTED_LONG_NAMED_BIT */, psi_enhancements /* IMPORTED_SHORT_NAMED_BIT */, _decode_OfferedCamel4CSIs, _encode_OfferedCamel4CSIs } from "../MAP-MS-DataTypes/OfferedCamel4CSIs.ta.mjs";
// export { OfferedCamel4CSIs, OfferedCamel4CSIs_o_csi /* IMPORTED_LONG_NAMED_BIT */, o_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_d_csi /* IMPORTED_LONG_NAMED_BIT */, d_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_vt_csi /* IMPORTED_LONG_NAMED_BIT */, vt_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_t_csi /* IMPORTED_LONG_NAMED_BIT */, t_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mt_sms_csi /* IMPORTED_LONG_NAMED_BIT */, mt_sms_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mg_csi /* IMPORTED_LONG_NAMED_BIT */, mg_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_psi_enhancements /* IMPORTED_LONG_NAMED_BIT */, psi_enhancements /* IMPORTED_SHORT_NAMED_BIT */, _decode_OfferedCamel4CSIs, _encode_OfferedCamel4CSIs } from "../MAP-MS-DataTypes/OfferedCamel4CSIs.ta.mjs";
import { SupportedFeatures, SupportedFeatures_odb_all_apn /* IMPORTED_LONG_NAMED_BIT */, odb_all_apn /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_HPLMN_APN /* IMPORTED_LONG_NAMED_BIT */, odb_HPLMN_APN /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_VPLMN_APN /* IMPORTED_LONG_NAMED_BIT */, odb_VPLMN_APN /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_all_og /* IMPORTED_LONG_NAMED_BIT */, odb_all_og /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_all_international_og /* IMPORTED_LONG_NAMED_BIT */, odb_all_international_og /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_all_int_og_not_to_HPLMN_country /* IMPORTED_LONG_NAMED_BIT */, odb_all_int_og_not_to_HPLMN_country /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_all_interzonal_og /* IMPORTED_LONG_NAMED_BIT */, odb_all_interzonal_og /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_all_interzonal_og_not_to_HPLMN_country /* IMPORTED_LONG_NAMED_BIT */, odb_all_interzonal_og_not_to_HPLMN_country /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_all_interzonal_og_and_internat_og_not_to_HPLMN_country /* IMPORTED_LONG_NAMED_BIT */, odb_all_interzonal_og_and_internat_og_not_to_HPLMN_country /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_regSub /* IMPORTED_LONG_NAMED_BIT */, regSub /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_trace /* IMPORTED_LONG_NAMED_BIT */, trace /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_all_PrivExcep /* IMPORTED_LONG_NAMED_BIT */, lcs_all_PrivExcep /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_universal /* IMPORTED_LONG_NAMED_BIT */, lcs_universal /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_CallSessionRelated /* IMPORTED_LONG_NAMED_BIT */, lcs_CallSessionRelated /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_CallSessionUnrelated /* IMPORTED_LONG_NAMED_BIT */, lcs_CallSessionUnrelated /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_PLMN_operator /* IMPORTED_LONG_NAMED_BIT */, lcs_PLMN_operator /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_ServiceType /* IMPORTED_LONG_NAMED_BIT */, lcs_ServiceType /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_all_MOLR_SS /* IMPORTED_LONG_NAMED_BIT */, lcs_all_MOLR_SS /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_basicSelfLocation /* IMPORTED_LONG_NAMED_BIT */, lcs_basicSelfLocation /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_autonomousSelfLocation /* IMPORTED_LONG_NAMED_BIT */, lcs_autonomousSelfLocation /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_transferToThirdParty /* IMPORTED_LONG_NAMED_BIT */, lcs_transferToThirdParty /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_sm_mo_pp /* IMPORTED_LONG_NAMED_BIT */, sm_mo_pp /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_barring_OutgoingCalls /* IMPORTED_LONG_NAMED_BIT */, barring_OutgoingCalls /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_baoc /* IMPORTED_LONG_NAMED_BIT */, baoc /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_boic /* IMPORTED_LONG_NAMED_BIT */, boic /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_boicExHC /* IMPORTED_LONG_NAMED_BIT */, boicExHC /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_localTimeZoneRetrieval /* IMPORTED_LONG_NAMED_BIT */, localTimeZoneRetrieval /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_additionalMsisdn /* IMPORTED_LONG_NAMED_BIT */, additionalMsisdn /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_smsInMME /* IMPORTED_LONG_NAMED_BIT */, smsInMME /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_smsInSGSN /* IMPORTED_LONG_NAMED_BIT */, smsInSGSN /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_ue_Reachability_Notification /* IMPORTED_LONG_NAMED_BIT */, ue_Reachability_Notification /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_state_Location_Information_Retrieval /* IMPORTED_LONG_NAMED_BIT */, state_Location_Information_Retrieval /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_partialPurge /* IMPORTED_LONG_NAMED_BIT */, partialPurge /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_gddInSGSN /* IMPORTED_LONG_NAMED_BIT */, gddInSGSN /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_sgsnCAMELCapability /* IMPORTED_LONG_NAMED_BIT */, sgsnCAMELCapability /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_pcscf_Restoration /* IMPORTED_LONG_NAMED_BIT */, pcscf_Restoration /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_dedicatedCoreNetworks /* IMPORTED_LONG_NAMED_BIT */, dedicatedCoreNetworks /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_non_IP_PDN_Type_APNs /* IMPORTED_LONG_NAMED_BIT */, non_IP_PDN_Type_APNs /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_non_IP_PDP_Type_APNs /* IMPORTED_LONG_NAMED_BIT */, non_IP_PDP_Type_APNs /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_nrAsSecondaryRAT /* IMPORTED_LONG_NAMED_BIT */, nrAsSecondaryRAT /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedFeatures, _encode_SupportedFeatures } from "../MAP-MS-DataTypes/SupportedFeatures.ta.mjs";
// export { SupportedFeatures, SupportedFeatures_odb_all_apn /* IMPORTED_LONG_NAMED_BIT */, odb_all_apn /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_HPLMN_APN /* IMPORTED_LONG_NAMED_BIT */, odb_HPLMN_APN /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_VPLMN_APN /* IMPORTED_LONG_NAMED_BIT */, odb_VPLMN_APN /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_all_og /* IMPORTED_LONG_NAMED_BIT */, odb_all_og /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_all_international_og /* IMPORTED_LONG_NAMED_BIT */, odb_all_international_og /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_all_int_og_not_to_HPLMN_country /* IMPORTED_LONG_NAMED_BIT */, odb_all_int_og_not_to_HPLMN_country /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_all_interzonal_og /* IMPORTED_LONG_NAMED_BIT */, odb_all_interzonal_og /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_all_interzonal_og_not_to_HPLMN_country /* IMPORTED_LONG_NAMED_BIT */, odb_all_interzonal_og_not_to_HPLMN_country /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_all_interzonal_og_and_internat_og_not_to_HPLMN_country /* IMPORTED_LONG_NAMED_BIT */, odb_all_interzonal_og_and_internat_og_not_to_HPLMN_country /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_regSub /* IMPORTED_LONG_NAMED_BIT */, regSub /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_trace /* IMPORTED_LONG_NAMED_BIT */, trace /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_all_PrivExcep /* IMPORTED_LONG_NAMED_BIT */, lcs_all_PrivExcep /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_universal /* IMPORTED_LONG_NAMED_BIT */, lcs_universal /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_CallSessionRelated /* IMPORTED_LONG_NAMED_BIT */, lcs_CallSessionRelated /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_CallSessionUnrelated /* IMPORTED_LONG_NAMED_BIT */, lcs_CallSessionUnrelated /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_PLMN_operator /* IMPORTED_LONG_NAMED_BIT */, lcs_PLMN_operator /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_ServiceType /* IMPORTED_LONG_NAMED_BIT */, lcs_ServiceType /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_all_MOLR_SS /* IMPORTED_LONG_NAMED_BIT */, lcs_all_MOLR_SS /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_basicSelfLocation /* IMPORTED_LONG_NAMED_BIT */, lcs_basicSelfLocation /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_autonomousSelfLocation /* IMPORTED_LONG_NAMED_BIT */, lcs_autonomousSelfLocation /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_transferToThirdParty /* IMPORTED_LONG_NAMED_BIT */, lcs_transferToThirdParty /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_sm_mo_pp /* IMPORTED_LONG_NAMED_BIT */, sm_mo_pp /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_barring_OutgoingCalls /* IMPORTED_LONG_NAMED_BIT */, barring_OutgoingCalls /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_baoc /* IMPORTED_LONG_NAMED_BIT */, baoc /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_boic /* IMPORTED_LONG_NAMED_BIT */, boic /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_boicExHC /* IMPORTED_LONG_NAMED_BIT */, boicExHC /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_localTimeZoneRetrieval /* IMPORTED_LONG_NAMED_BIT */, localTimeZoneRetrieval /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_additionalMsisdn /* IMPORTED_LONG_NAMED_BIT */, additionalMsisdn /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_smsInMME /* IMPORTED_LONG_NAMED_BIT */, smsInMME /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_smsInSGSN /* IMPORTED_LONG_NAMED_BIT */, smsInSGSN /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_ue_Reachability_Notification /* IMPORTED_LONG_NAMED_BIT */, ue_Reachability_Notification /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_state_Location_Information_Retrieval /* IMPORTED_LONG_NAMED_BIT */, state_Location_Information_Retrieval /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_partialPurge /* IMPORTED_LONG_NAMED_BIT */, partialPurge /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_gddInSGSN /* IMPORTED_LONG_NAMED_BIT */, gddInSGSN /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_sgsnCAMELCapability /* IMPORTED_LONG_NAMED_BIT */, sgsnCAMELCapability /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_pcscf_Restoration /* IMPORTED_LONG_NAMED_BIT */, pcscf_Restoration /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_dedicatedCoreNetworks /* IMPORTED_LONG_NAMED_BIT */, dedicatedCoreNetworks /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_non_IP_PDN_Type_APNs /* IMPORTED_LONG_NAMED_BIT */, non_IP_PDN_Type_APNs /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_non_IP_PDP_Type_APNs /* IMPORTED_LONG_NAMED_BIT */, non_IP_PDP_Type_APNs /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_nrAsSecondaryRAT /* IMPORTED_LONG_NAMED_BIT */, nrAsSecondaryRAT /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedFeatures, _encode_SupportedFeatures } from "../MAP-MS-DataTypes/SupportedFeatures.ta.mjs";
import { Ext_SupportedFeatures, Ext_SupportedFeatures_unlicensedSpectrumAsSecondaryRAT /* IMPORTED_LONG_NAMED_BIT */, unlicensedSpectrumAsSecondaryRAT /* IMPORTED_SHORT_NAMED_BIT */, _decode_Ext_SupportedFeatures, _encode_Ext_SupportedFeatures } from "../MAP-MS-DataTypes/Ext-SupportedFeatures.ta.mjs";
// export { Ext_SupportedFeatures, Ext_SupportedFeatures_unlicensedSpectrumAsSecondaryRAT /* IMPORTED_LONG_NAMED_BIT */, unlicensedSpectrumAsSecondaryRAT /* IMPORTED_SHORT_NAMED_BIT */, _decode_Ext_SupportedFeatures, _encode_Ext_SupportedFeatures } from "../MAP-MS-DataTypes/Ext-SupportedFeatures.ta.mjs";


/**
 * @summary InsertSubscriberDataRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InsertSubscriberDataRes ::= SEQUENCE {
 *     teleserviceList    [1] TeleserviceList    OPTIONAL,
 *     bearerServiceList    [2] BearerServiceList    OPTIONAL,
 *     ss-List    [3] SS-List    OPTIONAL,
 *     odb-GeneralData    [4] ODB-GeneralData    OPTIONAL,
 *     regionalSubscriptionResponse    [5] RegionalSubscriptionResponse    OPTIONAL,
 *     supportedCamelPhases    [6] SupportedCamelPhases    OPTIONAL,
 *     extensionContainer    [7] ExtensionContainer    OPTIONAL,
 *     ... ,
 *     offeredCamel4CSIs    [8] OfferedCamel4CSIs    OPTIONAL,
 *     supportedFeatures    [9] SupportedFeatures    OPTIONAL,
 *     ext-SupportedFeatures    [10] Ext-SupportedFeatures    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class InsertSubscriberDataRes {
    constructor (
        /**
         * @summary `teleserviceList`.
         * @public
         * @readonly
         */
        readonly teleserviceList: OPTIONAL<TeleserviceList>,
        /**
         * @summary `bearerServiceList`.
         * @public
         * @readonly
         */
        readonly bearerServiceList: OPTIONAL<BearerServiceList>,
        /**
         * @summary `ss_List`.
         * @public
         * @readonly
         */
        readonly ss_List: OPTIONAL<SS_List>,
        /**
         * @summary `odb_GeneralData`.
         * @public
         * @readonly
         */
        readonly odb_GeneralData: OPTIONAL<ODB_GeneralData>,
        /**
         * @summary `regionalSubscriptionResponse`.
         * @public
         * @readonly
         */
        readonly regionalSubscriptionResponse: OPTIONAL<RegionalSubscriptionResponse>,
        /**
         * @summary `supportedCamelPhases`.
         * @public
         * @readonly
         */
        readonly supportedCamelPhases: OPTIONAL<SupportedCamelPhases>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `offeredCamel4CSIs`.
         * @public
         * @readonly
         */
        readonly offeredCamel4CSIs: OPTIONAL<OfferedCamel4CSIs>,
        /**
         * @summary `supportedFeatures`.
         * @public
         * @readonly
         */
        readonly supportedFeatures: OPTIONAL<SupportedFeatures>,
        /**
         * @summary `ext_SupportedFeatures`.
         * @public
         * @readonly
         */
        readonly ext_SupportedFeatures: OPTIONAL<Ext_SupportedFeatures>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InsertSubscriberDataRes
     * @description
     * 
     * This takes an `object` and converts it to a `InsertSubscriberDataRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InsertSubscriberDataRes`.
     * @returns {InsertSubscriberDataRes}
     */
    public static _from_object (_o: { [_K in keyof (InsertSubscriberDataRes)]: (InsertSubscriberDataRes)[_K] }): InsertSubscriberDataRes {
        return new InsertSubscriberDataRes(_o.teleserviceList, _o.bearerServiceList, _o.ss_List, _o.odb_GeneralData, _o.regionalSubscriptionResponse, _o.supportedCamelPhases, _o.extensionContainer, _o.offeredCamel4CSIs, _o.supportedFeatures, _o.ext_SupportedFeatures, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `regionalSubscriptionResponse`
         * @public
         * @static
         */

    public static _enum_for_regionalSubscriptionResponse = _enum_for_RegionalSubscriptionResponse;
}

/**
 * @summary The Leading Root Component Types of InsertSubscriberDataRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InsertSubscriberDataRes: $.ComponentSpec[] = [
    new $.ComponentSpec("teleserviceList", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("bearerServiceList", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("ss-List", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("odb-GeneralData", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("regionalSubscriptionResponse", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("supportedCamelPhases", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 7), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of InsertSubscriberDataRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InsertSubscriberDataRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InsertSubscriberDataRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InsertSubscriberDataRes: $.ComponentSpec[] = [
    new $.ComponentSpec("offeredCamel4CSIs", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("supportedFeatures", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("ext-SupportedFeatures", true, $.hasTag(_TagClass.context, 10), undefined, undefined)
];

let _cached_decoder_for_InsertSubscriberDataRes: $.ASN1Decoder<InsertSubscriberDataRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InsertSubscriberDataRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InsertSubscriberDataRes (el: _Element): InsertSubscriberDataRes {
    if (!_cached_decoder_for_InsertSubscriberDataRes) { _cached_decoder_for_InsertSubscriberDataRes = function (el: _Element): InsertSubscriberDataRes {
    let teleserviceList: OPTIONAL<TeleserviceList>;
    let bearerServiceList: OPTIONAL<BearerServiceList>;
    let ss_List: OPTIONAL<SS_List>;
    let odb_GeneralData: OPTIONAL<ODB_GeneralData>;
    let regionalSubscriptionResponse: OPTIONAL<RegionalSubscriptionResponse>;
    let supportedCamelPhases: OPTIONAL<SupportedCamelPhases>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let offeredCamel4CSIs: OPTIONAL<OfferedCamel4CSIs>;
    let supportedFeatures: OPTIONAL<SupportedFeatures>;
    let ext_SupportedFeatures: OPTIONAL<Ext_SupportedFeatures>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "teleserviceList": (_el: _Element): void => { teleserviceList = $._decode_implicit<TeleserviceList>(() => _decode_TeleserviceList)(_el); },
        "bearerServiceList": (_el: _Element): void => { bearerServiceList = $._decode_implicit<BearerServiceList>(() => _decode_BearerServiceList)(_el); },
        "ss-List": (_el: _Element): void => { ss_List = $._decode_implicit<SS_List>(() => _decode_SS_List)(_el); },
        "odb-GeneralData": (_el: _Element): void => { odb_GeneralData = $._decode_implicit<ODB_GeneralData>(() => _decode_ODB_GeneralData)(_el); },
        "regionalSubscriptionResponse": (_el: _Element): void => { regionalSubscriptionResponse = $._decode_implicit<RegionalSubscriptionResponse>(() => _decode_RegionalSubscriptionResponse)(_el); },
        "supportedCamelPhases": (_el: _Element): void => { supportedCamelPhases = $._decode_implicit<SupportedCamelPhases>(() => _decode_SupportedCamelPhases)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "offeredCamel4CSIs": (_el: _Element): void => { offeredCamel4CSIs = $._decode_implicit<OfferedCamel4CSIs>(() => _decode_OfferedCamel4CSIs)(_el); },
        "supportedFeatures": (_el: _Element): void => { supportedFeatures = $._decode_implicit<SupportedFeatures>(() => _decode_SupportedFeatures)(_el); },
        "ext-SupportedFeatures": (_el: _Element): void => { ext_SupportedFeatures = $._decode_implicit<Ext_SupportedFeatures>(() => _decode_Ext_SupportedFeatures)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InsertSubscriberDataRes,
        _extension_additions_list_spec_for_InsertSubscriberDataRes,
        _root_component_type_list_2_spec_for_InsertSubscriberDataRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InsertSubscriberDataRes(
        teleserviceList,
        bearerServiceList,
        ss_List,
        odb_GeneralData,
        regionalSubscriptionResponse,
        supportedCamelPhases,
        extensionContainer,
        offeredCamel4CSIs,
        supportedFeatures,
        ext_SupportedFeatures,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InsertSubscriberDataRes(el);
}

let _cached_encoder_for_InsertSubscriberDataRes: $.ASN1Encoder<InsertSubscriberDataRes> | null = null;

/**
 * @summary Encodes a(n) InsertSubscriberDataRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InsertSubscriberDataRes, encoded as an ASN.1 Element.
 */
export
function _encode_InsertSubscriberDataRes (value: InsertSubscriberDataRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InsertSubscriberDataRes) { _cached_encoder_for_InsertSubscriberDataRes = function (value: InsertSubscriberDataRes, elGetter: $.ASN1Encoder<InsertSubscriberDataRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.teleserviceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_TeleserviceList, $.BER)(value.teleserviceList, $.BER)),
            /* IF_ABSENT  */ ((value.bearerServiceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_BearerServiceList, $.BER)(value.bearerServiceList, $.BER)),
            /* IF_ABSENT  */ ((value.ss_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SS_List, $.BER)(value.ss_List, $.BER)),
            /* IF_ABSENT  */ ((value.odb_GeneralData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ODB_GeneralData, $.BER)(value.odb_GeneralData, $.BER)),
            /* IF_ABSENT  */ ((value.regionalSubscriptionResponse === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_RegionalSubscriptionResponse, $.BER)(value.regionalSubscriptionResponse, $.BER)),
            /* IF_ABSENT  */ ((value.supportedCamelPhases === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_SupportedCamelPhases, $.BER)(value.supportedCamelPhases, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.offeredCamel4CSIs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_OfferedCamel4CSIs, $.BER)(value.offeredCamel4CSIs, $.BER)),
            /* IF_ABSENT  */ ((value.supportedFeatures === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_SupportedFeatures, $.BER)(value.supportedFeatures, $.BER)),
            /* IF_ABSENT  */ ((value.ext_SupportedFeatures === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_Ext_SupportedFeatures, $.BER)(value.ext_SupportedFeatures, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InsertSubscriberDataRes(value, elGetter);
}


/* eslint-enable */
