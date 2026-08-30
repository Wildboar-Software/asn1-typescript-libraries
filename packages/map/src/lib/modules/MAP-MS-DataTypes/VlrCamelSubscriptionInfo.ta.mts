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
import { O_CSI, _decode_O_CSI, _encode_O_CSI } from "../MAP-MS-DataTypes/O-CSI.ta.mjs";
// export { O_CSI, _decode_O_CSI, _encode_O_CSI } from "../MAP-MS-DataTypes/O-CSI.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { SS_CSI, _decode_SS_CSI, _encode_SS_CSI } from "../MAP-MS-DataTypes/SS-CSI.ta.mjs";
// export { SS_CSI, _decode_SS_CSI, _encode_SS_CSI } from "../MAP-MS-DataTypes/SS-CSI.ta.mjs";
import { O_BcsmCamelTDPCriteriaList, _decode_O_BcsmCamelTDPCriteriaList, _encode_O_BcsmCamelTDPCriteriaList } from "../MAP-MS-DataTypes/O-BcsmCamelTDPCriteriaList.ta.mjs";
// export { O_BcsmCamelTDPCriteriaList, _decode_O_BcsmCamelTDPCriteriaList, _encode_O_BcsmCamelTDPCriteriaList } from "../MAP-MS-DataTypes/O-BcsmCamelTDPCriteriaList.ta.mjs";
import { M_CSI, _decode_M_CSI, _encode_M_CSI } from "../MAP-MS-DataTypes/M-CSI.ta.mjs";
// export { M_CSI, _decode_M_CSI, _encode_M_CSI } from "../MAP-MS-DataTypes/M-CSI.ta.mjs";
import { SMS_CSI, _decode_SMS_CSI, _encode_SMS_CSI } from "../MAP-MS-DataTypes/SMS-CSI.ta.mjs";
// export { SMS_CSI, _decode_SMS_CSI, _encode_SMS_CSI } from "../MAP-MS-DataTypes/SMS-CSI.ta.mjs";
import { T_CSI, _decode_T_CSI, _encode_T_CSI } from "../MAP-MS-DataTypes/T-CSI.ta.mjs";
// export { T_CSI, _decode_T_CSI, _encode_T_CSI } from "../MAP-MS-DataTypes/T-CSI.ta.mjs";
import { T_BCSM_CAMEL_TDP_CriteriaList, _decode_T_BCSM_CAMEL_TDP_CriteriaList, _encode_T_BCSM_CAMEL_TDP_CriteriaList } from "../MAP-MS-DataTypes/T-BCSM-CAMEL-TDP-CriteriaList.ta.mjs";
// export { T_BCSM_CAMEL_TDP_CriteriaList, _decode_T_BCSM_CAMEL_TDP_CriteriaList, _encode_T_BCSM_CAMEL_TDP_CriteriaList } from "../MAP-MS-DataTypes/T-BCSM-CAMEL-TDP-CriteriaList.ta.mjs";
import { D_CSI, _decode_D_CSI, _encode_D_CSI } from "../MAP-MS-DataTypes/D-CSI.ta.mjs";
// export { D_CSI, _decode_D_CSI, _encode_D_CSI } from "../MAP-MS-DataTypes/D-CSI.ta.mjs";
import { MT_smsCAMELTDP_CriteriaList, _decode_MT_smsCAMELTDP_CriteriaList, _encode_MT_smsCAMELTDP_CriteriaList } from "../MAP-MS-DataTypes/MT-smsCAMELTDP-CriteriaList.ta.mjs";
// export { MT_smsCAMELTDP_CriteriaList, _decode_MT_smsCAMELTDP_CriteriaList, _encode_MT_smsCAMELTDP_CriteriaList } from "../MAP-MS-DataTypes/MT-smsCAMELTDP-CriteriaList.ta.mjs";


