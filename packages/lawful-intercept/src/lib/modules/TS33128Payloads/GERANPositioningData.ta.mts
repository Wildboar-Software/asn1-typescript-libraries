/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GERANPositioningData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GERANPositioningData  ::=  OCTET STRING
 * ```
 */
export
type GERANPositioningData = OCTET_STRING; // OctetStringType

let _cached_decoder_for_GERANPositioningData: $.ASN1Decoder<GERANPositioningData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GERANPositioningData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GERANPositioningData (el: _Element): GERANPositioningData {
    if (!_cached_decoder_for_GERANPositioningData) { _cached_decoder_for_GERANPositioningData = $._decodeOctetString; }
    return _cached_decoder_for_GERANPositioningData(el);
}

let _cached_encoder_for_GERANPositioningData: $.ASN1Encoder<GERANPositioningData> | null = null;

/**
 * @summary Encodes a(n) GERANPositioningData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GERANPositioningData, encoded as an ASN.1 Element.
 */
export
function _encode_GERANPositioningData (value: GERANPositioningData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GERANPositioningData) { _cached_encoder_for_GERANPositioningData = $._encodeOctetString; }
    return _cached_encoder_for_GERANPositioningData(value, elGetter);
}


/* eslint-enable */
