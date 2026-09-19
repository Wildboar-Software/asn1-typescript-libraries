/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";


/**
 * @summary IMPI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMPI  ::=  NAI
 * ```
 */
export
type IMPI = NAI; // DefinedType

let _cached_decoder_for_IMPI: $.ASN1Decoder<IMPI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMPI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMPI (el: _Element): IMPI {
    if (!_cached_decoder_for_IMPI) { _cached_decoder_for_IMPI = _decode_NAI; }
    return _cached_decoder_for_IMPI(el);
}

let _cached_encoder_for_IMPI: $.ASN1Encoder<IMPI> | null = null;

/**
 * @summary Encodes a(n) IMPI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMPI, encoded as an ASN.1 Element.
 */
export
function _encode_IMPI (value: IMPI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMPI) { _cached_encoder_for_IMPI = _encode_NAI; }
    return _cached_encoder_for_IMPI(value, elGetter);
}


/* eslint-enable */
