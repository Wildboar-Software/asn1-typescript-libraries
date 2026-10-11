/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UAProtocolID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UAProtocolID  ::=  OCTET STRING (SIZE(5))
 * ```
 */
export
type UAProtocolID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_UAProtocolID: $.ASN1Decoder<UAProtocolID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UAProtocolID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UAProtocolID (el: _Element): UAProtocolID {
    if (!_cached_decoder_for_UAProtocolID) { _cached_decoder_for_UAProtocolID = $._decodeOctetString; }
    return _cached_decoder_for_UAProtocolID(el);
}

let _cached_encoder_for_UAProtocolID: $.ASN1Encoder<UAProtocolID> | null = null;

/**
 * @summary Encodes a(n) UAProtocolID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UAProtocolID, encoded as an ASN.1 Element.
 */
export
function _encode_UAProtocolID (value: UAProtocolID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UAProtocolID) { _cached_encoder_for_UAProtocolID = $._encodeOctetString; }
    return _cached_encoder_for_UAProtocolID(value, elGetter);
}


/* eslint-enable */
