/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UTRANAdditionalPositioningData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UTRANAdditionalPositioningData  ::=  OCTET STRING
 * ```
 */
export
type UTRANAdditionalPositioningData = OCTET_STRING; // OctetStringType

let _cached_decoder_for_UTRANAdditionalPositioningData: $.ASN1Decoder<UTRANAdditionalPositioningData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UTRANAdditionalPositioningData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UTRANAdditionalPositioningData (el: _Element): UTRANAdditionalPositioningData {
    if (!_cached_decoder_for_UTRANAdditionalPositioningData) { _cached_decoder_for_UTRANAdditionalPositioningData = $._decodeOctetString; }
    return _cached_decoder_for_UTRANAdditionalPositioningData(el);
}

let _cached_encoder_for_UTRANAdditionalPositioningData: $.ASN1Encoder<UTRANAdditionalPositioningData> | null = null;

/**
 * @summary Encodes a(n) UTRANAdditionalPositioningData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UTRANAdditionalPositioningData, encoded as an ASN.1 Element.
 */
export
function _encode_UTRANAdditionalPositioningData (value: UTRANAdditionalPositioningData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UTRANAdditionalPositioningData) { _cached_encoder_for_UTRANAdditionalPositioningData = $._encodeOctetString; }
    return _cached_encoder_for_UTRANAdditionalPositioningData(value, elGetter);
}


/* eslint-enable */
