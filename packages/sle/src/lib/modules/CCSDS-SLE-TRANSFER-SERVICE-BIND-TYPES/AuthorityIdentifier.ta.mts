/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IdentifierString, _decode_IdentifierString, _encode_IdentifierString } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/IdentifierString.ta.mjs";


/**
 * @summary AuthorityIdentifier
 * @description
 * 
 * Identity of an initiator or responder authority. Service management assigns
 * the value and registers the authorized initiator and responder for each
 * service instance. The length is 3 to 16 characters, with no space. Each value
 * has exactly one authentication level and one authentication scheme.
 * 
 * CCSDS 911.1-B-5, sections 3.1.4, 3.2.2.4, and annex A2.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthorityIdentifier     ::=     IdentifierString (SIZE (3 .. 16))
 * ```
 */
export
type AuthorityIdentifier = IdentifierString; // DefinedType

let _cached_decoder_for_AuthorityIdentifier: $.ASN1Decoder<AuthorityIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthorityIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthorityIdentifier (el: _Element): AuthorityIdentifier {
    if (!_cached_decoder_for_AuthorityIdentifier) { _cached_decoder_for_AuthorityIdentifier = _decode_IdentifierString; }
    const _decoded = _cached_decoder_for_AuthorityIdentifier(el);
    if (_decoded.length < 3 || _decoded.length > 16) {
        throw new ASN1SizeError("AuthorityIdentifier violates SIZE (3..16)");
    }
    return _decoded;
}

/**
 * @summary Encodes a(n) AuthorityIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorityIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_AuthorityIdentifier: $.ASN1Encoder<AuthorityIdentifier> = _encode_IdentifierString;


/* eslint-enable */
