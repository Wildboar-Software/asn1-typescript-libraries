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
import { O_CSI, _decode_O_CSI, _encode_O_CSI } from "../MAP-MS-DataTypes/O-CSI.ta.mjs";
// export { O_CSI, _decode_O_CSI, _encode_O_CSI } from "../MAP-MS-DataTypes/O-CSI.ta.mjs";
import { O_BcsmCamelTDPCriteriaList, _decode_O_BcsmCamelTDPCriteriaList, _encode_O_BcsmCamelTDPCriteriaList } from "../MAP-MS-DataTypes/O-BcsmCamelTDPCriteriaList.ta.mjs";
// export { O_BcsmCamelTDPCriteriaList, _decode_O_BcsmCamelTDPCriteriaList, _encode_O_BcsmCamelTDPCriteriaList } from "../MAP-MS-DataTypes/O-BcsmCamelTDPCriteriaList.ta.mjs";
import { D_CSI, _decode_D_CSI, _encode_D_CSI } from "../MAP-MS-DataTypes/D-CSI.ta.mjs";
// export { D_CSI, _decode_D_CSI, _encode_D_CSI } from "../MAP-MS-DataTypes/D-CSI.ta.mjs";
import { T_CSI, _decode_T_CSI, _encode_T_CSI } from "../MAP-MS-DataTypes/T-CSI.ta.mjs";
// export { T_CSI, _decode_T_CSI, _encode_T_CSI } from "../MAP-MS-DataTypes/T-CSI.ta.mjs";
import { T_BCSM_CAMEL_TDP_CriteriaList, _decode_T_BCSM_CAMEL_TDP_CriteriaList, _encode_T_BCSM_CAMEL_TDP_CriteriaList } from "../MAP-MS-DataTypes/T-BCSM-CAMEL-TDP-CriteriaList.ta.mjs";
// export { T_BCSM_CAMEL_TDP_CriteriaList, _decode_T_BCSM_CAMEL_TDP_CriteriaList, _encode_T_BCSM_CAMEL_TDP_CriteriaList } from "../MAP-MS-DataTypes/T-BCSM-CAMEL-TDP-CriteriaList.ta.mjs";
import { GPRS_CSI, _decode_GPRS_CSI, _encode_GPRS_CSI } from "../MAP-MS-DataTypes/GPRS-CSI.ta.mjs";
// export { GPRS_CSI, _decode_GPRS_CSI, _encode_GPRS_CSI } from "../MAP-MS-DataTypes/GPRS-CSI.ta.mjs";
import { SMS_CSI, _decode_SMS_CSI, _encode_SMS_CSI } from "../MAP-MS-DataTypes/SMS-CSI.ta.mjs";
// export { SMS_CSI, _decode_SMS_CSI, _encode_SMS_CSI } from "../MAP-MS-DataTypes/SMS-CSI.ta.mjs";
import { SS_CSI, _decode_SS_CSI, _encode_SS_CSI } from "../MAP-MS-DataTypes/SS-CSI.ta.mjs";
// export { SS_CSI, _decode_SS_CSI, _encode_SS_CSI } from "../MAP-MS-DataTypes/SS-CSI.ta.mjs";
import { M_CSI, _decode_M_CSI, _encode_M_CSI } from "../MAP-MS-DataTypes/M-CSI.ta.mjs";
// export { M_CSI, _decode_M_CSI, _encode_M_CSI } from "../MAP-MS-DataTypes/M-CSI.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { SpecificCSI_Withdraw, SpecificCSI_Withdraw_o_csi /* IMPORTED_LONG_NAMED_BIT */, o_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_ss_csi /* IMPORTED_LONG_NAMED_BIT */, ss_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_tif_csi /* IMPORTED_LONG_NAMED_BIT */, tif_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_d_csi /* IMPORTED_LONG_NAMED_BIT */, d_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_vt_csi /* IMPORTED_LONG_NAMED_BIT */, vt_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_mo_sms_csi /* IMPORTED_LONG_NAMED_BIT */, mo_sms_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_m_csi /* IMPORTED_LONG_NAMED_BIT */, m_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_gprs_csi /* IMPORTED_LONG_NAMED_BIT */, gprs_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_t_csi /* IMPORTED_LONG_NAMED_BIT */, t_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_mt_sms_csi /* IMPORTED_LONG_NAMED_BIT */, mt_sms_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_mg_csi /* IMPORTED_LONG_NAMED_BIT */, mg_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_o_IM_CSI /* IMPORTED_LONG_NAMED_BIT */, o_IM_CSI /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_d_IM_CSI /* IMPORTED_LONG_NAMED_BIT */, d_IM_CSI /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_vt_IM_CSI /* IMPORTED_LONG_NAMED_BIT */, vt_IM_CSI /* IMPORTED_SHORT_NAMED_BIT */, _decode_SpecificCSI_Withdraw, _encode_SpecificCSI_Withdraw } from "../MAP-MS-DataTypes/SpecificCSI-Withdraw.ta.mjs";
// export { SpecificCSI_Withdraw, SpecificCSI_Withdraw_o_csi /* IMPORTED_LONG_NAMED_BIT */, o_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_ss_csi /* IMPORTED_LONG_NAMED_BIT */, ss_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_tif_csi /* IMPORTED_LONG_NAMED_BIT */, tif_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_d_csi /* IMPORTED_LONG_NAMED_BIT */, d_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_vt_csi /* IMPORTED_LONG_NAMED_BIT */, vt_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_mo_sms_csi /* IMPORTED_LONG_NAMED_BIT */, mo_sms_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_m_csi /* IMPORTED_LONG_NAMED_BIT */, m_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_gprs_csi /* IMPORTED_LONG_NAMED_BIT */, gprs_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_t_csi /* IMPORTED_LONG_NAMED_BIT */, t_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_mt_sms_csi /* IMPORTED_LONG_NAMED_BIT */, mt_sms_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_mg_csi /* IMPORTED_LONG_NAMED_BIT */, mg_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_o_IM_CSI /* IMPORTED_LONG_NAMED_BIT */, o_IM_CSI /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_d_IM_CSI /* IMPORTED_LONG_NAMED_BIT */, d_IM_CSI /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_vt_IM_CSI /* IMPORTED_LONG_NAMED_BIT */, vt_IM_CSI /* IMPORTED_SHORT_NAMED_BIT */, _decode_SpecificCSI_Withdraw, _encode_SpecificCSI_Withdraw } from "../MAP-MS-DataTypes/SpecificCSI-Withdraw.ta.mjs";
import { MT_smsCAMELTDP_CriteriaList, _decode_MT_smsCAMELTDP_CriteriaList, _encode_MT_smsCAMELTDP_CriteriaList } from "../MAP-MS-DataTypes/MT-smsCAMELTDP-CriteriaList.ta.mjs";
// export { MT_smsCAMELTDP_CriteriaList, _decode_MT_smsCAMELTDP_CriteriaList, _encode_MT_smsCAMELTDP_CriteriaList } from "../MAP-MS-DataTypes/MT-smsCAMELTDP-CriteriaList.ta.mjs";
import { MG_CSI, _decode_MG_CSI, _encode_MG_CSI } from "../MAP-MS-DataTypes/MG-CSI.ta.mjs";
// export { MG_CSI, _decode_MG_CSI, _encode_MG_CSI } from "../MAP-MS-DataTypes/MG-CSI.ta.mjs";


