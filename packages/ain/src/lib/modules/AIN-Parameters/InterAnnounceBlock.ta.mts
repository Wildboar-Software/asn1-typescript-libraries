/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AnnounceElement, _decode_AnnounceElement, _encode_AnnounceElement } from "../AIN-Parameters/AnnounceElement.ta.mjs";
// export { AnnounceElement, _decode_AnnounceElement, _encode_AnnounceElement } from "../AIN-Parameters/AnnounceElement.ta.mjs";


/**
 * @summary InterAnnounceBlock
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterAnnounceBlock  ::=  SEQUENCE SIZE(1..10) OF AnnounceElement
 * ```
 */
export
type InterAnnounceBlock = AnnounceElement[]; // SequenceOfType

let _cached_decoder_for_InterAnnounceBlock: $.ASN1Decoder<InterAnnounceBlock> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InterAnnounceBlock
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InterAnnounceBlock (el: _Element): InterAnnounceBlock {
    if (!_cached_decoder_for_InterAnnounceBlock) { _cached_decoder_for_InterAnnounceBlock = $._decodeSequenceOf<AnnounceElement>(() => _decode_AnnounceElement); }
    return _cached_decoder_for_InterAnnounceBlock(el);
}

let _cached_encoder_for_InterAnnounceBlock: $.ASN1Encoder<InterAnnounceBlock> | null = null;

/**
 * @summary Encodes a(n) InterAnnounceBlock into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InterAnnounceBlock, encoded as an ASN.1 Element.
 */
export
function _encode_InterAnnounceBlock (value: InterAnnounceBlock, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InterAnnounceBlock) { _cached_encoder_for_InterAnnounceBlock = $._encodeSequenceOf<AnnounceElement>(() => _encode_AnnounceElement, $.BER); }
    return _cached_encoder_for_InterAnnounceBlock(value, elGetter);
}


/* eslint-enable */
