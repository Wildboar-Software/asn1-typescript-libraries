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
import { PLMNList, _decode_PLMNList, _encode_PLMNList } from "../MAP-LCS-DataTypes/PLMNList.ta.mjs";
// export { PLMNList, _decode_PLMNList, _encode_PLMNList } from "../MAP-LCS-DataTypes/PLMNList.ta.mjs";


/**
 * @summary ReportingPLMNList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportingPLMNList ::= SEQUENCE {
 *     plmn-ListPrioritized    [0] NULL        OPTIONAL,
 *     plmn-List        [1] PLMNList,
 *     ...}
 * ```
 * 
 * @class
 */
export
class ReportingPLMNList {
    constructor (
        /**
         * @summary `plmn_ListPrioritized`.
         * @public
         * @readonly
         */
        readonly plmn_ListPrioritized: OPTIONAL<NULL>,
        /**
         * @summary `plmn_List`.
         * @public
         * @readonly
         */
        readonly plmn_List: PLMNList,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ReportingPLMNList
     * @description
     * 
     * This takes an `object` and converts it to a `ReportingPLMNList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportingPLMNList`.
     * @returns {ReportingPLMNList}
     */
    public static _from_object (_o: { [_K in keyof (ReportingPLMNList)]: (ReportingPLMNList)[_K] }): ReportingPLMNList {
        return new ReportingPLMNList(_o.plmn_ListPrioritized, _o.plmn_List, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ReportingPLMNList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportingPLMNList: $.ComponentSpec[] = [
    new $.ComponentSpec("plmn-ListPrioritized", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("plmn-List", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ReportingPLMNList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportingPLMNList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportingPLMNList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportingPLMNList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReportingPLMNList: $.ASN1Decoder<ReportingPLMNList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportingPLMNList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportingPLMNList (el: _Element): ReportingPLMNList {
    if (!_cached_decoder_for_ReportingPLMNList) { _cached_decoder_for_ReportingPLMNList = function (el: _Element): ReportingPLMNList {
    let plmn_ListPrioritized: OPTIONAL<NULL>;
    let plmn_List!: PLMNList;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "plmn-ListPrioritized": (_el: _Element): void => { plmn_ListPrioritized = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "plmn-List": (_el: _Element): void => { plmn_List = $._decode_implicit<PLMNList>(() => _decode_PLMNList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReportingPLMNList,
        _extension_additions_list_spec_for_ReportingPLMNList,
        _root_component_type_list_2_spec_for_ReportingPLMNList,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ReportingPLMNList(
        plmn_ListPrioritized,
        plmn_List,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ReportingPLMNList(el);
}

let _cached_encoder_for_ReportingPLMNList: $.ASN1Encoder<ReportingPLMNList> | null = null;

/**
 * @summary Encodes a(n) ReportingPLMNList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingPLMNList, encoded as an ASN.1 Element.
 */
export
function _encode_ReportingPLMNList (value: ReportingPLMNList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportingPLMNList) { _cached_encoder_for_ReportingPLMNList = function (value: ReportingPLMNList, elGetter: $.ASN1Encoder<ReportingPLMNList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.plmn_ListPrioritized === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.plmn_ListPrioritized, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNList, $.BER)(value.plmn_List, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReportingPLMNList(value, elGetter);
}


/* eslint-enable */
