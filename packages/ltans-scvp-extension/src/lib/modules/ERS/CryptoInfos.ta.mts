/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CryptoInfos
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CryptoInfos  ::=  SEQUENCE SIZE (1..MAX) OF Attribute
 *     (WITH COMPONENTS {
 *         ...,
 *         valuesWithContext   ABSENT
 *     })
 * ```
 */
export
type CryptoInfos = Attribute[]; // SequenceOfType

let _cached_decoder_for_CryptoInfos: $.ASN1Decoder<CryptoInfos> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CryptoInfos
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CryptoInfos (el: _Element): CryptoInfos {
    if (!_cached_decoder_for_CryptoInfos) { _cached_decoder_for_CryptoInfos = $._decodeSequenceOf<Attribute>(() => _decode_Attribute); }
    return _cached_decoder_for_CryptoInfos(el);
}

let _cached_encoder_for_CryptoInfos: $.ASN1Encoder<CryptoInfos> | null = null;

/**
 * @summary Encodes a(n) CryptoInfos into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CryptoInfos, encoded as an ASN.1 Element.
 */
export
function _encode_CryptoInfos (value: CryptoInfos, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CryptoInfos) { _cached_encoder_for_CryptoInfos = $._encodeSequenceOf<Attribute>(() => _encode_Attribute, $.BER); }
    return _cached_encoder_for_CryptoInfos(value, elGetter);
}


/* eslint-enable */
