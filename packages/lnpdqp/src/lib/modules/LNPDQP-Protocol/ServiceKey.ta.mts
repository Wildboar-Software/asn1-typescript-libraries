/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Digits, _decode_Digits, _encode_Digits } from "../LNPDQP-Protocol/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../LNPDQP-Protocol/Digits.ta.mjs";


/**
 * @summary ServiceKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceKey  ::=  CHOICE { 
 *     digits    [4] Digits 
 * }
 * ```
 */
export
type ServiceKey =
    { digits: Digits } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ServiceKey: $.ASN1Decoder<ServiceKey> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceKey
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceKey (el: _Element): ServiceKey {
    if (!_cached_decoder_for_ServiceKey) { _cached_decoder_for_ServiceKey = $._decode_inextensible_choice<ServiceKey>({
    "CONTEXT 4": [ "digits", $._decode_implicit<Digits>(() => _decode_Digits) ]
}); }
    return _cached_decoder_for_ServiceKey(el);
}

let _cached_encoder_for_ServiceKey: $.ASN1Encoder<ServiceKey> | null = null;

/**
 * @summary Encodes a(n) ServiceKey into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceKey, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceKey (value: ServiceKey, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceKey) { _cached_encoder_for_ServiceKey = $._encode_choice<ServiceKey>({
    "digits": $._encode_implicit(_TagClass.context, 4, () => _encode_Digits, $.BER),
}, $.BER); }
    return _cached_encoder_for_ServiceKey(value, elGetter);
}


/* eslint-enable */
