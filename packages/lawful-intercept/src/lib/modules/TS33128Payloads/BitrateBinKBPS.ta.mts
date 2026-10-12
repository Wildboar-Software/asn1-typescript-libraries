/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BitrateBinKBPS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BitrateBinKBPS  ::=  OCTET STRING
 * ```
 */
export
type BitrateBinKBPS = OCTET_STRING; // OctetStringType

let _cached_decoder_for_BitrateBinKBPS: $.ASN1Decoder<BitrateBinKBPS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BitrateBinKBPS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BitrateBinKBPS (el: _Element): BitrateBinKBPS {
    if (!_cached_decoder_for_BitrateBinKBPS) { _cached_decoder_for_BitrateBinKBPS = $._decodeOctetString; }
    return _cached_decoder_for_BitrateBinKBPS(el);
}

let _cached_encoder_for_BitrateBinKBPS: $.ASN1Encoder<BitrateBinKBPS> | null = null;

/**
 * @summary Encodes a(n) BitrateBinKBPS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BitrateBinKBPS, encoded as an ASN.1 Element.
 */
export
function _encode_BitrateBinKBPS (value: BitrateBinKBPS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BitrateBinKBPS) { _cached_encoder_for_BitrateBinKBPS = $._encodeOctetString; }
    return _cached_encoder_for_BitrateBinKBPS(value, elGetter);
}


/* eslint-enable */
