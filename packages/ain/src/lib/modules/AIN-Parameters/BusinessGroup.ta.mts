/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BusinessGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BusinessGroup  ::=  OCTET STRING(SIZE(7))
 * ```
 */
export
type BusinessGroup = OCTET_STRING; // OctetStringType

let _cached_decoder_for_BusinessGroup: $.ASN1Decoder<BusinessGroup> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BusinessGroup
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BusinessGroup (el: _Element): BusinessGroup {
    if (!_cached_decoder_for_BusinessGroup) { _cached_decoder_for_BusinessGroup = $._decodeOctetString; }
    return _cached_decoder_for_BusinessGroup(el);
}

let _cached_encoder_for_BusinessGroup: $.ASN1Encoder<BusinessGroup> | null = null;

/**
 * @summary Encodes a(n) BusinessGroup into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BusinessGroup, encoded as an ASN.1 Element.
 */
export
function _encode_BusinessGroup (value: BusinessGroup, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BusinessGroup) { _cached_encoder_for_BusinessGroup = $._encodeOctetString; }
    return _cached_encoder_for_BusinessGroup(value, elGetter);
}


/* eslint-enable */
