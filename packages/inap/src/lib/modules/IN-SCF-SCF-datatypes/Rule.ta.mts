/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BasicChargingParameters, _decode_BasicChargingParameters, _encode_BasicChargingParameters } from "../IN-SCF-SCF-datatypes/BasicChargingParameters.ta.mjs";
// export { BasicChargingParameters, _decode_BasicChargingParameters, _encode_BasicChargingParameters } from "../IN-SCF-SCF-datatypes/BasicChargingParameters.ta.mjs";


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

/**
 * @summary Decodes an ASN.1 element into a(n) Rule
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Rule: $.ASN1Decoder<Rule> = _decode_BasicChargingParameters;

/**
 * @summary Encodes a(n) Rule into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Rule, encoded as an ASN.1 Element.
 */
export const _encode_Rule: $.ASN1Encoder<Rule> = _encode_BasicChargingParameters;


/* eslint-enable */
