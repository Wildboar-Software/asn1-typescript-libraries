/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RANUES1APID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANUES1APID  ::=  INTEGER (0..16777215)
 * ```
 */
export
type RANUES1APID = INTEGER;

let _cached_decoder_for_RANUES1APID: $.ASN1Decoder<RANUES1APID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RANUES1APID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RANUES1APID (el: _Element): RANUES1APID {
    if (!_cached_decoder_for_RANUES1APID) { _cached_decoder_for_RANUES1APID = $._decodeInteger; }
    return _cached_decoder_for_RANUES1APID(el);
}

let _cached_encoder_for_RANUES1APID: $.ASN1Encoder<RANUES1APID> | null = null;

/**
 * @summary Encodes a(n) RANUES1APID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RANUES1APID, encoded as an ASN.1 Element.
 */
export
function _encode_RANUES1APID (value: RANUES1APID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RANUES1APID) { _cached_encoder_for_RANUES1APID = $._encodeInteger; }
    return _cached_encoder_for_RANUES1APID(value, elGetter);
}


/* eslint-enable */
