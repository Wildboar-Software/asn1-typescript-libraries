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



/**
 * @summary SupportedFeatures
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedFeatures ::=  BIT STRING {
 *     odb-all-apn (0),
 *     odb-HPLMN-APN (1),
 *     odb-VPLMN-APN (2),
 *     odb-all-og (3),
 *     odb-all-international-og (4),
 *     odb-all-int-og-not-to-HPLMN-country (5),
 *     odb-all-interzonal-og (6),
 *     odb-all-interzonal-og-not-to-HPLMN-country (7),
 *     odb-all-interzonal-og-and-internat-og-not-to-HPLMN-country (8),
 *     regSub (9),
 *     trace (10),
 *     lcs-all-PrivExcep (11),
 *     lcs-universal (12),
 *     lcs-CallSessionRelated (13),
 *     lcs-CallSessionUnrelated (14),
 *     lcs-PLMN-operator (15),
 *     lcs-ServiceType (16),
 *     lcs-all-MOLR-SS (17),
 *     lcs-basicSelfLocation (18),
 *     lcs-autonomousSelfLocation (19),
 *     lcs-transferToThirdParty (20),
 *     sm-mo-pp (21),
 *     barring-OutgoingCalls (22),
 *     baoc (23),
 *     boic (24),
 *     boicExHC (25),
 *     localTimeZoneRetrieval (26),
 *     additionalMsisdn (27),
 *     smsInMME (28),
 *     smsInSGSN (29),
 *     ue-Reachability-Notification (30),
 *     state-Location-Information-Retrieval (31),
 *     partialPurge (32),
 *     gddInSGSN (33),
 *     sgsnCAMELCapability (34),
 *     pcscf-Restoration (35),
 *     dedicatedCoreNetworks (36), 
 *     non-IP-PDN-Type-APNs (37),
 *     non-IP-PDP-Type-APNs (38),
 *     nrAsSecondaryRAT (39) } (SIZE (26..40))
 * ```
 */
export
type SupportedFeatures = BIT_STRING;

/**
 * @summary SupportedFeatures_odb_all_apn
 * @constant
 */
export
const SupportedFeatures_odb_all_apn: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary odb_all_apn
 * @constant
 */
export
const odb_all_apn: number = SupportedFeatures_odb_all_apn; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_odb_HPLMN_APN
 * @constant
 */
export
const SupportedFeatures_odb_HPLMN_APN: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary odb_HPLMN_APN
 * @constant
 */
export
const odb_HPLMN_APN: number = SupportedFeatures_odb_HPLMN_APN; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_odb_VPLMN_APN
 * @constant
 */
export
const SupportedFeatures_odb_VPLMN_APN: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary odb_VPLMN_APN
 * @constant
 */
export
const odb_VPLMN_APN: number = SupportedFeatures_odb_VPLMN_APN; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_odb_all_og
 * @constant
 */
export
const SupportedFeatures_odb_all_og: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary odb_all_og
 * @constant
 */
export
const odb_all_og: number = SupportedFeatures_odb_all_og; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_odb_all_international_og
 * @constant
 */
export
const SupportedFeatures_odb_all_international_og: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary odb_all_international_og
 * @constant
 */
export
const odb_all_international_og: number = SupportedFeatures_odb_all_international_og; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_odb_all_int_og_not_to_HPLMN_country
 * @constant
 */
export
const SupportedFeatures_odb_all_int_og_not_to_HPLMN_country: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary odb_all_int_og_not_to_HPLMN_country
 * @constant
 */
export
const odb_all_int_og_not_to_HPLMN_country: number = SupportedFeatures_odb_all_int_og_not_to_HPLMN_country; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_odb_all_interzonal_og
 * @constant
 */
export
const SupportedFeatures_odb_all_interzonal_og: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary odb_all_interzonal_og
 * @constant
 */
export
const odb_all_interzonal_og: number = SupportedFeatures_odb_all_interzonal_og; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_odb_all_interzonal_og_not_to_HPLMN_country
 * @constant
 */
export
const SupportedFeatures_odb_all_interzonal_og_not_to_HPLMN_country: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary odb_all_interzonal_og_not_to_HPLMN_country
 * @constant
 */
export
const odb_all_interzonal_og_not_to_HPLMN_country: number = SupportedFeatures_odb_all_interzonal_og_not_to_HPLMN_country; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_odb_all_interzonal_og_and_internat_og_not_to_HPLMN_country
 * @constant
 */
export
const SupportedFeatures_odb_all_interzonal_og_and_internat_og_not_to_HPLMN_country: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary odb_all_interzonal_og_and_internat_og_not_to_HPLMN_country
 * @constant
 */
