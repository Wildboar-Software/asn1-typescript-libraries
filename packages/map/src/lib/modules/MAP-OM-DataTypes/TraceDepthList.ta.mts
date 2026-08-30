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
import { TraceDepth, _enum_for_TraceDepth, TraceDepth_minimum /* IMPORTED_LONG_ENUMERATION_ITEM */, minimum /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDepth_medium /* IMPORTED_LONG_ENUMERATION_ITEM */, medium /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDepth_maximum /* IMPORTED_LONG_ENUMERATION_ITEM */, maximum /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TraceDepth, _encode_TraceDepth } from "../MAP-OM-DataTypes/TraceDepth.ta.mjs";
import { TraceDepthExtension, _enum_for_TraceDepthExtension, TraceDepthExtension_minimumWithoutVendorSpecificExtension /* IMPORTED_LONG_ENUMERATION_ITEM */, minimumWithoutVendorSpecificExtension /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDepthExtension_mediumWithoutVendorSpecificExtension /* IMPORTED_LONG_ENUMERATION_ITEM */, mediumWithoutVendorSpecificExtension /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDepthExtension_maximumWithoutVendorSpecificExtension /* IMPORTED_LONG_ENUMERATION_ITEM */, maximumWithoutVendorSpecificExtension /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TraceDepthExtension, _encode_TraceDepthExtension } from "../MAP-OM-DataTypes/TraceDepthExtension.ta.mjs";


