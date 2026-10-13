/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMEISV, _decode_IMEISV, _encode_IMEISV } from "../Common-Parameters/IMEISV.ta.mjs";
// export { IMEISV, _decode_IMEISV, _encode_IMEISV } from "../Common-Parameters/IMEISV.ta.mjs";


/**
 * @summary PEIIMEISV
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PEIIMEISV  ::=  IMEISV
 * ```
 */
export
type PEIIMEISV = IMEISV; // DefinedType

let _cached_decoder_for_PEIIMEISV: $.ASN1Decoder<PEIIMEISV> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PEIIMEISV
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PEIIMEISV (el: _Element): PEIIMEISV {
    if (!_cached_decoder_for_PEIIMEISV) { _cached_decoder_for_PEIIMEISV = _decode_IMEISV; }
    return _cached_decoder_for_PEIIMEISV(el);
}

let _cached_encoder_for_PEIIMEISV: $.ASN1Encoder<PEIIMEISV> | null = null;

/**
 * @summary Encodes a(n) PEIIMEISV into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PEIIMEISV, encoded as an ASN.1 Element.
 */
export
function _encode_PEIIMEISV (value: PEIIMEISV, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PEIIMEISV) { _cached_encoder_for_PEIIMEISV = _encode_IMEISV; }
    return _cached_encoder_for_PEIIMEISV(value, elGetter);
}


/* eslint-enable */