export
const odb_all_interzonal_og_and_internat_og_not_to_HPLMN_country: number = SupportedFeatures_odb_all_interzonal_og_and_internat_og_not_to_HPLMN_country; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_regSub
 * @constant
 */
export
const SupportedFeatures_regSub: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary regSub
 * @constant
 */
export
const regSub: number = SupportedFeatures_regSub; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_trace
 * @constant
 */
export
const SupportedFeatures_trace: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary trace
 * @constant
 */
export
const trace: number = SupportedFeatures_trace; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_lcs_all_PrivExcep
 * @constant
 */
export
const SupportedFeatures_lcs_all_PrivExcep: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary lcs_all_PrivExcep
 * @constant
 */
export
const lcs_all_PrivExcep: number = SupportedFeatures_lcs_all_PrivExcep; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_lcs_universal
 * @constant
 */
export
const SupportedFeatures_lcs_universal: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary lcs_universal
 * @constant
 */
export
const lcs_universal: number = SupportedFeatures_lcs_universal; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_lcs_CallSessionRelated
 * @constant
 */
export
const SupportedFeatures_lcs_CallSessionRelated: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary lcs_CallSessionRelated
 * @constant
 */
export
const lcs_CallSessionRelated: number = SupportedFeatures_lcs_CallSessionRelated; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_lcs_CallSessionUnrelated
 * @constant
 */
export
const SupportedFeatures_lcs_CallSessionUnrelated: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary lcs_CallSessionUnrelated
 * @constant
 */
export
const lcs_CallSessionUnrelated: number = SupportedFeatures_lcs_CallSessionUnrelated; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_lcs_PLMN_operator
 * @constant
 */
export
const SupportedFeatures_lcs_PLMN_operator: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary lcs_PLMN_operator
 * @constant
 */
export
const lcs_PLMN_operator: number = SupportedFeatures_lcs_PLMN_operator; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_lcs_ServiceType
 * @constant
 */
export
const SupportedFeatures_lcs_ServiceType: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary lcs_ServiceType
 * @constant
 */
export
const lcs_ServiceType: number = SupportedFeatures_lcs_ServiceType; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_lcs_all_MOLR_SS
 * @constant
 */
export
const SupportedFeatures_lcs_all_MOLR_SS: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary lcs_all_MOLR_SS
 * @constant
 */
export
const lcs_all_MOLR_SS: number = SupportedFeatures_lcs_all_MOLR_SS; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_lcs_basicSelfLocation
 * @constant
 */
export
const SupportedFeatures_lcs_basicSelfLocation: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary lcs_basicSelfLocation
 * @constant
 */
export
const lcs_basicSelfLocation: number = SupportedFeatures_lcs_basicSelfLocation; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_lcs_autonomousSelfLocation
 * @constant
 */
export
const SupportedFeatures_lcs_autonomousSelfLocation: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary lcs_autonomousSelfLocation
 * @constant
 */
export
const lcs_autonomousSelfLocation: number = SupportedFeatures_lcs_autonomousSelfLocation; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_lcs_transferToThirdParty
 * @constant
 */
export
const SupportedFeatures_lcs_transferToThirdParty: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary lcs_transferToThirdParty
 * @constant
 */
export
const lcs_transferToThirdParty: number = SupportedFeatures_lcs_transferToThirdParty; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_sm_mo_pp
 * @constant
 */
export
const SupportedFeatures_sm_mo_pp: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary sm_mo_pp
 * @constant
 */
export
const sm_mo_pp: number = SupportedFeatures_sm_mo_pp; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_barring_OutgoingCalls
 * @constant
 */
export
const SupportedFeatures_barring_OutgoingCalls: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary barring_OutgoingCalls
 * @constant
 */
export
const barring_OutgoingCalls: number = SupportedFeatures_barring_OutgoingCalls; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_baoc
 * @constant
 */
export
const SupportedFeatures_baoc: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary baoc
 * @constant
 */
export
const baoc: number = SupportedFeatures_baoc; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_boic
 * @constant
 */
export
const SupportedFeatures_boic: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary boic
 * @constant
 */
export
const boic: number = SupportedFeatures_boic; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_boicExHC
 * @constant
 */
export
const SupportedFeatures_boicExHC: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary boicExHC
 * @constant
 */
export
const boicExHC: number = SupportedFeatures_boicExHC; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_localTimeZoneRetrieval
 * @constant
 */
export
const SupportedFeatures_localTimeZoneRetrieval: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary localTimeZoneRetrieval
 * @constant
 */
