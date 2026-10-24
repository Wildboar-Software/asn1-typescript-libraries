/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Address, _decode_Address, _encode_Address } from "../MmsHI2Operations/Address.ta.mjs";
// export { Address, _decode_Address, _encode_Address } from "../MmsHI2Operations/Address.ta.mjs";


/**
 * @summary Addresses
 * @description
 * 
 * One or more MMS addresses, as used for To, CC, and BCC.
 * 
 * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Addresses ::=  SEQUENCE OF Address
 * ```
 */
export
type Addresses = Address[]; // SequenceOfType

let _cached_decoder_for_Addresses: $.ASN1Decoder<Addresses> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Addresses
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Addresses (el: _Element): Addresses {
    if (!_cached_decoder_for_Addresses) { _cached_decoder_for_Addresses = $._decodeSequenceOf<Address>(() => _decode_Address); }
    return _cached_decoder_for_Addresses(el);
}

let _cached_encoder_for_Addresses: $.ASN1Encoder<Addresses> | null = null;

/**
 * @summary Encodes a(n) Addresses into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Addresses, encoded as an ASN.1 Element.
 */
export
function _encode_Addresses (value: Addresses, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Addresses) { _cached_encoder_for_Addresses = $._encodeSequenceOf<Address>(() => _encode_Address, $.BER); }
    return _cached_encoder_for_Addresses(value, elGetter);
}


/* eslint-enable */
