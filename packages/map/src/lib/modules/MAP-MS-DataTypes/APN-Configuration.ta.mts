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
import { ContextId, _decode_ContextId, _encode_ContextId } from "../MAP-MS-DataTypes/ContextId.ta.mjs";
// export { ContextId, _decode_ContextId, _encode_ContextId } from "../MAP-MS-DataTypes/ContextId.ta.mjs";
import { PDN_Type, _decode_PDN_Type, _encode_PDN_Type } from "../MAP-MS-DataTypes/PDN-Type.ta.mjs";
// export { PDN_Type, _decode_PDN_Type, _encode_PDN_Type } from "../MAP-MS-DataTypes/PDN-Type.ta.mjs";
import { PDP_Address, _decode_PDP_Address, _encode_PDP_Address } from "../MAP-MS-DataTypes/PDP-Address.ta.mjs";
// export { PDP_Address, _decode_PDP_Address, _encode_PDP_Address } from "../MAP-MS-DataTypes/PDP-Address.ta.mjs";
import { APN, _decode_APN, _encode_APN } from "../MAP-MS-DataTypes/APN.ta.mjs";
// export { APN, _decode_APN, _encode_APN } from "../MAP-MS-DataTypes/APN.ta.mjs";
import { EPS_QoS_Subscribed, _decode_EPS_QoS_Subscribed, _encode_EPS_QoS_Subscribed } from "../MAP-MS-DataTypes/EPS-QoS-Subscribed.ta.mjs";
// export { EPS_QoS_Subscribed, _decode_EPS_QoS_Subscribed, _encode_EPS_QoS_Subscribed } from "../MAP-MS-DataTypes/EPS-QoS-Subscribed.ta.mjs";
import { PDN_GW_Identity, _decode_PDN_GW_Identity, _encode_PDN_GW_Identity } from "../MAP-MS-DataTypes/PDN-GW-Identity.ta.mjs";
// export { PDN_GW_Identity, _decode_PDN_GW_Identity, _encode_PDN_GW_Identity } from "../MAP-MS-DataTypes/PDN-GW-Identity.ta.mjs";
import { PDN_GW_AllocationType, _enum_for_PDN_GW_AllocationType, PDN_GW_AllocationType_static /* IMPORTED_LONG_ENUMERATION_ITEM */, static_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDN_GW_AllocationType_dynamic /* IMPORTED_LONG_ENUMERATION_ITEM */, dynamic /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PDN_GW_AllocationType, _encode_PDN_GW_AllocationType } from "../MAP-MS-DataTypes/PDN-GW-AllocationType.ta.mjs";
// export { PDN_GW_AllocationType, _enum_for_PDN_GW_AllocationType, PDN_GW_AllocationType_static /* IMPORTED_LONG_ENUMERATION_ITEM */, static_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDN_GW_AllocationType_dynamic /* IMPORTED_LONG_ENUMERATION_ITEM */, dynamic /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PDN_GW_AllocationType, _encode_PDN_GW_AllocationType } from "../MAP-MS-DataTypes/PDN-GW-AllocationType.ta.mjs";
import { ChargingCharacteristics, _decode_ChargingCharacteristics, _encode_ChargingCharacteristics } from "../MAP-MS-DataTypes/ChargingCharacteristics.ta.mjs";
// export { ChargingCharacteristics, _decode_ChargingCharacteristics, _encode_ChargingCharacteristics } from "../MAP-MS-DataTypes/ChargingCharacteristics.ta.mjs";
import { AMBR, _decode_AMBR, _encode_AMBR } from "../MAP-MS-DataTypes/AMBR.ta.mjs";
// export { AMBR, _decode_AMBR, _encode_AMBR } from "../MAP-MS-DataTypes/AMBR.ta.mjs";
import { SpecificAPNInfoList, _decode_SpecificAPNInfoList, _encode_SpecificAPNInfoList } from "../MAP-MS-DataTypes/SpecificAPNInfoList.ta.mjs";
// export { SpecificAPNInfoList, _decode_SpecificAPNInfoList, _encode_SpecificAPNInfoList } from "../MAP-MS-DataTypes/SpecificAPNInfoList.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { APN_OI_Replacement, _decode_APN_OI_Replacement, _encode_APN_OI_Replacement } from "../MAP-MS-DataTypes/APN-OI-Replacement.ta.mjs";
// export { APN_OI_Replacement, _decode_APN_OI_Replacement, _encode_APN_OI_Replacement } from "../MAP-MS-DataTypes/APN-OI-Replacement.ta.mjs";
import { SIPTO_Permission, _enum_for_SIPTO_Permission, SIPTO_Permission_siptoAboveRanAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, siptoAboveRanAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SIPTO_Permission_siptoAboveRanNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, siptoAboveRanNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SIPTO_Permission, _encode_SIPTO_Permission } from "../MAP-MS-DataTypes/SIPTO-Permission.ta.mjs";
// export { SIPTO_Permission, _enum_for_SIPTO_Permission, SIPTO_Permission_siptoAboveRanAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, siptoAboveRanAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SIPTO_Permission_siptoAboveRanNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, siptoAboveRanNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SIPTO_Permission, _encode_SIPTO_Permission } from "../MAP-MS-DataTypes/SIPTO-Permission.ta.mjs";
import { LIPA_Permission, _enum_for_LIPA_Permission, LIPA_Permission_lipaProhibited /* IMPORTED_LONG_ENUMERATION_ITEM */, lipaProhibited /* IMPORTED_SHORT_ENUMERATION_ITEM */, LIPA_Permission_lipaOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, lipaOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, LIPA_Permission_lipaConditional /* IMPORTED_LONG_ENUMERATION_ITEM */, lipaConditional /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LIPA_Permission, _encode_LIPA_Permission } from "../MAP-MS-DataTypes/LIPA-Permission.ta.mjs";
// export { LIPA_Permission, _enum_for_LIPA_Permission, LIPA_Permission_lipaProhibited /* IMPORTED_LONG_ENUMERATION_ITEM */, lipaProhibited /* IMPORTED_SHORT_ENUMERATION_ITEM */, LIPA_Permission_lipaOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, lipaOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, LIPA_Permission_lipaConditional /* IMPORTED_LONG_ENUMERATION_ITEM */, lipaConditional /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LIPA_Permission, _encode_LIPA_Permission } from "../MAP-MS-DataTypes/LIPA-Permission.ta.mjs";
import { Restoration_Priority, _decode_Restoration_Priority, _encode_Restoration_Priority } from "../MAP-MS-DataTypes/Restoration-Priority.ta.mjs";
// export { Restoration_Priority, _decode_Restoration_Priority, _encode_Restoration_Priority } from "../MAP-MS-DataTypes/Restoration-Priority.ta.mjs";
import { SIPTO_Local_Network_Permission, _enum_for_SIPTO_Local_Network_Permission, SIPTO_Local_Network_Permission_siptoAtLocalNetworkAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, siptoAtLocalNetworkAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SIPTO_Local_Network_Permission_siptoAtLocalNetworkNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, siptoAtLocalNetworkNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SIPTO_Local_Network_Permission, _encode_SIPTO_Local_Network_Permission } from "../MAP-MS-DataTypes/SIPTO-Local-Network-Permission.ta.mjs";
// export { SIPTO_Local_Network_Permission, _enum_for_SIPTO_Local_Network_Permission, SIPTO_Local_Network_Permission_siptoAtLocalNetworkAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, siptoAtLocalNetworkAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SIPTO_Local_Network_Permission_siptoAtLocalNetworkNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, siptoAtLocalNetworkNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SIPTO_Local_Network_Permission, _encode_SIPTO_Local_Network_Permission } from "../MAP-MS-DataTypes/SIPTO-Local-Network-Permission.ta.mjs";
import { WLAN_Offloadability, _decode_WLAN_Offloadability, _encode_WLAN_Offloadability } from "../MAP-MS-DataTypes/WLAN-Offloadability.ta.mjs";
// export { WLAN_Offloadability, _decode_WLAN_Offloadability, _encode_WLAN_Offloadability } from "../MAP-MS-DataTypes/WLAN-Offloadability.ta.mjs";
import { NIDD_Mechanism, _enum_for_NIDD_Mechanism, NIDD_Mechanism_sGi_based_data_delivery /* IMPORTED_LONG_ENUMERATION_ITEM */, sGi_based_data_delivery /* IMPORTED_SHORT_ENUMERATION_ITEM */, NIDD_Mechanism_sCEF_based_data_delivery /* IMPORTED_LONG_ENUMERATION_ITEM */, sCEF_based_data_delivery /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NIDD_Mechanism, _encode_NIDD_Mechanism } from "../MAP-MS-DataTypes/NIDD-Mechanism.ta.mjs";
// export { NIDD_Mechanism, _enum_for_NIDD_Mechanism, NIDD_Mechanism_sGi_based_data_delivery /* IMPORTED_LONG_ENUMERATION_ITEM */, sGi_based_data_delivery /* IMPORTED_SHORT_ENUMERATION_ITEM */, NIDD_Mechanism_sCEF_based_data_delivery /* IMPORTED_LONG_ENUMERATION_ITEM */, sCEF_based_data_delivery /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NIDD_Mechanism, _encode_NIDD_Mechanism } from "../MAP-MS-DataTypes/NIDD-Mechanism.ta.mjs";
import { FQDN, _decode_FQDN, _encode_FQDN } from "../MAP-MS-DataTypes/FQDN.ta.mjs";
// export { FQDN, _decode_FQDN, _encode_FQDN } from "../MAP-MS-DataTypes/FQDN.ta.mjs";
import { PDN_ConnectionContinuity, _enum_for_PDN_ConnectionContinuity, PDN_ConnectionContinuity_maintainPDN_Connection /* IMPORTED_LONG_ENUMERATION_ITEM */, maintainPDN_Connection /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDN_ConnectionContinuity_disconnectPDN_ConnectionWithReactivationRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, disconnectPDN_ConnectionWithReactivationRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDN_ConnectionContinuity_disconnectPDN_ConnectionWithoutReactivationRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, disconnectPDN_ConnectionWithoutReactivationRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PDN_ConnectionContinuity, _encode_PDN_ConnectionContinuity } from "../MAP-MS-DataTypes/PDN-ConnectionContinuity.ta.mjs";
// export { PDN_ConnectionContinuity, _enum_for_PDN_ConnectionContinuity, PDN_ConnectionContinuity_maintainPDN_Connection /* IMPORTED_LONG_ENUMERATION_ITEM */, maintainPDN_Connection /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDN_ConnectionContinuity_disconnectPDN_ConnectionWithReactivationRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, disconnectPDN_ConnectionWithReactivationRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, PDN_ConnectionContinuity_disconnectPDN_ConnectionWithoutReactivationRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, disconnectPDN_ConnectionWithoutReactivationRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PDN_ConnectionContinuity, _encode_PDN_ConnectionContinuity } from "../MAP-MS-DataTypes/PDN-ConnectionContinuity.ta.mjs";


