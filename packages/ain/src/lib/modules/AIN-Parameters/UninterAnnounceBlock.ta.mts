/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AnnounceElement, _decode_AnnounceElement, _encode_AnnounceElement } from "../AIN-Parameters/AnnounceElement.ta.mjs";
// export { AnnounceElement, _decode_AnnounceElement, _encode_AnnounceElement } from "../AIN-Parameters/AnnounceElement.ta.mjs";


/**
 * @summary UninterAnnounceBlock
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UninterAnnounceBlock  ::=  SEQUENCE SIZE(1..10) OF AnnounceElement
 * ```
 */
export
type UninterAnnounceBlock = AnnounceElement[]; // SequenceOfType

let _cached_decoder_for_UninterAnnounceBlock: $.ASN1Decoder<UninterAnnounceBlock> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UninterAnnounceBlock
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UninterAnnounceBlock (el: _Element): UninterAnnounceBlock {
    if (!_cached_decoder_for_UninterAnnounceBlock) { _cached_decoder_for_UninterAnnounceBlock = $._decodeSequenceOf<AnnounceElement>(() => _decode_AnnounceElement); }
    return _cached_decoder_for_UninterAnnounceBlock(el);
}

let _cached_encoder_for_UninterAnnounceBlock: $.ASN1Encoder<UninterAnnounceBlock> | null = null;

/**
 * @summary Encodes a(n) UninterAnnounceBlock into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UninterAnnounceBlock, encoded as an ASN.1 Element.
 */
export
function _encode_UninterAnnounceBlock (value: UninterAnnounceBlock, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UninterAnnounceBlock) { _cached_encoder_for_UninterAnnounceBlock = $._encodeSequenceOf<AnnounceElement>(() => _encode_AnnounceElement, $.BER); }
    return _cached_encoder_for_UninterAnnounceBlock(value, elGetter);
}


/* eslint-enable */
