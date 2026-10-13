/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BlockingTimeoutPeriod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BlockingTimeoutPeriod       ::=    INTEGER (100 .. 100000)
 * ```
 */
export
type BlockingTimeoutPeriod = INTEGER;

let _cached_decoder_for_BlockingTimeoutPeriod: $.ASN1Decoder<BlockingTimeoutPeriod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BlockingTimeoutPeriod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BlockingTimeoutPeriod (el: _Element): BlockingTimeoutPeriod {
    if (!_cached_decoder_for_BlockingTimeoutPeriod) { _cached_decoder_for_BlockingTimeoutPeriod = $._decodeInteger; }
    return _cached_decoder_for_BlockingTimeoutPeriod(el);
}

let _cached_encoder_for_BlockingTimeoutPeriod: $.ASN1Encoder<BlockingTimeoutPeriod> | null = null;

/**
 * @summary Encodes a(n) BlockingTimeoutPeriod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BlockingTimeoutPeriod, encoded as an ASN.1 Element.
 */
export
function _encode_BlockingTimeoutPeriod (value: BlockingTimeoutPeriod, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BlockingTimeoutPeriod) { _cached_encoder_for_BlockingTimeoutPeriod = $._encodeInteger; }
    return _cached_encoder_for_BlockingTimeoutPeriod(value, elGetter);
}


/* eslint-enable */
