/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EncapsulatedRCSPayload, _decode_EncapsulatedRCSPayload, _encode_EncapsulatedRCSPayload } from "../TS33128Payloads/EncapsulatedRCSPayload.ta.mjs";
// export { EncapsulatedRCSPayload, _decode_EncapsulatedRCSPayload, _encode_EncapsulatedRCSPayload } from "../TS33128Payloads/EncapsulatedRCSPayload.ta.mjs";


/**
 * @summary RCSCCPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSCCPDU  ::=  CHOICE
 * {
 *     encapsulatedRCSPayload [1] EncapsulatedRCSPayload
 * }
 * ```
 */
export
type RCSCCPDU =
    { encapsulatedRCSPayload: EncapsulatedRCSPayload } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RCSCCPDU: $.ASN1Decoder<RCSCCPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSCCPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSCCPDU (el: _Element): RCSCCPDU {
    if (!_cached_decoder_for_RCSCCPDU) { _cached_decoder_for_RCSCCPDU = $._decode_inextensible_choice<RCSCCPDU>({
    "CONTEXT 1": [ "encapsulatedRCSPayload", $._decode_explicit<EncapsulatedRCSPayload>(() => _decode_EncapsulatedRCSPayload) ]
}); }
    return _cached_decoder_for_RCSCCPDU(el);
}

let _cached_encoder_for_RCSCCPDU: $.ASN1Encoder<RCSCCPDU> | null = null;

/**
 * @summary Encodes a(n) RCSCCPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSCCPDU, encoded as an ASN.1 Element.
 */
export
function _encode_RCSCCPDU (value: RCSCCPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSCCPDU) { _cached_encoder_for_RCSCCPDU = $._encode_choice<RCSCCPDU>({
    "encapsulatedRCSPayload": $._encode_explicit(_TagClass.context, 1, () => _encode_EncapsulatedRCSPayload, $.BER),
}, $.BER); }
    return _cached_encoder_for_RCSCCPDU(value, elGetter);
}


/* eslint-enable */