export
const localTimeZoneRetrieval: number = SupportedFeatures_localTimeZoneRetrieval; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_additionalMsisdn
 * @constant
 */
export
const SupportedFeatures_additionalMsisdn: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary additionalMsisdn
 * @constant
 */
export
const additionalMsisdn: number = SupportedFeatures_additionalMsisdn; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_smsInMME
 * @constant
 */
export
const SupportedFeatures_smsInMME: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary smsInMME
 * @constant
 */
export
const smsInMME: number = SupportedFeatures_smsInMME; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_smsInSGSN
 * @constant
 */
export
const SupportedFeatures_smsInSGSN: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary smsInSGSN
 * @constant
 */
export
const smsInSGSN: number = SupportedFeatures_smsInSGSN; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_ue_Reachability_Notification
 * @constant
 */
export
const SupportedFeatures_ue_Reachability_Notification: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary ue_Reachability_Notification
 * @constant
 */
export
const ue_Reachability_Notification: number = SupportedFeatures_ue_Reachability_Notification; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_state_Location_Information_Retrieval
 * @constant
 */
export
const SupportedFeatures_state_Location_Information_Retrieval: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary state_Location_Information_Retrieval
 * @constant
 */
export
const state_Location_Information_Retrieval: number = SupportedFeatures_state_Location_Information_Retrieval; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_partialPurge
 * @constant
 */
export
const SupportedFeatures_partialPurge: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary partialPurge
 * @constant
 */
export
const partialPurge: number = SupportedFeatures_partialPurge; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_gddInSGSN
 * @constant
 */
export
const SupportedFeatures_gddInSGSN: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary gddInSGSN
 * @constant
 */
export
const gddInSGSN: number = SupportedFeatures_gddInSGSN; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_sgsnCAMELCapability
 * @constant
 */
export
const SupportedFeatures_sgsnCAMELCapability: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary sgsnCAMELCapability
 * @constant
 */
export
const sgsnCAMELCapability: number = SupportedFeatures_sgsnCAMELCapability; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_pcscf_Restoration
 * @constant
 */
export
const SupportedFeatures_pcscf_Restoration: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary pcscf_Restoration
 * @constant
 */
export
const pcscf_Restoration: number = SupportedFeatures_pcscf_Restoration; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_dedicatedCoreNetworks
 * @constant
 */
export
const SupportedFeatures_dedicatedCoreNetworks: number = 36; /* LONG_NAMED_BIT */

/**
 * @summary dedicatedCoreNetworks
 * @constant
 */
export
const dedicatedCoreNetworks: number = SupportedFeatures_dedicatedCoreNetworks; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_non_IP_PDN_Type_APNs
 * @constant
 */
export
const SupportedFeatures_non_IP_PDN_Type_APNs: number = 37; /* LONG_NAMED_BIT */

/**
 * @summary non_IP_PDN_Type_APNs
 * @constant
 */
export
const non_IP_PDN_Type_APNs: number = SupportedFeatures_non_IP_PDN_Type_APNs; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_non_IP_PDP_Type_APNs
 * @constant
 */
export
const SupportedFeatures_non_IP_PDP_Type_APNs: number = 38; /* LONG_NAMED_BIT */

/**
 * @summary non_IP_PDP_Type_APNs
 * @constant
 */
export
const non_IP_PDP_Type_APNs: number = SupportedFeatures_non_IP_PDP_Type_APNs; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedFeatures_nrAsSecondaryRAT
 * @constant
 */
export
const SupportedFeatures_nrAsSecondaryRAT: number = 39; /* LONG_NAMED_BIT */

/**
 * @summary nrAsSecondaryRAT
 * @constant
 */
export
const nrAsSecondaryRAT: number = SupportedFeatures_nrAsSecondaryRAT; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SupportedFeatures: $.ASN1Decoder<SupportedFeatures> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedFeatures
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SupportedFeatures (el: _Element): SupportedFeatures {
    if (!_cached_decoder_for_SupportedFeatures) { _cached_decoder_for_SupportedFeatures = $._decodeBitString; }
    return _cached_decoder_for_SupportedFeatures(el);
}

let _cached_encoder_for_SupportedFeatures: $.ASN1Encoder<SupportedFeatures> | null = null;

/**
 * @summary Encodes a(n) SupportedFeatures into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedFeatures, encoded as an ASN.1 Element.
 */
export
function _encode_SupportedFeatures (value: SupportedFeatures, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SupportedFeatures) { _cached_encoder_for_SupportedFeatures = $._encodeBitString; }
    return _cached_encoder_for_SupportedFeatures(value, elGetter);
}


/* eslint-enable */
