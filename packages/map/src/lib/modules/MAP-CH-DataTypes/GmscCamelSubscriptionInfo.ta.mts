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
import { T_CSI, _decode_T_CSI, _encode_T_CSI } from "../MAP-MS-DataTypes/T-CSI.ta.mjs";
// export { T_CSI, _decode_T_CSI, _encode_T_CSI } from "../MAP-MS-DataTypes/T-CSI.ta.mjs";
import { O_CSI, _decode_O_CSI, _encode_O_CSI } from "../MAP-MS-DataTypes/O-CSI.ta.mjs";
// export { O_CSI, _decode_O_CSI, _encode_O_CSI } from "../MAP-MS-DataTypes/O-CSI.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { O_BcsmCamelTDPCriteriaList, _decode_O_BcsmCamelTDPCriteriaList, _encode_O_BcsmCamelTDPCriteriaList } from "../MAP-MS-DataTypes/O-BcsmCamelTDPCriteriaList.ta.mjs";
// export { O_BcsmCamelTDPCriteriaList, _decode_O_BcsmCamelTDPCriteriaList, _encode_O_BcsmCamelTDPCriteriaList } from "../MAP-MS-DataTypes/O-BcsmCamelTDPCriteriaList.ta.mjs";
import { T_BCSM_CAMEL_TDP_CriteriaList, _decode_T_BCSM_CAMEL_TDP_CriteriaList, _encode_T_BCSM_CAMEL_TDP_CriteriaList } from "../MAP-MS-DataTypes/T-BCSM-CAMEL-TDP-CriteriaList.ta.mjs";
// export { T_BCSM_CAMEL_TDP_CriteriaList, _decode_T_BCSM_CAMEL_TDP_CriteriaList, _encode_T_BCSM_CAMEL_TDP_CriteriaList } from "../MAP-MS-DataTypes/T-BCSM-CAMEL-TDP-CriteriaList.ta.mjs";
import { D_CSI, _decode_D_CSI, _encode_D_CSI } from "../MAP-MS-DataTypes/D-CSI.ta.mjs";
// export { D_CSI, _decode_D_CSI, _encode_D_CSI } from "../MAP-MS-DataTypes/D-CSI.ta.mjs";


/**
 * @summary GmscCamelSubscriptionInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GmscCamelSubscriptionInfo ::= SEQUENCE {
 *     t-CSI    [0] T-CSI    OPTIONAL,
 *     o-CSI    [1] O-CSI    OPTIONAL,
 *     extensionContainer    [2] ExtensionContainer    OPTIONAL,
 *     ...,
 *     o-BcsmCamelTDP-CriteriaList    [3] O-BcsmCamelTDPCriteriaList    OPTIONAL,
 *     t-BCSM-CAMEL-TDP-CriteriaList    [4]    T-BCSM-CAMEL-TDP-CriteriaList    OPTIONAL,
 *     d-csi    [5]    D-CSI    OPTIONAL}
 * ```
 * 
 * @class
 */
