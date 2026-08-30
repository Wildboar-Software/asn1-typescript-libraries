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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { ExtendedRoutingInfo, _decode_ExtendedRoutingInfo, _encode_ExtendedRoutingInfo } from "../MAP-CH-DataTypes/ExtendedRoutingInfo.ta.mjs";
// export { ExtendedRoutingInfo, _decode_ExtendedRoutingInfo, _encode_ExtendedRoutingInfo } from "../MAP-CH-DataTypes/ExtendedRoutingInfo.ta.mjs";
import { CUG_CheckInfo, _decode_CUG_CheckInfo, _encode_CUG_CheckInfo } from "../MAP-CH-DataTypes/CUG-CheckInfo.ta.mjs";
// export { CUG_CheckInfo, _decode_CUG_CheckInfo, _encode_CUG_CheckInfo } from "../MAP-CH-DataTypes/CUG-CheckInfo.ta.mjs";
import { SubscriberInfo, _decode_SubscriberInfo, _encode_SubscriberInfo } from "../MAP-MS-DataTypes/SubscriberInfo.ta.mjs";
// export { SubscriberInfo, _decode_SubscriberInfo, _encode_SubscriberInfo } from "../MAP-MS-DataTypes/SubscriberInfo.ta.mjs";
import { SS_List, _decode_SS_List, _encode_SS_List } from "../MAP-SS-DataTypes/SS-List.ta.mjs";
// export { SS_List, _decode_SS_List, _encode_SS_List } from "../MAP-SS-DataTypes/SS-List.ta.mjs";
import { Ext_BasicServiceCode, _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";
// export { Ext_BasicServiceCode, _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { NAEA_PreferredCI, _decode_NAEA_PreferredCI, _encode_NAEA_PreferredCI } from "../MAP-CommonDataTypes/NAEA-PreferredCI.ta.mjs";
// export { NAEA_PreferredCI, _decode_NAEA_PreferredCI, _encode_NAEA_PreferredCI } from "../MAP-CommonDataTypes/NAEA-PreferredCI.ta.mjs";
import { CCBS_Indicators, _decode_CCBS_Indicators, _encode_CCBS_Indicators } from "../MAP-CH-DataTypes/CCBS-Indicators.ta.mjs";
// export { CCBS_Indicators, _decode_CCBS_Indicators, _encode_CCBS_Indicators } from "../MAP-CH-DataTypes/CCBS-Indicators.ta.mjs";
import { NumberPortabilityStatus, _enum_for_NumberPortabilityStatus, NumberPortabilityStatus_notKnownToBePorted /* IMPORTED_LONG_ENUMERATION_ITEM */, notKnownToBePorted /* IMPORTED_SHORT_ENUMERATION_ITEM */, NumberPortabilityStatus_ownNumberPortedOut /* IMPORTED_LONG_ENUMERATION_ITEM */, ownNumberPortedOut /* IMPORTED_SHORT_ENUMERATION_ITEM */, NumberPortabilityStatus_foreignNumberPortedToForeignNetwork /* IMPORTED_LONG_ENUMERATION_ITEM */, foreignNumberPortedToForeignNetwork /* IMPORTED_SHORT_ENUMERATION_ITEM */, NumberPortabilityStatus_ownNumberNotPortedOut /* IMPORTED_LONG_ENUMERATION_ITEM */, ownNumberNotPortedOut /* IMPORTED_SHORT_ENUMERATION_ITEM */, NumberPortabilityStatus_foreignNumberPortedIn /* IMPORTED_LONG_ENUMERATION_ITEM */, foreignNumberPortedIn /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NumberPortabilityStatus, _encode_NumberPortabilityStatus } from "../MAP-MS-DataTypes/NumberPortabilityStatus.ta.mjs";
// export { NumberPortabilityStatus, _enum_for_NumberPortabilityStatus, NumberPortabilityStatus_notKnownToBePorted /* IMPORTED_LONG_ENUMERATION_ITEM */, notKnownToBePorted /* IMPORTED_SHORT_ENUMERATION_ITEM */, NumberPortabilityStatus_ownNumberPortedOut /* IMPORTED_LONG_ENUMERATION_ITEM */, ownNumberPortedOut /* IMPORTED_SHORT_ENUMERATION_ITEM */, NumberPortabilityStatus_foreignNumberPortedToForeignNetwork /* IMPORTED_LONG_ENUMERATION_ITEM */, foreignNumberPortedToForeignNetwork /* IMPORTED_SHORT_ENUMERATION_ITEM */, NumberPortabilityStatus_ownNumberNotPortedOut /* IMPORTED_LONG_ENUMERATION_ITEM */, ownNumberNotPortedOut /* IMPORTED_SHORT_ENUMERATION_ITEM */, NumberPortabilityStatus_foreignNumberPortedIn /* IMPORTED_LONG_ENUMERATION_ITEM */, foreignNumberPortedIn /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NumberPortabilityStatus, _encode_NumberPortabilityStatus } from "../MAP-MS-DataTypes/NumberPortabilityStatus.ta.mjs";
import { IST_AlertTimerValue, _decode_IST_AlertTimerValue, _encode_IST_AlertTimerValue } from "../MAP-MS-DataTypes/IST-AlertTimerValue.ta.mjs";
// export { IST_AlertTimerValue, _decode_IST_AlertTimerValue, _encode_IST_AlertTimerValue } from "../MAP-MS-DataTypes/IST-AlertTimerValue.ta.mjs";
import { SupportedCamelPhases, SupportedCamelPhases_phase1 /* IMPORTED_LONG_NAMED_BIT */, phase1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase2 /* IMPORTED_LONG_NAMED_BIT */, phase2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase3 /* IMPORTED_LONG_NAMED_BIT */, phase3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase4 /* IMPORTED_LONG_NAMED_BIT */, phase4 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedCamelPhases, _encode_SupportedCamelPhases } from "../MAP-MS-DataTypes/SupportedCamelPhases.ta.mjs";
// export { SupportedCamelPhases, SupportedCamelPhases_phase1 /* IMPORTED_LONG_NAMED_BIT */, phase1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase2 /* IMPORTED_LONG_NAMED_BIT */, phase2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase3 /* IMPORTED_LONG_NAMED_BIT */, phase3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase4 /* IMPORTED_LONG_NAMED_BIT */, phase4 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedCamelPhases, _encode_SupportedCamelPhases } from "../MAP-MS-DataTypes/SupportedCamelPhases.ta.mjs";
import { OfferedCamel4CSIs, OfferedCamel4CSIs_o_csi /* IMPORTED_LONG_NAMED_BIT */, o_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_d_csi /* IMPORTED_LONG_NAMED_BIT */, d_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_vt_csi /* IMPORTED_LONG_NAMED_BIT */, vt_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_t_csi /* IMPORTED_LONG_NAMED_BIT */, t_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mt_sms_csi /* IMPORTED_LONG_NAMED_BIT */, mt_sms_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mg_csi /* IMPORTED_LONG_NAMED_BIT */, mg_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_psi_enhancements /* IMPORTED_LONG_NAMED_BIT */, psi_enhancements /* IMPORTED_SHORT_NAMED_BIT */, _decode_OfferedCamel4CSIs, _encode_OfferedCamel4CSIs } from "../MAP-MS-DataTypes/OfferedCamel4CSIs.ta.mjs";
// export { OfferedCamel4CSIs, OfferedCamel4CSIs_o_csi /* IMPORTED_LONG_NAMED_BIT */, o_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_d_csi /* IMPORTED_LONG_NAMED_BIT */, d_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_vt_csi /* IMPORTED_LONG_NAMED_BIT */, vt_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_t_csi /* IMPORTED_LONG_NAMED_BIT */, t_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mt_sms_csi /* IMPORTED_LONG_NAMED_BIT */, mt_sms_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mg_csi /* IMPORTED_LONG_NAMED_BIT */, mg_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_psi_enhancements /* IMPORTED_LONG_NAMED_BIT */, psi_enhancements /* IMPORTED_SHORT_NAMED_BIT */, _decode_OfferedCamel4CSIs, _encode_OfferedCamel4CSIs } from "../MAP-MS-DataTypes/OfferedCamel4CSIs.ta.mjs";
import { RoutingInfo, _decode_RoutingInfo, _encode_RoutingInfo } from "../MAP-CH-DataTypes/RoutingInfo.ta.mjs";
// export { RoutingInfo, _decode_RoutingInfo, _encode_RoutingInfo } from "../MAP-CH-DataTypes/RoutingInfo.ta.mjs";
import { AllowedServices, AllowedServices_firstServiceAllowed /* IMPORTED_LONG_NAMED_BIT */, firstServiceAllowed /* IMPORTED_SHORT_NAMED_BIT */, AllowedServices_secondServiceAllowed /* IMPORTED_LONG_NAMED_BIT */, secondServiceAllowed /* IMPORTED_SHORT_NAMED_BIT */, _decode_AllowedServices, _encode_AllowedServices } from "../MAP-CH-DataTypes/AllowedServices.ta.mjs";
// export { AllowedServices, AllowedServices_firstServiceAllowed /* IMPORTED_LONG_NAMED_BIT */, firstServiceAllowed /* IMPORTED_SHORT_NAMED_BIT */, AllowedServices_secondServiceAllowed /* IMPORTED_LONG_NAMED_BIT */, secondServiceAllowed /* IMPORTED_SHORT_NAMED_BIT */, _decode_AllowedServices, _encode_AllowedServices } from "../MAP-CH-DataTypes/AllowedServices.ta.mjs";
import { UnavailabilityCause, _enum_for_UnavailabilityCause, UnavailabilityCause_bearerServiceNotProvisioned /* IMPORTED_LONG_ENUMERATION_ITEM */, bearerServiceNotProvisioned /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnavailabilityCause_teleserviceNotProvisioned /* IMPORTED_LONG_ENUMERATION_ITEM */, teleserviceNotProvisioned /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnavailabilityCause_absentSubscriber /* IMPORTED_LONG_ENUMERATION_ITEM */, absentSubscriber /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnavailabilityCause_busySubscriber /* IMPORTED_LONG_ENUMERATION_ITEM */, busySubscriber /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnavailabilityCause_callBarred /* IMPORTED_LONG_ENUMERATION_ITEM */, callBarred /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnavailabilityCause_cug_Reject /* IMPORTED_LONG_ENUMERATION_ITEM */, cug_Reject /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UnavailabilityCause, _encode_UnavailabilityCause } from "../MAP-CH-DataTypes/UnavailabilityCause.ta.mjs";
// export { UnavailabilityCause, _enum_for_UnavailabilityCause, UnavailabilityCause_bearerServiceNotProvisioned /* IMPORTED_LONG_ENUMERATION_ITEM */, bearerServiceNotProvisioned /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnavailabilityCause_teleserviceNotProvisioned /* IMPORTED_LONG_ENUMERATION_ITEM */, teleserviceNotProvisioned /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnavailabilityCause_absentSubscriber /* IMPORTED_LONG_ENUMERATION_ITEM */, absentSubscriber /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnavailabilityCause_busySubscriber /* IMPORTED_LONG_ENUMERATION_ITEM */, busySubscriber /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnavailabilityCause_callBarred /* IMPORTED_LONG_ENUMERATION_ITEM */, callBarred /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnavailabilityCause_cug_Reject /* IMPORTED_LONG_ENUMERATION_ITEM */, cug_Reject /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UnavailabilityCause, _encode_UnavailabilityCause } from "../MAP-CH-DataTypes/UnavailabilityCause.ta.mjs";
import { ExternalSignalInfo, _decode_ExternalSignalInfo, _encode_ExternalSignalInfo } from "../MAP-CommonDataTypes/ExternalSignalInfo.ta.mjs";
// export { ExternalSignalInfo, _decode_ExternalSignalInfo, _encode_ExternalSignalInfo } from "../MAP-CommonDataTypes/ExternalSignalInfo.ta.mjs";


/**
 * @summary SendRoutingInfoRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendRoutingInfoRes ::= [3] SEQUENCE {
 *     imsi    [9] IMSI    OPTIONAL,
 *     -- IMSI must be present if SendRoutingInfoRes is not segmented.
 *     -- If the TC-Result-NL segmentation option is taken the IMSI must be
 *     -- present in one segmented transmission of SendRoutingInfoRes.
 *     extendedRoutingInfo    ExtendedRoutingInfo    OPTIONAL,
 *     cug-CheckInfo    [3] CUG-CheckInfo    OPTIONAL,
 *     cugSubscriptionFlag    [6] NULL    OPTIONAL,
 *     subscriberInfo    [7] SubscriberInfo    OPTIONAL,
 *     ss-List    [1] SS-List    OPTIONAL,
 *     basicService    [5] Ext-BasicServiceCode    OPTIONAL,
 *     forwardingInterrogationRequired    [4] NULL    OPTIONAL,
 *     vmsc-Address    [2] ISDN-AddressString    OPTIONAL,
 *     extensionContainer    [0] ExtensionContainer    OPTIONAL,
 *     ... ,
 *     naea-PreferredCI    [10] NAEA-PreferredCI    OPTIONAL,
 *     -- naea-PreferredCI is included at the discretion of the HLR operator.
 *     ccbs-Indicators    [11] CCBS-Indicators    OPTIONAL,
 *     msisdn    [12] ISDN-AddressString    OPTIONAL,
 *     numberPortabilityStatus    [13] NumberPortabilityStatus    OPTIONAL,
 *     istAlertTimer    [14] IST-AlertTimerValue    OPTIONAL,
 *     supportedCamelPhasesInVMSC    [15]    SupportedCamelPhases    OPTIONAL,
 *     offeredCamel4CSIsInVMSC    [16] OfferedCamel4CSIs    OPTIONAL,
 *     routingInfo2    [17] RoutingInfo    OPTIONAL,
 *     ss-List2    [18] SS-List    OPTIONAL,
 *     basicService2    [19] Ext-BasicServiceCode    OPTIONAL,
 *     allowedServices    [20] AllowedServices    OPTIONAL,
 *     unavailabilityCause    [21] UnavailabilityCause    OPTIONAL,
 *     releaseResourcesSupported    [22] NULL    OPTIONAL,
 *     gsm-BearerCapability    [23] ExternalSignalInfo    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class SendRoutingInfoRes {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<IMSI>,
        /**
         * @summary `extendedRoutingInfo`.
         * @public
         * @readonly
         */
        readonly extendedRoutingInfo: OPTIONAL<ExtendedRoutingInfo>,
        /**
         * @summary `cug_CheckInfo`.
         * @public
         * @readonly
         */
        readonly cug_CheckInfo: OPTIONAL<CUG_CheckInfo>,
        /**
         * @summary `cugSubscriptionFlag`.
         * @public
         * @readonly
         */
        readonly cugSubscriptionFlag: OPTIONAL<NULL>,
        /**
         * @summary `subscriberInfo`.
         * @public
         * @readonly
         */
        readonly subscriberInfo: OPTIONAL<SubscriberInfo>,
        /**
         * @summary `ss_List`.
         * @public
         * @readonly
         */
        readonly ss_List: OPTIONAL<SS_List>,
        /**
         * @summary `basicService`.
         * @public
         * @readonly
         */
        readonly basicService: OPTIONAL<Ext_BasicServiceCode>,
        /**
         * @summary `forwardingInterrogationRequired`.
         * @public
         * @readonly
         */
        readonly forwardingInterrogationRequired: OPTIONAL<NULL>,
        /**
         * @summary `vmsc_Address`.
         * @public
         * @readonly
         */
        readonly vmsc_Address: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `naea_PreferredCI`.
         * @public
         * @readonly
         */
        readonly naea_PreferredCI: OPTIONAL<NAEA_PreferredCI>,
        /**
         * @summary `ccbs_Indicators`.
         * @public
         * @readonly
         */
        readonly ccbs_Indicators: OPTIONAL<CCBS_Indicators>,
        /**
         * @summary `msisdn`.
         * @public
         * @readonly
         */
        readonly msisdn: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `numberPortabilityStatus`.
         * @public
         * @readonly
         */
        readonly numberPortabilityStatus: OPTIONAL<NumberPortabilityStatus>,
        /**
         * @summary `istAlertTimer`.
         * @public
         * @readonly
         */
        readonly istAlertTimer: OPTIONAL<IST_AlertTimerValue>,
        /**
         * @summary `supportedCamelPhasesInVMSC`.
         * @public
         * @readonly
         */
        readonly supportedCamelPhasesInVMSC: OPTIONAL<SupportedCamelPhases>,
        /**
         * @summary `offeredCamel4CSIsInVMSC`.
         * @public
         * @readonly
         */
        readonly offeredCamel4CSIsInVMSC: OPTIONAL<OfferedCamel4CSIs>,
        /**
         * @summary `routingInfo2`.
         * @public
         * @readonly
         */
        readonly routingInfo2: OPTIONAL<RoutingInfo>,
        /**
         * @summary `ss_List2`.
         * @public
         * @readonly
         */
        readonly ss_List2: OPTIONAL<SS_List>,
        /**
         * @summary `basicService2`.
         * @public
         * @readonly
         */
        readonly basicService2: OPTIONAL<Ext_BasicServiceCode>,
        /**
         * @summary `allowedServices`.
         * @public
         * @readonly
         */
        readonly allowedServices: OPTIONAL<AllowedServices>,
        /**
         * @summary `unavailabilityCause`.
         * @public
         * @readonly
         */
        readonly unavailabilityCause: OPTIONAL<UnavailabilityCause>,
        /**
         * @summary `releaseResourcesSupported`.
         * @public
         * @readonly
         */
        readonly releaseResourcesSupported: OPTIONAL<NULL>,
        /**
         * @summary `gsm_BearerCapability`.
         * @public
         * @readonly
         */
        readonly gsm_BearerCapability: OPTIONAL<ExternalSignalInfo>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SendRoutingInfoRes
     * @description
     * 
     * This takes an `object` and converts it to a `SendRoutingInfoRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendRoutingInfoRes`.
     * @returns {SendRoutingInfoRes}
     */
    public static _from_object (_o: { [_K in keyof (SendRoutingInfoRes)]: (SendRoutingInfoRes)[_K] }): SendRoutingInfoRes {
        return new SendRoutingInfoRes(_o.imsi, _o.extendedRoutingInfo, _o.cug_CheckInfo, _o.cugSubscriptionFlag, _o.subscriberInfo, _o.ss_List, _o.basicService, _o.forwardingInterrogationRequired, _o.vmsc_Address, _o.extensionContainer, _o.naea_PreferredCI, _o.ccbs_Indicators, _o.msisdn, _o.numberPortabilityStatus, _o.istAlertTimer, _o.supportedCamelPhasesInVMSC, _o.offeredCamel4CSIsInVMSC, _o.routingInfo2, _o.ss_List2, _o.basicService2, _o.allowedServices, _o.unavailabilityCause, _o.releaseResourcesSupported, _o.gsm_BearerCapability, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `numberPortabilityStatus`
         * @public
         * @static
         */

    public static _enum_for_numberPortabilityStatus = _enum_for_NumberPortabilityStatus;        /**
         * @summary The enum used as the type of the component `unavailabilityCause`
         * @public
         * @static
         */

    public static _enum_for_unavailabilityCause = _enum_for_UnavailabilityCause;
}

/**
 * @summary The Leading Root Component Types of SendRoutingInfoRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendRoutingInfoRes: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("extendedRoutingInfo", true, $.or($.hasAnyTag, $.hasTag(_TagClass.context, 8)), undefined, undefined),
    new $.ComponentSpec("cug-CheckInfo", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("cugSubscriptionFlag", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("subscriberInfo", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("ss-List", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("basicService", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("forwardingInterrogationRequired", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("vmsc-Address", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SendRoutingInfoRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendRoutingInfoRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendRoutingInfoRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendRoutingInfoRes: $.ComponentSpec[] = [
    new $.ComponentSpec("naea-PreferredCI", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("ccbs-Indicators", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("msisdn", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("numberPortabilityStatus", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("istAlertTimer", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("supportedCamelPhasesInVMSC", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("offeredCamel4CSIsInVMSC", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("routingInfo2", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("ss-List2", true, $.hasTag(_TagClass.context, 18), undefined, undefined),
    new $.ComponentSpec("basicService2", true, $.hasTag(_TagClass.context, 19), undefined, undefined),
    new $.ComponentSpec("allowedServices", true, $.hasTag(_TagClass.context, 20), undefined, undefined),
    new $.ComponentSpec("unavailabilityCause", true, $.hasTag(_TagClass.context, 21), undefined, undefined),
    new $.ComponentSpec("releaseResourcesSupported", true, $.hasTag(_TagClass.context, 22), undefined, undefined),
    new $.ComponentSpec("gsm-BearerCapability", true, $.hasTag(_TagClass.context, 23), undefined, undefined)
];

let _cached_decoder_for_SendRoutingInfoRes: $.ASN1Decoder<SendRoutingInfoRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendRoutingInfoRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendRoutingInfoRes (el: _Element): SendRoutingInfoRes {
    if (!_cached_decoder_for_SendRoutingInfoRes) { _cached_decoder_for_SendRoutingInfoRes = $._decode_implicit<SendRoutingInfoRes>(() => function (el: _Element): SendRoutingInfoRes {
    let imsi: OPTIONAL<IMSI>;
    let extendedRoutingInfo: OPTIONAL<ExtendedRoutingInfo>;
    let cug_CheckInfo: OPTIONAL<CUG_CheckInfo>;
    let cugSubscriptionFlag: OPTIONAL<NULL>;
    let subscriberInfo: OPTIONAL<SubscriberInfo>;
    let ss_List: OPTIONAL<SS_List>;
    let basicService: OPTIONAL<Ext_BasicServiceCode>;
    let forwardingInterrogationRequired: OPTIONAL<NULL>;
    let vmsc_Address: OPTIONAL<ISDN_AddressString>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let naea_PreferredCI: OPTIONAL<NAEA_PreferredCI>;
    let ccbs_Indicators: OPTIONAL<CCBS_Indicators>;
    let msisdn: OPTIONAL<ISDN_AddressString>;
    let numberPortabilityStatus: OPTIONAL<NumberPortabilityStatus>;
    let istAlertTimer: OPTIONAL<IST_AlertTimerValue>;
    let supportedCamelPhasesInVMSC: OPTIONAL<SupportedCamelPhases>;
    let offeredCamel4CSIsInVMSC: OPTIONAL<OfferedCamel4CSIs>;
    let routingInfo2: OPTIONAL<RoutingInfo>;
    let ss_List2: OPTIONAL<SS_List>;
    let basicService2: OPTIONAL<Ext_BasicServiceCode>;
    let allowedServices: OPTIONAL<AllowedServices>;
    let unavailabilityCause: OPTIONAL<UnavailabilityCause>;
    let releaseResourcesSupported: OPTIONAL<NULL>;
    let gsm_BearerCapability: OPTIONAL<ExternalSignalInfo>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "extendedRoutingInfo": (_el: _Element): void => { extendedRoutingInfo = _decode_ExtendedRoutingInfo(_el); },
        "cug-CheckInfo": (_el: _Element): void => { cug_CheckInfo = $._decode_implicit<CUG_CheckInfo>(() => _decode_CUG_CheckInfo)(_el); },
        "cugSubscriptionFlag": (_el: _Element): void => { cugSubscriptionFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "subscriberInfo": (_el: _Element): void => { subscriberInfo = $._decode_implicit<SubscriberInfo>(() => _decode_SubscriberInfo)(_el); },
        "ss-List": (_el: _Element): void => { ss_List = $._decode_implicit<SS_List>(() => _decode_SS_List)(_el); },
        "basicService": (_el: _Element): void => { basicService = $._decode_explicit<Ext_BasicServiceCode>(() => _decode_Ext_BasicServiceCode)(_el); },
        "forwardingInterrogationRequired": (_el: _Element): void => { forwardingInterrogationRequired = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "vmsc-Address": (_el: _Element): void => { vmsc_Address = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "naea-PreferredCI": (_el: _Element): void => { naea_PreferredCI = $._decode_implicit<NAEA_PreferredCI>(() => _decode_NAEA_PreferredCI)(_el); },
        "ccbs-Indicators": (_el: _Element): void => { ccbs_Indicators = $._decode_implicit<CCBS_Indicators>(() => _decode_CCBS_Indicators)(_el); },
        "msisdn": (_el: _Element): void => { msisdn = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "numberPortabilityStatus": (_el: _Element): void => { numberPortabilityStatus = $._decode_implicit<NumberPortabilityStatus>(() => _decode_NumberPortabilityStatus)(_el); },
        "istAlertTimer": (_el: _Element): void => { istAlertTimer = $._decode_implicit<IST_AlertTimerValue>(() => _decode_IST_AlertTimerValue)(_el); },
        "supportedCamelPhasesInVMSC": (_el: _Element): void => { supportedCamelPhasesInVMSC = $._decode_implicit<SupportedCamelPhases>(() => _decode_SupportedCamelPhases)(_el); },
        "offeredCamel4CSIsInVMSC": (_el: _Element): void => { offeredCamel4CSIsInVMSC = $._decode_implicit<OfferedCamel4CSIs>(() => _decode_OfferedCamel4CSIs)(_el); },
        "routingInfo2": (_el: _Element): void => { routingInfo2 = $._decode_explicit<RoutingInfo>(() => _decode_RoutingInfo)(_el); },
        "ss-List2": (_el: _Element): void => { ss_List2 = $._decode_implicit<SS_List>(() => _decode_SS_List)(_el); },
        "basicService2": (_el: _Element): void => { basicService2 = $._decode_explicit<Ext_BasicServiceCode>(() => _decode_Ext_BasicServiceCode)(_el); },
        "allowedServices": (_el: _Element): void => { allowedServices = $._decode_implicit<AllowedServices>(() => _decode_AllowedServices)(_el); },
        "unavailabilityCause": (_el: _Element): void => { unavailabilityCause = $._decode_implicit<UnavailabilityCause>(() => _decode_UnavailabilityCause)(_el); },
        "releaseResourcesSupported": (_el: _Element): void => { releaseResourcesSupported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "gsm-BearerCapability": (_el: _Element): void => { gsm_BearerCapability = $._decode_implicit<ExternalSignalInfo>(() => _decode_ExternalSignalInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendRoutingInfoRes,
        _extension_additions_list_spec_for_SendRoutingInfoRes,
        _root_component_type_list_2_spec_for_SendRoutingInfoRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SendRoutingInfoRes(
        imsi,
        extendedRoutingInfo,
        cug_CheckInfo,
        cugSubscriptionFlag,
        subscriberInfo,
        ss_List,
        basicService,
        forwardingInterrogationRequired,
        vmsc_Address,
        extensionContainer,
        naea_PreferredCI,
        ccbs_Indicators,
        msisdn,
        numberPortabilityStatus,
        istAlertTimer,
        supportedCamelPhasesInVMSC,
        offeredCamel4CSIsInVMSC,
        routingInfo2,
        ss_List2,
        basicService2,
        allowedServices,
        unavailabilityCause,
        releaseResourcesSupported,
        gsm_BearerCapability,
        _unrecognizedExtensionsList
    );
}); }
    return _cached_decoder_for_SendRoutingInfoRes(el);
}

let _cached_encoder_for_SendRoutingInfoRes: $.ASN1Encoder<SendRoutingInfoRes> | null = null;

/**
 * @summary Encodes a(n) SendRoutingInfoRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendRoutingInfoRes, encoded as an ASN.1 Element.
 */
export
function _encode_SendRoutingInfoRes (value: SendRoutingInfoRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendRoutingInfoRes) { _cached_encoder_for_SendRoutingInfoRes = $._encode_implicit(_TagClass.context, 3, () => function (value: SendRoutingInfoRes, elGetter: $.ASN1Encoder<SendRoutingInfoRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_IMSI, $.BER)(value.imsi, $.BER)),
            /* IF_ABSENT  */ ((value.extendedRoutingInfo === undefined) ? undefined : _encode_ExtendedRoutingInfo(value.extendedRoutingInfo, $.BER)),
            /* IF_ABSENT  */ ((value.cug_CheckInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CUG_CheckInfo, $.BER)(value.cug_CheckInfo, $.BER)),
            /* IF_ABSENT  */ ((value.cugSubscriptionFlag === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER)(value.cugSubscriptionFlag, $.BER)),
            /* IF_ABSENT  */ ((value.subscriberInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_SubscriberInfo, $.BER)(value.subscriberInfo, $.BER)),
            /* IF_ABSENT  */ ((value.ss_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SS_List, $.BER)(value.ss_List, $.BER)),
            /* IF_ABSENT  */ ((value.basicService === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_Ext_BasicServiceCode, $.BER)(value.basicService, $.BER)),
            /* IF_ABSENT  */ ((value.forwardingInterrogationRequired === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.forwardingInterrogationRequired, $.BER)),
            /* IF_ABSENT  */ ((value.vmsc_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ISDN_AddressString, $.BER)(value.vmsc_Address, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.naea_PreferredCI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_NAEA_PreferredCI, $.BER)(value.naea_PreferredCI, $.BER)),
            /* IF_ABSENT  */ ((value.ccbs_Indicators === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_CCBS_Indicators, $.BER)(value.ccbs_Indicators, $.BER)),
            /* IF_ABSENT  */ ((value.msisdn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_ISDN_AddressString, $.BER)(value.msisdn, $.BER)),
            /* IF_ABSENT  */ ((value.numberPortabilityStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_NumberPortabilityStatus, $.BER)(value.numberPortabilityStatus, $.BER)),
            /* IF_ABSENT  */ ((value.istAlertTimer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_IST_AlertTimerValue, $.BER)(value.istAlertTimer, $.BER)),
            /* IF_ABSENT  */ ((value.supportedCamelPhasesInVMSC === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_SupportedCamelPhases, $.BER)(value.supportedCamelPhasesInVMSC, $.BER)),
            /* IF_ABSENT  */ ((value.offeredCamel4CSIsInVMSC === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_OfferedCamel4CSIs, $.BER)(value.offeredCamel4CSIsInVMSC, $.BER)),
            /* IF_ABSENT  */ ((value.routingInfo2 === undefined) ? undefined : $._encode_explicit(_TagClass.context, 17, () => _encode_RoutingInfo, $.BER)(value.routingInfo2, $.BER)),
            /* IF_ABSENT  */ ((value.ss_List2 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_SS_List, $.BER)(value.ss_List2, $.BER)),
            /* IF_ABSENT  */ ((value.basicService2 === undefined) ? undefined : $._encode_explicit(_TagClass.context, 19, () => _encode_Ext_BasicServiceCode, $.BER)(value.basicService2, $.BER)),
            /* IF_ABSENT  */ ((value.allowedServices === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_AllowedServices, $.BER)(value.allowedServices, $.BER)),
            /* IF_ABSENT  */ ((value.unavailabilityCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_UnavailabilityCause, $.BER)(value.unavailabilityCause, $.BER)),
            /* IF_ABSENT  */ ((value.releaseResourcesSupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => $._encodeNull, $.BER)(value.releaseResourcesSupported, $.BER)),
            /* IF_ABSENT  */ ((value.gsm_BearerCapability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_ExternalSignalInfo, $.BER)(value.gsm_BearerCapability, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_SendRoutingInfoRes(value, elGetter);
}


/* eslint-enable */
