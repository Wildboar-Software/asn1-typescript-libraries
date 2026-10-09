/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Term, _decode_Term, _encode_Term } from "../Z39-50-APDU-2001/Term.ta.mjs";


/**
 * @summary DiagFormat_attribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-attribute ::= SEQUENCE {
 *     -- Applies for unsupported attribute set,
 *     -- attribute type, attribute value, or term (for
 *     -- a given attribute type or value).
 *     id [1] IMPLICIT OBJECT IDENTIFIER,
 *     -- if only "id" occurs, then
 *     -- attribute set is not supported
 *     type [2] IMPLICIT INTEGER OPTIONAL,
 *     -- must occur if value occurs.
 *     value [3] IMPLICIT INTEGER OPTIONAL,
 *     -- if omitted, and Type occurs,
 *     -- then Type is what is unsupported
 *     term [4] Term OPTIONAL  -- If occurs, term is illegal or
 *     -- not supported, for attribute
 *     -- value, if value occurs;
 *     -- otherwise, for type.
 * }
 * ```
 * 
 * @class
 */
export
class DiagFormat_attribute {
    /**
     * @summary `id`.
     * @public
     * @readonly
     */
    readonly id: OBJECT_IDENTIFIER;
    /**
     * @summary `type_`.
     * @public
     * @readonly
     */
    readonly type_: OPTIONAL<INTEGER>;
    /**
     * @summary `value`.
     * @public
     * @readonly
     */
    readonly value: OPTIONAL<INTEGER>;
    /**
     * @summary `term`.
     * @public
     * @readonly
     */
    readonly term: OPTIONAL<Term>;

    constructor (
        id: OBJECT_IDENTIFIER,
        type_: OPTIONAL<INTEGER>,
        value: OPTIONAL<INTEGER>,
        term: OPTIONAL<Term>
    ) {
        this.id = id;
        this.type_ = type_;
        this.value = value;
        this.term = term;
    }

    /**
     * @summary Restructures an object into a DiagFormat_attribute
     * @description
     * 
     * This takes an `object` and converts it to a `DiagFormat_attribute`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DiagFormat_attribute`.
     * @returns {DiagFormat_attribute}
     */
    public static _from_object (_o: { [_K in keyof (DiagFormat_attribute)]: (DiagFormat_attribute)[_K] }): DiagFormat_attribute {
        return new DiagFormat_attribute(_o.id, _o.type_, _o.value, _o.term);
    }


}

/**
 * @summary The Leading Root Component Types of DiagFormat_attribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DiagFormat_attribute: $.ComponentSpec[] = [
    new $.ComponentSpec("id", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("type", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("value", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("term", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of DiagFormat_attribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DiagFormat_attribute: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DiagFormat_attribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DiagFormat_attribute: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DiagFormat_attribute: $.ASN1Decoder<DiagFormat_attribute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_attribute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_attribute (el: _Element): DiagFormat_attribute {
    if (!_cached_decoder_for_DiagFormat_attribute) { _cached_decoder_for_DiagFormat_attribute = function (el: _Element): DiagFormat_attribute {
    let id!: OBJECT_IDENTIFIER;
    let type_: OPTIONAL<INTEGER>;
    let value: OPTIONAL<INTEGER>;
    let term: OPTIONAL<Term>;
    const callbacks: $.DecodingMap = {
        "id": (_el: _Element): void => { id = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "type": (_el: _Element): void => { type_ = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "value": (_el: _Element): void => { value = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "term": (_el: _Element): void => { term = $._decode_explicit<Term>(() => _decode_Term)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DiagFormat_attribute,
        _extension_additions_list_spec_for_DiagFormat_attribute,
        _root_component_type_list_2_spec_for_DiagFormat_attribute,
        undefined,
    );
    return new DiagFormat_attribute(
        id,
        type_,
        value,
        term
    );
}; }
    return _cached_decoder_for_DiagFormat_attribute(el);
}

let _cached_encoder_for_DiagFormat_attribute: $.ASN1Encoder<DiagFormat_attribute> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_attribute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_attribute, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_attribute (value: DiagFormat_attribute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_attribute) { _cached_encoder_for_DiagFormat_attribute = function (value: DiagFormat_attribute, elGetter: $.ASN1Encoder<DiagFormat_attribute>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.id, $.BER);
    if (value.type_ !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.type_, $.BER);
    }
    if (value.value !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.value, $.BER);
    }
    if (value.term !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_Term, $.BER)(value.term, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DiagFormat_attribute(value, elGetter);
}


/* eslint-enable */
