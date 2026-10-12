/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PGWRNSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PGWRNSI  ::=  BOOLEAN
 * ```
 */
export
type PGWRNSI = BOOLEAN; // BooleanType

let _cached_decoder_for_PGWRNSI: $.ASN1Decoder<PGWRNSI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PGWRNSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PGWRNSI (el: _Element): PGWRNSI {
    if (!_cached_decoder_for_PGWRNSI) { _cached_decoder_for_PGWRNSI = $._decodeBoolean; }
    return _cached_decoder_for_PGWRNSI(el);
}

let _cached_encoder_for_PGWRNSI: $.ASN1Encoder<PGWRNSI> | null = null;

/**
 * @summary Encodes a(n) PGWRNSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PGWRNSI, encoded as an ASN.1 Element.
 */
export
function _encode_PGWRNSI (value: PGWRNSI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PGWRNSI) { _cached_encoder_for_PGWRNSI = $._encodeBoolean; }
    return _cached_encoder_for_PGWRNSI(value, elGetter);
}


/* eslint-enable */
