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
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { SuperChargerInfo, _decode_SuperChargerInfo, _encode_SuperChargerInfo } from "../MAP-MS-DataTypes/SuperChargerInfo.ta.mjs";
import { SupportedCamelPhases, SupportedCamelPhases_phase1 /* IMPORTED_LONG_NAMED_BIT */, phase1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase2 /* IMPORTED_LONG_NAMED_BIT */, phase2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase3 /* IMPORTED_LONG_NAMED_BIT */, phase3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase4 /* IMPORTED_LONG_NAMED_BIT */, phase4 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedCamelPhases, _encode_SupportedCamelPhases } from "../MAP-MS-DataTypes/SupportedCamelPhases.ta.mjs";
import { SupportedLCS_CapabilitySets, SupportedLCS_CapabilitySets_lcsCapabilitySet1 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedLCS_CapabilitySets_lcsCapabilitySet2 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedLCS_CapabilitySets_lcsCapabilitySet3 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedLCS_CapabilitySets_lcsCapabilitySet4 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet4 /* IMPORTED_SHORT_NAMED_BIT */, SupportedLCS_CapabilitySets_lcsCapabilitySet5 /* IMPORTED_LONG_NAMED_BIT */, lcsCapabilitySet5 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedLCS_CapabilitySets, _encode_SupportedLCS_CapabilitySets } from "../MAP-MS-DataTypes/SupportedLCS-CapabilitySets.ta.mjs";
import { OfferedCamel4CSIs, OfferedCamel4CSIs_o_csi /* IMPORTED_LONG_NAMED_BIT */, o_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_d_csi /* IMPORTED_LONG_NAMED_BIT */, d_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_vt_csi /* IMPORTED_LONG_NAMED_BIT */, vt_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_t_csi /* IMPORTED_LONG_NAMED_BIT */, t_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mt_sms_csi /* IMPORTED_LONG_NAMED_BIT */, mt_sms_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mg_csi /* IMPORTED_LONG_NAMED_BIT */, mg_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_psi_enhancements /* IMPORTED_LONG_NAMED_BIT */, psi_enhancements /* IMPORTED_SHORT_NAMED_BIT */, _decode_OfferedCamel4CSIs, _encode_OfferedCamel4CSIs } from "../MAP-MS-DataTypes/OfferedCamel4CSIs.ta.mjs";
import { SupportedRAT_Types, SupportedRAT_Types_utran /* IMPORTED_LONG_NAMED_BIT */, utran /* IMPORTED_SHORT_NAMED_BIT */, SupportedRAT_Types_geran /* IMPORTED_LONG_NAMED_BIT */, geran /* IMPORTED_SHORT_NAMED_BIT */, SupportedRAT_Types_gan /* IMPORTED_LONG_NAMED_BIT */, gan /* IMPORTED_SHORT_NAMED_BIT */, SupportedRAT_Types_i_hspa_evolution /* IMPORTED_LONG_NAMED_BIT */, i_hspa_evolution /* IMPORTED_SHORT_NAMED_BIT */, SupportedRAT_Types_e_utran /* IMPORTED_LONG_NAMED_BIT */, e_utran /* IMPORTED_SHORT_NAMED_BIT */, SupportedRAT_Types_nb_iot /* IMPORTED_LONG_NAMED_BIT */, nb_iot /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedRAT_Types, _encode_SupportedRAT_Types } from "../MAP-MS-DataTypes/SupportedRAT-Types.ta.mjs";
import { SupportedFeatures, SupportedFeatures_odb_all_apn /* IMPORTED_LONG_NAMED_BIT */, odb_all_apn /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_HPLMN_APN /* IMPORTED_LONG_NAMED_BIT */, odb_HPLMN_APN /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_VPLMN_APN /* IMPORTED_LONG_NAMED_BIT */, odb_VPLMN_APN /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_all_og /* IMPORTED_LONG_NAMED_BIT */, odb_all_og /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_all_international_og /* IMPORTED_LONG_NAMED_BIT */, odb_all_international_og /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_all_int_og_not_to_HPLMN_country /* IMPORTED_LONG_NAMED_BIT */, odb_all_int_og_not_to_HPLMN_country /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_all_interzonal_og /* IMPORTED_LONG_NAMED_BIT */, odb_all_interzonal_og /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_all_interzonal_og_not_to_HPLMN_country /* IMPORTED_LONG_NAMED_BIT */, odb_all_interzonal_og_not_to_HPLMN_country /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_odb_all_interzonal_og_and_internat_og_not_to_HPLMN_country /* IMPORTED_LONG_NAMED_BIT */, odb_all_interzonal_og_and_internat_og_not_to_HPLMN_country /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_regSub /* IMPORTED_LONG_NAMED_BIT */, regSub /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_trace /* IMPORTED_LONG_NAMED_BIT */, trace /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_all_PrivExcep /* IMPORTED_LONG_NAMED_BIT */, lcs_all_PrivExcep /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_universal /* IMPORTED_LONG_NAMED_BIT */, lcs_universal /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_CallSessionRelated /* IMPORTED_LONG_NAMED_BIT */, lcs_CallSessionRelated /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_CallSessionUnrelated /* IMPORTED_LONG_NAMED_BIT */, lcs_CallSessionUnrelated /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_PLMN_operator /* IMPORTED_LONG_NAMED_BIT */, lcs_PLMN_operator /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_ServiceType /* IMPORTED_LONG_NAMED_BIT */, lcs_ServiceType /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_all_MOLR_SS /* IMPORTED_LONG_NAMED_BIT */, lcs_all_MOLR_SS /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_basicSelfLocation /* IMPORTED_LONG_NAMED_BIT */, lcs_basicSelfLocation /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_autonomousSelfLocation /* IMPORTED_LONG_NAMED_BIT */, lcs_autonomousSelfLocation /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_lcs_transferToThirdParty /* IMPORTED_LONG_NAMED_BIT */, lcs_transferToThirdParty /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_sm_mo_pp /* IMPORTED_LONG_NAMED_BIT */, sm_mo_pp /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_barring_OutgoingCalls /* IMPORTED_LONG_NAMED_BIT */, barring_OutgoingCalls /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_baoc /* IMPORTED_LONG_NAMED_BIT */, baoc /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_boic /* IMPORTED_LONG_NAMED_BIT */, boic /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_boicExHC /* IMPORTED_LONG_NAMED_BIT */, boicExHC /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_localTimeZoneRetrieval /* IMPORTED_LONG_NAMED_BIT */, localTimeZoneRetrieval /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_additionalMsisdn /* IMPORTED_LONG_NAMED_BIT */, additionalMsisdn /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_smsInMME /* IMPORTED_LONG_NAMED_BIT */, smsInMME /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_smsInSGSN /* IMPORTED_LONG_NAMED_BIT */, smsInSGSN /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_ue_Reachability_Notification /* IMPORTED_LONG_NAMED_BIT */, ue_Reachability_Notification /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_state_Location_Information_Retrieval /* IMPORTED_LONG_NAMED_BIT */, state_Location_Information_Retrieval /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_partialPurge /* IMPORTED_LONG_NAMED_BIT */, partialPurge /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_gddInSGSN /* IMPORTED_LONG_NAMED_BIT */, gddInSGSN /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_sgsnCAMELCapability /* IMPORTED_LONG_NAMED_BIT */, sgsnCAMELCapability /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_pcscf_Restoration /* IMPORTED_LONG_NAMED_BIT */, pcscf_Restoration /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_dedicatedCoreNetworks /* IMPORTED_LONG_NAMED_BIT */, dedicatedCoreNetworks /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_non_IP_PDN_Type_APNs /* IMPORTED_LONG_NAMED_BIT */, non_IP_PDN_Type_APNs /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_non_IP_PDP_Type_APNs /* IMPORTED_LONG_NAMED_BIT */, non_IP_PDP_Type_APNs /* IMPORTED_SHORT_NAMED_BIT */, SupportedFeatures_nrAsSecondaryRAT /* IMPORTED_LONG_NAMED_BIT */, nrAsSecondaryRAT /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedFeatures, _encode_SupportedFeatures } from "../MAP-MS-DataTypes/SupportedFeatures.ta.mjs";
import { Ext_SupportedFeatures, Ext_SupportedFeatures_unlicensedSpectrumAsSecondaryRAT /* IMPORTED_LONG_NAMED_BIT */, unlicensedSpectrumAsSecondaryRAT /* IMPORTED_SHORT_NAMED_BIT */, _decode_Ext_SupportedFeatures, _encode_Ext_SupportedFeatures } from "../MAP-MS-DataTypes/Ext-SupportedFeatures.ta.mjs";


