/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
import { E164Number, _decode_E164Number, _encode_E164Number } from "../TS33128Payloads/E164Number.ta.mjs";
// export { E164Number, _decode_E164Number, _encode_E164Number } from "../TS33128Payloads/E164Number.ta.mjs";


/**
 * @summary SMSNFAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSNFAddress  ::=  CHOICE
 * {
 *     iPAddress   [1] IPAddress,
 *     e164Number  [2] E164Number
 * }
 * ```
 */
export
type SMSNFAddress =
    { iPAddress: IPAddress } /* CHOICE_ALT_ROOT */
    | { e164Number: E164Number } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SMSNFAddress: $.ASN1Decoder<SMSNFAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMSNFAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMSNFAddress (el: _Element): SMSNFAddress {
    if (!_cached_decoder_for_SMSNFAddress) { _cached_decoder_for_SMSNFAddress = $._decode_inextensible_choice<SMSNFAddress>({
    "CONTEXT 1": [ "iPAddress", $._decode_explicit<IPAddress>(() => _decode_IPAddress) ],
    "CONTEXT 2": [ "e164Number", $._decode_implicit<E164Number>(() => _decode_E164Number) ]
}); }
    return _cached_decoder_for_SMSNFAddress(el);
}

let _cached_encoder_for_SMSNFAddress: $.ASN1Encoder<SMSNFAddress> | null = null;

/**
 * @summary Encodes a(n) SMSNFAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSNFAddress, encoded as an ASN.1 Element.
 */
export
function _encode_SMSNFAddress (value: SMSNFAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMSNFAddress) { _cached_encoder_for_SMSNFAddress = $._encode_choice<SMSNFAddress>({
    "iPAddress": $._encode_explicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER),
    "e164Number": $._encode_implicit(_TagClass.context, 2, () => _encode_E164Number, $.BER),
}, $.BER); }
    return _cached_encoder_for_SMSNFAddress(value, elGetter);
}


/* eslint-enable */
