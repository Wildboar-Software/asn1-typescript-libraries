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



/**
 * @summary QueryExpression_term
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QueryExpression-term ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class QueryExpression_term {
    constructor (
        /**
         * @summary `queryTerm`.
         * @public
         * @readonly
         */
        readonly queryTerm: Term,
        /**
         * @summary `termComment`.
         * @public
         * @readonly
         */
        readonly termComment: OPTIONAL<InternationalString>
    ) {}

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
    /* FIXME: queryTerm COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: termComment COULD_NOT_RESOLVE_TYPE_DEF */
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_Term, $.BER)(value.queryTerm, $.BER),
            /* IF_ABSENT  */ ((value.termComment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.termComment, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_QueryExpression_term(value, elGetter);
}


/* eslint-enable */
