/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RPNStructure, _decode_RPNStructure, _encode_RPNStructure } from "./RPNStructure.ta.mjs";
import { Operator, _decode_Operator, _encode_Operator } from "./Operator.ta.mjs";


/**
 * @summary RPNStructure_rpnRpnOp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RPNStructure-rpnRpnOp ::= SEQUENCE {
 *     rpn1   RPNStructure,
 *     rpn2   RPNStructure,
 *     op     Operator
 * }
 * ```
 */
export
class RPNStructure_rpnRpnOp {
    constructor (
        readonly rpn1: RPNStructure,
        readonly rpn2: RPNStructure,
        readonly op: Operator
    ) {}

    public static _from_object (_o: { [_K in keyof (RPNStructure_rpnRpnOp)]: (RPNStructure_rpnRpnOp)[_K] }): RPNStructure_rpnRpnOp {
        return new RPNStructure_rpnRpnOp(_o.rpn1, _o.rpn2, _o.op);
    }
}

export
const _root_component_type_list_1_spec_for_RPNStructure_rpnRpnOp: $.ComponentSpec[] = [
    new $.ComponentSpec("rpn1", false, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1))),
    new $.ComponentSpec("rpn2", false, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1))),
    new $.ComponentSpec("op", false, $.hasTag(_TagClass.context, 46)),
];

export
const _root_component_type_list_2_spec_for_RPNStructure_rpnRpnOp: $.ComponentSpec[] = [

];

export
const _extension_additions_list_spec_for_RPNStructure_rpnRpnOp: $.ComponentSpec[] = [

];

let _cached_decoder_for_RPNStructure_rpnRpnOp: $.ASN1Decoder<RPNStructure_rpnRpnOp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RPNStructure_rpnRpnOp
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RPNStructure_rpnRpnOp (el: _Element): RPNStructure_rpnRpnOp {
    if (!_cached_decoder_for_RPNStructure_rpnRpnOp) { _cached_decoder_for_RPNStructure_rpnRpnOp = function (el: _Element): RPNStructure_rpnRpnOp {
    let rpn1!: RPNStructure;
    let rpn2!: RPNStructure;
    let op!: Operator;
    const callbacks: $.DecodingMap = {
        "rpn1": (_el: _Element): void => { rpn1 = _decode_RPNStructure(_el); },
        "rpn2": (_el: _Element): void => { rpn2 = _decode_RPNStructure(_el); },
        "op": (_el: _Element): void => { op = _decode_Operator(_el); },
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RPNStructure_rpnRpnOp,
        _extension_additions_list_spec_for_RPNStructure_rpnRpnOp,
        _root_component_type_list_2_spec_for_RPNStructure_rpnRpnOp,
        undefined,
    );
    return new RPNStructure_rpnRpnOp(
        rpn1,
        rpn2,
        op,
    );
}; }
    return _cached_decoder_for_RPNStructure_rpnRpnOp(el);
}

let _cached_encoder_for_RPNStructure_rpnRpnOp: $.ASN1Encoder<RPNStructure_rpnRpnOp> | null = null;

/**
 * @summary Encodes a(n) RPNStructure_rpnRpnOp into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RPNStructure_rpnRpnOp, encoded as an ASN.1 Element.
 */
export
function _encode_RPNStructure_rpnRpnOp (value: RPNStructure_rpnRpnOp, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RPNStructure_rpnRpnOp) { _cached_encoder_for_RPNStructure_rpnRpnOp = function (value: RPNStructure_rpnRpnOp, elGetter: $.ASN1Encoder<RPNStructure_rpnRpnOp>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RPNStructure(value.rpn1, $.BER),
            /* REQUIRED   */ _encode_RPNStructure(value.rpn2, $.BER),
            /* REQUIRED   */ _encode_Operator(value.op, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RPNStructure_rpnRpnOp(value, elGetter);
}

/* eslint-enable */
