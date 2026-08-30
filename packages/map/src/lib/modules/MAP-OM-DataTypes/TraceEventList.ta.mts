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
import { MSC_S_EventList, MSC_S_EventList_mo_mtCall /* IMPORTED_LONG_NAMED_BIT */, mo_mtCall /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_EventList_mo_mt_sms /* IMPORTED_LONG_NAMED_BIT */, MSC_S_EventList_lu_imsiAttach_imsiDetach /* IMPORTED_LONG_NAMED_BIT */, lu_imsiAttach_imsiDetach /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_EventList_handovers /* IMPORTED_LONG_NAMED_BIT */, handovers /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_EventList_ss /* IMPORTED_LONG_NAMED_BIT */, ss /* IMPORTED_SHORT_NAMED_BIT */, _decode_MSC_S_EventList, _encode_MSC_S_EventList } from "../MAP-OM-DataTypes/MSC-S-EventList.ta.mjs";
// export { MSC_S_EventList, MSC_S_EventList_mo_mtCall /* IMPORTED_LONG_NAMED_BIT */, mo_mtCall /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_EventList_mo_mt_sms /* IMPORTED_LONG_NAMED_BIT */, MSC_S_EventList_lu_imsiAttach_imsiDetach /* IMPORTED_LONG_NAMED_BIT */, lu_imsiAttach_imsiDetach /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_EventList_handovers /* IMPORTED_LONG_NAMED_BIT */, handovers /* IMPORTED_SHORT_NAMED_BIT */, MSC_S_EventList_ss /* IMPORTED_LONG_NAMED_BIT */, ss /* IMPORTED_SHORT_NAMED_BIT */, _decode_MSC_S_EventList, _encode_MSC_S_EventList } from "../MAP-OM-DataTypes/MSC-S-EventList.ta.mjs";
import { MGW_EventList, MGW_EventList_context /* IMPORTED_LONG_NAMED_BIT */, context /* IMPORTED_SHORT_NAMED_BIT */, _decode_MGW_EventList, _encode_MGW_EventList } from "../MAP-OM-DataTypes/MGW-EventList.ta.mjs";
// export { MGW_EventList, MGW_EventList_context /* IMPORTED_LONG_NAMED_BIT */, context /* IMPORTED_SHORT_NAMED_BIT */, _decode_MGW_EventList, _encode_MGW_EventList } from "../MAP-OM-DataTypes/MGW-EventList.ta.mjs";
import { SGSN_EventList, SGSN_EventList_pdpContext /* IMPORTED_LONG_NAMED_BIT */, SGSN_EventList_mo_mt_sms /* IMPORTED_LONG_NAMED_BIT */, SGSN_EventList_rau_gprsAttach_gprsDetach /* IMPORTED_LONG_NAMED_BIT */, rau_gprsAttach_gprsDetach /* IMPORTED_SHORT_NAMED_BIT */, SGSN_EventList_mbmsContext /* IMPORTED_LONG_NAMED_BIT */, _decode_SGSN_EventList, _encode_SGSN_EventList } from "../MAP-OM-DataTypes/SGSN-EventList.ta.mjs";
// export { SGSN_EventList, SGSN_EventList_pdpContext /* IMPORTED_LONG_NAMED_BIT */, SGSN_EventList_mo_mt_sms /* IMPORTED_LONG_NAMED_BIT */, SGSN_EventList_rau_gprsAttach_gprsDetach /* IMPORTED_LONG_NAMED_BIT */, rau_gprsAttach_gprsDetach /* IMPORTED_SHORT_NAMED_BIT */, SGSN_EventList_mbmsContext /* IMPORTED_LONG_NAMED_BIT */, _decode_SGSN_EventList, _encode_SGSN_EventList } from "../MAP-OM-DataTypes/SGSN-EventList.ta.mjs";
import { GGSN_EventList, GGSN_EventList_pdpContext /* IMPORTED_LONG_NAMED_BIT */, GGSN_EventList_mbmsContext /* IMPORTED_LONG_NAMED_BIT */, _decode_GGSN_EventList, _encode_GGSN_EventList } from "../MAP-OM-DataTypes/GGSN-EventList.ta.mjs";
// export { GGSN_EventList, GGSN_EventList_pdpContext /* IMPORTED_LONG_NAMED_BIT */, GGSN_EventList_mbmsContext /* IMPORTED_LONG_NAMED_BIT */, _decode_GGSN_EventList, _encode_GGSN_EventList } from "../MAP-OM-DataTypes/GGSN-EventList.ta.mjs";
import { BMSC_EventList, BMSC_EventList_mbmsMulticastServiceActivation /* IMPORTED_LONG_NAMED_BIT */, mbmsMulticastServiceActivation /* IMPORTED_SHORT_NAMED_BIT */, _decode_BMSC_EventList, _encode_BMSC_EventList } from "../MAP-OM-DataTypes/BMSC-EventList.ta.mjs";
// export { BMSC_EventList, BMSC_EventList_mbmsMulticastServiceActivation /* IMPORTED_LONG_NAMED_BIT */, mbmsMulticastServiceActivation /* IMPORTED_SHORT_NAMED_BIT */, _decode_BMSC_EventList, _encode_BMSC_EventList } from "../MAP-OM-DataTypes/BMSC-EventList.ta.mjs";
import { MME_EventList, MME_EventList_ue_initiatedPDNconectivityRequest /* IMPORTED_LONG_NAMED_BIT */, ue_initiatedPDNconectivityRequest /* IMPORTED_SHORT_NAMED_BIT */, MME_EventList_serviceRequestts /* IMPORTED_LONG_NAMED_BIT */, serviceRequestts /* IMPORTED_SHORT_NAMED_BIT */, MME_EventList_initialAttachTrackingAreaUpdateDetach /* IMPORTED_LONG_NAMED_BIT */, initialAttachTrackingAreaUpdateDetach /* IMPORTED_SHORT_NAMED_BIT */, MME_EventList_ue_initiatedPDNdisconnection /* IMPORTED_LONG_NAMED_BIT */, ue_initiatedPDNdisconnection /* IMPORTED_SHORT_NAMED_BIT */, MME_EventList_bearerActivationModificationDeletion /* IMPORTED_LONG_NAMED_BIT */, MME_EventList_handover /* IMPORTED_LONG_NAMED_BIT */, handover /* IMPORTED_SHORT_NAMED_BIT */, _decode_MME_EventList, _encode_MME_EventList } from "../MAP-OM-DataTypes/MME-EventList.ta.mjs";
// export { MME_EventList, MME_EventList_ue_initiatedPDNconectivityRequest /* IMPORTED_LONG_NAMED_BIT */, ue_initiatedPDNconectivityRequest /* IMPORTED_SHORT_NAMED_BIT */, MME_EventList_serviceRequestts /* IMPORTED_LONG_NAMED_BIT */, serviceRequestts /* IMPORTED_SHORT_NAMED_BIT */, MME_EventList_initialAttachTrackingAreaUpdateDetach /* IMPORTED_LONG_NAMED_BIT */, initialAttachTrackingAreaUpdateDetach /* IMPORTED_SHORT_NAMED_BIT */, MME_EventList_ue_initiatedPDNdisconnection /* IMPORTED_LONG_NAMED_BIT */, ue_initiatedPDNdisconnection /* IMPORTED_SHORT_NAMED_BIT */, MME_EventList_bearerActivationModificationDeletion /* IMPORTED_LONG_NAMED_BIT */, MME_EventList_handover /* IMPORTED_LONG_NAMED_BIT */, handover /* IMPORTED_SHORT_NAMED_BIT */, _decode_MME_EventList, _encode_MME_EventList } from "../MAP-OM-DataTypes/MME-EventList.ta.mjs";
import { SGW_EventList, SGW_EventList_pdn_connectionCreation /* IMPORTED_LONG_NAMED_BIT */, SGW_EventList_pdn_connectionTermination /* IMPORTED_LONG_NAMED_BIT */, SGW_EventList_bearerActivationModificationDeletion /* IMPORTED_LONG_NAMED_BIT */, _decode_SGW_EventList, _encode_SGW_EventList } from "../MAP-OM-DataTypes/SGW-EventList.ta.mjs";
// export { SGW_EventList, SGW_EventList_pdn_connectionCreation /* IMPORTED_LONG_NAMED_BIT */, SGW_EventList_pdn_connectionTermination /* IMPORTED_LONG_NAMED_BIT */, SGW_EventList_bearerActivationModificationDeletion /* IMPORTED_LONG_NAMED_BIT */, _decode_SGW_EventList, _encode_SGW_EventList } from "../MAP-OM-DataTypes/SGW-EventList.ta.mjs";
import { PGW_EventList, PGW_EventList_pdn_connectionCreation /* IMPORTED_LONG_NAMED_BIT */, PGW_EventList_pdn_connectionTermination /* IMPORTED_LONG_NAMED_BIT */, PGW_EventList_bearerActivationModificationDeletion /* IMPORTED_LONG_NAMED_BIT */, _decode_PGW_EventList, _encode_PGW_EventList } from "../MAP-OM-DataTypes/PGW-EventList.ta.mjs";
// export { PGW_EventList, PGW_EventList_pdn_connectionCreation /* IMPORTED_LONG_NAMED_BIT */, PGW_EventList_pdn_connectionTermination /* IMPORTED_LONG_NAMED_BIT */, PGW_EventList_bearerActivationModificationDeletion /* IMPORTED_LONG_NAMED_BIT */, _decode_PGW_EventList, _encode_PGW_EventList } from "../MAP-OM-DataTypes/PGW-EventList.ta.mjs";