/**
 * @summary TraceDepthList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceDepthList ::= SEQUENCE {
 *     msc-s-TraceDepth    [0] TraceDepth    OPTIONAL,
 *     mgw-TraceDepth    [1] TraceDepth    OPTIONAL,
 *     sgsn-TraceDepth    [2] TraceDepth    OPTIONAL,
 *     ggsn-TraceDepth    [3] TraceDepth    OPTIONAL,
 *     rnc-TraceDepth    [4] TraceDepth    OPTIONAL,
 *     bmsc-TraceDepth    [5] TraceDepth    OPTIONAL,
 *     ... ,
 *     mme-TraceDepth    [6] TraceDepth    OPTIONAL,
 *     sgw-TraceDepth    [7] TraceDepth    OPTIONAL,
 *     pgw-TraceDepth    [8] TraceDepth    OPTIONAL,
 *     eNB-TraceDepth    [9] TraceDepth    OPTIONAL,
 *     msc-s-TraceDepthExtension    [10] TraceDepthExtension    OPTIONAL,
 *     mgw-TraceDepthExtension    [11] TraceDepthExtension    OPTIONAL,
 *     sgsn-TraceDepthExtension    [12] TraceDepthExtension    OPTIONAL,
 *     ggsn-TraceDepthExtension    [13] TraceDepthExtension    OPTIONAL,
 *     rnc-TraceDepthExtension    [14] TraceDepthExtension    OPTIONAL,
 *     bmsc-TraceDepthExtension    [15] TraceDepthExtension    OPTIONAL,
 *     mme-TraceDepthExtension    [16] TraceDepthExtension    OPTIONAL,
 *     sgw-TraceDepthExtension    [17] TraceDepthExtension    OPTIONAL,
 *     pgw-TraceDepthExtension    [18] TraceDepthExtension    OPTIONAL,
 *     eNB-TraceDepthExtension    [19] TraceDepthExtension    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class TraceDepthList {
    constructor (
        /**
         * @summary `msc_s_TraceDepth`.
         * @public
         * @readonly
         */
        readonly msc_s_TraceDepth: OPTIONAL<TraceDepth>,
        /**
         * @summary `mgw_TraceDepth`.
         * @public
         * @readonly
         */
        readonly mgw_TraceDepth: OPTIONAL<TraceDepth>,
        /**
         * @summary `sgsn_TraceDepth`.
         * @public
         * @readonly
         */
        readonly sgsn_TraceDepth: OPTIONAL<TraceDepth>,
        /**
         * @summary `ggsn_TraceDepth`.
         * @public
         * @readonly
         */
        readonly ggsn_TraceDepth: OPTIONAL<TraceDepth>,
        /**
         * @summary `rnc_TraceDepth`.
         * @public
         * @readonly
         */
        readonly rnc_TraceDepth: OPTIONAL<TraceDepth>,
        /**
         * @summary `bmsc_TraceDepth`.
         * @public
         * @readonly
         */
        readonly bmsc_TraceDepth: OPTIONAL<TraceDepth>,
        /**
         * @summary `mme_TraceDepth`.
         * @public
         * @readonly
         */
        readonly mme_TraceDepth: OPTIONAL<TraceDepth>,
        /**
         * @summary `sgw_TraceDepth`.
         * @public
         * @readonly
         */
        readonly sgw_TraceDepth: OPTIONAL<TraceDepth>,
        /**
         * @summary `pgw_TraceDepth`.
         * @public
         * @readonly
         */
        readonly pgw_TraceDepth: OPTIONAL<TraceDepth>,
        /**
         * @summary `eNB_TraceDepth`.
         * @public
         * @readonly
         */
        readonly eNB_TraceDepth: OPTIONAL<TraceDepth>,
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
         * @summary `sgsn_TraceDepthExtension`.
         * @public
         * @readonly
         */
        readonly sgsn_TraceDepthExtension: OPTIONAL<TraceDepthExtension>,
        /**
         * @summary `ggsn_TraceDepthExtension`.
         * @public
         * @readonly
         */
        readonly ggsn_TraceDepthExtension: OPTIONAL<TraceDepthExtension>,
        /**
         * @summary `rnc_TraceDepthExtension`.
         * @public
         * @readonly
         */
        readonly rnc_TraceDepthExtension: OPTIONAL<TraceDepthExtension>,
        /**
         * @summary `bmsc_TraceDepthExtension`.
         * @public
         * @readonly
         */
        readonly bmsc_TraceDepthExtension: OPTIONAL<TraceDepthExtension>,
        /**
         * @summary `mme_TraceDepthExtension`.
         * @public
         * @readonly
         */
        readonly mme_TraceDepthExtension: OPTIONAL<TraceDepthExtension>,
        /**
         * @summary `sgw_TraceDepthExtension`.
         * @public
         * @readonly
         */
        readonly sgw_TraceDepthExtension: OPTIONAL<TraceDepthExtension>,
        /**
         * @summary `pgw_TraceDepthExtension`.
         * @public
         * @readonly
         */
        readonly pgw_TraceDepthExtension: OPTIONAL<TraceDepthExtension>,
        /**
         * @summary `eNB_TraceDepthExtension`.
         * @public
         * @readonly
         */
        readonly eNB_TraceDepthExtension: OPTIONAL<TraceDepthExtension>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TraceDepthList
     * @description
     * 
     * This takes an `object` and converts it to a `TraceDepthList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TraceDepthList`.
     * @returns {TraceDepthList}
     */
    public static _from_object (_o: { [_K in keyof (TraceDepthList)]: (TraceDepthList)[_K] }): TraceDepthList {
        return new TraceDepthList(_o.msc_s_TraceDepth, _o.mgw_TraceDepth, _o.sgsn_TraceDepth, _o.ggsn_TraceDepth, _o.rnc_TraceDepth, _o.bmsc_TraceDepth, _o.mme_TraceDepth, _o.sgw_TraceDepth, _o.pgw_TraceDepth, _o.eNB_TraceDepth, _o.msc_s_TraceDepthExtension, _o.mgw_TraceDepthExtension, _o.sgsn_TraceDepthExtension, _o.ggsn_TraceDepthExtension, _o.rnc_TraceDepthExtension, _o.bmsc_TraceDepthExtension, _o.mme_TraceDepthExtension, _o.sgw_TraceDepthExtension, _o.pgw_TraceDepthExtension, _o.eNB_TraceDepthExtension, _o._unrecognizedExtensionsList);
    }

        /**
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
         * @summary The enum used as the type of the component `sgsn_TraceDepth`
         * @public
         * @static
         */

    public static _enum_for_sgsn_TraceDepth = _enum_for_TraceDepth;        /**
         * @summary The enum used as the type of the component `ggsn_TraceDepth`
         * @public
         * @static
         */

    public static _enum_for_ggsn_TraceDepth = _enum_for_TraceDepth;        /**
         * @summary The enum used as the type of the component `rnc_TraceDepth`
         * @public
         * @static
         */

    public static _enum_for_rnc_TraceDepth = _enum_for_TraceDepth;        /**
         * @summary The enum used as the type of the component `bmsc_TraceDepth`
         * @public
         * @static
         */

    public static _enum_for_bmsc_TraceDepth = _enum_for_TraceDepth;        /**
         * @summary The enum used as the type of the component `mme_TraceDepth`
         * @public
         * @static
         */

    public static _enum_for_mme_TraceDepth = _enum_for_TraceDepth;        /**
         * @summary The enum used as the type of the component `sgw_TraceDepth`
         * @public
         * @static
         */

    public static _enum_for_sgw_TraceDepth = _enum_for_TraceDepth;        /**
         * @summary The enum used as the type of the component `pgw_TraceDepth`
         * @public
         * @static
         */

    public static _enum_for_pgw_TraceDepth = _enum_for_TraceDepth;        /**
         * @summary The enum used as the type of the component `eNB_TraceDepth`
         * @public
         * @static
         */

    public static _enum_for_eNB_TraceDepth = _enum_for_TraceDepth;        /**
         * @summary The enum used as the type of the component `msc_s_TraceDepthExtension`
         * @public
         * @static
         */

    public static _enum_for_msc_s_TraceDepthExtension = _enum_for_TraceDepthExtension;        /**
         * @summary The enum used as the type of the component `mgw_TraceDepthExtension`
         * @public
         * @static
         */

    public static _enum_for_mgw_TraceDepthExtension = _enum_for_TraceDepthExtension;        /**
         * @summary The enum used as the type of the component `sgsn_TraceDepthExtension`
         * @public
         * @static
         */

    public static _enum_for_sgsn_TraceDepthExtension = _enum_for_TraceDepthExtension;        /**
         * @summary The enum used as the type of the component `ggsn_TraceDepthExtension`
         * @public
         * @static
         */

    public static _enum_for_ggsn_TraceDepthExtension = _enum_for_TraceDepthExtension;        /**
         * @summary The enum used as the type of the component `rnc_TraceDepthExtension`
         * @public
         * @static
         */

    public static _enum_for_rnc_TraceDepthExtension = _enum_for_TraceDepthExtension;        /**
         * @summary The enum used as the type of the component `bmsc_TraceDepthExtension`
         * @public
         * @static
         */

    public static _enum_for_bmsc_TraceDepthExtension = _enum_for_TraceDepthExtension;        /**
         * @summary The enum used as the type of the component `mme_TraceDepthExtension`
         * @public
         * @static
         */

    public static _enum_for_mme_TraceDepthExtension = _enum_for_TraceDepthExtension;        /**
         * @summary The enum used as the type of the component `sgw_TraceDepthExtension`
         * @public
         * @static
         */

    public static _enum_for_sgw_TraceDepthExtension = _enum_for_TraceDepthExtension;        /**
         * @summary The enum used as the type of the component `pgw_TraceDepthExtension`
         * @public
         * @static
         */

    public static _enum_for_pgw_TraceDepthExtension = _enum_for_TraceDepthExtension;        /**
         * @summary The enum used as the type of the component `eNB_TraceDepthExtension`
         * @public
         * @static
         */

    public static _enum_for_eNB_TraceDepthExtension = _enum_for_TraceDepthExtension;
}

