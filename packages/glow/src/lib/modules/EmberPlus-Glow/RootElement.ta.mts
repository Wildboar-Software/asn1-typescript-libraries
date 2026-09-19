/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Element, _decode_Element, _encode_Element } from "../EmberPlus-Glow/Element.ta.mjs";
// export { Element, _decode_Element, _encode_Element } from "../EmberPlus-Glow/Element.ta.mjs";
import { QualifiedParameter, _decode_QualifiedParameter, _encode_QualifiedParameter } from "../EmberPlus-Glow/QualifiedParameter.ta.mjs";
// export { QualifiedParameter, _decode_QualifiedParameter, _encode_QualifiedParameter } from "../EmberPlus-Glow/QualifiedParameter.ta.mjs";
import { QualifiedNode, _decode_QualifiedNode, _encode_QualifiedNode } from "../EmberPlus-Glow/QualifiedNode.ta.mjs";
// export { QualifiedNode, _decode_QualifiedNode, _encode_QualifiedNode } from "../EmberPlus-Glow/QualifiedNode.ta.mjs";
import { QualifiedMatrix, _decode_QualifiedMatrix, _encode_QualifiedMatrix } from "../EmberPlus-Glow/QualifiedMatrix.ta.mjs";
// export { QualifiedMatrix, _decode_QualifiedMatrix, _encode_QualifiedMatrix } from "../EmberPlus-Glow/QualifiedMatrix.ta.mjs";
import { QualifiedFunction, _decode_QualifiedFunction, _encode_QualifiedFunction } from "../EmberPlus-Glow/QualifiedFunction.ta.mjs";
// export { QualifiedFunction, _decode_QualifiedFunction, _encode_QualifiedFunction } from "../EmberPlus-Glow/QualifiedFunction.ta.mjs";
import { QualifiedTemplate, _decode_QualifiedTemplate, _encode_QualifiedTemplate } from "../EmberPlus-Glow/QualifiedTemplate.ta.mjs";
// export { QualifiedTemplate, _decode_QualifiedTemplate, _encode_QualifiedTemplate } from "../EmberPlus-Glow/QualifiedTemplate.ta.mjs";


/**
 * @summary RootElement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RootElement  ::= 
 *     CHOICE {
 *         element            Element,
 *         qualifiedParameter QualifiedParameter,
 *         qualifiedNode      QualifiedNode,
 *         qualifiedMatrix    QualifiedMatrix,
 *         qualifiedFunction  QualifiedFunction,
 *         qualifiedTemplate  QualifiedTemplate
 *     }
 * ```
 */
export
type RootElement =
    { element: Element } /* CHOICE_ALT_ROOT */
    | { qualifiedParameter: QualifiedParameter } /* CHOICE_ALT_ROOT */
    | { qualifiedNode: QualifiedNode } /* CHOICE_ALT_ROOT */
    | { qualifiedMatrix: QualifiedMatrix } /* CHOICE_ALT_ROOT */
    | { qualifiedFunction: QualifiedFunction } /* CHOICE_ALT_ROOT */
    | { qualifiedTemplate: QualifiedTemplate } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RootElement: $.ASN1Decoder<RootElement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RootElement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RootElement (el: _Element): RootElement {
    if (!_cached_decoder_for_RootElement) { _cached_decoder_for_RootElement = $._decode_inextensible_choice<RootElement>({
    "APPLICATION 1": [ "element", _decode_Element ],
    "APPLICATION 3": [ "element", _decode_Element ],
    "APPLICATION 2": [ "element", _decode_Element ],
    "APPLICATION 13": [ "element", _decode_Element ],
    "APPLICATION 19": [ "element", _decode_Element ],
    "APPLICATION 24": [ "element", _decode_Element ],
    "APPLICATION 9": [ "qualifiedParameter", _decode_QualifiedParameter ],
    "APPLICATION 10": [ "qualifiedNode", _decode_QualifiedNode ],
    "APPLICATION 17": [ "qualifiedMatrix", _decode_QualifiedMatrix ],
    "APPLICATION 20": [ "qualifiedFunction", _decode_QualifiedFunction ],
    "APPLICATION 25": [ "qualifiedTemplate", _decode_QualifiedTemplate ]
}); }
    return _cached_decoder_for_RootElement(el);
}

let _cached_encoder_for_RootElement: $.ASN1Encoder<RootElement> | null = null;

/**
 * @summary Encodes a(n) RootElement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RootElement, encoded as an ASN.1 Element.
 */
export
function _encode_RootElement (value: RootElement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RootElement) { _cached_encoder_for_RootElement = $._encode_choice<RootElement>({
    "element": _encode_Element,
    "qualifiedParameter": _encode_QualifiedParameter,
    "qualifiedNode": _encode_QualifiedNode,
    "qualifiedMatrix": _encode_QualifiedMatrix,
    "qualifiedFunction": _encode_QualifiedFunction,
    "qualifiedTemplate": _encode_QualifiedTemplate,
}, $.BER); }
    return _cached_encoder_for_RootElement(value, elGetter);
}


/* eslint-enable */
