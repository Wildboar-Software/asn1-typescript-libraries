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
import { QueryExpression, _decode_QueryExpression, _encode_QueryExpression } from "../UserInfoFormat-searchResult-1/QueryExpression.ta.mjs";
// export { QueryExpression, _decode_QueryExpression, _encode_QueryExpression } from "../UserInfoFormat-searchResult-1/QueryExpression.ta.mjs";
import { ResultsByDB, _decode_ResultsByDB, _encode_ResultsByDB } from "../UserInfoFormat-searchResult-1/ResultsByDB.ta.mjs";
// export { ResultsByDB, _decode_ResultsByDB, _encode_ResultsByDB } from "../UserInfoFormat-searchResult-1/ResultsByDB.ta.mjs";


/**
 * @summary SearchInfoReport_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchInfoReport-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class SearchInfoReport_Item {
    constructor (
        /**
         * @summary `subqueryId`.
         * @public
         * @readonly
         */
        readonly subqueryId: OPTIONAL<InternationalString>,
        /**
         * @summary `fullQuery`.
         * @public
         * @readonly
         */
        readonly fullQuery: BOOLEAN,
        /**
         * @summary `subqueryExpression`.
         * @public
         * @readonly
         */
        readonly subqueryExpression: OPTIONAL<QueryExpression>,
        /**
         * @summary `subqueryInterpretation`.
         * @public
         * @readonly
         */
        readonly subqueryInterpretation: OPTIONAL<QueryExpression>,
        /**
         * @summary `subqueryRecommendation`.
         * @public
         * @readonly
         */
        readonly subqueryRecommendation: OPTIONAL<QueryExpression>,
        /**
         * @summary `subqueryCount`.
         * @public
         * @readonly
         */
        readonly subqueryCount: OPTIONAL<INTEGER>,
        /**
         * @summary `subqueryWeight`.
         * @public
         * @readonly
         */
        readonly subqueryWeight: OPTIONAL<IntUnit>,
        /**
         * @summary `resultsByDB`.
         * @public
         * @readonly
         */
        readonly resultsByDB: OPTIONAL<ResultsByDB>
    ) {}

    /**
     * @summary Restructures an object into a SearchInfoReport_Item
     * @description
     * 
     * This takes an `object` and converts it to a `SearchInfoReport_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SearchInfoReport_Item`.
     * @returns {SearchInfoReport_Item}
     */
    public static _from_object (_o: { [_K in keyof (SearchInfoReport_Item)]: (SearchInfoReport_Item)[_K] }): SearchInfoReport_Item {
        return new SearchInfoReport_Item(_o.subqueryId, _o.fullQuery, _o.subqueryExpression, _o.subqueryInterpretation, _o.subqueryRecommendation, _o.subqueryCount, _o.subqueryWeight, _o.resultsByDB);
    }


}

/**
 * @summary The Leading Root Component Types of SearchInfoReport_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SearchInfoReport_Item: $.ComponentSpec[] = [
    /* FIXME: subqueryId COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("fullQuery", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("subqueryExpression", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("subqueryInterpretation", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("subqueryRecommendation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("subqueryCount", true, $.hasTag(_TagClass.context, 6)),
    /* FIXME: subqueryWeight COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("resultsByDB", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of SearchInfoReport_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SearchInfoReport_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SearchInfoReport_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SearchInfoReport_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SearchInfoReport_Item: $.ASN1Decoder<SearchInfoReport_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchInfoReport_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchInfoReport_Item (el: _Element): SearchInfoReport_Item {
    if (!_cached_decoder_for_SearchInfoReport_Item) { _cached_decoder_for_SearchInfoReport_Item = function (el: _Element): SearchInfoReport_Item {
    let subqueryId: OPTIONAL<InternationalString>;
    let fullQuery!: BOOLEAN;
    let subqueryExpression: OPTIONAL<QueryExpression>;
    let subqueryInterpretation: OPTIONAL<QueryExpression>;
    let subqueryRecommendation: OPTIONAL<QueryExpression>;
    let subqueryCount: OPTIONAL<INTEGER>;
    let subqueryWeight: OPTIONAL<IntUnit>;
    let resultsByDB: OPTIONAL<ResultsByDB>;
    const callbacks: $.DecodingMap = {
        "subqueryId": (_el: _Element): void => { subqueryId = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "fullQuery": (_el: _Element): void => { fullQuery = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "subqueryExpression": (_el: _Element): void => { subqueryExpression = $._decode_explicit<QueryExpression>(() => _decode_QueryExpression)(_el); },
        "subqueryInterpretation": (_el: _Element): void => { subqueryInterpretation = $._decode_explicit<QueryExpression>(() => _decode_QueryExpression)(_el); },
        "subqueryRecommendation": (_el: _Element): void => { subqueryRecommendation = $._decode_explicit<QueryExpression>(() => _decode_QueryExpression)(_el); },
        "subqueryCount": (_el: _Element): void => { subqueryCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "subqueryWeight": (_el: _Element): void => { subqueryWeight = $._decode_implicit<IntUnit>(() => _decode_IntUnit)(_el); },
        "resultsByDB": (_el: _Element): void => { resultsByDB = $._decode_implicit<ResultsByDB>(() => _decode_ResultsByDB)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SearchInfoReport_Item,
        _extension_additions_list_spec_for_SearchInfoReport_Item,
        _root_component_type_list_2_spec_for_SearchInfoReport_Item,
        undefined,
    );
    return new SearchInfoReport_Item(
        subqueryId,
        fullQuery,
        subqueryExpression,
        subqueryInterpretation,
        subqueryRecommendation,
        subqueryCount,
        subqueryWeight,
        resultsByDB
    );
}; }
    return _cached_decoder_for_SearchInfoReport_Item(el);
}

let _cached_encoder_for_SearchInfoReport_Item: $.ASN1Encoder<SearchInfoReport_Item> | null = null;

/**
 * @summary Encodes a(n) SearchInfoReport_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchInfoReport_Item, encoded as an ASN.1 Element.
 */
export
function _encode_SearchInfoReport_Item (value: SearchInfoReport_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchInfoReport_Item) { _cached_encoder_for_SearchInfoReport_Item = function (value: SearchInfoReport_Item, elGetter: $.ASN1Encoder<SearchInfoReport_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.subqueryId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.subqueryId, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.fullQuery, $.BER),
            /* IF_ABSENT  */ ((value.subqueryExpression === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_QueryExpression, $.BER)(value.subqueryExpression, $.BER)),
            /* IF_ABSENT  */ ((value.subqueryInterpretation === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_QueryExpression, $.BER)(value.subqueryInterpretation, $.BER)),
            /* IF_ABSENT  */ ((value.subqueryRecommendation === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_QueryExpression, $.BER)(value.subqueryRecommendation, $.BER)),
            /* IF_ABSENT  */ ((value.subqueryCount === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.subqueryCount, $.BER)),
            /* IF_ABSENT  */ ((value.subqueryWeight === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_IntUnit, $.BER)(value.subqueryWeight, $.BER)),
            /* IF_ABSENT  */ ((value.resultsByDB === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ResultsByDB, $.BER)(value.resultsByDB, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SearchInfoReport_Item(value, elGetter);
}


/* eslint-enable */
