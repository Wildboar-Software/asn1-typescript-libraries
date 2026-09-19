/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KeyPurposeId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyPurposeId  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type KeyPurposeId = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_KeyPurposeId: $.ASN1Decoder<KeyPurposeId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KeyPurposeId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KeyPurposeId (el: _Element): KeyPurposeId {
    if (!_cached_decoder_for_KeyPurposeId) { _cached_decoder_for_KeyPurposeId = $._decodeObjectIdentifier; }
    return _cached_decoder_for_KeyPurposeId(el);
}

let _cached_encoder_for_KeyPurposeId: $.ASN1Encoder<KeyPurposeId> | null = null;

/**
 * @summary Encodes a(n) KeyPurposeId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyPurposeId, encoded as an ASN.1 Element.
 */
export
function _encode_KeyPurposeId (value: KeyPurposeId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KeyPurposeId) { _cached_encoder_for_KeyPurposeId = $._encodeObjectIdentifier; }
    return _cached_encoder_for_KeyPurposeId(value, elGetter);
}


/* eslint-enable */
