/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { QueryExpression, _decode_QueryExpression, _encode_QueryExpression } from "../UserInfoFormat-searchResult-1/QueryExpression.ta.mjs";
import { IntUnit, _decode_IntUnit, _encode_IntUnit } from "../Z39-50-APDU-2001/IntUnit.ta.mjs";
import { ResultsByDB, _decode_ResultsByDB, _encode_ResultsByDB } from "../UserInfoFormat-searchResult-1/ResultsByDB.ta.mjs";


/**
 * @summary SearchInfoReport_Item
 * @description
 * 
 * One query component in a SearchResult-1 report (USR.1, ASN1.11).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchInfoReport-Item ::= SEQUENCE {
 *     subqueryId [1] IMPLICIT InternationalString OPTIONAL,
 *     -- Shorthand identifier of subquery
 *     fullQuery [2] IMPLICIT BOOLEAN,
 *     -- 'true' means this is the full query; 'false', a sub-query
 *     subqueryExpression [3] QueryExpression OPTIONAL,
 *     -- A subquery of the query as submitted.
 *     -- May be whole query; if so, "fullQuery" should be 'true'
 *     subqueryInterpretation [4] QueryExpression OPTIONAL,
 *     -- How server interpreted subquery
 *     subqueryRecommendation [5] QueryExpression OPTIONAL,
 *     -- Server-recommended alternative
 *     subqueryCount [6] IMPLICIT INTEGER OPTIONAL,
 *     -- Number of records for thissubQuery, across
 *     -- all of the specified databases. (If during search,
 *     -- via resource control, number of records so far)
 *     subqueryWeight [7] IMPLICIT IntUnit OPTIONAL,
 *     -- Relative weight of this subquery
 *     resultsByDB [8] IMPLICIT ResultsByDB OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SearchInfoReport_Item {
    /**
     * @summary `subqueryId`.
     * @description
     * 
     * Shorthand identifier of the subquery.
     * 
     * @public
     * @readonly
     */
    readonly subqueryId: OPTIONAL<InternationalString>;
    /**
     * @summary `fullQuery`.
     * @description
     * 
     * True when this is the whole query; false when it is a subquery.
     * 
     * @public
     * @readonly
     */
    readonly fullQuery: BOOLEAN;
    /**
     * @summary `subqueryExpression`.
     * @description
     * 
     * A subquery of the query as submitted. It may be the whole query; then
     * fullQuery should be true.
     * 
     * @public
     * @readonly
     */
    readonly subqueryExpression: OPTIONAL<QueryExpression>;
    /**
     * @summary `subqueryInterpretation`.
     * @description
     * 
     * How the server interpreted the subquery.
     * 
     * @public
     * @readonly
     */
    readonly subqueryInterpretation: OPTIONAL<QueryExpression>;
    /**
     * @summary `subqueryRecommendation`.
     * @description
     * 
     * An alternative the server recommends.
     * 
     * @public
     * @readonly
     */
    readonly subqueryRecommendation: OPTIONAL<QueryExpression>;
    /**
     * @summary `subqueryCount`.
     * @description
     * 
     * Records for this subquery across the specified databases. During a
     * search, via resource control, the count so far.
     * 
     * @public
     * @readonly
     */
    readonly subqueryCount: OPTIONAL<INTEGER>;
    /**
     * @summary `subqueryWeight`.
     * @description
     * 
     * Relative weight of this subquery.
     * 
     * @public
     * @readonly
     */
    readonly subqueryWeight: OPTIONAL<IntUnit>;
    /**
     * @summary `resultsByDB`.
     * @description
     * 
     * The same count broken out by database, or across all databases in the
     * Search.
     * 
     * @public
     * @readonly
     */
    readonly resultsByDB: OPTIONAL<ResultsByDB>;

    constructor (
        subqueryId: OPTIONAL<InternationalString>,
        fullQuery: BOOLEAN,
        subqueryExpression: OPTIONAL<QueryExpression>,
        subqueryInterpretation: OPTIONAL<QueryExpression>,
        subqueryRecommendation: OPTIONAL<QueryExpression>,
        subqueryCount: OPTIONAL<INTEGER>,
        subqueryWeight: OPTIONAL<IntUnit>,
        resultsByDB: OPTIONAL<ResultsByDB>
    ) {
        this.subqueryId = subqueryId;
        this.fullQuery = fullQuery;
        this.subqueryExpression = subqueryExpression;
        this.subqueryInterpretation = subqueryInterpretation;
        this.subqueryRecommendation = subqueryRecommendation;
        this.subqueryCount = subqueryCount;
        this.subqueryWeight = subqueryWeight;
        this.resultsByDB = resultsByDB;
    }

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
    new $.ComponentSpec("subqueryId", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("fullQuery", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("subqueryExpression", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("subqueryInterpretation", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("subqueryRecommendation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("subqueryCount", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("subqueryWeight", true, $.hasTag(_TagClass.context, 7)),
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
    const _components: _Element[] = new Array(8);
    let _components_i = 0;
    if (value.subqueryId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.subqueryId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.fullQuery, $.BER);
    if (value.subqueryExpression !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_QueryExpression, $.BER)(value.subqueryExpression, $.BER);
    }
    if (value.subqueryInterpretation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_QueryExpression, $.BER)(value.subqueryInterpretation, $.BER);
    }
    if (value.subqueryRecommendation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_QueryExpression, $.BER)(value.subqueryRecommendation, $.BER);
    }
    if (value.subqueryCount !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.subqueryCount, $.BER);
    }
    if (value.subqueryWeight !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_IntUnit, $.BER)(value.subqueryWeight, $.BER);
    }
    if (value.resultsByDB !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_ResultsByDB, $.BER)(value.resultsByDB, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SearchInfoReport_Item(value, elGetter);
}


/* eslint-enable */
