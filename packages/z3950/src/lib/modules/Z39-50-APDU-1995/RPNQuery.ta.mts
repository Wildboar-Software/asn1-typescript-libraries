/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeSetId, _decode_AttributeSetId, _encode_AttributeSetId } from "./AttributeSetId.ta.mjs";
import { RPNStructure, _decode_RPNStructure, _encode_RPNStructure } from "./RPNStructure.ta.mjs";


/**
 * @summary RPNQuery
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RPNQuery ::= SEQUENCE {
 *     attributeSet   AttributeSetId,
 *     rpn            RPNStructure
 * }
 * ```
 */
export
class RPNQuery {
    constructor (
        readonly attributeSet: AttributeSetId,
        readonly rpn: RPNStructure
    ) {}

    public static _from_object (_o: { [_K in keyof (RPNQuery)]: (RPNQuery)[_K] }): RPNQuery {
        return new RPNQuery(_o.attributeSet, _o.rpn);
    }
}

export
const _root_component_type_list_1_spec_for_RPNQuery: $.ComponentSpec[] = [
    new $.ComponentSpec("attributeSet", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("rpn", false, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1))),
];

export
const _root_component_type_list_2_spec_for_RPNQuery: $.ComponentSpec[] = [

];

export
const _extension_additions_list_spec_for_RPNQuery: $.ComponentSpec[] = [

];

let _cached_decoder_for_RPNQuery: $.ASN1Decoder<RPNQuery> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RPNQuery
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RPNQuery (el: _Element): RPNQuery {
    if (!_cached_decoder_for_RPNQuery) { _cached_decoder_for_RPNQuery = function (el: _Element): RPNQuery {
    let attributeSet!: AttributeSetId;
    let rpn!: RPNStructure;
    const callbacks: $.DecodingMap = {
        "attributeSet": (_el: _Element): void => { attributeSet = _decode_AttributeSetId(_el); },
        "rpn": (_el: _Element): void => { rpn = _decode_RPNStructure(_el); },
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RPNQuery,
        _extension_additions_list_spec_for_RPNQuery,
        _root_component_type_list_2_spec_for_RPNQuery,
        undefined,
    );
    return new RPNQuery(
        attributeSet,
        rpn,
    );
}; }
    return _cached_decoder_for_RPNQuery(el);
}

let _cached_encoder_for_RPNQuery: $.ASN1Encoder<RPNQuery> | null = null;

/**
 * @summary Encodes a(n) RPNQuery into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RPNQuery, encoded as an ASN.1 Element.
 */
export
function _encode_RPNQuery (value: RPNQuery, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RPNQuery) { _cached_encoder_for_RPNQuery = function (value: RPNQuery, elGetter: $.ASN1Encoder<RPNQuery>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AttributeSetId(value.attributeSet, $.BER),
            /* REQUIRED   */ _encode_RPNStructure(value.rpn, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RPNQuery(value, elGetter);
}

/* eslint-enable */
