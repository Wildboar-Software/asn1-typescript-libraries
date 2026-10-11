/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BMSC_InterfaceList, _decode_BMSC_InterfaceList, _encode_BMSC_InterfaceList } from "../MAP-OM-DataTypes/BMSC-InterfaceList.ta.mjs";
import { ENB_InterfaceList, _decode_ENB_InterfaceList, _encode_ENB_InterfaceList } from "../MAP-OM-DataTypes/ENB-InterfaceList.ta.mjs";
import { GGSN_InterfaceList, _decode_GGSN_InterfaceList, _encode_GGSN_InterfaceList } from "../MAP-OM-DataTypes/GGSN-InterfaceList.ta.mjs";
import { MGW_InterfaceList, _decode_MGW_InterfaceList, _encode_MGW_InterfaceList } from "../MAP-OM-DataTypes/MGW-InterfaceList.ta.mjs";
import { MME_InterfaceList, _decode_MME_InterfaceList, _encode_MME_InterfaceList } from "../MAP-OM-DataTypes/MME-InterfaceList.ta.mjs";
import { MSC_S_InterfaceList, _decode_MSC_S_InterfaceList, _encode_MSC_S_InterfaceList } from "../MAP-OM-DataTypes/MSC-S-InterfaceList.ta.mjs";
import { PGW_InterfaceList, _decode_PGW_InterfaceList, _encode_PGW_InterfaceList } from "../MAP-OM-DataTypes/PGW-InterfaceList.ta.mjs";
import { RNC_InterfaceList, _decode_RNC_InterfaceList, _encode_RNC_InterfaceList } from "../MAP-OM-DataTypes/RNC-InterfaceList.ta.mjs";
import { SGSN_InterfaceList, _decode_SGSN_InterfaceList, _encode_SGSN_InterfaceList } from "../MAP-OM-DataTypes/SGSN-InterfaceList.ta.mjs";
import { SGW_InterfaceList, _decode_SGW_InterfaceList, _encode_SGW_InterfaceList } from "../MAP-OM-DataTypes/SGW-InterfaceList.ta.mjs";


/**
 * @summary TraceInterfaceList
 * @description
 *
 * Interfaces or protocols per NE. See 3GPP TS 32.422 (3GPP TS 29.002 V19.1.0
 * clauses 7.6.10.7 and 17.7.2).
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
         * @description
         *
         * Interface list for this NE (clause 17.7.2).
         *
         * @public
         * @readonly
         */
        readonly msc_s_List: OPTIONAL<MSC_S_InterfaceList>,
        /**
         * @summary `mgw_List`.
         * @description
         *
         * Interface list for this NE (clause 17.7.2).
         *
         * @public
         * @readonly
         */
        readonly mgw_List: OPTIONAL<MGW_InterfaceList>,
        /**
         * @summary `sgsn_List`.
         * @description
         *
         * Interface list for this NE (clause 17.7.2).
         *
         * @public
         * @readonly
         */
        readonly sgsn_List: OPTIONAL<SGSN_InterfaceList>,
        /**
         * @summary `ggsn_List`.
         * @description
         *
         * Interface list for this NE (clause 17.7.2).
         *
         * @public
         * @readonly
         */
        readonly ggsn_List: OPTIONAL<GGSN_InterfaceList>,
        /**
         * @summary `rnc_List`.
         * @description
         *
         * Interface list for this NE (clause 17.7.2).
         *
         * @public
         * @readonly
         */
        readonly rnc_List: OPTIONAL<RNC_InterfaceList>,
        /**
         * @summary `bmsc_List`.
         * @description
         *
         * Interface list for this NE (clause 17.7.2).
         *
         * @public
         * @readonly
         */
        readonly bmsc_List: OPTIONAL<BMSC_InterfaceList>,
        /**
         * @summary `mme_List`.
         * @description
         *
         * Interface list for this NE (clause 17.7.2).
         *
         * @public
         * @readonly
         */
        readonly mme_List: OPTIONAL<MME_InterfaceList>,
        /**
         * @summary `sgw_List`.
         * @description
         *
         * Interface list for this NE (clause 17.7.2).
         *
         * @public
         * @readonly
         */
        readonly sgw_List: OPTIONAL<SGW_InterfaceList>,
        /**
         * @summary `pgw_List`.
         * @description
         *
         * Interface list for this NE (clause 17.7.2).
         *
         * @public
         * @readonly
         */
        readonly pgw_List: OPTIONAL<PGW_InterfaceList>,
        /**
         * @summary `eNB_List`.
         * @description
         *
         * Interface list for this NE (clause 17.7.2).
         *
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
    new $.ComponentSpec("msc-s-List", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mgw-List", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sgsn-List", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ggsn-List", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("rnc-List", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("bmsc-List", true, $.hasTag(_TagClass.context, 5))
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
    new $.ComponentSpec("mme-List", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sgw-List", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("pgw-List", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("eNB-List", true, $.hasTag(_TagClass.context, 9))
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
    let msc_s_List: OPTIONAL<MSC_S_InterfaceList> = undefined;
    let mgw_List: OPTIONAL<MGW_InterfaceList> = undefined;
    let sgsn_List: OPTIONAL<SGSN_InterfaceList> = undefined;
    let ggsn_List: OPTIONAL<GGSN_InterfaceList> = undefined;
    let rnc_List: OPTIONAL<RNC_InterfaceList> = undefined;
    let bmsc_List: OPTIONAL<BMSC_InterfaceList> = undefined;
    let mme_List: OPTIONAL<MME_InterfaceList> = undefined;
    let sgw_List: OPTIONAL<SGW_InterfaceList> = undefined;
    let pgw_List: OPTIONAL<PGW_InterfaceList> = undefined;
    let eNB_List: OPTIONAL<ENB_InterfaceList> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
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
