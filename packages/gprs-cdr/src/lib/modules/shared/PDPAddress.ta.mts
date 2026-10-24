/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "./IPAddress.ta.mjs";


/**
 * @summary PDPAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDPAddress  ::=  CHOICE {
 *    iPAddress     [0] IPAddress}
 * ```
 */
export
type PDPAddress =
    { iPAddress: IPAddress } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PDPAddress: $.ASN1Decoder<PDPAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDPAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDPAddress (el: _Element): PDPAddress {
    if (!_cached_decoder_for_PDPAddress) { _cached_decoder_for_PDPAddress = $._decode_inextensible_choice<PDPAddress>({
    "CONTEXT 0": [ "iPAddress", $._decode_explicit<IPAddress>(() => _decode_IPAddress) ]
}); }
    return _cached_decoder_for_PDPAddress(el);
}

let _cached_encoder_for_PDPAddress: $.ASN1Encoder<PDPAddress> | null = null;

/**
 * @summary Encodes a(n) PDPAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDPAddress, encoded as an ASN.1 Element.
 */
export
function _encode_PDPAddress (value: PDPAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDPAddress) { _cached_encoder_for_PDPAddress = $._encode_choice<PDPAddress>({
    "iPAddress": $._encode_explicit(_TagClass.context, 0, () => _encode_IPAddress, $.BER),
}, $.BER); }
    return _cached_encoder_for_PDPAddress(value, elGetter);
}


/* eslint-enable */
