/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MWIInterrogateResElt, _decode_MWIInterrogateResElt, _encode_MWIInterrogateResElt } from "../MWI-Operations-asn1-97/MWIInterrogateResElt.ta.mjs";
// export { MWIInterrogateResElt, _decode_MWIInterrogateResElt, _encode_MWIInterrogateResElt } from "../MWI-Operations-asn1-97/MWIInterrogateResElt.ta.mjs";


/**
 * @summary MWIInterrogateRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MWIInterrogateRes  ::=  SEQUENCE SIZE(1..10) OF MWIInterrogateResElt
 * ```
 */
export
type MWIInterrogateRes = MWIInterrogateResElt[]; // SequenceOfType

let _cached_decoder_for_MWIInterrogateRes: $.ASN1Decoder<MWIInterrogateRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MWIInterrogateRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MWIInterrogateRes (el: _Element): MWIInterrogateRes {
    if (!_cached_decoder_for_MWIInterrogateRes) { _cached_decoder_for_MWIInterrogateRes = $._decodeSequenceOf<MWIInterrogateResElt>(() => _decode_MWIInterrogateResElt); }
    return _cached_decoder_for_MWIInterrogateRes(el);
}

let _cached_encoder_for_MWIInterrogateRes: $.ASN1Encoder<MWIInterrogateRes> | null = null;

/**
 * @summary Encodes a(n) MWIInterrogateRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MWIInterrogateRes, encoded as an ASN.1 Element.
 */
export
function _encode_MWIInterrogateRes (value: MWIInterrogateRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MWIInterrogateRes) { _cached_encoder_for_MWIInterrogateRes = $._encodeSequenceOf<MWIInterrogateResElt>(() => _encode_MWIInterrogateResElt, $.BER); }
    return _cached_encoder_for_MWIInterrogateRes(value, elGetter);
}


/* eslint-enable */
