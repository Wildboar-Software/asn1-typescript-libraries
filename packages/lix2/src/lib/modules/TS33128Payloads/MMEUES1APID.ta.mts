/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMEUES1APID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEUES1APID  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type MMEUES1APID = INTEGER;

let _cached_decoder_for_MMEUES1APID: $.ASN1Decoder<MMEUES1APID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMEUES1APID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMEUES1APID (el: _Element): MMEUES1APID {
    if (!_cached_decoder_for_MMEUES1APID) { _cached_decoder_for_MMEUES1APID = $._decodeInteger; }
    return _cached_decoder_for_MMEUES1APID(el);
}

let _cached_encoder_for_MMEUES1APID: $.ASN1Encoder<MMEUES1APID> | null = null;

/**
 * @summary Encodes a(n) MMEUES1APID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEUES1APID, encoded as an ASN.1 Element.
 */
export
function _encode_MMEUES1APID (value: MMEUES1APID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMEUES1APID) { _cached_encoder_for_MMEUES1APID = $._encodeInteger; }
    return _cached_encoder_for_MMEUES1APID(value, elGetter);
}


/* eslint-enable */
