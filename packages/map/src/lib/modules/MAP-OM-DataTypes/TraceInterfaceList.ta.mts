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
import { MSC_S_InterfaceList, MSC_S_InterfaceList_a /* IMPORTED_LONG_NAMED_BIT */, a /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_iu /* IMPORTED_LONG_NAMED_BIT */, MSC_S_InterfaceList_mc /* IMPORTED_LONG_NAMED_BIT */, MSC_S_InterfaceList_map_g /* IMPORTED_LONG_NAMED_BIT */, map_g /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_map_b /* IMPORTED_LONG_NAMED_BIT */, map_b /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_map_e /* IMPORTED_LONG_NAMED_BIT */, map_e /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_map_f /* IMPORTED_LONG_NAMED_BIT */, map_f /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_cap /* IMPORTED_LONG_NAMED_BIT */, cap /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_map_d /* IMPORTED_LONG_NAMED_BIT */, map_d /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_map_c /* IMPORTED_LONG_NAMED_BIT */, map_c /* IMPORTED_SHORT_NAMED_BIT */, _decode_MSC_S_InterfaceList, _encode_MSC_S_InterfaceList } from "../MAP-OM-DataTypes/MSC-S-InterfaceList.ta.mjs";
// export { MSC_S_InterfaceList, MSC_S_InterfaceList_a /* IMPORTED_LONG_NAMED_BIT */, a /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_iu /* IMPORTED_LONG_NAMED_BIT */, MSC_S_InterfaceList_mc /* IMPORTED_LONG_NAMED_BIT */, MSC_S_InterfaceList_map_g /* IMPORTED_LONG_NAMED_BIT */, map_g /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_map_b /* IMPORTED_LONG_NAMED_BIT */, map_b /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_map_e /* IMPORTED_LONG_NAMED_BIT */, map_e /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_map_f /* IMPORTED_LONG_NAMED_BIT */, map_f /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_cap /* IMPORTED_LONG_NAMED_BIT */, cap /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_map_d /* IMPORTED_LONG_NAMED_BIT */, map_d /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_map_c /* IMPORTED_LONG_NAMED_BIT */, map_c /* IMPORTED_SHORT_NAMED_BIT */, _decode_MSC_S_InterfaceList, _encode_MSC_S_InterfaceList } from "../MAP-OM-DataTypes/MSC-S-InterfaceList.ta.mjs";
import { MGW_InterfaceList, MGW_InterfaceList_mc /* IMPORTED_LONG_NAMED_BIT */, MGW_InterfaceList_nb_up /* IMPORTED_LONG_NAMED_BIT */, nb_up /* IMPORTED_SHORT_NAMED_BIT */, MGW_InterfaceList_iu_up /* IMPORTED_LONG_NAMED_BIT */, iu_up /* IMPORTED_SHORT_NAMED_BIT */, _decode_MGW_InterfaceList, _encode_MGW_InterfaceList } from "../MAP-OM-DataTypes/MGW-InterfaceList.ta.mjs";
// export { MGW_InterfaceList, MGW_InterfaceList_mc /* IMPORTED_LONG_NAMED_BIT */, MGW_InterfaceList_nb_up /* IMPORTED_LONG_NAMED_BIT */, nb_up /* IMPORTED_SHORT_NAMED_BIT */, MGW_InterfaceList_iu_up /* IMPORTED_LONG_NAMED_BIT */, iu_up /* IMPORTED_SHORT_NAMED_BIT */, _decode_MGW_InterfaceList, _encode_MGW_InterfaceList } from "../MAP-OM-DataTypes/MGW-InterfaceList.ta.mjs";
import { SGSN_InterfaceList, SGSN_InterfaceList_gb /* IMPORTED_LONG_NAMED_BIT */, gb /* IMPORTED_SHORT_NAMED_BIT */, SGSN_InterfaceList_iu /* IMPORTED_LONG_NAMED_BIT */, SGSN_InterfaceList_gn /* IMPORTED_LONG_NAMED_BIT */, SGSN_InterfaceList_map_gr /* IMPORTED_LONG_NAMED_BIT */, map_gr /* IMPORTED_SHORT_NAMED_BIT */, SGSN_InterfaceList_map_gd /* IMPORTED_LONG_NAMED_BIT */, map_gd /* IMPORTED_SHORT_NAMED_BIT */, SGSN_InterfaceList_map_gf /* IMPORTED_LONG_NAMED_BIT */, map_gf /* IMPORTED_SHORT_NAMED_BIT */, SGSN_InterfaceList_gs /* IMPORTED_LONG_NAMED_BIT */, gs /* IMPORTED_SHORT_NAMED_BIT */, SGSN_InterfaceList_ge /* IMPORTED_LONG_NAMED_BIT */, ge /* IMPORTED_SHORT_NAMED_BIT */, SGSN_InterfaceList_s3 /* IMPORTED_LONG_NAMED_BIT */, SGSN_InterfaceList_s4 /* IMPORTED_LONG_NAMED_BIT */, SGSN_InterfaceList_s6d /* IMPORTED_LONG_NAMED_BIT */, s6d /* IMPORTED_SHORT_NAMED_BIT */, _decode_SGSN_InterfaceList, _encode_SGSN_InterfaceList } from "../MAP-OM-DataTypes/SGSN-InterfaceList.ta.mjs";
// export { SGSN_InterfaceList, SGSN_InterfaceList_gb /* IMPORTED_LONG_NAMED_BIT */, gb /* IMPORTED_SHORT_NAMED_BIT */, SGSN_InterfaceList_iu /* IMPORTED_LONG_NAMED_BIT */, SGSN_InterfaceList_gn /* IMPORTED_LONG_NAMED_BIT */, SGSN_InterfaceList_map_gr /* IMPORTED_LONG_NAMED_BIT */, map_gr /* IMPORTED_SHORT_NAMED_BIT */, SGSN_InterfaceList_map_gd /* IMPORTED_LONG_NAMED_BIT */, map_gd /* IMPORTED_SHORT_NAMED_BIT */, SGSN_InterfaceList_map_gf /* IMPORTED_LONG_NAMED_BIT */, map_gf /* IMPORTED_SHORT_NAMED_BIT */, SGSN_InterfaceList_gs /* IMPORTED_LONG_NAMED_BIT */, gs /* IMPORTED_SHORT_NAMED_BIT */, SGSN_InterfaceList_ge /* IMPORTED_LONG_NAMED_BIT */, ge /* IMPORTED_SHORT_NAMED_BIT */, SGSN_InterfaceList_s3 /* IMPORTED_LONG_NAMED_BIT */, SGSN_InterfaceList_s4 /* IMPORTED_LONG_NAMED_BIT */, SGSN_InterfaceList_s6d /* IMPORTED_LONG_NAMED_BIT */, s6d /* IMPORTED_SHORT_NAMED_BIT */, _decode_SGSN_InterfaceList, _encode_SGSN_InterfaceList } from "../MAP-OM-DataTypes/SGSN-InterfaceList.ta.mjs";
import { GGSN_InterfaceList, GGSN_InterfaceList_gn /* IMPORTED_LONG_NAMED_BIT */, GGSN_InterfaceList_gi /* IMPORTED_LONG_NAMED_BIT */, gi /* IMPORTED_SHORT_NAMED_BIT */, GGSN_InterfaceList_gmb /* IMPORTED_LONG_NAMED_BIT */, _decode_GGSN_InterfaceList, _encode_GGSN_InterfaceList } from "../MAP-OM-DataTypes/GGSN-InterfaceList.ta.mjs";
// export { GGSN_InterfaceList, GGSN_InterfaceList_gn /* IMPORTED_LONG_NAMED_BIT */, GGSN_InterfaceList_gi /* IMPORTED_LONG_NAMED_BIT */, gi /* IMPORTED_SHORT_NAMED_BIT */, GGSN_InterfaceList_gmb /* IMPORTED_LONG_NAMED_BIT */, _decode_GGSN_InterfaceList, _encode_GGSN_InterfaceList } from "../MAP-OM-DataTypes/GGSN-InterfaceList.ta.mjs";
import { RNC_InterfaceList, RNC_InterfaceList_iu /* IMPORTED_LONG_NAMED_BIT */, RNC_InterfaceList_iur /* IMPORTED_LONG_NAMED_BIT */, iur /* IMPORTED_SHORT_NAMED_BIT */, RNC_InterfaceList_iub /* IMPORTED_LONG_NAMED_BIT */, iub /* IMPORTED_SHORT_NAMED_BIT */, RNC_InterfaceList_uu /* IMPORTED_LONG_NAMED_BIT */, _decode_RNC_InterfaceList, _encode_RNC_InterfaceList } from "../MAP-OM-DataTypes/RNC-InterfaceList.ta.mjs";
// export { RNC_InterfaceList, RNC_InterfaceList_iu /* IMPORTED_LONG_NAMED_BIT */, RNC_InterfaceList_iur /* IMPORTED_LONG_NAMED_BIT */, iur /* IMPORTED_SHORT_NAMED_BIT */, RNC_InterfaceList_iub /* IMPORTED_LONG_NAMED_BIT */, iub /* IMPORTED_SHORT_NAMED_BIT */, RNC_InterfaceList_uu /* IMPORTED_LONG_NAMED_BIT */, _decode_RNC_InterfaceList, _encode_RNC_InterfaceList } from "../MAP-OM-DataTypes/RNC-InterfaceList.ta.mjs";
import { BMSC_InterfaceList, BMSC_InterfaceList_gmb /* IMPORTED_LONG_NAMED_BIT */, _decode_BMSC_InterfaceList, _encode_BMSC_InterfaceList } from "../MAP-OM-DataTypes/BMSC-InterfaceList.ta.mjs";
// export { BMSC_InterfaceList, BMSC_InterfaceList_gmb /* IMPORTED_LONG_NAMED_BIT */, _decode_BMSC_InterfaceList, _encode_BMSC_InterfaceList } from "../MAP-OM-DataTypes/BMSC-InterfaceList.ta.mjs";
import { MME_InterfaceList, MME_InterfaceList_s1_mme /* IMPORTED_LONG_NAMED_BIT */, MME_InterfaceList_s3 /* IMPORTED_LONG_NAMED_BIT */, MME_InterfaceList_s6a /* IMPORTED_LONG_NAMED_BIT */, s6a /* IMPORTED_SHORT_NAMED_BIT */, MME_InterfaceList_s10 /* IMPORTED_LONG_NAMED_BIT */, s10 /* IMPORTED_SHORT_NAMED_BIT */, MME_InterfaceList_s11 /* IMPORTED_LONG_NAMED_BIT */, _decode_MME_InterfaceList, _encode_MME_InterfaceList } from "../MAP-OM-DataTypes/MME-InterfaceList.ta.mjs";
// export { MME_InterfaceList, MME_InterfaceList_s1_mme /* IMPORTED_LONG_NAMED_BIT */, MME_InterfaceList_s3 /* IMPORTED_LONG_NAMED_BIT */, MME_InterfaceList_s6a /* IMPORTED_LONG_NAMED_BIT */, s6a /* IMPORTED_SHORT_NAMED_BIT */, MME_InterfaceList_s10 /* IMPORTED_LONG_NAMED_BIT */, s10 /* IMPORTED_SHORT_NAMED_BIT */, MME_InterfaceList_s11 /* IMPORTED_LONG_NAMED_BIT */, _decode_MME_InterfaceList, _encode_MME_InterfaceList } from "../MAP-OM-DataTypes/MME-InterfaceList.ta.mjs";
import { SGW_InterfaceList, SGW_InterfaceList_s4 /* IMPORTED_LONG_NAMED_BIT */, SGW_InterfaceList_s5 /* IMPORTED_LONG_NAMED_BIT */, SGW_InterfaceList_s8b /* IMPORTED_LONG_NAMED_BIT */, SGW_InterfaceList_s11 /* IMPORTED_LONG_NAMED_BIT */, SGW_InterfaceList_gxc /* IMPORTED_LONG_NAMED_BIT */, gxc /* IMPORTED_SHORT_NAMED_BIT */, _decode_SGW_InterfaceList, _encode_SGW_InterfaceList } from "../MAP-OM-DataTypes/SGW-InterfaceList.ta.mjs";
// export { SGW_InterfaceList, SGW_InterfaceList_s4 /* IMPORTED_LONG_NAMED_BIT */, SGW_InterfaceList_s5 /* IMPORTED_LONG_NAMED_BIT */, SGW_InterfaceList_s8b /* IMPORTED_LONG_NAMED_BIT */, SGW_InterfaceList_s11 /* IMPORTED_LONG_NAMED_BIT */, SGW_InterfaceList_gxc /* IMPORTED_LONG_NAMED_BIT */, gxc /* IMPORTED_SHORT_NAMED_BIT */, _decode_SGW_InterfaceList, _encode_SGW_InterfaceList } from "../MAP-OM-DataTypes/SGW-InterfaceList.ta.mjs";
import { PGW_InterfaceList, PGW_InterfaceList_s2a /* IMPORTED_LONG_NAMED_BIT */, s2a /* IMPORTED_SHORT_NAMED_BIT */, PGW_InterfaceList_s2b /* IMPORTED_LONG_NAMED_BIT */, s2b /* IMPORTED_SHORT_NAMED_BIT */, PGW_InterfaceList_s2c /* IMPORTED_LONG_NAMED_BIT */, s2c /* IMPORTED_SHORT_NAMED_BIT */, PGW_InterfaceList_s5 /* IMPORTED_LONG_NAMED_BIT */, PGW_InterfaceList_s6b /* IMPORTED_LONG_NAMED_BIT */, s6b /* IMPORTED_SHORT_NAMED_BIT */, PGW_InterfaceList_gx /* IMPORTED_LONG_NAMED_BIT */, gx /* IMPORTED_SHORT_NAMED_BIT */, PGW_InterfaceList_s8b /* IMPORTED_LONG_NAMED_BIT */, PGW_InterfaceList_sgi /* IMPORTED_LONG_NAMED_BIT */, sgi /* IMPORTED_SHORT_NAMED_BIT */, _decode_PGW_InterfaceList, _encode_PGW_InterfaceList } from "../MAP-OM-DataTypes/PGW-InterfaceList.ta.mjs";
// export { PGW_InterfaceList, PGW_InterfaceList_s2a /* IMPORTED_LONG_NAMED_BIT */, s2a /* IMPORTED_SHORT_NAMED_BIT */, PGW_InterfaceList_s2b /* IMPORTED_LONG_NAMED_BIT */, s2b /* IMPORTED_SHORT_NAMED_BIT */, PGW_InterfaceList_s2c /* IMPORTED_LONG_NAMED_BIT */, s2c /* IMPORTED_SHORT_NAMED_BIT */, PGW_InterfaceList_s5 /* IMPORTED_LONG_NAMED_BIT */, PGW_InterfaceList_s6b /* IMPORTED_LONG_NAMED_BIT */, s6b /* IMPORTED_SHORT_NAMED_BIT */, PGW_InterfaceList_gx /* IMPORTED_LONG_NAMED_BIT */, gx /* IMPORTED_SHORT_NAMED_BIT */, PGW_InterfaceList_s8b /* IMPORTED_LONG_NAMED_BIT */, PGW_InterfaceList_sgi /* IMPORTED_LONG_NAMED_BIT */, sgi /* IMPORTED_SHORT_NAMED_BIT */, _decode_PGW_InterfaceList, _encode_PGW_InterfaceList } from "../MAP-OM-DataTypes/PGW-InterfaceList.ta.mjs";
import { ENB_InterfaceList, ENB_InterfaceList_s1_mme /* IMPORTED_LONG_NAMED_BIT */, ENB_InterfaceList_x2 /* IMPORTED_LONG_NAMED_BIT */, x2 /* IMPORTED_SHORT_NAMED_BIT */, ENB_InterfaceList_uu /* IMPORTED_LONG_NAMED_BIT */, _decode_ENB_InterfaceList, _encode_ENB_InterfaceList } from "../MAP-OM-DataTypes/ENB-InterfaceList.ta.mjs";
// export { ENB_InterfaceList, ENB_InterfaceList_s1_mme /* IMPORTED_LONG_NAMED_BIT */, ENB_InterfaceList_x2 /* IMPORTED_LONG_NAMED_BIT */, x2 /* IMPORTED_SHORT_NAMED_BIT */, ENB_InterfaceList_uu /* IMPORTED_LONG_NAMED_BIT */, _decode_ENB_InterfaceList, _encode_ENB_InterfaceList } from "../MAP-OM-DataTypes/ENB-InterfaceList.ta.mjs";


