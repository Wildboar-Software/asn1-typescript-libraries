/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RANSourceToTargetContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANSourceToTargetContainer  ::=  OCTET STRING
 * ```
 */
export
type RANSourceToTargetContainer = OCTET_STRING; // OctetStringType

let _cached_decoder_for_RANSourceToTargetContainer: $.ASN1Decoder<RANSourceToTargetContainer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RANSourceToTargetContainer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RANSourceToTargetContainer (el: _Element): RANSourceToTargetContainer {
    if (!_cached_decoder_for_RANSourceToTargetContainer) { _cached_decoder_for_RANSourceToTargetContainer = $._decodeOctetString; }
    return _cached_decoder_for_RANSourceToTargetContainer(el);
}

let _cached_encoder_for_RANSourceToTargetContainer: $.ASN1Encoder<RANSourceToTargetContainer> | null = null;

/**
 * @summary Encodes a(n) RANSourceToTargetContainer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RANSourceToTargetContainer, encoded as an ASN.1 Element.
 */
export
function _encode_RANSourceToTargetContainer (value: RANSourceToTargetContainer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RANSourceToTargetContainer) { _cached_encoder_for_RANSourceToTargetContainer = $._encodeOctetString; }
    return _cached_encoder_for_RANSourceToTargetContainer(value, elGetter);
}


/* eslint-enable */
