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
import { PDP_Type, _decode_PDP_Type, _encode_PDP_Type } from "../MAP-MS-DataTypes/PDP-Type.ta.mjs";
// export { PDP_Type, _decode_PDP_Type, _encode_PDP_Type } from "../MAP-MS-DataTypes/PDP-Type.ta.mjs";
import { PDP_Address, _decode_PDP_Address, _encode_PDP_Address } from "../MAP-MS-DataTypes/PDP-Address.ta.mjs";
// export { PDP_Address, _decode_PDP_Address, _encode_PDP_Address } from "../MAP-MS-DataTypes/PDP-Address.ta.mjs";
import { QoS_Subscribed, _decode_QoS_Subscribed, _encode_QoS_Subscribed } from "../MAP-MS-DataTypes/QoS-Subscribed.ta.mjs";
// export { QoS_Subscribed, _decode_QoS_Subscribed, _encode_QoS_Subscribed } from "../MAP-MS-DataTypes/QoS-Subscribed.ta.mjs";
import { APN, _decode_APN, _encode_APN } from "../MAP-MS-DataTypes/APN.ta.mjs";
// export { APN, _decode_APN, _encode_APN } from "../MAP-MS-DataTypes/APN.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { Ext_QoS_Subscribed, _decode_Ext_QoS_Subscribed, _encode_Ext_QoS_Subscribed } from "../MAP-MS-DataTypes/Ext-QoS-Subscribed.ta.mjs";
// export { Ext_QoS_Subscribed, _decode_Ext_QoS_Subscribed, _encode_Ext_QoS_Subscribed } from "../MAP-MS-DataTypes/Ext-QoS-Subscribed.ta.mjs";
import { ChargingCharacteristics, _decode_ChargingCharacteristics, _encode_ChargingCharacteristics } from "../MAP-MS-DataTypes/ChargingCharacteristics.ta.mjs";
// export { ChargingCharacteristics, _decode_ChargingCharacteristics, _encode_ChargingCharacteristics } from "../MAP-MS-DataTypes/ChargingCharacteristics.ta.mjs";
import { Ext2_QoS_Subscribed, _decode_Ext2_QoS_Subscribed, _encode_Ext2_QoS_Subscribed } from "../MAP-MS-DataTypes/Ext2-QoS-Subscribed.ta.mjs";
// export { Ext2_QoS_Subscribed, _decode_Ext2_QoS_Subscribed, _encode_Ext2_QoS_Subscribed } from "../MAP-MS-DataTypes/Ext2-QoS-Subscribed.ta.mjs";
import { Ext3_QoS_Subscribed, _decode_Ext3_QoS_Subscribed, _encode_Ext3_QoS_Subscribed } from "../MAP-MS-DataTypes/Ext3-QoS-Subscribed.ta.mjs";
// export { Ext3_QoS_Subscribed, _decode_Ext3_QoS_Subscribed, _encode_Ext3_QoS_Subscribed } from "../MAP-MS-DataTypes/Ext3-QoS-Subscribed.ta.mjs";
import { Ext4_QoS_Subscribed, _decode_Ext4_QoS_Subscribed, _encode_Ext4_QoS_Subscribed } from "../MAP-MS-DataTypes/Ext4-QoS-Subscribed.ta.mjs";
// export { Ext4_QoS_Subscribed, _decode_Ext4_QoS_Subscribed, _encode_Ext4_QoS_Subscribed } from "../MAP-MS-DataTypes/Ext4-QoS-Subscribed.ta.mjs";
import { APN_OI_Replacement, _decode_APN_OI_Replacement, _encode_APN_OI_Replacement } from "../MAP-MS-DataTypes/APN-OI-Replacement.ta.mjs";
// export { APN_OI_Replacement, _decode_APN_OI_Replacement, _encode_APN_OI_Replacement } from "../MAP-MS-DataTypes/APN-OI-Replacement.ta.mjs";
import { Ext_PDP_Type, _decode_Ext_PDP_Type, _encode_Ext_PDP_Type } from "../MAP-MS-DataTypes/Ext-PDP-Type.ta.mjs";
// export { Ext_PDP_Type, _decode_Ext_PDP_Type, _encode_Ext_PDP_Type } from "../MAP-MS-DataTypes/Ext-PDP-Type.ta.mjs";
import { AMBR, _decode_AMBR, _encode_AMBR } from "../MAP-MS-DataTypes/AMBR.ta.mjs";
// export { AMBR, _decode_AMBR, _encode_AMBR } from "../MAP-MS-DataTypes/AMBR.ta.mjs";
import { SIPTO_Permission, _enum_for_SIPTO_Permission, SIPTO_Permission_siptoAboveRanAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, siptoAboveRanAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SIPTO_Permission_siptoAboveRanNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, siptoAboveRanNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SIPTO_Permission, _encode_SIPTO_Permission } from "../MAP-MS-DataTypes/SIPTO-Permission.ta.mjs";
// export { SIPTO_Permission, _enum_for_SIPTO_Permission, SIPTO_Permission_siptoAboveRanAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, siptoAboveRanAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SIPTO_Permission_siptoAboveRanNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, siptoAboveRanNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SIPTO_Permission, _encode_SIPTO_Permission } from "../MAP-MS-DataTypes/SIPTO-Permission.ta.mjs";
import { LIPA_Permission, _enum_for_LIPA_Permission, LIPA_Permission_lipaProhibited /* IMPORTED_LONG_ENUMERATION_ITEM */, lipaProhibited /* IMPORTED_SHORT_ENUMERATION_ITEM */, LIPA_Permission_lipaOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, lipaOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, LIPA_Permission_lipaConditional /* IMPORTED_LONG_ENUMERATION_ITEM */, lipaConditional /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LIPA_Permission, _encode_LIPA_Permission } from "../MAP-MS-DataTypes/LIPA-Permission.ta.mjs";
// export { LIPA_Permission, _enum_for_LIPA_Permission, LIPA_Permission_lipaProhibited /* IMPORTED_LONG_ENUMERATION_ITEM */, lipaProhibited /* IMPORTED_SHORT_ENUMERATION_ITEM */, LIPA_Permission_lipaOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, lipaOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, LIPA_Permission_lipaConditional /* IMPORTED_LONG_ENUMERATION_ITEM */, lipaConditional /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LIPA_Permission, _encode_LIPA_Permission } from "../MAP-MS-DataTypes/LIPA-Permission.ta.mjs";
import { Restoration_Priority, _decode_Restoration_Priority, _encode_Restoration_Priority } from "../MAP-MS-DataTypes/Restoration-Priority.ta.mjs";
// export { Restoration_Priority, _decode_Restoration_Priority, _encode_Restoration_Priority } from "../MAP-MS-DataTypes/Restoration-Priority.ta.mjs";
import { SIPTO_Local_Network_Permission, _enum_for_SIPTO_Local_Network_Permission, SIPTO_Local_Network_Permission_siptoAtLocalNetworkAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, siptoAtLocalNetworkAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SIPTO_Local_Network_Permission_siptoAtLocalNetworkNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, siptoAtLocalNetworkNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SIPTO_Local_Network_Permission, _encode_SIPTO_Local_Network_Permission } from "../MAP-MS-DataTypes/SIPTO-Local-Network-Permission.ta.mjs";
// export { SIPTO_Local_Network_Permission, _enum_for_SIPTO_Local_Network_Permission, SIPTO_Local_Network_Permission_siptoAtLocalNetworkAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, siptoAtLocalNetworkAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SIPTO_Local_Network_Permission_siptoAtLocalNetworkNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, siptoAtLocalNetworkNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SIPTO_Local_Network_Permission, _encode_SIPTO_Local_Network_Permission } from "../MAP-MS-DataTypes/SIPTO-Local-Network-Permission.ta.mjs";
import { NIDD_Mechanism, _enum_for_NIDD_Mechanism, NIDD_Mechanism_sGi_based_data_delivery /* IMPORTED_LONG_ENUMERATION_ITEM */, sGi_based_data_delivery /* IMPORTED_SHORT_ENUMERATION_ITEM */, NIDD_Mechanism_sCEF_based_data_delivery /* IMPORTED_LONG_ENUMERATION_ITEM */, sCEF_based_data_delivery /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NIDD_Mechanism, _encode_NIDD_Mechanism } from "../MAP-MS-DataTypes/NIDD-Mechanism.ta.mjs";
// export { NIDD_Mechanism, _enum_for_NIDD_Mechanism, NIDD_Mechanism_sGi_based_data_delivery /* IMPORTED_LONG_ENUMERATION_ITEM */, sGi_based_data_delivery /* IMPORTED_SHORT_ENUMERATION_ITEM */, NIDD_Mechanism_sCEF_based_data_delivery /* IMPORTED_LONG_ENUMERATION_ITEM */, sCEF_based_data_delivery /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NIDD_Mechanism, _encode_NIDD_Mechanism } from "../MAP-MS-DataTypes/NIDD-Mechanism.ta.mjs";
import { FQDN, _decode_FQDN, _encode_FQDN } from "../MAP-MS-DataTypes/FQDN.ta.mjs";
// export { FQDN, _decode_FQDN, _encode_FQDN } from "../MAP-MS-DataTypes/FQDN.ta.mjs";


