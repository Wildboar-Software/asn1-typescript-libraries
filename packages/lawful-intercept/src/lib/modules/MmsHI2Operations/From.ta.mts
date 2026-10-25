/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type FromAddresses, _decode_FromAddresses, _encode_FromAddresses } from "../MmsHI2Operations/FromAddresses.ta.mjs";
// export { FromAddresses, _decode_FromAddresses, _encode_FromAddresses } from "../MmsHI2Operations/FromAddresses.ta.mjs";


/**
 * @summary From
 * @description
 * 
 * One or more From addresses of an MM or a read reply, including a token the
 * client sent when the Proxy-Relay replaces that token with an address.
 * 
 * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * From  ::=  SEQUENCE OF FromAddresses
 * ```
 */
export
type From = FromAddresses[]; // SequenceOfType

let _cached_decoder_for_From: $.ASN1Decoder<From> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) From
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_From (el: _Element): From {
    if (!_cached_decoder_for_From) { _cached_decoder_for_From = $._decodeSequenceOf<FromAddresses>(() => _decode_FromAddresses); }
    return _cached_decoder_for_From(el);
}

let _cached_encoder_for_From: $.ASN1Encoder<From> | null = null;

/**
 * @summary Encodes a(n) From into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The From, encoded as an ASN.1 Element.
 */
export
function _encode_From (value: From, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_From) { _cached_encoder_for_From = $._encodeSequenceOf<FromAddresses>(() => _encode_FromAddresses, $.BER); }
    return _cached_encoder_for_From(value, elGetter);
}


/* eslint-enable */
