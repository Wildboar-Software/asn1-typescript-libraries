/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PFD, _decode_PFD, _encode_PFD } from "../TS33128Payloads/PFD.ta.mjs";
// export { PFD, _decode_PFD, _encode_PFD } from "../TS33128Payloads/PFD.ta.mjs";


/**
 * @summary PFDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PFDs  ::=  SET OF PFD
 * ```
 */
export
type PFDs = PFD[]; // SetOfType

let _cached_decoder_for_PFDs: $.ASN1Decoder<PFDs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PFDs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PFDs (el: _Element): PFDs {
    if (!_cached_decoder_for_PFDs) { _cached_decoder_for_PFDs = $._decodeSetOf<PFD>(() => _decode_PFD); }
    return _cached_decoder_for_PFDs(el);
}

let _cached_encoder_for_PFDs: $.ASN1Encoder<PFDs> | null = null;

/**
 * @summary Encodes a(n) PFDs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PFDs, encoded as an ASN.1 Element.
 */
export
function _encode_PFDs (value: PFDs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PFDs) { _cached_encoder_for_PFDs = $._encodeSetOf<PFD>(() => _encode_PFD, $.BER); }
    return _cached_encoder_for_PFDs(value, elGetter);
}


/* eslint-enable */
