/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ACID, _decode_ACID, _encode_ACID } from "../TS33128Payloads/ACID.ta.mjs";
// export { ACID, _decode_ACID, _encode_ACID } from "../TS33128Payloads/ACID.ta.mjs";


/**
 * @summary ACIDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACIDs  ::=  SET OF ACID
 * ```
 */
export
type ACIDs = ACID[]; // SetOfType

let _cached_decoder_for_ACIDs: $.ASN1Decoder<ACIDs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACIDs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACIDs (el: _Element): ACIDs {
    if (!_cached_decoder_for_ACIDs) { _cached_decoder_for_ACIDs = $._decodeSetOf<ACID>(() => _decode_ACID); }
    return _cached_decoder_for_ACIDs(el);
}

let _cached_encoder_for_ACIDs: $.ASN1Encoder<ACIDs> | null = null;

/**
 * @summary Encodes a(n) ACIDs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACIDs, encoded as an ASN.1 Element.
 */
export
function _encode_ACIDs (value: ACIDs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACIDs) { _cached_encoder_for_ACIDs = $._encodeSetOf<ACID>(() => _encode_ACID, $.BER); }
    return _cached_encoder_for_ACIDs(value, elGetter);
}


/* eslint-enable */
