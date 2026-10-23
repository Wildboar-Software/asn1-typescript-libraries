/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BasicChargingParameters, _decode_BasicChargingParameters, _encode_BasicChargingParameters } from "../IN-CS3-SCF-SCF-datatypes/BasicChargingParameters.ta.mjs";
// export { BasicChargingParameters, _decode_BasicChargingParameters, _encode_BasicChargingParameters } from "../IN-CS3-SCF-SCF-datatypes/BasicChargingParameters.ta.mjs";


/**
 * @summary Rule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Rule  ::=  BasicChargingParameters
 * ```
 */
export
type Rule = BasicChargingParameters; // DefinedType

let _cached_decoder_for_Rule: $.ASN1Decoder<Rule> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Rule
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Rule (el: _Element): Rule {
    if (!_cached_decoder_for_Rule) { _cached_decoder_for_Rule = _decode_BasicChargingParameters; }
    return _cached_decoder_for_Rule(el);
}

let _cached_encoder_for_Rule: $.ASN1Encoder<Rule> | null = null;

/**
 * @summary Encodes a(n) Rule into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Rule, encoded as an ASN.1 Element.
 */
export
function _encode_Rule (value: Rule, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Rule) { _cached_encoder_for_Rule = _encode_BasicChargingParameters; }
    return _cached_encoder_for_Rule(value, elGetter);
}


/* eslint-enable */
