/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    HashPointer,
    _decode_HashPointer,
    _encode_HashPointer,
} from "../CMSProfileAttributes/HashPointer.ta.mjs";

/**
 * @summary ParentBlock
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ParentBlock     ::=  HashPointer
 * ```
 */
export type ParentBlock = HashPointer; // DefinedType


let _cached_decoder_for_ParentBlock: $.ASN1Decoder<ParentBlock> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ParentBlock
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ParentBlock} The decoded data structure.
 */
export function _decode_ParentBlock(el: _Element): ParentBlock {
    if (!_cached_decoder_for_ParentBlock) {
        _cached_decoder_for_ParentBlock = _decode_HashPointer;
    }
    return _cached_decoder_for_ParentBlock(el);
}


let _cached_encoder_for_ParentBlock: $.ASN1Encoder<ParentBlock> | null = null;


/**
 * @summary Encodes a(n) ParentBlock into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParentBlock, encoded as an ASN.1 Element.
 */
export function _encode_ParentBlock(
    value: ParentBlock,
    elGetter: $.ASN1Encoder<ParentBlock>
): _Element {
    if (!_cached_encoder_for_ParentBlock) {
        _cached_encoder_for_ParentBlock = _encode_HashPointer;
    }
    return _cached_encoder_for_ParentBlock(value, elGetter);
}


/* eslint-enable */
