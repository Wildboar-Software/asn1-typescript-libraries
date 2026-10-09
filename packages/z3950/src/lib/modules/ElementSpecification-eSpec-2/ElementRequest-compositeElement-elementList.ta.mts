/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
// export { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { SimpleElement, _decode_SimpleElement, _encode_SimpleElement } from "../ElementSpecification-eSpec-2/SimpleElement.ta.mjs";
// export { SimpleElement, _decode_SimpleElement, _encode_SimpleElement } from "../ElementSpecification-eSpec-2/SimpleElement.ta.mjs";


/**
 * @summary ElementRequest_compositeElement_elementList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementRequest-compositeElement-elementList ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ElementRequest_compositeElement_elementList =
    { primitives: InternationalString[] } /* CHOICE_ALT_ROOT */
    | { specs: SimpleElement[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ElementRequest_compositeElement_elementList: $.ASN1Decoder<ElementRequest_compositeElement_elementList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElementRequest_compositeElement_elementList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElementRequest_compositeElement_elementList (el: _Element): ElementRequest_compositeElement_elementList {
    if (!_cached_decoder_for_ElementRequest_compositeElement_elementList) { _cached_decoder_for_ElementRequest_compositeElement_elementList = $._decode_inextensible_choice<ElementRequest_compositeElement_elementList>({
    "CONTEXT 1": [ "primitives", $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString)) ],
    "CONTEXT 2": [ "specs", $._decode_implicit<SimpleElement[]>(() => $._decodeSequenceOf<SimpleElement>(() => _decode_SimpleElement)) ]
}); }
    return _cached_decoder_for_ElementRequest_compositeElement_elementList(el);
}

let _cached_encoder_for_ElementRequest_compositeElement_elementList: $.ASN1Encoder<ElementRequest_compositeElement_elementList> | null = null;

/**
 * @summary Encodes a(n) ElementRequest_compositeElement_elementList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementRequest_compositeElement_elementList, encoded as an ASN.1 Element.
 */
export
function _encode_ElementRequest_compositeElement_elementList (value: ElementRequest_compositeElement_elementList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElementRequest_compositeElement_elementList) { _cached_encoder_for_ElementRequest_compositeElement_elementList = $._encode_choice<ElementRequest_compositeElement_elementList>({
    "primitives": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER),
    "specs": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<SimpleElement>(() => _encode_SimpleElement, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_ElementRequest_compositeElement_elementList(value, elGetter);
}


/* eslint-enable */
