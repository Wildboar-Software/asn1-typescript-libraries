/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LpaMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LpaMode  ::=  INTEGER
 * ```
 */
export
type LpaMode = INTEGER;

let _cached_decoder_for_LpaMode: $.ASN1Decoder<LpaMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LpaMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LpaMode (el: _Element): LpaMode {
    if (!_cached_decoder_for_LpaMode) { _cached_decoder_for_LpaMode = $._decodeInteger; }
    return _cached_decoder_for_LpaMode(el);
}

let _cached_encoder_for_LpaMode: $.ASN1Encoder<LpaMode> | null = null;

/**
 * @summary Encodes a(n) LpaMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LpaMode, encoded as an ASN.1 Element.
 */
export
function _encode_LpaMode (value: LpaMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LpaMode) { _cached_encoder_for_LpaMode = $._encodeInteger; }
    return _cached_encoder_for_LpaMode(value, elGetter);
}


/* eslint-enable */
