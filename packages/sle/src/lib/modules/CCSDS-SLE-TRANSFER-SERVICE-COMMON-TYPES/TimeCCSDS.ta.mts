/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeCCSDS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeCCSDS                ::=    OCTET STRING (SIZE(8))
 * ```
 */
export
type TimeCCSDS = OCTET_STRING; // OctetStringType

let _cached_decoder_for_TimeCCSDS: $.ASN1Decoder<TimeCCSDS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeCCSDS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimeCCSDS (el: _Element): TimeCCSDS {
    if (!_cached_decoder_for_TimeCCSDS) { _cached_decoder_for_TimeCCSDS = $._decodeOctetString; }
    return _cached_decoder_for_TimeCCSDS(el);
}

let _cached_encoder_for_TimeCCSDS: $.ASN1Encoder<TimeCCSDS> | null = null;

/**
 * @summary Encodes a(n) TimeCCSDS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeCCSDS, encoded as an ASN.1 Element.
 */
export
function _encode_TimeCCSDS (value: TimeCCSDS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimeCCSDS) { _cached_encoder_for_TimeCCSDS = $._encodeOctetString; }
    return _cached_encoder_for_TimeCCSDS(value, elGetter);
}


/* eslint-enable */
