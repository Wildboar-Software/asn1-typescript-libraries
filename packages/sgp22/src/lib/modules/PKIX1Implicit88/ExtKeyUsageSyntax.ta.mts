/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { KeyPurposeId, _decode_KeyPurposeId, _encode_KeyPurposeId } from "../PKIX1Implicit88/KeyPurposeId.ta.mjs";
// export { KeyPurposeId, _decode_KeyPurposeId, _encode_KeyPurposeId } from "../PKIX1Implicit88/KeyPurposeId.ta.mjs";


/**
 * @summary ExtKeyUsageSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtKeyUsageSyntax  ::=  SEQUENCE SIZE (1..MAX) OF KeyPurposeId
 * ```
 */
export
type ExtKeyUsageSyntax = KeyPurposeId[]; // SequenceOfType

let _cached_decoder_for_ExtKeyUsageSyntax: $.ASN1Decoder<ExtKeyUsageSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtKeyUsageSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtKeyUsageSyntax (el: _Element): ExtKeyUsageSyntax {
    if (!_cached_decoder_for_ExtKeyUsageSyntax) { _cached_decoder_for_ExtKeyUsageSyntax = $._decodeSequenceOf<KeyPurposeId>(() => _decode_KeyPurposeId); }
    return _cached_decoder_for_ExtKeyUsageSyntax(el);
}

let _cached_encoder_for_ExtKeyUsageSyntax: $.ASN1Encoder<ExtKeyUsageSyntax> | null = null;

/**
 * @summary Encodes a(n) ExtKeyUsageSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtKeyUsageSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_ExtKeyUsageSyntax (value: ExtKeyUsageSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtKeyUsageSyntax) { _cached_encoder_for_ExtKeyUsageSyntax = $._encodeSequenceOf<KeyPurposeId>(() => _encode_KeyPurposeId, $.BER); }
    return _cached_encoder_for_ExtKeyUsageSyntax(value, elGetter);
}


/* eslint-enable */
