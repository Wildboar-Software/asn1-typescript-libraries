/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";


/**
 * @summary ModulationIndex
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModulationIndex                ::=    IntPosShort
 * ```
 */
export
type ModulationIndex = IntPosShort; // DefinedType

let _cached_decoder_for_ModulationIndex: $.ASN1Decoder<ModulationIndex> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModulationIndex
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModulationIndex (el: _Element): ModulationIndex {
    if (!_cached_decoder_for_ModulationIndex) { _cached_decoder_for_ModulationIndex = _decode_IntPosShort; }
    return _cached_decoder_for_ModulationIndex(el);
}

let _cached_encoder_for_ModulationIndex: $.ASN1Encoder<ModulationIndex> | null = null;

/**
 * @summary Encodes a(n) ModulationIndex into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModulationIndex, encoded as an ASN.1 Element.
 */
export
function _encode_ModulationIndex (value: ModulationIndex, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModulationIndex) { _cached_encoder_for_ModulationIndex = _encode_IntPosShort; }
    return _cached_encoder_for_ModulationIndex(value, elGetter);
}


/* eslint-enable */