/**
 * @summary The Leading Root Component Types of TraceDepthList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TraceDepthList: $.ComponentSpec[] = [
    new $.ComponentSpec("msc-s-TraceDepth", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mgw-TraceDepth", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sgsn-TraceDepth", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ggsn-TraceDepth", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("rnc-TraceDepth", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("bmsc-TraceDepth", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of TraceDepthList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TraceDepthList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TraceDepthList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TraceDepthList: $.ComponentSpec[] = [
    new $.ComponentSpec("mme-TraceDepth", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sgw-TraceDepth", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("pgw-TraceDepth", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("eNB-TraceDepth", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("msc-s-TraceDepthExtension", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("mgw-TraceDepthExtension", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("sgsn-TraceDepthExtension", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("ggsn-TraceDepthExtension", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("rnc-TraceDepthExtension", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("bmsc-TraceDepthExtension", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("mme-TraceDepthExtension", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("sgw-TraceDepthExtension", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("pgw-TraceDepthExtension", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("eNB-TraceDepthExtension", true, $.hasTag(_TagClass.context, 19))
];

let _cached_decoder_for_TraceDepthList: $.ASN1Decoder<TraceDepthList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TraceDepthList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TraceDepthList (el: _Element): TraceDepthList {
    if (!_cached_decoder_for_TraceDepthList) { _cached_decoder_for_TraceDepthList = function (el: _Element): TraceDepthList {
    let msc_s_TraceDepth: OPTIONAL<TraceDepth> = undefined;
    let mgw_TraceDepth: OPTIONAL<TraceDepth> = undefined;
    let sgsn_TraceDepth: OPTIONAL<TraceDepth> = undefined;
    let ggsn_TraceDepth: OPTIONAL<TraceDepth> = undefined;
    let rnc_TraceDepth: OPTIONAL<TraceDepth> = undefined;
    let bmsc_TraceDepth: OPTIONAL<TraceDepth> = undefined;
    let mme_TraceDepth: OPTIONAL<TraceDepth> = undefined;
    let sgw_TraceDepth: OPTIONAL<TraceDepth> = undefined;
    let pgw_TraceDepth: OPTIONAL<TraceDepth> = undefined;
    let eNB_TraceDepth: OPTIONAL<TraceDepth> = undefined;
    let msc_s_TraceDepthExtension: OPTIONAL<TraceDepthExtension> = undefined;
    let mgw_TraceDepthExtension: OPTIONAL<TraceDepthExtension> = undefined;
    let sgsn_TraceDepthExtension: OPTIONAL<TraceDepthExtension> = undefined;
    let ggsn_TraceDepthExtension: OPTIONAL<TraceDepthExtension> = undefined;
    let rnc_TraceDepthExtension: OPTIONAL<TraceDepthExtension> = undefined;
    let bmsc_TraceDepthExtension: OPTIONAL<TraceDepthExtension> = undefined;
    let mme_TraceDepthExtension: OPTIONAL<TraceDepthExtension> = undefined;
    let sgw_TraceDepthExtension: OPTIONAL<TraceDepthExtension> = undefined;
    let pgw_TraceDepthExtension: OPTIONAL<TraceDepthExtension> = undefined;
    let eNB_TraceDepthExtension: OPTIONAL<TraceDepthExtension> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "msc-s-TraceDepth": (_el: _Element): void => { msc_s_TraceDepth = $._decode_implicit<TraceDepth>(() => _decode_TraceDepth)(_el); },
        "mgw-TraceDepth": (_el: _Element): void => { mgw_TraceDepth = $._decode_implicit<TraceDepth>(() => _decode_TraceDepth)(_el); },
        "sgsn-TraceDepth": (_el: _Element): void => { sgsn_TraceDepth = $._decode_implicit<TraceDepth>(() => _decode_TraceDepth)(_el); },
        "ggsn-TraceDepth": (_el: _Element): void => { ggsn_TraceDepth = $._decode_implicit<TraceDepth>(() => _decode_TraceDepth)(_el); },
        "rnc-TraceDepth": (_el: _Element): void => { rnc_TraceDepth = $._decode_implicit<TraceDepth>(() => _decode_TraceDepth)(_el); },
        "bmsc-TraceDepth": (_el: _Element): void => { bmsc_TraceDepth = $._decode_implicit<TraceDepth>(() => _decode_TraceDepth)(_el); },
        "mme-TraceDepth": (_el: _Element): void => { mme_TraceDepth = $._decode_implicit<TraceDepth>(() => _decode_TraceDepth)(_el); },
        "sgw-TraceDepth": (_el: _Element): void => { sgw_TraceDepth = $._decode_implicit<TraceDepth>(() => _decode_TraceDepth)(_el); },
        "pgw-TraceDepth": (_el: _Element): void => { pgw_TraceDepth = $._decode_implicit<TraceDepth>(() => _decode_TraceDepth)(_el); },
        "eNB-TraceDepth": (_el: _Element): void => { eNB_TraceDepth = $._decode_implicit<TraceDepth>(() => _decode_TraceDepth)(_el); },
        "msc-s-TraceDepthExtension": (_el: _Element): void => { msc_s_TraceDepthExtension = $._decode_implicit<TraceDepthExtension>(() => _decode_TraceDepthExtension)(_el); },
        "mgw-TraceDepthExtension": (_el: _Element): void => { mgw_TraceDepthExtension = $._decode_implicit<TraceDepthExtension>(() => _decode_TraceDepthExtension)(_el); },
        "sgsn-TraceDepthExtension": (_el: _Element): void => { sgsn_TraceDepthExtension = $._decode_implicit<TraceDepthExtension>(() => _decode_TraceDepthExtension)(_el); },
        "ggsn-TraceDepthExtension": (_el: _Element): void => { ggsn_TraceDepthExtension = $._decode_implicit<TraceDepthExtension>(() => _decode_TraceDepthExtension)(_el); },
        "rnc-TraceDepthExtension": (_el: _Element): void => { rnc_TraceDepthExtension = $._decode_implicit<TraceDepthExtension>(() => _decode_TraceDepthExtension)(_el); },
        "bmsc-TraceDepthExtension": (_el: _Element): void => { bmsc_TraceDepthExtension = $._decode_implicit<TraceDepthExtension>(() => _decode_TraceDepthExtension)(_el); },
        "mme-TraceDepthExtension": (_el: _Element): void => { mme_TraceDepthExtension = $._decode_implicit<TraceDepthExtension>(() => _decode_TraceDepthExtension)(_el); },
        "sgw-TraceDepthExtension": (_el: _Element): void => { sgw_TraceDepthExtension = $._decode_implicit<TraceDepthExtension>(() => _decode_TraceDepthExtension)(_el); },
        "pgw-TraceDepthExtension": (_el: _Element): void => { pgw_TraceDepthExtension = $._decode_implicit<TraceDepthExtension>(() => _decode_TraceDepthExtension)(_el); },
        "eNB-TraceDepthExtension": (_el: _Element): void => { eNB_TraceDepthExtension = $._decode_implicit<TraceDepthExtension>(() => _decode_TraceDepthExtension)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TraceDepthList,
        _extension_additions_list_spec_for_TraceDepthList,
        _root_component_type_list_2_spec_for_TraceDepthList,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TraceDepthList(
        msc_s_TraceDepth,
        mgw_TraceDepth,
        sgsn_TraceDepth,
        ggsn_TraceDepth,
        rnc_TraceDepth,
        bmsc_TraceDepth,
        mme_TraceDepth,
        sgw_TraceDepth,
        pgw_TraceDepth,
        eNB_TraceDepth,
        msc_s_TraceDepthExtension,
        mgw_TraceDepthExtension,
        sgsn_TraceDepthExtension,
        ggsn_TraceDepthExtension,
        rnc_TraceDepthExtension,
        bmsc_TraceDepthExtension,
        mme_TraceDepthExtension,
        sgw_TraceDepthExtension,
        pgw_TraceDepthExtension,
        eNB_TraceDepthExtension,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TraceDepthList(el);
}

let _cached_encoder_for_TraceDepthList: $.ASN1Encoder<TraceDepthList> | null = null;

/**
 * @summary Encodes a(n) TraceDepthList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceDepthList, encoded as an ASN.1 Element.
 */
