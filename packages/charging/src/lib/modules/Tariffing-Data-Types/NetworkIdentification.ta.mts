/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NetworkIdentification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkIdentification  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type NetworkIdentification = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_NetworkIdentification: $.ASN1Decoder<NetworkIdentification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkIdentification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkIdentification (el: _Element): NetworkIdentification {
    if (!_cached_decoder_for_NetworkIdentification) { _cached_decoder_for_NetworkIdentification = $._decodeObjectIdentifier; }
    return _cached_decoder_for_NetworkIdentification(el);
}

let _cached_encoder_for_NetworkIdentification: $.ASN1Encoder<NetworkIdentification> | null = null;

/**
 * @summary Encodes a(n) NetworkIdentification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkIdentification, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkIdentification (value: NetworkIdentification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkIdentification) { _cached_encoder_for_NetworkIdentification = $._encodeObjectIdentifier; }
    return _cached_encoder_for_NetworkIdentification(value, elGetter);
}


/* eslint-enable */
