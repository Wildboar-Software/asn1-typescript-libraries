/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Term, _decode_Term, _encode_Term } from "../Z39-50-APDU-2001/Term.ta.mjs";
// export { Term, _decode_Term, _encode_Term } from "../Z39-50-APDU-2001/Term.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
// export { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary QueryExpression_term
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QueryExpression-term ::= SEQUENCE {
 *     queryTerm [1] Term,
 *     termComment [2] IMPLICIT InternationalString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class QueryExpression_term {
    /**
     * @summary `queryTerm`.
     * @public
     * @readonly
     */
    readonly queryTerm: Term;
    /**
     * @summary `termComment`.
     * @public
     * @readonly
     */
    readonly termComment: OPTIONAL<InternationalString>;

    constructor (
        queryTerm: Term,
        termComment: OPTIONAL<InternationalString>
    ) {
        this.queryTerm = queryTerm;
        this.termComment = termComment;
    }

    /**
     * @summary Restructures an object into a QueryExpression_term
     * @description
     * 
     * This takes an `object` and converts it to a `QueryExpression_term`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `QueryExpression_term`.
     * @returns {QueryExpression_term}
     */
    public static _from_object (_o: { [_K in keyof (QueryExpression_term)]: (QueryExpression_term)[_K] }): QueryExpression_term {
        return new QueryExpression_term(_o.queryTerm, _o.termComment);
    }


}

/**
 * @summary The Leading Root Component Types of QueryExpression_term
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_QueryExpression_term: $.ComponentSpec[] = [
    new $.ComponentSpec("queryTerm", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("termComment", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of QueryExpression_term
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_QueryExpression_term: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of QueryExpression_term
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_QueryExpression_term: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_QueryExpression_term: $.ASN1Decoder<QueryExpression_term> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QueryExpression_term
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QueryExpression_term (el: _Element): QueryExpression_term {
    if (!_cached_decoder_for_QueryExpression_term) { _cached_decoder_for_QueryExpression_term = function (el: _Element): QueryExpression_term {
    let queryTerm!: Term;
    let termComment: OPTIONAL<InternationalString>;
    const callbacks: $.DecodingMap = {
        "queryTerm": (_el: _Element): void => { queryTerm = $._decode_explicit<Term>(() => _decode_Term)(_el); },
        "termComment": (_el: _Element): void => { termComment = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_QueryExpression_term,
        _extension_additions_list_spec_for_QueryExpression_term,
        _root_component_type_list_2_spec_for_QueryExpression_term,
        undefined,
    );
    return new QueryExpression_term(
        queryTerm,
        termComment
    );
}; }
    return _cached_decoder_for_QueryExpression_term(el);
}

let _cached_encoder_for_QueryExpression_term: $.ASN1Encoder<QueryExpression_term> | null = null;

/**
 * @summary Encodes a(n) QueryExpression_term into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QueryExpression_term, encoded as an ASN.1 Element.
 */
export
function _encode_QueryExpression_term (value: QueryExpression_term, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QueryExpression_term) { _cached_encoder_for_QueryExpression_term = function (value: QueryExpression_term, elGetter: $.ASN1Encoder<QueryExpression_term>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_Term, $.BER)(value.queryTerm, $.BER);
    if (value.termComment !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.termComment, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_QueryExpression_term(value, elGetter);
}


/* eslint-enable */
