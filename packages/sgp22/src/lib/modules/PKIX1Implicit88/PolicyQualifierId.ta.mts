/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PolicyQualifierId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PolicyQualifierId  ::= 
 *     OBJECT IDENTIFIER ( id-qt-cps | id-qt-unotice )
 * ```
 */
export
type PolicyQualifierId = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_PolicyQualifierId: $.ASN1Decoder<PolicyQualifierId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PolicyQualifierId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PolicyQualifierId (el: _Element): PolicyQualifierId {
    if (!_cached_decoder_for_PolicyQualifierId) { _cached_decoder_for_PolicyQualifierId = $._decodeObjectIdentifier; }
    return _cached_decoder_for_PolicyQualifierId(el);
}

let _cached_encoder_for_PolicyQualifierId: $.ASN1Encoder<PolicyQualifierId> | null = null;

/**
 * @summary Encodes a(n) PolicyQualifierId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicyQualifierId, encoded as an ASN.1 Element.
 */
export
function _encode_PolicyQualifierId (value: PolicyQualifierId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PolicyQualifierId) { _cached_encoder_for_PolicyQualifierId = $._encodeObjectIdentifier; }
    return _cached_encoder_for_PolicyQualifierId(value, elGetter);
}


/* eslint-enable */
