/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AARQ_apdu, _decode_AARQ_apdu, _encode_AARQ_apdu } from "../DialoguePDUs/AARQ-apdu.ta.mjs";
// export { AARQ_apdu, _decode_AARQ_apdu, _encode_AARQ_apdu } from "../DialoguePDUs/AARQ-apdu.ta.mjs";
import { AARE_apdu, _decode_AARE_apdu, _encode_AARE_apdu } from "../DialoguePDUs/AARE-apdu.ta.mjs";
// export { AARE_apdu, _decode_AARE_apdu, _encode_AARE_apdu } from "../DialoguePDUs/AARE-apdu.ta.mjs";
import { ABRT_apdu, _decode_ABRT_apdu, _encode_ABRT_apdu } from "../DialoguePDUs/ABRT-apdu.ta.mjs";
// export { ABRT_apdu, _decode_ABRT_apdu, _encode_ABRT_apdu } from "../DialoguePDUs/ABRT-apdu.ta.mjs";


/**
 * @summary DialoguePDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DialoguePDU  ::=  CHOICE {
 *   dialogueRequest   AARQ-apdu,
 *   dialogueResponse  AARE-apdu,
 *   dialogueAbort     ABRT-apdu
 * }
 * ```
 */
export
type DialoguePDU =
    { dialogueRequest: AARQ_apdu } /* CHOICE_ALT_ROOT */
    | { dialogueResponse: AARE_apdu } /* CHOICE_ALT_ROOT */
    | { dialogueAbort: ABRT_apdu } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DialoguePDU: $.ASN1Decoder<DialoguePDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DialoguePDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DialoguePDU (el: _Element): DialoguePDU {
    if (!_cached_decoder_for_DialoguePDU) { _cached_decoder_for_DialoguePDU = $._decode_inextensible_choice<DialoguePDU>({
    "APPLICATION 0": [ "dialogueRequest", _decode_AARQ_apdu ],
    "APPLICATION 1": [ "dialogueResponse", _decode_AARE_apdu ],
    "APPLICATION 4": [ "dialogueAbort", _decode_ABRT_apdu ]
}); }
    return _cached_decoder_for_DialoguePDU(el);
}

let _cached_encoder_for_DialoguePDU: $.ASN1Encoder<DialoguePDU> | null = null;

/**
 * @summary Encodes a(n) DialoguePDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DialoguePDU, encoded as an ASN.1 Element.
 */
export
function _encode_DialoguePDU (value: DialoguePDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DialoguePDU) { _cached_encoder_for_DialoguePDU = $._encode_choice<DialoguePDU>({
    "dialogueRequest": $._encode_implicit(_TagClass.application, 0, () => _encode_AARQ_apdu, $.BER),
    "dialogueResponse": $._encode_implicit(_TagClass.application, 1, () => _encode_AARE_apdu, $.BER),
    "dialogueAbort": $._encode_implicit(_TagClass.application, 4, () => _encode_ABRT_apdu, $.BER),
}, $.BER); }
    return _cached_encoder_for_DialoguePDU(value, elGetter);
}


/* eslint-enable */
