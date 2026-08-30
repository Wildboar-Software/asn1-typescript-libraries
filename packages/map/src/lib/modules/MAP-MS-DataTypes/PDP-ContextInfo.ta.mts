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
import { APN, _decode_APN, _encode_APN } from "../MAP-MS-DataTypes/APN.ta.mjs";
// export { APN, _decode_APN, _encode_APN } from "../MAP-MS-DataTypes/APN.ta.mjs";
import { NSAPI, _decode_NSAPI, _encode_NSAPI } from "../MAP-MS-DataTypes/NSAPI.ta.mjs";
// export { NSAPI, _decode_NSAPI, _encode_NSAPI } from "../MAP-MS-DataTypes/NSAPI.ta.mjs";
import { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../MAP-MS-DataTypes/TransactionId.ta.mjs";
// export { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../MAP-MS-DataTypes/TransactionId.ta.mjs";
import { TEID, _decode_TEID, _encode_TEID } from "../MAP-MS-DataTypes/TEID.ta.mjs";
// export { TEID, _decode_TEID, _encode_TEID } from "../MAP-MS-DataTypes/TEID.ta.mjs";
import { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
// export { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
import { Ext_QoS_Subscribed, _decode_Ext_QoS_Subscribed, _encode_Ext_QoS_Subscribed } from "../MAP-MS-DataTypes/Ext-QoS-Subscribed.ta.mjs";
// export { Ext_QoS_Subscribed, _decode_Ext_QoS_Subscribed, _encode_Ext_QoS_Subscribed } from "../MAP-MS-DataTypes/Ext-QoS-Subscribed.ta.mjs";
import { GPRSChargingID, _decode_GPRSChargingID, _encode_GPRSChargingID } from "../MAP-MS-DataTypes/GPRSChargingID.ta.mjs";
// export { GPRSChargingID, _decode_GPRSChargingID, _encode_GPRSChargingID } from "../MAP-MS-DataTypes/GPRSChargingID.ta.mjs";
import { ChargingCharacteristics, _decode_ChargingCharacteristics, _encode_ChargingCharacteristics } from "../MAP-MS-DataTypes/ChargingCharacteristics.ta.mjs";
// export { ChargingCharacteristics, _decode_ChargingCharacteristics, _encode_ChargingCharacteristics } from "../MAP-MS-DataTypes/ChargingCharacteristics.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { Ext2_QoS_Subscribed, _decode_Ext2_QoS_Subscribed, _encode_Ext2_QoS_Subscribed } from "../MAP-MS-DataTypes/Ext2-QoS-Subscribed.ta.mjs";
// export { Ext2_QoS_Subscribed, _decode_Ext2_QoS_Subscribed, _encode_Ext2_QoS_Subscribed } from "../MAP-MS-DataTypes/Ext2-QoS-Subscribed.ta.mjs";
import { Ext3_QoS_Subscribed, _decode_Ext3_QoS_Subscribed, _encode_Ext3_QoS_Subscribed } from "../MAP-MS-DataTypes/Ext3-QoS-Subscribed.ta.mjs";
// export { Ext3_QoS_Subscribed, _decode_Ext3_QoS_Subscribed, _encode_Ext3_QoS_Subscribed } from "../MAP-MS-DataTypes/Ext3-QoS-Subscribed.ta.mjs";
import { Ext4_QoS_Subscribed, _decode_Ext4_QoS_Subscribed, _encode_Ext4_QoS_Subscribed } from "../MAP-MS-DataTypes/Ext4-QoS-Subscribed.ta.mjs";
// export { Ext4_QoS_Subscribed, _decode_Ext4_QoS_Subscribed, _encode_Ext4_QoS_Subscribed } from "../MAP-MS-DataTypes/Ext4-QoS-Subscribed.ta.mjs";
import { Ext_PDP_Type, _decode_Ext_PDP_Type, _encode_Ext_PDP_Type } from "../MAP-MS-DataTypes/Ext-PDP-Type.ta.mjs";
// export { Ext_PDP_Type, _decode_Ext_PDP_Type, _encode_Ext_PDP_Type } from "../MAP-MS-DataTypes/Ext-PDP-Type.ta.mjs";


/**
 * @summary PDP_ContextInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDP-ContextInfo ::= SEQUENCE {
 *     pdp-ContextIdentifier    [0] ContextId,
 *     pdp-ContextActive    [1] NULL    OPTIONAL,
 *     pdp-Type    [2] PDP-Type,
 *     pdp-Address    [3] PDP-Address    OPTIONAL,
 *     apn-Subscribed    [4] APN    OPTIONAL,
 *     apn-InUse    [5] APN    OPTIONAL,
 *     nsapi    [6] NSAPI    OPTIONAL,
 *     transactionId    [7] TransactionId    OPTIONAL,
 *     teid-ForGnAndGp    [8] TEID    OPTIONAL,
 *     teid-ForIu    [9] TEID    OPTIONAL,
 *     ggsn-Address    [10] GSN-Address    OPTIONAL,
 *     qos-Subscribed    [11] Ext-QoS-Subscribed    OPTIONAL,
 *     qos-Requested    [12] Ext-QoS-Subscribed    OPTIONAL,
 *     qos-Negotiated    [13] Ext-QoS-Subscribed    OPTIONAL,
 *     chargingId    [14] GPRSChargingID    OPTIONAL,
 *     chargingCharacteristics    [15] ChargingCharacteristics    OPTIONAL,
 *     rnc-Address    [16] GSN-Address    OPTIONAL,
 *     extensionContainer    [17] ExtensionContainer    OPTIONAL,
 *     ...,
 *     qos2-Subscribed    [18] Ext2-QoS-Subscribed    OPTIONAL,
 *     -- qos2-Subscribed may be present only if qos-Subscribed is present.
 *     qos2-Requested    [19] Ext2-QoS-Subscribed    OPTIONAL,
 *     -- qos2-Requested may be present only if qos-Requested is present.
 *     qos2-Negotiated    [20] Ext2-QoS-Subscribed    OPTIONAL,
 *     -- qos2-Negotiated may be present only if qos-Negotiated is present.
 *     qos3-Subscribed    [21] Ext3-QoS-Subscribed    OPTIONAL,
 *     -- qos3-Subscribed may be present only if qos2-Subscribed is present.
 *     qos3-Requested    [22] Ext3-QoS-Subscribed    OPTIONAL,
 *     -- qos3-Requested may be present only if qos2-Requested is present.
 *     qos3-Negotiated    [23] Ext3-QoS-Subscribed    OPTIONAL,
 *     -- qos3-Negotiated may be present only if qos2-Negotiated is present.
 *     qos4-Subscribed    [25] Ext4-QoS-Subscribed    OPTIONAL,
 *     -- qos4-Subscribed may be present only if qos3-Subscribed is present.
 *     qos4-Requested    [26] Ext4-QoS-Subscribed    OPTIONAL,
 *     -- qos4-Requested may be present only if qos3-Requested is present.
 *     qos4-Negotiated    [27] Ext4-QoS-Subscribed    OPTIONAL,
 *     -- qos4-Negotiated may be present only if qos3-Negotiated is present. 
 *     ext-pdp-Type    [28] Ext-PDP-Type    OPTIONAL,
 *     -- contains the value IPv4v6 defined in 3GPP TS 29.060 [105], if the PDP can be
 *     -- accessed by dual-stack UEs.
 *     ext-pdp-Address    [29] PDP-Address    OPTIONAL
 *     -- contains an additional IP address in case of dual-stack static IP address assignment
 *     -- for the UE.
 *     -- it may contain an IPv4 or an IPv6 address/prefix, and it may be present
 *     -- only if pdp-Address is present; if both are present, each parameter shall
 *     -- contain a different type of address (IPv4 or IPv6).
 * 
 * }
 * ```
 * 
 * @class
 */
export
class PDP_ContextInfo {
    constructor (
        /**
         * @summary `pdp_ContextIdentifier`.
         * @public
         * @readonly
         */
        readonly pdp_ContextIdentifier: ContextId,
        /**
         * @summary `pdp_ContextActive`.
         * @public
         * @readonly
         */
        readonly pdp_ContextActive: OPTIONAL<NULL>,
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
         * @summary `apn_Subscribed`.
         * @public
         * @readonly
         */
        readonly apn_Subscribed: OPTIONAL<APN>,
        /**
         * @summary `apn_InUse`.
         * @public
         * @readonly
         */
        readonly apn_InUse: OPTIONAL<APN>,
        /**
         * @summary `nsapi`.
         * @public
         * @readonly
         */
        readonly nsapi: OPTIONAL<NSAPI>,
        /**
         * @summary `transactionId`.
         * @public
         * @readonly
         */
        readonly transactionId: OPTIONAL<TransactionId>,
        /**
         * @summary `teid_ForGnAndGp`.
         * @public
         * @readonly
         */
        readonly teid_ForGnAndGp: OPTIONAL<TEID>,
        /**
         * @summary `teid_ForIu`.
         * @public
         * @readonly
         */
        readonly teid_ForIu: OPTIONAL<TEID>,
        /**
         * @summary `ggsn_Address`.
         * @public
         * @readonly
         */
        readonly ggsn_Address: OPTIONAL<GSN_Address>,
        /**
         * @summary `qos_Subscribed`.
         * @public
         * @readonly
         */
        readonly qos_Subscribed: OPTIONAL<Ext_QoS_Subscribed>,
        /**
         * @summary `qos_Requested`.
         * @public
         * @readonly
         */
        readonly qos_Requested: OPTIONAL<Ext_QoS_Subscribed>,
        /**
         * @summary `qos_Negotiated`.
         * @public
         * @readonly
         */
        readonly qos_Negotiated: OPTIONAL<Ext_QoS_Subscribed>,
        /**
         * @summary `chargingId`.
         * @public
         * @readonly
         */
        readonly chargingId: OPTIONAL<GPRSChargingID>,
        /**
         * @summary `chargingCharacteristics`.
         * @public
         * @readonly
         */
        readonly chargingCharacteristics: OPTIONAL<ChargingCharacteristics>,
        /**
         * @summary `rnc_Address`.
         * @public
         * @readonly
         */
        readonly rnc_Address: OPTIONAL<GSN_Address>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `qos2_Subscribed`.
         * @public
         * @readonly
         */
        readonly qos2_Subscribed: OPTIONAL<Ext2_QoS_Subscribed>,
        /**
         * @summary `qos2_Requested`.
         * @public
         * @readonly
         */
        readonly qos2_Requested: OPTIONAL<Ext2_QoS_Subscribed>,
        /**
         * @summary `qos2_Negotiated`.
         * @public
         * @readonly
         */
        readonly qos2_Negotiated: OPTIONAL<Ext2_QoS_Subscribed>,
        /**
         * @summary `qos3_Subscribed`.
         * @public
         * @readonly
         */
        readonly qos3_Subscribed: OPTIONAL<Ext3_QoS_Subscribed>,
        /**
         * @summary `qos3_Requested`.
         * @public
         * @readonly
         */
        readonly qos3_Requested: OPTIONAL<Ext3_QoS_Subscribed>,
        /**
         * @summary `qos3_Negotiated`.
         * @public
         * @readonly
         */
        readonly qos3_Negotiated: OPTIONAL<Ext3_QoS_Subscribed>,
        /**
         * @summary `qos4_Subscribed`.
         * @public
         * @readonly
         */
        readonly qos4_Subscribed: OPTIONAL<Ext4_QoS_Subscribed>,
        /**
         * @summary `qos4_Requested`.
         * @public
         * @readonly
         */
        readonly qos4_Requested: OPTIONAL<Ext4_QoS_Subscribed>,
        /**
         * @summary `qos4_Negotiated`.
         * @public
         * @readonly
         */
        readonly qos4_Negotiated: OPTIONAL<Ext4_QoS_Subscribed>,
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
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PDP_ContextInfo
     * @description
     * 
     * This takes an `object` and converts it to a `PDP_ContextInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDP_ContextInfo`.
     * @returns {PDP_ContextInfo}
     */
    public static _from_object (_o: { [_K in keyof (PDP_ContextInfo)]: (PDP_ContextInfo)[_K] }): PDP_ContextInfo {
        return new PDP_ContextInfo(_o.pdp_ContextIdentifier, _o.pdp_ContextActive, _o.pdp_Type, _o.pdp_Address, _o.apn_Subscribed, _o.apn_InUse, _o.nsapi, _o.transactionId, _o.teid_ForGnAndGp, _o.teid_ForIu, _o.ggsn_Address, _o.qos_Subscribed, _o.qos_Requested, _o.qos_Negotiated, _o.chargingId, _o.chargingCharacteristics, _o.rnc_Address, _o.extensionContainer, _o.qos2_Subscribed, _o.qos2_Requested, _o.qos2_Negotiated, _o.qos3_Subscribed, _o.qos3_Requested, _o.qos3_Negotiated, _o.qos4_Subscribed, _o.qos4_Requested, _o.qos4_Negotiated, _o.ext_pdp_Type, _o.ext_pdp_Address, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PDP_ContextInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PDP_ContextInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("pdp-ContextIdentifier", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("pdp-ContextActive", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("pdp-Type", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("pdp-Address", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("apn-Subscribed", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("apn-InUse", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("nsapi", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("transactionId", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("teid-ForGnAndGp", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("teid-ForIu", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("ggsn-Address", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("qos-Subscribed", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("qos-Requested", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("qos-Negotiated", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("chargingId", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("chargingCharacteristics", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("rnc-Address", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 17), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of PDP_ContextInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PDP_ContextInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PDP_ContextInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PDP_ContextInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("qos2-Subscribed", true, $.hasTag(_TagClass.context, 18), undefined, undefined),
    new $.ComponentSpec("qos2-Requested", true, $.hasTag(_TagClass.context, 19), undefined, undefined),
    new $.ComponentSpec("qos2-Negotiated", true, $.hasTag(_TagClass.context, 20), undefined, undefined),
    new $.ComponentSpec("qos3-Subscribed", true, $.hasTag(_TagClass.context, 21), undefined, undefined),
    new $.ComponentSpec("qos3-Requested", true, $.hasTag(_TagClass.context, 22), undefined, undefined),
    new $.ComponentSpec("qos3-Negotiated", true, $.hasTag(_TagClass.context, 23), undefined, undefined),
    new $.ComponentSpec("qos4-Subscribed", true, $.hasTag(_TagClass.context, 25), undefined, undefined),
    new $.ComponentSpec("qos4-Requested", true, $.hasTag(_TagClass.context, 26), undefined, undefined),
    new $.ComponentSpec("qos4-Negotiated", true, $.hasTag(_TagClass.context, 27), undefined, undefined),
    new $.ComponentSpec("ext-pdp-Type", true, $.hasTag(_TagClass.context, 28), undefined, undefined),
    new $.ComponentSpec("ext-pdp-Address", true, $.hasTag(_TagClass.context, 29), undefined, undefined)
];

let _cached_decoder_for_PDP_ContextInfo: $.ASN1Decoder<PDP_ContextInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDP_ContextInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDP_ContextInfo (el: _Element): PDP_ContextInfo {
    if (!_cached_decoder_for_PDP_ContextInfo) { _cached_decoder_for_PDP_ContextInfo = function (el: _Element): PDP_ContextInfo {
    let pdp_ContextIdentifier!: ContextId;
    let pdp_ContextActive: OPTIONAL<NULL>;
    let pdp_Type!: PDP_Type;
    let pdp_Address: OPTIONAL<PDP_Address>;
    let apn_Subscribed: OPTIONAL<APN>;
    let apn_InUse: OPTIONAL<APN>;
    let nsapi: OPTIONAL<NSAPI>;
    let transactionId: OPTIONAL<TransactionId>;
    let teid_ForGnAndGp: OPTIONAL<TEID>;
    let teid_ForIu: OPTIONAL<TEID>;
    let ggsn_Address: OPTIONAL<GSN_Address>;
    let qos_Subscribed: OPTIONAL<Ext_QoS_Subscribed>;
    let qos_Requested: OPTIONAL<Ext_QoS_Subscribed>;
    let qos_Negotiated: OPTIONAL<Ext_QoS_Subscribed>;
    let chargingId: OPTIONAL<GPRSChargingID>;
    let chargingCharacteristics: OPTIONAL<ChargingCharacteristics>;
    let rnc_Address: OPTIONAL<GSN_Address>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let qos2_Subscribed: OPTIONAL<Ext2_QoS_Subscribed>;
    let qos2_Requested: OPTIONAL<Ext2_QoS_Subscribed>;
    let qos2_Negotiated: OPTIONAL<Ext2_QoS_Subscribed>;
    let qos3_Subscribed: OPTIONAL<Ext3_QoS_Subscribed>;
    let qos3_Requested: OPTIONAL<Ext3_QoS_Subscribed>;
    let qos3_Negotiated: OPTIONAL<Ext3_QoS_Subscribed>;
    let qos4_Subscribed: OPTIONAL<Ext4_QoS_Subscribed>;
    let qos4_Requested: OPTIONAL<Ext4_QoS_Subscribed>;
    let qos4_Negotiated: OPTIONAL<Ext4_QoS_Subscribed>;
    let ext_pdp_Type: OPTIONAL<Ext_PDP_Type>;
    let ext_pdp_Address: OPTIONAL<PDP_Address>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pdp-ContextIdentifier": (_el: _Element): void => { pdp_ContextIdentifier = $._decode_implicit<ContextId>(() => _decode_ContextId)(_el); },
        "pdp-ContextActive": (_el: _Element): void => { pdp_ContextActive = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "pdp-Type": (_el: _Element): void => { pdp_Type = $._decode_implicit<PDP_Type>(() => _decode_PDP_Type)(_el); },
        "pdp-Address": (_el: _Element): void => { pdp_Address = $._decode_implicit<PDP_Address>(() => _decode_PDP_Address)(_el); },
        "apn-Subscribed": (_el: _Element): void => { apn_Subscribed = $._decode_implicit<APN>(() => _decode_APN)(_el); },
        "apn-InUse": (_el: _Element): void => { apn_InUse = $._decode_implicit<APN>(() => _decode_APN)(_el); },
        "nsapi": (_el: _Element): void => { nsapi = $._decode_implicit<NSAPI>(() => _decode_NSAPI)(_el); },
        "transactionId": (_el: _Element): void => { transactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(_el); },
        "teid-ForGnAndGp": (_el: _Element): void => { teid_ForGnAndGp = $._decode_implicit<TEID>(() => _decode_TEID)(_el); },
        "teid-ForIu": (_el: _Element): void => { teid_ForIu = $._decode_implicit<TEID>(() => _decode_TEID)(_el); },
        "ggsn-Address": (_el: _Element): void => { ggsn_Address = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); },
        "qos-Subscribed": (_el: _Element): void => { qos_Subscribed = $._decode_implicit<Ext_QoS_Subscribed>(() => _decode_Ext_QoS_Subscribed)(_el); },
        "qos-Requested": (_el: _Element): void => { qos_Requested = $._decode_implicit<Ext_QoS_Subscribed>(() => _decode_Ext_QoS_Subscribed)(_el); },
        "qos-Negotiated": (_el: _Element): void => { qos_Negotiated = $._decode_implicit<Ext_QoS_Subscribed>(() => _decode_Ext_QoS_Subscribed)(_el); },
        "chargingId": (_el: _Element): void => { chargingId = $._decode_implicit<GPRSChargingID>(() => _decode_GPRSChargingID)(_el); },
        "chargingCharacteristics": (_el: _Element): void => { chargingCharacteristics = $._decode_implicit<ChargingCharacteristics>(() => _decode_ChargingCharacteristics)(_el); },
        "rnc-Address": (_el: _Element): void => { rnc_Address = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "qos2-Subscribed": (_el: _Element): void => { qos2_Subscribed = $._decode_implicit<Ext2_QoS_Subscribed>(() => _decode_Ext2_QoS_Subscribed)(_el); },
        "qos2-Requested": (_el: _Element): void => { qos2_Requested = $._decode_implicit<Ext2_QoS_Subscribed>(() => _decode_Ext2_QoS_Subscribed)(_el); },
        "qos2-Negotiated": (_el: _Element): void => { qos2_Negotiated = $._decode_implicit<Ext2_QoS_Subscribed>(() => _decode_Ext2_QoS_Subscribed)(_el); },
        "qos3-Subscribed": (_el: _Element): void => { qos3_Subscribed = $._decode_implicit<Ext3_QoS_Subscribed>(() => _decode_Ext3_QoS_Subscribed)(_el); },
        "qos3-Requested": (_el: _Element): void => { qos3_Requested = $._decode_implicit<Ext3_QoS_Subscribed>(() => _decode_Ext3_QoS_Subscribed)(_el); },
        "qos3-Negotiated": (_el: _Element): void => { qos3_Negotiated = $._decode_implicit<Ext3_QoS_Subscribed>(() => _decode_Ext3_QoS_Subscribed)(_el); },
        "qos4-Subscribed": (_el: _Element): void => { qos4_Subscribed = $._decode_implicit<Ext4_QoS_Subscribed>(() => _decode_Ext4_QoS_Subscribed)(_el); },
        "qos4-Requested": (_el: _Element): void => { qos4_Requested = $._decode_implicit<Ext4_QoS_Subscribed>(() => _decode_Ext4_QoS_Subscribed)(_el); },
        "qos4-Negotiated": (_el: _Element): void => { qos4_Negotiated = $._decode_implicit<Ext4_QoS_Subscribed>(() => _decode_Ext4_QoS_Subscribed)(_el); },
        "ext-pdp-Type": (_el: _Element): void => { ext_pdp_Type = $._decode_implicit<Ext_PDP_Type>(() => _decode_Ext_PDP_Type)(_el); },
        "ext-pdp-Address": (_el: _Element): void => { ext_pdp_Address = $._decode_implicit<PDP_Address>(() => _decode_PDP_Address)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PDP_ContextInfo,
        _extension_additions_list_spec_for_PDP_ContextInfo,
        _root_component_type_list_2_spec_for_PDP_ContextInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PDP_ContextInfo(
        pdp_ContextIdentifier,
        pdp_ContextActive,
        pdp_Type,
        pdp_Address,
        apn_Subscribed,
        apn_InUse,
        nsapi,
        transactionId,
        teid_ForGnAndGp,
        teid_ForIu,
        ggsn_Address,
        qos_Subscribed,
        qos_Requested,
        qos_Negotiated,
        chargingId,
        chargingCharacteristics,
        rnc_Address,
        extensionContainer,
        qos2_Subscribed,
        qos2_Requested,
        qos2_Negotiated,
        qos3_Subscribed,
        qos3_Requested,
        qos3_Negotiated,
        qos4_Subscribed,
        qos4_Requested,
        qos4_Negotiated,
        ext_pdp_Type,
        ext_pdp_Address,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PDP_ContextInfo(el);
}

let _cached_encoder_for_PDP_ContextInfo: $.ASN1Encoder<PDP_ContextInfo> | null = null;

/**
 * @summary Encodes a(n) PDP_ContextInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDP_ContextInfo, encoded as an ASN.1 Element.
 */
export
function _encode_PDP_ContextInfo (value: PDP_ContextInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDP_ContextInfo) { _cached_encoder_for_PDP_ContextInfo = function (value: PDP_ContextInfo, elGetter: $.ASN1Encoder<PDP_ContextInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ContextId, $.BER)(value.pdp_ContextIdentifier, $.BER),
            /* IF_ABSENT  */ ((value.pdp_ContextActive === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.pdp_ContextActive, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PDP_Type, $.BER)(value.pdp_Type, $.BER),
            /* IF_ABSENT  */ ((value.pdp_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_PDP_Address, $.BER)(value.pdp_Address, $.BER)),
            /* IF_ABSENT  */ ((value.apn_Subscribed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_APN, $.BER)(value.apn_Subscribed, $.BER)),
            /* IF_ABSENT  */ ((value.apn_InUse === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_APN, $.BER)(value.apn_InUse, $.BER)),
            /* IF_ABSENT  */ ((value.nsapi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_NSAPI, $.BER)(value.nsapi, $.BER)),
            /* IF_ABSENT  */ ((value.transactionId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_TransactionId, $.BER)(value.transactionId, $.BER)),
            /* IF_ABSENT  */ ((value.teid_ForGnAndGp === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_TEID, $.BER)(value.teid_ForGnAndGp, $.BER)),
            /* IF_ABSENT  */ ((value.teid_ForIu === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_TEID, $.BER)(value.teid_ForIu, $.BER)),
            /* IF_ABSENT  */ ((value.ggsn_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_GSN_Address, $.BER)(value.ggsn_Address, $.BER)),
            /* IF_ABSENT  */ ((value.qos_Subscribed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_Ext_QoS_Subscribed, $.BER)(value.qos_Subscribed, $.BER)),
            /* IF_ABSENT  */ ((value.qos_Requested === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_Ext_QoS_Subscribed, $.BER)(value.qos_Requested, $.BER)),
            /* IF_ABSENT  */ ((value.qos_Negotiated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_Ext_QoS_Subscribed, $.BER)(value.qos_Negotiated, $.BER)),
            /* IF_ABSENT  */ ((value.chargingId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_GPRSChargingID, $.BER)(value.chargingId, $.BER)),
            /* IF_ABSENT  */ ((value.chargingCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_ChargingCharacteristics, $.BER)(value.chargingCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.rnc_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_GSN_Address, $.BER)(value.rnc_Address, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.qos2_Subscribed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_Ext2_QoS_Subscribed, $.BER)(value.qos2_Subscribed, $.BER)),
            /* IF_ABSENT  */ ((value.qos2_Requested === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_Ext2_QoS_Subscribed, $.BER)(value.qos2_Requested, $.BER)),
            /* IF_ABSENT  */ ((value.qos2_Negotiated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_Ext2_QoS_Subscribed, $.BER)(value.qos2_Negotiated, $.BER)),
            /* IF_ABSENT  */ ((value.qos3_Subscribed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_Ext3_QoS_Subscribed, $.BER)(value.qos3_Subscribed, $.BER)),
            /* IF_ABSENT  */ ((value.qos3_Requested === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_Ext3_QoS_Subscribed, $.BER)(value.qos3_Requested, $.BER)),
            /* IF_ABSENT  */ ((value.qos3_Negotiated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_Ext3_QoS_Subscribed, $.BER)(value.qos3_Negotiated, $.BER)),
            /* IF_ABSENT  */ ((value.qos4_Subscribed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => _encode_Ext4_QoS_Subscribed, $.BER)(value.qos4_Subscribed, $.BER)),
            /* IF_ABSENT  */ ((value.qos4_Requested === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_Ext4_QoS_Subscribed, $.BER)(value.qos4_Requested, $.BER)),
            /* IF_ABSENT  */ ((value.qos4_Negotiated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => _encode_Ext4_QoS_Subscribed, $.BER)(value.qos4_Negotiated, $.BER)),
            /* IF_ABSENT  */ ((value.ext_pdp_Type === undefined) ? undefined : $._encode_implicit(_TagClass.context, 28, () => _encode_Ext_PDP_Type, $.BER)(value.ext_pdp_Type, $.BER)),
            /* IF_ABSENT  */ ((value.ext_pdp_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 29, () => _encode_PDP_Address, $.BER)(value.ext_pdp_Address, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PDP_ContextInfo(value, elGetter);
}


/* eslint-enable */
