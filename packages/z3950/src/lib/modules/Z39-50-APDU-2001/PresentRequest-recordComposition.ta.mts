/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ElementSetNames, _decode_ElementSetNames, _encode_ElementSetNames } from "../Z39-50-APDU-2001/ElementSetNames.ta.mjs";
// export { ElementSetNames, _decode_ElementSetNames, _encode_ElementSetNames } from "../Z39-50-APDU-2001/ElementSetNames.ta.mjs";
import { CompSpec, _decode_CompSpec, _encode_CompSpec } from "../Z39-50-APDU-2001/CompSpec.ta.mjs";
// export { CompSpec, _decode_CompSpec, _encode_CompSpec } from "../Z39-50-APDU-2001/CompSpec.ta.mjs";


/**
 * @summary PresentRequest_recordComposition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresentRequest-recordComposition ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type PresentRequest_recordComposition =
    { simple: ElementSetNames } /* CHOICE_ALT_ROOT */
    | { complex: CompSpec } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PresentRequest_recordComposition: $.ASN1Decoder<PresentRequest_recordComposition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresentRequest_recordComposition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresentRequest_recordComposition (el: _Element): PresentRequest_recordComposition {
    if (!_cached_decoder_for_PresentRequest_recordComposition) { _cached_decoder_for_PresentRequest_recordComposition = $._decode_inextensible_choice<PresentRequest_recordComposition>({
    "CONTEXT 19": [ "simple", $._decode_explicit<ElementSetNames>(() => _decode_ElementSetNames) ],
    "CONTEXT 209": [ "complex", $._decode_implicit<CompSpec>(() => _decode_CompSpec) ]
}); }
    return _cached_decoder_for_PresentRequest_recordComposition(el);
}

let _cached_encoder_for_PresentRequest_recordComposition: $.ASN1Encoder<PresentRequest_recordComposition> | null = null;

/**
 * @summary Encodes a(n) PresentRequest_recordComposition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresentRequest_recordComposition, encoded as an ASN.1 Element.
 */
export
function _encode_PresentRequest_recordComposition (value: PresentRequest_recordComposition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresentRequest_recordComposition) { _cached_encoder_for_PresentRequest_recordComposition = $._encode_choice<PresentRequest_recordComposition>({
    "simple": $._encode_explicit(_TagClass.context, 19, () => _encode_ElementSetNames, $.BER),
    "complex": $._encode_implicit(_TagClass.context, 209, () => _encode_CompSpec, $.BER),
}, $.BER); }
    return _cached_encoder_for_PresentRequest_recordComposition(value, elGetter);
}


/* eslint-enable */
