/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CommunicationsNetwork
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommunicationsNetwork  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type CommunicationsNetwork = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_CommunicationsNetwork: $.ASN1Decoder<CommunicationsNetwork> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommunicationsNetwork
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommunicationsNetwork (el: _Element): CommunicationsNetwork {
    if (!_cached_decoder_for_CommunicationsNetwork) { _cached_decoder_for_CommunicationsNetwork = $._decodeObjectIdentifier; }
    return _cached_decoder_for_CommunicationsNetwork(el);
}

let _cached_encoder_for_CommunicationsNetwork: $.ASN1Encoder<CommunicationsNetwork> | null = null;

/**
 * @summary Encodes a(n) CommunicationsNetwork into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommunicationsNetwork, encoded as an ASN.1 Element.
 */
export
function _encode_CommunicationsNetwork (value: CommunicationsNetwork, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommunicationsNetwork) { _cached_encoder_for_CommunicationsNetwork = $._encodeObjectIdentifier; }
    return _cached_encoder_for_CommunicationsNetwork(value, elGetter);
}


/* eslint-enable */
