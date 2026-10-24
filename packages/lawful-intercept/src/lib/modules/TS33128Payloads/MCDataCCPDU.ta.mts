/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EncapsulatedRCSPayload, _decode_EncapsulatedRCSPayload, _encode_EncapsulatedRCSPayload } from "../TS33128Payloads/EncapsulatedRCSPayload.ta.mjs";
// export { EncapsulatedRCSPayload, _decode_EncapsulatedRCSPayload, _encode_EncapsulatedRCSPayload } from "../TS33128Payloads/EncapsulatedRCSPayload.ta.mjs";


/**
 * @summary MCDataCCPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCDataCCPDU  ::=  CHOICE
 * {
 *     encapsulatedMCDataPayload [1] EncapsulatedRCSPayload
 * }
 * ```
 */
export
type MCDataCCPDU =
    { encapsulatedMCDataPayload: EncapsulatedRCSPayload } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_MCDataCCPDU: $.ASN1Decoder<MCDataCCPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCDataCCPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCDataCCPDU (el: _Element): MCDataCCPDU {
    if (!_cached_decoder_for_MCDataCCPDU) { _cached_decoder_for_MCDataCCPDU = $._decode_extensible_choice<MCDataCCPDU>({
    "CONTEXT 1": [ "encapsulatedMCDataPayload", $._decode_explicit<EncapsulatedRCSPayload>(() => _decode_EncapsulatedRCSPayload) ]
}); }
    return _cached_decoder_for_MCDataCCPDU(el);
}

let _cached_encoder_for_MCDataCCPDU: $.ASN1Encoder<MCDataCCPDU> | null = null;

/**
 * @summary Encodes a(n) MCDataCCPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCDataCCPDU, encoded as an ASN.1 Element.
 */
export
function _encode_MCDataCCPDU (value: MCDataCCPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCDataCCPDU) { _cached_encoder_for_MCDataCCPDU = $._encode_choice<MCDataCCPDU>({
    "encapsulatedMCDataPayload": $._encode_explicit(_TagClass.context, 1, () => _encode_EncapsulatedRCSPayload, $.BER),
}, $.BER); }
    return _cached_encoder_for_MCDataCCPDU(value, elGetter);
}


/* eslint-enable */
