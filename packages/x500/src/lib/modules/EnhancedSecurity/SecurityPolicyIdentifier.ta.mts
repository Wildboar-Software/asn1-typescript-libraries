/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SecurityPolicyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityPolicyIdentifier  ::=  OBJECT IDENTIFIER
 * ```
 */
export type SecurityPolicyIdentifier = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_SecurityPolicyIdentifier: $.ASN1Decoder<SecurityPolicyIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityPolicyIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityPolicyIdentifier} The decoded data structure.
 */
export function _decode_SecurityPolicyIdentifier(el: _Element): SecurityPolicyIdentifier {
    if (!_cached_decoder_for_SecurityPolicyIdentifier) {
        _cached_decoder_for_SecurityPolicyIdentifier =
            $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_SecurityPolicyIdentifier(el);
}

let _cached_encoder_for_SecurityPolicyIdentifier: $.ASN1Encoder<SecurityPolicyIdentifier> | null = null;

/**
 * @summary Encodes a(n) SecurityPolicyIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityPolicyIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_SecurityPolicyIdentifier(
    value: SecurityPolicyIdentifier,
    elGetter: $.ASN1Encoder<SecurityPolicyIdentifier>
): _Element {
    if (!_cached_encoder_for_SecurityPolicyIdentifier) {
        _cached_encoder_for_SecurityPolicyIdentifier =
            $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_SecurityPolicyIdentifier(value, elGetter);
}


/* eslint-enable */