/**
 * @summary APN_Configuration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APN-Configuration ::= SEQUENCE {
 *     contextId    [0] ContextId,
 *     pdn-Type    [1] PDN-Type,
 *     servedPartyIP-IPv4-Address    [2] PDP-Address    OPTIONAL,
 *     apn    [3] APN,
 *     eps-qos-Subscribed    [4] EPS-QoS-Subscribed,
 *     pdn-gw-Identity    [5] PDN-GW-Identity    OPTIONAL,
 *     pdn-gw-AllocationType    [6] PDN-GW-AllocationType    OPTIONAL,
 *     vplmnAddressAllowed    [7] NULL    OPTIONAL,
 *     chargingCharacteristics    [8] ChargingCharacteristics    OPTIONAL,
 *     ambr    [9] AMBR    OPTIONAL,
 *     specificAPNInfoList    [10] SpecificAPNInfoList    OPTIONAL,    extensionContainer    [11] ExtensionContainer    OPTIONAL, 
 *     servedPartyIP-IPv6-Address    [12] PDP-Address    OPTIONAL,
 *     ...,
 *     apn-oi-Replacement    [13] APN-OI-Replacement    OPTIONAL,
 *     -- this apn-oi-Replacement refers to the APN level apn-oi-Replacement.
 *     sipto-Permission    [14] SIPTO-Permission    OPTIONAL,
 *     lipa-Permission    [15] LIPA-Permission    OPTIONAL,
 *     restoration-Priority    [16] Restoration-Priority    OPTIONAL,
 *     sipto-local-network-Permission    [17] SIPTO-Local-Network-Permission    OPTIONAL,
 *     wlan-offloadability    [18] WLAN-Offloadability    OPTIONAL,
 *     non-IP-PDN-Type-Indicator    [19]    NULL    OPTIONAL,
 *     nIDD-Mechanism    [20]    NIDD-Mechanism    OPTIONAL,
 *     sCEF-ID    [21]    FQDN    OPTIONAL,
 *     pdn-ConnectionContinuity    [22]    PDN-ConnectionContinuity    OPTIONAL
 *     -- absence of pdn-ConnectionContinuity indicates that the handling is left to
 *     -- local VPLMN policy
 *  }
 * ```
 * 
 * @class
 */
