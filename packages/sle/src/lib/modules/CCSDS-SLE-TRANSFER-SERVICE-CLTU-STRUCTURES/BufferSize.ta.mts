/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";
// export { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


/**
 * @summary BufferSize
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BufferSize                              ::=    IntUnsignedLong
 * ```
 */
export
type BufferSize = IntUnsignedLong; // DefinedType

let _cached_decoder_for_BufferSize: $.ASN1Decoder<BufferSize> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BufferSize
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BufferSize (el: _Element): BufferSize {
    if (!_cached_decoder_for_BufferSize) { _cached_decoder_for_BufferSize = _decode_IntUnsignedLong; }
    return _cached_decoder_for_BufferSize(el);
}

let _cached_encoder_for_BufferSize: $.ASN1Encoder<BufferSize> | null = null;

/**
 * @summary Encodes a(n) BufferSize into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BufferSize, encoded as an ASN.1 Element.
 */
export
function _encode_BufferSize (value: BufferSize, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BufferSize) { _cached_encoder_for_BufferSize = _encode_IntUnsignedLong; }
    return _cached_encoder_for_BufferSize(value, elGetter);
}


/* eslint-enable */
