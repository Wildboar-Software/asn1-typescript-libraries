/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CertPolicyId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertPolicyId  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type CertPolicyId = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_CertPolicyId: $.ASN1Decoder<CertPolicyId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertPolicyId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertPolicyId (el: _Element): CertPolicyId {
    if (!_cached_decoder_for_CertPolicyId) { _cached_decoder_for_CertPolicyId = $._decodeObjectIdentifier; }
    return _cached_decoder_for_CertPolicyId(el);
}

let _cached_encoder_for_CertPolicyId: $.ASN1Encoder<CertPolicyId> | null = null;

/**
 * @summary Encodes a(n) CertPolicyId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertPolicyId, encoded as an ASN.1 Element.
 */
export
function _encode_CertPolicyId (value: CertPolicyId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertPolicyId) { _cached_encoder_for_CertPolicyId = $._encodeObjectIdentifier; }
    return _cached_encoder_for_CertPolicyId(value, elGetter);
}


/* eslint-enable */
