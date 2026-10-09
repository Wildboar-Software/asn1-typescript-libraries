/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiagFormat_term_problem, _decode_DiagFormat_term_problem, _encode_DiagFormat_term_problem } from "../DiagnosticFormatDiag1/DiagFormat-term-problem.ta.mjs";
import { Term, _decode_Term, _encode_Term } from "../Z39-50-APDU-2001/Term.ta.mjs";


/**
 * @summary DiagFormat_term
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-term ::= SEQUENCE {
 *     problem [1] IMPLICIT INTEGER {
 *         codedValue (1),
 *         unparsable (2),
 *         tooShort (3),
 *         type (4)
 *     } OPTIONAL,
 *     term [2] Term
 * }
 * ```
 * 
 * @class
 */
export
class DiagFormat_term {
    /**
     * @summary `problem`.
     * @public
     * @readonly
     */
    readonly problem: OPTIONAL<DiagFormat_term_problem>;
    /**
     * @summary `term`.
     * @public
     * @readonly
     */
    readonly term: Term;

    constructor (
        problem: OPTIONAL<DiagFormat_term_problem>,
        term: Term
    ) {
        this.problem = problem;
        this.term = term;
    }

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
    new $.ComponentSpec("term", false, $.hasTag(_TagClass.context, 2))
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
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.problem !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_DiagFormat_term_problem, $.BER)(value.problem, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_Term, $.BER)(value.term, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DiagFormat_term(value, elGetter);
}


/* eslint-enable */
