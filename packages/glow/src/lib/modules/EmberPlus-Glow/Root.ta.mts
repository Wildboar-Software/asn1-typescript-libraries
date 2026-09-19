/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RootElementCollection, _decode_RootElementCollection, _encode_RootElementCollection } from "../EmberPlus-Glow/RootElementCollection.ta.mjs";
// export { RootElementCollection, _decode_RootElementCollection, _encode_RootElementCollection } from "../EmberPlus-Glow/RootElementCollection.ta.mjs";
import { StreamCollection, _decode_StreamCollection, _encode_StreamCollection } from "../EmberPlus-Glow/StreamCollection.ta.mjs";
// export { StreamCollection, _decode_StreamCollection, _encode_StreamCollection } from "../EmberPlus-Glow/StreamCollection.ta.mjs";
import { InvocationResult, _decode_InvocationResult, _encode_InvocationResult } from "../EmberPlus-Glow/InvocationResult.ta.mjs";
// export { InvocationResult, _decode_InvocationResult, _encode_InvocationResult } from "../EmberPlus-Glow/InvocationResult.ta.mjs";


/**
 * @summary Root
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Root  ::= 
 *    [APPLICATION 0]
 *        CHOICE {
 *            elements         RootElementCollection,
 *            streams          StreamCollection,
 *            invocationResult InvocationResult
 *        }
 * ```
 */
export
type Root =
    { elements: RootElementCollection } /* CHOICE_ALT_ROOT */
    | { streams: StreamCollection } /* CHOICE_ALT_ROOT */
    | { invocationResult: InvocationResult } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Root: $.ASN1Decoder<Root> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Root
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Root (el: _Element): Root {
    if (!_cached_decoder_for_Root) { _cached_decoder_for_Root = $._decode_explicit<Root>(() => $._decode_inextensible_choice<Root>({
    "APPLICATION 11": [ "elements", _decode_RootElementCollection ],
    "APPLICATION 6": [ "streams", _decode_StreamCollection ],
    "APPLICATION 23": [ "invocationResult", _decode_InvocationResult ]
})); }
    return _cached_decoder_for_Root(el);
}

let _cached_encoder_for_Root: $.ASN1Encoder<Root> | null = null;

/**
 * @summary Encodes a(n) Root into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Root, encoded as an ASN.1 Element.
 */
export
function _encode_Root (value: Root, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Root) { _cached_encoder_for_Root = $._encode_explicit(_TagClass.application, 0, () => $._encode_choice<Root>({
    "elements": _encode_RootElementCollection,
    "streams": _encode_StreamCollection,
    "invocationResult": _encode_InvocationResult,
}, $.BER), $.BER); }
    return _cached_encoder_for_Root(value, elGetter);
}


/* eslint-enable */