/**
 * @summary TraceEventList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceEventList ::= SEQUENCE {
 *     msc-s-List    [0] MSC-S-EventList    OPTIONAL,
 *     mgw-List    [1] MGW-EventList    OPTIONAL,
 *     sgsn-List    [2] SGSN-EventList    OPTIONAL,
 *     ggsn-List    [3] GGSN-EventList    OPTIONAL,
 *     bmsc-List    [4] BMSC-EventList    OPTIONAL,
 *     ...,
 *     mme-List    [5] MME-EventList    OPTIONAL,
 *     sgw-List    [6] SGW-EventList    OPTIONAL,
 *     pgw-List    [7] PGW-EventList    OPTIONAL}
 * ```
 * 
 * @class
 */
export
class TraceEventList {
    constructor (
        /**
         * @summary `msc_s_List`.
         * @public
         * @readonly
         */
        readonly msc_s_List: OPTIONAL<MSC_S_EventList>,
        /**
         * @summary `mgw_List`.
         * @public
         * @readonly
         */
        readonly mgw_List: OPTIONAL<MGW_EventList>,
        /**
         * @summary `sgsn_List`.
         * @public
         * @readonly
         */
        readonly sgsn_List: OPTIONAL<SGSN_EventList>,
        /**
         * @summary `ggsn_List`.
         * @public
         * @readonly
         */
        readonly ggsn_List: OPTIONAL<GGSN_EventList>,
        /**
         * @summary `bmsc_List`.
         * @public
         * @readonly
         */
        readonly bmsc_List: OPTIONAL<BMSC_EventList>,
        /**
         * @summary `mme_List`.
         * @public
         * @readonly
         */
        readonly mme_List: OPTIONAL<MME_EventList>,
        /**
         * @summary `sgw_List`.
         * @public
         * @readonly
         */
        readonly sgw_List: OPTIONAL<SGW_EventList>,
        /**
         * @summary `pgw_List`.
         * @public
         * @readonly
         */
        readonly pgw_List: OPTIONAL<PGW_EventList>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TraceEventList
     * @description
     * 
     * This takes an `object` and converts it to a `TraceEventList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TraceEventList`.
     * @returns {TraceEventList}
     */
    public static _from_object (_o: { [_K in keyof (TraceEventList)]: (TraceEventList)[_K] }): TraceEventList {
        return new TraceEventList(_o.msc_s_List, _o.mgw_List, _o.sgsn_List, _o.ggsn_List, _o.bmsc_List, _o.mme_List, _o.sgw_List, _o.pgw_List, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TraceEventList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TraceEventList: $.ComponentSpec[] = [
    new $.ComponentSpec("msc-s-List", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("mgw-List", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("sgsn-List", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("ggsn-List", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("bmsc-List", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of TraceEventList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TraceEventList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TraceEventList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TraceEventList: $.ComponentSpec[] = [
    new $.ComponentSpec("mme-List", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("sgw-List", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("pgw-List", true, $.hasTag(_TagClass.context, 7), undefined, undefined)
];

let _cached_decoder_for_TraceEventList: $.ASN1Decoder<TraceEventList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TraceEventList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TraceEventList (el: _Element): TraceEventList {
    if (!_cached_decoder_for_TraceEventList) { _cached_decoder_for_TraceEventList = function (el: _Element): TraceEventList {
    let msc_s_List: OPTIONAL<MSC_S_EventList>;
    let mgw_List: OPTIONAL<MGW_EventList>;
    let sgsn_List: OPTIONAL<SGSN_EventList>;
    let ggsn_List: OPTIONAL<GGSN_EventList>;
    let bmsc_List: OPTIONAL<BMSC_EventList>;
    let mme_List: OPTIONAL<MME_EventList>;
    let sgw_List: OPTIONAL<SGW_EventList>;
    let pgw_List: OPTIONAL<PGW_EventList>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "msc-s-List": (_el: _Element): void => { msc_s_List = $._decode_implicit<MSC_S_EventList>(() => _decode_MSC_S_EventList)(_el); },
        "mgw-List": (_el: _Element): void => { mgw_List = $._decode_implicit<MGW_EventList>(() => _decode_MGW_EventList)(_el); },
        "sgsn-List": (_el: _Element): void => { sgsn_List = $._decode_implicit<SGSN_EventList>(() => _decode_SGSN_EventList)(_el); },
        "ggsn-List": (_el: _Element): void => { ggsn_List = $._decode_implicit<GGSN_EventList>(() => _decode_GGSN_EventList)(_el); },
        "bmsc-List": (_el: _Element): void => { bmsc_List = $._decode_implicit<BMSC_EventList>(() => _decode_BMSC_EventList)(_el); },
        "mme-List": (_el: _Element): void => { mme_List = $._decode_implicit<MME_EventList>(() => _decode_MME_EventList)(_el); },
        "sgw-List": (_el: _Element): void => { sgw_List = $._decode_implicit<SGW_EventList>(() => _decode_SGW_EventList)(_el); },
        "pgw-List": (_el: _Element): void => { pgw_List = $._decode_implicit<PGW_EventList>(() => _decode_PGW_EventList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TraceEventList,
        _extension_additions_list_spec_for_TraceEventList,
        _root_component_type_list_2_spec_for_TraceEventList,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TraceEventList(
        msc_s_List,
        mgw_List,
        sgsn_List,
        ggsn_List,
        bmsc_List,
        mme_List,
        sgw_List,
        pgw_List,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TraceEventList(el);
}

let _cached_encoder_for_TraceEventList: $.ASN1Encoder<TraceEventList> | null = null;

/**
 * @summary Encodes a(n) TraceEventList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceEventList, encoded as an ASN.1 Element.
 */
export
function _encode_TraceEventList (value: TraceEventList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TraceEventList) { _cached_encoder_for_TraceEventList = function (value: TraceEventList, elGetter: $.ASN1Encoder<TraceEventList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.msc_s_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_MSC_S_EventList, $.BER)(value.msc_s_List, $.BER)),
            /* IF_ABSENT  */ ((value.mgw_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MGW_EventList, $.BER)(value.mgw_List, $.BER)),
            /* IF_ABSENT  */ ((value.sgsn_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SGSN_EventList, $.BER)(value.sgsn_List, $.BER)),
            /* IF_ABSENT  */ ((value.ggsn_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_GGSN_EventList, $.BER)(value.ggsn_List, $.BER)),
            /* IF_ABSENT  */ ((value.bmsc_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_BMSC_EventList, $.BER)(value.bmsc_List, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.mme_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_MME_EventList, $.BER)(value.mme_List, $.BER)),
            /* IF_ABSENT  */ ((value.sgw_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_SGW_EventList, $.BER)(value.sgw_List, $.BER)),
            /* IF_ABSENT  */ ((value.pgw_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_PGW_EventList, $.BER)(value.pgw_List, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TraceEventList(value, elGetter);
}


/* eslint-enable */
