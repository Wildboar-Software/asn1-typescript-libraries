/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeList, _decode_AttributeList, _encode_AttributeList } from "../Z39-50-APDU-2001/AttributeList.ta.mjs";
import { Term, _decode_Term, _encode_Term } from "../Z39-50-APDU-2001/Term.ta.mjs";


/**
 * @summary AttributesPlusTerm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributesPlusTerm ::= [102] IMPLICIT SEQUENCE {
 *     attributes  AttributeList,
 *     term        Term
 * }
 * ```
 * 
 * @class
 */
export
class AttributesPlusTerm {
    /**
     * @summary `attributes`.
     * @public
     * @readonly
     */
    readonly attributes: AttributeList;
    /**
     * @summary `term`.
     * @public
     * @readonly
     */
    readonly term: Term;

    constructor (
        attributes: AttributeList,
        term: Term
    ) {
        this.attributes = attributes;
        this.term = term;
    }

    /**
     * @summary Restructures an object into a AttributesPlusTerm
     * @description
     * 
     * This takes an `object` and converts it to a `AttributesPlusTerm`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributesPlusTerm`.
     * @returns {AttributesPlusTerm}
     */
    public static _from_object (_o: { [_K in keyof (AttributesPlusTerm)]: (AttributesPlusTerm)[_K] }): AttributesPlusTerm {
        return new AttributesPlusTerm(_o.attributes, _o.term);
    }


}

/**
 * @summary The Leading Root Component Types of AttributesPlusTerm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributesPlusTerm: $.ComponentSpec[] = [
    new $.ComponentSpec("attributes", false, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("term", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of AttributesPlusTerm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributesPlusTerm: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributesPlusTerm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributesPlusTerm: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributesPlusTerm: $.ASN1Decoder<AttributesPlusTerm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributesPlusTerm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributesPlusTerm (el: _Element): AttributesPlusTerm {
    if (!_cached_decoder_for_AttributesPlusTerm) { _cached_decoder_for_AttributesPlusTerm = $._decode_implicit<AttributesPlusTerm>(() => function (el: _Element): AttributesPlusTerm {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AttributesPlusTerm contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "attributes";
    sequence[1].name = "term";
    let attributes!: AttributeList;
    let term!: Term;
    attributes = _decode_AttributeList(sequence[0]);
    term = _decode_Term(sequence[1]);
    return new AttributesPlusTerm(
        attributes,
        term,

    );
}); }
    return _cached_decoder_for_AttributesPlusTerm(el);
}

let _cached_encoder_for_AttributesPlusTerm: $.ASN1Encoder<AttributesPlusTerm> | null = null;

/**
 * @summary Encodes a(n) AttributesPlusTerm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributesPlusTerm, encoded as an ASN.1 Element.
 */
export
function _encode_AttributesPlusTerm (value: AttributesPlusTerm, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributesPlusTerm) { _cached_encoder_for_AttributesPlusTerm = $._encode_implicit(_TagClass.context, 102, () => $._encode_implicit(_TagClass.context, 102, () => function (value: AttributesPlusTerm, elGetter: $.ASN1Encoder<AttributesPlusTerm>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 44, () => _encode_AttributeList, $.BER)(value.attributes, $.BER),
        /* REQUIRED   */ _encode_Term(value.term, $.BER)
    ], $.BER);
}, $.BER), $.BER); }
    return _cached_encoder_for_AttributesPlusTerm(value, elGetter);
}


/* eslint-enable */
