/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthCtmUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthCtmUser  ::=  OPERATION
 * ```
 */
export
type AuthCtmUser = OPERATION; // DefinedType

let _cached_decoder_for_AuthCtmUser: $.ASN1Decoder<AuthCtmUser> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthCtmUser
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthCtmUser (el: _Element): AuthCtmUser {
    if (!_cached_decoder_for_AuthCtmUser) { _cached_decoder_for_AuthCtmUser = _decode_OPERATION; }
    return _cached_decoder_for_AuthCtmUser(el);
}

let _cached_encoder_for_AuthCtmUser: $.ASN1Encoder<AuthCtmUser> | null = null;

/**
 * @summary Encodes a(n) AuthCtmUser into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthCtmUser, encoded as an ASN.1 Element.
 */
export
function _encode_AuthCtmUser (value: AuthCtmUser, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthCtmUser) { _cached_encoder_for_AuthCtmUser = _encode_OPERATION; }
    return _cached_encoder_for_AuthCtmUser(value, elGetter);
}


/* eslint-enable */
