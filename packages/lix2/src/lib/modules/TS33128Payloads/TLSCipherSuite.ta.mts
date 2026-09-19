/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TLSCipherSuite
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLSCipherSuite  ::=  SEQUENCE (SIZE(2)) OF INTEGER (0..255)
 * ```
 */
export
type TLSCipherSuite = INTEGER[]; // SequenceOfType

let _cached_decoder_for_TLSCipherSuite: $.ASN1Decoder<TLSCipherSuite> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLSCipherSuite
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLSCipherSuite (el: _Element): TLSCipherSuite {
    if (!_cached_decoder_for_TLSCipherSuite) { _cached_decoder_for_TLSCipherSuite = $._decodeSequenceOf<INTEGER>(() => $._decodeInteger); }
    return _cached_decoder_for_TLSCipherSuite(el);
}

let _cached_encoder_for_TLSCipherSuite: $.ASN1Encoder<TLSCipherSuite> | null = null;

/**
 * @summary Encodes a(n) TLSCipherSuite into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLSCipherSuite, encoded as an ASN.1 Element.
 */
export
function _encode_TLSCipherSuite (value: TLSCipherSuite, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLSCipherSuite) { _cached_encoder_for_TLSCipherSuite = $._encodeSequenceOf<INTEGER>(() => $._encodeInteger, $.BER); }
    return _cached_encoder_for_TLSCipherSuite(value, elGetter);
}


/* eslint-enable */
