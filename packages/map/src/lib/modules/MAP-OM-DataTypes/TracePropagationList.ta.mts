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
import { TraceReference, _decode_TraceReference, _encode_TraceReference } from "../MAP-OM-DataTypes/TraceReference.ta.mjs";
// export { TraceReference, _decode_TraceReference, _encode_TraceReference } from "../MAP-OM-DataTypes/TraceReference.ta.mjs";
import { TraceType, _decode_TraceType, _encode_TraceType } from "../MAP-OM-DataTypes/TraceType.ta.mjs";
// export { TraceType, _decode_TraceType, _encode_TraceType } from "../MAP-OM-DataTypes/TraceType.ta.mjs";
import { TraceReference2, _decode_TraceReference2, _encode_TraceReference2 } from "../MAP-OM-DataTypes/TraceReference2.ta.mjs";
// export { TraceReference2, _decode_TraceReference2, _encode_TraceReference2 } from "../MAP-OM-DataTypes/TraceReference2.ta.mjs";
import { TraceRecordingSessionReference, _decode_TraceRecordingSessionReference, _encode_TraceRecordingSessionReference } from "../MAP-OM-DataTypes/TraceRecordingSessionReference.ta.mjs";
// export { TraceRecordingSessionReference, _decode_TraceRecordingSessionReference, _encode_TraceRecordingSessionReference } from "../MAP-OM-DataTypes/TraceRecordingSessionReference.ta.mjs";
import { TraceDepth, _enum_for_TraceDepth, TraceDepth_minimum /* IMPORTED_LONG_ENUMERATION_ITEM */, minimum /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDepth_medium /* IMPORTED_LONG_ENUMERATION_ITEM */, medium /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDepth_maximum /* IMPORTED_LONG_ENUMERATION_ITEM */, maximum /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TraceDepth, _encode_TraceDepth } from "../MAP-OM-DataTypes/TraceDepth.ta.mjs";
// export { TraceDepth, _enum_for_TraceDepth, TraceDepth_minimum /* IMPORTED_LONG_ENUMERATION_ITEM */, minimum /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDepth_medium /* IMPORTED_LONG_ENUMERATION_ITEM */, medium /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDepth_maximum /* IMPORTED_LONG_ENUMERATION_ITEM */, maximum /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TraceDepth, _encode_TraceDepth } from "../MAP-OM-DataTypes/TraceDepth.ta.mjs";
import { RNC_InterfaceList, RNC_InterfaceList_iu /* IMPORTED_LONG_NAMED_BIT */, RNC_InterfaceList_iur /* IMPORTED_LONG_NAMED_BIT */, iur /* IMPORTED_SHORT_NAMED_BIT */, RNC_InterfaceList_iub /* IMPORTED_LONG_NAMED_BIT */, iub /* IMPORTED_SHORT_NAMED_BIT */, RNC_InterfaceList_uu /* IMPORTED_LONG_NAMED_BIT */, uu /* IMPORTED_SHORT_NAMED_BIT */, _decode_RNC_InterfaceList, _encode_RNC_InterfaceList } from "../MAP-OM-DataTypes/RNC-InterfaceList.ta.mjs";
// export { RNC_InterfaceList, RNC_InterfaceList_iu /* IMPORTED_LONG_NAMED_BIT */, RNC_InterfaceList_iur /* IMPORTED_LONG_NAMED_BIT */, iur /* IMPORTED_SHORT_NAMED_BIT */, RNC_InterfaceList_iub /* IMPORTED_LONG_NAMED_BIT */, iub /* IMPORTED_SHORT_NAMED_BIT */, RNC_InterfaceList_uu /* IMPORTED_LONG_NAMED_BIT */, uu /* IMPORTED_SHORT_NAMED_BIT */, _decode_RNC_InterfaceList, _encode_RNC_InterfaceList } from "../MAP-OM-DataTypes/RNC-InterfaceList.ta.mjs";
import { MSC_S_InterfaceList, MSC_S_InterfaceList_a /* IMPORTED_LONG_NAMED_BIT */, a /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_iu /* IMPORTED_LONG_NAMED_BIT */, MSC_S_InterfaceList_mc /* IMPORTED_LONG_NAMED_BIT */, MSC_S_InterfaceList_map_g /* IMPORTED_LONG_NAMED_BIT */, map_g /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_map_b /* IMPORTED_LONG_NAMED_BIT */, map_b /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_map_e /* IMPORTED_LONG_NAMED_BIT */, map_e /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_map_f /* IMPORTED_LONG_NAMED_BIT */, map_f /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_cap /* IMPORTED_LONG_NAMED_BIT */, cap /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_map_d /* IMPORTED_LONG_NAMED_BIT */, map_d /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_map_c /* IMPORTED_LONG_NAMED_BIT */, map_c /* IMPORTED_SHORT_NAMED_BIT */, _decode_MSC_S_InterfaceList, _encode_MSC_S_InterfaceList } from "../MAP-OM-DataTypes/MSC-S-InterfaceList.ta.mjs";
// export { MSC_S_InterfaceList, MSC_S_InterfaceList_a /* IMPORTED_LONG_NAMED_BIT */, a /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_iu /* IMPORTED_LONG_NAMED_BIT */, MSC_S_InterfaceList_mc /* IMPORTED_LONG_NAMED_BIT */, MSC_S_InterfaceList_map_g /* IMPORTED_LONG_NAMED_BIT */, map_g /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_map_b /* IMPORTED_LONG_NAMED_BIT */, map_b /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_map_e /* IMPORTED_LONG_NAMED_BIT */, map_e /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_map_f /* IMPORTED_LONG_NAMED_BIT */, map_f /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_cap /* IMPORTED_LONG_NAMED_BIT */, cap /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_map_d /* IMPORTED_LONG_NAMED_BIT */, map_d /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_InterfaceList_map_c /* IMPORTED_LONG_NAMED_BIT */, map_c /* IMPORTED_SHORT_NAMED_BIT */, _decode_MSC_S_InterfaceList, _encode_MSC_S_InterfaceList } from "../MAP-OM-DataTypes/MSC-S-InterfaceList.ta.mjs";
import { MSC_S_EventList, MSC_S_EventList_mo_mtCall /* IMPORTED_LONG_NAMED_BIT */, mo_mtCall /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_EventList_mo_mt_sms /* IMPORTED_LONG_NAMED_BIT */, mo_mt_sms /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_EventList_lu_imsiAttach_imsiDetach /* IMPORTED_LONG_NAMED_BIT */, lu_imsiAttach_imsiDetach /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_EventList_handovers /* IMPORTED_LONG_NAMED_BIT */, handovers /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_EventList_ss /* IMPORTED_LONG_NAMED_BIT */, ss /* IMPORTED_SHORT_NAMED_BIT */, _decode_MSC_S_EventList, _encode_MSC_S_EventList } from "../MAP-OM-DataTypes/MSC-S-EventList.ta.mjs";
// export { MSC_S_EventList, MSC_S_EventList_mo_mtCall /* IMPORTED_LONG_NAMED_BIT */, mo_mtCall /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_EventList_mo_mt_sms /* IMPORTED_LONG_NAMED_BIT */, mo_mt_sms /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_EventList_lu_imsiAttach_imsiDetach /* IMPORTED_LONG_NAMED_BIT */, lu_imsiAttach_imsiDetach /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_EventList_handovers /* IMPORTED_LONG_NAMED_BIT */, handovers /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_EventList_ss /* IMPORTED_LONG_NAMED_BIT */, ss /* IMPORTED_SHORT_NAMED_BIT */, _decode_MSC_S_EventList, _encode_MSC_S_EventList } from "../MAP-OM-DataTypes/MSC-S-EventList.ta.mjs";
import { MGW_InterfaceList, MGW_InterfaceList_mc /* IMPORTED_LONG_NAMED_BIT */, MGW_InterfaceList_nb_up /* IMPORTED_LONG_NAMED_BIT */, nb_up /* IMPORTED_SHORT_NAMED_BIT */, MGW_InterfaceList_iu_up /* IMPORTED_LONG_NAMED_BIT */, iu_up /* IMPORTED_SHORT_NAMED_BIT */, _decode_MGW_InterfaceList, _encode_MGW_InterfaceList } from "../MAP-OM-DataTypes/MGW-InterfaceList.ta.mjs";
// export { MGW_InterfaceList, MGW_InterfaceList_mc /* IMPORTED_LONG_NAMED_BIT */, MGW_InterfaceList_nb_up /* IMPORTED_LONG_NAMED_BIT */, nb_up /* IMPORTED_SHORT_NAMED_BIT */, MGW_InterfaceList_iu_up /* IMPORTED_LONG_NAMED_BIT */, iu_up /* IMPORTED_SHORT_NAMED_BIT */, _decode_MGW_InterfaceList, _encode_MGW_InterfaceList } from "../MAP-OM-DataTypes/MGW-InterfaceList.ta.mjs";
import { MGW_EventList, MGW_EventList_context /* IMPORTED_LONG_NAMED_BIT */, context /* IMPORTED_SHORT_NAMED_BIT */, _decode_MGW_EventList, _encode_MGW_EventList } from "../MAP-OM-DataTypes/MGW-EventList.ta.mjs";
// export { MGW_EventList, MGW_EventList_context /* IMPORTED_LONG_NAMED_BIT */, context /* IMPORTED_SHORT_NAMED_BIT */, _decode_MGW_EventList, _encode_MGW_EventList } from "../MAP-OM-DataTypes/MGW-EventList.ta.mjs";
import { TraceDepthExtension, _enum_for_TraceDepthExtension, TraceDepthExtension_minimumWithoutVendorSpecificExtension /* IMPORTED_LONG_ENUMERATION_ITEM */, minimumWithoutVendorSpecificExtension /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDepthExtension_mediumWithoutVendorSpecificExtension /* IMPORTED_LONG_ENUMERATION_ITEM */, mediumWithoutVendorSpecificExtension /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDepthExtension_maximumWithoutVendorSpecificExtension /* IMPORTED_LONG_ENUMERATION_ITEM */, maximumWithoutVendorSpecificExtension /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TraceDepthExtension, _encode_TraceDepthExtension } from "../MAP-OM-DataTypes/TraceDepthExtension.ta.mjs";
// export { TraceDepthExtension, _enum_for_TraceDepthExtension, TraceDepthExtension_minimumWithoutVendorSpecificExtension /* IMPORTED_LONG_ENUMERATION_ITEM */, minimumWithoutVendorSpecificExtension /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDepthExtension_mediumWithoutVendorSpecificExtension /* IMPORTED_LONG_ENUMERATION_ITEM */, mediumWithoutVendorSpecificExtension /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDepthExtension_maximumWithoutVendorSpecificExtension /* IMPORTED_LONG_ENUMERATION_ITEM */, maximumWithoutVendorSpecificExtension /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TraceDepthExtension, _encode_TraceDepthExtension } from "../MAP-OM-DataTypes/TraceDepthExtension.ta.mjs";


