/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DNAI, _decode_DNAI, _encode_DNAI } from "../TS33128Payloads/DNAI.ta.mjs";
// export { DNAI, _decode_DNAI, _encode_DNAI } from "../TS33128Payloads/DNAI.ta.mjs";


/**
 * @summary DNAIs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNAIs  ::=  SET OF DNAI
 * ```
 */
export
type DNAIs = DNAI[]; // SetOfType

let _cached_decoder_for_DNAIs: $.ASN1Decoder<DNAIs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DNAIs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DNAIs (el: _Element): DNAIs {
    if (!_cached_decoder_for_DNAIs) { _cached_decoder_for_DNAIs = $._decodeSetOf<DNAI>(() => _decode_DNAI); }
    return _cached_decoder_for_DNAIs(el);
}

let _cached_encoder_for_DNAIs: $.ASN1Encoder<DNAIs> | null = null;

/**
 * @summary Encodes a(n) DNAIs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DNAIs, encoded as an ASN.1 Element.
 */
export
function _encode_DNAIs (value: DNAIs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DNAIs) { _cached_encoder_for_DNAIs = $._encodeSetOf<DNAI>(() => _encode_DNAI, $.BER); }
    return _cached_encoder_for_DNAIs(value, elGetter);
}


/* eslint-enable */
