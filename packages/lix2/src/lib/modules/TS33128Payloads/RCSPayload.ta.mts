/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EncapsulatedRCSPayload, _decode_EncapsulatedRCSPayload, _encode_EncapsulatedRCSPayload } from "../TS33128Payloads/EncapsulatedRCSPayload.ta.mjs";
// export { EncapsulatedRCSPayload, _decode_EncapsulatedRCSPayload, _encode_EncapsulatedRCSPayload } from "../TS33128Payloads/EncapsulatedRCSPayload.ta.mjs";
import { ModifiedRCSPayload, _decode_ModifiedRCSPayload, _encode_ModifiedRCSPayload } from "../TS33128Payloads/ModifiedRCSPayload.ta.mjs";
// export { ModifiedRCSPayload, _decode_ModifiedRCSPayload, _encode_ModifiedRCSPayload } from "../TS33128Payloads/ModifiedRCSPayload.ta.mjs";


/**
 * @summary RCSPayload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSPayload  ::=  CHOICE
 * {
 *     fullPayload     [1] EncapsulatedRCSPayload,
 *     modifiedPayload [2] ModifiedRCSPayload
 * }
 * ```
 */
export
type RCSPayload =
    { fullPayload: EncapsulatedRCSPayload } /* CHOICE_ALT_ROOT */
    | { modifiedPayload: ModifiedRCSPayload } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RCSPayload: $.ASN1Decoder<RCSPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSPayload (el: _Element): RCSPayload {
    if (!_cached_decoder_for_RCSPayload) { _cached_decoder_for_RCSPayload = $._decode_inextensible_choice<RCSPayload>({
    "CONTEXT 1": [ "fullPayload", $._decode_explicit<EncapsulatedRCSPayload>(() => _decode_EncapsulatedRCSPayload) ],
    "CONTEXT 2": [ "modifiedPayload", $._decode_implicit<ModifiedRCSPayload>(() => _decode_ModifiedRCSPayload) ]
}); }
    return _cached_decoder_for_RCSPayload(el);
}

let _cached_encoder_for_RCSPayload: $.ASN1Encoder<RCSPayload> | null = null;

/**
 * @summary Encodes a(n) RCSPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSPayload, encoded as an ASN.1 Element.
 */
export
function _encode_RCSPayload (value: RCSPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSPayload) { _cached_encoder_for_RCSPayload = $._encode_choice<RCSPayload>({
    "fullPayload": $._encode_explicit(_TagClass.context, 1, () => _encode_EncapsulatedRCSPayload, $.BER),
    "modifiedPayload": $._encode_implicit(_TagClass.context, 2, () => _encode_ModifiedRCSPayload, $.BER),
}, $.BER); }
    return _cached_encoder_for_RCSPayload(value, elGetter);
}


/* eslint-enable */
