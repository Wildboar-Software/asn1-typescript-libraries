/* eslint-disable */
import {
    ASN1Element as _Element,
    EXTERNAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ResourceReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceReport  ::=  EXTERNAL
 * ```
 */
export
type ResourceReport = EXTERNAL; // ExternalType

let _cached_decoder_for_ResourceReport: $.ASN1Decoder<ResourceReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResourceReport (el: _Element): ResourceReport {
    if (!_cached_decoder_for_ResourceReport) { _cached_decoder_for_ResourceReport = $._decodeExternal; }
    return _cached_decoder_for_ResourceReport(el);
}

let _cached_encoder_for_ResourceReport: $.ASN1Encoder<ResourceReport> | null = null;

/**
 * @summary Encodes a(n) ResourceReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceReport, encoded as an ASN.1 Element.
 */
export
function _encode_ResourceReport (value: ResourceReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResourceReport) { _cached_encoder_for_ResourceReport = $._encodeExternal; }
    return _cached_encoder_for_ResourceReport(value, elGetter);
}


/* eslint-enable */
