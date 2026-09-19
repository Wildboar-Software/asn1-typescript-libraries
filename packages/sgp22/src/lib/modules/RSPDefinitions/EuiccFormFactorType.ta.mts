/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccFormFactorType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccFormFactorType  ::=  INTEGER
 * ```
 */
export
type EuiccFormFactorType = INTEGER;

let _cached_decoder_for_EuiccFormFactorType: $.ASN1Decoder<EuiccFormFactorType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccFormFactorType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccFormFactorType (el: _Element): EuiccFormFactorType {
    if (!_cached_decoder_for_EuiccFormFactorType) { _cached_decoder_for_EuiccFormFactorType = $._decodeInteger; }
    return _cached_decoder_for_EuiccFormFactorType(el);
}

let _cached_encoder_for_EuiccFormFactorType: $.ASN1Encoder<EuiccFormFactorType> | null = null;

/**
 * @summary Encodes a(n) EuiccFormFactorType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccFormFactorType, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccFormFactorType (value: EuiccFormFactorType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccFormFactorType) { _cached_encoder_for_EuiccFormFactorType = $._encodeInteger; }
    return _cached_encoder_for_EuiccFormFactorType(value, elGetter);
}


/* eslint-enable */
