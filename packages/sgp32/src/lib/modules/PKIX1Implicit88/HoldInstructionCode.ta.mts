/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HoldInstructionCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HoldInstructionCode  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type HoldInstructionCode = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_HoldInstructionCode: $.ASN1Decoder<HoldInstructionCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HoldInstructionCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HoldInstructionCode (el: _Element): HoldInstructionCode {
    if (!_cached_decoder_for_HoldInstructionCode) { _cached_decoder_for_HoldInstructionCode = $._decodeObjectIdentifier; }
    return _cached_decoder_for_HoldInstructionCode(el);
}

let _cached_encoder_for_HoldInstructionCode: $.ASN1Encoder<HoldInstructionCode> | null = null;

/**
 * @summary Encodes a(n) HoldInstructionCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HoldInstructionCode, encoded as an ASN.1 Element.
 */
export
function _encode_HoldInstructionCode (value: HoldInstructionCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HoldInstructionCode) { _cached_encoder_for_HoldInstructionCode = $._encodeObjectIdentifier; }
    return _cached_encoder_for_HoldInstructionCode(value, elGetter);
}


/* eslint-enable */