export
class GmscCamelSubscriptionInfo {
    constructor (
        /**
         * @summary `t_CSI`.
         * @public
         * @readonly
         */
        readonly t_CSI: OPTIONAL<T_CSI>,
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
         * @summary `o_BcsmCamelTDP_CriteriaList`.
         * @public
         * @readonly
         */
        readonly o_BcsmCamelTDP_CriteriaList: OPTIONAL<O_BcsmCamelTDPCriteriaList>,
        /**
         * @summary `t_BCSM_CAMEL_TDP_CriteriaList`.
         * @public
         * @readonly
         */
        readonly t_BCSM_CAMEL_TDP_CriteriaList: OPTIONAL<T_BCSM_CAMEL_TDP_CriteriaList>,
        /**
         * @summary `d_csi`.
         * @public
         * @readonly
         */
        readonly d_csi: OPTIONAL<D_CSI>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a GmscCamelSubscriptionInfo
     * @description
     * 
     * This takes an `object` and converts it to a `GmscCamelSubscriptionInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GmscCamelSubscriptionInfo`.
     * @returns {GmscCamelSubscriptionInfo}
     */
    public static _from_object (_o: { [_K in keyof (GmscCamelSubscriptionInfo)]: (GmscCamelSubscriptionInfo)[_K] }): GmscCamelSubscriptionInfo {
        return new GmscCamelSubscriptionInfo(_o.t_CSI, _o.o_CSI, _o.extensionContainer, _o.o_BcsmCamelTDP_CriteriaList, _o.t_BCSM_CAMEL_TDP_CriteriaList, _o.d_csi, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GmscCamelSubscriptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GmscCamelSubscriptionInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("t-CSI", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("o-CSI", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GmscCamelSubscriptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GmscCamelSubscriptionInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GmscCamelSubscriptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GmscCamelSubscriptionInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("o-BcsmCamelTDP-CriteriaList", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("t-BCSM-CAMEL-TDP-CriteriaList", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("d-csi", true, $.hasTag(_TagClass.context, 5), undefined, undefined)
];

let _cached_decoder_for_GmscCamelSubscriptionInfo: $.ASN1Decoder<GmscCamelSubscriptionInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GmscCamelSubscriptionInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GmscCamelSubscriptionInfo (el: _Element): GmscCamelSubscriptionInfo {
    if (!_cached_decoder_for_GmscCamelSubscriptionInfo) { _cached_decoder_for_GmscCamelSubscriptionInfo = function (el: _Element): GmscCamelSubscriptionInfo {
    let t_CSI: OPTIONAL<T_CSI>;
    let o_CSI: OPTIONAL<O_CSI>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let o_BcsmCamelTDP_CriteriaList: OPTIONAL<O_BcsmCamelTDPCriteriaList>;
    let t_BCSM_CAMEL_TDP_CriteriaList: OPTIONAL<T_BCSM_CAMEL_TDP_CriteriaList>;
    let d_csi: OPTIONAL<D_CSI>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "t-CSI": (_el: _Element): void => { t_CSI = $._decode_implicit<T_CSI>(() => _decode_T_CSI)(_el); },
        "o-CSI": (_el: _Element): void => { o_CSI = $._decode_implicit<O_CSI>(() => _decode_O_CSI)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "o-BcsmCamelTDP-CriteriaList": (_el: _Element): void => { o_BcsmCamelTDP_CriteriaList = $._decode_implicit<O_BcsmCamelTDPCriteriaList>(() => _decode_O_BcsmCamelTDPCriteriaList)(_el); },
        "t-BCSM-CAMEL-TDP-CriteriaList": (_el: _Element): void => { t_BCSM_CAMEL_TDP_CriteriaList = $._decode_implicit<T_BCSM_CAMEL_TDP_CriteriaList>(() => _decode_T_BCSM_CAMEL_TDP_CriteriaList)(_el); },
        "d-csi": (_el: _Element): void => { d_csi = $._decode_implicit<D_CSI>(() => _decode_D_CSI)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GmscCamelSubscriptionInfo,
        _extension_additions_list_spec_for_GmscCamelSubscriptionInfo,
        _root_component_type_list_2_spec_for_GmscCamelSubscriptionInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GmscCamelSubscriptionInfo(
        t_CSI,
        o_CSI,
        extensionContainer,
        o_BcsmCamelTDP_CriteriaList,
        t_BCSM_CAMEL_TDP_CriteriaList,
        d_csi,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GmscCamelSubscriptionInfo(el);
}

let _cached_encoder_for_GmscCamelSubscriptionInfo: $.ASN1Encoder<GmscCamelSubscriptionInfo> | null = null;

/**
 * @summary Encodes a(n) GmscCamelSubscriptionInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GmscCamelSubscriptionInfo, encoded as an ASN.1 Element.
 */
export
function _encode_GmscCamelSubscriptionInfo (value: GmscCamelSubscriptionInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GmscCamelSubscriptionInfo) { _cached_encoder_for_GmscCamelSubscriptionInfo = function (value: GmscCamelSubscriptionInfo, elGetter: $.ASN1Encoder<GmscCamelSubscriptionInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.t_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_T_CSI, $.BER)(value.t_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.o_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_O_CSI, $.BER)(value.o_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.o_BcsmCamelTDP_CriteriaList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_O_BcsmCamelTDPCriteriaList, $.BER)(value.o_BcsmCamelTDP_CriteriaList, $.BER)),
            /* IF_ABSENT  */ ((value.t_BCSM_CAMEL_TDP_CriteriaList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_T_BCSM_CAMEL_TDP_CriteriaList, $.BER)(value.t_BCSM_CAMEL_TDP_CriteriaList, $.BER)),
            /* IF_ABSENT  */ ((value.d_csi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_D_CSI, $.BER)(value.d_csi, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GmscCamelSubscriptionInfo(value, elGetter);
}


/* eslint-enable */
