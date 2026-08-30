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
import { SS_ForBS_Code, _decode_SS_ForBS_Code, _encode_SS_ForBS_Code } from "../MAP-SS-DataTypes/SS-ForBS-Code.ta.mjs";
// export { SS_ForBS_Code, _decode_SS_ForBS_Code, _encode_SS_ForBS_Code } from "../MAP-SS-DataTypes/SS-ForBS-Code.ta.mjs";
import { RequestedCAMEL_SubscriptionInfo, _enum_for_RequestedCAMEL_SubscriptionInfo, RequestedCAMEL_SubscriptionInfo_o_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, o_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_t_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, t_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_vt_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, vt_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_tif_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, tif_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_gprs_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, gprs_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_mo_sms_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, mo_sms_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_ss_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, ss_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_m_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, m_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_d_csi /* IMPORTED_LONG_ENUMERATION_ITEM */, d_csi /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RequestedCAMEL_SubscriptionInfo, _encode_RequestedCAMEL_SubscriptionInfo } from "../MAP-MS-DataTypes/RequestedCAMEL-SubscriptionInfo.ta.mjs";
// export { RequestedCAMEL_SubscriptionInfo, _enum_for_RequestedCAMEL_SubscriptionInfo, RequestedCAMEL_SubscriptionInfo_o_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, o_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_t_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, t_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_vt_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, vt_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_tif_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, tif_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_gprs_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, gprs_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_mo_sms_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, mo_sms_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_ss_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, ss_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_m_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, m_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RequestedCAMEL_SubscriptionInfo_d_csi /* IMPORTED_LONG_ENUMERATION_ITEM */, d_csi /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RequestedCAMEL_SubscriptionInfo, _encode_RequestedCAMEL_SubscriptionInfo } from "../MAP-MS-DataTypes/RequestedCAMEL-SubscriptionInfo.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { AdditionalRequestedCAMEL_SubscriptionInfo, _enum_for_AdditionalRequestedCAMEL_SubscriptionInfo, AdditionalRequestedCAMEL_SubscriptionInfo_mt_sms_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, mt_sms_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalRequestedCAMEL_SubscriptionInfo_mg_csi /* IMPORTED_LONG_ENUMERATION_ITEM */, mg_csi /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalRequestedCAMEL_SubscriptionInfo_o_IM_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, o_IM_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalRequestedCAMEL_SubscriptionInfo_d_IM_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, d_IM_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalRequestedCAMEL_SubscriptionInfo_vt_IM_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, vt_IM_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AdditionalRequestedCAMEL_SubscriptionInfo, _encode_AdditionalRequestedCAMEL_SubscriptionInfo } from "../MAP-MS-DataTypes/AdditionalRequestedCAMEL-SubscriptionInfo.ta.mjs";
// export { AdditionalRequestedCAMEL_SubscriptionInfo, _enum_for_AdditionalRequestedCAMEL_SubscriptionInfo, AdditionalRequestedCAMEL_SubscriptionInfo_mt_sms_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, mt_sms_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalRequestedCAMEL_SubscriptionInfo_mg_csi /* IMPORTED_LONG_ENUMERATION_ITEM */, mg_csi /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalRequestedCAMEL_SubscriptionInfo_o_IM_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, o_IM_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalRequestedCAMEL_SubscriptionInfo_d_IM_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, d_IM_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalRequestedCAMEL_SubscriptionInfo_vt_IM_CSI /* IMPORTED_LONG_ENUMERATION_ITEM */, vt_IM_CSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AdditionalRequestedCAMEL_SubscriptionInfo, _encode_AdditionalRequestedCAMEL_SubscriptionInfo } from "../MAP-MS-DataTypes/AdditionalRequestedCAMEL-SubscriptionInfo.ta.mjs";


