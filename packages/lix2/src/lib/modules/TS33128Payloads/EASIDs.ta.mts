/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EASID, _decode_EASID, _encode_EASID } from "../TS33128Payloads/EASID.ta.mjs";
// export { EASID, _decode_EASID, _encode_EASID } from "../TS33128Payloads/EASID.ta.mjs";


/**
 * @summary EASIDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASIDs  ::=  SET OF EASID
 * ```
 */
export
type EASIDs = EASID[]; // SetOfType

let _cached_decoder_for_EASIDs: $.ASN1Decoder<EASIDs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EASIDs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EASIDs (el: _Element): EASIDs {
    if (!_cached_decoder_for_EASIDs) { _cached_decoder_for_EASIDs = $._decodeSetOf<EASID>(() => _decode_EASID); }
    return _cached_decoder_for_EASIDs(el);
}

let _cached_encoder_for_EASIDs: $.ASN1Encoder<EASIDs> | null = null;

/**
 * @summary Encodes a(n) EASIDs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EASIDs, encoded as an ASN.1 Element.
 */
export
function _encode_EASIDs (value: EASIDs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EASIDs) { _cached_encoder_for_EASIDs = $._encodeSetOf<EASID>(() => _encode_EASID, $.BER); }
    return _cached_encoder_for_EASIDs(value, elGetter);
}


/* eslint-enable */
