/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HoldInstruction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HoldInstruction  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type HoldInstruction = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_HoldInstruction: $.ASN1Decoder<HoldInstruction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HoldInstruction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HoldInstruction (el: _Element): HoldInstruction {
    if (!_cached_decoder_for_HoldInstruction) { _cached_decoder_for_HoldInstruction = $._decodeObjectIdentifier; }
    return _cached_decoder_for_HoldInstruction(el);
}

let _cached_encoder_for_HoldInstruction: $.ASN1Encoder<HoldInstruction> | null = null;

/**
 * @summary Encodes a(n) HoldInstruction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HoldInstruction, encoded as an ASN.1 Element.
 */
export
function _encode_HoldInstruction (value: HoldInstruction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HoldInstruction) { _cached_encoder_for_HoldInstruction = $._encodeObjectIdentifier; }
    return _cached_encoder_for_HoldInstruction(value, elGetter);
}


/* eslint-enable */
