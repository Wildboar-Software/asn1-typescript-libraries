/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OriginatingStationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginatingStationType  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type OriginatingStationType = OCTET_STRING; // OctetStringType

let _cached_decoder_for_OriginatingStationType: $.ASN1Decoder<OriginatingStationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatingStationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OriginatingStationType (el: _Element): OriginatingStationType {
    if (!_cached_decoder_for_OriginatingStationType) { _cached_decoder_for_OriginatingStationType = $._decodeOctetString; }
    return _cached_decoder_for_OriginatingStationType(el);
}

let _cached_encoder_for_OriginatingStationType: $.ASN1Encoder<OriginatingStationType> | null = null;

/**
 * @summary Encodes a(n) OriginatingStationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatingStationType, encoded as an ASN.1 Element.
 */
export
function _encode_OriginatingStationType (value: OriginatingStationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OriginatingStationType) { _cached_encoder_for_OriginatingStationType = $._encodeOctetString; }
    return _cached_encoder_for_OriginatingStationType(value, elGetter);
}


/* eslint-enable */
