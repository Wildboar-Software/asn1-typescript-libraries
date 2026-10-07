/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeList, _decode_AttributeList, _encode_AttributeList } from "./AttributeList.ta.mjs";
import { Term, _decode_Term, _encode_Term } from "./Term.ta.mjs";


/**
 * @summary AttributesPlusTerm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributesPlusTerm ::= [102] IMPLICIT SEQUENCE {
 *     attributes   AttributeList,
 *     term         Term
 * }
 * ```
 */
export
class AttributesPlusTerm {
    constructor (
        readonly attributes: AttributeList,
        readonly term: Term
    ) {}

    public static _from_object (_o: { [_K in keyof (AttributesPlusTerm)]: (AttributesPlusTerm)[_K] }): AttributesPlusTerm {
        return new AttributesPlusTerm(_o.attributes, _o.term);
    }
}

export
const _root_component_type_list_1_spec_for_AttributesPlusTerm: $.ComponentSpec[] = [
    new $.ComponentSpec("attributes", false, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("term", false, $.or($.hasTag(_TagClass.context, 45), $.hasTag(_TagClass.context, 215), $.hasTag(_TagClass.context, 216), $.hasTag(_TagClass.context, 217), $.hasTag(_TagClass.context, 218), $.hasTag(_TagClass.context, 219), $.hasTag(_TagClass.context, 220), $.hasTag(_TagClass.context, 221))),
];

export
const _root_component_type_list_2_spec_for_AttributesPlusTerm: $.ComponentSpec[] = [

];

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
    let attributes!: AttributeList;
    let term!: Term;
    const callbacks: $.DecodingMap = {
        "attributes": (_el: _Element): void => { attributes = _decode_AttributeList(_el); },
        "term": (_el: _Element): void => { term = _decode_Term(_el); },
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributesPlusTerm,
        _extension_additions_list_spec_for_AttributesPlusTerm,
        _root_component_type_list_2_spec_for_AttributesPlusTerm,
        undefined,
    );
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
    if (!_cached_encoder_for_AttributesPlusTerm) { _cached_encoder_for_AttributesPlusTerm = $._encode_implicit(_TagClass.context, 102, () => function (value: AttributesPlusTerm, elGetter: $.ASN1Encoder<AttributesPlusTerm>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AttributeList(value.attributes, $.BER),
            /* REQUIRED   */ _encode_Term(value.term, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_AttributesPlusTerm(value, elGetter);
}

/* eslint-enable */
