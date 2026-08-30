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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";
// export { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";
import { ExternalSignalInfo, _decode_ExternalSignalInfo, _encode_ExternalSignalInfo } from "../MAP-CommonDataTypes/ExternalSignalInfo.ta.mjs";
// export { ExternalSignalInfo, _decode_ExternalSignalInfo, _encode_ExternalSignalInfo } from "../MAP-CommonDataTypes/ExternalSignalInfo.ta.mjs";
import { SuppressionOfAnnouncement, _decode_SuppressionOfAnnouncement, _encode_SuppressionOfAnnouncement } from "../MAP-CH-DataTypes/SuppressionOfAnnouncement.ta.mjs";
// export { SuppressionOfAnnouncement, _decode_SuppressionOfAnnouncement, _encode_SuppressionOfAnnouncement } from "../MAP-CH-DataTypes/SuppressionOfAnnouncement.ta.mjs";
import { CallReferenceNumber, _decode_CallReferenceNumber, _encode_CallReferenceNumber } from "../MAP-CH-DataTypes/CallReferenceNumber.ta.mjs";
// export { CallReferenceNumber, _decode_CallReferenceNumber, _encode_CallReferenceNumber } from "../MAP-CH-DataTypes/CallReferenceNumber.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../MAP-CommonDataTypes/AlertingPattern.ta.mjs";
// export { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../MAP-CommonDataTypes/AlertingPattern.ta.mjs";
import { SupportedCamelPhases, SupportedCamelPhases_phase1 /* IMPORTED_LONG_NAMED_BIT */, phase1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase2 /* IMPORTED_LONG_NAMED_BIT */, phase2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase3 /* IMPORTED_LONG_NAMED_BIT */, phase3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase4 /* IMPORTED_LONG_NAMED_BIT */, phase4 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedCamelPhases, _encode_SupportedCamelPhases } from "../MAP-MS-DataTypes/SupportedCamelPhases.ta.mjs";
// export { SupportedCamelPhases, SupportedCamelPhases_phase1 /* IMPORTED_LONG_NAMED_BIT */, phase1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase2 /* IMPORTED_LONG_NAMED_BIT */, phase2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase3 /* IMPORTED_LONG_NAMED_BIT */, phase3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase4 /* IMPORTED_LONG_NAMED_BIT */, phase4 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedCamelPhases, _encode_SupportedCamelPhases } from "../MAP-MS-DataTypes/SupportedCamelPhases.ta.mjs";
import { Ext_ExternalSignalInfo, _decode_Ext_ExternalSignalInfo, _encode_Ext_ExternalSignalInfo } from "../MAP-CommonDataTypes/Ext-ExternalSignalInfo.ta.mjs";
// export { Ext_ExternalSignalInfo, _decode_Ext_ExternalSignalInfo, _encode_Ext_ExternalSignalInfo } from "../MAP-CommonDataTypes/Ext-ExternalSignalInfo.ta.mjs";
import { OfferedCamel4CSIs, OfferedCamel4CSIs_o_csi /* IMPORTED_LONG_NAMED_BIT */, o_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_d_csi /* IMPORTED_LONG_NAMED_BIT */, d_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_vt_csi /* IMPORTED_LONG_NAMED_BIT */, vt_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_t_csi /* IMPORTED_LONG_NAMED_BIT */, t_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mt_sms_csi /* IMPORTED_LONG_NAMED_BIT */, mt_sms_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mg_csi /* IMPORTED_LONG_NAMED_BIT */, mg_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_psi_enhancements /* IMPORTED_LONG_NAMED_BIT */, psi_enhancements /* IMPORTED_SHORT_NAMED_BIT */, _decode_OfferedCamel4CSIs, _encode_OfferedCamel4CSIs } from "../MAP-MS-DataTypes/OfferedCamel4CSIs.ta.mjs";
// export { OfferedCamel4CSIs, OfferedCamel4CSIs_o_csi /* IMPORTED_LONG_NAMED_BIT */, o_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_d_csi /* IMPORTED_LONG_NAMED_BIT */, d_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_vt_csi /* IMPORTED_LONG_NAMED_BIT */, vt_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_t_csi /* IMPORTED_LONG_NAMED_BIT */, t_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mt_sms_csi /* IMPORTED_LONG_NAMED_BIT */, mt_sms_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mg_csi /* IMPORTED_LONG_NAMED_BIT */, mg_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_psi_enhancements /* IMPORTED_LONG_NAMED_BIT */, psi_enhancements /* IMPORTED_SHORT_NAMED_BIT */, _decode_OfferedCamel4CSIs, _encode_OfferedCamel4CSIs } from "../MAP-MS-DataTypes/OfferedCamel4CSIs.ta.mjs";
import { PagingArea, _decode_PagingArea, _encode_PagingArea } from "../MAP-MS-DataTypes/PagingArea.ta.mjs";
// export { PagingArea, _decode_PagingArea, _encode_PagingArea } from "../MAP-MS-DataTypes/PagingArea.ta.mjs";
import { EMLPP_Priority, _decode_EMLPP_Priority, _encode_EMLPP_Priority } from "../MAP-CommonDataTypes/EMLPP-Priority.ta.mjs";
// export { EMLPP_Priority, _decode_EMLPP_Priority, _encode_EMLPP_Priority } from "../MAP-CommonDataTypes/EMLPP-Priority.ta.mjs";
import { PLMN_Id, _decode_PLMN_Id, _encode_PLMN_Id } from "../MAP-CommonDataTypes/PLMN-Id.ta.mjs";
// export { PLMN_Id, _decode_PLMN_Id, _encode_PLMN_Id } from "../MAP-CommonDataTypes/PLMN-Id.ta.mjs";


