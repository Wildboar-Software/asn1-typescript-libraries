/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { POLICY } from "../AuthenticationFramework/POLICY.oca.mjs";
// export { Policies } from "../AuthenticationFramework/Policies.osa.mjs";


/**
 * @summary HashedPolicyInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HashedPolicyInfo  ::=  POLICY.&Type({Policies})
 * ```
 */
export
type HashedPolicyInfo = _Element; // ObjectClassFieldType

let _cached_decoder_for_HashedPolicyInfo: $.ASN1Decoder<HashedPolicyInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HashedPolicyInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HashedPolicyInfo (el: _Element): HashedPolicyInfo {
    if (!_cached_decoder_for_HashedPolicyInfo) { _cached_decoder_for_HashedPolicyInfo = $._decodeAny; }
    return _cached_decoder_for_HashedPolicyInfo(el);
}

let _cached_encoder_for_HashedPolicyInfo: $.ASN1Encoder<HashedPolicyInfo> | null = null;

/**
 * @summary Encodes a(n) HashedPolicyInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashedPolicyInfo, encoded as an ASN.1 Element.
 */
export
function _encode_HashedPolicyInfo (value: HashedPolicyInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HashedPolicyInfo) { _cached_encoder_for_HashedPolicyInfo = $._encodeAny; }
    return _cached_encoder_for_HashedPolicyInfo(value, elGetter);
}


/* eslint-enable */
