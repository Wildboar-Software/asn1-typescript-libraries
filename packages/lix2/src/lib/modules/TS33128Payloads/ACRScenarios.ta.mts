/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ACRScenario, _encode_ACRScenario, ACRScenario } from "../TS33128Payloads/ACRScenario.ta.mjs";


/**
 * @summary ACRScenarios
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACRScenarios  ::=  SET OF ACRScenario
 * ```
 */
export
type ACRScenarios = ACRScenario[]; // SetOfType

let _cached_decoder_for_ACRScenarios: $.ASN1Decoder<ACRScenarios> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACRScenarios
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACRScenarios (el: _Element): ACRScenarios {
    if (!_cached_decoder_for_ACRScenarios) { _cached_decoder_for_ACRScenarios = $._decodeSetOf<ACRScenario>(() => _decode_ACRScenario); }
    return _cached_decoder_for_ACRScenarios(el);
}

let _cached_encoder_for_ACRScenarios: $.ASN1Encoder<ACRScenarios> | null = null;

/**
 * @summary Encodes a(n) ACRScenarios into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACRScenarios, encoded as an ASN.1 Element.
 */
export
function _encode_ACRScenarios (value: ACRScenarios, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACRScenarios) { _cached_encoder_for_ACRScenarios = $._encodeSetOf<ACRScenario>(() => _encode_ACRScenario, $.BER); }
    return _cached_encoder_for_ACRScenarios(value, elGetter);
}


/* eslint-enable */