/**
 * @summary TracePropagationList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TracePropagationList ::= SEQUENCE {
 *     traceReference    [0] TraceReference    OPTIONAL,
 *     traceType    [1] TraceType    OPTIONAL,
 *     traceReference2    [2] TraceReference2    OPTIONAL,
 *     traceRecordingSessionReference    [3] TraceRecordingSessionReference OPTIONAL,
 *     rnc-TraceDepth    [4] TraceDepth    OPTIONAL,
 *     rnc-InterfaceList    [5] RNC-InterfaceList    OPTIONAL,
 *     msc-s-TraceDepth    [6] TraceDepth    OPTIONAL,
 *     msc-s-InterfaceList    [7] MSC-S-InterfaceList    OPTIONAL,
 *     msc-s-EventList    [8] MSC-S-EventList    OPTIONAL,
 *     mgw-TraceDepth    [9] TraceDepth    OPTIONAL,
 *     mgw-InterfaceList    [10] MGW-InterfaceList    OPTIONAL,
 *     mgw-EventList    [11] MGW-EventList    OPTIONAL,
 *     ...,
 *     rnc-TraceDepthExtension    [12] TraceDepthExtension    OPTIONAL,
 *     msc-s-TraceDepthExtension    [13] TraceDepthExtension    OPTIONAL,
 *     mgw-TraceDepthExtension    [14] TraceDepthExtension    OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TracePropagationList {
    constructor (
        /**
         * @summary `traceReference`.
         * @public
         * @readonly
         */
        readonly traceReference: OPTIONAL<TraceReference>,
        /**
         * @summary `traceType`.
         * @public
         * @readonly
         */
        readonly traceType: OPTIONAL<TraceType>,
        /**
         * @summary `traceReference2`.
         * @public
         * @readonly
         */
        readonly traceReference2: OPTIONAL<TraceReference2>,
        /**
         * @summary `traceRecordingSessionReference`.
         * @public
         * @readonly
         */
        readonly traceRecordingSessionReference: OPTIONAL<TraceRecordingSessionReference>,
        /**
         * @summary `rnc_TraceDepth`.
         * @public
         * @readonly
         */
        readonly rnc_TraceDepth: OPTIONAL<TraceDepth>,
        /**
         * @summary `rnc_InterfaceList`.
         * @public
         * @readonly
         */
        readonly rnc_InterfaceList: OPTIONAL<RNC_InterfaceList>,
        /**
         * @summary `msc_s_TraceDepth`.
         * @public
         * @readonly
         */
        readonly msc_s_TraceDepth: OPTIONAL<TraceDepth>,
        /**
         * @summary `msc_s_InterfaceList`.
         * @public
         * @readonly
         */
        readonly msc_s_InterfaceList: OPTIONAL<MSC_S_InterfaceList>,
        /**
         * @summary `msc_s_EventList`.
         * @public
         * @readonly
         */
        readonly msc_s_EventList: OPTIONAL<MSC_S_EventList>,
        /**
         * @summary `mgw_TraceDepth`.
         * @public
         * @readonly
         */
        readonly mgw_TraceDepth: OPTIONAL<TraceDepth>,
        /**
         * @summary `mgw_InterfaceList`.
         * @public
         * @readonly
         */
        readonly mgw_InterfaceList: OPTIONAL<MGW_InterfaceList>,
        /**
         * @summary `mgw_EventList`.
         * @public
         * @readonly
         */
        readonly mgw_EventList: OPTIONAL<MGW_EventList>,
        /**
         * @summary `rnc_TraceDepthExtension`.
         * @public
         * @readonly
         */
        readonly rnc_TraceDepthExtension: OPTIONAL<TraceDepthExtension>,
        /**
         * @summary `msc_s_TraceDepthExtension`.
         * @public
         * @readonly
         */
        readonly msc_s_TraceDepthExtension: OPTIONAL<TraceDepthExtension>,
        /**
         * @summary `mgw_TraceDepthExtension`.
         * @public
         * @readonly
         */
        readonly mgw_TraceDepthExtension: OPTIONAL<TraceDepthExtension>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TracePropagationList
     * @description
     * 
     * This takes an `object` and converts it to a `TracePropagationList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TracePropagationList`.
     * @returns {TracePropagationList}
     */
    public static _from_object (_o: { [_K in keyof (TracePropagationList)]: (TracePropagationList)[_K] }): TracePropagationList {
        return new TracePropagationList(_o.traceReference, _o.traceType, _o.traceReference2, _o.traceRecordingSessionReference, _o.rnc_TraceDepth, _o.rnc_InterfaceList, _o.msc_s_TraceDepth, _o.msc_s_InterfaceList, _o.msc_s_EventList, _o.mgw_TraceDepth, _o.mgw_InterfaceList, _o.mgw_EventList, _o.rnc_TraceDepthExtension, _o.msc_s_TraceDepthExtension, _o.mgw_TraceDepthExtension, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `rnc_TraceDepth`
         * @public
         * @static
         */

    public static _enum_for_rnc_TraceDepth = _enum_for_TraceDepth;        /**
         * @summary The enum used as the type of the component `msc_s_TraceDepth`
         * @public
         * @static
         */

    public static _enum_for_msc_s_TraceDepth = _enum_for_TraceDepth;        /**
         * @summary The enum used as the type of the component `mgw_TraceDepth`
         * @public
         * @static
         */

    public static _enum_for_mgw_TraceDepth = _enum_for_TraceDepth;        /**
         * @summary The enum used as the type of the component `rnc_TraceDepthExtension`
         * @public
         * @static
         */

    public static _enum_for_rnc_TraceDepthExtension = _enum_for_TraceDepthExtension;        /**
         * @summary The enum used as the type of the component `msc_s_TraceDepthExtension`
         * @public
         * @static
         */

    public static _enum_for_msc_s_TraceDepthExtension = _enum_for_TraceDepthExtension;        /**
         * @summary The enum used as the type of the component `mgw_TraceDepthExtension`
         * @public
         * @static
         */

    public static _enum_for_mgw_TraceDepthExtension = _enum_for_TraceDepthExtension;
}

/**
 * @summary The Leading Root Component Types of TracePropagationList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TracePropagationList: $.ComponentSpec[] = [
    new $.ComponentSpec("traceReference", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("traceType", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("traceReference2", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("traceRecordingSessionReference", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("rnc-TraceDepth", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("rnc-InterfaceList", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("msc-s-TraceDepth", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("msc-s-InterfaceList", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("msc-s-EventList", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("mgw-TraceDepth", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("mgw-InterfaceList", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("mgw-EventList", true, $.hasTag(_TagClass.context, 11), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of TracePropagationList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TracePropagationList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TracePropagationList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TracePropagationList: $.ComponentSpec[] = [
    new $.ComponentSpec("rnc-TraceDepthExtension", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("msc-s-TraceDepthExtension", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("mgw-TraceDepthExtension", true, $.hasTag(_TagClass.context, 14), undefined, undefined)
];

let _cached_decoder_for_TracePropagationList: $.ASN1Decoder<TracePropagationList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TracePropagationList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TracePropagationList (el: _Element): TracePropagationList {
    if (!_cached_decoder_for_TracePropagationList) { _cached_decoder_for_TracePropagationList = function (el: _Element): TracePropagationList {
    let traceReference: OPTIONAL<TraceReference>;
    let traceType: OPTIONAL<TraceType>;
    let traceReference2: OPTIONAL<TraceReference2>;
    let traceRecordingSessionReference: OPTIONAL<TraceRecordingSessionReference>;
    let rnc_TraceDepth: OPTIONAL<TraceDepth>;
    let rnc_InterfaceList: OPTIONAL<RNC_InterfaceList>;
    let msc_s_TraceDepth: OPTIONAL<TraceDepth>;
    let msc_s_InterfaceList: OPTIONAL<MSC_S_InterfaceList>;
    let msc_s_EventList: OPTIONAL<MSC_S_EventList>;
    let mgw_TraceDepth: OPTIONAL<TraceDepth>;
    let mgw_InterfaceList: OPTIONAL<MGW_InterfaceList>;
    let mgw_EventList: OPTIONAL<MGW_EventList>;
    let rnc_TraceDepthExtension: OPTIONAL<TraceDepthExtension>;
    let msc_s_TraceDepthExtension: OPTIONAL<TraceDepthExtension>;
    let mgw_TraceDepthExtension: OPTIONAL<TraceDepthExtension>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "traceReference": (_el: _Element): void => { traceReference = $._decode_implicit<TraceReference>(() => _decode_TraceReference)(_el); },
        "traceType": (_el: _Element): void => { traceType = $._decode_implicit<TraceType>(() => _decode_TraceType)(_el); },
        "traceReference2": (_el: _Element): void => { traceReference2 = $._decode_implicit<TraceReference2>(() => _decode_TraceReference2)(_el); },
        "traceRecordingSessionReference": (_el: _Element): void => { traceRecordingSessionReference = $._decode_implicit<TraceRecordingSessionReference>(() => _decode_TraceRecordingSessionReference)(_el); },
        "rnc-TraceDepth": (_el: _Element): void => { rnc_TraceDepth = $._decode_implicit<TraceDepth>(() => _decode_TraceDepth)(_el); },
        "rnc-InterfaceList": (_el: _Element): void => { rnc_InterfaceList = $._decode_implicit<RNC_InterfaceList>(() => _decode_RNC_InterfaceList)(_el); },
        "msc-s-TraceDepth": (_el: _Element): void => { msc_s_TraceDepth = $._decode_implicit<TraceDepth>(() => _decode_TraceDepth)(_el); },
        "msc-s-InterfaceList": (_el: _Element): void => { msc_s_InterfaceList = $._decode_implicit<MSC_S_InterfaceList>(() => _decode_MSC_S_InterfaceList)(_el); },
        "msc-s-EventList": (_el: _Element): void => { msc_s_EventList = $._decode_implicit<MSC_S_EventList>(() => _decode_MSC_S_EventList)(_el); },
        "mgw-TraceDepth": (_el: _Element): void => { mgw_TraceDepth = $._decode_implicit<TraceDepth>(() => _decode_TraceDepth)(_el); },
        "mgw-InterfaceList": (_el: _Element): void => { mgw_InterfaceList = $._decode_implicit<MGW_InterfaceList>(() => _decode_MGW_InterfaceList)(_el); },
        "mgw-EventList": (_el: _Element): void => { mgw_EventList = $._decode_implicit<MGW_EventList>(() => _decode_MGW_EventList)(_el); },
        "rnc-TraceDepthExtension": (_el: _Element): void => { rnc_TraceDepthExtension = $._decode_implicit<TraceDepthExtension>(() => _decode_TraceDepthExtension)(_el); },
        "msc-s-TraceDepthExtension": (_el: _Element): void => { msc_s_TraceDepthExtension = $._decode_implicit<TraceDepthExtension>(() => _decode_TraceDepthExtension)(_el); },
        "mgw-TraceDepthExtension": (_el: _Element): void => { mgw_TraceDepthExtension = $._decode_implicit<TraceDepthExtension>(() => _decode_TraceDepthExtension)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TracePropagationList,
        _extension_additions_list_spec_for_TracePropagationList,
        _root_component_type_list_2_spec_for_TracePropagationList,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TracePropagationList(
        traceReference,
        traceType,
        traceReference2,
        traceRecordingSessionReference,
        rnc_TraceDepth,
        rnc_InterfaceList,
        msc_s_TraceDepth,
        msc_s_InterfaceList,
        msc_s_EventList,
        mgw_TraceDepth,
        mgw_InterfaceList,
        mgw_EventList,
        rnc_TraceDepthExtension,
        msc_s_TraceDepthExtension,
        mgw_TraceDepthExtension,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TracePropagationList(el);
}

let _cached_encoder_for_TracePropagationList: $.ASN1Encoder<TracePropagationList> | null = null;

/**
 * @summary Encodes a(n) TracePropagationList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TracePropagationList, encoded as an ASN.1 Element.
 */
export
function _encode_TracePropagationList (value: TracePropagationList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TracePropagationList) { _cached_encoder_for_TracePropagationList = function (value: TracePropagationList, elGetter: $.ASN1Encoder<TracePropagationList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.traceReference === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_TraceReference, $.BER)(value.traceReference, $.BER)),
            /* IF_ABSENT  */ ((value.traceType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_TraceType, $.BER)(value.traceType, $.BER)),
            /* IF_ABSENT  */ ((value.traceReference2 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_TraceReference2, $.BER)(value.traceReference2, $.BER)),
            /* IF_ABSENT  */ ((value.traceRecordingSessionReference === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_TraceRecordingSessionReference, $.BER)(value.traceRecordingSessionReference, $.BER)),
            /* IF_ABSENT  */ ((value.rnc_TraceDepth === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_TraceDepth, $.BER)(value.rnc_TraceDepth, $.BER)),
            /* IF_ABSENT  */ ((value.rnc_InterfaceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_RNC_InterfaceList, $.BER)(value.rnc_InterfaceList, $.BER)),
            /* IF_ABSENT  */ ((value.msc_s_TraceDepth === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_TraceDepth, $.BER)(value.msc_s_TraceDepth, $.BER)),
            /* IF_ABSENT  */ ((value.msc_s_InterfaceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_MSC_S_InterfaceList, $.BER)(value.msc_s_InterfaceList, $.BER)),
            /* IF_ABSENT  */ ((value.msc_s_EventList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_MSC_S_EventList, $.BER)(value.msc_s_EventList, $.BER)),
            /* IF_ABSENT  */ ((value.mgw_TraceDepth === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_TraceDepth, $.BER)(value.mgw_TraceDepth, $.BER)),
            /* IF_ABSENT  */ ((value.mgw_InterfaceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_MGW_InterfaceList, $.BER)(value.mgw_InterfaceList, $.BER)),
            /* IF_ABSENT  */ ((value.mgw_EventList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_MGW_EventList, $.BER)(value.mgw_EventList, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.rnc_TraceDepthExtension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_TraceDepthExtension, $.BER)(value.rnc_TraceDepthExtension, $.BER)),
            /* IF_ABSENT  */ ((value.msc_s_TraceDepthExtension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_TraceDepthExtension, $.BER)(value.msc_s_TraceDepthExtension, $.BER)),
            /* IF_ABSENT  */ ((value.mgw_TraceDepthExtension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_TraceDepthExtension, $.BER)(value.mgw_TraceDepthExtension, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TracePropagationList(value, elGetter);
}


/* eslint-enable */