/**
 * @summary SGSN_Capability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGSN-Capability ::= SEQUENCE{
 *     solsaSupportIndicator    NULL    OPTIONAL,
 *     extensionContainer    [1] ExtensionContainer    OPTIONAL,
 *     ... ,
 *     superChargerSupportedInServingNetworkEntity    [2] SuperChargerInfo    OPTIONAL ,
 *     gprsEnhancementsSupportIndicator    [3] NULL    OPTIONAL,
 *     supportedCamelPhases     [4] SupportedCamelPhases    OPTIONAL,
 *     supportedLCS-CapabilitySets    [5]  SupportedLCS-CapabilitySets    OPTIONAL,
 *     offeredCamel4CSIs    [6] OfferedCamel4CSIs    OPTIONAL,
 *     smsCallBarringSupportIndicator    [7]    NULL    OPTIONAL,    supportedRAT-TypesIndicator    [8]    SupportedRAT-Types    OPTIONAL,
 *     supportedFeatures    [9] SupportedFeatures    OPTIONAL,
 *     t-adsDataRetrieval    [10] NULL    OPTIONAL,
 *     homogeneousSupportOfIMSVoiceOverPSSessions [11] BOOLEAN    OPTIONAL,
 *     --    "true" indicates homogeneous support, "false" indicates homogeneous non-support
 *     --    in the complete SGSN or MME area
 *     cancellationTypeInitialAttach    [12]    NULL    OPTIONAL,
 *     msisdn-lessOperation-Supported    [14]    NULL    OPTIONAL,
 *     updateofHomogeneousSupportOfIMSVoiceOverPSSessions [15] NULL    OPTIONAL,
 *     reset-ids-Supported    [16]    NULL    OPTIONAL,
 *     ext-SupportedFeatures    [17]    Ext-SupportedFeatures    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class SGSN_Capability {
    constructor (
        /**
         * @summary `solsaSupportIndicator`.
         * @public
         * @readonly
         */
        readonly solsaSupportIndicator: OPTIONAL<NULL>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `superChargerSupportedInServingNetworkEntity`.
         * @public
         * @readonly
         */
        readonly superChargerSupportedInServingNetworkEntity: OPTIONAL<SuperChargerInfo>,
        /**
         * @summary `gprsEnhancementsSupportIndicator`.
         * @public
         * @readonly
         */
        readonly gprsEnhancementsSupportIndicator: OPTIONAL<NULL>,
        /**
         * @summary `supportedCamelPhases`.
         * @public
         * @readonly
         */
        readonly supportedCamelPhases: OPTIONAL<SupportedCamelPhases>,
        /**
         * @summary `supportedLCS_CapabilitySets`.
         * @public
         * @readonly
         */
        readonly supportedLCS_CapabilitySets: OPTIONAL<SupportedLCS_CapabilitySets>,
        /**
         * @summary `offeredCamel4CSIs`.
         * @public
         * @readonly
         */
        readonly offeredCamel4CSIs: OPTIONAL<OfferedCamel4CSIs>,
        /**
         * @summary `smsCallBarringSupportIndicator`.
         * @public
         * @readonly
         */
        readonly smsCallBarringSupportIndicator: OPTIONAL<NULL>,
        /**
         * @summary `supportedRAT_TypesIndicator`.
         * @public
         * @readonly
         */
        readonly supportedRAT_TypesIndicator: OPTIONAL<SupportedRAT_Types>,
        /**
         * @summary `supportedFeatures`.
         * @public
         * @readonly
         */
        readonly supportedFeatures: OPTIONAL<SupportedFeatures>,
        /**
         * @summary `t_adsDataRetrieval`.
         * @public
         * @readonly
         */
        readonly t_adsDataRetrieval: OPTIONAL<NULL>,
        /**
         * @summary `homogeneousSupportOfIMSVoiceOverPSSessions`.
         * @public
         * @readonly
         */
        readonly homogeneousSupportOfIMSVoiceOverPSSessions: OPTIONAL<BOOLEAN>,
        /**
         * @summary `cancellationTypeInitialAttach`.
         * @public
         * @readonly
         */
        readonly cancellationTypeInitialAttach: OPTIONAL<NULL>,
        /**
         * @summary `msisdn_lessOperation_Supported`.
         * @public
         * @readonly
         */
        readonly msisdn_lessOperation_Supported: OPTIONAL<NULL>,
        /**
         * @summary `updateofHomogeneousSupportOfIMSVoiceOverPSSessions`.
         * @public
         * @readonly
         */
        readonly updateofHomogeneousSupportOfIMSVoiceOverPSSessions: OPTIONAL<NULL>,
        /**
         * @summary `reset_ids_Supported`.
         * @public
         * @readonly
         */
        readonly reset_ids_Supported: OPTIONAL<NULL>,
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
     * @summary Restructures an object into a SGSN_Capability
     * @description
     * 
     * This takes an `object` and converts it to a `SGSN_Capability`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SGSN_Capability`.
     * @returns {SGSN_Capability}
     */
    public static _from_object (_o: { [_K in keyof (SGSN_Capability)]: (SGSN_Capability)[_K] }): SGSN_Capability {
        return new SGSN_Capability(_o.solsaSupportIndicator, _o.extensionContainer, _o.superChargerSupportedInServingNetworkEntity, _o.gprsEnhancementsSupportIndicator, _o.supportedCamelPhases, _o.supportedLCS_CapabilitySets, _o.offeredCamel4CSIs, _o.smsCallBarringSupportIndicator, _o.supportedRAT_TypesIndicator, _o.supportedFeatures, _o.t_adsDataRetrieval, _o.homogeneousSupportOfIMSVoiceOverPSSessions, _o.cancellationTypeInitialAttach, _o.msisdn_lessOperation_Supported, _o.updateofHomogeneousSupportOfIMSVoiceOverPSSessions, _o.reset_ids_Supported, _o.ext_SupportedFeatures, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SGSN_Capability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SGSN_Capability: $.ComponentSpec[] = [
    new $.ComponentSpec("solsaSupportIndicator", true, $.hasTag(_TagClass.universal, 5)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SGSN_Capability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SGSN_Capability: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SGSN_Capability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SGSN_Capability: $.ComponentSpec[] = [
    new $.ComponentSpec("superChargerSupportedInServingNetworkEntity", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("gprsEnhancementsSupportIndicator", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("supportedCamelPhases", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("supportedLCS-CapabilitySets", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("offeredCamel4CSIs", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("smsCallBarringSupportIndicator", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("supportedRAT-TypesIndicator", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("supportedFeatures", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("t-adsDataRetrieval", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("homogeneousSupportOfIMSVoiceOverPSSessions", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("cancellationTypeInitialAttach", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("msisdn-lessOperation-Supported", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("updateofHomogeneousSupportOfIMSVoiceOverPSSessions", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("reset-ids-Supported", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("ext-SupportedFeatures", true, $.hasTag(_TagClass.context, 17))
];

let _cached_decoder_for_SGSN_Capability: $.ASN1Decoder<SGSN_Capability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SGSN_Capability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SGSN_Capability (el: _Element): SGSN_Capability {
    if (!_cached_decoder_for_SGSN_Capability) { _cached_decoder_for_SGSN_Capability = function (el: _Element): SGSN_Capability {
    let solsaSupportIndicator: OPTIONAL<NULL> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let superChargerSupportedInServingNetworkEntity: OPTIONAL<SuperChargerInfo> = undefined;
    let gprsEnhancementsSupportIndicator: OPTIONAL<NULL> = undefined;
    let supportedCamelPhases: OPTIONAL<SupportedCamelPhases> = undefined;
    let supportedLCS_CapabilitySets: OPTIONAL<SupportedLCS_CapabilitySets> = undefined;
    let offeredCamel4CSIs: OPTIONAL<OfferedCamel4CSIs> = undefined;
    let smsCallBarringSupportIndicator: OPTIONAL<NULL> = undefined;
    let supportedRAT_TypesIndicator: OPTIONAL<SupportedRAT_Types> = undefined;
    let supportedFeatures: OPTIONAL<SupportedFeatures> = undefined;
    let t_adsDataRetrieval: OPTIONAL<NULL> = undefined;
    let homogeneousSupportOfIMSVoiceOverPSSessions: OPTIONAL<BOOLEAN> = undefined;
    let cancellationTypeInitialAttach: OPTIONAL<NULL> = undefined;
    let msisdn_lessOperation_Supported: OPTIONAL<NULL> = undefined;
    let updateofHomogeneousSupportOfIMSVoiceOverPSSessions: OPTIONAL<NULL> = undefined;
    let reset_ids_Supported: OPTIONAL<NULL> = undefined;
    let ext_SupportedFeatures: OPTIONAL<Ext_SupportedFeatures> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "solsaSupportIndicator": (_el: _Element): void => { solsaSupportIndicator = $._decodeNull(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "superChargerSupportedInServingNetworkEntity": (_el: _Element): void => { superChargerSupportedInServingNetworkEntity = $._decode_explicit<SuperChargerInfo>(() => _decode_SuperChargerInfo)(_el); },
        "gprsEnhancementsSupportIndicator": (_el: _Element): void => { gprsEnhancementsSupportIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "supportedCamelPhases": (_el: _Element): void => { supportedCamelPhases = $._decode_implicit<SupportedCamelPhases>(() => _decode_SupportedCamelPhases)(_el); },
        "supportedLCS-CapabilitySets": (_el: _Element): void => { supportedLCS_CapabilitySets = $._decode_implicit<SupportedLCS_CapabilitySets>(() => _decode_SupportedLCS_CapabilitySets)(_el); },
        "offeredCamel4CSIs": (_el: _Element): void => { offeredCamel4CSIs = $._decode_implicit<OfferedCamel4CSIs>(() => _decode_OfferedCamel4CSIs)(_el); },
        "smsCallBarringSupportIndicator": (_el: _Element): void => { smsCallBarringSupportIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "supportedRAT-TypesIndicator": (_el: _Element): void => { supportedRAT_TypesIndicator = $._decode_implicit<SupportedRAT_Types>(() => _decode_SupportedRAT_Types)(_el); },
        "supportedFeatures": (_el: _Element): void => { supportedFeatures = $._decode_implicit<SupportedFeatures>(() => _decode_SupportedFeatures)(_el); },
        "t-adsDataRetrieval": (_el: _Element): void => { t_adsDataRetrieval = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "homogeneousSupportOfIMSVoiceOverPSSessions": (_el: _Element): void => { homogeneousSupportOfIMSVoiceOverPSSessions = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "cancellationTypeInitialAttach": (_el: _Element): void => { cancellationTypeInitialAttach = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "msisdn-lessOperation-Supported": (_el: _Element): void => { msisdn_lessOperation_Supported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "updateofHomogeneousSupportOfIMSVoiceOverPSSessions": (_el: _Element): void => { updateofHomogeneousSupportOfIMSVoiceOverPSSessions = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "reset-ids-Supported": (_el: _Element): void => { reset_ids_Supported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "ext-SupportedFeatures": (_el: _Element): void => { ext_SupportedFeatures = $._decode_implicit<Ext_SupportedFeatures>(() => _decode_Ext_SupportedFeatures)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SGSN_Capability,
        _extension_additions_list_spec_for_SGSN_Capability,
        _root_component_type_list_2_spec_for_SGSN_Capability,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SGSN_Capability(
        solsaSupportIndicator,
        extensionContainer,
        superChargerSupportedInServingNetworkEntity,
        gprsEnhancementsSupportIndicator,
        supportedCamelPhases,
        supportedLCS_CapabilitySets,
        offeredCamel4CSIs,
        smsCallBarringSupportIndicator,
        supportedRAT_TypesIndicator,
        supportedFeatures,
        t_adsDataRetrieval,
        homogeneousSupportOfIMSVoiceOverPSSessions,
        cancellationTypeInitialAttach,
        msisdn_lessOperation_Supported,
        updateofHomogeneousSupportOfIMSVoiceOverPSSessions,
        reset_ids_Supported,
        ext_SupportedFeatures,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SGSN_Capability(el);
}

let _cached_encoder_for_SGSN_Capability: $.ASN1Encoder<SGSN_Capability> | null = null;

/**
 * @summary Encodes a(n) SGSN_Capability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SGSN_Capability, encoded as an ASN.1 Element.
 */
export
function _encode_SGSN_Capability (value: SGSN_Capability, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SGSN_Capability) { _cached_encoder_for_SGSN_Capability = function (value: SGSN_Capability, elGetter: $.ASN1Encoder<SGSN_Capability>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.solsaSupportIndicator === undefined) ? undefined : $._encodeNull(value.solsaSupportIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.superChargerSupportedInServingNetworkEntity === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_SuperChargerInfo, $.BER)(value.superChargerSupportedInServingNetworkEntity, $.BER)),
            /* IF_ABSENT  */ ((value.gprsEnhancementsSupportIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.gprsEnhancementsSupportIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.supportedCamelPhases === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SupportedCamelPhases, $.BER)(value.supportedCamelPhases, $.BER)),
            /* IF_ABSENT  */ ((value.supportedLCS_CapabilitySets === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SupportedLCS_CapabilitySets, $.BER)(value.supportedLCS_CapabilitySets, $.BER)),
            /* IF_ABSENT  */ ((value.offeredCamel4CSIs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_OfferedCamel4CSIs, $.BER)(value.offeredCamel4CSIs, $.BER)),
            /* IF_ABSENT  */ ((value.smsCallBarringSupportIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value.smsCallBarringSupportIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.supportedRAT_TypesIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_SupportedRAT_Types, $.BER)(value.supportedRAT_TypesIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.supportedFeatures === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_SupportedFeatures, $.BER)(value.supportedFeatures, $.BER)),
            /* IF_ABSENT  */ ((value.t_adsDataRetrieval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER)(value.t_adsDataRetrieval, $.BER)),
            /* IF_ABSENT  */ ((value.homogeneousSupportOfIMSVoiceOverPSSessions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeBoolean, $.BER)(value.homogeneousSupportOfIMSVoiceOverPSSessions, $.BER)),
            /* IF_ABSENT  */ ((value.cancellationTypeInitialAttach === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeNull, $.BER)(value.cancellationTypeInitialAttach, $.BER)),
            /* IF_ABSENT  */ ((value.msisdn_lessOperation_Supported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeNull, $.BER)(value.msisdn_lessOperation_Supported, $.BER)),
            /* IF_ABSENT  */ ((value.updateofHomogeneousSupportOfIMSVoiceOverPSSessions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => $._encodeNull, $.BER)(value.updateofHomogeneousSupportOfIMSVoiceOverPSSessions, $.BER)),
            /* IF_ABSENT  */ ((value.reset_ids_Supported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => $._encodeNull, $.BER)(value.reset_ids_Supported, $.BER)),
            /* IF_ABSENT  */ ((value.ext_SupportedFeatures === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_Ext_SupportedFeatures, $.BER)(value.ext_SupportedFeatures, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SGSN_Capability(value, elGetter);
}


/* eslint-enable */