/**
 * @summary CAMEL_SubscriptionInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMEL-SubscriptionInfo ::= SEQUENCE {
 *     o-CSI    [0]    O-CSI    OPTIONAL,
 *     o-BcsmCamelTDP-CriteriaList    [1]    O-BcsmCamelTDPCriteriaList    OPTIONAL, 
 *     d-CSI    [2]    D-CSI    OPTIONAL,
 *     t-CSI    [3]    T-CSI    OPTIONAL,
 *     t-BCSM-CAMEL-TDP-CriteriaList    [4]    T-BCSM-CAMEL-TDP-CriteriaList    OPTIONAL,
 *     vt-CSI    [5]    T-CSI    OPTIONAL,
 *     vt-BCSM-CAMEL-TDP-CriteriaList    [6]    T-BCSM-CAMEL-TDP-CriteriaList    OPTIONAL,
 *     tif-CSI    [7]    NULL    OPTIONAL,
 *     tif-CSI-NotificationToCSE    [8]    NULL    OPTIONAL,
 *     gprs-CSI    [9]    GPRS-CSI    OPTIONAL,
 *     mo-sms-CSI    [10]    SMS-CSI    OPTIONAL,
 *     ss-CSI    [11]    SS-CSI    OPTIONAL,
 *     m-CSI    [12]    M-CSI    OPTIONAL,
 *     extensionContainer    [13]    ExtensionContainer    OPTIONAL,
 *     ...,
 *     specificCSIDeletedList    [14]    SpecificCSI-Withdraw    OPTIONAL,
 *     mt-sms-CSI    [15]    SMS-CSI    OPTIONAL,
 *     mt-smsCAMELTDP-CriteriaList    [16]    MT-smsCAMELTDP-CriteriaList    OPTIONAL,
 *     mg-csi    [17]    MG-CSI    OPTIONAL,
 *     o-IM-CSI    [18] O-CSI    OPTIONAL,
 *     o-IM-BcsmCamelTDP-CriteriaList    [19] O-BcsmCamelTDPCriteriaList    OPTIONAL,
 *     d-IM-CSI    [20] D-CSI    OPTIONAL,
 *     vt-IM-CSI    [21] T-CSI    OPTIONAL,
 *     vt-IM-BCSM-CAMEL-TDP-CriteriaList    [22]    T-BCSM-CAMEL-TDP-CriteriaList    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class CAMEL_SubscriptionInfo {
    constructor (
        /**
         * @summary `o_CSI`.
         * @public
         * @readonly
         */
        readonly o_CSI: OPTIONAL<O_CSI>,
        /**
         * @summary `o_BcsmCamelTDP_CriteriaList`.
         * @public
         * @readonly
         */
        readonly o_BcsmCamelTDP_CriteriaList: OPTIONAL<O_BcsmCamelTDPCriteriaList>,
        /**
         * @summary `d_CSI`.
         * @public
         * @readonly
         */
        readonly d_CSI: OPTIONAL<D_CSI>,
        /**
         * @summary `t_CSI`.
         * @public
         * @readonly
         */
        readonly t_CSI: OPTIONAL<T_CSI>,
        /**
         * @summary `t_BCSM_CAMEL_TDP_CriteriaList`.
         * @public
         * @readonly
         */
        readonly t_BCSM_CAMEL_TDP_CriteriaList: OPTIONAL<T_BCSM_CAMEL_TDP_CriteriaList>,
        /**
         * @summary `vt_CSI`.
         * @public
         * @readonly
         */
        readonly vt_CSI: OPTIONAL<T_CSI>,
        /**
         * @summary `vt_BCSM_CAMEL_TDP_CriteriaList`.
         * @public
         * @readonly
         */
        readonly vt_BCSM_CAMEL_TDP_CriteriaList: OPTIONAL<T_BCSM_CAMEL_TDP_CriteriaList>,
        /**
         * @summary `tif_CSI`.
         * @public
         * @readonly
         */
        readonly tif_CSI: OPTIONAL<NULL>,
        /**
         * @summary `tif_CSI_NotificationToCSE`.
         * @public
         * @readonly
         */
        readonly tif_CSI_NotificationToCSE: OPTIONAL<NULL>,
        /**
         * @summary `gprs_CSI`.
         * @public
         * @readonly
         */
        readonly gprs_CSI: OPTIONAL<GPRS_CSI>,
        /**
         * @summary `mo_sms_CSI`.
         * @public
         * @readonly
         */
        readonly mo_sms_CSI: OPTIONAL<SMS_CSI>,
        /**
         * @summary `ss_CSI`.
         * @public
         * @readonly
         */
        readonly ss_CSI: OPTIONAL<SS_CSI>,
        /**
         * @summary `m_CSI`.
         * @public
         * @readonly
         */
        readonly m_CSI: OPTIONAL<M_CSI>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `specificCSIDeletedList`.
         * @public
         * @readonly
         */
        readonly specificCSIDeletedList: OPTIONAL<SpecificCSI_Withdraw>,
        /**
         * @summary `mt_sms_CSI`.
         * @public
         * @readonly
         */
        readonly mt_sms_CSI: OPTIONAL<SMS_CSI>,
        /**
         * @summary `mt_smsCAMELTDP_CriteriaList`.
         * @public
         * @readonly
         */
        readonly mt_smsCAMELTDP_CriteriaList: OPTIONAL<MT_smsCAMELTDP_CriteriaList>,
        /**
         * @summary `mg_csi`.
         * @public
         * @readonly
         */
        readonly mg_csi: OPTIONAL<MG_CSI>,
        /**
         * @summary `o_IM_CSI`.
         * @public
         * @readonly
         */
        readonly o_IM_CSI: OPTIONAL<O_CSI>,
        /**
         * @summary `o_IM_BcsmCamelTDP_CriteriaList`.
         * @public
         * @readonly
         */
        readonly o_IM_BcsmCamelTDP_CriteriaList: OPTIONAL<O_BcsmCamelTDPCriteriaList>,
        /**
         * @summary `d_IM_CSI`.
         * @public
         * @readonly
         */
        readonly d_IM_CSI: OPTIONAL<D_CSI>,
        /**
         * @summary `vt_IM_CSI`.
         * @public
         * @readonly
         */
        readonly vt_IM_CSI: OPTIONAL<T_CSI>,
        /**
         * @summary `vt_IM_BCSM_CAMEL_TDP_CriteriaList`.
         * @public
         * @readonly
         */
        readonly vt_IM_BCSM_CAMEL_TDP_CriteriaList: OPTIONAL<T_BCSM_CAMEL_TDP_CriteriaList>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CAMEL_SubscriptionInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CAMEL_SubscriptionInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CAMEL_SubscriptionInfo`.
     * @returns {CAMEL_SubscriptionInfo}
     */
    public static _from_object (_o: { [_K in keyof (CAMEL_SubscriptionInfo)]: (CAMEL_SubscriptionInfo)[_K] }): CAMEL_SubscriptionInfo {
        return new CAMEL_SubscriptionInfo(_o.o_CSI, _o.o_BcsmCamelTDP_CriteriaList, _o.d_CSI, _o.t_CSI, _o.t_BCSM_CAMEL_TDP_CriteriaList, _o.vt_CSI, _o.vt_BCSM_CAMEL_TDP_CriteriaList, _o.tif_CSI, _o.tif_CSI_NotificationToCSE, _o.gprs_CSI, _o.mo_sms_CSI, _o.ss_CSI, _o.m_CSI, _o.extensionContainer, _o.specificCSIDeletedList, _o.mt_sms_CSI, _o.mt_smsCAMELTDP_CriteriaList, _o.mg_csi, _o.o_IM_CSI, _o.o_IM_BcsmCamelTDP_CriteriaList, _o.d_IM_CSI, _o.vt_IM_CSI, _o.vt_IM_BCSM_CAMEL_TDP_CriteriaList, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CAMEL_SubscriptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CAMEL_SubscriptionInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("o-CSI", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("o-BcsmCamelTDP-CriteriaList", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("d-CSI", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("t-CSI", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("t-BCSM-CAMEL-TDP-CriteriaList", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("vt-CSI", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("vt-BCSM-CAMEL-TDP-CriteriaList", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("tif-CSI", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("tif-CSI-NotificationToCSE", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("gprs-CSI", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("mo-sms-CSI", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("ss-CSI", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("m-CSI", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 13), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CAMEL_SubscriptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CAMEL_SubscriptionInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CAMEL_SubscriptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CAMEL_SubscriptionInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("specificCSIDeletedList", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("mt-sms-CSI", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("mt-smsCAMELTDP-CriteriaList", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("mg-csi", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("o-IM-CSI", true, $.hasTag(_TagClass.context, 18), undefined, undefined),
    new $.ComponentSpec("o-IM-BcsmCamelTDP-CriteriaList", true, $.hasTag(_TagClass.context, 19), undefined, undefined),
    new $.ComponentSpec("d-IM-CSI", true, $.hasTag(_TagClass.context, 20), undefined, undefined),
    new $.ComponentSpec("vt-IM-CSI", true, $.hasTag(_TagClass.context, 21), undefined, undefined),
    new $.ComponentSpec("vt-IM-BCSM-CAMEL-TDP-CriteriaList", true, $.hasTag(_TagClass.context, 22), undefined, undefined)
];

let _cached_decoder_for_CAMEL_SubscriptionInfo: $.ASN1Decoder<CAMEL_SubscriptionInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CAMEL_SubscriptionInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CAMEL_SubscriptionInfo (el: _Element): CAMEL_SubscriptionInfo {
    if (!_cached_decoder_for_CAMEL_SubscriptionInfo) { _cached_decoder_for_CAMEL_SubscriptionInfo = function (el: _Element): CAMEL_SubscriptionInfo {
    let o_CSI: OPTIONAL<O_CSI>;
    let o_BcsmCamelTDP_CriteriaList: OPTIONAL<O_BcsmCamelTDPCriteriaList>;
    let d_CSI: OPTIONAL<D_CSI>;
    let t_CSI: OPTIONAL<T_CSI>;
    let t_BCSM_CAMEL_TDP_CriteriaList: OPTIONAL<T_BCSM_CAMEL_TDP_CriteriaList>;
    let vt_CSI: OPTIONAL<T_CSI>;
    let vt_BCSM_CAMEL_TDP_CriteriaList: OPTIONAL<T_BCSM_CAMEL_TDP_CriteriaList>;
    let tif_CSI: OPTIONAL<NULL>;
    let tif_CSI_NotificationToCSE: OPTIONAL<NULL>;
    let gprs_CSI: OPTIONAL<GPRS_CSI>;
    let mo_sms_CSI: OPTIONAL<SMS_CSI>;
    let ss_CSI: OPTIONAL<SS_CSI>;
    let m_CSI: OPTIONAL<M_CSI>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let specificCSIDeletedList: OPTIONAL<SpecificCSI_Withdraw>;
    let mt_sms_CSI: OPTIONAL<SMS_CSI>;
    let mt_smsCAMELTDP_CriteriaList: OPTIONAL<MT_smsCAMELTDP_CriteriaList>;
    let mg_csi: OPTIONAL<MG_CSI>;
    let o_IM_CSI: OPTIONAL<O_CSI>;
    let o_IM_BcsmCamelTDP_CriteriaList: OPTIONAL<O_BcsmCamelTDPCriteriaList>;
    let d_IM_CSI: OPTIONAL<D_CSI>;
    let vt_IM_CSI: OPTIONAL<T_CSI>;
    let vt_IM_BCSM_CAMEL_TDP_CriteriaList: OPTIONAL<T_BCSM_CAMEL_TDP_CriteriaList>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "o-CSI": (_el: _Element): void => { o_CSI = $._decode_implicit<O_CSI>(() => _decode_O_CSI)(_el); },
        "o-BcsmCamelTDP-CriteriaList": (_el: _Element): void => { o_BcsmCamelTDP_CriteriaList = $._decode_implicit<O_BcsmCamelTDPCriteriaList>(() => _decode_O_BcsmCamelTDPCriteriaList)(_el); },
        "d-CSI": (_el: _Element): void => { d_CSI = $._decode_implicit<D_CSI>(() => _decode_D_CSI)(_el); },
        "t-CSI": (_el: _Element): void => { t_CSI = $._decode_implicit<T_CSI>(() => _decode_T_CSI)(_el); },
        "t-BCSM-CAMEL-TDP-CriteriaList": (_el: _Element): void => { t_BCSM_CAMEL_TDP_CriteriaList = $._decode_implicit<T_BCSM_CAMEL_TDP_CriteriaList>(() => _decode_T_BCSM_CAMEL_TDP_CriteriaList)(_el); },
        "vt-CSI": (_el: _Element): void => { vt_CSI = $._decode_implicit<T_CSI>(() => _decode_T_CSI)(_el); },
        "vt-BCSM-CAMEL-TDP-CriteriaList": (_el: _Element): void => { vt_BCSM_CAMEL_TDP_CriteriaList = $._decode_implicit<T_BCSM_CAMEL_TDP_CriteriaList>(() => _decode_T_BCSM_CAMEL_TDP_CriteriaList)(_el); },
        "tif-CSI": (_el: _Element): void => { tif_CSI = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "tif-CSI-NotificationToCSE": (_el: _Element): void => { tif_CSI_NotificationToCSE = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "gprs-CSI": (_el: _Element): void => { gprs_CSI = $._decode_implicit<GPRS_CSI>(() => _decode_GPRS_CSI)(_el); },
        "mo-sms-CSI": (_el: _Element): void => { mo_sms_CSI = $._decode_implicit<SMS_CSI>(() => _decode_SMS_CSI)(_el); },
        "ss-CSI": (_el: _Element): void => { ss_CSI = $._decode_implicit<SS_CSI>(() => _decode_SS_CSI)(_el); },
        "m-CSI": (_el: _Element): void => { m_CSI = $._decode_implicit<M_CSI>(() => _decode_M_CSI)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "specificCSIDeletedList": (_el: _Element): void => { specificCSIDeletedList = $._decode_implicit<SpecificCSI_Withdraw>(() => _decode_SpecificCSI_Withdraw)(_el); },
        "mt-sms-CSI": (_el: _Element): void => { mt_sms_CSI = $._decode_implicit<SMS_CSI>(() => _decode_SMS_CSI)(_el); },
        "mt-smsCAMELTDP-CriteriaList": (_el: _Element): void => { mt_smsCAMELTDP_CriteriaList = $._decode_implicit<MT_smsCAMELTDP_CriteriaList>(() => _decode_MT_smsCAMELTDP_CriteriaList)(_el); },
        "mg-csi": (_el: _Element): void => { mg_csi = $._decode_implicit<MG_CSI>(() => _decode_MG_CSI)(_el); },
        "o-IM-CSI": (_el: _Element): void => { o_IM_CSI = $._decode_implicit<O_CSI>(() => _decode_O_CSI)(_el); },
        "o-IM-BcsmCamelTDP-CriteriaList": (_el: _Element): void => { o_IM_BcsmCamelTDP_CriteriaList = $._decode_implicit<O_BcsmCamelTDPCriteriaList>(() => _decode_O_BcsmCamelTDPCriteriaList)(_el); },
        "d-IM-CSI": (_el: _Element): void => { d_IM_CSI = $._decode_implicit<D_CSI>(() => _decode_D_CSI)(_el); },
        "vt-IM-CSI": (_el: _Element): void => { vt_IM_CSI = $._decode_implicit<T_CSI>(() => _decode_T_CSI)(_el); },
        "vt-IM-BCSM-CAMEL-TDP-CriteriaList": (_el: _Element): void => { vt_IM_BCSM_CAMEL_TDP_CriteriaList = $._decode_implicit<T_BCSM_CAMEL_TDP_CriteriaList>(() => _decode_T_BCSM_CAMEL_TDP_CriteriaList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CAMEL_SubscriptionInfo,
        _extension_additions_list_spec_for_CAMEL_SubscriptionInfo,
        _root_component_type_list_2_spec_for_CAMEL_SubscriptionInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CAMEL_SubscriptionInfo(
        o_CSI,
        o_BcsmCamelTDP_CriteriaList,
        d_CSI,
        t_CSI,
        t_BCSM_CAMEL_TDP_CriteriaList,
        vt_CSI,
        vt_BCSM_CAMEL_TDP_CriteriaList,
        tif_CSI,
        tif_CSI_NotificationToCSE,
        gprs_CSI,
        mo_sms_CSI,
        ss_CSI,
        m_CSI,
        extensionContainer,
        specificCSIDeletedList,
        mt_sms_CSI,
        mt_smsCAMELTDP_CriteriaList,
        mg_csi,
        o_IM_CSI,
        o_IM_BcsmCamelTDP_CriteriaList,
        d_IM_CSI,
        vt_IM_CSI,
        vt_IM_BCSM_CAMEL_TDP_CriteriaList,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CAMEL_SubscriptionInfo(el);
}

let _cached_encoder_for_CAMEL_SubscriptionInfo: $.ASN1Encoder<CAMEL_SubscriptionInfo> | null = null;

/**
 * @summary Encodes a(n) CAMEL_SubscriptionInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CAMEL_SubscriptionInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CAMEL_SubscriptionInfo (value: CAMEL_SubscriptionInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CAMEL_SubscriptionInfo) { _cached_encoder_for_CAMEL_SubscriptionInfo = function (value: CAMEL_SubscriptionInfo, elGetter: $.ASN1Encoder<CAMEL_SubscriptionInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.o_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_O_CSI, $.BER)(value.o_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.o_BcsmCamelTDP_CriteriaList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_O_BcsmCamelTDPCriteriaList, $.BER)(value.o_BcsmCamelTDP_CriteriaList, $.BER)),
            /* IF_ABSENT  */ ((value.d_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_D_CSI, $.BER)(value.d_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.t_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_T_CSI, $.BER)(value.t_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.t_BCSM_CAMEL_TDP_CriteriaList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_T_BCSM_CAMEL_TDP_CriteriaList, $.BER)(value.t_BCSM_CAMEL_TDP_CriteriaList, $.BER)),
            /* IF_ABSENT  */ ((value.vt_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_T_CSI, $.BER)(value.vt_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.vt_BCSM_CAMEL_TDP_CriteriaList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_T_BCSM_CAMEL_TDP_CriteriaList, $.BER)(value.vt_BCSM_CAMEL_TDP_CriteriaList, $.BER)),
            /* IF_ABSENT  */ ((value.tif_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value.tif_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.tif_CSI_NotificationToCSE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER)(value.tif_CSI_NotificationToCSE, $.BER)),
            /* IF_ABSENT  */ ((value.gprs_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_GPRS_CSI, $.BER)(value.gprs_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.mo_sms_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_SMS_CSI, $.BER)(value.mo_sms_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.ss_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_SS_CSI, $.BER)(value.ss_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.m_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_M_CSI, $.BER)(value.m_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.specificCSIDeletedList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_SpecificCSI_Withdraw, $.BER)(value.specificCSIDeletedList, $.BER)),
            /* IF_ABSENT  */ ((value.mt_sms_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_SMS_CSI, $.BER)(value.mt_sms_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.mt_smsCAMELTDP_CriteriaList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_MT_smsCAMELTDP_CriteriaList, $.BER)(value.mt_smsCAMELTDP_CriteriaList, $.BER)),
            /* IF_ABSENT  */ ((value.mg_csi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_MG_CSI, $.BER)(value.mg_csi, $.BER)),
            /* IF_ABSENT  */ ((value.o_IM_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_O_CSI, $.BER)(value.o_IM_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.o_IM_BcsmCamelTDP_CriteriaList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_O_BcsmCamelTDPCriteriaList, $.BER)(value.o_IM_BcsmCamelTDP_CriteriaList, $.BER)),
            /* IF_ABSENT  */ ((value.d_IM_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_D_CSI, $.BER)(value.d_IM_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.vt_IM_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_T_CSI, $.BER)(value.vt_IM_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.vt_IM_BCSM_CAMEL_TDP_CriteriaList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_T_BCSM_CAMEL_TDP_CriteriaList, $.BER)(value.vt_IM_BCSM_CAMEL_TDP_CriteriaList, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CAMEL_SubscriptionInfo(value, elGetter);
}


/* eslint-enable */
