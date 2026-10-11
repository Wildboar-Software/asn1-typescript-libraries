/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SimpleElement, _decode_SimpleElement, _encode_SimpleElement } from "../ElementSpecification-eSpec-2/SimpleElement.ta.mjs";
import { ElementRequest_compositeElement, _decode_ElementRequest_compositeElement, _encode_ElementRequest_compositeElement } from "../ElementSpecification-eSpec-2/ElementRequest-compositeElement.ta.mjs";


/**
 * @summary ElementRequest
 * @description
 * 
 * One element request: a simple element, or a composite built from simple
 * elements (ANSI/NISO Z39.50-2003, RET.3.1, ASN1.13). A simple request can
 * still select many nodes, when the path ends on a non-leaf, occurrence is
 * `all` or a range, or the path contains a wildcard (RET.3.1.1.3).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementRequest ::=  CHOICE {
 *     simpleElement       [1] IMPLICIT SimpleElement,
 *     compositeElement    [2] IMPLICIT SEQUENCE {
 *         elementList         [1] CHOICE {
 *             primitives          [1] IMPLICIT SEQUENCE OF InternationalString,
 *             -- Client may specify one or more element set names,
 *             -- each identifying a set of elements, and the composite element is the union
 *             specs               [2] IMPLICIT SEQUENCE OF SimpleElement
 *         },
 *         deliveryTag         [2] IMPLICIT TagPath,
 *         -- DeliveryTag tagPath for compositeElement
 *         -- may not include wildThing or wildPath
 *         variantRequest      [3] IMPLICIT Variant OPTIONAL
 *     }
 * }
 * ```
 */
export
type ElementRequest =
    { simpleElement: SimpleElement } /* CHOICE_ALT_ROOT */
    | { compositeElement: ElementRequest_compositeElement } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ElementRequest: $.ASN1Decoder<ElementRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElementRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElementRequest (el: _Element): ElementRequest {
    if (!_cached_decoder_for_ElementRequest) { _cached_decoder_for_ElementRequest = $._decode_inextensible_choice<ElementRequest>({
    "CONTEXT 1": [ "simpleElement", $._decode_implicit<SimpleElement>(() => _decode_SimpleElement) ],
    "CONTEXT 2": [ "compositeElement", $._decode_implicit<ElementRequest_compositeElement>(() => _decode_ElementRequest_compositeElement) ]
}); }
    return _cached_decoder_for_ElementRequest(el);
}

let _cached_encoder_for_ElementRequest: $.ASN1Encoder<ElementRequest> | null = null;

/**
 * @summary Encodes a(n) ElementRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ElementRequest (value: ElementRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElementRequest) { _cached_encoder_for_ElementRequest = $._encode_choice<ElementRequest>({
    "simpleElement": $._encode_implicit(_TagClass.context, 1, () => _encode_SimpleElement, $.BER),
    "compositeElement": $._encode_implicit(_TagClass.context, 2, () => _encode_ElementRequest_compositeElement, $.BER),
}, $.BER); }
    return _cached_encoder_for_ElementRequest(value, elGetter);
}


/* eslint-enable */
