/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSNetworkPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSNetworkPolicy  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type EPSNetworkPolicy = OCTET_STRING; // OctetStringType

let _cached_decoder_for_EPSNetworkPolicy: $.ASN1Decoder<EPSNetworkPolicy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSNetworkPolicy
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSNetworkPolicy (el: _Element): EPSNetworkPolicy {
    if (!_cached_decoder_for_EPSNetworkPolicy) { _cached_decoder_for_EPSNetworkPolicy = $._decodeOctetString; }
    return _cached_decoder_for_EPSNetworkPolicy(el);
}

let _cached_encoder_for_EPSNetworkPolicy: $.ASN1Encoder<EPSNetworkPolicy> | null = null;

/**
 * @summary Encodes a(n) EPSNetworkPolicy into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSNetworkPolicy, encoded as an ASN.1 Element.
 */
export
function _encode_EPSNetworkPolicy (value: EPSNetworkPolicy, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSNetworkPolicy) { _cached_encoder_for_EPSNetworkPolicy = $._encodeOctetString; }
    return _cached_encoder_for_EPSNetworkPolicy(value, elGetter);
}


/* eslint-enable */
