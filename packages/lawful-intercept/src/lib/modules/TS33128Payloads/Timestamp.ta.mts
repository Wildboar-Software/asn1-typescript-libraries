/* eslint-disable */
import {
    ASN1Element as _Element,
    GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Timestamp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Timestamp  ::=  GeneralizedTime
 * ```
 */
export
type Timestamp = GeneralizedTime; // GeneralizedTime

let _cached_decoder_for_Timestamp: $.ASN1Decoder<Timestamp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Timestamp
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Timestamp (el: _Element): Timestamp {
    if (!_cached_decoder_for_Timestamp) { _cached_decoder_for_Timestamp = $._decodeGeneralizedTime; }
    return _cached_decoder_for_Timestamp(el);
}

let _cached_encoder_for_Timestamp: $.ASN1Encoder<Timestamp> | null = null;

/**
 * @summary Encodes a(n) Timestamp into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Timestamp, encoded as an ASN.1 Element.
 */
export
function _encode_Timestamp (value: Timestamp, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Timestamp) { _cached_encoder_for_Timestamp = $._encodeGeneralizedTime; }
    return _cached_encoder_for_Timestamp(value, elGetter);
}


/* eslint-enable */
