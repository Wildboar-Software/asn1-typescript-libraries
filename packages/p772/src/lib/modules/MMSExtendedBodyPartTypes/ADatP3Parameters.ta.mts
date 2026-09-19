/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ADatP3Parameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ADatP3Parameters  ::=  INTEGER
 * ```
 */
export
type ADatP3Parameters = INTEGER;

let _cached_decoder_for_ADatP3Parameters: $.ASN1Decoder<ADatP3Parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ADatP3Parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ADatP3Parameters (el: _Element): ADatP3Parameters {
    if (!_cached_decoder_for_ADatP3Parameters) { _cached_decoder_for_ADatP3Parameters = $._decodeInteger; }
    return _cached_decoder_for_ADatP3Parameters(el);
}

let _cached_encoder_for_ADatP3Parameters: $.ASN1Encoder<ADatP3Parameters> | null = null;

/**
 * @summary Encodes a(n) ADatP3Parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ADatP3Parameters, encoded as an ASN.1 Element.
 */
export
function _encode_ADatP3Parameters (value: ADatP3Parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ADatP3Parameters) { _cached_encoder_for_ADatP3Parameters = $._encodeInteger; }
    return _cached_encoder_for_ADatP3Parameters(value, elGetter);
}


/* eslint-enable */
