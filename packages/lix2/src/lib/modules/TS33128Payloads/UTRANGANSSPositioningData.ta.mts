/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UTRANGANSSPositioningData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UTRANGANSSPositioningData  ::=  OCTET STRING
 * ```
 */
export
type UTRANGANSSPositioningData = OCTET_STRING; // OctetStringType

let _cached_decoder_for_UTRANGANSSPositioningData: $.ASN1Decoder<UTRANGANSSPositioningData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UTRANGANSSPositioningData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UTRANGANSSPositioningData (el: _Element): UTRANGANSSPositioningData {
    if (!_cached_decoder_for_UTRANGANSSPositioningData) { _cached_decoder_for_UTRANGANSSPositioningData = $._decodeOctetString; }
    return _cached_decoder_for_UTRANGANSSPositioningData(el);
}

let _cached_encoder_for_UTRANGANSSPositioningData: $.ASN1Encoder<UTRANGANSSPositioningData> | null = null;

/**
 * @summary Encodes a(n) UTRANGANSSPositioningData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UTRANGANSSPositioningData, encoded as an ASN.1 Element.
 */
export
function _encode_UTRANGANSSPositioningData (value: UTRANGANSSPositioningData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UTRANGANSSPositioningData) { _cached_encoder_for_UTRANGANSSPositioningData = $._encodeOctetString; }
    return _cached_encoder_for_UTRANGANSSPositioningData(value, elGetter);
}


/* eslint-enable */
