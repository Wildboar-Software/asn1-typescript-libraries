/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RelativeDistinguishedName, _decode_RelativeDistinguishedName, _encode_RelativeDistinguishedName } from "../PKIX1Explicit88/RelativeDistinguishedName.ta.mjs";
// export { RelativeDistinguishedName, _decode_RelativeDistinguishedName, _encode_RelativeDistinguishedName } from "../PKIX1Explicit88/RelativeDistinguishedName.ta.mjs";


/**
 * @summary RDNSequence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RDNSequence  ::=  SEQUENCE OF RelativeDistinguishedName
 * ```
 */
export
type RDNSequence = RelativeDistinguishedName[]; // SequenceOfType

let _cached_decoder_for_RDNSequence: $.ASN1Decoder<RDNSequence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RDNSequence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RDNSequence (el: _Element): RDNSequence {
    if (!_cached_decoder_for_RDNSequence) { _cached_decoder_for_RDNSequence = $._decodeSequenceOf<RelativeDistinguishedName>(() => _decode_RelativeDistinguishedName); }
    return _cached_decoder_for_RDNSequence(el);
}

let _cached_encoder_for_RDNSequence: $.ASN1Encoder<RDNSequence> | null = null;

/**
 * @summary Encodes a(n) RDNSequence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RDNSequence, encoded as an ASN.1 Element.
 */
export
function _encode_RDNSequence (value: RDNSequence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RDNSequence) { _cached_encoder_for_RDNSequence = $._encodeSequenceOf<RelativeDistinguishedName>(() => _encode_RelativeDistinguishedName, $.BER); }
    return _cached_encoder_for_RDNSequence(value, elGetter);
}


/* eslint-enable */
