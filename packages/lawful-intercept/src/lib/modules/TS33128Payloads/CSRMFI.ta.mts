/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CSRMFI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSRMFI  ::=  BOOLEAN
 * ```
 */
export
type CSRMFI = BOOLEAN; // BooleanType

let _cached_decoder_for_CSRMFI: $.ASN1Decoder<CSRMFI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSRMFI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSRMFI (el: _Element): CSRMFI {
    if (!_cached_decoder_for_CSRMFI) { _cached_decoder_for_CSRMFI = $._decodeBoolean; }
    return _cached_decoder_for_CSRMFI(el);
}

let _cached_encoder_for_CSRMFI: $.ASN1Encoder<CSRMFI> | null = null;

/**
 * @summary Encodes a(n) CSRMFI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSRMFI, encoded as an ASN.1 Element.
 */
export
function _encode_CSRMFI (value: CSRMFI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSRMFI) { _cached_encoder_for_CSRMFI = $._encodeBoolean; }
    return _cached_encoder_for_CSRMFI(value, elGetter);
}


/* eslint-enable */
