/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SleUnbindReturn_result
 * @description
 * 
 * The only alternative is `positive`. The book defines no negative result for
 * UNBIND: the responder reports that the association has been released. If
 * UNBIND arrives outside state 2, the responder PEER-ABORTs. If authentication
 * level `all` fails, the responder ignores the invocation.
 * 
 * CCSDS 911.1-B-5, section 3.3.2.5 and annex A2.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SleUnbindReturn-result ::= CHOICE
 *    { positive          [0]    NULL
 *    }
 * ```
 */
export
type SleUnbindReturn_result =
    { positive: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SleUnbindReturn_result: $.ASN1Decoder<SleUnbindReturn_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SleUnbindReturn_result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SleUnbindReturn_result (el: _Element): SleUnbindReturn_result {
    if (!_cached_decoder_for_SleUnbindReturn_result) { _cached_decoder_for_SleUnbindReturn_result = $._decode_inextensible_choice<SleUnbindReturn_result>({
    "CONTEXT 0": [ "positive", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_SleUnbindReturn_result(el);
}

let _cached_encoder_for_SleUnbindReturn_result: $.ASN1Encoder<SleUnbindReturn_result> | null = null;

/**
 * @summary Encodes a(n) SleUnbindReturn_result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SleUnbindReturn_result, encoded as an ASN.1 Element.
 */
export
function _encode_SleUnbindReturn_result (value: SleUnbindReturn_result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SleUnbindReturn_result) { _cached_encoder_for_SleUnbindReturn_result = $._encode_choice<SleUnbindReturn_result>({
    "positive": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_SleUnbindReturn_result(value, elGetter);
}


/* eslint-enable */
