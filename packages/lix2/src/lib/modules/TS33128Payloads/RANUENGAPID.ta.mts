/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RANUENGAPID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANUENGAPID  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type RANUENGAPID = INTEGER;

let _cached_decoder_for_RANUENGAPID: $.ASN1Decoder<RANUENGAPID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RANUENGAPID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RANUENGAPID (el: _Element): RANUENGAPID {
    if (!_cached_decoder_for_RANUENGAPID) { _cached_decoder_for_RANUENGAPID = $._decodeInteger; }
    return _cached_decoder_for_RANUENGAPID(el);
}

let _cached_encoder_for_RANUENGAPID: $.ASN1Encoder<RANUENGAPID> | null = null;

/**
 * @summary Encodes a(n) RANUENGAPID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RANUENGAPID, encoded as an ASN.1 Element.
 */
export
function _encode_RANUENGAPID (value: RANUENGAPID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RANUENGAPID) { _cached_encoder_for_RANUENGAPID = $._encodeInteger; }
    return _cached_encoder_for_RANUENGAPID(value, elGetter);
}


/* eslint-enable */
