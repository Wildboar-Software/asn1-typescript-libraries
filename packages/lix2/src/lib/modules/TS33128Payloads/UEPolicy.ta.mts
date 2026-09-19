/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UEPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UEPolicy  ::=  OCTET STRING (SIZE(16..65540))
 * ```
 */
export
type UEPolicy = OCTET_STRING; // OctetStringType

let _cached_decoder_for_UEPolicy: $.ASN1Decoder<UEPolicy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UEPolicy
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UEPolicy (el: _Element): UEPolicy {
    if (!_cached_decoder_for_UEPolicy) { _cached_decoder_for_UEPolicy = $._decodeOctetString; }
    return _cached_decoder_for_UEPolicy(el);
}

let _cached_encoder_for_UEPolicy: $.ASN1Encoder<UEPolicy> | null = null;

/**
 * @summary Encodes a(n) UEPolicy into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UEPolicy, encoded as an ASN.1 Element.
 */
export
function _encode_UEPolicy (value: UEPolicy, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UEPolicy) { _cached_encoder_for_UEPolicy = $._encodeOctetString; }
    return _cached_encoder_for_UEPolicy(value, elGetter);
}


/* eslint-enable */
