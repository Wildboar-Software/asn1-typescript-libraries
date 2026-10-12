/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFRegionID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFRegionID  ::=  INTEGER (0..255)
 * ```
 */
export
type AMFRegionID = INTEGER;

let _cached_decoder_for_AMFRegionID: $.ASN1Decoder<AMFRegionID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFRegionID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFRegionID (el: _Element): AMFRegionID {
    if (!_cached_decoder_for_AMFRegionID) { _cached_decoder_for_AMFRegionID = $._decodeInteger; }
    return _cached_decoder_for_AMFRegionID(el);
}

let _cached_encoder_for_AMFRegionID: $.ASN1Encoder<AMFRegionID> | null = null;

/**
 * @summary Encodes a(n) AMFRegionID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFRegionID, encoded as an ASN.1 Element.
 */
export
function _encode_AMFRegionID (value: AMFRegionID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFRegionID) { _cached_encoder_for_AMFRegionID = $._encodeInteger; }
    return _cached_encoder_for_AMFRegionID(value, elGetter);
}


/* eslint-enable */
