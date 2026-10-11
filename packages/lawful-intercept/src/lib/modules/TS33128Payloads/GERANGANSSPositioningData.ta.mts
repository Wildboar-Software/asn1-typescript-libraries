/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GERANGANSSPositioningData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GERANGANSSPositioningData  ::=  OCTET STRING
 * ```
 */
export
type GERANGANSSPositioningData = OCTET_STRING; // OctetStringType

let _cached_decoder_for_GERANGANSSPositioningData: $.ASN1Decoder<GERANGANSSPositioningData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GERANGANSSPositioningData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GERANGANSSPositioningData (el: _Element): GERANGANSSPositioningData {
    if (!_cached_decoder_for_GERANGANSSPositioningData) { _cached_decoder_for_GERANGANSSPositioningData = $._decodeOctetString; }
    return _cached_decoder_for_GERANGANSSPositioningData(el);
}

let _cached_encoder_for_GERANGANSSPositioningData: $.ASN1Encoder<GERANGANSSPositioningData> | null = null;

/**
 * @summary Encodes a(n) GERANGANSSPositioningData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GERANGANSSPositioningData, encoded as an ASN.1 Element.
 */
export
function _encode_GERANGANSSPositioningData (value: GERANGANSSPositioningData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GERANGANSSPositioningData) { _cached_encoder_for_GERANGANSSPositioningData = $._encodeOctetString; }
    return _cached_encoder_for_GERANGANSSPositioningData(value, elGetter);
}


/* eslint-enable */
