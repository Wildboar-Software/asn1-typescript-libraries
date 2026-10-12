/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GcseCorrelation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GcseCorrelation  ::=  OCTET STRING
 * ```
 */
export
type GcseCorrelation = OCTET_STRING; // OctetStringType

let _cached_decoder_for_GcseCorrelation: $.ASN1Decoder<GcseCorrelation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GcseCorrelation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GcseCorrelation (el: _Element): GcseCorrelation {
    if (!_cached_decoder_for_GcseCorrelation) { _cached_decoder_for_GcseCorrelation = $._decodeOctetString; }
    return _cached_decoder_for_GcseCorrelation(el);
}

let _cached_encoder_for_GcseCorrelation: $.ASN1Encoder<GcseCorrelation> | null = null;

/**
 * @summary Encodes a(n) GcseCorrelation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GcseCorrelation, encoded as an ASN.1 Element.
 */
export
function _encode_GcseCorrelation (value: GcseCorrelation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GcseCorrelation) { _cached_encoder_for_GcseCorrelation = $._encodeOctetString; }
    return _cached_encoder_for_GcseCorrelation(value, elGetter);
}


/* eslint-enable */
