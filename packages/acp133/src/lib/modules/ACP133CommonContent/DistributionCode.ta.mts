/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DistributionCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DistributionCode  ::=  PrintableString
 * ```
 */
export
type DistributionCode = PrintableString; // PrintableString

let _cached_decoder_for_DistributionCode: $.ASN1Decoder<DistributionCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DistributionCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DistributionCode (el: _Element): DistributionCode {
    if (!_cached_decoder_for_DistributionCode) { _cached_decoder_for_DistributionCode = $._decodePrintableString; }
    return _cached_decoder_for_DistributionCode(el);
}

let _cached_encoder_for_DistributionCode: $.ASN1Encoder<DistributionCode> | null = null;

/**
 * @summary Encodes a(n) DistributionCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistributionCode, encoded as an ASN.1 Element.
 */
export
function _encode_DistributionCode (value: DistributionCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DistributionCode) { _cached_encoder_for_DistributionCode = $._encodePrintableString; }
    return _cached_encoder_for_DistributionCode(value, elGetter);
}


/* eslint-enable */
