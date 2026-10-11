/**
 * @description
 *
 * ASN.1 module `ACP133CommonContent`
 * `{joint-iso-ccitt(2) country(16) us(840) organization(1) gov(101) dod(2)
 * ds(2) module(0) commonContent(2) editionB(3)}`.
 *
 * The short name `acp127` is omitted from this barrel. It names both an
 * `ACPPreferredDelivery` enumeration and an `ACPLegacyFormat` integer.
 * Import `ACPPreferredDelivery_acp127` or `ACPLegacyFormat_acp127`.
 */
export {
    type ACPLegacyFormat,
    _decode_ACPLegacyFormat,
    _encode_ACPLegacyFormat,
    ACPLegacyFormat_janap128,
    janap128,
    ACPLegacyFormat_acp126,
    acp126,
    ACPLegacyFormat_doi103,
    doi103,
    ACPLegacyFormat_doi103_special,
    doi103_special,
    ACPLegacyFormat_acp127,
    ACPLegacyFormat_acp127_converted,
    acp127_converted,
    ACPLegacyFormat_reserved_1,
    reserved_1,
    ACPLegacyFormat_acp127_state,
    acp127_state,
    ACPLegacyFormat_acp127_modified,
    acp127_modified,
    ACPLegacyFormat_socomm_special,
    socomm_special,
    ACPLegacyFormat_socomm_narrative,
    socomm_narrative,
    ACPLegacyFormat_reserved_2,
    reserved_2,
    ACPLegacyFormat_socomm_narrative_special,
    socomm_narrative_special,
    ACPLegacyFormat_socomm_data,
    socomm_data,
    ACPLegacyFormat_socomm_internal,
    socomm_internal,
    ACPLegacyFormat_socomm_external,
    socomm_external,
    ACPLegacyFormat_mfi_default,
    mfi_default,
    ACPLegacyFormat_acp_legacy_format_smtp,
    acp_legacy_format_smtp,
    ACPLegacyFormat_p22,
    p22,
    ACPLegacyFormat_acp145_united_states,
    acp145_united_states,
    ACPLegacyFormat_acp145_australia,
    acp145_australia,
    ACPLegacyFormat_acp145_canada,
    acp145_canada,
    ACPLegacyFormat_acp145_united_kingdom,
    acp145_united_kingdom,
    ACPLegacyFormat_acp145_new_zealand,
    acp145_new_zealand,
} from "./ACPLegacyFormat.ta.mjs";
export * from "./ACPNoAttachments.ta.mjs";
export {
    _enum_for_ACPPreferredDelivery,
    ACPPreferredDelivery,
    _decode_ACPPreferredDelivery,
    _encode_ACPPreferredDelivery,
    ACPPreferredDelivery_smtp,
    smtp,
    ACPPreferredDelivery_acp127,
    ACPPreferredDelivery_mhs,
    mhs,
} from "./ACPPreferredDelivery.ta.mjs";
export * from "./ALType.ta.mjs";
export * from "./Active.ta.mjs";
export * from "./Addressees.ta.mjs";
export * from "./Classification.ta.mjs";
export * from "./Community.ta.mjs";
export * from "./DistributionCode.ta.mjs";
export * from "./EmConCapability.ta.mjs";
export * from "./EmConState.ta.mjs";
export * from "./JPEG.ta.mjs";
export * from "./Kmid.ta.mjs";
export * from "./MLReceiptPolicy.ta.mjs";
export * from "./MaxMessageSize.ta.mjs";
export * from "./MonthlyUKMs.ta.mjs";
export * from "./MsgProtocolInfoCapability.ta.mjs";
export * from "./OnSupported.ta.mjs";
export * from "./PairwiseTag.ta.mjs";
export * from "./RIParameters.ta.mjs";
export * from "./RIParametersDeprecated-rIType.ta.mjs";
export * from "./RIParametersDeprecated.ta.mjs";
export * from "./Remarks.ta.mjs";
export * from "./UKMEntry.ta.mjs";
export * from "./WebAccessCapability.ta.mjs";
