/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";
// export { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";


/**
 * @summary EPSRANCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSRANCause  ::=  ExternalASNType
 * ```
 */
export
type EPSRANCause = ExternalASNType; // DefinedType

let _cached_decoder_for_EPSRANCause: $.ASN1Decoder<EPSRANCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSRANCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSRANCause (el: _Element): EPSRANCause {
    if (!_cached_decoder_for_EPSRANCause) { _cached_decoder_for_EPSRANCause = _decode_ExternalASNType; }
    return _cached_decoder_for_EPSRANCause(el);
}

let _cached_encoder_for_EPSRANCause: $.ASN1Encoder<EPSRANCause> | null = null;

/**
 * @summary Encodes a(n) EPSRANCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSRANCause, encoded as an ASN.1 Element.
 */
export
function _encode_EPSRANCause (value: EPSRANCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSRANCause) { _cached_encoder_for_EPSRANCause = _encode_ExternalASNType; }
    return _cached_encoder_for_EPSRANCause(value, elGetter);
}


/* eslint-enable */
