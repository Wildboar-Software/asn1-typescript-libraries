/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_DiagFormat_term_problem, _encode_DiagFormat_term_problem, DiagFormat_term_problem } from "../DiagnosticFormatDiag1/DiagFormat-term-problem.ta.mjs";
// export { DiagFormat_term_problem, DiagFormat_term_problem_codedValue /* IMPORTED_LONG_NAMED_INTEGER */, codedValue /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_term_problem_unparsable /* IMPORTED_LONG_NAMED_INTEGER */, unparsable /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_term_problem_tooShort /* IMPORTED_LONG_NAMED_INTEGER */, tooShort /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_term_problem_type /* IMPORTED_LONG_NAMED_INTEGER */, type_ /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DiagFormat_term_problem, _encode_DiagFormat_term_problem } from "../DiagnosticFormatDiag1/DiagFormat-term-problem.ta.mjs";


/**
 * @summary DiagFormat_term
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-term ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class DiagFormat_term {
    constructor (
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: OPTIONAL<DiagFormat_term_problem>,
        /**
         * @summary `term`.
         * @public
         * @readonly
         */
        readonly term: Term
    ) {}

    /**
     * @summary Restructures an object into a DiagFormat_term
     * @description
     * 
     * This takes an `object` and converts it to a `DiagFormat_term`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DiagFormat_term`.
     * @returns {DiagFormat_term}
     */
    public static _from_object (_o: { [_K in keyof (DiagFormat_term)]: (DiagFormat_term)[_K] }): DiagFormat_term {
        return new DiagFormat_term(_o.problem, _o.term);
    }


}

/**
 * @summary The Leading Root Component Types of DiagFormat_term
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DiagFormat_term: $.ComponentSpec[] = [
    new $.ComponentSpec("problem", true, $.hasTag(_TagClass.context, 1)),
    /* FIXME: term COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of DiagFormat_term
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DiagFormat_term: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DiagFormat_term
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DiagFormat_term: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DiagFormat_term: $.ASN1Decoder<DiagFormat_term> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_term
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_term (el: _Element): DiagFormat_term {
    if (!_cached_decoder_for_DiagFormat_term) { _cached_decoder_for_DiagFormat_term = function (el: _Element): DiagFormat_term {
    let problem: OPTIONAL<DiagFormat_term_problem>;
    let term!: Term;
    const callbacks: $.DecodingMap = {
        "problem": (_el: _Element): void => { problem = $._decode_implicit<DiagFormat_term_problem>(() => _decode_DiagFormat_term_problem)(_el); },
        "term": (_el: _Element): void => { term = $._decode_explicit<Term>(() => _decode_Term)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DiagFormat_term,
        _extension_additions_list_spec_for_DiagFormat_term,
        _root_component_type_list_2_spec_for_DiagFormat_term,
        undefined,
    );
    return new DiagFormat_term(
        problem,
        term
    );
}; }
    return _cached_decoder_for_DiagFormat_term(el);
}

let _cached_encoder_for_DiagFormat_term: $.ASN1Encoder<DiagFormat_term> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_term into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_term, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_term (value: DiagFormat_term, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_term) { _cached_encoder_for_DiagFormat_term = function (value: DiagFormat_term, elGetter: $.ASN1Encoder<DiagFormat_term>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.problem === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DiagFormat_term_problem, $.BER)(value.problem, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_Term, $.BER)(value.term, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DiagFormat_term(value, elGetter);
}


/* eslint-enable */
