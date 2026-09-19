/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RANTargetToSourceContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANTargetToSourceContainer  ::=  OCTET STRING
 * ```
 */
export
type RANTargetToSourceContainer = OCTET_STRING; // OctetStringType

let _cached_decoder_for_RANTargetToSourceContainer: $.ASN1Decoder<RANTargetToSourceContainer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RANTargetToSourceContainer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RANTargetToSourceContainer (el: _Element): RANTargetToSourceContainer {
    if (!_cached_decoder_for_RANTargetToSourceContainer) { _cached_decoder_for_RANTargetToSourceContainer = $._decodeOctetString; }
    return _cached_decoder_for_RANTargetToSourceContainer(el);
}

let _cached_encoder_for_RANTargetToSourceContainer: $.ASN1Encoder<RANTargetToSourceContainer> | null = null;

/**
 * @summary Encodes a(n) RANTargetToSourceContainer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RANTargetToSourceContainer, encoded as an ASN.1 Element.
 */
export
function _encode_RANTargetToSourceContainer (value: RANTargetToSourceContainer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RANTargetToSourceContainer) { _cached_encoder_for_RANTargetToSourceContainer = $._encodeOctetString; }
    return _cached_encoder_for_RANTargetToSourceContainer(value, elGetter);
}


/* eslint-enable */
