/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Parameter, _decode_Parameter, _encode_Parameter } from "../EmberPlus-Glow/Parameter.ta.mjs";
// export { Parameter, _decode_Parameter, _encode_Parameter } from "../EmberPlus-Glow/Parameter.ta.mjs";
import { Node, _decode_Node, _encode_Node } from "../EmberPlus-Glow/Node.ta.mjs";
// export { Node, _decode_Node, _encode_Node } from "../EmberPlus-Glow/Node.ta.mjs";
import { Matrix, _decode_Matrix, _encode_Matrix } from "../EmberPlus-Glow/Matrix.ta.mjs";
// export { Matrix, _decode_Matrix, _encode_Matrix } from "../EmberPlus-Glow/Matrix.ta.mjs";
import { Function, _decode_Function, _encode_Function } from "../EmberPlus-Glow/Function.ta.mjs";
// export { Function, _decode_Function, _encode_Function } from "../EmberPlus-Glow/Function.ta.mjs";


/**
 * @summary TemplateElement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TemplateElement  ::= 
 *     CHOICE {
 *         parameter        Parameter,
 *         node            Node,
 *         matrix            Matrix,
 *         function        Function
 *     }
 * ```
 */
export
type TemplateElement =
    { parameter: Parameter } /* CHOICE_ALT_ROOT */
    | { node: Node } /* CHOICE_ALT_ROOT */
    | { matrix: Matrix } /* CHOICE_ALT_ROOT */
    | { function_: Function } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TemplateElement: $.ASN1Decoder<TemplateElement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TemplateElement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TemplateElement (el: _Element): TemplateElement {
    if (!_cached_decoder_for_TemplateElement) { _cached_decoder_for_TemplateElement = $._decode_inextensible_choice<TemplateElement>({
    "APPLICATION 1": [ "parameter", _decode_Parameter ],
    "APPLICATION 3": [ "node", _decode_Node ],
    "APPLICATION 13": [ "matrix", _decode_Matrix ],
    "APPLICATION 19": [ "function_", _decode_Function ]
}); }
    return _cached_decoder_for_TemplateElement(el);
}

let _cached_encoder_for_TemplateElement: $.ASN1Encoder<TemplateElement> | null = null;

/**
 * @summary Encodes a(n) TemplateElement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TemplateElement, encoded as an ASN.1 Element.
 */
export
function _encode_TemplateElement (value: TemplateElement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TemplateElement) { _cached_encoder_for_TemplateElement = $._encode_choice<TemplateElement>({
    "parameter": _encode_Parameter,
    "node": _encode_Node,
    "matrix": _encode_Matrix,
    "function_": _encode_Function,
}, $.BER); }
    return _cached_encoder_for_TemplateElement(value, elGetter);
}


/* eslint-enable */
