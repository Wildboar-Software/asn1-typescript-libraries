/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ArchiveTimeStampChain, _decode_ArchiveTimeStampChain, _encode_ArchiveTimeStampChain } from "../ERS/ArchiveTimeStampChain.ta.mjs";
// export { ArchiveTimeStampChain, _decode_ArchiveTimeStampChain, _encode_ArchiveTimeStampChain } from "../ERS/ArchiveTimeStampChain.ta.mjs";


/**
 * @summary ArchiveTimeStampSequence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ArchiveTimeStampSequence  ::=  SEQUENCE OF ArchiveTimeStampChain
 * ```
 */
export
type ArchiveTimeStampSequence = ArchiveTimeStampChain[]; // SequenceOfType

let _cached_decoder_for_ArchiveTimeStampSequence: $.ASN1Decoder<ArchiveTimeStampSequence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ArchiveTimeStampSequence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ArchiveTimeStampSequence (el: _Element): ArchiveTimeStampSequence {
    if (!_cached_decoder_for_ArchiveTimeStampSequence) { _cached_decoder_for_ArchiveTimeStampSequence = $._decodeSequenceOf<ArchiveTimeStampChain>(() => _decode_ArchiveTimeStampChain); }
    return _cached_decoder_for_ArchiveTimeStampSequence(el);
}

let _cached_encoder_for_ArchiveTimeStampSequence: $.ASN1Encoder<ArchiveTimeStampSequence> | null = null;

/**
 * @summary Encodes a(n) ArchiveTimeStampSequence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArchiveTimeStampSequence, encoded as an ASN.1 Element.
 */
export
function _encode_ArchiveTimeStampSequence (value: ArchiveTimeStampSequence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ArchiveTimeStampSequence) { _cached_encoder_for_ArchiveTimeStampSequence = $._encodeSequenceOf<ArchiveTimeStampChain>(() => _encode_ArchiveTimeStampChain, $.BER); }
    return _cached_encoder_for_ArchiveTimeStampSequence(value, elGetter);
}


/* eslint-enable */
