/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DayDefinition, _decode_DayDefinition, _encode_DayDefinition } from "../CSChargingDataTypes/DayDefinition.ta.mjs";


/**
 * @summary DayDefinitions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DayDefinitions  ::=  SET  OF
 *    DayDefinition
 * ```
 */
export
type DayDefinitions = DayDefinition[]; // SetOfType

let _cached_decoder_for_DayDefinitions: $.ASN1Decoder<DayDefinitions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DayDefinitions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DayDefinitions (el: _Element): DayDefinitions {
    if (!_cached_decoder_for_DayDefinitions) { _cached_decoder_for_DayDefinitions = $._decodeSetOf<DayDefinition>(() => _decode_DayDefinition); }
    return _cached_decoder_for_DayDefinitions(el);
}

let _cached_encoder_for_DayDefinitions: $.ASN1Encoder<DayDefinitions> | null = null;

/**
 * @summary Encodes a(n) DayDefinitions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DayDefinitions, encoded as an ASN.1 Element.
 */
export
function _encode_DayDefinitions (value: DayDefinitions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DayDefinitions) { _cached_encoder_for_DayDefinitions = $._encodeSetOf<DayDefinition>(() => _encode_DayDefinition, $.BER); }
    return _cached_encoder_for_DayDefinitions(value, elGetter);
}


/* eslint-enable */