/**
 * @summary TraceInterfaceList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceInterfaceList ::= SEQUENCE {
 *     msc-s-List    [0] MSC-S-InterfaceList    OPTIONAL,
 *     mgw-List    [1] MGW-InterfaceList    OPTIONAL,
 *     sgsn-List    [2] SGSN-InterfaceList    OPTIONAL,
 *     ggsn-List    [3] GGSN-InterfaceList    OPTIONAL,
 *     rnc-List    [4] RNC-InterfaceList    OPTIONAL,
 *     bmsc-List    [5] BMSC-InterfaceList    OPTIONAL,
 *     ...,
 *     mme-List    [6] MME-InterfaceList    OPTIONAL,
 *     sgw-List    [7] SGW-InterfaceList    OPTIONAL,
 *     pgw-List    [8] PGW-InterfaceList    OPTIONAL,
 *     eNB-List    [9] ENB-InterfaceList    OPTIONAL}
 * ```
 * 
 * @class
 */
export
class TraceInterfaceList {
    constructor (
        /**
         * @summary `msc_s_List`.
         * @public
         * @readonly
         */
        readonly msc_s_List: OPTIONAL<MSC_S_InterfaceList>,
        /**
         * @summary `mgw_List`.
         * @public
         * @readonly
         */
        readonly mgw_List: OPTIONAL<MGW_InterfaceList>,
        /**
         * @summary `sgsn_List`.
         * @public
         * @readonly
         */
        readonly sgsn_List: OPTIONAL<SGSN_InterfaceList>,
        /**
         * @summary `ggsn_List`.
         * @public
         * @readonly
         */
        readonly ggsn_List: OPTIONAL<GGSN_InterfaceList>,
        /**
         * @summary `rnc_List`.
         * @public
         * @readonly
         */
        readonly rnc_List: OPTIONAL<RNC_InterfaceList>,
        /**
         * @summary `bmsc_List`.
         * @public
         * @readonly
         */
        readonly bmsc_List: OPTIONAL<BMSC_InterfaceList>,
        /**
         * @summary `mme_List`.
         * @public
         * @readonly
         */
        readonly mme_List: OPTIONAL<MME_InterfaceList>,
        /**
         * @summary `sgw_List`.
         * @public
         * @readonly
         */
        readonly sgw_List: OPTIONAL<SGW_InterfaceList>,
        /**
         * @summary `pgw_List`.
         * @public
         * @readonly
         */
        readonly pgw_List: OPTIONAL<PGW_InterfaceList>,
        /**
         * @summary `eNB_List`.
         * @public
         * @readonly
         */
        readonly eNB_List: OPTIONAL<ENB_InterfaceList>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TraceInterfaceList
     * @description
     * 
     * This takes an `object` and converts it to a `TraceInterfaceList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TraceInterfaceList`.
     * @returns {TraceInterfaceList}
     */
    public static _from_object (_o: { [_K in keyof (TraceInterfaceList)]: (TraceInterfaceList)[_K] }): TraceInterfaceList {
        return new TraceInterfaceList(_o.msc_s_List, _o.mgw_List, _o.sgsn_List, _o.ggsn_List, _o.rnc_List, _o.bmsc_List, _o.mme_List, _o.sgw_List, _o.pgw_List, _o.eNB_List, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TraceInterfaceList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TraceInterfaceList: $.ComponentSpec[] = [
    new $.ComponentSpec("msc-s-List", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("mgw-List", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("sgsn-List", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("ggsn-List", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("rnc-List", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("bmsc-List", true, $.hasTag(_TagClass.context, 5), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of TraceInterfaceList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TraceInterfaceList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TraceInterfaceList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TraceInterfaceList: $.ComponentSpec[] = [
    new $.ComponentSpec("mme-List", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("sgw-List", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("pgw-List", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("eNB-List", true, $.hasTag(_TagClass.context, 9), undefined, undefined)
];

let _cached_decoder_for_TraceInterfaceList: $.ASN1Decoder<TraceInterfaceList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TraceInterfaceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TraceInterfaceList (el: _Element): TraceInterfaceList {
    if (!_cached_decoder_for_TraceInterfaceList) { _cached_decoder_for_TraceInterfaceList = function (el: _Element): TraceInterfaceList {
    let msc_s_List: OPTIONAL<MSC_S_InterfaceList>;
    let mgw_List: OPTIONAL<MGW_InterfaceList>;
    let sgsn_List: OPTIONAL<SGSN_InterfaceList>;
    let ggsn_List: OPTIONAL<GGSN_InterfaceList>;
    let rnc_List: OPTIONAL<RNC_InterfaceList>;
    let bmsc_List: OPTIONAL<BMSC_InterfaceList>;
    let mme_List: OPTIONAL<MME_InterfaceList>;
    let sgw_List: OPTIONAL<SGW_InterfaceList>;
    let pgw_List: OPTIONAL<PGW_InterfaceList>;
    let eNB_List: OPTIONAL<ENB_InterfaceList>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "msc-s-List": (_el: _Element): void => { msc_s_List = $._decode_implicit<MSC_S_InterfaceList>(() => _decode_MSC_S_InterfaceList)(_el); },
        "mgw-List": (_el: _Element): void => { mgw_List = $._decode_implicit<MGW_InterfaceList>(() => _decode_MGW_InterfaceList)(_el); },
        "sgsn-List": (_el: _Element): void => { sgsn_List = $._decode_implicit<SGSN_InterfaceList>(() => _decode_SGSN_InterfaceList)(_el); },
        "ggsn-List": (_el: _Element): void => { ggsn_List = $._decode_implicit<GGSN_InterfaceList>(() => _decode_GGSN_InterfaceList)(_el); },
        "rnc-List": (_el: _Element): void => { rnc_List = $._decode_implicit<RNC_InterfaceList>(() => _decode_RNC_InterfaceList)(_el); },
        "bmsc-List": (_el: _Element): void => { bmsc_List = $._decode_implicit<BMSC_InterfaceList>(() => _decode_BMSC_InterfaceList)(_el); },
        "mme-List": (_el: _Element): void => { mme_List = $._decode_implicit<MME_InterfaceList>(() => _decode_MME_InterfaceList)(_el); },
        "sgw-List": (_el: _Element): void => { sgw_List = $._decode_implicit<SGW_InterfaceList>(() => _decode_SGW_InterfaceList)(_el); },
        "pgw-List": (_el: _Element): void => { pgw_List = $._decode_implicit<PGW_InterfaceList>(() => _decode_PGW_InterfaceList)(_el); },
        "eNB-List": (_el: _Element): void => { eNB_List = $._decode_implicit<ENB_InterfaceList>(() => _decode_ENB_InterfaceList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TraceInterfaceList,
        _extension_additions_list_spec_for_TraceInterfaceList,
        _root_component_type_list_2_spec_for_TraceInterfaceList,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TraceInterfaceList(
        msc_s_List,
        mgw_List,
        sgsn_List,
        ggsn_List,
        rnc_List,
        bmsc_List,
        mme_List,
        sgw_List,
        pgw_List,
        eNB_List,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TraceInterfaceList(el);
}

let _cached_encoder_for_TraceInterfaceList: $.ASN1Encoder<TraceInterfaceList> | null = null;

/**
 * @summary Encodes a(n) TraceInterfaceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceInterfaceList, encoded as an ASN.1 Element.
 */
export
function _encode_TraceInterfaceList (value: TraceInterfaceList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TraceInterfaceList) { _cached_encoder_for_TraceInterfaceList = function (value: TraceInterfaceList, elGetter: $.ASN1Encoder<TraceInterfaceList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.msc_s_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_MSC_S_InterfaceList, $.BER)(value.msc_s_List, $.BER)),
            /* IF_ABSENT  */ ((value.mgw_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MGW_InterfaceList, $.BER)(value.mgw_List, $.BER)),
            /* IF_ABSENT  */ ((value.sgsn_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SGSN_InterfaceList, $.BER)(value.sgsn_List, $.BER)),
            /* IF_ABSENT  */ ((value.ggsn_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_GGSN_InterfaceList, $.BER)(value.ggsn_List, $.BER)),
            /* IF_ABSENT  */ ((value.rnc_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_RNC_InterfaceList, $.BER)(value.rnc_List, $.BER)),
            /* IF_ABSENT  */ ((value.bmsc_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_BMSC_InterfaceList, $.BER)(value.bmsc_List, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.mme_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_MME_InterfaceList, $.BER)(value.mme_List, $.BER)),
            /* IF_ABSENT  */ ((value.sgw_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_SGW_InterfaceList, $.BER)(value.sgw_List, $.BER)),
            /* IF_ABSENT  */ ((value.pgw_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_PGW_InterfaceList, $.BER)(value.pgw_List, $.BER)),
            /* IF_ABSENT  */ ((value.eNB_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_ENB_InterfaceList, $.BER)(value.eNB_List, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TraceInterfaceList(value, elGetter);
}


/* eslint-enable */
