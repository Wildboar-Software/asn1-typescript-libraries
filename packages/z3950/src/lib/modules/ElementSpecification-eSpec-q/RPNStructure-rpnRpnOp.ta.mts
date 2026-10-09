/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RPNStructure, _decode_RPNStructure, _encode_RPNStructure } from "../ElementSpecification-eSpec-q/RPNStructure.ta.mjs";
// export { RPNStructure, _decode_RPNStructure, _encode_RPNStructure } from "../ElementSpecification-eSpec-q/RPNStructure.ta.mjs";
import { RPNStructure_rpnRpnOp_op, _decode_RPNStructure_rpnRpnOp_op, _encode_RPNStructure_rpnRpnOp_op } from "../ElementSpecification-eSpec-q/RPNStructure-rpnRpnOp-op.ta.mjs";
// export { RPNStructure_rpnRpnOp_op, _decode_RPNStructure_rpnRpnOp_op, _encode_RPNStructure_rpnRpnOp_op } from "../ElementSpecification-eSpec-q/RPNStructure-rpnRpnOp-op.ta.mjs";


/**
 * @summary RPNStructure_rpnRpnOp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RPNStructure-rpnRpnOp ::= SEQUENCE {
 *     rpn1 RPNStructure,
 *     rpn2 RPNStructure,
 *     op [46] CHOICE {
 *         and [0] IMPLICIT NULL,
 *         or [1] IMPLICIT NULL,
 *         and-not [2] IMPLICIT NULL
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class RPNStructure_rpnRpnOp {
    /**
     * @summary `rpn1`.
     * @public
     * @readonly
     */
    readonly rpn1: RPNStructure;
    /**
     * @summary `rpn2`.
     * @public
     * @readonly
     */
    readonly rpn2: RPNStructure;
    /**
     * @summary `op`.
     * @public
     * @readonly
     */
    readonly op: RPNStructure_rpnRpnOp_op;

    constructor (
        rpn1: RPNStructure,
        rpn2: RPNStructure,
        op: RPNStructure_rpnRpnOp_op
    ) {
        this.rpn1 = rpn1;
        this.rpn2 = rpn2;
        this.op = op;
    }

    /**
     * @summary Restructures an object into a RPNStructure_rpnRpnOp
     * @description
     * 
     * This takes an `object` and converts it to a `RPNStructure_rpnRpnOp`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RPNStructure_rpnRpnOp`.
     * @returns {RPNStructure_rpnRpnOp}
     */
    public static _from_object (_o: { [_K in keyof (RPNStructure_rpnRpnOp)]: (RPNStructure_rpnRpnOp)[_K] }): RPNStructure_rpnRpnOp {
        return new RPNStructure_rpnRpnOp(_o.rpn1, _o.rpn2, _o.op);
    }


}

/**
 * @summary The Leading Root Component Types of RPNStructure_rpnRpnOp
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RPNStructure_rpnRpnOp: $.ComponentSpec[] = [
    new $.ComponentSpec("rpn1", false, $.hasAnyTag),
    new $.ComponentSpec("rpn2", false, $.hasAnyTag),
    new $.ComponentSpec("op", false, $.hasTag(_TagClass.context, 46))
];

/**
 * @summary The Trailing Root Component Types of RPNStructure_rpnRpnOp
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RPNStructure_rpnRpnOp: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RPNStructure_rpnRpnOp
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
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
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("RPNStructure-rpnRpnOp contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "rpn1";
    sequence[1].name = "rpn2";
    sequence[2].name = "op";
    let rpn1!: RPNStructure;
    let rpn2!: RPNStructure;
    let op!: RPNStructure_rpnRpnOp_op;
    rpn1 = _decode_RPNStructure(sequence[0]);
    rpn2 = _decode_RPNStructure(sequence[1]);
    op = $._decode_explicit<RPNStructure_rpnRpnOp_op>(() => _decode_RPNStructure_rpnRpnOp_op)(sequence[2]);
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
    return $._encodeSequence([
        /* REQUIRED   */ _encode_RPNStructure(value.rpn1, $.BER),
        /* REQUIRED   */ _encode_RPNStructure(value.rpn2, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 46, () => _encode_RPNStructure_rpnRpnOp_op, $.BER)(value.op, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RPNStructure_rpnRpnOp(value, elGetter);
}


/* eslint-enable */
