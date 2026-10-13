/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Apid
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Apid                     ::=    INTEGER (0 .. 2047)
 * ```
 */
export
type Apid = INTEGER;

let _cached_decoder_for_Apid: $.ASN1Decoder<Apid> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Apid
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Apid (el: _Element): Apid {
    if (!_cached_decoder_for_Apid) { _cached_decoder_for_Apid = $._decodeInteger; }
    return _cached_decoder_for_Apid(el);
}

let _cached_encoder_for_Apid: $.ASN1Encoder<Apid> | null = null;

/**
 * @summary Encodes a(n) Apid into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Apid, encoded as an ASN.1 Element.
 */
export
function _encode_Apid (value: Apid, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Apid) { _cached_encoder_for_Apid = $._encodeInteger; }
    return _cached_encoder_for_Apid(value, elGetter);
}


/* eslint-enable */