/**
 * @summary RequestedSubscriptionInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedSubscriptionInfo ::= SEQUENCE {
 *     requestedSS-Info    [1] SS-ForBS-Code    OPTIONAL,
 *     odb    [2] NULL    OPTIONAL,
 *     requestedCAMEL-SubscriptionInfo    [3] RequestedCAMEL-SubscriptionInfo    OPTIONAL,
 *     supportedVLR-CAMEL-Phases    [4] NULL    OPTIONAL,
 *     supportedSGSN-CAMEL-Phases    [5] NULL    OPTIONAL,
 *     extensionContainer    [6] ExtensionContainer    OPTIONAL,
 *     ...,
 *     additionalRequestedCAMEL-SubscriptionInfo
 *     [7] AdditionalRequestedCAMEL-SubscriptionInfo
 *         OPTIONAL,
 *     msisdn-BS-List    [8] NULL    OPTIONAL,
 *     csg-SubscriptionDataRequested    [9] NULL    OPTIONAL,
 *     cw-Info    [10]    NULL    OPTIONAL,
 *     clip-Info    [11] NULL    OPTIONAL,
 *     clir-Info    [12] NULL    OPTIONAL,
 *     hold-Info    [13] NULL    OPTIONAL,
 *     ect-Info    [14] NULL    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RequestedSubscriptionInfo {
    constructor (
        /**
         * @summary `requestedSS_Info`.
         * @public
         * @readonly
         */
        readonly requestedSS_Info: OPTIONAL<SS_ForBS_Code>,
        /**
         * @summary `odb`.
         * @public
         * @readonly
         */
        readonly odb: OPTIONAL<NULL>,
        /**
         * @summary `requestedCAMEL_SubscriptionInfo`.
         * @public
         * @readonly
         */
        readonly requestedCAMEL_SubscriptionInfo: OPTIONAL<RequestedCAMEL_SubscriptionInfo>,
        /**
         * @summary `supportedVLR_CAMEL_Phases`.
         * @public
         * @readonly
         */
        readonly supportedVLR_CAMEL_Phases: OPTIONAL<NULL>,
        /**
         * @summary `supportedSGSN_CAMEL_Phases`.
         * @public
         * @readonly
         */
        readonly supportedSGSN_CAMEL_Phases: OPTIONAL<NULL>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `additionalRequestedCAMEL_SubscriptionInfo`.
         * @public
         * @readonly
         */
        readonly additionalRequestedCAMEL_SubscriptionInfo: OPTIONAL<AdditionalRequestedCAMEL_SubscriptionInfo>,
        /**
         * @summary `msisdn_BS_List`.
         * @public
         * @readonly
         */
        readonly msisdn_BS_List: OPTIONAL<NULL>,
        /**
         * @summary `csg_SubscriptionDataRequested`.
         * @public
         * @readonly
         */
        readonly csg_SubscriptionDataRequested: OPTIONAL<NULL>,
        /**
         * @summary `cw_Info`.
         * @public
         * @readonly
         */
        readonly cw_Info: OPTIONAL<NULL>,
        /**
         * @summary `clip_Info`.
         * @public
         * @readonly
         */
        readonly clip_Info: OPTIONAL<NULL>,
        /**
         * @summary `clir_Info`.
         * @public
         * @readonly
         */
        readonly clir_Info: OPTIONAL<NULL>,
        /**
         * @summary `hold_Info`.
         * @public
         * @readonly
         */
        readonly hold_Info: OPTIONAL<NULL>,
        /**
         * @summary `ect_Info`.
         * @public
         * @readonly
         */
        readonly ect_Info: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RequestedSubscriptionInfo
     * @description
     * 
     * This takes an `object` and converts it to a `RequestedSubscriptionInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestedSubscriptionInfo`.
     * @returns {RequestedSubscriptionInfo}
     */
    public static _from_object (_o: { [_K in keyof (RequestedSubscriptionInfo)]: (RequestedSubscriptionInfo)[_K] }): RequestedSubscriptionInfo {
        return new RequestedSubscriptionInfo(_o.requestedSS_Info, _o.odb, _o.requestedCAMEL_SubscriptionInfo, _o.supportedVLR_CAMEL_Phases, _o.supportedSGSN_CAMEL_Phases, _o.extensionContainer, _o.additionalRequestedCAMEL_SubscriptionInfo, _o.msisdn_BS_List, _o.csg_SubscriptionDataRequested, _o.cw_Info, _o.clip_Info, _o.clir_Info, _o.hold_Info, _o.ect_Info, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `requestedCAMEL_SubscriptionInfo`
         * @public
         * @static
         */

    public static _enum_for_requestedCAMEL_SubscriptionInfo = _enum_for_RequestedCAMEL_SubscriptionInfo;        /**
         * @summary The enum used as the type of the component `additionalRequestedCAMEL_SubscriptionInfo`
         * @public
         * @static
         */

    public static _enum_for_additionalRequestedCAMEL_SubscriptionInfo = _enum_for_AdditionalRequestedCAMEL_SubscriptionInfo;
}

/**
 * @summary The Leading Root Component Types of RequestedSubscriptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestedSubscriptionInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("requestedSS-Info", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("odb", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("requestedCAMEL-SubscriptionInfo", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("supportedVLR-CAMEL-Phases", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("supportedSGSN-CAMEL-Phases", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 6), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RequestedSubscriptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestedSubscriptionInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestedSubscriptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestedSubscriptionInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("additionalRequestedCAMEL-SubscriptionInfo", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("msisdn-BS-List", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("csg-SubscriptionDataRequested", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("cw-Info", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("clip-Info", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("clir-Info", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("hold-Info", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("ect-Info", true, $.hasTag(_TagClass.context, 14), undefined, undefined)
];

let _cached_decoder_for_RequestedSubscriptionInfo: $.ASN1Decoder<RequestedSubscriptionInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedSubscriptionInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedSubscriptionInfo (el: _Element): RequestedSubscriptionInfo {
    if (!_cached_decoder_for_RequestedSubscriptionInfo) { _cached_decoder_for_RequestedSubscriptionInfo = function (el: _Element): RequestedSubscriptionInfo {
    let requestedSS_Info: OPTIONAL<SS_ForBS_Code>;
    let odb: OPTIONAL<NULL>;
    let requestedCAMEL_SubscriptionInfo: OPTIONAL<RequestedCAMEL_SubscriptionInfo>;
    let supportedVLR_CAMEL_Phases: OPTIONAL<NULL>;
    let supportedSGSN_CAMEL_Phases: OPTIONAL<NULL>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let additionalRequestedCAMEL_SubscriptionInfo: OPTIONAL<AdditionalRequestedCAMEL_SubscriptionInfo>;
    let msisdn_BS_List: OPTIONAL<NULL>;
    let csg_SubscriptionDataRequested: OPTIONAL<NULL>;
    let cw_Info: OPTIONAL<NULL>;
    let clip_Info: OPTIONAL<NULL>;
    let clir_Info: OPTIONAL<NULL>;
    let hold_Info: OPTIONAL<NULL>;
    let ect_Info: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "requestedSS-Info": (_el: _Element): void => { requestedSS_Info = $._decode_implicit<SS_ForBS_Code>(() => _decode_SS_ForBS_Code)(_el); },
        "odb": (_el: _Element): void => { odb = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "requestedCAMEL-SubscriptionInfo": (_el: _Element): void => { requestedCAMEL_SubscriptionInfo = $._decode_implicit<RequestedCAMEL_SubscriptionInfo>(() => _decode_RequestedCAMEL_SubscriptionInfo)(_el); },
        "supportedVLR-CAMEL-Phases": (_el: _Element): void => { supportedVLR_CAMEL_Phases = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "supportedSGSN-CAMEL-Phases": (_el: _Element): void => { supportedSGSN_CAMEL_Phases = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "additionalRequestedCAMEL-SubscriptionInfo": (_el: _Element): void => { additionalRequestedCAMEL_SubscriptionInfo = $._decode_implicit<AdditionalRequestedCAMEL_SubscriptionInfo>(() => _decode_AdditionalRequestedCAMEL_SubscriptionInfo)(_el); },
        "msisdn-BS-List": (_el: _Element): void => { msisdn_BS_List = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "csg-SubscriptionDataRequested": (_el: _Element): void => { csg_SubscriptionDataRequested = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "cw-Info": (_el: _Element): void => { cw_Info = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "clip-Info": (_el: _Element): void => { clip_Info = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "clir-Info": (_el: _Element): void => { clir_Info = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "hold-Info": (_el: _Element): void => { hold_Info = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "ect-Info": (_el: _Element): void => { ect_Info = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestedSubscriptionInfo,
        _extension_additions_list_spec_for_RequestedSubscriptionInfo,
        _root_component_type_list_2_spec_for_RequestedSubscriptionInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RequestedSubscriptionInfo(
        requestedSS_Info,
        odb,
        requestedCAMEL_SubscriptionInfo,
        supportedVLR_CAMEL_Phases,
        supportedSGSN_CAMEL_Phases,
        extensionContainer,
        additionalRequestedCAMEL_SubscriptionInfo,
        msisdn_BS_List,
        csg_SubscriptionDataRequested,
        cw_Info,
        clip_Info,
        clir_Info,
        hold_Info,
        ect_Info,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RequestedSubscriptionInfo(el);
}

let _cached_encoder_for_RequestedSubscriptionInfo: $.ASN1Encoder<RequestedSubscriptionInfo> | null = null;

/**
 * @summary Encodes a(n) RequestedSubscriptionInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedSubscriptionInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedSubscriptionInfo (value: RequestedSubscriptionInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedSubscriptionInfo) { _cached_encoder_for_RequestedSubscriptionInfo = function (value: RequestedSubscriptionInfo, elGetter: $.ASN1Encoder<RequestedSubscriptionInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.requestedSS_Info === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SS_ForBS_Code, $.BER)(value.requestedSS_Info, $.BER)),
            /* IF_ABSENT  */ ((value.odb === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.odb, $.BER)),
            /* IF_ABSENT  */ ((value.requestedCAMEL_SubscriptionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_RequestedCAMEL_SubscriptionInfo, $.BER)(value.requestedCAMEL_SubscriptionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.supportedVLR_CAMEL_Phases === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.supportedVLR_CAMEL_Phases, $.BER)),
            /* IF_ABSENT  */ ((value.supportedSGSN_CAMEL_Phases === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER)(value.supportedSGSN_CAMEL_Phases, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.additionalRequestedCAMEL_SubscriptionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_AdditionalRequestedCAMEL_SubscriptionInfo, $.BER)(value.additionalRequestedCAMEL_SubscriptionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.msisdn_BS_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER)(value.msisdn_BS_List, $.BER)),
            /* IF_ABSENT  */ ((value.csg_SubscriptionDataRequested === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER)(value.csg_SubscriptionDataRequested, $.BER)),
            /* IF_ABSENT  */ ((value.cw_Info === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER)(value.cw_Info, $.BER)),
            /* IF_ABSENT  */ ((value.clip_Info === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER)(value.clip_Info, $.BER)),
            /* IF_ABSENT  */ ((value.clir_Info === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeNull, $.BER)(value.clir_Info, $.BER)),
            /* IF_ABSENT  */ ((value.hold_Info === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeNull, $.BER)(value.hold_Info, $.BER)),
            /* IF_ABSENT  */ ((value.ect_Info === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeNull, $.BER)(value.ect_Info, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RequestedSubscriptionInfo(value, elGetter);
}


/* eslint-enable */
