/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntPosLong, _decode_IntPosLong, _encode_IntPosLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosLong.ta.mjs";
// export { IntPosLong, _decode_IntPosLong, _encode_IntPosLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosLong.ta.mjs";


/**
 * @summary ModulationFrequency
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModulationFrequency               ::=    IntPosLong
 * ```
 */
export
type ModulationFrequency = IntPosLong; // DefinedType

let _cached_decoder_for_ModulationFrequency: $.ASN1Decoder<ModulationFrequency> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModulationFrequency
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModulationFrequency (el: _Element): ModulationFrequency {
    if (!_cached_decoder_for_ModulationFrequency) { _cached_decoder_for_ModulationFrequency = _decode_IntPosLong; }
    return _cached_decoder_for_ModulationFrequency(el);
}

let _cached_encoder_for_ModulationFrequency: $.ASN1Encoder<ModulationFrequency> | null = null;

/**
 * @summary Encodes a(n) ModulationFrequency into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModulationFrequency, encoded as an ASN.1 Element.
 */
export
function _encode_ModulationFrequency (value: ModulationFrequency, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModulationFrequency) { _cached_encoder_for_ModulationFrequency = _encode_IntPosLong; }
    return _cached_encoder_for_ModulationFrequency(value, elGetter);
}


/* eslint-enable */
