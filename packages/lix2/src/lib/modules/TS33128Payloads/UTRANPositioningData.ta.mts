/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UTRANPositioningData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UTRANPositioningData  ::=  OCTET STRING
 * ```
 */
export
type UTRANPositioningData = OCTET_STRING; // OctetStringType

let _cached_decoder_for_UTRANPositioningData: $.ASN1Decoder<UTRANPositioningData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UTRANPositioningData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UTRANPositioningData (el: _Element): UTRANPositioningData {
    if (!_cached_decoder_for_UTRANPositioningData) { _cached_decoder_for_UTRANPositioningData = $._decodeOctetString; }
    return _cached_decoder_for_UTRANPositioningData(el);
}

let _cached_encoder_for_UTRANPositioningData: $.ASN1Encoder<UTRANPositioningData> | null = null;

/**
 * @summary Encodes a(n) UTRANPositioningData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UTRANPositioningData, encoded as an ASN.1 Element.
 */
export
function _encode_UTRANPositioningData (value: UTRANPositioningData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UTRANPositioningData) { _cached_encoder_for_UTRANPositioningData = $._encodeOctetString; }
    return _cached_encoder_for_UTRANPositioningData(value, elGetter);
}


/* eslint-enable */
