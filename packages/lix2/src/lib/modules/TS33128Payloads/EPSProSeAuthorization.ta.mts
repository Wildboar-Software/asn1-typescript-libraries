/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";
// export { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";


/**
 * @summary EPSProSeAuthorization
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSProSeAuthorization  ::=  ExternalASNType
 * ```
 */
export
type EPSProSeAuthorization = ExternalASNType; // DefinedType

let _cached_decoder_for_EPSProSeAuthorization: $.ASN1Decoder<EPSProSeAuthorization> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSProSeAuthorization
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSProSeAuthorization (el: _Element): EPSProSeAuthorization {
    if (!_cached_decoder_for_EPSProSeAuthorization) { _cached_decoder_for_EPSProSeAuthorization = _decode_ExternalASNType; }
    return _cached_decoder_for_EPSProSeAuthorization(el);
}

let _cached_encoder_for_EPSProSeAuthorization: $.ASN1Encoder<EPSProSeAuthorization> | null = null;

/**
 * @summary Encodes a(n) EPSProSeAuthorization into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSProSeAuthorization, encoded as an ASN.1 Element.
 */
export
function _encode_EPSProSeAuthorization (value: EPSProSeAuthorization, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSProSeAuthorization) { _cached_encoder_for_EPSProSeAuthorization = _encode_ExternalASNType; }
    return _cached_encoder_for_EPSProSeAuthorization(value, elGetter);
}


/* eslint-enable */
