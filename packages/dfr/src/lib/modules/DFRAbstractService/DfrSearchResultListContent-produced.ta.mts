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
import { DfrEntryList, _decode_DfrEntryList, _encode_DfrEntryList } from "../DFRAbstractService/DfrEntryList.ta.mjs";
// export { DfrEntryList, _decode_DfrEntryList, _encode_DfrEntryList } from "../DFRAbstractService/DfrEntryList.ta.mjs";
import { OrderingRule, _decode_OrderingRule, _encode_OrderingRule } from "../DFRAbstractService/OrderingRule.ta.mjs";
// export { OrderingRule, _decode_OrderingRule, _encode_OrderingRule } from "../DFRAbstractService/OrderingRule.ta.mjs";
import { SearchDomain, _decode_SearchDomain, _encode_SearchDomain } from "../DFRAbstractService/SearchDomain.ta.mjs";
// export { SearchDomain, _decode_SearchDomain, _encode_SearchDomain } from "../DFRAbstractService/SearchDomain.ta.mjs";
import { SearchCriteria, _decode_SearchCriteria, _encode_SearchCriteria } from "../DFRAbstractService/SearchCriteria.ta.mjs";
// export { SearchCriteria, _decode_SearchCriteria, _encode_SearchCriteria } from "../DFRAbstractService/SearchCriteria.ta.mjs";


/**
 * @summary DfrSearchResultListContent_produced
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrSearchResultListContent-produced ::= SEQUENCE {
 *             start-date-and-time     [0] GeneralizedTime,
 *             end-date-and-time       [1] GeneralizedTime,
 *             object-list             [2] DfrEntryList,
 *             ordering                [3] OrderingRule OPTIONAL,
 *             search-domain           [4] SearchDomain,
 *             search-criteria         [5] SearchCriteria
 *         }
 * ```
 * 
 * @class
 */
export
class DfrSearchResultListContent_produced {
    constructor (
        /**
         * @summary `start_date_and_time`.
         * @public
         * @readonly
         */
        readonly start_date_and_time: GeneralizedTime,
        /**
         * @summary `end_date_and_time`.
         * @public
         * @readonly
         */
        readonly end_date_and_time: GeneralizedTime,
        /**
         * @summary `object_list`.
         * @public
         * @readonly
         */
        readonly object_list: DfrEntryList,
        /**
         * @summary `ordering`.
         * @public
         * @readonly
         */
        readonly ordering: OPTIONAL<OrderingRule>,
        /**
         * @summary `search_domain`.
         * @public
         * @readonly
         */
        readonly search_domain: SearchDomain,
        /**
         * @summary `search_criteria`.
         * @public
         * @readonly
         */
        readonly search_criteria: SearchCriteria
    ) {}

    /**
     * @summary Restructures an object into a DfrSearchResultListContent_produced
     * @description
     * 
     * This takes an `object` and converts it to a `DfrSearchResultListContent_produced`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DfrSearchResultListContent_produced`.
     * @returns {DfrSearchResultListContent_produced}
     */
    public static _from_object (_o: { [_K in keyof (DfrSearchResultListContent_produced)]: (DfrSearchResultListContent_produced)[_K] }): DfrSearchResultListContent_produced {
        return new DfrSearchResultListContent_produced(_o.start_date_and_time, _o.end_date_and_time, _o.object_list, _o.ordering, _o.search_domain, _o.search_criteria);
    }


}

/**
 * @summary The Leading Root Component Types of DfrSearchResultListContent_produced
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DfrSearchResultListContent_produced: $.ComponentSpec[] = [
    new $.ComponentSpec("start-date-and-time", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("end-date-and-time", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("object-list", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ordering", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("search-domain", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("search-criteria", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of DfrSearchResultListContent_produced
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DfrSearchResultListContent_produced: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DfrSearchResultListContent_produced
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DfrSearchResultListContent_produced: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DfrSearchResultListContent_produced: $.ASN1Decoder<DfrSearchResultListContent_produced> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DfrSearchResultListContent_produced
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DfrSearchResultListContent_produced (el: _Element): DfrSearchResultListContent_produced {
    if (!_cached_decoder_for_DfrSearchResultListContent_produced) { _cached_decoder_for_DfrSearchResultListContent_produced = function (el: _Element): DfrSearchResultListContent_produced {
    let start_date_and_time!: GeneralizedTime;
    let end_date_and_time!: GeneralizedTime;
    let object_list!: DfrEntryList;
    let ordering: OPTIONAL<OrderingRule>;
    let search_domain!: SearchDomain;
    let search_criteria!: SearchCriteria;
    const callbacks: $.DecodingMap = {
        "start-date-and-time": (_el: _Element): void => { start_date_and_time = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "end-date-and-time": (_el: _Element): void => { end_date_and_time = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "object-list": (_el: _Element): void => { object_list = $._decode_implicit<DfrEntryList>(() => _decode_DfrEntryList)(_el); },
        "ordering": (_el: _Element): void => { ordering = $._decode_implicit<OrderingRule>(() => _decode_OrderingRule)(_el); },
        "search-domain": (_el: _Element): void => { search_domain = $._decode_implicit<SearchDomain>(() => _decode_SearchDomain)(_el); },
        "search-criteria": (_el: _Element): void => { search_criteria = $._decode_explicit<SearchCriteria>(() => _decode_SearchCriteria)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DfrSearchResultListContent_produced,
        _extension_additions_list_spec_for_DfrSearchResultListContent_produced,
        _root_component_type_list_2_spec_for_DfrSearchResultListContent_produced,
        undefined,
    );
    return new DfrSearchResultListContent_produced(
        start_date_and_time,
        end_date_and_time,
        object_list,
        ordering,
        search_domain,
        search_criteria
    );
}; }
    return _cached_decoder_for_DfrSearchResultListContent_produced(el);
}

let _cached_encoder_for_DfrSearchResultListContent_produced: $.ASN1Encoder<DfrSearchResultListContent_produced> | null = null;

/**
 * @summary Encodes a(n) DfrSearchResultListContent_produced into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DfrSearchResultListContent_produced, encoded as an ASN.1 Element.
 */
export
function _encode_DfrSearchResultListContent_produced (value: DfrSearchResultListContent_produced, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DfrSearchResultListContent_produced) { _cached_encoder_for_DfrSearchResultListContent_produced = function (value: DfrSearchResultListContent_produced, elGetter: $.ASN1Encoder<DfrSearchResultListContent_produced>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeGeneralizedTime, $.BER)(value.start_date_and_time, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeGeneralizedTime, $.BER)(value.end_date_and_time, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_DfrEntryList, $.BER)(value.object_list, $.BER),
            /* IF_ABSENT  */ ((value.ordering === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_OrderingRule, $.BER)(value.ordering, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_SearchDomain, $.BER)(value.search_domain, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 5, () => _encode_SearchCriteria, $.BER)(value.search_criteria, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DfrSearchResultListContent_produced(value, elGetter);
}


/* eslint-enable */
