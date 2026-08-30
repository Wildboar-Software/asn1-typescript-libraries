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
import { CallForwardingData, _decode_CallForwardingData, _encode_CallForwardingData } from "../MAP-MS-DataTypes/CallForwardingData.ta.mjs";
// export { CallForwardingData, _decode_CallForwardingData, _encode_CallForwardingData } from "../MAP-MS-DataTypes/CallForwardingData.ta.mjs";
import { CallBarringData, _decode_CallBarringData, _encode_CallBarringData } from "../MAP-MS-DataTypes/CallBarringData.ta.mjs";
// export { CallBarringData, _decode_CallBarringData, _encode_CallBarringData } from "../MAP-MS-DataTypes/CallBarringData.ta.mjs";
import { ODB_Info, _decode_ODB_Info, _encode_ODB_Info } from "../MAP-MS-DataTypes/ODB-Info.ta.mjs";
// export { ODB_Info, _decode_ODB_Info, _encode_ODB_Info } from "../MAP-MS-DataTypes/ODB-Info.ta.mjs";
import { CAMEL_SubscriptionInfo, _decode_CAMEL_SubscriptionInfo, _encode_CAMEL_SubscriptionInfo } from "../MAP-MS-DataTypes/CAMEL-SubscriptionInfo.ta.mjs";
// export { CAMEL_SubscriptionInfo, _decode_CAMEL_SubscriptionInfo, _encode_CAMEL_SubscriptionInfo } from "../MAP-MS-DataTypes/CAMEL-SubscriptionInfo.ta.mjs";
import { SupportedCamelPhases, SupportedCamelPhases_phase1 /* IMPORTED_LONG_NAMED_BIT */, phase1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase2 /* IMPORTED_LONG_NAMED_BIT */, phase2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase3 /* IMPORTED_LONG_NAMED_BIT */, phase3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase4 /* IMPORTED_LONG_NAMED_BIT */, phase4 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedCamelPhases, _encode_SupportedCamelPhases } from "../MAP-MS-DataTypes/SupportedCamelPhases.ta.mjs";
// export { SupportedCamelPhases, SupportedCamelPhases_phase1 /* IMPORTED_LONG_NAMED_BIT */, phase1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase2 /* IMPORTED_LONG_NAMED_BIT */, phase2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase3 /* IMPORTED_LONG_NAMED_BIT */, phase3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase4 /* IMPORTED_LONG_NAMED_BIT */, phase4 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedCamelPhases, _encode_SupportedCamelPhases } from "../MAP-MS-DataTypes/SupportedCamelPhases.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { OfferedCamel4CSIs, OfferedCamel4CSIs_o_csi /* IMPORTED_LONG_NAMED_BIT */, o_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_d_csi /* IMPORTED_LONG_NAMED_BIT */, d_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_vt_csi /* IMPORTED_LONG_NAMED_BIT */, vt_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_t_csi /* IMPORTED_LONG_NAMED_BIT */, t_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mt_sms_csi /* IMPORTED_LONG_NAMED_BIT */, mt_sms_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mg_csi /* IMPORTED_LONG_NAMED_BIT */, mg_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_psi_enhancements /* IMPORTED_LONG_NAMED_BIT */, psi_enhancements /* IMPORTED_SHORT_NAMED_BIT */, _decode_OfferedCamel4CSIs, _encode_OfferedCamel4CSIs } from "../MAP-MS-DataTypes/OfferedCamel4CSIs.ta.mjs";
// export { OfferedCamel4CSIs, OfferedCamel4CSIs_o_csi /* IMPORTED_LONG_NAMED_BIT */, o_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_d_csi /* IMPORTED_LONG_NAMED_BIT */, d_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_vt_csi /* IMPORTED_LONG_NAMED_BIT */, vt_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_t_csi /* IMPORTED_LONG_NAMED_BIT */, t_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mt_sms_csi /* IMPORTED_LONG_NAMED_BIT */, mt_sms_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_mg_csi /* IMPORTED_LONG_NAMED_BIT */, mg_csi /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4CSIs_psi_enhancements /* IMPORTED_LONG_NAMED_BIT */, psi_enhancements /* IMPORTED_SHORT_NAMED_BIT */, _decode_OfferedCamel4CSIs, _encode_OfferedCamel4CSIs } from "../MAP-MS-DataTypes/OfferedCamel4CSIs.ta.mjs";
import { MSISDN_BS_List, _decode_MSISDN_BS_List, _encode_MSISDN_BS_List } from "../MAP-MS-DataTypes/MSISDN-BS-List.ta.mjs";
// export { MSISDN_BS_List, _decode_MSISDN_BS_List, _encode_MSISDN_BS_List } from "../MAP-MS-DataTypes/MSISDN-BS-List.ta.mjs";
import { CSG_SubscriptionDataList, _decode_CSG_SubscriptionDataList, _encode_CSG_SubscriptionDataList } from "../MAP-MS-DataTypes/CSG-SubscriptionDataList.ta.mjs";
// export { CSG_SubscriptionDataList, _decode_CSG_SubscriptionDataList, _encode_CSG_SubscriptionDataList } from "../MAP-MS-DataTypes/CSG-SubscriptionDataList.ta.mjs";
import { CallWaitingData, _decode_CallWaitingData, _encode_CallWaitingData } from "../MAP-MS-DataTypes/CallWaitingData.ta.mjs";
// export { CallWaitingData, _decode_CallWaitingData, _encode_CallWaitingData } from "../MAP-MS-DataTypes/CallWaitingData.ta.mjs";
import { CallHoldData, _decode_CallHoldData, _encode_CallHoldData } from "../MAP-MS-DataTypes/CallHoldData.ta.mjs";
// export { CallHoldData, _decode_CallHoldData, _encode_CallHoldData } from "../MAP-MS-DataTypes/CallHoldData.ta.mjs";
import { ClipData, _decode_ClipData, _encode_ClipData } from "../MAP-MS-DataTypes/ClipData.ta.mjs";
// export { ClipData, _decode_ClipData, _encode_ClipData } from "../MAP-MS-DataTypes/ClipData.ta.mjs";
import { ClirData, _decode_ClirData, _encode_ClirData } from "../MAP-MS-DataTypes/ClirData.ta.mjs";
// export { ClirData, _decode_ClirData, _encode_ClirData } from "../MAP-MS-DataTypes/ClirData.ta.mjs";
import { EctData, _decode_EctData, _encode_EctData } from "../MAP-MS-DataTypes/EctData.ta.mjs";
// export { EctData, _decode_EctData, _encode_EctData } from "../MAP-MS-DataTypes/EctData.ta.mjs";