export
function _encode_TraceDepthList (value: TraceDepthList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TraceDepthList) { _cached_encoder_for_TraceDepthList = function (value: TraceDepthList, elGetter: $.ASN1Encoder<TraceDepthList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.msc_s_TraceDepth === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_TraceDepth, $.BER)(value.msc_s_TraceDepth, $.BER)),
            /* IF_ABSENT  */ ((value.mgw_TraceDepth === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_TraceDepth, $.BER)(value.mgw_TraceDepth, $.BER)),
            /* IF_ABSENT  */ ((value.sgsn_TraceDepth === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_TraceDepth, $.BER)(value.sgsn_TraceDepth, $.BER)),
            /* IF_ABSENT  */ ((value.ggsn_TraceDepth === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_TraceDepth, $.BER)(value.ggsn_TraceDepth, $.BER)),
            /* IF_ABSENT  */ ((value.rnc_TraceDepth === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_TraceDepth, $.BER)(value.rnc_TraceDepth, $.BER)),
            /* IF_ABSENT  */ ((value.bmsc_TraceDepth === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_TraceDepth, $.BER)(value.bmsc_TraceDepth, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.mme_TraceDepth === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_TraceDepth, $.BER)(value.mme_TraceDepth, $.BER)),
            /* IF_ABSENT  */ ((value.sgw_TraceDepth === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_TraceDepth, $.BER)(value.sgw_TraceDepth, $.BER)),
            /* IF_ABSENT  */ ((value.pgw_TraceDepth === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_TraceDepth, $.BER)(value.pgw_TraceDepth, $.BER)),
            /* IF_ABSENT  */ ((value.eNB_TraceDepth === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_TraceDepth, $.BER)(value.eNB_TraceDepth, $.BER)),
            /* IF_ABSENT  */ ((value.msc_s_TraceDepthExtension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_TraceDepthExtension, $.BER)(value.msc_s_TraceDepthExtension, $.BER)),
            /* IF_ABSENT  */ ((value.mgw_TraceDepthExtension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_TraceDepthExtension, $.BER)(value.mgw_TraceDepthExtension, $.BER)),
            /* IF_ABSENT  */ ((value.sgsn_TraceDepthExtension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_TraceDepthExtension, $.BER)(value.sgsn_TraceDepthExtension, $.BER)),
            /* IF_ABSENT  */ ((value.ggsn_TraceDepthExtension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_TraceDepthExtension, $.BER)(value.ggsn_TraceDepthExtension, $.BER)),
            /* IF_ABSENT  */ ((value.rnc_TraceDepthExtension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_TraceDepthExtension, $.BER)(value.rnc_TraceDepthExtension, $.BER)),
            /* IF_ABSENT  */ ((value.bmsc_TraceDepthExtension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_TraceDepthExtension, $.BER)(value.bmsc_TraceDepthExtension, $.BER)),
            /* IF_ABSENT  */ ((value.mme_TraceDepthExtension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_TraceDepthExtension, $.BER)(value.mme_TraceDepthExtension, $.BER)),
            /* IF_ABSENT  */ ((value.sgw_TraceDepthExtension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_TraceDepthExtension, $.BER)(value.sgw_TraceDepthExtension, $.BER)),
            /* IF_ABSENT  */ ((value.pgw_TraceDepthExtension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_TraceDepthExtension, $.BER)(value.pgw_TraceDepthExtension, $.BER)),
            /* IF_ABSENT  */ ((value.eNB_TraceDepthExtension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_TraceDepthExtension, $.BER)(value.eNB_TraceDepthExtension, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TraceDepthList(value, elGetter);
}


/* eslint-enable */
