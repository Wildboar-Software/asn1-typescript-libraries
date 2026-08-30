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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { BasicServiceList, _decode_BasicServiceList, _encode_BasicServiceList } from "../MAP-MS-DataTypes/BasicServiceList.ta.mjs";
// export { BasicServiceList, _decode_BasicServiceList, _encode_BasicServiceList } from "../MAP-MS-DataTypes/BasicServiceList.ta.mjs";
import { SS_List, _decode_SS_List, _encode_SS_List } from "../MAP-SS-DataTypes/SS-List.ta.mjs";
// export { SS_List, _decode_SS_List, _encode_SS_List } from "../MAP-SS-DataTypes/SS-List.ta.mjs";
import { ZoneCode, _decode_ZoneCode, _encode_ZoneCode } from "../MAP-MS-DataTypes/ZoneCode.ta.mjs";
// export { ZoneCode, _decode_ZoneCode, _encode_ZoneCode } from "../MAP-MS-DataTypes/ZoneCode.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { GPRSSubscriptionDataWithdraw, _decode_GPRSSubscriptionDataWithdraw, _encode_GPRSSubscriptionDataWithdraw } from "../MAP-MS-DataTypes/GPRSSubscriptionDataWithdraw.ta.mjs";
// export { GPRSSubscriptionDataWithdraw, _decode_GPRSSubscriptionDataWithdraw, _encode_GPRSSubscriptionDataWithdraw } from "../MAP-MS-DataTypes/GPRSSubscriptionDataWithdraw.ta.mjs";
import { LSAInformationWithdraw, _decode_LSAInformationWithdraw, _encode_LSAInformationWithdraw } from "../MAP-MS-DataTypes/LSAInformationWithdraw.ta.mjs";
// export { LSAInformationWithdraw, _decode_LSAInformationWithdraw, _encode_LSAInformationWithdraw } from "../MAP-MS-DataTypes/LSAInformationWithdraw.ta.mjs";
import { SpecificCSI_Withdraw, SpecificCSI_Withdraw_o_csi /* IMPORTED_LONG_NAMED_BIT */, o_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_ss_csi /* IMPORTED_LONG_NAMED_BIT */, ss_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_tif_csi /* IMPORTED_LONG_NAMED_BIT */, tif_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_d_csi /* IMPORTED_LONG_NAMED_BIT */, d_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_vt_csi /* IMPORTED_LONG_NAMED_BIT */, vt_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_mo_sms_csi /* IMPORTED_LONG_NAMED_BIT */, mo_sms_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_m_csi /* IMPORTED_LONG_NAMED_BIT */, m_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_gprs_csi /* IMPORTED_LONG_NAMED_BIT */, gprs_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_t_csi /* IMPORTED_LONG_NAMED_BIT */, t_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_mt_sms_csi /* IMPORTED_LONG_NAMED_BIT */, mt_sms_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_mg_csi /* IMPORTED_LONG_NAMED_BIT */, mg_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_o_IM_CSI /* IMPORTED_LONG_NAMED_BIT */, o_IM_CSI /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_d_IM_CSI /* IMPORTED_LONG_NAMED_BIT */, d_IM_CSI /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_vt_IM_CSI /* IMPORTED_LONG_NAMED_BIT */, vt_IM_CSI /* IMPORTED_SHORT_NAMED_BIT */, _decode_SpecificCSI_Withdraw, _encode_SpecificCSI_Withdraw } from "../MAP-MS-DataTypes/SpecificCSI-Withdraw.ta.mjs";
// export { SpecificCSI_Withdraw, SpecificCSI_Withdraw_o_csi /* IMPORTED_LONG_NAMED_BIT */, o_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_ss_csi /* IMPORTED_LONG_NAMED_BIT */, ss_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_tif_csi /* IMPORTED_LONG_NAMED_BIT */, tif_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_d_csi /* IMPORTED_LONG_NAMED_BIT */, d_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_vt_csi /* IMPORTED_LONG_NAMED_BIT */, vt_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_mo_sms_csi /* IMPORTED_LONG_NAMED_BIT */, mo_sms_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_m_csi /* IMPORTED_LONG_NAMED_BIT */, m_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_gprs_csi /* IMPORTED_LONG_NAMED_BIT */, gprs_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_t_csi /* IMPORTED_LONG_NAMED_BIT */, t_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_mt_sms_csi /* IMPORTED_LONG_NAMED_BIT */, mt_sms_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_mg_csi /* IMPORTED_LONG_NAMED_BIT */, mg_csi /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_o_IM_CSI /* IMPORTED_LONG_NAMED_BIT */, o_IM_CSI /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_d_IM_CSI /* IMPORTED_LONG_NAMED_BIT */, d_IM_CSI /* IMPORTED_SHORT_NAMED_BIT */, SpecificCSI_Withdraw_vt_IM_CSI /* IMPORTED_LONG_NAMED_BIT */, vt_IM_CSI /* IMPORTED_SHORT_NAMED_BIT */, _decode_SpecificCSI_Withdraw, _encode_SpecificCSI_Withdraw } from "../MAP-MS-DataTypes/SpecificCSI-Withdraw.ta.mjs";
import { EPS_SubscriptionDataWithdraw, _decode_EPS_SubscriptionDataWithdraw, _encode_EPS_SubscriptionDataWithdraw } from "../MAP-MS-DataTypes/EPS-SubscriptionDataWithdraw.ta.mjs";
// export { EPS_SubscriptionDataWithdraw, _decode_EPS_SubscriptionDataWithdraw, _encode_EPS_SubscriptionDataWithdraw } from "../MAP-MS-DataTypes/EPS-SubscriptionDataWithdraw.ta.mjs";