/**
 * @summary AnyTimeSubscriptionInterrogationRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyTimeSubscriptionInterrogationRes ::= SEQUENCE {
 *     callForwardingData    [1] CallForwardingData    OPTIONAL,
 *     callBarringData    [2] CallBarringData    OPTIONAL,
 *     odb-Info    [3] ODB-Info    OPTIONAL,
 *     camel-SubscriptionInfo    [4] CAMEL-SubscriptionInfo    OPTIONAL,
 *     supportedVLR-CAMEL-Phases    [5] SupportedCamelPhases    OPTIONAL,
 *     supportedSGSN-CAMEL-Phases    [6] SupportedCamelPhases    OPTIONAL,
 *     extensionContainer    [7] ExtensionContainer    OPTIONAL,
 *     ... ,
 *     offeredCamel4CSIsInVLR    [8] OfferedCamel4CSIs    OPTIONAL,
 *     offeredCamel4CSIsInSGSN    [9] OfferedCamel4CSIs    OPTIONAL,
 *     msisdn-BS-List    [10] MSISDN-BS-List    OPTIONAL,
 *     csg-SubscriptionDataList    [11] CSG-SubscriptionDataList    OPTIONAL, 
 *     cw-Data    [12]    CallWaitingData    OPTIONAL,
 *     ch-Data    [13]    CallHoldData    OPTIONAL,
 *     clip-Data    [14] ClipData    OPTIONAL,
 *     clir-Data    [15]    ClirData    OPTIONAL,
 *     ect-data    [16] EctData    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AnyTimeSubscriptionInterrogationRes {
    constructor (
        /**
         * @summary `callForwardingData`.
         * @public
         * @readonly
         */
        readonly callForwardingData: OPTIONAL<CallForwardingData>,
        /**
         * @summary `callBarringData`.
         * @public
         * @readonly
         */
        readonly callBarringData: OPTIONAL<CallBarringData>,
        /**
         * @summary `odb_Info`.
         * @public
         * @readonly
         */
        readonly odb_Info: OPTIONAL<ODB_Info>,
        /**
         * @summary `camel_SubscriptionInfo`.
         * @public
         * @readonly
         */
        readonly camel_SubscriptionInfo: OPTIONAL<CAMEL_SubscriptionInfo>,
        /**
         * @summary `supportedVLR_CAMEL_Phases`.
         * @public
         * @readonly
         */
        readonly supportedVLR_CAMEL_Phases: OPTIONAL<SupportedCamelPhases>,
        /**
         * @summary `supportedSGSN_CAMEL_Phases`.
         * @public
         * @readonly
         */
        readonly supportedSGSN_CAMEL_Phases: OPTIONAL<SupportedCamelPhases>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `offeredCamel4CSIsInVLR`.
         * @public
         * @readonly
         */
        readonly offeredCamel4CSIsInVLR: OPTIONAL<OfferedCamel4CSIs>,
        /**
         * @summary `offeredCamel4CSIsInSGSN`.
         * @public
         * @readonly
         */
        readonly offeredCamel4CSIsInSGSN: OPTIONAL<OfferedCamel4CSIs>,
        /**
         * @summary `msisdn_BS_List`.
         * @public
         * @readonly
         */
        readonly msisdn_BS_List: OPTIONAL<MSISDN_BS_List>,
        /**
         * @summary `csg_SubscriptionDataList`.
         * @public
         * @readonly
         */
        readonly csg_SubscriptionDataList: OPTIONAL<CSG_SubscriptionDataList>,
        /**
         * @summary `cw_Data`.
         * @public
         * @readonly
         */
        readonly cw_Data: OPTIONAL<CallWaitingData>,
        /**
         * @summary `ch_Data`.
         * @public
         * @readonly
         */
        readonly ch_Data: OPTIONAL<CallHoldData>,
        /**
         * @summary `clip_Data`.
         * @public
         * @readonly
         */
        readonly clip_Data: OPTIONAL<ClipData>,
        /**
         * @summary `clir_Data`.
         * @public
         * @readonly
         */
        readonly clir_Data: OPTIONAL<ClirData>,
        /**
         * @summary `ect_data`.
         * @public
         * @readonly
         */
        readonly ect_data: OPTIONAL<EctData>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AnyTimeSubscriptionInterrogationRes
     * @description
     * 
     * This takes an `object` and converts it to a `AnyTimeSubscriptionInterrogationRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AnyTimeSubscriptionInterrogationRes`.
     * @returns {AnyTimeSubscriptionInterrogationRes}
     */
    public static _from_object (_o: { [_K in keyof (AnyTimeSubscriptionInterrogationRes)]: (AnyTimeSubscriptionInterrogationRes)[_K] }): AnyTimeSubscriptionInterrogationRes {
        return new AnyTimeSubscriptionInterrogationRes(_o.callForwardingData, _o.callBarringData, _o.odb_Info, _o.camel_SubscriptionInfo, _o.supportedVLR_CAMEL_Phases, _o.supportedSGSN_CAMEL_Phases, _o.extensionContainer, _o.offeredCamel4CSIsInVLR, _o.offeredCamel4CSIsInSGSN, _o.msisdn_BS_List, _o.csg_SubscriptionDataList, _o.cw_Data, _o.ch_Data, _o.clip_Data, _o.clir_Data, _o.ect_data, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AnyTimeSubscriptionInterrogationRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AnyTimeSubscriptionInterrogationRes: $.ComponentSpec[] = [
    new $.ComponentSpec("callForwardingData", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("callBarringData", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("odb-Info", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("camel-SubscriptionInfo", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("supportedVLR-CAMEL-Phases", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("supportedSGSN-CAMEL-Phases", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 7), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AnyTimeSubscriptionInterrogationRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AnyTimeSubscriptionInterrogationRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AnyTimeSubscriptionInterrogationRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AnyTimeSubscriptionInterrogationRes: $.ComponentSpec[] = [
    new $.ComponentSpec("offeredCamel4CSIsInVLR", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("offeredCamel4CSIsInSGSN", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("msisdn-BS-List", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("csg-SubscriptionDataList", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("cw-Data", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("ch-Data", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("clip-Data", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("clir-Data", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("ect-data", true, $.hasTag(_TagClass.context, 16), undefined, undefined)
];

let _cached_decoder_for_AnyTimeSubscriptionInterrogationRes: $.ASN1Decoder<AnyTimeSubscriptionInterrogationRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AnyTimeSubscriptionInterrogationRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AnyTimeSubscriptionInterrogationRes (el: _Element): AnyTimeSubscriptionInterrogationRes {
    if (!_cached_decoder_for_AnyTimeSubscriptionInterrogationRes) { _cached_decoder_for_AnyTimeSubscriptionInterrogationRes = function (el: _Element): AnyTimeSubscriptionInterrogationRes {
    let callForwardingData: OPTIONAL<CallForwardingData>;
    let callBarringData: OPTIONAL<CallBarringData>;
    let odb_Info: OPTIONAL<ODB_Info>;
    let camel_SubscriptionInfo: OPTIONAL<CAMEL_SubscriptionInfo>;
    let supportedVLR_CAMEL_Phases: OPTIONAL<SupportedCamelPhases>;
    let supportedSGSN_CAMEL_Phases: OPTIONAL<SupportedCamelPhases>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let offeredCamel4CSIsInVLR: OPTIONAL<OfferedCamel4CSIs>;
    let offeredCamel4CSIsInSGSN: OPTIONAL<OfferedCamel4CSIs>;
    let msisdn_BS_List: OPTIONAL<MSISDN_BS_List>;
    let csg_SubscriptionDataList: OPTIONAL<CSG_SubscriptionDataList>;
    let cw_Data: OPTIONAL<CallWaitingData>;
    let ch_Data: OPTIONAL<CallHoldData>;
    let clip_Data: OPTIONAL<ClipData>;
    let clir_Data: OPTIONAL<ClirData>;
    let ect_data: OPTIONAL<EctData>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "callForwardingData": (_el: _Element): void => { callForwardingData = $._decode_implicit<CallForwardingData>(() => _decode_CallForwardingData)(_el); },
        "callBarringData": (_el: _Element): void => { callBarringData = $._decode_implicit<CallBarringData>(() => _decode_CallBarringData)(_el); },
        "odb-Info": (_el: _Element): void => { odb_Info = $._decode_implicit<ODB_Info>(() => _decode_ODB_Info)(_el); },
        "camel-SubscriptionInfo": (_el: _Element): void => { camel_SubscriptionInfo = $._decode_implicit<CAMEL_SubscriptionInfo>(() => _decode_CAMEL_SubscriptionInfo)(_el); },
        "supportedVLR-CAMEL-Phases": (_el: _Element): void => { supportedVLR_CAMEL_Phases = $._decode_implicit<SupportedCamelPhases>(() => _decode_SupportedCamelPhases)(_el); },
        "supportedSGSN-CAMEL-Phases": (_el: _Element): void => { supportedSGSN_CAMEL_Phases = $._decode_implicit<SupportedCamelPhases>(() => _decode_SupportedCamelPhases)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "offeredCamel4CSIsInVLR": (_el: _Element): void => { offeredCamel4CSIsInVLR = $._decode_implicit<OfferedCamel4CSIs>(() => _decode_OfferedCamel4CSIs)(_el); },
        "offeredCamel4CSIsInSGSN": (_el: _Element): void => { offeredCamel4CSIsInSGSN = $._decode_implicit<OfferedCamel4CSIs>(() => _decode_OfferedCamel4CSIs)(_el); },
        "msisdn-BS-List": (_el: _Element): void => { msisdn_BS_List = $._decode_implicit<MSISDN_BS_List>(() => _decode_MSISDN_BS_List)(_el); },
        "csg-SubscriptionDataList": (_el: _Element): void => { csg_SubscriptionDataList = $._decode_implicit<CSG_SubscriptionDataList>(() => _decode_CSG_SubscriptionDataList)(_el); },
        "cw-Data": (_el: _Element): void => { cw_Data = $._decode_implicit<CallWaitingData>(() => _decode_CallWaitingData)(_el); },
        "ch-Data": (_el: _Element): void => { ch_Data = $._decode_implicit<CallHoldData>(() => _decode_CallHoldData)(_el); },
        "clip-Data": (_el: _Element): void => { clip_Data = $._decode_implicit<ClipData>(() => _decode_ClipData)(_el); },
        "clir-Data": (_el: _Element): void => { clir_Data = $._decode_implicit<ClirData>(() => _decode_ClirData)(_el); },
        "ect-data": (_el: _Element): void => { ect_data = $._decode_implicit<EctData>(() => _decode_EctData)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AnyTimeSubscriptionInterrogationRes,
        _extension_additions_list_spec_for_AnyTimeSubscriptionInterrogationRes,
        _root_component_type_list_2_spec_for_AnyTimeSubscriptionInterrogationRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AnyTimeSubscriptionInterrogationRes(
        callForwardingData,
        callBarringData,
        odb_Info,
        camel_SubscriptionInfo,
        supportedVLR_CAMEL_Phases,
        supportedSGSN_CAMEL_Phases,
        extensionContainer,
        offeredCamel4CSIsInVLR,
        offeredCamel4CSIsInSGSN,
        msisdn_BS_List,
        csg_SubscriptionDataList,
        cw_Data,
        ch_Data,
        clip_Data,
        clir_Data,
        ect_data,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AnyTimeSubscriptionInterrogationRes(el);
}

let _cached_encoder_for_AnyTimeSubscriptionInterrogationRes: $.ASN1Encoder<AnyTimeSubscriptionInterrogationRes> | null = null;

/**
 * @summary Encodes a(n) AnyTimeSubscriptionInterrogationRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnyTimeSubscriptionInterrogationRes, encoded as an ASN.1 Element.
 */
export
function _encode_AnyTimeSubscriptionInterrogationRes (value: AnyTimeSubscriptionInterrogationRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AnyTimeSubscriptionInterrogationRes) { _cached_encoder_for_AnyTimeSubscriptionInterrogationRes = function (value: AnyTimeSubscriptionInterrogationRes, elGetter: $.ASN1Encoder<AnyTimeSubscriptionInterrogationRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.callForwardingData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallForwardingData, $.BER)(value.callForwardingData, $.BER)),
            /* IF_ABSENT  */ ((value.callBarringData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CallBarringData, $.BER)(value.callBarringData, $.BER)),
            /* IF_ABSENT  */ ((value.odb_Info === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ODB_Info, $.BER)(value.odb_Info, $.BER)),
            /* IF_ABSENT  */ ((value.camel_SubscriptionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CAMEL_SubscriptionInfo, $.BER)(value.camel_SubscriptionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.supportedVLR_CAMEL_Phases === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SupportedCamelPhases, $.BER)(value.supportedVLR_CAMEL_Phases, $.BER)),
            /* IF_ABSENT  */ ((value.supportedSGSN_CAMEL_Phases === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_SupportedCamelPhases, $.BER)(value.supportedSGSN_CAMEL_Phases, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.offeredCamel4CSIsInVLR === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_OfferedCamel4CSIs, $.BER)(value.offeredCamel4CSIsInVLR, $.BER)),
            /* IF_ABSENT  */ ((value.offeredCamel4CSIsInSGSN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_OfferedCamel4CSIs, $.BER)(value.offeredCamel4CSIsInSGSN, $.BER)),
            /* IF_ABSENT  */ ((value.msisdn_BS_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_MSISDN_BS_List, $.BER)(value.msisdn_BS_List, $.BER)),
            /* IF_ABSENT  */ ((value.csg_SubscriptionDataList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_CSG_SubscriptionDataList, $.BER)(value.csg_SubscriptionDataList, $.BER)),
            /* IF_ABSENT  */ ((value.cw_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_CallWaitingData, $.BER)(value.cw_Data, $.BER)),
            /* IF_ABSENT  */ ((value.ch_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_CallHoldData, $.BER)(value.ch_Data, $.BER)),
            /* IF_ABSENT  */ ((value.clip_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_ClipData, $.BER)(value.clip_Data, $.BER)),
            /* IF_ABSENT  */ ((value.clir_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_ClirData, $.BER)(value.clir_Data, $.BER)),
            /* IF_ABSENT  */ ((value.ect_data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_EctData, $.BER)(value.ect_data, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AnyTimeSubscriptionInterrogationRes(value, elGetter);
}


/* eslint-enable */
