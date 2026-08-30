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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
// export { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { SGSN_Capability, _decode_SGSN_Capability, _encode_SGSN_Capability } from "../MAP-MS-DataTypes/SGSN-Capability.ta.mjs";
// export { SGSN_Capability, _decode_SGSN_Capability, _encode_SGSN_Capability } from "../MAP-MS-DataTypes/SGSN-Capability.ta.mjs";
import { ADD_Info, _decode_ADD_Info, _encode_ADD_Info } from "../MAP-MS-DataTypes/ADD-Info.ta.mjs";
// export { ADD_Info, _decode_ADD_Info, _encode_ADD_Info } from "../MAP-MS-DataTypes/ADD-Info.ta.mjs";
import { EPS_Info, _decode_EPS_Info, _encode_EPS_Info } from "../MAP-MS-DataTypes/EPS-Info.ta.mjs";
// export { EPS_Info, _decode_EPS_Info, _encode_EPS_Info } from "../MAP-MS-DataTypes/EPS-Info.ta.mjs";
import { Used_RAT_Type, _enum_for_Used_RAT_Type, Used_RAT_Type_utran /* IMPORTED_LONG_ENUMERATION_ITEM */, utran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_geran /* IMPORTED_LONG_ENUMERATION_ITEM */, geran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_gan /* IMPORTED_LONG_ENUMERATION_ITEM */, gan /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_i_hspa_evolution /* IMPORTED_LONG_ENUMERATION_ITEM */, i_hspa_evolution /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_e_utran /* IMPORTED_LONG_ENUMERATION_ITEM */, e_utran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_nb_iot /* IMPORTED_LONG_ENUMERATION_ITEM */, nb_iot /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Used_RAT_Type, _encode_Used_RAT_Type } from "../MAP-MS-DataTypes/Used-RAT-Type.ta.mjs";
// export { Used_RAT_Type, _enum_for_Used_RAT_Type, Used_RAT_Type_utran /* IMPORTED_LONG_ENUMERATION_ITEM */, utran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_geran /* IMPORTED_LONG_ENUMERATION_ITEM */, geran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_gan /* IMPORTED_LONG_ENUMERATION_ITEM */, gan /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_i_hspa_evolution /* IMPORTED_LONG_ENUMERATION_ITEM */, i_hspa_evolution /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_e_utran /* IMPORTED_LONG_ENUMERATION_ITEM */, e_utran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_nb_iot /* IMPORTED_LONG_ENUMERATION_ITEM */, nb_iot /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Used_RAT_Type, _encode_Used_RAT_Type } from "../MAP-MS-DataTypes/Used-RAT-Type.ta.mjs";
import { UE_SRVCC_Capability, _enum_for_UE_SRVCC_Capability, UE_SRVCC_Capability_ue_srvcc_not_supported /* IMPORTED_LONG_ENUMERATION_ITEM */, ue_srvcc_not_supported /* IMPORTED_SHORT_ENUMERATION_ITEM */, UE_SRVCC_Capability_ue_srvcc_supported /* IMPORTED_LONG_ENUMERATION_ITEM */, ue_srvcc_supported /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UE_SRVCC_Capability, _encode_UE_SRVCC_Capability } from "../MAP-MS-DataTypes/UE-SRVCC-Capability.ta.mjs";
// export { UE_SRVCC_Capability, _enum_for_UE_SRVCC_Capability, UE_SRVCC_Capability_ue_srvcc_not_supported /* IMPORTED_LONG_ENUMERATION_ITEM */, ue_srvcc_not_supported /* IMPORTED_SHORT_ENUMERATION_ITEM */, UE_SRVCC_Capability_ue_srvcc_supported /* IMPORTED_LONG_ENUMERATION_ITEM */, ue_srvcc_supported /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UE_SRVCC_Capability, _encode_UE_SRVCC_Capability } from "../MAP-MS-DataTypes/UE-SRVCC-Capability.ta.mjs";
import { EPLMN_List, _decode_EPLMN_List, _encode_EPLMN_List } from "../MAP-MS-DataTypes/EPLMN-List.ta.mjs";
// export { EPLMN_List, _decode_EPLMN_List, _encode_EPLMN_List } from "../MAP-MS-DataTypes/EPLMN-List.ta.mjs";
import { SMSRegisterRequest, _enum_for_SMSRegisterRequest, SMSRegisterRequest_sms_registration_required /* IMPORTED_LONG_ENUMERATION_ITEM */, sms_registration_required /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSRegisterRequest_sms_registration_not_preferred /* IMPORTED_LONG_ENUMERATION_ITEM */, sms_registration_not_preferred /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSRegisterRequest_no_preference /* IMPORTED_LONG_ENUMERATION_ITEM */, no_preference /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMSRegisterRequest, _encode_SMSRegisterRequest } from "../MAP-MS-DataTypes/SMSRegisterRequest.ta.mjs";
// export { SMSRegisterRequest, _enum_for_SMSRegisterRequest, SMSRegisterRequest_sms_registration_required /* IMPORTED_LONG_ENUMERATION_ITEM */, sms_registration_required /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSRegisterRequest_sms_registration_not_preferred /* IMPORTED_LONG_ENUMERATION_ITEM */, sms_registration_not_preferred /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSRegisterRequest_no_preference /* IMPORTED_LONG_ENUMERATION_ITEM */, no_preference /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMSRegisterRequest, _encode_SMSRegisterRequest } from "../MAP-MS-DataTypes/SMSRegisterRequest.ta.mjs";
import { DiameterIdentity, _decode_DiameterIdentity, _encode_DiameterIdentity } from "../MAP-CommonDataTypes/DiameterIdentity.ta.mjs";
// export { DiameterIdentity, _decode_DiameterIdentity, _encode_DiameterIdentity } from "../MAP-CommonDataTypes/DiameterIdentity.ta.mjs";
import { AdjacentPLMN_List, _decode_AdjacentPLMN_List, _encode_AdjacentPLMN_List } from "../MAP-MS-DataTypes/AdjacentPLMN-List.ta.mjs";
// export { AdjacentPLMN_List, _decode_AdjacentPLMN_List, _encode_AdjacentPLMN_List } from "../MAP-MS-DataTypes/AdjacentPLMN-List.ta.mjs";


