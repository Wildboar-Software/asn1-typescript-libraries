/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DateDefinition, _decode_DateDefinition, _encode_DateDefinition } from "../CSChargingDataTypes/DateDefinition.ta.mjs";
// export { DateDefinition, _decode_DateDefinition, _encode_DateDefinition } from "../CSChargingDataTypes/DateDefinition.ta.mjs";


/**
 * @summary DateDefinitions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DateDefinitions  ::=  SET  OF
 *    DateDefinition
 * ```
 */
export
type DateDefinitions = DateDefinition[]; // SetOfType

let _cached_decoder_for_DateDefinitions: $.ASN1Decoder<DateDefinitions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DateDefinitions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DateDefinitions (el: _Element): DateDefinitions {
    if (!_cached_decoder_for_DateDefinitions) { _cached_decoder_for_DateDefinitions = $._decodeSetOf<DateDefinition>(() => _decode_DateDefinition); }
    return _cached_decoder_for_DateDefinitions(el);
}

let _cached_encoder_for_DateDefinitions: $.ASN1Encoder<DateDefinitions> | null = null;

/**
 * @summary Encodes a(n) DateDefinitions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DateDefinitions, encoded as an ASN.1 Element.
 */
export
function _encode_DateDefinitions (value: DateDefinitions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DateDefinitions) { _cached_encoder_for_DateDefinitions = $._encodeSetOf<DateDefinition>(() => _encode_DateDefinition, $.BER); }
    return _cached_encoder_for_DateDefinitions(value, elGetter);
}


/* eslint-enable */
