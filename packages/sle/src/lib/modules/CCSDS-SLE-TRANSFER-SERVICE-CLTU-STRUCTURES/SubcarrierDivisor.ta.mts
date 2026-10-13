/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";
// export { IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";


/**
 * @summary SubcarrierDivisor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubcarrierDivisor              ::=    IntPosShort
 * ```
 */
export
type SubcarrierDivisor = IntPosShort; // DefinedType

let _cached_decoder_for_SubcarrierDivisor: $.ASN1Decoder<SubcarrierDivisor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubcarrierDivisor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubcarrierDivisor (el: _Element): SubcarrierDivisor {
    if (!_cached_decoder_for_SubcarrierDivisor) { _cached_decoder_for_SubcarrierDivisor = _decode_IntPosShort; }
    return _cached_decoder_for_SubcarrierDivisor(el);
}

let _cached_encoder_for_SubcarrierDivisor: $.ASN1Encoder<SubcarrierDivisor> | null = null;

/**
 * @summary Encodes a(n) SubcarrierDivisor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubcarrierDivisor, encoded as an ASN.1 Element.
 */
export
function _encode_SubcarrierDivisor (value: SubcarrierDivisor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubcarrierDivisor) { _cached_encoder_for_SubcarrierDivisor = _encode_IntPosShort; }
    return _cached_encoder_for_SubcarrierDivisor(value, elGetter);
}


/* eslint-enable */