/**
 * @summary DeleteSubscriberDataArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteSubscriberDataArg ::= SEQUENCE {
 *     imsi    [0] IMSI,
 *     basicServiceList    [1] BasicServiceList    OPTIONAL,
 *     -- The exception handling for reception of unsupported/not allocated
 *     -- basicServiceCodes is defined in clause 6.8.2
 *     ss-List    [2] SS-List    OPTIONAL,
 *     roamingRestrictionDueToUnsupportedFeature [4] NULL    OPTIONAL,
 *     regionalSubscriptionIdentifier    [5] ZoneCode    OPTIONAL,
 *     vbsGroupIndication    [7] NULL    OPTIONAL,
 *     vgcsGroupIndication    [8] NULL    OPTIONAL,
 *     camelSubscriptionInfoWithdraw    [9] NULL    OPTIONAL,
 *     extensionContainer    [6] ExtensionContainer    OPTIONAL,
 *     ...,
 *     gprsSubscriptionDataWithdraw    [10] GPRSSubscriptionDataWithdraw    OPTIONAL,
 *     roamingRestrictedInSgsnDueToUnsuppportedFeature [11] NULL    OPTIONAL,
 *     lsaInformationWithdraw    [12] LSAInformationWithdraw    OPTIONAL,
 *     gmlc-ListWithdraw    [13]    NULL    OPTIONAL,
 *     istInformationWithdraw    [14] NULL    OPTIONAL,
 *     specificCSI-Withdraw    [15] SpecificCSI-Withdraw    OPTIONAL,
 *     chargingCharacteristicsWithdraw    [16] NULL    OPTIONAL,
 *     stn-srWithdraw    [17] NULL    OPTIONAL,
 *     epsSubscriptionDataWithdraw    [18] EPS-SubscriptionDataWithdraw    OPTIONAL,
 *     apn-oi-replacementWithdraw    [19] NULL    OPTIONAL,
 *     csg-SubscriptionDeleted    [20]    NULL    OPTIONAL,
 *     subscribedPeriodicTAU-RAU-TimerWithdraw    [22]    NULL    OPTIONAL,
 *     subscribedPeriodicLAU-TimerWithdraw    [23]    NULL    OPTIONAL,
 *     subscribed-vsrvccWithdraw    [21] NULL    OPTIONAL,
 *     vplmn-Csg-SubscriptionDeleted    [24]    NULL    OPTIONAL,
 *     additionalMSISDN-Withdraw    [25]    NULL    OPTIONAL,
 *     cs-to-ps-SRVCC-Withdraw    [26]    NULL    OPTIONAL,
 *     imsiGroupIdList-Withdraw    [27]    NULL    OPTIONAL,
 *     userPlaneIntegrityProtectionWithdraw    [28] NULL    OPTIONAL,
 *     dl-Buffering-Suggested-Packet-Count-Withdraw    [29] NULL    OPTIONAL,
 *     ue-UsageTypeWithdraw    [30] NULL    OPTIONAL,
 *     reset-idsWithdraw    [31]    NULL    OPTIONAL,
 *     iab-OperationWithdraw    [32]    NULL    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DeleteSubscriberDataArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `basicServiceList`.
         * @public
         * @readonly
         */
        readonly basicServiceList: OPTIONAL<BasicServiceList>,
        /**
         * @summary `ss_List`.
         * @public
         * @readonly
         */
        readonly ss_List: OPTIONAL<SS_List>,
        /**
         * @summary `roamingRestrictionDueToUnsupportedFeature`.
         * @public
         * @readonly
         */
        readonly roamingRestrictionDueToUnsupportedFeature: OPTIONAL<NULL>,
        /**
         * @summary `regionalSubscriptionIdentifier`.
         * @public
         * @readonly
         */
        readonly regionalSubscriptionIdentifier: OPTIONAL<ZoneCode>,
        /**
         * @summary `vbsGroupIndication`.
         * @public
         * @readonly
         */
        readonly vbsGroupIndication: OPTIONAL<NULL>,
        /**
         * @summary `vgcsGroupIndication`.
         * @public
         * @readonly
         */
        readonly vgcsGroupIndication: OPTIONAL<NULL>,
        /**
         * @summary `camelSubscriptionInfoWithdraw`.
         * @public
         * @readonly
         */
        readonly camelSubscriptionInfoWithdraw: OPTIONAL<NULL>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `gprsSubscriptionDataWithdraw`.
         * @public
         * @readonly
         */
        readonly gprsSubscriptionDataWithdraw: OPTIONAL<GPRSSubscriptionDataWithdraw>,
        /**
         * @summary `roamingRestrictedInSgsnDueToUnsuppportedFeature`.
         * @public
         * @readonly
         */
        readonly roamingRestrictedInSgsnDueToUnsuppportedFeature: OPTIONAL<NULL>,
        /**
         * @summary `lsaInformationWithdraw`.
         * @public
         * @readonly
         */
        readonly lsaInformationWithdraw: OPTIONAL<LSAInformationWithdraw>,
        /**
         * @summary `gmlc_ListWithdraw`.
         * @public
         * @readonly
         */
        readonly gmlc_ListWithdraw: OPTIONAL<NULL>,
        /**
         * @summary `istInformationWithdraw`.
         * @public
         * @readonly
         */
        readonly istInformationWithdraw: OPTIONAL<NULL>,
        /**
         * @summary `specificCSI_Withdraw`.
         * @public
         * @readonly
         */
        readonly specificCSI_Withdraw: OPTIONAL<SpecificCSI_Withdraw>,
        /**
         * @summary `chargingCharacteristicsWithdraw`.
         * @public
         * @readonly
         */
        readonly chargingCharacteristicsWithdraw: OPTIONAL<NULL>,
        /**
         * @summary `stn_srWithdraw`.
         * @public
         * @readonly
         */
        readonly stn_srWithdraw: OPTIONAL<NULL>,
        /**
         * @summary `epsSubscriptionDataWithdraw`.
         * @public
         * @readonly
         */
        readonly epsSubscriptionDataWithdraw: OPTIONAL<EPS_SubscriptionDataWithdraw>,
        /**
         * @summary `apn_oi_replacementWithdraw`.
         * @public
         * @readonly
         */
        readonly apn_oi_replacementWithdraw: OPTIONAL<NULL>,
        /**
         * @summary `csg_SubscriptionDeleted`.
         * @public
         * @readonly
         */
        readonly csg_SubscriptionDeleted: OPTIONAL<NULL>,
        /**
         * @summary `subscribedPeriodicTAU_RAU_TimerWithdraw`.
         * @public
         * @readonly
         */
        readonly subscribedPeriodicTAU_RAU_TimerWithdraw: OPTIONAL<NULL>,
        /**
         * @summary `subscribedPeriodicLAU_TimerWithdraw`.
         * @public
         * @readonly
         */
        readonly subscribedPeriodicLAU_TimerWithdraw: OPTIONAL<NULL>,
        /**
         * @summary `subscribed_vsrvccWithdraw`.
         * @public
         * @readonly
         */
        readonly subscribed_vsrvccWithdraw: OPTIONAL<NULL>,
        /**
         * @summary `vplmn_Csg_SubscriptionDeleted`.
         * @public
         * @readonly
         */
        readonly vplmn_Csg_SubscriptionDeleted: OPTIONAL<NULL>,
        /**
         * @summary `additionalMSISDN_Withdraw`.
         * @public
         * @readonly
         */
        readonly additionalMSISDN_Withdraw: OPTIONAL<NULL>,
        /**
         * @summary `cs_to_ps_SRVCC_Withdraw`.
         * @public
         * @readonly
         */
        readonly cs_to_ps_SRVCC_Withdraw: OPTIONAL<NULL>,
        /**
         * @summary `imsiGroupIdList_Withdraw`.
         * @public
         * @readonly
         */
        readonly imsiGroupIdList_Withdraw: OPTIONAL<NULL>,
        /**
         * @summary `userPlaneIntegrityProtectionWithdraw`.
         * @public
         * @readonly
         */
        readonly userPlaneIntegrityProtectionWithdraw: OPTIONAL<NULL>,
        /**
         * @summary `dl_Buffering_Suggested_Packet_Count_Withdraw`.
         * @public
         * @readonly
         */
        readonly dl_Buffering_Suggested_Packet_Count_Withdraw: OPTIONAL<NULL>,
        /**
         * @summary `ue_UsageTypeWithdraw`.
         * @public
         * @readonly
         */
        readonly ue_UsageTypeWithdraw: OPTIONAL<NULL>,
        /**
         * @summary `reset_idsWithdraw`.
         * @public
         * @readonly
         */
        readonly reset_idsWithdraw: OPTIONAL<NULL>,
        /**
         * @summary `iab_OperationWithdraw`.
         * @public
         * @readonly
         */
        readonly iab_OperationWithdraw: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DeleteSubscriberDataArg
     * @description
     * 
     * This takes an `object` and converts it to a `DeleteSubscriberDataArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeleteSubscriberDataArg`.
     * @returns {DeleteSubscriberDataArg}
     */
    public static _from_object (_o: { [_K in keyof (DeleteSubscriberDataArg)]: (DeleteSubscriberDataArg)[_K] }): DeleteSubscriberDataArg {
        return new DeleteSubscriberDataArg(_o.imsi, _o.basicServiceList, _o.ss_List, _o.roamingRestrictionDueToUnsupportedFeature, _o.regionalSubscriptionIdentifier, _o.vbsGroupIndication, _o.vgcsGroupIndication, _o.camelSubscriptionInfoWithdraw, _o.extensionContainer, _o.gprsSubscriptionDataWithdraw, _o.roamingRestrictedInSgsnDueToUnsuppportedFeature, _o.lsaInformationWithdraw, _o.gmlc_ListWithdraw, _o.istInformationWithdraw, _o.specificCSI_Withdraw, _o.chargingCharacteristicsWithdraw, _o.stn_srWithdraw, _o.epsSubscriptionDataWithdraw, _o.apn_oi_replacementWithdraw, _o.csg_SubscriptionDeleted, _o.subscribedPeriodicTAU_RAU_TimerWithdraw, _o.subscribedPeriodicLAU_TimerWithdraw, _o.subscribed_vsrvccWithdraw, _o.vplmn_Csg_SubscriptionDeleted, _o.additionalMSISDN_Withdraw, _o.cs_to_ps_SRVCC_Withdraw, _o.imsiGroupIdList_Withdraw, _o.userPlaneIntegrityProtectionWithdraw, _o.dl_Buffering_Suggested_Packet_Count_Withdraw, _o.ue_UsageTypeWithdraw, _o.reset_idsWithdraw, _o.iab_OperationWithdraw, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DeleteSubscriberDataArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeleteSubscriberDataArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("basicServiceList", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("ss-List", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("roamingRestrictionDueToUnsupportedFeature", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("regionalSubscriptionIdentifier", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("vbsGroupIndication", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("vgcsGroupIndication", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("camelSubscriptionInfoWithdraw", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 6), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of DeleteSubscriberDataArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeleteSubscriberDataArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeleteSubscriberDataArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeleteSubscriberDataArg: $.ComponentSpec[] = [
    new $.ComponentSpec("gprsSubscriptionDataWithdraw", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("roamingRestrictedInSgsnDueToUnsuppportedFeature", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("lsaInformationWithdraw", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("gmlc-ListWithdraw", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("istInformationWithdraw", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("specificCSI-Withdraw", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("chargingCharacteristicsWithdraw", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("stn-srWithdraw", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("epsSubscriptionDataWithdraw", true, $.hasTag(_TagClass.context, 18), undefined, undefined),
    new $.ComponentSpec("apn-oi-replacementWithdraw", true, $.hasTag(_TagClass.context, 19), undefined, undefined),
    new $.ComponentSpec("csg-SubscriptionDeleted", true, $.hasTag(_TagClass.context, 20), undefined, undefined),
    new $.ComponentSpec("subscribedPeriodicTAU-RAU-TimerWithdraw", true, $.hasTag(_TagClass.context, 22), undefined, undefined),
    new $.ComponentSpec("subscribedPeriodicLAU-TimerWithdraw", true, $.hasTag(_TagClass.context, 23), undefined, undefined),
    new $.ComponentSpec("subscribed-vsrvccWithdraw", true, $.hasTag(_TagClass.context, 21), undefined, undefined),
    new $.ComponentSpec("vplmn-Csg-SubscriptionDeleted", true, $.hasTag(_TagClass.context, 24), undefined, undefined),
    new $.ComponentSpec("additionalMSISDN-Withdraw", true, $.hasTag(_TagClass.context, 25), undefined, undefined),
    new $.ComponentSpec("cs-to-ps-SRVCC-Withdraw", true, $.hasTag(_TagClass.context, 26), undefined, undefined),
    new $.ComponentSpec("imsiGroupIdList-Withdraw", true, $.hasTag(_TagClass.context, 27), undefined, undefined),
    new $.ComponentSpec("userPlaneIntegrityProtectionWithdraw", true, $.hasTag(_TagClass.context, 28), undefined, undefined),
    new $.ComponentSpec("dl-Buffering-Suggested-Packet-Count-Withdraw", true, $.hasTag(_TagClass.context, 29), undefined, undefined),
    new $.ComponentSpec("ue-UsageTypeWithdraw", true, $.hasTag(_TagClass.context, 30), undefined, undefined),
    new $.ComponentSpec("reset-idsWithdraw", true, $.hasTag(_TagClass.context, 31), undefined, undefined),
    new $.ComponentSpec("iab-OperationWithdraw", true, $.hasTag(_TagClass.context, 32), undefined, undefined)
];

let _cached_decoder_for_DeleteSubscriberDataArg: $.ASN1Decoder<DeleteSubscriberDataArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteSubscriberDataArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteSubscriberDataArg (el: _Element): DeleteSubscriberDataArg {
    if (!_cached_decoder_for_DeleteSubscriberDataArg) { _cached_decoder_for_DeleteSubscriberDataArg = function (el: _Element): DeleteSubscriberDataArg {
    let imsi!: IMSI;
    let basicServiceList: OPTIONAL<BasicServiceList>;
    let ss_List: OPTIONAL<SS_List>;
    let roamingRestrictionDueToUnsupportedFeature: OPTIONAL<NULL>;
    let regionalSubscriptionIdentifier: OPTIONAL<ZoneCode>;
    let vbsGroupIndication: OPTIONAL<NULL>;
    let vgcsGroupIndication: OPTIONAL<NULL>;
    let camelSubscriptionInfoWithdraw: OPTIONAL<NULL>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let gprsSubscriptionDataWithdraw: OPTIONAL<GPRSSubscriptionDataWithdraw>;
    let roamingRestrictedInSgsnDueToUnsuppportedFeature: OPTIONAL<NULL>;
    let lsaInformationWithdraw: OPTIONAL<LSAInformationWithdraw>;
    let gmlc_ListWithdraw: OPTIONAL<NULL>;
    let istInformationWithdraw: OPTIONAL<NULL>;
    let specificCSI_Withdraw: OPTIONAL<SpecificCSI_Withdraw>;
    let chargingCharacteristicsWithdraw: OPTIONAL<NULL>;
    let stn_srWithdraw: OPTIONAL<NULL>;
    let epsSubscriptionDataWithdraw: OPTIONAL<EPS_SubscriptionDataWithdraw>;
    let apn_oi_replacementWithdraw: OPTIONAL<NULL>;
    let csg_SubscriptionDeleted: OPTIONAL<NULL>;
    let subscribedPeriodicTAU_RAU_TimerWithdraw: OPTIONAL<NULL>;
    let subscribedPeriodicLAU_TimerWithdraw: OPTIONAL<NULL>;
    let subscribed_vsrvccWithdraw: OPTIONAL<NULL>;
    let vplmn_Csg_SubscriptionDeleted: OPTIONAL<NULL>;
    let additionalMSISDN_Withdraw: OPTIONAL<NULL>;
    let cs_to_ps_SRVCC_Withdraw: OPTIONAL<NULL>;
    let imsiGroupIdList_Withdraw: OPTIONAL<NULL>;
    let userPlaneIntegrityProtectionWithdraw: OPTIONAL<NULL>;
    let dl_Buffering_Suggested_Packet_Count_Withdraw: OPTIONAL<NULL>;
    let ue_UsageTypeWithdraw: OPTIONAL<NULL>;
    let reset_idsWithdraw: OPTIONAL<NULL>;
    let iab_OperationWithdraw: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "basicServiceList": (_el: _Element): void => { basicServiceList = $._decode_implicit<BasicServiceList>(() => _decode_BasicServiceList)(_el); },
        "ss-List": (_el: _Element): void => { ss_List = $._decode_implicit<SS_List>(() => _decode_SS_List)(_el); },
        "roamingRestrictionDueToUnsupportedFeature": (_el: _Element): void => { roamingRestrictionDueToUnsupportedFeature = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "regionalSubscriptionIdentifier": (_el: _Element): void => { regionalSubscriptionIdentifier = $._decode_implicit<ZoneCode>(() => _decode_ZoneCode)(_el); },
        "vbsGroupIndication": (_el: _Element): void => { vbsGroupIndication = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "vgcsGroupIndication": (_el: _Element): void => { vgcsGroupIndication = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "camelSubscriptionInfoWithdraw": (_el: _Element): void => { camelSubscriptionInfoWithdraw = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "gprsSubscriptionDataWithdraw": (_el: _Element): void => { gprsSubscriptionDataWithdraw = $._decode_explicit<GPRSSubscriptionDataWithdraw>(() => _decode_GPRSSubscriptionDataWithdraw)(_el); },
        "roamingRestrictedInSgsnDueToUnsuppportedFeature": (_el: _Element): void => { roamingRestrictedInSgsnDueToUnsuppportedFeature = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "lsaInformationWithdraw": (_el: _Element): void => { lsaInformationWithdraw = $._decode_explicit<LSAInformationWithdraw>(() => _decode_LSAInformationWithdraw)(_el); },
        "gmlc-ListWithdraw": (_el: _Element): void => { gmlc_ListWithdraw = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "istInformationWithdraw": (_el: _Element): void => { istInformationWithdraw = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "specificCSI-Withdraw": (_el: _Element): void => { specificCSI_Withdraw = $._decode_implicit<SpecificCSI_Withdraw>(() => _decode_SpecificCSI_Withdraw)(_el); },
        "chargingCharacteristicsWithdraw": (_el: _Element): void => { chargingCharacteristicsWithdraw = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "stn-srWithdraw": (_el: _Element): void => { stn_srWithdraw = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "epsSubscriptionDataWithdraw": (_el: _Element): void => { epsSubscriptionDataWithdraw = $._decode_explicit<EPS_SubscriptionDataWithdraw>(() => _decode_EPS_SubscriptionDataWithdraw)(_el); },
        "apn-oi-replacementWithdraw": (_el: _Element): void => { apn_oi_replacementWithdraw = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "csg-SubscriptionDeleted": (_el: _Element): void => { csg_SubscriptionDeleted = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "subscribedPeriodicTAU-RAU-TimerWithdraw": (_el: _Element): void => { subscribedPeriodicTAU_RAU_TimerWithdraw = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "subscribedPeriodicLAU-TimerWithdraw": (_el: _Element): void => { subscribedPeriodicLAU_TimerWithdraw = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "subscribed-vsrvccWithdraw": (_el: _Element): void => { subscribed_vsrvccWithdraw = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "vplmn-Csg-SubscriptionDeleted": (_el: _Element): void => { vplmn_Csg_SubscriptionDeleted = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "additionalMSISDN-Withdraw": (_el: _Element): void => { additionalMSISDN_Withdraw = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "cs-to-ps-SRVCC-Withdraw": (_el: _Element): void => { cs_to_ps_SRVCC_Withdraw = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "imsiGroupIdList-Withdraw": (_el: _Element): void => { imsiGroupIdList_Withdraw = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "userPlaneIntegrityProtectionWithdraw": (_el: _Element): void => { userPlaneIntegrityProtectionWithdraw = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "dl-Buffering-Suggested-Packet-Count-Withdraw": (_el: _Element): void => { dl_Buffering_Suggested_Packet_Count_Withdraw = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "ue-UsageTypeWithdraw": (_el: _Element): void => { ue_UsageTypeWithdraw = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "reset-idsWithdraw": (_el: _Element): void => { reset_idsWithdraw = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "iab-OperationWithdraw": (_el: _Element): void => { iab_OperationWithdraw = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeleteSubscriberDataArg,
        _extension_additions_list_spec_for_DeleteSubscriberDataArg,
        _root_component_type_list_2_spec_for_DeleteSubscriberDataArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DeleteSubscriberDataArg(
        imsi,
        basicServiceList,
        ss_List,
        roamingRestrictionDueToUnsupportedFeature,
        regionalSubscriptionIdentifier,
        vbsGroupIndication,
        vgcsGroupIndication,
        camelSubscriptionInfoWithdraw,
        extensionContainer,
        gprsSubscriptionDataWithdraw,
        roamingRestrictedInSgsnDueToUnsuppportedFeature,
        lsaInformationWithdraw,
        gmlc_ListWithdraw,
        istInformationWithdraw,
        specificCSI_Withdraw,
        chargingCharacteristicsWithdraw,
        stn_srWithdraw,
        epsSubscriptionDataWithdraw,
        apn_oi_replacementWithdraw,
        csg_SubscriptionDeleted,
        subscribedPeriodicTAU_RAU_TimerWithdraw,
        subscribedPeriodicLAU_TimerWithdraw,
        subscribed_vsrvccWithdraw,
        vplmn_Csg_SubscriptionDeleted,
        additionalMSISDN_Withdraw,
        cs_to_ps_SRVCC_Withdraw,
        imsiGroupIdList_Withdraw,
        userPlaneIntegrityProtectionWithdraw,
        dl_Buffering_Suggested_Packet_Count_Withdraw,
        ue_UsageTypeWithdraw,
        reset_idsWithdraw,
        iab_OperationWithdraw,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DeleteSubscriberDataArg(el);
}

let _cached_encoder_for_DeleteSubscriberDataArg: $.ASN1Encoder<DeleteSubscriberDataArg> | null = null;

/**
 * @summary Encodes a(n) DeleteSubscriberDataArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteSubscriberDataArg, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteSubscriberDataArg (value: DeleteSubscriberDataArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteSubscriberDataArg) { _cached_encoder_for_DeleteSubscriberDataArg = function (value: DeleteSubscriberDataArg, elGetter: $.ASN1Encoder<DeleteSubscriberDataArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER)(value.imsi, $.BER),
            /* IF_ABSENT  */ ((value.basicServiceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_BasicServiceList, $.BER)(value.basicServiceList, $.BER)),
            /* IF_ABSENT  */ ((value.ss_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SS_List, $.BER)(value.ss_List, $.BER)),
            /* IF_ABSENT  */ ((value.roamingRestrictionDueToUnsupportedFeature === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.roamingRestrictionDueToUnsupportedFeature, $.BER)),
            /* IF_ABSENT  */ ((value.regionalSubscriptionIdentifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ZoneCode, $.BER)(value.regionalSubscriptionIdentifier, $.BER)),
            /* IF_ABSENT  */ ((value.vbsGroupIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value.vbsGroupIndication, $.BER)),
            /* IF_ABSENT  */ ((value.vgcsGroupIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER)(value.vgcsGroupIndication, $.BER)),
            /* IF_ABSENT  */ ((value.camelSubscriptionInfoWithdraw === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER)(value.camelSubscriptionInfoWithdraw, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.gprsSubscriptionDataWithdraw === undefined) ? undefined : $._encode_explicit(_TagClass.context, 10, () => _encode_GPRSSubscriptionDataWithdraw, $.BER)(value.gprsSubscriptionDataWithdraw, $.BER)),
            /* IF_ABSENT  */ ((value.roamingRestrictedInSgsnDueToUnsuppportedFeature === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER)(value.roamingRestrictedInSgsnDueToUnsuppportedFeature, $.BER)),
            /* IF_ABSENT  */ ((value.lsaInformationWithdraw === undefined) ? undefined : $._encode_explicit(_TagClass.context, 12, () => _encode_LSAInformationWithdraw, $.BER)(value.lsaInformationWithdraw, $.BER)),
            /* IF_ABSENT  */ ((value.gmlc_ListWithdraw === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeNull, $.BER)(value.gmlc_ListWithdraw, $.BER)),
            /* IF_ABSENT  */ ((value.istInformationWithdraw === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeNull, $.BER)(value.istInformationWithdraw, $.BER)),
            /* IF_ABSENT  */ ((value.specificCSI_Withdraw === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_SpecificCSI_Withdraw, $.BER)(value.specificCSI_Withdraw, $.BER)),
            /* IF_ABSENT  */ ((value.chargingCharacteristicsWithdraw === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => $._encodeNull, $.BER)(value.chargingCharacteristicsWithdraw, $.BER)),
            /* IF_ABSENT  */ ((value.stn_srWithdraw === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeNull, $.BER)(value.stn_srWithdraw, $.BER)),
            /* IF_ABSENT  */ ((value.epsSubscriptionDataWithdraw === undefined) ? undefined : $._encode_explicit(_TagClass.context, 18, () => _encode_EPS_SubscriptionDataWithdraw, $.BER)(value.epsSubscriptionDataWithdraw, $.BER)),
            /* IF_ABSENT  */ ((value.apn_oi_replacementWithdraw === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => $._encodeNull, $.BER)(value.apn_oi_replacementWithdraw, $.BER)),
            /* IF_ABSENT  */ ((value.csg_SubscriptionDeleted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => $._encodeNull, $.BER)(value.csg_SubscriptionDeleted, $.BER)),
            /* IF_ABSENT  */ ((value.subscribedPeriodicTAU_RAU_TimerWithdraw === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => $._encodeNull, $.BER)(value.subscribedPeriodicTAU_RAU_TimerWithdraw, $.BER)),
            /* IF_ABSENT  */ ((value.subscribedPeriodicLAU_TimerWithdraw === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => $._encodeNull, $.BER)(value.subscribedPeriodicLAU_TimerWithdraw, $.BER)),
            /* IF_ABSENT  */ ((value.subscribed_vsrvccWithdraw === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => $._encodeNull, $.BER)(value.subscribed_vsrvccWithdraw, $.BER)),
            /* IF_ABSENT  */ ((value.vplmn_Csg_SubscriptionDeleted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => $._encodeNull, $.BER)(value.vplmn_Csg_SubscriptionDeleted, $.BER)),
            /* IF_ABSENT  */ ((value.additionalMSISDN_Withdraw === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => $._encodeNull, $.BER)(value.additionalMSISDN_Withdraw, $.BER)),
            /* IF_ABSENT  */ ((value.cs_to_ps_SRVCC_Withdraw === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => $._encodeNull, $.BER)(value.cs_to_ps_SRVCC_Withdraw, $.BER)),
            /* IF_ABSENT  */ ((value.imsiGroupIdList_Withdraw === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => $._encodeNull, $.BER)(value.imsiGroupIdList_Withdraw, $.BER)),
            /* IF_ABSENT  */ ((value.userPlaneIntegrityProtectionWithdraw === undefined) ? undefined : $._encode_implicit(_TagClass.context, 28, () => $._encodeNull, $.BER)(value.userPlaneIntegrityProtectionWithdraw, $.BER)),
            /* IF_ABSENT  */ ((value.dl_Buffering_Suggested_Packet_Count_Withdraw === undefined) ? undefined : $._encode_implicit(_TagClass.context, 29, () => $._encodeNull, $.BER)(value.dl_Buffering_Suggested_Packet_Count_Withdraw, $.BER)),
            /* IF_ABSENT  */ ((value.ue_UsageTypeWithdraw === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => $._encodeNull, $.BER)(value.ue_UsageTypeWithdraw, $.BER)),
            /* IF_ABSENT  */ ((value.reset_idsWithdraw === undefined) ? undefined : $._encode_implicit(_TagClass.context, 31, () => $._encodeNull, $.BER)(value.reset_idsWithdraw, $.BER)),
            /* IF_ABSENT  */ ((value.iab_OperationWithdraw === undefined) ? undefined : $._encode_implicit(_TagClass.context, 32, () => $._encodeNull, $.BER)(value.iab_OperationWithdraw, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeleteSubscriberDataArg(value, elGetter);
}


/* eslint-enable */