/**
 * @summary PDP_Context
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDP-Context ::= SEQUENCE {
 *     pdp-ContextId    ContextId,
 *     pdp-Type    [16] PDP-Type,
 *     pdp-Address    [17] PDP-Address    OPTIONAL,
 *     qos-Subscribed    [18] QoS-Subscribed,
 *     vplmnAddressAllowed    [19] NULL    OPTIONAL,
 *     apn    [20] APN,
 *     extensionContainer    [21] ExtensionContainer    OPTIONAL,
 *     ... ,
 *     ext-QoS-Subscribed    [0] Ext-QoS-Subscribed    OPTIONAL, 
 *     pdp-ChargingCharacteristics    [1] ChargingCharacteristics    OPTIONAL,
 *     ext2-QoS-Subscribed    [2] Ext2-QoS-Subscribed    OPTIONAL,
 *     -- ext2-QoS-Subscribed may be present only if ext-QoS-Subscribed is present.
 *     ext3-QoS-Subscribed    [3] Ext3-QoS-Subscribed    OPTIONAL,
 *     -- ext3-QoS-Subscribed may be present only if ext2-QoS-Subscribed is present.
 *     ext4-QoS-Subscribed    [4] Ext4-QoS-Subscribed    OPTIONAL,
 *     -- ext4-QoS-Subscribed may be present only if ext3-QoS-Subscribed is present. 
 *     apn-oi-Replacement    [5]    APN-OI-Replacement    OPTIONAL,
 *     -- this apn-oi-Replacement refers to the APN level apn-oi-Replacement and has
 *     -- higher priority than UE level apn-oi-Replacement.
 *     ext-pdp-Type    [6] Ext-PDP-Type    OPTIONAL,
 *     -- contains the value IPv4v6 defined in 3GPP TS 29.060 [105], if the PDP can be
 *     -- accessed by dual-stack UEs
 *     ext-pdp-Address    [7] PDP-Address    OPTIONAL,
 *     -- contains an additional IP address in case of dual-stack static IP address assignment
 *     -- for the UE.
 *     -- it may contain an IPv4 or an IPv6 address/prefix, and it may be present
 *     -- only if pdp-Address is present; if both are present, each parameter shall
 *     -- contain a different type of address (IPv4 or IPv6).
 *     ambr    [10] AMBR    OPTIONAL,
 *     -- this ambr contains the AMBR associated to the APN included in the 
 *     -- PDP-Context (APN-AMBR).
 *     sipto-Permission    [8] SIPTO-Permission    OPTIONAL,
 *     lipa-Permission    [9] LIPA-Permission    OPTIONAL,
 *     restoration-Priority    [11] Restoration-Priority    OPTIONAL,
 *     sipto-local-network-Permission    [12] SIPTO-Local-Network-Permission    OPTIONAL,
 *     nIDD-Mechanism    [13]    NIDD-Mechanism    OPTIONAL,
 *     sCEF-ID    [14]    FQDN    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class PDP_Context {
    constructor (
        /**
         * @summary `pdp_ContextId`.
         * @public
         * @readonly
         */
        readonly pdp_ContextId: ContextId,
        /**
         * @summary `pdp_Type`.
         * @public
         * @readonly
         */
        readonly pdp_Type: PDP_Type,
        /**
         * @summary `pdp_Address`.
         * @public
         * @readonly
         */
        readonly pdp_Address: OPTIONAL<PDP_Address>,
        /**
         * @summary `qos_Subscribed`.
         * @public
         * @readonly
         */
        readonly qos_Subscribed: QoS_Subscribed,
        /**
         * @summary `vplmnAddressAllowed`.
         * @public
         * @readonly
         */
        readonly vplmnAddressAllowed: OPTIONAL<NULL>,
        /**
         * @summary `apn`.
         * @public
         * @readonly
         */
        readonly apn: APN,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `ext_QoS_Subscribed`.
         * @public
         * @readonly
         */
        readonly ext_QoS_Subscribed: OPTIONAL<Ext_QoS_Subscribed>,
        /**
         * @summary `pdp_ChargingCharacteristics`.
         * @public
         * @readonly
         */
        readonly pdp_ChargingCharacteristics: OPTIONAL<ChargingCharacteristics>,
        /**
         * @summary `ext2_QoS_Subscribed`.
         * @public
         * @readonly
         */
        readonly ext2_QoS_Subscribed: OPTIONAL<Ext2_QoS_Subscribed>,
        /**
         * @summary `ext3_QoS_Subscribed`.
         * @public
         * @readonly
         */
        readonly ext3_QoS_Subscribed: OPTIONAL<Ext3_QoS_Subscribed>,
        /**
         * @summary `ext4_QoS_Subscribed`.
         * @public
         * @readonly
         */
        readonly ext4_QoS_Subscribed: OPTIONAL<Ext4_QoS_Subscribed>,
        /**
         * @summary `apn_oi_Replacement`.
         * @public
         * @readonly
         */
        readonly apn_oi_Replacement: OPTIONAL<APN_OI_Replacement>,
        /**
         * @summary `ext_pdp_Type`.
         * @public
         * @readonly
         */
        readonly ext_pdp_Type: OPTIONAL<Ext_PDP_Type>,
        /**
         * @summary `ext_pdp_Address`.
         * @public
         * @readonly
         */
        readonly ext_pdp_Address: OPTIONAL<PDP_Address>,
        /**
         * @summary `ambr`.
         * @public
         * @readonly
         */
        readonly ambr: OPTIONAL<AMBR>,
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
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PDP_Context
     * @description
     * 
     * This takes an `object` and converts it to a `PDP_Context`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDP_Context`.
     * @returns {PDP_Context}
     */
    public static _from_object (_o: { [_K in keyof (PDP_Context)]: (PDP_Context)[_K] }): PDP_Context {
        return new PDP_Context(_o.pdp_ContextId, _o.pdp_Type, _o.pdp_Address, _o.qos_Subscribed, _o.vplmnAddressAllowed, _o.apn, _o.extensionContainer, _o.ext_QoS_Subscribed, _o.pdp_ChargingCharacteristics, _o.ext2_QoS_Subscribed, _o.ext3_QoS_Subscribed, _o.ext4_QoS_Subscribed, _o.apn_oi_Replacement, _o.ext_pdp_Type, _o.ext_pdp_Address, _o.ambr, _o.sipto_Permission, _o.lipa_Permission, _o.restoration_Priority, _o.sipto_local_network_Permission, _o.nIDD_Mechanism, _o.sCEF_ID, _o._unrecognizedExtensionsList);
    }

        /**
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

    public static _enum_for_nIDD_Mechanism = _enum_for_NIDD_Mechanism;
}

/**
 * @summary The Leading Root Component Types of PDP_Context
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PDP_Context: $.ComponentSpec[] = [
    new $.ComponentSpec("pdp-ContextId", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("pdp-Type", false, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("pdp-Address", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("qos-Subscribed", false, $.hasTag(_TagClass.context, 18), undefined, undefined),
    new $.ComponentSpec("vplmnAddressAllowed", true, $.hasTag(_TagClass.context, 19), undefined, undefined),
    new $.ComponentSpec("apn", false, $.hasTag(_TagClass.context, 20), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 21), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of PDP_Context
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PDP_Context: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PDP_Context
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PDP_Context: $.ComponentSpec[] = [
    new $.ComponentSpec("ext-QoS-Subscribed", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("pdp-ChargingCharacteristics", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("ext2-QoS-Subscribed", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("ext3-QoS-Subscribed", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("ext4-QoS-Subscribed", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("apn-oi-Replacement", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("ext-pdp-Type", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("ext-pdp-Address", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("ambr", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("sipto-Permission", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("lipa-Permission", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("restoration-Priority", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("sipto-local-network-Permission", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("nIDD-Mechanism", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("sCEF-ID", true, $.hasTag(_TagClass.context, 14), undefined, undefined)
];

let _cached_decoder_for_PDP_Context: $.ASN1Decoder<PDP_Context> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDP_Context
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDP_Context (el: _Element): PDP_Context {
    if (!_cached_decoder_for_PDP_Context) { _cached_decoder_for_PDP_Context = function (el: _Element): PDP_Context {
    let pdp_ContextId!: ContextId;
    let pdp_Type!: PDP_Type;
    let pdp_Address: OPTIONAL<PDP_Address>;
    let qos_Subscribed!: QoS_Subscribed;
    let vplmnAddressAllowed: OPTIONAL<NULL>;
    let apn!: APN;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let ext_QoS_Subscribed: OPTIONAL<Ext_QoS_Subscribed>;
    let pdp_ChargingCharacteristics: OPTIONAL<ChargingCharacteristics>;
    let ext2_QoS_Subscribed: OPTIONAL<Ext2_QoS_Subscribed>;
    let ext3_QoS_Subscribed: OPTIONAL<Ext3_QoS_Subscribed>;
    let ext4_QoS_Subscribed: OPTIONAL<Ext4_QoS_Subscribed>;
    let apn_oi_Replacement: OPTIONAL<APN_OI_Replacement>;
    let ext_pdp_Type: OPTIONAL<Ext_PDP_Type>;
    let ext_pdp_Address: OPTIONAL<PDP_Address>;
    let ambr: OPTIONAL<AMBR>;
    let sipto_Permission: OPTIONAL<SIPTO_Permission>;
    let lipa_Permission: OPTIONAL<LIPA_Permission>;
    let restoration_Priority: OPTIONAL<Restoration_Priority>;
    let sipto_local_network_Permission: OPTIONAL<SIPTO_Local_Network_Permission>;
    let nIDD_Mechanism: OPTIONAL<NIDD_Mechanism>;
    let sCEF_ID: OPTIONAL<FQDN>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pdp-ContextId": (_el: _Element): void => { pdp_ContextId = _decode_ContextId(_el); },
        "pdp-Type": (_el: _Element): void => { pdp_Type = $._decode_implicit<PDP_Type>(() => _decode_PDP_Type)(_el); },
        "pdp-Address": (_el: _Element): void => { pdp_Address = $._decode_implicit<PDP_Address>(() => _decode_PDP_Address)(_el); },
        "qos-Subscribed": (_el: _Element): void => { qos_Subscribed = $._decode_implicit<QoS_Subscribed>(() => _decode_QoS_Subscribed)(_el); },
        "vplmnAddressAllowed": (_el: _Element): void => { vplmnAddressAllowed = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "apn": (_el: _Element): void => { apn = $._decode_implicit<APN>(() => _decode_APN)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "ext-QoS-Subscribed": (_el: _Element): void => { ext_QoS_Subscribed = $._decode_implicit<Ext_QoS_Subscribed>(() => _decode_Ext_QoS_Subscribed)(_el); },
        "pdp-ChargingCharacteristics": (_el: _Element): void => { pdp_ChargingCharacteristics = $._decode_implicit<ChargingCharacteristics>(() => _decode_ChargingCharacteristics)(_el); },
        "ext2-QoS-Subscribed": (_el: _Element): void => { ext2_QoS_Subscribed = $._decode_implicit<Ext2_QoS_Subscribed>(() => _decode_Ext2_QoS_Subscribed)(_el); },
        "ext3-QoS-Subscribed": (_el: _Element): void => { ext3_QoS_Subscribed = $._decode_implicit<Ext3_QoS_Subscribed>(() => _decode_Ext3_QoS_Subscribed)(_el); },
        "ext4-QoS-Subscribed": (_el: _Element): void => { ext4_QoS_Subscribed = $._decode_implicit<Ext4_QoS_Subscribed>(() => _decode_Ext4_QoS_Subscribed)(_el); },
        "apn-oi-Replacement": (_el: _Element): void => { apn_oi_Replacement = $._decode_implicit<APN_OI_Replacement>(() => _decode_APN_OI_Replacement)(_el); },
        "ext-pdp-Type": (_el: _Element): void => { ext_pdp_Type = $._decode_implicit<Ext_PDP_Type>(() => _decode_Ext_PDP_Type)(_el); },
        "ext-pdp-Address": (_el: _Element): void => { ext_pdp_Address = $._decode_implicit<PDP_Address>(() => _decode_PDP_Address)(_el); },
        "ambr": (_el: _Element): void => { ambr = $._decode_implicit<AMBR>(() => _decode_AMBR)(_el); },
        "sipto-Permission": (_el: _Element): void => { sipto_Permission = $._decode_implicit<SIPTO_Permission>(() => _decode_SIPTO_Permission)(_el); },
        "lipa-Permission": (_el: _Element): void => { lipa_Permission = $._decode_implicit<LIPA_Permission>(() => _decode_LIPA_Permission)(_el); },
        "restoration-Priority": (_el: _Element): void => { restoration_Priority = $._decode_implicit<Restoration_Priority>(() => _decode_Restoration_Priority)(_el); },
        "sipto-local-network-Permission": (_el: _Element): void => { sipto_local_network_Permission = $._decode_implicit<SIPTO_Local_Network_Permission>(() => _decode_SIPTO_Local_Network_Permission)(_el); },
        "nIDD-Mechanism": (_el: _Element): void => { nIDD_Mechanism = $._decode_implicit<NIDD_Mechanism>(() => _decode_NIDD_Mechanism)(_el); },
        "sCEF-ID": (_el: _Element): void => { sCEF_ID = $._decode_implicit<FQDN>(() => _decode_FQDN)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PDP_Context,
        _extension_additions_list_spec_for_PDP_Context,
        _root_component_type_list_2_spec_for_PDP_Context,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PDP_Context(
        pdp_ContextId,
        pdp_Type,
        pdp_Address,
        qos_Subscribed,
        vplmnAddressAllowed,
        apn,
        extensionContainer,
        ext_QoS_Subscribed,
        pdp_ChargingCharacteristics,
        ext2_QoS_Subscribed,
        ext3_QoS_Subscribed,
        ext4_QoS_Subscribed,
        apn_oi_Replacement,
        ext_pdp_Type,
        ext_pdp_Address,
        ambr,
        sipto_Permission,
        lipa_Permission,
        restoration_Priority,
        sipto_local_network_Permission,
        nIDD_Mechanism,
        sCEF_ID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PDP_Context(el);
}

let _cached_encoder_for_PDP_Context: $.ASN1Encoder<PDP_Context> | null = null;

/**
 * @summary Encodes a(n) PDP_Context into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDP_Context, encoded as an ASN.1 Element.
 */
export
function _encode_PDP_Context (value: PDP_Context, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDP_Context) { _cached_encoder_for_PDP_Context = function (value: PDP_Context, elGetter: $.ASN1Encoder<PDP_Context>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ContextId(value.pdp_ContextId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => _encode_PDP_Type, $.BER)(value.pdp_Type, $.BER),
            /* IF_ABSENT  */ ((value.pdp_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_PDP_Address, $.BER)(value.pdp_Address, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 18, () => _encode_QoS_Subscribed, $.BER)(value.qos_Subscribed, $.BER),
            /* IF_ABSENT  */ ((value.vplmnAddressAllowed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => $._encodeNull, $.BER)(value.vplmnAddressAllowed, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 20, () => _encode_APN, $.BER)(value.apn, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.ext_QoS_Subscribed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Ext_QoS_Subscribed, $.BER)(value.ext_QoS_Subscribed, $.BER)),
            /* IF_ABSENT  */ ((value.pdp_ChargingCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ChargingCharacteristics, $.BER)(value.pdp_ChargingCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.ext2_QoS_Subscribed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Ext2_QoS_Subscribed, $.BER)(value.ext2_QoS_Subscribed, $.BER)),
            /* IF_ABSENT  */ ((value.ext3_QoS_Subscribed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Ext3_QoS_Subscribed, $.BER)(value.ext3_QoS_Subscribed, $.BER)),
            /* IF_ABSENT  */ ((value.ext4_QoS_Subscribed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Ext4_QoS_Subscribed, $.BER)(value.ext4_QoS_Subscribed, $.BER)),
            /* IF_ABSENT  */ ((value.apn_oi_Replacement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_APN_OI_Replacement, $.BER)(value.apn_oi_Replacement, $.BER)),
            /* IF_ABSENT  */ ((value.ext_pdp_Type === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_Ext_PDP_Type, $.BER)(value.ext_pdp_Type, $.BER)),
            /* IF_ABSENT  */ ((value.ext_pdp_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_PDP_Address, $.BER)(value.ext_pdp_Address, $.BER)),
            /* IF_ABSENT  */ ((value.ambr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_AMBR, $.BER)(value.ambr, $.BER)),
            /* IF_ABSENT  */ ((value.sipto_Permission === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_SIPTO_Permission, $.BER)(value.sipto_Permission, $.BER)),
            /* IF_ABSENT  */ ((value.lipa_Permission === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_LIPA_Permission, $.BER)(value.lipa_Permission, $.BER)),
            /* IF_ABSENT  */ ((value.restoration_Priority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_Restoration_Priority, $.BER)(value.restoration_Priority, $.BER)),
            /* IF_ABSENT  */ ((value.sipto_local_network_Permission === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_SIPTO_Local_Network_Permission, $.BER)(value.sipto_local_network_Permission, $.BER)),
            /* IF_ABSENT  */ ((value.nIDD_Mechanism === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_NIDD_Mechanism, $.BER)(value.nIDD_Mechanism, $.BER)),
            /* IF_ABSENT  */ ((value.sCEF_ID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_FQDN, $.BER)(value.sCEF_ID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PDP_Context(value, elGetter);
}


/* eslint-enable */