export
class APN_Configuration {
    constructor (
        /**
         * @summary `contextId`.
         * @public
         * @readonly
         */
        readonly contextId: ContextId,
        /**
         * @summary `pdn_Type`.
         * @public
         * @readonly
         */
        readonly pdn_Type: PDN_Type,
        /**
         * @summary `servedPartyIP_IPv4_Address`.
         * @public
         * @readonly
         */
        readonly servedPartyIP_IPv4_Address: OPTIONAL<PDP_Address>,
        /**
         * @summary `apn`.
         * @public
         * @readonly
         */
        readonly apn: APN,
        /**
         * @summary `eps_qos_Subscribed`.
         * @public
         * @readonly
         */
        readonly eps_qos_Subscribed: EPS_QoS_Subscribed,
        /**
         * @summary `pdn_gw_Identity`.
         * @public
         * @readonly
         */
        readonly pdn_gw_Identity: OPTIONAL<PDN_GW_Identity>,
        /**
         * @summary `pdn_gw_AllocationType`.
         * @public
         * @readonly
         */
        readonly pdn_gw_AllocationType: OPTIONAL<PDN_GW_AllocationType>,
        /**
         * @summary `vplmnAddressAllowed`.
         * @public
         * @readonly
         */
        readonly vplmnAddressAllowed: OPTIONAL<NULL>,
        /**
         * @summary `chargingCharacteristics`.
         * @public
         * @readonly
         */
        readonly chargingCharacteristics: OPTIONAL<ChargingCharacteristics>,
        /**
         * @summary `ambr`.
         * @public
         * @readonly
         */
        readonly ambr: OPTIONAL<AMBR>,
        /**
         * @summary `specificAPNInfoList`.
         * @public
         * @readonly
         */
        readonly specificAPNInfoList: OPTIONAL<SpecificAPNInfoList>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `servedPartyIP_IPv6_Address`.
         * @public
         * @readonly
         */
        readonly servedPartyIP_IPv6_Address: OPTIONAL<PDP_Address>,
        /**
         * @summary `apn_oi_Replacement`.
         * @public
         * @readonly
         */
        readonly apn_oi_Replacement: OPTIONAL<APN_OI_Replacement>,
        /**
         * @summary `sipto_Permission`.
         * @public
         * @readonly
         */
        readonly sipto_Permission: OPTIONAL<SIPTO_Permission>,
        /**
         * @summary `lipa_Permission`.
         * @public
         * @readonly
         */
        readonly lipa_Permission: OPTIONAL<LIPA_Permission>,
        /**
         * @summary `restoration_Priority`.
         * @public
         * @readonly
         */
        readonly restoration_Priority: OPTIONAL<Restoration_Priority>,
        /**
         * @summary `sipto_local_network_Permission`.
         * @public
         * @readonly
         */
        readonly sipto_local_network_Permission: OPTIONAL<SIPTO_Local_Network_Permission>,
        /**
         * @summary `wlan_offloadability`.
         * @public
         * @readonly
         */
        readonly wlan_offloadability: OPTIONAL<WLAN_Offloadability>,
        /**
         * @summary `non_IP_PDN_Type_Indicator`.
         * @public
         * @readonly
         */
        readonly non_IP_PDN_Type_Indicator: OPTIONAL<NULL>,
        /**
         * @summary `nIDD_Mechanism`.
         * @public
         * @readonly
         */
        readonly nIDD_Mechanism: OPTIONAL<NIDD_Mechanism>,
        /**
         * @summary `sCEF_ID`.
         * @public
         * @readonly
         */
        readonly sCEF_ID: OPTIONAL<FQDN>,
        /**
         * @summary `pdn_ConnectionContinuity`.
         * @public
         * @readonly
         */
        readonly pdn_ConnectionContinuity: OPTIONAL<PDN_ConnectionContinuity>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a APN_Configuration
     * @description
     * 
     * This takes an `object` and converts it to a `APN_Configuration`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `APN_Configuration`.
     * @returns {APN_Configuration}
     */
    public static _from_object (_o: { [_K in keyof (APN_Configuration)]: (APN_Configuration)[_K] }): APN_Configuration {
        return new APN_Configuration(_o.contextId, _o.pdn_Type, _o.servedPartyIP_IPv4_Address, _o.apn, _o.eps_qos_Subscribed, _o.pdn_gw_Identity, _o.pdn_gw_AllocationType, _o.vplmnAddressAllowed, _o.chargingCharacteristics, _o.ambr, _o.specificAPNInfoList, _o.extensionContainer, _o.servedPartyIP_IPv6_Address, _o.apn_oi_Replacement, _o.sipto_Permission, _o.lipa_Permission, _o.restoration_Priority, _o.sipto_local_network_Permission, _o.wlan_offloadability, _o.non_IP_PDN_Type_Indicator, _o.nIDD_Mechanism, _o.sCEF_ID, _o.pdn_ConnectionContinuity, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `pdn_gw_AllocationType`
         * @public
         * @static
         */

    public static _enum_for_pdn_gw_AllocationType = _enum_for_PDN_GW_AllocationType;        /**
         * @summary The enum used as the type of the component `sipto_Permission`
         * @public
         * @static
         */

    public static _enum_for_sipto_Permission = _enum_for_SIPTO_Permission;        /**
         * @summary The enum used as the type of the component `lipa_Permission`
         * @public
         * @static
         */

    public static _enum_for_lipa_Permission = _enum_for_LIPA_Permission;        /**
         * @summary The enum used as the type of the component `sipto_local_network_Permission`
         * @public
         * @static
         */

    public static _enum_for_sipto_local_network_Permission = _enum_for_SIPTO_Local_Network_Permission;        /**
         * @summary The enum used as the type of the component `nIDD_Mechanism`
         * @public
         * @static
         */

    public static _enum_for_nIDD_Mechanism = _enum_for_NIDD_Mechanism;        /**
         * @summary The enum used as the type of the component `pdn_ConnectionContinuity`
         * @public
         * @static
         */

    public static _enum_for_pdn_ConnectionContinuity = _enum_for_PDN_ConnectionContinuity;
}

/**
 * @summary The Leading Root Component Types of APN_Configuration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_APN_Configuration: $.ComponentSpec[] = [
    new $.ComponentSpec("contextId", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("pdn-Type", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("servedPartyIP-IPv4-Address", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("apn", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("eps-qos-Subscribed", false, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("pdn-gw-Identity", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("pdn-gw-AllocationType", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("vplmnAddressAllowed", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("chargingCharacteristics", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("ambr", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("specificAPNInfoList", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("servedPartyIP-IPv6-Address", true, $.hasTag(_TagClass.context, 12), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of APN_Configuration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_APN_Configuration: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of APN_Configuration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_APN_Configuration: $.ComponentSpec[] = [
    new $.ComponentSpec("apn-oi-Replacement", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("sipto-Permission", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("lipa-Permission", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("restoration-Priority", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("sipto-local-network-Permission", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("wlan-offloadability", true, $.hasTag(_TagClass.context, 18), undefined, undefined),
    new $.ComponentSpec("non-IP-PDN-Type-Indicator", true, $.hasTag(_TagClass.context, 19), undefined, undefined),
    new $.ComponentSpec("nIDD-Mechanism", true, $.hasTag(_TagClass.context, 20), undefined, undefined),
    new $.ComponentSpec("sCEF-ID", true, $.hasTag(_TagClass.context, 21), undefined, undefined),
    new $.ComponentSpec("pdn-ConnectionContinuity", true, $.hasTag(_TagClass.context, 22), undefined, undefined)
];

let _cached_decoder_for_APN_Configuration: $.ASN1Decoder<APN_Configuration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) APN_Configuration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_APN_Configuration (el: _Element): APN_Configuration {
    if (!_cached_decoder_for_APN_Configuration) { _cached_decoder_for_APN_Configuration = function (el: _Element): APN_Configuration {
    let contextId!: ContextId;
    let pdn_Type!: PDN_Type;
    let servedPartyIP_IPv4_Address: OPTIONAL<PDP_Address>;
    let apn!: APN;
    let eps_qos_Subscribed!: EPS_QoS_Subscribed;
    let pdn_gw_Identity: OPTIONAL<PDN_GW_Identity>;
    let pdn_gw_AllocationType: OPTIONAL<PDN_GW_AllocationType>;
    let vplmnAddressAllowed: OPTIONAL<NULL>;
    let chargingCharacteristics: OPTIONAL<ChargingCharacteristics>;
    let ambr: OPTIONAL<AMBR>;
    let specificAPNInfoList: OPTIONAL<SpecificAPNInfoList>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let servedPartyIP_IPv6_Address: OPTIONAL<PDP_Address>;
    let apn_oi_Replacement: OPTIONAL<APN_OI_Replacement>;
    let sipto_Permission: OPTIONAL<SIPTO_Permission>;
    let lipa_Permission: OPTIONAL<LIPA_Permission>;
    let restoration_Priority: OPTIONAL<Restoration_Priority>;
    let sipto_local_network_Permission: OPTIONAL<SIPTO_Local_Network_Permission>;
    let wlan_offloadability: OPTIONAL<WLAN_Offloadability>;
    let non_IP_PDN_Type_Indicator: OPTIONAL<NULL>;
    let nIDD_Mechanism: OPTIONAL<NIDD_Mechanism>;
    let sCEF_ID: OPTIONAL<FQDN>;
    let pdn_ConnectionContinuity: OPTIONAL<PDN_ConnectionContinuity>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "contextId": (_el: _Element): void => { contextId = $._decode_implicit<ContextId>(() => _decode_ContextId)(_el); },
        "pdn-Type": (_el: _Element): void => { pdn_Type = $._decode_implicit<PDN_Type>(() => _decode_PDN_Type)(_el); },
        "servedPartyIP-IPv4-Address": (_el: _Element): void => { servedPartyIP_IPv4_Address = $._decode_implicit<PDP_Address>(() => _decode_PDP_Address)(_el); },
        "apn": (_el: _Element): void => { apn = $._decode_implicit<APN>(() => _decode_APN)(_el); },
        "eps-qos-Subscribed": (_el: _Element): void => { eps_qos_Subscribed = $._decode_implicit<EPS_QoS_Subscribed>(() => _decode_EPS_QoS_Subscribed)(_el); },
        "pdn-gw-Identity": (_el: _Element): void => { pdn_gw_Identity = $._decode_implicit<PDN_GW_Identity>(() => _decode_PDN_GW_Identity)(_el); },
        "pdn-gw-AllocationType": (_el: _Element): void => { pdn_gw_AllocationType = $._decode_implicit<PDN_GW_AllocationType>(() => _decode_PDN_GW_AllocationType)(_el); },
        "vplmnAddressAllowed": (_el: _Element): void => { vplmnAddressAllowed = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "chargingCharacteristics": (_el: _Element): void => { chargingCharacteristics = $._decode_implicit<ChargingCharacteristics>(() => _decode_ChargingCharacteristics)(_el); },
        "ambr": (_el: _Element): void => { ambr = $._decode_implicit<AMBR>(() => _decode_AMBR)(_el); },
        "specificAPNInfoList": (_el: _Element): void => { specificAPNInfoList = $._decode_implicit<SpecificAPNInfoList>(() => _decode_SpecificAPNInfoList)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "servedPartyIP-IPv6-Address": (_el: _Element): void => { servedPartyIP_IPv6_Address = $._decode_implicit<PDP_Address>(() => _decode_PDP_Address)(_el); },
        "apn-oi-Replacement": (_el: _Element): void => { apn_oi_Replacement = $._decode_implicit<APN_OI_Replacement>(() => _decode_APN_OI_Replacement)(_el); },
        "sipto-Permission": (_el: _Element): void => { sipto_Permission = $._decode_implicit<SIPTO_Permission>(() => _decode_SIPTO_Permission)(_el); },
        "lipa-Permission": (_el: _Element): void => { lipa_Permission = $._decode_implicit<LIPA_Permission>(() => _decode_LIPA_Permission)(_el); },
        "restoration-Priority": (_el: _Element): void => { restoration_Priority = $._decode_implicit<Restoration_Priority>(() => _decode_Restoration_Priority)(_el); },
        "sipto-local-network-Permission": (_el: _Element): void => { sipto_local_network_Permission = $._decode_implicit<SIPTO_Local_Network_Permission>(() => _decode_SIPTO_Local_Network_Permission)(_el); },
        "wlan-offloadability": (_el: _Element): void => { wlan_offloadability = $._decode_implicit<WLAN_Offloadability>(() => _decode_WLAN_Offloadability)(_el); },
        "non-IP-PDN-Type-Indicator": (_el: _Element): void => { non_IP_PDN_Type_Indicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "nIDD-Mechanism": (_el: _Element): void => { nIDD_Mechanism = $._decode_implicit<NIDD_Mechanism>(() => _decode_NIDD_Mechanism)(_el); },
        "sCEF-ID": (_el: _Element): void => { sCEF_ID = $._decode_implicit<FQDN>(() => _decode_FQDN)(_el); },
        "pdn-ConnectionContinuity": (_el: _Element): void => { pdn_ConnectionContinuity = $._decode_implicit<PDN_ConnectionContinuity>(() => _decode_PDN_ConnectionContinuity)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_APN_Configuration,
        _extension_additions_list_spec_for_APN_Configuration,
        _root_component_type_list_2_spec_for_APN_Configuration,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new APN_Configuration(
        contextId,
        pdn_Type,
        servedPartyIP_IPv4_Address,
        apn,
        eps_qos_Subscribed,
        pdn_gw_Identity,
        pdn_gw_AllocationType,
        vplmnAddressAllowed,
        chargingCharacteristics,
        ambr,
        specificAPNInfoList,
        extensionContainer,
        servedPartyIP_IPv6_Address,
        apn_oi_Replacement,
        sipto_Permission,
        lipa_Permission,
        restoration_Priority,
        sipto_local_network_Permission,
        wlan_offloadability,
        non_IP_PDN_Type_Indicator,
        nIDD_Mechanism,
        sCEF_ID,
        pdn_ConnectionContinuity,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_APN_Configuration(el);
}

let _cached_encoder_for_APN_Configuration: $.ASN1Encoder<APN_Configuration> | null = null;

/**
 * @summary Encodes a(n) APN_Configuration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The APN_Configuration, encoded as an ASN.1 Element.
 */
export
function _encode_APN_Configuration (value: APN_Configuration, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_APN_Configuration) { _cached_encoder_for_APN_Configuration = function (value: APN_Configuration, elGetter: $.ASN1Encoder<APN_Configuration>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ContextId, $.BER)(value.contextId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PDN_Type, $.BER)(value.pdn_Type, $.BER),
            /* IF_ABSENT  */ ((value.servedPartyIP_IPv4_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_PDP_Address, $.BER)(value.servedPartyIP_IPv4_Address, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_APN, $.BER)(value.apn, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_EPS_QoS_Subscribed, $.BER)(value.eps_qos_Subscribed, $.BER),
            /* IF_ABSENT  */ ((value.pdn_gw_Identity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_PDN_GW_Identity, $.BER)(value.pdn_gw_Identity, $.BER)),
            /* IF_ABSENT  */ ((value.pdn_gw_AllocationType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_PDN_GW_AllocationType, $.BER)(value.pdn_gw_AllocationType, $.BER)),
            /* IF_ABSENT  */ ((value.vplmnAddressAllowed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value.vplmnAddressAllowed, $.BER)),
            /* IF_ABSENT  */ ((value.chargingCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ChargingCharacteristics, $.BER)(value.chargingCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.ambr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_AMBR, $.BER)(value.ambr, $.BER)),
            /* IF_ABSENT  */ ((value.specificAPNInfoList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_SpecificAPNInfoList, $.BER)(value.specificAPNInfoList, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER)),
            /* IF_ABSENT  */ ((value.servedPartyIP_IPv6_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_PDP_Address, $.BER)(value.servedPartyIP_IPv6_Address, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.apn_oi_Replacement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_APN_OI_Replacement, $.BER)(value.apn_oi_Replacement, $.BER)),
            /* IF_ABSENT  */ ((value.sipto_Permission === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_SIPTO_Permission, $.BER)(value.sipto_Permission, $.BER)),
            /* IF_ABSENT  */ ((value.lipa_Permission === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_LIPA_Permission, $.BER)(value.lipa_Permission, $.BER)),
            /* IF_ABSENT  */ ((value.restoration_Priority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_Restoration_Priority, $.BER)(value.restoration_Priority, $.BER)),
            /* IF_ABSENT  */ ((value.sipto_local_network_Permission === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_SIPTO_Local_Network_Permission, $.BER)(value.sipto_local_network_Permission, $.BER)),
            /* IF_ABSENT  */ ((value.wlan_offloadability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_WLAN_Offloadability, $.BER)(value.wlan_offloadability, $.BER)),
            /* IF_ABSENT  */ ((value.non_IP_PDN_Type_Indicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => $._encodeNull, $.BER)(value.non_IP_PDN_Type_Indicator, $.BER)),
            /* IF_ABSENT  */ ((value.nIDD_Mechanism === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_NIDD_Mechanism, $.BER)(value.nIDD_Mechanism, $.BER)),
            /* IF_ABSENT  */ ((value.sCEF_ID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_FQDN, $.BER)(value.sCEF_ID, $.BER)),
            /* IF_ABSENT  */ ((value.pdn_ConnectionContinuity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_PDN_ConnectionContinuity, $.BER)(value.pdn_ConnectionContinuity, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_APN_Configuration(value, elGetter);
}


/* eslint-enable */
