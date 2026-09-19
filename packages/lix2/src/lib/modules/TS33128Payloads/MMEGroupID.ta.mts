/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMEGroupID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEGroupID  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type MMEGroupID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_MMEGroupID: $.ASN1Decoder<MMEGroupID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMEGroupID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMEGroupID (el: _Element): MMEGroupID {
    if (!_cached_decoder_for_MMEGroupID) { _cached_decoder_for_MMEGroupID = $._decodeOctetString; }
    return _cached_decoder_for_MMEGroupID(el);
}

let _cached_encoder_for_MMEGroupID: $.ASN1Encoder<MMEGroupID> | null = null;

/**
 * @summary Encodes a(n) MMEGroupID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEGroupID, encoded as an ASN.1 Element.
 */
export
function _encode_MMEGroupID (value: MMEGroupID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMEGroupID) { _cached_encoder_for_MMEGroupID = $._encodeOctetString; }
    return _cached_encoder_for_MMEGroupID(value, elGetter);
}


/* eslint-enable */