/**
 * @summary VlrCamelSubscriptionInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VlrCamelSubscriptionInfo ::= SEQUENCE {
 *     o-CSI    [0] O-CSI    OPTIONAL,
 *     extensionContainer    [1] ExtensionContainer    OPTIONAL,
 *     ...,
 *     ss-CSI    [2] SS-CSI    OPTIONAL,
 *     o-BcsmCamelTDP-CriteriaList    [4] O-BcsmCamelTDPCriteriaList    OPTIONAL,
 *     tif-CSI    [3] NULL    OPTIONAL,
 *     m-CSI    [5] M-CSI    OPTIONAL,
 *     mo-sms-CSI    [6] SMS-CSI    OPTIONAL,
 *     vt-CSI    [7] T-CSI    OPTIONAL,
 *     t-BCSM-CAMEL-TDP-CriteriaList    [8] T-BCSM-CAMEL-TDP-CriteriaList    OPTIONAL,
 *     d-CSI    [9] D-CSI    OPTIONAL,
 *     mt-sms-CSI    [10] SMS-CSI    OPTIONAL,
 *     mt-smsCAMELTDP-CriteriaList    [11]    MT-smsCAMELTDP-CriteriaList    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class VlrCamelSubscriptionInfo {
    constructor (
        /**
         * @summary `o_CSI`.
         * @public
         * @readonly
         */
        readonly o_CSI: OPTIONAL<O_CSI>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `ss_CSI`.
         * @public
         * @readonly
         */
        readonly ss_CSI: OPTIONAL<SS_CSI>,
        /**
         * @summary `o_BcsmCamelTDP_CriteriaList`.
         * @public
         * @readonly
         */
        readonly o_BcsmCamelTDP_CriteriaList: OPTIONAL<O_BcsmCamelTDPCriteriaList>,
        /**
         * @summary `tif_CSI`.
         * @public
         * @readonly
         */
        readonly tif_CSI: OPTIONAL<NULL>,
        /**
         * @summary `m_CSI`.
         * @public
         * @readonly
         */
        readonly m_CSI: OPTIONAL<M_CSI>,
        /**
         * @summary `mo_sms_CSI`.
         * @public
         * @readonly
         */
        readonly mo_sms_CSI: OPTIONAL<SMS_CSI>,
        /**
         * @summary `vt_CSI`.
         * @public
         * @readonly
         */
        readonly vt_CSI: OPTIONAL<T_CSI>,
        /**
         * @summary `t_BCSM_CAMEL_TDP_CriteriaList`.
         * @public
         * @readonly
         */
        readonly t_BCSM_CAMEL_TDP_CriteriaList: OPTIONAL<T_BCSM_CAMEL_TDP_CriteriaList>,
        /**
         * @summary `d_CSI`.
         * @public
         * @readonly
         */
        readonly d_CSI: OPTIONAL<D_CSI>,
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
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a VlrCamelSubscriptionInfo
     * @description
     * 
     * This takes an `object` and converts it to a `VlrCamelSubscriptionInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VlrCamelSubscriptionInfo`.
     * @returns {VlrCamelSubscriptionInfo}
     */
    public static _from_object (_o: { [_K in keyof (VlrCamelSubscriptionInfo)]: (VlrCamelSubscriptionInfo)[_K] }): VlrCamelSubscriptionInfo {
        return new VlrCamelSubscriptionInfo(_o.o_CSI, _o.extensionContainer, _o.ss_CSI, _o.o_BcsmCamelTDP_CriteriaList, _o.tif_CSI, _o.m_CSI, _o.mo_sms_CSI, _o.vt_CSI, _o.t_BCSM_CAMEL_TDP_CriteriaList, _o.d_CSI, _o.mt_sms_CSI, _o.mt_smsCAMELTDP_CriteriaList, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of VlrCamelSubscriptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VlrCamelSubscriptionInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("o-CSI", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of VlrCamelSubscriptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VlrCamelSubscriptionInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VlrCamelSubscriptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VlrCamelSubscriptionInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-CSI", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("o-BcsmCamelTDP-CriteriaList", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("tif-CSI", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("m-CSI", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("mo-sms-CSI", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("vt-CSI", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("t-BCSM-CAMEL-TDP-CriteriaList", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("d-CSI", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("mt-sms-CSI", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("mt-smsCAMELTDP-CriteriaList", true, $.hasTag(_TagClass.context, 11), undefined, undefined)
];

let _cached_decoder_for_VlrCamelSubscriptionInfo: $.ASN1Decoder<VlrCamelSubscriptionInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VlrCamelSubscriptionInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VlrCamelSubscriptionInfo (el: _Element): VlrCamelSubscriptionInfo {
    if (!_cached_decoder_for_VlrCamelSubscriptionInfo) { _cached_decoder_for_VlrCamelSubscriptionInfo = function (el: _Element): VlrCamelSubscriptionInfo {
    let o_CSI: OPTIONAL<O_CSI>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let ss_CSI: OPTIONAL<SS_CSI>;
    let o_BcsmCamelTDP_CriteriaList: OPTIONAL<O_BcsmCamelTDPCriteriaList>;
    let tif_CSI: OPTIONAL<NULL>;
    let m_CSI: OPTIONAL<M_CSI>;
    let mo_sms_CSI: OPTIONAL<SMS_CSI>;
    let vt_CSI: OPTIONAL<T_CSI>;
    let t_BCSM_CAMEL_TDP_CriteriaList: OPTIONAL<T_BCSM_CAMEL_TDP_CriteriaList>;
    let d_CSI: OPTIONAL<D_CSI>;
    let mt_sms_CSI: OPTIONAL<SMS_CSI>;
    let mt_smsCAMELTDP_CriteriaList: OPTIONAL<MT_smsCAMELTDP_CriteriaList>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "o-CSI": (_el: _Element): void => { o_CSI = $._decode_implicit<O_CSI>(() => _decode_O_CSI)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "ss-CSI": (_el: _Element): void => { ss_CSI = $._decode_implicit<SS_CSI>(() => _decode_SS_CSI)(_el); },
        "o-BcsmCamelTDP-CriteriaList": (_el: _Element): void => { o_BcsmCamelTDP_CriteriaList = $._decode_implicit<O_BcsmCamelTDPCriteriaList>(() => _decode_O_BcsmCamelTDPCriteriaList)(_el); },
        "tif-CSI": (_el: _Element): void => { tif_CSI = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "m-CSI": (_el: _Element): void => { m_CSI = $._decode_implicit<M_CSI>(() => _decode_M_CSI)(_el); },
        "mo-sms-CSI": (_el: _Element): void => { mo_sms_CSI = $._decode_implicit<SMS_CSI>(() => _decode_SMS_CSI)(_el); },
        "vt-CSI": (_el: _Element): void => { vt_CSI = $._decode_implicit<T_CSI>(() => _decode_T_CSI)(_el); },
        "t-BCSM-CAMEL-TDP-CriteriaList": (_el: _Element): void => { t_BCSM_CAMEL_TDP_CriteriaList = $._decode_implicit<T_BCSM_CAMEL_TDP_CriteriaList>(() => _decode_T_BCSM_CAMEL_TDP_CriteriaList)(_el); },
        "d-CSI": (_el: _Element): void => { d_CSI = $._decode_implicit<D_CSI>(() => _decode_D_CSI)(_el); },
        "mt-sms-CSI": (_el: _Element): void => { mt_sms_CSI = $._decode_implicit<SMS_CSI>(() => _decode_SMS_CSI)(_el); },
        "mt-smsCAMELTDP-CriteriaList": (_el: _Element): void => { mt_smsCAMELTDP_CriteriaList = $._decode_implicit<MT_smsCAMELTDP_CriteriaList>(() => _decode_MT_smsCAMELTDP_CriteriaList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_VlrCamelSubscriptionInfo,
        _extension_additions_list_spec_for_VlrCamelSubscriptionInfo,
        _root_component_type_list_2_spec_for_VlrCamelSubscriptionInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new VlrCamelSubscriptionInfo(
        o_CSI,
        extensionContainer,
        ss_CSI,
        o_BcsmCamelTDP_CriteriaList,
        tif_CSI,
        m_CSI,
        mo_sms_CSI,
        vt_CSI,
        t_BCSM_CAMEL_TDP_CriteriaList,
        d_CSI,
        mt_sms_CSI,
        mt_smsCAMELTDP_CriteriaList,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_VlrCamelSubscriptionInfo(el);
}

let _cached_encoder_for_VlrCamelSubscriptionInfo: $.ASN1Encoder<VlrCamelSubscriptionInfo> | null = null;

/**
 * @summary Encodes a(n) VlrCamelSubscriptionInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VlrCamelSubscriptionInfo, encoded as an ASN.1 Element.
 */
export
function _encode_VlrCamelSubscriptionInfo (value: VlrCamelSubscriptionInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VlrCamelSubscriptionInfo) { _cached_encoder_for_VlrCamelSubscriptionInfo = function (value: VlrCamelSubscriptionInfo, elGetter: $.ASN1Encoder<VlrCamelSubscriptionInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.o_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_O_CSI, $.BER)(value.o_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.ss_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SS_CSI, $.BER)(value.ss_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.o_BcsmCamelTDP_CriteriaList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_O_BcsmCamelTDPCriteriaList, $.BER)(value.o_BcsmCamelTDP_CriteriaList, $.BER)),
            /* IF_ABSENT  */ ((value.tif_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.tif_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.m_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_M_CSI, $.BER)(value.m_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.mo_sms_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_SMS_CSI, $.BER)(value.mo_sms_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.vt_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_T_CSI, $.BER)(value.vt_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.t_BCSM_CAMEL_TDP_CriteriaList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_T_BCSM_CAMEL_TDP_CriteriaList, $.BER)(value.t_BCSM_CAMEL_TDP_CriteriaList, $.BER)),
            /* IF_ABSENT  */ ((value.d_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_D_CSI, $.BER)(value.d_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.mt_sms_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_SMS_CSI, $.BER)(value.mt_sms_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.mt_smsCAMELTDP_CriteriaList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_MT_smsCAMELTDP_CriteriaList, $.BER)(value.mt_smsCAMELTDP_CriteriaList, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_VlrCamelSubscriptionInfo(value, elGetter);
}


/* eslint-enable */
