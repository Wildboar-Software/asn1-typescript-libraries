/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { HASH, _get_decoder_for_HASH, _get_encoder_for_HASH } from "../AuthenticationFramework/HASH.ta.mjs";
// export { HASH, _get_decoder_for_HASH, _get_encoder_for_HASH } from "../AuthenticationFramework/HASH.ta.mjs";
import { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
// export { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";


/**
 * @summary AttribsHash
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttribsHash  ::=  HASH{SEQUENCE SIZE (1..MAX) OF Attribute}
 * ```
 */
export
type AttribsHash = HASH<Attribute[]>; // DefinedType

let _cached_decoder_for_AttribsHash: $.ASN1Decoder<AttribsHash> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttribsHash
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttribsHash (el: _Element): AttribsHash {
    if (!_cached_decoder_for_AttribsHash) { _cached_decoder_for_AttribsHash = _get_decoder_for_HASH<Attribute[]>($._decodeSequenceOf<Attribute>(() => _decode_Attribute)); }
    return _cached_decoder_for_AttribsHash(el);
}

let _cached_encoder_for_AttribsHash: $.ASN1Encoder<AttribsHash> | null = null;

/**
 * @summary Encodes a(n) AttribsHash into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttribsHash, encoded as an ASN.1 Element.
 */
export
function _encode_AttribsHash (value: AttribsHash, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttribsHash) { _cached_encoder_for_AttribsHash = _get_encoder_for_HASH<Attribute[]>($._encodeSequenceOf<Attribute>(() => _encode_Attribute, $.BER)); }
    return _cached_encoder_for_AttribsHash(value, elGetter);
}


/* eslint-enable */
