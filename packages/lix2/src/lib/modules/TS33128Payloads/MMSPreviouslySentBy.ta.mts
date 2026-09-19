/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSPreviouslySent, _decode_MMSPreviouslySent, _encode_MMSPreviouslySent } from "../TS33128Payloads/MMSPreviouslySent.ta.mjs";
// export { MMSPreviouslySent, _decode_MMSPreviouslySent, _encode_MMSPreviouslySent } from "../TS33128Payloads/MMSPreviouslySent.ta.mjs";


/**
 * @summary MMSPreviouslySentBy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSPreviouslySentBy  ::=  SEQUENCE OF MMSPreviouslySent
 * ```
 */
export
type MMSPreviouslySentBy = MMSPreviouslySent[]; // SequenceOfType

let _cached_decoder_for_MMSPreviouslySentBy: $.ASN1Decoder<MMSPreviouslySentBy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSPreviouslySentBy
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSPreviouslySentBy (el: _Element): MMSPreviouslySentBy {
    if (!_cached_decoder_for_MMSPreviouslySentBy) { _cached_decoder_for_MMSPreviouslySentBy = $._decodeSequenceOf<MMSPreviouslySent>(() => _decode_MMSPreviouslySent); }
    return _cached_decoder_for_MMSPreviouslySentBy(el);
}

let _cached_encoder_for_MMSPreviouslySentBy: $.ASN1Encoder<MMSPreviouslySentBy> | null = null;

/**
 * @summary Encodes a(n) MMSPreviouslySentBy into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSPreviouslySentBy, encoded as an ASN.1 Element.
 */
export
function _encode_MMSPreviouslySentBy (value: MMSPreviouslySentBy, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSPreviouslySentBy) { _cached_encoder_for_MMSPreviouslySentBy = $._encodeSequenceOf<MMSPreviouslySent>(() => _encode_MMSPreviouslySent, $.BER); }
    return _cached_encoder_for_MMSPreviouslySentBy(value, elGetter);
}


/* eslint-enable */
