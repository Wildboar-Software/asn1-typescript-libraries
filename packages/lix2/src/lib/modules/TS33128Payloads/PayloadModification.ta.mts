/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PredefinedPayloadModification, _decode_PredefinedPayloadModification, _encode_PredefinedPayloadModification } from "../TS33128Payloads/PredefinedPayloadModification.ta.mjs";
import { PayloadModificationDescription, _decode_PayloadModificationDescription, _encode_PayloadModificationDescription } from "../TS33128Payloads/PayloadModificationDescription.ta.mjs";


/**
 * @summary PayloadModification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PayloadModification  ::=  CHOICE
 * {
 *     predefinedModification [1] PredefinedPayloadModification,
 *     describedModification  [2] PayloadModificationDescription
 * }
 * ```
 */
export
type PayloadModification =
    { predefinedModification: PredefinedPayloadModification } /* CHOICE_ALT_ROOT */
    | { describedModification: PayloadModificationDescription } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PayloadModification: $.ASN1Decoder<PayloadModification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PayloadModification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PayloadModification (el: _Element): PayloadModification {
    if (!_cached_decoder_for_PayloadModification) { _cached_decoder_for_PayloadModification = $._decode_inextensible_choice<PayloadModification>({
    "CONTEXT 1": [ "predefinedModification", $._decode_implicit<PredefinedPayloadModification>(() => _decode_PredefinedPayloadModification) ],
    "CONTEXT 2": [ "describedModification", $._decode_implicit<PayloadModificationDescription>(() => _decode_PayloadModificationDescription) ]
}); }
    return _cached_decoder_for_PayloadModification(el);
}

let _cached_encoder_for_PayloadModification: $.ASN1Encoder<PayloadModification> | null = null;

/**
 * @summary Encodes a(n) PayloadModification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PayloadModification, encoded as an ASN.1 Element.
 */
export
function _encode_PayloadModification (value: PayloadModification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PayloadModification) { _cached_encoder_for_PayloadModification = $._encode_choice<PayloadModification>({
    "predefinedModification": $._encode_implicit(_TagClass.context, 1, () => _encode_PredefinedPayloadModification, $.BER),
    "describedModification": $._encode_implicit(_TagClass.context, 2, () => _encode_PayloadModificationDescription, $.BER),
}, $.BER); }
    return _cached_encoder_for_PayloadModification(value, elGetter);
}


/* eslint-enable */