/**
 * @summary ProvideRoamingNumberArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideRoamingNumberArg ::= SEQUENCE {
 *     imsi    [0] IMSI,
 *     msc-Number    [1] ISDN-AddressString,
 *     msisdn    [2] ISDN-AddressString    OPTIONAL,
 *     lmsi    [4] LMSI    OPTIONAL,
 *     gsm-BearerCapability    [5] ExternalSignalInfo    OPTIONAL,
 *     networkSignalInfo    [6] ExternalSignalInfo    OPTIONAL,
 *     suppressionOfAnnouncement    [7] SuppressionOfAnnouncement    OPTIONAL,
 *     gmsc-Address    [8] ISDN-AddressString    OPTIONAL,
 *     callReferenceNumber    [9] CallReferenceNumber    OPTIONAL,
 *     or-Interrogation    [10] NULL    OPTIONAL,
 *     extensionContainer    [11] ExtensionContainer    OPTIONAL,
 *     ... ,
 *     alertingPattern    [12] AlertingPattern    OPTIONAL,
 *     ccbs-Call    [13] NULL    OPTIONAL,
 *     supportedCamelPhasesInInterrogatingNode    [15] SupportedCamelPhases    OPTIONAL,
 *     additionalSignalInfo    [14] Ext-ExternalSignalInfo    OPTIONAL,
 *     orNotSupportedInGMSC    [16] NULL    OPTIONAL,
 *     pre-pagingSupported    [17] NULL    OPTIONAL,
 *     longFTN-Supported    [18]    NULL    OPTIONAL,
 *     suppress-VT-CSI    [19]    NULL    OPTIONAL,
 *     offeredCamel4CSIsInInterrogatingNode    [20] OfferedCamel4CSIs    OPTIONAL,
 *     mtRoamingRetrySupported    [21] NULL    OPTIONAL,
 *     pagingArea    [22] PagingArea    OPTIONAL,
 *     callPriority    [23]    EMLPP-Priority    OPTIONAL,
 *     mtrf-Indicator    [24] NULL    OPTIONAL,
 *     oldMSC-Number    [25] ISDN-AddressString    OPTIONAL,
 *     lastUsedLtePLMN-Id    [26] PLMN-Id    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class ProvideRoamingNumberArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `msc_Number`.
         * @public
         * @readonly
         */
        readonly msc_Number: ISDN_AddressString,
        /**
         * @summary `msisdn`.
         * @public
         * @readonly
         */
        readonly msisdn: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `lmsi`.
         * @public
         * @readonly
         */
        readonly lmsi: OPTIONAL<LMSI>,
        /**
         * @summary `gsm_BearerCapability`.
         * @public
         * @readonly
         */
        readonly gsm_BearerCapability: OPTIONAL<ExternalSignalInfo>,
        /**
         * @summary `networkSignalInfo`.
         * @public
         * @readonly
         */
        readonly networkSignalInfo: OPTIONAL<ExternalSignalInfo>,
        /**
         * @summary `suppressionOfAnnouncement`.
         * @public
         * @readonly
         */
        readonly suppressionOfAnnouncement: OPTIONAL<SuppressionOfAnnouncement>,
        /**
         * @summary `gmsc_Address`.
         * @public
         * @readonly
         */
        readonly gmsc_Address: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `callReferenceNumber`.
         * @public
         * @readonly
         */
        readonly callReferenceNumber: OPTIONAL<CallReferenceNumber>,
        /**
         * @summary `or_Interrogation`.
         * @public
         * @readonly
         */
        readonly or_Interrogation: OPTIONAL<NULL>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `alertingPattern`.
         * @public
         * @readonly
         */
        readonly alertingPattern: OPTIONAL<AlertingPattern>,
        /**
         * @summary `ccbs_Call`.
         * @public
         * @readonly
         */
        readonly ccbs_Call: OPTIONAL<NULL>,
        /**
         * @summary `supportedCamelPhasesInInterrogatingNode`.
         * @public
         * @readonly
         */
        readonly supportedCamelPhasesInInterrogatingNode: OPTIONAL<SupportedCamelPhases>,
        /**
         * @summary `additionalSignalInfo`.
         * @public
         * @readonly
         */
        readonly additionalSignalInfo: OPTIONAL<Ext_ExternalSignalInfo>,
        /**
         * @summary `orNotSupportedInGMSC`.
         * @public
         * @readonly
         */
        readonly orNotSupportedInGMSC: OPTIONAL<NULL>,
        /**
         * @summary `pre_pagingSupported`.
         * @public
         * @readonly
         */
        readonly pre_pagingSupported: OPTIONAL<NULL>,
        /**
         * @summary `longFTN_Supported`.
         * @public
         * @readonly
         */
        readonly longFTN_Supported: OPTIONAL<NULL>,
        /**
         * @summary `suppress_VT_CSI`.
         * @public
         * @readonly
         */
        readonly suppress_VT_CSI: OPTIONAL<NULL>,
        /**
         * @summary `offeredCamel4CSIsInInterrogatingNode`.
         * @public
         * @readonly
         */
        readonly offeredCamel4CSIsInInterrogatingNode: OPTIONAL<OfferedCamel4CSIs>,
        /**
         * @summary `mtRoamingRetrySupported`.
         * @public
         * @readonly
         */
        readonly mtRoamingRetrySupported: OPTIONAL<NULL>,
        /**
         * @summary `pagingArea`.
         * @public
         * @readonly
         */
        readonly pagingArea: OPTIONAL<PagingArea>,
        /**
         * @summary `callPriority`.
         * @public
         * @readonly
         */
        readonly callPriority: OPTIONAL<EMLPP_Priority>,
        /**
         * @summary `mtrf_Indicator`.
         * @public
         * @readonly
         */
        readonly mtrf_Indicator: OPTIONAL<NULL>,
        /**
         * @summary `oldMSC_Number`.
         * @public
         * @readonly
         */
        readonly oldMSC_Number: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `lastUsedLtePLMN_Id`.
         * @public
         * @readonly
         */
        readonly lastUsedLtePLMN_Id: OPTIONAL<PLMN_Id>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ProvideRoamingNumberArg
     * @description
     * 
     * This takes an `object` and converts it to a `ProvideRoamingNumberArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProvideRoamingNumberArg`.
     * @returns {ProvideRoamingNumberArg}
     */
    public static _from_object (_o: { [_K in keyof (ProvideRoamingNumberArg)]: (ProvideRoamingNumberArg)[_K] }): ProvideRoamingNumberArg {
        return new ProvideRoamingNumberArg(_o.imsi, _o.msc_Number, _o.msisdn, _o.lmsi, _o.gsm_BearerCapability, _o.networkSignalInfo, _o.suppressionOfAnnouncement, _o.gmsc_Address, _o.callReferenceNumber, _o.or_Interrogation, _o.extensionContainer, _o.alertingPattern, _o.ccbs_Call, _o.supportedCamelPhasesInInterrogatingNode, _o.additionalSignalInfo, _o.orNotSupportedInGMSC, _o.pre_pagingSupported, _o.longFTN_Supported, _o.suppress_VT_CSI, _o.offeredCamel4CSIsInInterrogatingNode, _o.mtRoamingRetrySupported, _o.pagingArea, _o.callPriority, _o.mtrf_Indicator, _o.oldMSC_Number, _o.lastUsedLtePLMN_Id, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ProvideRoamingNumberArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProvideRoamingNumberArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("msc-Number", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("msisdn", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("lmsi", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("gsm-BearerCapability", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("networkSignalInfo", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("suppressionOfAnnouncement", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("gmsc-Address", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("callReferenceNumber", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("or-Interrogation", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 11), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ProvideRoamingNumberArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProvideRoamingNumberArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProvideRoamingNumberArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProvideRoamingNumberArg: $.ComponentSpec[] = [
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("ccbs-Call", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("supportedCamelPhasesInInterrogatingNode", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("additionalSignalInfo", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("orNotSupportedInGMSC", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("pre-pagingSupported", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("longFTN-Supported", true, $.hasTag(_TagClass.context, 18), undefined, undefined),
    new $.ComponentSpec("suppress-VT-CSI", true, $.hasTag(_TagClass.context, 19), undefined, undefined),
    new $.ComponentSpec("offeredCamel4CSIsInInterrogatingNode", true, $.hasTag(_TagClass.context, 20), undefined, undefined),
    new $.ComponentSpec("mtRoamingRetrySupported", true, $.hasTag(_TagClass.context, 21), undefined, undefined),
    new $.ComponentSpec("pagingArea", true, $.hasTag(_TagClass.context, 22), undefined, undefined),
    new $.ComponentSpec("callPriority", true, $.hasTag(_TagClass.context, 23), undefined, undefined),
    new $.ComponentSpec("mtrf-Indicator", true, $.hasTag(_TagClass.context, 24), undefined, undefined),
    new $.ComponentSpec("oldMSC-Number", true, $.hasTag(_TagClass.context, 25), undefined, undefined),
    new $.ComponentSpec("lastUsedLtePLMN-Id", true, $.hasTag(_TagClass.context, 26), undefined, undefined)
];

let _cached_decoder_for_ProvideRoamingNumberArg: $.ASN1Decoder<ProvideRoamingNumberArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvideRoamingNumberArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvideRoamingNumberArg (el: _Element): ProvideRoamingNumberArg {
    if (!_cached_decoder_for_ProvideRoamingNumberArg) { _cached_decoder_for_ProvideRoamingNumberArg = function (el: _Element): ProvideRoamingNumberArg {
    let imsi!: IMSI;
    let msc_Number!: ISDN_AddressString;
    let msisdn: OPTIONAL<ISDN_AddressString>;
    let lmsi: OPTIONAL<LMSI>;
    let gsm_BearerCapability: OPTIONAL<ExternalSignalInfo>;
    let networkSignalInfo: OPTIONAL<ExternalSignalInfo>;
    let suppressionOfAnnouncement: OPTIONAL<SuppressionOfAnnouncement>;
    let gmsc_Address: OPTIONAL<ISDN_AddressString>;
    let callReferenceNumber: OPTIONAL<CallReferenceNumber>;
    let or_Interrogation: OPTIONAL<NULL>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let alertingPattern: OPTIONAL<AlertingPattern>;
    let ccbs_Call: OPTIONAL<NULL>;
    let supportedCamelPhasesInInterrogatingNode: OPTIONAL<SupportedCamelPhases>;
    let additionalSignalInfo: OPTIONAL<Ext_ExternalSignalInfo>;
    let orNotSupportedInGMSC: OPTIONAL<NULL>;
    let pre_pagingSupported: OPTIONAL<NULL>;
    let longFTN_Supported: OPTIONAL<NULL>;
    let suppress_VT_CSI: OPTIONAL<NULL>;
    let offeredCamel4CSIsInInterrogatingNode: OPTIONAL<OfferedCamel4CSIs>;
    let mtRoamingRetrySupported: OPTIONAL<NULL>;
    let pagingArea: OPTIONAL<PagingArea>;
    let callPriority: OPTIONAL<EMLPP_Priority>;
    let mtrf_Indicator: OPTIONAL<NULL>;
    let oldMSC_Number: OPTIONAL<ISDN_AddressString>;
    let lastUsedLtePLMN_Id: OPTIONAL<PLMN_Id>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "msc-Number": (_el: _Element): void => { msc_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "msisdn": (_el: _Element): void => { msisdn = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "lmsi": (_el: _Element): void => { lmsi = $._decode_implicit<LMSI>(() => _decode_LMSI)(_el); },
        "gsm-BearerCapability": (_el: _Element): void => { gsm_BearerCapability = $._decode_implicit<ExternalSignalInfo>(() => _decode_ExternalSignalInfo)(_el); },
        "networkSignalInfo": (_el: _Element): void => { networkSignalInfo = $._decode_implicit<ExternalSignalInfo>(() => _decode_ExternalSignalInfo)(_el); },
        "suppressionOfAnnouncement": (_el: _Element): void => { suppressionOfAnnouncement = $._decode_implicit<SuppressionOfAnnouncement>(() => _decode_SuppressionOfAnnouncement)(_el); },
        "gmsc-Address": (_el: _Element): void => { gmsc_Address = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "callReferenceNumber": (_el: _Element): void => { callReferenceNumber = $._decode_implicit<CallReferenceNumber>(() => _decode_CallReferenceNumber)(_el); },
        "or-Interrogation": (_el: _Element): void => { or_Interrogation = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "ccbs-Call": (_el: _Element): void => { ccbs_Call = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "supportedCamelPhasesInInterrogatingNode": (_el: _Element): void => { supportedCamelPhasesInInterrogatingNode = $._decode_implicit<SupportedCamelPhases>(() => _decode_SupportedCamelPhases)(_el); },
        "additionalSignalInfo": (_el: _Element): void => { additionalSignalInfo = $._decode_implicit<Ext_ExternalSignalInfo>(() => _decode_Ext_ExternalSignalInfo)(_el); },
        "orNotSupportedInGMSC": (_el: _Element): void => { orNotSupportedInGMSC = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "pre-pagingSupported": (_el: _Element): void => { pre_pagingSupported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "longFTN-Supported": (_el: _Element): void => { longFTN_Supported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "suppress-VT-CSI": (_el: _Element): void => { suppress_VT_CSI = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "offeredCamel4CSIsInInterrogatingNode": (_el: _Element): void => { offeredCamel4CSIsInInterrogatingNode = $._decode_implicit<OfferedCamel4CSIs>(() => _decode_OfferedCamel4CSIs)(_el); },
        "mtRoamingRetrySupported": (_el: _Element): void => { mtRoamingRetrySupported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "pagingArea": (_el: _Element): void => { pagingArea = $._decode_implicit<PagingArea>(() => _decode_PagingArea)(_el); },
        "callPriority": (_el: _Element): void => { callPriority = $._decode_implicit<EMLPP_Priority>(() => _decode_EMLPP_Priority)(_el); },
        "mtrf-Indicator": (_el: _Element): void => { mtrf_Indicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "oldMSC-Number": (_el: _Element): void => { oldMSC_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "lastUsedLtePLMN-Id": (_el: _Element): void => { lastUsedLtePLMN_Id = $._decode_implicit<PLMN_Id>(() => _decode_PLMN_Id)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProvideRoamingNumberArg,
        _extension_additions_list_spec_for_ProvideRoamingNumberArg,
        _root_component_type_list_2_spec_for_ProvideRoamingNumberArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ProvideRoamingNumberArg(
        imsi,
        msc_Number,
        msisdn,
        lmsi,
        gsm_BearerCapability,
        networkSignalInfo,
        suppressionOfAnnouncement,
        gmsc_Address,
        callReferenceNumber,
        or_Interrogation,
        extensionContainer,
        alertingPattern,
        ccbs_Call,
        supportedCamelPhasesInInterrogatingNode,
        additionalSignalInfo,
        orNotSupportedInGMSC,
        pre_pagingSupported,
        longFTN_Supported,
        suppress_VT_CSI,
        offeredCamel4CSIsInInterrogatingNode,
        mtRoamingRetrySupported,
        pagingArea,
        callPriority,
        mtrf_Indicator,
        oldMSC_Number,
        lastUsedLtePLMN_Id,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ProvideRoamingNumberArg(el);
}

let _cached_encoder_for_ProvideRoamingNumberArg: $.ASN1Encoder<ProvideRoamingNumberArg> | null = null;

/**
 * @summary Encodes a(n) ProvideRoamingNumberArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvideRoamingNumberArg, encoded as an ASN.1 Element.
 */
export
function _encode_ProvideRoamingNumberArg (value: ProvideRoamingNumberArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvideRoamingNumberArg) { _cached_encoder_for_ProvideRoamingNumberArg = function (value: ProvideRoamingNumberArg, elGetter: $.ASN1Encoder<ProvideRoamingNumberArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER)(value.imsi, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER)(value.msc_Number, $.BER),
            /* IF_ABSENT  */ ((value.msisdn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ISDN_AddressString, $.BER)(value.msisdn, $.BER)),
            /* IF_ABSENT  */ ((value.lmsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_LMSI, $.BER)(value.lmsi, $.BER)),
            /* IF_ABSENT  */ ((value.gsm_BearerCapability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ExternalSignalInfo, $.BER)(value.gsm_BearerCapability, $.BER)),
            /* IF_ABSENT  */ ((value.networkSignalInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ExternalSignalInfo, $.BER)(value.networkSignalInfo, $.BER)),
            /* IF_ABSENT  */ ((value.suppressionOfAnnouncement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_SuppressionOfAnnouncement, $.BER)(value.suppressionOfAnnouncement, $.BER)),
            /* IF_ABSENT  */ ((value.gmsc_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ISDN_AddressString, $.BER)(value.gmsc_Address, $.BER)),
            /* IF_ABSENT  */ ((value.callReferenceNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_CallReferenceNumber, $.BER)(value.callReferenceNumber, $.BER)),
            /* IF_ABSENT  */ ((value.or_Interrogation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER)(value.or_Interrogation, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.alertingPattern === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_AlertingPattern, $.BER)(value.alertingPattern, $.BER)),
            /* IF_ABSENT  */ ((value.ccbs_Call === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeNull, $.BER)(value.ccbs_Call, $.BER)),
            /* IF_ABSENT  */ ((value.supportedCamelPhasesInInterrogatingNode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_SupportedCamelPhases, $.BER)(value.supportedCamelPhasesInInterrogatingNode, $.BER)),
            /* IF_ABSENT  */ ((value.additionalSignalInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_Ext_ExternalSignalInfo, $.BER)(value.additionalSignalInfo, $.BER)),
            /* IF_ABSENT  */ ((value.orNotSupportedInGMSC === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => $._encodeNull, $.BER)(value.orNotSupportedInGMSC, $.BER)),
            /* IF_ABSENT  */ ((value.pre_pagingSupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeNull, $.BER)(value.pre_pagingSupported, $.BER)),
            /* IF_ABSENT  */ ((value.longFTN_Supported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => $._encodeNull, $.BER)(value.longFTN_Supported, $.BER)),
            /* IF_ABSENT  */ ((value.suppress_VT_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => $._encodeNull, $.BER)(value.suppress_VT_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.offeredCamel4CSIsInInterrogatingNode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_OfferedCamel4CSIs, $.BER)(value.offeredCamel4CSIsInInterrogatingNode, $.BER)),
            /* IF_ABSENT  */ ((value.mtRoamingRetrySupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => $._encodeNull, $.BER)(value.mtRoamingRetrySupported, $.BER)),
            /* IF_ABSENT  */ ((value.pagingArea === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_PagingArea, $.BER)(value.pagingArea, $.BER)),
            /* IF_ABSENT  */ ((value.callPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_EMLPP_Priority, $.BER)(value.callPriority, $.BER)),
            /* IF_ABSENT  */ ((value.mtrf_Indicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => $._encodeNull, $.BER)(value.mtrf_Indicator, $.BER)),
            /* IF_ABSENT  */ ((value.oldMSC_Number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => _encode_ISDN_AddressString, $.BER)(value.oldMSC_Number, $.BER)),
            /* IF_ABSENT  */ ((value.lastUsedLtePLMN_Id === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_PLMN_Id, $.BER)(value.lastUsedLtePLMN_Id, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProvideRoamingNumberArg(value, elGetter);
}


/* eslint-enable */
