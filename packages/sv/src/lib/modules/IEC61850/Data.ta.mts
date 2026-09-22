/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Data
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Data  ::=  OCTET STRING
 * ```
 */
export
type Data = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Data: $.ASN1Decoder<Data> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Data
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Data (el: _Element): Data {
    if (!_cached_decoder_for_Data) { _cached_decoder_for_Data = $._decodeOctetString; }
    return _cached_decoder_for_Data(el);
}

let _cached_encoder_for_Data: $.ASN1Encoder<Data> | null = null;

/**
 * @summary Encodes a(n) Data into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Data, encoded as an ASN.1 Element.
 */
export
function _encode_Data (value: Data, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Data) { _cached_encoder_for_Data = $._encodeOctetString; }
    return _cached_encoder_for_Data(value, elGetter);
}


/* eslint-enable */
