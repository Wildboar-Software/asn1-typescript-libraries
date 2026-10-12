/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MN, _decode_MN, _encode_MN } from "../MMSInformationObjects/MN.ta.mjs";
// export { MN, _decode_MN, _encode_MN } from "../MMSInformationObjects/MN.ta.mjs";


/**
 * @summary MON
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MON  ::=  MN
 * ```
 */
export
type MON = MN; // DefinedType

let _cached_decoder_for_MON: $.ASN1Decoder<MON> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MON
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MON (el: _Element): MON {
    if (!_cached_decoder_for_MON) { _cached_decoder_for_MON = _decode_MN; }
    return _cached_decoder_for_MON(el);
}

let _cached_encoder_for_MON: $.ASN1Encoder<MON> | null = null;

/**
 * @summary Encodes a(n) MON into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MON, encoded as an ASN.1 Element.
 */
export
function _encode_MON (value: MON, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MON) { _cached_encoder_for_MON = _encode_MN; }
    return _cached_encoder_for_MON(value, elGetter);
}


/* eslint-enable */