/**
 * @summary UpdateGprsLocationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateGprsLocationArg ::= SEQUENCE {
 *     imsi    IMSI,
 *     sgsn-Number    ISDN-AddressString,    
 *     sgsn-Address    GSN-Address,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ... ,
 *     sgsn-Capability    [0] SGSN-Capability    OPTIONAL,
 *     informPreviousNetworkEntity    [1]    NULL    OPTIONAL,
 *     ps-LCS-NotSupportedByUE    [2]    NULL    OPTIONAL,
 *     v-gmlc-Address    [3]    GSN-Address    OPTIONAL,
 *     add-info    [4]  ADD-Info    OPTIONAL,
 *     eps-info    [5]    EPS-Info    OPTIONAL,
 *     servingNodeTypeIndicator    [6]    NULL    OPTIONAL,
 *     skipSubscriberDataUpdate    [7] NULL    OPTIONAL,
 *     usedRAT-Type    [8] Used-RAT-Type    OPTIONAL,
 *     gprsSubscriptionDataNotNeeded    [9] NULL    OPTIONAL,
 *     nodeTypeIndicator    [10] NULL    OPTIONAL,
 *     areaRestricted    [11] NULL    OPTIONAL,
 *     ue-reachableIndicator    [12]    NULL    OPTIONAL, 
 *     epsSubscriptionDataNotNeeded    [13] NULL    OPTIONAL,
 *     ue-srvcc-Capability    [14] UE-SRVCC-Capability    OPTIONAL,
 *     eplmn-List    [15] EPLMN-List    OPTIONAL,
 *     mmeNumberforMTSMS    [16] ISDN-AddressString    OPTIONAL,
 *     smsRegisterRequest    [17] SMSRegisterRequest    OPTIONAL,
 *     sms-Only    [18] NULL    OPTIONAL,
 *     removalofMMERegistrationforSMS    [22] NULL    OPTIONAL,
 *     sgsn-Name    [19] DiameterIdentity    OPTIONAL,
 *     sgsn-Realm    [20]    DiameterIdentity    OPTIONAL,
 *     lgd-supportIndicator    [21] NULL    OPTIONAL,
 *     adjacentPLMN-List    [23] AdjacentPLMN-List    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class UpdateGprsLocationArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `sgsn_Number`.
         * @public
         * @readonly
         */
        readonly sgsn_Number: ISDN_AddressString,
        /**
         * @summary `sgsn_Address`.
         * @public
         * @readonly
         */
        readonly sgsn_Address: GSN_Address,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `sgsn_Capability`.
         * @public
         * @readonly
         */
        readonly sgsn_Capability: OPTIONAL<SGSN_Capability>,
        /**
         * @summary `informPreviousNetworkEntity`.
         * @public
         * @readonly
         */
        readonly informPreviousNetworkEntity: OPTIONAL<NULL>,
        /**
         * @summary `ps_LCS_NotSupportedByUE`.
         * @public
         * @readonly
         */
        readonly ps_LCS_NotSupportedByUE: OPTIONAL<NULL>,
        /**
         * @summary `v_gmlc_Address`.
         * @public
         * @readonly
         */
        readonly v_gmlc_Address: OPTIONAL<GSN_Address>,
        /**
         * @summary `add_info`.
         * @public
         * @readonly
         */
        readonly add_info: OPTIONAL<ADD_Info>,
        /**
         * @summary `eps_info`.
         * @public
         * @readonly
         */
        readonly eps_info: OPTIONAL<EPS_Info>,
        /**
         * @summary `servingNodeTypeIndicator`.
         * @public
         * @readonly
         */
        readonly servingNodeTypeIndicator: OPTIONAL<NULL>,
        /**
         * @summary `skipSubscriberDataUpdate`.
         * @public
         * @readonly
         */
        readonly skipSubscriberDataUpdate: OPTIONAL<NULL>,
        /**
         * @summary `usedRAT_Type`.
         * @public
         * @readonly
         */
        readonly usedRAT_Type: OPTIONAL<Used_RAT_Type>,
        /**
         * @summary `gprsSubscriptionDataNotNeeded`.
         * @public
         * @readonly
         */
        readonly gprsSubscriptionDataNotNeeded: OPTIONAL<NULL>,
        /**
         * @summary `nodeTypeIndicator`.
         * @public
         * @readonly
         */
        readonly nodeTypeIndicator: OPTIONAL<NULL>,
        /**
         * @summary `areaRestricted`.
         * @public
         * @readonly
         */
        readonly areaRestricted: OPTIONAL<NULL>,
        /**
         * @summary `ue_reachableIndicator`.
         * @public
         * @readonly
         */
        readonly ue_reachableIndicator: OPTIONAL<NULL>,
        /**
         * @summary `epsSubscriptionDataNotNeeded`.
         * @public
         * @readonly
         */
        readonly epsSubscriptionDataNotNeeded: OPTIONAL<NULL>,
        /**
         * @summary `ue_srvcc_Capability`.
         * @public
         * @readonly
         */
        readonly ue_srvcc_Capability: OPTIONAL<UE_SRVCC_Capability>,
        /**
         * @summary `eplmn_List`.
         * @public
         * @readonly
         */
        readonly eplmn_List: OPTIONAL<EPLMN_List>,
        /**
         * @summary `mmeNumberforMTSMS`.
         * @public
         * @readonly
         */
        readonly mmeNumberforMTSMS: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `smsRegisterRequest`.
         * @public
         * @readonly
         */
        readonly smsRegisterRequest: OPTIONAL<SMSRegisterRequest>,
        /**
         * @summary `sms_Only`.
         * @public
         * @readonly
         */
        readonly sms_Only: OPTIONAL<NULL>,
        /**
         * @summary `removalofMMERegistrationforSMS`.
         * @public
         * @readonly
         */
        readonly removalofMMERegistrationforSMS: OPTIONAL<NULL>,
        /**
         * @summary `sgsn_Name`.
         * @public
         * @readonly
         */
        readonly sgsn_Name: OPTIONAL<DiameterIdentity>,
        /**
         * @summary `sgsn_Realm`.
         * @public
         * @readonly
         */
        readonly sgsn_Realm: OPTIONAL<DiameterIdentity>,
        /**
         * @summary `lgd_supportIndicator`.
         * @public
         * @readonly
         */
        readonly lgd_supportIndicator: OPTIONAL<NULL>,
        /**
         * @summary `adjacentPLMN_List`.
         * @public
         * @readonly
         */
        readonly adjacentPLMN_List: OPTIONAL<AdjacentPLMN_List>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UpdateGprsLocationArg
     * @description
     * 
     * This takes an `object` and converts it to a `UpdateGprsLocationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateGprsLocationArg`.
     * @returns {UpdateGprsLocationArg}
     */
    public static _from_object (_o: { [_K in keyof (UpdateGprsLocationArg)]: (UpdateGprsLocationArg)[_K] }): UpdateGprsLocationArg {
        return new UpdateGprsLocationArg(_o.imsi, _o.sgsn_Number, _o.sgsn_Address, _o.extensionContainer, _o.sgsn_Capability, _o.informPreviousNetworkEntity, _o.ps_LCS_NotSupportedByUE, _o.v_gmlc_Address, _o.add_info, _o.eps_info, _o.servingNodeTypeIndicator, _o.skipSubscriberDataUpdate, _o.usedRAT_Type, _o.gprsSubscriptionDataNotNeeded, _o.nodeTypeIndicator, _o.areaRestricted, _o.ue_reachableIndicator, _o.epsSubscriptionDataNotNeeded, _o.ue_srvcc_Capability, _o.eplmn_List, _o.mmeNumberforMTSMS, _o.smsRegisterRequest, _o.sms_Only, _o.removalofMMERegistrationforSMS, _o.sgsn_Name, _o.sgsn_Realm, _o.lgd_supportIndicator, _o.adjacentPLMN_List, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `usedRAT_Type`
         * @public
         * @static
         */

    public static _enum_for_usedRAT_Type = _enum_for_Used_RAT_Type;        /**
         * @summary The enum used as the type of the component `ue_srvcc_Capability`
         * @public
         * @static
         */

    public static _enum_for_ue_srvcc_Capability = _enum_for_UE_SRVCC_Capability;        /**
         * @summary The enum used as the type of the component `smsRegisterRequest`
         * @public
         * @static
         */

    public static _enum_for_smsRegisterRequest = _enum_for_SMSRegisterRequest;
}

/**
 * @summary The Leading Root Component Types of UpdateGprsLocationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UpdateGprsLocationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("sgsn-Number", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("sgsn-Address", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of UpdateGprsLocationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UpdateGprsLocationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UpdateGprsLocationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UpdateGprsLocationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("sgsn-Capability", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("informPreviousNetworkEntity", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("ps-LCS-NotSupportedByUE", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("v-gmlc-Address", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("add-info", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("eps-info", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("servingNodeTypeIndicator", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("skipSubscriberDataUpdate", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("usedRAT-Type", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("gprsSubscriptionDataNotNeeded", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("nodeTypeIndicator", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("areaRestricted", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("ue-reachableIndicator", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("epsSubscriptionDataNotNeeded", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("ue-srvcc-Capability", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("eplmn-List", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("mmeNumberforMTSMS", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("smsRegisterRequest", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("sms-Only", true, $.hasTag(_TagClass.context, 18), undefined, undefined),
    new $.ComponentSpec("removalofMMERegistrationforSMS", true, $.hasTag(_TagClass.context, 22), undefined, undefined),
    new $.ComponentSpec("sgsn-Name", true, $.hasTag(_TagClass.context, 19), undefined, undefined),
    new $.ComponentSpec("sgsn-Realm", true, $.hasTag(_TagClass.context, 20), undefined, undefined),
    new $.ComponentSpec("lgd-supportIndicator", true, $.hasTag(_TagClass.context, 21), undefined, undefined),
    new $.ComponentSpec("adjacentPLMN-List", true, $.hasTag(_TagClass.context, 23), undefined, undefined)
];

let _cached_decoder_for_UpdateGprsLocationArg: $.ASN1Decoder<UpdateGprsLocationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateGprsLocationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateGprsLocationArg (el: _Element): UpdateGprsLocationArg {
    if (!_cached_decoder_for_UpdateGprsLocationArg) { _cached_decoder_for_UpdateGprsLocationArg = function (el: _Element): UpdateGprsLocationArg {
    let imsi!: IMSI;
    let sgsn_Number!: ISDN_AddressString;
    let sgsn_Address!: GSN_Address;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let sgsn_Capability: OPTIONAL<SGSN_Capability>;
    let informPreviousNetworkEntity: OPTIONAL<NULL>;
    let ps_LCS_NotSupportedByUE: OPTIONAL<NULL>;
    let v_gmlc_Address: OPTIONAL<GSN_Address>;
    let add_info: OPTIONAL<ADD_Info>;
    let eps_info: OPTIONAL<EPS_Info>;
    let servingNodeTypeIndicator: OPTIONAL<NULL>;
    let skipSubscriberDataUpdate: OPTIONAL<NULL>;
    let usedRAT_Type: OPTIONAL<Used_RAT_Type>;
    let gprsSubscriptionDataNotNeeded: OPTIONAL<NULL>;
    let nodeTypeIndicator: OPTIONAL<NULL>;
    let areaRestricted: OPTIONAL<NULL>;
    let ue_reachableIndicator: OPTIONAL<NULL>;
    let epsSubscriptionDataNotNeeded: OPTIONAL<NULL>;
    let ue_srvcc_Capability: OPTIONAL<UE_SRVCC_Capability>;
    let eplmn_List: OPTIONAL<EPLMN_List>;
    let mmeNumberforMTSMS: OPTIONAL<ISDN_AddressString>;
    let smsRegisterRequest: OPTIONAL<SMSRegisterRequest>;
    let sms_Only: OPTIONAL<NULL>;
    let removalofMMERegistrationforSMS: OPTIONAL<NULL>;
    let sgsn_Name: OPTIONAL<DiameterIdentity>;
    let sgsn_Realm: OPTIONAL<DiameterIdentity>;
    let lgd_supportIndicator: OPTIONAL<NULL>;
    let adjacentPLMN_List: OPTIONAL<AdjacentPLMN_List>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = _decode_IMSI(_el); },
        "sgsn-Number": (_el: _Element): void => { sgsn_Number = _decode_ISDN_AddressString(_el); },
        "sgsn-Address": (_el: _Element): void => { sgsn_Address = _decode_GSN_Address(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "sgsn-Capability": (_el: _Element): void => { sgsn_Capability = $._decode_implicit<SGSN_Capability>(() => _decode_SGSN_Capability)(_el); },
        "informPreviousNetworkEntity": (_el: _Element): void => { informPreviousNetworkEntity = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "ps-LCS-NotSupportedByUE": (_el: _Element): void => { ps_LCS_NotSupportedByUE = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "v-gmlc-Address": (_el: _Element): void => { v_gmlc_Address = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); },
        "add-info": (_el: _Element): void => { add_info = $._decode_implicit<ADD_Info>(() => _decode_ADD_Info)(_el); },
        "eps-info": (_el: _Element): void => { eps_info = $._decode_explicit<EPS_Info>(() => _decode_EPS_Info)(_el); },
        "servingNodeTypeIndicator": (_el: _Element): void => { servingNodeTypeIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "skipSubscriberDataUpdate": (_el: _Element): void => { skipSubscriberDataUpdate = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "usedRAT-Type": (_el: _Element): void => { usedRAT_Type = $._decode_implicit<Used_RAT_Type>(() => _decode_Used_RAT_Type)(_el); },
        "gprsSubscriptionDataNotNeeded": (_el: _Element): void => { gprsSubscriptionDataNotNeeded = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "nodeTypeIndicator": (_el: _Element): void => { nodeTypeIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "areaRestricted": (_el: _Element): void => { areaRestricted = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "ue-reachableIndicator": (_el: _Element): void => { ue_reachableIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "epsSubscriptionDataNotNeeded": (_el: _Element): void => { epsSubscriptionDataNotNeeded = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "ue-srvcc-Capability": (_el: _Element): void => { ue_srvcc_Capability = $._decode_implicit<UE_SRVCC_Capability>(() => _decode_UE_SRVCC_Capability)(_el); },
        "eplmn-List": (_el: _Element): void => { eplmn_List = $._decode_implicit<EPLMN_List>(() => _decode_EPLMN_List)(_el); },
        "mmeNumberforMTSMS": (_el: _Element): void => { mmeNumberforMTSMS = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "smsRegisterRequest": (_el: _Element): void => { smsRegisterRequest = $._decode_implicit<SMSRegisterRequest>(() => _decode_SMSRegisterRequest)(_el); },
        "sms-Only": (_el: _Element): void => { sms_Only = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "removalofMMERegistrationforSMS": (_el: _Element): void => { removalofMMERegistrationforSMS = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "sgsn-Name": (_el: _Element): void => { sgsn_Name = $._decode_implicit<DiameterIdentity>(() => _decode_DiameterIdentity)(_el); },
        "sgsn-Realm": (_el: _Element): void => { sgsn_Realm = $._decode_implicit<DiameterIdentity>(() => _decode_DiameterIdentity)(_el); },
        "lgd-supportIndicator": (_el: _Element): void => { lgd_supportIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "adjacentPLMN-List": (_el: _Element): void => { adjacentPLMN_List = $._decode_implicit<AdjacentPLMN_List>(() => _decode_AdjacentPLMN_List)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UpdateGprsLocationArg,
        _extension_additions_list_spec_for_UpdateGprsLocationArg,
        _root_component_type_list_2_spec_for_UpdateGprsLocationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UpdateGprsLocationArg(
        imsi,
        sgsn_Number,
        sgsn_Address,
        extensionContainer,
        sgsn_Capability,
        informPreviousNetworkEntity,
        ps_LCS_NotSupportedByUE,
        v_gmlc_Address,
        add_info,
        eps_info,
        servingNodeTypeIndicator,
        skipSubscriberDataUpdate,
        usedRAT_Type,
        gprsSubscriptionDataNotNeeded,
        nodeTypeIndicator,
        areaRestricted,
        ue_reachableIndicator,
        epsSubscriptionDataNotNeeded,
        ue_srvcc_Capability,
        eplmn_List,
        mmeNumberforMTSMS,
        smsRegisterRequest,
        sms_Only,
        removalofMMERegistrationforSMS,
        sgsn_Name,
        sgsn_Realm,
        lgd_supportIndicator,
        adjacentPLMN_List,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_UpdateGprsLocationArg(el);
}

let _cached_encoder_for_UpdateGprsLocationArg: $.ASN1Encoder<UpdateGprsLocationArg> | null = null;

/**
 * @summary Encodes a(n) UpdateGprsLocationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateGprsLocationArg, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateGprsLocationArg (value: UpdateGprsLocationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateGprsLocationArg) { _cached_encoder_for_UpdateGprsLocationArg = function (value: UpdateGprsLocationArg, elGetter: $.ASN1Encoder<UpdateGprsLocationArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IMSI(value.imsi, $.BER),
            /* REQUIRED   */ _encode_ISDN_AddressString(value.sgsn_Number, $.BER),
            /* REQUIRED   */ _encode_GSN_Address(value.sgsn_Address, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.sgsn_Capability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_SGSN_Capability, $.BER)(value.sgsn_Capability, $.BER)),
            /* IF_ABSENT  */ ((value.informPreviousNetworkEntity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.informPreviousNetworkEntity, $.BER)),
            /* IF_ABSENT  */ ((value.ps_LCS_NotSupportedByUE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.ps_LCS_NotSupportedByUE, $.BER)),
            /* IF_ABSENT  */ ((value.v_gmlc_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_GSN_Address, $.BER)(value.v_gmlc_Address, $.BER)),
            /* IF_ABSENT  */ ((value.add_info === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ADD_Info, $.BER)(value.add_info, $.BER)),
            /* IF_ABSENT  */ ((value.eps_info === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_EPS_Info, $.BER)(value.eps_info, $.BER)),
            /* IF_ABSENT  */ ((value.servingNodeTypeIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER)(value.servingNodeTypeIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.skipSubscriberDataUpdate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value.skipSubscriberDataUpdate, $.BER)),
            /* IF_ABSENT  */ ((value.usedRAT_Type === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_Used_RAT_Type, $.BER)(value.usedRAT_Type, $.BER)),
            /* IF_ABSENT  */ ((value.gprsSubscriptionDataNotNeeded === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER)(value.gprsSubscriptionDataNotNeeded, $.BER)),
            /* IF_ABSENT  */ ((value.nodeTypeIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER)(value.nodeTypeIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.areaRestricted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER)(value.areaRestricted, $.BER)),
            /* IF_ABSENT  */ ((value.ue_reachableIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeNull, $.BER)(value.ue_reachableIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.epsSubscriptionDataNotNeeded === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeNull, $.BER)(value.epsSubscriptionDataNotNeeded, $.BER)),
            /* IF_ABSENT  */ ((value.ue_srvcc_Capability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_UE_SRVCC_Capability, $.BER)(value.ue_srvcc_Capability, $.BER)),
            /* IF_ABSENT  */ ((value.eplmn_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_EPLMN_List, $.BER)(value.eplmn_List, $.BER)),
            /* IF_ABSENT  */ ((value.mmeNumberforMTSMS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_ISDN_AddressString, $.BER)(value.mmeNumberforMTSMS, $.BER)),
            /* IF_ABSENT  */ ((value.smsRegisterRequest === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_SMSRegisterRequest, $.BER)(value.smsRegisterRequest, $.BER)),
            /* IF_ABSENT  */ ((value.sms_Only === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => $._encodeNull, $.BER)(value.sms_Only, $.BER)),
            /* IF_ABSENT  */ ((value.removalofMMERegistrationforSMS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => $._encodeNull, $.BER)(value.removalofMMERegistrationforSMS, $.BER)),
            /* IF_ABSENT  */ ((value.sgsn_Name === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_DiameterIdentity, $.BER)(value.sgsn_Name, $.BER)),
            /* IF_ABSENT  */ ((value.sgsn_Realm === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_DiameterIdentity, $.BER)(value.sgsn_Realm, $.BER)),
            /* IF_ABSENT  */ ((value.lgd_supportIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => $._encodeNull, $.BER)(value.lgd_supportIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.adjacentPLMN_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_AdjacentPLMN_List, $.BER)(value.adjacentPLMN_List, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UpdateGprsLocationArg(value, elGetter);
}


/* eslint-enable */
